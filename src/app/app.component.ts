import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,NavController,AlertController,LoadingController,ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { QuotehistoryPage } from '../pages/quotehistory/quotehistory';
import { QuoteviewPage } from '../pages/quoteview/quoteview';
import { FaqPage } from '../pages/faq/faq';
import { ContactusPage } from '../pages/contactus/contactus';
import { ChangepassPage } from '../pages/changepass/changepass';
import { InvitefrdPage } from  '../pages/invitefrd/invitefrd';
import { ProfilePage } from '../pages/profile/profile';
import { IntrosliderPage } from '../pages/introslider/introslider';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { WalletPage } from '../pages/wallet/wallet';
import {TabsPage} from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
device:any;
responseData:any;
  rootPage: any = IntrosliderPage;
  // tab1Root = HomePage;
  // tab2Root = FaqPage;
  // tab3Root = ContactusPage;
  // rootPage: any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(private uniqueDeviceID: UniqueDeviceID,
    public AuthServiceProvider:AuthServiceProvider,private toastCtrl: ToastController,
    public platform: Platform, public statusBar: StatusBar,private loadingCtrl:LoadingController, 
    public splashScreen: SplashScreen,private alertCtrl: AlertController,private fb: Facebook) {
    this.initializeApp();
    console.log("test");
   console.log(this.uniqueDeviceID.get().then((uuid: any) => console.log(uuid)).catch((error: any) => console.log(error))) ;
   this.uniqueDeviceID.get().then((uuid: any) =>{    console.log(uuid);localStorage.setItem("deviceId",uuid);}).catch((error: any) =>     console.log(error))
// this.device='c9ab8ea1-aa3a-578b-9900-020705933689';
  // localStorage.setItem("deviceId",this.device);
   // used for an example of ngFor, and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Change Password', component: ChangepassPage },
      // { title: 'FAQ', component: FaqPage},
      { title: 'Invite Friends', component:InvitefrdPage },
      // { title: 'Rate This App', component:   },
      // { title: 'Contact Us', component: ContactusPage },
      { title: 'Quote & Response', component: QuotehistoryPage },
      { title: 'Quote', component: QuoteviewPage },


    ];

    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));

  // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ACTIVATED_APP);


  }
  
  logout(){
   
      let alert = this.alertCtrl.create({
        title: 'Confirm Logout',
        message: 'Do you want to Logout?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.nav.setRoot(HomePage);
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
             this.logoutconf();
            }
          }
        ]
      });
     
 alert.present();
  
  }
  logoutconf(){
    let loader = this.loadingCtrl.create({content: "Please wait.."});
      
    //  alert("logout");
    let toast = this.toastCtrl.create({
      message: 'Logout successfully',
      duration: 3000,
      position: 'bottom'
    });
    if(JSON.parse(localStorage.getItem("loggedData"))){
      loader.present();
       let userData = JSON.parse(localStorage.getItem('loggedData'));
       console.log(userData);
       this.AuthServiceProvider.postData(userData[0], 'logout').then((result) => {
        this.responseData = result;
        if (true == this.responseData.status) {
          loader.dismiss();
          console.log(this.responseData);
          localStorage.setItem('loggedData', "");
          localStorage.setItem('serviceBooking', "");
          localStorage.setItem('serviceBooking1', "");
          localStorage.setItem('gadget', "");
          this.nav.setRoot(HomePage);
          toast.present();
        } 
      }, (err) => {
        // Error log
      });
    }else{
      console.log("not logged");
      this.nav.setRoot(HomePage);
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
