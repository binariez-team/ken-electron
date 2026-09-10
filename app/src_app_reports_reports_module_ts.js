"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["src_app_reports_reports_module_ts"],{

/***/ 49800:
/*!********************************************************************************!*\
  !*** ./src/app/reports/auxiliary-statements/auxiliary-statements.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuxiliaryStatementsComponent: () => (/* binding */ AuxiliaryStatementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_print_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/print.service */ 5312);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/date.service */ 76723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pipes/lira.pipe */ 62298);


















function AuxiliaryStatementsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AuxiliaryStatementsComponent_ng_template_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 13)(3, "div", 14)(4, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p-calendar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13)(9, "div", 14)(10, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "p-calendar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 13)(15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "p-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Show zero accounts?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.auxiliaryStatementsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showIcon", true)("iconDisplay", "input")("readonlyInput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showIcon", true)("iconDisplay", "input")("readonlyInput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("binary", true);
  }
}
function AuxiliaryStatementsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Account #");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "End Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "End Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AuxiliaryStatementsComponent_ng_template_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, record_r3.end_debit), " ");
  }
}
function AuxiliaryStatementsComponent_ng_template_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, record_r3.end_debit_lbp), " ");
  }
}
function AuxiliaryStatementsComponent_ng_template_16_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, record_r3.end_credit), " ");
  }
}
function AuxiliaryStatementsComponent_ng_template_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, record_r3.end_credit_lbp), " ");
  }
}
function AuxiliaryStatementsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 23)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AuxiliaryStatementsComponent_ng_template_16_span_6_Template, 3, 3, "span", 24)(7, AuxiliaryStatementsComponent_ng_template_16_span_7_Template, 3, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AuxiliaryStatementsComponent_ng_template_16_span_9_Template, 3, 3, "span", 24)(10, AuxiliaryStatementsComponent_ng_template_16_span_10_Template, 3, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", record_r3.partner_id_fk, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", record_r3.partner_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
  }
}
class AuxiliaryStatementsComponent {
  constructor(reportsService, fb, dateService) {
    this.reportsService = reportsService;
    this.fb = fb;
    this.dateService = dateService;
    this.printService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_print_service__WEBPACK_IMPORTED_MODULE_0__.PrintService);
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.show_dollar = true;
    this.details = [];
    this.expandableRows = [];
    this.auxiliaryStatementsForm = this.fb.group({
      startDate: [this.dateService.getStartOfCurrentMonth(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      endDate: [this.dateService.getCurrentDate(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      showZero: [false],
      onlyAuxiliary: [true]
    });
  }
  ngOnInit() {
    this.subscriptions.add(this.reportsService.currencyOptions.subscribe(res => {
      this.currencyOptions = res;
    }));
    this.subscriptions.add(this.reportsService.currencyValue.subscribe(res => {
      this.currencyValue = res;
    }));
    this.subscriptions.add(this.reportsService.auxiliaryStatementsLoading.subscribe(res => {
      this.auxiliaryStatementsLoading = res;
    }));
    this.subscriptions.add(this.reportsService.AuxilaryDetails.subscribe(data => {
      this.auxiliaryDetails = data;
      data.forEach(item => {
        this.expandableRows[item.account_id_fk] = true;
      });
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  getAccountDetails(account) {
    return this.details.filter(item => {
      return item.account_id_fk === account.id;
    });
  }
  changeCurrency(event) {
    this.reportsService.currencyValue.next(event.value);
  }
  submitForm() {
    if (this.auxiliaryStatementsForm.valid) {
      this.reportsService.AuxilaryDetails.next([]);
      this.auxiliaryStatementsForm.patchValue({
        startDate: this.dateService.formatDate(this.auxiliaryStatementsForm.value.startDate),
        endDate: this.dateService.formatDate(this.auxiliaryStatementsForm.value.endDate)
      });
      // this.reportsService.getTrialBalance(this.auxiliaryStatementsForm.value);
      // if (this.auxiliaryStatementsForm.value.showAuxiliary) {
      this.reportsService.getAuxilaryDetails(this.auxiliaryStatementsForm.value);
      // }
    }
  }
  printAuxiliaryStatement() {
    let dataToPrint = [this.auxiliaryDetails, this.currencyValue, this.auxiliaryStatementsForm.value.startDate, this.auxiliaryStatementsForm.value.endDate];
    this.printService.printAuxiliaryStatement(dataToPrint);
  }
  static {
    this.ɵfac = function AuxiliaryStatementsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuxiliaryStatementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_1__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AuxiliaryStatementsComponent,
      selectors: [["auxiliary-balance"]],
      decls: 17,
      vars: 6,
      consts: [[1, "grid"], [1, "col-12"], ["pTemplate", "body"], ["styleClass", "p-2"], [1, "p-toolbar-group-start"], [1, "m-0"], [1, "p-toolbar-group-center"], ["severity", "contrast", "size", "small", "label", "Print", "icon", "pi pi-print", 3, "onClick"], [1, "p-toolbar-group-end"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "onChange", "options", "ngModel", "allowEmpty"], ["dataKey", "id", "styleClass", "p-datatable-sm", "scrollHeight", "400px", 3, "value", "scrollable", "loading"], ["pTemplate", "header"], [3, "ngSubmit", "formGroup"], [1, "col-3"], [1, "field", "grid"], [1, "col-fixed", 2, "width", "50px"], [1, "col"], ["styleClass", "p-inputtext-sm", "formControlName", "startDate", "dateFormat", "yy-mm-dd", 3, "showIcon", "iconDisplay", "readonlyInput"], ["styleClass", "p-inputtext-sm", "formControlName", "endDate", "dateFormat", "yy-mm-dd", 3, "showIcon", "iconDisplay", "readonlyInput"], [1, "field-checkbox"], ["formControlName", "showZero", "inputId", "zero", 3, "binary"], ["for", "zero"], ["pButton", "", "pRipple", "", "label", "Submit"], [1, "trial_expanded_row"], [4, "ngIf"]],
      template: function AuxiliaryStatementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AuxiliaryStatementsComponent_ng_template_3_Template, 21, 8, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1)(5, "p-card")(6, "p-toolbar", 3)(7, "div", 4)(8, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Auxiliary Statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "p-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function AuxiliaryStatementsComponent_Template_p_button_onClick_11_listener() {
            return ctx.printAuxiliaryStatement();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8)(13, "p-selectButton", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AuxiliaryStatementsComponent_Template_p_selectButton_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.currencyValue, $event) || (ctx.currencyValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function AuxiliaryStatementsComponent_Template_p_selectButton_onChange_13_listener($event) {
            return ctx.changeCurrency($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p-table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AuxiliaryStatementsComponent_ng_template_15_Template, 9, 0, "ng-template", 11)(16, AuxiliaryStatementsComponent_ng_template_16_Template, 11, 6, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.currencyOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.currencyValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowEmpty", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.auxiliaryDetails)("scrollable", true)("loading", ctx.auxiliaryStatementsLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_card__WEBPACK_IMPORTED_MODULE_13__.Card, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_14__.SelectButton, primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.Checkbox, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_3__.LiraPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39304:
/*!******************************************************************!*\
  !*** ./src/app/reports/balance-sheet/balance-sheet.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BalanceSheetComponent: () => (/* binding */ BalanceSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/date.service */ 76723);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);













const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.account_id;
const _forTrack2 = ($index, $item) => $item.account_number;
function BalanceSheetComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BalanceSheetComponent_ng_template_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "As of:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "p-calendar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 12)(9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Show zero balance accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.balanceSheetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showIcon", true)("iconDisplay", "input")("readonlyInput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx_r1.loading());
  }
}
function BalanceSheetComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bs_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" This statement does not balance. Assets differ from liabilities and equity by ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 1, bs_r3.totals.difference, "USD"), ". The underlying journal entries need to be checked. ");
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const account_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", account_r4.account_number, " ", account_r4.english_name, "");
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](4, BalanceSheetComponent_Conditional_13_Conditional_0_Conditional_6_For_5_Template, 2, 2, "span", 34, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.derivedAccounts().length, " account(s) have no account type set in the chart of accounts and were classified from their account class: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.derivedAccounts());
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_For_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 35)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](group_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, group_r5.subtotal, "USD"), " ");
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_For_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 31)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const line_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](line_r6.account_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", line_r6.english_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("negative", line_r6.amount < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 5, line_r6.amount, "USD"), " ");
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BalanceSheetComponent_Conditional_13_Conditional_0_For_16_Conditional_0_Template, 6, 5, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, BalanceSheetComponent_Conditional_13_Conditional_0_For_16_For_2_Template, 8, 8, "tr", null, _forTrack2);
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!group_r5.redundant_header ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](group_r5.lines);
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_ForEmpty_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " No asset balances at this date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_For_39_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 35)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](group_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, group_r7.subtotal, "USD"), " ");
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_For_39_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 31)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const line_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](line_r8.account_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", line_r8.english_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("negative", line_r8.amount < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 5, line_r8.amount, "USD"), " ");
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_For_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BalanceSheetComponent_Conditional_13_Conditional_0_For_39_Conditional_0_Template, 6, 5, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, BalanceSheetComponent_Conditional_13_Conditional_0_For_39_For_2_Template, 8, 8, "tr", null, _forTrack2);
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!group_r7.redundant_header ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](group_r7.lines);
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_ForEmpty_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " No liability balances at this date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_For_48_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 35)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](group_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, group_r9.subtotal, "USD"), " ");
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_For_48_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 31)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const line_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("computed", line_r10.is_computed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](line_r10.account_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", line_r10.english_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("negative", line_r10.amount < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 7, line_r10.amount, "USD"), " ");
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_For_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BalanceSheetComponent_Conditional_13_Conditional_0_For_48_Conditional_0_Template, 6, 5, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, BalanceSheetComponent_Conditional_13_Conditional_0_For_48_For_2_Template, 8, 10, "tr", 38, _forTrack2);
  }
  if (rf & 2) {
    const group_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!group_r9.redundant_header ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](group_r9.lines);
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Balance Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BalanceSheetComponent_Conditional_13_Conditional_0_Conditional_5_Template, 5, 4, "div", 22)(6, BalanceSheetComponent_Conditional_13_Conditional_0_Conditional_6_Template, 6, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 24)(8, "div", 25)(9, "table", 26)(10, "thead")(11, "tr")(12, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](15, BalanceSheetComponent_Conditional_13_Conditional_0_For_16_Template, 3, 1, null, null, _forTrack0, false, BalanceSheetComponent_Conditional_13_Conditional_0_ForEmpty_17_Template, 3, 0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tfoot")(19, "tr")(20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Total Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 25)(26, "table", 26)(27, "thead")(28, "tr")(29, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Liabilities & Equity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tbody")(32, "tr", 29)(33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Liabilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](38, BalanceSheetComponent_Conditional_13_Conditional_0_For_39_Template, 3, 1, null, null, _forTrack0, false, BalanceSheetComponent_Conditional_13_Conditional_0_ForEmpty_40_Template, 3, 0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "tr", 29)(42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Equity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](47, BalanceSheetComponent_Conditional_13_Conditional_0_For_48_Template, 3, 1, null, null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tfoot")(50, "tr")(51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Total Liabilities & Equity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "table", 30)(57, "thead")(58, "tr")(59, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Net Result Of The Period (included in equity above) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tbody")(62, "tr")(63, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Income (class 7)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "tr")(69, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Expenses (class 6)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](73, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "tfoot")(75, "tr")(76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const bs_r3 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" As of ", bs_r3.as_of, " \u2014 expressed in ", bs_r3.currency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!bs_r3.is_balanced ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.derivedAccounts().length ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.assetGroups());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 16, bs_r3.totals.assets, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](37, 19, bs_r3.totals.liabilities, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.liabilityGroups());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](46, 22, bs_r3.totals.equity, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.equityGroups());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](55, 25, bs_r3.totals.liabilities_and_equity, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](67, 28, bs_r3.profit_and_loss.income, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](73, 31, bs_r3.profit_and_loss.expenses, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bs_r3.profit_and_loss.net_result < 0 ? "Net Loss" : "Net Profit", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("negative", bs_r3.profit_and_loss.net_result < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](80, 34, bs_r3.profit_and_loss.net_result, "USD"), " ");
  }
}
function BalanceSheetComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Pick a date and press Show to build the statement. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BalanceSheetComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BalanceSheetComponent_Conditional_13_Conditional_0_Template, 81, 37)(1, BalanceSheetComponent_Conditional_13_Conditional_1_Template, 2, 0, "p", 9);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((tmp_1_0 = ctx_r1.sheet()) ? 0 : 1, tmp_1_0);
  }
}
class BalanceSheetComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder);
    this.reportsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService);
    this.dateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateService);
    this.sheet = this.reportsService.balanceSheet;
    this.loading = this.reportsService.loadingBalanceSheet;
    this.balanceSheetForm = this.fb.group({
      asOf: [this.dateService.getCurrentDate(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      showZero: [false]
    });
    /** the date the displayed figures belong to, not the one in the picker */
    this.displayedDate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.sheet()?.as_of ?? null);
    this.assetGroups = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.groupLines(this.sheet()?.assets ?? []));
    this.liabilityGroups = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.groupLines(this.sheet()?.liabilities ?? []));
    this.equityGroups = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.groupLines(this.sheet()?.equity ?? []));
    /** accounts whose class had to be inferred, worth flagging to the user */
    this.derivedAccounts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const sheet = this.sheet();
      if (!sheet) return [];
      return [...sheet.assets, ...sheet.liabilities, ...sheet.equity].filter(line => line.type_derived);
    });
  }
  ngOnInit() {
    this.submitForm();
  }
  /**
   * Collapses the flat account list into chart-of-accounts sub-categories,
   * keeping the account_number order the server sent.
   */
  groupLines(lines) {
    const groups = new Map();
    for (const line of lines) {
      const key = line.sub_category_number || 'other';
      let group = groups.get(key);
      if (!group) {
        group = {
          key,
          label: line.sub_category_name || 'Other Accounts',
          category_name: line.category_name,
          lines: [],
          subtotal: 0,
          redundant_header: false
        };
        groups.set(key, group);
      }
      group.lines.push(line);
      group.subtotal = this.round(group.subtotal + Number(line.amount));
    }
    for (const group of groups.values()) {
      // a sub-category holding one identically named account (the net
      // result line, for one) would otherwise print its title twice
      group.redundant_header = group.lines.length === 1 && group.lines[0].english_name === group.label;
    }
    return [...groups.values()];
  }
  round(value) {
    return Math.round(value * 100) / 100;
  }
  submitForm() {
    if (this.balanceSheetForm.invalid) return;
    const {
      asOf,
      showZero
    } = this.balanceSheetForm.value;
    this.reportsService.getBalanceSheet(asOf, showZero);
  }
  /**
   * Prints the statement itself rather than the whole screen: the body class
   * drives the print rules in styles.scss that strip the app chrome.
   */
  printBalanceSheet() {
    document.body.classList.add('printing-report');
    window.addEventListener('afterprint', () => document.body.classList.remove('printing-report'), {
      once: true
    });
    window.print();
  }
  static {
    this.ɵfac = function BalanceSheetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BalanceSheetComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BalanceSheetComponent,
      selectors: [["app-balance-sheet"]],
      decls: 14,
      vars: 2,
      consts: [[1, "grid", "balance-sheet"], [1, "col-12", "no-print"], ["pTemplate", "body"], [1, "col-12"], ["styleClass", "p-2 no-print"], [1, "p-toolbar-group-start"], [1, "m-0"], [1, "p-toolbar-group-end"], ["severity", "contrast", "size", "small", "label", "Print", "icon", "pi pi-print", 3, "onClick", "disabled"], [1, "text-center", "p-4"], [3, "ngSubmit", "formGroup"], [1, "grid"], [1, "col-12", "md:col-4"], [1, "field", "grid"], [1, "col-fixed", 2, "width", "60px"], [1, "col"], ["styleClass", "p-inputtext-sm", "formControlName", "asOf", "dateFormat", "yy-mm-dd", 3, "showIcon", "iconDisplay", "readonlyInput"], [1, "field-checkbox"], ["formControlName", "showZero", "inputId", "showZero", 3, "binary"], ["for", "showZero"], ["pButton", "", "type", "submit", "label", "Show", "icon", "pi pi-search", 3, "loading"], [1, "sheet-heading"], [1, "sheet-alert"], [1, "sheet-note", "no-print"], [1, "grid", "sheet-body"], [1, "col-12", "lg:col-6", "sheet-col"], [1, "sheet-table"], ["colspan", "2"], [1, "amount"], [1, "section-row"], [1, "sheet-table", "result-table"], [1, "account"], [1, "pi", "pi-exclamation-triangle"], [1, "pi", "pi-info-circle"], [1, "derived-chip"], [1, "group-row"], [1, "account-number"], ["colspan", "2", 1, "empty"], [3, "computed"]],
      template: function BalanceSheetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BalanceSheetComponent_ng_template_3_Template, 15, 6, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "p-card")(6, "p-toolbar", 4)(7, "div", 5)(8, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Balance Sheet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "p-button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function BalanceSheetComponent_Template_p_button_onClick_11_listener() {
            return ctx.printBalanceSheet();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BalanceSheetComponent_Conditional_12_Template, 2, 0, "p", 9)(13, BalanceSheetComponent_Conditional_13_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.sheet());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.loading() ? 12 : 13);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_6__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_card__WEBPACK_IMPORTED_MODULE_8__.Card, primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__.Checkbox, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe],
      styles: [".balance-sheet[_ngcontent-%COMP%]   .sheet-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.9rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-alert[_ngcontent-%COMP%], \n.balance-sheet[_ngcontent-%COMP%]   .sheet-note[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  border-radius: 6px;\n  font-size: 0.875rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-alert[_ngcontent-%COMP%] {\n  background: var(--red-50);\n  border-left: 4px solid var(--red-500);\n  color: var(--red-900);\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-note[_ngcontent-%COMP%] {\n  background: var(--surface-100);\n  border-left: 4px solid var(--surface-400);\n  color: var(--text-color-secondary);\n}\n.balance-sheet[_ngcontent-%COMP%]   .derived-chip[_ngcontent-%COMP%] {\n  background: var(--surface-200);\n  border-radius: 4px;\n  padding: 0.1rem 0.4rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  vertical-align: top;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 1rem;\n  border-bottom: 2px solid var(--surface-300);\n  padding-bottom: 0.5rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--surface-50);\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .section-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 700;\n  border-top: 1px solid var(--surface-300);\n  padding-top: 0.75rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .group-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color-secondary);\n  padding-top: 0.6rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .computed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-style: italic;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 700;\n  border-top: 2px solid var(--surface-300);\n  padding-top: 0.6rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%] {\n  padding-left: 1.75rem;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   .account-number[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 4.5rem;\n  color: var(--text-color-secondary);\n  font-variant-numeric: tabular-nums;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n.balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  color: var(--red-600);\n}\n.balance-sheet[_ngcontent-%COMP%]   .result-table[_ngcontent-%COMP%] {\n  max-width: 32rem;\n  margin-top: 1.5rem;\n}\n\n@media print {\n  .balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background: none;\n  }\n  .balance-sheet[_ngcontent-%COMP%]   .sheet-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n  .balance-sheet[_ngcontent-%COMP%]   .sheet-col[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n  .balance-sheet[_ngcontent-%COMP%]   .result-table[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9iYWxhbmNlLXNoZWV0L2JhbGFuY2Utc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFUTtFQUNJLFNBQUE7QUFBWjtBQUdRO0VBQ0ksbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBRFo7QUFLSTs7RUFFSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFNSTtFQUNJLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtBQUpSO0FBT0k7RUFDSSw4QkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7QUFMUjtBQVFJO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBTlI7QUFTSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUFI7QUFTUTs7RUFFSSx3QkFBQTtFQUNBLG1CQUFBO0FBUFo7QUFVUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7QUFSWjtBQVlZO0VBQ0ksNkJBQUE7QUFWaEI7QUFhWTtFQUNJLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtBQVhoQjtBQWNZO0VBQ0ksZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBWmhCO0FBZVk7RUFDSSxrQkFBQTtBQWJoQjtBQWdCWTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7QUFkaEI7QUFrQlE7RUFDSSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUFoQlo7QUFtQlE7RUFDSSxxQkFBQTtBQWpCWjtBQW9CUTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0FBbEJaO0FBcUJRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBbkJaO0FBc0JRO0VBQ0kscUJBQUE7QUFwQlo7QUF3Qkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBdEJSOztBQTRCQTtFQUVRO0lBQ0ksa0JBQUE7RUExQlY7RUE0QlU7SUFDSSxnQkFBQTtFQTFCZDtFQThCVTtJQUNJLHdCQUFBO0VBNUJkO0VBZ0NNO0lBQ0kscUJBQUE7RUE5QlY7RUFpQ007SUFDSSx3QkFBQTtFQS9CVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbGFuY2Utc2hlZXQge1xuICAgIC5zaGVldC1oZWFkaW5nIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDAgMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zaGVldC1hbGVydCxcbiAgICAuc2hlZXQtbm90ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIH1cblxuICAgIC5zaGVldC1hbGVydCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZC01MCk7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcmVkLTUwMCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQtOTAwKTtcbiAgICB9XG5cbiAgICAuc2hlZXQtbm90ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtMTAwKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTQwMCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgLmRlcml2ZWQtY2hpcCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtMjAwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC40cmVtO1xuICAgIH1cblxuICAgIC5zaGVldC10YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuXG4gICAgICAgIHRoLFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhlYWQgdGgge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTMwMCk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHI6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtNTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VjdGlvbi1yb3cgdGQge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMzAwKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmdyb3VwLXJvdyB0ZCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjZyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb21wdXRlZCB0ZCB7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZW1wdHkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGZvb3QgdGQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTMwMCk7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC42cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY291bnQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY291bnQtbnVtYmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1pbi13aWR0aDogNC41cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gICAgICAgIH1cblxuICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gICAgICAgIH1cblxuICAgICAgICAubmVnYXRpdmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZC02MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlc3VsdC10YWJsZSB7XG4gICAgICAgIG1heC13aWR0aDogMzJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICB9XG59XG5cbi8vIGtlZXAgdGhlIHR3byBzaWRlcyBzaWRlIGJ5IHNpZGUgb24gcGFwZXIgLSBQcmltZUZsZXgncyBsZzogYnJlYWtwb2ludCBkb2VzXG4vLyBub3QgbWF0Y2ggYXQgcHJpbnQgd2lkdGgsIHNvIHRoZSBjb2x1bW5zIHdvdWxkIG90aGVyd2lzZSBzdGFja1xuQG1lZGlhIHByaW50IHtcbiAgICAuYmFsYW5jZS1zaGVldCB7XG4gICAgICAgIC5zaGVldC10YWJsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG5cbiAgICAgICAgICAgIHRib2R5IHRyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBuZXZlciBzcGxpdCBhbiBhY2NvdW50IGF3YXkgZnJvbSBpdHMgc3ViLWNhdGVnb3J5IGhlYWRpbmdcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2hlZXQtY29sIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXN1bHQtdGFibGUge1xuICAgICAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 62224:
/*!************************************************************************!*\
  !*** ./src/app/reports/customers-totals/customers-totals.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomersTotalsComponent: () => (/* binding */ CustomersTotalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../report-dates/report-dates.component */ 99638);










const _c0 = () => [10, 15, 50, 100];
const _c1 = () => ["name", "phone", "financial_number"];
function CustomersTotalsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "p-divider", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Total Sales ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 7, ctx_r2.totals().totalSales), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Total Cost ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 9, ctx_r2.totals().totalCost), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Net Sales Profit ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, ctx_r2.totals().netProfit), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Total Returns ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 13, ctx_r2.totals().totalReturns), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Total Returns Cost ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 15, ctx_r2.totals().totalReturnsCost), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Net Sales After Returns ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 17, ctx_r2.totals().netSalesAfterReturns), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Gross Profit ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 19, ctx_r2.totals().grossProfit), " ");
  }
}
function CustomersTotalsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Financial #");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Total Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Net Sales Profit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Total Returns");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Grand Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Grand Profit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CustomersTotalsComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " cost: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " return cost: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r4.phone || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r4.financial_number || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, record_r4.total_sales), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 12, record_r4.total_cost));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 14, record_r4.total_sales - record_r4.total_cost), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 16, record_r4.total_returns), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 18, record_r4.total_returns_cost));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 20, record_r4.total_sales - record_r4.total_returns), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 22, record_r4.total_sales - record_r4.total_returns - (record_r4.total_cost - record_r4.total_returns_cost)), " ");
  }
}
function CustomersTotalsComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No records yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class CustomersTotalsComponent {
  constructor() {
    this.reportsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService);
    this.customersTotalPurchases = this.reportsService.customersTotalPurchases;
    this.totals = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const data = this.customersTotalPurchases();
      const base = data.reduce((acc, record) => {
        const totalSales = Number(record.total_sales) || 0;
        const totalCost = Number(record.total_cost) || 0;
        const totalReturns = Number(record.total_returns) || 0;
        const totalReturnsCost = Number(record.total_returns_cost) || 0;
        acc.totalSales += totalSales;
        acc.totalCost += totalCost;
        acc.totalReturns += totalReturns;
        acc.totalReturnsCost += totalReturnsCost;
        return acc;
      }, {
        totalSales: 0,
        totalCost: 0,
        totalReturns: 0,
        totalReturnsCost: 0
      });
      const grossProfit = base.totalSales - base.totalCost;
      const netSalesAfterReturns = base.totalSales - base.totalReturns;
      const netProfit = base.totalSales - base.totalReturns - (base.totalCost - base.totalReturnsCost);
      return {
        ...base,
        grossProfit,
        netSalesAfterReturns,
        netProfit
      };
    });
  }
  static {
    this.ɵfac = function CustomersTotalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustomersTotalsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CustomersTotalsComponent,
      selectors: [["customers-totals"]],
      decls: 47,
      vars: 33,
      consts: [["tableSearch", ""], ["dt2", ""], [1, "grid"], [1, "col-12"], ["header", "Customers Total Purchases"], [1, "col-12", "md:col-3"], [1, "flex"], [1, "p-input-icon-left", "mr-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Search ...", "spellcheck", "false", 1, "p-inputtext-sm", 3, "input", "value"], [1, "col-12", "md:col-9"], ["class", "flex", 4, "ngIf"], ["dataKey", "account_id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} records", 1, "p-datatable-sm", "p-datatable-striped", 3, "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions", "alwaysShowPaginator", "globalFilterFields", "filterDelay"], ["pTemplate", "header"], ["colspan", "3"], [1, "text-orange-500"], [1, "text-green-700"], [1, "text-red-500"], [2, "border-left", "1px solid #ccc"], [1, "text-green-500", "font-bold"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["layout", "vertical"], [1, "font-bold", 2, "border-left", "1px solid #ccc"], ["colspan", "8"]],
      template: function CustomersTotalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "report-dates");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "p-panel", 4)(5, "div", 2)(6, "div", 5)(7, "div", 6)(8, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 9, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function CustomersTotalsComponent_Template_input_input_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            const dt2_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](dt2_r2.filterGlobal($event.target.value, "contains"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CustomersTotalsComponent_div_13_Template, 23, 21, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3)(15, "p-table", 12, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CustomersTotalsComponent_ng_template_17_Template, 17, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " cost: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "small", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " return cost: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "small", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, CustomersTotalsComponent_ng_template_45_Template, 32, 24, "ng-template", 20)(46, CustomersTotalsComponent_ng_template_46_Template, 3, 0, "ng-template", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          const dt2_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", dt2_r2.filters["global"] == null ? null : dt2_r2.filters["global"].value);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totals().totalSales);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.customersTotalPurchases())("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c0))("alwaysShowPaginator", false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c1))("filterDelay", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 17, ctx.totals().totalSales), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 19, ctx.totals().totalCost), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 21, ctx.totals().grossProfit), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 23, ctx.totals().totalReturns), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 25, ctx.totals().totalReturnsCost), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 27, ctx.totals().netSalesAfterReturns), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 29, ctx.totals().netProfit), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_5__.Panel, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_divider__WEBPACK_IMPORTED_MODULE_7__.Divider, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_1__.ReportDatesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 38090:
/*!********************************************************************!*\
  !*** ./src/app/reports/general-ledger/general-ledger.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralLedgerComponent: () => (/* binding */ GeneralLedgerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputswitch */ 46764);
/* harmony import */ var _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../report-dates/report-dates.component */ 99638);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/pipes/lira.pipe */ 62298);












const _c0 = (a0, a1) => ({
  "text-red-600": a0,
  "text-green-600": a1
});
function GeneralLedgerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " General Ledger ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9)(6, "p-inputSwitch", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function GeneralLedgerComponent_ng_template_5_Template_p_inputSwitch_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.show_dollar, $event) || (ctx_r1.show_dollar = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.show_dollar ? "USD" : "LBP", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.show_dollar);
  }
}
function GeneralLedgerComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Transaction #");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Auxiliary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function GeneralLedgerComponent_ng_template_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r3.total_debit));
  }
}
function GeneralLedgerComponent_ng_template_8_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r3.total_debit_lbp));
  }
}
function GeneralLedgerComponent_ng_template_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r3.total_credit));
  }
}
function GeneralLedgerComponent_ng_template_8_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r3.total_credit_lbp));
  }
}
function GeneralLedgerComponent_ng_template_8_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r3.balance));
  }
}
function GeneralLedgerComponent_ng_template_8_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r3.balance_lbp));
  }
}
function GeneralLedgerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "td")(6, "td")(7, "td")(8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, GeneralLedgerComponent_ng_template_8_span_10_Template, 3, 3, "span", 15)(11, GeneralLedgerComponent_ng_template_8_span_11_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, GeneralLedgerComponent_ng_template_8_span_13_Template, 3, 3, "span", 15)(14, GeneralLedgerComponent_ng_template_8_span_14_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, GeneralLedgerComponent_ng_template_8_span_16_Template, 3, 3, "span", 15)(17, GeneralLedgerComponent_ng_template_8_span_17_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const expanded_r4 = ctx.expanded;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pRowToggler", item_r3)("icon", expanded_r4 ? "pi pi-minus" : "pi pi-plus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", item_r3.account_number, " - ", item_r3.english_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c0, item_r3.balance < 0, item_r3.balance > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.show_dollar);
  }
}
function GeneralLedgerComponent_ng_template_9_tr_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r5.debit));
  }
}
function GeneralLedgerComponent_ng_template_9_tr_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.toFloat(item_r5.debit_lbp)));
  }
}
function GeneralLedgerComponent_ng_template_9_tr_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r5.credit));
  }
}
function GeneralLedgerComponent_ng_template_9_tr_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.toFloat(item_r5.credit_lbp)));
  }
}
function GeneralLedgerComponent_ng_template_9_tr_0_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.getBalance(item_r5)));
  }
}
function GeneralLedgerComponent_ng_template_9_tr_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.getBalance(item_r5, "LBP")));
  }
}
function GeneralLedgerComponent_ng_template_9_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td")(2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, GeneralLedgerComponent_ng_template_9_tr_0_span_12_Template, 3, 3, "span", 15)(13, GeneralLedgerComponent_ng_template_9_tr_0_span_13_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, GeneralLedgerComponent_ng_template_9_tr_0_span_15_Template, 3, 3, "span", 15)(16, GeneralLedgerComponent_ng_template_9_tr_0_span_16_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, GeneralLedgerComponent_ng_template_9_tr_0_span_18_Template, 3, 3, "span", 15)(19, GeneralLedgerComponent_ng_template_9_tr_0_span_19_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.journal_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.journal_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.partner_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c0, ctx_r1.getBalance(item_r5) < 0, ctx_r1.getBalance(item_r5) > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.show_dollar);
  }
}
function GeneralLedgerComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GeneralLedgerComponent_ng_template_9_tr_0_Template, 20, 14, "tr", 17);
  }
  if (rf & 2) {
    const account_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.getAccountDetails(account_r6));
  }
}
function GeneralLedgerComponent_ng_template_10_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.debit));
  }
}
function GeneralLedgerComponent_ng_template_10_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.debit_lbp));
  }
}
function GeneralLedgerComponent_ng_template_10_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.credit));
  }
}
function GeneralLedgerComponent_ng_template_10_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.credit_lbp));
  }
}
function GeneralLedgerComponent_ng_template_10_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.balance));
  }
}
function GeneralLedgerComponent_ng_template_10_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.balance_lbp));
  }
}
function GeneralLedgerComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "td")(4, "td")(5, "td")(6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, GeneralLedgerComponent_ng_template_10_span_8_Template, 3, 3, "span", 15)(9, GeneralLedgerComponent_ng_template_10_span_9_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, GeneralLedgerComponent_ng_template_10_span_11_Template, 3, 3, "span", 15)(12, GeneralLedgerComponent_ng_template_10_span_12_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, GeneralLedgerComponent_ng_template_10_span_14_Template, 3, 3, "span", 15)(15, GeneralLedgerComponent_ng_template_10_span_15_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.show_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.show_dollar);
  }
}
class GeneralLedgerComponent {
  constructor(reportsService) {
    this.reportsService = reportsService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.show_dollar = true;
    this.accounts_details = [];
  }
  ngOnInit() {
    this.subscriptions.add(this.reportsService.generalLedgerTotals.subscribe(data => {
      this.totals = {
        debit: 0,
        credit: 0,
        balance: 0,
        debit_lbp: 0,
        credit_lbp: 0,
        balance_lbp: 0
      };
      this.data = data;
      for (let i = 0; i < this.data.length; i++) {
        this.totals.debit += parseFloat(data[i].total_debit);
        this.totals.credit += parseFloat(data[i].total_credit);
        this.totals.balance += parseFloat(data[i].balance);
        this.totals.debit_lbp += parseFloat(data[i].total_debit_lbp);
        this.totals.credit_lbp += parseFloat(data[i].total_credit_lbp);
        this.totals.balance_lbp += parseFloat(data[i].balance_lbp);
      }
    }));
    this.subscriptions.add(this.reportsService.generalLedger.subscribe(data => {
      this.accounts_details = data;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  getAccountDetails(account) {
    return this.accounts_details.filter(acc => acc.account_number === account.account_number);
  }
  getBalance(account, currency = 'USD') {
    if (currency === 'USD') return parseFloat(account.debit) - parseFloat(account.credit);else {
      return parseFloat(account.debit_lbp) - parseFloat(account.credit_lbp);
    }
  }
  toFloat(value) {
    return parseFloat(value);
  }
  static {
    this.ɵfac = function GeneralLedgerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GeneralLedgerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: GeneralLedgerComponent,
      selectors: [["app-general-ledger"]],
      decls: 11,
      vars: 2,
      consts: [[1, "grid"], [1, "col-12"], ["pTemplate", "header"], ["dataKey", "account_number", "styleClass", "p-datatable-sm", "scrollHeight", "500px", 1, "ledger_table", 3, "value", "scrollable"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "footer"], [1, "flex", "overflow-hidden", "w-full", "gap-2"], [1, "flex-grow-1", "flex", "align-items-center", "font-bold"], [1, "flex-none", "flex", "align-items-center"], [3, "ngModelChange", "ngModel"], ["width", "5%"], ["width", "15%"], ["width", "10%"], ["type", "button", "pButton", "", "pRipple", "", "size", "small", 1, "p-button-text", "p-button-rounded", "p-button-plain", "mr-2", "p-button-secondary", 3, "pRowToggler", "icon"], [4, "ngIf"], [3, "ngClass"], [4, "ngFor", "ngForOf"], ["colspan", "2"]],
      template: function GeneralLedgerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "report-dates");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "p-panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GeneralLedgerComponent_ng_template_5_Template, 7, 2, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p-table", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GeneralLedgerComponent_ng_template_7_Template, 18, 0, "ng-template", 2)(8, GeneralLedgerComponent_ng_template_8_Template, 18, 14, "ng-template", 4)(9, GeneralLedgerComponent_ng_template_9_Template, 1, 1, "ng-template", 5)(10, GeneralLedgerComponent_ng_template_10_Template, 16, 6, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.data)("scrollable", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.RowToggler, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__.InputSwitch, _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_1__.ReportDatesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_2__.LiraPipe],
      styles: [".ledger_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .ledger_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2), .ledger_table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: left !important;\n}\n\n.ledger_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n[_nghost-%COMP%]  .p-button-sm {\n  height: 2rem !important;\n  width: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9nZW5lcmFsLWxlZGdlci9nZW5lcmFsLWxlZGdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0FBQUo7O0FBRUU7RUFDRSw2QkFBQTtBQUNKOztBQUVFO0VBQ00sdUJBQUE7RUFDQSxzQkFBQTtBQUNSIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubGVkZ2VyX3RhYmxlIHRyIHRkOmZpcnN0LWNoaWxkLCAubGVkZ2VyX3RhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSwgLmxlZGdlcl90YWJsZSB0aDpudGgtY2hpbGQoMikge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICAubGVkZ2VyX3RhYmxlIHRyIHRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIDpob3N0OjpuZy1kZWVwIC5wLWJ1dHRvbi1zbSB7XG4gICAgICAgIGhlaWdodDogMnJlbSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 58376:
/*!****************************************************************************!*\
  !*** ./src/app/reports/general-statements/general-statements.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralStatementsComponent: () => (/* binding */ GeneralStatementsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/date.service */ 76723);
/* harmony import */ var src_app_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/print.service */ 5312);
/* harmony import */ var src_app_accounting_accounting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accounting/accounting.service */ 39512);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/lira.pipe */ 62298);

















const _c0 = a0 => ({
  "text-red-600": a0
});
function GeneralStatementsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p-calendar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function GeneralStatementsComponent_ng_template_3_Template_p_calendar_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.startDate, $event) || (ctx_r1.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelect", function GeneralStatementsComponent_ng_template_3_Template_p_calendar_onSelect_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.startDateChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showIcon", true)("readonlyInput", true);
  }
}
function GeneralStatementsComponent_ng_template_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selectedOption_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", selectedOption_r4.account_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", selectedOption_r4.english_name, " ");
  }
}
function GeneralStatementsComponent_ng_template_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const account_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](account_r5.account_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](account_r5.english_name);
  }
}
function GeneralStatementsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-dropdown", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function GeneralStatementsComponent_ng_template_4_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.selectedAccount, $event) || (ctx_r1.selectedAccount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChange", function GeneralStatementsComponent_ng_template_4_Template_p_dropdown_onChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.accountChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, GeneralStatementsComponent_ng_template_4_ng_template_1_Template, 5, 2, "ng-template", 20)(2, GeneralStatementsComponent_ng_template_4_ng_template_2_Template, 5, 2, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("autoOptionFocus", false)("options", ctx_r1.generalAccounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showClear", true)("filter", true);
  }
}
function GeneralStatementsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "End Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p-calendar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function GeneralStatementsComponent_ng_template_5_Template_p_calendar_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.endDate, $event) || (ctx_r1.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelect", function GeneralStatementsComponent_ng_template_5_Template_p_calendar_onSelect_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.endDateChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showIcon", true)("readonlyInput", true);
  }
}
function GeneralStatementsComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GeneralStatementsComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.printStatement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GeneralStatementsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function GeneralStatementsComponent_ng_template_18_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item_r8.debit));
  }
}
function GeneralStatementsComponent_ng_template_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item_r8.debit_lbp));
  }
}
function GeneralStatementsComponent_ng_template_18_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item_r8.credit));
  }
}
function GeneralStatementsComponent_ng_template_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item_r8.credit_lbp));
  }
}
function GeneralStatementsComponent_ng_template_18_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowIndex;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.balances[i_r9]), " ");
  }
}
function GeneralStatementsComponent_ng_template_18_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowIndex;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.balances_lbp[i_r9]), " ");
  }
}
function GeneralStatementsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, GeneralStatementsComponent_ng_template_18_span_8_Template, 3, 3, "span", 26)(9, GeneralStatementsComponent_ng_template_18_span_9_Template, 3, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, GeneralStatementsComponent_ng_template_18_span_11_Template, 3, 3, "span", 26)(12, GeneralStatementsComponent_ng_template_18_span_12_Template, 3, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, GeneralStatementsComponent_ng_template_18_span_14_Template, 3, 3, "span", 26)(15, GeneralStatementsComponent_ng_template_18_span_15_Template, 3, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r8.journal_date || "Before " + ctx_r1.startDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r8.journal_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r8.journal_description || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx_r1.balances[i_r9] < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
  }
}
function GeneralStatementsComponent_ng_template_19_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.balances[ctx_r1.balances.length - 1]), " ");
  }
}
function GeneralStatementsComponent_ng_template_19_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.balances_lbp[ctx_r1.balances.length - 1]), " ");
  }
}
function GeneralStatementsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Balance Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, GeneralStatementsComponent_ng_template_19_span_5_Template, 3, 3, "span", 26)(6, GeneralStatementsComponent_ng_template_19_span_6_Template, 3, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r1.balances[ctx_r1.balances.length - 1] < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP" && ctx_r1.data.length > 0);
  }
}
class GeneralStatementsComponent {
  constructor(reportsService, dateService, printService, accountingService) {
    this.reportsService = reportsService;
    this.dateService = dateService;
    this.printService = printService;
    this.accountingService = accountingService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.balances = [];
    this.balances_lbp = [];
    this.show_dollar = true;
  }
  ngOnInit() {
    this.subscriptions.add(this.reportsService.currencyOptions.subscribe(res => {
      this.currencyOptions = res;
    }));
    this.subscriptions.add(this.reportsService.currencyValue.subscribe(res => {
      this.currencyValue = res;
    }));
    this.subscriptions.add(this.accountingService.chartOfAccounts.subscribe(accounts => {
      this.generalAccounts = accounts;
      // console.log(accounts);
    }));
    this.subscriptions.add(this.reportsService.statementOfAccounts.subscribe(data => {
      this.data = data;
      if (data.length > 0) {
        this.balances = [];
        this.balances_lbp = [];
        this.balances[0] = parseFloat(data[0].balance);
        this.balances_lbp[0] = parseFloat(data[0].debit_lbp) - parseFloat(data[0].credit_lbp);
        for (let i = 1; i < data.length; i++) {
          this.balances[i] = this.balances[i - 1] + parseFloat(data[i].debit) - parseFloat(data[i].credit);
          this.balances_lbp[i] = this.balances_lbp[i - 1] + parseFloat(data[i].debit_lbp) - parseFloat(data[i].credit_lbp);
        }
      } else {
        this.balances = [];
        this.balances_lbp = [];
      }
    }));
    this.subscriptions.add(this.reportsService.startDate.subscribe(res => {
      this.startDate = res;
    }));
    this.subscriptions.add(this.reportsService.endDate.subscribe(res => {
      this.endDate = res;
    }));
    this.subscriptions.add(this.reportsService.selectedAccountForStatement.subscribe(res => {
      this.selectedAccount = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  startDateChanged() {
    this.reportsService.startDate.next(this.dateService.formatDate(this.startDate));
    this.reportsService.init_reports();
  }
  endDateChanged() {
    this.reportsService.endDate.next(this.dateService.formatDate(this.endDate));
    this.reportsService.init_reports();
  }
  accountChanged() {
    if (this.selectedAccount) {
      this.reportsService.selectedAccountForStatement.next(this.selectedAccount);
      this.reportsService.init_reports();
    } else {
      this.reportsService.selectedAccountForStatement.next(null);
      this.reportsService.statementOfAccounts.next([]);
    }
  }
  changeCurrency(event) {
    this.reportsService.currencyValue.next(event.value);
  }
  printStatement() {
    let dataToPrint = [this.data, this.balances, this.balances_lbp, this.startDate, this.endDate, this.selectedAccount];
    this.printService.printStatement(dataToPrint);
  }
  static {
    this.ɵfac = function GeneralStatementsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GeneralStatementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_print_service__WEBPACK_IMPORTED_MODULE_2__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_accounting_accounting_service__WEBPACK_IMPORTED_MODULE_3__.AccountingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: GeneralStatementsComponent,
      selectors: [["general-statements"]],
      decls: 20,
      vars: 5,
      consts: [[1, "grid"], [1, "col-12"], ["styleClass", "p-3"], ["pTemplate", "left"], ["pTemplate", "center"], ["pTemplate", "right"], ["styleClass", "p-2"], [1, "p-toolbar-group-start"], [1, "m-0"], [1, "p-toolbar-group-center"], ["pButton", "", "pRipple", "", "severity", "contrast", "size", "small", "label", "Print", "icon", "pi pi-print", 3, "click", 4, "ngIf"], [1, "p-toolbar-group-end"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "onChange", "options", "ngModel", "allowEmpty"], ["dataKey", "account_number", "styleClass", "p-datatable-sm", 1, "ledger_table", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], [1, "mr-2"], ["styleClass", "p-inputtext-sm", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "onSelect", "ngModel", "showIcon", "readonlyInput"], ["styleClass", "w-full", "optionLabel", "account_number", "placeholder", "Select Account", 3, "ngModelChange", "onChange", "autoOptionFocus", "options", "ngModel", "showClear", "filter"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [1, "flex", "align-items-center", "gap-2"], ["pButton", "", "pRipple", "", "severity", "contrast", "size", "small", "label", "Print", "icon", "pi pi-print", 3, "click"], ["width", "20%"], ["width", "15%"], [4, "ngIf"], [3, "ngClass"], ["colspan", "4"]],
      template: function GeneralStatementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-toolbar", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, GeneralStatementsComponent_ng_template_3_Template, 3, 3, "ng-template", 3)(4, GeneralStatementsComponent_ng_template_4_Template, 3, 5, "ng-template", 4)(5, GeneralStatementsComponent_ng_template_5_Template, 3, 3, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1)(7, "p-card")(8, "p-toolbar", 6)(9, "div", 7)(10, "h4", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "General Ledger Statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, GeneralStatementsComponent_button_13_Template, 1, 0, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11)(15, "p-selectButton", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function GeneralStatementsComponent_Template_p_selectButton_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.currencyValue, $event) || (ctx.currencyValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChange", function GeneralStatementsComponent_Template_p_selectButton_onChange_15_listener($event) {
            return ctx.changeCurrency($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p-table", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, GeneralStatementsComponent_ng_template_17_Template, 13, 0, "ng-template", 14)(18, GeneralStatementsComponent_ng_template_18_Template, 16, 12, "ng-template", 15)(19, GeneralStatementsComponent_ng_template_19_Template, 7, 5, "ng-template", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.currencyOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.currencyValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("allowEmpty", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.data);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_card__WEBPACK_IMPORTED_MODULE_14__.Card, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__.SelectButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_4__.LiraPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 70216:
/*!************************************************************************!*\
  !*** ./src/app/reports/inventory-status/inventory-status.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryStatusComponent: () => (/* binding */ InventoryStatusComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 55222);







function InventoryStatusComponent_p_toolbar_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Inventory Value: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.inventoryValue.inventory_value), " ");
  }
}
function InventoryStatusComponent_p_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-toolbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InventoryStatusComponent_p_toolbar_1_ng_template_1_Template, 3, 3, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function InventoryStatusComponent_p_toolbar_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Remaining Items: ", ctx_r0.inventoryValue.nb_items, " ");
  }
}
function InventoryStatusComponent_p_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InventoryStatusComponent_p_toolbar_2_ng_template_1_Template, 2, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class InventoryStatusComponent {
  constructor(reportsService) {
    this.reportsService = reportsService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.reportsService.inventoryValue.subscribe(res => this.inventoryValue = res));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function InventoryStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InventoryStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InventoryStatusComponent,
      selectors: [["app-inventory-status"]],
      decls: 3,
      vars: 2,
      consts: [["header", "Inventory Status"], ["styleClass", "p-1", 4, "ngIf"], ["styleClass", "p-1 mt-1", 4, "ngIf"], ["styleClass", "p-1"], ["pTemplate", "left"], [1, "m-1"], ["styleClass", "p-1 mt-1"]],
      template: function InventoryStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-panel", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InventoryStatusComponent_p_toolbar_1_Template, 2, 0, "p-toolbar", 1)(2, InventoryStatusComponent_p_toolbar_2_Template, 2, 0, "p-toolbar", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.inventoryValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.inventoryValue);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 56050:
/*!********************************************************************!*\
  !*** ./src/app/reports/product-report/product-report.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductReportComponent: () => (/* binding */ ProductReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _product_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-report.service */ 18966);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/date.service */ 76723);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/products-dialog/products-dialog.component */ 44089);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tag */ 93616);

















const _c0 = () => [10, 15, 50, 100];
const _c1 = () => ["name", "invoice_number"];
function ProductReportComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProductReportComponent_ng_template_1_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.dialogVisible = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductReportComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-calendar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ProductReportComponent_ng_template_2_Template_p_calendar_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.startDate, $event) || (ctx_r1.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductReportComponent_ng_template_2_Template_p_calendar_ngModelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-calendar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ProductReportComponent_ng_template_2_Template_p_calendar_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.endDate, $event) || (ctx_r1.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductReportComponent_ng_template_2_Template_p_calendar_ngModelChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProductReportComponent_ng_template_2_Template_p_button_onClick_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true)("iconDisplay", "input")("readonlyInput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showButtonBar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true)("iconDisplay", "input")("readonlyInput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showButtonBar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.selectedProduct())("loading", ctx_r1.productHistoryLoading());
  }
}
function ProductReportComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 14)(8, "table", 16)(9, "thead")(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Total Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Total Sales (VAT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody")(20, "tr")(21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tr")(32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "tr")(43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "tr")(54, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "tr")(57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Total units added manually:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Total units removed manually:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "tr")(66, "td", 17)(67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Final Balance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = ctx_r1.selectedProduct()) == null ? null : tmp_1_0.product_name, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_2_0 = ctx_r1.selectedProduct()) == null ? null : tmp_2_0.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Sales: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 18, ctx_r1.productHistoryTotals().totalSell), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.productHistoryTotals().totalQuantitySell, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Sales: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 20, ctx_r1.productHistoryTotals().totalSellVAT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.productHistoryTotals().totalQuantitySellVAT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Return: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 22, ctx_r1.productHistoryTotals().totalReturn), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.productHistoryTotals().totalQuantityReturn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Return: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 24, ctx_r1.productHistoryTotals().totalReturnVAT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.productHistoryTotals().totalQuantityReturnVAT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Purchases: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 26, ctx_r1.productHistoryTotals().totalPurchase), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.productHistoryTotals().totalQuantityPurchases, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Purchases: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 28, ctx_r1.productHistoryTotals().totalPurchaseVAT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.productHistoryTotals().totalQuantityPurchasesVAT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Balance: ", ctx_r1.productHistoryTotals().totalQuantityPurchasesVAT + ctx_r1.productHistoryTotals().totalQuantityPurchases + ctx_r1.productHistoryTotals().totalQuantityReturn + ctx_r1.productHistoryTotals().totalQuantityReturnVAT - ctx_r1.productHistoryTotals().totalQuantitySell - ctx_r1.productHistoryTotals().totalQuantitySellVAT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.productHistoryTotals().totalQuantityAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.productHistoryTotals().totalQuantityRemove, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.productHistoryTotals().totalQuantityPurchasesVAT + ctx_r1.productHistoryTotals().totalQuantityPurchases + ctx_r1.productHistoryTotals().totalQuantityReturn + ctx_r1.productHistoryTotals().totalQuantityReturnVAT - ctx_r1.productHistoryTotals().totalQuantitySell - ctx_r1.productHistoryTotals().totalQuantitySellVAT + ctx_r1.productHistoryTotals().totalQuantityAdd + ctx_r1.productHistoryTotals().totalQuantityRemove, " ");
  }
}
function ProductReportComponent_p_messages_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-messages", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function ProductReportComponent_p_messages_5_Template_p_messages_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.message, $event) || (ctx_r1.message = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closable", false);
  }
}
function ProductReportComponent_div_6_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Invoice #");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "VAT?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductReportComponent_div_6_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-tag", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", record_r7.transaction_type)("severity", ctx_r1.getSeverity(record_r7.transaction_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r7.invoice_number || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r7.name || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r7.order_datetime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 8, record_r7.unit_price || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", record_r7.include_vat ? "pi-check-circle text-green-600" : "pi-times-circle text-red-600");
  }
}
function ProductReportComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 19)(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ProductReportComponent_div_6_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const dt2_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](dt2_r6.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-table", 23, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ProductReportComponent_div_6_ng_template_7_Template, 15, 0, "ng-template", 24)(8, ProductReportComponent_div_6_ng_template_8_Template, 16, 10, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dt2_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dt2_r6.filters["global"] == null ? null : dt2_r6.filters["global"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.productHistory())("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0))("alwaysShowPaginator", false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1))("filterDelay", 0)("loading", ctx_r1.productHistoryLoading());
  }
}
class ProductReportComponent {
  constructor() {
    this.productReportService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_product_report_service__WEBPACK_IMPORTED_MODULE_0__.ProductReportService);
    this.dateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateService);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder);
    this.dialogVisible = false;
    this.startDate = this.productReportService.startDate;
    this.endDate = this.productReportService.endDate;
    this.selectedProduct = this.productReportService.selectedProduct;
    this.productHistory = this.productReportService.productHistory;
    this.productHistoryLoading = this.productReportService.productHistoryLoading;
    this.productHistoryTotals = this.productReportService.productHistoryTotals;
    this.submitted = false;
  }
  ngOnInit() {
    this.message = [{
      severity: 'info',
      detail: 'Select an item first!'
    }];
  }
  assignSelectedProduct(product) {
    this.productReportService.productHistory.set([]);
    this.productReportService.selectedProduct.set(product);
    this.search();
  }
  search() {
    this.submitted = true;
    if (this.selectedProduct()) {
      this.productReportService.searchProductHistory();
    }
  }
  // get severity
  getSeverity(type) {
    switch (type) {
      case 'Sale':
        return 'primary';
      case 'Purchase':
        return 'success';
      case 'Return':
        return 'warning';
      case 'DELETE':
        return 'danger';
      case 'ADD':
        return 'contrast';
      case 'REMOVE':
        return 'danger';
      default:
        return 'contrast';
    }
  }
  static {
    this.ɵfac = function ProductReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductReportComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProductReportComponent,
      selectors: [["app-product-report"]],
      decls: 8,
      vars: 5,
      consts: [["dt2", ""], ["styleClass", "p-3"], ["pTemplate", "left"], ["pTemplate", "right"], ["styleClass", "mt-2"], ["class", "grid", 4, "ngIf"], [3, "value", "closable", "valueChange", 4, "ngIf"], [4, "ngIf"], [3, "onHide", "onSubmit", "visible", "selectionMode"], ["label", "Select Product", "severity", "warning", "size", "small", "icon", "pi pi-list", "styleClass", "ml-2", 3, "onClick"], [1, "mr-2"], ["styleClass", "p-inputtext-sm mr-2", "dateFormat", "yy-mm-dd", "appendTo", "body", 3, "ngModelChange", "showIcon", "iconDisplay", "readonlyInput", "ngModel", "showButtonBar"], ["type", "submit", "label", "Search", "icon", "pi pi-search", "size", "small", 3, "onClick", "disabled", "loading"], [1, "grid"], [1, "col-6"], [1, "text-green-600"], [1, "p-datatable-sm", "table", "table-bordered", "text-center"], ["colspan", "4"], [3, "valueChange", "value", "closable"], [1, "flex", "mb-2"], [1, "p-input-icon-left", "mr-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Search ...", 1, "p-inputtext-sm", 3, "input", "value"], ["styleClass", "p-datatable-sm", "dataKey", "invoice_number", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} records", 3, "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions", "alwaysShowPaginator", "globalFilterFields", "filterDelay", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["width", "10%"], ["width", "30%"], ["width", "20%"], [3, "value", "severity"], [1, "pi", 3, "ngClass"]],
      template: function ProductReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-toolbar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductReportComponent_ng_template_1_Template, 1, 0, "ng-template", 2)(2, ProductReportComponent_ng_template_2_Template, 7, 12, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-card", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductReportComponent_div_4_Template, 70, 30, "div", 5)(5, ProductReportComponent_p_messages_5_Template, 1, 2, "p-messages", 6)(6, ProductReportComponent_div_6_Template, 9, 12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "products-dialog", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onHide", function ProductReportComponent_Template_products_dialog_onHide_7_listener() {
            return ctx.dialogVisible = false;
          })("onSubmit", function ProductReportComponent_Template_products_dialog_onSubmit_7_listener($event) {
            return ctx.assignSelectedProduct($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedProduct());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedProduct());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.productHistory().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.dialogVisible)("selectionMode", "single");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_messages__WEBPACK_IMPORTED_MODULE_11__.Messages, primeng_card__WEBPACK_IMPORTED_MODULE_12__.Card, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ProductsDialogComponent, primeng_tag__WEBPACK_IMPORTED_MODULE_14__.Tag, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6; \n\n  padding: 0.4rem;\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9wcm9kdWN0LXJlcG9ydC9wcm9kdWN0LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBOztFQUVFLHlCQUFBLEVBQUEsa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjsgLyogVGFibGUgYm9yZGVycyAqL1xuICBwYWRkaW5nOiAwLjRyZW07XG59XG5cblxudGFibGUgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbi8vICAgdGFibGV0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuLy8gICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 18966:
/*!******************************************************************!*\
  !*** ./src/app/reports/product-report/product-report.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductReportService: () => (/* binding */ ProductReportService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/api.service */ 22761);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/date.service */ 76723);
/* harmony import */ var src_app_services_decimal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/decimal.service */ 10146);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);







class ProductReportService {
  constructor() {
    this.dateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateService);
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient);
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService);
    this.decimalService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_decimal_service__WEBPACK_IMPORTED_MODULE_2__.DecimalService);
    this.startDate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(this.dateService.getStartOfYear());
    this.endDate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(this.dateService.getCurrentDate());
    this.selectedProduct = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null);
    this.productHistory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)([]);
    this.productHistoryLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.productHistoryTotals = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => {
      return this.productHistory().reduce((total, record) => {
        switch (record.transaction_type) {
          case 'Sale':
            if (record.include_vat) {
              total.totalSellVAT = this.decimalService.add(total.totalSellVAT, record.quantity * record.unit_price);
              total.totalQuantitySellVAT += record.quantity;
            } else {
              total.totalSell = this.decimalService.add(total.totalSell, record.quantity * record.unit_price);
              total.totalQuantitySell += record.quantity;
            }
            break;
          case 'Return':
            if (record.include_vat) {
              total.totalReturnVAT = this.decimalService.add(total.totalReturnVAT, record.quantity * record.unit_price);
              total.totalQuantityReturnVAT += record.quantity;
            } else {
              total.totalReturn = this.decimalService.add(total.totalReturn, record.quantity * record.unit_price);
              total.totalQuantityReturn += record.quantity;
            }
            break;
          case 'Purchase':
            if (record.include_vat) {
              total.totalPurchaseVAT = this.decimalService.add(total.totalPurchaseVAT, record.quantity * record.unit_price);
              total.totalQuantityPurchasesVAT += record.quantity;
            } else {
              total.totalPurchase = this.decimalService.add(total.totalPurchase, record.quantity * record.unit_price);
              total.totalQuantityPurchases += record.quantity;
            }
            break;
          case 'ADD':
            total.totalQuantityAdd += record.quantity;
            break;
          case 'REMOVE':
            total.totalQuantityRemove += record.quantity;
            break;
        }
        return total;
      }, {
        totalQuantityAdd: 0,
        totalQuantityRemove: 0,
        totalSell: 0,
        totalQuantitySell: 0,
        totalSellVAT: 0,
        totalQuantitySellVAT: 0,
        totalReturn: 0,
        totalQuantityReturn: 0,
        totalReturnVAT: 0,
        totalQuantityReturnVAT: 0,
        totalPurchase: 0,
        totalQuantityPurchases: 0,
        totalPurchaseVAT: 0,
        totalQuantityPurchasesVAT: 0
      });
    });
  }
  searchProductHistory() {
    this.productHistoryLoading.set(true);
    let criteria = {
      startDate: this.dateService.formatDate(this.startDate(), 'YYYY-MM-DD'),
      endDate: this.dateService.formatDate(this.endDate(), 'YYYY-MM-DD'),
      product_id: this.selectedProduct().product_id
    };
    this.http.post(`${this.api.host}/reports/product-history`, criteria).subscribe({
      next: res => {
        this.productHistoryLoading.set(false);
        this.productHistory.set(res);
      },
      error: error => {
        this.productHistoryLoading.set(false);
        this.notificationService.showError(error.error, 'home');
      }
    });
  }
  static {
    this.ɵfac = function ProductReportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductReportService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ProductReportService,
      factory: ProductReportService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 99638:
/*!****************************************************************!*\
  !*** ./src/app/reports/report-dates/report-dates.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportDatesComponent: () => (/* binding */ ReportDatesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/date.service */ 76723);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 49136);









function ReportDatesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-calendar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReportDatesComponent_ng_template_1_Template_p_calendar_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.startDate, $event) || (ctx_r1.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelect", function ReportDatesComponent_ng_template_1_Template_p_calendar_onSelect_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.startDateChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showIcon", true)("readonlyInput", true);
  }
}
function ReportDatesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function ReportDatesComponent_ng_template_2_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectToday());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function ReportDatesComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectThisMonth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function ReportDatesComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectThisYear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", "small");
  }
}
function ReportDatesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "End Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-calendar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReportDatesComponent_ng_template_3_Template_p_calendar_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.endDate, $event) || (ctx_r1.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelect", function ReportDatesComponent_ng_template_3_Template_p_calendar_onSelect_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.endDateChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showIcon", true)("readonlyInput", true);
  }
}
class ReportDatesComponent {
  constructor(reportsService, dateService) {
    this.reportsService = reportsService;
    this.dateService = dateService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.reportsService.startDate.subscribe(res => {
      this.startDate = res;
    }));
    this.subscriptions.add(this.reportsService.endDate.subscribe(res => {
      this.endDate = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  startDateChanged() {
    this.reportsService.startDate.next(this.dateService.formatDate(this.startDate));
    this.reportsService.init_reports();
  }
  endDateChanged() {
    this.reportsService.endDate.next(this.dateService.formatDate(this.endDate));
    this.reportsService.init_reports();
  }
  // select today
  selectToday() {
    this.reportsService.startDate.next(this.dateService.getCurrentDate());
    this.reportsService.endDate.next(this.dateService.getCurrentDate());
    this.reportsService.init_reports();
  }
  // this month
  selectThisMonth() {
    this.reportsService.startDate.next(this.dateService.getStartOfCurrentMonth());
    this.reportsService.endDate.next(this.dateService.getEndOfCurrentMonth());
    this.reportsService.init_reports();
  }
  // this year
  selectThisYear() {
    this.reportsService.startDate.next(this.dateService.getStartOfYear());
    this.reportsService.endDate.next(this.dateService.getEndOfYear());
    this.reportsService.init_reports();
  }
  static {
    this.ɵfac = function ReportDatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportDatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ReportDatesComponent,
      selectors: [["report-dates"]],
      decls: 4,
      vars: 0,
      consts: [["styleClass", "p-3"], ["pTemplate", "left"], ["pTemplate", "center"], ["pTemplate", "right"], [1, "mr-2"], ["styleClass", "p-inputtext-sm", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "onSelect", "ngModel", "showIcon", "readonlyInput"], ["label", "Today", "severity", "secondary", 3, "onClick", "size"], ["styleClass", "mx-2", "label", "This Month", "severity", "secondary", 3, "onClick", "size"], ["label", "This Year", "severity", "secondary", 3, "onClick", "size"]],
      template: function ReportDatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-toolbar", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ReportDatesComponent_ng_template_1_Template, 3, 3, "ng-template", 1)(2, ReportDatesComponent_ng_template_2_Template, 3, 3, "ng-template", 2)(3, ReportDatesComponent_ng_template_3_Template, 3, 3, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_7__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 83896:
/*!****************************************************************!*\
  !*** ./src/app/reports/reports-home/reports-home.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsHomeComponent: () => (/* binding */ ReportsHomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-nav/side-nav.component */ 9440);





class ReportsHomeComponent {
  constructor(reportsService) {
    this.reportsService = reportsService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    this.customersStatus = [];
    this.SuppliersStatus = [];
  }
  ngOnInit() {
    this.reportsService.init_reports();
    this.emptyReportMessage = [{
      severity: 'info',
      detail: 'No reports for this section!'
    }];
    this.subscriptions.add(this.reportsService.totalSales.subscribe(res => {
      this.totalSales = res;
    }));
    // this.subscriptions.add(
    //     this.reportsService.inventoryValue.subscribe(
    //         (res) => (this.inventoryValue = res)
    //     )
    // );
    this.subscriptions.add(this.reportsService.payables.subscribe(res => this.payables = res));
    this.subscriptions.add(this.reportsService.receivables.subscribe(res => this.receivables = res));
    // this.subscriptions.add(
    //     this.reportsService.totalSalesRevenue.subscribe(
    //         (res) => (this.salesRevenue = res)
    //     )
    // );
    this.subscriptions.add(this.reportsService.customersStatus.subscribe(res => this.customersStatus = res));
    this.subscriptions.add(this.reportsService.suppliersStatus.subscribe(res => this.SuppliersStatus = res));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ReportsHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportsHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ReportsHomeComponent,
      selectors: [["app-reports-home"]],
      decls: 5,
      vars: 0,
      consts: [[1, "grid", "m-0"], [1, "col-2", "p-0"], [1, "col-10"]],
      template: function ReportsHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "side-nav");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__.SideNavComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 31943:
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsModule: () => (/* binding */ ReportsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _reports_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.routes */ 99537);
/* harmony import */ var _reports_home_reports_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports-home/reports-home.component */ 83896);
/* harmony import */ var _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-dates/report-dates.component */ 99638);
/* harmony import */ var _revenue_revenue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revenue/revenue.component */ 50612);
/* harmony import */ var _inventory_status_inventory_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-status/inventory-status.component */ 70216);
/* harmony import */ var _trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trial-balance/trial-balance.component */ 80944);
/* harmony import */ var _general_ledger_general_ledger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-ledger/general-ledger.component */ 38090);
/* harmony import */ var _statements_statements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statements/statements.component */ 35330);
/* harmony import */ var _top_sales_top_sales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-sales/top-sales.component */ 66200);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side-nav/side-nav.component */ 9440);
/* harmony import */ var _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./balance-sheet/balance-sheet.component */ 39304);
/* harmony import */ var _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/products-dialog/products-dialog.component */ 44089);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/sidebar */ 97196);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/menu */ 23673);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/inputswitch */ 46764);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/slider */ 47763);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/pipes/lira.pipe */ 62298);
/* harmony import */ var _general_statements_general_statements_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-statements/general-statements.component */ 58376);
/* harmony import */ var _auxiliary_statements_auxiliary_statements_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auxiliary-statements/auxiliary-statements.component */ 49800);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var _product_report_product_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-report/product-report.component */ 56050);
/* harmony import */ var _customers_totals_customers_totals_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customers-totals/customers-totals.component */ 62224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);



// Components












//PrimenNG Modules


















//Others







class ReportsModule {
  static {
    this.ɵfac = function ReportsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
      type: ReportsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _reports_routes__WEBPACK_IMPORTED_MODULE_0__.ReportsRoutingModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__.ToolbarModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_21__.CalendarModule, primeng_panel__WEBPACK_IMPORTED_MODULE_22__.PanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_23__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_24__.ToastModule, primeng_messages__WEBPACK_IMPORTED_MODULE_25__.MessagesModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_26__.SidebarModule, primeng_menu__WEBPACK_IMPORTED_MODULE_27__.MenuModule, primeng_card__WEBPACK_IMPORTED_MODULE_28__.CardModule, primeng_chart__WEBPACK_IMPORTED_MODULE_29__.ChartModule, primeng_divider__WEBPACK_IMPORTED_MODULE_30__.DividerModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__.DropdownModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_32__.InputSwitchModule, primeng_slider__WEBPACK_IMPORTED_MODULE_33__.SliderModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_34__.SelectButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_35__.CheckboxModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_36__.InputTextModule, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ProductsDialogComponent, primeng_tag__WEBPACK_IMPORTED_MODULE_37__.TagModule, primeng_button__WEBPACK_IMPORTED_MODULE_38__.ButtonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](ReportsModule, {
    declarations: [_reports_home_reports_home_component__WEBPACK_IMPORTED_MODULE_1__.ReportsHomeComponent, _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__.SideNavComponent, _top_sales_top_sales_component__WEBPACK_IMPORTED_MODULE_8__.TopSalesComponent, _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_2__.ReportDatesComponent, _revenue_revenue_component__WEBPACK_IMPORTED_MODULE_3__.RevenueComponent, _inventory_status_inventory_status_component__WEBPACK_IMPORTED_MODULE_4__.InventoryStatusComponent, _trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_5__.TrialBalanceComponent, _general_ledger_general_ledger_component__WEBPACK_IMPORTED_MODULE_6__.GeneralLedgerComponent, _statements_statements_component__WEBPACK_IMPORTED_MODULE_7__.StatementsComponent, _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_10__.BalanceSheetComponent, _general_statements_general_statements_component__WEBPACK_IMPORTED_MODULE_13__.GeneralStatementsComponent, _auxiliary_statements_auxiliary_statements_component__WEBPACK_IMPORTED_MODULE_14__.AuxiliaryStatementsComponent, _product_report_product_report_component__WEBPACK_IMPORTED_MODULE_15__.ProductReportComponent, _customers_totals_customers_totals_component__WEBPACK_IMPORTED_MODULE_16__.CustomersTotalsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _reports_routes__WEBPACK_IMPORTED_MODULE_0__.ReportsRoutingModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__.ToolbarModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_21__.CalendarModule, primeng_panel__WEBPACK_IMPORTED_MODULE_22__.PanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_23__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_24__.ToastModule, primeng_messages__WEBPACK_IMPORTED_MODULE_25__.MessagesModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_26__.SidebarModule, primeng_menu__WEBPACK_IMPORTED_MODULE_27__.MenuModule, primeng_card__WEBPACK_IMPORTED_MODULE_28__.CardModule, primeng_chart__WEBPACK_IMPORTED_MODULE_29__.ChartModule, primeng_divider__WEBPACK_IMPORTED_MODULE_30__.DividerModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__.DropdownModule, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_12__.LiraPipe, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_32__.InputSwitchModule, primeng_slider__WEBPACK_IMPORTED_MODULE_33__.SliderModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_34__.SelectButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_35__.CheckboxModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_36__.InputTextModule, _components_products_dialog_products_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ProductsDialogComponent, primeng_tag__WEBPACK_IMPORTED_MODULE_37__.TagModule, primeng_button__WEBPACK_IMPORTED_MODULE_38__.ButtonModule]
  });
})();

/***/ }),

/***/ 99537:
/*!*******************************************!*\
  !*** ./src/app/reports/reports.routes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsRoutingModule: () => (/* binding */ ReportsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _reports_home_reports_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-home/reports-home.component */ 83896);
/* harmony import */ var _top_sales_top_sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-sales/top-sales.component */ 66200);
/* harmony import */ var _revenue_revenue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revenue/revenue.component */ 50612);
/* harmony import */ var _inventory_status_inventory_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-status/inventory-status.component */ 70216);
/* harmony import */ var _trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trial-balance/trial-balance.component */ 80944);
/* harmony import */ var _general_ledger_general_ledger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-ledger/general-ledger.component */ 38090);
/* harmony import */ var _statements_statements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statements/statements.component */ 35330);
/* harmony import */ var _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./balance-sheet/balance-sheet.component */ 39304);
/* harmony import */ var _general_statements_general_statements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-statements/general-statements.component */ 58376);
/* harmony import */ var _auxiliary_statements_auxiliary_statements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auxiliary-statements/auxiliary-statements.component */ 49800);
/* harmony import */ var _product_report_product_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-report/product-report.component */ 56050);
/* harmony import */ var _customers_totals_customers_totals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customers-totals/customers-totals.component */ 62224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);















const routes = [{
  path: '',
  component: _reports_home_reports_home_component__WEBPACK_IMPORTED_MODULE_0__.ReportsHomeComponent,
  children: [{
    path: 'revenue',
    data: {
      breadcrumb: 'Revenue'
    },
    component: _revenue_revenue_component__WEBPACK_IMPORTED_MODULE_2__.RevenueComponent
  }, {
    path: 'product-report',
    data: {
      breadcrumb: 'Product Report'
    },
    component: _product_report_product_report_component__WEBPACK_IMPORTED_MODULE_10__.ProductReportComponent
  }, {
    path: 'top-sales',
    data: {
      breadcrumb: 'Top Sales'
    },
    component: _top_sales_top_sales_component__WEBPACK_IMPORTED_MODULE_1__.TopSalesComponent
  }, {
    path: 'customers-totals',
    data: {
      breadcrumb: 'Customers Totals'
    },
    component: _customers_totals_customers_totals_component__WEBPACK_IMPORTED_MODULE_11__.CustomersTotalsComponent
  }, {
    path: 'inventory-status',
    data: {
      breadcrumb: 'Inventory Status'
    },
    component: _inventory_status_inventory_status_component__WEBPACK_IMPORTED_MODULE_3__.InventoryStatusComponent
  }, {
    path: 'trial-balance',
    data: {
      breadcrumb: 'Trial Balance'
    },
    component: _trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_4__.TrialBalanceComponent
  }, {
    path: 'general-ledger',
    data: {
      breadcrumb: 'General Ledger'
    },
    component: _general_ledger_general_ledger_component__WEBPACK_IMPORTED_MODULE_5__.GeneralLedgerComponent
  }, {
    path: 'account-ledger',
    data: {
      breadcrumb: 'Account Ledger'
    },
    component: _statements_statements_component__WEBPACK_IMPORTED_MODULE_6__.StatementsComponent
  }, {
    path: 'balance-sheet',
    data: {
      breadcrumb: 'Balance Sheet'
    },
    component: _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_7__.BalanceSheetComponent
  }, {
    path: 'statement-of-accounts',
    data: {
      breadcrumb: 'General Ledger Statements'
    },
    component: _general_statements_general_statements_component__WEBPACK_IMPORTED_MODULE_8__.GeneralStatementsComponent
  }, {
    path: 'auxiliary-statements',
    data: {
      breadcrumb: 'Auxiliary Statements'
    },
    component: _auxiliary_statements_auxiliary_statements_component__WEBPACK_IMPORTED_MODULE_9__.AuxiliaryStatementsComponent
  }, {
    path: '**',
    redirectTo: '/reports/revenue'
  }]
}];
class ReportsRoutingModule {
  static {
    this.ɵfac = function ReportsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: ReportsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ReportsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 82432:
/*!********************************************!*\
  !*** ./src/app/reports/reports.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsService: () => (/* binding */ ReportsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/date.service */ 76723);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ 22761);








class ReportsService {
  constructor(http, notificationService, api) {
    this.http = http;
    this.notificationService = notificationService;
    this.api = api;
    this.dateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateService);
    this.host = this.api.host;
    this.startDate = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(moment__WEBPACK_IMPORTED_MODULE_0__().clone().startOf('month').format('YYYY-MM-DD'));
    this.endDate = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD'));
    this.topCategories = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.topItems = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.totalSales = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this.inventoryValue = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this.costOfGodsSold = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this.totalSalesRevenue = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this.payables = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.receivables = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.customersTotalPurchases = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)([]);
    this.customersPaymentsTotals = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.suppliersPurchasesTotals = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.suppliersPaymentsTotals = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.customersStatus = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.suppliersStatus = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.trialBalance = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.AuxilaryDetails = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.trialBalanceLoading = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.generalLedgerTotals = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.generalLedger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.selectedPartnerAccount = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.selectedLedgerAccount = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null);
    this.accountLedger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.balanceSheet = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null);
    this.loadingBalanceSheet = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.selectedAccountForStatement = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.statementOfAccounts = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.currencyOptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([{
      label: 'USD',
      value: 'USD'
    }, {
      label: 'L.L',
      value: 'LBP'
    }]);
    this.currencyValue = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('USD');
    // get trial balance auxiliary details
    this.auxiliaryStatementsLoading = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    // new reports
    this.selectedLinkId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null);
    this.revenue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)({});
    this.loadingRevenue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    // returns
    this.returns = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)({});
    this.loadingReturns = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    // this.init_reports();
  }
  init_reports() {
    this.getTopCategories();
    this.getTopItems();
    this.getInventoryValue();
    // this.getTrialBalance();
    this.getGeneralLedgerTotals();
    this.getGeneralLedger();
    // this.getAuxilaryDetails();
    this.getAccountLedger();
    // the balance sheet has its own "as of" date, so it is not part of the
    // shared start/end date refresh - the page fetches it itself
    this.getStatementOfAccounts();
    this.getCustomersTotalPurchases();
    this.getRevenue();
    this.getReturns();
  }
  getTopCategories() {
    this.http.get(`${this.host}/reports/categories/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.topCategories.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getTopItems(customer_id = null) {
    this.http.get(`${this.host}/reports/items/${this.startDate.value}&${this.endDate.value}&${customer_id}`).subscribe({
      next: res => {
        this.topItems.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getTotalSales() {
    this.http.get(`${this.host}/reports/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.totalSales.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getInventoryValue() {
    this.http.get(`${this.host}/reports/inventory_value`).subscribe({
      next: res => {
        this.inventoryValue.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getCostOfGoodsSold() {
    this.http.get(`${this.host}/reports/cost_of_goods_sold/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.costOfGodsSold.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getSalesRevenue() {
    this.http.get(`${this.host}/reports/total_sales_revenue/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.totalSalesRevenue.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getPayables() {
    this.http.get(`${this.host}/reports/payables`).subscribe({
      next: res => {
        this.payables.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getReceivables() {
    this.http.get(`${this.host}/reports/receivables`).subscribe({
      next: res => {
        this.receivables.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getCustomersTotalPurchases() {
    this.http.get(`${this.host}/reports/customers/purchases/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.customersTotalPurchases.set(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getCustomersPaymentsTotals() {
    this.http.get(`${this.host}/reports/customers/payments/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.customersPaymentsTotals.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getSuppliersPurchasesTotals() {
    this.http.get(`${this.host}/reports/suppliers/purchases/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.suppliersPurchasesTotals.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getSuppliersPaymentsTotals() {
    this.http.get(`${this.host}/reports/suppliers/payments/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.suppliersPaymentsTotals.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getCustomersStatus() {
    this.http.get(`${this.host}/reports/customers/status/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.customersStatus.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getSuppliersStatus() {
    this.http.get(`${this.host}/reports/suppliers/status/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.suppliersStatus.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  // trial balance
  getTrialBalance(options) {
    this.trialBalanceLoading.next(true);
    this.http.post(`${this.host}/reports/trial_balance`, options).subscribe({
      next: res => {
        this.trialBalance.next(res);
        this.trialBalanceLoading.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
        this.trialBalanceLoading.next(false);
      }
    });
  }
  getAuxilaryDetails(options) {
    this.auxiliaryStatementsLoading.next(true);
    this.http.get(`${this.host}/reports/trial_balance_auxilary/${options.startDate}&${options.endDate}&${options.showZero}&${options.onlyAuxiliary}`).subscribe({
      next: res => {
        this.AuxilaryDetails.next(res);
        this.auxiliaryStatementsLoading.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
        this.auxiliaryStatementsLoading.next(false);
      }
    });
  }
  getGeneralLedgerTotals() {
    this.http.get(`${this.host}/reports/general_ledger_totals/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.generalLedgerTotals.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getGeneralLedger() {
    this.http.get(`${this.host}/reports/general_ledger/${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.generalLedger.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  getAccountLedger() {
    if (!this.selectedPartnerAccount.value) return;
    let selectedAccount = this.selectedPartnerAccount.value;
    this.http.get(`${this.host}/auxiliary/account_ledger/${selectedAccount.account_id}&${this.selectedLedgerAccount()}&${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.accountLedger.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  // get statement of accounts
  getStatementOfAccounts() {
    if (!this.selectedAccountForStatement.value) return;
    let selectedAccount = this.selectedAccountForStatement.value;
    this.http.get(`${this.host}/reports/statement/${selectedAccount.id}&${this.startDate.value}&${this.endDate.value}`).subscribe({
      next: res => {
        this.statementOfAccounts.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'reports');
      }
    });
  }
  /**
   * The balance sheet is a point-in-time statement: it takes a single "as of"
   * date and the server accumulates every posted entry up to it.
   */
  getBalanceSheet(asOf, showZero = false) {
    this.loadingBalanceSheet.set(true);
    const date = this.dateService.formatDate(asOf, 'YYYY-MM-DD');
    this.api.get(`reports/balance_sheet/${date}&${showZero}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.loadingBalanceSheet.set(false);
    })).subscribe({
      next: data => {
        this.balanceSheet.set(data);
      },
      // ApiService.handleError already reports the failure
      error: () => {
        this.balanceSheet.set(null);
      }
    });
  }
  // get revenue
  getRevenue(startDate = this.startDate.value, endDate = this.endDate.value) {
    this.loadingRevenue.set(true);
    startDate = this.dateService.formatDate(startDate, 'YYYY-MM-DD');
    endDate = this.dateService.formatDate(endDate, 'YYYY-MM-DD');
    this.api.get(`reports/revenue/${startDate}&${endDate}&${this.selectedLinkId()}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.loadingRevenue.set(false);
    })).subscribe({
      next: data => {
        this.revenue.set(data);
        console.log(data);
      }
    });
  }
  // get revenue
  getReturns(startDate = this.startDate.value, endDate = this.endDate.value) {
    this.loadingReturns.set(true);
    startDate = this.dateService.formatDate(startDate, 'YYYY-MM-DD');
    endDate = this.dateService.formatDate(endDate, 'YYYY-MM-DD');
    this.api.get(`reports/returns/${startDate}&${endDate}&${this.selectedLinkId()}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.loadingReturns.set(false);
    })).subscribe({
      next: data => {
        this.returns.set(data);
        console.log(data);
      }
    });
  }
  static {
    this.ɵfac = function ReportsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ReportsService,
      factory: ReportsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 50612:
/*!******************************************************!*\
  !*** ./src/app/reports/revenue/revenue.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RevenueComponent: () => (/* binding */ RevenueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var src_app_components_links_component_links_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/links-component/links.service */ 54659);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report-dates/report-dates.component */ 99638);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);








class RevenueComponent {
  constructor() {
    this.reportsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService);
    this.linksService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_components_links_component_links_service__WEBPACK_IMPORTED_MODULE_1__.LinksService);
    this.links = this.linksService.links;
    this.loadingLinks = this.linksService.loadingLinks;
    this.selectedLinkId = this.reportsService.selectedLinkId;
    // revenue
    this.revenue = this.reportsService.revenue;
    this.loadingRevenue = this.reportsService.loadingRevenue;
    // returns
    this.returns = this.reportsService.returns;
    this.loadingReturns = this.reportsService.loadingReturns;
    this.getData();
  }
  getData() {
    this.reportsService.getRevenue();
    this.reportsService.getReturns();
  }
  static {
    this.ɵfac = function RevenueComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RevenueComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RevenueComponent,
      selectors: [["revenue"]],
      decls: 112,
      vars: 27,
      consts: [[1, "grid"], [1, "col-12"], [1, "col-3", "col-offset-4"], [1, "flex", "flex-column", "gap-2"], ["styleClass", "p-inputtext-sm", "appendTo", "body", "optionLabel", "description", "optionValue", "link_id", "placeholder", "Filter By Link", "filterBy", "description", 3, "ngModelChange", "ngModel", "options", "loading", "filter", "showClear", "autoOptionFocus"], [1, "text-primary", "m-0", "mb-2"], [1, "pi", "pi-shopping-cart", "mr-2"], [1, "col-3"], [1, "surface-card", "shadow-2", "p-3", "border-round"], [1, "flex", "justify-content-between", "mb-3"], [1, "block", "text-500", "font-medium", "mb-1"], [1, "block", "text-400", "text-xs", "mb-2"], [1, "text-primary", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-primary-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-shopping-cart", "text-primary", "text-xl"], [1, "text-pink-500", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-pink-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-box", "text-pink-500", "text-xl"], [1, "text-green-500", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-chart-line", "text-green-500", "text-xl"], [1, "col-12", "mt-4"], [1, "text-orange-500", "m-0", "mb-2"], [1, "pi", "pi-replay", "mr-2"], [1, "text-bluegray-500", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-bluegray-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-replay", "text-bluegray-500", "text-xl"], [1, "text-teal-500", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-teal-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-box", "text-teal-500", "text-xl"], [1, "text-orange-500", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-arrow-down", "text-orange-500", "text-xl"], [1, "text-green-600", "m-0", "mb-2"], [1, "pi", "pi-wallet", "mr-2"], [1, "col-6"], [1, "surface-card", "shadow-2", "p-4", "border-round", "border-2", "border-green-500"], [1, "flex", "justify-content-between"], [1, "block", "text-600", "font-semibold", "mb-1", "text-lg"], [1, "block", "text-400", "text-sm", "mb-3"], [1, "text-green-600", "font-bold", "text-3xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 2, "width", "3.5rem", "height", "3.5rem"], [1, "pi", "pi-wallet", "text-green-600", "text-2xl"]],
      template: function RevenueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "report-dates");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Filter By Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p-dropdown", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RevenueComponent_Template_p_dropdown_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedLinkId, $event) || (ctx.selectedLinkId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RevenueComponent_Template_p_dropdown_ngModelChange_8_listener() {
            return ctx.getData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1)(10, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Sales Summary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "div", 9)(16, "div")(17, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Total Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Money received from customers");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 7)(27, "div", 8)(28, "div", 9)(29, "div")(30, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Cost of Goods");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "What you paid for products sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 7)(40, "div", 8)(41, "div", 9)(42, "div")(43, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Gross Profit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Sales minus cost of goods");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 21)(53, "h4", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Returns Summary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 7)(57, "div", 8)(58, "div", 9)(59, "div")(60, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Total Returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Money refunded to customers");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 7)(70, "div", 8)(71, "div", 9)(72, "div")(73, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Cost Recovered");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Cost of items returned to stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 7)(83, "div", 8)(84, "div", 9)(85, "div")(86, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Loss from Returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Net loss due to returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](92, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 21)(96, "h4", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Final Result ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 35)(100, "div", 36)(101, "div", 37)(102, "div")(103, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Final Net Profit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Gross Profit minus Loss from Returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](109, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedLinkId);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.links())("loading", ctx.loadingLinks())("filter", true)("showClear", true)("autoOptionFocus", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 13, ctx.revenue().totalSale || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 15, ctx.revenue().totalCost || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 17, ctx.revenue().grossProfit || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 19, ctx.returns().totalReturn || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 21, ctx.returns().totalCost || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](92, 23, ctx.returns().grossReturn || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](109, 25, (ctx.revenue().grossProfit || 0) - (ctx.returns().grossReturn || 0)), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__.Dropdown, _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_2__.ReportDatesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9440:
/*!********************************************************!*\
  !*** ./src/app/reports/side-nav/side-nav.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideNavComponent: () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/menu */ 23673);


class SideNavComponent {
  constructor() {
    this.menuItems = [{
      label: 'Analytics',
      items: [{
        label: 'Revenue',
        icon: 'pi pi-chart-line',
        routerLink: '/reports/revenue'
      }, {
        label: 'Product Report',
        icon: 'pi pi-list-check',
        routerLink: '/reports/product-report'
      }, {
        label: 'Top Sales',
        icon: 'far fa-star fa-lg',
        routerLink: '/reports/top-sales'
      }, {
        label: 'Customers Sales',
        icon: 'pi pi-users',
        routerLink: '/reports/customers-totals'
      }]
    },
    // {
    //     label: 'Top Sales',
    //     icon: 'pi pi-tag',
    //     routerLink: '/reports/top-sales'
    // },
    {
      label: 'Stock',
      items: [{
        label: 'Inventory Status',
        icon: 'fa fa-warehouse fa-lg',
        routerLink: '/reports/inventory-status'
      }]
    }, {
      label: 'Accounting',
      icon: 'pi pi-chart-line',
      items: [{
        label: 'Balance Sheet',
        icon: 'fas fa-clipboard-list fa-lg',
        routerLink: '/reports/balance-sheet'
      }, {
        label: 'Trial Balance',
        icon: 'fa fa-scale-balanced fa-lg',
        routerLink: '/reports/trial-balance'
      }, {
        label: 'General Ledger',
        icon: 'fa fa-book fa-lg',
        routerLink: '/reports/general-ledger'
      }, {
        label: 'Statements (auxiliary)',
        icon: 'fa fa-file-invoice-dollar fa-lg',
        routerLink: '/reports/account-ledger'
      }, {
        label: 'General Ledger Statements',
        icon: 'fa fa-clipboard-list fa-lg',
        routerLink: '/reports/statement-of-accounts'
      }, {
        label: 'Auxiliary Statements',
        icon: 'fa fa-users fa-lg',
        routerLink: '/reports/auxiliary-statements'
      }]
    }];
  }
  static {
    this.ɵfac = function SideNavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SideNavComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideNavComponent,
      selectors: [["side-nav"]],
      decls: 2,
      vars: 1,
      consts: [[1, "full-height"], ["styleClass", "w-full", 3, "model"]],
      template: function SideNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-menu", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.menuItems);
        }
      },
      dependencies: [primeng_menu__WEBPACK_IMPORTED_MODULE_1__.Menu],
      styles: [".full-height[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 82vh;\n  background-color: white;\n}\n\n[_nghost-%COMP%]  .p-menu {\n  border-radius: 0 !important;\n  border: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSwyQkFBQTtFQUNBLG9CQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mdWxsLWhlaWdodCB7XG4gICAgLy8gaGVpZ2h0OiA4M3ZoO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA4MnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdDo6bmctZGVlcCAucC1tZW51IHtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gd2lkdGg6IDEwZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 35330:
/*!************************************************************!*\
  !*** ./src/app/reports/statements/statements.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatementsComponent: () => (/* binding */ StatementsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/accounting/auxiliary.service */ 53591);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/date.service */ 76723);
/* harmony import */ var src_app_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/print.service */ 5312);
/* harmony import */ var src_app_accounting_accounting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/accounting/accounting.service */ 39512);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/pipes/lira.pipe */ 62298);


















const _c0 = a0 => ({
  "text-red-600": a0
});
function StatementsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selectedOption_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", selectedOption_r1.account_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", selectedOption_r1.english_name, " ");
  }
}
function StatementsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const account_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](account_r2.account_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](account_r2.english_name);
  }
}
function StatementsComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StatementsComponent_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.printStatement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StatementsComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function StatementsComponent_ng_template_30_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, item_r5.debit));
  }
}
function StatementsComponent_ng_template_30_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, item_r5.debit_lbp));
  }
}
function StatementsComponent_ng_template_30_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, item_r5.credit));
  }
}
function StatementsComponent_ng_template_30_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, item_r5.credit_lbp));
  }
}
function StatementsComponent_ng_template_30_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r3.balances[i_r6]), " ");
  }
}
function StatementsComponent_ng_template_30_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r3.balances_lbp[i_r6]), " ");
  }
}
function StatementsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, StatementsComponent_ng_template_30_span_8_Template, 3, 3, "span", 25)(9, StatementsComponent_ng_template_30_span_9_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, StatementsComponent_ng_template_30_span_11_Template, 3, 3, "span", 25)(12, StatementsComponent_ng_template_30_span_12_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, StatementsComponent_ng_template_30_span_14_Template, 3, 3, "span", 25)(15, StatementsComponent_ng_template_30_span_15_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r5.journal_date || "Before " + ctx_r3.startDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r5.journal_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r5.journal_description || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c0, ctx_r3.balances[i_r6] < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.currencyValue === "LBP");
  }
}
function StatementsComponent_ng_template_31_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r3.balances[ctx_r3.balances.length - 1]), " ");
  }
}
function StatementsComponent_ng_template_31_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r3.balances_lbp[ctx_r3.balances.length - 1]), " ");
  }
}
function StatementsComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Balance Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, StatementsComponent_ng_template_31_span_5_Template, 3, 3, "span", 25)(6, StatementsComponent_ng_template_31_span_6_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r3.balances[ctx_r3.balances.length - 1] < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.currencyValue === "LBP" && ctx_r3.data.length > 0);
  }
}
class StatementsComponent {
  constructor(reportsService, auxiliaryService, dateService, printService, accountingService) {
    this.reportsService = reportsService;
    this.auxiliaryService = auxiliaryService;
    this.dateService = dateService;
    this.printService = printService;
    this.accountingService = accountingService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.selectedLedgerAccount = this.reportsService.selectedLedgerAccount;
    this.balances = [];
    this.balances_lbp = [];
    this.show_dollar = true;
  }
  ngOnInit() {
    this.subscriptions.add(this.accountingService.chartOfAccounts.subscribe(res => {
      this.chartOfAccounts = res;
    }));
    this.subscriptions.add(this.reportsService.currencyOptions.subscribe(res => {
      this.currencyOptions = res;
    }));
    this.subscriptions.add(this.reportsService.currencyValue.subscribe(res => {
      this.currencyValue = res;
    }));
    this.subscriptions.add(this.auxiliaryService.accounts.subscribe(accounts => {
      this.accounts = accounts;
    }));
    this.subscriptions.add(this.reportsService.accountLedger.subscribe(data => {
      this.data = data;
      if (data.length > 0) {
        this.balances = [];
        this.balances_lbp = [];
        this.balances[0] = parseFloat(data[0].balance);
        this.balances_lbp[0] = parseFloat(data[0].debit_lbp) - parseFloat(data[0].credit_lbp);
        for (let i = 1; i < data.length; i++) {
          this.balances[i] = this.balances[i - 1] + parseFloat(data[i].debit) - parseFloat(data[i].credit);
          this.balances_lbp[i] = this.balances_lbp[i - 1] + parseFloat(data[i].debit_lbp) - parseFloat(data[i].credit_lbp);
        }
      } else {
        this.balances = [];
        this.balances_lbp = [];
      }
    }));
    this.subscriptions.add(this.reportsService.startDate.subscribe(res => {
      this.startDate = res;
    }));
    this.subscriptions.add(this.reportsService.endDate.subscribe(res => {
      this.endDate = res;
    }));
    this.subscriptions.add(this.reportsService.selectedPartnerAccount.subscribe(res => {
      this.selectedAccount = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  startDateChanged() {
    this.reportsService.startDate.next(this.dateService.formatDate(this.startDate));
    this.reportsService.init_reports();
  }
  endDateChanged() {
    this.reportsService.endDate.next(this.dateService.formatDate(this.endDate));
    this.reportsService.init_reports();
  }
  accountChanged() {
    if (this.selectedAccount) {
      this.reportsService.selectedPartnerAccount.next(this.selectedAccount);
      this.reportsService.init_reports();
    } else {
      this.reportsService.selectedPartnerAccount.next(null);
      this.reportsService.accountLedger.next([]);
    }
  }
  changeCurrency(event) {
    this.reportsService.currencyValue.next(event.value);
  }
  printStatement() {
    let dataToPrint = [this.data, this.balances, this.balances_lbp, this.startDate, this.endDate, this.selectedAccount];
    this.printService.printStatement(dataToPrint);
  }
  static {
    this.ɵfac = function StatementsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StatementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_1__.AuxiliaryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_print_service__WEBPACK_IMPORTED_MODULE_3__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_accounting_accounting_service__WEBPACK_IMPORTED_MODULE_4__.AccountingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: StatementsComponent,
      selectors: [["app-statements"]],
      decls: 32,
      vars: 23,
      consts: [[1, "grid"], [1, "col-12"], [1, "col-3"], [1, "mr-2"], ["styleClass", "p-inputtext-sm", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "onSelect", "ngModel", "showIcon", "readonlyInput"], ["styleClass", "w-full", "optionLabel", "name", "placeholder", "Select Account", 3, "ngModelChange", "onChange", "autoOptionFocus", "options", "ngModel", "showClear", "filter"], ["id", "account", "appendTo", "body", "styleClass", "ml-2 w-full", "optionLabel", "account_number", "optionValue", "id", "placeholder", "Ledger Account", "filterBy", "account_number", 3, "ngModelChange", "onChange", "ngModel", "options", "filter", "showClear", "autoOptionFocus", "virtualScroll", "virtualScrollItemSize"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [1, "col-3", "text-right"], ["styleClass", "p-2"], [1, "p-toolbar-group-start"], [1, "m-0"], [1, "p-toolbar-group-center"], ["pButton", "", "pRipple", "", "severity", "contrast", "size", "small", "label", "Print", "icon", "pi pi-print", 3, "click", 4, "ngIf"], [1, "p-toolbar-group-end"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "onChange", "options", "ngModel", "allowEmpty"], ["dataKey", "account_number", "styleClass", "p-datatable-sm", 1, "ledger_table", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], [1, "flex", "align-items-center", "gap-2"], ["pButton", "", "pRipple", "", "severity", "contrast", "size", "small", "label", "Print", "icon", "pi pi-print", 3, "click"], ["width", "20%"], ["width", "15%"], [4, "ngIf"], [3, "ngClass"], ["colspan", "4"]],
      template: function StatementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-card")(3, "div", 0)(4, "div", 2)(5, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Start Date:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p-calendar", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function StatementsComponent_Template_p_calendar_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.startDate, $event) || (ctx.startDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelect", function StatementsComponent_Template_p_calendar_onSelect_7_listener() {
            return ctx.startDateChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 2)(9, "p-dropdown", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function StatementsComponent_Template_p_dropdown_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedAccount, $event) || (ctx.selectedAccount = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function StatementsComponent_Template_p_dropdown_onChange_9_listener() {
            return ctx.accountChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 2)(11, "p-dropdown", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function StatementsComponent_Template_p_dropdown_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedLedgerAccount, $event) || (ctx.selectedLedgerAccount = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function StatementsComponent_Template_p_dropdown_onChange_11_listener() {
            return ctx.accountChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, StatementsComponent_ng_template_12_Template, 5, 2, "ng-template", 7)(13, StatementsComponent_ng_template_13_Template, 5, 2, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9)(15, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "End Date:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p-calendar", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function StatementsComponent_Template_p_calendar_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.endDate, $event) || (ctx.endDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelect", function StatementsComponent_Template_p_calendar_onSelect_17_listener() {
            return ctx.endDateChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 1)(19, "p-card")(20, "p-toolbar", 10)(21, "div", 11)(22, "h4", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Statements (auxiliary)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, StatementsComponent_button_25_Template, 1, 0, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 15)(27, "p-selectButton", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function StatementsComponent_Template_p_selectButton_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.currencyValue, $event) || (ctx.currencyValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function StatementsComponent_Template_p_selectButton_onChange_27_listener($event) {
            return ctx.changeCurrency($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p-table", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, StatementsComponent_ng_template_29_Template, 13, 0, "ng-template", 18)(30, StatementsComponent_ng_template_30_Template, 16, 12, "ng-template", 19)(31, StatementsComponent_ng_template_31_Template, 7, 5, "ng-template", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.startDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showIcon", true)("readonlyInput", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("autoOptionFocus", false)("options", ctx.accounts);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedAccount);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showClear", true)("filter", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedLedgerAccount);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.chartOfAccounts)("filter", true)("showClear", true)("autoOptionFocus", false)("virtualScroll", true)("virtualScrollItemSize", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.endDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showIcon", true)("readonlyInput", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.currencyOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.currencyValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("allowEmpty", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.data);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_12__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_card__WEBPACK_IMPORTED_MODULE_15__.Card, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_17__.SelectButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_5__.LiraPipe],
      styles: ["[_nghost-%COMP%]  div.p-selectbutton div.p-button {\n  padding: 0.5rem 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAgIGRpdi5wLXNlbGVjdGJ1dHRvbiBkaXYucC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 66200:
/*!**********************************************************!*\
  !*** ./src/app/reports/top-sales/top-sales.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopSalesComponent: () => (/* binding */ TopSalesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/accounting/auxiliary.service */ 53591);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report-dates/report-dates.component */ 99638);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);












const _c0 = () => [10, 15, 50, 100];
const _c1 = () => ["sku", "item_name"];
function TopSalesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Count Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Avg Cost Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Total Cost Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Total Price Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TopSalesComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r3.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r3.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r3.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, record_r3.unit_cost));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 8, record_r3.total_cost));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 10, record_r3.total_price));
  }
}
function TopSalesComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No records yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class TopSalesComponent {
  constructor(reportsService, auxiliaryService) {
    this.reportsService = reportsService;
    this.auxiliaryService = auxiliaryService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.aspectRatio = 1.3;
  }
  customerChange(customer_id) {
    this.reportsService.getTopItems(customer_id);
  }
  ngOnInit() {
    this.subscriptions.add(this.auxiliaryService.customers.subscribe(res => {
      this.customers = res;
    }));
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const secondaryColor = documentStyle.getPropertyValue('--surface-400');
    const successColor = documentStyle.getPropertyValue('--green-600');
    const primaryColor = documentStyle.getPropertyValue('--primary');
    this.subscriptions.add(this.reportsService.topCategories.subscribe(res => {
      this.topCategories = res;
      let labels = this.topCategories.map(record => record.category_name);
      let categoryData = this.topCategories.map(record => record.count);
      let yMaxAxis;
      if (categoryData.length > 0) {
        yMaxAxis = Math.max(...categoryData);
      }
      this.categoryData = {
        labels: labels,
        datasets: [{
          label: 'Categories Sold',
          data: categoryData
        }]
      };
      // categoryOptions
      this.categoryOptions = {
        cutout: '60%',
        aspectRatio: this.aspectRatio
      };
    }));
    this.subscriptions.add(this.reportsService.topItems.subscribe(res => {
      this.topItems = res;
      let labels = this.topItems.map(record => record.item_name);
      let itemsData = this.topItems.map(record => record.count);
      let yMaxAxis;
      if (itemsData.length > 0) {
        yMaxAxis = Math.max(...itemsData);
      }
      this.itemsData = {
        labels: labels,
        datasets: [{
          label: 'Top Items Sold',
          data: itemsData
        }]
      };
      // itemsOptions
      this.itemsOptions = {
        aspectRatio: this.aspectRatio
      };
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function TopSalesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TopSalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_1__.AuxiliaryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TopSalesComponent,
      selectors: [["top-sales"]],
      decls: 20,
      vars: 16,
      consts: [["tableSearch", ""], ["dt2", ""], [1, "grid"], [1, "col-12"], [1, "col-12", "md:col-12"], ["header", "Top Items Sold"], [1, "flex"], [1, "p-input-icon-left", "mr-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Search ...", "spellcheck", "false", 1, "p-inputtext-sm", 3, "input", "value"], ["styleClass", "p-inputtext-sm", "id", "customer", "appendTo", "body", "optionLabel", "name", "optionValue", "account_id", "placeholder", "Select Customer", "filterBy", "name", 3, "onChange", "options", "filter", "showClear"], ["dataKey", "item_id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} records", 1, "p-datatable-sm", "p-datatable-striped", 3, "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions", "alwaysShowPaginator", "globalFilterFields", "filterDelay"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "col-12", "md:col-6"], ["header", "Top Categories Sold"], ["type", "doughnut", 3, "data", "options"], ["colspan", "6"]],
      template: function TopSalesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "report-dates");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4)(4, "p-panel", 5)(5, "div", 6)(6, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 9, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function TopSalesComponent_Template_input_input_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const dt2_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](dt2_r2.filterGlobal($event.target.value, "contains"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-dropdown", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function TopSalesComponent_Template_p_dropdown_onChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.customerChange($event.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p-table", 11, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TopSalesComponent_ng_template_14_Template, 13, 0, "ng-template", 12)(15, TopSalesComponent_ng_template_15_Template, 16, 12, "ng-template", 13)(16, TopSalesComponent_ng_template_16_Template, 3, 0, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15)(18, "p-panel", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "p-chart", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const dt2_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dt2_r2.filters["global"] == null ? null : dt2_r2.filters["global"].value);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.customers)("filter", true)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.topItems)("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0))("alwaysShowPaginator", false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c1))("filterDelay", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.categoryData)("options", ctx.categoryOptions);
        }
      },
      dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.Panel, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, primeng_chart__WEBPACK_IMPORTED_MODULE_8__.UIChart, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, _report_dates_report_dates_component__WEBPACK_IMPORTED_MODULE_2__.ReportDatesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 80944:
/*!******************************************************************!*\
  !*** ./src/app/reports/trial-balance/trial-balance.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrialBalanceComponent: () => (/* binding */ TrialBalanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_services_decimal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/decimal.service */ 10146);
/* harmony import */ var src_app_print_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/print.service */ 5312);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reports.service */ 82432);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/date.service */ 76723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/lira.pipe */ 62298);



















const _c0 = (a0, a1) => ({
  "text-300": a0,
  "font-bold": a1
});
function TrialBalanceComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function TrialBalanceComponent_ng_template_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "div", 15)(3, "div", 16)(4, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "p-calendar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 15)(9, "div", 16)(10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "p-calendar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 15)(15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "p-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Show zero accounts?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "p-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Show auxiliary accounts?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.trialBalanceForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showIcon", true)("iconDisplay", "input")("readonlyInput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showIcon", true)("iconDisplay", "input")("readonlyInput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
  }
}
function TrialBalanceComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Opening Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "End Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function TrialBalanceComponent_ng_template_16_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 32);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const item_r4 = ctx_r2.$implicit;
    const expanded_r5 = ctx_r2.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](expanded_r5 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pRowToggler", item_r4);
  }
}
function TrialBalanceComponent_ng_template_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.initial_debit == 0, item_r4.initial_debit != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.initial_debit), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.initial_debit_lbp == 0, item_r4.initial_debit_lbp != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.initial_debit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.initial_credit == 0, item_r4.initial_credit != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.initial_credit), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.initial_credit_lbp == 0, item_r4.initial_credit_lbp != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.initial_credit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.period_debit == 0, item_r4.period_debit != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.period_debit), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.period_debit_lbp == 0, item_r4.period_debit_lbp != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.period_debit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.period_credit == 0, item_r4.period_credit != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.period_credit), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.period_credit_lbp == 0, item_r4.period_credit_lbp != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.period_credit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.end_debit == 0, item_r4.end_debit != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.end_debit), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.end_debit_lbp == 0, item_r4.end_debit_lbp != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.end_debit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.end_credit == 0, item_r4.end_credit != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.end_credit), " ");
  }
}
function TrialBalanceComponent_ng_template_16_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, item_r4.end_credit_lbp == 0, item_r4.end_credit_lbp != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r4.end_credit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TrialBalanceComponent_ng_template_16_i_2_Template, 1, 3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TrialBalanceComponent_ng_template_16_span_6_Template, 3, 7, "span", 31)(7, TrialBalanceComponent_ng_template_16_span_7_Template, 3, 7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TrialBalanceComponent_ng_template_16_span_9_Template, 3, 7, "span", 31)(10, TrialBalanceComponent_ng_template_16_span_10_Template, 3, 7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, TrialBalanceComponent_ng_template_16_span_12_Template, 3, 7, "span", 31)(13, TrialBalanceComponent_ng_template_16_span_13_Template, 3, 7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TrialBalanceComponent_ng_template_16_span_15_Template, 3, 7, "span", 31)(16, TrialBalanceComponent_ng_template_16_span_16_Template, 3, 7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TrialBalanceComponent_ng_template_16_span_18_Template, 3, 7, "span", 31)(19, TrialBalanceComponent_ng_template_16_span_19_Template, 3, 7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TrialBalanceComponent_ng_template_16_span_21_Template, 3, 7, "span", 31)(22, TrialBalanceComponent_ng_template_16_span_22_Template, 3, 7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.expandableRows[item_r4.id] && ctx_r1.details.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", item_r4.account_number, " - ", item_r4.english_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.initial_debit), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.initial_debit_lbp), "");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.initial_credit), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.initial_credit_lbp), "");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.period_debit), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.period_debit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.period_credit), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.period_credit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.end_debit), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.end_debit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.end_credit), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auxilary_record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, auxilary_record_r6.end_credit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_17_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 35)(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TrialBalanceComponent_ng_template_17_tr_0_span_4_Template, 3, 3, "span", 37)(5, TrialBalanceComponent_ng_template_17_tr_0_span_5_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrialBalanceComponent_ng_template_17_tr_0_span_7_Template, 3, 3, "span", 37)(8, TrialBalanceComponent_ng_template_17_tr_0_span_8_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, TrialBalanceComponent_ng_template_17_tr_0_span_10_Template, 3, 3, "span", 37)(11, TrialBalanceComponent_ng_template_17_tr_0_span_11_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TrialBalanceComponent_ng_template_17_tr_0_span_13_Template, 3, 3, "span", 37)(14, TrialBalanceComponent_ng_template_17_tr_0_span_14_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, TrialBalanceComponent_ng_template_17_tr_0_span_16_Template, 3, 3, "span", 37)(17, TrialBalanceComponent_ng_template_17_tr_0_span_17_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, TrialBalanceComponent_ng_template_17_tr_0_span_19_Template, 3, 3, "span", 37)(20, TrialBalanceComponent_ng_template_17_tr_0_span_20_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const auxilary_record_r6 = ctx.$implicit;
    const account_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", account_r7.account_number, "/", auxilary_record_r6.partner_id_fk, " ", auxilary_record_r6.partner_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
  }
}
function TrialBalanceComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrialBalanceComponent_ng_template_17_tr_0_Template, 21, 15, "tr", 34);
  }
  if (rf & 2) {
    const account_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getAccountDetails(account_r7));
  }
}
function TrialBalanceComponent_ng_template_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.initial_debit), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.initial_debit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.initial_credit), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.initial_credit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.period_debit), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.period_debit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.period_credit), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.period_credit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.end_debit), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.end_debit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.end_credit), " ");
  }
}
function TrialBalanceComponent_ng_template_18_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.totals.end_credit_lbp), " ");
  }
}
function TrialBalanceComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 38)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TrialBalanceComponent_ng_template_18_span_5_Template, 3, 3, "span", 37)(6, TrialBalanceComponent_ng_template_18_span_6_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TrialBalanceComponent_ng_template_18_span_8_Template, 3, 3, "span", 37)(9, TrialBalanceComponent_ng_template_18_span_9_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TrialBalanceComponent_ng_template_18_span_11_Template, 3, 3, "span", 37)(12, TrialBalanceComponent_ng_template_18_span_12_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TrialBalanceComponent_ng_template_18_span_14_Template, 3, 3, "span", 37)(15, TrialBalanceComponent_ng_template_18_span_15_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TrialBalanceComponent_ng_template_18_span_17_Template, 3, 3, "span", 37)(18, TrialBalanceComponent_ng_template_18_span_18_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, TrialBalanceComponent_ng_template_18_span_20_Template, 3, 3, "span", 37)(21, TrialBalanceComponent_ng_template_18_span_21_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currencyValue === "LBP");
  }
}
class TrialBalanceComponent {
  constructor(reportsService, fb, dateService) {
    this.reportsService = reportsService;
    this.fb = fb;
    this.dateService = dateService;
    this.decimalService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_decimal_service__WEBPACK_IMPORTED_MODULE_0__.DecimalService);
    this.printService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_print_service__WEBPACK_IMPORTED_MODULE_1__.PrintService);
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.show_dollar = true;
    this.details = [];
    this.expandableRows = [];
    this.trialBalanceForm = this.fb.group({
      startDate: [this.dateService.getStartOfCurrentMonth(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      endDate: [this.dateService.getCurrentDate(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      showZero: [false],
      showAuxiliary: [false],
      onlyAuxiliary: [false]
    });
  }
  get showAuxiliary() {
    return this.trialBalanceForm.get('showAuxiliary');
  }
  ngOnInit() {
    this.subscriptions.add(this.reportsService.currencyOptions.subscribe(res => {
      this.currencyOptions = res;
    }));
    this.subscriptions.add(this.reportsService.currencyValue.subscribe(res => {
      this.currencyValue = res;
    }));
    this.subscriptions.add(this.reportsService.trialBalanceLoading.subscribe(res => {
      this.trialBalanceLoading = res;
    }));
    this.subscriptions.add(this.reportsService.trialBalance.subscribe(data => {
      this.data = data;
      this.totals = {
        initial_debit: 0,
        initial_credit: 0,
        period_debit: 0,
        period_credit: 0,
        end_debit: 0,
        end_credit: 0,
        initial_debit_lbp: 0,
        initial_credit_lbp: 0,
        period_debit_lbp: 0,
        period_credit_lbp: 0,
        end_debit_lbp: 0,
        end_credit_lbp: 0
      };
      for (let i = 0; i < data.length; i++) {
        this.totals.initial_debit = this.decimalService.add(this.totals.initial_debit, data[i].initial_debit);
        this.totals.initial_credit = this.decimalService.add(this.totals.initial_credit, data[i].initial_credit);
        this.totals.period_debit = this.decimalService.add(this.totals.period_debit, data[i].period_debit);
        this.totals.period_credit = this.decimalService.add(this.totals.period_credit, data[i].period_credit);
        this.totals.end_debit = this.decimalService.add(this.totals.end_debit, data[i].end_debit);
        this.totals.end_credit = this.decimalService.add(this.totals.end_credit, data[i].end_credit);
        this.totals.initial_debit_lbp = this.decimalService.add(this.totals.initial_debit_lbp, data[i].initial_debit_lbp);
        this.totals.initial_credit_lbp = this.decimalService.add(this.totals.initial_credit_lbp, data[i].initial_credit_lbp);
        this.totals.period_debit_lbp = this.decimalService.add(this.totals.period_debit_lbp, data[i].period_debit_lbp);
        this.totals.period_credit_lbp += parseFloat(data[i].period_credit_lbp);
        this.totals.period_credit_lbp = this.decimalService.add(this.totals.period_credit_lbp, data[i].period_credit_lbp);
        this.totals.end_debit_lbp = this.decimalService.add(this.totals.end_debit_lbp, data[i].end_debit_lbp);
        this.totals.end_credit_lbp = this.decimalService.add(this.totals.end_credit_lbp, data[i].end_credit_lbp);
      }
    }));
    this.subscriptions.add(this.reportsService.AuxilaryDetails.subscribe(data => {
      this.details = data;
      data.forEach(item => {
        this.expandableRows[item.account_id_fk] = true;
      });
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  getAccountDetails(account) {
    return this.details.filter(item => {
      return item.account_id_fk === account.id;
    });
  }
  changeCurrency(event) {
    this.reportsService.currencyValue.next(event.value);
  }
  submitForm() {
    if (this.trialBalanceForm.valid) {
      this.reportsService.trialBalance.next([]);
      this.reportsService.AuxilaryDetails.next([]);
      this.trialBalanceForm.patchValue({
        startDate: this.dateService.formatDate(this.trialBalanceForm.value.startDate),
        endDate: this.dateService.formatDate(this.trialBalanceForm.value.endDate)
      });
      this.reportsService.getTrialBalance(this.trialBalanceForm.value);
      if (this.trialBalanceForm.value.showAuxiliary) {
        this.reportsService.getAuxilaryDetails(this.trialBalanceForm.value);
      }
    }
  }
  printTrialBalance() {
    let dataToPrint = [this.data, this.currencyValue, this.trialBalanceForm.value.startDate, this.trialBalanceForm.value.endDate, this.totals];
    console.log(dataToPrint);
    this.printService.printTrialBalance(dataToPrint);
  }
  static {
    this.ɵfac = function TrialBalanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TrialBalanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_3__.DateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: TrialBalanceComponent,
      selectors: [["app-trial-balance"]],
      decls: 19,
      vars: 6,
      consts: [[1, "grid"], [1, "col-12"], ["pTemplate", "body"], ["styleClass", "p-2"], [1, "p-toolbar-group-start"], [1, "m-0"], [1, "p-toolbar-group-center"], ["severity", "contrast", "size", "small", "label", "Print", "icon", "pi pi-print", 3, "onClick"], [1, "p-toolbar-group-end"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "onChange", "options", "ngModel", "allowEmpty"], ["dataKey", "id", "styleClass", "p-datatable-sm", "scrollHeight", "400px", 3, "value", "scrollable", "loading"], ["pTemplate", "header"], ["pTemplate", "rowexpansion"], ["pTemplate", "footer"], [3, "ngSubmit", "formGroup"], [1, "col-3"], [1, "field", "grid"], [1, "col-fixed", 2, "width", "50px"], [1, "col"], ["styleClass", "p-inputtext-sm", "formControlName", "startDate", "dateFormat", "yy-mm-dd", 3, "showIcon", "iconDisplay", "readonlyInput"], ["styleClass", "p-inputtext-sm", "formControlName", "endDate", "dateFormat", "yy-mm-dd", 3, "showIcon", "iconDisplay", "readonlyInput"], [1, "field-checkbox"], ["formControlName", "showZero", "inputId", "zero", 3, "binary"], ["for", "zero"], ["formControlName", "showAuxiliary", "inputId", "auxiliary", 3, "binary"], ["for", "auxiliary"], ["pButton", "", "pRipple", "", "label", "Submit"], ["width", "5%", "rowspan", "2"], ["width", "20%", "rowspan", "2"], ["width", "25%", "colspan", "2"], ["style", "cursor: pointer", 3, "class", "pRowToggler", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [2, "cursor", "pointer", 3, "pRowToggler"], [3, "ngClass"], ["class", "trial_expanded_row", 4, "ngFor", "ngForOf"], [1, "trial_expanded_row"], ["colspan", "2"], [4, "ngIf"], [1, "trial_footer"]],
      template: function TrialBalanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TrialBalanceComponent_ng_template_3_Template, 25, 9, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1)(5, "p-card")(6, "p-toolbar", 3)(7, "div", 4)(8, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Trial Balance");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6)(11, "p-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function TrialBalanceComponent_Template_p_button_onClick_11_listener() {
            return ctx.printTrialBalance();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8)(13, "p-selectButton", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function TrialBalanceComponent_Template_p_selectButton_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.currencyValue, $event) || (ctx.currencyValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChange", function TrialBalanceComponent_Template_p_selectButton_onChange_13_listener($event) {
            return ctx.changeCurrency($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p-table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TrialBalanceComponent_ng_template_15_Template, 23, 0, "ng-template", 11)(16, TrialBalanceComponent_ng_template_16_Template, 23, 15, "ng-template", 2)(17, TrialBalanceComponent_ng_template_17_Template, 1, 1, "ng-template", 12)(18, TrialBalanceComponent_ng_template_18_Template, 22, 12, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.currencyOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.currencyValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("allowEmpty", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.data)("scrollable", true)("loading", ctx.trialBalanceLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.RowToggler, primeng_card__WEBPACK_IMPORTED_MODULE_14__.Card, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_15__.SelectButton, primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.Checkbox, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_4__.LiraPipe],
      styles: [".trial_footer[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.trial_expanded_row[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy90cmlhbC1iYWxhbmNlL3RyaWFsLWJhbGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UseUJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAudHJpYWxfZm9vdGVyIHRke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50cmlhbF9leHBhbmRlZF9yb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 97196:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-sidebar.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar),
/* harmony export */   SidebarModule: () => (/* binding */ SidebarModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);












const _c0 = ["*"];
const _c1 = (a0, a1, a2, a3, a4, a5) => ({
  "p-sidebar": true,
  "p-sidebar-active": a0,
  "p-sidebar-left": a1,
  "p-sidebar-right": a2,
  "p-sidebar-top": a3,
  "p-sidebar-bottom": a4,
  "p-sidebar-full": a5
});
const _c2 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
const _c3 = a0 => ({
  value: "visible",
  params: a0
});
function Sidebar_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Sidebar_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Sidebar_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headlessTemplate);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Sidebar_div_0_ng_template_3_button_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-sidebar-close-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "closeicon");
  }
}
function Sidebar_div_0_ng_template_3_button_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function Sidebar_div_0_ng_template_3_button_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Sidebar_div_0_ng_template_3_button_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Sidebar_div_0_ng_template_3_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Sidebar_div_0_ng_template_3_button_2_span_2_1_Template, 1, 0, null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "closeicon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function Sidebar_div_0_ng_template_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Sidebar_div_0_ng_template_3_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close($event));
    })("keydown.enter", function Sidebar_div_0_ng_template_3_button_2_Template_button_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Sidebar_div_0_ng_template_3_button_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 11)(2, Sidebar_div_0_ng_template_3_button_2_span_2_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaCloseLabel)("data-pc-section", "closebutton")("data-pc-group-section", "iconcontainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closeIconTemplate);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Sidebar_div_0_ng_template_3_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function Sidebar_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Sidebar_div_0_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 5)(2, Sidebar_div_0_ng_template_3_button_2_Template, 3, 5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Sidebar_div_0_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Sidebar_div_0_ng_template_3_ng_container_6_Template, 3, 2, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showCloseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.footerTemplate);
  }
}
function Sidebar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@panelState.start", function Sidebar_div_0_Template_div_animation_panelState_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationStart($event));
    })("@panelState.done", function Sidebar_div_0_Template_div_animation_panelState_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationEnd($event));
    })("keydown", function Sidebar_div_0_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Sidebar_div_0_ng_container_2_Template, 2, 1, "ng-container", 4)(3, Sidebar_div_0_ng_template_3_Template, 7, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notHeadless_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](9, _c1, ctx_r1.visible, ctx_r1.position === "left" && !ctx_r1.fullScreen, ctx_r1.position === "right" && !ctx_r1.fullScreen, ctx_r1.position === "top" && !ctx_r1.fullScreen, ctx_r1.position === "bottom" && !ctx_r1.fullScreen, ctx_r1.fullScreen))("@panelState", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c2, ctx_r1.transformOptions, ctx_r1.transitionOptions)))("ngStyle", ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "sidebar")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headlessTemplate)("ngIfElse", notHeadless_r4);
  }
}
const showAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}')]);
const hideAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
/**
 * Sidebar is a panel component displayed as an overlay at the edges of the screen.
 * @group Components
 */
class Sidebar {
  document;
  el;
  renderer;
  cd;
  config;
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Whether to block scrolling of the document when sidebar is active.
   * @group Props
   */
  blockScroll = false;
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
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
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
   * Whether an overlay mask is displayed behind the sidebar.
   * @group Props
   */
  modal = true;
  /**
   * Whether to dismiss sidebar on click of the mask.
   * @group Props
   */
  dismissible = true;
  /**
   * Whether to display the close icon.
   * @group Props
   */
  showCloseIcon = true;
  /**
   * Specifies if pressing escape key should hide the sidebar.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(val) {
    this._visible = val;
  }
  /**
   * Specifies the position of the sidebar, valid values are "left", "right", "bottom" and "top".
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case 'left':
        this.transformOptions = 'translate3d(-100%, 0px, 0px)';
        break;
      case 'right':
        this.transformOptions = 'translate3d(100%, 0px, 0px)';
        break;
      case 'bottom':
        this.transformOptions = 'translate3d(0px, 100%, 0px)';
        break;
      case 'top':
        this.transformOptions = 'translate3d(0px, -100%, 0px)';
        break;
    }
  }
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  get fullScreen() {
    return this._fullScreen;
  }
  set fullScreen(value) {
    this._fullScreen = value;
    if (value) this.transformOptions = 'none';
  }
  templates;
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when dialog visibility is changed.
   * @param {boolean} value - Visible value.
   * @group Emits
   */
  visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  initialized;
  _visible;
  _position = 'left';
  _fullScreen = false;
  container;
  transformOptions = 'translate3d(-100%, 0px, 0px)';
  mask;
  maskClickListener;
  documentEscapeListener;
  animationEndListener;
  contentTemplate;
  headerTemplate;
  footerTemplate;
  closeIconTemplate;
  headlessTemplate;
  constructor(document, el, renderer, cd, config) {
    this.document = document;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
  }
  ngAfterViewInit() {
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'content':
          this.contentTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'closeicon':
          this.closeIconTemplate = item.template;
          break;
        case 'headless':
          this.headlessTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  onKeyDown(event) {
    if (event.code === 'Escape') {
      this.hide(false);
    }
  }
  show() {
    if (this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.container, this.baseZIndex || this.config.zIndex.modal);
    }
    if (this.modal) {
      this.enableModality();
    }
    this.onShow.emit({});
    this.visibleChange.emit(true);
  }
  hide(emit = true) {
    if (emit) {
      this.onHide.emit({});
    }
    if (this.modal) {
      this.disableModality();
    }
  }
  close(event) {
    this.hide(false);
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    const activeDrawers = this.document.querySelectorAll('.p-sidebar-active');
    const activeDrawersLength = activeDrawers.length;
    const zIndex = activeDrawersLength == 1 ? String(parseInt(this.container.style.zIndex) - 1) : String(parseInt(activeDrawers[0].style.zIndex) - 1);
    if (!this.mask) {
      this.mask = this.renderer.createElement('div');
      this.renderer.setStyle(this.mask, 'zIndex', zIndex);
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addMultipleClasses(this.mask, 'p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter');
      if (this.dismissible) {
        this.maskClickListener = this.renderer.listen(this.mask, 'click', event => {
          if (this.dismissible) {
            this.close(event);
          }
        });
      }
      this.renderer.appendChild(this.document.body, this.mask);
      if (this.blockScroll) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.blockBodyScroll();
      }
    }
  }
  disableModality() {
    if (this.mask) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.mask, 'p-component-overlay-leave');
      this.animationEndListener = this.renderer.listen(this.mask, 'animationend', this.destroyModal.bind(this));
    }
  }
  destroyModal() {
    this.unbindMaskClickListener();
    if (this.mask) {
      this.renderer.removeChild(this.document.body, this.mask);
    }
    if (this.blockScroll) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.mask = null;
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.container = event.element;
        this.appendContainer();
        this.show();
        if (this.closeOnEscape) {
          this.bindDocumentEscapeListener();
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        this.hide(true);
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
        this.unbindGlobalListeners();
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === 'body') this.renderer.appendChild(this.document.body, this.container);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.container, this.appendTo);
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
    this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', event => {
      if (event.which == 27) {
        if (parseInt(this.container.style.zIndex) === primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.get(this.container)) {
          this.close(event);
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindGlobalListeners() {
    this.unbindMaskClickListener();
    this.unbindDocumentEscapeListener();
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  ngOnDestroy() {
    this.initialized = false;
    if (this.visible && this.modal) {
      this.destroyModal();
    }
    if (this.appendTo && this.container) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
    if (this.container && this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
    }
    this.container = null;
    this.unbindGlobalListeners();
    this.unbindAnimationEndListener();
  }
  static ɵfac = function Sidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Sidebar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Sidebar,
    selectors: [["p-sidebar"]],
    contentQueries: function Sidebar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      appendTo: "appendTo",
      blockScroll: [2, "blockScroll", "blockScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaCloseLabel: "ariaCloseLabel",
      autoZIndex: [2, "autoZIndex", "autoZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      modal: [2, "modal", "modal", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      dismissible: [2, "dismissible", "dismissible", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showCloseIcon: [2, "showCloseIcon", "showCloseIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      transitionOptions: "transitionOptions",
      visible: "visible",
      position: "position",
      fullScreen: "fullScreen"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["notHeadless", ""], ["role", "complementary", 3, "ngClass", "ngStyle", "class", "keydown", 4, "ngIf"], ["role", "complementary", 3, "keydown", "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], [1, "p-sidebar-header"], ["type", "button", "class", "p-sidebar-close p-sidebar-icon p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], [1, "p-sidebar-content"], [4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-sidebar-close", "p-sidebar-icon", "p-link", 3, "click", "keydown.enter"], [3, "styleClass", 4, "ngIf"], ["class", "p-sidebar-close-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-sidebar-close-icon"], [1, "p-sidebar-footer"]],
    template: function Sidebar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Sidebar_div_0_Template, 5, 21, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon],
    styles: ["@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}\n"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('panelState', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(hideAnimation)])])]
    },
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sidebar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-sidebar',
      template: `
        <div
            #container
            [ngClass]="{
                'p-sidebar': true,
                'p-sidebar-active': visible,
                'p-sidebar-left': position === 'left' && !fullScreen,
                'p-sidebar-right': position === 'right' && !fullScreen,
                'p-sidebar-top': position === 'top' && !fullScreen,
                'p-sidebar-bottom': position === 'bottom' && !fullScreen,
                'p-sidebar-full': fullScreen
            }"
            *ngIf="visible"
            [@panelState]="{ value: 'visible', params: { transform: transformOptions, transition: transitionOptions } }"
            (@panelState.start)="onAnimationStart($event)"
            (@panelState.done)="onAnimationEnd($event)"
            [ngStyle]="style"
            [class]="styleClass"
            role="complementary"
            [attr.data-pc-name]="'sidebar'"
            [attr.data-pc-section]="'root'"
            (keydown)="onKeyDown($event)"
        >
            <ng-container *ngIf="headlessTemplate; else notHeadless">
                <ng-container *ngTemplateOutlet="headlessTemplate"></ng-container>
            </ng-container>
            <ng-template #notHeadless>
                <div class="p-sidebar-header" [attr.data-pc-section]="'header'">
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <button
                        type="button"
                        class="p-sidebar-close p-sidebar-icon p-link"
                        (click)="close($event)"
                        (keydown.enter)="close($event)"
                        [attr.aria-label]="ariaCloseLabel"
                        *ngIf="showCloseIcon"
                        pRipple
                        [attr.data-pc-section]="'closebutton'"
                        [attr.data-pc-group-section]="'iconcontainer'"
                    >
                        <TimesIcon *ngIf="!closeIconTemplate" [styleClass]="'p-sidebar-close-icon'" [attr.data-pc-section]="'closeicon'" />
                        <span *ngIf="closeIconTemplate" class="p-sidebar-close-icon" [attr.data-pc-section]="'closeicon'">
                            <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                        </span>
                    </button>
                </div>
                <div class="p-sidebar-content" [attr.data-pc-section]="'content'">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <ng-container *ngIf="footerTemplate">
                    <div class="p-sidebar-footer" [attr.data-pc-section]="'footer'">
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                    </div>
                </ng-container>
            </ng-template>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('panelState', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(hideAnimation)])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig
  }], {
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    blockScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaCloseLabel: [{
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
    modal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    dismissible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showCloseIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    closeOnEscape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fullScreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate]
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class SidebarModule {
  static ɵfac = function SidebarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SidebarModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: SidebarModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon],
      exports: [Sidebar, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule],
      declarations: [Sidebar]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 47763:
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-slider.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SLIDER_VALUE_ACCESSOR: () => (/* binding */ SLIDER_VALUE_ACCESSOR),
/* harmony export */   Slider: () => (/* binding */ Slider),
/* harmony export */   SliderModule: () => (/* binding */ SliderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/autofocus */ 17159);








const _c0 = ["sliderHandle"];
const _c1 = ["sliderHandleStart"];
const _c2 = ["sliderHandleEnd"];
const _c3 = (a0, a1, a2, a3) => ({
  "p-slider p-component": true,
  "p-disabled": a0,
  "p-slider-horizontal": a1,
  "p-slider-vertical": a2,
  "p-slider-animate": a3
});
const _c4 = (a0, a1) => ({
  left: a0,
  width: a1
});
const _c5 = (a0, a1) => ({
  bottom: a0,
  height: a1
});
const _c6 = a0 => ({
  height: a0
});
const _c7 = a0 => ({
  width: a0
});
const _c8 = (a0, a1) => ({
  left: a0,
  bottom: a1
});
const _c9 = a0 => ({
  "p-slider-handle-active": a0
});
function Slider_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, ctx_r0.offset !== null && ctx_r0.offset !== undefined ? ctx_r0.offset + "%" : ctx_r0.handleValues[0] + "%", ctx_r0.diff ? ctx_r0.diff + "%" : ctx_r0.handleValues[1] - ctx_r0.handleValues[0] + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "range");
  }
}
function Slider_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c5, ctx_r0.offset !== null && ctx_r0.offset !== undefined ? ctx_r0.offset + "%" : ctx_r0.handleValues[0] + "%", ctx_r0.diff ? ctx_r0.diff + "%" : ctx_r0.handleValues[1] - ctx_r0.handleValues[0] + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "range");
  }
}
function Slider_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r0.handleValue + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "range");
  }
}
function Slider_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r0.handleValue + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "range");
  }
}
function Slider_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function Slider_span_5_Template_span_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onDragStart($event));
    })("touchmove", function Slider_span_5_Template_span_touchmove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onDrag($event));
    })("touchend", function Slider_span_5_Template_span_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onDragEnd($event));
    })("mousedown", function Slider_span_5_Template_span_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onMouseDown($event));
    })("keydown", function Slider_span_5_Template_span_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transition", ctx_r0.dragging ? "none" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c8, ctx_r0.orientation == "horizontal" ? ctx_r0.handleValue + "%" : null, ctx_r0.orientation == "vertical" ? ctx_r0.handleValue + "%" : null))("autofocus", ctx_r0.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r0.disabled ? null : ctx_r0.tabindex)("aria-valuemin", ctx_r0.min)("aria-valuenow", ctx_r0.value)("aria-valuemax", ctx_r0.max)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-label", ctx_r0.ariaLabel)("aria-orientation", ctx_r0.orientation)("data-pc-section", "handle");
  }
}
function Slider_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Slider_span_6_Template_span_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onKeyDown($event, 0));
    })("mousedown", function Slider_span_6_Template_span_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onMouseDown($event, 0));
    })("touchstart", function Slider_span_6_Template_span_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onDragStart($event, 0));
    })("touchmove", function Slider_span_6_Template_span_touchmove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onDrag($event, 0));
    })("touchend", function Slider_span_6_Template_span_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transition", ctx_r0.dragging ? "none" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c8, ctx_r0.rangeStartLeft, ctx_r0.rangeStartBottom))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c9, ctx_r0.handleIndex == 0))("autofocus", ctx_r0.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r0.disabled ? null : ctx_r0.tabindex)("aria-valuemin", ctx_r0.min)("aria-valuenow", ctx_r0.value ? ctx_r0.value[0] : null)("aria-valuemax", ctx_r0.max)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-label", ctx_r0.ariaLabel)("aria-orientation", ctx_r0.orientation)("data-pc-section", "startHandler");
  }
}
function Slider_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Slider_span_7_Template_span_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onKeyDown($event, 1));
    })("mousedown", function Slider_span_7_Template_span_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onMouseDown($event, 1));
    })("touchstart", function Slider_span_7_Template_span_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onDragStart($event, 1));
    })("touchmove", function Slider_span_7_Template_span_touchmove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onDrag($event, 1));
    })("touchend", function Slider_span_7_Template_span_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transition", ctx_r0.dragging ? "none" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c8, ctx_r0.rangeEndLeft, ctx_r0.rangeEndBottom))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c9, ctx_r0.handleIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r0.disabled ? null : ctx_r0.tabindex)("aria-valuemin", ctx_r0.min)("aria-valuenow", ctx_r0.value ? ctx_r0.value[1] : null)("aria-valuemax", ctx_r0.max)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-label", ctx_r0.ariaLabel)("aria-orientation", ctx_r0.orientation)("data-pc-section", "endHandler");
  }
}
const SLIDER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Slider),
  multi: true
};
/**
 * Slider is a component to provide input with a drag handle.
 * @group Components
 */
class Slider {
  document;
  platformId;
  el;
  renderer;
  ngZone;
  cd;
  /**
   * When enabled, displays an animation on click of the slider bar.
   * @group Props
   */
  animate;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min = 0;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max = 100;
  /**
   * Orientation of the slider.
   * @group Props
   */
  orientation = 'horizontal';
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step;
  /**
   * When specified, allows two boundary values to be picked.
   * @group Props
   */
  range;
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
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on value change.
   * @param {SliderChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when slide ended.
   * @param {SliderSlideEndEvent} event - Custom slide end event.
   * @group Emits
   */
  onSlideEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  sliderHandle;
  sliderHandleStart;
  sliderHandleEnd;
  value;
  values;
  handleValue;
  handleValues = [];
  diff;
  offset;
  bottom;
  onModelChange = () => {};
  onModelTouched = () => {};
  dragging;
  dragListener;
  mouseupListener;
  initX;
  initY;
  barWidth;
  barHeight;
  sliderHandleClick;
  handleIndex = 0;
  startHandleValue;
  startx;
  starty;
  constructor(document, platformId, el, renderer, ngZone, cd) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.cd = cd;
  }
  onMouseDown(event, index) {
    if (this.disabled) {
      return;
    }
    this.dragging = true;
    this.updateDomData();
    this.sliderHandleClick = true;
    if (this.range && this.handleValues && this.handleValues[0] === this.max) {
      this.handleIndex = 0;
    } else {
      this.handleIndex = index;
    }
    this.bindDragListeners();
    event.target.focus();
    event.preventDefault();
    if (this.animate) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.el.nativeElement.children[0], 'p-slider-animate');
    }
  }
  onDragStart(event, index) {
    if (this.disabled) {
      return;
    }
    var touchobj = event.changedTouches[0];
    this.startHandleValue = this.range ? this.handleValues[index] : this.handleValue;
    this.dragging = true;
    if (this.range && this.handleValues && this.handleValues[0] === this.max) {
      this.handleIndex = 0;
    } else {
      this.handleIndex = index;
    }
    if (this.orientation === 'horizontal') {
      this.startx = parseInt(touchobj.clientX, 10);
      this.barWidth = this.el.nativeElement.children[0].offsetWidth;
    } else {
      this.starty = parseInt(touchobj.clientY, 10);
      this.barHeight = this.el.nativeElement.children[0].offsetHeight;
    }
    if (this.animate) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.el.nativeElement.children[0], 'p-slider-animate');
    }
    event.preventDefault();
  }
  onDrag(event) {
    if (this.disabled) {
      return;
    }
    var touchobj = event.changedTouches[0],
      handleValue = 0;
    if (this.orientation === 'horizontal') {
      handleValue = Math.floor((parseInt(touchobj.clientX, 10) - this.startx) * 100 / this.barWidth) + this.startHandleValue;
    } else {
      handleValue = Math.floor((this.starty - parseInt(touchobj.clientY, 10)) * 100 / this.barHeight) + this.startHandleValue;
    }
    this.setValueFromHandle(event, handleValue);
    event.preventDefault();
  }
  onDragEnd(event) {
    if (this.disabled) {
      return;
    }
    this.dragging = false;
    if (this.range) this.onSlideEnd.emit({
      originalEvent: event,
      values: this.values
    });else this.onSlideEnd.emit({
      originalEvent: event,
      value: this.value
    });
    if (this.animate) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.el.nativeElement.children[0], 'p-slider-animate');
    }
  }
  onBarClick(event) {
    if (this.disabled) {
      return;
    }
    if (!this.sliderHandleClick) {
      this.updateDomData();
      this.handleChange(event);
      if (this.range) this.onSlideEnd.emit({
        originalEvent: event,
        values: this.values
      });else this.onSlideEnd.emit({
        originalEvent: event,
        value: this.value
      });
    }
    this.sliderHandleClick = false;
  }
  onKeyDown(event, index) {
    this.handleIndex = index;
    switch (event.code) {
      case 'ArrowDown':
      case 'ArrowLeft':
        this.decrementValue(event, index);
        event.preventDefault();
        break;
      case 'ArrowUp':
      case 'ArrowRight':
        this.incrementValue(event, index);
        event.preventDefault();
        break;
      case 'PageDown':
        this.decrementValue(event, index, true);
        event.preventDefault();
        break;
      case 'PageUp':
        this.incrementValue(event, index, true);
        event.preventDefault();
        break;
      case 'Home':
        this.updateValue(this.min, event);
        event.preventDefault();
        break;
      case 'End':
        this.updateValue(this.max, event);
        event.preventDefault();
        break;
      case 'Tab':
        this.onDragEnd(event);
        break;
      default:
        break;
    }
  }
  decrementValue(event, index, pageKey = false) {
    let newValue;
    if (this.range) {
      if (this.step) newValue = this.values[index] - this.step;else newValue = this.values[index] - 1;
    } else {
      if (this.step) newValue = this.value - this.step;else if (!this.step && pageKey) newValue = this.value - 10;else newValue = this.value - 1;
    }
    this.updateValue(newValue, event);
    event.preventDefault();
  }
  incrementValue(event, index, pageKey = false) {
    let newValue;
    if (this.range) {
      if (this.step) newValue = this.values[index] + this.step;else newValue = this.values[index] + 1;
    } else {
      if (this.step) newValue = this.value + this.step;else if (!this.step && pageKey) newValue = this.value + 10;else newValue = this.value + 1;
    }
    this.updateValue(newValue, event);
    event.preventDefault();
  }
  handleChange(event) {
    let handleValue = this.calculateHandleValue(event);
    this.setValueFromHandle(event, handleValue);
  }
  bindDragListeners() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        if (!this.dragListener) {
          this.dragListener = this.renderer.listen(documentTarget, 'mousemove', event => {
            if (this.dragging) {
              this.ngZone.run(() => {
                this.handleChange(event);
              });
            }
          });
        }
        if (!this.mouseupListener) {
          this.mouseupListener = this.renderer.listen(documentTarget, 'mouseup', event => {
            if (this.dragging) {
              this.dragging = false;
              this.ngZone.run(() => {
                if (this.range) this.onSlideEnd.emit({
                  originalEvent: event,
                  values: this.values
                });else this.onSlideEnd.emit({
                  originalEvent: event,
                  value: this.value
                });
                if (this.animate) {
                  primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.el.nativeElement.children[0], 'p-slider-animate');
                }
              });
            }
          });
        }
      });
    }
  }
  unbindDragListeners() {
    if (this.dragListener) {
      this.dragListener();
      this.dragListener = null;
    }
    if (this.mouseupListener) {
      this.mouseupListener();
      this.mouseupListener = null;
    }
  }
  setValueFromHandle(event, handleValue) {
    let newValue = this.getValueFromHandle(handleValue);
    if (this.range) {
      if (this.step) {
        this.handleStepChange(newValue, this.values[this.handleIndex]);
      } else {
        this.handleValues[this.handleIndex] = handleValue;
        this.updateValue(newValue, event);
      }
    } else {
      if (this.step) {
        this.handleStepChange(newValue, this.value);
      } else {
        this.handleValue = handleValue;
        this.updateValue(newValue, event);
      }
    }
    this.cd.markForCheck();
  }
  handleStepChange(newValue, oldValue) {
    let diff = newValue - oldValue;
    let val = oldValue;
    let _step = this.step;
    if (diff < 0) {
      val = oldValue + Math.ceil(newValue / _step - oldValue / _step) * _step;
    } else if (diff > 0) {
      val = oldValue + Math.floor(newValue / _step - oldValue / _step) * _step;
    }
    this.updateValue(val);
    this.updateHandleValue();
  }
  writeValue(value) {
    if (this.range) this.values = value || [0, 0];else this.value = value || 0;
    this.updateHandleValue();
    this.updateDiffAndOffset();
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  get rangeStartLeft() {
    if (!this.isVertical()) return this.handleValues[0] > 100 ? 100 + '%' : this.handleValues[0] + '%';
    return null;
  }
  get rangeStartBottom() {
    return this.isVertical() ? this.handleValues[0] + '%' : 'auto';
  }
  get rangeEndLeft() {
    return this.isVertical() ? null : this.handleValues[1] + '%';
  }
  get rangeEndBottom() {
    return this.isVertical() ? this.handleValues[1] + '%' : 'auto';
  }
  isVertical() {
    return this.orientation === 'vertical';
  }
  updateDomData() {
    let rect = this.el.nativeElement.children[0].getBoundingClientRect();
    this.initX = rect.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWindowScrollLeft();
    this.initY = rect.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWindowScrollTop();
    this.barWidth = this.el.nativeElement.children[0].offsetWidth;
    this.barHeight = this.el.nativeElement.children[0].offsetHeight;
  }
  calculateHandleValue(event) {
    if (this.orientation === 'horizontal') return (event.pageX - this.initX) * 100 / this.barWidth;else return (this.initY + this.barHeight - event.pageY) * 100 / this.barHeight;
  }
  updateHandleValue() {
    if (this.range) {
      this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
      this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
    } else {
      if (this.value < this.min) this.handleValue = 0;else if (this.value > this.max) this.handleValue = 100;else this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
    }
    if (this.step) {
      this.updateDiffAndOffset();
    }
  }
  updateDiffAndOffset() {
    this.diff = this.getDiff();
    this.offset = this.getOffset();
  }
  getDiff() {
    return Math.abs(this.handleValues[0] - this.handleValues[1]);
  }
  getOffset() {
    return Math.min(this.handleValues[0], this.handleValues[1]);
  }
  updateValue(val, event) {
    if (this.range) {
      let value = val;
      if (this.handleIndex == 0) {
        if (value < this.min) {
          value = this.min;
          this.handleValues[0] = 0;
        } else if (value > this.values[1]) {
          if (value > this.max) {
            value = this.max;
            this.handleValues[0] = 100;
          }
        }
        this.sliderHandleStart?.nativeElement.focus();
      } else {
        if (value > this.max) {
          value = this.max;
          this.handleValues[1] = 100;
          this.offset = this.handleValues[1];
        } else if (value < this.min) {
          value = this.min;
          this.handleValues[1] = 0;
        } else if (value < this.values[0]) {
          this.offset = this.handleValues[1];
        }
        this.sliderHandleEnd?.nativeElement.focus();
      }
      if (this.step) {
        this.updateHandleValue();
      } else {
        this.updateDiffAndOffset();
      }
      this.values[this.handleIndex] = this.getNormalizedValue(value);
      let newValues = [this.minVal, this.maxVal];
      this.onModelChange(newValues);
      this.onChange.emit({
        event: event,
        values: this.values
      });
    } else {
      if (val < this.min) {
        val = this.min;
        this.handleValue = 0;
      } else if (val > this.max) {
        val = this.max;
        this.handleValue = 100;
      }
      this.value = this.getNormalizedValue(val);
      this.onModelChange(this.value);
      this.onChange.emit({
        event: event,
        value: this.value
      });
      this.sliderHandle?.nativeElement.focus();
    }
    this.updateHandleValue();
  }
  getValueFromHandle(handleValue) {
    return (this.max - this.min) * (handleValue / 100) + this.min;
  }
  getDecimalsCount(value) {
    if (value && Math.floor(value) !== value) return value.toString().split('.')[1].length || 0;
    return 0;
  }
  getNormalizedValue(val) {
    let decimalsCount = this.getDecimalsCount(this.step);
    if (decimalsCount > 0) {
      return +parseFloat(val.toString()).toFixed(decimalsCount);
    } else {
      return Math.floor(val);
    }
  }
  ngOnDestroy() {
    this.unbindDragListeners();
  }
  get minVal() {
    return Math.min(this.values[1], this.values[0]);
  }
  get maxVal() {
    return Math.max(this.values[1], this.values[0]);
  }
  static ɵfac = function Slider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Slider)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Slider,
    selectors: [["p-slider"]],
    viewQuery: function Slider_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderHandleStart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderHandleEnd = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      animate: [2, "animate", "animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      min: [2, "min", "min", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      max: [2, "max", "max", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      orientation: "orientation",
      step: [2, "step", "step", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      range: [2, "range", "range", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      tabindex: [2, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      autofocus: [2, "autofocus", "autofocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onSlideEnd: "onSlideEnd"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    decls: 8,
    vars: 18,
    consts: [["sliderHandle", ""], ["sliderHandleStart", ""], ["sliderHandleEnd", ""], [3, "click", "ngStyle", "ngClass"], ["class", "p-slider-range", 3, "ngStyle", 4, "ngIf"], ["class", "p-slider-handle", "role", "slider", "pAutoFocus", "", 3, "transition", "ngStyle", "autofocus", "touchstart", "touchmove", "touchend", "mousedown", "keydown", 4, "ngIf"], ["class", "p-slider-handle", "role", "slider", "pAutoFocus", "", 3, "transition", "ngStyle", "ngClass", "autofocus", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["class", "p-slider-handle", "role", "slider", 3, "transition", "ngStyle", "ngClass", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], [1, "p-slider-range", 3, "ngStyle"], ["role", "slider", "pAutoFocus", "", 1, "p-slider-handle", 3, "touchstart", "touchmove", "touchend", "mousedown", "keydown", "ngStyle", "autofocus"], ["role", "slider", "pAutoFocus", "", 1, "p-slider-handle", 3, "keydown", "mousedown", "touchstart", "touchmove", "touchend", "ngStyle", "ngClass", "autofocus"], ["role", "slider", 1, "p-slider-handle", 3, "keydown", "mousedown", "touchstart", "touchmove", "touchend", "ngStyle", "ngClass"]],
    template: function Slider_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Slider_Template_div_click_0_listener($event) {
          return ctx.onBarClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Slider_span_1_Template, 1, 5, "span", 4)(2, Slider_span_2_Template, 1, 5, "span", 4)(3, Slider_span_3_Template, 1, 4, "span", 4)(4, Slider_span_4_Template, 1, 4, "span", 4)(5, Slider_span_5_Template, 2, 15, "span", 5)(6, Slider_span_6_Template, 2, 18, "span", 6)(7, Slider_span_7_Template, 2, 17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](13, _c3, ctx.disabled, ctx.orientation == "horizontal", ctx.orientation == "vertical", ctx.animate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "slider")("data-pc-section", "root");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.range && ctx.orientation == "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.range && ctx.orientation == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.range && ctx.orientation == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.range && ctx.orientation == "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.range);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_autofocus__WEBPACK_IMPORTED_MODULE_4__.AutoFocus],
    styles: ["@layer primeng{.p-slider{position:relative}.p-slider .p-slider-handle{position:absolute;cursor:grab;touch-action:none;display:block}.p-slider-range{position:absolute;display:block}.p-slider-horizontal .p-slider-range{top:0;left:0;height:100%}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Slider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-slider',
      template: `
        <div
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{ 'p-slider p-component': true, 'p-disabled': disabled, 'p-slider-horizontal': orientation == 'horizontal', 'p-slider-vertical': orientation == 'vertical', 'p-slider-animate': animate }"
            (click)="onBarClick($event)"
            [attr.data-pc-name]="'slider'"
            [attr.data-pc-section]="'root'"
        >
            <span
                *ngIf="range && orientation == 'horizontal'"
                class="p-slider-range"
                [ngStyle]="{ left: offset !== null && offset !== undefined ? offset + '%' : handleValues[0] + '%', width: diff ? diff + '%' : handleValues[1] - handleValues[0] + '%' }"
                [attr.data-pc-section]="'range'"
            ></span>
            <span
                *ngIf="range && orientation == 'vertical'"
                class="p-slider-range"
                [ngStyle]="{ bottom: offset !== null && offset !== undefined ? offset + '%' : handleValues[0] + '%', height: diff ? diff + '%' : handleValues[1] - handleValues[0] + '%' }"
                [attr.data-pc-section]="'range'"
            ></span>
            <span *ngIf="!range && orientation == 'vertical'" class="p-slider-range" [attr.data-pc-section]="'range'" [ngStyle]="{ height: handleValue + '%' }"></span>
            <span *ngIf="!range && orientation == 'horizontal'" class="p-slider-range" [attr.data-pc-section]="'range'" [ngStyle]="{ width: handleValue + '%' }"></span>
            <span
                *ngIf="!range"
                #sliderHandle
                class="p-slider-handle"
                [style.transition]="dragging ? 'none' : null"
                [ngStyle]="{ left: orientation == 'horizontal' ? handleValue + '%' : null, bottom: orientation == 'vertical' ? handleValue + '%' : null }"
                (touchstart)="onDragStart($event)"
                (touchmove)="onDrag($event)"
                (touchend)="onDragEnd($event)"
                (mousedown)="onMouseDown($event)"
                (keydown)="onKeyDown($event)"
                [attr.tabindex]="disabled ? null : tabindex"
                role="slider"
                [attr.aria-valuemin]="min"
                [attr.aria-valuenow]="value"
                [attr.aria-valuemax]="max"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.aria-orientation]="orientation"
                [attr.data-pc-section]="'handle'"
                pAutoFocus
                [autofocus]="autofocus"
            ></span>
            <span
                *ngIf="range"
                #sliderHandleStart
                [style.transition]="dragging ? 'none' : null"
                class="p-slider-handle"
                [ngStyle]="{ left: rangeStartLeft, bottom: rangeStartBottom }"
                [ngClass]="{ 'p-slider-handle-active': handleIndex == 0 }"
                (keydown)="onKeyDown($event, 0)"
                (mousedown)="onMouseDown($event, 0)"
                (touchstart)="onDragStart($event, 0)"
                (touchmove)="onDrag($event, 0)"
                (touchend)="onDragEnd($event)"
                [attr.tabindex]="disabled ? null : tabindex"
                role="slider"
                [attr.aria-valuemin]="min"
                [attr.aria-valuenow]="value ? value[0] : null"
                [attr.aria-valuemax]="max"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.aria-orientation]="orientation"
                [attr.data-pc-section]="'startHandler'"
                pAutoFocus
                [autofocus]="autofocus"
            ></span>
            <span
                *ngIf="range"
                #sliderHandleEnd
                [style.transition]="dragging ? 'none' : null"
                class="p-slider-handle"
                [ngStyle]="{ left: rangeEndLeft, bottom: rangeEndBottom }"
                [ngClass]="{ 'p-slider-handle-active': handleIndex == 1 }"
                (keydown)="onKeyDown($event, 1)"
                (mousedown)="onMouseDown($event, 1)"
                (touchstart)="onDragStart($event, 1)"
                (touchmove)="onDrag($event, 1)"
                (touchend)="onDragEnd($event)"
                [attr.tabindex]="disabled ? null : tabindex"
                role="slider"
                [attr.aria-valuemin]="min"
                [attr.aria-valuenow]="value ? value[1] : null"
                [attr.aria-valuemax]="max"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.aria-orientation]="orientation"
                [attr.data-pc-section]="'endHandler'"
            ></span>
        </div>
    `,
      providers: [SLIDER_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-slider{position:relative}.p-slider .p-slider-handle{position:absolute;cursor:grab;touch-action:none;display:block}.p-slider-range{position:absolute;display:block}.p-slider-horizontal .p-slider-range{top:0;left:0;height:100%}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    animate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    range: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSlideEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    sliderHandle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['sliderHandle']
    }],
    sliderHandleStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['sliderHandleStart']
    }],
    sliderHandleEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['sliderHandleEnd']
    }]
  });
})();
class SliderModule {
  static ɵfac = function SliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SliderModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: SliderModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_4__.AutoFocusModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_4__.AutoFocusModule],
      exports: [Slider],
      declarations: [Slider]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_reports_reports_module_ts.js.map