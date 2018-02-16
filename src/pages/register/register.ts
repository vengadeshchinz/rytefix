import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController,LoadingController, AlertController,NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  uesrPass:any;
  userCpass:any;
  disable:any;
  otpverify:any;
  responsedata:any;
  registerpage:any;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mobile: new FormControl('',Validators.required),
    cpassword: new FormControl('',Validators.required),
    area: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    pincode: new FormControl('',Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email])
  });
  get username() {
    return this.form.get('username');
  }
  get mobile() {
    return this.form.get('mobile');
  }
  get mail() {
    return this.form.get('mail');
  }
  get password() {
    return this.form.get('password');
  }
  get cpassword() {
    return this.form.get('cpassword');
  }
  get area() {
    return this.form.get('area');
  }
  get city() {
    return this.form.get('city');
  }
  get pincode() {
    return this.form.get('pincode');
  }
  form1 = new FormGroup({
    otp: new FormControl('', Validators.required)
  });
  get otp() {
    return this.form1.get('otp');
  }
  otpData={"otp":""};
  userData = { "username": "", "mobile":"","mail": "","password": "","cpassword":"","area":"","city":"","pincode":""};
  constructor(private alertCtrl: AlertController,public navCtrl: NavController,private loadingCtrl: LoadingController,private toastCtrl: ToastController,
    public AuthServiceProvider:AuthServiceProvider, public navParams: NavParams) {
    this.userCpass=false;
    this.disable=true;
    this.otpverify=false;
    this.registerpage=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  pass(data){
    console.log(data);
this.uesrPass=data;
  }
  cpass(data){
    console.log(data);
    if(this.uesrPass==data){
      console.log("true");
this.userCpass=false;
this.disable=false;
    }else{
      console.log("true");
      this.userCpass=true;
    }
  }
  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  otpVerify(){
    let toast = this.toastCtrl.create({
      message: 'otp successfully verifid',
      duration: 3000,
      position: 'bottom'
    });
    console.log(this.otpData);
    let logged=JSON.parse(localStorage.getItem("loggedData"));
    //let otpverify=this.jsonConcat(this.otpData, logged);
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
  }
  pushSendAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Already registered mobile number.',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  register(){
    // let toast = this.toastCtrl.create({
    //   message: 'Register successfully',
    //   duration: 3000,
    //   position: 'bottom'
    // });
    
    let loader = this.loadingCtrl.create({content: "Please wait.."});
     loader.present();
    console.log(this.userData);
    if(this.userData.username && this.userData.password && this.userData.cpassword && this.userData.mail && this.userData.mobile && this.userData.area && this.userData.city && this.userData.pincode){
      if(JSON.parse(localStorage.getItem('serviceBooking'))){
        console.log(JSON.parse(localStorage.getItem('serviceBooking')));
        let service =JSON.parse(localStorage.getItem('serviceBooking'));
        
        let serviceUser=this.jsonConcat(service, this.userData);
        serviceUser['gadget']=localStorage.getItem('gadget');
      console.log(serviceUser);
        this.AuthServiceProvider.postData(serviceUser,'regUser').then((result) => {
          this.responsedata=result;
          if(this.responsedata.status==true){
            loader.dismiss();
            localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
            //toast.present();
            this.otpverify=true;
            this.registerpage=false;
            console.log(result);
          }else if(this.responsedata.status==false){
            loader.dismiss();
            this.pushSendAlert(); 
          }
            } );
    
      }else{
        this.AuthServiceProvider.postData(this.userData,'register').then((result) => {
          this.responsedata=result;
          if(this.responsedata.status==true){
            loader.dismiss();
            localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
            //toast.present();
            this.otpverify=true;
            this.registerpage=false;
            console.log(result);
          }else if(this.responsedata.status==false){
            loader.dismiss();
            this.pushSendAlert(); 
          }
            } );
      }
        
    }else{
      alert("All fileds are required");
    }
  }

}
