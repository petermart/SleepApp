import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmProvider } from "../../providers/alarm/alarm";
import { Storage } from "@ionic/storage";
import {LocalNotifications} from "@ionic-native/local-notifications";

@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html'
})
export class TrackingPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  remAwake:boolean = true;
  message:string = "";

  constructor(public navCtrl: NavController, private alarmProvider: AlarmProvider, private storage: Storage, private localNotifications: LocalNotifications) {
    this.fetchRem()
  }

    ionViewWillEnter()
    {
        this.fetchRem().then(
            remAwake => {
              this.remAwake = remAwake;
            }
        );
    }

    fetchRem()
    {
        return this.storage.get('remAwake')
            .then(
                (remAwake) => {
                    this.remAwake = remAwake == null ? []: remAwake;
                    return this.remAwake;
                }
            );
    }

    updateSleepTracking()
    {
      this.storage.set('remAwake', this.remAwake);
    }

    startTracking()
    {
        let time = 0;
        this.alarmProvider.getAlarmTime().then((result)=>{
           time = result;
        });
        if (time == 0)
        {
            this.message = "Oops!  You haven't set an alarm yet.  I can't track your sleep."
        }
        else {
            let now = Date.now();
            let distance = time+600000-now;  //Time to sleep at plus 10 minute grace period minus now: target milliseconds to sleep.
            if (this.remAwake)
            {
                //this.alarmProvider.disableAllNotifications();
                let targetTime = 600000; //10 Minutes in milliseconds, average amount of time to fall asleep.
                let iterations = 0;
                while (targetTime+5400000 < distance) //While target time to sleep at plus 1.5 hours (REM Cycle duration) is less than distance of time
                {
                    targetTime += 5400000; //Adds 1 and a half hour to target time.
                }
                for (let x = 1; x <= 60; x++) {
                    this.localNotifications.schedule({
                        id: x * 1000,
                        title: 'Ring ring!',
                        text: 'Time to wake up!',
                        trigger: {at: new Date(Date.now()+targetTime + x * 1000)},
                        data: {mydata: 'My hidden message this is'}
                    });
                }

            }
            let hoursSlept = (distance*1.0)/(3600*1000);

        }
    }



  
}
