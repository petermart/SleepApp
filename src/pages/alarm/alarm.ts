import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmProvider} from "../../providers/alarm/alarm";
import {BackgroundMode} from "@ionic-native/background-mode";
import {Observable} from "rxjs/Rx";
import {NativeAudio} from "@ionic-native/native-audio";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {Geosensitive} from "../../models/geosensitive";
import { DatePicker } from '@ionic-native/date-picker';
import { AlarmObject} from "../../models/alarmObject";

@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {

    time;
    display:string = "unset";
    weekdays:boolean[] = [false,false,false,false,false,false,false];
    weekdayString:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    constructor(public navCtrl: NavController, public almProvider:AlarmProvider, private datePicker: DatePicker) {
        //allalarms = storage;
    }

    createAlarm(){
        //if required fields filled in
        if (this.time == null)
            this.time = new Date (Date.now()+60*1000*60*8);
      this.almProvider.addAlarm(this.time, this.weekdays, "hiya", 0,0,0);
      this.navCtrl.pop();
    }

    openPicker()
    {
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(
            date => {
                console.log('Got date: ', date);
                //Show date picker, then get date set.
                if (date.getTime()<Date.now())
                {
                    date = new Date(date.getTime()+86400000);
                    //If the picked date time is less than now, then add 24 hours to it (in milliseconds)
                }
                this.time = date;
                this.display = this.almProvider.getTime(date);
                //Set this time to the date and the display to the date time in format H:MM AM/PM

            },
            err => console.log('Error occurred while getting date: ', err)
        );
    }

    toggleDay(index:number)
    {
        this.weekdays[index] = !this.weekdays[index];
    }



}
