import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, LoadingController  } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RegisterPage } from '../register/register';
import{ LoginPage } from '../login/login';
/**
 * Generated class for the ServicebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicebooking',
  templateUrl: 'servicebooking.html',
})
export class ServicebookingPage {
  responseData : any;
  disable:any;
  makedropdown:any;
  harddropdown:any;
  softdropdown:any;
  preferdropdown:any;
  other:any;
  searchBar:any;
  items:any;
  form = new FormGroup({
    pickup: new FormControl('',Validators.required),
    make: new FormControl('', Validators.required),
    modelno: new FormControl('', Validators.required),
    soft: new FormControl('', Validators.required),
    hard: new FormControl('', Validators.required),
    loc: new FormControl('', Validators.required),
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
  printer:any;
  mobile:any;
  userData = {"make":"","modelno":"","soft":"","hard": "","others": "","pickup":"","loc":""};
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public AuthServiceProvider:AuthServiceProvider,
     public Toast:ToastController) {
    //this.userData.require = this.form.controls['name="check"'].value;
    this.disable=true;
    this.other=false;
    this.searchBar=false;
    this.printer=true;
    this.mobile=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicebookingPage');
    this.makeService();
    this.softService();
    this.hardService();
    this.preferLocation();
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
    this.AuthServiceProvider.getData('softService').then((result) => {
            this.softdropdown = result;
            console.log( this.softdropdown);
      } );
  }
  hardService(){
    this.AuthServiceProvider.getData('hardService').then((result) => {
      this.harddropdown = result;
      console.log(this.harddropdown );
      } );
  }
  preferLocation(){
    this.AuthServiceProvider.getData('preferLocation').then((result) => {
      this.preferdropdown=result;
      console.log(this.preferdropdown );
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
  initializeItems() {
    console.log(this.preferdropdown);
    
    this.items = this.preferdropdown;
  }
  // preferLoc(){
  //   console.log("prefer");
  //   this.searchBar=true;
  // }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
