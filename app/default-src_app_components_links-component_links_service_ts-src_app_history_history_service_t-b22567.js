"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["default-src_app_components_links-component_links_service_ts-src_app_history_history_service_t-b22567"],{

/***/ 54659:
/*!*************************************************************!*\
  !*** ./src/app/components/links-component/links.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinksService: () => (/* binding */ LinksService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/api.service */ 22761);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 89475);




class LinksService {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService);
    this.links = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    this.loadingLinks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.selectedLink = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.getLinks();
  }
  getLinks() {
    this.loadingLinks.set(true);
    this.api.get(`links`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
      this.loadingLinks.set(false);
    })).subscribe({
      next: res => {
        this.links.set(res);
      }
    });
  }
  static {
    this.ɵfac = function LinksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LinksService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LinksService,
      factory: LinksService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 36032:
/*!********************************************!*\
  !*** ./src/app/history/history.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryService: () => (/* binding */ HistoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/api.service */ 22761);






class HistoryService {
  constructor(http, notificationService, api) {
    this.http = http;
    this.notificationService = notificationService;
    this.api = api;
    this.host = this.api.host;
    this.salesHistory = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.returnHistory = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.detailsDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.editDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.editOrdersDialogVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false);
    this.editReturnDialogVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false);
    this.purchasesHistory = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.editPurchaseDialogVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false);
    this.printLoading = false;
    this.ordersHistory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    // this.fetchSalesHistory({
    //     invoice_number: null,
    //     customer_id: null,
    //     invoice_date: null,
    // });
    this.fetchPurchasesHistory({
      invoice_number: null,
      supplier_id: null,
      invoice_date: null
    });
    this.fetchReturnHistory({
      invoice_number: null,
      customer_id: null,
      invoice_date: null
    });
  }
  fetchSalesHistory(form) {
    this.loading.next(true);
    this.http.post(`${this.host}/history/sales/search`, form).subscribe({
      next: res => {
        this.salesHistory.next(res);
        this.loading.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'history');
      }
    });
  }
  fetchOrdersHistory(form = {
    customer_id: null,
    invoice_date: null
  }) {
    this.loading.next(true);
    this.http.post(`${this.host}/history/orders/search`, form).subscribe({
      next: res => {
        this.ordersHistory.set(res);
        this.loading.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'history');
      }
    });
  }
  fetchReturnHistory(form = {
    invoice_number: null,
    customer_id: null,
    invoice_date: null
  }) {
    this.loading.next(true);
    this.http.post(`${this.host}/history/return/search`, form).subscribe({
      next: res => {
        this.returnHistory.next(res);
        this.loading.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'history');
      }
    });
  }
  fetchPurchasesHistory(form = {
    invoice_number: null,
    supplier_id: null,
    invoice_date: null
  }) {
    this.loading.next(true);
    this.http.post(`${this.host}/history/purchases/search`, form).subscribe({
      next: res => {
        this.purchasesHistory.next(res);
        this.loading.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'history');
      }
    });
  }
  // complete order
  completeOrder(data) {
    this.http.post(`${this.host}/orders/complete`, data).subscribe({
      next: res => {
        this.notificationService.showSuccess('Order created successfully!', 'home');
        this.fetchOrdersHistory();
      },
      error: error => {
        this.notificationService.showError(error.error, 'home');
      }
    });
  }
  static {
    this.ɵfac = function HistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: HistoryService,
      factory: HistoryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 42897:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-blockui.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockUI: () => (/* binding */ BlockUI),
/* harmony export */   BlockUIModule: () => (/* binding */ BlockUIModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 7251);









/**
 * BlockUI can either block other components or the whole page.
 * @group Components
 */
const _c0 = ["mask"];
const _c1 = ["*"];
const _c2 = a0 => ({
  "p-blockui-document": a0,
  "p-blockui p-component-overlay p-component-overlay-enter": true
});
const _c3 = () => ({
  display: "none"
});
function BlockUI_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
class BlockUI {
  document;
  el;
  cd;
  config;
  renderer;
  platformId;
  /**
   * Name of the local ng-template variable referring to another component.
   * @group Props
   */
  target;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Current blocked state as a boolean.
   * @group Props
   */
  get blocked() {
    return this._blocked;
  }
  set blocked(val) {
    if (this.mask && this.mask.nativeElement) {
      if (val) this.block();else this.unblock();
    } else {
      this._blocked = val;
    }
  }
  templates;
  mask;
  _blocked = false;
  animationEndListener;
  contentTemplate;
  constructor(document, el, cd, config, renderer, platformId) {
    this.document = document;
    this.el = el;
    this.cd = cd;
    this.config = config;
    this.renderer = renderer;
    this.platformId = platformId;
  }
  ngAfterViewInit() {
    if (this._blocked) this.block();
    if (this.target && !this.target.getBlockableElement) {
      throw 'Target of BlockUI must implement BlockableUI interface';
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'content':
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  block() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this._blocked = true;
      this.mask.nativeElement.style.display = 'flex';
      if (this.target) {
        this.target.getBlockableElement().appendChild(this.mask.nativeElement);
        this.target.getBlockableElement().style.position = 'relative';
      } else {
        this.renderer.appendChild(this.document.body, this.mask.nativeElement);
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.blockBodyScroll();
      }
      if (this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.set('modal', this.mask.nativeElement, this.baseZIndex + this.config.zIndex.modal);
      }
    }
  }
  unblock() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && this.mask && !this.animationEndListener) {
      this.animationEndListener = this.renderer.listen(this.mask.nativeElement, 'animationend', this.destroyModal.bind(this));
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.mask.nativeElement, 'p-component-overlay-leave');
    }
  }
  destroyModal() {
    this._blocked = false;
    if (this.mask && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.clear(this.mask.nativeElement);
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.mask.nativeElement, 'p-component-overlay-leave');
      this.renderer.removeChild(this.el.nativeElement, this.mask.nativeElement);
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.cd.markForCheck();
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  ngOnDestroy() {
    this.unblock();
    this.destroyModal();
  }
  static ɵfac = function BlockUI_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlockUI)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlockUI,
    selectors: [["p-blockUI"]],
    contentQueries: function BlockUI_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function BlockUI_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      target: "target",
      autoZIndex: [2, "autoZIndex", "autoZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      styleClass: "styleClass",
      blocked: "blocked"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 11,
    consts: [["mask", ""], [3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet"]],
    template: function BlockUI_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlockUI_ng_container_3_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, !ctx.target))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-busy", ctx.blocked)("data-pc-name", "blockui")("data-pc-section", "root");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["@layer primeng{.p-blockui{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color;display:flex;align-items:center;justify-content:center}.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:transparent}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockUI, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-blockUI',
      template: `
        <div
            #mask
            [class]="styleClass"
            [attr.aria-busy]="blocked"
            [ngClass]="{ 'p-blockui-document': !target, 'p-blockui p-component-overlay p-component-overlay-enter': true }"
            [ngStyle]="{ display: 'none' }"
            [attr.data-pc-name]="'blockui'"
            [attr.data-pc-section]="'root'"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-blockui{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color;display:flex;align-items:center;justify-content:center}.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:transparent}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }], {
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    blocked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }],
    mask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['mask']
    }]
  });
})();
class BlockUIModule {
  static ɵfac = function BlockUIModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlockUIModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: BlockUIModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockUIModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [BlockUI],
      declarations: [BlockUI]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_components_links-component_links_service_ts-src_app_history_history_service_t-b22567.js.map