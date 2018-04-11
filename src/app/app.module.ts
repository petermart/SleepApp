import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AlarmsPage } from '../pages/alarms/alarms';
import { SchedulePage } from '../pages/schedule/schedule';
import { TrackingPage } from '../pages/tracking/tracking';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HealthAdvicePage } from '../pages/health-advice/health-advice';
import { SettingsPage } from '../pages/settings/settings';
import { AlarmPage } from '../pages/alarm/alarm';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from "@ionic-native/native-audio";
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

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
    AlarmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    AlarmPage
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
    SqldatabaseProvider
  ]
})
export class AppModule {}