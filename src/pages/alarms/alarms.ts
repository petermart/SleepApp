import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmPage } from '../alarm/alarm';

@Component({
  selector: 'page-alarms',
  templateUrl: 'alarms.html'
})
export class AlarmsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAlarm(params){
    if (!params) params = {};
    this.navCtrl.push(AlarmPage);
  }
}
