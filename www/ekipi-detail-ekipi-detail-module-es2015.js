(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ekipi-detail-ekipi-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ekipi-detail/ekipi-detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ekipi-detail/ekipi-detail.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"ekipi\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\">\n      Detajet e Lojtarit\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ekipi-detail/ekipi-detail-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ekipi-detail/ekipi-detail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EkipiDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EkipiDetailPageRoutingModule", function() { return EkipiDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ekipi_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ekipi-detail.page */ "./src/app/ekipi-detail/ekipi-detail.page.ts");




const routes = [
    {
        path: '',
        component: _ekipi_detail_page__WEBPACK_IMPORTED_MODULE_3__["EkipiDetailPage"]
    }
];
let EkipiDetailPageRoutingModule = class EkipiDetailPageRoutingModule {
};
EkipiDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EkipiDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/ekipi-detail/ekipi-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ekipi-detail/ekipi-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: EkipiDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EkipiDetailPageModule", function() { return EkipiDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ekipi_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ekipi-detail-routing.module */ "./src/app/ekipi-detail/ekipi-detail-routing.module.ts");
/* harmony import */ var _ekipi_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ekipi-detail.page */ "./src/app/ekipi-detail/ekipi-detail.page.ts");







let EkipiDetailPageModule = class EkipiDetailPageModule {
};
EkipiDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ekipi_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["EkipiDetailPageRoutingModule"]
        ],
        declarations: [_ekipi_detail_page__WEBPACK_IMPORTED_MODULE_6__["EkipiDetailPage"]]
    })
], EkipiDetailPageModule);



/***/ }),

/***/ "./src/app/ekipi-detail/ekipi-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/ekipi-detail/ekipi-detail.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VraXBpLWRldGFpbC9la2lwaS1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ekipi-detail/ekipi-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/ekipi-detail/ekipi-detail.page.ts ***!
  \***************************************************/
/*! exports provided: EkipiDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EkipiDetailPage", function() { return EkipiDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EkipiDetailPage = class EkipiDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
EkipiDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ekipi-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ekipi-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ekipi-detail/ekipi-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ekipi-detail.page.scss */ "./src/app/ekipi-detail/ekipi-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EkipiDetailPage);



/***/ })

}]);
//# sourceMappingURL=ekipi-detail-ekipi-detail-module-es2015.js.map