import { HttpClient } from '@angular/common/http';
import { AlarmObject} from "../../models/alarmObject";
import { Geosensitive } from "../../models/geosensitive";
import { Injectable } from '@angular/core';
import { BackgroundMode} from "@ionic-native/background-mode";
import { NativeAudio } from '@ionic-native/native-audio';
import { Observable } from 'rxjs/Rx';
import { LocalNotifications } from "@ionic-native/local-notifications";
import { Storage } from "@ionic/storage";
import { Platform } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";

@Injectable()
export class AlarmProvider {

    public screenOn:boolean;
    public timer:number;
    private alarms:AlarmObject[] = [];
    public nextAlarmIndex:number;
    public nextAlarmTime:number;


    constructor(private blue:BluetoothSerial, public bg: BackgroundMode, private plt: Platform, public alertCtrl:AlertController, public nativeAudio: NativeAudio, public localNotifications: LocalNotifications, private storage:Storage) {
        this.bg.enable();
        this.blue.connect('20:17:11:20:75:09');
        //Upon new instance of alarm provider, enable background mode and connect to bluetooth light.
    }

    disableAllNotifications()
    {
        this.localNotifications.clearAll();
        this.localNotifications.cancelAll();
        //Clear all triggered notifications and cancel all schedule notifications
    }


    addAlarm(alarmTime:Date, repeatDays:boolean[], soundPath:string, lat:number, long:number, rad:number) {
        this.alarms.push(new AlarmObject(alarmTime, repeatDays, soundPath, new Geosensitive(lat, long, rad)));
        this.storage.set('alarms', this.alarms);
        console.log(this.alarms.length + ' alarms now.');
        this.updateAlarms();
        //Add new alarm instance to array and push to storage.  Then update.
    }

    getAlarms() {
        return this.storage.get('alarms')
            .then(
                (alarms) => {
                    this.alarms = alarms == null ? []: alarms;
                    console.log(this.alarms.length + ' alarms fetched.');
                    return this.alarms.slice();
                    //Get alarms from storage
                }
            );
    }
    enableAlarm(index:number)
    {
        this.alarms[index].enabled = !this.alarms[index].enabled;
        this.storage.set('alarms', this.alarms);
        this.updateAlarms();
        //Enable alarms, and update them
    }
    removeAlarm(index:number)
    {
        this.alarms.splice(-index, 1);
        this.storage.set('alarms', this.alarms);
        this.updateAlarms();
        //Remove alarms from array and set new array to storage.  Then update alarms
    }
    lightOn()
    {
        if (this.nextAlarmTime <= Date.now())
        {
            this.blue.write('a');
        }
        //Write 'a' to bluetooth module if we hit an alarm.  This should turn the light on
    }
    lightOff()
    {
        this.blue.write('b');
        //Write 'b' to bluetooth module to turn light off.
    }

    getTime(alarmTime:Date)
    {
        return alarmTime.toLocaleString().split(", ")[1].split(":")[0]+":"+alarmTime.toLocaleString().split(", ")[1].split(":")[1]+" "+alarmTime.toLocaleString().split(", ")[1].split(" ")[1];
        //Returns time in format H:MM AM/PM
    }

    updateAlarms()
    {

        let index = 0;
        let shortTermMin = Date.now()*Date.now();
        let prevMin = shortTermMin;
        let maxIndex = -1;
        let temp;
        //Set index to 0, shortTermMin to a big number (since will be updated), maxIndex to -1 (since will be updated if index of nearest alarm is smaller than shortTermMin), and define temp.
        this.disableAllNotifications();
        for (let alarm of this.alarms)
        {
            if (alarm.enabled) {
                console.log("Current idnex: " + index);
                console.log("Alarm date: " + this.alarms[index].alarmTime)
                //Disable notifications, then run through alarms and have each index and alarm time.
                let g = new Date(alarm.alarmTime);
                console.log("G time " + g.getTime());
                prevMin = shortTermMin;
                shortTermMin = Math.min(shortTermMin, g.getTime());
                temp = Math.abs(prevMin - shortTermMin);
                //Define g as alarm's time, prevMin to shortTermMin, and if the new time is less than the last minimum alarm time, set that to the new short term minimum.
                //Then, set temp to the distance between the new minimum and the old minimum
                console.log("Change = " + temp);
                temp = temp / (Math.max(1, temp));
                console.log("Mathematics: " + temp);
                maxIndex = Math.max(temp * index, maxIndex);
                console.log(maxIndex);
                //Set temp equal to 1 if the minimum time is from this iteration, or set to zero if not.  Then, multiply that by index, so the maxIndex refers to the index of the minimum alarm.
            }
            index ++;
        }
        this.nextAlarmIndex = maxIndex;
        //Then, set nextAlarmIndex to maxIndex.  This is the index of the soonest alarm.
        if (maxIndex!= -1)
        {
            let g = new Date(this.alarms[maxIndex].alarmTime);
            this.nextAlarmTime = g.getTime();
            console.log('Max index: '+maxIndex);
            setTimeout(()=>{this.lightOn(), this.nextAlarmTime-Date.now()});
            //If there is a next alarm, set next alarm time to the next index.  Then, set a timeout to turn the light on when the next alarm goes off, granted that the next alarm time is then less than the current time.
            for (let x = 1; x <= 60; x++) {
                this.localNotifications.schedule({
                    id: x * 1000,
                    title: 'Ring ring!',
                    text: 'Time to wake up!',
                    trigger: {at: new Date(this.nextAlarmTime + x * 500)},
                    data: {mydata: 'My hidden message this is'}
                });
                //SPAM A BUNCH OF NOTIFICATIONS TO WAKE YOU UP.
            }
        }
        this.storage.set('nextAlarmTime', this.nextAlarmTime);
        this.storage.set('nextAlarmIndex', this.nextAlarmIndex);
        //Set the next alarm time and next alarm index to storage.
    }

    cancelAlarmNotifications()
    {
        this.getIndex().then( (index) =>
            {
                if (index!=-1)
                {
                    //If there is a next alarm
                    this.getAlarmTime().then((time) =>
                    {
                        if (Date.now() > time)
                        {
                            //If now alarm has passed
                            this.lightOff();
                            this.disableAllNotifications();
                            let i = 0;
                            for (let alarm of this.alarms)
                            {
                                if (alarm.alarmTime.getTime() <= time)
                                {
                                    this.removeAlarm(i);
                                }
                                //Remove alarm if passed and disable all notifications.  Then add one to the index
                                i ++;
                            }
                        }
                    });
                }
            }
        );
    }
    getAlarmTime()
    {
        return this.storage.get('nextAlarmTime')
            .then(
                (nextAlarmTime) => {
                    this.nextAlarmTime = nextAlarmTime == null ? 0: nextAlarmTime;
                    return this.nextAlarmTime;
                    //Return next alarm time from storage
                }
            );
    }
    getIndex()
    {
        return this.storage.get('nextAlarmIndex')
            .then(
                (nextAlarmIndex) => {
                    this.nextAlarmIndex = nextAlarmIndex == null ? -1: nextAlarmIndex;
                    return this.nextAlarmIndex;
                    //Return next alarm index from storage
                }
            );
    }





}



