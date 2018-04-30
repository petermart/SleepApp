import { Injectable } from '@angular/core';
import { BackgroundMode} from "@ionic-native/background-mode";
import { SleepTrack } from "../../models/sleepTrack";
import { Storage } from "@ionic/storage";


/*
  Generated class for the SleepTrackingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SleepTrackingProvider {

    eventSource = [];
    constructor(public back: BackgroundMode, private storage: Storage) {
        console.log('Hello SleepTrackingProvider Provider');
    }
    ionViewWillEnter()
    {
        this.fetchEvents();
    }

    clearData()
    {
        this.storage.set('eventSource', this.eventSource);
        this.eventSource = [];
    }
    fetchEvents()
    {
        return this.storage.get('eventSource')
            .then(
                (eventSource) => {
                    this.eventSource = eventSource == null ? []: eventSource;
                    return this.eventSource;
                }
            );
    }

    addEvent(title: string, start: Date, end: Date) {
        let allday: boolean = false;
        let startTime = start.toISOString();
        let endTime = end.toISOString();
        this.eventSource.push({title: title, startTime: start, endTime: end, allDay: allday});
        this.storage.set('eventSource', this.eventSource);
        //Set eventSource on storage to array of eventSource, with added latest event.  This is later fetched by the calendar.
    }
}
