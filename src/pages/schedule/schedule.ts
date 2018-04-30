import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import { AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { SleepTrackingProvider } from "../../providers/sleep-tracking/sleep-tracking";

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  calendar = {
    mode: 'month',
      currentDate: this.selectedDay
  }
  constructor(public navCtrl: NavController, private alrtCtrl: AlertController, private tracker:SleepTrackingProvider) {
      //this.addEvent("OOOH", new Date(Date.now()), new Date(Date.now()));
  }
    clear()
    {
        this.tracker.clearData();
    }
  ionViewDidLoad()
  {
      this.tracker.fetchEvents().then((events) =>{
          this.eventSource = events;
      });
      //Add events from calendar (these are the times slept for from the sleep tracker)
  }

  addEvent(title:string, start:Date, end:Date) {
      let allday: boolean = false;
      let startTime = start.toISOString();
      let endTime = end.toISOString();
      this.eventSource.push({title: title, startTime: start, endTime: end, allDay: allday});
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;

  }
  onTimeSelected(ev)
  {
    this.selectedDay = ev.selectedTime;
  }
  onEventSelected(event)
  {
    let start = moment(event.startTimte).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    let alert = this.alrtCtrl.create({
        title: '' + event.title,
        subTitle: 'From ' + start +' to ' + end,
    })

  }
  
}
