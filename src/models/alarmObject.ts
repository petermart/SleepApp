
import {Geosensitive} from "./geosensitive";

export class AlarmObject {

    public alarmTime:Date;
    public repeatDays:boolean[];
    // Exclude days
    public soundPath:string;
    public geo:Geosensitive;

    constructor(alarmTime:Date, repeatDays:boolean[], soundPath:string, geo:Geosensitive)
    {
        this.alarmTime = alarmTime;
        this.repeatDays = repeatDays;
        this.soundPath = soundPath;
        this.geo = geo;
    }

}
