webpackJsonp([1],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(541);
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SleepTrackingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_mode__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(48);
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
    function SleepTrackingProvider(back, storage) {
        this.back = back;
        this.storage = storage;
        this.eventSource = [];
        console.log('Hello SleepTrackingProvider Provider');
    }
    SleepTrackingProvider.prototype.ionViewWillEnter = function () {
        this.fetchEvents();
    };
    SleepTrackingProvider.prototype.clearData = function () {
        this.storage.set('eventSource', this.eventSource);
        this.eventSource = [];
    };
    SleepTrackingProvider.prototype.fetchEvents = function () {
        var _this = this;
        return this.storage.get('eventSource')
            .then(function (eventSource) {
            _this.eventSource = eventSource == null ? [] : eventSource;
            return _this.eventSource;
        });
    };
    SleepTrackingProvider.prototype.addEvent = function (title, start, end) {
        var allday = false;
        var startTime = start.toISOString();
        var endTime = end.toISOString();
        this.eventSource.push({ title: title, startTime: start, endTime: end, allDay: allday });
        this.storage.set('eventSource', this.eventSource);
    };
    SleepTrackingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SleepTrackingProvider);
    return SleepTrackingProvider;
}());

//# sourceMappingURL=sleep-tracking.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_rssparser__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_newsfeeds__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Import http for requests

//Import the RSS Parser

//Import the news feeds

//Import rss database

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(navCtrl, navParams, http, rss_db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.rss_db = rss_db;
        this.category = "";
        this.article_list = [];
        this.sources = [];
        this.finished_loading = false;
        this.category = navParams.data.category;
        var that = this;
        this.getSources(http, this.category).then(function (sources) {
            that.sources = sources;
        }).then(function () {
            console.log(that.sources);
            var num_of_sources = that.sources.length;
            var iterator = 0;
            that.sources.map(function (source) {
                __WEBPACK_IMPORTED_MODULE_3__api_rssparser__["a" /* RssParse */].getArticles(source).then(function (data) {
                    that.article_list = that.article_list.concat(data);
                    that.finished_loading = true;
                    iterator++;
                }).then(function () {
                    if (iterator == num_of_sources) {
                        that.article_list = that.shuffleArticles(that.article_list);
                    }
                });
            });
        }).catch(function (error) {
            console.log(error);
        });
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.getSources = function (http, category) {
        var that = this;
        if (category == "Custom") {
            var custom_promise = new Promise(function (resolve, reject) {
                that.rss_db.getLinks().then(function (links) {
                    var flat_links = [];
                    links.map(function (link) {
                        flat_links.push(link.link);
                    });
                    resolve(flat_links);
                }).catch(function (error) {
                    reject(error);
                });
            });
            return custom_promise;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__api_newsfeeds__["a" /* NewsFeed */].getCategorySources(http, this.category);
        }
    };
    CategoryPage.prototype.shuffleArticles = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/category/category.html"*/`<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>{{category}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf = "!finished_loading">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <ion-row *ngFor = "let article of article_list">\n    <ion-card col-md-8>\n      <ion-card-content>\n            <div [innerHTML]="article.description"></div>\n            <!--<p class = "articlecontent" col-12> {{article.description}}</p>-->\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/category/category.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__["a" /* RssDatabase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__["a" /* RssDatabase */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		840,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);


var NewsFeed = (function () {
    function NewsFeed() {
    }
    NewsFeed.getCategories = function (http) {
        var category_promise = new Promise(function (resolve, reject) {
            var feed_promise = NewsFeed.getFeedData(http);
            feed_promise.then(function (feed_data) {
                var categories = Object.keys(feed_data);
                resolve(categories);
            }).catch(function (error) {
                reject(error);
            });
        });
        return category_promise;
    };
    NewsFeed.getCategorySources = function (http, category) {
        var sources_promise = new Promise(function (resolve, reject) {
            var feed_promise = NewsFeed.getFeedData(http);
            feed_promise.then(function (feed_data) {
                var sources = [];
                sources = feed_data[category];
                resolve(sources);
            }).catch(function (error) {
                reject(error);
            });
        });
        return sources_promise;
    };
    NewsFeed.getFeedData = function (http) {
        var url = "/assets/data/rss_sources.json";
        return http.get(url)
            .map(function (res) {
            return res.json();
        }).toPromise();
    };
    return NewsFeed;
}());

//# sourceMappingURL=newsfeeds.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RssDatabase = (function () {
    function RssDatabase(storage) {
        this.storage = storage;
    }
    RssDatabase.prototype.getLinks = function () {
        var that = this;
        var links_promise = new Promise(function (resolve, reject) {
            that.storage.get('rss_links').then(function (rss_links) {
                if (rss_links == null) {
                    resolve([]);
                }
                resolve(rss_links);
            }).catch(function (err) {
                resolve([]);
                console.log(err);
            });
        });
        return links_promise;
    };
    RssDatabase.prototype.setLinks = function (links) {
        var that = this;
        var links_promise = new Promise(function (resolve, reject) {
            that.storage.set('rss_links', links).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
        return links_promise;
    };
    RssDatabase.prototype.clearDB = function () {
        var that = this;
        var empty_links = [];
        var links_promise = this.setLinks(empty_links);
        return links_promise;
    };
    RssDatabase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], RssDatabase);
    return RssDatabase;
}());

//# sourceMappingURL=RssDatabase.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarms_alarms__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracking_tracking__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__health_advice_health_advice__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alarm_alarm__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(48);
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
    function TabsControllerPage(navCtrl, localNotifications, almProv, storage) {
        this.navCtrl = navCtrl;
        this.localNotifications = localNotifications;
        this.almProv = almProv;
        this.storage = storage;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__alarms_alarms__["a" /* AlarmsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__tracking_tracking__["a" /* TrackingPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__health_advice_health_advice__["a" /* HealthAdvicePage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */];
    }
    TabsControllerPage.prototype.ionViewWillEnter = function () {
        this.almProv.cancelAlarmNotifications();
    };
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/tabs-controller/tabs-controller.html"*/`<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Alarms" tabIcon="alarm" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Schedule" tabIcon="calendar" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Tracking" tabIcon="moon" id="tabsController-tab3"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Health Advice" tabIcon="heart" id="tabsController-tab4"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Settings" tabIcon="settings" id="tabsController-tab5"></ion-tab>\n</ion-tabs>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/tabs-controller/tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_7__providers_alarm_alarm__["a" /* AlarmProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarm_alarm__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alarm_alarm__ = __webpack_require__(64);
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
    function AlarmsPage(navCtrl, almProvider) {
        this.navCtrl = navCtrl;
        this.almProvider = almProvider;
    }
    AlarmsPage.prototype.stopNot = function () {
        this.almProvider.disableAllNotifications();
    };
    AlarmsPage.prototype.ionViewWillEnter = function () {
        this.fetchAlarms();
    };
    AlarmsPage.prototype.fetchAlarms = function () {
        var _this = this;
        this.almProvider.getAlarms().then(function (alarms) { return _this.alarms = alarms; });
        this.nextAlarmIndex = this.almProvider.nextAlarmIndex;
    };
    AlarmsPage.prototype.goToAlarm = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__alarm_alarm__["a" /* AlarmPage */]);
    };
    AlarmsPage.prototype.removeAlarm = function (index) {
        this.almProvider.removeAlarm(index);
        this.fetchAlarms();
    };
    AlarmsPage.prototype.updateAlarms = function () {
        this.almProvider.updateAlarms();
        this.fetchAlarms();
    };
    AlarmsPage.prototype.changeAlarmStatus = function (index) {
        this.almProvider.enableAlarm(index);
        this.fetchAlarms();
    };
    AlarmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alarms',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/alarms/alarms.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Alarms\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only on-click="goToAlarm()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <button (click)="stopNot()">{{nextAlarmIndex}}</button>\n  <ion-list id="alarms-container1" *ngFor = "let alarm of alarms; let i = index" style ="border-top-width: 1px; border-top-style: solid">\n      <ion-item-sliding>\n        <ion-item id="alarms-toggle2">\n          <ion-label style = "font-size: 1.5em;">\n            {{alarm.stringTime}}<br/>\n            <span style = "font-size: 0.5em;"><!--Active: {{alarm.active}}<br/>-->\n              Enabled: {{alarm.enabled}}</span>\n            <!--{{alarm.alarmTime.toLocaleString().split(", ")[1].split(":")[0]}}:{{alarm.alarmTime.toLocaleString().split(", ")[1].split(":")[1]}} {{alarm.alarmTime.toLocaleString().split(", ")[1].split(" ")[1]}}-->\n          </ion-label>\n          <ion-toggle color="positive" [checked]="alarm.enabled" (ionChange)="changeAlarmStatus(i)"></ion-toggle>\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="danger" (click)="removeAlarm(i)">DELETE</button>\n        </ion-item-options>\n      </ion-item-sliding>\n  </ion-list>\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/alarms/alarms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_alarm_alarm__["a" /* AlarmProvider */]])
    ], AlarmsPage);
    return AlarmsPage;
}());

//# sourceMappingURL=alarms.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_alarm__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(360);
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
    function AlarmPage(navCtrl, almProvider, datePicker) {
        this.navCtrl = navCtrl;
        this.almProvider = almProvider;
        this.datePicker = datePicker;
        this.display = "unset";
        this.weekdays = [false, false, false, false, false, false, false];
        this.weekdayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        //allalarms = storage;
    }
    AlarmPage.prototype.createAlarm = function () {
        //if required fields filled in
        if (this.time == null)
            this.time = new Date(Date.now() + 60 * 1000 * 60 * 8);
        this.almProvider.addAlarm(this.time, this.weekdays, "hiya", 0, 0, 0);
        this.navCtrl.pop();
    };
    AlarmPage.prototype.openPicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            console.log('Got date: ', date);
            if (date.getTime() < Date.now()) {
                date = new Date(date.getTime() + 86400000);
            }
            _this.time = date;
            _this.display = _this.almProvider.getTime(date);
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    AlarmPage.prototype.toggleDay = function (index) {
        this.weekdays[index] = !this.weekdays[index];
    };
    AlarmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alarm',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/alarm/alarm.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Alarm\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <ion-item (click)="openPicker()" color="dark" id="alarm-list-item8">\n    <span>Alarm Time:</span><br/><span style = "text-align: center; font-size: 3em; color: #ff7700">{{display}}</span>\n  </ion-item>\n  <form id="alarm-form3">\n    <ion-list id="alarm-list2">\n      <ion-item id="alarm-input1">\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="alarm-input2">\n        <ion-label>\n          Ringer (V2)\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="alarm-input3">\n        <ion-label>\n          Alarm Repeat\n          <div class = "row" style ="text-align: center;">\n            <div class = "col" style ="text-align: center;">\n              <span *ngFor = "let day of weekdayString; let i = index">\n                <button ion-button small (click) = "toggleDay(i)" *ngIf="weekdays[i] == false">{{day.charAt(0)}}</button>\n                <button ion-button small color = "light" (click) = "toggleDay(i)" *ngIf="weekdays[i] == true">{{day.charAt(0)}}</button>\n              </span>\n            </div>\n          </div>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-item color="dark" id="alarm-list-item11">\n      Geo-sensitive (V2)\n    </ion-item>\n    <button (click) = "createAlarm()" id="alarm-button2" ion-button color="positive" block>\n      Set Alarm!\n    </button>\n  </form>\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/alarm/alarm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_alarm__["a" /* AlarmProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */]])
    ], AlarmPage);
    return AlarmPage;
}());

//# sourceMappingURL=alarm.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sleep_tracking_sleep_tracking__ = __webpack_require__(158);
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
    function SchedulePage(navCtrl, alrtCtrl, tracker) {
        this.navCtrl = navCtrl;
        this.alrtCtrl = alrtCtrl;
        this.tracker = tracker;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay
        };
        //this.addEvent("OOOH", new Date(Date.now()), new Date(Date.now()));
    }
    SchedulePage.prototype.clear = function () {
        this.tracker.clearData();
    };
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tracker.fetchEvents().then(function (events) {
            _this.eventSource = events;
        });
        this.addEvent("OOOH", new Date(Date.now()), new Date(Date.now()));
    };
    SchedulePage.prototype.addEvent = function (title, start, end) {
        var allday = false;
        var startTime = start.toISOString();
        var endTime = end.toISOString();
        this.eventSource.push({ title: title, startTime: start, endTime: end, allDay: allday });
    };
    SchedulePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    SchedulePage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    SchedulePage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTimte).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alrtCtrl.create({
            title: '' + event.title,
            subTitle: 'From ' + start + ' to ' + end,
        });
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/schedule/schedule.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Schedule\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <h3 (click) = "ionViewDidLoad()" style="text-align:center;">\n    Sleeping Tracker Data:\n  </h3>\n  <h1>{{viewTitle}}</h1>\n  <calendar [eventSource]="eventSource"\n            [calendarMode] = "calendar.mode" [currentDate] = "calendar.currentDate"\n            (onEventSelected)="onEventSelected($event)"\n            (onTitleChanged)="onViewTitleChanged($event)"\n            (onTimeSelected)="onTimeSelected($event)"\n            step = "30"\n            class = "calendar">\n  </calendar>\n  <!--<h3  style="text-align:center;">\n    Average Sleeping Hours\n  </h3>-->\n  <br/>\n  <button ion-button (click) = "clear()"></button>\n\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_sleep_tracking_sleep_tracking__["a" /* SleepTrackingProvider */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_alarm__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sleep_tracking_sleep_tracking__ = __webpack_require__(158);
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
    function TrackingPage(navCtrl, alarmProvider, storage, localNotifications, track) {
        this.navCtrl = navCtrl;
        this.alarmProvider = alarmProvider;
        this.storage = storage;
        this.localNotifications = localNotifications;
        this.track = track;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.remAwake = false;
        this.message = "";
        this.fetchRem();
    }
    TrackingPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.fetchRem().then(function (remAwake) {
            _this.remAwake = remAwake;
        });
    };
    TrackingPage.prototype.fetchRem = function () {
        var _this = this;
        return this.storage.get('remAwake')
            .then(function (remAwake) {
            _this.remAwake = remAwake == null ? true : remAwake;
            return _this.remAwake;
        });
    };
    TrackingPage.prototype.updateSleepTracking = function () {
        this.remAwake = !this.remAwake;
        this.storage.set('remAwake', this.remAwake);
    };
    TrackingPage.prototype.startTracking = function () {
        var _this = this;
        var time = 0;
        this.alarmProvider.getAlarmTime().then(function (result) {
            time = result;
            console.log(time);
            if (time == 0) {
                _this.message = "Oops!  You haven't set an alarm yet.  I can't track your sleep.";
            }
            else {
                _this.message = "Tracking Sleep";
                var now = Date.now();
                var distance = time - now; //Time to sleep at plus 10 minute grace period minus now: target milliseconds to sleep.
                if (_this.remAwake) {
                    //this.alarmProvider.disableAllNotifications();
                    var targetTime = 600000; //10 Minutes in milliseconds, average amount of time to fall asleep.
                    var iterations = 0;
                    while (targetTime + 5400000 < distance) {
                        targetTime += 5400000; //Adds 1 and a half hour to target time.
                    }
                    for (var x = 1; x <= 60; x++) {
                        _this.localNotifications.schedule({
                            id: x * 1000,
                            title: 'Ring ring!',
                            text: 'Time to wake up!',
                            trigger: { at: new Date(Date.now() + targetTime + x * 1000) },
                            data: { mydata: 'My hidden message this is' }
                        });
                    }
                    distance = targetTime - 600000;
                }
                var hoursSlept = (distance * 1.0) / (3600 * 1000);
                console.log("hours slept: " + hoursSlept);
                _this.message = _this.message + "REM AWAKE: " + _this.remAwake + " Now " + now + " alarmtime " + time + " milliseconds slept: " + distance + " hours slept: " + hoursSlept;
                _this.track.addEvent("Slept for " + Math.round(hoursSlept * 100) / 100 + " hours.", new Date(now), new Date(now + distance));
            }
        });
    };
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/tracking/tracking.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Tracking\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n <h1 style ="text-align: center;">Welcome to the Sleep Tracker!</h1>\n    <h2>Tracking will be recorded to your sleep schedule!</h2>\n  <h3>Enable REM Awake to wake you up at the end of your REM cycle, so you feel rejuvenated and energetic all day long.</h3>\n  <ion-item id="alarms-toggle2">\n    <ion-label>\n      REM Awake\n    </ion-label>\n    <ion-toggle *ngIf="remAwake" color="positive" checked="true" (ionChange)="updateSleepTracking()"></ion-toggle>\n      <ion-toggle *ngIf="!remAwake" color="positive" checked="false" (ionChange)="updateSleepTracking()"></ion-toggle>\n  </ion-item>\n  <h2 style = "text-align: center;">Start Sleeping!</h2>\n    <p>{{message}}</p>\n  <h1 style = "text-align: center;"><button class="circlebutton" icon-only (click)="startTracking()">\n    <ion-icon name="disk" large></ion-icon>\n  </button></h1>\n</ion-content>`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/tracking/tracking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_alarm__["a" /* AlarmProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_5__providers_sleep_tracking_sleep_tracking__["a" /* SleepTrackingProvider */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthAdvicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_newsfeeds__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Import pages

//Import the news feed api

//Import HTTP

// Modal Stuff

//RSS Links Database

var HealthAdvicePage = (function () {
    function HealthAdvicePage(navCtrl, http, modalCtrl, rss_db) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.rss_db = rss_db;
        this.custom_links = [];
        this.categories = [];
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3__api_newsfeeds__["a" /* NewsFeed */].getCategories(http).then(function (categories) {
            that.categories = categories;
            console.log(that.categories);
        }).catch(function (error) {
            console.log(error);
        });
        this.rss_db.getLinks().then(function (rss_links) {
            that.custom_links = rss_links;
        });
    }
    HealthAdvicePage.prototype.categoryClick = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */], { category: category }, { animate: false });
    };
    HealthAdvicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-health-advice',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/health-advice/health-advice.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Health Advice\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page5">\n  <br/>\n  <h1 style = "text-align: center; font-size: 5em;"><ion-icon name = "heart"></ion-icon></h1>\n  <br/>\n  <ion-list>\n    <ion-item mode = "ios" (click) = "categoryClick(category)" class = "category-item" *ngFor = "let category of categories" ion-item>\n      {{category}}\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/pages/health-advice/health-advice.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__["a" /* RssDatabase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__["a" /* RssDatabase */]])
    ], HealthAdvicePage);
    return HealthAdvicePage;
}());

//# sourceMappingURL=health-advice.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_settings_app_settings__ = __webpack_require__(141);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_app_settings_app_settings__["a" /* AppSettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(493);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_alarms_alarms__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tracking_tracking__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_health_advice_health_advice__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_alarm_alarm__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_background_mode__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_audio__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_bluetooth_serial__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_local_notifications__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_date_picker__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_feed_adder_modal_feed_adder_modal__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_app_settings_app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_sleep_tracking_sleep_tracking__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_alarm_alarm__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_light_light__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_sqldatabase_sqldatabase__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic2_calendar__ = __webpack_require__(829);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//Storage Module

//Modal Controller


// For form processing









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
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_alarm_alarm__["a" /* AlarmPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_feed_adder_modal_feed_adder_modal__["a" /* FeedAdderModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_28_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_alarms_alarms__["a" /* AlarmsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_health_advice_health_advice__["a" /* HealthAdvicePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_alarm_alarm__["a" /* AlarmPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_feed_adder_modal_feed_adder_modal__["a" /* FeedAdderModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_app_settings_app_settings__["a" /* AppSettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_24__providers_sleep_tracking_sleep_tracking__["a" /* SleepTrackingProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_alarm_alarm__["a" /* AlarmProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_light_light__["a" /* LightProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_sqldatabase_sqldatabase__["a" /* SqldatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_local_notifications__["a" /* LocalNotifications */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssParse; });
var RssParse = (function () {
    function RssParse() {
    }
    RssParse.getFeed = function (source) {
        //This is the endpoint for conversion
        var rss2json = "https://alkonostfeed.glitch.me/feed";
        //This is our api promise
        var promise = new Promise(function (resolve, reject) {
            fetch(rss2json + "?url=" + source).then(function (data) {
                return data.json();
            }).then(function (json) {
                resolve(json);
            }).
                catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    RssParse.getArticles = function (source) {
        var promise = new Promise(function (resolve, reject) {
            RssParse.getFeed(source).then(function (rss) {
                var Articles = [];
                console.log(rss);
                Articles = rss.items.map(function (item) {
                    return {
                        title: item.title,
                        author: item.author,
                        content: item.content,
                        description: RssParse.formatDescription(item.description, item.title),
                        //description: item.description,
                        link: item.link,
                        logo: rss.meta_info.image
                    };
                });
                resolve(Articles);
            }).catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    RssParse.formatDescription = function (description, title) {
        var new_description = "";
        var re = /ol;/gi;
        description = description.replace("ol", "ul");
        return description;
    };
    return RssParse;
}());

//# sourceMappingURL=rssparser.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_controller_tabs_controller__ = __webpack_require__(356);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__["a" /* AppSettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_alarmObject__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_geosensitive__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(14);
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
    function AlarmProvider(bg, plt, alertCtrl, nativeAudio, localNotifications, storage) {
        //alarms = storage alarms;
        this.bg = bg;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.localNotifications = localNotifications;
        this.storage = storage;
        this.alarms = [];
        //this.bg.enable();
        console.log('Hello AlarmProvider Provider');
        /*this.timer = 0;
        Observable.interval(1000 * 60).subscribe(x => {
            this.doSomething();
        });*/
    }
    AlarmProvider.prototype.disableAllNotifications = function () {
        this.localNotifications.clearAll();
        this.localNotifications.cancelAll();
    };
    AlarmProvider.prototype.addAlarm = function (alarmTime, repeatDays, soundPath, lat, long, rad) {
        this.alarms.push(new __WEBPACK_IMPORTED_MODULE_0__models_alarmObject__["a" /* AlarmObject */](alarmTime, repeatDays, soundPath, new __WEBPACK_IMPORTED_MODULE_1__models_geosensitive__["a" /* Geosensitive */](lat, long, rad)));
        this.storage.set('alarms', this.alarms);
        console.log('Alarm created');
        console.log(this.alarms.length + ' alarms now.');
        this.updateAlarms();
    };
    AlarmProvider.prototype.getAlarms = function () {
        var _this = this;
        return this.storage.get('alarms')
            .then(function (alarms) {
            _this.alarms = alarms == null ? [] : alarms;
            console.log(_this.alarms.length + ' alarms fetched.');
            return _this.alarms.slice();
        });
    };
    AlarmProvider.prototype.enableAlarm = function (index) {
        this.alarms[index].enabled = !this.alarms[index].enabled;
        /*while (this.alarms[index].enabled && Date.now() > this.alarms[index].alarmTime.getTime())
        {
            this.alarms[index].alarmTime = new Date(this.alarms[index].alarmTime.getTime()+86400000);
        }*/
        this.storage.set('alarms', this.alarms);
        this.updateAlarms();
    };
    AlarmProvider.prototype.removeAlarm = function (index) {
        this.alarms.splice(-index, 1);
        this.storage.set('alarms', this.alarms);
        this.updateAlarms();
    };
    AlarmProvider.prototype.getTime = function (alarmTime) {
        return alarmTime.toLocaleString().split(", ")[1].split(":")[0] + ":" + alarmTime.toLocaleString().split(", ")[1].split(":")[1] + " " + alarmTime.toLocaleString().split(", ")[1].split(" ")[1];
    };
    AlarmProvider.prototype.updateAlarms = function () {
        var index = 0;
        var shortTermMin = Date.now() * Date.now();
        var prevMin = shortTermMin;
        var maxIndex = -1;
        var temp;
        this.disableAllNotifications();
        for (var _i = 0, _a = this.alarms; _i < _a.length; _i++) {
            var alarm = _a[_i];
            if (alarm.enabled) {
                console.log("Current idnex: " + index);
                console.log("Alarm date: " + this.alarms[index].alarmTime);
                var g = new Date(alarm.alarmTime);
                console.log("G time " + g.getTime());
                prevMin = shortTermMin;
                shortTermMin = Math.min(shortTermMin, g.getTime());
                temp = Math.abs(prevMin - shortTermMin);
                console.log("Change = " + temp);
                temp = temp / (Math.max(1, temp));
                console.log("Mathematics: " + temp);
                maxIndex = Math.max(temp * index, maxIndex);
                console.log(maxIndex);
            }
            index++;
        }
        this.nextAlarmIndex = maxIndex;
        if (maxIndex != -1) {
            var g = new Date(this.alarms[maxIndex].alarmTime);
            this.nextAlarmTime = g.getTime();
            console.log('Max index: ' + maxIndex);
            for (var x = 1; x <= 60; x++) {
                this.localNotifications.schedule({
                    id: x * 1000,
                    title: 'Ring ring!',
                    text: 'Time to wake up!',
                    trigger: { at: new Date(this.nextAlarmTime + x * 500) },
                    data: { mydata: 'My hidden message this is' }
                });
            }
        }
        this.storage.set('nextAlarmTime', this.nextAlarmTime);
        this.storage.set('nextAlarmIndex', this.nextAlarmIndex);
    };
    //ORIGINALLY IN TABS CONTROLLER
    AlarmProvider.prototype.cancelAlarmNotifications = function () {
        var _this = this;
        this.getIndex().then(function (index) {
            if (index != -1) {
                _this.getAlarmTime().then(function (time) {
                    if (Date.now() > time) {
                        //TURN OFF LIGHT
                        _this.disableAllNotifications();
                        var i = 0;
                        for (var _i = 0, _a = _this.alarms; _i < _a.length; _i++) {
                            var alarm = _a[_i];
                            if (alarm.alarmTime.getTime() <= time) {
                                _this.removeAlarm(i);
                            }
                            i++;
                        }
                        //this.alarms[index].alarmTime = new Date(this.alarms[index].alarmTime.getTime()+86400000);
                        //this.updateAlarms()
                    }
                });
            }
        });
    };
    AlarmProvider.prototype.getAlarmTime = function () {
        var _this = this;
        return this.storage.get('nextAlarmTime')
            .then(function (nextAlarmTime) {
            _this.nextAlarmTime = nextAlarmTime == null ? 0 : nextAlarmTime;
            return _this.nextAlarmTime;
        });
    };
    AlarmProvider.prototype.getIndex = function () {
        var _this = this;
        return this.storage.get('nextAlarmIndex')
            .then(function (nextAlarmIndex) {
            _this.nextAlarmIndex = nextAlarmIndex == null ? -1 : nextAlarmIndex;
            return _this.nextAlarmIndex;
        });
    };
    AlarmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], AlarmProvider);
    return AlarmProvider;
}());

//# sourceMappingURL=alarm.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmObject; });
var AlarmObject = (function () {
    function AlarmObject(alarmTime, repeatDays, soundPath, geo) {
        this.alarmTime = alarmTime;
        this.repeatDays = repeatDays;
        this.soundPath = soundPath;
        this.geo = geo;
        this.stringTime = alarmTime.toLocaleString().split(", ")[1].split(":")[0] + ":" + alarmTime.toLocaleString().split(", ")[1].split(":")[1] + " " + alarmTime.toLocaleString().split(", ")[1].split(" ")[1];
        this.enabled = true;
        this.active = false;
    }
    return AlarmObject;
}());

//# sourceMappingURL=alarmObject.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Geosensitive; });
var Geosensitive = (function () {
    function Geosensitive(lat, long, rad) {
        this.latitude = lat;
        this.longitude = long;
        this.radius = rad;
    }
    return Geosensitive;
}());

//# sourceMappingURL=geosensitive.js.map

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 362,
	"./af.js": 362,
	"./ar": 363,
	"./ar-dz": 364,
	"./ar-dz.js": 364,
	"./ar-kw": 365,
	"./ar-kw.js": 365,
	"./ar-ly": 366,
	"./ar-ly.js": 366,
	"./ar-ma": 367,
	"./ar-ma.js": 367,
	"./ar-sa": 368,
	"./ar-sa.js": 368,
	"./ar-tn": 369,
	"./ar-tn.js": 369,
	"./ar.js": 363,
	"./az": 370,
	"./az.js": 370,
	"./be": 371,
	"./be.js": 371,
	"./bg": 372,
	"./bg.js": 372,
	"./bm": 373,
	"./bm.js": 373,
	"./bn": 374,
	"./bn.js": 374,
	"./bo": 375,
	"./bo.js": 375,
	"./br": 376,
	"./br.js": 376,
	"./bs": 377,
	"./bs.js": 377,
	"./ca": 378,
	"./ca.js": 378,
	"./cs": 379,
	"./cs.js": 379,
	"./cv": 380,
	"./cv.js": 380,
	"./cy": 381,
	"./cy.js": 381,
	"./da": 382,
	"./da.js": 382,
	"./de": 383,
	"./de-at": 384,
	"./de-at.js": 384,
	"./de-ch": 385,
	"./de-ch.js": 385,
	"./de.js": 383,
	"./dv": 386,
	"./dv.js": 386,
	"./el": 387,
	"./el.js": 387,
	"./en-au": 388,
	"./en-au.js": 388,
	"./en-ca": 389,
	"./en-ca.js": 389,
	"./en-gb": 390,
	"./en-gb.js": 390,
	"./en-ie": 391,
	"./en-ie.js": 391,
	"./en-il": 392,
	"./en-il.js": 392,
	"./en-nz": 393,
	"./en-nz.js": 393,
	"./eo": 394,
	"./eo.js": 394,
	"./es": 395,
	"./es-do": 396,
	"./es-do.js": 396,
	"./es-us": 397,
	"./es-us.js": 397,
	"./es.js": 395,
	"./et": 398,
	"./et.js": 398,
	"./eu": 399,
	"./eu.js": 399,
	"./fa": 400,
	"./fa.js": 400,
	"./fi": 401,
	"./fi.js": 401,
	"./fo": 402,
	"./fo.js": 402,
	"./fr": 403,
	"./fr-ca": 404,
	"./fr-ca.js": 404,
	"./fr-ch": 405,
	"./fr-ch.js": 405,
	"./fr.js": 403,
	"./fy": 406,
	"./fy.js": 406,
	"./gd": 407,
	"./gd.js": 407,
	"./gl": 408,
	"./gl.js": 408,
	"./gom-latn": 409,
	"./gom-latn.js": 409,
	"./gu": 410,
	"./gu.js": 410,
	"./he": 411,
	"./he.js": 411,
	"./hi": 412,
	"./hi.js": 412,
	"./hr": 413,
	"./hr.js": 413,
	"./hu": 414,
	"./hu.js": 414,
	"./hy-am": 415,
	"./hy-am.js": 415,
	"./id": 416,
	"./id.js": 416,
	"./is": 417,
	"./is.js": 417,
	"./it": 418,
	"./it.js": 418,
	"./ja": 419,
	"./ja.js": 419,
	"./jv": 420,
	"./jv.js": 420,
	"./ka": 421,
	"./ka.js": 421,
	"./kk": 422,
	"./kk.js": 422,
	"./km": 423,
	"./km.js": 423,
	"./kn": 424,
	"./kn.js": 424,
	"./ko": 425,
	"./ko.js": 425,
	"./ky": 426,
	"./ky.js": 426,
	"./lb": 427,
	"./lb.js": 427,
	"./lo": 428,
	"./lo.js": 428,
	"./lt": 429,
	"./lt.js": 429,
	"./lv": 430,
	"./lv.js": 430,
	"./me": 431,
	"./me.js": 431,
	"./mi": 432,
	"./mi.js": 432,
	"./mk": 433,
	"./mk.js": 433,
	"./ml": 434,
	"./ml.js": 434,
	"./mn": 435,
	"./mn.js": 435,
	"./mr": 436,
	"./mr.js": 436,
	"./ms": 437,
	"./ms-my": 438,
	"./ms-my.js": 438,
	"./ms.js": 437,
	"./mt": 439,
	"./mt.js": 439,
	"./my": 440,
	"./my.js": 440,
	"./nb": 441,
	"./nb.js": 441,
	"./ne": 442,
	"./ne.js": 442,
	"./nl": 443,
	"./nl-be": 444,
	"./nl-be.js": 444,
	"./nl.js": 443,
	"./nn": 445,
	"./nn.js": 445,
	"./pa-in": 446,
	"./pa-in.js": 446,
	"./pl": 447,
	"./pl.js": 447,
	"./pt": 448,
	"./pt-br": 449,
	"./pt-br.js": 449,
	"./pt.js": 448,
	"./ro": 450,
	"./ro.js": 450,
	"./ru": 451,
	"./ru.js": 451,
	"./sd": 452,
	"./sd.js": 452,
	"./se": 453,
	"./se.js": 453,
	"./si": 454,
	"./si.js": 454,
	"./sk": 455,
	"./sk.js": 455,
	"./sl": 456,
	"./sl.js": 456,
	"./sq": 457,
	"./sq.js": 457,
	"./sr": 458,
	"./sr-cyrl": 459,
	"./sr-cyrl.js": 459,
	"./sr.js": 458,
	"./ss": 460,
	"./ss.js": 460,
	"./sv": 461,
	"./sv.js": 461,
	"./sw": 462,
	"./sw.js": 462,
	"./ta": 463,
	"./ta.js": 463,
	"./te": 464,
	"./te.js": 464,
	"./tet": 465,
	"./tet.js": 465,
	"./tg": 466,
	"./tg.js": 466,
	"./th": 467,
	"./th.js": 467,
	"./tl-ph": 468,
	"./tl-ph.js": 468,
	"./tlh": 469,
	"./tlh.js": 469,
	"./tr": 470,
	"./tr.js": 470,
	"./tzl": 471,
	"./tzl.js": 471,
	"./tzm": 472,
	"./tzm-latn": 473,
	"./tzm-latn.js": 473,
	"./tzm.js": 472,
	"./ug-cn": 474,
	"./ug-cn.js": 474,
	"./uk": 475,
	"./uk.js": 475,
	"./ur": 476,
	"./ur.js": 476,
	"./uz": 477,
	"./uz-latn": 478,
	"./uz-latn.js": 478,
	"./uz.js": 477,
	"./vi": 479,
	"./vi.js": 479,
	"./x-pseudo": 480,
	"./x-pseudo.js": 480,
	"./yo": 481,
	"./yo.js": 481,
	"./zh-cn": 482,
	"./zh-cn.js": 482,
	"./zh-hk": 483,
	"./zh-hk.js": 483,
	"./zh-tw": 484,
	"./zh-tw.js": 484
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 821;

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedAdderModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Link__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FeedAdderModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FeedAdderModalComponent = (function () {
    function FeedAdderModalComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.rss_link = new __WEBPACK_IMPORTED_MODULE_2__models_Link__["a" /* Link */]();
        console.log('Hello FeedAdderModalComponent Component');
    }
    FeedAdderModalComponent.prototype.submitRSSFeed = function () {
        this.viewCtrl.dismiss(this.rss_link);
    };
    FeedAdderModalComponent.prototype.cancel = function () {
        this.viewCtrl.dismiss(undefined);
    };
    FeedAdderModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'feed-adder-modal',template:/*ion-inline-start:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/components/feed-adder-modal/feed-adder-modal.html"*/`<ion-header>\n  <ion-navbar color = "primary">\n    <ion-title>\n      Add a RSS Feed\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>RSS Link: </ion-label>\n    <ion-input type = "text" [(ngModel)] = "rss_link.link"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Category: </ion-label>\n    <ion-input type = "text" placeholder = "sports" [(ngModel)] = "rss_link.category"></ion-input>\n  </ion-item>\n\n\n  <ion-footer>\n    <ion-row>\n      <button (click) = "submitRSSFeed()" col margin ion-button color = "primary">Submit</button>\n      <button (click) = "cancel()" col margin ion-button color = "danger">Cancel</button>\n    </ion-row>\n  </ion-footer>\n\n</ion-content>\n`/*ion-inline-end:"/Users/PeterMartin/Documents/GitHub/SleepApp/src/components/feed-adder-modal/feed-adder-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], FeedAdderModalComponent);
    return FeedAdderModalComponent;
}());

//# sourceMappingURL=feed-adder-modal.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
var Link = (function () {
    function Link() {
    }
    Link.verifyLink = function (link) {
        var test_regex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        return test_regex.test(link);
    };
    Link.prototype.link_valid = function () {
        return Link.verifyLink(this.link);
    };
    return Link;
}());

//# sourceMappingURL=Link.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(826);
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

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqldatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SqldatabaseProvider = (function () {
    function SqldatabaseProvider(db) {
        var _this = this;
        if (!this.isOpen) {
            this.storage = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]();
            this.storage.create({ name: "data.db", location: "default" }).then(function (db) {
                _this.db = db;
                _this.db.executeSql("CREATE TABLE IF NOT EXISTS sources (id INTEGER PRIMARY KEY AUTOINCREMENT, link TEXT)", []);
                _this.isOpen = true;
            });
        }
    }
    SqldatabaseProvider.prototype.createSource = function (link) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.db.executeSql("INSERT INTO sources (link) VALUES (?)", [link]).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    SqldatabaseProvider.prototype.getSources = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM sources", []).then(function (data) {
                var sources = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        sources.push({ id: data.rows.item(i).id, link: data.rows.item(i).link });
                    }
                }
                resolve(sources);
            }, function (error) {
                reject(error);
            });
        });
    };
    SqldatabaseProvider.prototype.deleteSource = function (source) {
        return this.db.executeSql("DELETE FROM sources WHERE id = ?", [source.id]);
    };
    SqldatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["b" /* SQLiteObject */]])
    ], SqldatabaseProvider);
    return SqldatabaseProvider;
}());

//sorce: https://www.thepolyglotdeveloper.com/2016/06/build-an-rss-reader-mobile-app-with-ionic-2-and-angular-2/ 
//# sourceMappingURL=sqldatabase.js.map

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[488]);
//# sourceMappingURL=main.js.map