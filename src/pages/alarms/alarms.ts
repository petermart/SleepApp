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
  nextAlarmIndex:number;

  constructor(public navCtrl: NavController, public almProvider: AlarmProvider) {

  }
  stopNot()
  {
    this.almProvider.disableAllNotifications();
  }

  ionViewWillEnter()
  {
      this.fetchAlarms();
  }
  fetchAlarms()
  {
      this.almProvider.getAlarms().then(
          (alarms) => this.alarms = alarms
      );
      this.nextAlarmIndex = this.almProvider.nextAlarmIndex;
  }
  goToAlarm(params){
    if (!params) params = {};
    this.navCtrl.push(AlarmPage);
  }
  removeAlarm(index:number)
  {
    this.almProvider.removeAlarm(index);
    this.fetchAlarms();
  }
  updateAlarms()
  {
    this.almProvider.updateAlarms();
    this.fetchAlarms();
  }
  changeAlarmStatus(index:number)
  {
    this.almProvider.enableAlarm(index);
    this.fetchAlarms();
  }
}
