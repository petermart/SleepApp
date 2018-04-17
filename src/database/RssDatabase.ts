import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

//Link Model
import {Link} from '../models/Link';

@Injectable()
export class RssDatabase {

  constructor(private storage: Storage) {

  }

  getLinks() {

    let that = this;

    var links_promise = new Promise(function (resolve, reject) {

      that.storage.get('rss_links').then (function (rss_links) {

        if (rss_links == null) {
          resolve([]);
        }

        resolve(rss_links)
      }).catch (function (err) {
        resolve([]);
        console.log(err);
      })

    })

    return links_promise;

  }

  setLinks(links:Link[]) {

    let that = this;

    var links_promise = new Promise(function (resolve, reject) {

      that.storage.set('rss_links', links).then (function (result) {
        resolve(result);
      }).catch (function (error) {
        reject(error);
      })

    })

    return links_promise;

  }

  clearDB() {

    let that = this;

    let empty_links:Link[] = [];

    var links_promise = this.setLinks(empty_links);

    return links_promise;

  }

}
