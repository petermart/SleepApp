import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppSettingsProvider } from '../../providers/app-settings/app-settings';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {
  // this tells the tabs component which Pages
  public darktheme: boolean;
  public selectedTheme: String;
  constructor(public navCtrl: NavController, public settings:AppSettingsProvider) {
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
      if (this.selectedTheme === "light-theme")
      {
        this.darktheme = false;
      }
      if (this.selectedTheme === "dark-theme")
      {
          this.darktheme = true;
      }
  }

  updateTheme()
  {
    this.darktheme = !this.darktheme;
    console.log(this.darktheme);
    console.log('updating theme');
      if (this.darktheme == true)
      {
        this.settings.setActiveTheme('dark-theme');
      }
      if (this.darktheme == false)
      {
          this.settings.setActiveTheme('light-theme');
      }

   /*if (this.selectedTheme === "light-theme")
    {
        this.settings.setActiveTheme('dark-theme');
    }
    else
    {
      this.settings.setActiveTheme('light-theme');
    }*/
  }

}
