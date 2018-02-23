// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ServicestateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicestateProvider {

  constructor(public http: Http) {
    console.log('Hello ServicestateProvider Provider');
  }

  reportproblem(vid,bid,reason){
   
  // return this.http.get("http://rytefix.in/apitest/vendorapinew.php?action=newServiceDetails&vid="+userid)
  return this.http.get("http://sunrisetechs.com/api/cusapi.php?action=cusReportProblem&vid="+vid+"&bid="+bid+"&reason="+reason)
  .map(res =>{ 
     console.log(res.json());
    return res.json()
  })
  
}

completeService(vid,bid){
   
return this.http.get("http://sunrisetechs.com/api/cusapi.php?action=bookingCompleted&bid="+bid+"&vid="+vid)
.map(res =>{ 
   console.log(res.json());
  return res.json()
})

}

// http://sunrisetechs.com/api/cusapi.php?action=promoApply&cid=101&bid=121&pcode=Test

creditearns(cid){
  return this.http.get("http://sunrisetechs.com/api/cusapi.php?action=customerEarning&cid="+cid)
  .map(res =>{ 
     console.log(res.json());
    return res.json()
  })
  
  }

  promocode(cid,bid,pcode){
    return this.http.get("http://sunrisetechs.com/api/cusapi.php?action=promoApply&cid="+cid+"&bid="+bid+"&pcode="+pcode)
  .map(res =>{ 
     console.log(res.json());
    return res.json()
  })
  }

  // push(cid,bid,pcode){
  //   return this.http.get("http://sunrisetechs.com/api/cusapi.php?action=promoApply&cid="+cid+"&bid="+bid+"&pcode="+pcode)
  // .map(res =>{ 
  //    console.log(res.json());
  //   return res.json()
  // })
  // }

}
