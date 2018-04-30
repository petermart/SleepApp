//Import the Article model
import { Article } from "../models/Article";

//Import libs for description formating
import * as cheerio from 'cheerio';

import * as truncate from 'truncate';


//THIS IS MICHAELS CODE

export class RssParse {

  static getFeed(source:string) {

    //This is the endpoint for conversion
    let rss2json = "https://alkonostfeed.glitch.me/feed"

    //This is our api promise
    var promise = new Promise(function (resolve, reject) {
      fetch(rss2json + "?url=" + source).then (function (data) {
        return data.json();
      }).then (function (json) {
        resolve(json);
      }).
      catch (function (error) {
        reject(error)
      })
    })

    return promise;

  }

  static getArticles(source:string) {

    var promise = new Promise(function (resolve, reject) {



      RssParse.getFeed(source).then (function (rss:any) {

        var Articles: Article[] = [];

        console.log(rss);

        Articles = rss.items.map(function (item) {
          return <Article> {
            title: item.title,
            author: item.author,
            content: item.content,
            description: RssParse.formatDescription(<string>item.description, item.title),
            //description: item.description,
            link: item.link,
            logo: rss.meta_info.image
          }
        });

        resolve(Articles);

      }).catch (function (error) {
        reject(error)
      })

    });

    return promise;

  }


  static formatDescription(description:string, title:string) {

    var new_description:string = "";
    var re = /ol;/gi;
    description = description.replace("ol", "ul");
    return description;


  }

}
