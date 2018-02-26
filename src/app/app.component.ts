import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { QuotehistoryPage } from '../pages/quotehistory/quotehistory';
import { QuoteviewPage } from '../pages/quoteview/quoteview';
import { FaqPage } from '../pages/faq/faq';
import { ContactusPage } from '../pages/contactus/contactus';
import { ChangepassPage } from '../pages/changepass/changepass';
import { InvitefrdPage } from '../pages/invitefrd/invitefrd';
import { ProfilePage } from '../pages/profile/profile';
import { IntrosliderPage } from '../pages/introslider/introslider';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { WalletPage } from '../pages/wallet/wallet';
import { TabsPage } from '../pages/tabs/tabs';
import { EditservicebookingPage } from '../pages/editservicebooking/editservicebooking';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  device: any;
  responseData: any;
  rootPage: any = IntrosliderPage;
  deviceID: any;
  imgData: any;
  image: any;
  username: any;
  Branch = window['Branch'];
  branchUniversalObj = null
  // tab1Root = HomePage;
  // tab2Root = FaqPage;
  // tab3Root = ContactusPage;
  // rootPage: any = TabsPage;
  pages: Array<{ title: string, component: any }>;

  constructor(private uniqueDeviceID: UniqueDeviceID,
    public AuthServiceProvider: AuthServiceProvider, private toastCtrl: ToastController,
    public platform: Platform, public statusBar: StatusBar, private loadingCtrl: LoadingController,
    public splashScreen: SplashScreen, private alertCtrl: AlertController, private fb: Facebook, private push: Push, public socialSharing: SocialSharing, public actionSheetCtrl: ActionSheetController) {
    this.initializeApp();
    // this.createDeepLink();
    

    // this.imgData = JSON.parse(localStorage.getItem('loggedData'));
    // this.image = "http://sunrisetechs.com/images/imgs/" + this.imgData[0]['profile_pic'];
    // console.log("image", this.imgData[0].username);
    // this.username = this.imgData[0].username;
    console.log("test");
    console.log(this.uniqueDeviceID.get().then((uuid: any) => console.log(uuid)).catch((error: any) => console.log(error)));
    this.uniqueDeviceID.get().then((uuid: any) => { console.log(uuid); localStorage.setItem("deviceId", uuid); }).catch((error: any) => console.log(error))
    // this.device='c9ab8ea1-aa3a-578b-9900-020705933689';
    // localStorage.setItem("deviceId",this.device);
    // used for an example of ngFor, and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Change Password', component: ChangepassPage },
      // { title: 'FAQ', component: FaqPage},
      { title: 'Invite Friends', component: InvitefrdPage },
      // { title: 'Rate This App', component:   },
      // { title: 'Contact Us', component: ContactusPage },
      { title: 'Quote & Response', component: QuotehistoryPage },
      { title: 'Quote', component: QuoteviewPage },


    ];

    // this.fb.login(['public_profile', 'user_friends', 'email'])
    //   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    //   .catch(e => console.log('Error logging into Facebook', e));

    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ACTIVATED_APP);



  }

  handleBranch(){
    if (!this.platform.is('cordova')) { return }
    const Branch = window['Branch'];
    Branch.initSession(data => {
      if (data['+clicked_branch_link']) {
        // read deep link data on click
        alert('Deep Link Data: ' + JSON.stringify(data));
        // this.contentReference();
      }
    });
  }

  contentReference(){
    var properties = {
      canonicalIdentifier: 'content/123',
      canonicalUrl: 'https://example.com/content/123',
      title: 'Content 123 Title',
      contentDescription: 'Content 123 Description ' + Date.now(),
      contentImageUrl: 'http://lorempixel.com/400/400/',
      price: 12.12,
      currency: 'GBD',
      contentIndexingMode: 'private',
      contentMetadata: {
        custom: 'data',
        testing: 123,
        this_is: true
      }
    }
    var analytics = {
      channel: 'facebook',
      feature: 'onboarding',
      campaign: 'content 123 launch',
      stage: 'new user',
      tags: ['one', 'two', 'three']
    }
    
    // optional fields
    var properties1 = {
      $desktop_url: 'http://www.example.com/desktop',
      $android_url: 'http://www.example.com/android',
      $ios_url: 'http://www.example.com/ios',
      $ipad_url: 'http://www.example.com/ipad',
      $match_duration: 2000,
      custom_string: 'data',
      custom_integer: Date.now(),
      custom_boolean: true
    }
    this.Branch.createBranchUniversalObject(properties).then(function (res) {
      res.generateShortUrl(analytics, properties1).then(function (res) {
        console.log('Response: ' + JSON.stringify(res.url));
      })
    })
  }

  createDeepLink(){
    var analytics = {
      channel: 'facebook',
      feature: 'onboarding',
      campaign: 'content 123 launch',
      stage: 'new user',
      tags: ['one', 'two', 'three']
    }
    
    // optional fields
    var properties = {
      $desktop_url: 'http://www.example.com/desktop',
      $android_url: 'http://www.example.com/android',
      $ios_url: 'http://www.example.com/ios',
      $ipad_url: 'http://www.example.com/ipad',
      $match_duration: 2000,
      custom_string: 'data',
      custom_integer: Date.now(),
      custom_boolean: true
    }
    
    this.branchUniversalObj.generateShortUrl(analytics, properties).then(function (res) {
      alert('Response: ' + JSON.stringify(res.url))
    }).catch(function (err) {
      alert('Error: ' + JSON.stringify(err))
    })
  }

  logout() {

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


  logoutconf() {
    let loader = this.loadingCtrl.create({ content: "Please wait.." });

    //  alert("logout");
    let toast = this.toastCtrl.create({
      message: 'Logout successfully',
      duration: 3000,
      position: 'bottom'
    });
    if (JSON.parse(localStorage.getItem("loggedData"))) {
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
    } else {
      console.log("not logged");
      this.nav.setRoot(HomePage);
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.handleBranch();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.contentReference();
      this.push.hasPermission()
        .then((res: any) => {

          if (res.isEnabled) {
            console.log('We have permission to send push notifications');
          } else {
            console.log('We do not have permission to send push notifications');
          }

        });
      localStorage.setItem('deviceID', "");
      const options: any = {
        android: {
          // SENDER_ID:'357015216809'
        },
        ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
        },
        windows: {},
        browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        }
      };

      const pushObject: PushObject = this.push.init(options);

      pushObject.on('notification').subscribe((notification: any) => {

        console.log('Received a notification', notification);
        let alert = this.alertCtrl.create({
          title: notification['title'],
          message: notification['message'],
          buttons: [
            {
              text: 'ok',
              handler: () => {
                console.log('called');
                this.nav.setRoot(TabsPage);
              }
            }
          ]
        });
        alert.present();
      });

      pushObject.on('registration').subscribe((registration: any) => {
        console.log('Device registered', registration);
        this.deviceID = {};
        this.deviceID["deviceid"] = registration['registrationId'];
        //this.deviceID["deviceid"]='cxHIRxjGUdE:APA91bGJqzhwsBbhxDLnaBXwcl7PLHZu3fDbm9pZ4QMN1kzRiJP5MFRAksg37aySQvhHoKfHTaDlt80AreZIeP9JG5MJc0AYGWAM1v3kT58sQsEgxZO74RdwNAaVazG2PZPlkKqE9m4M';
        console.log("deviceid =" + this.deviceID["deviceid"]);
        localStorage.setItem('deviceID', this.deviceID["deviceid"]);
        console.log(localStorage.getItem('deviceID'));
      });

      pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

    });
  }

 

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  inviteFriends() {
    console.log('invite friends');
    let actionSheet = this.actionSheetCtrl.create({
      title: 'invite friends via',
      buttons: [
        {
          text: 'Whatsapp',
          role: 'destructive',
          handler: () => {
            console.log('whatsapp clicked');
            let message = 'invite';
            this.socialSharing.shareViaWhatsApp(message, '', 'https://play.google.com/store/apps/details?id=com.com.rytefix&hl=en').then(() => {
              console.log('success');
            }).catch((e) => {
              console.log(e);
            });
          }
        }, {
          text: 'Facebook',
          handler: () => {
            console.log('facebook clicked');
            let message = 'invite';
            this.socialSharing.shareViaFacebook(message, '', 'https://play.google.com/store/apps/details?id=com.com.rytefix&hl=en').then(() => {
              console.log('success');
            }).catch((e) => {
              console.log(e);
            });
          }
        }, {
          text: 'More',
          handler: () => {
            console.log('More clicked');
            let message = 'invite';
            this.socialSharing.share(message, '', '', 'https://play.google.com/store/apps/details?id=com.com.rytefix&hl=en').then(() => {
              console.log('success');
            }).catch((e) => {
              console.log(e);
            });
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  gotoTabspage() {
    this.nav.push(TabsPage);
  }
  gotoProfilepage() {
    this.nav.push(ProfilePage);
  }
  gotoChangepasspage() {
    this.nav.push(ChangepassPage);
  }

}
