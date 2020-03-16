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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"tertiary\">\r\n      Ekipi\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-list>\r\n  <ion-item *ngFor=\"let player of ekipi\" \r\n  [routerLink]=\"player.id\" detail=\"false\"\r\n  ng-if=\"player.larguar != 1\" >\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://www.albaniasoccer.com/{{ player.foto }}\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3>{{ player.emri }} {{ player.mbiemri}}</h3>\r\n      <p>{{ player.pozicioni }}</p>\r\n    </ion-label>\r\n    <ion-note slot=\"end\" *ngIf=\"player.type == 'player'\" class=\"bluza\">{{ player.nr }}</ion-note>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ".ios .bluza {\n  background-image: url('bluza.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  color: #f5e087;\n  font-family: arial;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 36px;\n  height: 36px;\n  padding-top: 10px;\n}\n\n.md .bluza {\n  background-image: url('bluza.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  color: #f5e087;\n  font-family: arial;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 36px;\n  height: 36px;\n  padding-top: 10px;\n  padding-right: 14px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWtpcGkvQzpcXFVzZXJzXFxqbmVoYVxcRGVza3RvcFxcdmxsYXpuaWFcXHY0LXNvdXJjZS9zcmNcXGFwcFxcZWtpcGlcXGVraXBpLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWtpcGkvZWtpcGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9la2lwaS9la2lwaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9zIC5ibHV6YSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmx1emEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBjb2xvcjogI2Y1ZTA4NztcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6MzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWQgLmJsdXphIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHV6YS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGNvbG9yOiAjZjVlMDg3O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDozNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSIsIi5pb3MgLmJsdXphIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JsdXphLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6ICNmNWUwODc7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1kIC5ibHV6YSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHV6YS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjZjVlMDg3O1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */";
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
    /* harmony import */


    var _api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/vllaznia.service */
    "./src/app/api/vllaznia.service.ts");

    let EkipiPage = class EkipiPage {
      constructor(EkipiService) {
        this.EkipiService = EkipiService;
        this.sezoniId = "superliga";
        this.ekipiId = "vllaznia";
      }

      ngOnInit() {
        this.loadEkipi();
      }

      loadEkipi() {
        this.EkipiService.getAllEkipi(this.sezoniId, this.ekipiId).subscribe(EkipiList => {
          this.ekipi = EkipiList;
          console.log(this.ekipi);
        });
      }

    };

    EkipiPage.ctorParameters = () => [{
      type: _api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"]
    }];

    EkipiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ekipi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ekipi.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ekipi/ekipi.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ekipi.page.scss */
      "./src/app/ekipi/ekipi.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"]])], EkipiPage);
    /***/
  }
}]);
//# sourceMappingURL=ekipi-ekipi-module-es5.js.map