webpackJsonp([12],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicebookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(43);
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
var ServicebookingPage = (function () {
    function ServicebookingPage(navCtrl, navParams, AuthServiceProvider, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
        this.Toast = Toast;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            pickup: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            make: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            modelno: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            soft: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            hard: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            loc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            others: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            pickup1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            make1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            modelno1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            describe: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            loc1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        this.userData = { "make": "", "modelno": "", "soft": "", "hard": "", "others": "", "pickup": "", "loc": "" };
        this.userdata1 = { "make1": "", "modelno1": "", "describe": "", "pickup1": "", "loc1": "" };
        //this.userData.require = this.form.controls['name="check"'].value;
        if (localStorage.getItem('gadget') == "Mobile" || localStorage.getItem('gadget') == "Laptop" || localStorage.getItem('gadget') == "Tablet") {
            this.makeService();
            this.softService();
            this.hardService();
            this.preferLocation();
            this.mobile = true;
            this.printer = false;
        }
        else {
            this.preferLocation();
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
        this.AuthServiceProvider.getData('softService').then(function (result) {
            _this.softdropdown = result;
            console.log(_this.softdropdown);
        });
    };
    ServicebookingPage.prototype.hardService = function () {
        var _this = this;
        this.AuthServiceProvider.getData('hardService').then(function (result) {
            _this.harddropdown = result;
            console.log(_this.harddropdown);
        });
    };
    ServicebookingPage.prototype.preferLocation = function () {
        var _this = this;
        this.AuthServiceProvider.getData('preferLocation').then(function (result) {
            _this.preferdropdown = result;
            console.log(_this.preferdropdown);
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
    ServicebookingPage.prototype.initializeItems = function () {
        console.log(this.preferdropdown);
        this.items = this.preferdropdown;
    };
    // preferLoc(){
    //   console.log("prefer");
    //   this.searchBar=true;
    // }
    ServicebookingPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ServicebookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-servicebooking',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\servicebooking\servicebooking.html"*/'<!--\n\n  Generated template for the ServicebookingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Service Booking</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding *ngIf="mobile">\n\n  <form [formGroup]="form" (ngSubmit)="serviceReq()">\n\n    <ion-item class="selectbg">\n\n      <ion-label>Select Make</ion-label>\n\n      <ion-select formControlName="make" name="make" [(ngModel)]="userData.make" (ionChange)="servicemake($event)">\n\n        <ion-option *ngFor="let key  of makedropdown" value="{{key.id}}">{{key.make_name}}</ion-option>\n\n        <ion-option value="others">others</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="other">\n\n      <ion-input formControlName="make" name="make" type="text" [(ngModel)]="userData.make" placeholder="Enter Service Make" clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="make.touched && make.invalid" class="alertstyle">\n\n      <div *ngIf="make.errors.required">Select Make</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-input formControlName="modelno" name="modelno" type="text" [(ngModel)]="userData.modelno" placeholder="Enter Model Number"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="modelno.touched && modelno.invalid" class="alertstyle">\n\n      <div *ngIf="modelno.errors.required">Select Model</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-label>Select Service Required</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Software</ion-label>\n\n      <ion-select formControlName="soft" name="soft" [(ngModel)]="userData.soft">\n\n        <ion-option *ngFor="let key  of softdropdown" value="{{key.id}}">{{key.service}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Hardware</ion-label>\n\n      <ion-select formControlName="hard" name="hard" [(ngModel)]="userData.hard">\n\n        <ion-option *ngFor="let key  of harddropdown" value="{{key.id}}">{{key.service}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n   \n\n    <ion-item>\n\n      <ion-input formControlName="others" name="others" type="text" [(ngModel)]="userData.others" placeholder="Others" clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="others.touched && others.invalid||hard.touched && hard.invalid||soft.touched && soft.invalid" class="alertstyle">\n\n      <div *ngIf="others.errors.required||hard.errors.required||soft.errors.required">Select Model</div>\n\n    </div>\n\n\n\n    <ion-list radio-group formControlName="pickup" [(ngModel)]="userData.pickup">\n\n      <ion-item>\n\n        <ion-label>Required</ion-label>\n\n        <ion-radio value="required" checked></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Not required</ion-label>\n\n        <ion-radio value="notrequired"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label>Select Preferred Locationfor Service</ion-label>\n\n      <ion-select formControlName="loc" name="loc" multiple [(ngModel)]="userData.loc" (ionChange)="serviceLoc($event)">\n\n        <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n\n    </ion-item> -->\n\n    <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Service Request</button>\n\n  </form>\n\n\n\n</ion-content>\n\n<ion-content padding *ngIf="printer">\n\n  <form [formGroup]="form1" (ngSubmit)="serviceReq1()">\n\n    <ion-item >\n\n      <ion-input formControlName="make1" name="make1" type="text" [(ngModel)]="userdata1.make1" placeholder="Enter Service Make" clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="make1.touched && make1.invalid" class="alertstyle">\n\n      <div *ngIf="make1.errors.required">Select Make</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-input formControlName="modelno1" name="modelno1" type="text" [(ngModel)]="userdata1.modelno1" placeholder="Enter Model Number"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="modelno1.touched && modelno1.invalid" class="alertstyle">\n\n      <div *ngIf="modelno1.errors.required">Select Model</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-label>Describe Problem</ion-label>\n\n      <ion-textarea formControlName="describe" name="describe" type="text" [(ngModel)]="userdata1.describe" placeholder="Enter description"\n\n        clearInput></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-list radio-group formControlName="pickup1" [(ngModel)]="userdata1.pickup1">\n\n      <ion-item>\n\n        <ion-label>Required</ion-label>\n\n        <ion-radio value="required" checked></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Not required</ion-label>\n\n        <ion-radio value="notrequired"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label>Select Preferred Locationfor Service</ion-label>\n\n      <ion-select formControlName="loc1" name="loc1" multiple [(ngModel)]="userdata1.loc1" (ionChange)="serviceLoc($event)">\n\n        <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n <!-- <ion-item>\n\n      <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n\n    </ion-item>  -->\n\n    <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Service Request</button>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\servicebooking\servicebooking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ServicebookingPage);
    return ServicebookingPage;
}());

//# sourceMappingURL=servicebooking.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function WalletPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    }
    WalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletPage');
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\wallet\wallet.html"*/'<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>wallet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="card">\n        <div class="cover">\n          <h1>WALLET BALANCE</h1>\n          <p class="p">₹500</p>\n          <button ion-button clear> Redeem your money</button>\n        </div>\n        </div>\n        <div class="segment">\n            <ion-segment [(ngModel)]="earns">\n              <ion-segment-button value="Earns">\n                  Earns\n              </ion-segment-button>\n              <!-- <ion-segment-button value="Spends">\n                Spends\n              </ion-segment-button> -->\n            </ion-segment>\n          </div>\n          <ion-scroll scrollY="true" style="width: 100%; height: 100%;">\n\n              <div [ngSwitch]="earns">\n                  <ion-list *ngSwitchCase="\'Earns\'">\n                          <button ion-item *ngFor="let item of items">\n                              <button ion-item >\n                                  <h2>Earning amount : 500</h2>\n                                  <h5>Earned by     : promocode</h5>\n                                  <h5>Earned on     : 14-2-18</h5>\n                                  <!-- <ion-note item-end>></ion-note> -->\n                                </button>\n                          </button>\n                        </ion-list>\n                        </div>\n          </ion-scroll>\n         \n\n                    \n</ion-content>\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntrosliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(55);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-introslider',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\introslider\introslider.html"*/'<ion-header no-shadow class="navColor">\n  <ion-navbar >\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="home()" color="primary">SKIP</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image" />\n      <!-- <h2 class="slide-title" [innerHTML]="slide.title"></h2> -->\n      <!-- <p [innerHTML]="slide.description"></p> -->\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/imgs/appicon2.png" class="slide-image" />\n      <h2 class="slide-title"></h2>\n      <button ion-button block class="bonusButton"  icon-end (click)="startApp()">\n        REGISTER TO GET 250 CREDITS\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\introslider\introslider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], IntrosliderPage);
    return IntrosliderPage;
}());

//# sourceMappingURL=introslider.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitefrdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invitefrd',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\invitefrd\invitefrd.html"*/'<!--\n\n  Generated template for the InvitefrdPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Invite Friends</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\invitefrd\invitefrd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InvitefrdPage);
    return InvitefrdPage;
}());

//# sourceMappingURL=invitefrd.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/changepass/changepass.module": [
		291,
		11
	],
	"../pages/contactus/contactus.module": [
		292,
		10
	],
	"../pages/faq/faq.module": [
		293,
		9
	],
	"../pages/introslider/introslider.module": [
		294,
		8
	],
	"../pages/invitefrd/invitefrd.module": [
		295,
		7
	],
	"../pages/login/login.module": [
		296,
		6
	],
	"../pages/profile/profile.module": [
		297,
		5
	],
	"../pages/quotehistory/quotehistory.module": [
		298,
		4
	],
	"../pages/quoteview/quoteview.module": [
		299,
		3
	],
	"../pages/register/register.module": [
		300,
		2
	],
	"../pages/servicebooking/servicebooking.module": [
		301,
		1
	],
	"../pages/wallet/wallet.module": [
		302,
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = (function () {
    function ContactusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\contactus\contactus.html"*/'<!--\n\n  Generated template for the ContactusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Contact Us</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function FaqPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\faq\faq.html"*/'<!--\n\n  Generated template for the FaqPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>FAQ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contactus_contactus__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_changepass_changepass__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_invitefrd_invitefrd__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_unique_device_id__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_introslider_introslider__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_wallet_wallet__ = __webpack_require__(108);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__["a" /* ServicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_changepass_changepass__["a" /* ChangepassPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_invitefrd_invitefrd__["a" /* InvitefrdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__["a" /* QuoteviewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_introslider_introslider__["a" /* IntrosliderPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_wallet_wallet__["a" /* WalletPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
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
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__["a" /* ServicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_changepass_changepass__["a" /* ChangepassPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_invitefrd_invitefrd__["a" /* InvitefrdPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__["a" /* QuoteviewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_introslider_introslider__["a" /* IntrosliderPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_wallet_wallet__["a" /* WalletPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(263);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_quotehistory_quotehistory__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quoteview_quoteview__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_changepass_changepass__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_invitefrd_invitefrd__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_introslider_introslider__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(211);
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
    function MyApp(uniqueDeviceID, AuthServiceProvider, toastCtrl, platform, statusBar, loadingCtrl, splashScreen, alertCtrl, fb) {
        this.uniqueDeviceID = uniqueDeviceID;
        this.AuthServiceProvider = AuthServiceProvider;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_introslider_introslider__["a" /* IntrosliderPage */];
        this.initializeApp();
        console.log("test");
        console.log(this.uniqueDeviceID.get().then(function (uuid) { return console.log(uuid); }).catch(function (error) { return console.log(error); }));
        this.uniqueDeviceID.get().then(function (uuid) { console.log(uuid); localStorage.setItem("deviceId", uuid); }).catch(function (error) { return console.log(error); });
        // this.device='c9ab8ea1-aa3a-578b-9900-020705933689';
        // localStorage.setItem("deviceId",this.device);
        // used for an example of ngFor, and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_9__pages_changepass_changepass__["a" /* ChangepassPage */] },
            // { title: 'FAQ', component: FaqPage},
            { title: 'Invite Friends', component: __WEBPACK_IMPORTED_MODULE_10__pages_invitefrd_invitefrd__["a" /* InvitefrdPage */] },
            // { title: 'Rate This App', component:   },
            // { title: 'Contact Us', component: ContactusPage },
            { title: 'Quote & Response', component: __WEBPACK_IMPORTED_MODULE_7__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */] },
            { title: 'Quote', component: __WEBPACK_IMPORTED_MODULE_8__pages_quoteview_quoteview__["a" /* QuoteviewPage */] },
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
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
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
                    localStorage.setItem('gadget', "");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
                    toast.present();
                }
            }, function (err) {
                // Error log
            });
        }
        else {
            console.log("not logged");
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button ion-item menuClose (click)="logout()">\n\n          <ion-icon item-start [name]="log-out" ></ion-icon>\n\n          Logout\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicebooking_servicebooking__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotehistory_quotehistory__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_wallet__ = __webpack_require__(108);
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
                    label: 'Printer, cam & others',
                    value: 'Printer'
                }
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
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__wallet_wallet__["a" /* WalletPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Home</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngIf="home">\n\n    <ion-list>\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-6><a  (click)="Gadgets()">\n\n                    <ion-item class="selectbg">\n\n                        <!-- <ion-label hidden>Select Gadgets</ion-label>\n\n                        <ion-select [(ngModel)]="toppings" (ionChange)="Gadgets($event);">\n\n                            <ion-option value="Mobile" selected>Mobile</ion-option>\n\n                            <ion-option value="Laptop">Laptop</ion-option>\n\n                            <ion-option value="Tablet">Tablet</ion-option>\n\n                            <ion-option value="Printer">Printer,cam &others</ion-option>\n\n                        </ion-select> -->\n\n                    </ion-item></a>\n\n                </ion-col>\n\n                <ion-col col-6><a  (click)="quoteHistory()">\n\n                    <ion-item class="QHSbg"></ion-item>\n\n                </a>\n\n                   \n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6><a  (click)="Gadgets()">\n\n                    <ion-item class="selectbg">\n\n                    </ion-item></a>\n\n                </ion-col>\n\n                <ion-col col-6><a  (click)="wallet()">\n\n                    <ion-item class="QHSbg"></ion-item>\n\n                </a>\n\n                   \n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-list>\n\n</ion-content> \n\n<!-- \n\n<ion-content *ngIf="print">\n\n    <section class = "home-container">\n\n      <div class="row row-center" >\n\n          <div class="col text-center" >\n\n              <img alt="Logo" height="100" src="assets/imgs/watch.gif" >\n\n          </div>\n\n     </div>\n\n    </section>\n\n</ion-content> -->\n\n\n\n\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__changepass_changepass__ = __webpack_require__(54);
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
    function LoginPage(navCtrl, alertCtrl, loadingCtrl, navParams, toastCtrl, AuthServiceProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            mobile: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            pass: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            mobile1: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
        });
        this.form2 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            otp: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
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
            var loggedid = JSON.parse(localStorage.getItem("loggedData"));
            if (localStorage.getItem('serviceBooking')) {
                var loggedData = JSON.parse(localStorage.getItem('serviceBooking'));
                //let loggedData=this.jsonConcat(service, logged);
                loggedData['id'] = loggedid[0].id;
                loggedData['gadget'] = localStorage.getItem('gadget');
                console.log(loggedData);
                this.AuthServiceProvider.postData(loggedData, 'serLogged').then(function (result) {
                    console.log(result);
                    _this.responseData = result;
                    if (_this.responseData.status == true) {
                        toast.present();
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
                loggedData['id'] = loggedid[0].id;
                loggedData['gadget'] = JSON.parse(localStorage.getItem('gadget'));
                console.log(loggedData);
                this.AuthServiceProvider.postData(loggedData, 'ser1Logged').then(function (result) {
                    console.log(result);
                    _this.responseData = result;
                    if (_this.responseData.status == true) {
                        toast.present();
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
            var service = JSON.parse(localStorage.getItem('serviceBooking'));
            var serviceUser = this.jsonConcat(service, this.loginData);
            serviceUser['gadget'] = localStorage.getItem('gadget');
            this.AuthServiceProvider.postData(serviceUser, 'serLogin').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    console.log(result);
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    toast1.present();
                }
            });
        }
        else if (localStorage.getItem('serviceBooking1')) {
            var service = JSON.parse(localStorage.getItem('serviceBooking1'));
            var serviceUser = this.jsonConcat(service, this.loginData);
            serviceUser['gadget'] = localStorage.getItem('gadget');
            this.AuthServiceProvider.postData(serviceUser, 'ser1Login').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    console.log(result);
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
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
            message: 'otp successfully verifid',
            duration: 3000,
            position: 'bottom'
        });
        console.log(this.otpData);
        if (localStorage.getItem("loggedData")) {
            var logged = JSON.parse(localStorage.getItem("loggedData"));
            var otpverify = this.jsonConcat(this.otpData, logged);
            this.AuthServiceProvider.postData(otpverify[0], 'otpVerify').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    alert("Invalid otp");
                }
                // this.makedropdown=result;
                //  console.log(this.makedropdown );
            });
        }
        else {
            console.log(this.otpData['otp']);
            delete this.responsedata.data[0]['otp'];
            delete this.responsedata.data['otp'];
            console.log(this.responsedata.data);
            this.responsedata.data[0]['otp'] = this.otpData['otp'];
            var otpdata_1 = this.responsedata.data[0];
            console.log(otpdata_1);
            //let otpverify=this.jsonConcat(this.otpData, this.responsedata.data);
            this.AuthServiceProvider.postData(otpdata_1, 'otpVerify').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    localStorage.setItem('loggedData', JSON.stringify(otpdata_1));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__changepass_changepass__["a" /* ChangepassPage */]);
                }
                else {
                    alert("Invalid otp");
                }
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="loginscreen">\n\n  <form [formGroup]="form" (ngSubmit)="login()" >\n\n  \n\n\n\n    <ion-item>\n\n    <ion-label floating><ion-icon name="ios-call"></ion-icon> Mobile</ion-label>\n\n    <ion-input formControlName="mobile" type="number" [(ngModel)]="loginData.mobile"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating><ion-icon name="lock"></ion-icon> Password</ion-label>\n\n    <ion-input formControlName="pass" type="password" [(ngModel)]="loginData.pass"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Login</button>\n\n   </form> \n\n   <a href="#" (click)="reg()">Register</a>\n\n   <a href="#" (click)="forgot()">Forgot password</a>\n\n</ion-content>\n\n<ion-content padding  *ngIf="forgotMobile">\n\n  <form [formGroup]="form1" (ngSubmit)="forgotPass()" >\n\n\n\n  <ion-item>\n\n    <ion-label floating><ion-icon name="lock"></ion-icon>Mobile</ion-label>\n\n    <ion-input formControlName="mobile1" type="number" [(ngModel)]="forgotData.mobile1"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n\n   </form> \n\n</ion-content> \n\n<ion-content padding  *ngIf="otpverify">\n\n  <form [formGroup]="form2" (ngSubmit)="otpVerify()" >\n\n\n\n  <ion-item>\n\n    <ion-label floating><ion-icon name="lock"></ion-icon>OTP</ion-label>\n\n    <ion-input formControlName="otp" type="text" [(ngModel)]="otpData.otp"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n\n   </form> \n\n</ion-content> '/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(25);
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
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            npass: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            cpass: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
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
        loggedData['resetpass'] = this.passData['npass'];
        this.AuthServiceProvider.postData(loggedData, 'resetPassword').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                loader.dismiss();
                console.log(result);
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ChangepassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepass',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\changepass\changepass.html"*/'<!--\n\n  Generated template for the ChangepassPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Change Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="form" (ngSubmit)="changePass()" >\n\n  \n\n    <ion-item>\n\n    <ion-label floating><ion-icon name="lock"></ion-icon> New Passwrd</ion-label>\n\n    <ion-input formControlName="npass" type="passwrd" (focusout)="npassword($event.target.value)"  [(ngModel)]="passData.npass"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating><ion-icon name="lock"></ion-icon> Conform Passwrd</ion-label>\n\n    <ion-input formControlName="cpass" type="password" (focusout)="cpassword($event.target.value)"  [(ngModel)]="passData.cpass"></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="userCpass">Password not match</div>\n\n   <button ion-button type="submit"  class="sign_btn" [disabled]="disable"  round full>Ok</button>\n\n   </form> \n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\changepass\changepass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ChangepassPage);
    return ChangepassPage;
}());

//# sourceMappingURL=changepass.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(42);
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
    function RegisterPage(alertCtrl, navCtrl, loadingCtrl, toastCtrl, AuthServiceProvider, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.navParams = navParams;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            cpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            area: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            pincode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            mail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            otp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
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
        var otpverify = this.jsonConcat(this.otpData, logged);
        this.AuthServiceProvider.postData(otpverify[0], 'otpVerify').then(function (result) {
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
            if (JSON.parse(localStorage.getItem('serviceBooking'))) {
                console.log(JSON.parse(localStorage.getItem('serviceBooking')));
                var service = JSON.parse(localStorage.getItem('serviceBooking'));
                var serviceUser = this.jsonConcat(service, this.userData);
                serviceUser['gadget'] = localStorage.getItem('gadget');
                console.log(serviceUser);
                this.AuthServiceProvider.postData(serviceUser, 'regUser').then(function (result) {
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
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="registerpage" >\n\n  <form [formGroup]="form" (ngSubmit)="register()" >\n\n    <ion-item>\n\n      <ion-label  floating><ion-icon name="contact"></ion-icon> Username</ion-label>\n\n      <ion-input formControlName="username" focuser id="usersignup" type="text" [(ngModel)]="userData.username"></ion-input>\n\n     \n\n   </ion-item>\n\n   <div *ngIf="username.touched && username.invalid" class="alertstyle">\n\n     <div *ngIf="username.errors.required">Please provide a username</div>\n\n   </div>\n\n\n\n    <ion-item>\n\n    <ion-label floating><ion-icon name="ios-call"></ion-icon> Mobile</ion-label>\n\n    <ion-input formControlName="mobile" type="number" [(ngModel)]="userData.mobile"></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="mobile.touched && mobile.invalid" class="alertstyle">\n\n    <div *ngIf="mobile.errors.required">Please provide a mobile no</div>\n\n  </div>\n\n\n\n   <ion-item>\n\n     <ion-label floating><ion-icon name="mail"></ion-icon> Email</ion-label>\n\n     <ion-input formControlName="mail" type="text" [(ngModel)]="userData.mail"></ion-input>\n\n   </ion-item>\n\n   <div *ngIf="mail.touched && mail.invalid" class="alertstyle">\n\n     <div *ngIf="mail.errors.required">Email is required</div>\n\n     <div *ngIf="mail.errors.email">Invaild email format</div>\n\n   </div>\n\n\n\n   <ion-item>\n\n     <ion-label floating><ion-icon name="lock"></ion-icon> Password</ion-label>\n\n     <ion-input formControlName="password" type="password" (focusout)="pass($event.target.value)" [(ngModel)]="userData.password"></ion-input>\n\n   </ion-item>\n\n   <div *ngIf="password.touched && password.invalid" class="alertstyle">\n\n     <div *ngIf="password.errors.required">Please provide a password</div>\n\n    \n\n   </div>\n\n   <ion-item>\n\n    <ion-label floating><ion-icon name="lock"></ion-icon>Conform Password</ion-label>\n\n    <ion-input formControlName="cpassword" type="password" (focusout)="cpass($event.target.value)" [(ngModel)]="userData.cpassword"></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="cpassword.touched && cpassword.invalid" class="alertstyle">\n\n    <div *ngIf="cpassword.errors.required">Please provide a password</div>\n\n  </div>  \n\n  <div *ngIf="userCpass">Password not match</div>\n\n  <ion-item>\n\n    <ion-label floating><ion-icon name="ios-pin"></ion-icon>Area</ion-label>\n\n    <ion-input formControlName="area" type="text"[(ngModel)]="userData.area"></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="area.touched && area.invalid" class="alertstyle">\n\n    <div *ngIf="area.errors.required">Please provide a area</div>\n\n  </div> \n\n  <ion-item>\n\n    <ion-label floating><ion-icon name="ios-pin"></ion-icon>City</ion-label>\n\n    <ion-input formControlName="city" type="text"  [(ngModel)]="userData.city"></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="city.touched && city.invalid" class="alertstyle">\n\n    <div *ngIf="city.errors.required">Please provide a password</div>\n\n  </div> \n\n  <ion-item>\n\n    <ion-label floating><ion-icon name="ios-pin"></ion-icon>Pincode</ion-label>\n\n    <ion-input formControlName="pincode" type="number"  [(ngModel)]="userData.pincode"></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="pincode.touched && pincode.invalid" class="alertstyle">\n\n    <div *ngIf="pincode.errors.required">Please provide a pincode</div>\n\n  </div>   \n\n  \n\n   <button ion-button type="submit" [disabled]="disable" class="sign_btn"   round full>Register</button>\n\n   </form> \n\n</ion-content>\n\n\n\n<ion-content padding  *ngIf="otpverify">\n\n  <form [formGroup]="form1" (ngSubmit)="otpVerify()" >\n\n\n\n  <ion-item>\n\n    <ion-label floating><ion-icon name="lock"></ion-icon>OTP</ion-label>\n\n    <ion-input formControlName="otp" type="password" [(ngModel)]="otpData.otp"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n\n   </form> \n\n</ion-content> '/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _f || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotehistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__ = __webpack_require__(57);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotehistory',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\quotehistory\quotehistory.html"*/'<!--\n\n  Generated template for the QuotehistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Quote & Response</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let item of quoteHistory">\n\n    <ion-card-header>\n\n            \n\n      <h2 *ngIf="item.softService">{{item.softService}}<br></h2>\n\n      <h2 *ngIf="item.hardService">{{item.hardService}}<br></h2>\n\n      <h2 *ngIf="item.othermodel">{{item.othermodel}}<br></h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        NAME:{{item.make_name}}<br>\n\n        DATE:{{item.posted_on}}<br>\n\n        STATUS:<div *ngIf="!item.cancel_status"><p *ngIf="!item.id||!item.accept_status">In-progress</p><p *ngIf="item.accept_status==4">Decline</p><p *ngIf="item.accept_status==3">Accepted</p></div>\n\n        <div *ngIf="item.cancel_status==1||item.cancel_status==2">Booking Cancelled</div>\n\n        <div class="btn-group">\n\n                <button ion-button color="red" [disabled]="!item.id" class="button" (click)="quoteShow(item.book_id)" icon-only>Quote</button>\n\n                <button ion-button color="light" [hidden]="item.cancel_status" class="button" (click)="ServiceCancel(item.book_id)" icon-only>Cancel</button>\n\n            </div>\n\n    </ion-card-content>\n\n   \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\quotehistory\quotehistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], QuotehistoryPage);
    return QuotehistoryPage;
}());

//# sourceMappingURL=quotehistory.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(168);
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
            _this.make = _this.quoteview[0].make;
            _this.model = _this.quoteview[0].model;
            _this.soft = _this.quoteview[0].softService;
            _this.hard = _this.quoteview[0].hardService;
            _this.othermodel = _this.quoteview[0].othermodel;
            _this.pickup = _this.quoteview[0].pickup_type;
            _this.booking_date = _this.quoteview[0].posted_on;
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
    QuoteviewPage.prototype.quoteChat = function (rid) {
    };
    QuoteviewPage.prototype.quoteCall = function (mobile) {
        console.log(mobile);
        this.callNumber.callNumber(mobile, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    QuoteviewPage.prototype.quoteAccept = function (id) {
        var _this = this;
        console.log(id);
        this.AuthServiceProvider.postData(id, 'serviceAccept').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                _this.refresh();
                alert("Service accept successfully");
            }
        });
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
            zoom: 10,
            visible: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
        var markers = [];
        console.log(this.regionals);
        var _loop_1 = function (regional) {
            console.log(regional.latitude + ',' + regional.longitude);
            var markerData = {
                position: {
                    lat: regional.latitude,
                    lng: regional.longitude
                },
                map: this_1.map,
                // icon:this.nabo_img,
                title: regional.username,
            };
            regional.marker = new google.maps.Marker(markerData);
            markers.push(regional.marker);
            //let content = regional.username; 
            //infoWindow.open(this.map, regional.marker);
            regional.marker.addListener('click', function () {
                var content = "<div id='iw-content' class='iw-content'><div class='iw-subTitle'>Vendor name: " + regional.username + "</div><p>Exact price: " + regional.exactprice + "</p><p>Warranty: " + regional.warranty + ",</p><p>Description: " + regional.description + "</p><button ion-button color='red'  class='button' (click)='quoteChat(" + regional.id + ")' icon-only>Chat</button>" +
                    "<button ion-button color='light'  class='button' (click)='quoteCall(" + regional.mobile + ")' icon-only>Call</button>" +
                    "<button ion-button color='red'  class='button' (click)='quoteAccept(" + regional.id + ")' icon-only>Accept</button>" +
                    "<button ion-button color='light'  class='button' (click)='quoteIgnore(" + regional.id + ")' icon-only>Ignore</button></div>'";
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
    QuoteviewPage.prototype.loadMap = function (lat, long) {
        console.log(lat + "," + long);
        console.log("lat and lang");
        var latLng = new google.maps.LatLng(lat, long);
        console.log(latLng);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], QuoteviewPage.prototype, "mapElement", void 0);
    QuoteviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quoteview',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\quoteview\quoteview.html"*/'<!--\n\n  Generated template for the QuoteviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Quote</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n <ion-content *ngIf="mapview">\n\n    Make:{{make}}<br>\n\n     Model:{{model}}<br>\n\n     Problem: <p *ngIf="soft!=\'\'||hard !=\'\'||othermodel !=\'\'">{{soft}}{{hard}}{{othermodel}}</p>\n\n    \n\n    Pickup:{{pickup}}<br>\n\n    Booking Date:{{booking_date}}<br> \n\n    <ion-content class="map-pin">\n\n        <div #map id="map"></div> \n\n    </ion-content>\n\n  \n\n    <div class="btn-group switch">\n\n      <button ion-button color="light" class="button" (click)="listshow()" icon-only>List View</button>\n\n      <button ion-button color="light" class="button" (click)="mapshow()" icon-only>Map View</button>\n\n  </div>\n\n  \n\n</ion-content>\n\n <ion-content padding *ngIf="listview">\n\n     Make:{{make}}<br>\n\n     Model:{{model}}<br>\n\n     Problem: <p *ngIf="soft!=\'\'||hard !=\'\'||othermodel !=\'\'">{{soft}}{{hard}}{{othermodel}}</p>\n\n    \n\n    Pickup:{{pickup}}<br>\n\n    Booking Date:{{booking_date}}<br> \n\n  <ion-card *ngFor="let item of quoteview">\n\n  \n\n    <ion-card-content>\n\n        Vendor name:{{item.username}}<br>\n\n        Exact price:{{item.exactprice}}<br>\n\n        Warranty:{{item.warranty}}<br>\n\n        Description:{{item.description}}<br>\n\n        Expires in:\n\n        <div class="btn-group">\n\n                <button ion-button color="red" [hidden]="item.cancel_status"  class="button" (click)="quoteChat(item.id)" icon-only>Chat</button>\n\n                <button ion-button color="light" [hidden]="item.cancel_status"  class="button" (click)="quoteCall(item.mobile)" icon-only>Call</button>\n\n                <button ion-button color="red" [hidden]="item.cancel_status"  class="button" (click)="quoteAccept(item.id)" icon-only>Accept</button>\n\n                <button ion-button color="light" [hidden]="item.cancel_status" class="button" (click)="quoteIgnore(item.id)" icon-only>Ignore</button>\n\n            </div>\n\n    </ion-card-content>\n\n   \n\n  </ion-card>\n\n  <div class="btn-group switch">\n\n    <button ion-button color="light" class="button" (click)="listshow()" icon-only>List View</button>\n\n    <button ion-button color="light" class="button" (click)="mapshow()" icon-only>Map View</button>\n\n</div>\n\n\n\n</ion-content> \n\n\n\n\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\rytefix\src\pages\quoteview\quoteview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], QuoteviewPage);
    return QuoteviewPage;
}());

//# sourceMappingURL=quoteview.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map