import { HttpClient } from '@angular/common/http';
import { AlarmObject} from "../../models/alarmObject";
import { Geosensitive } from "../../models/geosensitive";
import { Injectable } from '@angular/core';
import { BackgroundMode} from "@ionic-native/background-mode";
import { NativeAudio } from '@ionic-native/native-audio';
import {Observable} from 'rxjs/Rx';
import { LocalNotifications } from "@ionic-native/local-notifications";
import { Storage } from "@ionic/storage";

@Injectable()
export class AlarmProvider {

    public screenOn:boolean;
    public timer:number;
    private alarms:AlarmObject[] = [];
    public nextAlarmIndex:number;
    public nextAlarmTime:number;


    constructor(public bg: BackgroundMode, public nativeAudio: NativeAudio, public localNotifications: LocalNotifications, private storage:Storage) {
        //alarms = storage alarms;
 
        this.bg.enable();
        console.log('Hello AlarmProvider Provider');
        /*this.timer = 0;
        Observable.interval(1000 * 60).subscribe(x => {
            this.doSomething();
        });*/
    }

    doSomething() {
        if (this.bg.isScreenOff()) {
            if (this.timer < -1) {
                this.timer *= -1;
            }
            this.timer += 1;
            this.screenOn = false;
            this.localNotifications.schedule({
                id: 1,
                title: 'Attention',
                text: 'Your screen has been off for roughly ' + this.timer + ' minutes',
                trigger: {at: new Date(new Date().getTime() + 1 * 1000)},
                data: {mydata: 'My hidden message this is'}
            });
            this.bg.unlock();
        }
        else {
            if (this.timer > -1) {
                this.timer *= -1;
            }
            else {
                this.localNotifications.schedule({
                    id: 1,
                    title: 'Attention',
                    text: 'Evaluating after off: screen was off for roughly ' + this.timer + ' minutes',
                    trigger: {at: new Date(new Date().getTime() + 5 * 1000)},
                    data: {mydata: 'My hidden message this is'}
                });
                this.timer = 0;
            }
            this.screenOn = true;
        }
    }

    /*if ( /*this.alarmType == smart && (this.timer - 7)%90 < 4 && (this.timer - 7) > 0 ) /* && ROUGHLY TIME TO WAKE UP{
      //localNotifications.set;
        // bg.playsound;
    }
    else if (Date.now() > Date.parse(al.alarmTime.toDateString())) {
      //localNotifcations.set;
        // bg.playsound;
    }*/




  enable(al:AlarmObject)
  {
    this.bg.enable();
    this.nativeAudio.preloadComplex('alarmSound',al.soundPath, 1, 1, 1);
    while(Date.now() < Date.parse(al.alarmTime.toDateString()))
    {

    }
    if (Date.now() > Date.parse(al.alarmTime.toDateString()))
    {
      this.nativeAudio.loop('alarmSound');
      this.nativeAudio.stop('alarmSound');
    }
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
      let maxIndex = 0;
      let temp;
      for (let alarm of this.alarms)
      {
          console.log("Current idnex: "+index);
          console.log("Alarm date: "+this.alarms[index].alarmTime)
          let g = new Date(alarm.alarmTime);
          console.log("G time "+g.getTime());
          prevMin = shortTermMin;
          shortTermMin = Math.min(shortTermMin, g.getTime() );
          temp = Math.abs(prevMin - shortTermMin);
          console.log("Change = "+temp);
          temp = temp/(Math.max(1,temp));
          console.log("Mathematics: " + temp);
          maxIndex = Math.max(temp*index, maxIndex);
          console.log(maxIndex);
          index ++;
      }
      this.nextAlarmIndex = maxIndex;
      let g = new Date(this.alarms[maxIndex].alarmTime);
      this.nextAlarmTime = g.getTime();
      console.log('Max index: '+maxIndex);
      for (let x = 1; x <= 2; x++) {
          this.localNotifications.schedule({
              id: x * 1000,
              title: 'Ring ring!',
              text: 'Time to wake up!',
              trigger: {at: new Date(this.nextAlarmTime + x * 2000)},
              data: {mydata: 'My hidden message this is'}
          });
      }
  }

    updateAlarmsTemplate()
    {
        //getLocation

        //Gets index of most recent alarm
        let temp = Date.now()*Date.now(); //Just a big number
        let finalIndex = 0;
        let index = 0;
        for (let alarm of this.alarms)
        {
            //Cycling through to find smallest
            if (alarm.alarmTime.getTime() < temp)
            {
                temp = alarm.alarmTime.getTime();
                finalIndex = index;
            }
            index ++;
        }
        this.nextAlarmIndex = finalIndex;
        //this.localNotifications.cancelAll();

        for (let x = 1; x <= 2; x++)
        this.localNotifications.schedule({
            id: x*1000,
            title: 'Ring ring!',
            text: 'Time to wake up!',
            trigger: {at: new Date(this.alarms[this.nextAlarmIndex].alarmTime.getTime() + x * 2000)},
            data: {mydata: 'My hidden message this is'}
        });
    }





}
