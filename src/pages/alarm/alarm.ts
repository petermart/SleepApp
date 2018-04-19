import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmProvider} from "../../providers/alarm/alarm";

@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, alm:AlarmProvider) {
  }
  
}
