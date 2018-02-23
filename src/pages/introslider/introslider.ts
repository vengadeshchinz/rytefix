import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-introslider',
  templateUrl: 'introslider.html',
})
export class IntrosliderPage {

  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {

    this.slides = [
      {
        title: "WHY RYTEFIX ?",
        description: "Rytefix is a free app available to book mobile, laptop and all other electronic gadgets services in Chennai. Enjoy hassle free experience.",
        image: 'assets/imgs/slider1.jpg',
      },
      {
        title: "WHAT WE DO ?",
        description: "Connect customers and gadgets service providers in whole new way, intend to bring more transparency and enjoyable experience in market place.",
        image: 'assets/imgs/slider2.jpg',
      },
      {
        title: "HASSLE FREE EXPERIENCE",
        description: "We cover almost every gadgets and brands with great offers and discounts.",
        image: 'assets/imgs/slider3.jpg',
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntrosliderPage');
  }

  startApp() {
    this.navCtrl.push(RegisterPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  home() {
    this.navCtrl.setRoot(TabsPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
