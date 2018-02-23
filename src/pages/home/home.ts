import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
// import { Http, Headers, RequestOptions } from '@angular/http';
import{ ServicebookingPage } from '../servicebooking/servicebooking';
import { QuotehistoryPage } from '../quotehistory/quotehistory';
import { LoginPage } from '../login/login';
import { WalletPage } from '../wallet/wallet';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  print:any;
  home:any;
  @ViewChild(Slides) slides: Slides;
 // user: FormGroup;
 
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
   this.home=true;
   this.print=false;
  
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  Gadgets(){
 let prompt = this.alertCtrl.create({
    title: 'Select Gadgets',
   // message: 'Select option ',
    inputs : [
    {
        type:'radio',
        label:'Mobile',
        value:'Mobile'
    },
    {
        type:'radio',
        label:'Laptop',
        value:'Laptop'
    },
    {
      type:'radio',
      label:'Tablet',
      value:'Tablet'
  },
  {
    type:'radio',
    label:'Desktop & Computer',
    value:'Computer'
},
{
  type:'radio',
  label:'Printer, Tv & Others',
  value:'Printer'
},

  ],
    buttons : [
    {
        text: "Cancel",
        handler: data => {
        console.log("cancel clicked");
        }
    },
    {
        text: "Ok",
        handler: data => {
          console.log(data);
          if(data){
            localStorage.setItem('gadget', data); 
            console.log("search clicked");
            this.navCtrl.push(ServicebookingPage);
          }
       
        }
    }]});
    prompt.present();

  }

  wallet(){

    if(JSON.parse(localStorage.getItem("loggedData"))){
      console.log(JSON.parse(localStorage.getItem("loggedData")));
    this.navCtrl.push(WalletPage);
    }else{
      // alert("please login Required");
      console.log(JSON.parse(localStorage.getItem("loggedData")));
      let alert = this.alertCtrl.create({
        title: 'Warning',
        message: 'Please login or register to use this feature !',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'OK',
            handler: () => {
              console.log('Buy clicked');
              // this.navCtrl.push(RegisterPage);
              this.navCtrl.push(WalletPage);
            }
          }
        ]
      });
      alert.present();
    }
  }
  quoteHistory(){
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Login Required.',
      buttons: ['Ok']
    });
    
  
   // alert("test");
    if(localStorage.getItem("loggedData")){
    this.navCtrl.push(QuotehistoryPage);
    }else{
      let alert = this.alertCtrl.create({
        title: 'Warning',
        message: 'Please login or register to use this feature !',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'OK',
            handler: () => {
              console.log('Buy clicked');
              this.navCtrl.push(LoginPage);
            }
          }
        ]
      });
      alert.present();
    }
  } 
//   Gadgets(filtermonthwise){
//    // alert(filtermonthwise);
// if(filtermonthwise=="Printer"){
//   this.home=false;
//   this.print=true;
// }else{
//   localStorage.setItem('gadget', JSON.stringify(filtermonthwise)); 
//   this.navCtrl.setRoot(ServicebookingPage);
// }
   
//   }
 

}
