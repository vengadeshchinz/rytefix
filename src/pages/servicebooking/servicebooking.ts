import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform ,ToastController, LoadingController  } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RegisterPage } from '../register/register';
import{ LoginPage } from '../login/login';
import { SelectSearchable } from 'ionic-select-searchable';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
import { Http,Headers, RequestOptions} from '@angular/http';
/**
 * Generated class for the ServicebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Port {
  public id: number;
  public name: string;
}
@IonicPage()
@Component({
  selector: 'page-servicebooking',
  templateUrl: 'servicebooking.html',
})
export class ServicebookingPage {
  deviceId:any;
  ports: Port[];
    port: Port;
  responseData : any;
  disable:any;
  userid:any;
  makedropdown:any;
  harddropdown:any;
  softdropdown:any;
  preferdropdown:any;
  other:any;
  searchBar:any;
  items:any;
  recording: boolean = false;
  filePath: string;
  fileName: string;
  Audio: MediaObject;
  audioList: any[] = [];
  imageURI:any;
  imageFileName:any;
  imgList:any;
  countStart:any;
  pushData ={"deviceId":"","message":"Thanks Your booking is received will be processed within 24 hours"};
  form = new FormGroup({
    pickup: new FormControl('',Validators.required),
    make: new FormControl('', Validators.required),
    modelno: new FormControl('', Validators.required),
    soft: new FormControl('', Validators.required),
    hard: new FormControl('', Validators.required),
    loc: new FormControl('', Validators.required),
    promocode: new FormControl(),
    others: new FormControl('', Validators.required)
     });
  get make() {
    return this.form.get('make');
  }
  get modelno() {
    return this.form.get('modelno');
  }
  get soft() {
    return this.form.get('soft');
  }
  get hard() {
    return this.form.get('hard');
  }
  get others() {
    return this.form.get('others');
  }
  form1 = new FormGroup({
    pickup1: new FormControl('',Validators.required),
    make1: new FormControl('', Validators.required),
    modelno1: new FormControl('', Validators.required),
    describe: new FormControl('', Validators.required),
    loc1: new FormControl('', Validators.required),
    promocode1: new FormControl()
     });
  get make1() {
    return this.form1.get('make1');
  }
  get modelno1() {
    return this.form1.get('modelno1');
  }
  get describe() {
    return this.form1.get('describe');
  }

  get loc1() {
    return this.form1.get('loc1');
  }
  printer:any;
  mobile:any;
  timecount:any;
  userData = {"make":"","modelno":"","soft":"","hard": "","others": "","pickup":"","loc":"","image":"","audio":"","promocode":""};
  userdata1 = {"make1":"","modelno1":"","describe":"","pickup1":"","loc1":"","image":"","audio":"","promocode1":""};
  constructor(
     public navCtrl: NavController,
     public platform: Platform,
     public navParams: NavParams,
     public media: Media,
     public file: File,
     public loadingCtrl: LoadingController,
     public transfer: FileTransfer,
     private camera: Camera,
     public AuthServiceProvider:AuthServiceProvider,
     public toastCtrl: ToastController,
     public serviceState:ServicestateProvider,
     public http: Http) {

      this.deviceId = localStorage.getItem('deviceID');
      this.pushData.deviceId = this.deviceId;
      // console.log('deviceId', this.pushData);
      // this.push(this.pushData);
    
      localStorage.setItem('serviceBooking', "");
      localStorage.setItem('serviceBooking1', "");
      localStorage.setItem("imageList", "");
      localStorage.setItem("audiolist", "");
    //   this.countStart=false;
    //  this.time();
      this.preferLocation();
  
    //this.userData.require = this.form.controls['name="check"'].value;
    if(localStorage.getItem('gadget')=="Mobile"||localStorage.getItem('gadget')=="Laptop"||localStorage.getItem('gadget')=="Tablet"){
      this.makeService();
      this.softService();
      this.hardService();
     
      this.mobile=true;
      this.printer=false;
    }else{
     
      this.printer=true;
    }

    this.disable=true;
    this.other=false;
    this.searchBar=false;

  }
  portChange(event: { component: SelectSearchable, value: any }) {
    console.log('port:', event.value.length);
    console.log(event.value.length);
    if(event.value.length < 2){ 
      this.disable=true;
      alert("Minimum 2 service provider select");
    }else if(event.value.length >3){
      alert("Maximum 3 service provider select");
      this.disable=true;
    }else{
      this.disable=false;
    }
}

push(data){
  console.log("pushData",data);
this.http.post('http://sunrisetechs.com/sunapi/push.php',data).subscribe((result) => {
  this.responseData = result;
  console.log(this.responseData);
  }, (err) => {
  console.log(err);
  });
}
// time(){
//   if(this.countStart==true){
//    var   seconds = 0, minutes = 0, hours = 0;
//    seconds++;
//    if (seconds >= 60) {
//        seconds = 0;
//        minutes++;
//        if (minutes >= 60) {
//            minutes = 0;
//            hours++;
//        }
//    } 
//   this.timecount =  (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
// console.log(this.timecount);

//   }else{
//    this.stop();
//   }
//  }

//  stop(){
//    clearTimeout(setTimeout(this.time(), 1000));
//  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicebookingPage');
  
  }
  makeService(){
    console.log(localStorage.getItem('gadget'));
    
    let gadget=localStorage.getItem('gadget');
    this.AuthServiceProvider.postData(gadget,'makeService').then((result) => {
      this.makedropdown=result;
      console.log(this.makedropdown );
        } );
  }
  softService(){

    let gadget=localStorage.getItem('gadget');
    this.AuthServiceProvider.postData(gadget,'softService').then((result) => {
   
            this.softdropdown = result;
            console.log( this.softdropdown);
      } );
  }
  hardService(){
    let gadget=localStorage.getItem('gadget');
    this.AuthServiceProvider.postData(gadget,'hardService').then((result) => {
    
      this.harddropdown = result;
      console.log(this.harddropdown );
      } );
  }
  preferLocation(){
    this.AuthServiceProvider.getData('preferLocation').then((result) => {
      this.preferdropdown=result;
      console.log(this.preferdropdown );
       var data = new Array;
      for (var i = 0; i < this.preferdropdown.length; i++) {
        var obj = this.preferdropdown[i];
        data.push(obj.area);

      }    
      console.log(data);
      this.ports=data;
        } );
  }
  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  serviceReq() {   
   console.log(this.userData.loc);

   this.userData['deviceId'] =localStorage.getItem('deviceId');
  // let serviceUser=this.jsonConcat(device, this.userData);

   console.log(this.userData);
   if (this.userData.make && this.userData.modelno && this.userData.soft || this.userData.hard ||this.userData.others && this.userData.pickup && this.userData.loc) {
       localStorage.setItem('serviceBooking',JSON.stringify(this.userData)); 
    this.navCtrl.setRoot(LoginPage);
     }else{
       alert("All fileds required");
     }
  }
  serviceReq1() {   
    console.log(this.userdata1.loc1);
 
    this.userdata1['deviceId'] =localStorage.getItem('deviceId');
   // let serviceUser=this.jsonConcat(device, this.userData);
 
    console.log(this.userdata1);
    if (this.userdata1.make1 && this.userdata1.modelno1 && this.userdata1.describe  || this.userdata1.pickup1 && this.userdata1.loc1) {
        localStorage.setItem('serviceBooking1',JSON.stringify(this.userdata1)); 
     this.navCtrl.setRoot(LoginPage);
      }else{
        alert("All fileds required");
      }
   }
  servicemake(data){
   
    if(data=="others"||data==""){
      console.log("other");
      this.other=true;
    }
  }
  serviceLoc(data){
    console.log(data.length);
    if(data.length < 2){ 
      alert("Minimum 2 service provider select");
    }else if(data.length >=2){
      alert(" select");
      this.disable=false;
    }
  }

  
  preferLoc(){
    console.log("prefer");
    this.searchBar=true;
  }
  
  //Audio function Start
  ionViewWillEnter() {
    this.getAudioList();
  }
  getAudioList() {
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
    }
  }
audioDelete(){
  alert("test");
  localStorage.setItem("audiolist", "");
  this.userData['audio']="";
    this.userdata1['audio']="";
}

  startRecord() {
    
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.Audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.Audio = this.media.create(this.filePath);
      
    }
    this.Audio.startRecord();
    this.recording = true;
    // this.countStart=true;
    // this.time();
  }

  stopRecord() {
   
    this.Audio.stopRecord();
    // this.countStart=false;
    // this.stop();
    this.userData['audio']=this.fileName;
    this.userdata1['audio']=this.fileName;
    let data = { filename: this.fileName,filePath:this.filePath };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
     this.getAudioList();
  }

  playAudio(file,idx) {
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.Audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.Audio = this.media.create(this.filePath);
    }
    this.Audio.play();
    this.Audio.setVolume(0.8);
  }

  // uploadAudio(){
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   let options = {
  //     fileKey: "file",
  //   fileName: this.fileName,
  //   chunkedMode: false,
  //   mimeType: "multipart/form-data",
  //   params : {'fileName': this.fileName}
  //  };
   
  //  console.log('filepath',this.filePath);
  //  console.log('filename',this.fileName);
  //  console.log("userid",this.userid);
  // //  fileTransfer.upload('<file path>', '<api endpoint>', options)
  //  fileTransfer.upload(this.filePath,'http://sunrisetechs.com/images/audio.php',options)
  //  .then((data) => {
  //    console.log(data);
  //  }, (err) => {
  //    // error
  //    console.log(err);
  //    alert('error');
  //  })

  // }

  //Image function

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      this.imageFileName = 'image'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.jpg';
      this.userData['image'] = this.imageFileName;

      console.log(this.imageFileName);
      this.userdata1['image']=this.imageFileName;
      let data = { imgfilename: this.imageFileName,imgfilePath:this.imageURI };
   // this.imgList.push(data);
    localStorage.setItem("imageList", JSON.stringify(data));
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
  imageDelete(){
    localStorage.setItem("imageList", "");
    this.userData['image'] ="";
    this.userdata1['image']="";
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
  
    toast.present();
  }
  // uploadFile() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Uploading..."
  //   });
  //   loader.present();
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  
   
  //   console.log('image name',this.imageFileName);
  //   let options: FileUploadOptions = {
  //     fileKey: 'file',
  //     fileName: this.imageFileName,
  //     chunkedMode: false,
  //     mimeType: "image/jpeg",
  //     headers: {},
  //   params : {'fileName': this.imageFileName}
      
  //   }
  
  //   fileTransfer.upload(this.imageURI, 'http://sunrisetechs.com/images/image.php', options)
  //     .then((data) => {
  //     console.log(data+" Uploaded Successfully");
  //     loader.dismiss();
  //     this.presentToast("Image uploaded successfully");
  //   }, (err) => {
  //     console.log(err);
  //     loader.dismiss();
  //     this.presentToast(err);
  //   });
  // }

  promocode(){
    let cid;
    let bid;
    let promocode;
    this.serviceState.promocode(cid,bid,promocode).subscribe(data =>{

   }),error =>{
     console.log(error);
   }
  }
  promochange(data){
    console.log(data);
  }
 
}
