import { HttpClient } from '@angular/common/http';
import { AlarmObject} from "../../models/alarmObject";
import { Geosensitive } from "../../models/geosensitive";
import { Injectable } from '@angular/core';
import { BackgroundMode} from "@ionic-native/background-mode";
import { NativeAudio } from '@ionic-native/native-audio';


@Injectable()
export class AlarmProvider {

  constructor(public back: BackgroundMode, public nativeAudio: NativeAudio) {
    console.log('Hello AlarmProvider Provider');
  }

  enable(al:AlarmObject)
  {
    this.back.enable();
    this.nativeAudio.preloadComplex('alarmSound',al.soundPath, 1, 1, 1);
    while(Date.now() < Date.parse(al.alarmTime.toDateString()))
    {

    }
    if (Date.now() > Date.parse(al.alarmTime.toDateString()))
    {
      this.nativeAudio.loop('alarmSound');
      this.nativeAudio.stop('alarmSound');
    }
  }



}
