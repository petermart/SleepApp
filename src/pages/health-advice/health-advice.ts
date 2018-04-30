import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Import pages
import { CategoryPage } from '../category/category';

//Import the news feed api
import { NewsFeed } from '../../api/newsfeeds';

//Import data types

import {Link} from '../../models/Link';
import {Article} from '../../models/Article';

//Import HTTP
import { Http } from '@angular/http';

// Modal Stuff
import { ModalController, NavParams } from 'ionic-angular';

//Modals
import {FeedAdderModalComponent} from '../../components/feed-adder-modal/feed-adder-modal';

//RSS Links Database
import {RssDatabase} from '../../database/RssDatabase';

@Component({
    selector: 'page-health-advice',
    templateUrl: 'health-advice.html',
    providers: [RssDatabase]
})
export class HealthAdvicePage {

    public custom_links:Link[] = [];
    constructor(public navCtrl: NavController, private http:Http, public modalCtrl: ModalController, private rss_db:RssDatabase) {

        let that = this;

        NewsFeed.getCategories(http).then (function (categories) {

            that.categories = <string[]>categories;
            console.log(that.categories);


        }).catch(function (error) {
            console.log(error);
        });
        //Get all 'categories' for news feeds

        this.rss_db.getLinks().then (function (rss_links) {
            that.custom_links = <Link[]>rss_links;
        })
        //If custom ones, import those to (there is not.  This is part of Michael's setup)

    }

    public categories:string[] = [];

    categoryClick(category: string) {

        this.navCtrl.push(CategoryPage, {category: category}, {animate: false});


    }

}
