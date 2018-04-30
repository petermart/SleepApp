import { Component } from '@angular/core';
import {ModalController, ViewController} from 'ionic-angular';

import {Link} from '../../models/Link';

//Michael's code.  This section actually isn't used in the project.

/**
 * Generated class for the FeedAdderModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'feed-adder-modal',
  templateUrl: 'feed-adder-modal.html'
})
export class FeedAdderModalComponent {

  public rss_link: Link;

  constructor(public viewCtrl: ViewController) {
    this.rss_link = new Link();

    console.log('Hello FeedAdderModalComponent Component');
  }

  submitRSSFeed() {

    this.viewCtrl.dismiss(this.rss_link);

  }

  cancel() {

    this.viewCtrl.dismiss(undefined);

  }

}
