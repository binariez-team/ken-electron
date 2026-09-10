"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["src_app_supply_supply_module_ts"],{

/***/ 15830:
/*!*************************************************************!*\
  !*** ./src/app/supply/supply-form/supply-form.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplyFormComponent: () => (/* binding */ SupplyFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _supply_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../supply.service */ 18256);
/* harmony import */ var src_app_stock_stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/stock/stock.service */ 35427);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/local-storage.service */ 18838);
/* harmony import */ var src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/accounting/auxiliary.service */ 53591);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/products-dialog/products-dialog.component */ 44089);
/* harmony import */ var _directives_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_directives/number.directive */ 48302);
/* harmony import */ var _core_pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/weight.pipe */ 67764);



























const _c0 = ["barcodeInput"];
const _c1 = ["invoiceTable"];
const _c2 = a0 => ({
  "ng-invalid ng-dirty": a0
});
const _c3 = a0 => ({
  "text-red-500": a0
});
function SupplyFormComponent_ng_template_2_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Supplier is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SupplyFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Invoice Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p-calendar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_2_Template_p_calendar_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r2.purchaseForm.order_datetime, $event) || (ctx_r2.purchaseForm.order_datetime = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 20)(8, "div", 17)(9, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p-dropdown", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_2_Template_p_dropdown_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r2.purchaseForm.partner_id_fk, $event) || (ctx_r2.purchaseForm.partner_id_fk = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChange", function SupplyFormComponent_ng_template_2_Template_p_dropdown_onChange_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.validate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SupplyFormComponent_ng_template_2_small_12_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 15)(14, "div", 16)(15, "div", 17)(16, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Reference No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_2_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r2.purchaseForm.reference_number, $event) || (ctx_r2.purchaseForm.reference_number = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 16)(20, "div", 17)(21, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_2_Template_textarea_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r2.purchaseForm.purchase_notes, $event) || (ctx_r2.purchaseForm.purchase_notes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Costs by Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "(Value)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p-inputNumber", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_2_Template_p_inputNumber_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r2.purchaseForm.costs_by_value, $event) || (ctx_r2.purchaseForm.costs_by_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SupplyFormComponent_ng_template_2_Template_p_inputNumber_ngModelChange_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.calculateTotal());
    })("onFocus", function SupplyFormComponent_ng_template_2_Template_p_inputNumber_onFocus_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.select($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 20)(33, "div", 17)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Costs by Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "(Weight)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "p-inputNumber", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_2_Template_p_inputNumber_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r2.purchaseForm.costs_by_weight, $event) || (ctx_r2.purchaseForm.costs_by_weight = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SupplyFormComponent_ng_template_2_Template_p_inputNumber_ngModelChange_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.calculateTotal());
    })("onFocus", function SupplyFormComponent_ng_template_2_Template_p_inputNumber_onFocus_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.select($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 15)(40, "div", 31)(41, "div", 32)(42, "div")(43, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Weight Costs");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](52, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Total fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Per 1 KG");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 15)(62, "div", 31)(63, "div", 32)(64, "div")(65, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](71, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](74, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "Total fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](77, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](80, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "Cost Ratio");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.purchaseForm.order_datetime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonlyInput", true)("iconDisplay", "input")("showIcon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.purchaseForm.partner_id_fk);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx_r2.suppliers)("filter", true)("showClear", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](32, _c2, ctx_r2.supplierInvalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.supplierInvalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.purchaseForm.reference_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.purchaseForm.purchase_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.purchaseForm.costs_by_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.purchaseForm.costs_by_weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Total Weight: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 20, ctx_r2.invoiceTotal.total_invoice_weight), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](52, 22, ctx_r2.purchaseForm.costs_by_weight), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 24, ctx_r2.invoiceTotal.price_per_weight || 0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Sub total: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](71, 26, ctx_r2.invoiceTotal.subtotal), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](74, 28, ctx_r2.purchaseForm.costs_by_value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](80, 30, ctx_r2.invoiceTotal.cost_ratio || 0), " ");
  }
}
function SupplyFormComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Weight/CT (KG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "CTs");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Total Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Cost/weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Cost/value");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Actual cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Del?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SupplyFormComponent_ng_template_6_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_6_ng_template_9_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](record_r6.original_price, $event) || (record_r6.original_price = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SupplyFormComponent_ng_template_6_ng_template_9_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.select($event.target));
    })("ngModelChange", function SupplyFormComponent_ng_template_6_ng_template_9_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.calculateTotal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", record_r6.original_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("required", true);
  }
}
function SupplyFormComponent_ng_template_6_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "currency");
  }
  if (rf & 2) {
    const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, record_r6.original_price), " ");
  }
}
function SupplyFormComponent_ng_template_6_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_6_ng_template_13_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](record_r6.weight_per_box, $event) || (record_r6.weight_per_box = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SupplyFormComponent_ng_template_6_ng_template_13_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.select($event.target));
    })("ngModelChange", function SupplyFormComponent_ng_template_6_ng_template_13_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.calculateTotal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", record_r6.weight_per_box);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("required", true);
  }
}
function SupplyFormComponent_ng_template_6_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", record_r6.weight_per_box, " kg ");
  }
}
function SupplyFormComponent_ng_template_6_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_6_ng_template_17_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](record_r6.quantity_in_units, $event) || (record_r6.quantity_in_units = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SupplyFormComponent_ng_template_6_ng_template_17_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.select($event.target));
    })("ngModelChange", function SupplyFormComponent_ng_template_6_ng_template_17_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.calculateTotal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appIntegerOnly", true)("min", record_r6.quantity == 0 ? 1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", record_r6.quantity_in_units);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("required", true);
  }
}
function SupplyFormComponent_ng_template_6_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", record_r6.quantity_in_units, " ");
  }
}
function SupplyFormComponent_ng_template_6_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_6_ng_template_21_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](record_r6.quantity, $event) || (record_r6.quantity = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SupplyFormComponent_ng_template_6_ng_template_21_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.select($event.target));
    })("ngModelChange", function SupplyFormComponent_ng_template_6_ng_template_21_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.calculateTotal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appIntegerOnly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", record_r6.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("required", true);
  }
}
function SupplyFormComponent_ng_template_6_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", record_r6.quantity, " ");
  }
}
function SupplyFormComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 43)(8, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SupplyFormComponent_ng_template_6_ng_template_9_Template, 1, 2, "ng-template", 44)(10, SupplyFormComponent_ng_template_6_ng_template_10_Template, 2, 3, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 46)(12, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, SupplyFormComponent_ng_template_6_ng_template_13_Template, 1, 2, "ng-template", 44)(14, SupplyFormComponent_ng_template_6_ng_template_14_Template, 1, 1, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 47)(16, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, SupplyFormComponent_ng_template_6_ng_template_17_Template, 1, 4, "ng-template", 44)(18, SupplyFormComponent_ng_template_6_ng_template_18_Template, 1, 1, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 48)(20, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SupplyFormComponent_ng_template_6_ng_template_21_Template, 1, 3, "ng-template", 44)(22, SupplyFormComponent_ng_template_6_ng_template_22_Template, 1, 1, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SupplyFormComponent_ng_template_6_Template_td_click_40_listener() {
      const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.deleteRow(record_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r6 = ctx.$implicit;
    const rowIndex_r10 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rowIndex_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](record_r6.sku || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](record_r6.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pEditableColumn", record_r6.original_price)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](24, _c3, record_r6.original_price == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pEditableColumn", record_r6.weight_per_box);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pEditableColumn", record_r6.quantity_in_units);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pEditableColumn", record_r6.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", record_r6.total_qty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 14, record_r6.subtotal), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 16, record_r6.cost_per_weight), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 18, record_r6.cost_per_value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 20, record_r6.calculated_price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 22, record_r6.grand_total), " ");
  }
}
function SupplyFormComponent_ng_template_7_h4_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Total Qty: ", ctx_r2.invoiceTotal.total_invoice_qty, " ");
  }
}
function SupplyFormComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SupplyFormComponent_ng_template_7_h4_0_Template, 2, 1, "h4", 55);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.invoiceTotal.total_invoice_qty);
  }
}
function SupplyFormComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 57)(1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No data yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SupplyFormComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-autoComplete", 59, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SupplyFormComponent_ng_template_10_Template_p_autoComplete_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r2.barcode, $event) || (ctx_r2.barcode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("completeMethod", function SupplyFormComponent_ng_template_10_Template_p_autoComplete_completeMethod_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.searchItem($event));
    })("onKeyUp", function SupplyFormComponent_ng_template_10_Template_p_autoComplete_onKeyUp_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.submitInvoiceInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SupplyFormComponent_ng_template_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.openProductsDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("suggestions", ctx_r2.searchedItems)("delay", 150)("autofocus", true);
  }
}
function SupplyFormComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SupplyFormComponent_ng_template_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.checkout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r2.invoice.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r2.invoice.length < 1);
  }
}
class SupplyFormComponent {
  constructor(supplyService, stockService, notificationService, confirmationService, localStorageService, auxiliaryService) {
    this.supplyService = supplyService;
    this.stockService = stockService;
    this.notificationService = notificationService;
    this.confirmationService = confirmationService;
    this.localStorageService = localStorageService;
    this.auxiliaryService = auxiliaryService;
    // get view height for scrollable invoice table
    this.vh = this.localStorageService.getSupplyPageViewHeight();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.supplierInvalid = false;
    this.submitted = false;
    // products dialog visible
    this.dialogVisible = false;
  }
  // on init hook
  ngOnInit() {
    this.subscriptions.add(this.stockService.items.subscribe(res => {
      this.items = res;
    }));
    this.subscriptions.add(this.stockService.exchangeRate.subscribe(res => {
      this.exchangeRate = res;
    }));
    this.subscriptions.add(this.supplyService.purchaseForm.subscribe(res => {
      this.purchaseForm = res;
    }));
    this.subscriptions.add(this.supplyService.invoice.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(re => {
      this.supplyService.calculateTotal();
    })).subscribe(res => {
      this.invoice = res;
    }));
    this.subscriptions.add(this.supplyService.invoiceTotal.subscribe(res => {
      this.invoiceTotal = res;
    }));
    this.subscriptions.add(this.supplyService.barcodeResponse.subscribe(res => {
      this.barcodeResponse = res;
      if (res) {
        this.addToInvoice();
        this.supplyService.barcodeResponse.next(0);
      }
    }));
    this.subscriptions.add(this.auxiliaryService.suppliers.subscribe(res => {
      this.suppliers = res;
    }));
  }
  // on destroy hook
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  // submit invoice input
  submitInvoiceInput(event) {
    if (event.key == 'Enter') {
      if (this.barcode) {
        if (typeof this.barcode == 'string') {
          this.submitBarcode(this.barcode);
        } else {
          this.supplyService.barcodeResponse.next(this.barcode);
        }
        this.barcode = null;
      }
    }
  }
  // search input for text searching items
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
      let actualBarcode = parseInt(barcode.substring(index + 1, barcode.length));
      if (index != -1 && index != 0) {
        this.supplyService.submitBarcode(actualBarcode);
      } else {
        this.supplyService.submitBarcode(barcode);
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
      this.supplyService.barcodeResponse.next(element);
    });
  }
  // add barcode response to invoice
  addToInvoice() {
    let item = this.barcodeResponse;
    let itemToAdd = {
      product_id: item.product_id,
      sku: item.sku,
      product_name: item.product_name,
      quantity_per_unit: item.quantity_per_unit,
      quantity_in_units: 1,
      quantity: 0,
      total_qty: 0,
      weight_per_box: 0,
      total_weight: 0,
      original_price: 0,
      cost_per_weight: 0,
      cost_per_value: 0,
      total_added_costs: 0,
      calculated_price: 0,
      subtotal: 0,
      grand_total: 0
    };
    let found = false;
    this.invoice.forEach((element, index) => {
      if (element.product_id_fk == itemToAdd.product_id && element.product_id_fk != 0) {
        this.invoice[index].quantity_in_units += 1;
        found = true;
      }
    });
    if (!found) {
      this.invoice.push(itemToAdd);
      if (this.invoiceTable) {
        setTimeout(() => {
          this.invoiceTable.scrollTo({
            top: this.invoiceTable.wrapperViewChild.nativeElement.scrollHeight
          });
        }, 10);
      }
    }
    this.supplyService.invoice.next(this.invoice);
  }
  // subtract qty
  subtractQty(item) {
    let index = this.invoice.findIndex(x => x.product_id_fk == item.product_id_fk);
    if (this.invoice[index]['quantity_in_units'] == 1) {
      this.invoice.splice(index, 1);
    } else {
      this.invoice[index]['quantity_in_units'] -= 1;
    }
    this.supplyService.invoice.next(this.invoice);
  }
  deleteRow(row) {
    let index = this.invoice.findIndex(x => x.product_id_fk == row.product_id_fk);
    this.invoice.splice(index, 1);
    this.supplyService.invoice.next(this.invoice);
  }
  // trigger calculate total
  calculateTotal() {
    this.supplyService.purchaseForm.next(this.purchaseForm);
    this.supplyService.calculateTotal();
  }
  // select input on focus
  select(event) {
    event.select();
  }
  // submit checkout
  checkout() {
    if (this.purchaseForm.partner_id_fk) {
      this.purchaseForm.subtotal = this.invoiceTotal.subtotal;
      this.purchaseForm.total_weight = this.invoiceTotal.total_weight;
      this.purchaseForm.exchange_rate = this.exchangeRate.rate_value;
      let count = 0;
      if (this.purchaseForm.subtotal == 0) {
        console.log(this.purchaseForm.subtotal);
        count++;
        this.notificationService.showError(`Invoice total cannot be 0.00$`, 'home');
      }
      // validated invoice and form
      if (count == 0) {
        this.confirmationService.confirm({
          key: 'home',
          message: `Are you sure that you want to continue"?`,
          header: 'Warning',
          icon: 'pi pi-exclamation-triangle',
          acceptButtonStyleClass: 'p-button-danger',
          rejectButtonStyleClass: 'p-button-secondary',
          defaultFocus: 'reject',
          accept: () => {
            this.supplyService.checkout(this.purchaseForm, this.invoice);
          }
        });
      }
    } else {
      this.supplierInvalid = true;
      this.notificationService.showError('Please choose a supplier!', 'home');
    }
  }
  validate() {
    this.supplierInvalid = false;
  }
  static {
    this.ɵfac = function SupplyFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SupplyFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_supply_service__WEBPACK_IMPORTED_MODULE_0__.SupplyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_stock_stock_service__WEBPACK_IMPORTED_MODULE_1__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_4__.AuxiliaryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SupplyFormComponent,
      selectors: [["supply-form"]],
      viewQuery: function SupplyFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.barcodeInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.invoiceTable = _t.first);
        }
      },
      decls: 13,
      vars: 5,
      consts: [["invoiceTable", ""], ["barcodeInput", ""], ["styleClass", "card"], ["legend", "Invoice Info", 3, "toggleable"], ["pTemplate", "content"], ["dataKey", "product_id_fk", "styleClass", "p-datatable-sm p-datatable-gridlines mt-3", 3, "value", "scrollable", "scrollHeight"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], ["pTemplate", "emptymessage"], ["styleClass", "mt-2 p-2"], ["pTemplate", "left"], ["pTemplate", "right"], [3, "onHide", "onSubmit", "visible"], [1, "grid"], [1, "col-2"], [1, "field"], [1, "flex", "flex-column", "gap-2"], ["for", "order_datetime"], ["inputId", "order_datetime", "name", "order_datetime", "styleClass", "p-inputtext-sm w-full", "dateFormat", "yy-mm-dd", "size", "small", 3, "ngModelChange", "ngModel", "readonlyInput", "iconDisplay", "showIcon"], [1, "field", "mb-0"], ["for", "supplier"], ["styleClass", "p-inputtext-sm", "id", "supplier", "appendTo", "body", "optionLabel", "name", "optionValue", "account_id", "placeholder", "Select Supplier", "filterBy", "name", 1, "ng-invalid", "ng-dirty", 3, "ngModelChange", "onChange", "ngModel", "options", "filter", "showClear", "ngClass"], ["class", "p-error", 4, "ngIf"], ["for", "reference_number"], ["type", "text", "pInputText", "", 1, "p-inputtext-sm", 3, "ngModelChange", "ngModel"], ["for", "purchase_notes"], ["rows", "1", "cols", "30", "pInputTextarea", "", 1, "p-inputtext-sm", 3, "ngModelChange", "ngModel"], [1, "text-green-500"], ["styleClass", "p-inputtext-sm w-full", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngModelChange", "onFocus", "ngModel"], [1, "text-primary"], [1, "surface-card", "shadow-2", "p-3", "border-round", "mt-2"], [1, "flex", "justify-content-between", "mb-3"], [1, "block", "text-500", "font-medium", "mb-3"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "fas", "fa-scale-balanced", "text-blue-500", "text-xl"], [1, "text-900", "font-medium", "text-lg"], [1, "text-primary", "font-medium"], [1, "text-500"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "fas", "fa-sack-dollar", "text-green-500", "text-xl"], [1, "text-green-500", "font-medium"], [1, "p-error"], ["pEditableColumnField", "original_price", 3, "pEditableColumn", "ngClass"], ["pTemplate", "input"], ["pTemplate", "output"], ["pEditableColumnField", "weight_per_box", 3, "pEditableColumn"], ["pEditableColumnField", "quantity_in_units", 3, "pEditableColumn"], ["pEditableColumnField", "quantity", 3, "pEditableColumn"], [1, "font-bold"], [1, "danger-hover", 3, "click"], [1, "pi", "pi-trash"], ["type", "number", "pInputText", "", "min", "0", "step", "0.01", 1, "p-inputtext-sm", "smallInput", 3, "ngModelChange", "focus", "ngModel", "required"], ["type", "number", "pInputText", "", 1, "p-inputtext-sm", "smallInput", 3, "ngModelChange", "focus", "appIntegerOnly", "min", "ngModel", "required"], ["type", "number", "pInputText", "", "min", "0", 1, "p-inputtext-sm", "smallInput", 3, "ngModelChange", "focus", "appIntegerOnly", "ngModel", "required"], ["class", "text-center m-0", 4, "ngIf"], [1, "text-center", "m-0"], [1, "surface-300"], ["colspan", "14"], ["name", "barcodeInput", "field", "product_name", "placeholder", "scan or search ...", "spellcheck", "false", 1, "p-inputtext-sm", 3, "ngModelChange", "completeMethod", "onKeyUp", "ngModel", "suggestions", "delay", "autofocus"], ["pButton", "", "pRipple", "", "label", "Multi Select", "severity", "warning", "icon", "pi pi-list", 1, "p-button-sm", "ml-2", 3, "click"], ["pButton", "", "pRipple", "", "label", "Clear", "icon", "pi pi-times", "severity", "secondary", 1, "p-button-sm", "mr-2", 3, "disabled"], ["pButton", "", "pRipple", "", "label", "Submit", "icon", "pi pi-check", 1, "p-button-success", "p-button-sm", 3, "click", "disabled"]],
      template: function SupplyFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-card", 2)(1, "p-fieldset", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SupplyFormComponent_ng_template_2_Template, 83, 34, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p-table", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SupplyFormComponent_ng_template_5_Template, 29, 0, "ng-template", 6)(6, SupplyFormComponent_ng_template_6_Template, 42, 26, "ng-template", 7)(7, SupplyFormComponent_ng_template_7_Template, 1, 1, "ng-template", 8)(8, SupplyFormComponent_ng_template_8_Template, 3, 0, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p-toolbar", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SupplyFormComponent_ng_template_10_Template, 3, 4, "ng-template", 11)(11, SupplyFormComponent_ng_template_11_Template, 2, 2, "ng-template", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "products-dialog", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onHide", function SupplyFormComponent_Template_products_dialog_onHide_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.closeProductsDialog());
          })("onSubmit", function SupplyFormComponent_Template_products_dialog_onSubmit_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.assignSelectedProducts($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("toggleable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("scrollHeight", ctx.vh);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.invoice)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", ctx.dialogVisible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_14__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_14__.CellEditor, primeng_fieldset__WEBPACK_IMPORTED_MODULE_15__.Fieldset, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_18__.InputNumber, primeng_card__WEBPACK_IMPORTED_MODULE_19__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__.Toolbar, primeng_ripple__WEBPACK_IMPORTED_MODULE_21__.Ripple, primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.Dropdown, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_23__.AutoComplete, primeng_calendar__WEBPACK_IMPORTED_MODULE_24__.Calendar, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__.InputTextarea, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ProductsDialogComponent, _directives_number_directive__WEBPACK_IMPORTED_MODULE_6__.IntegerOnlyDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe, _core_pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_7__.WeightPipe],
      styles: ["[_nghost-%COMP%]  .p-fieldset .p-fieldset-content {\n  padding: 0.5rem;\n}\n\n[_nghost-%COMP%]  .p-button.p-button-icon-only.p-button-rounded {\n  height: 2rem !important;\n  width: 0.8rem !important;\n}\n\ninput[_ngcontent-%COMP%]::-moz-number-spinners {\n  appearance: none;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, \ninput[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.smallInput[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VwcGx5L3N1cHBseS1mb3JtL3N1cHBseS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUdBO0VBRUksdUJBQUE7RUFDQSx3QkFBQTtBQURKOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFNRTs7RUFFQSx3QkFBQTtFQUNBLFNBQUE7QUFIRjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSEoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdDo6bmctZGVlcCAucC1maWVsZHNldCAucC1maWVsZHNldC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cblxuOmhvc3Q6Om5nLWRlZXAgLnAtYnV0dG9uLnAtYnV0dG9uLWljb24tb25seS5wLWJ1dHRvbi1yb3VuZGVkIHtcbiAgICAvLyBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDJyZW0gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMC44cmVtICFpbXBvcnRhbnQ7XG59XG5cblxuaW5wdXQ6Oi1tb3otbnVtYmVyLXNwaW5uZXJzIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICB9XG5cblxuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi5zbWFsbElucHV0IHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1846:
/*!*************************************************************!*\
  !*** ./src/app/supply/supply-home/supply-home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplyHomeComponent: () => (/* binding */ SupplyHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _supply_form_supply_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../supply-form/supply-form.component */ 15830);


class SupplyHomeComponent {
  constructor() {
    this.suppliers = [];
  }
  static {
    this.ɵfac = function SupplyHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SupplyHomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SupplyHomeComponent,
      selectors: [["app-supply-home"]],
      decls: 3,
      vars: 0,
      consts: [[1, "grid", "m-1"], [1, "col-12"]],
      template: function SupplyHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "supply-form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_supply_form_supply_form_component__WEBPACK_IMPORTED_MODULE_0__.SupplyFormComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 69582:
/*!*************************************************!*\
  !*** ./src/app/supply/supply-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplyRoutingModule: () => (/* binding */ SupplyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _supply_home_supply_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supply-home/supply-home.component */ 1846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _supply_home_supply_home_component__WEBPACK_IMPORTED_MODULE_0__.SupplyHomeComponent
}];
class SupplyRoutingModule {
  static {
    this.ɵfac = function SupplyRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SupplyRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SupplyRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupplyRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 50295:
/*!*****************************************!*\
  !*** ./src/app/supply/supply.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplyModule: () => (/* binding */ SupplyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _supply_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supply-routing.module */ 69582);
/* harmony import */ var _supply_home_supply_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supply-home/supply-home.component */ 1846);
/* harmony import */ var _supply_form_supply_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supply-form/supply-form.component */ 15830);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/pipes/lira.pipe */ 62298);
/* harmony import */ var _core_pipes_exchanged_lira_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/pipes/exchanged-lira.pipe */ 65188);
/* harmony import */ var _core_pipes_dollar_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/pipes/dollar.pipe */ 53498);
/* harmony import */ var _core_pipes_category_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/pipes/category.pipe */ 38652);
/* harmony import */ var _core_pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/pipes/weight.pipe */ 67764);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/styleclass */ 50053);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/autofocus */ 17159);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/scrollpanel */ 66831);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/products-dialog/products-dialog.component */ 44089);
/* harmony import */ var _directives_number_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_directives/number.directive */ 48302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);





































class SupplyModule {
  static {
    this.ɵfac = function SupplyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SupplyModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: SupplyModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _supply_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupplyRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, primeng_divider__WEBPACK_IMPORTED_MODULE_13__.DividerModule, primeng_table__WEBPACK_IMPORTED_MODULE_14__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__.FieldsetModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__.InputTextModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_20__.InputNumberModule, primeng_panel__WEBPACK_IMPORTED_MODULE_21__.PanelModule, primeng_card__WEBPACK_IMPORTED_MODULE_22__.CardModule, primeng_messages__WEBPACK_IMPORTED_MODULE_23__.MessagesModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__.ToolbarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_25__.RippleModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__.ConfirmDialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__.DropdownModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_28__.StyleClassModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_29__.AutoFocusModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_30__.ScrollPanelModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_31__.AutoCompleteModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_32__.SelectButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_33__.RadioButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_34__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__.InputTextareaModule, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_8__.ProductsDialogComponent]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SupplyModule, {
    declarations: [_supply_home_supply_home_component__WEBPACK_IMPORTED_MODULE_1__.SupplyHomeComponent, _supply_form_supply_form_component__WEBPACK_IMPORTED_MODULE_2__.SupplyFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _supply_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupplyRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_3__.LiraPipe, _core_pipes_exchanged_lira_pipe__WEBPACK_IMPORTED_MODULE_4__.ExchangedLiraPipe, _core_pipes_dollar_pipe__WEBPACK_IMPORTED_MODULE_5__.DollarPipe, _core_pipes_category_pipe__WEBPACK_IMPORTED_MODULE_6__.CategoryPipe, _core_pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_7__.WeightPipe, primeng_divider__WEBPACK_IMPORTED_MODULE_13__.DividerModule, primeng_table__WEBPACK_IMPORTED_MODULE_14__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__.FieldsetModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__.InputTextModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_20__.InputNumberModule, primeng_panel__WEBPACK_IMPORTED_MODULE_21__.PanelModule, primeng_card__WEBPACK_IMPORTED_MODULE_22__.CardModule, primeng_messages__WEBPACK_IMPORTED_MODULE_23__.MessagesModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__.ToolbarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_25__.RippleModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__.ConfirmDialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__.DropdownModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_28__.StyleClassModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_29__.AutoFocusModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_30__.ScrollPanelModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_31__.AutoCompleteModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_32__.SelectButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_33__.RadioButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_34__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__.InputTextareaModule, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_8__.ProductsDialogComponent, _directives_number_directive__WEBPACK_IMPORTED_MODULE_9__.IntegerOnlyDirective]
  });
})();

/***/ }),

/***/ 18256:
/*!******************************************!*\
  !*** ./src/app/supply/supply.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplyService: () => (/* binding */ SupplyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/api.service */ 22761);
/* harmony import */ var _services_decimal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/decimal.service */ 10146);







class SupplyService {
  constructor(http, notificationService, api, decimalService) {
    this.http = http;
    this.notificationService = notificationService;
    this.api = api;
    this.decimalService = decimalService;
    this.host = this.api.host;
    this.invoice = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.invoiceTotal = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
    this.barcodeResponse = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this.purchaseForm = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(this.resetPurchaseForm());
  }
  resetPurchaseForm() {
    return {
      partner_id_fk: null,
      journal_voucher_id: null,
      order_datetime: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD'),
      subtotal: 0,
      total_weight: 0,
      costs_by_weight: 0,
      costs_by_value: 0,
      have_vat: false,
      vat_amount: 0,
      reference_number: null,
      purchase_notes: null
    };
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
  // calculator
  calculateTotal() {
    let invoice = this.invoice.value;
    let subtotal = 0,
      total_invoice_weight = 0,
      cost_ratio = 0,
      price_per_weight = 0,
      total_invoice_qty = 0;
    // if (invoice.length === 0) return;
    invoice.forEach(element => {
      // total quantity of element
      element.total_qty = element.quantity_in_units * element.quantity_per_unit + element.quantity;
      // invoiceTotal
      // total quantity of invoice
      total_invoice_qty = this.decimalService.add(total_invoice_qty, element.total_qty);
      // subtotal of element
      element.subtotal = this.decimalService.multiply(element.total_qty, element.original_price);
      // invoiceTotal
      // subtotal of invoice
      subtotal = this.decimalService.add(subtotal, element.subtotal);
      // total element weight
      element.total_weight = this.decimalService.multiply(element.weight_per_box, element.quantity_in_units);
      // invoiceTotal
      // total invoice weight
      total_invoice_weight = this.decimalService.add(total_invoice_weight, element.total_weight);
    });
    invoice.forEach(element => {
      // invoiceTotal
      // invoice price per 1 KG
      price_per_weight = total_invoice_weight > 0 ? this.decimalService.divide(this.purchaseForm.value.costs_by_weight, total_invoice_weight) : 0;
      // added cost per weight for element
      element.cost_per_weight = price_per_weight * element.quantity_in_units * element.weight_per_box / element.total_qty;
      // invoiceTotal
      // calculated cost ratio by value
      cost_ratio = subtotal > 0 ? this.decimalService.divide(this.purchaseForm.value.costs_by_value, subtotal) : 0;
      // added cost per value for element
      element.cost_per_value = this.decimalService.multiply(element.original_price, cost_ratio);
      // element total added costs
      element.total_added_costs = this.decimalService.add(element.cost_per_weight, element.cost_per_value);
      // element calculated price
      element.calculated_price = this.decimalService.add(element.total_added_costs, element.original_price);
      // element grand total
      element.grand_total = this.decimalService.multiply(element.calculated_price, element.total_qty);
    });
    this.invoiceTotal.next({
      subtotal: subtotal,
      total_invoice_weight: total_invoice_weight,
      price_per_weight: price_per_weight,
      cost_ratio: cost_ratio,
      total_invoice_qty: total_invoice_qty
    });
  }
  // submit checkout
  checkout(order, orderItems) {
    console.log(order);
    console.log(orderItems);
    this.http.post(`${this.host}/purchase/`, {
      purchase_order: order,
      purchase_order_items: orderItems
    }).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'home');
        this.invoice.next([]);
        this.purchaseForm.next(this.resetPurchaseForm());
        // this.suppliersService.getSuppliersDebts()
        // this.suppliersService.getSupplierHistory(this.suppliersService.selectedSupplier.value)
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  static {
    this.ɵfac = function SupplyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SupplyService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_decimal_service__WEBPACK_IMPORTED_MODULE_3__.DecimalService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: SupplyService,
      factory: SupplyService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_supply_supply_module_ts.js.map