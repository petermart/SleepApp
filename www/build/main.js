webpackJsonp([1],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(416);
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

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_alarmObject__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_geosensitive__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(114);
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
    function AlarmProvider(bg, nativeAudio, localNotifications, storage) {
        //alarms = storage alarms;
        this.bg = bg;
        this.nativeAudio = nativeAudio;
        this.localNotifications = localNotifications;
        this.storage = storage;
        this.alarms = [];
        this.bg.enable();
        console.log('Hello AlarmProvider Provider');
        /*this.timer = 0;
        Observable.interval(1000 * 60).subscribe(x => {
            this.doSomething();
        });*/
    }
    AlarmProvider.prototype.doSomething = function () {
        if (this.bg.isScreenOff()) {
            if (this.timer < -1) {
                this.timer *= -1;
            }
            this.timer += 1;
            this.screenOn = false;
            this.localNotifications.schedule({
                id: 1,
                title: 'Attention',
                text: 'Your screen has been off for roughly ' + this.timer + ' minutes',
                trigger: { at: new Date(new Date().getTime() + 1 * 1000) },
                data: { mydata: 'My hidden message this is' }
            });
            this.bg.unlock();
        }
        else {
            if (this.timer > -1) {
                this.timer *= -1;
            }
            else {
                this.localNotifications.schedule({
                    id: 1,
                    title: 'Attention',
                    text: 'Evaluating after off: screen was off for roughly ' + this.timer + ' minutes',
                    trigger: { at: new Date(new Date().getTime() + 5 * 1000) },
                    data: { mydata: 'My hidden message this is' }
                });
                this.timer = 0;
            }
            this.screenOn = true;
        }
    };
    /*if ( /*this.alarmType == smart && (this.timer - 7)%90 < 4 && (this.timer - 7) > 0 ) /* && ROUGHLY TIME TO WAKE UP{
      //localNotifications.set;
        // bg.playsound;
    }
    else if (Date.now() > Date.parse(al.alarmTime.toDateString())) {
      //localNotifcations.set;
        // bg.playsound;
    }*/
    AlarmProvider.prototype.enable = function (al) {
        this.bg.enable();
        this.nativeAudio.preloadComplex('alarmSound', al.soundPath, 1, 1, 1);
        while (Date.now() < Date.parse(al.alarmTime.toDateString())) {
        }
        if (Date.now() > Date.parse(al.alarmTime.toDateString())) {
            this.nativeAudio.loop('alarmSound');
            this.nativeAudio.stop('alarmSound');
        }
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
        var maxIndex = 0;
        var temp;
        for (var _i = 0, _a = this.alarms; _i < _a.length; _i++) {
            var alarm = _a[_i];
            console.log("Current idnex: " + index);
            console.log("Alarm date: " + this.alarms[index].alarmTime);
            var g_1 = new Date(alarm.alarmTime);
            console.log("G time " + g_1.getTime());
            prevMin = shortTermMin;
            shortTermMin = Math.min(shortTermMin, g_1.getTime());
            temp = Math.abs(prevMin - shortTermMin);
            console.log("Change = " + temp);
            temp = temp / (Math.max(1, temp));
            console.log("Mathematics: " + temp);
            maxIndex = Math.max(temp * index, maxIndex);
            console.log(maxIndex);
            index++;
        }
        this.nextAlarmIndex = maxIndex;
        var g = new Date(this.alarms[maxIndex].alarmTime);
        this.nextAlarmTime = g.getTime();
        console.log('Max index: ' + maxIndex);
        for (var x = 1; x <= 2; x++) {
            this.localNotifications.schedule({
                id: x * 1000,
                title: 'Ring ring!',
                text: 'Time to wake up!',
                trigger: { at: new Date(this.nextAlarmTime + x * 2000) },
                data: { mydata: 'My hidden message this is' }
            });
        }
    };
    AlarmProvider.prototype.updateAlarmsTemplate = function () {
        //getLocation
        //Gets index of most recent alarm
        var temp = Date.now() * Date.now(); //Just a big number
        var finalIndex = 0;
        var index = 0;
        for (var _i = 0, _a = this.alarms; _i < _a.length; _i++) {
            var alarm = _a[_i];
            //Cycling through to find smallest
            if (alarm.alarmTime.getTime() < temp) {
                temp = alarm.alarmTime.getTime();
                finalIndex = index;
            }
            index++;
        }
        this.nextAlarmIndex = finalIndex;
        //this.localNotifications.cancelAll();
        for (var x = 1; x <= 2; x++)
            this.localNotifications.schedule({
                id: x * 1000,
                title: 'Ring ring!',
                text: 'Time to wake up!',
                trigger: { at: new Date(this.alarms[this.nextAlarmIndex].alarmTime.getTime() + x * 2000) },
                data: { mydata: 'My hidden message this is' }
            });
    };
    AlarmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__["a" /* BackgroundMode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__["a" /* BackgroundMode */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], AlarmProvider);
    return AlarmProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=alarm.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_rssparser__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_newsfeeds__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__ = __webpack_require__(216);
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
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\category\category.html"*/`<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>{{category}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf = "!finished_loading">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <ion-row *ngFor = "let article of article_list">\n    <ion-card col-md-8>\n      <ion-card-content>\n            <div [innerHTML]="article.description"></div>\n            <!--<p class = "articlecontent" col-12> {{article.description}}</p>-->\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\category\category.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__["a" /* RssDatabase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__["a" /* RssDatabase */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		703,
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
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(215);
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(114);
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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarms_alarms__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracking_tracking__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__health_advice_health_advice__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(361);
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
            selector: 'page-tabs-controller',template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\tabs-controller\tabs-controller.html"*/`<ion-tabs id="tabsController-tabs1">\n\n  <ion-tab [root]="tab1Root" tabTitle="Alarms" tabIcon="alarm" id="tabsController-tab1"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Schedule" tabIcon="calendar" id="tabsController-tab2"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Tracking" tabIcon="moon" id="tabsController-tab3"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Health Advice" tabIcon="heart" id="tabsController-tab4"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Settings" tabIcon="settings" id="tabsController-tab5"></ion-tab>\n\n</ion-tabs>`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\tabs-controller\tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarm_alarm__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alarm_alarm__ = __webpack_require__(153);
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
    AlarmsPage.prototype.ionViewWillEnter = function () {
        this.fetchAlarms();
    };
    AlarmsPage.prototype.fetchAlarms = function () {
        var _this = this;
        this.almProvider.getAlarms().then(function (alarms) { return _this.alarms = alarms; });
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
            selector: 'page-alarms',template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\alarms\alarms.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Alarms\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only on-click="goToAlarm()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n\n\n  <ion-list id="alarms-container1" *ngFor = "let alarm of alarms; let i = index" style ="border-top-width: 1px; border-top-style: solid">\n\n      <ion-item-sliding>\n\n        <ion-item id="alarms-toggle2">\n\n          <ion-label>\n\n            {{alarm.stringTime}}<br/>\n\n            Active: {{alarm.active}}<br/>\n\n            Enabled: {{alarm.enabled}}\n\n            <!--{{alarm.alarmTime.toLocaleString().split(", ")[1].split(":")[0]}}:{{alarm.alarmTime.toLocaleString().split(", ")[1].split(":")[1]}} {{alarm.alarmTime.toLocaleString().split(", ")[1].split(" ")[1]}}-->\n\n          </ion-label>\n\n          <ion-toggle color="positive" [checked]="alarm.enabled" (ionChange)="changeAlarmStatus(i)"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item-options side="left">\n\n          <button ion-button color="danger" (click)="removeAlarm(i)">DELETE</button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\alarms\alarms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_alarm_alarm__["a" /* AlarmProvider */]])
    ], AlarmsPage);
    return AlarmsPage;
}());

//# sourceMappingURL=alarms.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_alarm__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(357);
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
            this.time = new Date(Date.now() + 60 * 2 * 1000);
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
            selector: 'page-alarm',template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\alarm\alarm.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Alarm\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7">\n\n  <ion-item (click)="openPicker()" color="dark" id="alarm-list-item8">\n\n    <span>Alarm Time:</span><br/><span style = "text-align: center; font-size: 3em; color: #ff7700">{{display}}</span>\n\n  </ion-item>\n\n  <form id="alarm-form3">\n\n    <ion-list id="alarm-list2">\n\n      <ion-item id="alarm-input1">\n\n        <ion-label>\n\n          Alarm Type (visual, sound)\n\n        </ion-label>\n\n        <ion-input type="text" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="alarm-input2">\n\n        <ion-label>\n\n          Ringer (different sounds)\n\n        </ion-label>\n\n        <ion-input type="email" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="alarm-input3">\n\n        <ion-label>\n\n          Alarm Repeat\n\n          <div class = "row" style ="text-align: center;">\n\n            <div class = "col" style ="text-align: center;">\n\n              <span *ngFor = "let day of weekdayString; let i = index">\n\n                <button ion-button small (click) = "toggleDay(i)" *ngIf="weekdays[i] == false">{{day.charAt(0)}}</button>\n\n                <button ion-button small color = "light" (click) = "toggleDay(i)" *ngIf="weekdays[i] == true">{{day.charAt(0)}}</button>\n\n              </span>\n\n            </div>\n\n          </div>\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item color="dark" id="alarm-list-item11">\n\n      Geo-sensitive\n\n    </ion-item>\n\n    <button (click) = "createAlarm()" id="alarm-button2" ion-button color="positive" block>\n\n      Set Alarm!\n\n    </button>\n\n  </form>\n\n</ion-content>`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\alarm\alarm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_alarm__["a" /* AlarmProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */]])
    ], AlarmPage);
    return AlarmPage;
}());

//# sourceMappingURL=alarm.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-schedule',template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\schedule\schedule.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Schedule\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <h3 id="schedule-heading4" style="color:#000000;text-align:center;">\n\n    Average Sleeping Hours\n\n  </h3>\n\n  <img src="assets/img/uQBXLVrWRXKnhym9digZ_graphayyoa.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <div id="schedule-markdown2" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Your sleep schedule is fairly\n\n      <strong>\n\n        inconsistent\n\n      </strong>\n\n      . For greater energy throughout the day, try to have a consistent sleeping pattern.\n\n    </p>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\schedule\schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-tracking',template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\tracking\tracking.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Tracking\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n <h1 style ="text-align: center;">Welcome to the Sleep Tracker!</h1>\n\n  <br/><br/>\n\n  <h3>Enable REM Awake to wake you up at the end of your REM cycle, so you feel rejuvenated and energetic all day long.</h3>\n\n  <ion-item id="alarms-toggle2">\n\n    <ion-label>\n\n      REM Awake\n\n    </ion-label>\n\n    <ion-toggle color="positive" checked="true"></ion-toggle>\n\n  </ion-item>\n\n  <br/><br/><br/><br/><br/><br/><br/><br/>\n\n  <h2 style = "text-align: center;">Start Sleeping!</h2>\n\n  <h1 style = "text-align: center;"><button class="circlebutton" icon-only on-click="goToAlarm()">\n\n    <ion-icon name="disk" large></ion-icon>\n\n  </button></h1>\n\n</ion-content>`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\tracking\tracking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthAdvicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_newsfeeds__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__ = __webpack_require__(216);
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
            selector: 'page-health-advice',template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\health-advice\health-advice.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Health Advice\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="page5">\n\n  <br/>\n\n  <h1 style = "text-align: center; font-size: 5em;"><ion-icon name = "heart"></ion-icon></h1>\n\n  <br/>\n\n  <ion-list>\n\n    <ion-item mode = "ios" (click) = "categoryClick(category)" class = "category-item" *ngFor = "let category of categories" ion-item>\n\n      {{category}}\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\health-advice\health-advice.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__["a" /* RssDatabase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__database_RssDatabase__["a" /* RssDatabase */]])
    ], HealthAdvicePage);
    return HealthAdvicePage;
}());

//# sourceMappingURL=health-advice.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_settings_app_settings__ = __webpack_require__(137);
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\settings\settings.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Settings\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6">\n\n  <form id="settings-form4">\n\n    <ion-item id="settings-toggle5">\n\n      <ion-label>\n\n        Notifications\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="settings-toggle6">\n\n      <ion-label (click)="updateTheme()">\n\n        Dark Theme\n\n      </ion-label>\n\n        <ion-toggle (ionChange)="updateTheme()" [checked]="darktheme"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="settings-toggle7">\n\n      <ion-label>\n\n        Sleep Tracking\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="settings-toggle8">\n\n      <ion-label>\n\n        Bluetooth enabled\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </form>\n\n</ion-content>`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_app_settings_app_settings__["a" /* AppSettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_alarms_alarms__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tracking_tracking__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_health_advice_health_advice__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_alarm_alarm__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_background_mode__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_audio__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_bluetooth_serial__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_local_notifications__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_date_picker__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_feed_adder_modal_feed_adder_modal__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_app_settings_app_settings__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_sleep_tracking_sleep_tracking__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_alarm_alarm__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_light_light__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_sqldatabase_sqldatabase__ = __webpack_require__(701);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
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

/***/ 388:
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

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_controller_tabs_controller__ = __webpack_require__(352);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\app\app.html"*/`<!--<ion-nav #mainContent [root]="rootPage"></ion-nav>-->\n\n<ion-nav #mainContent [root]="rootPage" [class]="selectedTheme"></ion-nav>`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_app_settings_app_settings__["a" /* AppSettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 693:
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

/***/ 694:
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

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedAdderModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Link__ = __webpack_require__(697);
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
            selector: 'feed-adder-modal',template:/*ion-inline-start:"C:\Users\Peter\Documents\GitHub\SleepApp\src\components\feed-adder-modal\feed-adder-modal.html"*/`<ion-header>\n  <ion-navbar color = "primary">\n    <ion-title>\n      Add a RSS Feed\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>RSS Link: </ion-label>\n    <ion-input type = "text" [(ngModel)] = "rss_link.link"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Category: </ion-label>\n    <ion-input type = "text" placeholder = "sports" [(ngModel)] = "rss_link.category"></ion-input>\n  </ion-item>\n\n\n  <ion-footer>\n    <ion-row>\n      <button (click) = "submitRSSFeed()" col margin ion-button color = "primary">Submit</button>\n      <button (click) = "cancel()" col margin ion-button color = "danger">Cancel</button>\n    </ion-row>\n  </ion-footer>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Peter\Documents\GitHub\SleepApp\src\components\feed-adder-modal\feed-adder-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], FeedAdderModalComponent);
    return FeedAdderModalComponent;
}());

//# sourceMappingURL=feed-adder-modal.js.map

/***/ }),

/***/ 697:
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

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SleepTrackingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_sleepTrack__ = __webpack_require__(699);
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

/***/ 699:
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

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(362);
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

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqldatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(702);
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

/***/ })

},[363]);
//# sourceMappingURL=main.js.map