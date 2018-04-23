import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmProvider} from "../../providers/alarm/alarm";
import {BackgroundMode} from "@ionic-native/background-mode";
import {Observable} from "rxjs/Rx";
import {NativeAudio} from "@ionic-native/native-audio";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {Geosensitive} from "../../models/geosensitive";

@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {

    aP;

    constructor(public navCtrl: NavController, public almProvider:AlarmProvider) {
        //allalarms = storage;
    }

    createAlarm(){
      this.almProvider.addAlarm(new Date(Date.now()), [false, false, false, false, false, false, false], "hiya", 0,0,0);
      this.navCtrl.pop();
    }



}
