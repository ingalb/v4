(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-detail-news-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-detail/news-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-detail/news-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header parallax imageUrl=\"{{imgsrc}}\" maximumHeight=\"300\" expandedColor=\"#cc3333\" titleColor=\"white\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n        {{ title }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"!isLoaded\">\r\n    <ion-skeleton-text no-animated style=\"height: 250px\"></ion-skeleton-text>\r\n    <ion-card class=\"ion-no-margin\">\r\n      <ion-card-header>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n      </ion-card-header>\r\n      <ion-item color=\"secondary\">\r\n        <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n        <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n        <ion-button fill=\"outline\" slot=\"end\">Share</ion-button>\r\n      </ion-item>\r\n  \r\n      <ion-card-content>\r\n        <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  \r\n  </div>\r\n  <div *ngIf=\"isLoaded\">\r\n    <ion-card class=\"ion-no-margin\">\r\n      <ion-card-header>\r\n        <ion-card-title color=\"primary\">{{ title }}</ion-card-title>\r\n        <ion-card-subtitle color=\"secondary\">{{ summary }}</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-item color=\"secondary\">\r\n        <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{ data }}</ion-label>\r\n        <ion-button fill=\"outline\" slot=\"end\" (click)=\"shareNews()\">Share</ion-button>\r\n      </ion-item>\r\n  \r\n      <ion-card-content>\r\n        <div [innerHtml]=\"article\"></div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>   \r\n</ion-content>");

/***/ }),

/***/ "./src/app/news-detail/news-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/news-detail/news-detail.module.ts ***!
  \***************************************************/
/*! exports provided: NewsDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function() { return NewsDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_header_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-header-parallax */ "./node_modules/ionic-header-parallax/fesm2015/ionic-header-parallax.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _news_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news-detail.page */ "./src/app/news-detail/news-detail.page.ts");








const routes = [
    {
        path: '',
        component: _news_detail_page__WEBPACK_IMPORTED_MODULE_7__["NewsDetailPage"]
    }
];
let NewsDetailPageModule = class NewsDetailPageModule {
};
NewsDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ionic_header_parallax__WEBPACK_IMPORTED_MODULE_5__["IonicHeaderParallaxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_news_detail_page__WEBPACK_IMPORTED_MODULE_7__["NewsDetailPage"]]
    })
], NewsDetailPageModule);



/***/ }),

/***/ "./src/app/news-detail/news-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/news-detail/news-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border-radius: 0;\n}\n\n.parallax-title {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1kZXRhaWwvQzpcXFVzZXJzXFxqbmVoYVxcRGVza3RvcFxcdmxsYXpuaWFcXHY0LXNvdXJjZS9zcmNcXGFwcFxcbmV3cy1kZXRhaWxcXG5ld3MtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVMsZ0JBQUE7QUNDVDs7QURBQTtFQUNJLFVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY2FyZHtib3JkZXItcmFkaXVzOiAwO31cclxuLnBhcmFsbGF4LXRpdGxle1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4iLCJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5wYXJhbGxheC10aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/news-detail/news-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/news-detail/news-detail.page.ts ***!
  \*************************************************/
/*! exports provided: NewsDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPage", function() { return NewsDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/vllaznia.service */ "./src/app/api/vllaznia.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




//import { SocialSharing } from '@ionic-native/social-sharing/ngx';
let NewsDetailPage = class NewsDetailPage {
    constructor(NewsService, activatedRoute) {
        this.NewsService = NewsService;
        this.activatedRoute = activatedRoute;
        this.imgsrc = "https://www.fkvllaznia.net/main/vllaznia/_files/newspublish/lajme-vllaznia.gif";
        this.isLoaded = false;
    }
    loadInfoNews() {
        this.NewsService.getInfoNews(this.newsId).subscribe(news => {
            this.news = news;
            this.title = this.news[0].title;
            this.imgsrc = "https://www.fkvllaznia.net/main/vllaznia/_files/newspublish/" + this.news[0].image;
            this.summary = this.news[0].summary;
            this.data = this.news[0].data;
            this.article = this.news[0].content;
            this.isLoaded = true;
        });
    }
    shareNews() {
        // this.socialSharing.share('Lexo lajmin per Vllaznine', this.title, this.imgsrc, 'https://www.fkvllaznia.com/lajme/'+this.newsId+'-mobile.html').then(() => {
        //   console.log("shared OK");
        // }).catch(() => {
        //   console.log("error on shared");
        // });
    }
    ngOnInit() {
        this.newsId = this.activatedRoute.snapshot.paramMap.get('id');
        this.loadInfoNews();
    }
    ionViewWillEnter() {
        this.loadInfoNews();
    }
};
NewsDetailPage.ctorParameters = () => [
    { type: _api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
NewsDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-detail/news-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-detail.page.scss */ "./src/app/news-detail/news-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], NewsDetailPage);



/***/ })

}]);
//# sourceMappingURL=news-detail-news-detail-module-es2015.js.map