(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n\n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/targets\">Targets</a>\n</nav>\n\n<router-outlet></router-outlet>\n\n<!-- <app-targets></app-targets> -->\n<!--// no longer needed because the app will only display the TargetsComponent when the user navigates to it-->\n<app-messages></app-messages>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Targets</h3>\n<div class=\"grid grid-pad\">\n  <a\n    *ngFor=\"let target of targets\"\n    class=\"col-1-4\"\n    routerLink=\"/detail/{{ target.id }}\"\n  >\n    <div class=\"module target\">\n      <h4>{{ target.companyName }}</h4>\n      <!-- <h4>{{ target.acquisitionStatus }}</h4> -->\n    </div>\n  </a>\n</div>\n\n<app-target-search></app-target-search>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages/messages.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n  <h2>Messages</h2>\n  <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor=\"let message of messageService.messages\">{{ message }}</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/target-detail/target-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/target-detail/target-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>target-detail workssss!</p> -->\n\n<!-- <div *ngIf=\"selectedTarget\">\n  <h2>{{ selectedTarget.companyName | uppercase }} Details</h2>\n  <div>\n    <span>Acquisition Status: </span>{{ selectedTarget.acquisitionStatus }}\n  </div>\n  <div>\n    <label\n      >name:\n      <input [(ngModel)]=\"selectedTarget.companyName\" placeholder=\"name\" />\n    </label>\n  </div>\n</div> -->\n\n<button (click)=\"goBack()\">go back</button>\n\n<div *ngIf=\"target\">\n  <h2>{{ target.companyName | uppercase }} Details</h2>\n  <div>\n    <!-- <span>Acquisition Status: </span>{{ <selectedTarget.acquisitionStatus }} -->\n  </div>\n  <div>\n    <div>\n      name:\n      <input [(ngModel)]=\"target.companyName\" placeholder=\"name\" />\n    </div>\n    <div>\n      status:\n      <input\n        [(ngModel)]=\"target.acquisitionStatus\"\n        placeholder=\"acquisition status\"\n      />\n    </div>\n    <div>\n      industry:\n      <input [(ngModel)]=\"target.industry\" placeholder=\"industry\" />\n    </div>\n    <div>\n      profitability:\n      <input [(ngModel)]=\"target.profitability\" placeholder=\"profitability\" />\n    </div>\n    <div>\n      growth:\n      <input [(ngModel)]=\"target.growth\" placeholder=\"growth\" />\n    </div>\n    <div>\n      valuation:\n      <input [(ngModel)]=\"target.valuation\" placeholder=\"valuation\" />\n    </div>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n  <button (click)=\"save()\">save</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/target-search/target-search.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/target-search/target-search.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4><label for=\"search-box\">Target Search</label></h4>\n  <input\n    #searchBox\n    id=\"search-box\"\n    (input)=\"search(searchBox.value)\"\n    placeholder=\" -- search for company -- \"\n  />\n\n  <ul class=\"search-result\">\n    <!-- targets$ is an observable, not an array -->\n    <li *ngFor=\"let target of targets$ | async\">\n      <a routerLink=\"/detail/{{ target.id }}\">\n        {{ target.companyName }}\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/targets/targets.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/targets/targets.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul class=\"targets\">\n  <li\n    *ngFor=\"let target of targets\"\n    [class.selected]=\"target === selectedTarget\"\n    (click)=\"onSelect(target)\"\n  >\n    <span class=\"badge\">{{ target.companyName }}</span>\n  </li>\n</ul>\n\n<!-- <div *ngIf=\"selectedTarget\">\n  <h2>{{ selectedTarget.name | uppercase }} Details</h2>\n  <div><span>id: </span>{{ selectedHero.id }}</div>\n  <div>\n    <label\n      >name:\n      <input [(ngModel)]=\"selectedTarget.companyName\" placeholder=\"name\" />\n    </label>\n  </div>\n</div> -->\n<!-- \n<app-target-detail [target]=\"selectedTarget\"></app-target-detail> -->\n\n<h2>Company Targets</h2>\n\n<div>\n  <span\n    >Company name:\n    <input #targetName placeholder=\" ...search for company... \" />\n  </span>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <!-- In response to a click event, call the component's click handler, add(), and then clear the input field so that it's ready for another name -->\n  <button (click)=\"add(targetName.value); targetName.value = ''\">\n    add\n  </button>\n</div>\n\n<ul class=\"targets\">\n  <li *ngFor=\"let target of targets\">\n    <a routerLink=\"/detail/{{ target.id }}\">\n      <span class=\"badge\">{{ target.id }}</span>\n      <span>\n        {{\n          target.companyName.length > 22\n            ? (target.companyName | slice: 0:22) + \"...\"\n            : target.companyName\n        }}\n      </span>\n    </a>\n    <button class=\"delete\" title=\"delete target\" (click)=\"delete(target)\">\n      X\n    </button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _target_detail_target_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target-detail/target-detail.component */ "./src/app/target-detail/target-detail.component.ts");
/* harmony import */ var _targets_targets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./targets/targets.component */ "./src/app/targets/targets.component.ts");






const routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: "detail/:id", component: _target_detail_target_detail_component__WEBPACK_IMPORTED_MODULE_4__["TargetDetailComponent"] },
    { path: "targets", component: _targets_targets_component__WEBPACK_IMPORTED_MODULE_5__["TargetsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 1.2em;\n  margin-bottom: 0;\n}\n\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\n\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\n\nnav a:visited {\n  color: #334953;\n}\n\na:link {\n  color: #334953;\n}\n\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\n\nnav a.active {\n  color: #039be5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWVoL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL2lDbG91ZCBEcml2ZS9EZXNrdG9wL2NvZGluZ1Byb2plY3RzL2luU2l0ZW4tY29kaW5nLXByb2plY3QvQW5ndWxhcjctQ29kaW5nLUNoYWxsZW5nZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURBRTtFQUNFLGNBQUE7QUNFSjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURHRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREVFO0VBQ0UsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogIzMzNDk1MztcbiAgfVxufVxuXG5hOmxpbmsge1xuICBjb2xvcjogIzMzNDk1Mztcbn1cblxubmF2IGEge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogIzAzOWJlNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAzOWJlNTtcbiAgfVxufVxuIiwiaDEge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzMzNDk1Mztcbn1cblxuYTpsaW5rIHtcbiAgY29sb3I6ICMzMzQ5NTM7XG59XG5cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogIzAzOWJlNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'CRUD-targets-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _targets_targets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./targets/targets.component */ "./src/app/targets/targets.component.ts");
/* harmony import */ var _target_detail_target_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./target-detail/target-detail.component */ "./src/app/target-detail/target-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _target_search_target_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./target-search/target-search.component */ "./src/app/target-search/target-search.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");













 // simulates a data server



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _targets_targets_component__WEBPACK_IMPORTED_MODULE_6__["TargetsComponent"],
            _target_detail_target_detail_component__WEBPACK_IMPORTED_MODULE_7__["TargetDetailComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _target_search_target_search_component__WEBPACK_IMPORTED_MODULE_13__["TargetSearchComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_12__["InMemoryDataService"], {
                dataEncapsulation: false
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*=col-] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*=col-]:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n* {\n  box-sizing: border-box;\n}\n*:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4 {\n  position: center;\n  text-align: center;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 15px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607d8b;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*=col-]:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px;\n  }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n\n  .module {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWVoL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL2lDbG91ZCBEcml2ZS9EZXNrdG9wL2NvZGluZ1Byb2plY3RzL2luU2l0ZW4tY29kaW5nLXByb2plY3QvQW5ndWxhcjctQ29kaW5nLUNoYWxsZW5nZS9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQUU7RUFDRSxnQkFBQTtBQ0VKO0FERUE7RUFDRSxxQkFBQTtBQ0NGO0FERUE7RUFHRSxzQkFBQTtBQ0NGO0FEQUU7RUFJRSxzQkFBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0UsU0FBQTtBQ0FGO0FER0E7RUFDRSxVQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FEQ0U7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7QURHQTtFQUNFLGVBQUE7QUNBRjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBREdBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTtJQUNFLFNBQUE7RUNERjs7RURHQTtJQUNFLGVBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICY6YWZ0ZXIsXG4gICY6YmVmb3JlIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmg0IHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbC0xLTQge1xuICB3aWR0aDogMjUlO1xufVxuXG4ubW9kdWxlIHtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlZTtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM2MDdkOGI7XG4gIH1cbn1cblxuLmdyaWQtcGFkIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICA+IFtjbGFzcyo9XCJjb2wtXCJdOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vZHVsZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufVxuIiwiW2NsYXNzKj1jb2wtXSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbltjbGFzcyo9Y29sLV06bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjphZnRlciwgKjpiZWZvcmUge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmg0IHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbC0xLTQge1xuICB3aWR0aDogMjUlO1xufVxuXG4ubW9kdWxlIHtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlZTtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5tb2R1bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuXG4uZ3JpZC1wYWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZ3JpZC1wYWQgPiBbY2xhc3MqPWNvbC1dOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kdWxlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLm1vZHVsZSB7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _target_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../target.service */ "./src/app/target.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(targetService) {
        this.targetService = targetService;
        this.targets = [];
    }
    ngOnInit() {
        this.getTargets();
    }
    getTargets() {
        this.targetService
            .getTargets()
            .subscribe(targets => (this.targets = targets.slice(0, 4)));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _target_service__WEBPACK_IMPORTED_MODULE_2__["TargetService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InMemoryDataService = class InMemoryDataService {
    createDb() {
        const targets = [
            {
                id: 0,
                acquisitionStatus: "researching",
                industry: "Electronics",
                companyName: "Champ Lexington",
                companyAddress: "7663 Parklake Street",
                companySize: 863,
                ceo: "Margaret Chinchharni",
                cfo: "Sheverly Williamsons",
                cto: "Tanner Brightside",
                liquidity: 99,
                profitability: 82,
                growth: 96,
                valuation: 94.61
            },
            {
                id: 1,
                acquisitionStatus: "researching",
                industry: "Capital Goods",
                companyName: "Emmerich, Hand and Wisozk",
                companyAddress: "0112 Rutledge Crossing",
                companySize: 180,
                ceo: "Thebault Fredson",
                cfo: "Joscelin Dreschler",
                cto: "Benoit Crudgington",
                liquidity: 49,
                profitability: 90,
                growth: 24,
                valuation: 3.27
            },
            {
                id: 2,
                acquisitionStatus: "approved",
                industry: "Manufacturing",
                companyName: "Johns-Hamill",
                companyAddress: "9 Macpherson Alley",
                companySize: 16391,
                ceo: "Seth Whannel",
                cfo: "Marjy Eadmead",
                cto: "Hatty Hampe",
                liquidity: 60,
                profitability: 11,
                growth: 55,
                valuation: 93.02
            },
            {
                id: 3,
                acquisitionStatus: "researching",
                industry: "Finance",
                companyName: "Dicki, Ortiz and Hahn",
                companyAddress: "9343 Hanson Junction",
                companySize: 19916,
                ceo: "Tressa Easseby",
                cfo: "Deva Thebes",
                cto: "Karolina Lemarie",
                liquidity: 98,
                profitability: 62,
                growth: 50,
                valuation: 4.11
            },
            {
                id: 4,
                acquisitionStatus: "pending approval",
                industry: "Manufacturing",
                companyName: "Moore, Konopelski and Kovacek",
                companyAddress: "2 Nova Way",
                companySize: 15658,
                ceo: "Jaime Penberthy",
                cfo: "Lira Birckmann",
                cto: "Jacky Durman",
                liquidity: 56,
                profitability: 4,
                growth: 32,
                valuation: 434.22
            },
            {
                id: 5,
                acquisitionStatus: "researching",
                industry: "Health Care",
                companyName: "Goyette-Stehr",
                companyAddress: "372 Lake View Way",
                companySize: 17312,
                ceo: "Nadeen Wisbey",
                cfo: "Duane Ferraretto",
                cto: "Pegeen Mapplethorpe",
                liquidity: 19,
                profitability: 44,
                growth: 17,
                valuation: 11.27
            },
            {
                id: 6,
                acquisitionStatus: "researching",
                industry: "Health Care",
                companyName: "Jacobi-Effertz",
                companyAddress: "5826 Fordem Drive",
                companySize: 5678,
                ceo: "Ernest Logg",
                cfo: "Sigismond Normaville",
                cto: "Ryon Tolomio",
                liquidity: 36,
                profitability: 87,
                growth: 97,
                valuation: 103.1
            },
            {
                id: 7,
                acquisitionStatus: "researching",
                industry: "Capital Goods",
                companyName: "Halvorson LLC",
                companyAddress: "09480 Sunbrook Way",
                companySize: 17651,
                ceo: "Rebe Kellington",
                cfo: "Nari Feragh",
                cto: "Stefa Simecek",
                liquidity: 85,
                profitability: 13,
                growth: 87,
                valuation: 9.66
            },
            {
                id: 8,
                acquisitionStatus: "approved",
                industry: "Consumer Services",
                companyName: "Boyle, Rau and Hudson",
                companyAddress: "880 Meadow Ridge Center",
                companySize: 17717,
                ceo: "Rob Andre",
                cfo: "Conroy Hendriks",
                cto: "Dicky Clemmey",
                liquidity: 96,
                profitability: 3,
                growth: 30,
                valuation: 16.58
            },
            {
                id: 9,
                acquisitionStatus: "pending approval",
                industry: "Finance",
                companyName: "Lubowitz and Sons",
                companyAddress: "553 Fremont Road",
                companySize: 12482,
                ceo: "Cristina Thowless",
                cfo: "Koral Stoddard",
                cto: "Elena Fist",
                liquidity: 86,
                profitability: 41,
                growth: 72,
                valuation: 6.19
            },
            {
                id: 10,
                acquisitionStatus: "declined",
                industry: "Public Utilities",
                companyName: "Powlowski, Boehm and Veum",
                companyAddress: "51 John Wall Plaza",
                companySize: 1731,
                ceo: "Fernando Doogan",
                cfo: "Brew Haysar",
                cto: "Laird Janew",
                liquidity: 34,
                profitability: 38,
                growth: 17,
                valuation: 1.64
            },
            {
                id: 11,
                acquisitionStatus: "pending approval",
                industry: "Finance",
                companyName: "Kunde, Brown and Rowe",
                companyAddress: "688 American Ash Plaza",
                companySize: 11929,
                ceo: "Wilmar Tyer",
                cfo: "Florian Abrahams",
                cto: "Terrill Fley",
                liquidity: 66,
                profitability: 65,
                growth: 48,
                valuation: 666.52
            },
            {
                id: 12,
                acquisitionStatus: "pending approval",
                industry: "Health Care",
                companyName: "Dietrich, Ledner and Grant",
                companyAddress: "2 Magdeline Pass",
                companySize: 1349,
                ceo: "Dorris Culver",
                cfo: "Wade Fillan",
                cto: "Clemens Ruddock",
                liquidity: 83,
                profitability: 58,
                growth: 89,
                valuation: 38.16
            },
            {
                id: 13,
                acquisitionStatus: "approved",
                industry: "Manufacturing",
                companyName: "Heller Inc",
                companyAddress: "54512 Browning Drive",
                companySize: 733,
                ceo: "Ashbey Yesenin",
                cfo: "Noble Stobbs",
                cto: "Gipsy Smoughton",
                liquidity: 57,
                profitability: 44,
                growth: 84,
                valuation: 61.57
            },
            {
                id: 14,
                acquisitionStatus: "declined",
                industry: "Public Utilities",
                companyName: "Brown LLC",
                companyAddress: "43187 Oakridge Alley",
                companySize: 12020,
                ceo: "Ashil Renak",
                cfo: "Ansel Fredson",
                cto: "Lionello Van den Bosch",
                liquidity: 56,
                profitability: 61,
                growth: 99,
                valuation: 3.49
            },
            {
                id: 15,
                acquisitionStatus: "pending approval",
                industry: "Energy",
                companyName: "Schowalter, Bosco and Fahey",
                companyAddress: "1808 Onsgard Street",
                companySize: 8386,
                ceo: "Lizzie Eilers",
                cfo: "Amber Bulbeck",
                cto: "Emmalynne Wrankling",
                liquidity: 28,
                profitability: 96,
                growth: 92,
                valuation: 39.11
            },
            {
                id: 16,
                acquisitionStatus: "declined",
                industry: "Consumer Services",
                companyName: "Cruickshank-Koepp",
                companyAddress: "47576 Darwin Court",
                companySize: 12355,
                ceo: "Ema O'Sheerin",
                cfo: "Lief Tyson",
                cto: "Cordey McGonagle",
                liquidity: 25,
                profitability: 69,
                growth: 91,
                valuation: 1.78
            },
            {
                id: 17,
                acquisitionStatus: "approved",
                industry: "Consumer Durables",
                companyName: "Koch-Schroeder",
                companyAddress: "3249 Iowa Crossing",
                companySize: 9127,
                ceo: "Kory Bellson",
                cfo: "Cass Nerney",
                cto: "Ezra Radband",
                liquidity: 3,
                profitability: 1,
                growth: 3,
                valuation: 1.51
            },
            {
                id: 18,
                acquisitionStatus: "declined",
                industry: "Basic Industries",
                companyName: "Nicolas LLC",
                companyAddress: "206 Waywood Park",
                companySize: 6338,
                ceo: "Rosa Grimshaw",
                cfo: "Danila Pether",
                cto: "Marabel Hobell",
                liquidity: 29,
                profitability: 56,
                growth: 66,
                valuation: 1.44
            },
            {
                id: 19,
                acquisitionStatus: "pending approval",
                industry: "Capital Goods",
                companyName: "Welch Inc",
                companyAddress: "1121 Village Trail",
                companySize: 15465,
                ceo: "Ulrika Peaseman",
                cfo: "Wenonah Grindell",
                cto: "Boniface Girodias",
                liquidity: 70,
                profitability: 87,
                growth: 79,
                valuation: 15.8
            },
            {
                id: 20,
                acquisitionStatus: "researching",
                industry: "Finance",
                companyName: "Jones Group",
                companyAddress: "42549 Grayhawk Crossing",
                companySize: 4715,
                ceo: "Rance Scain",
                cfo: "Perice Whybray",
                cto: "Jacqui Dallaghan",
                liquidity: 79,
                profitability: 100,
                growth: 7,
                valuation: 71.3
            },
            {
                id: 21,
                acquisitionStatus: "pending approval",
                industry: "Finance",
                companyName: "Adams-Walter",
                companyAddress: "36 John Wall Crossing",
                companySize: 14366,
                ceo: "Killy Readhead",
                cfo: "Erl Trase",
                cto: "Arney Bau",
                liquidity: 67,
                profitability: 69,
                growth: 37,
                valuation: 3.07
            },
            {
                id: 22,
                acquisitionStatus: "researching",
                industry: "Health Care",
                companyName: "Schinner, Lang and Kris",
                companyAddress: "7117 Main Drive",
                companySize: 11474,
                ceo: "Dee Guitel",
                cfo: "Gardener Benyon",
                cto: "Tammy Johns",
                liquidity: 76,
                profitability: 69,
                growth: 15,
                valuation: 1.54
            },
            {
                id: 23,
                acquisitionStatus: "researching",
                industry: "Consumer Services",
                companyName: "Ullrich-Rogahn",
                companyAddress: "66029 Ludington Court",
                companySize: 2748,
                ceo: "Ellsworth Nesterov",
                cfo: "Haily Newbatt",
                cto: "Mack Murrells",
                liquidity: 85,
                profitability: 100,
                growth: 3,
                valuation: 5.04
            },
            {
                id: 24,
                acquisitionStatus: "approved",
                industry: "Capital Goods",
                companyName: "Hamill, Dach and Hoeger",
                companyAddress: "296 Susan Alley",
                companySize: 17130,
                ceo: "Jean Chard",
                cfo: "Alick MacGebenay",
                cto: "Josi Kilbey",
                liquidity: 20,
                profitability: 66,
                growth: 52,
                valuation: 45.14
            },
            {
                id: 25,
                acquisitionStatus: "declined",
                industry: "Finance",
                companyName: "Hills-Balistreri",
                companyAddress: "1 Petterle Junction",
                companySize: 6586,
                ceo: "Phillida Kilbourne",
                cfo: "Emmit Secrett",
                cto: "Marthena Patkin",
                liquidity: 33,
                profitability: 75,
                growth: 46,
                valuation: 34.76
            },
            {
                id: 26,
                acquisitionStatus: "declined",
                industry: "Manufacturing",
                companyName: "Toy-Baumbach",
                companyAddress: "07291 Norway Maple Hill",
                companySize: 10932,
                ceo: "Zollie Garnsworth",
                cfo: "Janessa Panswick",
                cto: "Cirillo Skayman",
                liquidity: 64,
                profitability: 48,
                growth: 16,
                valuation: 3.87
            },
            {
                id: 27,
                acquisitionStatus: "pending approval",
                industry: "Transportation",
                companyName: "Bailey LLC",
                companyAddress: "98170 Rieder Park",
                companySize: 3111,
                ceo: "Aron Keam",
                cfo: "Min Grzegorecki",
                cto: "Rafaelita Bothwell",
                liquidity: 78,
                profitability: 23,
                growth: 48,
                valuation: 4.18
            },
            {
                id: 28,
                acquisitionStatus: "pending approval",
                industry: "Consumer Services",
                companyName: "Gutmann-Mertz",
                companyAddress: "488 Surrey Alley",
                companySize: 16193,
                ceo: "Leroy Marskell",
                cfo: "Dalis Kenion",
                cto: "Natty Stuttard",
                liquidity: 12,
                profitability: 71,
                growth: 49,
                valuation: 3.5
            },
            {
                id: 29,
                acquisitionStatus: "approved",
                industry: "Consumer Non-Durables",
                companyName: "Powlowski-Reichel",
                companyAddress: "171 Basil Alley",
                companySize: 12148,
                ceo: "Vivia Niland",
                cfo: "Trueman Yurtsev",
                cto: "Trude Barnes",
                liquidity: 31,
                profitability: 57,
                growth: 65,
                valuation: 7.24
            },
            {
                id: 30,
                acquisitionStatus: "researching",
                industry: "Finance",
                companyName: "O'Keefe-Heathcote",
                companyAddress: "5161 Kennedy Court",
                companySize: 6272,
                ceo: "Dionysus Aldcorne",
                cfo: "Othello Clutterham",
                cto: "Solly Croser",
                liquidity: 62,
                profitability: 24,
                growth: 92,
                valuation: 114.75
            },
            {
                id: 31,
                acquisitionStatus: "approved",
                industry: "Manufacturing",
                companyName: "Morar-Hahn",
                companyAddress: "72208 Transport Point",
                companySize: 16832,
                ceo: "Sonni Maddicks",
                cfo: "Teodoor Tapley",
                cto: "Jareb Thairs",
                liquidity: 33,
                profitability: 73,
                growth: 37,
                valuation: 180.01
            },
            {
                id: 32,
                acquisitionStatus: "declined",
                industry: "Health Care",
                companyName: "Ferry-Gleason",
                companyAddress: "95 Dixon Trail",
                companySize: 10313,
                ceo: "Massimiliano McDonell",
                cfo: "Lorne Brealey",
                cto: "Timoteo Maunton",
                liquidity: 34,
                profitability: 17,
                growth: 24,
                valuation: 23.56
            },
            {
                id: 33,
                acquisitionStatus: "researching",
                industry: "Technology",
                companyName: "Tillman and Sons",
                companyAddress: "60 Nova Lane",
                companySize: 4253,
                ceo: "Issy Gluyas",
                cfo: "Harwilll Naismith",
                cto: "Mariann Brandin",
                liquidity: 100,
                profitability: 13,
                growth: 37,
                valuation: 814.69
            },
            {
                id: 34,
                acquisitionStatus: "approved",
                industry: "Capital Goods",
                companyName: "Lang-Champlin",
                companyAddress: "4902 Springview Street",
                companySize: 19809,
                ceo: "Blanche Balharry",
                cfo: "Waverly Dorian",
                cto: "Tanner Hunton",
                liquidity: 97,
                profitability: 70,
                growth: 9,
                valuation: 4.61
            },
            {
                id: 35,
                acquisitionStatus: "approved",
                industry: "Technology",
                companyName: "Satterfield, Prosacco and Mayer",
                companyAddress: "605 Texas Parkway",
                companySize: 1453,
                ceo: "William Bonnet",
                cfo: "Fonz Russen",
                cto: "Happy Bilston",
                liquidity: 99,
                profitability: 91,
                growth: 9,
                valuation: 15.62
            },
            {
                id: 36,
                acquisitionStatus: "declined",
                industry: "Technology",
                companyName: "Rutherford-Tremblay",
                companyAddress: "574 Bartillon Junction",
                companySize: 18310,
                ceo: "Morgana Cremen",
                cfo: "Barri Shore",
                cto: "Lynnet Glentworth",
                liquidity: 65,
                profitability: 74,
                growth: 5,
                valuation: 2.67
            },
            {
                id: 37,
                acquisitionStatus: "declined",
                industry: "Manufacturing",
                companyName: "Beer, Reichert and Bechtelar",
                companyAddress: "103 Warner Lane",
                companySize: 3321,
                ceo: "Jarib Hebard",
                cfo: "Arvin Filipic",
                cto: "Pen Winspar",
                liquidity: 18,
                profitability: 66,
                growth: 35,
                valuation: 19.56
            },
            {
                id: 38,
                acquisitionStatus: "pending approval",
                industry: "Health Care",
                companyName: "Cormier Group",
                companyAddress: "88 Kingsford Way",
                companySize: 19331,
                ceo: "Angie Lipmann",
                cfo: "Rochelle Gummary",
                cto: "Yank Buckley",
                liquidity: 15,
                profitability: 88,
                growth: 37,
                valuation: 3.31
            },
            {
                id: 39,
                acquisitionStatus: "pending approval",
                industry: "Manufacturing",
                companyName: "Sauer, Pollich and Padberg",
                companyAddress: "37392 Banding Circle",
                companySize: 5055,
                ceo: "Ewan Rawson",
                cfo: "Frasier Lorain",
                cto: "Farleigh Keeting",
                liquidity: 81,
                profitability: 75,
                growth: 96,
                valuation: 30.4
            },
            {
                id: 40,
                acquisitionStatus: "declined",
                industry: "Manufacturing",
                companyName: "Strosin, Kassulke and Koepp",
                companyAddress: "3 Merry Trail",
                companySize: 16116,
                ceo: "Myrwyn Roofe",
                cfo: "Michele Pearde",
                cto: "Lorin Pickard",
                liquidity: 96,
                profitability: 56,
                growth: 44,
                valuation: 22.2
            },
            {
                id: 41,
                acquisitionStatus: "researching",
                industry: "Basic Industries",
                companyName: "Olson-Bednar",
                companyAddress: "7770 Farmco Center",
                companySize: 14712,
                ceo: "Ardelis Blanko",
                cfo: "Donny Connechy",
                cto: "Laurene Liverock",
                liquidity: 69,
                profitability: 17,
                growth: 51,
                valuation: 63.24
            },
            {
                id: 42,
                acquisitionStatus: "researching",
                industry: "Energy",
                companyName: "Kuphal, Goldner and Kuhic",
                companyAddress: "18894 Mitchell Alley",
                companySize: 18448,
                ceo: "Freddie Mustill",
                cfo: "Waverley Ryburn",
                cto: "Katharina Kristof",
                liquidity: 27,
                profitability: 63,
                growth: 1,
                valuation: 664.71
            },
            {
                id: 43,
                acquisitionStatus: "approved",
                industry: "Capital Goods",
                companyName: "Roberts, McCullough and D'Amore",
                companyAddress: "37 Ramsey Avenue",
                companySize: 3450,
                ceo: "Sybila Durn",
                cfo: "Case Eneas",
                cto: "Lillian Service",
                liquidity: 65,
                profitability: 85,
                growth: 85,
                valuation: 610.36
            },
            {
                id: 44,
                acquisitionStatus: "pending approval",
                industry: "Finance",
                companyName: "Ankunding-Frami",
                companyAddress: "7 Pearson Court",
                companySize: 19830,
                ceo: "Dewey Benion",
                cfo: "Isidoro Sangwin",
                cto: "Binny Kelloway",
                liquidity: 35,
                profitability: 87,
                growth: 81,
                valuation: 14.4
            }
        ];
        return { targets };
    }
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(targets) {
        return targets.length > 0
            ? Math.max(...targets.map(target => target.id)) + 1
            : 11;
    }
};
InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], InMemoryDataService);



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], MessageService);



/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n\nbody {\n  margin: 2em;\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\n\ninput[text] {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\n\nbutton {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\n\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\n\nbutton.clear {\n  color: #333;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWVoL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL2lDbG91ZCBEcml2ZS9EZXNrdG9wL2NvZGluZ1Byb2plY3RzL2luU2l0ZW4tY29kaW5nLXByb2plY3QvQW5ndWxhcjctQ29kaW5nLUNoYWxsZW5nZS9zcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNFSjs7QURBRTtFQUNFLHlCQUFBO0FDRUo7O0FEQUU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDJlbTtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuXG5pbnB1dFt0ZXh0XSB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xuICAmLmNsZWFyIHtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IGhhbmQ7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGN1cnNvcjogYXV0bztcbiAgfVxuICAmLmNsZWFyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG59XG4iLCJoMiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMmVtO1xuICBjb2xvcjogY3JpbXNvbjtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XG59XG5cbmlucHV0W3RleHRdIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogY3JpbXNvbjtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XG59XG5idXR0b24uY2xlYXIge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICNhYWE7XG4gIGN1cnNvcjogYXV0bztcbn1cbmJ1dHRvbi5jbGVhciB7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



let MessagesComponent = class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() { }
};
MessagesComponent.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-messages",
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html"),
        styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/target-detail/target-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/target-detail/target-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: inline-block;\n  width: 3em;\n  margin: 0.5em 0;\n  color: #607d8b;\n  font-weight: bold;\n}\n\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: 0.4em;\n}\n\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWVoL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL2lDbG91ZCBEcml2ZS9EZXNrdG9wL2NvZGluZ1Byb2plY3RzL2luU2l0ZW4tY29kaW5nLXByb2plY3QvQW5ndWxhcjctQ29kaW5nLUNoYWxsZW5nZS9zcmMvYXBwL3RhcmdldC1kZXRhaWwvdGFyZ2V0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFyZ2V0LWRldGFpbC90YXJnZXQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREFFO0VBQ0UseUJBQUE7QUNFSjs7QURBRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RhcmdldC1kZXRhaWwvdGFyZ2V0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogM2VtO1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmctbGVmdDogMC40ZW07XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIGN1cnNvcjogYXV0bztcbiAgfVxufVxuIiwibGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzZW07XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgY29sb3I6ICM2MDdkOGI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/target-detail/target-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/target-detail/target-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: TargetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetDetailComponent", function() { return TargetDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _target_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../target.service */ "./src/app/target.service.ts");





let TargetDetailComponent = class TargetDetailComponent {
    constructor(route, targetService, location) {
        this.route = route;
        this.targetService = targetService;
        this.location = location;
    }
    ngOnInit() {
        this.getTarget();
    }
    getTarget() {
        const id = +this.route.snapshot.paramMap.get("id");
        this.targetService
            .getTarget(id)
            .subscribe(target => (this.target = target));
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.targetService.updateTarget(this.target).subscribe(() => this.goBack());
    }
};
TargetDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _target_service__WEBPACK_IMPORTED_MODULE_4__["TargetService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TargetDetailComponent.prototype, "target", void 0);
TargetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-target-detail",
        template: __webpack_require__(/*! raw-loader!./target-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/target-detail/target-detail.component.html"),
        styles: [__webpack_require__(/*! ./target-detail.component.scss */ "./src/app/target-detail/target-detail.component.scss")]
    })
], TargetDetailComponent);



/***/ }),

/***/ "./src/app/target-search/target-search.component.scss":
/*!************************************************************!*\
  !*** ./src/app/target-search/target-search.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-result li {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width: 195px;\n  height: 16px;\n  padding: 5px;\n  background-color: purple;\n  cursor: pointer;\n  list-style-type: none;\n}\n.search-result li:hover {\n  background-color: #607d8b;\n}\n.search-result li a {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n.search-result li a:hover, .search-result li a:active {\n  color: white;\n}\n#search-box {\n  width: 290px;\n  height: 20px;\n  border: #607d8b;\n}\nul.search-result {\n  margin-top: 0;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWVoL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL2lDbG91ZCBEcml2ZS9EZXNrdG9wL2NvZGluZ1Byb2plY3RzL2luU2l0ZW4tY29kaW5nLXByb2plY3QvQW5ndWxhcjctQ29kaW5nLUNoYWxsZW5nZS9zcmMvYXBwL3RhcmdldC1zZWFyY2gvdGFyZ2V0LXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFyZ2V0LXNlYXJjaC90YXJnZXQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7QUNFSjtBREFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0VKO0FEREk7RUFFRSxZQUFBO0FDRU47QURHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdGFyZ2V0LXNlYXJjaC90YXJnZXQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yZXN1bHQgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMTk1cHg7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuI3NlYXJjaC1ib3gge1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAjNjA3ZDhiO1xufVxuXG51bC5zZWFyY2gtcmVzdWx0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuIiwiLnNlYXJjaC1yZXN1bHQgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMTk1cHg7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xufVxuLnNlYXJjaC1yZXN1bHQgbGkgYSB7XG4gIGNvbG9yOiAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciwgLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNzZWFyY2gtYm94IHtcbiAgd2lkdGg6IDI5MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogIzYwN2Q4Yjtcbn1cblxudWwuc2VhcmNoLXJlc3VsdCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/target-search/target-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/target-search/target-search.component.ts ***!
  \**********************************************************/
/*! exports provided: TargetSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSearchComponent", function() { return TargetSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _target_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../target.service */ "./src/app/target.service.ts");





let TargetSearchComponent = class TargetSearchComponent {
    constructor(targetService) {
        this.targetService = targetService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // Push a search term into the observable stream
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.targets$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new twem if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((term) => this.targetService.searchTargets(term)));
    }
};
TargetSearchComponent.ctorParameters = () => [
    { type: _target_service__WEBPACK_IMPORTED_MODULE_4__["TargetService"] }
];
TargetSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-target-search",
        template: __webpack_require__(/*! raw-loader!./target-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/target-search/target-search.component.html"),
        styles: [__webpack_require__(/*! ./target-search.component.scss */ "./src/app/target-search/target-search.component.scss")]
    })
], TargetSearchComponent);



/***/ }),

/***/ "./src/app/target.service.ts":
/*!***********************************!*\
  !*** ./src/app/target.service.ts ***!
  \***********************************/
/*! exports provided: TargetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetService", function() { return TargetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let TargetService = class TargetService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.targetsUrl = "api/targets"; // URL to web api
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
    }
    // getTargets(): Observable<Target[]> {
    //   // TODO: send the message _after_ fetching the heroes
    //   this.messageService.add(`TargetService: fetched target companies`);
    //   return of(TARGETS);
    // }
    // gets targets from the server
    getTargets() {
        return this.http.get(this.targetsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log("fetched all targets")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getTargets", [])));
    }
    getTarget(id) {
        const url = `${this.targetsUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log(`fetched target id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError(`getTarget id=${id}`)));
    }
    //GET targets whose names contains the search term
    searchTargets(term) {
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http
            .get(`${this.targetsUrl}/?companyName=${term}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log(`found targets matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("searchTargets", [])));
    }
    /** POST: add a new hero to the server */
    addTarget(target) {
        return this.http
            .post(this.targetsUrl, target, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((newTarget) => this.log(`added target company w/ id=${newTarget.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("addTarget")));
    }
    // updates the target on the "server"
    updateTarget(target) {
        return this.http.put(this.targetsUrl, target, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log(`updated target id=${target.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updateTarget")));
    }
    //TODO:
    // deletes the target from the server
    deleteTarget(target) {
        const id = typeof target === "number" ? target : target.id;
        const url = `${this.targetsUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log(`deleted target company id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("deleteTarget")));
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        this.messageService.add(`TargetService: ${message}`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * param operation - name of the operation that failed
     * param result - optional value to return as the observable result
     */
    handleError(operation = "operation", result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
};
TargetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
TargetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], TargetService);



/***/ }),

/***/ "./src/app/targets/targets.component.scss":
/*!************************************************!*\
  !*** ./src/app/targets/targets.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".targets {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 20em;\n}\n.targets li {\n  position: relative;\n  cursor: pointer;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.targets li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.targets a {\n  color: #333;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.targets a:hover {\n  color: #607d8b;\n}\n.targets .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 270px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWVoL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL2lDbG91ZCBEcml2ZS9EZXNrdG9wL2NvZGluZ1Byb2plY3RzL2luU2l0ZW4tY29kaW5nLXByb2plY3QvQW5ndWxhcjctQ29kaW5nLUNoYWxsZW5nZS9zcmMvYXBwL3RhcmdldHMvdGFyZ2V0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFyZ2V0cy90YXJnZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNHTjtBREFFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEREk7RUFDRSxjQUFBO0FDR047QURBRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDRUo7QURFQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLHlCQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RhcmdldHMvdGFyZ2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXJnZXRzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDIwZW07XG4gIGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgbWFyZ2luOiAwLjVlbTtcbiAgICBwYWRkaW5nOiAwLjNlbSAwO1xuICAgIGhlaWdodDogMS42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICM2MDdkOGI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgbGVmdDogMC4xZW07XG4gICAgfVxuICB9XG4gIGEge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICM2MDdkOGI7XG4gICAgfVxuICB9XG4gIC5iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNTA2MTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogLTRweDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIG1pbi13aWR0aDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgfVxuICAmLmRlbGV0ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDI3MHB4O1xuICAgIHRvcDogLTMycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuIiwiLnRhcmdldHMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjBlbTtcbn1cbi50YXJnZXRzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi50YXJnZXRzIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdkOGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGxlZnQ6IDAuMWVtO1xufVxuLnRhcmdldHMgYSB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi50YXJnZXRzIGE6aG92ZXIge1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cbi50YXJnZXRzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1MDYxO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5idXR0b24uZGVsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNzBweDtcbiAgdG9wOiAtMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/targets/targets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/targets/targets.component.ts ***!
  \**********************************************/
/*! exports provided: TargetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetsComponent", function() { return TargetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _target_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../target.service */ "./src/app/target.service.ts");



let TargetsComponent = class TargetsComponent {
    constructor(targetService) {
        this.targetService = targetService;
    }
    ngOnInit() {
        this.getTargets();
    }
    // onSelect(target: Target): void {
    //   this.selectedTarget = target;
    // }
    getTargets() {
        this.targetService
            .getTargets()
            .subscribe(targets => (this.targets = targets));
    }
    add(companyName) {
        companyName = companyName.trim();
        if (!companyName) {
            return;
        }
        this.targetService
            .addTarget({ companyName })
            .subscribe(target => {
            this.targets.push(target);
        });
    }
    delete(target) {
        this.targets = this.targets.filter(t => t !== target);
        this.targetService.deleteTarget(target).subscribe();
    }
};
TargetsComponent.ctorParameters = () => [
    { type: _target_service__WEBPACK_IMPORTED_MODULE_2__["TargetService"] }
];
TargetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-targets",
        template: __webpack_require__(/*! raw-loader!./targets.component.html */ "./node_modules/raw-loader/index.js!./src/app/targets/targets.component.html"),
        styles: [__webpack_require__(/*! ./targets.component.scss */ "./src/app/targets/targets.component.scss")]
    })
], TargetsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dyeh/Library/CloudStorage/iCloud Drive/Desktop/codingProjects/inSiten-coding-project/Angular7-Coding-Challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map