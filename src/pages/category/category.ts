import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Import http for requests
import { Http } from '@angular/http';

//Import the Article Object
import { Article } from '../../models/Article';

//Import the Link Object
import {Link} from '../../models/Link';

//Import the RSS Parser
import {RssParse} from '../../api/rssparser';

//Import the news feeds
import {NewsFeed} from '../../api/newsfeeds';

//Import rss database
import {RssDatabase} from '../../database/RssDatabase';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
  providers: [RssDatabase]
})
export class CategoryPage {

  public category:string = "";
  public article_list:Article[] = [];
  public sources:string[] = [];
  public finished_loading:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http, private rss_db: RssDatabase) {

    this.category = navParams.data.category;

    let that = this;

    this.getSources(http, this.category).then (function (sources) {
      that.sources = <string[]>sources;

    }).then(function () {

      console.log(that.sources);

      var num_of_sources:number = that.sources.length;
      var iterator:number = 0;

      that.sources.map(function (source) {
        RssParse.getArticles(source).then (function (data) {
            that.article_list = that.article_list.concat(<Article[]>data);
            that.finished_loading = true;
            iterator++;
        }).then (function () {
          if (iterator == num_of_sources) {
            that.article_list = that.shuffleArticles(that.article_list);

          }
        })
      })

    }).catch (function (error) {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  private getSources(http, category) {

    let that = this;

    if (category == "Custom") {

      var custom_promise = new Promise(function (resolve, reject) {

        that.rss_db.getLinks().then (function (links:Link[]) {

          var flat_links:string[] = [];

          links.map(function (link: Link) {
            flat_links.push(<string>link.link);
          })

          resolve(flat_links);

        }).catch (function (error) {
          reject(error)
        })

      })

      return custom_promise;

    }else {
      return NewsFeed.getCategorySources(http, this.category)
    }

  }


  public shuffleArticles(array:Article[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

}
