//This was the model for the geosensitive feature, which is not used in this version.  It will check where you are and if you are there, the alarm will go off.  This is for if you only want an alarm to go off when you are home.

export class Geosensitive {

    public latitude:number;
    public longitude:number;
    public radius:number;

    constructor(lat:number, long:number, rad:number)
    {
        this.latitude = lat;
        this.longitude = long;
        this.radius = rad;
    }

}
