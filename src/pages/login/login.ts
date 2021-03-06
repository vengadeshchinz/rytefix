import { Component } from '@angular/core';
import { IonicPage, ToastController,LoadingController,AlertController, NavController, NavParams } from 'ionic-angular';
import{ RegisterPage } from '../register/register';
import { HomePage }from '../home/home';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ChangepassPage } from '../changepass/changepass';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Http,Headers, RequestOptions} from '@angular/http';
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

  pushData ={"deviceId":"","message":"Thanks Your booking is received will be processed within 24 hours"};
  imageFileName:any;
  filePath:any;
  fileName:any;
  imageURI:any;
  imgData:any;
  audioData:any;
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
    loginData={"mobile":"","pass":"","deviceId":""};
  constructor(public navCtrl: NavController,public transfer: FileTransfer,public file: File,
    private alertCtrl: AlertController,private loadingCtrl: LoadingController, public navParams: NavParams,private toastCtrl: ToastController,public AuthServiceProvider:AuthServiceProvider,public http: Http) {
  this.forgotMobile=false;
  this.loginscreen=true;
  this.otpverify=false;

  this.loginData.deviceId = localStorage.getItem('deviceID');
  console.log('device ID = ',this.loginData.deviceId);
      this.pushData.deviceId = this.loginData.deviceId;
      this.loggedService();
  }
  loggedService(){
    if(localStorage.getItem('imageList')){
      this.imgData =JSON.parse(localStorage.getItem('imageList'));
    }
    if(localStorage.getItem('audiolist')){
      this.audioData =JSON.parse(localStorage.getItem('audiolist'));
    }
       
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
   
    if(localStorage.getItem("loggedData")){
        let loggedid=JSON.parse(localStorage.getItem("loggedData"));
       if(localStorage.getItem('serviceBooking')){
        let loggedData =JSON.parse(localStorage.getItem('serviceBooking'));
        //let loggedData=this.jsonConcat(service, logged);
       if(loggedData['image']==""){loggedData['image']="user_avatar.png";}
        loggedData['id']=loggedid[0].id;
        loggedData['username']=loggedid[0].username;
        loggedData['email']=loggedid[0].email;
        loggedData['gadget']=localStorage.getItem('gadget');
        console.log(loggedData);
        this.AuthServiceProvider.postData(loggedData,'serLogged').then((result) => {
          console.log(result);
          this.responseData=result;
          if(this.responseData.status==true){
          // toast.present();
           if(loggedid[0].image){this.uploadFile();}
           if(loggedid[0].audio){this.uploadAudio(); }

            this.push(this.pushData);
            this.bookingComplete();
          }else{
           toast1.present();
          }
          this.navCtrl.setRoot(HomePage);
        });
       }else if(localStorage.getItem('serviceBooking1')){
        let loggedData =JSON.parse(localStorage.getItem('serviceBooking1'));
        //let loggedData=this.jsonConcat(service, logged);
        if(loggedData['image']==""){loggedData['image']="user_avatar.png";}
        loggedData['id']=loggedid[0].id;
        loggedData['username']=loggedid[0].username;
        loggedData['email']=loggedid[0].email;
        loggedData['gadget']=localStorage.getItem('gadget');
        console.log(loggedData);
        this.AuthServiceProvider.postData(loggedData,'ser1Logged').then((result) => {
          console.log(result);
          this.responseData=result;
          if(this.responseData.status==true){
          // toast.present();
           this.push(this.pushData);
           if(loggedid[0].image){this.uploadFile();}
           if(loggedid[0].audio){this.uploadAudio(); }
           this.bookingComplete();
          }else{
           toast1.present();
          }
          this.navCtrl.setRoot(HomePage);
        });
       }
      
           
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
          //toast.present();
          if(service['image']){this.uploadAudio();}
          if(service['audio']){ this.uploadFile();}
          this.bookingComplete();
        }else{
          loader.dismiss();
          toast1.present();
        }
      
          } );
    }else if(localStorage.getItem('serviceBooking1')){
      let service =JSON.parse(localStorage.getItem('serviceBooking1'));
      let serviceUser=this.jsonConcat(service, this.loginData);
      serviceUser['gadget']=localStorage.getItem('gadget');
      if(serviceUser['image']==""){serviceUser['image']="user_avatar.png";}
      this.AuthServiceProvider.postData(serviceUser,'ser1Login').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          loader.dismiss();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
          console.log(result);
          //toast.present();
          if(service['image']){this.uploadAudio();}
          if(service['audio']){ this.uploadFile();}
          this.bookingComplete();
        }else{
          loader.dismiss();
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
          loader.dismiss();
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
          loader.dismiss();
          toast1.present();
        }
      
          } );
    }
  }
  bookingComplete(){
    let alert = this.alertCtrl.create({
      title: 'Service Booking',
      message: 'Service booking successfully submitted with 24 hours you will response from rytefix partner.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Buy clicked');
            this.navCtrl.push(HomePage);
          }
        }
      ]
    });
    alert.present();
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
      message: 'OTP verifid successfully',
      duration: 3000,
      position: 'bottom'
    });
    let toast1 = this.toastCtrl.create({
      message: 'Invalid OTP',
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
          toast.present();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data));
          this.navCtrl.setRoot(HomePage);
        }else{
          toast1.present();
        }
        
       // this.makedropdown=result;
      //  console.log(this.makedropdown );
          } );
    }else{
      console.log(this.otpData['otp']);
//      delete this.responsedata.data['otp'];
  //    delete this.responsedata.data['otp'];
  console.log(this.responsedata);
      console.log(this.responsedata.data);
      this.responsedata.data[0]['otp']=this.otpData['otp'];
      let otpdata=this.responsedata.data;
      console.log(otpdata);
      //let otpverify=this.jsonConcat(this.otpData, this.responsedata.data);
      this.AuthServiceProvider.postData(otpdata[0],'otpVerify').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          toast.present();
          localStorage.setItem('loggedData',JSON.stringify(otpdata));
          this.navCtrl.setRoot(ChangepassPage);
        }else{
          toast1.present();
        }
    });
  }
 
  }
  uploadAudio(){
      const fileTransfer: FileTransferObject = this.transfer.create();
      let options = {
        fileKey: "file",
      fileName: this.audioData[0]['filename'],
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': this.audioData[0]['filename']}
     };
     
     console.log('filepath',this.audioData[0]['filePath']);
     console.log('filename',this.audioData[0]['filename']);
    // console.log("userid",this.userid);
    //  fileTransfer.upload('<file path>', '<api endpoint>', options)
     fileTransfer.upload(this.audioData[0]['filePath'],'http://sunrisetechs.com/images/audio.php',options)
     .then((data) => {
       console.log(data);
     }, (err) => {
       // error
       console.log(err);
       alert('error');
     })
  
    }
    uploadFile() {
        let loader = this.loadingCtrl.create({
          content: "Uploading..."
        });
      //  loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();
      
       
        console.log('image name',this.imgData['imgfilename']);
        let options: FileUploadOptions = {
          fileKey: 'file',
          fileName: this.imgData['imgfilename'],
          chunkedMode: false,
          mimeType: "image/jpeg",
          headers: {},
        params : {'fileName': this.imgData['imgfilename']}
          
        }
      
        fileTransfer.upload(this.imgData['imgfilePath'], 'http://sunrisetechs.com/images/image.php', options)
          .then((data) => {
          console.log(data+" Uploaded Successfully");
      //    loader.dismiss();
         // this.presentToast("Image uploaded successfully");
        }, (err) => {
          console.log(err);
          loader.dismiss();
          this.presentToast(err);
        });
      }
      presentToast(msg) {
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000,
          position: 'bottom'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
       // toast.present();
      }
  
}

