"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["src_app_return_return_module_ts"],{

/***/ 7191:
/*!*************************************************************!*\
  !*** ./src/app/return/return-home/return-home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnHomeComponent: () => (/* binding */ ReturnHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var src_app_components_links_component_links_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/links-component/links.service */ 54659);
/* harmony import */ var src_app_stock_stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/stock/stock.service */ 35427);
/* harmony import */ var _return_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../return.service */ 45474);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/local-storage.service */ 18838);
/* harmony import */ var src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/accounting/auxiliary.service */ 53591);
/* harmony import */ var src_app_print_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/print.service */ 5312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/autofocus */ 17159);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/products-dialog/products-dialog.component */ 44089);
/* harmony import */ var _directives_number_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_directives/number.directive */ 48302);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipes/lira.pipe */ 62298);
/* harmony import */ var _core_pipes_exchanged_lira_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/pipes/exchanged-lira.pipe */ 65188);
/* harmony import */ var _core_pipes_dollar_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/pipes/dollar.pipe */ 53498);


































const _c0 = ["barcodeInput"];
const _c1 = ["invoiceTable"];
const _c2 = () => ({
  width: "50vw"
});
const _c3 = () => ({
  standalone: true
});
const _c4 = a0 => ({
  "ng-invalid ng-dirty": a0
});
const _c5 = a0 => [a0];
function ReturnHomeComponent_ng_template_3_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Customer is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ReturnHomeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 22)(1, "div", 7)(2, "div", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Invoice Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p-calendar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ReturnHomeComponent_ng_template_3_Template_p_calendar_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.returnService.invoice_date, $event) || (ctx_r2.returnService.invoice_date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 24)(9, "div", 25)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Link To");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "p-dropdown", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ReturnHomeComponent_ng_template_3_Template_p_dropdown_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.returnService.link_id, $event) || (ctx_r2.returnService.link_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 23)(14, "div", 28)(15, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "p-dropdown", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChange", function ReturnHomeComponent_ng_template_3_Template_p_dropdown_onChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.customerChange($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ReturnHomeComponent_ng_template_3_small_20_Template, 2, 0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 33)(22, "div", 34)(23, "div", 28)(24, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "p-inputNumber", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ReturnHomeComponent_ng_template_3_Template_p_inputNumber_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.returnService.discount_percent, $event) || (ctx_r2.returnService.discount_percent = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ReturnHomeComponent_ng_template_3_Template_p_inputNumber_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.calculate_discount($event, "percent"));
    })("onFocus", function ReturnHomeComponent_ng_template_3_Template_p_inputNumber_onFocus_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.select($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 33)(30, "div", 34)(31, "div", 28)(32, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Discount on Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "p-inputNumber", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ReturnHomeComponent_ng_template_3_Template_p_inputNumber_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.returnService.discount_percent_on_total, $event) || (ctx_r2.returnService.discount_percent_on_total = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ReturnHomeComponent_ng_template_3_Template_p_inputNumber_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.calculate_discount($event, "percent_total"));
    })("onFocus", function ReturnHomeComponent_ng_template_3_Template_p_inputNumber_onFocus_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.select($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 39)(38, "div", 40)(39, "p-checkbox", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ReturnHomeComponent_ng_template_3_Template_p_checkbox_ngModelChange_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.calculate_vat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r2.debtForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.returnService.invoice_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](41, _c3))("readonlyInput", true)("showIcon", true)("iconDisplay", "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.returnService.link_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](42, _c3))("options", ctx_r2.links())("loading", ctx_r2.loadingLinks())("filter", true)("showClear", true)("autoOptionFocus", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r2.customers)("filter", true)("showClear", true)("virtualScroll", true)("virtualScrollItemSize", 38)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](43, _c4, ctx_r2.customer_id.invalid && (ctx_r2.customer_id.dirty || ctx_r2.customer_id.touched || ctx_r2.returnService.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.customer_id.invalid && (ctx_r2.customer_id.dirty || ctx_r2.customer_id.touched || ctx_r2.returnService.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 1)("min", 0)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.returnService.discount_percent);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](45, _c3))("readonly", (ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar_price) == 0 && ctx_r2.returnService.discount_percent == 0)("disabled", ctx_r2.returnService.discount_value > 0)("minFractionDigits", 1)("maxFractionDigits", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 1)("min", 0)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.returnService.discount_percent_on_total);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](46, _c3))("readonly", (ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar_price) == 0 && ctx_r2.returnService.discount_percent_on_total == 0)("minFractionDigits", 1)("maxFractionDigits", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r2.returnService.include_vat)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](47, _c3))("binary", true)("trueValue", true);
  }
}
function ReturnHomeComponent_ng_template_6_div_19_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "p-divider", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Total2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 1, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar_discount_2), " ");
  }
}
function ReturnHomeComponent_ng_template_6_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Discount2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ReturnHomeComponent_ng_template_6_div_19_ng_container_6_Template, 7, 3, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.secondary_discount_amount_dollar), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.returnService.include_vat);
  }
}
function ReturnHomeComponent_ng_template_6_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "VAT (11%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.vat_lira), " ", "@ " + ctx_r2.exchangeRate.rate_value, "");
  }
}
function ReturnHomeComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Subtotal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "p-divider", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Net total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ReturnHomeComponent_ng_template_6_div_19_Template, 7, 4, "div", 46)(20, ReturnHomeComponent_ng_template_6_div_20_Template, 6, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 8)(22, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 6, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 8, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.discount_amount_dollar));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 10, ctx_r2.invoiceTotal.total_dollar_price - ctx_r2.invoiceTotal.discount_amount_dollar));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.returnService.discount_percent_on_total);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.returnService.include_vat);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Grand Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 12, ctx_r2.invoiceTotal == null ? null : ctx_r2.invoiceTotal.total_dollar), " ");
  }
}
function ReturnHomeComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReturnHomeComponent_ng_template_12_Template_th_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.customer_id.value && ctx_r2.toggleTableRows());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Del?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r2.all_expanded ? "pi pi-eye" : "pi pi-eye-slash");
  }
}
function ReturnHomeComponent_ng_template_13_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ReturnHomeComponent_ng_template_13_ng_template_11_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.getTypedInvoiceItems(record_r7).quantity, $event) || (ctx_r2.getTypedInvoiceItems(record_r7).quantity = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ReturnHomeComponent_ng_template_13_ng_template_11_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.setQty(record_r7));
    })("focus", function ReturnHomeComponent_ng_template_13_ng_template_11_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.select($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appIntegerOnly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.getTypedInvoiceItems(record_r7).quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("required", true)("min", 1);
  }
}
function ReturnHomeComponent_ng_template_13_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", record_r7.quantity, " ");
  }
}
function ReturnHomeComponent_ng_template_13_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p-inputNumber", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ReturnHomeComponent_ng_template_13_ng_template_15_Template_p_inputNumber_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.getTypedInvoiceItems(record_r7).unit_price, $event) || (ctx_r2.getTypedInvoiceItems(record_r7).unit_price = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onFocus", function ReturnHomeComponent_ng_template_13_ng_template_15_Template_p_inputNumber_onFocus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.select($event.target));
    })("ngModelChange", function ReturnHomeComponent_ng_template_13_ng_template_15_Template_p_inputNumber_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.setPrice(record_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.getTypedInvoiceItems(record_r7).unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("required", true)("min", 0.1);
  }
}
function ReturnHomeComponent_ng_template_13_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "currency");
  }
  if (rf & 2) {
    const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, record_r7.unit_price), " ");
  }
}
function ReturnHomeComponent_ng_template_13_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "dollar");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", record_r7.currency == "lira" ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, ctx_r2.getTypedInvoiceItems(record_r7).unit_price * ctx_r2.getTypedInvoiceItems(record_r7).quantity) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, ctx_r2.getTypedInvoiceItems(record_r7).unit_price * ctx_r2.getTypedInvoiceItems(record_r7).quantity), " ");
  }
}
function ReturnHomeComponent_ng_template_13_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "exchangedLira");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", record_r7.currency == "lira" ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, ctx_r2.getTypedInvoiceItems(record_r7).unit_price * ctx_r2.getTypedInvoiceItems(record_r7).quantity) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, ctx_r2.getTypedInvoiceItems(record_r7).unit_price * ctx_r2.getTypedInvoiceItems(record_r7).quantity), " ");
  }
}
function ReturnHomeComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td", 55)(10, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ReturnHomeComponent_ng_template_13_ng_template_11_Template, 1, 4, "ng-template", 56)(12, ReturnHomeComponent_ng_template_13_ng_template_12_Template, 1, 1, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td", 58)(14, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ReturnHomeComponent_ng_template_13_ng_template_15_Template, 1, 3, "ng-template", 56)(16, ReturnHomeComponent_ng_template_13_ng_template_16_Template, 2, 3, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ReturnHomeComponent_ng_template_13_td_17_Template, 4, 5, "td", 46)(18, ReturnHomeComponent_ng_template_13_td_18_Template, 4, 5, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReturnHomeComponent_ng_template_13_Template_td_click_19_listener() {
      const rowIndex_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5).rowIndex;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.removeRow(rowIndex_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r7 = ctx.$implicit;
    const rowIndex_r9 = ctx.rowIndex;
    const expanded_r10 = ctx.expanded;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pRowTogglerDisabled", !ctx_r2.customer_id.value || !ctx_r2.getCustomerItemHistory(record_r7) || ctx_r2.getCustomerItemHistory(record_r7).length === 0)("pRowToggler", record_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](expanded_r10 ? "pi pi-eye" : "pi pi-eye-slash");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](rowIndex_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.getTypedInvoiceItems(record_r7).sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.getTypedInvoiceItems(record_r7).product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pEditableColumn", ctx_r2.getTypedInvoiceItems(record_r7).quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pEditableColumn", ctx_r2.getTypedInvoiceItems(record_r7).unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.stateValue == "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.stateValue == "dollar");
  }
}
function ReturnHomeComponent_ng_template_14_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Latest Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Purchase date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ReturnHomeComponent_ng_template_14_ng_template_5_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 2, item_r11.unit_price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r11.order_datetime || " --- ", " ");
  }
}
function ReturnHomeComponent_ng_template_14_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ReturnHomeComponent_ng_template_14_ng_template_5_tr_0_Template, 6, 4, "tr", 66);
  }
  if (rf & 2) {
    const record_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.getCustomerItemHistory(record_r12));
  }
}
function ReturnHomeComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 63)(2, "div", 64)(3, "p-table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ReturnHomeComponent_ng_template_14_ng_template_4_Template, 5, 0, "ng-template", 10)(5, ReturnHomeComponent_ng_template_14_ng_template_5_Template, 1, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const record_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](1, _c5, record_r12));
  }
}
function ReturnHomeComponent_ng_template_15_h4_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Total units: ", ctx_r2.invoiceTotal.total_qty, " ");
  }
}
function ReturnHomeComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ReturnHomeComponent_ng_template_15_h4_0_Template, 2, 1, "h4", 67);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.invoiceTotal.total_qty);
  }
}
function ReturnHomeComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 69)(1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "No data yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ReturnHomeComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p-autoComplete", 70, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ReturnHomeComponent_ng_template_18_Template_p_autoComplete_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.barcode, $event) || (ctx_r2.barcode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("completeMethod", function ReturnHomeComponent_ng_template_18_Template_p_autoComplete_completeMethod_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.searchItem($event));
    })("onKeyUp", function ReturnHomeComponent_ng_template_18_Template_p_autoComplete_onKeyUp_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.submitInvoiceInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReturnHomeComponent_ng_template_18_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.openProductsDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("suggestions", ctx_r2.searchedItems)("delay", 150)("autofocus", true);
  }
}
function ReturnHomeComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReturnHomeComponent_ng_template_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.clearInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReturnHomeComponent_ng_template_19_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.submitDebt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r2.order_items.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r2.order_items.length == 0 || ctx_r2.form_error);
  }
}
function ReturnHomeComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReturnHomeComponent_ng_template_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.saveAndPrintInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReturnHomeComponent_ng_template_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.rejectCheckoutDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReturnHomeComponent_ng_template_23_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.confirmCheckoutDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("autofocus", true);
  }
}
class ReturnHomeComponent {
  // focus on right click
  preventContextMenu() {
    this.focusInput();
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
  // global focus function for invoice input
  focusInput() {
    //   this.barcodeInput.nativeElement.children[0].children[0].focus()
  }
  constructor(stockService, returnService, confirmationService, localStorageService, auxiliaryService, printService) {
    this.stockService = stockService;
    this.returnService = returnService;
    this.confirmationService = confirmationService;
    this.localStorageService = localStorageService;
    this.auxiliaryService = auxiliaryService;
    this.printService = printService;
    this.linksService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.inject)(src_app_components_links_component_links_service__WEBPACK_IMPORTED_MODULE_0__.LinksService);
    this.links = this.linksService.links;
    this.loadingLinks = this.linksService.loadingLinks;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
    this.items = [];
    this.dialogVisible = false;
    this.all_expanded = false;
    this.form_error = false;
    // get view height for scrollable invoice table
    this.vh = this.localStorageService.getSellPageViewHeight();
    // debt form
    this.debtForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      customer_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.returnService.customer_id.value, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      invoice_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      total_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      total_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      sub_total: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      exchange_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      has_discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      discount_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      discount_percent: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      discount2_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      discount2_percent: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      include_vat: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      vat_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      vat_value_lbp: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      order_datetime: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.returnService.invoice_date),
      link_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.returnService.link_id)
    });
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
    this.subscriptions.add(this.returnService.invoice_items.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(re => {
      this.returnService.calculateTotal();
      if (this.barcodeInput) {
        this.focusInput();
      }
    })).subscribe(res => {
      this.order_items = res;
    }));
    this.subscriptions.add(this.returnService.invoiceTotal.subscribe(res => {
      this.invoiceTotal = res;
    }));
    this.subscriptions.add(this.returnService.barcodeResponse.subscribe(res => {
      this.barcodeResponse = res;
      if (res) {
        this.addToInvoice();
        this.returnService.barcodeResponse.next(0);
      }
    }));
    this.subscriptions.add(this.returnService.factor.subscribe(res => {
      this.factor = res;
    }));
    this.subscriptions.add(this.stockService.exchangeRate.subscribe(res => {
      this.exchangeRate = res;
    }));
    this.subscriptions.add(this.returnService.stateOptions.subscribe(res => {
      this.stateOptions = res;
    }));
    this.subscriptions.add(this.returnService.stateValue.subscribe(res => {
      this.stateValue = res;
    }));
    this.subscriptions.add(this.customer_id.statusChanges.subscribe(res => {
      // this.returnService.customer_id.next(this.customer_id.value);
      if (this.customer_id.value) this.returnService.getCustomerLatestPurchase(this.customer_id.value);else {
        this.selectedCustomerLatestItems = [];
        this.all_expanded = true;
        this.toggleTableRows();
      }
    }));
    this.subscriptions.add(this.returnService.selectedCustomerLatestItems.subscribe(res => {
      this.selectedCustomerLatestItems = res;
    }));
    this.subscriptions.add(this.returnService.customer_id.subscribe(res => {
      this.customer_id.patchValue(res);
    }));
    this.subscriptions.add(this.returnService.reset_form_validations$.subscribe(res => {
      if (res) {
        this.resetFormValidation();
        this.returnService.reset_form_validations$.next(false);
      }
    }));
    this.subscriptions.add(this.returnService.invoiceToPrint.subscribe(res => {
      if (res) {
        this.invoiceToPrint = res;
        this.printInvoice();
      }
    }));
    // this.waitForViewChildToLoadThenFocus();
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
    this.returnService.customer_id.next(this.customer_id.value);
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
          this.returnService.barcodeResponse.next(this.barcode);
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
        this.returnService.factor.next(parseInt(factor));
        this.returnService.submitBarcode(actualBarcode);
      } else {
        this.returnService.submitBarcode(barcode);
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
      this.returnService.barcodeResponse.next(element);
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
      product_name: item.product_name,
      unit_cost: item.average_cost_usd,
      unit_price: item.unit_price_usd,
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
    this.returnService.invoice_items.next(this.order_items);
    this.returnService.factor.next(1);
  }
  // add qty
  // addQty(item: InvoiceItems) {
  //     let index = this.order_items.findIndex(
  //         (x) => x.product_id == item.product_id
  //     );
  //     this.order_items[index]['quantity'] += 1;
  //     this.returnService.invoice_items.next(this.order_items);
  // }
  // subtract qty
  removeRow(index) {
    // let index = this.order_items.findIndex(
    //     (x) => x.product_id == item.product_id
    // );
    // if (this.order_items[index]['quantity'] == 1) {
    //     this.order_items.splice(index, 1);
    // } else {
    //     this.order_items[index]['quantity'] -= 1;
    // }
    this.order_items.splice(index, 1);
    this.returnService.invoice_items.next(this.order_items);
  }
  //set price using text input
  setPrice(item) {
    if (!item.unit_price) {
      this.form_error = true;
    } else {
      this.form_error = false;
    }
    this.returnService.calculateTotal('edit');
  }
  //set QTY using text input
  setQty(item) {
    if (!item.quantity) {
      this.form_error = true;
    } else {
      this.form_error = false;
    }
    this.returnService.calculateTotal('edit');
  }
  // submit debt form
  submitDebt() {
    this.returnService.submitted = true;
    if (this.debtForm.valid && this.form_error === false && this.returnService.invoice_number_error === false) {
      // prettier-ignore
      if (this.returnService.is_lira_payment && this.returnService.payment_amount && !this.returnService.payment_amount_lbp || !this.returnService.payment_amount && this.returnService.payment_amount_lbp) {
        return;
      }
      this.confirmationService.confirm({
        key: 'checkout',
        message: `Are you sure you want to continue"?`,
        header: 'Warning',
        icon: 'pi pi-exclamation-triangle',
        closeOnEscape: false
      });
    }
  }
  // clear invoice
  clearInvoice() {
    this.confirmationService.confirm({
      key: 'clearInvoice',
      message: `Are you sure that you want to clear invoice"?`,
      header: 'Warning',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      defaultFocus: 'reject',
      accept: () => {
        // this.returnService.clearInvoiceAction();
        this.returnService.invoice_items.next([]);
        this.resetForm();
      },
      reject: () => {
        this.focusInput();
      }
    });
  }
  // reset debt form
  resetForm() {
    this.returnService.submitted = false;
    this.debtForm.reset({
      customer_id: null
    });
    this.returnService.customer_id.next(null);
  }
  resetFormValidation() {
    this.debtForm.markAsPristine();
    this.debtForm.markAsUntouched();
    this.debtForm.updateValueAndValidity();
  }
  calculate_vat() {
    this.returnService.include_vat = !this.returnService.include_vat;
    this.returnService.calculate_additional_totals(this.invoiceTotal);
  }
  // select input on focus
  select(event) {
    event.select();
  }
  calculate_discount(event, type = 'amount') {
    // this.returnService.calculateTotal()
    if (type === 'percent_total') {
      if (this.returnService.discount_percent_on_total > 100) {
        this.returnService.discount_percent_on_total = 100;
      }
    } else if (type === 'percent') {
      if (this.returnService.discount_percent > 100) {
        this.returnService.discount_percent = 100;
      }
    }
    this.returnService.calculate_additional_totals(this.invoiceTotal);
  }
  getCustomerItemHistory(item) {
    return this.selectedCustomerLatestItems.filter(x => x.product_id == item.product_id);
  }
  togglePaymentType(event) {
    this.returnService.is_lira_payment = event;
    if (!this.returnService.is_lira_payment) {
      this.returnService.payment_amount_lbp = null;
    }
  }
  getTypedInvoiceItems(item) {
    return item;
  }
  printInvoice() {
    this.printService.print(this.invoiceToPrint, 'return');
  }
  confirmCheckoutDialog(print_flag = false) {
    this.debtForm.patchValue({
      total_cost: this.invoiceTotal.total_dollar_cost,
      total_amount: this.invoiceTotal.total_dollar,
      sub_total: this.invoiceTotal.total_dollar_price,
      exchange_rate: this.exchangeRate.rate_value,
      discount_value: this.invoiceTotal.discount_amount_dollar,
      discount_percent: this.returnService.discount_value ? null : this.returnService.discount_percent,
      discount2_value: this.returnService.discount_percent_on_total > 0 ? this.invoiceTotal.secondary_discount_amount_dollar : null,
      discount2_percent: this.returnService.discount_percent_on_total > 0 ? this.returnService.discount_percent_on_total : null,
      has_discount: this.invoiceTotal.discount_amount_dollar > 0,
      include_vat: this.returnService.include_vat,
      vat_value: this.invoiceTotal.vat_dollar,
      vat_value_lbp: this.invoiceTotal.vat_lira,
      order_datetime: this.returnService.invoice_date,
      link_id: this.returnService.link_id
    });
    const payment = {
      payment_amount: this.returnService.payment_amount,
      payment_amount_value: this.returnService.is_lira_payment ? this.returnService.payment_amount_lbp : this.returnService.payment_amount,
      currency: this.returnService.is_lira_payment ? 'lira' : 'dollar',
      payment_notes: 'Sell Invoice Payment',
      customer_id: this.customer_id.value,
      exchange_rate: this.exchangeRate.rate_value
    };
    this.returnService.checkout(this.debtForm.value, this.order_items, payment, this.customer_id.value, print_flag);
    // this.resetForm();
    this.focusInput();
    this.confirmationService.close();
  }
  rejectCheckoutDialog() {
    this.confirmationService.close();
    this.focusInput();
  }
  saveAndPrintInvoice() {
    this.confirmCheckoutDialog(true);
  }
  // formatedInvoiceNumber() {
  //     return `INV${this.returnService.invoice_number
  //         .toString()
  //         .padStart(5, '0')}`;
  // }
  setInvoiceNumber($event) {
    // this.returnService.invoice_number = $event;
    if ($event.length < 8) return;
    if ($event.length > 0) {
      this.returnService.checkInvoiceNumber($event);
    }
  }
  static {
    this.ɵfac = function ReturnHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReturnHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_stock_stock_service__WEBPACK_IMPORTED_MODULE_1__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_return_service__WEBPACK_IMPORTED_MODULE_2__.ReturnService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_15__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_4__.AuxiliaryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_print_service__WEBPACK_IMPORTED_MODULE_5__.PrintService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ReturnHomeComponent,
      selectors: [["app-return-home"]],
      viewQuery: function ReturnHomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.barcodeInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.invoiceTable = _t.first);
        }
      },
      hostBindings: function ReturnHomeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("contextmenu", function ReturnHomeComponent_contextmenu_HostBindingHandler() {
            return ctx.preventContextMenu();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"])("keydown", function ReturnHomeComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"]);
        }
      },
      decls: 25,
      vars: 10,
      consts: [["invoiceTable", ""], ["barcodeInput", ""], [1, "grid", "m-1"], [1, "col-9"], ["pTemplate", "body"], [1, "col-3"], ["styleClass", "mt-2"], [1, "grid"], [1, "col-12"], ["dataKey", "product_id", "styleClass", "p-datatable-sm p-datatable-gridlines", "editMode", "cell", 3, "value", "scrollable", "scrollHeight"], ["pTemplate", "header"], ["pTemplate", "rowexpansion"], ["pTemplate", "summary"], ["pTemplate", "emptymessage"], ["styleClass", "mt-2 p-2"], ["pTemplate", "left"], ["pTemplate", "right"], [3, "onHide", "onSubmit", "visible"], ["key", "sell"], ["key", "checkout", 3, "onHide"], ["pTemplate", "footer"], ["key", "clearInvoice", 3, "onHide"], [3, "formGroup"], [1, "col-12", "md:col-3"], [1, "field"], [1, "flex", "flex-column"], ["inputId", "order_datetime", "name", "order_datetime", "styleClass", "p-inputtext-sm w-full", "dateFormat", "yy-mm-dd", "size", "small", 3, "ngModelChange", "ngModel", "ngModelOptions", "readonlyInput", "showIcon", "iconDisplay"], ["styleClass", "p-inputtext-sm", "appendTo", "body", "optionLabel", "description", "optionValue", "link_id", "placeholder", "Select Link To", "filterBy", "description", 3, "ngModelChange", "ngModel", "ngModelOptions", "options", "loading", "filter", "showClear", "autoOptionFocus"], [1, "flex", "flex-column", "gap-2"], ["for", "customer"], [1, "text-red-500"], ["styleClass", "p-inputtext-sm", "id", "customer", "appendTo", "body", "formControlName", "customer_id", "optionLabel", "name", "optionValue", "account_id", "placeholder", "Select Customer", "filterBy", "name", 3, "onChange", "options", "filter", "showClear", "virtualScroll", "virtualScrollItemSize", "ngClass"], ["class", "p-error", 4, "ngIf"], [1, "col-12", "md:col-2"], [1, "field", "flex-1"], ["for", "discount"], [1, "text-primary"], ["styleClass", "p-inputtext-sm w-full", "inputId", "percent", "prefix", "%", "mode", "decimal", "locale", "en-US", 3, "ngModelChange", "onFocus", "size", "min", "max", "ngModel", "ngModelOptions", "readonly", "disabled", "minFractionDigits", "maxFractionDigits"], ["styleClass", "p-inputtext-sm w-full", "inputId", "percent_total", "prefix", "%", "mode", "decimal", "locale", "en-US", 3, "ngModelChange", "onFocus", "size", "min", "max", "ngModel", "ngModelOptions", "readonly", "minFractionDigits", "maxFractionDigits"], [1, "col-2", "flex", "justify-content-center"], [1, "mt-5"], ["label", "Add VAT", 3, "ngModelChange", "ngModel", "ngModelOptions", "binary", "trueValue"], [1, "p-error"], [1, "text-green-500", "font-medium", "text-lg"], [1, "text-500", "text-lg"], ["styleClass", "mt-1 mb-1"], [4, "ngIf"], [1, "text-900", "font-medium", "text-xl"], [1, "text-500"], ["width", "5%", 1, "dark-hover", 3, "click"], ["width", "5%"], ["width", "10%"], ["width", "40%"], ["width", "15%"], [1, "dark-hover", 3, "pRowTogglerDisabled", "pRowToggler"], ["pEditableColumnField", "quantity", 3, "pEditableColumn"], ["pTemplate", "input"], ["pTemplate", "output"], ["pEditableColumnField", "unit_price", 3, "pEditableColumn"], [1, "danger-hover", 3, "click"], [1, "pi", "pi-trash"], ["pInputText", "", "type", "number", 1, "p-inputtext-sm", "editable", 3, "ngModelChange", "focus", "appIntegerOnly", "ngModel", "required", "min"], ["mode", "currency", "currency", "USD", "locale", "en-US", "step", "0", 1, "p-inputtext-sm", "height", 3, "ngModelChange", "onFocus", "ngModel", "required", "min"], ["colspan", "9"], [1, "p-2"], [3, "value"], [4, "ngFor", "ngForOf"], ["class", "text-center m-0", 4, "ngIf"], [1, "text-center", "m-0"], [1, "surface-300"], ["field", "product_name", "name", "barcodeInput", "placeholder", "scan or search ...", "spellcheck", "false", 1, "p-inputtext-sm", 3, "ngModelChange", "completeMethod", "onKeyUp", "ngModel", "suggestions", "delay", "autofocus"], ["pButton", "", "pRipple", "", "label", "Multi Select", "severity", "warning", "icon", "pi pi-list", 1, "p-button-sm", "ml-2", 3, "click"], ["pButton", "", "pRipple", "", "label", "Clear", "icon", "pi pi-times", 1, "p-button-danger", "p-button-sm", "mr-2", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "label", "Checkout", "icon", "pi pi-cart-plus", 1, "p-button-success", "p-button-sm", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "icon", "pi pi-print", "type", "button", "label", "Save & Print", 1, "p-button-secondary", "p-button-sm", "mr-6", 3, "click"], ["pButton", "", "pRipple", "", "pAutoFocus", "", "icon", "pi pi-times", "type", "button", "label", "No", 1, "p-button-danger", "p-button-sm", "mr-2", 3, "click", "autofocus"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", "type", "button", "label", "Yes", 1, "p-button-success", "p-button-sm", 3, "click"]],
      template: function ReturnHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ReturnHomeComponent_ng_template_3_Template, 40, 48, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 5)(5, "p-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ReturnHomeComponent_ng_template_6_Template, 25, 14, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p-card", 6)(8, "div", 7)(9, "div", 8)(10, "p-table", 9, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ReturnHomeComponent_ng_template_12_Template, 17, 2, "ng-template", 10)(13, ReturnHomeComponent_ng_template_13_Template, 21, 11, "ng-template", 4)(14, ReturnHomeComponent_ng_template_14_Template, 6, 3, "ng-template", 11)(15, ReturnHomeComponent_ng_template_15_Template, 1, 1, "ng-template", 12)(16, ReturnHomeComponent_ng_template_16_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "p-toolbar", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ReturnHomeComponent_ng_template_18_Template, 3, 4, "ng-template", 15)(19, ReturnHomeComponent_ng_template_19_Template, 2, 2, "ng-template", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "products-dialog", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onHide", function ReturnHomeComponent_Template_products_dialog_onHide_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.closeProductsDialog());
          })("onSubmit", function ReturnHomeComponent_Template_products_dialog_onSubmit_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.assignSelectedProducts($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "p-toast", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "p-confirmDialog", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onHide", function ReturnHomeComponent_Template_p_confirmDialog_onHide_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.focusInput());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, ReturnHomeComponent_ng_template_23_Template, 3, 1, "ng-template", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "p-confirmDialog", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onHide", function ReturnHomeComponent_Template_p_confirmDialog_onHide_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.focusInput());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("scrollHeight", ctx.vh);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx.order_items)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("visible", ctx.dialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](9, _c2));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, primeng_divider__WEBPACK_IMPORTED_MODULE_17__.Divider, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_18__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_18__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_18__.CellEditor, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.Toast, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_22__.InputNumber, primeng_card__WEBPACK_IMPORTED_MODULE_23__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__.Toolbar, primeng_ripple__WEBPACK_IMPORTED_MODULE_25__.Ripple, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__.ConfirmDialog, primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__.Dropdown, primeng_autofocus__WEBPACK_IMPORTED_MODULE_28__.AutoFocus, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_29__.AutoComplete, primeng_calendar__WEBPACK_IMPORTED_MODULE_30__.Calendar, primeng_checkbox__WEBPACK_IMPORTED_MODULE_31__.Checkbox, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ProductsDialogComponent, _directives_number_directive__WEBPACK_IMPORTED_MODULE_7__.IntegerOnlyDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CurrencyPipe, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_8__.LiraPipe, _core_pipes_exchanged_lira_pipe__WEBPACK_IMPORTED_MODULE_9__.ExchangedLiraPipe, _core_pipes_dollar_pipe__WEBPACK_IMPORTED_MODULE_10__.DollarPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 71729:
/*!*****************************************!*\
  !*** ./src/app/return/return.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnModule: () => (/* binding */ ReturnModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _return_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./return.routes */ 76779);
/* harmony import */ var _return_home_return_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./return-home/return-home.component */ 7191);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/pipes/lira.pipe */ 62298);
/* harmony import */ var _core_pipes_exchanged_lira_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/pipes/exchanged-lira.pipe */ 65188);
/* harmony import */ var _core_pipes_dollar_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/pipes/dollar.pipe */ 53498);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/styleclass */ 50053);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/autofocus */ 17159);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/scrollpanel */ 66831);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/scroller */ 22222);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/virtualscroller */ 70339);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/blockui */ 42897);
/* harmony import */ var _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/products-dialog/products-dialog.component */ 44089);
/* harmony import */ var _directives_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_directives/number.directive */ 48302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);






































class ReturnModule {
  static {
    this.ɵfac = function ReturnModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReturnModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: ReturnModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _return_routes__WEBPACK_IMPORTED_MODULE_0__.ReturnRoutesModule, primeng_divider__WEBPACK_IMPORTED_MODULE_10__.DividerModule, primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.ToastModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_13__.FieldsetModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputTextModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumberModule, primeng_panel__WEBPACK_IMPORTED_MODULE_18__.PanelModule, primeng_card__WEBPACK_IMPORTED_MODULE_19__.CardModule, primeng_messages__WEBPACK_IMPORTED_MODULE_20__.MessagesModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_21__.ToolbarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_22__.RippleModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__.ConfirmDialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.DropdownModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_25__.StyleClassModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_26__.AutoFocusModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_27__.ScrollPanelModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__.AutoCompleteModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_29__.SelectButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_30__.RadioButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_31__.CalendarModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__.CheckboxModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_33__.ScrollerModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_34__.VirtualScrollerModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_35__.TabViewModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_36__.BlockUIModule, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ProductsDialogComponent]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ReturnModule, {
    declarations: [_return_home_return_home_component__WEBPACK_IMPORTED_MODULE_1__.ReturnHomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _return_routes__WEBPACK_IMPORTED_MODULE_0__.ReturnRoutesModule, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_2__.LiraPipe, _core_pipes_exchanged_lira_pipe__WEBPACK_IMPORTED_MODULE_3__.ExchangedLiraPipe, _core_pipes_dollar_pipe__WEBPACK_IMPORTED_MODULE_4__.DollarPipe, primeng_divider__WEBPACK_IMPORTED_MODULE_10__.DividerModule, primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.ToastModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_13__.FieldsetModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputTextModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumberModule, primeng_panel__WEBPACK_IMPORTED_MODULE_18__.PanelModule, primeng_card__WEBPACK_IMPORTED_MODULE_19__.CardModule, primeng_messages__WEBPACK_IMPORTED_MODULE_20__.MessagesModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_21__.ToolbarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_22__.RippleModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__.ConfirmDialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.DropdownModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_25__.StyleClassModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_26__.AutoFocusModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_27__.ScrollPanelModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__.AutoCompleteModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_29__.SelectButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_30__.RadioButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_31__.CalendarModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__.CheckboxModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_33__.ScrollerModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_34__.VirtualScrollerModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_35__.TabViewModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_36__.BlockUIModule, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ProductsDialogComponent, _directives_number_directive__WEBPACK_IMPORTED_MODULE_6__.IntegerOnlyDirective]
  });
})();

/***/ }),

/***/ 76779:
/*!*****************************************!*\
  !*** ./src/app/return/return.routes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnRoutesModule: () => (/* binding */ ReturnRoutesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _return_home_return_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./return-home/return-home.component */ 7191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _return_home_return_home_component__WEBPACK_IMPORTED_MODULE_0__.ReturnHomeComponent
}];
class ReturnRoutesModule {
  static {
    this.ɵfac = function ReturnRoutesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReturnRoutesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ReturnRoutesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReturnRoutesModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 45474:
/*!******************************************!*\
  !*** ./src/app/return/return.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnService: () => (/* binding */ ReturnService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/api.service */ 22761);
/* harmony import */ var _history_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../history/history.service */ 36032);
/* harmony import */ var _stock_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stock/stock.service */ 35427);








class ReturnService {
  constructor(http, notificationService, api, historyService, stockService) {
    this.http = http;
    this.notificationService = notificationService;
    this.api = api;
    this.historyService = historyService;
    this.stockService = stockService;
    this.host = this.api.host;
    // public filteredItems = new BehaviorSubject([]);
    this.invoice_items = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.invoiceTotal = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.barcodeResponse = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this.factor = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(1);
    this.stateOptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([{
      label: '$$',
      value: 'dollar'
    }, {
      label: 'L.L',
      value: 'lira'
    }]);
    this.stateValue = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('dollar');
    this.customer_id = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.active_invoice = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(-1);
    this.pending_invoices$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.reset_form_validations$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.include_vat = false;
    this.payment_amount = null;
    this.payment_amount_lbp = null;
    this.vat_rate = 0.11;
    this.discount_value = null;
    this.discount_percent = null;
    this.discount_percent_on_total = null;
    this.invoice_date = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
    this.form_error = false;
    this.submitted = false;
    this.is_lira_payment = false;
    this.invoiceToPrint = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.link_id = null;
    // sell dialog
    this.sellDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.invoice_number = null;
    this.invoice_number_error = false;
    this.current_invoice_number = null;
    // customers latest purchase
    this.selectedCustomerLatestItems = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
  }
  //init invocie values
  init_values() {
    this.submitted = false;
    this.include_vat = false;
    this.payment_amount = null;
    this.payment_amount_lbp = null;
    this.discount_value = null;
    this.discount_percent = null;
    this.discount_percent_on_total = null;
    this.customer_id.next(null);
    this.invoice_date = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
    this.is_lira_payment = false;
    this.link_id = null;
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
  cleanInvoice() {
    this.init_values();
    this.invoice_items.next([]);
    this.calculateTotal();
    this.reset_form_validations$.next(true);
  }
  getCustomerLatestPurchase(customer_id) {
    this.http.get(`${this.host}/customers/${customer_id}/latest_purchased_items`).subscribe({
      next: res => {
        this.selectedCustomerLatestItems.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'customers');
      }
    });
  }
  checkInvoiceNumber(invoice_number) {
    if (this.current_invoice_number === invoice_number) {
      this.invoice_number_error = false;
      this.invoice_number = invoice_number;
      return;
    }
    this.http.get(`${this.host}/invoices/check/${invoice_number}`).subscribe({
      next: res => {
        console.log(res);
        if (res.exists) {
          console.log('Invoice number already exists');
          this.notificationService.showError('Invoice number already exists', 'home');
          this.invoice_number_error = true;
        } else {
          this.invoice_number = invoice_number;
          this.invoice_number_error = false;
        }
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  checkout(invoice, invoiceMap, payment, customer, print_flag = false) {
    this.http.post(`${this.host}/return`, [invoice, invoiceMap, payment]).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'home');
        if (print_flag) {
          this.invoiceToPrint.next(res.data.result);
        }
        this.stockService.getItems();
        this.reset_form_validations$.next(true);
        // this.auxiliaryService.getCustomers();
        // this.accountingService.getJournalItems();
        this.cleanInvoice();
        this.historyService.fetchSalesHistory(null);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  static {
    this.ɵfac = function ReturnService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReturnService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_history_history_service__WEBPACK_IMPORTED_MODULE_3__.HistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_stock_stock_service__WEBPACK_IMPORTED_MODULE_4__.StockService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ReturnService,
      factory: ReturnService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_return_return_module_ts.js.map