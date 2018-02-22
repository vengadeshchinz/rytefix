webpackJsonp([14],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicebookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(91);
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
    function ServicebookingPage(navCtrl, platform, navParams, media, file, loadingCtrl, transfer, camera, AuthServiceProvider, toastCtrl) {
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
    ServicebookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-servicebooking',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\servicebooking\servicebooking.html"*/'<!--\n  Generated template for the ServicebookingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-toolbar no-padding>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" style="color:#fff"></ion-icon>\n      </button>\n      <ion-title>New Service Booking</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding *ngIf="mobile">\n    <ion-list no-lines>\n  <form [formGroup]="form" (ngSubmit)="serviceReq()">\n    <ion-item >\n      <!-- <ion-label>Select Make</ion-label> -->\n      <ion-select class="my-select" formControlName="make" name="make" [(ngModel)]="userData.make" (ionChange)="servicemake($event)">\n        <ion-option value="" disabled>Select Make</ion-option>\n        <ion-option *ngFor="let key  of makedropdown" value="{{key.id}}">{{key.make_name}}</ion-option>\n        <ion-option value="others">others</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="other">\n      <ion-input formControlName="make" name="make" type="text" [(ngModel)]="userData.make" placeholder="Enter Service Make" clearInput></ion-input>\n    </ion-item>\n    <div *ngIf="make.touched && make.invalid" class="alertstyle">\n      <div *ngIf="make.errors.required">Select Make</div>\n    </div>\n\n    <ion-item>\n      <ion-input formControlName="modelno" name="modelno" type="text" [(ngModel)]="userData.modelno" placeholder="Enter Model Number"\n        clearInput></ion-input>\n    </ion-item>\n    <div *ngIf="modelno.touched && modelno.invalid" class="alertstyle">\n      <div *ngIf="modelno.errors.required">Select Model</div>\n    </div>\n\n    <ion-item>\n      <ion-label class="align">Select Service Required</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <!-- <ion-label>Software</ion-label> -->\n      <ion-select  class="my-select" formControlName="soft" name="soft" [(ngModel)]="userData.soft">\n        <ion-option value="" disabled>Software</ion-option>\n        <ion-option *ngFor="let key  of softdropdown" value="{{key.id}}">{{key.service}}</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <!-- <ion-label>Hardware</ion-label> -->\n      <ion-select  class="my-select" formControlName="hard" name="hard" [(ngModel)]="userData.hard">\n        <ion-option value="" disabled>Hardware</ion-option>\n        <ion-option *ngFor="let key  of harddropdown" value="{{key.id}}">{{key.service}}</ion-option>\n      </ion-select>\n    </ion-item>\n   \n    <ion-item>\n      <ion-input formControlName="others" name="others" type="text" [(ngModel)]="userData.others" placeholder="Others" clearInput></ion-input>\n    </ion-item>\n    <div *ngIf="others.touched && others.invalid||hard.touched && hard.invalid||soft.touched && soft.invalid" class="alertstyle">\n      <div *ngIf="others.errors.required||hard.errors.required||soft.errors.required">Select Model</div>\n    </div>\n\n    <ion-item>\n      <!-- <ion-label floating>Home Pick Up</ion-label> -->\n        <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userData.pickup" formControlName="pickup" >\n            <ion-option value="" disabled>Home Pick Up</ion-option>       \n          <ion-option value="required">Required</ion-option>\n          <ion-option value="notrequired">Not Required</ion-option>\n         \n      </ion-select>\n      </ion-item>\n    <ion-item>\n      <select-searchable  class="my-select"\n      formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc"\n          title="Preferred Location"\n        \n          [items]="ports"\n          [canSearch]="true"\n          [multiple]="true"\n          (onChange)="portChange($event)">\n      </select-searchable>\n  </ion-item>\n  <div  class="alertstyle">\n      <div >*Select Minimum 2 areas and Maximum 3</div>\n    </div>\n  <ion-item>\n      <ion-input   formControlName="promocode" name="promocode" type="text" [(ngModel)]="userData.promocode" placeholder="Enter promo code"\n        clearInput></ion-input>\n    </ion-item>\n     <!-- <ion-item >\n      <ion-label>Select Preferred Locationfor Service</ion-label>\n      <ion-select formControlName="loc" name="loc" multiple [(ngModel)]="userData.loc" (ionChange)="serviceLoc($event)">\n        <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n      </ion-select>\n    </ion-item> -->\n    <!-- <ion-item>\n      <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n    </ion-item> -->\n    <ion-row class="img">\n      <ion-col col-5> <h6 style="color:#fff" >Image :</h6></ion-col>\n      <ion-col col-6>\n        <div class="upload-img" (click)="getImage()">\n          {{userData.image}} <ion-icon name="camera"></ion-icon> \n          <div *ngIf="!userData.image==\'\'" class="upload-img" (click)="imageDelete()" >\n            <ion-icon name="ios-close-circle"></ion-icon>\n        </div>  \n        </div>\n     </ion-col>\n    </ion-row>\n    <ion-row class="voice">\n      <ion-col col-5> <h6 style="color:#fff" >Voice Note:</h6></ion-col>\n      <ion-col col-6 ><div *ngFor="let audio of audioList; index as i;"> {{audio.filename}}\n          <div class="upload-audio" (click)="audioDelete()" >\n              <ion-icon name="ios-close-circle"></ion-icon>\n          </div></div>\n             \n              <div class="upload-audio audiostop"  (click)="stopRecord()" *ngIf="recording">\n                  <ion-icon name="ios-mic"></ion-icon>\n              </div>\n              <div class="upload-audio audiostart"  (click)="startRecord()"  *ngIf="!recording" >\n                  <ion-icon name="ios-mic-outline"></ion-icon>\n              </div>\n              <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n              <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n      </ion-col>\n    </ion-row>\n    <!-- <ion-list>\n      <ion-item *ngFor="let audio of audioList; index as i;">\n        <p>{{audio.filename}}</p>\n        {{userData.audio}}\n         <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> \n        <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n            <ion-icon name="play"></ion-icon>\n        </div>\n      </ion-item>\n    </ion-list> -->\n    <!-- <ion-item>\n      <p>{{imageURI}}</p>\n      <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n      <button ion-button (click)="uploadFile()">Upload</button>\n    </ion-item> -->\n    <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Service Request</button>\n </form>\n </ion-list>\n\n</ion-content>\n\n<ion-content padding *ngIf="printer">\n    <ion-list no-lines>\n  <form [formGroup]="form1" (ngSubmit)="serviceReq1()">\n    <ion-item >\n      <ion-input formControlName="make1" name="make1" type="text" [(ngModel)]="userdata1.make1" placeholder="Enter Service Make" clearInput></ion-input>\n    </ion-item>\n    <div *ngIf="make1.touched && make1.invalid" class="alertstyle">\n      <div *ngIf="make1.errors.required">Select Make</div>\n    </div>\n\n    <ion-item>\n      <ion-input formControlName="modelno1" name="modelno1" type="text" [(ngModel)]="userdata1.modelno1" placeholder="Enter Model Number"\n        clearInput></ion-input>\n    </ion-item>\n    <div *ngIf="modelno1.touched && modelno1.invalid" class="alertstyle">\n      <div *ngIf="modelno1.errors.required">Select Model</div>\n    </div>\n\n    <ion-item>\n      \n      <ion-textarea formControlName="describe" name="describe" type="text" [(ngModel)]="userdata1.describe" placeholder="Describe the problem"\n        clearInput></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <!-- <ion-label floating>Home Pick Up</ion-label> -->\n        <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userdata1.pickup1" formControlName="pickup1" >\n            <ion-option value="" disabled>Home Pick Up</ion-option>       \n          <ion-option value="required">Required</ion-option>\n          <ion-option value="notrequired">Not Required</ion-option>\n         \n      </ion-select>\n      </ion-item>\n    <ion-item>\n      <select-searchable\n      formControlName="loc1" name="loc1" type="text" [(ngModel)]="userdata1.loc1"\n          placeholder="Preferred Location"\n          [items]="ports"\n          [canSearch]="true"\n          [multiple]="true"\n          (onChange)="portChange($event)">\n      </select-searchable>\n  </ion-item>\n  <div  class="alertstyle">\n      <div >*Select Minimum 2 areas and Maximum 3</div>\n    </div>\n  <ion-item>\n      <ion-input formControlName="promocode1" name="promocode1" type="text" [(ngModel)]="userdata1.promocode1" placeholder="Enter promo code"\n        clearInput></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label>Select Preferred Locationfor Service</ion-label>\n      <ion-select formControlName="loc1" name="loc1" multiple [(ngModel)]="userdata1.loc1" (ionChange)="serviceLoc($event)">\n        <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n      </ion-select>\n    </ion-item> -->\n <!-- <ion-item>\n      <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n    </ion-item>  -->\n    <ion-row class="img">\n      <ion-col col-5> <h6 style="color:#fff" >Image :</h6></ion-col>\n      <ion-col col-6>\n        <div class="upload-img" (click)="getImage()">\n          {{userData.image}} <ion-icon name="camera"></ion-icon> \n          <div *ngIf="!userData.image==\'\'" class="upload-img" (click)="imageDelete()" >\n            <ion-icon name="ios-close-circle"></ion-icon>\n        </div>   \n        </div>\n     </ion-col>\n    </ion-row>\n    \n    <ion-row class="voice">\n      <ion-col col-5> <h6 style="color:#fff" >Voice Note:</h6></ion-col>\n      <ion-col col-6 ><div *ngFor="let audio of audioList; index as i;"> {{audio.filename}}\n          <div class="upload-audio" (click)="audioDelete()" >\n              <ion-icon name="ios-close-circle"></ion-icon>\n          </div></div>\n             \n              <div class="upload-audio audiostop"  (click)="stopRecord()" *ngIf="recording">\n                  <ion-icon name="ios-mic"></ion-icon>\n              </div>\n              <div class="upload-audio audiostart"  (click)="startRecord()"  *ngIf="!recording" >\n                  <ion-icon name="ios-mic-outline"></ion-icon>\n              </div>\n              <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n              <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n      </ion-col>\n    </ion-row>\n    \n    <ion-list>\n      <ion-item *ngFor="let audio of audioList; index as i;">\n        <p>{{audio.filename}}</p>\n        {{userData.audio}}\n        <!-- <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> -->\n        <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n            <ion-icon name="play"></ion-icon>\n        </div>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Service Request</button>\n  </form>\n</ion-list>\n</ion-content>'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\servicebooking\servicebooking.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ServicebookingPage);
    return ServicebookingPage;
}());

//# sourceMappingURL=servicebooking.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewacceptQuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(61);
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
            selector: 'page-viewaccept-quote',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\viewaccept-quote\viewaccept-quote.html"*/'<!--\n  Generated template for the ViewacceptQuotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-toolbar no-padding>\n      <ion-title>Response Details</ion-title>\n    </ion-toolbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n  <ion-card>\n    <ion-card-header>\n      <h4 class="text1">Booking Details</h4>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-row>\n            <ion-col col-4 text-left>\n            <h5><b>Make</b></h5>\n        </ion-col>\n        <ion-col col-1><b>:</b></ion-col>\n        <ion-col col-7 text-left>\n            <h5> {{viewdata.make_name}}</h5>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-4 text-left>\n           <h5><b>Model</b></h5>\n       </ion-col>\n       <ion-col col-1><b>:</b></ion-col>\n       <ion-col col-7 text-left>\n           <h5>  {{viewdata.model}}</h5>\n       </ion-col>\n     </ion-row>\n     <ion-row>    \n       <ion-col col-4 text-left>\n           <h5><b>Problem</b></h5>\n       </ion-col>\n       <ion-col col-1><b>:</b></ion-col>\n       <ion-col col-7 text-left>\n         <p *ngIf="softService!=\'\'||hardServise !=\'\'||others !=\'\'">{{viewdata.softService}}{{viewdata.hardService}}{{viewdata.others}}</p>\n       </ion-col>\n     </ion-row>\n     <ion-row >\n            <ion-col col-4 text-left>\n           <h5><b>Pickup</b></h5>\n       </ion-col>\n       <ion-col col-1><b>:</b></ion-col>\n       <ion-col col-7 text-left>\n           <h5>   {{viewdata.pickup}}</h5>\n       </ion-col>\n     </ion-row>\n     <ion-row>   \n        <ion-col col-4 text-left>\n            <h5><b>Booking Date</b></h5>\n        </ion-col>\n        <ion-col col-1><b>:</b></ion-col>      \n  <ion-col col-7  text-left>\n  <h5>{{viewdata.posted_on}}</h5>\n         </ion-col>\n         </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n        <h4 class="text1">Assigned Vendor</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>   \n          <ion-col col-4 text-left>\n              <h5><b>Name</b></h5>\n          </ion-col>\n          <ion-col col-1><b>:</b></ion-col>      \n    <ion-col col-7  text-left>\n    <h5>{{viewdata.username}}</h5>\n           </ion-col>\n           </ion-row>\n           <ion-row>   \n              <ion-col col-4 text-left>\n                  <h5><b>Area</b></h5>\n              </ion-col>\n              <ion-col col-1><b>:</b></ion-col>      \n        <ion-col col-7  text-left>\n        <h5>{{viewdata.area}}</h5>\n               </ion-col>\n               </ion-row>\n               <ion-row>   \n                  <ion-col col-4 text-left>\n                      <h5><b>Contact No</b></h5>\n                  </ion-col>\n                  <ion-col col-1><b>:</b></ion-col>      \n            <ion-col col-5 text-left>\n            <h5>{{viewdata.mobile}}</h5>\n                   </ion-col>\n                   <ion-col col-2>\n                      <button ion-button color="secondary" small round icon-only (click)="contactUs()"><ion-icon name="ios-call-outline"></ion-icon></button>\n                   </ion-col>\n                   </ion-row>\n                   <ion-row>\n                     <ion-col col-12 text-center>\n                       <h4  class="text2">Quotation Details</h4>\n                     </ion-col>\n                   </ion-row>\n                   <ion-row>\n                      <ion-col col-5 text-left>\n                       <b>  Original Spare Price</b>\n                      </ion-col>\n                      <ion-col col-1><b>:</b></ion-col>\n                      <ion-col col-6 text-left>\n                          {{viewdata.exactprice}}\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                            <ion-col col-5 text-left>\n                             <b> Second Quality Price</b>\n                            </ion-col>\n                            <ion-col col-1><b>:</b></ion-col>\n                            <ion-col col-6 text-left>\n                                {{viewdata.second_quality_price}}\n                            </ion-col>\n                          </ion-row>\n                          <ion-row>\n                                <ion-col col-5 text-left>\n                                 <b> Time Required</b>\n                                </ion-col>\n                                <ion-col col-1><b>:</b></ion-col>\n                                <ion-col col-6 text-left>\n                                    {{viewdata.time_period}}\n                                </ion-col>\n                              </ion-row>\n                    <ion-row>\n                        <ion-col col-5 text-left>\n                         <b> Warranty</b>\n                        </ion-col>\n                        <ion-col col-1><b>:</b></ion-col>\n                        <ion-col col-6 text-left>\n                            {{viewdata.warranty}}\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                            <ion-col col-5 text-left>\n                             <b> Home Pick Up</b>\n                            </ion-col>\n                            <ion-col col-1><b>:</b></ion-col>\n                            <ion-col col-6 text-left>\n                                {{viewdata.pickup_type}}\n                            </ion-col>\n                          </ion-row>\n                      <ion-row>\n                          <ion-col col-5 text-left>\n                           <b> Description</b>\n                          </ion-col>\n                          <ion-col col-1><b>:</b></ion-col>\n                          <ion-col col-6 text-left>\n                              {{viewdata.description}}\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col col-5 text-left>\n                             <b> Expires In</b>\n                            </ion-col>\n                            <ion-col col-1><b>:</b></ion-col>\n                            <ion-col col-6 text-left>\n                              \n                            </ion-col>\n                          </ion-row> \n                          <!-- <ion-row>-->\n                              <!-- <ion-col col-2></ion-col> -->\n                                <!-- <ion-col col-6> -->\n                                  <button ion-button color="secondary" (click)="completeQuote()" block>Complete the service</button>\n                                <!-- </ion-col> -->\n                                <!-- <ion-col col-2></ion-col> -->\n                                <!-- <ion-col col-6> -->\n                                    <button ion-button color="dark" (click)="declineQuote()" block>Report the problem</button>\n                                  <!-- </ion-col> -->\n                                  <!-- <ion-col col-2></ion-col> -->\n                              <!-- </ion-row> -->\n    </ion-card-content>\n  </ion-card>\n  \n  \n    </ion-content> \n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\viewaccept-quote\viewaccept-quote.html"*/,
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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_add_data_add_data__ = __webpack_require__(179);
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
        this.fdata = {};
        this.item = {};
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage.prototype.gotoFaq = function () {
        var _this = this;
        this.faqapi.getFaq()
            .subscribe(function (data) {
            _this.item = data;
            _this.fdata = _this.item.fdata;
            console.log(_this.fdata.content);
        });
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\faq\faq.html"*/'<!--\n  Generated template for the FaqPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>FAQ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [innerHTML]= "this.fdata?.content"></div> \n</ion-content>\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_add_data_add_data__["a" /* AddDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(53);
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
            selector: 'page-contactus',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\contactus\contactus.html"*/'<!--\n  Generated template for the ContactusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  <ion-content class="background" align ="center">\n    <!-- <img  src=\'http://sunrisetechs.com/images/imgs/appicon.png\' class="animate-right" width= 60% height=\'auto\'/> -->\n    <img  src=\'../assets/imgs/logo1.png\' class="animate-right" width= 50% height=\'auto\'/>\n    <div class="animate-bottom">\n        <h5 class="text">Let us grow together</h5>\n    <!-- <div class="div">\n    <h1 class="header">About us </h1>\n    <p class="paraText"><strong> Rytefix is a free app available to book mobile, laptop and all other electronic gadgets services in Chennai. Connect customers and gadgets service providers in whole new way, intend to bring more transparency and enjoyable experience in market place. Customers have options like “know your cost upfront”, find out “who is nearby” to enjoy hassle free gadgets service experience. Services offered at your doorstep by connecting our trusted service partners with better understanding of your needs on all models of mobiles, laptops and all electronic gadgets. Cracked screen repair and replacement for Samsung , Coolpad and mi brand mobile can be done for very affordable price through RYTEFIX network in Chennai.</strong>\n    </p>\n    </div> -->\n    <button ion-button block class="button" (click)="contactUs()" icon-left>\n        <ion-icon name="ios-call-outline"></ion-icon> 7358711554</button> \n      <button ion-button block class="emailbutton" (click)="EmailUs()" icon-left>\n       <ion-icon name="ios-mail-outline"></ion-icon>admin@rytefix.com</button>\n     </div>\n</ion-content>\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(92);
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
    function WalletPage(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
            'Pac-Man',
            'Super Mario World',
            'Street Fighter II',
            'Half Life',
            'Final Fantasy VII',
            'Star Fox',
            'Tetris',
            'Donkey Kong III',
            'GoldenEye 007',
            'Doom',
            'Fallout',
            'GTA',
            'Halo'
        ];
        this.userdata = JSON.parse(localStorage.getItem('loggedData'));
        this.walletamount = this.userdata[0].rf_wallet_bal;
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
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\wallet\wallet.html"*/'<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>wallet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="card">\n        <div class="cover">\n          <h1>WALLET BALANCE</h1>\n          <p class="p">₹{{walletamount}}</p>\n          <button ion-button clear class="redeem" block (click)="redeem()"> Redeem your money</button>\n        </div>\n        </div>\n        <div class="segment">\n            <ion-segment [(ngModel)]="earns">\n              <ion-segment-button value="Earns">\n                  Earns\n              </ion-segment-button>\n              <!-- <ion-segment-button value="Spends">\n                Spends\n              </ion-segment-button> -->\n            </ion-segment>\n          </div>\n          <ion-scroll scrollY="true" style="width: 100%; height: 100%;">\n\n              <div [ngSwitch]="earns">\n                  <ion-list *ngSwitchCase="\'Earns\'">\n                          <button ion-item *ngFor="let item of items">\n                              <button ion-item >\n                                  <h2>Earning amount : 500</h2>\n                                  <h5>Earned by     : promocode</h5>\n                                  <h5>Earned on     : 14-2-18</h5>\n                                  <!-- <ion-note item-end>></ion-note> -->\n                                </button>\n                          </button>\n                        </ion-list>\n                        </div>\n          </ion-scroll>\n         \n\n                    \n</ion-content>\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntrosliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(59);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    IntrosliderPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, {
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
            selector: 'page-introslider',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\introslider\introslider.html"*/'<ion-header no-shadow class="navColor">\n  <ion-navbar >\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="home()" color="primary">SKIP</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image" />\n      <!-- <h2 class="slide-title" [innerHTML]="slide.title"></h2> -->\n      <!-- <p [innerHTML]="slide.description"></p> -->\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/imgs/appicon2.png" class="slide-image" />\n      <h2 class="slide-title"></h2>\n      <button ion-button block class="bonusButton"  icon-end (click)="startApp()">\n        REGISTER TO GET 250 CREDITS\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\introslider\introslider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], IntrosliderPage);
    return IntrosliderPage;
}());

//# sourceMappingURL=introslider.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitefrdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-invitefrd',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\invitefrd\invitefrd.html"*/'<!--\n  Generated template for the InvitefrdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Invite Friends</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\invitefrd\invitefrd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], InvitefrdPage);
    return InvitefrdPage;
}());

//# sourceMappingURL=invitefrd.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(91);
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
            selector: 'page-profile',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- <img class="pimg" src="{{pathForImage(lastImage)}}" onerror="this.onerror=null;this.src=\'http://rayi.in/naboapi/mapicon/user.jpg\'"/> -->\n    <!-- <img class="pimg" src="http://rayi.in/naboapi/mapicon/user.jpg"/>\n     -->\n     <img class="pimg" src="{{pathForImage(lastImage)}}" (click)="chooseimg()"/>\n    <div class="upload-img" (click)="chooseimg()">\n        <ion-icon name="camera"></ion-icon>\n    </div>\n    <ion-footer [hidden]="fileopen == false">\n      <ion-toolbar color="primary">\n        <ion-buttons>\n          <button ion-button icon-left (click)="chooseimg()">\n            <ion-icon name="camera"></ion-icon>Change Image\n          </button>\n          <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n            <ion-icon name="cloud-upload"></ion-icon>Upload\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>  \n    <form [formGroup]="form" (ngSubmit)="profileUpdate()" >\n      <!-- <ion-fab  right edge>\n          <button ion-fab  class="sign_btn" (click)="profileactive()" ><ion-icon name="create"></ion-icon></button>\n      </ion-fab> -->\n      <ion-fab  right edge *ngIf="editProfile">\n          <button ion-fab  class="sign_btn" (click)="profileactive()" ><ion-icon name="create"></ion-icon></button>\n      </ion-fab>\n      <ion-fab  right edge *ngIf="cancelProfile">\n          <button ion-fab  class="signbtn" (click)="profilecancel()" mini><ion-icon name="close"></ion-icon></button>\n      </ion-fab>\n      <ion-fab  right edge class="close" *ngIf="submitProfile">\n          <button ion-fab type="submit" class="sign_btn"  mini><ion-icon name="checkmark"></ion-icon></button>\n      </ion-fab>\n      <ion-item>\n        <ion-label  floating><ion-icon name="contact"></ion-icon> Username</ion-label>\n        <ion-input  disabled="{{isDisable}}" formControlName="username" focuser id="usersignup" type="text" [(ngModel)]="userData.username"></ion-input>\n       \n     </ion-item>\n     <div *ngIf="username.touched && username.invalid" class="alertstyle">\n       <div *ngIf="username.errors.required">Please provide a username</div>\n     </div>\n  \n      <ion-item>\n      <ion-label floating><ion-icon name="ios-call"></ion-icon> Mobile</ion-label>\n      <ion-input  disabled="{{isDisable}}" formControlName="mobile" type="number" [(ngModel)]="userData.mobile"></ion-input>\n    </ion-item>\n    <div *ngIf="mobile.touched && mobile.invalid" class="alertstyle">\n      <div *ngIf="mobile.errors.required">Please provide a mobile no</div>\n    </div>\n  \n     <ion-item>\n       <ion-label floating><ion-icon name="mail"></ion-icon> Email</ion-label>\n       <ion-input  disabled="{{isDisable}}" formControlName="mail" type="text" [(ngModel)]="userData.mail"></ion-input>\n     </ion-item>\n     <div *ngIf="mail.touched && mail.invalid" class="alertstyle">\n       <div *ngIf="mail.errors.required">Email is required</div>\n       <div *ngIf="mail.errors.email">Invaild email format</div>\n     </div>\n  \n    <ion-item>\n      <ion-label floating><ion-icon name="ios-pin"></ion-icon>Area</ion-label>\n      <ion-input  disabled="{{isDisable}}" formControlName="area" type="text"[(ngModel)]="userData.area"></ion-input>\n    </ion-item>\n    <div *ngIf="area.touched && area.invalid" class="alertstyle">\n      <div *ngIf="area.errors.required">Please provide a area</div>\n    </div> \n    <ion-item>\n      <ion-label floating><ion-icon name="ios-pin"></ion-icon>City</ion-label>\n      <ion-input  disabled="{{isDisable}}" formControlName="city" type="text"  [(ngModel)]="userData.city"></ion-input>\n    </ion-item>\n    <div *ngIf="city.touched && city.invalid" class="alertstyle">\n      <div *ngIf="city.errors.required">Please provide a city</div>\n    </div> \n    <ion-item>\n      <ion-label floating><ion-icon name="ios-pin"></ion-icon>Pincode</ion-label>\n      <ion-input  disabled="{{isDisable}}" formControlName="pincode" type="number"  [(ngModel)]="userData.pincode"></ion-input>\n    </ion-item>\n    <div *ngIf="pincode.touched && pincode.invalid" class="alertstyle">\n      <div *ngIf="pincode.errors.required">Please provide a pincode</div>\n    </div>   \n    \n     <!-- <button ion-button type="submit" [disabled]="disable" class="sign_btn"   round full>Register</button> -->\n     </form> \n</ion-content>\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\profile\profile.html"*/,
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

/***/ 132:
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
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/changepass/changepass.module": [
		302,
		13
	],
	"../pages/contactus/contactus.module": [
		303,
		12
	],
	"../pages/faq/faq.module": [
		304,
		11
	],
	"../pages/introslider/introslider.module": [
		305,
		10
	],
	"../pages/invitefrd/invitefrd.module": [
		306,
		9
	],
	"../pages/login/login.module": [
		307,
		8
	],
	"../pages/profile/profile.module": [
		308,
		7
	],
	"../pages/quotehistory/quotehistory.module": [
		309,
		6
	],
	"../pages/quoteview/quoteview.module": [
		310,
		5
	],
	"../pages/register/register.module": [
		311,
		4
	],
	"../pages/servicebooking/servicebooking.module": [
		312,
		3
	],
	"../pages/tabs/tabs.module": [
		313,
		2
	],
	"../pages/viewaccept-quote/viewaccept-quote.module": [
		314,
		1
	],
	"../pages/wallet/wallet.module": [
		315,
		0
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
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(89);
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
        return this.http.get('http://sunrisetechs.com/api/vendorapi.php?action=getfaqData')
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(175);
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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contactus_contactus__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_changepass_changepass__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_invitefrd_invitefrd__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_viewaccept_quote_viewaccept_quote__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_unique_device_id__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_introslider_introslider__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_facebook__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_wallet_wallet__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_email_composer__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_media__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_transfer__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file_path__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_add_data_add_data__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_push__ = __webpack_require__(223);
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
                __WEBPACK_IMPORTED_MODULE_28__pages_wallet_wallet__["a" /* WalletPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/changepass/changepass.module#ChangepassPageModule', name: 'ChangepassPage', segment: 'changepass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/introslider/introslider.module#IntrosliderPageModule', name: 'IntrosliderPage', segment: 'introslider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invitefrd/invitefrd.module#InvitefrdPageModule', name: 'InvitefrdPage', segment: 'invitefrd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotehistory/quotehistory.module#QuotehistoryPageModule', name: 'QuotehistoryPage', segment: 'quotehistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quoteview/quoteview.module#QuoteviewPageModule', name: 'QuoteviewPage', segment: 'quoteview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/servicebooking/servicebooking.module#ServicebookingPageModule', name: 'ServicebookingPage', segment: 'servicebooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewaccept-quote/viewaccept-quote.module#ViewacceptQuotePageModule', name: 'ViewacceptQuotePage', segment: 'viewaccept-quote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] }
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_35__providers_add_data_add_data__["a" /* AddDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quotehistory_quotehistory__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quoteview_quoteview__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_changepass_changepass__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_invitefrd_invitefrd__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_introslider_introslider__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(61);
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
    function MyApp(uniqueDeviceID, AuthServiceProvider, toastCtrl, platform, statusBar, loadingCtrl, splashScreen, alertCtrl, fb, push) {
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_introslider_introslider__["a" /* IntrosliderPage */];
        this.initializeApp();
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
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', res); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button ion-item menuClose (click)="logout()">\n          <ion-icon item-start [name]="log-out" ></ion-icon>\n          Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<!-- <ion-tabs tabsPlacement= "bottom" >\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="FAQ" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contact Us" tabIcon="ios-contact-outline"></ion-tab>\n  </ion-tabs> -->\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-list',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\list\list.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__changepass_changepass__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(46);
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
        this.loginData = { "mobile": "", "pass": "" };
        this.forgotMobile = false;
        this.loginscreen = true;
        this.otpverify = false;
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
            selector: 'page-login',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <!-- <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>login</ion-title>\n  </ion-navbar> -->\n  <ion-toolbar no-padding>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding *ngIf="loginscreen" class="content">\n    <img class="logo" src="assets/imgs/logo.png"> \n    <p class="text">Rytefix</p>\n  <form [formGroup]="form" (ngSubmit)="login()" >\n  \n\n    <ion-item>\n    <ion-label floating><ion-icon name="ios-call"></ion-icon> Mobile</ion-label>\n    <ion-input formControlName="mobile" type="number" [(ngModel)]="loginData.mobile"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating><ion-icon name="lock"></ion-icon> Password</ion-label>\n    <ion-input formControlName="pass" type="password" [(ngModel)]="loginData.pass"></ion-input>\n  </ion-item>\n  \n   <button ion-button type="submit"  class="sign_btn"   round full>Login</button>\n   </form> \n   <a href="#" (click)="reg()">Register</a>\n   <a href="#" (click)="forgot()">Forgot password</a>\n</ion-content>\n<ion-content padding  *ngIf="forgotMobile">\n  <form [formGroup]="form1" (ngSubmit)="forgotPass()" >\n\n  <ion-item>\n    <ion-label floating><ion-icon name="lock"></ion-icon>Mobile</ion-label>\n    <ion-input formControlName="mobile1" type="number" [(ngModel)]="forgotData.mobile1"></ion-input>\n  </ion-item>\n  \n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n   </form> \n</ion-content> \n<ion-content padding  *ngIf="otpverify">\n  <form [formGroup]="form2" (ngSubmit)="otpVerify()" >\n\n  <ion-item>\n    <ion-label floating><ion-icon name="lock"></ion-icon>OTP</ion-label>\n    <ion-input formControlName="otp" type="text" [(ngModel)]="otpData.otp"></ion-input>\n  </ion-item>\n  \n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n   </form> \n</ion-content> '/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicebooking_servicebooking__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotehistory_quotehistory__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_wallet__ = __webpack_require__(118);
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
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__servicebooking_servicebooking__["a" /* ServicebookingPage */]);
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
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="home">\n    <ion-list>\n        <ion-grid>\n            <ion-row>\n                <ion-col col-6><a  (click)="Gadgets()">\n                    <ion-item class="selectbg">\n                        <!-- <ion-label hidden>Select Gadgets</ion-label>\n                        <ion-select [(ngModel)]="toppings" (ionChange)="Gadgets($event);">\n                            <ion-option value="Mobile" selected>Mobile</ion-option>\n                            <ion-option value="Laptop">Laptop</ion-option>\n                            <ion-option value="Tablet">Tablet</ion-option>\n                            <ion-option value="Printer">Printer,cam &others</ion-option>\n                        </ion-select> -->\n                    </ion-item></a>\n                </ion-col>\n                <ion-col col-6><a  (click)="quoteHistory()">\n                    <ion-item class="QHSbg"></ion-item>\n                </a>\n                   \n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-6><a  (click)="Gadgets()">\n                    <ion-item class="selectbg">\n                    </ion-item></a>\n                </ion-col>\n                <ion-col col-6><a  (click)="wallet()">\n                    <ion-item class="QHSbg"></ion-item>\n                </a>\n                   \n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-list>\n</ion-content> \n<!-- \n<ion-content *ngIf="print">\n    <section class = "home-container">\n      <div class="row row-center" >\n          <div class="col text-center" >\n              <img alt="Logo" height="100" src="assets/imgs/watch.gif" >\n          </div>\n     </div>\n    </section>\n</ion-content> -->\n\n\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewaccept_quote_viewaccept_quote__ = __webpack_require__(115);
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
    function QuoteviewPage(navCtrl, AuthServiceProvider, navParams, callNumber, geolocation) {
        this.navCtrl = navCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.geolocation = geolocation;
        this.regionals = [];
        this.mapload();
        this.mapview = true;
        this.listview = false;
    }
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
    QuoteviewPage.prototype.quoteAccept = function (id, data) {
        var _this = this;
        console.log(id);
        this.AuthServiceProvider.postData(id, 'serviceAccept').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                //this.refresh();
                _this.quoteAccept1(data);
                alert("Service accept successfully");
            }
        });
    };
    QuoteviewPage.prototype.quoteAccept1 = function (data) {
        console.log("data", data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__viewaccept_quote_viewaccept_quote__["a" /* ViewacceptQuotePage */], { "data": data });
    };
    QuoteviewPage.prototype.quoteIgnore = function (id) {
        var _this = this;
        console.log(id);
        this.AuthServiceProvider.postData(id, 'serviceIgnore').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                _this.refresh();
                alert("Service ignore successfully");
            }
        });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], QuoteviewPage.prototype, "mapElement", void 0);
    QuoteviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quoteview',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\quoteview\quoteview.html"*/'<!--\n  Generated template for the QuoteviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-toolbar no-padding>\n      <!-- <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button> -->\n    <ion-title>Quote</ion-title>\n    <!-- <ion-segment>\n        <ion-segment-button  class="button-l" (click)="listshow()">\n          List View\n        </ion-segment-button>\n        <ion-segment-button  class="button-m" (click)="mapshow()">\n          Map View\n        </ion-segment-button>\n      </ion-segment> -->\n  </ion-toolbar>\n  <ion-segment>\n    <ion-segment-button  class="button-l" (click)="listshow()">\n      List View\n    </ion-segment-button>\n    <ion-segment-button  class="button-m" (click)="mapshow()">\n      Map View\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n\n <ion-content *ngIf="mapview">\n     <ion-card id="mapcard">\n         <ion-card-header class="map-head">\n             <h6 style="color:#fff">Booking Details</h6>\n         </ion-card-header>\n         <ion-card-content>\n                <ion-row>\n                        <ion-col col-5 text-left>\n                         <b>Make</b>\n                        </ion-col>\n                        <ion-col col-1><b>:</b></ion-col>\n                        <ion-col col-6 text-left>\n                            {{make}}\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                            <ion-col col-5 text-left>\n                             <b>Model</b>\n                            </ion-col>\n                            <ion-col col-1><b>:</b></ion-col>\n                            <ion-col col-6 text-left>\n                                {{model}}\n                            </ion-col>\n                          </ion-row>\n                          <ion-row>\n                                <ion-col col-5 text-left>\n                                 <b>Problem</b>\n                                </ion-col>\n                                <ion-col col-1><b>:</b></ion-col>\n                                <ion-col col-6 text-left>\n                                        <p *ngIf="soft!=\'\'||hard !=\'\'||othermodel !=\'\'">{{soft}}{{hard}}{{othermodel}}</p>\n                                </ion-col>\n                              </ion-row>\n                              <ion-row>\n                                    <ion-col col-5 text-left>\n                                     <b>Pickup</b>\n                                    </ion-col>\n                                    <ion-col col-1><b>:</b></ion-col>\n                                    <ion-col col-6 text-left>\n                                        {{pickup}}\n                                    </ion-col>\n                                  </ion-row>\n                                  <ion-row>\n                                        <ion-col col-5 text-left>\n                                         <b>Booking Date</b>\n                                        </ion-col>\n                                        <ion-col col-1><b>:</b></ion-col>\n                                        <ion-col col-6 text-left>\n                                            {{booking_date}}\n                                        </ion-col>\n                                      </ion-row>\n         </ion-card-content>\n     </ion-card>\n  \n    <ion-content class="map-pin">\n        <div #map id="map"></div> \n    </ion-content>\n  \n    <!-- <div class="btn-group switch">\n      <button ion-button color="light" class="button" (click)="listshow()" icon-only>List View</button>\n      <button ion-button color="light" class="button" (click)="mapshow()" icon-only>Map View</button>\n  </div> -->\n  \n</ion-content>\n <ion-content padding *ngIf="listview">\n    <div style="margin-top:80px">\n        <!-- <div padding>\n                <ion-segment>\n                  <ion-segment-button color="dark" class="button" (click)="listshow()">\n                    Kittens\n                  </ion-segment-button>\n                  <ion-segment-button color="dark" class="button" (click)="mapshow()">\n                    Puppies\n                  </ion-segment-button>\n                </ion-segment>\n              </div> -->\n    <ion-card  id="card1" >\n        <ion-card-header>\n           <h5 class="head"><b>Booking Details</b></h5>\n        </ion-card-header>\n        <ion-card-content>\n           <ion-row>\n               <ion-col col-4 text-left>\n                <b>Make</b>\n               </ion-col>\n               <ion-col col-1><b>:</b></ion-col>\n               <ion-col col-7 text-left>\n                   {{make}}\n               </ion-col>\n             </ion-row>\n             <ion-row>\n                 <ion-col col-4 text-left>\n                  <b>Model</b>\n                 </ion-col>\n                 <ion-col col-1><b>:</b></ion-col>\n                 <ion-col col-7 text-left>\n                     {{model}}\n                 </ion-col>\n               </ion-row>\n               <ion-row>\n                   <ion-col col-4 text-left>\n                    <b>Problem</b>\n                   </ion-col>\n                   <ion-col col-1><b>:</b></ion-col>\n                   <ion-col col-7 text-left>\n                       <p *ngIf="soft!=\'\'||hard !=\'\'||othermodel !=\'\'">{{soft}}{{hard}}{{othermodel}}</p>\n                   </ion-col>\n                 </ion-row>\n                 <ion-row>\n                     <ion-col col-4 text-left>\n                      <b>Pickup</b>\n                     </ion-col>\n                     <ion-col col-1><b>:</b></ion-col>\n                     <ion-col col-7 text-left>\n                         {{pickup}}\n                     </ion-col>\n                   </ion-row>\n                   <ion-row>\n                       <ion-col col-4 text-left>\n                        <b> Booking Date</b>\n                       </ion-col>\n                       <ion-col col-1><b>:</b></ion-col>\n                       <ion-col col-7 text-left>\n                           {{booking_date}}\n                       </ion-col>\n                     </ion-row>\n                     <div>\n                            <audio controls>\n                            <source src="http://sunrisetechs.com/images/audio/{{audio}}">\n                           \n                            </audio>\n                            </div>\n                     <ion-thumbnail >\n                            <img src="http://sunrisetechs.com/images/imgs/{{image}}"/>\n                          </ion-thumbnail>\n                   \n                          \n                    \n        </ion-card-content>\n      </ion-card>\n      <ion-item>\n          <h5 class="head1"><b>Quotes Received</b></h5>\n           </ion-item>\n           <ion-card *ngFor="let item of quoteview" id="card2">\n              <ion-card-header class="v-name">\n                    <ion-row>\n                            <ion-col col-12 text-center >\n                                {{item.username}}\n                            </ion-col>\n                          </ion-row>\n              </ion-card-header>\n               <ion-card-content>\n                   \n                     <ion-row>\n                         <ion-col col-5 text-left>\n                          <b>  Original Spare Price</b>\n                         </ion-col>\n                         <ion-col col-1><b>:</b></ion-col>\n                         <ion-col col-6 text-left>\n                             {{item.exactprice}}\n                         </ion-col>\n                       </ion-row>\n                       <ion-row>\n                               <ion-col col-5 text-left>\n                                <b> Second Quality Price</b>\n                               </ion-col>\n                               <ion-col col-1><b>:</b></ion-col>\n                               <ion-col col-6 text-left>\n                                   {{item.second_quality_price}}\n                               </ion-col>\n                             </ion-row>\n                             <ion-row>\n                                   <ion-col col-5 text-left>\n                                    <b> Time Required</b>\n                                   </ion-col>\n                                   <ion-col col-1><b>:</b></ion-col>\n                                   <ion-col col-6 text-left>\n                                       {{item.time_period}}\n                                   </ion-col>\n                                 </ion-row>\n                       <ion-row>\n                           <ion-col col-5 text-left>\n                            <b> Warranty</b>\n                           </ion-col>\n                           <ion-col col-1><b>:</b></ion-col>\n                           <ion-col col-6 text-left>\n                               {{item.warranty}}\n                           </ion-col>\n                         </ion-row>\n                         <ion-row>\n                               <ion-col col-5 text-left>\n                                <b> Home Pick Up</b>\n                               </ion-col>\n                               <ion-col col-1><b>:</b></ion-col>\n                               <ion-col col-6 text-left>\n                                   {{item.pickup_type}}\n                               </ion-col>\n                             </ion-row>\n                         <ion-row>\n                             <ion-col col-5 text-left>\n                              <b> Description</b>\n                             </ion-col>\n                             <ion-col col-1><b>:</b></ion-col>\n                             <ion-col col-6 text-left>\n                                 {{item.description}}\n                             </ion-col>\n                           </ion-row>\n                           <ion-row>\n                               <ion-col col-5 text-left>\n                                <b> Expires In</b>\n                               </ion-col>\n                               <ion-col col-1><b>:</b></ion-col>\n                               <ion-col col-6 text-left>\n                                 \n                               </ion-col>\n                             </ion-row>     \n               </ion-card-content>\n               \n              <div *ngIf="item.accept_status==1||item.accept_status==2||item.accept_status==3">\n               <div class="btn-group">\n                  <ion-row>\n                    <ion-col col-3>\n                        <button ion-button color="dark" [hidden]="item.cancel_status" small class="button" (click)="quoteChat(item.id)" icon-only>Chat</button>          \n                    </ion-col>\n                       <ion-col col-3>\n                               <button ion-button color="secondary" [hidden]="item.cancel_status"  small class="button" (click)="quoteCall(item.mobile)" icon-only>Call</button>\n                              </ion-col>\n                           <ion-col col-3>\n                               <!-- <button ion-button color="primary" [hidden]="item.cancel_status" small class="button" (click)="quoteAccept1(item)" icon-only>Accept</button> -->\n                               <button ion-button color="primary" [hidden]="item.cancel_status" small class="button" (click)="quoteAccept(item.id,item)" icon-only>Accept</button>\n                              </ion-col>\n                               <ion-col col-3>\n                                       <button ion-button color="light" [hidden]="item.cancel_status" small class="button" (click)="quoteIgnore(item.id)" icon-only>Ignore</button>\n                                   </ion-col>\n                                               \n                  </ion-row>\n                </div>\n                </div>\n        <!-- <div class="btn-group">\n                <button ion-button color="red" [hidden]="item.cancel_status"  class="button" (click)="quoteChat(item.id)" icon-only>Chat</button>\n                <button ion-button color="light" [hidden]="item.cancel_status"  class="button" (click)="quoteCall(item.mobile)" icon-only>Call</button>\n                <button ion-button color="red" [hidden]="item.cancel_status"  class="button" (click)="quoteAccept(item.id)" icon-only>Accept</button>\n                <button ion-button color="light" [hidden]="item.cancel_status" class="button" (click)="quoteIgnore(item.id)" icon-only>Ignore</button>\n            </div>\n    -->\n   \n  </ion-card>\n  <!-- <div class="btn-group switch">\n      <ion-row>\n          <ion-col col-6>\n                <button ion-button color="light" class="button" (click)="listshow()" icon-only>List View</button> \n          </ion-col>\n          <ion-col col-6>\n                <button ion-button color="light" class="button" (click)="mapshow()" icon-only>Map View</button>\n          </ion-col>\n      </ion-row>  \n</div> -->\n</div>\n    \n   \n\n  <!-- <div class="btn-group switch">\n    <button ion-button color="light" class="button" (click)="listshow()" icon-only>List View</button>\n    <button ion-button color="light" class="button" (click)="mapshow()" icon-only>Map View</button>\n</div> -->\n\n</ion-content> \n\n\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\quoteview\quoteview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], QuoteviewPage);
    return QuoteviewPage;
}());

//# sourceMappingURL=quoteview.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(22);
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
            selector: 'page-changepass',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\changepass\changepass.html"*/'<!--\n  Generated template for the ChangepassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form" (ngSubmit)="changePass()" >\n  \n    <ion-item>\n    <ion-label floating><ion-icon name="lock"></ion-icon> New Passwrd</ion-label>\n    <ion-input formControlName="npass" type="password" (focusout)="npassword($event.target.value)"  [(ngModel)]="passData.npass"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating><ion-icon name="lock"></ion-icon> Conform Passwrd</ion-label>\n    <ion-input formControlName="cpass" type="password" (focusout)="cpassword($event.target.value)"  [(ngModel)]="passData.cpass"></ion-input>\n  </ion-item>\n  <div *ngIf="userCpass">Password not match</div>\n   <button ion-button type="submit"  class="sign_btn" [disabled]="disable"  round full>Ok</button>\n   </form> \n</ion-content>\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\changepass\changepass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ChangepassPage);
    return ChangepassPage;
}());

//# sourceMappingURL=changepass.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(46);
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
        this.userData = { "username": "", "mobile": "", "mail": "", "password": "", "cpassword": "", "area": "", "city": "", "pincode": "" };
        this.userCpass = false;
        this.disable = true;
        this.otpverify = false;
        this.registerpage = true;
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
            selector: 'page-register',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-toolbar no-padding>\n    <ion-title>New User Register</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="registerpage" class="content">\n  <form [formGroup]="form" (ngSubmit)="register()" >\n    <ion-item>\n      <ion-label  floating><ion-icon name="contact"></ion-icon> Username</ion-label>\n      <ion-input formControlName="username" focuser id="usersignup" type="text" [(ngModel)]="userData.username"></ion-input>\n     \n   </ion-item>\n   <div *ngIf="username.touched && username.invalid" class="alertstyle">\n     <div *ngIf="username.errors.required">Please provide a username</div>\n   </div>\n\n    <ion-item>\n    <ion-label floating><ion-icon name="ios-call"></ion-icon> Mobile</ion-label>\n    <ion-input formControlName="mobile" type="number" [(ngModel)]="userData.mobile"></ion-input>\n  </ion-item>\n  <div *ngIf="mobile.touched && mobile.invalid" class="alertstyle">\n    <div *ngIf="mobile.errors.required">Please provide a mobile no</div>\n  </div>\n\n   <ion-item>\n     <ion-label floating><ion-icon name="mail"></ion-icon> Email</ion-label>\n     <ion-input formControlName="mail" type="text" [(ngModel)]="userData.mail"></ion-input>\n   </ion-item>\n   <div *ngIf="mail.touched && mail.invalid" class="alertstyle">\n     <div *ngIf="mail.errors.required">Email is required</div>\n     <div *ngIf="mail.errors.email">Invaild email format</div>\n   </div>\n\n   <ion-item>\n     <ion-label floating><ion-icon name="lock"></ion-icon> Password</ion-label>\n     <ion-input formControlName="password" type="password" (focusout)="pass($event.target.value)" [(ngModel)]="userData.password"></ion-input>\n   </ion-item>\n   <div *ngIf="password.touched && password.invalid" class="alertstyle">\n     <div *ngIf="password.errors.required">Please provide a password</div>\n    \n   </div>\n   <ion-item>\n    <ion-label floating><ion-icon name="lock"></ion-icon>Conform Password</ion-label>\n    <ion-input formControlName="cpassword" type="password" (focusout)="cpass($event.target.value)" [(ngModel)]="userData.cpassword"></ion-input>\n  </ion-item>\n  <div *ngIf="cpassword.touched && cpassword.invalid" class="alertstyle">\n    <div *ngIf="cpassword.errors.required">Please provide a password</div>\n  </div>  \n  <div *ngIf="userCpass">Password not match</div>\n  <ion-item>\n    <ion-label floating><ion-icon name="ios-pin"></ion-icon>Area</ion-label>\n    <ion-input formControlName="area" type="text"[(ngModel)]="userData.area"></ion-input>\n  </ion-item>\n  <div *ngIf="area.touched && area.invalid" class="alertstyle">\n    <div *ngIf="area.errors.required">Please provide a area</div>\n  </div> \n  <ion-item>\n    <ion-label floating><ion-icon name="ios-pin"></ion-icon>City</ion-label>\n    <ion-input formControlName="city" type="text"  [(ngModel)]="userData.city"></ion-input>\n  </ion-item>\n  <div *ngIf="city.touched && city.invalid" class="alertstyle">\n    <div *ngIf="city.errors.required">Please provide a city</div>\n  </div> \n  <ion-item>\n    <ion-label floating><ion-icon name="ios-pin"></ion-icon>Pincode</ion-label>\n    <ion-input formControlName="pincode" type="number"  [(ngModel)]="userData.pincode"></ion-input>\n  </ion-item>\n  <div *ngIf="pincode.touched && pincode.invalid" class="alertstyle">\n    <div *ngIf="pincode.errors.required">Please provide a pincode</div>\n  </div>   \n  \n   <button ion-button type="submit" [disabled]="disable" class="sign_btn"   round full>Register</button>\n   </form> \n   <ion-row>\n      <ion-col col-12 text-center>\n         <b>Existing User ? </b><a href="#" (click)="loginPage()">Login</a>\n      </ion-col>\n    </ion-row>\n</ion-content>\n\n<ion-content padding class="content" *ngIf="otpverify">\n  <form [formGroup]="form1" (ngSubmit)="otpVerify()" >\n\n  <ion-item>\n    <ion-label floating><ion-icon name="lock"></ion-icon>OTP</ion-label>\n    <ion-input formControlName="otp" type="password" [(ngModel)]="otpData.otp"></ion-input>\n  </ion-item>\n  \n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n   </form> \n</ion-content> '/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotehistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__ = __webpack_require__(47);
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
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        console.log("refresh");
    };
    QuotehistoryPage.prototype.quoteShow = function (book_id) {
        console.log(book_id);
        var service = JSON.parse(localStorage.getItem('loggedData'));
        service[0]['book_id'] = book_id;
        console.log(service);
        localStorage.setItem('loggedData', JSON.stringify(service));
        console.log(JSON.parse(localStorage.getItem('loggedData')));
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__["a" /* QuoteviewPage */]);
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
    QuotehistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quotehistory',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\quotehistory\quotehistory.html"*/'<!--\n  Generated template for the QuotehistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-toolbar no-padding>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Quote & Response</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding class="content">\n  <ion-card *ngFor="let item of quoteHistory">\n    <ion-card-header>\n            \n      <h2 *ngIf="item.softService">{{item.softService}}<br></h2>\n      <h2 *ngIf="item.hardService">{{item.hardService}}<br></h2>\n      <h2 *ngIf="item.othermodel">{{item.othermodel}}<br></h2>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-row>\n            <ion-col col-4 text-left>\n             <b>Make</b>\n            </ion-col>\n            <ion-col col-1><b>:</b></ion-col>\n            <ion-col col-7 text-left>\n                {{item.make_name}}<p *ngIf="item.make_name==null">{{item.make}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-4 text-left>\n               <b>Model</b>\n              </ion-col>\n              <ion-col col-1><b>:</b></ion-col>\n              <ion-col col-7 text-left>\n                  {{item.model}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4 text-left>\n                 <b> Booking Date</b>\n                </ion-col>\n                <ion-col col-1><b>:</b></ion-col>\n                <ion-col col-7 text-left>\n                    {{item.posted_on}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col col-4 text-left>\n                   <b>Status</b>\n                  </ion-col>\n                  <ion-col col-1><b>:</b></ion-col>\n                  <ion-col col-7 text-left>\n                     \n              <div *ngIf="!item.cancel_status"><p *ngIf="!item.id||!item.accept_status">In-progress</p><p *ngIf="item.accept_status==4">Decline</p><p *ngIf="item.accept_status==3">Accepted</p></div>\n              <div *ngIf="item.cancel_status==1||item.cancel_status==2">Booking Cancelled</div>\n      \n                  </ion-col>\n                </ion-row>\n    </ion-card-content>\n    <div class="btn-group">\n        <ion-row>\n          <ion-col col-6 text-center>\n              <button ion-button color="primary" [disabled]="!item.id" class="button" small (click)="quoteShow(item.book_id)" icon-only>Quotes</button>\n          </ion-col>\n            <ion-col col-6 text-center>\n                <button ion-button color="danger" [hidden]="item.cancel_status" class="button" small (click)="ServiceCancel(item.book_id)" icon-only>Cancel Booking</button>\n            </ion-col>\n          </ion-row>\n            </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\quotehistory\quotehistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], QuotehistoryPage);
    return QuotehistoryPage;
}());

//# sourceMappingURL=quotehistory.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_faq__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactus_contactus__ = __webpack_require__(117);
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
            selector: 'page-tabs',template:/*ion-inline-start:"G:\bharath\ionic\rytefix\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement= "bottom" >\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="FAQ" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contact Us" tabIcon="ios-contact-outline"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"G:\bharath\ionic\rytefix\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map