import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmProvider } from "../../providers/alarm/alarm";
import { Storage } from "@ionic/storage";
import {LocalNotifications} from "@ionic-native/local-notifications";
import { SleepTrackingProvider } from "../../providers/sleep-tracking/sleep-tracking";

@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html'
})
export class TrackingPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  remAwake:boolean = false;
  message:string = "";

  constructor(public navCtrl: NavController, private alarmProvider: AlarmProvider, private storage: Storage, private localNotifications: LocalNotifications, private track:SleepTrackingProvider) {

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
                    this.remAwake = remAwake == null ? true: remAwake;
                    return this.remAwake;
                }
            );
    }

    updateSleepTracking()
    {
        this.remAwake = !this.remAwake;
        this.storage.set('remAwake', this.remAwake);
    }

    startTracking()
    {
        let time = 0;
        this.alarmProvider.getAlarmTime().then((result)=>{
           time = result;
           console.log(time);
        //Get time from alarm provider from storage
           if (time == 0)
        {
            this.message = "Oops!  You haven't set an alarm yet.  I can't track your sleep."
        }
        //If time = 0 (not fetched or no next alarm time)
        else {
            this.message = "Tracking Sleep";
            let now = Date.now();
            //Set now to current time in milliseconds and set the message to display to tracking sleep.
            let distance = time-now;  //Time to sleep
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
                        //Span notifications to wake up
                        id: x * 1000,
                        title: 'Ring ring!',
                        text: 'Time to wake up!',
                        trigger: {at: new Date(Date.now()+targetTime + x * 1000)},
                        data: {mydata: 'My hidden message this is'}
                    });
                }
                distance = targetTime-600000;
                //Set distance to time - 10 minutes in milliseconds

            }
            let hoursSlept = (distance*1.0)/(3600*1000);
            console.log("hours slept: "+hoursSlept);
            //this.message = this.message + "REM AWAKE: "+ this.remAwake+" Now "+now+" alarmtime "+time+" milliseconds slept: "+distance+" hours slept: "+hoursSlept;
            this.track.addEvent("Slept for "+Math.round(hoursSlept * 100) / 100+" hours.", new Date(now), new Date(now+distance));
            //Add time slept to the sleep tracker schedule.  The this.message is for debugging


        }});
    }




}
