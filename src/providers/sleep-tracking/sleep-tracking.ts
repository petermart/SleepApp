import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackgroundMode} from "@ionic-native/background-mode";

/*
  Generated class for the SleepTrackingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SleepTrackingProvider {
  public screenOff:boolean = false;
  public temp:number;

  constructor(public http: HttpClient, public back: BackgroundMode) {
    console.log('Hello SleepTrackingProvider Provider');
  }

  test()
  {
    this.back.enable();
    this.screenOff = false;
    while(true)
    {
      if (this.screenOff === true) //SCREEN IS CURRENTLY OFF
      {
        if (!this.back.isScreenOff()) //CHECKING IF SCREEN IS ON
        {
          this.screenOff = false;
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
  }

}
