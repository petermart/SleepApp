import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackgroundMode} from "@ionic-native/background-mode";
import { SleepTrack } from "../../models/sleepTrack";

/*
  Generated class for the SleepTrackingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SleepTrackingProvider {

    eventSource = [];
    constructor(public http: HttpClient, public back: BackgroundMode, public dataHolder: SleepTrack[], private storage: Storage) {
        console.log('Hello SleepTrackingProvider Provider');
    }
    fetcheEvents()
    {

    }

    addEvent(title: string, start: Date, end: Date) {
        let allday: boolean = false;
        let startTime = start.toISOString();
        let endTime = end.toISOString();
        this.eventSource.push({title: title, startTime: start, endTime: end, allDay: allday});
    }
}
