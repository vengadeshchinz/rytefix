webpackJsonp([0],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemPageModule", function() { return RedeemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redeem__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RedeemPageModule = (function () {
    function RedeemPageModule() {
    }
    RedeemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__redeem__["a" /* RedeemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__redeem__["a" /* RedeemPage */]),
            ],
        })
    ], RedeemPageModule);
    return RedeemPageModule;
}());

//# sourceMappingURL=redeem.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(50);
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
 * Generated class for the RedeemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RedeemPage = (function () {
    function RedeemPage(view, navParams, emailComposer, media, file, loadingCtrl, transfer, camera, toastCtrl) {
        this.view = view;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.media = media;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.image = 'image';
        this.data = this.navParams.get('data');
        console.log(this.data);
    }
    RedeemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RedeemPage');
    };
    RedeemPage.prototype.close = function () {
        this.view.dismiss();
    };
    RedeemPage.prototype.redeem = function () {
        if (this.check1 == true && this.check2 == true) {
            if (this.image == 'image') {
                var msg = 'please attach your photo to redeem your balance';
                this.presentToast(msg);
            }
            else {
                this.uploadFile();
                var email = {
                    to: 'support@rytefix.com',
                    cc: 'admin@rytefix.com',
                    bcc: [],
                    subject: 'Customer ' + this.data.username + ' Redeem wallet balance',
                    body: 'the amount requested to redeem by customer is ' + this.data.walletbalance,
                    isHtml: true
                };
                // Send a text message using default options
                this.emailComposer.open(email);
            }
        }
        else {
            var msg = 'please complete and rate the vendor to redeem your balance';
            this.presentToast(msg);
        }
    };
    RedeemPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            _this.imageFileName = 'CustomerImage' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.jpg';
            _this.image = _this.imageFileName;
            console.log(_this.imageFileName);
            // this.userdata1['image']=this.imageFileName;
            var data = { imgfilename: _this.imageFileName, imgfilePath: _this.imageURI };
            // this.imgList.push(data);
            localStorage.setItem("imageList", JSON.stringify(data));
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    RedeemPage.prototype.imageDelete = function () {
        this.image = "image";
        // this.userdata1['image']="";
    };
    RedeemPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
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
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    RedeemPage.prototype.presentToast = function (msg) {
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
    RedeemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-redeem',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\redeem\redeem.html"*/'<!--\n  Generated template for the RedeemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Redeem balance</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label class="label">Have you completed & paid for your service ?</ion-label>\n        <ion-checkbox [(ngModel)]="check1"></ion-checkbox>\n      </ion-item>\n      \n      <ion-item class="label">\n      <ion-label>Have you rated your vendor ?</ion-label>\n        <ion-checkbox [(ngModel)]="check2"></ion-checkbox>\n      </ion-item>\n      <ion-row class="img">\n          <ion-col col-5> <h6>Attach your image:</h6></ion-col>\n          <ion-col col-6>\n            <div class="upload-img" (click)="getImage()">\n              {{image}} <ion-icon name="camera"></ion-icon> \n              <div *ngIf="!image==\'image\'" class="upload-img" (click)="imageDelete()" >\n                <ion-icon name="ios-close-circle"></ion-icon>\n            </div>  \n            </div>\n         </ion-col>\n        </ion-row>\n        <button ion-button large full  (click)="redeem()">Submit</button>\n</ion-content>\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefixcust\gitclone\gitclone2\pushworking\rytefix\src\pages\redeem\redeem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], RedeemPage);
    return RedeemPage;
}());

//# sourceMappingURL=redeem.js.map

/***/ })

});
//# sourceMappingURL=0.js.map