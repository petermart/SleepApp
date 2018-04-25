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

@Injectable()
export class AlarmProvider {

    public screenOn:boolean;
    public timer:number;
    private alarms:AlarmObject[] = [];
    public nextAlarmIndex:number;
    public nextAlarmTime:number;


    constructor(public bg: BackgroundMode, private plt: Platform, public alertCtrl:AlertController, public nativeAudio: NativeAudio, public localNotifications: LocalNotifications, private storage:Storage) {


        //alarms = storage alarms;

        //this.bg.enable();
        console.log('Hello AlarmProvider Provider');
        /*this.timer = 0;
        Observable.interval(1000 * 60).subscribe(x => {
            this.doSomething();
        });*/
    }

    disableAllNotifications()
    {
        this.localNotifications.clearAll();
        this.localNotifications.cancelAll();
    }


  addAlarm(alarmTime:Date, repeatDays:boolean[], soundPath:string, lat:number, long:number, rad:number) {
      this.alarms.push(new AlarmObject(alarmTime, repeatDays, soundPath, new Geosensitive(lat, long, rad)));
      this.storage.set('alarms', this.alarms);
      console.log('Alarm created');
      console.log(this.alarms.length + ' alarms now.');
      this.updateAlarms();
  }

  getAlarms() {
      return this.storage.get('alarms')
          .then(
              (alarms) => {
                  this.alarms = alarms == null ? []: alarms;
                  console.log(this.alarms.length + ' alarms fetched.');
                  return this.alarms.slice();
              }
          );
  }
  enableAlarm(index:number)
  {
      this.alarms[index].enabled = !this.alarms[index].enabled;
      /*while (this.alarms[index].enabled && Date.now() > this.alarms[index].alarmTime.getTime())
      {
          this.alarms[index].alarmTime = new Date(this.alarms[index].alarmTime.getTime()+86400000);
      }*/
      this.storage.set('alarms', this.alarms);
      this.updateAlarms();
  }
  removeAlarm(index:number)
  {
      this.alarms.splice(-index, 1);
      this.storage.set('alarms', this.alarms);
      this.updateAlarms();
  }

  getTime(alarmTime:Date)
  {
      return alarmTime.toLocaleString().split(", ")[1].split(":")[0]+":"+alarmTime.toLocaleString().split(", ")[1].split(":")[1]+" "+alarmTime.toLocaleString().split(", ")[1].split(" ")[1];
  }

    updateAlarms()
    {

        let index = 0;
        let shortTermMin = Date.now()*Date.now();
        let prevMin = shortTermMin;
        let maxIndex = -1;
        let temp;
        this.disableAllNotifications();
        for (let alarm of this.alarms)
        {
            if (alarm.enabled) {
                console.log("Current idnex: " + index);
                console.log("Alarm date: " + this.alarms[index].alarmTime)
                let g = new Date(alarm.alarmTime);
                console.log("G time " + g.getTime());
                prevMin = shortTermMin;
                shortTermMin = Math.min(shortTermMin, g.getTime());
                temp = Math.abs(prevMin - shortTermMin);
                console.log("Change = " + temp);
                temp = temp / (Math.max(1, temp));
                console.log("Mathematics: " + temp);
                maxIndex = Math.max(temp * index, maxIndex);
                console.log(maxIndex);
            }
            index ++;
        }
        this.nextAlarmIndex = maxIndex;
        if (maxIndex!= -1)
        {
            let g = new Date(this.alarms[maxIndex].alarmTime);
            this.nextAlarmTime = g.getTime();
            console.log('Max index: '+maxIndex);
            for (let x = 1; x <= 60; x++) {
                this.localNotifications.schedule({
                    id: x * 1000,
                    title: 'Ring ring!',
                    text: 'Time to wake up!',
                    trigger: {at: new Date(this.nextAlarmTime + x * 500)},
                    data: {mydata: 'My hidden message this is'}
                });
            }
        }
        this.storage.set('nextAlarmTime', this.nextAlarmTime);
        this.storage.set('nextAlarmIndex', this.nextAlarmIndex);
    }


    //ORIGINALLY IN TABS CONTROLLER
    cancelAlarmNotifications()
    {
        this.getIndex().then( (index) =>
            {
                if (index!=-1)
                {
                    this.getAlarmTime().then((time) =>
                    {
                        if (Date.now() > time)
                        {
                            //TURN OFF LIGHT
                            this.disableAllNotifications();
                            let i = 0;
                            for (let alarm of this.alarms)
                            {
                                if (alarm.alarmTime.getTime() <= time)
                                {
                                    this.removeAlarm(i);
                                }
                                i ++;
                            }
                            //this.alarms[index].alarmTime = new Date(this.alarms[index].alarmTime.getTime()+86400000);
                            //this.updateAlarms()
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
                }
            );
    }





}
