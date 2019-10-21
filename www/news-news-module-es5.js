(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/news/news.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/news/news.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Lajme\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!isLoaded\">\n    <ion-list>\n      <ion-item *ngFor=\"let item of arrayOne(20)\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h2>\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n          </h2>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div *ngIf=\"!isLoaded\">\n    <ion-list>\n      <ion-item *ngFor=\"let item of arrayOne(20)\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h2>\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n          </h2>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n\n  <div *ngIf=\"isLoaded\">\n    <ion-list>\n      <ion-item *ngFor=\"let item of news;\" [routerLink]=\"item.id\">\n        <ion-avatar slot=\"start\">\n          <img src=\"http://www.fkvllaznia.net/main/vllaznia/_files/newspublish/{{item.image}}\"\n            style=\"background: #F2F2F2;\">\n        </ion-avatar>\n        <ion-label class=\"ion-text-capitalize\">\n          <h2>{{ item.title }}</h2>\n          <p>{{ item.summary }}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n  <!--\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadNews($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n-->\n</ion-content>"

/***/ }),

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/news/news.page.ts");







var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/news/news.page.scss":
/*!*************************************!*\
  !*** ./src/app/news/news.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/news/news.page.ts":
/*!***********************************!*\
  !*** ./src/app/news/news.page.ts ***!
  \***********************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/vllaznia.service */ "./src/app/api/vllaznia.service.ts");



//import { IonInfiniteScroll } from '@ionic/angular';
var NewsPage = /** @class */ (function () {
    //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    function NewsPage(NewsService) {
        this.NewsService = NewsService;
        this.offset = 0;
        this.isLoaded = false;
    }
    NewsPage.prototype.ngOnInit = function () {
        console.log("oninit: " + this.isLoaded);
        this.loadNews();
    };
    NewsPage.prototype.loadNews = function (loadMore, event) {
        var _this = this;
        if (loadMore === void 0) { loadMore = false; }
        if (loadMore) {
            this.offset += 10;
        }
        this.NewsService.getAllNews().subscribe(function (news) {
            //this.news = [...this.news, ...news];
            console.log(_this.isLoaded);
            console.log(news);
            _this.news = news;
            _this.isLoaded = true;
            console.log(_this.isLoaded);
            if (event) {
                event.target.complete();
            }
        });
    };
    NewsPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    NewsPage.ctorParameters = function () { return [
        { type: _api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"] }
    ]; };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! raw-loader!./news.page.html */ "./node_modules/raw-loader/index.js!./src/app/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/news/news.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=news-news-module-es5.js.map