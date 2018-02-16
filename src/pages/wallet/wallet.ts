import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  userdata:any;
  walletamount:any;
  earns:any;
  spends:any;
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,public emailComposer: EmailComposer) {
    this.userdata = JSON.parse(localStorage.getItem('loggedData'));
    this.walletamount = this.userdata[0].rf_wallet_bal;
    // console.log(data[0].rf_wallet_bal);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
    let data = JSON.parse(localStorage.getItem('loggedData'));
    this.walletamount = data[0].rf_wallet_bal;
  }

  redeem(){

    let email = {
      to: 'support@rytefix.com',
      cc: 'admin@rytefix.com',
      bcc: [],
      subject: 'Customer '+this.userdata[0].username+' Redeem wallet balance',
      body: 'the amount requested to redeem by customer is '+this.userdata[0].rf_wallet_bal,
      isHtml: true
    };
    
    // Send a text message using default options
    this.emailComposer.open(email);

  }

}
