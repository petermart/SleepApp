import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmProvider } from "../../providers/alarm/alarm";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html'
})
export class TrackingPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  remAwake:boolean = true;

  constructor(public navCtrl: NavController, private alarmProvider: AlarmProvider, private storage: Storage) {
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
      if (this.remAwake)
      {
        //SET ALL ALARMS AND THINGS
      }
      //Get nearest next alarm
        // Count the hours between now and next alarm.
        // Record that in tracking calendar
    }



  
}
