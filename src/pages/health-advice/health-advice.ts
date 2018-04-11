import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage} from "../feed/feed";

@Component({
  selector: 'page-health-advice',
  templateUrl: 'health-advice.html'
})
export class HealthAdvicePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

    public feed() {
        this.navCtrl.push(FeedPage);
    }

}
