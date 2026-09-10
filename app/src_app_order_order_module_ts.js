"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["src_app_order_order_module_ts"],{

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

/***/ 90645:
/*!**********************************************************!*\
  !*** ./src/app/order/order-home/order-home.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderHomeComponent: () => (/* binding */ OrderHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _order_table_order_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../order-table/order-table.component */ 13079);


class OrderHomeComponent {
  static {
    this.ɵfac = function OrderHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderHomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OrderHomeComponent,
      selectors: [["app-order-home"]],
      decls: 1,
      vars: 0,
      template: function OrderHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "order-table");
        }
      },
      dependencies: [_order_table_order_table_component__WEBPACK_IMPORTED_MODULE_0__.OrderTableComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 13079:
/*!************************************************************!*\
  !*** ./src/app/order/order-table/order-table.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderTableComponent: () => (/* binding */ OrderTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var src_app_stock_stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/stock/stock.service */ 35427);
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order.service */ 41000);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ 18838);
/* harmony import */ var src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accounting/auxiliary.service */ 53591);
/* harmony import */ var src_app_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/print.service */ 5312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/products-dialog/products-dialog.component */ 44089);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dataview */ 53415);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipes/lira.pipe */ 62298);

























const _c0 = ["barcodeInput"];
const _c1 = ["invoiceTable"];
const _c2 = a0 => ({
  "ng-invalid ng-dirty": a0
});
const _c3 = () => ({
  standalone: true
});
const _c4 = a0 => ({
  "border-top-1 surface-border": a0
});
const _c5 = () => ({
  width: "1rem"
});
function OrderTableComponent_ng_template_3_small_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Customer is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrderTableComponent_ng_template_3_div_55_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "p-divider", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Total 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 1, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar_discount_2), " ");
  }
}
function OrderTableComponent_ng_template_3_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Discount 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, OrderTableComponent_ng_template_3_div_55_ng_container_6_Template, 7, 3, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 2, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.secondary_discount_amount_dollar), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.orderService.include_vat);
  }
}
function OrderTableComponent_ng_template_3_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "VAT (11%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 2, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.vat_lira), " ", "@ " + ctx_r2.exchangeRate.rate_value, "");
  }
}
function OrderTableComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p-dropdown", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function OrderTableComponent_ng_template_3_Template_p_dropdown_onChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.customerChange($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, OrderTableComponent_ng_template_3_small_9_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 17)(11, "div", 18)(12, "div", 12)(13, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p-inputNumber", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function OrderTableComponent_ng_template_3_Template_p_inputNumber_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.orderService.discount_percent, $event) || (ctx_r2.orderService.discount_percent = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function OrderTableComponent_ng_template_3_Template_p_inputNumber_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.calculate_discount($event, "percent"));
    })("onFocus", function OrderTableComponent_ng_template_3_Template_p_inputNumber_onFocus_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.select($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 17)(19, "div", 18)(20, "div", 12)(21, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Discount on Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "p-inputNumber", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function OrderTableComponent_ng_template_3_Template_p_inputNumber_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.orderService.discount_percent_on_total, $event) || (ctx_r2.orderService.discount_percent_on_total = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function OrderTableComponent_ng_template_3_Template_p_inputNumber_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.calculate_discount($event, "percent_total"));
    })("onFocus", function OrderTableComponent_ng_template_3_Template_p_inputNumber_onFocus_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.select($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 23)(27, "div", 17)(28, "p-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function OrderTableComponent_ng_template_3_Template_p_checkbox_ngModelChange_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.calculate_vat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 26)(31, "div", 27)(32, "div", 28)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 10)(37, "div", 30)(38, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Subtotal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](48, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "p-divider", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Net total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](54, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, OrderTableComponent_ng_template_3_div_55_Template, 7, 4, "div", 34)(56, OrderTableComponent_ng_template_3_div_56_Template, 6, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 30)(58, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](60, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.debtForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r2.customers)("filter", true)("showClear", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](41, _c2, ctx_r2.customer_id.invalid && (ctx_r2.customer_id.dirty || ctx_r2.customer_id.touched || ctx_r2.orderService.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.customer_id.invalid && (ctx_r2.customer_id.dirty || ctx_r2.customer_id.touched || ctx_r2.orderService.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 1)("min", 0)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.orderService.discount_percent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](43, _c3))("readonly", (ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar_price) == 0 && ctx_r2.orderService.discount_percent == 0)("disabled", ctx_r2.orderService.discount_value > 0)("minFractionDigits", 1)("maxFractionDigits", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 1)("min", 0)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.orderService.discount_percent_on_total);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](44, _c3))("readonly", (ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar_price) == 0 && ctx_r2.orderService.discount_percent_on_total == 0)("minFractionDigits", 1)("maxFractionDigits", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.orderService.include_vat)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](45, _c3))("binary", true)("trueValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 33, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](48, 35, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.discount_amount_dollar));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](54, 37, ctx_r2.invoiceTotal.total_dollar_price - ctx_r2.invoiceTotal.discount_amount_dollar));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.orderService.discount_percent_on_total);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.orderService.include_vat);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Grand Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](60, 39, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar), " ");
  }
}
function OrderTableComponent_ng_template_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54)(1, "div", 55)(2, "div", 30)(3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 30)(6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 57)(9, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function OrderTableComponent_ng_template_8_div_1_Template_i_click_9_listener() {
      const rowIndex_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.removeRow(rowIndex_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 59)(11, "div", 10)(12, "div", 60)(13, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 63)(20, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p-inputNumber", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function OrderTableComponent_ng_template_8_div_1_Template_p_inputNumber_ngModelChange_24_listener($event) {
      const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](record_r7.quantity, $event) || (record_r7.quantity = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onFocus", function OrderTableComponent_ng_template_8_div_1_Template_p_inputNumber_onFocus_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.select($event.target));
    })("ngModelChange", function OrderTableComponent_ng_template_8_div_1_Template_p_inputNumber_ngModelChange_24_listener() {
      const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.setQty(record_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const record_r7 = ctx.$implicit;
    const first_r8 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c4, !first_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" (", record_r7.sku, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", record_r7.product_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Unit Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 12, record_r7.unit_price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Total Unit Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 14, record_r7.unit_price * record_r7.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" stock: ", record_r7.stock, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" remain: ", record_r7.stock - record_r7.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", record_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showButtons", true)("step", 1);
  }
}
function OrderTableComponent_ng_template_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-messages", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function OrderTableComponent_ng_template_8_Conditional_3_Template_p_messages_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.message, $event) || (ctx_r2.message = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("enableService", false)("closable", false);
  }
}
function OrderTableComponent_ng_template_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "p-divider");
  }
}
function OrderTableComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, OrderTableComponent_ng_template_8_div_1_Template, 25, 19, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, OrderTableComponent_ng_template_8_Conditional_3_Template, 1, 3, "p-messages", 39)(4, OrderTableComponent_ng_template_8_Conditional_4_Template, 1, 0, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 40)(6, "p-autoComplete", 41, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function OrderTableComponent_ng_template_8_Template_p_autoComplete_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.barcode, $event) || (ctx_r2.barcode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("completeMethod", function OrderTableComponent_ng_template_8_Template_p_autoComplete_completeMethod_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.searchItem($event));
    })("onKeyUp", function OrderTableComponent_ng_template_8_Template_p_autoComplete_onKeyUp_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.submitInvoiceInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 42)(9, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function OrderTableComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.dialog_products_visible = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 44)(11, "div", 45)(12, "div", 46)(13, "p-radioButton", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function OrderTableComponent_ng_template_8_Template_p_radioButton_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.orderService.priceOption, $event) || (ctx_r2.orderService.priceOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Original ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 46)(17, "p-radioButton", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function OrderTableComponent_ng_template_8_Template_p_radioButton_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.orderService.priceOption, $event) || (ctx_r2.orderService.priceOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " TTC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 51)(21, "p-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function OrderTableComponent_ng_template_8_Template_p_button_onClick_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.clearInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "p-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function OrderTableComponent_ng_template_8_Template_p_button_onClick_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.submitDebt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const records_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", records_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r2.order_items.length === 0 ? 3 : 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("suggestions", ctx_r2.searchedItems)("delay", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.orderService.priceOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.orderService.priceOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.order_items.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("loading", ctx_r2.orderSubmitLoading())("disabled", ctx_r2.order_items.length == 0);
  }
}
class OrderTableComponent {
  // focus on right click
  preventContextMenu() {
    return false;
  }
  // focus barcode input on keydown
  onKeyDown(ev) {
    if (!this.dialogVisible) {
      if (ev.key == 'Enter' && this.order_items.length > 0 && !this.barcode) {
        setTimeout(() => {
          // this.submitDebt();
        }, 100);
      }
      //   this.focusInput()
    }
  }
  constructor(stockService, orderService, confirmationService, localStorageService, auxiliaryService, printService) {
    this.stockService = stockService;
    this.orderService = orderService;
    this.confirmationService = confirmationService;
    this.localStorageService = localStorageService;
    this.auxiliaryService = auxiliaryService;
    this.printService = printService;
    this.customersLoading = this.auxiliaryService.customersLoading;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.items = [];
    this.dialogVisible = false;
    this.all_expanded = false;
    this.form_error = false;
    this.dialog_products_visible = false;
    // get view height for scrollable invoice table
    this.vh = this.localStorageService.getSellPageViewHeight();
    // debt form
    this.debtForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      customer_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.orderService.customer_id.value, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      total_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      total_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      sub_total: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      exchange_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      has_discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      discount_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      discount_percent: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      discount2_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      discount2_percent: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      include_vat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      vat_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      vat_value_lbp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      order_datetime: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.orderService.invoice_date),
      order_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null)
    });
    this.orderSubmitLoading = this.orderService.orderSubmitLoading;
  }
  ngOnInit() {
    this.message = [{
      severity: 'info',
      detail: 'No items in this category yet!'
    }];
    this.subscriptions.add(this.auxiliaryService.customers.subscribe(res => {
      this.customers = res;
    }));
    this.subscriptions.add(this.stockService.items.subscribe(res => {
      this.items = res;
    }));
    this.subscriptions.add(this.orderService.invoice_items.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(re => {
      this.orderService.calculateTotal();
    })).subscribe(res => {
      this.order_items = res;
    }));
    this.subscriptions.add(this.orderService.invoiceTotal.subscribe(res => {
      this.invoiceTotal = res;
    }));
    this.subscriptions.add(this.orderService.barcodeResponse.subscribe(res => {
      this.barcodeResponse = res;
      if (res) {
        this.addToInvoice();
        this.orderService.barcodeResponse.next(0);
      }
    }));
    this.subscriptions.add(this.orderService.factor.subscribe(res => {
      this.factor = res;
    }));
    this.subscriptions.add(this.stockService.exchangeRate.subscribe(res => {
      this.exchangeRate = res;
    }));
    this.subscriptions.add(this.orderService.stateOptions.subscribe(res => {
      this.stateOptions = res;
    }));
    this.subscriptions.add(this.orderService.stateValue.subscribe(res => {
      this.stateValue = res;
    }));
    this.subscriptions.add(this.orderService.customer_id.subscribe(res => {
      this.customer_id.patchValue(res);
    }));
    this.subscriptions.add(this.orderService.reset_form_validations$.subscribe(res => {
      if (res) {
        this.resetFormValidation();
        this.orderService.reset_form_validations$.next(false);
      }
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  // toggle table rows
  toggleTableRows() {
    this.all_expanded = !this.all_expanded;
    if (this.all_expanded) {
      // If all_expanded is true, set every row to expanded.
      this.order_items.forEach(item => {
        if (this.getCustomerItemHistory(item) && this.getCustomerItemHistory(item).length > 0) this.invoiceTable.expandedRowKeys[item.product_id] = true;
      });
    } else {
      // If all_expanded is false, collapse every row.
      if (this.invoiceTable) {
        setTimeout(() => {
          this.invoiceTable.expandedRowKeys = {};
        });
      }
    }
  }
  // change customer
  customerChange(event) {
    this.orderService.customer_id.next(this.customer_id.value);
  }
  // parse float
  parseFloat(number) {
    return parseFloat(number);
  }
  // search items
  searchItem(event) {
    let filtered = [];
    let query = event.query;
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.product_name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        // == 0 for exact search
        filtered.push(item);
      }
    }
    this.searchedItems = filtered;
  }
  submitInvoiceInput(event) {
    if (event.key === 'Enter') {
      if (this.barcode) {
        if (typeof this.barcode == 'string') {
          this.submitBarcode(this.barcode);
        } else {
          this.orderService.barcodeResponse.next(this.barcode);
        }
        this.barcode = null;
      }
    }
  }
  // submit barcode
  submitBarcode(barcode) {
    if (barcode) {
      let index = -1;
      let allowedSymbols = ['*', '+'];
      for (let i = 0; i < allowedSymbols.length; i++) {
        if (barcode.indexOf(allowedSymbols[i]) !== -1) {
          index = barcode.indexOf(allowedSymbols[i]);
          break;
        }
      }
      let factor = barcode.substring(0, index) || 1;
      let actualBarcode = parseInt(barcode.substring(index + 1, barcode.length));
      if (index != -1 && index != 0) {
        this.orderService.factor.next(parseInt(factor));
        this.orderService.submitBarcode(actualBarcode);
      } else {
        this.orderService.submitBarcode(barcode);
      }
    }
  }
  // open sell dialog
  openProductsDialog() {
    this.dialogVisible = true;
  }
  // close sell dialog
  closeProductsDialog() {
    this.dialogVisible = false;
  }
  // get selected products from dialog event
  assignSelectedProducts(products) {
    this.dialogVisible = false;
    products.forEach(element => {
      this.orderService.barcodeResponse.next(element);
    });
  }
  get customer_id() {
    return this.debtForm.get('customer_id');
  }
  // add barcode response to invoice
  addToInvoice() {
    let item = this.barcodeResponse;
    let itemToAdd = {
      product_id: item.product_id,
      sku: item.sku,
      barcode: item.barcode,
      stock: item.quantity,
      product_name: item.product_name,
      unit_cost: item.average_cost_usd,
      unit_price: this.orderService.priceOption == 'original' ? item.unit_price_usd : item.ttc_price,
      quantity: this.factor
    };
    let found = false;
    this.order_items.forEach((element, index) => {
      if (element.product_id == itemToAdd.product_id && element.product_id != 0) {
        this.order_items[index].quantity += this.factor;
        found = true;
      }
    });
    if (!found) {
      this.order_items.push(itemToAdd);
      if (this.invoiceTable) {
        setTimeout(() => {
          this.invoiceTable.scrollTo({
            top: this.invoiceTable.wrapperViewChild.nativeElement.scrollHeight
          });
        }, 10);
      }
    }
    this.orderService.invoice_items.next(this.order_items);
    this.orderService.factor.next(1);
  }
  // subtract qty
  removeRow(index) {
    this.order_items.splice(index, 1);
    this.orderService.invoice_items.next(this.order_items);
  }
  //set price using text input
  setPrice(item) {
    if (!item.unit_price) {
      this.form_error = false;
    } else {
      this.form_error = false;
    }
    this.orderService.calculateTotal('edit');
  }
  //set QTY using text input
  setQty(item) {
    if (!item.quantity) {
      this.form_error = true;
    } else {
      this.form_error = false;
    }
    this.orderService.calculateTotal('edit');
  }
  // reset debt form
  resetForm() {
    this.orderService.submitted = false;
    this.debtForm.reset({
      customer_id: null,
      order_notes: null
    });
    this.orderService.customer_id.next(null);
  }
  resetFormValidation() {
    this.debtForm.markAsPristine();
    this.debtForm.markAsUntouched();
    this.debtForm.updateValueAndValidity();
  }
  calculate_vat() {
    this.orderService.include_vat = !this.orderService.include_vat;
    this.orderService.calculate_additional_totals(this.invoiceTotal);
  }
  // select input on focus
  select(event) {
    event.select();
  }
  calculate_discount(event, type = 'amount') {
    // this.orderService.calculateTotal()
    if (type === 'percent_total') {
      if (this.orderService.discount_percent_on_total > 100) {
        this.orderService.discount_percent_on_total = 100;
      }
    } else if (type === 'percent') {
      if (this.orderService.discount_percent > 100) {
        this.orderService.discount_percent = 100;
      }
    }
    this.orderService.calculate_additional_totals(this.invoiceTotal);
  }
  getCustomerItemHistory(item) {
    return this.selectedCustomerLatestItems.filter(x => x.product_id == item.product_id);
  }
  // togglePaymentType(event) {
  //     this.orderService.is_lira_payment = event;
  //     if (!this.orderService.is_lira_payment) {
  //         this.orderService.payment_amount_lbp = null;
  //     }
  // }
  getTypedInvoiceItems(item) {
    return item;
  }
  printInvoice() {
    this.printService.print(this.invoiceToPrint, 'sale');
  }
  // submit debt form
  submitDebt() {
    this.orderService.submitted = true;
    if (this.debtForm.valid && this.form_error === false) {
      this.confirmationService.confirm({
        key: 'home',
        message: `Are you sure you want to continue"?`,
        header: 'Warning',
        icon: 'pi pi-exclamation-triangle',
        acceptButtonStyleClass: 'p-button-danger',
        rejectButtonStyleClass: 'p-button-secondary',
        defaultFocus: 'reject',
        accept: () => {
          this.confirmCheckoutDialog();
        }
      });
    }
  }
  confirmCheckoutDialog() {
    this.debtForm.patchValue({
      total_cost: this.invoiceTotal.total_dollar_cost,
      total_amount: this.invoiceTotal.total_dollar,
      sub_total: this.invoiceTotal.total_dollar_price,
      exchange_rate: this.exchangeRate.rate_value,
      discount_value: this.invoiceTotal.discount_amount_dollar,
      discount_percent: this.orderService.discount_value ? null : this.orderService.discount_percent,
      discount2_value: this.orderService.discount_percent_on_total > 0 ? this.invoiceTotal.secondary_discount_amount_dollar : null,
      discount2_percent: this.orderService.discount_percent_on_total > 0 ? this.orderService.discount_percent_on_total : null,
      has_discount: this.invoiceTotal.discount_amount_dollar > 0,
      include_vat: this.orderService.include_vat,
      vat_value: this.invoiceTotal.vat_dollar,
      vat_value_lbp: this.invoiceTotal.vat_lira,
      order_datetime: this.orderService.invoice_date
    });
    this.orderService.checkout(this.debtForm.value, this.order_items, this.customer_id.value);
    this.resetForm();
    this.confirmationService.close();
  }
  // formatedInvoiceNumber() {
  //     return `INV${this.orderService.invoice_number
  //         .toString()
  //         .padStart(5, '0')}`;
  // }
  // setInvoiceNumber($event) {
  //     // this.orderService.invoice_number = $event;
  //     if ($event.length < 8) return;
  //     if ($event.length > 0) {
  //         this.orderService.checkInvoiceNumber($event);
  //     }
  // }
  // clear invoice
  clearInvoice() {
    this.confirmationService.confirm({
      key: 'home',
      message: `Are you sure that you want to clear invoice"?`,
      header: 'Warning',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      defaultFocus: 'reject',
      accept: () => {
        // this.orderService.clearInvoiceAction();
        this.orderService.invoice_items.next([]);
        this.resetForm();
      }
    });
  }
  static {
    this.ɵfac = function OrderTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_stock_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_3__.AuxiliaryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: OrderTableComponent,
      selectors: [["order-table"]],
      viewQuery: function OrderTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.barcodeInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.invoiceTable = _t.first);
        }
      },
      hostBindings: function OrderTableComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("contextmenu", function OrderTableComponent_contextmenu_HostBindingHandler() {
            return ctx.preventContextMenu();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"])("keydown", function OrderTableComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
        }
      },
      decls: 10,
      vars: 2,
      consts: [["dv", ""], ["barcodeInput", ""], [1, "grid", "m-1"], [1, "col-12", "md:col-9"], ["pTemplate", "body"], ["styleClass", "mt-2 invoice-body"], [3, "value"], ["pTemplate", "list"], [3, "onHide", "onSubmit", "visible"], [3, "formGroup"], [1, "grid"], [1, "col-12", "md:col-3"], [1, "flex", "flex-column", "gap-2"], ["for", "customer"], [1, "text-red-500"], ["styleClass", "p-inputtext-sm", "id", "customer", "appendTo", "body", "formControlName", "customer_id", "optionLabel", "name", "optionValue", "account_id", "placeholder", "Select Customer", "filterBy", "name", 3, "onChange", "options", "filter", "showClear", "ngClass"], ["class", "p-error", 4, "ngIf"], [1, "col-6", "md:col-2"], [1, "field", "flex-1"], ["for", "discount"], [1, "text-primary"], ["styleClass", "p-inputtext-sm w-full", "inputId", "percent", "prefix", "%", "mode", "decimal", "locale", "en-US", 3, "ngModelChange", "onFocus", "size", "min", "max", "ngModel", "ngModelOptions", "readonly", "disabled", "minFractionDigits", "maxFractionDigits"], ["styleClass", "p-inputtext-sm w-full", "inputId", "percent_total", "prefix", "%", "mode", "decimal", "locale", "en-US", 3, "ngModelChange", "onFocus", "size", "min", "max", "ngModel", "ngModelOptions", "readonly", "minFractionDigits", "maxFractionDigits"], [1, "col-12", "grid"], ["label", "Add VAT", 3, "ngModelChange", "ngModel", "ngModelOptions", "binary", "trueValue"], [1, "col-6"], [1, "col-12", "md:col-6"], [1, "field"], [1, "flex", "flex-column"], ["type", "text", "pInputText", "", "placeholder", "Notes ...", "formControlName", "order_notes", 1, "p-inputtext-sm"], [1, "col-12"], [1, "text-green-500", "font-medium", "text-lg"], [1, "text-500", "text-lg"], ["styleClass", "mt-1 mb-1"], [4, "ngIf"], [1, "text-900", "font-medium", "text-xl"], [1, "p-error"], [1, "text-500"], ["class", "col-12 p-0", 4, "ngFor", "ngForOf"], ["detail", "testing", 3, "value", "enableService", "closable"], [1, "col-7", "md:col-3", "lg:col-2"], ["styleClass", "w-full", "inputStyleClass", "p-inputtext-sm w-full", "field", "product_name", "name", "barcodeInput", "placeholder", "scan or search ...", "spellcheck", "false", 3, "ngModelChange", "completeMethod", "onKeyUp", "ngModel", "suggestions", "delay"], [1, "col-5", "md:col-3", "lg:col-2"], ["label", "Multi Select", "severity", "warning", "size", "small", "icon", "pi pi-list", "styleClass", "w-full", 3, "onClick"], [1, "col-12", "flex", "justify-content-center", "mt-3"], [1, "flex", "flex-wrap", "gap-3"], [1, "flex", "align-items-center"], ["name", "original", "value", "original", "inputId", "original_price", 3, "ngModelChange", "ngModel"], ["for", "original_price", 1, "ml-2"], ["name", "ttc", "value", "ttc", "inputId", "ttc_price", 3, "ngModelChange", "ngModel"], ["for", "ttc_price", 1, "ml-2"], [1, "col-12", "md:col-6", "lg:col-8", "text-right"], ["label", "Clear", "icon", "pi pi-times", "severity", "danger", "size", "small", "styleClass", "w-full mt-4 md:w-auto md:mt-0", 3, "onClick", "disabled"], ["label", "Checkout", "icon", "pi pi-cart-plus", "severity", "success", "size", "small", "styleClass", "w-full mt-2 md:w-auto md:ml-2 md:mt-0", 3, "onClick", "loading", "disabled"], [1, "col-12", "p-0"], [1, "grid", "py-2", 3, "ngClass"], [1, "text-lg", "font-medium", "text-900"], [1, "col-2", "text-center"], [1, "pi", "pi-trash", "text-red-500", "pb-3", 2, "font-size", "1.3rem", 3, "click"], [1, "col-10"], [1, "col-7"], [1, ""], [1, "m-0"], [1, "col-5"], [1, "m-0", "text-center"], ["min", "1", "buttonLayout", "horizontal", "spinnerMode", "horizontal", "inputId", "vertical", "decrementButtonClass", "p-button-danger small-button", "incrementButtonClass", "p-button-success small-button", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", 1, "small-input", "pl-4", "pt-2", 3, "ngModelChange", "onFocus", "ngModel", "showButtons", "step"], ["detail", "testing", 3, "valueChange", "value", "enableService", "closable"]],
      template: function OrderTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, OrderTableComponent_ng_template_3_Template, 61, 46, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "p-card", 5)(6, "p-dataView", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, OrderTableComponent_ng_template_8_Template, 23, 10, "ng-template", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "products-dialog", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onHide", function OrderTableComponent_Template_products_dialog_onHide_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.dialog_products_visible = false);
          })("onSubmit", function OrderTableComponent_Template_products_dialog_onSubmit_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.assignSelectedProducts($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.order_items);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.dialog_products_visible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ProductsDialogComponent, primeng_card__WEBPACK_IMPORTED_MODULE_13__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown, primeng_dataview__WEBPACK_IMPORTED_MODULE_15__.DataView, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumber, primeng_messages__WEBPACK_IMPORTED_MODULE_18__.Messages, primeng_divider__WEBPACK_IMPORTED_MODULE_19__.Divider, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__.AutoComplete, primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__.Checkbox, primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__.InputText, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_23__.RadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_6__.LiraPipe],
      styles: ["[_nghost-%COMP%]  .p-fieldset .p-fieldset-content {\n  padding: 0.5rem;\n}\n\n.editable[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 28px;\n}\n\n[_nghost-%COMP%]   .editable[_ngcontent-%COMP%]     span.p-inputnumber.p-component {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%]:has(span.p-inputnumber.p-component) {\n  padding: 0px;\n}\n\ntd[_ngcontent-%COMP%]:has(.no-padding) {\n  padding: 0px;\n}\n\n.input-align-center[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .editable[_ngcontent-%COMP%]     span.p-inputnumber.p-component .p-inputnumber-input {\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, \ninput[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  appearance: textfield;\n  -moz-appearance: textfield;\n}\n\n[_nghost-%COMP%]  .small-button {\n  font-size: 0.5rem !important;\n  padding: 0.2rem 0.4rem !important;\n  width: 2rem !important;\n}\n\n[_nghost-%COMP%]  .small-input > span > input {\n  padding: 0.3rem 0.3rem !important;\n  width: 2rem !important;\n  text-align: center;\n}\n\n[_nghost-%COMP%]  .invoice-body > div > div {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]  .p-dataview-emptymessage {\n  display: none;\n}\n\n[_nghost-%COMP%]  .p-card-content {\n  padding: 0 !important;\n}\n\n.invalid[_ngcontent-%COMP%] {\n  border-color: var(--red-500) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb3JkZXIvb3JkZXItdGFibGUvb3JkZXItdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQU1BO0VBQ0ksV0FBQTtBQUhKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBOztFQUVJLGtCQUFBO0FBREo7O0FBSUE7O0VBRUksd0JBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUE7RUFDSSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdBO0VBQ0kscUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSx1Q0FBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAgLnAtZmllbGRzZXQgLnAtZmllbGRzZXQtY29udGVudCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uZWRpdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjhweDtcbn1cblxuLy8gOmhvc3Q6Om5nLWRlZXAgLmVkaXRhYmxlID4gc3BhbiA+IGlucHV0IHtcbi8vICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuLy8gfVxuXG46aG9zdCAuZWRpdGFibGUgOjpuZy1kZWVwIHNwYW4ucC1pbnB1dG51bWJlci5wLWNvbXBvbmVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG50ZDpoYXMoc3Bhbi5wLWlucHV0bnVtYmVyLnAtY29tcG9uZW50KSB7XG4gICAgcGFkZGluZzogMHB4O1xufVxudGQ6aGFzKC5uby1wYWRkaW5nKSB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uaW5wdXQtYWxpZ24tY2VudGVyLFxuOmhvc3QgLmVkaXRhYmxlIDo6bmctZGVlcCBzcGFuLnAtaW5wdXRudW1iZXIucC1jb21wb25lbnQgLnAtaW5wdXRudW1iZXItaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gICAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG46aG9zdDo6bmctZGVlcCAuc21hbGwtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW0gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMnJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdDo6bmctZGVlcCAuc21hbGwtaW5wdXQgPiBzcGFuID4gaW5wdXQge1xuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjNyZW0gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMnJlbSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0OjpuZy1kZWVwIC5pbnZvaWNlLWJvZHkgPiBkaXYgPiBkaXYge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAgLnAtZGF0YXZpZXctZW1wdHltZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdDo6bmctZGVlcCAucC1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkLTUwMCkgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 51391:
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderModule: () => (/* binding */ OrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _order_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.routes */ 35977);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _order_home_order_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-home/order-home.component */ 90645);
/* harmony import */ var _order_table_order_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-table/order-table.component */ 13079);
/* harmony import */ var _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/products-dialog/products-dialog.component */ 44089);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dataview */ 53415);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/pipes/lira.pipe */ 62298);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);






// primeng













class OrderModule {
  static {
    this.ɵfac = function OrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: OrderModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _order_routes__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ProductsDialogComponent, primeng_card__WEBPACK_IMPORTED_MODULE_7__.CardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_10__.DataViewModule, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumberModule, primeng_messages__WEBPACK_IMPORTED_MODULE_13__.MessagesModule, primeng_divider__WEBPACK_IMPORTED_MODULE_14__.DividerModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_15__.AutoCompleteModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.CheckboxModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__.RadioButtonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OrderModule, {
    declarations: [_order_home_order_home_component__WEBPACK_IMPORTED_MODULE_1__.OrderHomeComponent, _order_table_order_table_component__WEBPACK_IMPORTED_MODULE_2__.OrderTableComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _order_routes__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ProductsDialogComponent, primeng_card__WEBPACK_IMPORTED_MODULE_7__.CardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_10__.DataViewModule, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumberModule, primeng_messages__WEBPACK_IMPORTED_MODULE_13__.MessagesModule, primeng_divider__WEBPACK_IMPORTED_MODULE_14__.DividerModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_15__.AutoCompleteModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.CheckboxModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_4__.LiraPipe, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__.RadioButtonModule]
  });
})();

/***/ }),

/***/ 35977:
/*!***************************************!*\
  !*** ./src/app/order/order.routes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderRoutingModule: () => (/* binding */ OrderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _order_home_order_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-home/order-home.component */ 90645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _order_home_order_home_component__WEBPACK_IMPORTED_MODULE_0__.OrderHomeComponent
}];
class OrderRoutingModule {
  static {
    this.ɵfac = function OrderRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OrderRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 41000:
/*!****************************************!*\
  !*** ./src/app/order/order.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/notifications.service */ 24861);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/api.service */ 22761);
/* harmony import */ var _history_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../history/history.service */ 36032);
/* harmony import */ var _stock_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stock/stock.service */ 35427);
/* harmony import */ var _accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../accounting/auxiliary.service */ 53591);
/* harmony import */ var _accounting_accounting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../accounting/accounting.service */ 39512);











class OrderService {
  constructor(http, notificationService, api, historyService, stockService, auxiliaryService, accountingService) {
    this.http = http;
    this.notificationService = notificationService;
    this.api = api;
    this.historyService = historyService;
    this.stockService = stockService;
    this.auxiliaryService = auxiliaryService;
    this.accountingService = accountingService;
    this.host = this.api.host;
    this.orderSubmitLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(false);
    this.invoice_items = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.invoiceTotal = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.barcodeResponse = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(0);
    this.factor = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(1);
    this.stateOptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([{
      label: '$$',
      value: 'dollar'
    }, {
      label: 'L.L',
      value: 'lira'
    }]);
    this.stateValue = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('dollar');
    this.customer_id = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.active_invoice = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(-1);
    this.pending_invoices$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.reset_form_validations$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
    this.include_vat = false;
    this.vat_rate = 0.11;
    this.discount_value = null;
    this.discount_percent = null;
    this.discount_percent_on_total = null;
    this.invoice_date = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
    this.form_error = false;
    this.submitted = false;
    this.priceOption = 'original';
    // sell dialog
    this.sellDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
    this.invoice_number = null;
    this.invoice_number_error = false;
    this.current_invoice_number = null;
    this.deliveryChargeValue = this.stockService.deliveryChargeValue;
  }
  //init invocie values
  init_values() {
    this.submitted = false;
    this.include_vat = false;
    this.discount_value = null;
    this.discount_percent = null;
    this.discount_percent_on_total = null;
    this.customer_id.next(null);
    this.invoice_date = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
  }
  // submit barcode
  submitBarcode(barcode) {
    this.http.get(`${this.host}/stock/item/${barcode}`).subscribe({
      next: item => {
        if (item) {
          this.barcodeResponse.next(item);
        } else {
          this.notificationService.showError('Item not found!', 'home');
        }
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  calculate_additional_totals(invoice_totals) {
    if (invoice_totals.total_dollar_price === 0) {
      invoice_totals.discount_amount_dollar = 0;
      invoice_totals.discount_amount_lira = 0;
      invoice_totals.vat_dollar = 0;
      invoice_totals.vat_lira = 0;
      invoice_totals.delivery_charge = 0;
      this.invoiceTotal.next(invoice_totals);
      return;
    }
    const exchangeRate = this.stockService.exchangeRate.value;
    invoice_totals.total_dollar = invoice_totals.total_dollar_price;
    if (exchangeRate.rate_value) {
      invoice_totals.total_lira = invoice_totals.total_dollar * exchangeRate.rate_value;
      invoice_totals.total_lira_price = invoice_totals.total_dollar_price * exchangeRate.rate_value;
    }
    if (this.discount_value || this.discount_percent) {
      //calculate discount ammounts
      invoice_totals.discount_amount_dollar = this.discount_value ? this.discount_value : Math.round(invoice_totals.total_dollar_price * this.discount_percent) / 100;
      invoice_totals.discount_amount_lira = this.discount_value ? this.discount_value * exchangeRate.rate_value : invoice_totals.total_lira_price * this.discount_percent / 100;
      if (invoice_totals.discount_amount_dollar > invoice_totals.total_dollar_price) {
        this.discount_value = null;
        this.discount_percent = null;
        invoice_totals.discount_amount_dollar = invoice_totals.discount_amount_lira = 0;
      }
    } else {
      invoice_totals.discount_amount_dollar = 0;
      invoice_totals.discount_amount_lira = 0;
    }
    //subtract discount from total
    invoice_totals.total_lira = invoice_totals.total_lira - invoice_totals.discount_amount_lira;
    invoice_totals.total_dollar = invoice_totals.total_dollar - invoice_totals.discount_amount_dollar;
    if (this.discount_percent_on_total) {
      const dicount_amount = Math.round(invoice_totals.total_dollar * this.discount_percent_on_total) / 100;
      if (dicount_amount > invoice_totals.total_dollar) {
        this.discount_percent_on_total = null;
        invoice_totals.secondary_discount_amount_dollar = 0;
      } else {
        invoice_totals.secondary_discount_amount_dollar = dicount_amount;
      }
    } else {
      invoice_totals.secondary_discount_amount_dollar = 0;
    }
    //subtract secondary discount from total
    invoice_totals.total_dollar = invoice_totals.total_dollar - invoice_totals.secondary_discount_amount_dollar;
    invoice_totals.total_lira = invoice_totals.total_lira - invoice_totals.secondary_discount_amount_dollar * exchangeRate.rate_value;
    invoice_totals.total_dollar_discount_2 = invoice_totals.total_dollar;
    //calculate vat totals
    if (this.include_vat) {
      invoice_totals.vat_lira = invoice_totals.total_lira * this.vat_rate;
      invoice_totals.vat_dollar = invoice_totals.total_dollar * this.vat_rate;
    } else {
      invoice_totals.vat_lira = 0;
      invoice_totals.vat_dollar = 0;
    }
    invoice_totals.total_lira = invoice_totals.total_lira + invoice_totals.vat_lira;
    invoice_totals.total_dollar = invoice_totals.total_dollar + invoice_totals.vat_dollar;
    //save value
    this.invoiceTotal.next(invoice_totals);
  }
  // calculate total cost and price
  calculateTotal(operation = 'add') {
    let order_items = this.invoice_items.value;
    if (!order_items) return;
    let invoice_totals = {
      total_dollar_price: 0,
      total_lira_price: 0,
      total_dollar_cost: 0,
      total_lira_cost: 0,
      total_dollar: 0,
      total_lira: 0,
      total_dollar_discount_2: 0,
      discount_amount_dollar: 0,
      secondary_discount_amount_dollar: 0,
      discount_amount_lira: 0,
      vat_lira: 0,
      vat_dollar: 0,
      total_qty: 0
    };
    order_items.forEach(item => {
      invoice_totals.total_dollar_cost = invoice_totals.total_dollar_cost + item.quantity * item.unit_cost;
      invoice_totals.total_dollar_price = invoice_totals.total_dollar_price + item.quantity * item.unit_price;
      invoice_totals.total_qty += item.quantity;
    });
    this.calculate_additional_totals(invoice_totals);
  }
  checkout(invoice, invoiceMap, customer) {
    this.orderSubmitLoading.set(true);
    this.http.post(`${this.host}/orders`, [invoice, invoiceMap]).subscribe({
      next: res => {
        this.orderSubmitLoading.set(false);
        this.notificationService.showSuccess(res.message, 'home');
        this.stockService.getItems();
        this.reset_form_validations$.next(true);
        this.cleanInvoice();
        this.historyService.fetchSalesHistory(null);
      },
      error: error => {
        this.orderSubmitLoading.set(false);
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  cleanInvoice() {
    this.init_values();
    this.invoice_items.next([]);
    this.calculateTotal();
    this.reset_form_validations$.next(true);
  }
  static {
    this.ɵfac = function OrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_history_history_service__WEBPACK_IMPORTED_MODULE_3__.HistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_stock_stock_service__WEBPACK_IMPORTED_MODULE_4__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_5__.AuxiliaryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_accounting_accounting_service__WEBPACK_IMPORTED_MODULE_6__.AccountingService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 53415:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dataview.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataView: () => (/* binding */ DataView),
/* harmony export */   DataViewLayoutOptions: () => (/* binding */ DataViewLayoutOptions),
/* harmony export */   DataViewModule: () => (/* binding */ DataViewModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/paginator */ 43157);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/spinner */ 4766);
/* harmony import */ var primeng_icons_thlarge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/thlarge */ 60576);
/* harmony import */ var primeng_icons_bars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/bars */ 15961);













/**
 * DataView displays data in grid or list layout with pagination and sorting features.
 * @group Components
 */
const _c0 = [[["p-header"]], [["p-footer"]]];
const _c1 = ["p-header", "p-footer"];
const _c2 = (a0, a1) => ({
  "p-dataview p-component": true,
  "p-dataview-list": a0,
  "p-dataview-grid": a1
});
const _c3 = a0 => ({
  $implicit: a0
});
function DataView_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-dataview-loading-icon pi-spin " + ctx_r0.loadingIcon);
  }
}
function DataView_div_1_ng_container_3_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 15);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spin", true)("styleClass", "p-dataview-loading-icon");
  }
}
function DataView_div_1_ng_container_3_2_ng_template_0_Template(rf, ctx) {}
function DataView_div_1_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataView_div_1_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DataView_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataView_div_1_ng_container_3_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 13)(2, DataView_div_1_ng_container_3_2_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.loadingIconTemplate);
  }
}
function DataView_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataView_div_1_i_2_Template, 1, 2, "i", 12)(3, DataView_div_1_ng_container_3_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loadingIcon);
  }
}
function DataView_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DataView_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataView_div_2_ng_container_2_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function DataView_p_paginator_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function DataView_p_paginator_3_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass);
  }
}
function DataView_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DataView_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.emptyMessageLabel, " ");
  }
}
function DataView_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 0);
  }
}
function DataView_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataView_div_7_ng_container_2_Template, 2, 1, "ng-container", 19)(3, DataView_div_7_ng_container_3_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.emptyMessageTemplate)("ngIfElse", ctx_r0.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.emptyMessageTemplate);
  }
}
function DataView_p_paginator_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function DataView_p_paginator_8_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass);
  }
}
function DataView_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DataView_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataView_div_9_ng_container_2_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
const _c4 = a0 => ({
  "p-highlight": a0
});
function DataViewLayoutOptions_BarsIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "BarsIcon");
  }
}
function DataViewLayoutOptions_3_ng_template_0_Template(rf, ctx) {}
function DataViewLayoutOptions_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataViewLayoutOptions_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DataViewLayoutOptions_ThLargeIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ThLargeIcon");
  }
}
function DataViewLayoutOptions_6_ng_template_0_Template(rf, ctx) {}
function DataViewLayoutOptions_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataViewLayoutOptions_6_ng_template_0_Template, 0, 0, "ng-template");
  }
}
class DataView {
  el;
  cd;
  filterService;
  config;
  /**
   * When specified as true, enables the pagination.
   * @group Props
   */
  paginator;
  /**
   * Number of rows to display per page.
   * @group Props
   */
  rows;
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  totalRecords;
  /**
   * Number of page links to display in paginator.
   * @group Props
   */
  pageLinks = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown of paginator
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Position of the paginator.
   * @group Props
   */
  paginatorPosition = 'bottom';
  /**
   * Custom style class for paginator
   * @group Props
   */
  paginatorStyleClass;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
  /**
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
  /**
   * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  paginatorDropdownScrollHeight = '200px';
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = '{currentPage} of {totalPages}';
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = '';
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the grid.
   * @group Props
   */
  gridStyleClass = '';
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Comma separated list of fields in the object graph to search against.
   * @group Props
   */
  filterBy;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Index of the first row to be displayed.
   * @group Props
   */
  first = 0;
  /**
   * Property name of data to use in sorting by default.
   * @group Props
   */
  sortField;
  /**
   * Order to sort the data by default.
   * @group Props
   */
  sortOrder;
  /**
   * An array of objects to display.
   * @group Props
   */
  value;
  /**
   * Defines the layout mode.
   * @group Props
   */
  get layout() {
    return this._layout;
  }
  set layout(layout) {
    this._layout = layout;
    if (this.initialized) {
      this.changeLayout(layout);
    }
  }
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {DataViewLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {DataViewPageEvent} event - Custom page event.
   * @group Emits
   */
  onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when sorting occurs.
   * @param {DataViewSortEvent} event - Custom sort event.
   * @group Emits
   */
  onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when changing layout.
   * @param {DataViewLayoutChangeEvent} event - Custom layout change event.
   * @group Emits
   */
  onChangeLayout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  header;
  footer;
  templates;
  _value;
  listTemplate;
  gridTemplate;
  itemTemplate;
  headerTemplate;
  emptyMessageTemplate;
  footerTemplate;
  paginatorLeftTemplate;
  paginatorRightTemplate;
  paginatorDropdownItemTemplate;
  loadingIconTemplate;
  listIconTemplate;
  gridIconTemplate;
  filteredValue;
  filterValue;
  initialized;
  _layout = 'list';
  translationSubscription;
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_1__.TranslationKeys.EMPTY_MESSAGE);
  }
  constructor(el, cd, filterService, config) {
    this.el = el;
    this.cd = cd;
    this.filterService = filterService;
    this.config = config;
  }
  ngOnInit() {
    if (this.lazy && this.lazyLoadOnInit) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  ngOnChanges(simpleChanges) {
    if (simpleChanges.value) {
      this._value = simpleChanges.value.currentValue;
      this.updateTotalRecords();
      if (!this.lazy && this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    if (simpleChanges.sortField || simpleChanges.sortOrder) {
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        this.sort();
      }
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'listItem':
        case 'list':
          this.listTemplate = item.template;
          break;
        case 'gridItem':
        case 'grid':
          this.gridTemplate = item.template;
          break;
        case 'paginatorleft':
          this.paginatorLeftTemplate = item.template;
          break;
        case 'paginatorright':
          this.paginatorRightTemplate = item.template;
          break;
        case 'paginatordropdownitem':
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case 'empty':
          this.emptyMessageTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'loadingicon':
          this.loadingIconTemplate = item.template;
          break;
        case 'listicon':
          this.listIconTemplate = item.template;
          break;
        case 'gridicon':
          this.gridIconTemplate = item.template;
          break;
      }
    });
    this.updateItemTemplate();
  }
  updateItemTemplate() {
    switch (this.layout) {
      case 'list':
        this.itemTemplate = this.listTemplate;
        break;
      case 'grid':
        this.itemTemplate = this.gridTemplate;
        break;
    }
  }
  changeLayout(layout) {
    this._layout = layout;
    this.onChangeLayout.emit({
      layout: this.layout
    });
    this.updateItemTemplate();
    this.cd.markForCheck();
  }
  updateTotalRecords() {
    this.totalRecords = this.lazy ? this.totalRecords : this._value ? this._value.length : 0;
  }
  paginate(event) {
    this.first = event.first;
    this.rows = event.rows;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
  }
  sort() {
    this.first = 0;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else if (this.value) {
      this.value.sort((data1, data2) => {
        let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, this.sortField);
        let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, this.sortField);
        let result = null;
        if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return this.sortOrder * result;
      });
      if (this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    this.onSort.emit({
      sortField: this.sortField,
      sortOrder: this.sortOrder
    });
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder
    };
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  filter(filter, filterMatchMode = 'contains') {
    this.filterValue = filter;
    if (this.value && this.value.length) {
      let searchFields = this.filterBy.split(',');
      this.filteredValue = this.filterService.filter(this.value, searchFields, filter, filterMatchMode, this.filterLocale);
      if (this.filteredValue.length === this.value.length) {
        this.filteredValue = null;
      }
      if (this.paginator) {
        this.first = 0;
        this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
      }
      this.cd.markForCheck();
    }
  }
  hasFilter() {
    return this.filterValue && this.filterValue.trim().length > 0;
  }
  ngOnDestroy() {
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static ɵfac = function DataView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DataView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DataView,
    selectors: [["p-dataView"]],
    contentQueries: function DataView_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.Footer, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      paginator: [2, "paginator", "paginator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      rows: [2, "rows", "rows", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      lazy: [2, "lazy", "lazy", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      emptyMessage: "emptyMessage",
      style: "style",
      styleClass: "styleClass",
      gridStyleClass: "gridStyleClass",
      trackBy: "trackBy",
      filterBy: "filterBy",
      filterLocale: "filterLocale",
      loading: [2, "loading", "loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      loadingIcon: "loadingIcon",
      first: [2, "first", "first", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      sortField: "sortField",
      sortOrder: [2, "sortOrder", "sortOrder", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      value: "value",
      layout: "layout"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onPage: "onPage",
      onSort: "onSort",
      onChangeLayout: "onChangeLayout"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c1,
    decls: 10,
    vars: 21,
    consts: [["empty", ""], [3, "ngClass", "ngStyle"], ["class", "p-dataview-loading", 4, "ngIf"], ["class", "p-dataview-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "onPageChange", 4, "ngIf"], [1, "p-dataview-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "onPageChange", 4, "ngIf"], ["class", "p-dataview-footer", 4, "ngIf"], [1, "p-dataview-loading"], [1, "p-dataview-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "spin", "styleClass"], [1, "p-dataview-header"], ["styleClass", "p-paginator-top", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass"], [1, "p-dataview-emptymessage"], [4, "ngIf", "ngIfElse"], ["styleClass", "p-paginator-bottom", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass"], [1, "p-dataview-footer"]],
    template: function DataView_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataView_div_1_Template, 4, 2, "div", 2)(2, DataView_div_2_Template, 3, 1, "div", 3)(3, DataView_p_paginator_3_Template, 1, 17, "p-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DataView_ng_container_5_Template, 1, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataView_div_7_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DataView_p_paginator_8_Template, 1, 17, "p-paginator", 8)(9, DataView_div_9_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c2, ctx.layout === "list", ctx.layout === "grid"))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header || ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx.paginator ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 12, ctx.filteredValue || ctx.value, ctx.lazy ? 0 : ctx.first, (ctx.lazy ? 0 : ctx.first) + ctx.rows) : ctx.filteredValue || ctx.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmpty() && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer || ctx.footerTemplate);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_paginator__WEBPACK_IMPORTED_MODULE_4__.Paginator, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__.SpinnerIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
    styles: ["@layer primeng{.p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-dataView',
      template: `
        <div [ngClass]="{ 'p-dataview p-component': true, 'p-dataview-list': layout === 'list', 'p-dataview-grid': layout === 'grid' }" [ngStyle]="style" [class]="styleClass">
            <div class="p-dataview-loading" *ngIf="loading">
                <div class="p-dataview-loading-overlay p-component-overlay">
                    <i *ngIf="loadingIcon" [class]="'p-dataview-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-dataview-loading-icon'" />
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </ng-container>
                </div>
            </div>
            <div class="p-dataview-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-top"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>

            <div class="p-dataview-content">
                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: paginator ? (filteredValue || value | slice: (lazy ? 0 : first) : (lazy ? 0 : first) + rows) : filteredValue || value }"></ng-container>

                <div *ngIf="isEmpty() && !loading">
                    <div class="p-dataview-emptymessage">
                        <ng-container *ngIf="!emptyMessageTemplate; else empty">
                            {{ emptyMessageLabel }}
                        </ng-container>
                        <ng-container #empty *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
                    </div>
                </div>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-bottom"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>
            <div class="p-dataview-footer" *ngIf="footer || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_1__.FilterService
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig
  }], {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    totalRecords: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    pageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alwaysShowPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    paginatorDropdownAppendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorDropdownScrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currentPageReportTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showCurrentPageReport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showJumpToPageDropdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showPageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    lazyLoadOnInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gridStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    first: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    sortField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    layout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onChangeLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header]
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.Footer]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }]
  });
})();
class DataViewLayoutOptions {
  dv;
  style;
  styleClass;
  constructor(dv) {
    this.dv = dv;
  }
  changeLayout(event, layout) {
    this.dv.changeLayout(layout);
    event.preventDefault();
  }
  static ɵfac = function DataViewLayoutOptions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DataViewLayoutOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataView));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DataViewLayoutOptions,
    selectors: [["p-dataViewLayoutOptions"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    decls: 7,
    vars: 14,
    consts: [[3, "ngClass", "ngStyle"], ["type", "button", 1, "p-button", "p-button-icon-only", 3, "click", "keydown.enter", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function DataViewLayoutOptions_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewLayoutOptions_Template_button_click_1_listener($event) {
          return ctx.changeLayout($event, "list");
        })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_1_listener($event) {
          return ctx.changeLayout($event, "list");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataViewLayoutOptions_BarsIcon_2_Template, 1, 0, "BarsIcon", 2)(3, DataViewLayoutOptions_3_Template, 1, 0, null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewLayoutOptions_Template_button_click_4_listener($event) {
          return ctx.changeLayout($event, "grid");
        })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_4_listener($event) {
          return ctx.changeLayout($event, "grid");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DataViewLayoutOptions_ThLargeIcon_5_Template, 1, 0, "ThLargeIcon", 2)(6, DataViewLayoutOptions_6_Template, 1, 0, null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dataview-layout-options p-selectbutton p-buttonset")("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, ctx.dv.layout === "list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dv.listIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.dv.listIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c4, ctx.dv.layout === "grid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dv.gridIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.dv.gridIconTemplate);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_6__.BarsIcon, primeng_icons_thlarge__WEBPACK_IMPORTED_MODULE_7__.ThLargeIcon],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataViewLayoutOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-dataViewLayoutOptions',
      template: `
        <div [ngClass]="'p-dataview-layout-options p-selectbutton p-buttonset'" [ngStyle]="style" [class]="styleClass">
            <button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'list' }" (click)="changeLayout($event, 'list')" (keydown.enter)="changeLayout($event, 'list')">
                <BarsIcon *ngIf="!dv.listIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.listIconTemplate"></ng-template></button
            ><button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'grid' }" (click)="changeLayout($event, 'grid')" (keydown.enter)="changeLayout($event, 'grid')">
                <ThLargeIcon *ngIf="!dv.gridIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.gridIconTemplate"></ng-template>
            </button>
        </div>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], () => [{
    type: DataView
  }], {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class DataViewModule {
  static ɵfac = function DataViewModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DataViewModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: DataViewModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_4__.PaginatorModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__.SpinnerIcon, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_6__.BarsIcon, primeng_icons_thlarge__WEBPACK_IMPORTED_MODULE_7__.ThLargeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataViewModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_4__.PaginatorModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__.SpinnerIcon, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_6__.BarsIcon, primeng_icons_thlarge__WEBPACK_IMPORTED_MODULE_7__.ThLargeIcon],
      exports: [DataView, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, DataViewLayoutOptions],
      declarations: [DataView, DataViewLayoutOptions]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 60576:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-thlarge.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThLargeIcon: () => (/* binding */ ThLargeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




class ThLargeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
  }
  static ɵfac = /* @__PURE__ */(() => {
    let ɵThLargeIcon_BaseFactory;
    return function ThLargeIcon_Factory(__ngFactoryType__) {
      return (ɵThLargeIcon_BaseFactory || (ɵThLargeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThLargeIcon)))(__ngFactoryType__ || ThLargeIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ThLargeIcon,
    selectors: [["ThLargeIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ThLargeIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ThLargeIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ThLargeIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_order_order_module_ts.js.map