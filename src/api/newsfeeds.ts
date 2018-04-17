import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

export class NewsFeed {

  static getCategories(http:Http) {

    var category_promise = new Promise(function (resolve, reject) {

      var feed_promise = NewsFeed.getFeedData(http);

      feed_promise.then (function (feed_data) {
        var categories:string[] = Object.keys(feed_data);
        resolve(categories);
      }).catch (function (error) {
        reject(error);
      })

    })

    return category_promise;

  }

  static getCategorySources(http:Http, category:string) {

    var sources_promise = new Promise(function (resolve, reject) {
      var feed_promise = NewsFeed.getFeedData(http);

      feed_promise.then (function (feed_data) {

        var sources:string[] = [];
        sources = <string[]> feed_data[category]
        resolve(sources);

      }).catch (function (error) {
        reject (error);
      })

    })

    return sources_promise;

  }

  static getFeedData(http:Http) {
    var url:string = "/assets/data/rss_sources.json";

    return http.get(url)
        .map((res) => {
            return res.json()
        }).toPromise();
  }

}
