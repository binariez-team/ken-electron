"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["common"],{

/***/ 39512:
/*!**************************************************!*\
  !*** ./src/app/accounting/accounting.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountingService: () => (/* binding */ AccountingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/notifications.service */ 24861);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/api.service */ 22761);
/* harmony import */ var _services_decimal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/decimal.service */ 10146);






class AccountingService {
  constructor(http, notificationService, api, decimalService) {
    this.http = http;
    this.notificationService = notificationService;
    this.api = api;
    this.decimalService = decimalService;
    this.host = this.api.host;
    this.mainAccounts = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.selectedAccount = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.chartOfAccounts = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.selectedChartOfAccounts = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.subCategories = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.accountDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.journalVouchers = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.journalItems = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.journalItemsTotals = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
    this.voucherDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.getMainAccounts();
    this.getChartOfAccounts();
    this.fetchJournalVouchers({
      journal_date: null,
      journal_number: null,
      reference_number: null
    });
    this.getJournalItems();
  }
  // fetch journal vouchers
  fetchJournalVouchers(form = {
    journal_date: null,
    journal_number: null,
    reference_number: null
  }) {
    this.loading.next(true);
    this.http.post(`${this.host}/journals/journal-vouchers`, form).subscribe({
      next: res => {
        this.journalVouchers.next(res);
        this.loading.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'history');
        this.loading.next(false);
      }
    });
  }
  // get journal items
  getJournalItems() {
    this.http.get(`${this.host}/journals/journal-items`).subscribe({
      next: res => {
        this.journalItems.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  calculateTotalJournalItems() {
    let items = this.journalItems.value;
    let totalDebit = 0;
    let totalCredit = 0;
    items.forEach(element => {
      totalDebit = this.decimalService.add(totalDebit, element.debit);
      totalCredit = this.decimalService.add(totalCredit, element.credit);
    });
    this.journalItemsTotals.next({
      totalDebit: totalDebit,
      totalCredit: totalCredit
    });
  }
  getMainAccounts() {
    this.http.get(`${this.host}/accounts/main`).subscribe({
      next: res => {
        this.mainAccounts.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  getChartOfAccounts() {
    this.http.get(`${this.host}/accounts/all`).subscribe({
      next: res => {
        this.chartOfAccounts.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  getChartofAccountsByCategory(id) {
    this.http.get(`${this.host}/accounts/all/${id}`).subscribe({
      next: res => {
        this.selectedChartOfAccounts.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  getSubCategories(id) {
    return this.http.get(`${this.host}/accounts/sub/${id}`).subscribe({
      next: res => {
        this.subCategories.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  selectAccount(account) {
    this.selectedAccount.next(account);
    this.getChartofAccountsByCategory(account.id);
    this.getSubCategories(account.id);
  }
  addAccount(account) {
    this.http.post(`${this.host}/accounts`, account).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'chartAccount');
        this.getChartofAccountsByCategory(account.category_number);
        this.accountDialogVisible.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'chartAccount');
      }
    });
  }
  editAccount(account) {
    this.http.put(`${this.host}/accounts/${account.account_number}`, account).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'chartAccount');
        this.getChartofAccountsByCategory(account.category_number);
        this.accountDialogVisible.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'chartAccount');
      }
    });
  }
  // add journal voucher
  addJournalVoucher(voucher) {
    this.http.post(`${this.host}/journals/journal-voucher`, voucher).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'home');
        // this.getJournalVouchers();
        this.fetchJournalVouchers(null);
        this.getJournalItems();
        this.voucherDialogVisible.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // edit journal voucher
  editJournalVoucher(data) {
    this.http.put(`${this.host}/journals/journal-voucher`, data).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'home');
        this.fetchJournalVouchers(null);
        this.getJournalItems();
        this.voucherDialogVisible.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // delete journal voucher
  deleteJournalVoucher(id) {
    this.http.delete(`${this.host}/journals/journal-voucher/${id}`).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'home');
        this.fetchJournalVouchers(null);
        this.getJournalItems();
      },
      error: error => {
        console.log(error.error);
        this.notificationService.showError(error.error, 'home');
      }
    });
  }
  static {
    this.ɵfac = function AccountingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountingService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_decimal_service__WEBPACK_IMPORTED_MODULE_2__.DecimalService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AccountingService,
      factory: AccountingService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 38652:
/*!*********************************************!*\
  !*** ./src/app/core/pipes/category.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryPipe: () => (/* binding */ CategoryPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class CategoryPipe {
  transform(objects) {
    return objects.filter(object => {
      return object.show_on_sell == 1;
    });
  }
  static {
    this.ɵfac = function CategoryPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategoryPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "category",
      type: CategoryPipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 67764:
/*!*******************************************!*\
  !*** ./src/app/core/pipes/weight.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeightPipe: () => (/* binding */ WeightPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class WeightPipe {
  transform(value) {
    // if (value < 999) {
    //     return value + ' g'
    // } else {
    //     return (value / 1000) + ' kg';
    // }
    return `${parseFloat(value)} kg`;
  }
  static {
    this.ɵfac = function WeightPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WeightPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "weight",
      type: WeightPipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 87058:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputtextarea.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTextarea: () => (/* binding */ InputTextarea),
/* harmony export */   InputTextareaModule: () => (/* binding */ InputTextareaModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);






/**
 * InputTextarea adds styling and autoResize functionality to standard textarea element.
 * @group Components
 */
class InputTextarea {
  el;
  ngModel;
  control;
  cd;
  config;
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = 'outlined';
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  filled;
  cachedScrollHeight;
  ngModelSubscription;
  ngControlSubscription;
  constructor(el, ngModel, control, cd, config) {
    this.el = el;
    this.ngModel = ngModel;
    this.control = control;
    this.cd = cd;
    this.config = config;
  }
  ngOnInit() {
    if (this.ngModel) {
      this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
    if (this.control) {
      this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  ngAfterViewInit() {
    if (this.autoResize) this.resize();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  onInput(e) {
    this.updateState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  resize(event) {
    this.el.nativeElement.style.height = 'auto';
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = 'scroll';
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = 'hidden';
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    this.updateFilledState();
    if (this.autoResize) {
      this.resize();
    }
  }
  ngOnDestroy() {
    if (this.ngModelSubscription) {
      this.ngModelSubscription.unsubscribe();
    }
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
  }
  static ɵfac = function InputTextarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InputTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: InputTextarea,
    selectors: [["", "pInputTextarea", ""]],
    hostAttrs: [1, "p-inputtextarea", "p-inputtext", "p-component", "p-element"],
    hostVars: 6,
    hostBindings: function InputTextarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputTextarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled");
      }
    },
    inputs: {
      autoResize: [2, "autoResize", "autoResize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      variant: "variant"
    },
    outputs: {
      onResize: "onResize"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextarea, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pInputTextarea]',
      host: {
        class: 'p-inputtextarea p-inputtext p-component p-element',
        '[class.p-filled]': 'filled',
        '[class.p-inputtextarea-resizable]': 'autoResize',
        '[class.p-variant-filled]': 'variant === "filled" || config.inputStyle() === "filled"'
      }
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig
  }], {
    autoResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    variant: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event']]
    }]
  });
})();
class InputTextareaModule {
  static ɵfac = function InputTextareaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InputTextareaModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: InputTextareaModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextareaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [InputTextarea],
      declarations: [InputTextarea]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=common.js.map