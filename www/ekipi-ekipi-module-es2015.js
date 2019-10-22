(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ekipi-ekipi-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ekipi/ekipi.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ekipi/ekipi.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\">\n      Ekipi\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\ntest\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ekipi/ekipi.module.ts":
/*!***************************************!*\
  !*** ./src/app/ekipi/ekipi.module.ts ***!
  \***************************************/
/*! exports provided: EkipiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EkipiPageModule", function() { return EkipiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ekipi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ekipi.page */ "./src/app/ekipi/ekipi.page.ts");







const routes = [
    {
        path: '',
        component: _ekipi_page__WEBPACK_IMPORTED_MODULE_6__["EkipiPage"]
    }
];
let EkipiPageModule = class EkipiPageModule {
};
EkipiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ekipi_page__WEBPACK_IMPORTED_MODULE_6__["EkipiPage"]]
    })
], EkipiPageModule);



/***/ }),

/***/ "./src/app/ekipi/ekipi.page.scss":
/*!***************************************!*\
  !*** ./src/app/ekipi/ekipi.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VraXBpL2VraXBpLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ekipi/ekipi.page.ts":
/*!*************************************!*\
  !*** ./src/app/ekipi/ekipi.page.ts ***!
  \*************************************/
/*! exports provided: EkipiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EkipiPage", function() { return EkipiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EkipiPage = class EkipiPage {
    constructor() { }
    ngOnInit() {
    }
};
EkipiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ekipi',
        template: __webpack_require__(/*! raw-loader!./ekipi.page.html */ "./node_modules/raw-loader/index.js!./src/app/ekipi/ekipi.page.html"),
        styles: [__webpack_require__(/*! ./ekipi.page.scss */ "./src/app/ekipi/ekipi.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EkipiPage);



/***/ })

}]);
//# sourceMappingURL=ekipi-ekipi-module-es2015.js.map