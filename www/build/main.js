webpackJsonp([16],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicebookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_servicestate_servicestate__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ServicebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Port = (function () {
    function Port() {
    }
    return Port;
}());
var ServicebookingPage = (function () {
    function ServicebookingPage(navCtrl, platform, navParams, media, file, loadingCtrl, transfer, camera, AuthServiceProvider, toastCtrl, serviceState) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.media = media;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.AuthServiceProvider = AuthServiceProvider;
        this.toastCtrl = toastCtrl;
        this.serviceState = serviceState;
        this.recording = false;
        this.audioList = [];
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            pickup: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            make: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            modelno: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            soft: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            hard: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            loc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            promocode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            others: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            pickup1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            make1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            modelno1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            describe: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            loc1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            promocode1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        this.userData = { "make": "", "modelno": "", "soft": "", "hard": "", "others": "", "pickup": "", "loc": "", "image": "", "audio": "", "promocode": "" };
        this.userdata1 = { "make1": "", "modelno1": "", "describe": "", "pickup1": "", "loc1": "", "image": "", "audio": "", "promocode1": "" };
        localStorage.setItem('serviceBooking', "");
        localStorage.setItem('serviceBooking1', "");
        localStorage.setItem("imageList", "");
        localStorage.setItem("audiolist", "");
        //   this.countStart=false;
        //  this.time();
        this.preferLocation();
        //this.userData.require = this.form.controls['name="check"'].value;
        if (localStorage.getItem('gadget') == "Mobile" || localStorage.getItem('gadget') == "Laptop" || localStorage.getItem('gadget') == "Tablet") {
            this.makeService();
            this.softService();
            this.hardService();
            this.mobile = true;
            this.printer = false;
        }
        else {
            this.printer = true;
        }
        this.disable = true;
        this.other = false;
        this.searchBar = false;
    }
    Object.defineProperty(ServicebookingPage.prototype, "make", {
        get: function () {
            return this.form.get('make');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "modelno", {
        get: function () {
            return this.form.get('modelno');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "soft", {
        get: function () {
            return this.form.get('soft');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "hard", {
        get: function () {
            return this.form.get('hard');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "others", {
        get: function () {
            return this.form.get('others');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "make1", {
        get: function () {
            return this.form1.get('make1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "modelno1", {
        get: function () {
            return this.form1.get('modelno1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "describe", {
        get: function () {
            return this.form1.get('describe');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "loc1", {
        get: function () {
            return this.form1.get('loc1');
        },
        enumerable: true,
        configurable: true
    });
    ServicebookingPage.prototype.portChange = function (event) {
        console.log('port:', event.value.length);
        console.log(event.value.length);
        if (event.value.length < 2) {
            this.disable = true;
            alert("Minimum 2 service provider select");
        }
        else if (event.value.length > 3) {
            alert("Maximum 3 service provider select");
            this.disable = true;
        }
        else {
            this.disable = false;
        }
    };
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
    ServicebookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicebookingPage');
    };
    ServicebookingPage.prototype.makeService = function () {
        var _this = this;
        console.log(localStorage.getItem('gadget'));
        var gadget = localStorage.getItem('gadget');
        this.AuthServiceProvider.postData(gadget, 'makeService').then(function (result) {
            _this.makedropdown = result;
            console.log(_this.makedropdown);
        });
    };
    ServicebookingPage.prototype.softService = function () {
        var _this = this;
        var gadget = localStorage.getItem('gadget');
        this.AuthServiceProvider.postData(gadget, 'softService').then(function (result) {
            _this.softdropdown = result;
            console.log(_this.softdropdown);
        });
    };
    ServicebookingPage.prototype.hardService = function () {
        var _this = this;
        var gadget = localStorage.getItem('gadget');
        this.AuthServiceProvider.postData(gadget, 'hardService').then(function (result) {
            _this.harddropdown = result;
            console.log(_this.harddropdown);
        });
    };
    ServicebookingPage.prototype.preferLocation = function () {
        var _this = this;
        this.AuthServiceProvider.getData('preferLocation').then(function (result) {
            _this.preferdropdown = result;
            console.log(_this.preferdropdown);
            var data = new Array;
            for (var i = 0; i < _this.preferdropdown.length; i++) {
                var obj = _this.preferdropdown[i];
                data.push(obj.area);
            }
            console.log(data);
            _this.ports = data;
        });
    };
    ServicebookingPage.prototype.jsonConcat = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    ServicebookingPage.prototype.serviceReq = function () {
        console.log(this.userData.loc);
        this.userData['deviceId'] = localStorage.getItem('deviceId');
        // let serviceUser=this.jsonConcat(device, this.userData);
        console.log(this.userData);
        if (this.userData.make && this.userData.modelno && this.userData.soft || this.userData.hard || this.userData.others && this.userData.pickup && this.userData.loc) {
            localStorage.setItem('serviceBooking', JSON.stringify(this.userData));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else {
            alert("All fileds required");
        }
    };
    ServicebookingPage.prototype.serviceReq1 = function () {
        console.log(this.userdata1.loc1);
        this.userdata1['deviceId'] = localStorage.getItem('deviceId');
        // let serviceUser=this.jsonConcat(device, this.userData);
        console.log(this.userdata1);
        if (this.userdata1.make1 && this.userdata1.modelno1 && this.userdata1.describe || this.userdata1.pickup1 && this.userdata1.loc1) {
            localStorage.setItem('serviceBooking1', JSON.stringify(this.userdata1));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else {
            alert("All fileds required");
        }
    };
    ServicebookingPage.prototype.servicemake = function (data) {
        if (data == "others" || data == "") {
            console.log("other");
            this.other = true;
        }
    };
    ServicebookingPage.prototype.serviceLoc = function (data) {
        console.log(data.length);
        if (data.length < 2) {
            alert("Minimum 2 service provider select");
        }
        else if (data.length >= 2) {
            alert(" select");
            this.disable = false;
        }
    };
    ServicebookingPage.prototype.preferLoc = function () {
        console.log("prefer");
        this.searchBar = true;
    };
    //Audio function Start
    ServicebookingPage.prototype.ionViewWillEnter = function () {
        this.getAudioList();
    };
    ServicebookingPage.prototype.getAudioList = function () {
        if (localStorage.getItem("audiolist")) {
            this.audioList = JSON.parse(localStorage.getItem("audiolist"));
            console.log(this.audioList);
        }
    };
    ServicebookingPage.prototype.audioDelete = function () {
        alert("test");
        localStorage.setItem("audiolist", "");
        this.userData['audio'] = "";
        this.userdata1['audio'] = "";
    };
    ServicebookingPage.prototype.startRecord = function () {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.Audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.Audio = this.media.create(this.filePath);
        }
        this.Audio.startRecord();
        this.recording = true;
        // this.countStart=true;
        // this.time();
    };
    ServicebookingPage.prototype.stopRecord = function () {
        this.Audio.stopRecord();
        // this.countStart=false;
        // this.stop();
        this.userData['audio'] = this.fileName;
        this.userdata1['audio'] = this.fileName;
        var data = { filename: this.fileName, filePath: this.filePath };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();
    };
    ServicebookingPage.prototype.playAudio = function (file, idx) {
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.Audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
            this.Audio = this.media.create(this.filePath);
        }
        this.Audio.play();
        this.Audio.setVolume(0.8);
    };
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
    ServicebookingPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            _this.imageFileName = 'image' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.jpg';
            _this.userData['image'] = _this.imageFileName;
            console.log(_this.imageFileName);
            _this.userdata1['image'] = _this.imageFileName;
            var data = { imgfilename: _this.imageFileName, imgfilePath: _this.imageURI };
            // this.imgList.push(data);
            localStorage.setItem("imageList", JSON.stringify(data));
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    ServicebookingPage.prototype.imageDelete = function () {
        localStorage.setItem("imageList", "");
        this.userData['image'] = "";
        this.userdata1['image'] = "";
    };
    ServicebookingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
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
    ServicebookingPage.prototype.promocode = function () {
        var cid;
        var bid;
        var promocode;
        this.serviceState.promocode(cid, bid, promocode).subscribe(function (data) {
        }), function (error) {
            console.log(error);
        };
    };
    ServicebookingPage.prototype.promochange = function (data) {
        console.log(data);
    };
    ServicebookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-servicebooking',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\servicebooking\servicebooking.html"*/'<!--\n\n  Generated template for the ServicebookingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" style="color:#fff"></ion-icon>\n\n      </button>\n\n      <ion-title>New Service Booking</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n<ion-content padding *ngIf="mobile">\n\n    <ion-list no-lines>\n\n  <form [formGroup]="form" (ngSubmit)="serviceReq()">\n\n    <ion-item >\n\n      <!-- <ion-label>Select Make</ion-label> -->\n\n      <ion-select class="my-select" formControlName="make" name="make" [(ngModel)]="userData.make" (ionChange)="servicemake($event)">\n\n        <ion-option value="" disabled>Select Make</ion-option>\n\n        <ion-option *ngFor="let key  of makedropdown" value="{{key.id}}">{{key.make_name}}</ion-option>\n\n        <ion-option value="others">others</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="other">\n\n      <ion-input formControlName="make" name="make" type="text" [(ngModel)]="userData.make" placeholder="Enter Service Make" clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="make.touched && make.invalid" class="alertstyle">\n\n      <div *ngIf="make.errors.required">Select Make</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-input formControlName="modelno" name="modelno" type="text" [(ngModel)]="userData.modelno" placeholder="Enter Model Number"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="modelno.touched && modelno.invalid" class="alertstyle">\n\n      <div *ngIf="modelno.errors.required">Select Model</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-label class="align">Select Service Required</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <!-- <ion-label>Software</ion-label> -->\n\n      <ion-select  class="my-select" formControlName="soft" name="soft" [(ngModel)]="userData.soft">\n\n        <ion-option value="" disabled>Software</ion-option>\n\n        <ion-option *ngFor="let key  of softdropdown" value="{{key.id}}">{{key.service}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <!-- <ion-label>Hardware</ion-label> -->\n\n      <ion-select  class="my-select" formControlName="hard" name="hard" [(ngModel)]="userData.hard">\n\n        <ion-option value="" disabled>Hardware</ion-option>\n\n        <ion-option *ngFor="let key  of harddropdown" value="{{key.id}}">{{key.service}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n   \n\n    <ion-item>\n\n      <ion-input formControlName="others" name="others" type="text" [(ngModel)]="userData.others" placeholder="Others" clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="others.touched && others.invalid||hard.touched && hard.invalid||soft.touched && soft.invalid" class="alertstyle">\n\n      <div *ngIf="others.errors.required||hard.errors.required||soft.errors.required">Select Model</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <!-- <ion-label floating>Home Pick Up</ion-label> -->\n\n        <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userData.pickup" formControlName="pickup" >\n\n            <ion-option value="" disabled>Home Pick Up</ion-option>       \n\n          <ion-option value="required">Required</ion-option>\n\n          <ion-option value="notrequired">Not Required</ion-option>\n\n         \n\n      </ion-select>\n\n      </ion-item>\n\n    <ion-item>\n\n      <select-searchable  class="my-select"\n\n      formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc"\n\n          title="Preferred Location"\n\n        \n\n          [items]="ports"\n\n          [canSearch]="true"\n\n          [multiple]="true"\n\n          (onChange)="portChange($event)">\n\n      </select-searchable>\n\n  </ion-item>\n\n  <div  class="alertstyle">\n\n      <div >*Select Minimum 2 areas and Maximum 3</div>\n\n    </div>\n\n  <ion-item>\n\n      <ion-input   formControlName="promocode" name="promocode" type="text" [(ngModel)]="userData.promocode" (ionChange)="promochange(userData.promocode)" placeholder="Enter promo code"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n     <!-- <ion-item >\n\n      <ion-label>Select Preferred Locationfor Service</ion-label>\n\n      <ion-select formControlName="loc" name="loc" multiple [(ngModel)]="userData.loc" (ionChange)="serviceLoc($event)">\n\n        <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- <ion-item>\n\n      <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n\n    </ion-item> -->\n\n    <ion-row class="img">\n\n      <ion-col col-5> <h6 style="color:#fff" >Image :</h6></ion-col>\n\n      <ion-col col-6>\n\n        <div class="upload-img" (click)="getImage()">\n\n          {{userData.image}} <ion-icon name="camera"></ion-icon> \n\n          <div *ngIf="!userData.image==\'\'" class="upload-img" (click)="imageDelete()" >\n\n            <ion-icon name="ios-close-circle"></ion-icon>\n\n        </div>  \n\n        </div>\n\n     </ion-col>\n\n    </ion-row>\n\n    <ion-row class="voice">\n\n      <ion-col col-5> <h6 style="color:#fff" >Voice Note:</h6></ion-col>\n\n      <ion-col col-6 ><div *ngIf="userData.audio"> {{userData.audio}}\n\n          <div class="upload-audio" (click)="audioDelete()" >\n\n              <ion-icon name="ios-close-circle"></ion-icon>\n\n          </div></div>\n\n             \n\n              <div class="upload-audio audiostop"  (click)="stopRecord()" *ngIf="recording">\n\n                  <ion-icon name="ios-mic"></ion-icon>\n\n              </div>\n\n              <div *ngIf="userData.audio==\'\'">\n\n                <div class="upload-audio audiostart" (click)="startRecord()"  *ngIf="!recording" >\n\n                  <ion-icon name="ios-mic-outline"></ion-icon>\n\n              </div>\n\n                \n\n              </div>\n\n             \n\n              <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n\n              <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- <ion-list>\n\n      <ion-item *ngFor="let audio of audioList; index as i;">\n\n        <p>{{audio.filename}}</p>\n\n        {{userData.audio}}\n\n         <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> \n\n        <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n\n            <ion-icon name="play"></ion-icon>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list> -->\n\n    <!-- <ion-item>\n\n      <p>{{imageURI}}</p>\n\n      <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n\n      <button ion-button (click)="uploadFile()">Upload</button>\n\n    </ion-item> -->\n\n    <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Service Request</button>\n\n </form>\n\n </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-content padding *ngIf="printer">\n\n    <ion-list no-lines>\n\n  <form [formGroup]="form1" (ngSubmit)="serviceReq1()">\n\n    <ion-item >\n\n      <ion-input formControlName="make1" name="make1" type="text" [(ngModel)]="userdata1.make1" placeholder="Enter Service Make" clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="make1.touched && make1.invalid" class="alertstyle">\n\n      <div *ngIf="make1.errors.required">Select Make</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-input formControlName="modelno1" name="modelno1" type="text" [(ngModel)]="userdata1.modelno1" placeholder="Enter Model Number"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="modelno1.touched && modelno1.invalid" class="alertstyle">\n\n      <div *ngIf="modelno1.errors.required">Select Model</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      \n\n      <ion-textarea formControlName="describe" name="describe" type="text" [(ngModel)]="userdata1.describe" placeholder="Describe the problem"\n\n        clearInput></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <!-- <ion-label floating>Home Pick Up</ion-label> -->\n\n        <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userdata1.pickup1" formControlName="pickup1" >\n\n            <ion-option value="" disabled>Home Pick Up</ion-option>       \n\n          <ion-option value="required">Required</ion-option>\n\n          <ion-option value="notrequired">Not Required</ion-option>\n\n         \n\n      </ion-select>\n\n      </ion-item>\n\n    <ion-item>\n\n      <select-searchable\n\n      formControlName="loc1" name="loc1" type="text" [(ngModel)]="userdata1.loc1"\n\n          placeholder="Preferred Location"\n\n          [items]="ports"\n\n          [canSearch]="true"\n\n          [multiple]="true"\n\n          (onChange)="portChange($event)">\n\n      </select-searchable>\n\n  </ion-item>\n\n  <div  class="alertstyle">\n\n      <div >*Select Minimum 2 areas and Maximum 3</div>\n\n    </div>\n\n  <ion-item>\n\n      <ion-input formControlName="promocode1" name="promocode1" type="text" [(ngModel)]="userdata1.promocode1" placeholder="Enter promo code"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <ion-label>Select Preferred Locationfor Service</ion-label>\n\n      <ion-select formControlName="loc1" name="loc1" multiple [(ngModel)]="userdata1.loc1" (ionChange)="serviceLoc($event)">\n\n        <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n <!-- <ion-item>\n\n      <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n\n    </ion-item>  -->\n\n    <ion-row class="img">\n\n      <ion-col col-5> <h6 style="color:#fff" >Image :</h6></ion-col>\n\n      <ion-col col-6>\n\n        <div class="upload-img" (click)="getImage()">\n\n          {{userData.image}} <ion-icon name="camera"></ion-icon> \n\n          <div *ngIf="!userData.image==\'\'" class="upload-img" (click)="imageDelete()" >\n\n            <ion-icon name="ios-close-circle"></ion-icon>\n\n        </div>   \n\n        </div>\n\n     </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-row class="voice">\n\n      <ion-col col-5> <h6 style="color:#fff" >Voice Note:</h6></ion-col>\n\n      <ion-col col-6 ><div *ngFor="let audio of audioList; index as i;"> {{audio.filename}}\n\n          <div class="upload-audio" (click)="audioDelete()" >\n\n              <ion-icon name="ios-close-circle"></ion-icon>\n\n          </div></div>\n\n             \n\n              <div class="upload-audio audiostop"  (click)="stopRecord()" *ngIf="recording">\n\n                  <ion-icon name="ios-mic"></ion-icon>\n\n              </div>\n\n              <div class="upload-audio audiostart"  (click)="startRecord()"  *ngIf="!recording" >\n\n                  <ion-icon name="ios-mic-outline"></ion-icon>\n\n              </div>\n\n              <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n\n              <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-list>\n\n      <ion-item *ngFor="let audio of audioList; index as i;">\n\n        <p>{{audio.filename}}</p>\n\n        {{userData.audio}}\n\n        <!-- <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> -->\n\n        <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n\n            <ion-icon name="play"></ion-icon>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Service Request</button>\n\n  </form>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\servicebooking\servicebooking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_9__providers_servicestate_servicestate__["a" /* ServicestateProvider */]])
    ], ServicebookingPage);
    return ServicebookingPage;
}());

//# sourceMappingURL=servicebooking.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_add_data_add_data__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = (function () {
    function FaqPage(navCtrl, faqapi, navParams) {
        this.navCtrl = navCtrl;
        this.faqapi = faqapi;
        this.navParams = navParams;
        // fdata:any={};
        this.item = [];
        this.gotoFaq();
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage.prototype.gotoFaq = function () {
        var _this = this;
        console.log("data");
        this.faqapi.getFaq()
            .subscribe(function (data) {
            _this.item = data[0].content;
            //this.fdata=this.item.fdata;
            console.log(_this.item);
            // console.log(this.fdata.content);
        });
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\faq\faq.html"*/'<!--\n\n  Generated template for the FaqPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>FAQ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div [innerHTML]= "this.item"></div> \n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_add_data_add_data__["a" /* AddDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = (function () {
    function ContactusPage(navCtrl, call, emailComposer, navParams) {
        this.navCtrl = navCtrl;
        this.call = call;
        this.emailComposer = emailComposer;
        this.navParams = navParams;
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage.prototype.contactUs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.call.callNumber('7358711554', true)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContactusPage.prototype.EmailUs = function () {
        var email = {
            to: 'admin@rytefix.com',
            subject: 'Your Subject',
            body: ' Enter your Query with Username',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contactus',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\contactus\contactus.html"*/'<!--\n\n  Generated template for the ContactusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n      <!-- <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button> -->\n\n    <ion-title>Contact Us</ion-title>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n  <ion-content class="background" align ="center">\n\n    <!-- <img  src=\'http://sunrisetechs.com/images/imgs/appicon.png\' class="animate-right" width= 60% height=\'auto\'/> -->\n\n    <img  src=\'http://sunrisetechs.com/images/imgs/customerAppImages/logo1.png\' class="animate-right" width= 50% height=\'auto\'/>\n\n    <div class="animate-bottom">\n\n        <h5 class="text">Let us grow together</h5>\n\n    <!-- <div class="div">\n\n    <h1 class="header">About us </h1>\n\n    <p class="paraText"><strong> Rytefix is a free app available to book mobile, laptop and all other electronic gadgets services in Chennai. Connect customers and gadgets service providers in whole new way, intend to bring more transparency and enjoyable experience in market place. Customers have options like “know your cost upfront”, find out “who is nearby” to enjoy hassle free gadgets service experience. Services offered at your doorstep by connecting our trusted service partners with better understanding of your needs on all models of mobiles, laptops and all electronic gadgets. Cracked screen repair and replacement for Samsung , Coolpad and mi brand mobile can be done for very affordable price through RYTEFIX network in Chennai.</strong>\n\n    </p>\n\n    </div> -->\n\n    <button ion-button block class="button" (click)="contactUs()" icon-left>\n\n        <ion-icon name="ios-call-outline"></ion-icon> 7358711554</button> \n\n      <button ion-button block class="emailbutton" (click)="EmailUs()" icon-left>\n\n       <ion-icon name="ios-mail-outline"></ion-icon>admin@rytefix.com</button>\n\n     </div>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditservicebookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quotehistory_quotehistory__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EditservicebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Port = (function () {
    function Port() {
    }
    return Port;
}());
var EditservicebookingPage = (function () {
    function EditservicebookingPage(navCtrl, navParams, AuthServiceProvider, media, file, loadingCtrl, transfer, camera, platform, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
        this.media = media;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.recording = false;
        this.audioList = [];
        this.userData = { "make": "", "modelno": "", "soft": "", "hard": "", "others": "", "pickup": "", "loc": "", "image": "", "audio": "", "bookingid": "" };
        this.userdata1 = { "make1": "", "modelno1": "", "describe": "", "pickup1": "", "loc1": "", "image": "", "audio": "", "bookingid": "" };
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            pickup: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            make: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            modelno: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            soft: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            hard: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            loc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            promocode: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            others: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            pickup1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            make1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            modelno1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            describe: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            loc1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            promocode1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        var data = navParams.get('item');
        this.booking_id = data.booking_id;
        this.gadget = data.gadget;
        this.preferLocation();
        if (this.gadget == "Mobile" || this.gadget == "Laptop" || this.gadget == "Tablet") {
            console.log('gadget', this.gadget);
            this.makeService();
            this.softService();
            this.hardService();
            this.getBookedService();
            this.mobile = true;
            this.printer = false;
        }
        else {
            this.getBookedService();
            this.printer = true;
        }
        this.disable = true;
        this.other = false;
        this.searchBar = false;
    }
    Object.defineProperty(EditservicebookingPage.prototype, "make", {
        get: function () {
            return this.form.get('make');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "modelno", {
        get: function () {
            return this.form.get('modelno');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "soft", {
        get: function () {
            return this.form.get('soft');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "hard", {
        get: function () {
            return this.form.get('hard');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "others", {
        get: function () {
            return this.form.get('others');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "make1", {
        get: function () {
            return this.form1.get('make1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "modelno1", {
        get: function () {
            return this.form1.get('modelno1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "describe", {
        get: function () {
            return this.form1.get('describe');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "loc1", {
        get: function () {
            return this.form1.get('loc1');
        },
        enumerable: true,
        configurable: true
    });
    EditservicebookingPage.prototype.portChange = function (event) {
        console.log('port:', event.value.length);
        console.log(event.value.length);
        if (event.value.length < 2) {
            this.disable = true;
            alert("Minimum 2 service provider select");
        }
        else if (event.value.length > 3) {
            alert("Maximum 3 service provider select");
            this.disable = true;
        }
        else {
            this.disable = false;
        }
    };
    EditservicebookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditservicebookingPage');
    };
    // get booking data to edit
    EditservicebookingPage.prototype.getBookedService = function () {
        var _this = this;
        this.AuthServiceProvider.postData(this.booking_id, 'editData').then(function (result) {
            _this.bookingData = result;
            console.log('booking data', _this.bookingData[0]);
            _this.userData.soft = _this.bookingData[0].software;
            _this.userData.make = _this.bookingData[0].make;
            _this.userData.modelno = _this.bookingData[0].model;
            _this.userData.hard = _this.bookingData[0].hardware;
            _this.userData.others = _this.bookingData[0].others;
            _this.userData.bookingid = _this.booking_id;
            _this.userData.image = _this.bookingData[0].image;
            _this.userData.audio = _this.bookingData[0].audio;
            if (_this.bookingData[0].pickup_type == 'yes') {
                _this.userData.pickup = 'required';
            }
            else {
                _this.userData.pickup = 'notrequired';
            }
            _this.userdata1.make1 = _this.bookingData[0].make;
            _this.userdata1.modelno1 = _this.bookingData[0].model;
            _this.userdata1.describe = _this.bookingData[0].description;
            _this.userdata1.image = _this.bookingData[0].image;
            _this.userdata1.audio = _this.bookingData[0].audio;
            _this.userdata1.bookingid = _this.booking_id;
            if (_this.bookingData[0].pickup_type == 'yes') {
                _this.userdata1.pickup1 = 'required';
            }
            else {
                _this.userdata1.pickup1 = 'notrequired';
            }
        });
        console.log('userdata', this.userData);
        console.log('userdata1', this.userdata1);
    };
    EditservicebookingPage.prototype.serviceReq = function () {
        var _this = this;
        console.log(this.userData.loc);
        console.log(this.userData);
        if (this.userData.make && this.userData.modelno && this.userData.soft || this.userData.hard || this.userData.others && this.userData.pickup && this.userData.loc) {
            this.AuthServiceProvider.postData(this.userData, 'updateBooking').then(function (result) {
                _this.bookingData = result;
                console.log('booking data', _this.bookingData);
                if (_this.bookingData.status == true) {
                    _this.uploadAudio();
                    _this.uploadFile();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'error on updating data',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            });
        }
        else {
            alert("All fileds required");
        }
    };
    EditservicebookingPage.prototype.serviceReq1 = function () {
        var _this = this;
        console.log(this.userdata1.loc1);
        console.log(this.userdata1);
        if (this.userdata1.make1 && this.userdata1.modelno1 && this.userdata1.describe || this.userdata1.pickup1 && this.userdata1.loc1) {
            //  this.navCtrl.setRoot(LoginPage);
            this.AuthServiceProvider.postData(this.userData, 'update1Booking').then(function (result) {
                _this.bookingData = result;
                console.log('booking data', _this.bookingData);
                if (_this.bookingData.status == true) {
                    _this.uploadAudio();
                    _this.uploadFile();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'error on updating data',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            });
        }
        else {
            alert("All fileds required");
        }
    };
    EditservicebookingPage.prototype.makeService = function () {
        var _this = this;
        var gadget = this.gadget;
        console.log(gadget);
        this.AuthServiceProvider.postData(gadget, 'makeService').then(function (result) {
            _this.makedropdown = result;
            console.log(_this.makedropdown);
        });
    };
    EditservicebookingPage.prototype.softService = function () {
        var _this = this;
        var gadget = this.gadget;
        this.AuthServiceProvider.postData(gadget, 'softService').then(function (result) {
            _this.softdropdown = result;
            console.log(_this.softdropdown);
        });
    };
    EditservicebookingPage.prototype.hardService = function () {
        var _this = this;
        var gadget = this.gadget;
        this.AuthServiceProvider.postData(gadget, 'hardService').then(function (result) {
            _this.harddropdown = result;
            console.log(_this.harddropdown);
        });
    };
    EditservicebookingPage.prototype.preferLocation = function () {
        var _this = this;
        this.AuthServiceProvider.getData('preferLocation').then(function (result) {
            _this.preferdropdown = result;
            console.log(_this.preferdropdown);
            var data = new Array;
            for (var i = 0; i < _this.preferdropdown.length; i++) {
                var obj = _this.preferdropdown[i];
                data.push(obj.area);
            }
            console.log(data);
            _this.ports = data;
        });
    };
    EditservicebookingPage.prototype.serviceLoc = function (data) {
        console.log(data.length);
        if (data.length < 2) {
            alert("Minimum 2 service provider select");
        }
        else if (data.length >= 2) {
            alert(" select");
            this.disable = false;
        }
    };
    EditservicebookingPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            _this.imageFileName = 'image' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.jpg';
            _this.userData['image'] = _this.imageFileName;
            console.log(_this.imageFileName);
            _this.userdata1['image'] = _this.imageFileName;
            var data = { imgfilename: _this.imageFileName, imgfilePath: _this.imageURI };
            // this.imgList.push(data);
            localStorage.setItem("imageList", JSON.stringify(data));
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    EditservicebookingPage.prototype.imageDelete = function () {
        localStorage.setItem("imageList", "");
        this.userData['image'] = "";
        this.userdata1['image'] = "";
    };
    EditservicebookingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EditservicebookingPage.prototype.preferLoc = function () {
        console.log("prefer");
        this.searchBar = true;
    };
    //Audio function Start
    EditservicebookingPage.prototype.ionViewWillEnter = function () {
        this.getAudioList();
    };
    EditservicebookingPage.prototype.getAudioList = function () {
        if (localStorage.getItem("audiolist")) {
            this.audioList = JSON.parse(localStorage.getItem("audiolist"));
            console.log(this.audioList);
        }
    };
    EditservicebookingPage.prototype.audioDelete = function () {
        localStorage.setItem("audiolist", "");
        this.userData['audio'] = "";
        this.userdata1['audio'] = "";
    };
    EditservicebookingPage.prototype.startRecord = function () {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.Audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.Audio = this.media.create(this.filePath);
        }
        this.Audio.startRecord();
        this.recording = true;
        // this.countStart=true;
        // this.time();
    };
    EditservicebookingPage.prototype.stopRecord = function () {
        this.Audio.stopRecord();
        // this.countStart=false;
        // this.stop();
        this.userData['audio'] = this.fileName;
        this.userdata1['audio'] = this.fileName;
        var data = { filename: this.fileName, filePath: this.filePath };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();
    };
    EditservicebookingPage.prototype.playAudio = function (file, idx) {
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.Audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
            this.Audio = this.media.create(this.filePath);
        }
        this.Audio.play();
        this.Audio.setVolume(0.8);
    };
    EditservicebookingPage.prototype.uploadFile = function () {
        var _this = this;
        // let loader = this.loadingCtrl.create({
        //   content: "Uploading..."
        // });
        // loader.present();
        var fileTransfer = this.transfer.create();
        console.log('image name', this.imageFileName);
        var options = {
            fileKey: 'file',
            fileName: this.imageFileName,
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: { 'fileName': this.imageFileName }
        };
        fileTransfer.upload(this.imageURI, 'http://sunrisetechs.com/images/image.php', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            // loader.dismiss();
            _this.presentToast("Image uploaded successfully");
            _this.imageDelete();
        }, function (err) {
            console.log(err);
            // loader.dismiss();
            _this.presentToast(err);
        });
    };
    EditservicebookingPage.prototype.uploadAudio = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: "file",
            fileName: this.fileName,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': this.fileName }
        };
        console.log('filepath', this.filePath);
        console.log('filename', this.fileName);
        console.log("userid", this.userid);
        //  fileTransfer.upload('<file path>', '<api endpoint>', options)
        fileTransfer.upload(this.filePath, 'http://sunrisetechs.com/images/audio.php', options)
            .then(function (data) {
            console.log(data);
            _this.audioDelete();
        }, function (err) {
            // error
            console.log(err);
            alert('error');
        });
    };
    EditservicebookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editservicebooking',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\editservicebooking\editservicebooking.html"*/'<ion-header no-border>\n  <ion-toolbar no-padding>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff"></ion-icon>\n    </button>\n    <ion-title>Edit Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding *ngIf="mobile">\n  <ion-list no-lines>\n<form [formGroup]="form" (ngSubmit)="serviceReq()">\n  <ion-item >\n    <!-- <ion-label>Select Make</ion-label> -->\n    <ion-select class="my-select" formControlName="make" name="make" [(ngModel)]="userData.make" (ionChange)="servicemake($event)">\n      <ion-option value="" disabled>Select Make</ion-option>\n      <ion-option *ngFor="let key  of makedropdown" value="{{key.id}}">{{key.make_name}}</ion-option>\n      <ion-option value="others">others</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf="other">\n    <ion-input formControlName="make" name="make" type="text" [(ngModel)]="userData.make" placeholder="Enter Service Make" clearInput></ion-input>\n  </ion-item>\n  <div *ngIf="make.touched && make.invalid" class="alertstyle">\n    <div *ngIf="make.errors.required">Select Make</div>\n  </div>\n\n  <ion-item>\n    <ion-input formControlName="modelno" name="modelno" type="text" [(ngModel)]="userData.modelno" placeholder="Enter Model Number"\n      clearInput></ion-input>\n  </ion-item>\n  <div *ngIf="modelno.touched && modelno.invalid" class="alertstyle">\n    <div *ngIf="modelno.errors.required">Select Model</div>\n  </div>\n\n  <ion-item>\n    <ion-label class="align">Select Service Required</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <!-- <ion-label>Software</ion-label> -->\n    <ion-select  class="my-select" formControlName="soft" name="soft" [(ngModel)]="userData.soft">\n    \n      <!-- <ion-option value=""  disabled>Software</ion-option>  -->\n      <ion-option *ngFor="let key  of softdropdown" value="{{key.id}}" >{{key.service}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <!-- <ion-label>Hardware</ion-label> -->\n    <ion-select  class="my-select" formControlName="hard" name="hard" [(ngModel)]="userData.hard">\n      <ion-option value="" disabled>Hardware</ion-option>\n      <ion-option *ngFor="let key  of harddropdown" value="{{key.id}}">{{key.service}}</ion-option>\n    </ion-select>\n  </ion-item>\n \n  <ion-item>\n    <ion-input formControlName="others" name="others" type="text" [(ngModel)]="userData.others" placeholder="Others" clearInput></ion-input>\n  </ion-item>\n  <div *ngIf="others.touched && others.invalid||hard.touched && hard.invalid||soft.touched && soft.invalid" class="alertstyle">\n    <div *ngIf="others.errors.required||hard.errors.required||soft.errors.required">Select Model</div>\n  </div>\n\n  <ion-item>\n    <!-- <ion-label floating>Home Pick Up</ion-label> -->\n      <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userData.pickup" formControlName="pickup" >\n          <ion-option value="" disabled>Home Pick Up</ion-option>       \n        <ion-option value="required">Required</ion-option>\n        <ion-option value="notrequired">Not Required</ion-option>\n       \n    </ion-select>\n    </ion-item>\n  <ion-item>\n    <select-searchable  class="my-select"\n    formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc"\n        title="Preferred Location"\n      \n        [items]="ports"\n        [canSearch]="true"\n        [multiple]="true"\n        (onChange)="portChange($event)">\n    </select-searchable>\n</ion-item>\n<div  class="alertstyle">\n    <div >*Select Minimum 2 areas and Maximum 3</div>\n  </div>\n<!-- <ion-item>\n    <ion-input   formControlName="promocode" name="promocode" type="text" [(ngModel)]="userData.promocode" placeholder="Enter promo code"\n      clearInput></ion-input>\n  </ion-item> -->\n   <!-- <ion-item >\n    <ion-label>Select Preferred Locationfor Service</ion-label>\n    <ion-select formControlName="loc" name="loc" multiple [(ngModel)]="userData.loc" (ionChange)="serviceLoc($event)">\n      <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n    </ion-select>\n  </ion-item> -->\n  <!-- <ion-item>\n    <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n  </ion-item> -->\n  <ion-row class="img">\n    <ion-col col-5> <h6 style="color:#fff" >Image :</h6></ion-col>\n    <ion-col col-6>\n      <div class="upload-img" (click)="getImage()">\n        {{userData.image}} <ion-icon name="camera"></ion-icon> \n        <div class="upload-img" (click)="imageDelete()" *ngIf="!recording">\n          <ion-icon name="ios-close-circle"></ion-icon>\n      </div>  \n      </div>\n   </ion-col>\n  </ion-row>\n  <ion-row class="voice">\n    <ion-col col-5> <h6 style="color:#fff" >Voice Note:</h6></ion-col>\n    <ion-col col-6 ><div  *ngIf="userData.audio"> {{userData.audio}}\n        <div class="upload-audio" (click)="audioDelete()">\n            <ion-icon name="ios-close-circle"></ion-icon>\n        </div></div>\n           \n            <div class="upload-audio audiostop"  (click)="stopRecord()" *ngIf="recording">\n                <ion-icon name="ios-mic"></ion-icon>\n            </div>\n            <!-- <div class="upload-audio audiostart"  (click)="startRecord()"  *ngIf="!recording" >\n                <ion-icon name="ios-mic-outline"></ion-icon>\n            </div> -->\n            <div *ngIf="userData.audio==\'\'">\n              <div class="upload-audio audiostart" (click)="startRecord()"  *ngIf="!recording" >\n                <ion-icon name="ios-mic-outline"></ion-icon>\n            </div>\n              \n            </div>\n            <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n            <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n    </ion-col>\n  </ion-row>\n  <!-- <ion-list>\n    <ion-item *ngFor="let audio of audioList; index as i;">\n      <p>{{audio.filename}}</p>\n      {{userData.audio}}\n       <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> \n      <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n          <ion-icon name="play"></ion-icon>\n      </div>\n    </ion-item>\n  </ion-list> -->\n  <!-- <ion-item>\n    <p>{{imageURI}}</p>\n    <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n    <button ion-button (click)="uploadFile()">Upload</button>\n  </ion-item> -->\n  <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Service Request</button>\n</form>\n</ion-list>\n\n</ion-content>\n<ion-content padding *ngIf="printer">\n  <ion-list no-lines>\n<form [formGroup]="form1" (ngSubmit)="serviceReq1()">\n  <ion-item >\n    <ion-input formControlName="make1" name="make1" type="text" [(ngModel)]="userdata1.make1" placeholder="Enter Service Make" clearInput></ion-input>\n  </ion-item>\n  <div *ngIf="make1.touched && make1.invalid" class="alertstyle">\n    <div *ngIf="make1.errors.required">Select Make</div>\n  </div>\n\n  <ion-item>\n    <ion-input formControlName="modelno1" name="modelno1" type="text" [(ngModel)]="userdata1.modelno1" placeholder="Enter Model Number"\n      clearInput></ion-input>\n  </ion-item>\n  <div *ngIf="modelno1.touched && modelno1.invalid" class="alertstyle">\n    <div *ngIf="modelno1.errors.required">Select Model</div>\n  </div>\n\n  <ion-item>\n    \n    <ion-textarea formControlName="describe" name="describe" type="text" [(ngModel)]="userdata1.describe" placeholder="Describe the problem"\n      clearInput></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <!-- <ion-label floating>Home Pick Up</ion-label> -->\n      <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userdata1.pickup1" formControlName="pickup1" >\n          <ion-option value="" disabled>Home Pick Up</ion-option>       \n        <ion-option value="required">Required</ion-option>\n        <ion-option value="notrequired">Not Required</ion-option>\n       \n    </ion-select>\n    </ion-item>\n  <ion-item>\n    <select-searchable\n    formControlName="loc1" name="loc1" type="text" [(ngModel)]="userdata1.loc1"\n        placeholder="Preferred Location"\n        [items]="ports"\n        [canSearch]="true"\n        [multiple]="true"\n        (onChange)="portChange($event)">\n    </select-searchable>\n</ion-item>\n<div  class="alertstyle">\n    <div >*Select Minimum 2 areas and Maximum 3</div>\n  </div>\n<!-- <ion-item>\n    <ion-input formControlName="promocode1" name="promocode1" type="text" [(ngModel)]="userdata1.promocode1" placeholder="Enter promo code"\n      clearInput></ion-input>\n  </ion-item> -->\n  <!-- <ion-item>\n    <ion-label>Select Preferred Locationfor Service</ion-label>\n    <ion-select formControlName="loc1" name="loc1" multiple [(ngModel)]="userdata1.loc1" (ionChange)="serviceLoc($event)">\n      <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n    </ion-select>\n  </ion-item> -->\n<!-- <ion-item>\n    <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n  </ion-item>  -->\n  <div class="upload-img" (click)="getImage()">\n      <ion-icon name="camera"></ion-icon>\n      <p>{{imageURI}}</p>\n      {{userData.image}}\n  </div>\n  \n  <ion-row class="voice">\n    <ion-col col-5> <h6 style="color:#fff" >Voice Note :</h6></ion-col>\n    <ion-col col-4>\n        <!-- <button class="record" ion-button (click)="audio()"></button>\n            <ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon> record</button> -->\n            <div class="upload-audio" (click)="stopRecord()" *ngIf="recording">\n                <ion-icon name="ios-mic"></ion-icon>\n            </div>\n            <div class="upload-audio" (click)="startRecord()"  *ngIf="!recording" >\n                <ion-icon name="ios-mic"></ion-icon>\n            </div>\n            <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n            <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n    </ion-col>\n  </ion-row>\n  <ion-list>\n    <ion-item *ngFor="let audio of audioList; index as i;">\n      <p>{{audio.filename}}</p>\n      {{userData.audio}}\n      <!-- <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> -->\n      <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n          <ion-icon name="play"></ion-icon>\n      </div>\n    </ion-item>\n  </ion-list>\n  <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Save Booking</button>\n</form>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\editservicebooking\editservicebooking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], EditservicebookingPage);
    return EditservicebookingPage;
}());

//# sourceMappingURL=editservicebooking.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicestate_servicestate__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalletPage = (function () {
    function WalletPage(navCtrl, navParams, emailComposer, modal, serviceState) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.modal = modal;
        this.serviceState = serviceState;
        this.userdata = JSON.parse(localStorage.getItem('loggedData'));
        console.log(this.userdata);
        this.userId = this.userdata[0].id;
        console.log(this.userId);
        this.walletamount = this.userdata[0].rf_wallet_bal;
        this.earnings();
        // console.log(data[0].rf_wallet_bal);
    }
    WalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletPage');
        var data = JSON.parse(localStorage.getItem('loggedData'));
        this.walletamount = data[0].rf_wallet_bal;
    };
    WalletPage.prototype.redeem = function () {
        var email = {
            to: 'support@rytefix.com',
            cc: 'admin@rytefix.com',
            bcc: [],
            subject: 'Customer ' + this.userdata[0].username + ' Redeem wallet balance',
            body: 'the amount requested to redeem by customer is ' + this.userdata[0].rf_wallet_bal,
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    WalletPage.prototype.openModal = function () {
        var data = {
            username: this.userdata[0].username,
            walletbalance: this.userdata[0].rf_wallet_bal
        };
        var myModal = this.modal.create('RedeemPage', { data: data });
        myModal.present();
    };
    WalletPage.prototype.earnings = function () {
        var _this = this;
        this.serviceState.creditearns(this.userId).subscribe(function (data) {
            _this.items = data;
            console.log(_this.items);
        }), function (error) {
            console.log(error);
        };
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\wallet\wallet.html"*/'<!--\n\n  Generated template for the WalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>wallet</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="card">\n\n        <div class="cover">\n\n          <h1>WALLET BALANCE</h1>\n\n          <p class="p">₹{{walletamount}}</p>\n\n          <button ion-button clear class="redeem" block (click)="openModal()"> Redeem your money</button>\n\n        </div>\n\n        </div>\n\n        <div class="segment">\n\n            <ion-segment [(ngModel)]="earns">\n\n              <ion-segment-button value="Earns">\n\n                  Earns\n\n              </ion-segment-button>\n\n              <!-- <ion-segment-button value="Spends">\n\n                Spends\n\n              </ion-segment-button> -->\n\n            </ion-segment>\n\n          </div>\n\n          <ion-scroll scrollY="true" style="width: 100%; height: 100%;">\n\n\n\n              <div [ngSwitch]="earns">\n\n                  <ion-list>\n\n                          <button ion-item *ngFor="let item of items">\n\n                              <button ion-item >\n\n                                  <h2>Earning amount : {{item.promo_credits}}</h2>\n\n                                  <h5>Earned by     : promocode {{item.promo_code}}</h5>\n\n                                  <!-- <h5>Earned on     : 14-2-18</h5> -->\n\n                                </button>\n\n                          </button>\n\n                        </ion-list>\n\n                        </div>\n\n          </ion-scroll>\n\n         \n\n\n\n                    \n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3__providers_servicestate_servicestate__["a" /* ServicestateProvider */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntrosliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntrosliderPage = (function () {
    function IntrosliderPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.showSkip = true;
        this.dir = 'ltr';
        this.slides = [
            {
                title: "WHY RYTEFIX ?",
                description: "Rytefix is a free app available to book mobile, laptop and all other electronic gadgets services in Chennai. Enjoy hassle free experience.",
                image: 'assets/imgs/slider1.jpg',
            },
            {
                title: "WHAT WE DO ?",
                description: "Connect customers and gadgets service providers in whole new way, intend to bring more transparency and enjoyable experience in market place.",
                image: 'assets/imgs/slider2.jpg',
            },
            {
                title: "HASSLE FREE EXPERIENCE",
                description: "We cover almost every gadgets and brands with great offers and discounts.",
                image: 'assets/imgs/slider3.jpg',
            }
        ];
    }
    IntrosliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntrosliderPage');
    };
    IntrosliderPage.prototype.startApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    IntrosliderPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    IntrosliderPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    IntrosliderPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    IntrosliderPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    IntrosliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-introslider',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\introslider\introslider.html"*/'<!-- <ion-header no-shadow class="navColor">\n\n  <ion-navbar >\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="home()" color="primary">SKIP</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<!-- <ion-content no-bounce>\n\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <!-- <h2 class="slide-title" [innerHTML]="slide.title"></h2> -->\n\n      <!-- <p [innerHTML]="slide.description"></p> -->\n\n    <!-- </ion-slide>\n\n    <ion-slide>\n\n      <img src="assets/imgs/appicon2.png" class="slide-image" />\n\n      <h2 class="slide-title"></h2>\n\n      <button ion-button block class="bonusButton"  icon-end (click)="startApp()">\n\n        REGISTER TO GET 250 CREDITS\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>  -->\n\n<ion-content>\n\n  <ion-slides pager="true">\n\n    <ion-slide id="slide1">\n\n      <div style="margin-top:-50px">\n\n        <ion-buttons end *ngIf="showSkip">\n\n            <button ion-button (click)="home()" class="color-wh" clear>SKIP</button>\n\n          </ion-buttons>\n\n      <img src="assets/imgs/1.png" />\n\n    </div>\n\n    \n\n      <h5 class="title"><b>Gadgets Needs Service ?</b></h5>\n\n      <p><b>Rytefix is a free app available to book mobile, laptop and all other electronic gadgets services in Chennai. Enjoy hassle free experience.</b></p>\n\n  \n\n    </ion-slide>\n\n    <ion-slide id="slide2">\n\n        <div style="margin-top:-50px">\n\n            <ion-buttons end *ngIf="showSkip">\n\n                <button ion-button (click)="home()" class="color-wh" clear>SKIP</button>\n\n              </ion-buttons>\n\n          <img src="assets/imgs/2.png" />\n\n        </div>\n\n        <h5 class="title"><b>WHAT WE DO ?</b></h5>\n\n        <p><b>Connect customers and gadgets service providers in whole new way, intend to bring more transparency and enjoyable experience in market place.</b></p>\n\n    </ion-slide>\n\n    <ion-slide id="slide3">\n\n        <div style="margin-top:-50px">\n\n            <ion-buttons end *ngIf="showSkip">\n\n                <button ion-button (click)="home()" class="color-wh" clear>SKIP</button>\n\n              </ion-buttons>\n\n          <img src="assets/imgs/3.png" />\n\n        </div>\n\n        <h5 class="title"><b>HASSLE FREE EXPERIENCE</b></h5>\n\n        <p><b>We cover almost every gadgets and brands with great offers and discounts.</b></p>\n\n        <button ion-button block class="bonusButton"  icon-end (click)="startApp()">\n\n            REGISTER TO GET 250 CREDITS\n\n            <ion-icon name="arrow-forward"></ion-icon>\n\n          </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\introslider\introslider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], IntrosliderPage);
    return IntrosliderPage;
}());

//# sourceMappingURL=introslider.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitefrdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InvitefrdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitefrdPage = (function () {
    function InvitefrdPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InvitefrdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitefrdPage');
    };
    InvitefrdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invitefrd',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\invitefrd\invitefrd.html"*/'<!--\n\n  Generated template for the InvitefrdPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Invite Friends</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\invitefrd\invitefrd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], InvitefrdPage);
    return InvitefrdPage;
}());

//# sourceMappingURL=invitefrd.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, loadingCtrl, toastCtrl, transfer, AuthServiceProvider, camera, file, filePath, platform, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.AuthServiceProvider = AuthServiceProvider;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.fileopen = false;
        this.lastImage = null;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            area: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            pincode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email])
        });
        this.userData = { "username": "", "mobile": "", "mail": "", "area": "", "city": "", "pincode": "" };
        if (localStorage.getItem('loggedData')) {
            this.ionViewDidLoad();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        }
        this.editProfile = true;
        this.submitProfile = false;
        this.cancelProfile = false;
        this.isDisable = true;
    }
    Object.defineProperty(ProfilePage.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "mobile", {
        get: function () {
            return this.form.get('mobile');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "mail", {
        get: function () {
            return this.form.get('mail');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "area", {
        get: function () {
            return this.form.get('area');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "city", {
        get: function () {
            return this.form.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "pincode", {
        get: function () {
            return this.form.get('pincode');
        },
        enumerable: true,
        configurable: true
    });
    ProfilePage.prototype.chooseimg = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                    console.log(currentName);
                    console.log(correctPath);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                console.log(currentName);
                console.log(correctPath);
            }
        }, function (err) {
            _this.ImagepresentToast('Error while selecting image.');
        });
    };
    ProfilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ProfilePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ProfilePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ProfilePage.prototype.pathForImage = function (img) {
        if (localStorage.getItem('loggedData')) {
            if (img === null) {
                //return 'assets/imgs/user.jpg';
                var imgData = JSON.parse(localStorage.getItem('loggedData'));
                var image = "http://sunrisetechs.com/images/imgs/" + imgData[0]['profile_pic'];
                return image;
            }
            else {
                this.fileopen = true;
                return cordova.file.dataDirectory + img;
            }
        }
    };
    ProfilePage.prototype.uploadImage = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        //  loader.present();
        var fileTransfer = this.transfer.create();
        console.log('image name', this.lastImage);
        var options = {
            fileKey: 'file',
            fileName: this.lastImage,
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: { 'fileName': this.lastImage }
        };
        fileTransfer.upload(this.pathForImage(this.lastImage), 'http://sunrisetechs.com/images/image.php', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            alert("upload done");
            console.log(data);
            var result = data.responseCode;
            if (result == 200) {
                var userData = {};
                userData = JSON.parse(localStorage.getItem('loggedData'));
                userData[0]['profile_pic'] = _this.lastImage;
                console.log(userData);
                localStorage.setItem('loggedData', JSON.stringify(userData));
                _this.AuthServiceProvider.postData(userData[0], 'userProfileimg').then(function (result) {
                    // loading.present();
                    _this.responseData = result;
                    if (true == _this.responseData.status) {
                        _this.fileopen = false;
                        _this.ImagepresentToast('Image succesful uploaded.');
                        _this.refresh();
                    }
                }, function (err) {
                    _this.fileopen = false;
                    _this.ImagepresentToast('Image upload failed.');
                });
                // this.ImagepresentToast('Image succesful uploaded.');
                // this.fileopen = false;
            }
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    // public uploadImage() {
    //   // Destination URL
    //   var url = "'http://sunrisetechs.com/images/image.php'";
    //   // File for Upload
    //   var targetPath = this.pathForImage(this.lastImage);
    //   // File name only
    //   var filename = this.lastImage;
    //   var options = {
    //     fileKey: "file",
    //     fileName: filename,
    //     chunkedMode: false,
    //     mimeType: "multipart/form-data",
    //     params : {'fileName': filename}
    //   };
    //   const fileTransfer: FileTransferObject = this.transfer.create();
    //   this.loading = this.loadingCtrl.create({
    //     content: 'Uploading...',
    //   });
    //   this.loading.present();
    //   // Use the FileTransfer to upload the image
    //   fileTransfer.upload(targetPath, url, options).then((data) => {
    //     this.loading.dismissAll();
    //     console.log(data);
    //     var result = data.response;
    //     if(result == 'true') {
    //       var userData = {} 
    //       userData = JSON.parse(localStorage.getItem('loggedData'));
    //       userData[0]['profile_pic'] = this.lastImage;
    //       console.log(userData);
    //       localStorage.setItem('loggedData',JSON.stringify(userData));
    //       this.AuthServiceProvider.postData(userData[0], 'userProfileimg').then((result) => {
    //         // loading.present();
    //         this.responseData = result;
    //         var user_detail=this.responseData;
    //         if(true == this.responseData.status){
    //           this.fileopen = false;
    //           this.ImagepresentToast('Image succesful uploaded.');
    //           this.refresh();
    //         }
    //       }, (err) => {
    //         this.fileopen = false;
    //         this.ImagepresentToast('Image upload failed.');
    //       });
    //       // this.ImagepresentToast('Image succesful uploaded.');
    //       // this.fileopen = false;
    //     }
    //   }, err => {
    //     this.loading.dismissAll()
    //     this.fileopen = false;
    //     this.ImagepresentToast('Error while uploading file.');
    //   });
    // }
    /*##User image upload function end##*/
    ProfilePage.prototype.refresh = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        console.log('page refreshed');
    };
    ProfilePage.prototype.profileactive = function () {
        this.isDisable = false;
        this.editProfile = false;
        this.submitProfile = true;
        this.cancelProfile = true;
    };
    ProfilePage.prototype.profilecancel = function () {
        this.isDisable = true;
        this.editProfile = true;
        this.submitProfile = false;
        this.cancelProfile = false;
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.getuser();
    };
    ProfilePage.prototype.getuser = function () {
        var _this = this;
        if (localStorage.getItem('loggedData')) {
            var userdata = JSON.parse(localStorage.getItem('loggedData'));
            // console.log(userdata['id']);
            this.AuthServiceProvider.postData(userdata[0], 'getUserdata').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    var user_detail = _this.responsedata.data[0];
                    _this.userData = user_detail;
                    _this.userData.mail = _this.userData['email'];
                }
            });
        }
    };
    // public pathForImage(img) {
    //   if (img === null) {
    //     //return 'assets/imgs/user.jpg';
    //     var imgData = JSON.parse(localStorage.getItem('userData'));
    //     var image = "http://rayi.in/naboapi/uploads/" + imgData['profile_pic'];
    //     return image;
    //   } else {
    //     this.fileopen = true;
    //     return cordova.file.dataDirectory + img;
    //   }
    // }
    ProfilePage.prototype.profileUpdate = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        loader.present();
        var toast = this.toastCtrl.create({
            message: 'Profile update successfully',
            duration: 3000,
            position: 'bottom'
        });
        var userdata = JSON.parse(localStorage.getItem('loggedData'));
        this.userData['id'] = userdata[0]['id'];
        console.log(this.userData);
        this.AuthServiceProvider.postData(this.userData, 'profileUpdate').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                loader.dismiss();
                var user_detail = _this.responsedata.data[0];
                _this.userData = user_detail;
                _this.userData.mail = _this.userData['email'];
                toast.present();
                _this.refresh();
            }
        });
    };
    // public uploadImage() {
    //   // Destination URL
    //   var url = "http://rayi.in/naboapi/profileImageupload";
    //   // File for Upload
    //   var targetPath = this.pathForImage(this.lastImage);
    //   // File name only
    //   var filename = this.lastImage;
    //   var options = {
    //     fileKey: "file",
    //     fileName: filename,
    //     chunkedMode: false,
    //     mimeType: "multipart/form-data",
    //     params : {'fileName': filename}
    //   };
    //   const fileTransfer: FileTransferObject = this.transfer.create();
    //   this.loading = this.loadingCtrl.create({
    //     content: 'Uploading...',
    //   });
    //   this.loading.present();
    //   // Use the FileTransfer to upload the image
    //   fileTransfer.upload(targetPath, url, options).then((data) => {
    //     this.loading.dismissAll();
    //     console.log(data);
    //     var result = data.response;
    //     if(result == 'true') {
    //       var userData = {} 
    //       userData = JSON.parse(localStorage.getItem('userData'));
    //       userData['photo'] = this.lastImage;
    //       localStorage.setItem('userData',JSON.stringify(userData));
    //       this.AuthServiceProvider.postData(userData, 'updateUserImagename').then((result) => {
    //         // loading.present();
    //         this.responseData = result;
    //         var user_detail=this.responseData;
    //         if(true == this.responseData.status){
    //           this.fileopen = false;
    //           this.ImagepresentToast('Image succesful uploaded.');
    //           this.refresh();
    //         }
    //       }, (err) => {
    //         this.fileopen = false;
    //         this.ImagepresentToast('Image upload failed.');
    //       });
    //       // this.ImagepresentToast('Image succesful uploaded.');
    //       // this.fileopen = false;
    //     }
    //   }, err => {
    //     this.loading.dismissAll()
    //     this.fileopen = false;
    //     this.ImagepresentToast('Error while uploading file.');
    //   });
    // }
    ProfilePage.prototype.ImagepresentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <!-- <img class="pimg" src="{{pathForImage(lastImage)}}" onerror="this.onerror=null;this.src=\'http://rayi.in/naboapi/mapicon/user.jpg\'"/> -->\n\n    <!-- <img class="pimg" src="http://rayi.in/naboapi/mapicon/user.jpg"/>\n\n     -->\n\n     <img class="pimg" src="{{pathForImage(lastImage)}}" (click)="chooseimg()"/>\n\n    <div class="upload-img" (click)="chooseimg()">\n\n        <ion-icon name="camera"></ion-icon>\n\n    </div>\n\n    <ion-footer [hidden]="fileopen == false">\n\n      <ion-toolbar color="primary">\n\n        <ion-buttons>\n\n          <button ion-button icon-left (click)="chooseimg()">\n\n            <ion-icon name="camera"></ion-icon>Change Image\n\n          </button>\n\n          <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n\n            <ion-icon name="cloud-upload"></ion-icon>Upload\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n    </ion-footer>  \n\n    <form [formGroup]="form" (ngSubmit)="profileUpdate()" >\n\n      <!-- <ion-fab  right edge>\n\n          <button ion-fab  class="sign_btn" (click)="profileactive()" ><ion-icon name="create"></ion-icon></button>\n\n      </ion-fab> -->\n\n       \n\n      <ion-fab  right edge *ngIf="editProfile" style="margin-top:-100px">\n\n          <button ion-fab mini  class="sign_btn" (click)="profileactive()" ><ion-icon name="create"></ion-icon></button>\n\n      </ion-fab>\n\n      <ion-fab  right edge *ngIf="cancelProfile">\n\n          <button ion-fab  class="signbtn" (click)="profilecancel()" mini><ion-icon name="close"></ion-icon></button>\n\n      </ion-fab>\n\n      <ion-fab  right edge class="close" *ngIf="submitProfile">\n\n          <button ion-fab type="submit" class="sign_btn"  mini><ion-icon name="checkmark"></ion-icon></button>\n\n      </ion-fab>\n\n      <!-- <div style="margin-top:30px"> -->\n\n      <ion-item>\n\n        <ion-label ><ion-icon name="contact"></ion-icon> </ion-label>\n\n        <ion-input  disabled="{{isDisable}}" formControlName="username" placeholder="Username" focuser id="usersignup" type="text" [(ngModel)]="userData.username"></ion-input>\n\n       \n\n     </ion-item>\n\n     <div *ngIf="username.touched && username.invalid" class="alertstyle">\n\n       <div *ngIf="username.errors.required">Please provide a username</div>\n\n     </div>\n\n  \n\n      <ion-item>\n\n      <ion-label ><ion-icon name="ios-call"></ion-icon> </ion-label>\n\n      <ion-input  disabled="{{isDisable}}" formControlName="mobile" placeholder="Mobile" type="number" [(ngModel)]="userData.mobile"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="mobile.touched && mobile.invalid" class="alertstyle">\n\n      <div *ngIf="mobile.errors.required">Please provide a mobile no</div>\n\n    </div>\n\n  \n\n     <ion-item>\n\n       <ion-label ><ion-icon name="mail"></ion-icon> </ion-label>\n\n       <ion-input  disabled="{{isDisable}}" formControlName="mail" placeholder="Email" type="text" [(ngModel)]="userData.mail"></ion-input>\n\n     </ion-item>\n\n     <div *ngIf="mail.touched && mail.invalid" class="alertstyle">\n\n       <div *ngIf="mail.errors.required">Email is required</div>\n\n       <div *ngIf="mail.errors.email">Invaild email format</div>\n\n     </div>\n\n  \n\n    <ion-item>\n\n      <ion-label ><ion-icon name="ios-pin"></ion-icon></ion-label>\n\n      <ion-input  disabled="{{isDisable}}" formControlName="area" placeholder="Area" type="text"[(ngModel)]="userData.area"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="area.touched && area.invalid" class="alertstyle">\n\n      <div *ngIf="area.errors.required">Please provide a area</div>\n\n    </div> \n\n    <ion-item>\n\n      <ion-label ><ion-icon name="ios-pin"></ion-icon></ion-label>\n\n      <ion-input  disabled="{{isDisable}}" formControlName="city" placeholder="City" type="text"  [(ngModel)]="userData.city"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="city.touched && city.invalid" class="alertstyle">\n\n      <div *ngIf="city.errors.required">Please provide a city</div>\n\n    </div> \n\n    <ion-item>\n\n      <ion-label ><ion-icon name="ios-pin"></ion-icon></ion-label>\n\n      <ion-input  disabled="{{isDisable}}" formControlName="pincode" placeholder="Pincode" type="number"  [(ngModel)]="userData.pincode"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="pincode.touched && pincode.invalid" class="alertstyle">\n\n      <div *ngIf="pincode.errors.required">Please provide a pincode</div>\n\n    </div>   \n\n  <!-- </div> -->\n\n     <!-- <button ion-button type="submit" [disabled]="disable" class="sign_btn"   round full>Register</button> -->\n\n     </form> \n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/changepass/changepass.module": [
		305,
		15
	],
	"../pages/contactus/contactus.module": [
		306,
		14
	],
	"../pages/editservicebooking/editservicebooking.module": [
		307,
		13
	],
	"../pages/faq/faq.module": [
		308,
		12
	],
	"../pages/introslider/introslider.module": [
		309,
		11
	],
	"../pages/invitefrd/invitefrd.module": [
		310,
		10
	],
	"../pages/login/login.module": [
		311,
		9
	],
	"../pages/profile/profile.module": [
		312,
		8
	],
	"../pages/quotehistory/quotehistory.module": [
		313,
		7
	],
	"../pages/quoteview/quoteview.module": [
		314,
		6
	],
	"../pages/redeem/redeem.module": [
		315,
		0
	],
	"../pages/register/register.module": [
		316,
		5
	],
	"../pages/servicebooking/servicebooking.module": [
		318,
		4
	],
	"../pages/tabs/tabs.module": [
		317,
		3
	],
	"../pages/viewaccept-quote/viewaccept-quote.module": [
		320,
		2
	],
	"../pages/wallet/wallet.module": [
		319,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AddDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AddDataProvider = (function () {
    function AddDataProvider(http) {
        this.http = http;
        console.log('Hello AddDataProvider Provider');
    }
    AddDataProvider.prototype.getFaq = function () {
        return this.http.get('http://sunrisetechs.com/api/cusapi.php?action=customerFAQ')
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    AddDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AddDataProvider);
    return AddDataProvider;
}());

//# sourceMappingURL=add-data.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://sunrisetechs.com/sunapi/';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //let options = new RequestOptions({headers:headers});
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getData = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //let options = new RequestOptions({headers:headers});
            _this.http.get(apiUrl + type)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewacceptQuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the ViewacceptQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewacceptQuotePage = (function () {
    function ViewacceptQuotePage(navCtrl, call, alertCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.call = call;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.viewdata = this.navParams.get('data');
        console.log("problem", this.viewdata.hardService);
        console.log("viewdata", this.viewdata);
    }
    ViewacceptQuotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewacceptQuotePage');
    };
    ViewacceptQuotePage.prototype.contactUs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.call.callNumber(this.viewdata.mobile, true)];
                    case 1:
                        _a.sent();
                        console.log("mobile no", this.viewdata.mobile);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ViewacceptQuotePage.prototype.declineQuote = function () {
        var _this = this;
        console.log('declineQuote');
        var prompt = this.alertCtrl.create({
            message: "Please describe the problem",
            inputs: [
                {
                    //type :'text',
                    name: 'reason',
                    placeholder: 'Reason for decline',
                    value: ""
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        // let validateObj = this.validate(data);
                        if (data.reason == "") {
                            var toast = _this.toastCtrl.create({
                                message: "Please enter the reason ",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return false;
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "Now you can accept other quotes",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            _this.gotoQuoteview();
                            //return false;
                        }
                    }
                }
            ]
        });
        prompt.present();
        // this.gotoQuoteview();
    };
    ViewacceptQuotePage.prototype.completeQuote = function () {
        var _this = this;
        console.log('declineQuote');
        var prompt = this.alertCtrl.create({
            message: "Service completed in service center and you paid for the service",
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log('yes clicked');
                        var toast = _this.toastCtrl.create({
                            message: "Congratulations! You can use the credit",
                            duration: 3000,
                            position: 'bottom'
                        });
                        // this.btntext='Complete';     
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        //this.gotoQuoteview();
                        //return false;
                    }
                },
                {
                    text: 'No',
                    handler: function (data) {
                        alert(" Please pay for the service and then complete");
                        return true;
                    }
                }
            ]
        });
        prompt.present();
    };
    ViewacceptQuotePage.prototype.gotoQuoteview = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__["a" /* QuoteviewPage */]);
    };
    ViewacceptQuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewaccept-quote',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\viewaccept-quote\viewaccept-quote.html"*/'<!--\n\n  Generated template for the ViewacceptQuotePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-toolbar no-padding>\n\n      <ion-title>Response Details</ion-title>\n\n    </ion-toolbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h4 class="text1">Booking Details</h4>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <ion-row>\n\n            <ion-col col-4 text-left>\n\n            <h5><b>Make</b></h5>\n\n        </ion-col>\n\n        <ion-col col-1><b>:</b></ion-col>\n\n        <ion-col col-7 text-left>\n\n            <h5> {{viewdata.make_name}}</h5>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col col-4 text-left>\n\n           <h5><b>Model</b></h5>\n\n       </ion-col>\n\n       <ion-col col-1><b>:</b></ion-col>\n\n       <ion-col col-7 text-left>\n\n           <h5>  {{viewdata.model}}</h5>\n\n       </ion-col>\n\n     </ion-row>\n\n     <ion-row>    \n\n       <ion-col col-4 text-left>\n\n           <h5><b>Problem</b></h5>\n\n       </ion-col>\n\n       <ion-col col-1><b>:</b></ion-col>\n\n       <ion-col col-7 text-left>\n\n         <p *ngIf="softService!=\'\'||hardServise !=\'\'||others !=\'\'">{{viewdata.softService}}{{viewdata.hardService}}{{viewdata.others}}</p>\n\n       </ion-col>\n\n     </ion-row>\n\n     <ion-row >\n\n            <ion-col col-4 text-left>\n\n           <h5><b>Pickup</b></h5>\n\n       </ion-col>\n\n       <ion-col col-1><b>:</b></ion-col>\n\n       <ion-col col-7 text-left>\n\n           <h5>   {{viewdata.pickup}}</h5>\n\n       </ion-col>\n\n     </ion-row>\n\n     <ion-row>   \n\n        <ion-col col-4 text-left>\n\n            <h5><b>Booking Date</b></h5>\n\n        </ion-col>\n\n        <ion-col col-1><b>:</b></ion-col>      \n\n  <ion-col col-7  text-left>\n\n  <h5>{{viewdata.posted_on}}</h5>\n\n         </ion-col>\n\n         </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n        <h4 class="text1">Assigned Vendor</h4>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>   \n\n          <ion-col col-4 text-left>\n\n              <h5><b>Name</b></h5>\n\n          </ion-col>\n\n          <ion-col col-1><b>:</b></ion-col>      \n\n    <ion-col col-7  text-left>\n\n    <h5>{{viewdata.username}}</h5>\n\n           </ion-col>\n\n           </ion-row>\n\n           <ion-row>   \n\n              <ion-col col-4 text-left>\n\n                  <h5><b>Area</b></h5>\n\n              </ion-col>\n\n              <ion-col col-1><b>:</b></ion-col>      \n\n        <ion-col col-7  text-left>\n\n        <h5>{{viewdata.area}}</h5>\n\n               </ion-col>\n\n               </ion-row>\n\n               <ion-row>   \n\n                  <ion-col col-4 text-left>\n\n                      <h5><b>Contact No</b></h5>\n\n                  </ion-col>\n\n                  <ion-col col-1><b>:</b></ion-col>      \n\n            <ion-col col-5 text-left>\n\n            <h5>{{viewdata.mobile}}</h5>\n\n                   </ion-col>\n\n                   <ion-col col-2>\n\n                      <button ion-button color="secondary" small round icon-only (click)="contactUs()"><ion-icon name="ios-call-outline"></ion-icon></button>\n\n                   </ion-col>\n\n                   </ion-row>\n\n                   <ion-row>\n\n                     <ion-col col-12 text-center>\n\n                       <h4  class="text2">Quotation Details</h4>\n\n                     </ion-col>\n\n                   </ion-row>\n\n                   <ion-row>\n\n                      <ion-col col-5 text-left>\n\n                       <b>  Original Spare Price</b>\n\n                      </ion-col>\n\n                      <ion-col col-1><b>:</b></ion-col>\n\n                      <ion-col col-6 text-left>\n\n                          {{viewdata.exactprice}}\n\n                      </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                            <ion-col col-5 text-left>\n\n                             <b> Second Quality Price</b>\n\n                            </ion-col>\n\n                            <ion-col col-1><b>:</b></ion-col>\n\n                            <ion-col col-6 text-left>\n\n                                {{viewdata.second_quality_price}}\n\n                            </ion-col>\n\n                          </ion-row>\n\n                          <ion-row>\n\n                                <ion-col col-5 text-left>\n\n                                 <b> Time Required</b>\n\n                                </ion-col>\n\n                                <ion-col col-1><b>:</b></ion-col>\n\n                                <ion-col col-6 text-left>\n\n                                    {{viewdata.time_period}}\n\n                                </ion-col>\n\n                              </ion-row>\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                         <b> Warranty</b>\n\n                        </ion-col>\n\n                        <ion-col col-1><b>:</b></ion-col>\n\n                        <ion-col col-6 text-left>\n\n                            {{viewdata.warranty}}\n\n                        </ion-col>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                            <ion-col col-5 text-left>\n\n                             <b> Home Pick Up</b>\n\n                            </ion-col>\n\n                            <ion-col col-1><b>:</b></ion-col>\n\n                            <ion-col col-6 text-left>\n\n                                {{viewdata.pickup_type}}\n\n                            </ion-col>\n\n                          </ion-row>\n\n                      <ion-row>\n\n                          <ion-col col-5 text-left>\n\n                           <b> Description</b>\n\n                          </ion-col>\n\n                          <ion-col col-1><b>:</b></ion-col>\n\n                          <ion-col col-6 text-left>\n\n                              {{viewdata.description}}\n\n                          </ion-col>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col col-5 text-left>\n\n                             <b> Expires In</b>\n\n                            </ion-col>\n\n                            <ion-col col-1><b>:</b></ion-col>\n\n                            <ion-col col-6 text-left>\n\n                              \n\n                            </ion-col>\n\n                          </ion-row> \n\n                          <!-- <ion-row>-->\n\n                              <!-- <ion-col col-2></ion-col> -->\n\n                                <!-- <ion-col col-6> -->\n\n                                  <button ion-button color="secondary" (click)="completeQuote()" block>Complete the service</button>\n\n                                <!-- </ion-col> -->\n\n                                <!-- <ion-col col-2></ion-col> -->\n\n                                <!-- <ion-col col-6> -->\n\n                                    <button ion-button color="dark" (click)="declineQuote()" block>Report the problem</button>\n\n                                  <!-- </ion-col> -->\n\n                                  <!-- <ion-col col-2></ion-col> -->\n\n                              <!-- </ion-row> -->\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n  \n\n    </ion-content> \n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\viewaccept-quote\viewaccept-quote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ViewacceptQuotePage);
    return ViewacceptQuotePage;
}());

//# sourceMappingURL=viewaccept-quote.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contactus_contactus__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_changepass_changepass__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_invitefrd_invitefrd__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_viewaccept_quote_viewaccept_quote__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_unique_device_id__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_introslider_introslider__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_facebook__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_wallet_wallet__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_email_composer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_media__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file_path__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_add_data_add_data__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_push__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_servicestate_servicestate__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_editservicebooking_editservicebooking__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_social_sharing__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__["a" /* ServicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewaccept_quote_viewaccept_quote__["a" /* ViewacceptQuotePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_changepass_changepass__["a" /* ChangepassPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_invitefrd_invitefrd__["a" /* InvitefrdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__["a" /* QuoteviewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_introslider_introslider__["a" /* IntrosliderPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_editservicebooking_editservicebooking__["a" /* EditservicebookingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/changepass/changepass.module#ChangepassPageModule', name: 'ChangepassPage', segment: 'changepass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editservicebooking/editservicebooking.module#EditservicebookingPageModule', name: 'EditservicebookingPage', segment: 'editservicebooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/introslider/introslider.module#IntrosliderPageModule', name: 'IntrosliderPage', segment: 'introslider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invitefrd/invitefrd.module#InvitefrdPageModule', name: 'InvitefrdPage', segment: 'invitefrd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotehistory/quotehistory.module#QuotehistoryPageModule', name: 'QuotehistoryPage', segment: 'quotehistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quoteview/quoteview.module#QuoteviewPageModule', name: 'QuoteviewPage', segment: 'quoteview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redeem/redeem.module#RedeemPageModule', name: 'RedeemPage', segment: 'redeem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/servicebooking/servicebooking.module#ServicebookingPageModule', name: 'ServicebookingPage', segment: 'servicebooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewaccept-quote/viewaccept-quote.module#ViewacceptQuotePageModule', name: 'ViewacceptQuotePage', segment: 'viewaccept-quote', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__["a" /* ServicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewaccept_quote_viewaccept_quote__["a" /* ViewacceptQuotePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_changepass_changepass__["a" /* ChangepassPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_invitefrd_invitefrd__["a" /* InvitefrdPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__["a" /* QuoteviewPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_introslider_introslider__["a" /* IntrosliderPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_editservicebooking_editservicebooking__["a" /* EditservicebookingPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_33__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_35__providers_add_data_add_data__["a" /* AddDataProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_servicestate_servicestate__["a" /* ServicestateProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quotehistory_quotehistory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quoteview_quoteview__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_changepass_changepass__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_invitefrd_invitefrd__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_introslider_introslider__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = (function () {
    function MyApp(uniqueDeviceID, AuthServiceProvider, toastCtrl, platform, statusBar, loadingCtrl, splashScreen, alertCtrl, fb, push, socialSharing, actionSheetCtrl) {
        this.uniqueDeviceID = uniqueDeviceID;
        this.AuthServiceProvider = AuthServiceProvider;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.push = push;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_introslider_introslider__["a" /* IntrosliderPage */];
        this.initializeApp();
        // this.imgData = JSON.parse(localStorage.getItem('loggedData'));
        // this.image = "http://sunrisetechs.com/images/imgs/" + this.imgData[0]['profile_pic'];
        // console.log("image", this.imgData[0].username);
        // this.username = this.imgData[0].username;
        console.log("test");
        console.log(this.uniqueDeviceID.get().then(function (uuid) { return console.log(uuid); }).catch(function (error) { return console.log(error); }));
        this.uniqueDeviceID.get().then(function (uuid) { console.log(uuid); localStorage.setItem("deviceId", uuid); }).catch(function (error) { return console.log(error); });
        // this.device='c9ab8ea1-aa3a-578b-9900-020705933689';
        // localStorage.setItem("deviceId",this.device);
        // used for an example of ngFor, and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_10__pages_changepass_changepass__["a" /* ChangepassPage */] },
            // { title: 'FAQ', component: FaqPage},
            { title: 'Invite Friends', component: __WEBPACK_IMPORTED_MODULE_11__pages_invitefrd_invitefrd__["a" /* InvitefrdPage */] },
            // { title: 'Rate This App', component:   },
            // { title: 'Contact Us', component: ContactusPage },
            { title: 'Quote & Response', component: __WEBPACK_IMPORTED_MODULE_8__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */] },
            { title: 'Quote', component: __WEBPACK_IMPORTED_MODULE_9__pages_quoteview_quoteview__["a" /* QuoteviewPage */] },
        ];
        // this.fb.login(['public_profile', 'user_friends', 'email'])
        //   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
        //   .catch(e => console.log('Error logging into Facebook', e));
        // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ACTIVATED_APP);
    }
    MyApp.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Do you want to Logout?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.logoutconf();
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.logoutconf = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        //  alert("logout");
        var toast = this.toastCtrl.create({
            message: 'Logout successfully',
            duration: 3000,
            position: 'bottom'
        });
        if (JSON.parse(localStorage.getItem("loggedData"))) {
            loader.present();
            var userData = JSON.parse(localStorage.getItem('loggedData'));
            console.log(userData);
            this.AuthServiceProvider.postData(userData[0], 'logout').then(function (result) {
                _this.responseData = result;
                if (true == _this.responseData.status) {
                    loader.dismiss();
                    console.log(_this.responseData);
                    localStorage.setItem('loggedData', "");
                    localStorage.setItem('serviceBooking', "");
                    localStorage.setItem('serviceBooking1', "");
                    localStorage.setItem('gadget', "");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                    toast.present();
                }
            }, function (err) {
                // Error log
            });
        }
        else {
            console.log("not logged");
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.push.hasPermission()
                .then(function (res) {
                if (res.isEnabled) {
                    console.log('We have permission to send push notifications');
                }
                else {
                    console.log('We do not have permission to send push notifications');
                }
            });
            localStorage.setItem('deviceID', "");
            var options = {
                android: {},
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
            var pushObject = _this.push.init(options);
            pushObject.on('notification').subscribe(function (notification) {
                console.log('Received a notification', notification);
                var alert = _this.alertCtrl.create({
                    title: notification['title'],
                    message: notification.additionalData['subtitle'],
                    buttons: [
                        {
                            text: 'ok',
                            handler: function () {
                                console.log('called');
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                            }
                        }
                    ]
                });
                alert.present();
            });
            pushObject.on('registration').subscribe(function (registration) {
                console.log('Device registered', registration);
                _this.deviceID = {};
                _this.deviceID["deviceid"] = registration['registrationId'];
                //this.deviceID["deviceid"]='cxHIRxjGUdE:APA91bGJqzhwsBbhxDLnaBXwcl7PLHZu3fDbm9pZ4QMN1kzRiJP5MFRAksg37aySQvhHoKfHTaDlt80AreZIeP9JG5MJc0AYGWAM1v3kT58sQsEgxZO74RdwNAaVazG2PZPlkKqE9m4M';
                console.log("deviceid =" + _this.deviceID["deviceid"]);
                localStorage.setItem('deviceID', _this.deviceID["deviceid"]);
                console.log(localStorage.getItem('deviceID'));
            });
            pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.inviteFriends = function () {
        var _this = this;
        console.log('invite friends');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'invite friends via',
            buttons: [
                {
                    text: 'Whatsapp',
                    role: 'destructive',
                    handler: function () {
                        console.log('whatsapp clicked');
                        var message = 'invite';
                        _this.socialSharing.shareViaWhatsApp(message, '', 'https://play.google.com/store/apps/details?id=com.com.rytefix&hl=en').then(function () {
                            console.log('success');
                        }).catch(function (e) {
                            console.log(e);
                        });
                    }
                }, {
                    text: 'Facebook',
                    handler: function () {
                        console.log('facebook clicked');
                        var message = 'invite';
                        _this.socialSharing.shareViaFacebook(message, '', 'https://play.google.com/store/apps/details?id=com.com.rytefix&hl=en').then(function () {
                            console.log('success');
                        }).catch(function (e) {
                            console.log(e);
                        });
                    }
                }, {
                    text: 'More',
                    handler: function () {
                        console.log('More clicked');
                        var message = 'invite';
                        _this.socialSharing.share(message, '', '', 'https://play.google.com/store/apps/details?id=com.com.rytefix&hl=en').then(function () {
                            console.log('success');
                        }).catch(function (e) {
                            console.log(e);
                        });
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MyApp.prototype.gotoTabspage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.gotoProfilepage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.gotoChangepasspage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_changepass_changepass__["a" /* ChangepassPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\app\app.html"*/'<ion-menu [content]="content" >\n\n  <ion-header no-border >\n\n    <ion-toolbar no-padding>\n\n      <ion-title style="color:#fff">Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="custom">\n\n    <!-- <ion-list >\n\n        \n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" >\n\n        {{p.title}}\n\n      </button>\n\n     \n\n      <button ion-item menuClose (click)="logout()">\n\n          <ion-icon item-start [name]="log-out" ></ion-icon>\n\n          Logout\n\n      </button>\n\n      \n\n    </ion-list> -->\n\n   \n\n    <ion-card text-center class="hide-card">\n\n        <img class="pimg" src="{{image}}" class="custom-avatar"/>\n\n        <h2>{{username}}</h2>\n\n       \n\n        <hr>\n\n    </ion-card>\n\n       <ion-list no-lines>\n\n         <!-- <ion-item text-center>\n\n            <ion-avatar>\n\n                <img class="pimg" src="{{image}}"/>\n\n             </ion-avatar>\n\n         </ion-item>\n\n         -->\n\n          <!-- <ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)" detail-push>\n\n              {{p.title}}\n\n          </ion-item>  -->\n\n          <ion-item menuClose (click)="gotoTabspage()" detail-push>\n\n              <img src="http://sunrisetechs.com/images/imgs/customerAppImages/home.png" />\n\n              Home\n\n          </ion-item>\n\n          <ion-item menuClose (click)="gotoProfilepage()" detail-push>\n\n              <img src="http://sunrisetechs.com/images/imgs/customerAppImages/user.png" />\n\n              Profile\n\n          </ion-item>\n\n          <ion-item menuClose (click)="gotoChangepasspage()" detail-push>\n\n              <img src="http://sunrisetechs.com/images/imgs/customerAppImages/lock.png" />\n\n            Change Password\n\n          </ion-item>\n\n          <ion-item menuClose (click)="inviteFriends()" detail-push>\n\n              <img src="http://sunrisetechs.com/images/imgs/customerAppImages/flag.png" />\n\n             Invite Friends\n\n          </ion-item>\n\n          <hr>\n\n          <ion-item text-center menuClose (click)="logout()" detail-push>\n\n             \n\n                <img src="http://sunrisetechs.com/images/imgs/customerAppImages/logout.png" />\n\n              <!-- <ion-icon item-start name="log-out" ></ion-icon> -->\n\n              Logout\n\n              </ion-item>\n\n\n\n          </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n<!-- <ion-tabs tabsPlacement= "bottom" >\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="FAQ" tabIcon="information-circle"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Contact Us" tabIcon="ios-contact-outline"></ion-tab>\n\n  </ion-tabs> -->\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__changepass_changepass__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, transfer, file, alertCtrl, loadingCtrl, navParams, toastCtrl, AuthServiceProvider) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            mobile: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            pass: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required)
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            mobile1: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required)
        });
        this.form2 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            otp: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required)
        });
        this.forgotData = { "mobile1": "" };
        this.otpData = { "otp": "" };
        this.loginData = { "mobile": "", "pass": "", "deviceId": "" };
        this.forgotMobile = false;
        this.loginscreen = true;
        this.otpverify = false;
        this.loginData.deviceId = localStorage.getItem('deviceID');
        console.log('device ID = ', this.loginData.deviceid);
    }
    Object.defineProperty(LoginPage.prototype, "mobile", {
        get: function () {
            return this.form.get('mobile');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "pass", {
        get: function () {
            return this.form.get('pass');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "mobile1", {
        get: function () {
            return this.form1.get('mobile1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "otp", {
        get: function () {
            return this.form2.get('otp');
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage.getItem('imageList')) {
            this.imgData = JSON.parse(localStorage.getItem('imageList'));
        }
        if (localStorage.getItem('audiolist')) {
            this.audioData = JSON.parse(localStorage.getItem('audiolist'));
        }
        var toast = this.toastCtrl.create({
            message: 'Service book successfully',
            duration: 3000,
            position: 'bottom'
        });
        var toast1 = this.toastCtrl.create({
            message: 'Service notbook successfully',
            duration: 3000,
            position: 'bottom'
        });
        console.log('ionViewDidLoad LoginPage');
        if (localStorage.getItem("loggedData")) {
            var loggedid_1 = JSON.parse(localStorage.getItem("loggedData"));
            if (localStorage.getItem('serviceBooking')) {
                var loggedData = JSON.parse(localStorage.getItem('serviceBooking'));
                //let loggedData=this.jsonConcat(service, logged);
                if (loggedData['image'] == "") {
                    loggedData['image'] = "user_avatar.png";
                }
                loggedData['id'] = loggedid_1[0].id;
                loggedData['username'] = loggedid_1[0].username;
                loggedData['email'] = loggedid_1[0].email;
                loggedData['gadget'] = localStorage.getItem('gadget');
                console.log(loggedData);
                this.AuthServiceProvider.postData(loggedData, 'serLogged').then(function (result) {
                    console.log(result);
                    _this.responseData = result;
                    if (_this.responseData.status == true) {
                        toast.present();
                        if (loggedid_1[0].image) {
                            _this.uploadFile();
                        }
                        if (loggedid_1[0].audio) {
                            _this.uploadAudio();
                        }
                    }
                    else {
                        toast1.present();
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                });
            }
            else if (localStorage.getItem('serviceBooking1')) {
                var loggedData = JSON.parse(localStorage.getItem('serviceBooking1'));
                //let loggedData=this.jsonConcat(service, logged);
                if (loggedData['image'] == "") {
                    loggedData['image'] = "user_avatar.png";
                }
                loggedData['id'] = loggedid_1[0].id;
                loggedData['username'] = loggedid_1[0].username;
                loggedData['email'] = loggedid_1[0].email;
                loggedData['gadget'] = localStorage.getItem('gadget');
                console.log(loggedData);
                this.AuthServiceProvider.postData(loggedData, 'ser1Logged').then(function (result) {
                    console.log(result);
                    _this.responseData = result;
                    if (_this.responseData.status == true) {
                        toast.present();
                        if (loggedid_1[0].image) {
                            _this.uploadFile();
                        }
                        if (loggedid_1[0].audio) {
                            _this.uploadAudio();
                        }
                    }
                    else {
                        toast1.present();
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                });
            }
        }
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
        this.AuthServiceProvider.postData(this.forgotData, 'forgotPass').then(function (result) {
            console.log(result);
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                //toast.present();
                _this.otpverify = true;
                _this.forgotMobile = false;
                _this.loginscreen = false;
            }
            else {
                alert.present();
                _this.otpverify = false;
                _this.forgotMobile = true;
                _this.loginscreen = false;
            }
        });
    };
    LoginPage.prototype.jsonConcat = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Login successfully',
            duration: 3000,
            position: 'bottom'
        });
        var toast1 = this.toastCtrl.create({
            message: 'Invalid username & password',
            duration: 3000,
            position: 'bottom'
        });
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        loader.present();
        console.log(this.loginData);
        if (localStorage.getItem('serviceBooking')) {
            var service_1 = JSON.parse(localStorage.getItem('serviceBooking'));
            var serviceUser = this.jsonConcat(service_1, this.loginData);
            serviceUser['gadget'] = localStorage.getItem('gadget');
            this.AuthServiceProvider.postData(serviceUser, 'serLogin').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    console.log(result);
                    toast.present();
                    if (service_1['image']) {
                        _this.uploadAudio();
                    }
                    if (service_1['audio']) {
                        _this.uploadFile();
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    loader.dismiss();
                    toast1.present();
                }
            });
        }
        else if (localStorage.getItem('serviceBooking1')) {
            var service_2 = JSON.parse(localStorage.getItem('serviceBooking1'));
            var serviceUser = this.jsonConcat(service_2, this.loginData);
            serviceUser['gadget'] = localStorage.getItem('gadget');
            if (serviceUser['image'] == "") {
                serviceUser['image'] = "user_avatar.png";
            }
            this.AuthServiceProvider.postData(serviceUser, 'ser1Login').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    console.log(result);
                    toast.present();
                    if (service_2['image']) {
                        _this.uploadAudio();
                    }
                    if (service_2['audio']) {
                        _this.uploadFile();
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    loader.dismiss();
                    toast1.present();
                }
            });
        }
        else if (localStorage.getItem('serviceBooking') == "" || localStorage.getItem('serviceBooking1') == "") {
            this.AuthServiceProvider.postData(this.loginData, 'Login').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    console.log(result);
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    loader.dismiss();
                    toast1.present();
                }
            });
        }
        else {
            this.AuthServiceProvider.postData(this.loginData, 'Login').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    console.log(result);
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    loader.dismiss();
                    toast1.present();
                }
            });
        }
    };
    LoginPage.prototype.reg = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.forgot = function () {
        this.forgotMobile = true;
        this.loginscreen = false;
        this.otpverify = false;
    };
    LoginPage.prototype.otpVerify = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'OTP verifid successfully',
            duration: 3000,
            position: 'bottom'
        });
        var toast1 = this.toastCtrl.create({
            message: 'Invalid OTP',
            duration: 3000,
            position: 'bottom'
        });
        console.log(this.otpData);
        if (localStorage.getItem("loggedData")) {
            var logged = JSON.parse(localStorage.getItem("loggedData"));
            // let otpverify=this.jsonConcat(this.otpData, logged);
            logged[0]['otp'] = this.otpData['otp'];
            console.log(logged);
            this.AuthServiceProvider.postData(logged[0], 'otpVerify').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    toast.present();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    toast1.present();
                }
                // this.makedropdown=result;
                //  console.log(this.makedropdown );
            });
        }
        else {
            console.log(this.otpData['otp']);
            //      delete this.responsedata.data['otp'];
            //    delete this.responsedata.data['otp'];
            console.log(this.responsedata);
            console.log(this.responsedata.data);
            this.responsedata.data[0]['otp'] = this.otpData['otp'];
            var otpdata_1 = this.responsedata.data;
            console.log(otpdata_1);
            //let otpverify=this.jsonConcat(this.otpData, this.responsedata.data);
            this.AuthServiceProvider.postData(otpdata_1[0], 'otpVerify').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    toast.present();
                    localStorage.setItem('loggedData', JSON.stringify(otpdata_1));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__changepass_changepass__["a" /* ChangepassPage */]);
                }
                else {
                    toast1.present();
                }
            });
        }
    };
    LoginPage.prototype.uploadAudio = function () {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: "file",
            fileName: this.audioData[0]['filename'],
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': this.audioData[0]['filename'] }
        };
        console.log('filepath', this.audioData[0]['filePath']);
        console.log('filename', this.audioData[0]['filename']);
        // console.log("userid",this.userid);
        //  fileTransfer.upload('<file path>', '<api endpoint>', options)
        fileTransfer.upload(this.audioData[0]['filePath'], 'http://sunrisetechs.com/images/audio.php', options)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            // error
            console.log(err);
            alert('error');
        });
    };
    LoginPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        //  loader.present();
        var fileTransfer = this.transfer.create();
        console.log('image name', this.imgData['imgfilename']);
        var options = {
            fileKey: 'file',
            fileName: this.imgData['imgfilename'],
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: { 'fileName': this.imgData['imgfilename'] }
        };
        fileTransfer.upload(this.imgData['imgfilePath'], 'http://sunrisetechs.com/images/image.php', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            //    loader.dismiss();
            // this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        // toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <!-- <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar> -->\n\n  <ion-toolbar no-padding>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="loginscreen" class="content">\n\n    <img class="logo" src="assets/imgs/logo.png"> \n\n    <p class="text">Rytefix</p>\n\n  <form [formGroup]="form" (ngSubmit)="login()" >\n\n  \n\n\n\n    <ion-item>\n\n  <ion-label> <ion-icon name="ios-call"></ion-icon> </ion-label>\n\n    <ion-input formControlName="mobile" type="number" [(ngModel)]="loginData.mobile" placeholder="Mobile"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label> <ion-icon name="lock"></ion-icon> </ion-label>\n\n    <ion-input formControlName="pass" type="password" [(ngModel)]="loginData.pass" placeholder="Password"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Login</button>\n\n   </form> \n\n   <ion-row style="margin-top: 20px">\n\n    <ion-col col-12 text-center>\n\n       <a href="#" (click)="forgot()" class="frpw">Forgot Password</a>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row style="margin-top: 30px">\n\n      <ion-col col-12 text-center>\n\n          <b class="color-wh">New to Rytefix ?</b><a href="#" (click)="reg()" class="register"> SIGN UP</a>\n\n      </ion-col>\n\n    </ion-row>\n\n   <!-- <a href="#" (click)="reg()">Register</a>\n\n   <a href="#" (click)="forgot()">Forgot password</a> -->\n\n</ion-content>\n\n<ion-content padding  *ngIf="forgotMobile" class="content">\n\n  <form [formGroup]="form1" (ngSubmit)="forgotPass()" >\n\n\n\n  <ion-item>\n\n    <ion-label>   <ion-icon name="lock"></ion-icon> </ion-label>\n\n    <ion-input formControlName="mobile1" type="number" [(ngModel)]="forgotData.mobile1" placeholder="Mobile"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n\n   </form> \n\n</ion-content> \n\n<ion-content padding  *ngIf="otpverify" class="content">\n\n  <form [formGroup]="form2" (ngSubmit)="otpVerify()" >\n\n\n\n  <ion-item>\n\n    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n    <ion-input formControlName="otp" type="text" [(ngModel)]="otpData.otp" placeholder="OTP"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n\n   </form> \n\n</ion-content> '/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_faq__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactus_contactus__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__faq_faq__["a" /* FaqPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__contactus_contactus__["a" /* ContactusPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement= "bottom" >\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="FAQ" tabIcon="information-circle"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Contact Us" tabIcon="ios-contact-outline"></ion-tab>\n\n  </ion-tabs>'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicebooking_servicebooking__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotehistory_quotehistory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_wallet__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
// import { Http, Headers, RequestOptions } from '@angular/http';






var HomePage = (function () {
    // user: FormGroup;
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.home = true;
        this.print = false;
    }
    HomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    HomePage.prototype.Gadgets = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Select Gadgets',
            // message: 'Select option ',
            inputs: [
                {
                    type: 'radio',
                    label: 'Mobile',
                    value: 'Mobile'
                },
                {
                    type: 'radio',
                    label: 'Laptop',
                    value: 'Laptop'
                },
                {
                    type: 'radio',
                    label: 'Tablet',
                    value: 'Tablet'
                },
                {
                    type: 'radio',
                    label: 'Desktop & Computer',
                    value: 'Computer'
                },
                {
                    type: 'radio',
                    label: 'Printer, Tv & Others',
                    value: 'Printer'
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) {
                        console.log("cancel clicked");
                    }
                },
                {
                    text: "Ok",
                    handler: function (data) {
                        console.log(data);
                        if (data) {
                            localStorage.setItem('gadget', data);
                            console.log("search clicked");
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servicebooking_servicebooking__["a" /* ServicebookingPage */]);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.wallet = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem("loggedData"))) {
            console.log(JSON.parse(localStorage.getItem("loggedData")));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wallet_wallet__["a" /* WalletPage */]);
        }
        else {
            // alert("please login Required");
            console.log(JSON.parse(localStorage.getItem("loggedData")));
            var alert_1 = this.alertCtrl.create({
                title: 'Warning',
                message: 'Please login or register to use this feature !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            // this.navCtrl.push(RegisterPage);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wallet_wallet__["a" /* WalletPage */]);
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    HomePage.prototype.quoteHistory = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login',
            subTitle: 'Login Required.',
            buttons: ['Ok']
        });
        // alert("test");
        if (localStorage.getItem("loggedData")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Warning',
                message: 'Please login or register to use this feature !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\home\home.html"*/'<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu" class="color-wh"></ion-icon>\n\n        </button>\n\n        <ion-title>Home</ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngIf="home">\n\n\n\n    <ion-slides class="slides" pager="true" (ionSlideDidChange)="slideChanged()">\n\n        <ion-slide>\n\n          <img src = \'http://sunrisetechs.com/images/imgs/customerAppImages/banner2.jpg\'>\n\n        </ion-slide>\n\n        <ion-slide>\n\n                <img src = \'http://sunrisetechs.com/images/imgs/customerAppImages/banner1.jpg\'>\n\n        </ion-slide>\n\n        <ion-slide>\n\n                <img src = \'http://sunrisetechs.com/images/imgs/customerAppImages/banners.jpg\'>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    <ion-list>\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-6><a  (click)="Gadgets()">\n\n                    <ion-item class="selectbg">\n\n                        <!-- <ion-label hidden>Select Gadgets</ion-label>\n\n                        <ion-select [(ngModel)]="toppings" (ionChange)="Gadgets($event);">\n\n                            <ion-option value="Mobile" selected>Mobile</ion-option>\n\n                            <ion-option value="Laptop">Laptop</ion-option>\n\n                            <ion-option value="Tablet">Tablet</ion-option>\n\n                            <ion-option value="Printer">Printer,cam &others</ion-option>\n\n                        </ion-select> -->\n\n                    </ion-item></a>\n\n                </ion-col>\n\n                <ion-col col-6><a  (click)="quoteHistory()">\n\n                    <ion-item class="QHSbg"></ion-item>\n\n                </a>\n\n                   \n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6><a  (click)="Gadgets()">\n\n                    <ion-item class="selectbg">\n\n                    </ion-item></a>\n\n                </ion-col>\n\n                <ion-col col-6><a  (click)="wallet()">\n\n                    <ion-item class="QHSbg"></ion-item>\n\n                </a>\n\n                   \n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-list>\n\n</ion-content> \n\n<!-- \n\n<ion-content *ngIf="print">\n\n    <section class = "home-container">\n\n      <div class="row row-center" >\n\n          <div class="col text-center" >\n\n              <img alt="Logo" height="100" src="assets/imgs/watch.gif" >\n\n          </div>\n\n     </div>\n\n    </section>\n\n</ion-content> -->\n\n\n\n\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotehistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editservicebooking_editservicebooking__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the QuotehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuotehistoryPage = (function () {
    function QuotehistoryPage(navCtrl, navParams, AuthServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
    }
    QuotehistoryPage.prototype.jsonConcat = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    QuotehistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad QuotehistoryPage');
        if (JSON.parse(localStorage.getItem("loggedData"))) {
            var logged = JSON.parse(localStorage.getItem("loggedData"));
            console.log(logged);
            this.AuthServiceProvider.postData(logged[0], 'quoteHistory').then(function (result) {
                console.log(result);
                _this.quoteHistory = result;
                // this.navCtrl.setRoot(HomePage);
            });
        }
    };
    QuotehistoryPage.prototype.refresh = function () {
        this.navCtrl.push(this.navCtrl.getActive().component);
        console.log("refresh");
    };
    QuotehistoryPage.prototype.quoteShow = function (book_id) {
        console.log(book_id);
        var service = JSON.parse(localStorage.getItem('loggedData'));
        service[0]['book_id'] = book_id;
        console.log(service);
        localStorage.setItem('loggedData', JSON.stringify(service));
        console.log(JSON.parse(localStorage.getItem('loggedData')));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__["a" /* QuoteviewPage */]);
    };
    QuotehistoryPage.prototype.ServiceCancel = function (cancel_id) {
        var _this = this;
        this.AuthServiceProvider.postData(cancel_id, 'serviceCancel').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                _this.refresh();
                alert("Service cancel successfully");
            }
            else {
            }
        });
    };
    QuotehistoryPage.prototype.editBooking = function (book_id, gadget) {
        var data = { booking_id: book_id, gadget: gadget };
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editservicebooking_editservicebooking__["a" /* EditservicebookingPage */], { item: data });
    };
    QuotehistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quotehistory',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\quotehistory\quotehistory.html"*/'<!--\n\n  Generated template for the QuotehistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-toolbar no-padding>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Quote & Response</ion-title>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n  <!-- <ion-card *ngFor="let item of quoteHistory"> -->\n\n    <!-- <ion-card-header>\n\n            \n\n      <h2 *ngIf="item.softService">{{item.softService}}<br></h2>\n\n      <h2 *ngIf="item.hardService">{{item.hardService}}<br></h2>\n\n      <h2 *ngIf="item.othermodel">{{item.othermodel}}<br></h2>\n\n    </ion-card-header> -->\n\n    <!-- <ion-card-content>\n\n        <ion-row>\n\n            <ion-col col-4 text-left>\n\n             <b>Make</b>\n\n            </ion-col>\n\n            <ion-col col-1><b>:</b></ion-col>\n\n            <ion-col col-7 text-left>\n\n                {{item.make_name}}<p *ngIf="item.make_name==null">{{item.make}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n              <ion-col col-4 text-left>\n\n               <b>Model</b>\n\n              </ion-col>\n\n              <ion-col col-1><b>:</b></ion-col>\n\n              <ion-col col-7 text-left>\n\n                  {{item.model}}\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-4 text-left>\n\n                 <b> Booking Date</b>\n\n                </ion-col>\n\n                <ion-col col-1><b>:</b></ion-col>\n\n                <ion-col col-7 text-left>\n\n                    {{item.posted_on}}\n\n                </ion-col>\n\n              </ion-row> -->\n\n              <!-- <ion-card-content> -->\n\n              <!-- <ion-row>\n\n                  <ion-col col-4 text-left>\n\n                   <b>Status</b>\n\n                  </ion-col>\n\n                  <ion-col col-1><b>:</b></ion-col>\n\n                  <ion-col col-7 text-left>\n\n                     \n\n              <div *ngIf="!item.cancel_status">\n\n                <p *ngIf="!item.id||!item.accept_status">In-progress</p>\n\n                <p *ngIf="item.accept_status==1">In-progress</p>\n\n                <p *ngIf="item.accept_status==4">Decline</p>\n\n                <p *ngIf="item.accept_status==3&&item.customer_completed==0">Accepted</p>\n\n              </div>\n\n              <div *ngIf="item.cancel_status==1||item.cancel_status==2">Booking Cancelled</div>\n\n              <div *ngIf="item.customer_completed==1">Service completed</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n    </ion-card-content> -->\n\n    \n\n  <!-- </ion-card> -->\n\n  <!-- ///////////////////////////////////////////////////////////////// -->\n\n\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of quoteHistory">\n\n            <ion-row >\n\n                    <ion-col col-5 text-left>\n\n                     <b>Make</b>\n\n                    </ion-col>\n\n                    <ion-col col-1><b>:</b></ion-col>\n\n                    <ion-col col-6 text-left>\n\n                        <p>  {{item.make_name}}</p><p *ngIf="item.make_name==null">{{item.make}}</p>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                         <b>Model</b>\n\n                        </ion-col>\n\n                        <ion-col col-1><b>:</b></ion-col>\n\n                        <ion-col col-6 text-left>\n\n                            <p>   {{item.model}}</p>\n\n                        </ion-col>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <ion-col col-5 text-left>\n\n                           <b> Booking Date</b>\n\n                          </ion-col>\n\n                          <ion-col col-1><b>:</b></ion-col>\n\n                          <ion-col col-6 text-left>\n\n                             <p> {{item.posted_on}}</p>\n\n                          </ion-col>\n\n                        </ion-row>\n\n\n\n                        <ion-row>\n\n                          <ion-col col-5 text-left>\n\n                           <b>Status</b>\n\n                          </ion-col>\n\n                          <ion-col col-1><b>:</b></ion-col>\n\n                          <ion-col col-6 text-left>\n\n                             \n\n                            <div *ngIf="!item.cancel_status">\n\n                              <p *ngIf="!item.id||!item.accept_status">In-progress</p>\n\n                              <p *ngIf="item.accept_status==1">In-progress</p>\n\n                              <p *ngIf="item.accept_status==4">Decline</p>\n\n                              <p *ngIf="item.accept_status==3&&item.customer_completed==0">Accepted</p>\n\n                            </div>\n\n                            <div *ngIf="item.cancel_status==1||item.cancel_status==2">Booking Cancelled</div>\n\n                            <div *ngIf="item.customer_completed==1">Service completed</div>\n\n                          </ion-col>\n\n                        </ion-row>\n\n                        <div class="btn-group">\n\n                          <ion-row>\n\n                            <ion-col col-4 text-center>\n\n                                <button ion-button color="primary" [disabled]="!item.id" class="button" small (click)="quoteShow(item.book_id)" icon-only>Quotes</button>\n\n                            </ion-col>\n\n                            <ion-col col-2 text-center>\n\n                              <button ion-button color="primary" [disabled]="item.id" class="button" small (click)="editBooking(item.book_id,item.gadget)" icon-only>Edit</button>\n\n                            </ion-col>\n\n                              <ion-col col-6 text-center>\n\n                                  <button ion-button color="danger" [hidden]="item.cancel_status" class="button" small (click)="ServiceCancel(item.book_id)" icon-only>Cancel Booking</button>\n\n                              </ion-col>\n\n                            </ion-row>\n\n                              </div>\n\n                        </ion-item></ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\quotehistory\quotehistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], QuotehistoryPage);
    return QuotehistoryPage;
}());

//# sourceMappingURL=quotehistory.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_servicestate_servicestate__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuoteviewPage = (function () {
    function QuoteviewPage(navCtrl, AuthServiceProvider, navParams, callNumber, geolocation, alertCtrl, toastCtrl, serviceState) {
        this.navCtrl = navCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceState = serviceState;
        this.regionals = [];
        this.mapload();
        this.mapview = true;
        this.listview = false;
    }
    QuoteviewPage_1 = QuoteviewPage;
    QuoteviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuoteviewPage');
        this.quoteget();
    };
    QuoteviewPage.prototype.listshow = function () {
        this.mapview = false;
        this.listview = true;
    };
    QuoteviewPage.prototype.mapshow = function () {
        this.refresh();
        this.mapload();
        this.mapview = true;
        this.listview = false;
    };
    QuoteviewPage.prototype.quoteget = function () {
        var _this = this;
        console.log(localStorage.getItem("loggedData"));
        var quotedata = JSON.parse(localStorage.getItem("loggedData"));
        console.log(quotedata);
        this.AuthServiceProvider.postData(quotedata[0], 'quoteView').then(function (result) {
            console.log(result);
            _this.quoteview = result;
            _this.acceptCheck(_this.quoteview);
            console.log(_this.quoteview[0].make_name);
            if (_this.quoteview[0].make_name == null) {
                _this.make = _this.quoteview[0].make;
            }
            else {
                _this.make = _this.quoteview[0].make_name;
            }
            //this.make= this.quoteview[0].make_name;
            _this.model = _this.quoteview[0].model;
            _this.soft = _this.quoteview[0].softService;
            _this.hard = _this.quoteview[0].hardService;
            _this.othermodel = _this.quoteview[0].othermodel;
            _this.pickup = _this.quoteview[0].pickup_type;
            _this.booking_date = _this.quoteview[0].posted_on;
            _this.image = _this.quoteview[0].image;
            _this.audio = _this.quoteview[0].audio;
            _this.regionals = result;
            _this.regionals.forEach(function (o) {
                Object.keys(o).forEach(function (k) {
                    if (isFinite(o[k])) {
                        o[k] = +o[k];
                    }
                });
            });
            console.log(_this.regionals);
            _this.mapload();
            // this.navCtrl.setRoot(HomePage);
        });
    };
    QuoteviewPage.prototype.quoteChat = function () {
        alert("test");
    };
    QuoteviewPage.prototype.quoteCall = function (mobile) {
        console.log(mobile);
        this.callNumber.callNumber(mobile, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    QuoteviewPage.prototype.acceptCheck = function (quoteView) {
        var _this = this;
        quoteView.forEach(function (element) {
            if (element.accept_status == 3) {
                console.log(element);
                _this.Check = "accepted";
                console.log(_this.Check);
            }
        });
    };
    QuoteviewPage.prototype.quoteAccept = function (id, data) {
        var _this = this;
        // checking for customer if already accepted the quote
        if (this.Check == "accepted") {
            // if accepted throws prompt message to ignore accepted quote
            var promptalert = this.alertCtrl.create({
                title: 'Warning',
                message: 'you have already accepted the quote ! please ignore the accepted quote to accept this.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                        }
                    }
                ]
            });
            promptalert.present();
        }
        else {
            console.log('quote is not accepted previously');
            var promptalert = this.alertCtrl.create({
                title: 'Accept Quote',
                message: 'Do you want to Accept this Quote?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log(id);
                            _this.AuthServiceProvider.postData(id, 'serviceAccept').then(function (result) {
                                _this.responsedata = result;
                                if (_this.responsedata.status == true) {
                                    //this.refresh();
                                    _this.quoteAccept1(data);
                                    alert("Service accept successfully");
                                }
                            });
                        }
                    }
                ]
            });
            promptalert.present();
        }
    };
    QuoteviewPage.prototype.quoteAccept1 = function (data) {
        console.log("data", data);
        this.navCtrl.push(QuoteviewPage_1, { "data": data });
    };
    QuoteviewPage.prototype.quoteIgnore = function (id) {
        var _this = this;
        var promptalert = this.alertCtrl.create({
            title: 'Ignore',
            message: 'Do you want to Ignore this Quote?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log(id);
                        _this.AuthServiceProvider.postData(id, 'serviceIgnore').then(function (result) {
                            _this.responsedata = result;
                            if (_this.responsedata.status == true) {
                                _this.refresh();
                                alert("Service ignore successfully");
                            }
                        });
                    }
                }
            ]
        });
        promptalert.present();
    };
    QuoteviewPage.prototype.refresh = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        console.log("refresh");
    };
    QuoteviewPage.prototype.mapload = function () {
        var _this = this;
        //  this.loadMap(13.08648395538330,80.27350616455078 );
        this.options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            console.log(pos.coords.latitude + ',' + pos.coords.longitude);
            _this.addMap(pos.coords.latitude, pos.coords.longitude);
            //  this.loadMap(pos.coords.latitude,pos.coords.longitude);
        }, function (err) {
            console.log("error : " + err.message);
        });
    };
    /*##User location load##*/
    QuoteviewPage.prototype.addMap = function (lat, long) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 5,
            visible: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // this.addMarker();
        var markers = [];
        console.log("regionals", this.regionals);
        var _loop_1 = function (regional) {
            this_1.nabo_img = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
            console.log(regional.latitude + ',' + regional.longitude);
            var markerData = {
                position: {
                    lat: regional.latitude,
                    lng: regional.longitude
                },
                map: this_1.map,
                icon: this_1.nabo_img,
                title: regional.username,
            };
            regional.marker = new google.maps.Marker(markerData);
            markers.push(regional.marker);
            //let content = regional.username; 
            //infoWindow.open(this.map, regional.marker);
            regional.marker.addListener('click', function () {
                var content = "<div><div><b>Vendor name:</b> " + regional.username +
                    "</div><p><b>Exact price:</b> " + regional.exactprice +
                    "</p><p><b>Warranty:</b> " + regional.warranty +
                    "</p><p><b>Description:</b> " + regional.description +
                    "</p><button   class='buttonchat' (ng-click)='quoteChat()' >Chat</button>" +
                    "<button ion-button color='secondary'  class='buttoncall' (click)='quoteCall(" + regional.mobile + ")' icon-only>Call</button>" +
                    "<button ion-button color='primary'  class='buttonacc' (click)='quoteAccept(" + regional.id + regional + ")' icon-only>Accept</button>" +
                    "<button ion-button color='light'  class='buttonig' (click)='quoteIgnore(" + regional.id + ")' icon-only>Ignore</button></div>'";
                var infoWindow = new google.maps.InfoWindow({
                    content: content
                });
                infoWindow.open(_this.map, regional.marker);
                for (var _i = 0, _a = _this.regionals; _i < _a.length; _i++) {
                    var c = _a[_i];
                    console.log(c);
                    c.current = false;
                    // c.infoWindow.close();
                }
                _this.regionals = regional;
                var markerData = {
                    position: {
                        lat: regional.latitude,
                        lng: regional.longitude
                    },
                    map: _this.map,
                    title: regional.title,
                };
                regional.marker = new google.maps.Marker(markerData);
                markers.push(regional.marker);
                console.log(regional.marker);
                console.log(regional);
                console.log(regional.latitude + ',' + regional.longitude);
                //this.othersAddress = regional.username+','+regional.street_address+regional.city +regional.country ;
                // this.othersAddress = ` ${regional.username}, ${regional.street_address}, ${regional.city}, ${regional.country} ` ;
                _this.map.panTo(regional.marker.getPosition());
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.regionals; _i < _a.length; _i++) {
            var regional = _a[_i];
            _loop_1(regional);
        }
    };
    // loadMap(lat,long){
    //  console.log(lat+","+long);
    //   console.log("lat and lang")
    //   let latLng= new google.maps.LatLng(lat, long);
    //   console.log(latLng);
    //   let mapOptions={
    //     center:latLng,
    //     zoom:15,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   }
    // this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);
    // this.addMarker();
    // }
    /*##user location mark in map##*/
    QuoteviewPage.prototype.addMarker = function () {
        var _this = this;
        console.log("marker");
        // let cur_img='http://rayi.in/naboApi/mapicon/nabo_home.png';
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<p>This is your current position !</p>";
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
            //this.othersAddress = "This is your current position !";
        });
    };
    QuoteviewPage.prototype.completeQuote = function (vid, bid) {
        var _this = this;
        // console.log('vid',vid);
        // console.log('bid',bid);
        var prompt = this.alertCtrl.create({
            message: "Service completed in service center and you paid for the service",
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log('yes clicked');
                        _this.serviceState.completeService(vid, bid).subscribe(function (data) {
                            console.log(data);
                            console.log(data.status);
                            if (data.status == 'success') {
                                var toast = _this.toastCtrl.create({
                                    message: "Congratulations! You can use the credit",
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                            }
                        }), function (error) {
                            console.log(error);
                        };
                    }
                },
                {
                    text: 'No',
                    handler: function (data) {
                        alert(" Please pay for the service and then complete");
                        return true;
                    }
                }
            ]
        });
        prompt.present();
    };
    QuoteviewPage.prototype.declineQuote = function (vid, bid) {
        var _this = this;
        // console.log('data',this.quoteview[0]);
        // let vid = this.quoteview[0].vendor;
        // let bid= this.quoteview[0].booking_id;
        console.log('vendor id', vid);
        console.log('booking id', bid);
        var prompt = this.alertCtrl.create({
            message: "Please describe the problem",
            inputs: [
                {
                    //type :'text',
                    name: 'reason',
                    placeholder: 'Reason for decline',
                    value: ""
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        // let validateObj = this.validate(data);
                        if (data.reason == "") {
                            var toast = _this.toastCtrl.create({
                                message: "Please enter the reason ",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return false;
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "Now you can accept other quotes",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            _this.serviceState.reportproblem(vid, bid, data.reason).subscribe(function (data) {
                                console.log(data);
                            }), function (error) {
                                console.log(error);
                            };
                            // this.navCtrl.push(QuoteviewPage);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], QuoteviewPage.prototype, "mapElement", void 0);
    QuoteviewPage = QuoteviewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quoteview',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\quoteview\quoteview.html"*/'<!--\n\n  Generated template for the QuoteviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-toolbar no-padding>\n\n      <!-- <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button> -->\n\n    <ion-title>Quote</ion-title>\n\n    <!-- <ion-segment>\n\n        <ion-segment-button  class="button-l" (click)="listshow()">\n\n          List View\n\n        </ion-segment-button>\n\n        <ion-segment-button  class="button-m" (click)="mapshow()">\n\n          Map View\n\n        </ion-segment-button>\n\n      </ion-segment> -->\n\n  </ion-toolbar>\n\n  <ion-segment>\n\n    <ion-segment-button  class="button-l" (click)="listshow()">\n\n      List View\n\n    </ion-segment-button>\n\n    <ion-segment-button  class="button-m" (click)="mapshow()">\n\n      Map View\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n\n\n <ion-content *ngIf="mapview">\n\n     <ion-card id="mapcard">\n\n         <ion-card-header class="map-head">\n\n             <h6 style="color:#fff">Booking Details</h6>\n\n         </ion-card-header>\n\n         <ion-card-content>\n\n                <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                         <b>Make</b>\n\n                        </ion-col>\n\n                        <ion-col col-1><b>:</b></ion-col>\n\n                        <ion-col col-6 text-left>\n\n                            {{make}}\n\n                        </ion-col>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                            <ion-col col-5 text-left>\n\n                             <b>Model</b>\n\n                            </ion-col>\n\n                            <ion-col col-1><b>:</b></ion-col>\n\n                            <ion-col col-6 text-left>\n\n                                {{model}}\n\n                            </ion-col>\n\n                          </ion-row>\n\n                          <ion-row>\n\n                                <ion-col col-5 text-left>\n\n                                 <b>Problem</b>\n\n                                </ion-col>\n\n                                <ion-col col-1><b>:</b></ion-col>\n\n                                <ion-col col-6 text-left>\n\n                                        <p *ngIf="soft!=\'\'||hard !=\'\'||othermodel !=\'\'">{{soft}}{{hard}}{{othermodel}}</p>\n\n                                </ion-col>\n\n                              </ion-row>\n\n                              <ion-row>\n\n                                    <ion-col col-5 text-left>\n\n                                     <b>Pickup</b>\n\n                                    </ion-col>\n\n                                    <ion-col col-1><b>:</b></ion-col>\n\n                                    <ion-col col-6 text-left>\n\n                                        {{pickup}}\n\n                                    </ion-col>\n\n                                  </ion-row>\n\n                                  <ion-row>\n\n                                        <ion-col col-5 text-left>\n\n                                         <b>Booking Date</b>\n\n                                        </ion-col>\n\n                                        <ion-col col-1><b>:</b></ion-col>\n\n                                        <ion-col col-6 text-left>\n\n                                            {{booking_date}}\n\n                                        </ion-col>\n\n                                      </ion-row>\n\n         </ion-card-content>\n\n     </ion-card>\n\n  \n\n    <ion-content class="map-pin">\n\n        <div #map id="map"></div> \n\n    </ion-content>\n\n  \n\n    <!-- <div class="btn-group switch">\n\n      <button ion-button color="light" class="button" (click)="listshow()" icon-only>List View</button>\n\n      <button ion-button color="light" class="button" (click)="mapshow()" icon-only>Map View</button>\n\n  </div> -->\n\n  \n\n</ion-content>\n\n <ion-content padding *ngIf="listview">\n\n    <div style="margin-top:80px">\n\n        <!-- <div padding>\n\n                <ion-segment>\n\n                  <ion-segment-button color="dark" class="button" (click)="listshow()">\n\n                    Kittens\n\n                  </ion-segment-button>\n\n                  <ion-segment-button color="dark" class="button" (click)="mapshow()">\n\n                    Puppies\n\n                  </ion-segment-button>\n\n                </ion-segment>\n\n              </div> -->\n\n    <ion-card  id="card1" >\n\n        <ion-card-header>\n\n           <h5 class="head"><b>Booking Details</b></h5>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n           <ion-row>\n\n               <ion-col col-4 text-left>\n\n                <b>Make</b>\n\n               </ion-col>\n\n               <ion-col col-1><b>:</b></ion-col>\n\n               <ion-col col-7 text-left>\n\n                   {{make}}\n\n               </ion-col>\n\n             </ion-row>\n\n             <ion-row>\n\n                 <ion-col col-4 text-left>\n\n                  <b>Model</b>\n\n                 </ion-col>\n\n                 <ion-col col-1><b>:</b></ion-col>\n\n                 <ion-col col-7 text-left>\n\n                     {{model}}\n\n                 </ion-col>\n\n               </ion-row>\n\n               <ion-row>\n\n                   <ion-col col-4 text-left>\n\n                    <b>Problem</b>\n\n                   </ion-col>\n\n                   <ion-col col-1><b>:</b></ion-col>\n\n                   <ion-col col-7 text-left>\n\n                       <p *ngIf="soft!=\'\'||hard !=\'\'||othermodel !=\'\'">{{soft}}{{hard}}{{othermodel}}</p>\n\n                   </ion-col>\n\n                 </ion-row>\n\n                 <ion-row>\n\n                     <ion-col col-4 text-left>\n\n                      <b>Pickup</b>\n\n                     </ion-col>\n\n                     <ion-col col-1><b>:</b></ion-col>\n\n                     <ion-col col-7 text-left>\n\n                         {{pickup}}\n\n                     </ion-col>\n\n                   </ion-row>\n\n                   <ion-row>\n\n                       <ion-col col-4 text-left>\n\n                        <b> Booking Date</b>\n\n                       </ion-col>\n\n                       <ion-col col-1><b>:</b></ion-col>\n\n                       <ion-col col-7 text-left>\n\n                           {{booking_date}}\n\n                       </ion-col>\n\n                     </ion-row>\n\n                     <div>\n\n                            <audio controls>\n\n                            <source src="http://sunrisetechs.com/images/audio/{{audio}}">\n\n                           \n\n                            </audio>\n\n                            </div>\n\n                     <ion-thumbnail *ngIf="image">\n\n                            <img src="http://sunrisetechs.com/images/imgs/{{image}}"/>\n\n                          </ion-thumbnail>\n\n                   \n\n                          \n\n                    \n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-item>\n\n          <h5 class="head1"><b>Quotes Received</b></h5>\n\n           </ion-item>\n\n           <ion-card *ngFor="let item of quoteview" id="card2">\n\n              <ion-card-header class="v-name">\n\n                    <ion-row>\n\n                            <ion-col col-12 text-center >\n\n                                {{item.username}}\n\n                            </ion-col>\n\n                          </ion-row>\n\n              </ion-card-header>\n\n               <ion-card-content>\n\n                   \n\n                     <ion-row>\n\n                         <ion-col col-5 text-left>\n\n                          <b>  Original Spare Price</b>\n\n                         </ion-col>\n\n                         <ion-col col-1><b>:</b></ion-col>\n\n                         <ion-col col-6 text-left>\n\n                             {{item.exactprice}}\n\n                         </ion-col>\n\n                       </ion-row>\n\n                       <ion-row>\n\n                               <ion-col col-5 text-left>\n\n                                <b> Second Quality Price</b>\n\n                               </ion-col>\n\n                               <ion-col col-1><b>:</b></ion-col>\n\n                               <ion-col col-6 text-left>\n\n                                   {{item.second_quality_price}}\n\n                               </ion-col>\n\n                             </ion-row>\n\n                             <ion-row>\n\n                                   <ion-col col-5 text-left>\n\n                                    <b> Time Required</b>\n\n                                   </ion-col>\n\n                                   <ion-col col-1><b>:</b></ion-col>\n\n                                   <ion-col col-6 text-left>\n\n                                       {{item.time_period}}\n\n                                   </ion-col>\n\n                                 </ion-row>\n\n                       <ion-row>\n\n                           <ion-col col-5 text-left>\n\n                            <b> Warranty</b>\n\n                           </ion-col>\n\n                           <ion-col col-1><b>:</b></ion-col>\n\n                           <ion-col col-6 text-left>\n\n                               {{item.warranty}}\n\n                           </ion-col>\n\n                         </ion-row>\n\n                         <ion-row>\n\n                               <ion-col col-5 text-left>\n\n                                <b> Home Pick Up</b>\n\n                               </ion-col>\n\n                               <ion-col col-1><b>:</b></ion-col>\n\n                               <ion-col col-6 text-left>\n\n                                   {{item.pickup_type}}\n\n                               </ion-col>\n\n                             </ion-row>\n\n                         <ion-row>\n\n                             <ion-col col-5 text-left>\n\n                              <b> Description</b>\n\n                             </ion-col>\n\n                             <ion-col col-1><b>:</b></ion-col>\n\n                             <ion-col col-6 text-left>\n\n                                 {{item.description}}\n\n                             </ion-col>\n\n                           </ion-row>\n\n                           <ion-row *ngIf="item.accept_status==4">\n\n                               <ion-col col-5 text-left>\n\n                                <b> Reason</b>\n\n                               </ion-col>\n\n                               <ion-col col-1><b>:</b></ion-col>\n\n                               <ion-col col-6 text-left>\n\n                                 {{item.reason}}\n\n                               </ion-col>\n\n                             </ion-row>     \n\n               </ion-card-content>\n\n               \n\n              <div *ngIf="item.accept_status==1||item.accept_status==2||item.accept_status==3">\n\n               <div class="btn-group">\n\n                  <ion-row>\n\n                    <ion-col col-3>\n\n                        <button ion-button color="dark" [hidden]="item.cancel_status" small class="button" (click)="quoteChat(item.id)" icon-only>Chat</button>          \n\n                    </ion-col>\n\n                       <ion-col col-3>\n\n                               <button ion-button color="secondary" [hidden]="item.cancel_status"  small class="button" (click)="quoteCall(item.mobile)" icon-only>Call</button>\n\n                              </ion-col>\n\n                           <ion-col *ngIf="item.accept_status==1||item.accept_status==2" col-3>\n\n                               <!-- <button ion-button color="primary" [hidden]="item.cancel_status" small class="button" (click)="quoteAccept1(item)" icon-only>Accept</button> -->\n\n                               <button ion-button color="primary" [hidden]="item.cancel_status" small class="button" (click)="quoteAccept(item.id,item)" icon-only>Accept</button>\n\n                              </ion-col>\n\n                               <ion-col *ngIf="item.accept_status==1||item.accept_status==2" col-3>\n\n                                       <button ion-button color="light" [hidden]="item.cancel_status" small class="button" (click)="quoteIgnore(item.id)" icon-only>Ignore</button>\n\n                                   </ion-col>\n\n                                               \n\n                  </ion-row>\n\n                  <div *ngIf="item.accept_status==3">\n\n                  <button ion-button color="secondary" (click)="completeQuote(item.vendor,item.booking_id)" block>Complete the service</button>\n\n                  <!-- </ion-col> -->\n\n                  <!-- <ion-col col-2></ion-col> -->\n\n                  <!-- <ion-col col-6> -->\n\n                      <button ion-button color="dark" (click)="declineQuote(item.vendor,item.booking_id)" block>Report the problem</button>\n\n                    </div>\n\n                </div>\n\n                </div>\n\n        <!-- <div class="btn-group">\n\n                <button ion-button color="red" [hidden]="item.cancel_status"  class="button" (click)="quoteChat(item.id)" icon-only>Chat</button>\n\n                <button ion-button color="light" [hidden]="item.cancel_status"  class="button" (click)="quoteCall(item.mobile)" icon-only>Call</button>\n\n                <button ion-button color="red" [hidden]="item.cancel_status"  class="button" (click)="quoteAccept(item.id)" icon-only>Accept</button>\n\n                <button ion-button color="light" [hidden]="item.cancel_status" class="button" (click)="quoteIgnore(item.id)" icon-only>Ignore</button>\n\n            </div>\n\n    -->\n\n   \n\n  </ion-card>\n\n  <!-- <div class="btn-group switch">\n\n      <ion-row>\n\n          <ion-col col-6>\n\n                <button ion-button color="light" class="button" (click)="listshow()" icon-only>List View</button> \n\n          </ion-col>\n\n          <ion-col col-6>\n\n                <button ion-button color="light" class="button" (click)="mapshow()" icon-only>Map View</button>\n\n          </ion-col>\n\n      </ion-row>  \n\n</div> -->\n\n</div>\n\n    \n\n   \n\n\n\n  <!-- <div class="btn-group switch">\n\n    <button ion-button color="light" class="button" (click)="listshow()" icon-only>List View</button>\n\n    <button ion-button color="light" class="button" (click)="mapshow()" icon-only>Map View</button>\n\n</div> -->\n\n\n\n</ion-content> \n\n\n\n\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\quoteview\quoteview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_servicestate_servicestate__["a" /* ServicestateProvider */]])
    ], QuoteviewPage);
    return QuoteviewPage;
    var QuoteviewPage_1;
}());

//# sourceMappingURL=quoteview.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicestateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';



/*
  Generated class for the ServicestateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicestateProvider = (function () {
    function ServicestateProvider(http) {
        this.http = http;
        console.log('Hello ServicestateProvider Provider');
    }
    ServicestateProvider.prototype.reportproblem = function (vid, bid, reason) {
        // return this.http.get("http://rytefix.in/apitest/vendorapinew.php?action=newServiceDetails&vid="+userid)
        return this.http.get("http://sunrisetechs.com/api/cusapi.php?action=cusReportProblem&vid=" + vid + "&bid=" + bid + "&reason=" + reason)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.completeService = function (vid, bid) {
        return this.http.get("http://sunrisetechs.com/api/cusapi.php?action=bookingCompleted&bid=" + bid + "&vid=" + vid)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    // http://sunrisetechs.com/api/cusapi.php?action=promoApply&cid=101&bid=121&pcode=Test
    ServicestateProvider.prototype.creditearns = function (cid) {
        return this.http.get("http://sunrisetechs.com/api/cusapi.php?action=customerEarning&cid=" + cid)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.promocode = function (cid, bid, pcode) {
        return this.http.get("http://sunrisetechs.com/api/cusapi.php?action=promoApply&cid=" + cid + "&bid=" + bid + "&pcode=" + pcode)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ServicestateProvider);
    return ServicestateProvider;
}());

//# sourceMappingURL=servicestate.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChangepassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepassPage = (function () {
    function ChangepassPage(navCtrl, loadingCtrl, navParams, toastCtrl, AuthServiceProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            npass: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            cpass: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
        this.passData = { "npass": "", "cpass": "" };
        this.userCpass = false;
        this.disable = true;
        if (localStorage.getItem("loggedData")) {
            this.ionViewDidLoad();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
    }
    Object.defineProperty(ChangepassPage.prototype, "npass", {
        get: function () {
            return this.form.get('npass');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangepassPage.prototype, "cpass", {
        get: function () {
            return this.form.get('cpass');
        },
        enumerable: true,
        configurable: true
    });
    ChangepassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepassPage');
    };
    ChangepassPage.prototype.npassword = function (data) {
        console.log(data);
        this.userPass = data;
    };
    ChangepassPage.prototype.cpassword = function (data) {
        console.log(data);
        if (this.userPass == data) {
            console.log("true");
            this.userCpass = false;
            this.disable = false;
        }
        else {
            console.log("true");
            this.userCpass = true;
        }
    };
    ChangepassPage.prototype.changePass = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Password Change successfully',
            duration: 3000,
            position: 'bottom'
        });
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        loader.present();
        console.log(this.passData);
        var loggedData = JSON.parse(localStorage.getItem("loggedData"));
        console.log(loggedData);
        loggedData[0]['resetpass'] = this.passData['npass'];
        this.AuthServiceProvider.postData(loggedData[0], 'resetPassword').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                loader.dismiss();
                console.log(result);
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else {
                loader.dismiss();
            }
        });
    };
    ChangepassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepass',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\changepass\changepass.html"*/'<!--\n\n  Generated template for the ChangepassPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Change Password</ion-title>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="margin-top:50px">\n\n  <form [formGroup]="form" (ngSubmit)="changePass()" >\n\n  \n\n    <ion-item>\n\n    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n    <ion-input formControlName="npass" type="password" placeholder="New Password" (focusout)="npassword($event.target.value)"  [(ngModel)]="passData.npass"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label ><ion-icon name="lock"></ion-icon> </ion-label>\n\n    <ion-input formControlName="cpass" type="password" placeholder="Confirm Password" (focusout)="cpassword($event.target.value)"  [(ngModel)]="passData.cpass"></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="userCpass">Password not match</div>\n\n   <button ion-button type="submit"  class="sign_btn" [disabled]="disable"  round full>Ok</button>\n\n   </form> \n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\changepass\changepass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ChangepassPage);
    return ChangepassPage;
}());

//# sourceMappingURL=changepass.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(alertCtrl, transfer, file, navCtrl, loadingCtrl, toastCtrl, AuthServiceProvider, navParams) {
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.file = file;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.navParams = navParams;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            cpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            area: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            pincode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email])
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            otp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.otpData = { "otp": "" };
        this.userData = { "username": "", "mobile": "", "mail": "", "password": "", "cpassword": "", "area": "", "city": "", "pincode": "", "deviceId": "" };
        this.userCpass = false;
        this.disable = true;
        this.otpverify = false;
        this.registerpage = true;
        this.userData.deviceId = localStorage.getItem('deviceID');
        console.log('device ID = ', this.userData.deviceId);
    }
    Object.defineProperty(RegisterPage.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "mobile", {
        get: function () {
            return this.form.get('mobile');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "mail", {
        get: function () {
            return this.form.get('mail');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "cpassword", {
        get: function () {
            return this.form.get('cpassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "area", {
        get: function () {
            return this.form.get('area');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "city", {
        get: function () {
            return this.form.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "pincode", {
        get: function () {
            return this.form.get('pincode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "otp", {
        get: function () {
            return this.form1.get('otp');
        },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        if (localStorage.getItem('imageList')) {
            this.imgData = JSON.parse(localStorage.getItem('imageList'));
        }
        if (localStorage.getItem('audiolist')) {
            this.audioData = JSON.parse(localStorage.getItem('audiolist'));
        }
    };
    RegisterPage.prototype.pass = function (data) {
        console.log(data);
        this.uesrPass = data;
    };
    RegisterPage.prototype.cpass = function (data) {
        console.log(data);
        if (this.uesrPass == data) {
            console.log("true");
            this.userCpass = false;
            this.disable = false;
        }
        else {
            console.log("true");
            this.userCpass = true;
        }
    };
    RegisterPage.prototype.jsonConcat = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    RegisterPage.prototype.otpVerify = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'otp successfully verifid',
            duration: 3000,
            position: 'bottom'
        });
        console.log(this.otpData);
        var logged = JSON.parse(localStorage.getItem("loggedData"));
        //let otpverify=this.jsonConcat(this.otpData, logged);
        logged[0]['otp'] = this.otpData['otp'];
        console.log(logged);
        this.AuthServiceProvider.postData(logged[0], 'otpVerify').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                alert("Invalid otp");
            }
            // this.makedropdown=result;
            //  console.log(this.makedropdown );
        });
    };
    RegisterPage.prototype.pushSendAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Already registered mobile number.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    RegisterPage.prototype.register = function () {
        // let toast = this.toastCtrl.create({
        //   message: 'Register successfully',
        //   duration: 3000,
        //   position: 'bottom'
        // });
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        loader.present();
        console.log(this.userData);
        if (this.userData.username && this.userData.password && this.userData.cpassword && this.userData.mail && this.userData.mobile && this.userData.area && this.userData.city && this.userData.pincode) {
            if (localStorage.getItem('serviceBooking')) {
                console.log(JSON.parse(localStorage.getItem('serviceBooking')));
                var service_1 = JSON.parse(localStorage.getItem('serviceBooking'));
                var serviceUser = this.jsonConcat(service_1, this.userData);
                if (serviceUser['image'] == "") {
                    serviceUser['image'] = "user_avatar.png";
                }
                serviceUser['gadget'] = localStorage.getItem('gadget');
                console.log(serviceUser);
                this.AuthServiceProvider.postData(serviceUser, 'regUser').then(function (result) {
                    _this.responsedata = result;
                    if (_this.responsedata.status == true) {
                        loader.dismiss();
                        localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                        //toast.present();
                        if (service_1.image) {
                            _this.uploadFile();
                        }
                        if (service_1.audio) {
                            _this.uploadAudio();
                        }
                        _this.otpverify = true;
                        _this.registerpage = false;
                        console.log(result);
                    }
                    else if (_this.responsedata.status == false) {
                        loader.dismiss();
                        _this.pushSendAlert();
                    }
                });
            }
            else if (localStorage.getItem('serviceBooking1')) {
                console.log(JSON.parse(localStorage.getItem('serviceBooking1')));
                var service_2 = JSON.parse(localStorage.getItem('serviceBooking1'));
                var serviceUser = this.jsonConcat(service_2, this.userData);
                if (serviceUser['image'] == "") {
                    serviceUser['image'] = "user_avatar.png";
                }
                serviceUser['gadget'] = localStorage.getItem('gadget');
                console.log(serviceUser);
                this.AuthServiceProvider.postData(serviceUser, 'reg1User').then(function (result) {
                    _this.responsedata = result;
                    if (_this.responsedata.status == true) {
                        loader.dismiss();
                        localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                        //toast.present();
                        if (service_2.image) {
                            _this.uploadFile();
                        }
                        if (service_2.audio) {
                            _this.uploadAudio();
                        }
                        _this.otpverify = true;
                        _this.registerpage = false;
                        console.log(result);
                    }
                    else if (_this.responsedata.status == false) {
                        loader.dismiss();
                        _this.pushSendAlert();
                    }
                });
            }
            else {
                this.AuthServiceProvider.postData(this.userData, 'register').then(function (result) {
                    _this.responsedata = result;
                    if (_this.responsedata.status == true) {
                        loader.dismiss();
                        localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                        //toast.present();
                        _this.otpverify = true;
                        _this.registerpage = false;
                        console.log(result);
                    }
                    else if (_this.responsedata.status == false) {
                        loader.dismiss();
                        _this.pushSendAlert();
                    }
                });
            }
        }
        else {
            alert("All fileds are required");
        }
    };
    RegisterPage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.uploadAudio = function () {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: "file",
            fileName: this.audioData[0]['filename'],
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': this.audioData[0]['filename'] }
        };
        console.log('filepath', this.audioData[0]['filePath']);
        console.log('filename', this.audioData[0]['filename']);
        // console.log("userid",this.userid);
        //  fileTransfer.upload('<file path>', '<api endpoint>', options)
        fileTransfer.upload(this.audioData[0]['filePath'], 'http://sunrisetechs.com/images/audio.php', options)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            // error
            console.log(err);
            alert('error');
        });
    };
    RegisterPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        console.log('image name', this.imgData['imgfilename']);
        var options = {
            fileKey: 'file',
            fileName: this.imgData['imgfilename'],
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: { 'fileName': this.imgData['imgfilename'] }
        };
        fileTransfer.upload(this.imgData['imgfilePath'], 'http://sunrisetechs.com/images/image.php', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            loader.dismiss();
            // this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        // toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n  <ion-title>New User Register</ion-title>\n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="registerpage" class="content">\n\n<form [formGroup]="form" (ngSubmit)="register()" >\n\n  <ion-item>\n\n  <ion-label>   <ion-icon name="contact"></ion-icon> </ion-label>\n\n    <ion-input formControlName="username" focuser id="usersignup" type="text" placeholder="Username" [(ngModel)]="userData.username"></ion-input>\n\n   \n\n </ion-item>\n\n <div *ngIf="username.touched && username.invalid" class="alertstyle">\n\n   <div *ngIf="username.errors.required">Please provide a username</div>\n\n </div>\n\n\n\n  <ion-item>\n\n  <ion-label>  <ion-icon name="ios-call"></ion-icon> </ion-label>\n\n  <ion-input formControlName="mobile" type="number" placeholder="Mobile" [(ngModel)]="userData.mobile"></ion-input>\n\n</ion-item>\n\n<div *ngIf="mobile.touched && mobile.invalid" class="alertstyle">\n\n  <div *ngIf="mobile.errors.required">Please provide a mobile no</div>\n\n</div>\n\n\n\n <ion-item>\n\n<ion-label>   <ion-icon name="mail"></ion-icon> </ion-label>\n\n   <ion-input formControlName="mail" type="text" placeholder="Email" [(ngModel)]="userData.mail"></ion-input>\n\n </ion-item>\n\n <div *ngIf="mail.touched && mail.invalid" class="alertstyle">\n\n   <div *ngIf="mail.errors.required">Email is required</div>\n\n   <div *ngIf="mail.errors.email">Invaild email format</div>\n\n </div>\n\n\n\n <ion-item>\n\n<ion-label>   <ion-icon name="lock"></ion-icon> </ion-label>\n\n   <ion-input formControlName="password" type="password" placeholder="Password" (focusout)="pass($event.target.value)" [(ngModel)]="userData.password"></ion-input>\n\n </ion-item>\n\n <div *ngIf="password.touched && password.invalid" class="alertstyle">\n\n   <div *ngIf="password.errors.required">Please provide a password</div>\n\n  \n\n </div>\n\n <ion-item>\n\n<ion-label>  <ion-icon name="lock"></ion-icon> </ion-label>\n\n  <ion-input formControlName="cpassword" type="password" placeholder="Confirm Password" (focusout)="cpass($event.target.value)" [(ngModel)]="userData.cpassword"></ion-input>\n\n</ion-item>\n\n<div *ngIf="cpassword.touched && cpassword.invalid" class="alertstyle">\n\n  <div *ngIf="cpassword.errors.required">Please provide a password</div>\n\n</div>  \n\n<div *ngIf="userCpass">Password not match</div>\n\n<ion-item>\n\n<ion-label> <ion-icon name="ios-pin"></ion-icon> </ion-label>\n\n  <ion-input formControlName="area" type="text" placeholder="Area" [(ngModel)]="userData.area"></ion-input>\n\n</ion-item>\n\n<div *ngIf="area.touched && area.invalid" class="alertstyle">\n\n  <div *ngIf="area.errors.required">Please provide a area</div>\n\n</div> \n\n<ion-item>\n\n<ion-label> <ion-icon name="ios-pin"></ion-icon></ion-label>\n\n  <ion-input formControlName="city" type="text" placeholder="City" [(ngModel)]="userData.city"></ion-input>\n\n</ion-item>\n\n<div *ngIf="city.touched && city.invalid" class="alertstyle">\n\n  <div *ngIf="city.errors.required">Please provide a city</div>\n\n</div> \n\n<ion-item>\n\n<ion-label> <ion-icon name="ios-pin"></ion-icon></ion-label>\n\n  <ion-input formControlName="pincode" type="number" placeholder="Pincode" [(ngModel)]="userData.pincode"></ion-input>\n\n</ion-item>\n\n<div *ngIf="pincode.touched && pincode.invalid" class="alertstyle">\n\n  <div *ngIf="pincode.errors.required">Please provide a pincode</div>\n\n</div>   \n\n\n\n <button ion-button type="submit" [disabled]="disable" class="sign_btn"   round full>Register</button>\n\n </form> \n\n <ion-row>\n\n    <ion-col col-12 text-center>\n\n       <b>Existing User ? </b><a href="#" (click)="loginPage()">Login</a>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-content padding class="content" *ngIf="otpverify">\n\n<form [formGroup]="form1" (ngSubmit)="otpVerify()" >\n\n\n\n<ion-item>\n\n  <ion-label ><ion-icon name="lock"></ion-icon>OTP</ion-label>\n\n  <ion-input formControlName="otp" type="password" placeholder="OTP" [(ngModel)]="otpData.otp"></ion-input>\n\n</ion-item>\n\n\n\n <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n\n </form> \n\n</ion-content> '/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _h || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map