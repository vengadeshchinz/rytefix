import { Component, ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the QuoteviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-quoteview',
  templateUrl: 'quoteview.html',
})
export class QuoteviewPage {
  options : GeolocationOptions;
  currentPos : Geoposition;
  regionals: any = [];
  map: any;
  make:any;
  model:any;
  problem:any;
  pickup:any;
  bookingdate:any;
  soft:any;
  hard:any;
  othermodel:any;
  booking_date:any;
  @ViewChild('map') mapElement: ElementRef;
  mapview:any;
  listview:any;
  quoteview:any;
  quotview:any;
  responsedata:any;
  constructor(public navCtrl: NavController,
    public AuthServiceProvider:AuthServiceProvider, 
    public navParams: NavParams,
    private callNumber: CallNumber,
    private geolocation: Geolocation) {
      this.mapload();
    this.mapview=true;
    this.listview=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteviewPage');
   
   this.quoteget();
  }
  listshow(){
    this.mapview=false;
    this.listview=true;
  }
  mapshow(){
    this.refresh();
    this.mapload();
    this.mapview=true;
    this.listview=false;
  }
  quoteget(){
  console.log(localStorage.getItem("loggedData"));
      var quotedata=JSON.parse(localStorage.getItem("loggedData"));
     console.log(quotedata);
      this.AuthServiceProvider.postData(quotedata[0],'quoteView').then((result) => {
           console.log(result);
          this.quoteview=result;
          this.make= this.quoteview[0].make;
          this.model= this.quoteview[0].model;
          this.soft= this.quoteview[0].softService;
          this.hard= this.quoteview[0].hardService;
          this.othermodel= this.quoteview[0].othermodel;
          this.pickup= this.quoteview[0].pickup_type;
          this.booking_date= this.quoteview[0].posted_on;
          this.regionals=result;
          this.regionals.forEach(function (o) {
            Object.keys(o).forEach(function (k) {
                if (isFinite(o[k])) {
                    o[k] = +o[k];
                }
            });
        });

        console.log(this.regionals);
  this.mapload();
              // this.navCtrl.setRoot(HomePage);
      });

  }
  quoteChat(rid){

  }
  quoteCall(mobile){
    console.log(mobile);
    this.callNumber.callNumber(mobile, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
  quoteAccept(id){
console.log(id);
this.AuthServiceProvider.postData(id,'serviceAccept').then((result) => {
  this.responsedata=result;
  if(this.responsedata.status==true){
    this.refresh();
   alert("Service accept successfully");
  }
});
  }

  quoteIgnore(id){
    console.log(id);
    this.AuthServiceProvider.postData(id,'serviceIgnore').then((result) => {
      this.responsedata=result;
      if(this.responsedata.status==true){
        this.refresh();
       alert("Service ignore successfully");
      }
    });
  }
  refresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
   console.log("refresh");
  }
  mapload(){
   //  this.loadMap(13.08648395538330,80.27350616455078 );
     this.options = {
          enableHighAccuracy : true
     };
  
      this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
  
          this.currentPos = pos;      
          console.log(pos);
          console.log(pos.coords.latitude+','+pos.coords.longitude)
          this.addMap(pos.coords.latitude,pos.coords.longitude);
      //  this.loadMap(pos.coords.latitude,pos.coords.longitude);
      },(err : PositionError)=>{
         console.log("error : " + err.message);
      });
   
   }
   /*##User location load##*/
   addMap(lat, long) {
    let latLng = new google.maps.LatLng(lat, long);
    let mapOptions = {
      center: latLng,
      zoom: 10,
      visible:false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
    let markers = [];
    console.log(this.regionals);
    for (let regional of this.regionals) {
   
      console.log(regional.latitude+','+regional.longitude);
      let markerData = {
        position: {
          lat: regional.latitude,
          lng: regional.longitude
        },
        map: this.map,
       // icon:this.nabo_img,
        title: regional.username,
      };
    
      regional.marker = new google.maps.Marker(markerData);
      markers.push(regional.marker);
      //let content = regional.username; 
    
      //infoWindow.open(this.map, regional.marker);
      regional.marker.addListener('click', () => {
       
        let content = "<div id='iw-content' class='iw-content'><div class='iw-subTitle'>Vendor name: "+regional.username +"</div><p>Exact price: "+regional.exactprice+"</p><p>Warranty: "+regional.warranty+",</p><p>Description: "+regional.description+"</p><button ion-button color='red'  class='button' (click)='quoteChat("+regional.id+")' icon-only>Chat</button>"+
        "<button ion-button color='light'  class='button' (click)='quoteCall("+regional.mobile+")' icon-only>Call</button>"+
        "<button ion-button color='red'  class='button' (click)='quoteAccept("+regional.id+")' icon-only>Accept</button>"+
        "<button ion-button color='light'  class='button' (click)='quoteIgnore("+regional.id+")' icon-only>Ignore</button></div>'";                   
        let infoWindow = new google.maps.InfoWindow({
        content: content
        });
        infoWindow.open(this.map, regional.marker);
        for (let c of this.regionals) {
          console.log(c);
          c.current = false;
         // c.infoWindow.close();
        }
        this.regionals = regional;
        
        let markerData = {
          position: {
            lat: regional.latitude,
            lng: regional.longitude
          },
          map: this.map,
        
          title: regional.title,
        };
        regional.marker = new google.maps.Marker(markerData);
        markers.push(regional.marker);
        console.log(regional.marker);
        console.log(regional);
     
        console.log(regional.latitude+','+regional.longitude);
      
        //this.othersAddress = regional.username+','+regional.street_address+regional.city +regional.country ;
       // this.othersAddress = ` ${regional.username}, ${regional.street_address}, ${regional.city}, ${regional.country} ` ;
   
       this.map.panTo(regional.marker.getPosition());
  
      });
    }

  }
loadMap(lat,long){
 console.log(lat+","+long);
  console.log("lat and lang")
  let latLng= new google.maps.LatLng(lat, long);
  console.log(latLng);
  let mapOptions={
    center:latLng,
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);
this.addMarker();
}
/*##user location mark in map##*/
addMarker(){
  console.log("marker");
 // let cur_img='http://rayi.in/naboApi/mapicon/nabo_home.png';
      let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
      });
  
      let content = "<p>This is your current position !</p>";          
      let infoWindow = new google.maps.InfoWindow({
      content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      //this.othersAddress = "This is your current position !";
     });
  
  }

}
