import { Component } from '@angular/core';
import { Http, Request, RequestMethod } from "@angular/http";
import { NavController } from 'ionic-angular';
import { InAppBrowser} from "@ionic-native/in-app-browser";
import { SqldatabaseProvider} from "../../providers/sqldatabase/sqldatabase";
import 'rxjs/Rx';

@Component({
    templateUrl: 'feed.html',
})
export class FeedPage {

    public feedList: Array<Object>;

    public constructor(private navCtrl: NavController, private http: Http, private database: SqldatabaseProvider) {
        this.feedList = [];

        let mystrings = ['https://news.google.com/news/rss/search/section/q/diet%20sleep/diet%20sleep?hl=en&gl=US&ned=us'];
        for (let s of mystrings)
        {
            this.database.createSource(s).then((result) => {
                this.feedList.push({id: result, link: s});});
        }

    }

    public ionViewDidEnter() {
        this.feedList = [];
        this.database.getSources().then((results: any) => {
            for(let i = 0; i < results.length; i++) {
                this.load(results[i].link);
            }
        }, (error) => {
            console.log("ERROR: ", error);
        });
    }

    private load(url: string) {
        this.http.get(
            "https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20description%2C%20link%20from%20rss%20where%20url%3D%22" + url + "%22&format=json&diagnostics=true&callback="
    )
            .subscribe((result) => {
                let items = result.query.results.item;
                for(let i = 0; i < items.length; i++) {
                    items[i].description = this.cleanText(items[i].description);
                    items[i].description = items[i].description.substring(0, items[i].description.indexOf("...") + 3);
                }
                this.feedList = this.feedList.concat(items);
            }, (error) => {
                console.log(error);
            });
    }

    private cleanText(text: string) {
        let cleaned = text;
        cleaned = cleaned.replace(/(<([^>]+)>)/ig,"");
        cleaned = cleaned.replace(/&#8217;/gi, "\'");
        cleaned = cleaned.replace(/&#039;/gi, "\'");
        cleaned = cleaned.replace(/\[&#8230;\]/gi, "...");
        return cleaned;
    }

    public open(item: any) {
        //let browser = new InAppBrowser.create(item.link, "_blank");
        //browser.show
        let iab = new InAppBrowser();
        let browser = iab.create(item.link, "_blank");
        browser.show();
    }

    /*public add() {
        this.navCtrl.push(SourcesPage);
    }*/

}