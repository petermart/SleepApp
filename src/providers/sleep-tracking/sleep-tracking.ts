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
  public screenOff:boolean = false;
  public temp:number;

  constructor(public http: HttpClient, public back: BackgroundMode, public dataHolder:SleepTrack[]) {
    console.log('Hello SleepTrackingProvider Provider');
  }

  //Do this for 24 hours.  Do this from three pm till three pm.  Find the max, and return the hours asleep for.
  test()
  {
    this.back.enable();
    this.screenOff = false;
    while(true) //MUST CHANGE PARAMTER TO BE FROM NOON UNTIL NOON
    {
      if (this.screenOff === true) //SCREEN IS CURRENTLY OFF
      {
        if (!this.back.isScreenOff()) //CHECKING IF SCREEN IS ON
        {
          this.screenOff = false;
          //SAVE THIS AS THE INITIAL TIME.
          this.dataHolder.push(new SleepTrack(this.temp, Date.now(), Date.now()-this.temp));
          //OUTPUT (Date.now()-this.temp)/1000; (TIME IN SECONDS THAT SCREEN WAS OFF FOR)
        }
      }
      if (this.screenOff === false) //SCREEN IS CURRENTLY ON
      {
        if (this.back.isScreenOff) //CHECKING IF SCREEN IS OFF
        {
          this.screenOff = true; //SETTING SCREEN OFF TO TRUE
          this.temp = Date.now();
        }
      }
    }
    /*var max = new SleepTrack(0, 0, 0);
    for (let x = 0; x < this.dataHolder.length; x+=1)
    {
      if (this.dataHolder[x].duration > max.duration)
        max = new SleepTrack(this.dataHolder[x].initialTime, this.dataHolder[x].endTime, this.dataHolder[x].duration);
    }*/
  }

}
