import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AlarmsPage } from '../pages/alarms/alarms';
import { SchedulePage } from '../pages/schedule/schedule';
import { TrackingPage } from '../pages/tracking/tracking';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HealthAdvicePage } from '../pages/health-advice/health-advice';
import { CategoryPage } from '../pages/category/category';

import { SettingsPage } from '../pages/settings/settings';
import { AlarmPage } from '../pages/alarm/alarm';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from "@ionic-native/native-audio";
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { LocalNotifications} from "@ionic-native/local-notifications";
import { DatePicker } from '@ionic-native/date-picker';

//Storage Module
import {IonicStorageModule} from '@ionic/storage';

//Modal Controller
import {FeedAdderModalComponent} from '../components/feed-adder-modal/feed-adder-modal';

import {HttpModule} from '@angular/http';

// For form processing
import { FormsModule }   from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { SleepTrackingProvider } from '../providers/sleep-tracking/sleep-tracking';
import { AlarmProvider } from '../providers/alarm/alarm';
import { LightProvider } from '../providers/light/light';
import { SqldatabaseProvider } from '../providers/sqldatabase/sqldatabase';
import { Http, Request, RequestMethod } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    AlarmsPage,
    SchedulePage,
    TrackingPage,
    TabsControllerPage,
    HealthAdvicePage,
    SettingsPage,
    AlarmPage,
      CategoryPage,
      FeedAdderModalComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      FormsModule,

    IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlarmsPage,
    SchedulePage,
    TrackingPage,
    TabsControllerPage,
    HealthAdvicePage,
    SettingsPage,
    AlarmPage,
      CategoryPage,
      FeedAdderModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettingsProvider,
    BackgroundMode,
    NativeAudio,
    BluetoothSerial,
    SleepTrackingProvider,
    AlarmProvider,
    LightProvider,
    SqldatabaseProvider,
      DatePicker,
      LocalNotifications
  ]
})
export class AppModule {}