webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AppSettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppSettingsProvider = (function () {
    function AppSettingsProvider() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('dark-theme');
    }
    AppSettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    AppSettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    AppSettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppSettingsProvider);
    return AppSettingsProvider;
}());

//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarms_alarms__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracking_tracking__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__health_advice_health_advice__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsControllerPage = (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__alarms_alarms__["a" /* AlarmsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__tracking_tracking__["a" /* TrackingPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__health_advice_health_advice__["a" /* HealthAdvicePage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/tabs-controller/tabs-controller.html"*/`<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Alarms" tabIcon="alarm" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Schedule" tabIcon="calendar" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Tracking" tabIcon="moon" id="tabsController-tab3"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Health Advice" tabIcon="heart" id="tabsController-tab4"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Settings" tabIcon="settings" id="tabsController-tab5"></ion-tab>\n</ion-tabs>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/tabs-controller/tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarm_alarm__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlarmsPage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function AlarmsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AlarmsPage.prototype.goToAlarm = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__alarm_alarm__["a" /* AlarmPage */]);
    };
    AlarmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alarms',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/alarms/alarms.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Alarms\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <div id="alarms-container1">\n    <form id="alarms-form1">\n      <ion-item id="alarms-toggle2">\n        <ion-label>\n          6:30\n        </ion-label>\n        <ion-toggle color="positive" checked="true"></ion-toggle>\n      </ion-item>\n    </form>\n  </div>\n  <form id="alarms-form2">\n    <ion-item id="alarms-toggle3">\n      <ion-label>\n        7:30\n      </ion-label>\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item id="alarms-toggle4">\n      <ion-label>\n        10:30 (Saturday only)\n      </ion-label>\n      <ion-toggle color="positive" checked="true"></ion-toggle>\n    </ion-item>\n  </form>\n  <button id="alarms-button4" ion-button color="positive" block on-click="goToAlarm()">\n    Alarm Options\n  </button>\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/alarms/alarms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AlarmsPage);
    return AlarmsPage;
}());

//# sourceMappingURL=alarms.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlarmPage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function AlarmPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AlarmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alarm',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/alarm/alarm.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Alarm\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="alarm-form3">\n    <ion-list id="alarm-list2">\n      <ion-item color="dark" id="alarm-list-item8">\n        Alarm Time\n      </ion-item>\n      <ion-item id="alarm-input1">\n        <ion-label>\n          Alarm Type (visual, sound)\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="alarm-input2">\n        <ion-label>\n          Ringer (different sounds)\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="alarm-input3">\n        <ion-label>\n          Alarm Repeat (S M T W T F S)\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item color="none" id="alarm-list-item10">\n        Exclude Days (Specific Calendar)\n      </ion-item>\n    </ion-list>\n    <ion-item color="dark" id="alarm-list-item11">\n      Geo-sensitive\n    </ion-item>\n    <ion-item color="none" id="alarm-list-item12">\n      Backup Ringer\n    </ion-item>\n    <ion-item color="none" id="alarm-list-item13">\n      Smart Alarm (Wakes in 1.5 hour)\n    </ion-item>\n    <ion-item color="none" id="alarm-list-item14">\n      Grace Period\n    </ion-item>\n    <button id="alarm-button2" ion-button color="positive" block>\n      Set Alarm!\n    </button>\n  </form>\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/alarm/alarm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AlarmPage);
    return AlarmPage;
}());

//# sourceMappingURL=alarm.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchedulePage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function SchedulePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/schedule/schedule.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Schedule\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <h3 id="schedule-heading4" style="color:#000000;text-align:center;">\n    Average Sleeping Hours\n  </h3>\n  <img src="assets/img/uQBXLVrWRXKnhym9digZ_graphayyoa.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div id="schedule-markdown2" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Your sleep schedule is fairly\n      <strong>\n        inconsistent\n      </strong>\n      . For greater energy throughout the day, try to have a consistent sleeping pattern.\n    </p>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackingPage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function TrackingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/tracking/tracking.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Tracking\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding style="background:url(assets/img/mT8etT5Cs3CubTnpAdwq_graph20120copy.png) no-repeat center;background-size:cover;" id="page4">\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <h3 id="tracking-heading3" style="color:#000000;text-align:center;">\n    Hours Slept in the Past Week\n  </h3>\n  <img src="assets/img/TkBkUjfREyVhnnkReoLI_graph1copy.png" style="display:block;width:100%;height:300%;margin-left:auto;margin-right:auto;" />\n  <div id="tracking-markdown1" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      You are not getting enough sleep on\n      <strong>\n        weekdays\n      </strong>\n      . Try reserving extra time to sleep.\n    </p>\n  </div>\n  <h3 id="tracking-heading1" style="color:#000000;"></h3>\n  <h3 id="tracking-heading2" style="color:#000000;">\n    You have missed out on 6.3 hours this week.\n  </h3>\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/tracking/tracking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthAdvicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HealthAdvicePage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function HealthAdvicePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HealthAdvicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-health-advice',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/health-advice/health-advice.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Health Advice\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <ion-list id="healthAdvice-list3">\n    <ion-item color="none" id="healthAdvice-list-item3">\n      Diet\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" id="healthAdvice-list-item4">\n      Exercise\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" id="healthAdvice-list-item5">\n      Light\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" id="healthAdvice-list-item6">\n      Devices\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" id="healthAdvice-list-item7">\n      Schedule\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:39px;" id="healthAdvice-spacer1"></div>\n  <div id="healthAdvice-markdown3" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Click on a tab for more information in an area to learn how to improve your sleep and maximize your energy throughout the day.\n    </p>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/health-advice/health-advice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HealthAdvicePage);
    return HealthAdvicePage;
}());

//# sourceMappingURL=health-advice.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_settings_app_settings__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(navCtrl, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        if (this.selectedTheme === "light-theme") {
            this.darktheme = false;
        }
        if (this.selectedTheme === "dark-theme") {
            this.darktheme = true;
        }
    }
    SettingsPage.prototype.updateTheme = function () {
        this.darktheme = !this.darktheme;
        console.log(this.darktheme);
        console.log('updating theme');
        if (this.darktheme == true) {
            this.settings.setActiveTheme('dark-theme');
        }
        if (this.darktheme == false) {
            this.settings.setActiveTheme('light-theme');
        }
        /*if (this.selectedTheme === "light-theme")
         {
             this.settings.setActiveTheme('dark-theme');
         }
         else
         {
           this.settings.setActiveTheme('light-theme');
         }*/
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/settings/settings.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <form id="settings-form4">\n    <ion-item id="settings-toggle5">\n      <ion-label>\n        Notifications\n      </ion-label>\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item id="settings-toggle6">\n      <ion-label (click)="updateTheme()">\n        Dark Theme\n      </ion-label>\n        <ion-toggle (ionChange)="updateTheme()" [checked]="darktheme"></ion-toggle>\n    </ion-item>\n    <ion-item id="settings-toggle7">\n      <ion-label>\n        Sleep Tracking\n      </ion-label>\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item id="settings-toggle8">\n      <ion-label>\n        Bluetooth enabled\n      </ion-label>\n      <ion-toggle color="positive" checked="true"></ion-toggle>\n    </ion-item>\n  </form>\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app_settings_app_settings__["a" /* AppSettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app_settings_app_settings__["a" /* AppSettingsProvider */]) === "function" && _b || Object])
    ], SettingsPage);
    return SettingsPage;
    var _a, _b;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_alarms_alarms__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tracking_tracking__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_health_advice_health_advice__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_alarm_alarm__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_audio__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_bluetooth_serial__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_app_settings_app_settings__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_sleep_tracking_sleep_tracking__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_alarm_alarm__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_light_light__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_alarms_alarms__["a" /* AlarmsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_health_advice_health_advice__["a" /* HealthAdvicePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_alarm_alarm__["a" /* AlarmPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_alarms_alarms__["a" /* AlarmsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_health_advice_health_advice__["a" /* HealthAdvicePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_alarm_alarm__["a" /* AlarmPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_app_settings_app_settings__["a" /* AppSettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_17__providers_sleep_tracking_sleep_tracking__["a" /* SleepTrackingProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_alarm_alarm__["a" /* AlarmProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_light_light__["a" /* LightProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_controller_tabs_controller__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, settings) {
        var _this = this;
        this.settings = settings;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/app/app.html"*/`<!--<ion-nav #mainContent [root]="rootPage"></ion-nav>-->\n<ion-nav #mainContent [root]="rootPage" [class]="selectedTheme"></ion-nav>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__["a" /* AppSettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SleepTrackingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_sleepTrack__ = __webpack_require__(683);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SleepTrackingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SleepTrackingProvider = (function () {
    function SleepTrackingProvider(http, back, dataHolder) {
        this.http = http;
        this.back = back;
        this.dataHolder = dataHolder;
        this.screenOff = false;
        console.log('Hello SleepTrackingProvider Provider');
    }
    //Do this for 24 hours.  Do this from three pm till three pm.  Find the max, and return the hours asleep for.
    SleepTrackingProvider.prototype.test = function () {
        this.back.enable();
        this.screenOff = false;
        while (true) {
            if (this.screenOff === true) {
                if (!this.back.isScreenOff()) {
                    this.screenOff = false;
                    //SAVE THIS AS THE INITIAL TIME.
                    this.dataHolder.push(new __WEBPACK_IMPORTED_MODULE_3__models_sleepTrack__["a" /* SleepTrack */](this.temp, Date.now(), Date.now() - this.temp));
                    //OUTPUT (Date.now()-this.temp)/1000; (TIME IN SECONDS THAT SCREEN WAS OFF FOR)
                }
            }
            if (this.screenOff === false) {
                if (this.back.isScreenOff) {
                    this.screenOff = true; //SETTING SCREEN OFF TO TRUE
                    this.temp = Date.now();
                }
            }
        }
        /*var max = new SleepTrack(0, 0, 0);
        for (let x = 0; x < this.dataHolder.length; x+=1)
        {
          if (this.dataHolder[x].duration > max.duration)
            max = new SleepTrack(this.dataHolder[x].initialTime, this.dataHolder[x].endTime, this.dataHolder[x].duration);
        }*/
    };
    SleepTrackingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__["a" /* BackgroundMode */], Array])
    ], SleepTrackingProvider);
    return SleepTrackingProvider;
}());

//# sourceMappingURL=sleep-tracking.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SleepTrack; });
var SleepTrack = (function () {
    function SleepTrack(i, e, d) {
        this.initialTime = i;
        this.endTime = e;
        this.duration = d;
    }
    return SleepTrack;
}());

//# sourceMappingURL=sleepTrack.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_mode__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlarmProvider = (function () {
    function AlarmProvider(back, nativeAudio) {
        this.back = back;
        this.nativeAudio = nativeAudio;
        console.log('Hello AlarmProvider Provider');
    }
    AlarmProvider.prototype.enable = function (al) {
        this.back.enable();
        this.nativeAudio.preloadComplex('alarmSound', al.soundPath, 1, 1, 1);
        while (Date.now() < Date.parse(al.alarmTime.toDateString())) {
        }
        if (Date.now() > Date.parse(al.alarmTime.toDateString())) {
            this.nativeAudio.loop('alarmSound');
            this.nativeAudio.stop('alarmSound');
        }
    };
    AlarmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], AlarmProvider);
    return AlarmProvider;
}());

//# sourceMappingURL=alarm.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LightProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LightProvider = (function () {
    function LightProvider(http) {
        this.http = http;
        console.log('Hello LightProvider Provider');
    }
    LightProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LightProvider);
    return LightProvider;
}());

//# sourceMappingURL=light.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map