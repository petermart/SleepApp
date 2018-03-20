import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";

/*
  Generated class for the LightProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LightProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LightProvider Provider');
  }

}
