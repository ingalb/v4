(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ekipi-ekipi-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ekipi/ekipi.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ekipi/ekipi.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEkipiEkipiPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"tertiary\">\r\n      Ekipi\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\ntest\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/ekipi/ekipi.module.ts":
  /*!***************************************!*\
    !*** ./src/app/ekipi/ekipi.module.ts ***!
    \***************************************/

  /*! exports provided: EkipiPageModule */

  /***/
  function srcAppEkipiEkipiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EkipiPageModule", function () {
      return EkipiPageModule;
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


    var _ekipi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ekipi.page */
    "./src/app/ekipi/ekipi.page.ts");

    const routes = [{
      path: '',
      component: _ekipi_page__WEBPACK_IMPORTED_MODULE_6__["EkipiPage"]
    }];
    let EkipiPageModule = class EkipiPageModule {};
    EkipiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_ekipi_page__WEBPACK_IMPORTED_MODULE_6__["EkipiPage"]]
    })], EkipiPageModule);
    /***/
  },

  /***/
  "./src/app/ekipi/ekipi.page.scss":
  /*!***************************************!*\
    !*** ./src/app/ekipi/ekipi.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppEkipiEkipiPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VraXBpL2VraXBpLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ekipi/ekipi.page.ts":
  /*!*************************************!*\
    !*** ./src/app/ekipi/ekipi.page.ts ***!
    \*************************************/

  /*! exports provided: EkipiPage */

  /***/
  function srcAppEkipiEkipiPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EkipiPage", function () {
      return EkipiPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let EkipiPage = class EkipiPage {
      constructor() {}

      ngOnInit() {}

    };
    EkipiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ekipi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ekipi.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ekipi/ekipi.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ekipi.page.scss */
      "./src/app/ekipi/ekipi.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EkipiPage);
    /***/
  }
}]);
//# sourceMappingURL=ekipi-ekipi-module-es5.js.map