import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
// import { Http, Headers, RequestOptions } from '@angular/http';
import{ ServicebookingPage } from '../servicebooking/servicebooking';
import { QuotehistoryPage } from '../quotehistory/quotehistory';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  print:any;
  home:any;
 // user: FormGroup;
 
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
   this.home=true;
   this.print=false;
  
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
    label:'Printer, cam & others',
    value:'Printer'
}
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
            localStorage.setItem('gadget', JSON.stringify(data)); 
            this.navCtrl.setRoot(ServicebookingPage);
          }
        console.log("search clicked");
        }
    }]});
    prompt.present();

  }
  quoteHistory(){
   // alert("test");
    if(JSON.parse(localStorage.getItem("loggedData"))){
    this.navCtrl.setRoot(QuotehistoryPage);
    }else{
      alert("please login Required");
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
