(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-detail-news-detail-module"],{

/***/ "./node_modules/@ionic-native/social-sharing/ngx/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic-native/social-sharing/ngx/index.js ***!
  \****************************************************************/
/*! exports provided: SocialSharing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSharing", function() { return SocialSharing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SocialSharing = /** @class */ (function (_super) {
    __extends(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharing.prototype.share = function (message, subject, file, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharing.prototype.shareWithOptions = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaInstagram = function (message, image) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareViaEmail = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharing.pluginName = "SocialSharing";
    SocialSharing.plugin = "cordova-plugin-x-socialsharing";
    SocialSharing.pluginRef = "plugins.socialsharing";
    SocialSharing.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharing.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
    SocialSharing = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SocialSharing);
    return SocialSharing;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NvY2lhbC1zaGFyaW5nL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdDckMsaUNBQWlCOzs7O0lBYWxELDZCQUFLLGFBQ0gsT0FBZ0IsRUFDaEIsT0FBZ0IsRUFDaEIsSUFBd0IsRUFDeEIsR0FBWTtJQWFkLHdDQUFnQixhQUFDLE9BTWhCO0lBa0JELG1DQUFXLGFBQ1QsT0FBZSxFQUNmLE9BQWdCLEVBQ2hCLE9BQWdCLEVBQ2hCLEtBQWMsRUFDZCxHQUFZO0lBaUJkLHVDQUFlLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0lBZ0I3RCx3Q0FBZ0IsYUFDZCxPQUFlLEVBQ2YsS0FBYyxFQUNkLEdBQVk7SUFrQmQsNERBQW9DLGFBQ2xDLE9BQWUsRUFDZixLQUFjLEVBQ2QsR0FBWSxFQUNaLGdCQUF5QjtJQWMzQix5Q0FBaUIsYUFBQyxPQUFlLEVBQUUsS0FBYTtJQWdCaEQsd0NBQWdCLGFBQ2QsT0FBZSxFQUNmLEtBQWMsRUFDZCxHQUFZO0lBa0JkLGtEQUEwQixhQUN4QixRQUFnQixFQUNoQixPQUFlLEVBQ2YsS0FBYyxFQUNkLEdBQVk7SUFjZCxtQ0FBVyxhQUFDLE1BQWMsRUFBRSxXQUFtQjtJQVcvQyx3Q0FBZ0I7SUFtQmhCLHFDQUFhLGFBQ1gsT0FBZSxFQUNmLE9BQWUsRUFDZixFQUFZLEVBQ1osRUFBYSxFQUNiLEdBQWMsRUFDZCxLQUF5QjtJQW1CM0IsZ0NBQVEsYUFDTixPQUFlLEVBQ2YsT0FBZSxFQUNmLE9BQWdCLEVBQ2hCLEtBQWMsRUFDZCxHQUFZO0lBYWQsK0NBQXVCLGFBQUMsWUFBb0I7SUFVNUMsd0NBQWdCLGFBQUMsZUFBa0M7Ozs7OztJQTdReEMsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQXpDMUI7RUF5Q21DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU29jaWFsIFNoYXJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogU2hhcmUgdGV4dCwgZmlsZXMsIGltYWdlcywgYW5kIGxpbmtzIHZpYSBzb2NpYWwgbmV0d29ya3MsIHNtcywgYW5kIGVtYWlsLlxuICpcbiAqIEZvciBCcm93c2VyIHVzYWdlIGNoZWNrIG91dCB0aGUgV2ViIFNoYXJlIEFQSSBkb2NzOiBodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4jNS13ZWItc2hhcmUtYXBpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTb2NpYWxTaGFyaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zb2NpYWwtc2hhcmluZy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc29jaWFsU2hhcmluZzogU29jaWFsU2hhcmluZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gQ2hlY2sgaWYgc2hhcmluZyB2aWEgZW1haWwgaXMgc3VwcG9ydGVkXG4gKiB0aGlzLnNvY2lhbFNoYXJpbmcuY2FuU2hhcmVWaWFFbWFpbCgpLnRoZW4oKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBwb3NzaWJsZVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBub3QgcG9zc2libGVcbiAqIH0pO1xuICpcbiAqIC8vIFNoYXJlIHZpYSBlbWFpbFxuICogdGhpcy5zb2NpYWxTaGFyaW5nLnNoYXJlVmlhRW1haWwoJ0JvZHknLCAnU3ViamVjdCcsIFsncmVjaXBpZW50QGV4YW1wbGUub3JnJ10pLnRoZW4oKCkgPT4ge1xuICogICAvLyBTdWNjZXNzIVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBFcnJvciFcbiAqIH0pO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU29jaWFsU2hhcmluZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXgtc29jaWFsc2hhcmluZycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc29jaWFsc2hhcmluZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTaGFyaW5nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hhcmVzIHVzaW5nIHRoZSBzaGFyZSBzaGVldFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBUaGUgbWVzc2FnZSB5b3Ugd291bGQgbGlrZSB0byBzaGFyZS5cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ30gVGhlIHN1YmplY3RcbiAgICogQHBhcmFtIGZpbGUge3N0cmluZ3xzdHJpbmdbXX0gVVJMKHMpIHRvIGZpbGUocykgb3IgaW1hZ2UocyksIGxvY2FsIHBhdGgocykgdG8gZmlsZShzKSBvciBpbWFnZShzKSwgb3IgYmFzZTY0IGRhdGEgb2YgYW4gaW1hZ2UuIE9ubHkgdGhlIGZpcnN0IGZpbGUvaW1hZ2Ugd2lsbCBiZSB1c2VkIG9uIFdpbmRvd3MgUGhvbmUuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gQSBVUkwgdG8gc2hhcmVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNVxuICB9KVxuICBzaGFyZShcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHN1YmplY3Q/OiBzdHJpbmcsXG4gICAgZmlsZT86IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIHVybD86IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgdXNpbmcgdGhlIHNoYXJlIHNoZWV0IHdpdGggYWRkaXRpb25hbCBvcHRpb25zIGFuZCByZXR1cm5zIGEgcmVzdWx0IG9iamVjdCBvciBhbiBlcnJvciBtZXNzYWdlIChyZXF1aXJlcyBwbHVnaW4gdmVyc2lvbiA1LjEuMCspXG4gICAqIEBwYXJhbSBvcHRpb25zIHtvYmplY3R9IFRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBtZXNzYWdlLCBzdWJqZWN0LCBmaWxlcywgdXJsIGFuZCBjaG9vc2VyVGl0bGUgcHJvcGVydGllcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBzaGFyZVdpdGhPcHRpb25zKG9wdGlvbnM6IHtcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xuICAgIHN1YmplY3Q/OiBzdHJpbmc7XG4gICAgZmlsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgY2hvb3NlclRpdGxlPzogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHlvdSBjYW4gc2hhcmUgdmlhIGEgc3BlY2lmaWMgYXBwLlxuICAgKiBAcGFyYW0gYXBwTmFtZSB7c3RyaW5nfSBBcHAgbmFtZSBvciBwYWNrYWdlIG5hbWUuIEV4YW1wbGVzOiBpbnN0YWdyYW0gb3IgY29tLmFwcGxlLnNvY2lhbC5mYWNlYm9va1xuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc3ViamVjdCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNSxcbiAgICBlcnJvckluZGV4OiA2LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIGNhblNoYXJlVmlhKFxuICAgIGFwcE5hbWU6IHN0cmluZyxcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHN1YmplY3Q/OiBzdHJpbmcsXG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdXJsPzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBUd2l0dGVyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgc2hhcmVWaWFUd2l0dGVyKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBGYWNlYm9va1xuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIHNoYXJlVmlhRmFjZWJvb2soXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2sgd2l0aCBhIHBhc3RlIG1lc3NhZ2UgaGludFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gcGFzdGVNZXNzYWdlSGludCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIHNoYXJlVmlhRmFjZWJvb2tXaXRoUGFzdGVNZXNzYWdlSGludChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdXJsPzogc3RyaW5nLFxuICAgIHBhc3RlTWVzc2FnZUhpbnQ/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIEluc3RhZ3JhbVxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBzaGFyZVZpYUluc3RhZ3JhbShtZXNzYWdlOiBzdHJpbmcsIGltYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gV2hhdHNBcHBcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBpbWFnZT86IHN0cmluZyxcbiAgICB1cmw/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIGEgV2hhdHNBcHAgQ29udGFjdFxuICAgKiBAcGFyYW0gcmVjZWl2ZXIge3N0cmluZ30gUGFzcyBwaG9uZSBudW1iZXIgb24gQW5kcm9pZCwgYW5kIEFkZHJlc3Nib29rIElEIChhYmlkKSBvbiBpT1NcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfSBJbWFnZSB0byBzZW5kIChkb2VzIG5vdCB3b3JrIG9uIGlPU1xuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IExpbmsgdG8gc2VuZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHBUb1JlY2VpdmVyKFxuICAgIHJlY2VpdmVyOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSB2aWEgU01TXG4gICAqIEBwYXJhbSBtZXNzZ2Uge3N0cmluZ30gbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciB7c3RyaW5nfSBOdW1iZXIgb3IgbXVsdGlwbGUgbnVtYmVycyBzZXBlcmF0ZWQgYnkgY29tbWFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgc2hhcmVWaWFTTVMobWVzc2dlOiBzdHJpbmcsIHBob25lTnVtYmVyOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgeW91IGNhbiBzaGFyZSB2aWEgZW1haWxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBjYW5TaGFyZVZpYUVtYWlsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBFbWFpbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc3ViamVjdCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdG8ge3N0cmluZ1tdfVxuICAgKiBAcGFyYW0gY2Mge3N0cmluZ1tdfSBPcHRpb25hbFxuICAgKiBAcGFyYW0gYmNjIHtzdHJpbmdbXX0gT3B0aW9uYWxcbiAgICogQHBhcmFtIGZpbGVzIHtzdHJpbmd8c3RyaW5nW119IE9wdGlvbmFsIFVSTCBvciBsb2NhbCBwYXRoIHRvIGZpbGUocykgdG8gYXR0YWNoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gICAgc3VjY2Vzc0luZGV4OiA2LFxuICAgIGVycm9ySW5kZXg6IDdcbiAgfSlcbiAgc2hhcmVWaWFFbWFpbChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgc3ViamVjdDogc3RyaW5nLFxuICAgIHRvOiBzdHJpbmdbXSxcbiAgICBjYz86IHN0cmluZ1tdLFxuICAgIGJjYz86IHN0cmluZ1tdLFxuICAgIGZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW11cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIEFwcE5hbWVcbiAgICogQHBhcmFtIGFwcE5hbWUge3N0cmluZ30gQXBwIG5hbWUgb3IgcGFja2FnZSBuYW1lLiBFeGFtcGxlczogaW5zdGFncmFtIG9yIGNvbS5hcHBsZS5zb2NpYWwuZmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDUsXG4gICAgZXJyb3JJbmRleDogNixcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBzaGFyZVZpYShcbiAgICBhcHBOYW1lOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN1YmplY3Q/OiBzdHJpbmcsXG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdXJsPzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlZmluZXMgdGhlIHBvcHVwIHBvc2l0aW9uIGJlZm9yZSBjYWxsIHRoZSBzaGFyZSBtZXRob2QuXG4gICAqIEBwYXJhbSB0YXJnZXRCb3VuZHMge3N0cmluZ30gbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgfSlcbiAgc2V0SVBhZFBvcHVwQ29vcmRpbmF0ZXModGFyZ2V0Qm91bmRzOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNhdmUgYW4gYXJyYXkgb2YgaW1hZ2VzIHRvIHRoZSBjYW1lcmEgcm9sbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd8c3RyaW5nW119IGZpbGVPckZpbGVBcnJheSBTaW5nbGUgb3IgbXVsdGlwbGUgZmlsZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55PiB9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIHNhdmVUb1Bob3RvQWxidW0oZmlsZU9yRmlsZUFycmF5OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/news-detail/news-detail.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/news-detail/news-detail.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        {{ title }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"!isLoaded\">\n        <ion-skeleton-text no-animated style=\"height: 250px\"></ion-skeleton-text>\n        <ion-card class=\"ion-no-margin\"> \n            <ion-card-header>      \n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n            </ion-card-header>\n            <ion-item color=\"secondary\">\n                <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n                <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n                <ion-button fill=\"outline\" slot=\"end\">Share</ion-button>\n            </ion-item>\n          \n            <ion-card-content>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n            </ion-card-content>\n        </ion-card> \n    \n      </div>\n<div *ngIf=\"isLoaded\">\n<ion-img [src]=\"imgsrc\"></ion-img>\n<ion-card class=\"ion-no-margin\"> \n    <ion-card-header>      \n      <ion-card-title color=\"primary\">{{ title }}</ion-card-title>\n      <ion-card-subtitle color=\"secondary\">{{ summary }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-item color=\"secondary\">\n        <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n        <ion-label>{{ data }}</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\" (click)=\"shareNews()\">Share</ion-button>\n    </ion-item>\n  \n    <ion-card-content>\n      <div [innerHtml]=\"article\"></div>\n    </ion-card-content>\n</ion-card>   \n</div>     \n</ion-content>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-detail.page */ "./src/app/news-detail/news-detail.page.ts");







const routes = [
    {
        path: '',
        component: _news_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewsDetailPage"]
    }
];
let NewsDetailPageModule = class NewsDetailPageModule {
};
NewsDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_news_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewsDetailPage"]]
    })
], NewsDetailPageModule);



/***/ }),

/***/ "./src/app/news-detail/news-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/news-detail/news-detail.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29zYm94ZXMvdmxsYXpuaWEvc3JjL2FwcC9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFTLGdCQUFBO0FDQ1QiLCJmaWxlIjoic3JjL2FwcC9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jYXJke2JvcmRlci1yYWRpdXM6IDA7fVxuIiwiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xufSJdfQ== */"

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
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");





let NewsDetailPage = class NewsDetailPage {
    constructor(NewsService, activatedRoute, socialSharing) {
        this.NewsService = NewsService;
        this.activatedRoute = activatedRoute;
        this.socialSharing = socialSharing;
        this.isLoaded = false;
    }
    loadInfoNews() {
        this.NewsService.getInfoNews(this.newsId).subscribe(news => {
            this.news = news;
            this.title = this.news[0].title;
            this.imgsrc = "http://www.fkvllaznia.net/main/vllaznia/_files/newspublish/" + this.news[0].image;
            this.summary = this.news[0].summary;
            this.data = this.news[0].data;
            this.article = this.news[0].content;
            this.isLoaded = true;
        });
    }
    shareNews() {
        this.socialSharing.share('Lexo lajmin per Vllaznine', this.title, this.imgsrc, 'http://www.fkvllaznia.com/lajme/' + this.newsId + '-mobile.html').then(() => {
            console.log("shared OK");
        }).catch(() => {
            console.log("error on shared");
        });
    }
    ngOnInit() {
        this.newsId = this.activatedRoute.snapshot.paramMap.get('id');
        this.loadInfoNews();
        //this.isLoaded = true;
    }
};
NewsDetailPage.ctorParameters = () => [
    { type: _api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"] }
];
NewsDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-detail',
        template: __webpack_require__(/*! raw-loader!./news-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/news-detail/news-detail.page.html"),
        styles: [__webpack_require__(/*! ./news-detail.page.scss */ "./src/app/news-detail/news-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_vllaznia_service__WEBPACK_IMPORTED_MODULE_2__["VllazniaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"]])
], NewsDetailPage);



/***/ })

}]);
//# sourceMappingURL=news-detail-news-detail-module-es2015.js.map