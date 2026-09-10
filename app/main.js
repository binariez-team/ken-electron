(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["main"],{

/***/ 55902:
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor),
/* harmony export */   authInterceptorProviders: () => (/* binding */ authInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/token-storage.service */ 35464);



const TOKEN_HEADER_KEY = 'x-access-token'; // for Node.js Express back-end
class AuthInterceptor {
  constructor(token) {
    this.token = token;
  }
  intercept(req, next) {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      // for Node.js Express back-end
      authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, token)
      });
    }
    return next.handle(authReq);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}
const authInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}];

/***/ }),

/***/ 22761:
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.service */ 24861);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environment */ 27715);







class ApiService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService);
    this.isOnline = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
    /**
     * Prepend base URL to endpoint
     */
    this.host = _environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUri;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(5000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.http.get(this.buildUrl('health')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
      status: 'offline'
    }))))).subscribe(res => {
      this.isOnline.set(res.status === 'ok' ? true : false);
    });
  }
  buildUrl(endpoint) {
    return `${this.host.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
  }
  /**
   * Send GET request
   */
  get(endpoint, options = {}) {
    return this.http.get(this.buildUrl(endpoint), {
      params: options.params,
      headers: options.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => this.handleError(error)));
  }
  /**
   * Send POST request
   */
  post(endpoint, body, options = {}) {
    return this.http.post(this.buildUrl(endpoint), body, {
      params: options.params,
      headers: options.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => this.handleError(error)));
  }
  /**
   * Send PUT request
   */
  put(endpoint, body, options = {}) {
    return this.http.put(this.buildUrl(endpoint), body, {
      params: options.params,
      headers: options.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => this.handleError(error)));
  }
  /**
   * Send DELETE request
   */
  delete(endpoint, options = {}) {
    return this.http.delete(this.buildUrl(endpoint), {
      params: options.params,
      headers: options.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => this.handleError(error)));
  }
  /**
   * Centralized error handling
   */
  handleError(error) {
    let errorMessage = 'Unknown Error!!';
    if (error.error instanceof ErrorEvent) {
      console.log('client error');
      // Client-side Errors
      errorMessage = `${Object.hasOwn(error, 'error.error.message') ? error.error.message : error.error}`;
    } else {
      // Server-side Errors
      console.log('server error');
      if (error.error) {
        if (error.error.message) {
          errorMessage = error.error.message;
        } else if (error.error.errors) {
          if (error.error.errors[0].message) {
            errorMessage = error.error.errors[0].message;
          }
        } else {
          errorMessage = error.error;
        }
      }
    }
    this.notificationService.showError(errorMessage, 'home');
    // throw error
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(() => error);
  }
  // check existance for nested object key
  hasNestedKey(obj, path) {
    if (!obj || typeof obj !== 'object') return false;
    const keys = Array.isArray(path) ? path : path.split('.');
    let current = obj;
    for (const key of keys) {
      if (!Object.hasOwn(current, key)) {
        return false;
      }
      current = current[key];
    }
    return true;
  }
  static {
    this.ɵfac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApiService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 14205:
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-storage.service */ 35464);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 22761);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 99644);









class AuthService {
  constructor(http, tokenStorage, router, api, userService) {
    this.http = http;
    this.tokenStorage = tokenStorage;
    this.router = router;
    this.api = api;
    this.userService = userService;
    this.host = this.api.host;
    this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this.tokenStorage.getToken() !== null);
    this.isAdmin = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(this.tokenStorage.getType() === 'admin');
  }
  login(credentials) {
    return this.http.post(`${this.host}/auth/login`, {
      username: credentials.username,
      password: credentials.password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
      console.log(res.user_type);
      this.tokenStorage.saveUser(res.username);
      this.tokenStorage.saveToken(res.token);
      this.tokenStorage.saveType(res.user_type);
      this.userService.loggedInUser.set(res.username);
      this.userService.userType.set(res.user_type);
      this.isLoggedIn.next(true);
      this.router.navigate(['/home']);
    }));
  }
  logout() {
    window.sessionStorage.clear();
    localStorage.removeItem('auth-token');
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 76723:
/*!*******************************************!*\
  !*** ./src/app/_services/date.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateService: () => (/* binding */ DateService)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class DateService {
  constructor() {}
  getCurrentDate() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
  }
  getCurrentMonth() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().month() + 1; // Adjust for zero-based month indexing in momentjs
  }
  getCurrentYear() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().year();
  }
  // get start of day
  // get start of current month
  getStartOfCurrentMonth() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().clone().startOf('month').format('YYYY-MM-DD');
  }
  getEndOfCurrentMonth() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().clone().endOf('month').format('YYYY-MM-DD');
  }
  // get start of current year
  getStartOfYear() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().startOf('year').format('YYYY-MM-DD');
  }
  getEndOfYear() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().endOf('year').format('YYYY-MM-DD');
  }
  formatDate(date, format = 'YYYY-MM-DD') {
    return moment__WEBPACK_IMPORTED_MODULE_0__(date).format(format);
  }
  static {
    this.ɵfac = function DateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DateService,
      factory: DateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 24861:
/*!****************************************************!*\
  !*** ./src/app/_services/notifications.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsService: () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);



class NotificationsService {
  constructor(messageService) {
    this.messageService = messageService;
    this.successSound = new Audio('assets/sounds/ding-sound.mp3');
    this.errorSound = new Audio('assets/sounds/error-2.wav');
  }
  handleError(error, key) {
    let errorMessage = 'Unknown Error!';
    let errorToast = 'Unknown Error!!';
    if (error.error instanceof ErrorEvent) {
      // Client-side Errors
      errorMessage = `Error: ${error.error}`;
      errorToast = `${Object.hasOwn(error, 'error.error.message') ? error.error.message : error.error}`;
    } else {
      // Server-side Errors
      errorMessage = `Server error code: ${error.status}\n Message: ${error.error}`;
      errorToast = `${Object.hasOwn(error, 'error.error.message') ? error.error.message : error.error}`;
    }
    // console.log(error);
    this.messageService.add({
      severity: 'error',
      key: 'home',
      summary: 'Error',
      detail: errorToast
    });
    // play audio
    this.errorSound.load();
    this.errorSound.play();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error('Something bad happened; please try again later.'));
  }
  showSuccess(msg, key = 'home') {
    this.messageService.add({
      severity: 'success',
      key: key,
      summary: 'Success',
      detail: msg
    });
    // play audio
    this.successSound.load();
    this.successSound.play();
  }
  showInfo(msg, key = 'home') {
    this.messageService.add({
      severity: 'info',
      key: key,
      summary: 'info',
      detail: msg
    });
  }
  showError(msg, key) {
    this.messageService.add({
      severity: 'error',
      key: key,
      summary: 'Error',
      detail: msg
    });
    // play audio
    this.errorSound.load();
    this.errorSound.play();
  }
  // show socket message info
  showSocketMessage(message, key) {
    this.messageService.add({
      severity: 'info',
      key: key,
      summary: 'Info',
      detail: `${message}`,
      life: 4000
    });
    // this.notifySound.play();
  }
  static {
    this.ɵfac = function NotificationsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NotificationsService,
      factory: NotificationsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 65898:
/*!*********************************************!*\
  !*** ./src/app/_services/socket.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocketService: () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class SocketService {
  static {
    this.ɵfac = function SocketService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SocketService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 35464:
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenStorageService: () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const TYPE_KEY = 'auth-type';
class TokenStorageService {
  constructor() {}
  saveToken(token) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  saveUser(user) {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, user);
  }
  getUser() {
    return localStorage.getItem(USER_KEY);
  }
  // type
  saveType(userType) {
    window.localStorage.removeItem(TYPE_KEY);
    window.localStorage.setItem(TYPE_KEY, userType);
  }
  getType() {
    return localStorage.getItem(TYPE_KEY) || '';
  }
  static {
    this.ɵfac = function TokenStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TokenStorageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenStorageService,
      factory: TokenStorageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 99644:
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-storage.service */ 35464);



class UserService {
  constructor(tokenService) {
    this.tokenService = tokenService;
    this.loggedInUser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({});
    this.loggedInName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({});
    this.userType = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.userPermissions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.socketId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.loggedInUser.set(this.tokenService.getUser());
    this.userType.set(this.tokenService.getType());
  }
  static {
    this.ɵfac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/auth.service */ 14205);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 88166);








const _c0 = () => ({
  width: "50vw"
});
const _c1 = () => ({
  "1199px": "65vw",
  "575px": "90vw"
});
function AppComponent_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "navbar");
  }
}
class AppComponent {
  constructor(authService, primengConfig, messageService) {
    this.authService = authService;
    this.primengConfig = primengConfig;
    this.messageService = messageService;
    this.title = 'Kengroup';
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  authenticateLogin() {
    return this.authService.isLoggedIn.value;
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 6,
      consts: [[4, "ngIf"], ["key", "home"], ["key", "home", 3, "breakpoints"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_navbar_0_Template, 1, 0, "navbar", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet")(2, "p-toast", 1)(3, "p-confirmDialog", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authenticateLogin());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialog, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.Toast, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 32181);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ 71152);
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ 55902);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/menu */ 23673);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menubar */ 15728);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tieredmenu */ 69818);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabmenu */ 94132);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ 88166);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/breadcrumb */ 65475);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/service-worker */ 46140);




























// socket io
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';



// const config: SocketIoConfig = {
//     url: environment.apiUri,
//     options: {},
// };
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [
      // SocketIoModule,
      _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.authInterceptorProviders, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService, primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.withInterceptorsFromDi)())],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routes__WEBPACK_IMPORTED_MODULE_0__.AppRoutesModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_13__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_14__.MenubarModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_15__.TieredMenuModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_16__.TabMenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__.ConfirmDialogModule, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.ToastModule, primeng_card__WEBPACK_IMPORTED_MODULE_20__.CardModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_21__.RippleModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__.ProgressSpinnerModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__.ToolbarModule, primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_26__.BreadcrumbModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_27__.ProgressBarModule,
      // SocketIoModule.forRoot(config),
      _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__.ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.isDevMode)() && !window.electron,
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _update_update_component__WEBPACK_IMPORTED_MODULE_3__.UpdateComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routes__WEBPACK_IMPORTED_MODULE_0__.AppRoutesModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_13__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_14__.MenubarModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_15__.TieredMenuModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_16__.TabMenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__.ConfirmDialogModule, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.ToastModule, primeng_card__WEBPACK_IMPORTED_MODULE_20__.CardModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_21__.RippleModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__.ProgressSpinnerModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__.ToolbarModule, primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_26__.BreadcrumbModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_27__.ProgressBarModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 32181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutesModule: () => (/* binding */ AppRoutesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/auth.guard */ 34978);
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/update.component */ 71152);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);







const routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  data: {
    breadcrumb: 'home'
  },
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'sell',
  data: {
    breadcrumb: 'Sell'
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-src_app_components_products-dialog_products-dialog_component_ts-node_modules_primeng_-a35c30"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-radiobutton_mjs"), __webpack_require__.e("default-src_app__services_local-storage_service_ts-node_modules_primeng_fesm2022_primeng-auto-74b038"), __webpack_require__.e("default-src_app_core_pipes_dollar_pipe_ts-node_modules_primeng_fesm2022_primeng-fieldset_mjs"), __webpack_require__.e("default-src_app__directives_number_directive_ts-src_app_core_pipes_exchanged-lira_pipe_ts-nod-711508"), __webpack_require__.e("default-src_app_components_links-component_links_service_ts-src_app_history_history_service_t-b22567"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tabview_mjs-node_modules_primeng_fesm2022_prime-dd5a83"), __webpack_require__.e("default-src_app_components_print_print_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sell_sell_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sell/sell.module */ 96577)).then(m => m.SellModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'order',
  data: {
    breadcrumb: 'Order'
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-src_app_components_products-dialog_products-dialog_component_ts-node_modules_primeng_-a35c30"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-radiobutton_mjs"), __webpack_require__.e("default-src_app__services_decimal_service_ts"), __webpack_require__.e("default-src_app__services_local-storage_service_ts-node_modules_primeng_fesm2022_primeng-auto-74b038"), __webpack_require__.e("common"), __webpack_require__.e("src_app_order_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./order/order.module */ 51391)).then(m => m.OrderModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'return',
  data: {
    breadcrumb: 'Return'
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-src_app_components_products-dialog_products-dialog_component_ts-node_modules_primeng_-a35c30"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-radiobutton_mjs"), __webpack_require__.e("default-src_app__services_local-storage_service_ts-node_modules_primeng_fesm2022_primeng-auto-74b038"), __webpack_require__.e("default-src_app_core_pipes_dollar_pipe_ts-node_modules_primeng_fesm2022_primeng-fieldset_mjs"), __webpack_require__.e("default-src_app__directives_number_directive_ts-src_app_core_pipes_exchanged-lira_pipe_ts-nod-711508"), __webpack_require__.e("default-src_app_components_links-component_links_service_ts-src_app_history_history_service_t-b22567"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tabview_mjs-node_modules_primeng_fesm2022_prime-dd5a83"), __webpack_require__.e("src_app_return_return_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./return/return.module */ 71729)).then(m => m.ReturnModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'supply',
  data: {
    breadcrumb: 'Supply'
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb"), __webpack_require__.e("default-src_app_components_products-dialog_products-dialog_component_ts-node_modules_primeng_-a35c30"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-radiobutton_mjs"), __webpack_require__.e("default-src_app__services_decimal_service_ts"), __webpack_require__.e("default-src_app__services_local-storage_service_ts-node_modules_primeng_fesm2022_primeng-auto-74b038"), __webpack_require__.e("default-src_app_core_pipes_dollar_pipe_ts-node_modules_primeng_fesm2022_primeng-fieldset_mjs"), __webpack_require__.e("default-src_app__directives_number_directive_ts-src_app_core_pipes_exchanged-lira_pipe_ts-nod-711508"), __webpack_require__.e("common"), __webpack_require__.e("src_app_supply_supply_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./supply/supply.module */ 50295)).then(m => m.SupplyModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'stock',
  data: {
    breadcrumb: 'Stock'
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-radiobutton_mjs"), __webpack_require__.e("default-src_app_core_pipes_dollar_pipe_ts-node_modules_primeng_fesm2022_primeng-fieldset_mjs"), __webpack_require__.e("default-src_app_components_links-component_links_service_ts-node_modules_primeng_fesm2022_pri-173b5f"), __webpack_require__.e("common"), __webpack_require__.e("src_app_stock_stock_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stock/stock.module */ 51127)).then(m => m.StockModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'history',
  data: {
    breadcrumb: 'History'
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-src_app_components_products-dialog_products-dialog_component_ts-node_modules_primeng_-a35c30"), __webpack_require__.e("default-src_app__services_decimal_service_ts"), __webpack_require__.e("default-src_app__services_local-storage_service_ts-node_modules_primeng_fesm2022_primeng-auto-74b038"), __webpack_require__.e("default-src_app_core_pipes_dollar_pipe_ts-node_modules_primeng_fesm2022_primeng-fieldset_mjs"), __webpack_require__.e("default-src_app_components_links-component_links_service_ts-src_app_history_history_service_t-b22567"), __webpack_require__.e("default-src_app_components_print_print_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_history_history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./history/history.module */ 33287)).then(m => m.HistoryModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'accounting',
  data: {
    breadcrumb: 'Accounting'
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-radiobutton_mjs"), __webpack_require__.e("default-src_app__services_decimal_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_accounting_accounting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./accounting/accounting.module */ 57263)).then(m => m.AccountingModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'reports',
  data: {
    breadcrumb: 'Reports'
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-src_app_components_products-dialog_products-dialog_component_ts-node_modules_primeng_-a35c30"), __webpack_require__.e("default-src_app__services_decimal_service_ts"), __webpack_require__.e("default-src_app_components_links-component_links_service_ts-node_modules_primeng_fesm2022_pri-173b5f"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reports_reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 31943)).then(m => m.ReportsModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'profile',
  data: {
    breadcrumb: 'Profile'
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4219)).then(m => m.ProfileModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'users',
  data: {
    breadcrumb: 'Users'
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("src_app_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ 70456)).then(m => m.UsersModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'update',
  data: {
    breadcrumb: 'Update'
  },
  component: _update_update_component__WEBPACK_IMPORTED_MODULE_2__.UpdateComponent
}, {
  path: '**',
  redirectTo: '/home'
}];
class AppRoutesModule {
  static {
    this.ɵfac = function AppRoutesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules
      }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutesModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 34978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/api.service */ 22761);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/token-storage.service */ 35464);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ 14205);
// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/_services/auth.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard {
//   constructor(private router: Router, private authService: AuthService) { }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (!this.authService.isLoggedIn.value) {
//       this.router.navigate(['/login'])
//     }
//     return this.authService.isLoggedIn.value;
//   }
// }






const AuthGuard = (route, state) => {
  const apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService);
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
  const tokenStorage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService);
  const token = tokenStorage.getToken();
  if (!token) {
    router.navigate(['/login']);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
  }
  // backend token validation
  return apiService.get('/auth/validate-token', {
    headers: {
      Authorization: `${token}`
    }
  }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
    if (res) return true;
    authService.isLoggedIn.next(false);
    router.navigate(['/login']);
    return false;
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
    authService.isLoggedIn.next(false);
    router.navigate(['/login']);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
  }));
};

/***/ }),

/***/ 27715:
/*!********************************!*\
  !*** ./src/app/environment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  apiUri: 'http://localhost:3500'
  // apiUri: 'https://api.kencosmetics.com',
};

/***/ }),

/***/ 27824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/user.service */ 99644);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ 14205);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);











function HomeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Quick Shortcuts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.navigate("/sell"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7)(2, "div")(3, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class HomeComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.userService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
    this.userType = this.userService.userType;
    this.paymentDialogVisible = false;
    this.debtDialogVisible = false;
    this.expensesDialogVisible = false;
    this.dialogMode = 'add';
  }
  navigate(route) {
    this.router.navigate([route]);
  }
  openExpenseDialog() {
    this.expensesDialogVisible = true;
  }
  closeDialog() {
    this.expensesDialogVisible = false;
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 2,
      consts: [[1, "grid", "m-1"], [1, "col-12", "md:col-6", "lg:col-4"], [3, "toggleable"], ["pTemplate", "header"], [1, "grid"], [1, "col-6"], [1, "surface-card", "shadow-2", "p-3", "border-round", "mt-2", 3, "click"], [1, "flex", "justify-content-between"], [1, "text-500", "mt-2", "mb-2"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 2, "width", "2.5rem"], [1, "pi", "pi-truck", "text-green-500", 2, "font-size", "1.5rem"], ["class", "surface-card shadow-2 p-3 border-round mt-2", 3, "click", 4, "ngIf"], [1, "m-0"], [1, "pi", "pi-table", "pi-fw"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-round", 2, "width", "2.5rem"], [1, "pi", "pi-shopping-cart", "text-blue-500", 2, "font-size", "1.5rem"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-panel", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_ng_template_3_Template, 3, 0, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_6_listener() {
            return ctx.navigate("/order");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "div")(9, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 7, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("toggleable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userType() === "admin");
        }
      },
      dependencies: [primeng_badge__WEBPACK_IMPORTED_MODULE_4__.BadgeModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: [".surface-card[_ngcontent-%COMP%]:hover {\n  background-color: #bcc3cd !important;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VyZmFjZS1jYXJkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjM2NkICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3644:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../package.json */ 8330);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ 14205);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/notifications.service */ 24861);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/progressspinner */ 53244);














const _c0 = ["username"];
function LoginComponent_p_button_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-button", 18);
  }
}
function LoginComponent_p_progressSpinner_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-progressSpinner", 19);
  }
}
class LoginComponent {
  constructor(authService, notificationService) {
    this.authService = authService;
    this.notificationService = notificationService;
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
    });
    this.usernameControl = this.loginForm.controls.username;
    this.passwordControl = this.loginForm.controls.password;
    // define loader
    this.loader = false;
    this.version = _package_json__WEBPACK_IMPORTED_MODULE_0__.version;
  }
  ngOnInit() {
    this.authService.logout();
  }
  submitLogin() {
    if (this.loginForm.valid) {
      // to be implemented, activate loader
      // .......
      this.loader = true;
      this.authService.login({
        username: this.usernameControl.value,
        password: this.passwordControl.value
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
        this.loader = false;
      })).subscribe({
        error: error => {
          console.log(error);
          this.usernameElement.nativeElement.focus();
          this.notificationService.handleError(error, 'login');
          this.loginForm.reset();
        },
        complete: () => this.loginForm.reset()
      });
    }
  }
  // refresh and update for PWA
  updateApp() {
    this.router.navigate(['/update']);
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.usernameElement = _t.first);
        }
      },
      decls: 24,
      vars: 4,
      consts: [["username", ""], [1, "grid"], [1, "col-12", "lg:col-6", "lg:col-offset-3"], [1, "surface-card", "p-4", "shadow-2", "border-round", "w-full"], [3, "ngSubmit", "formGroup"], [1, "text-center", "mb-5"], ["src", "assets/images/icon-250.png", "alt", "Image", "height", "50", 1, "mb-3"], [1, "text-900", "text-3xl", "font-medium", "mb-3"], ["for", "username", 1, "block", "text-900", "font-medium", "mb-2"], ["id", "username", "pInputText", "", "formControlName", "username", "placeholder", "Username", "spellcheck", "false", 1, "w-full", "mb-3"], ["for", "password", 1, "block", "text-900", "font-medium", "mb-2"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Password", "pInputText", "", 1, "w-full", "mb-3"], [1, "text-center"], ["type", "submit", "label", "Login", "icon", "pi pi-sign-in pi-fw", 4, "ngIf"], ["styleClass", "w-3rem h-3rem", 4, "ngIf"], [1, "flex", "justify-content-center", "mt-5"], ["label", "Update", "severity", "info", "icon", "pi pi-sync", 3, "onClick"], ["key", "login"], ["type", "submit", "label", "Login", "icon", "pi pi-sign-in pi-fw"], ["styleClass", "w-3rem h-3rem"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.submitLogin());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Login to Continue ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div")(9, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 9, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LoginComponent_p_button_17_Template, 1, 0, "p-button", 13)(18, LoginComponent_p_progressSpinner_18_Template, 1, 0, "p-progressSpinner", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15)(22, "p-button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function LoginComponent_Template_p_button_onClick_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.updateApp());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "p-toast", 17);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loader);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Current Version: ", ctx.version, "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.Toast, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinner],
      styles: [".grid[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxpQkFBQTtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xuICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 88166:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/socket.service */ 65898);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/api.service */ 22761);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ 35464);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ 14205);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ 99644);
/* harmony import */ var _print_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print.service */ 5312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menubar */ 15728);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tieredmenu */ 69818);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/breadcrumb */ 65475);




















const _c0 = ["menu"];
const _c1 = () => ({
  icon: "pi pi-home pi-fw"
});
const _c2 = () => ({
  width: "50vw"
});
const _c3 = (a0, a1) => ({
  "text-green-500 pi-circle-on": a0,
  "text-red-500 pi-spinner-dotted pi-spin": a1
});
function NavbarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 6);
  }
}
function NavbarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavbarComponent_ng_template_2_Template_p_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](menu_r2.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p-tieredMenu", 9, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onShow", function NavbarComponent_ng_template_2_Template_p_tieredMenu_onShow_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.blur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", ctx_r2.isOnline() ? ctx_r2.loggedInUser() : "Connecting");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](5, _c3, ctx_r2.isOnline(), !ctx_r2.isOnline()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx_r2.subItems)("popup", true);
  }
}
class NavbarComponent {
  constructor(tokenStorage, authService, confirmationService, userService, router, activatedRoute, printService) {
    this.tokenStorage = tokenStorage;
    this.authService = authService;
    this.confirmationService = confirmationService;
    this.userService = userService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.printService = printService;
    this.socketService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_services_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService);
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService);
    this.isOnline = this.api.isOnline;
    this.userType = this.userService.userType;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.loggedInUser = this.userService.loggedInUser;
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    this.items = [{
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/home',
      routerLinkActiveOptions: {
        exact: false
      }
    }, {
      label: 'Order',
      icon: 'pi pi-fw pi-cart-plus',
      routerLink: '/order',
      routerLinkActiveOptions: {
        exact: false
      }
    }, {
      label: 'Sell',
      icon: 'pi pi-fw pi-shopping-cart',
      routerLink: '/sell',
      routerLinkActiveOptions: {
        exact: false
      },
      visible: this.userType() === 'admin'
    }, {
      label: 'Return',
      icon: 'pi pi-fw pi-replay',
      routerLink: '/return',
      routerLinkActiveOptions: {
        exact: false
      },
      visible: this.userType() === 'admin'
    }, {
      label: 'Supply',
      icon: 'pi pi-fw pi-truck',
      routerLink: '/supply',
      routerLinkActiveOptions: {
        exact: false
      },
      visible: this.userType() === 'admin'
    }, {
      visible: this.userType() === 'admin',
      label: 'Stock',
      icon: 'pi pi-fw pi-table',
      routerLinkActiveOptions: {
        exact: false
      },
      items: [{
        label: 'Inventory',
        icon: 'pi pi-fw pi-box',
        routerLink: '/stock/items'
      }, {
        label: 'Categories',
        icon: 'pi pi-fw pi-list',
        routerLink: '/stock/categories'
      }, {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/stock/settings'
      }, {
        label: 'Stock Archive',
        icon: 'pi pi-fw pi-history',
        routerLink: '/stock/archive'
      }]
    }, {
      label: 'History',
      icon: 'pi pi-fw pi-history',
      routerLinkActiveOptions: {
        exact: false
      },
      items: [{
        label: 'Sales',
        icon: 'pi pi-fw pi-receipt',
        routerLink: '/history/sales-history',
        visible: this.userType() === 'admin'
      }, {
        label: 'Orders',
        icon: 'pi pi-fw pi-cart-plus',
        routerLink: '/history/orders-history'
      }, {
        label: 'Purchases',
        icon: 'pi pi-fw pi pi-truck',
        routerLink: '/history/purchases-history',
        visible: this.userType() === 'admin'
      }, {
        label: 'Returns',
        icon: 'pi pi-fw pi-replay',
        routerLink: '/history/return-history',
        visible: this.userType() === 'admin'
      }]
    }, {
      label: 'Accounting',
      icon: 'pi pi-fw pi-calculator',
      routerLinkActiveOptions: {
        exact: false
      },
      items: [{
        label: 'Accounts',
        icon: 'pi pi-fw pi-users',
        routerLink: '/accounting/accounts'
      }, {
        visible: this.userType() === 'admin',
        label: 'Vouchers',
        icon: 'pi pi-fw pi-paperclip',
        routerLink: '/accounting/journal-vouchers'
      }, {
        visible: this.userType() === 'admin',
        label: 'Journal Items',
        icon: 'pi pi-fw pi-list',
        routerLink: '/accounting/journal-items'
      }, {
        visible: this.userType() === 'admin',
        separator: true
      }, {
        visible: this.userType() === 'admin',
        label: 'CoA',
        icon: 'pi pi-fw pi-table',
        routerLink: '/accounting/chart'
      }]
    }, {
      visible: this.userType() === 'admin',
      label: 'Reports',
      icon: 'pi pi-fw pi-chart-bar',
      routerLink: '/reports',
      routerLinkActiveOptions: {
        exact: false
      }
    }];
    this.subItems = [{
      label: 'Profile',
      icon: 'pi pi-fw pi-user',
      routerLink: '/profile',
      routerLinkActiveOptions: {
        exact: false
      }
    }, {
      visible: this.userType() === 'admin',
      label: 'Users',
      icon: 'pi pi-fw pi-users',
      routerLink: '/users',
      routerLinkActiveOptions: {
        exact: false
      }
    },
    // {
    //     label: 'Backup',
    //     icon: 'pi pi-database',
    //     command: () => this.printService.backup(),
    // },
    {
      label: 'Update',
      icon: 'pi pi-fw pi-sync',
      routerLink: '/update',
      routerLinkActiveOptions: {
        exact: false
      }
    },
    // {
    //     label: 'Theme',
    //     icon: 'pi pi-star',
    //     items: [
    //         {
    //             label: 'Light',
    //             icon: 'pi pi-sun',
    //             command: () => this.changeTheme('lara-light-blue')
    //         },
    //         {
    //             label: 'Dark',
    //             icon: 'pi pi-moon',
    //             command: () => this.changeTheme('lara-dark-blue')
    //         }
    //     ]
    // },
    {
      separator: true
    }, {
      label: 'Logout',
      icon: 'pi pi-fw pi-sign-out',
      styleClass: 'text-danger',
      command: () => this.logout()
    }];
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  // implementation of buildBreadCrumb
  buildBreadCrumb(route, url = '', breadcrumbs = []) {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }
    const nextUrl = path ? `${url}/${path}` : url;
    const breadcrumb = {
      label: label
    };
    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      //If we are not on our current path yet,
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
  logout() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to logout?',
      header: 'Warning',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      defaultFocus: 'reject',
      accept: () => {
        this.authService.logout();
      }
    });
  }
  blur() {
    setTimeout(() => {
      this.menu.nativeElement.children[0].children[0].children[0].children[0].classList.remove('p-focus');
    }, 1);
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_print_service__WEBPACK_IMPORTED_MODULE_5__.PrintService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["navbar"]],
      viewQuery: function NavbarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
        }
      },
      decls: 6,
      vars: 8,
      consts: [["toggleMenu", ""], ["menu", ""], [3, "model", "autoDisplay"], ["pTemplate", "start"], ["pTemplate", "end"], [1, "max-w-full", 3, "model", "home"], ["src", "assets/images/kengroup.png", "height", "50", 1, "mx-4", "my-2"], ["name", "toggleMenu", "styleClass", "p-button-secondary", "type", "button", 3, "click", "label", "text"], [1, "pi", "pi-fw", "mr-1", 3, "ngClass"], [3, "onShow", "model", "popup"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-menubar", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NavbarComponent_ng_template_1_Template, 1, 0, "ng-template", 3)(2, NavbarComponent_ng_template_2_Template, 5, 8, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-breadcrumb", 5)(4, "p-toast")(5, "p-confirmDialog");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx.items)("autoDisplay", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx.breadcrumbs)("home", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c2));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_14__.Menubar, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_15__.TieredMenu, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__.ConfirmDialog, primeng_toast__WEBPACK_IMPORTED_MODULE_17__.Toast, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__.Breadcrumb],
      styles: ["[_nghost-%COMP%]  .p-menubar {\n  border-radius: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdDo6bmctZGVlcCAucC1tZW51YmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICAvLyBwb3NpdGlvbjogc3RpY2t5O1xuICAgIC8vIHRvcDogMDtcbiAgICAvLyB6LWluZGV4OiAxO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!**********************************!*\
  !*** ./src/app/print.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintService: () => (/* binding */ PrintService)
/* harmony export */ });
/* harmony import */ var _Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/notifications.service */ 24861);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/date.service */ 76723);






class PrintService {
  constructor(dateService) {
    this.dateService = dateService;
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService);
    this.invoice = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
  }
  // print invoice
  print(invoice, type) {
    var _this = this;
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const new_invoice = structuredClone(invoice);
      new_invoice.order_datetime = _this.dateService.formatDate(invoice.order_datetime, 'DD-MM-YYYY');
      new_invoice.type = type;
      // check if the process is running in electron
      if (window.electron) {
        yield window.electron.send('print-invoice', new_invoice);
      }
    })();
  }
  // print statement
  printStatement(data) {
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (window.electron) {
        yield window.electron.send('print-statement', data);
      }
    })();
  }
  printAuxiliaryStatement(data) {
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (window.electron) {
        yield window.electron.send('print-auxiliary-statement', data);
      }
    })();
  }
  printTrialBalance(data) {
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (window.electron) {
        yield window.electron.send('print-trial-balance', data);
      }
    })();
  }
  // print invoice
  printDelivery(invoice) {
    var _this2 = this;
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const new_invoice = structuredClone(invoice);
      new_invoice.order_datetime = _this2.dateService.formatDate(invoice.order_datetime, 'DD-MM-YYYY');
      // check if the process is running in electron
      if (window.electron) {
        yield window.electron.send('print-delivery', new_invoice);
      }
    })();
  }
  // print stock
  printStock(items) {
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (window.electron) {
        yield window.electron.send('print-stock', items);
      }
    })();
  }
  printVoucher(voucher) {
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (window.electron) {
        yield window.electron.send('print-voucher', voucher);
      }
    })();
  }
  static {
    this.ɵfac = function PrintService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: PrintService,
      factory: PrintService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 71152:
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateComponent: () => (/* binding */ UpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _update_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.service */ 65832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressbar */ 21416);









function UpdateComponent_ng_template_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-progressSpinner", 8);
  }
}
function UpdateComponent_ng_template_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function UpdateComponent_ng_template_10_Conditional_2_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.checkForUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UpdateComponent_ng_template_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function UpdateComponent_ng_template_10_Conditional_3_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.downloadUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UpdateComponent_ng_template_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-progressBar", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.updateService.downloadProgress());
  }
}
function UpdateComponent_ng_template_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function UpdateComponent_ng_template_10_Conditional_5_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.applyUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UpdateComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UpdateComponent_ng_template_10_Conditional_1_Template, 1, 0, "p-progressSpinner", 8)(2, UpdateComponent_ng_template_10_Conditional_2_Template, 1, 0, "p-button", 9)(3, UpdateComponent_ng_template_10_Conditional_3_Template, 1, 0, "p-button", 10)(4, UpdateComponent_ng_template_10_Conditional_4_Template, 1, 1, "p-progressBar", 11)(5, UpdateComponent_ng_template_10_Conditional_5_Template, 1, 0, "p-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r1.updateService.checking() ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r1.updateService.checked() === false && !ctx_r1.updateService.downloadingUpdate() ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r1.updateService.updateAvailable() ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r1.updateService.downloadingUpdate() ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r1.updateService.installAvailable() ? 5 : -1);
  }
}
class UpdateComponent {
  constructor() {
    this.updateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_update_service__WEBPACK_IMPORTED_MODULE_0__.UpdateService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  }
  checkForUpdate() {
    this.updateService.checkForUpdate();
  }
  downloadUpdate() {
    this.updateService.downloadUpdate();
  }
  applyUpdate() {
    this.updateService.applyUpdate();
  }
  // fixDatabase() {
  //     this.updateService.fixDatabase();
  // }
  backHome() {
    this.router.navigate(['/sell']);
  }
  static {
    this.ɵfac = function UpdateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UpdateComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UpdateComponent,
      selectors: [["app-update"]],
      decls: 13,
      vars: 2,
      consts: [[1, "grid", "m-1"], [1, "col-6", "col-offset-3"], [1, "text-center"], [1, "mb-0"], [1, "mt-1"], ["pTemplate", "footer"], [1, "flex", "justify-content-center", "mt-3"], ["label", "Back Home", "size", "small", "icon", "pi pi-home", 3, "onClick"], ["ariaLabel", "loading"], ["label", "Check for update", "icon", "pi pi-sync", "severity", "contrast", "styleClass", "text-center"], ["label", "Download Now", "icon", "pi pi-cloud-download", "severity", "success", "styleClass", "text-center"], [3, "value"], ["label", "Install Now", "icon", "pi pi-download", "severity", "success", "styleClass", "text-center"], ["label", "Check for update", "icon", "pi pi-sync", "severity", "contrast", "styleClass", "text-center", 3, "onClick"], ["label", "Download Now", "icon", "pi pi-cloud-download", "severity", "success", "styleClass", "text-center", 3, "onClick"], ["label", "Install Now", "icon", "pi pi-download", "severity", "success", "styleClass", "text-center", 3, "onClick"]],
      template: function UpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-card")(3, "div", 2)(4, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Kengroup");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UpdateComponent_ng_template_10_Template, 6, 5, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "p-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function UpdateComponent_Template_p_button_onClick_12_listener() {
            return ctx.backHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Current Version: ", ctx.updateService.version, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.updateService.feedback());
        }
      },
      dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_card__WEBPACK_IMPORTED_MODULE_5__.Card, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_6__.ProgressSpinner, primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__.ProgressBar],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 65832:
/*!******************************************!*\
  !*** ./src/app/update/update.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateService: () => (/* binding */ UpdateService)
/* harmony export */ });
/* harmony import */ var _Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../package.json */ 8330);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/notifications.service */ 24861);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ 22761);







class UpdateService {
  constructor() {
    this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService);
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService);
    this.version = _package_json__WEBPACK_IMPORTED_MODULE_1__.version;
    this.feedback = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null);
    this.checking = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.checked = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.updateAvailable = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.downloadingUpdate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.downloadProgress = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null);
    this.installAvailable = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    // check if electron or web
    this.isElectron = window.electron ? true : false;
    // electron window instance
    this.electron = window.electron;
    // checking for update
    if (window.electron) {
      window.electron.checkingForUpdate((event, data) => {
        this.ngZone.run(() => {
          this.checking.set(true);
          this.feedback.set(data);
        });
      });
    }
    // update available
    if (window.electron) {
      window.electron.updateAvailable((event, data) => {
        this.ngZone.run(() => {
          this.checking.set(false);
          this.updateAvailable.set(true);
          this.feedback.set(`version ${data.version} is available.`);
        });
      });
    }
    // update not available
    if (window.electron) {
      window.electron.updateNotAvailable((event, data) => {
        this.ngZone.run(() => {
          this.checking.set(false);
          this.checked.set(false);
          this.feedback.set('Your current version is up-to-date!');
        });
      });
    }
    // update error
    if (window.electron) {
      window.electron.error((event, data) => {
        this.ngZone.run(() => {
          this.checking.set(false);
          this.checked.set(false);
          this.updateAvailable.set(false);
          this.feedback.set('An error has occured!');
          console.log(data);
        });
      });
    }
    // downloading update
    if (window.electron) {
      window.electron.downloading((event, data) => {
        this.ngZone.run(() => {
          this.checking.set(false);
          this.updateAvailable.set(false);
          this.downloadingUpdate.set(true);
          console.log(parseInt(data.percent));
          this.downloadProgress.set(parseInt(data.percent));
          this.feedback.set(`Downloading: ${data.percent.toFixed(2)}%`);
          console.log(data);
        });
      });
    }
    // download completed
    if (this.isElectron) {
      this.electron.downloadCompleted((event, data) => {
        this.ngZone.run(() => {
          this.checking.set(false);
          this.downloadingUpdate.set(false);
          this.updateAvailable.set(false);
          this.installAvailable.set(true);
          this.feedback.set(`Ready to install version ${data.version} of size ${(data.files[0]['size'] / 1000000).toFixed(2)} MB.`);
          console.log(data);
        });
      });
    }
  }
  checkForUpdate() {
    var _this = this;
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isElectron) {
        _this.checked.set(true);
        _this.feedback.set(null);
        yield _this.electron.send('update');
      } else {
        _this.checked.set(true);
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistration().then(registration => {
            if (registration) {
              registration.unregister().then(() => window.location.reload()); // Reload after unregistration
            } else {
              _this.notificationService.showInfo('No update available');
              _this.checked.set(false);
            }
          });
        }
      }
    })();
  }
  downloadUpdate() {
    var _this2 = this;
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (window.electron) {
        _this2.updateAvailable.set(false);
        _this2.checking.set(true);
        yield window.electron.send('download');
      }
    })();
  }
  applyUpdate() {
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (window.electron) {
        yield window.electron.send('applyUpdate');
      }
    })();
  }
  static {
    this.ɵfac = function UpdateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UpdateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: UpdateService,
      factory: UpdateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 35358:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 85637,
	"./af.js": 85637,
	"./ar": 6777,
	"./ar-dz": 74508,
	"./ar-dz.js": 74508,
	"./ar-kw": 67504,
	"./ar-kw.js": 67504,
	"./ar-ly": 95373,
	"./ar-ly.js": 95373,
	"./ar-ma": 92412,
	"./ar-ma.js": 92412,
	"./ar-ps": 78823,
	"./ar-ps.js": 78823,
	"./ar-sa": 36670,
	"./ar-sa.js": 36670,
	"./ar-tn": 36448,
	"./ar-tn.js": 36448,
	"./ar.js": 6777,
	"./az": 23009,
	"./az.js": 23009,
	"./be": 28299,
	"./be.js": 28299,
	"./bg": 4685,
	"./bg.js": 4685,
	"./bm": 11171,
	"./bm.js": 11171,
	"./bn": 23590,
	"./bn-bd": 5841,
	"./bn-bd.js": 5841,
	"./bn.js": 23590,
	"./bo": 54309,
	"./bo.js": 54309,
	"./br": 54130,
	"./br.js": 54130,
	"./bs": 8033,
	"./bs.js": 8033,
	"./ca": 55294,
	"./ca.js": 55294,
	"./cs": 53028,
	"./cs.js": 53028,
	"./cv": 5807,
	"./cv.js": 5807,
	"./cy": 70342,
	"./cy.js": 70342,
	"./da": 38269,
	"./da.js": 38269,
	"./de": 11489,
	"./de-at": 42123,
	"./de-at.js": 42123,
	"./de-ch": 17757,
	"./de-ch.js": 17757,
	"./de.js": 11489,
	"./dv": 28152,
	"./dv.js": 28152,
	"./el": 7687,
	"./el.js": 7687,
	"./en-au": 46668,
	"./en-au.js": 46668,
	"./en-ca": 76798,
	"./en-ca.js": 76798,
	"./en-gb": 53615,
	"./en-gb.js": 53615,
	"./en-ie": 91364,
	"./en-ie.js": 91364,
	"./en-il": 79907,
	"./en-il.js": 79907,
	"./en-in": 70533,
	"./en-in.js": 70533,
	"./en-nz": 33190,
	"./en-nz.js": 33190,
	"./en-sg": 51096,
	"./en-sg.js": 51096,
	"./eo": 3962,
	"./eo.js": 3962,
	"./es": 37726,
	"./es-do": 65010,
	"./es-do.js": 65010,
	"./es-mx": 63654,
	"./es-mx.js": 63654,
	"./es-us": 59043,
	"./es-us.js": 59043,
	"./es.js": 37726,
	"./et": 25343,
	"./et.js": 25343,
	"./eu": 90728,
	"./eu.js": 90728,
	"./fa": 60787,
	"./fa.js": 60787,
	"./fi": 71771,
	"./fi.js": 71771,
	"./fil": 45335,
	"./fil.js": 45335,
	"./fo": 69761,
	"./fo.js": 69761,
	"./fr": 1670,
	"./fr-ca": 28991,
	"./fr-ca.js": 28991,
	"./fr-ch": 97280,
	"./fr-ch.js": 97280,
	"./fr.js": 1670,
	"./fy": 24203,
	"./fy.js": 24203,
	"./ga": 69858,
	"./ga.js": 69858,
	"./gd": 38605,
	"./gd.js": 38605,
	"./gl": 27365,
	"./gl.js": 27365,
	"./gom-deva": 33896,
	"./gom-deva.js": 33896,
	"./gom-latn": 95587,
	"./gom-latn.js": 95587,
	"./gu": 97950,
	"./gu.js": 97950,
	"./he": 92029,
	"./he.js": 92029,
	"./hi": 51897,
	"./hi.js": 51897,
	"./hr": 29816,
	"./hr.js": 29816,
	"./hu": 22253,
	"./hu.js": 22253,
	"./hy-am": 28196,
	"./hy-am.js": 28196,
	"./id": 51307,
	"./id.js": 51307,
	"./is": 95474,
	"./is.js": 95474,
	"./it": 23099,
	"./it-ch": 45807,
	"./it-ch.js": 45807,
	"./it.js": 23099,
	"./ja": 19127,
	"./ja.js": 19127,
	"./jv": 30182,
	"./jv.js": 30182,
	"./ka": 10758,
	"./ka.js": 10758,
	"./kk": 93444,
	"./kk.js": 93444,
	"./km": 72034,
	"./km.js": 72034,
	"./kn": 46223,
	"./kn.js": 46223,
	"./ko": 83064,
	"./ko.js": 83064,
	"./ku": 8714,
	"./ku-kmr": 10961,
	"./ku-kmr.js": 10961,
	"./ku.js": 8714,
	"./ky": 12062,
	"./ky.js": 12062,
	"./lb": 84796,
	"./lb.js": 84796,
	"./lo": 19279,
	"./lo.js": 19279,
	"./lt": 106,
	"./lt.js": 106,
	"./lv": 11840,
	"./lv.js": 11840,
	"./me": 42240,
	"./me.js": 42240,
	"./mi": 13588,
	"./mi.js": 13588,
	"./mk": 15518,
	"./mk.js": 15518,
	"./ml": 37823,
	"./ml.js": 37823,
	"./mn": 98657,
	"./mn.js": 98657,
	"./mr": 61285,
	"./mr.js": 61285,
	"./ms": 43014,
	"./ms-my": 86253,
	"./ms-my.js": 86253,
	"./ms.js": 43014,
	"./mt": 20167,
	"./mt.js": 20167,
	"./my": 47940,
	"./my.js": 47940,
	"./nb": 50014,
	"./nb.js": 50014,
	"./ne": 49023,
	"./ne.js": 49023,
	"./nl": 34208,
	"./nl-be": 71412,
	"./nl-be.js": 71412,
	"./nl.js": 34208,
	"./nn": 81354,
	"./nn.js": 81354,
	"./oc-lnc": 40870,
	"./oc-lnc.js": 40870,
	"./pa-in": 80389,
	"./pa-in.js": 80389,
	"./pl": 7342,
	"./pl.js": 7342,
	"./pt": 34774,
	"./pt-br": 73003,
	"./pt-br.js": 73003,
	"./pt.js": 34774,
	"./ro": 85333,
	"./ro.js": 85333,
	"./ru": 73451,
	"./ru.js": 73451,
	"./sd": 43921,
	"./sd.js": 43921,
	"./se": 59682,
	"./se.js": 59682,
	"./si": 80582,
	"./si.js": 80582,
	"./sk": 4348,
	"./sk.js": 4348,
	"./sl": 95337,
	"./sl.js": 95337,
	"./sq": 39358,
	"./sq.js": 39358,
	"./sr": 50683,
	"./sr-cyrl": 69382,
	"./sr-cyrl.js": 69382,
	"./sr.js": 50683,
	"./ss": 51156,
	"./ss.js": 51156,
	"./sv": 29855,
	"./sv.js": 29855,
	"./sw": 18536,
	"./sw.js": 18536,
	"./ta": 15373,
	"./ta.js": 15373,
	"./te": 37809,
	"./te.js": 37809,
	"./tet": 61297,
	"./tet.js": 61297,
	"./tg": 92527,
	"./tg.js": 92527,
	"./th": 85862,
	"./th.js": 85862,
	"./tk": 79331,
	"./tk.js": 79331,
	"./tl-ph": 44387,
	"./tl-ph.js": 44387,
	"./tlh": 3592,
	"./tlh.js": 3592,
	"./tr": 79732,
	"./tr.js": 79732,
	"./tzl": 99570,
	"./tzl.js": 99570,
	"./tzm": 83553,
	"./tzm-latn": 7699,
	"./tzm-latn.js": 7699,
	"./tzm.js": 83553,
	"./ug-cn": 25674,
	"./ug-cn.js": 25674,
	"./uk": 69974,
	"./uk.js": 69974,
	"./ur": 45773,
	"./ur.js": 45773,
	"./uz": 357,
	"./uz-latn": 77135,
	"./uz-latn.js": 77135,
	"./uz.js": 357,
	"./vi": 20043,
	"./vi.js": 20043,
	"./x-pseudo": 40767,
	"./x-pseudo.js": 40767,
	"./yo": 80150,
	"./yo.js": 80150,
	"./zh-cn": 21828,
	"./zh-cn.js": 21828,
	"./zh-hk": 86644,
	"./zh-hk.js": 86644,
	"./zh-mo": 79305,
	"./zh-mo.js": 79305,
	"./zh-tw": 31860,
	"./zh-tw.js": 31860
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35358;

/***/ }),

/***/ 8330:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"angular-accounting","version":"2.3.5","main":"main.js","scripts":{"ng":"ng","start":"ng serve","build":"ng build --base-href ./","build:vps":"ng build --configuration production --output-path=dist/app && cd dist && scp -r app kencosmetics@168.231.84.94:/home/kencosmetics","watch":"ng build --watch --configuration development","test":"ng test","update":"ng update ."},"private":true,"dependencies":{"@angular/animations":"^18.2.13","@angular/common":"^18.2.13","@angular/compiler":"^18.2.13","@angular/core":"^18.2.13","@angular/forms":"^18.2.13","@angular/platform-browser":"^18.2.13","@angular/platform-browser-dynamic":"^18.2.13","@angular/router":"^18.2.13","@angular/service-worker":"^18.2.13","@fortawesome/fontawesome-free":"^6.4.2","bootstrap":"^5.3.3","chart.js":"^4.4.2","decimal.js":"^10.4.3","jspdf":"^3.0.1","jspdf-autotable":"^5.0.2","moment":"^2.29.4","ngx-socket-io":"^4.7.0","primeflex":"^3.3.1","primeicons":"^7.0.0","primeng":"^17.18.15","rxjs":"~7.8.0","tslib":"^2.3.0","zone.js":"~0.14.10"},"devDependencies":{"@angular-devkit/build-angular":"^18.2.14","@angular/cli":"^18.2.14","@angular/compiler-cli":"^18.2.13","@types/jasmine":"~4.3.0","jasmine-core":"~4.6.0","karma":"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0","typescript":"~5.4.5"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map