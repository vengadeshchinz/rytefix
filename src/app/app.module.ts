import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ServicebookingPage } from '../pages/servicebooking/servicebooking';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { QuotehistoryPage } from '../pages/quotehistory/quotehistory';
import { QuoteviewPage } from '../pages/quoteview/quoteview';
import { FaqPage } from '../pages/faq/faq';
import { ContactusPage } from '../pages/contactus/contactus';
import { ChangepassPage } from '../pages/changepass/changepass';
import { InvitefrdPage } from  '../pages/invitefrd/invitefrd';
import { ProfilePage } from '../pages/profile/profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { IntrosliderPage } from '../pages/introslider/introslider';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { WalletPage } from '../pages/wallet/wallet';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ServicebookingPage,
    LoginPage,
    QuotehistoryPage,
    FaqPage,
    ContactusPage,
    ChangepassPage,
    ProfilePage,
    InvitefrdPage,
    QuoteviewPage,
    RegisterPage,
    IntrosliderPage,
    WalletPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ServicebookingPage,
    LoginPage,
    RegisterPage,
    FaqPage,
    ContactusPage,
    ChangepassPage,
    InvitefrdPage,
    ProfilePage,
    QuotehistoryPage,
    QuoteviewPage,
    IntrosliderPage,
    WalletPage,
  ],
  providers: [
    UniqueDeviceID,
    StatusBar,
    SplashScreen,
    Geolocation,
    CallNumber,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
