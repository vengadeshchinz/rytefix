import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QuoteviewPage } from '../quoteview/quoteview';
import { EditservicebookingPage } from '../editservicebooking/editservicebooking';
/**
 * Generated class for the QuotehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotehistory',
  templateUrl: 'quotehistory.html',
})
export class QuotehistoryPage {
  quoteHistory:any;
  responsedata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public AuthServiceProvider:AuthServiceProvider) {
  }
  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotehistoryPage');
    if(JSON.parse(localStorage.getItem("loggedData"))){
      let logged=JSON.parse(localStorage.getItem("loggedData"));
     console.log(logged);
      this.AuthServiceProvider.postData(logged[0],'quoteHistory').then((result) => {
           console.log(result);
           this.quoteHistory=result;
              // this.navCtrl.setRoot(HomePage);
      });
  }
  }
  refresh() {
    this.navCtrl.push(this.navCtrl.getActive().component);
   console.log("refresh");
  }
  quoteShow(book_id){
    console.log(book_id);
    let service =JSON.parse(localStorage.getItem('loggedData'));
  
    service[0]['book_id']=book_id;
    console.log(service);
    localStorage.setItem('loggedData',JSON.stringify(service)); 
    console.log(JSON.parse(localStorage.getItem('loggedData')));
    this.navCtrl.push(QuoteviewPage);
  }
  ServiceCancel(cancel_id){

    this.AuthServiceProvider.postData(cancel_id,'serviceCancel').then((result) => {
      this.responsedata=result;
      if(this.responsedata.status==true){
        this.refresh();
       alert("Service cancel successfully");
      }else{
      
      }

  });

}
editBooking(book_id,gadget){
  let data ={booking_id:book_id,gadget:gadget};
  console.log(data);
  this.navCtrl.push(EditservicebookingPage, {item: data});
}
}
