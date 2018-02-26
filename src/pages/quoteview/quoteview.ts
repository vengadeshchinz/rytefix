import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CallNumber } from '@ionic-native/call-number';
import { ViewacceptQuotePage } from '../viewaccept-quote/viewaccept-quote';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
import { QuotehistoryPage } from '../quotehistory/quotehistory';
import { Http,Headers, RequestOptions} from '@angular/http';
import { QuotemapPage } from '../quotemap/quotemap';
/**
 * Generated class for the QuoteviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-quoteview',
  templateUrl: 'quoteview.html',
})
export class QuoteviewPage {
  pushData ={"deviceId":"","message":""};
  make: any;
  model: any;
  problem: any;
  pickup: any;
  bookingdate: any;
  soft: any;
  hard: any;
  othermodel: any;
  booking_date: any;
  image: any;
  audio: any;
 
  mapview: any;
  listview: any;
  quoteview: any;
  quotview: any;
  responsedata: any;
  nabo_img: any;
  Check : any;
  constructor(public navCtrl: NavController,
    public AuthServiceProvider: AuthServiceProvider,
    public navParams: NavParams,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public serviceState:ServicestateProvider,
    public http: Http) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteviewPage');

    this.quoteget();
  }
  listshow() {
    this.navCtrl.push(this.navCtrl.getActive().component);
  }
  mapshow() {
    this.navCtrl.setRoot(QuotemapPage);
  }

  push(data){
    console.log("pushData",data);
  this.http.post('http://sunrisetechs.com/sunapi/push.php',data).subscribe((result) => {
    // this.responseData = result;
    console.log(result);
    }, (err) => {
    console.log(err);
    });
  }
  quoteget() {
    console.log(localStorage.getItem("loggedData"));
    var quotedata = JSON.parse(localStorage.getItem("loggedData"));
    console.log(quotedata);
    this.AuthServiceProvider.postData(quotedata[0], 'quoteView').then((result) => {
      console.log(result);
      this.quoteview = result;
      this.acceptCheck(this.quoteview);
      console.log(this.quoteview[0].make_name);
      if (this.quoteview[0].make_name == null) {
        this.make = this.quoteview[0].make;
      } else {
        this.make = this.quoteview[0].make_name;

      }
      //this.make= this.quoteview[0].make_name;
      this.model = this.quoteview[0].model;
      this.soft = this.quoteview[0].softService;
      this.hard = this.quoteview[0].hardService;
      this.othermodel = this.quoteview[0].othermodel;
      this.pickup = this.quoteview[0].pickup_type;
      this.booking_date = this.quoteview[0].posted_on;
      this.image = this.quoteview[0].image;
      this.audio = this.quoteview[0].audio;
    
      // this.navCtrl.setRoot(HomePage);
    });

  }
  quoteChat() {
    alert("test");

  }
  quoteCall(mobile) {
    console.log(mobile);
    this.callNumber.callNumber(mobile, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  acceptCheck(quoteView){
    quoteView.forEach(element => {
      if(element.accept_status == 3){
        console.log(element);
        this.Check = "accepted";
        console.log(this.Check);
      }
     
    });
  }
  quoteAccept(id, data) {
    console.log("quote data",data.device_id);
    this.pushData.deviceId = data.device_id;
    this.pushData.message = "Customer has accepted your service. Contact customer to complete the service.";
      // checking for customer if already accepted the quote
      if(this.Check == "accepted"){
      // if accepted throws prompt message to ignore accepted quote
        let promptalert = this.alertCtrl.create({
      title: 'Warning',
      message: 'you have already accepted the quote ! please ignore the accepted quote to accept this.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            
          }
        }
      ]
    });
    promptalert.present();
      }
      // else it allows to accept quote
      else{
          console.log('quote is not accepted previously');

           let promptalert = this.alertCtrl.create({
      title: 'Accept Quote',
      message: 'Do you want to Accept this Quote?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log(id);
            this.AuthServiceProvider.postData(id, 'serviceAccept').then((result) => {
              this.responsedata = result;
              if (this.responsedata.status == true) {
                //this.refresh();
                this.quoteAccept1(data);
                this.push(this.pushData);
                alert("Your have successfully accepted the quote");
              }
            });
          }
        }
      ]
    });
    promptalert.present();
        
      }
  }

  quoteAccept1(data) {
    console.log("data", data);
    this.navCtrl.push(QuoteviewPage, { "data": data });
  }

  quoteIgnore(id) {

    let promptalert = this.alertCtrl.create({
      title: 'Ignore',
      message: 'Do you want to Ignore this Quote?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log(id);
            this.AuthServiceProvider.postData(id, 'serviceIgnore').then((result) => {
              this.responsedata = result;
              if (this.responsedata.status == true) {
                this.refresh();
                alert("Service ignore successfully");

              }

            });
          }
        }
      ]
    });
    promptalert.present();

  }
  refresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    console.log("refresh");
  }
 

  completeQuote(vid,bid,data){
    // console.log('vid',vid);
     console.log('compelte data',data);
     this.pushData.deviceId = data.device_id;
     this.pushData.message = "Customer has completed your service.";

    let prompt = this.alertCtrl.create({
      message: "Service completed in service center and you paid for the service",
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            console.log('yes clicked'); 
            this.serviceState.completeService(vid,bid).subscribe(data =>{

              console.log(data);
              console.log(data.status);
              if(data.status == 'success'){
                this.push(this.pushData);
                let toast = this.toastCtrl.create({
                  message: "Congratulations! You can use the credit",
                  duration: 3000,
                  position: 'bottom'
                });     
                toast.present();
                this.navCtrl.push(TabsPage);
              }

           }),error =>{
             console.log(error);
           }
             
            
          }
        },
        {
          text:'No',
          handler: data => {  
           alert(" First complete the service at service center");
            return true;
          }
        }
      ]
    });
    prompt.present();
  }

  declineQuote(vid,bid){
    // console.log('data',this.quoteview[0]);
    // let vid = this.quoteview[0].vendor;
    // let bid= this.quoteview[0].booking_id;
    console.log('vendor id',vid);
    console.log('booking id',bid);
      let prompt = this.alertCtrl.create({
        message: "Please describe the problem",
        inputs: [
          {
            //type :'text',
            name: 'reason',
            placeholder: 'Reason for decline',
            value: ""
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');  
            }
          },
          {
            text:'Ok',
            handler: data => {
              // let validateObj = this.validate(data);
                        if (data.reason == "") {
                          let toast = this.toastCtrl.create({
                            message: "Please enter the reason ",
                            duration: 3000,
                            position: 'bottom'
                          });
                          toast.present();
                            return false;
                        } 
                        else {
                          let toast = this.toastCtrl.create({
                                message: "Now you can accept other quotes",
                                duration: 3000,
                                position: 'bottom'
                              });
                              toast.present();
                              this.serviceState.reportproblem(vid,bid,data.reason).subscribe(data =>{

                                 console.log(data);
                                 this.navCtrl.push(QuotehistoryPage);

                              }),error =>{
                                console.log(error);
                              }
                              // this.navCtrl.push(QuoteviewPage);
                        }            
            }
          }
        ]
      });
      prompt.present();
  
  }

}
