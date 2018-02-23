import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  userdata:any;
  userId:any;
  walletamount:any;
  earns:any;
  spends:any;
  items : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public emailComposer: EmailComposer, public modal: ModalController, public serviceState:ServicestateProvider) {
    this.userdata = JSON.parse(localStorage.getItem('loggedData'));
    console.log(this.userdata);
    this.userId = this.userdata[0].id;
    console.log(this.userId);
    this.walletamount = this.userdata[0].rf_wallet_bal;
    this.earnings();
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

  openModal(){
    const data = {
      username: this.userdata[0].username,
      walletbalance: this.userdata[0].rf_wallet_bal
    };
    const myModal =  this.modal.create('RedeemPage',{data : data});
    myModal.present();
  }

  earnings(){
    this.serviceState.creditearns(this.userId).subscribe(data =>{
      this.items = data;
      console.log(this.items);

   }),error =>{
     console.log(error);
   }
  }

}
