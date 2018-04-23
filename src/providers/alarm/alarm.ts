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
    private alarms:AlarmObject[];


    constructor(public bg: BackgroundMode, public nativeAudio: NativeAudio, public localNotifications: LocalNotifications, private storage:Storage) {
        //alarms = storage alarms;
 
        this.bg.enable();
        console.log('Hello AlarmProvider Provider');
        this.timer = 0;
        Observable.interval(1000 * 60).subscribe(x => {
            this.doSomething();
        });
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





}
