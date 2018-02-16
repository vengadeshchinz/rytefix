import { Component } from '@angular/core';
import { IonicPage, ToastController,LoadingController,AlertController, NavController, NavParams } from 'ionic-angular';
import{ RegisterPage } from '../register/register';
import { HomePage }from '../home/home';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ChangepassPage } from '../changepass/changepass';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form = new FormGroup({
    mobile: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
     });
     get mobile() {
      return this.form.get('mobile');
    }
    get pass() {
      return this.form.get('pass');
    }
    form1 = new FormGroup({
      mobile1: new FormControl('', Validators.required)
       });
       get mobile1() {
        return this.form1.get('mobile1');
      }
      form2 = new FormGroup({
        otp: new FormControl('', Validators.required)
         });
         get otp() {
          return this.form2.get('otp');
        }
    responsedata:any;
    responseData:any;
    forgotMobile:any;
    otpverify:any;
    loginscreen:any;
    forgotData={"mobile1":""};
    otpData={"otp":""};
    loginData={"mobile":"","pass":""};
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private loadingCtrl: LoadingController, public navParams: NavParams,private toastCtrl: ToastController,public AuthServiceProvider:AuthServiceProvider) {
  this.forgotMobile=false;
  this.loginscreen=true;
  this.otpverify=false;
  }

  ionViewDidLoad() {
   
    let toast = this.toastCtrl.create({
      message: 'Service book successfully',
      duration: 3000,
      position: 'bottom'
    });
    let toast1 = this.toastCtrl.create({
      message: 'Service notbook successfully',
      duration: 3000,
      position: 'bottom'
    });
    console.log('ionViewDidLoad LoginPage');
    if(localStorage.getItem("loggedData")){
        let loggedid=JSON.parse(localStorage.getItem("loggedData"));
       if(localStorage.getItem('serviceBooking')){
        let loggedData =JSON.parse(localStorage.getItem('serviceBooking'));
        //let loggedData=this.jsonConcat(service, logged);
      
        loggedData['id']=loggedid[0].id;
        loggedData['gadget']=localStorage.getItem('gadget');
        console.log(loggedData);
        this.AuthServiceProvider.postData(loggedData,'serLogged').then((result) => {
          console.log(result);
          this.responseData=result;
          if(this.responseData.status==true){
           toast.present();
          }else{
           toast1.present();
          }
          this.navCtrl.setRoot(HomePage);
        });
       }else if(localStorage.getItem('serviceBooking1')){
        let loggedData =JSON.parse(localStorage.getItem('serviceBooking1'));
        //let loggedData=this.jsonConcat(service, logged);
      
        loggedData['id']=loggedid[0].id;
        loggedData['gadget']=localStorage.getItem('gadget');
        console.log(loggedData);
        this.AuthServiceProvider.postData(loggedData,'ser1Logged').then((result) => {
          console.log(result);
          this.responseData=result;
          if(this.responseData.status==true){
           toast.present();
          }else{
           toast1.present();
          }
          this.navCtrl.setRoot(HomePage);
        });
       }
      
           
    }
  }
  forgotPass(){
   
    let alert = this.alertCtrl.create({
      title: 'Forgot',
      subTitle: 'This mobileno not registered',
      buttons: ['Ok']
    });
    // let toast = this.toastCtrl.create({
    //   message: 'OTP verify successfully',
    //   duration: 3000,
    //   position: 'bottom'
    // });
console.log(this.forgotData);
this.AuthServiceProvider.postData(this.forgotData,'forgotPass').then((result) => {
  console.log(result)
  this.responsedata=result;
  if(this.responsedata.status==true){
    
    //toast.present();
    this.otpverify=true;
    this.forgotMobile=false;
    this.loginscreen=false;
  }else{
    alert.present();
    this.otpverify=false;
    this.forgotMobile=true;
    this.loginscreen=false;
  }

});
  }
  
  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  login(){
    let toast = this.toastCtrl.create({
      message: 'Login successfully',
      duration: 3000,
      position: 'bottom'
    });
    let toast1 = this.toastCtrl.create({
      message: 'Invalid username & password',
      duration: 3000,
      position: 'bottom'
    });
    let loader = this.loadingCtrl.create({content: "Please wait.."});
    loader.present();
    console.log(this.loginData);
    if(localStorage.getItem('serviceBooking')){
      let service =JSON.parse(localStorage.getItem('serviceBooking'));
      let serviceUser=this.jsonConcat(service, this.loginData);
      serviceUser['gadget']=localStorage.getItem('gadget');
      this.AuthServiceProvider.postData(serviceUser,'serLogin').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          loader.dismiss();
         
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
          console.log(result);
          toast.present();
          this.navCtrl.setRoot(HomePage);
        }else{
          toast1.present();
        }
      
          } );
    }else if(localStorage.getItem('serviceBooking1')){
      let service =JSON.parse(localStorage.getItem('serviceBooking1'));
      let serviceUser=this.jsonConcat(service, this.loginData);
      serviceUser['gadget']=localStorage.getItem('gadget');
      this.AuthServiceProvider.postData(serviceUser,'ser1Login').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          loader.dismiss();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
          console.log(result);
          toast.present();
          this.navCtrl.setRoot(HomePage);
        }else{
          toast1.present();
        }
      } );
    }else if(localStorage.getItem('serviceBooking')==""||localStorage.getItem('serviceBooking1')==""){
      this.AuthServiceProvider.postData(this.loginData,'Login').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          loader.dismiss();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
          console.log(result);
          toast.present();
          this.navCtrl.setRoot(HomePage);
        }else{
          toast1.present();
        }
      
          } );
    }else{
      this.AuthServiceProvider.postData(this.loginData,'Login').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          loader.dismiss();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
          console.log(result);
          toast.present();
          this.navCtrl.setRoot(HomePage);
        }else{
          toast1.present();
        }
      
          } );
    }
  }
  reg(){
    this.navCtrl.setRoot(RegisterPage);
  }
  forgot(){
this.forgotMobile=true;
this.loginscreen=false;
this.otpverify=false;
  }
  otpVerify(){
    let toast = this.toastCtrl.create({
      message: 'otp successfully verifid',
      duration: 3000,
      position: 'bottom'
    });
    console.log(this.otpData);
    if(localStorage.getItem("loggedData")){
      let logged=JSON.parse(localStorage.getItem("loggedData"));
     // let otpverify=this.jsonConcat(this.otpData, logged);
      logged[0]['otp']=this.otpData['otp'];
      console.log(logged);
      this.AuthServiceProvider.postData(logged[0],'otpVerify').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data));
          this.navCtrl.setRoot(HomePage);
        }else{
          alert("Invalid otp");
        }
        
       // this.makedropdown=result;
      //  console.log(this.makedropdown );
          } );
    }else{
      console.log(this.otpData['otp']);
//      delete this.responsedata.data['otp'];
  //    delete this.responsedata.data['otp'];
      console.log(this.responsedata.data);
      this.responsedata.data[0]['otp']=this.otpData['otp'];
      let otpdata=this.responsedata.data[0];
      console.log(otpdata);
      //let otpverify=this.jsonConcat(this.otpData, this.responsedata.data);
      this.AuthServiceProvider.postData(otpdata,'otpVerify').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          localStorage.setItem('loggedData',JSON.stringify(otpdata));
          this.navCtrl.setRoot(ChangepassPage);
        }else{
          alert("Invalid otp");
        }
    });
  }
 
  }
  
}

