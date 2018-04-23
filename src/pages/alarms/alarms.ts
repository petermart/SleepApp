import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmPage } from '../alarm/alarm';
import { AlarmProvider } from "../../providers/alarm/alarm";
import { AlarmObject } from "../../models/alarmObject";

@Component({
  selector: 'page-alarms',
  templateUrl: 'alarms.html'
})
export class AlarmsPage {

  alarms:AlarmObject[];

  constructor(public navCtrl: NavController, public almProvider: AlarmProvider) {
    almProvider.getAlarms().then(
        (alarms) => this.alarms = alarms
    );
  }

  ionViewWillEnter()
  {
      this.almProvider.getAlarms().then(
          (alarms) => this.alarms = alarms
      );
  }
  goToAlarm(params){
    if (!params) params = {};
    this.navCtrl.push(AlarmPage);
  }
}
