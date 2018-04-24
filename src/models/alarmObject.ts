
import {Geosensitive} from "./geosensitive";

export class AlarmObject {

    public alarmTime:Date;
    public repeatDays:boolean[];
    // Exclude days
    public soundPath:string;
    public geo:Geosensitive;
    public stringTime;
    public enabled:boolean;
    public active:boolean;

    constructor(alarmTime:Date, repeatDays:boolean[], soundPath:string, geo:Geosensitive)
    {
        this.alarmTime = alarmTime;
        this.repeatDays = repeatDays;
        this.soundPath = soundPath;
        this.geo = geo;
        this.stringTime = alarmTime.toLocaleString().split(", ")[1].split(":")[0]+":"+alarmTime.toLocaleString().split(", ")[1].split(":")[1]+" "+alarmTime.toLocaleString().split(", ")[1].split(" ")[1];

        this.enabled = true;
        this.active = false;
    }


}
