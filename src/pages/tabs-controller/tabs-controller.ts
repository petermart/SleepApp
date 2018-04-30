import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmsPage } from '../alarms/alarms';
import { SchedulePage } from '../schedule/schedule';
import { TrackingPage } from '../tracking/tracking';
import { HealthAdvicePage } from '../health-advice/health-advice';
import { SettingsPage } from '../settings/settings';
import { AlarmProvider } from "../../providers/alarm/alarm";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AlarmsPage;
  tab2Root: any = SchedulePage;
  tab3Root: any = TrackingPage;
  tab4Root: any = HealthAdvicePage;
  tab5Root: any = SettingsPage;

  nextAlarmTime;
  nextAlarmIndex;
  constructor(public navCtrl: NavController, public localNotifications: LocalNotifications, private almProv:AlarmProvider, private storage:Storage) {

  }

  ionViewWillEnter()
  {
     this.almProv.cancelAlarmNotifications();
     //When the alarm provider is opened (so visible), it will cancel Alarm notifications.
  }

}
