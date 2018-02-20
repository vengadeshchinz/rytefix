import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 import { Http,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the AddDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddDataProvider {

  constructor(public http: Http) {
    console.log('Hello AddDataProvider Provider');
  }

  getFaq(){
    return this.http.get('http://sunrisetechs.com/api/vendorapi.php?action=getfaqData')
    .map(res =>{ 
      console.log(res.json());
      return res.json()
    })
  }
}