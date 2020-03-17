(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsNewsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"tertiary\">\r\n      Lajme\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"!isLoaded\">\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let item of arrayOne(20)\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>\r\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n          </h2>\r\n          <p>\r\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"isLoaded\">\r\n  <ion-virtual-scroll [items]=\"news\">\r\n    <ion-item *virtualItem=\"let item\" [routerLink]=\"item.id\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"https://www.fkvllaznia.net/main/vllaznia/_files/newspublish/{{item.image}}\"\r\n          style=\"background: #F2F2F2;\">\r\n      </ion-avatar>\r\n      <ion-label class=\"ion-text-capitalize\">\r\n        <h2>{{ item.title }}</h2>\r\n        <p>{{ item.summary }}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-virtual-scroll>\r\n\r\n  <!-- <ion-list>\r\n    <ion-item *ngFor=\"let item of news\" [routerLink]=\"item.id\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"https://www.fkvllaznia.net/main/vllaznia/_files/newspublish/{{item.image}}\"\r\n          style=\"background: #F2F2F2;\">\r\n      </ion-avatar>\r\n      <ion-label class=\"ion-text-capitalize\">\r\n        <h2>{{ item.title }}</h2>\r\n        <p>{{ item.summary }}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"!isLoaded\">\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let item of arrayOne(20)\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>\r\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n          </h2>\r\n          <p>\r\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadNews($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Duke ngarkuar lajmet...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/news/news.module.ts":
  /*!*************************************!*\
    !*** ./src/app/news/news.module.ts ***!
    \*************************************/

  /*! exports provided: NewsPageModule */

  /***/
  function srcAppNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
      return NewsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./news.page */
    "./src/app/news/news.page.ts");

    const routes = [{
      path: '',
      component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }];
    let NewsPageModule = class NewsPageModule {};
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
    })], NewsPageModule);
    /***/
  },

  /***/
  "./src/app/news/news.page.scss":
  /*!*************************************!*\
    !*** ./src/app/news/news.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsNewsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/news/news.page.ts":
  /*!***********************************!*\
    !*** ./src/app/news/news.page.ts ***!
    \***********************************/

  /*! exports provided: NewsPage */

  /***/
  function srcAppNewsNewsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
      return NewsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/vllaznia.service */
    "./src/app/api/vllaznia.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let NewsPage = class NewsPage {
      constructor(NewsService) {
        this.NewsService = NewsService;
        this.offset = 0;
        this.isLoaded = false;
      }

      ngOnInit() {
        console.log("oninit: " + this.isLoaded);
        this.loadNews();
      }

      loadNews(event) {
        if (event) {
          this.offset += 10;
        }

        this.NewsService.getNrNews(this.offset).subscribe(news => {
          this.news = news;
          this.isLoaded = true;

          if (event) {
            event.target.complete();
          }

          if (this.news.length == 1000) {
            event.target.disabled = true;
          }
        });
      }

      arrayOne(n) {
        return Array(n);
      }

      ionViewWillEnter() {
        this.loadNews();
      }

    };

    NewsPage.ctorParameters = () => [{
      type: _api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])], NewsPage.prototype, "infiniteScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonVirtualScroll"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonVirtualScroll"])], NewsPage.prototype, "virtualScroll", void 0);
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news.page.scss */
      "./src/app/news/news.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"]])], NewsPage);
    /***/
  }
}]);
//# sourceMappingURL=news-news-module-es5.js.map