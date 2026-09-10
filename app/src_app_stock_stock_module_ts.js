"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["src_app_stock_stock_module_ts"],{

/***/ 58225:
/*!*************************************************************************!*\
  !*** ./src/app/components/links-component/links-component.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinksComponentComponent: () => (/* binding */ LinksComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/api.service */ 22761);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var _links_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links.service */ 54659);






















const _c0 = () => ({
  width: "30vw"
});
const _c1 = () => ({
  width: "50vw"
});
function LinksComponentComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LinksComponentComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 16)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", record_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r1.description);
  }
}
function LinksComponentComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No Records !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LinksComponentComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LinksComponentComponent_ng_template_16_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.submitLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18)(2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.linkForm);
  }
}
function LinksComponentComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function LinksComponentComponent_ng_template_17_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.linkDialogVisible.set(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function LinksComponentComponent_ng_template_17_Template_p_button_onClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.submitLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class LinksComponentComponent {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService);
    this.notification = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService);
    this.confirmation = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder);
    this.linksService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_links_service__WEBPACK_IMPORTED_MODULE_2__.LinksService);
    this.links = this.linksService.links;
    this.loadingLinks = this.linksService.loadingLinks;
    this.selectedLink = this.linksService.selectedLink;
    // dialog
    this.linkDialogVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false);
    this.linkDialogMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)('add');
    this.linkForm = this.fb.group({
      link_id: [null],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.getLinks();
  }
  getLinks() {
    this.linksService.getLinks();
  }
  openLinkDialog(mode) {
    this.linkDialogMode.set(mode);
    if (mode === 'edit') {
      this.linkForm.patchValue({
        link_id: this.selectedLink().link_id,
        description: this.selectedLink().description
      });
    }
    this.linkDialogVisible.set(true);
  }
  // submit link
  submitLink() {
    if (this.linkForm.valid) {
      if (this.linkDialogMode() === 'add') {
        this.createLink();
      } else {
        this.updateLink();
      }
    }
  }
  // create link
  createLink() {
    this.api.post(`links`, this.linkForm.value).subscribe({
      next: res => {
        this.notification.showSuccess('Link created successfully');
        this.linkDialogVisible.set(false);
        this.linkForm.reset();
        this.getLinks();
      }
    });
  }
  // update link
  updateLink() {
    this.api.put(`links/${this.selectedLink()?.link_id}`, this.linkForm.value).subscribe({
      next: res => {
        this.notification.showSuccess('Link updated successfully');
        this.linkDialogVisible.set(false);
        this.linkForm.reset();
        this.getLinks();
      }
    });
  }
  // delete link
  deleteLink() {
    this.confirmation.confirm({
      key: 'links',
      message: `Are you sure that you want to delete this link?`,
      header: 'Warning',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      defaultFocus: 'reject',
      accept: () => {
        this.api.delete(`links/${this.selectedLink()?.link_id}`).subscribe({
          next: res => {
            this.notification.showSuccess('Link deleted successfully');
            this.linkDialogVisible.set(false);
            this.linkForm.reset();
            this.getLinks();
          }
        });
      }
    });
  }
  static {
    this.ɵfac = function LinksComponentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LinksComponentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LinksComponentComponent,
      selectors: [["links-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 13,
      consts: [[1, "grid"], [1, "col-2"], ["label", "New", "icon", "pi pi-plus", "severity", "success", "size", "small", "styleClass", "w-full", 3, "onClick"], [1, "col-6"], ["label", "Refresh", "icon", "pi pi-refresh", "size", "small", 3, "onClick"], ["label", "Edit", "icon", "pi pi-pencil", "size", "small", "severity", "warning", "styleClass", "w-full", 3, "onClick", "disabled"], ["label", "Delete", "icon", "pi pi-trash", "size", "small", "severity", "danger", "styleClass", "w-full", 3, "onClick", "disabled"], [1, "col-12"], ["selectionMode", "single", "dataKey", "link_id", "styleClass", "p-datatable-sm", 3, "selectionChange", "value", "selection", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Link", "styleClass", "p-fluid", 3, "visibleChange", "onHide", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["key", "links"], [3, "pSelectableRow"], [3, "ngSubmit", "formGroup"], [1, "field", "mt-1"], ["for", "name"], ["type", "text", "pInputText", "", "formControlName", "description", "required", "", "autofocus", "", "spellcheck", "false"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick"], ["label", "Save", "icon", "pi pi-check", "severity", "success", 3, "onClick"]],
      template: function LinksComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-card")(1, "div", 0)(2, "div", 1)(3, "p-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function LinksComponentComponent_Template_p_button_onClick_3_listener() {
            return ctx.openLinkDialog("add");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "p-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function LinksComponentComponent_Template_p_button_onClick_5_listener() {
            return ctx.getLinks();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1)(7, "p-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function LinksComponentComponent_Template_p_button_onClick_7_listener() {
            return ctx.openLinkDialog("edit");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "p-button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function LinksComponentComponent_Template_p_button_onClick_9_listener() {
            return ctx.deleteLink();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "p-table", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("selectionChange", function LinksComponentComponent_Template_p_table_selectionChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedLink, $event) || (ctx.selectedLink = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LinksComponentComponent_ng_template_12_Template, 3, 0, "ng-template", 9)(13, LinksComponentComponent_ng_template_13_Template, 3, 2, "ng-template", 10)(14, LinksComponentComponent_ng_template_14_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p-dialog", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function LinksComponentComponent_Template_p_dialog_visibleChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.linkDialogVisible, $event) || (ctx.linkDialogVisible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onHide", function LinksComponentComponent_Template_p_dialog_onHide_15_listener() {
            return ctx.linkForm.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LinksComponentComponent_ng_template_16_Template, 5, 1, "ng-template", 13)(17, LinksComponentComponent_ng_template_17_Template, 2, 0, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "p-confirmDialog", 15);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.selectedLink());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.selectedLink());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.links());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("selection", ctx.selectedLink);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx.loadingLinks());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.linkDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SelectableRow, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_11__.Card, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialogModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 42999:
/*!*******************************************************************************!*\
  !*** ./src/app/components/stock-transactions/stock-transactions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockTransactionsComponent: () => (/* binding */ StockTransactionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var src_app_stock_stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/stock/stock.service */ 35427);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);












const _c0 = () => ({
  width: "75vw"
});
const _c1 = () => ({
  "1199px": "85vw",
  "575px": "95vw"
});
const _c2 = () => [10, 15, 50, 100];
const _c3 = () => ["product_name", "barcode"];
function StockTransactionsComponent_ng_template_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function StockTransactionsComponent_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 8)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p-tag", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pSelectableRow", record_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r1.transaction_notes || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r1.account_name || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r1.transaction_datetime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", record_r1.transaction_type)("severity", ctx_r1.getSeverity(record_r1.transaction_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r1.balance);
  }
}
function StockTransactionsComponent_ng_template_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No records yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function StockTransactionsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-table", 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StockTransactionsComponent_ng_template_1_ng_template_2_Template, 13, 0, "ng-template", 5)(3, StockTransactionsComponent_ng_template_1_ng_template_3_Template, 13, 8, "ng-template", 6)(4, StockTransactionsComponent_ng_template_1_ng_template_4_Template, 3, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.stockHistory())("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2))("alwaysShowPaginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c3))("filterDelay", 0);
  }
}
function StockTransactionsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function StockTransactionsComponent_ng_template_2_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class StockTransactionsComponent {
  constructor() {
    this.visible = false;
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.stockService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_stock_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService);
    this.stockHistory = this.stockService.stockHistory;
  }
  closeDialog() {
    this.visible = false;
    this.onClose.emit();
  }
  fetchProductHistory() {
    this.stockService.fetchStockHistory(this.product_id);
  }
  // get severity
  getSeverity(description) {
    switch (description) {
      case 'SALE':
        return 'primary';
      case 'SUPPLY':
        return 'success';
      case 'RETURN':
        return 'warning';
      case 'DELETE':
        return 'danger';
      case 'DISPOSE':
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
    this.ɵfac = function StockTransactionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StockTransactionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StockTransactionsComponent,
      selectors: [["stock-transactions"]],
      inputs: {
        product_id: "product_id",
        visible: "visible"
      },
      outputs: {
        onClose: "onClose"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 10,
      consts: [["dt2", ""], ["position", "top", "header", "Transaction History", "styleClass", "p-fluid", 3, "visibleChange", "onHide", "onShow", "modal", "visible", "breakpoints", "closeOnEscape", "closable", "maximizable"], ["pTemplate", "content"], ["pTemplate", "footer"], ["styleClass", "p-datatable-sm", "dataKey", "transaction_id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} records", 3, "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions", "alwaysShowPaginator", "globalFilterFields", "filterDelay"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "pSelectableRow"], [3, "value", "severity"], ["colspan", "7"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", "size", "small", 3, "onClick"]],
      template: function StockTransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dialog", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function StockTransactionsComponent_Template_p_dialog_visibleChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.visible, $event) || (ctx.visible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onHide", function StockTransactionsComponent_Template_p_dialog_onHide_0_listener() {
            return ctx.closeDialog();
          })("onShow", function StockTransactionsComponent_Template_p_dialog_onShow_0_listener() {
            return ctx.fetchProductHistory();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StockTransactionsComponent_ng_template_1_Template, 5, 10, "ng-template", 2)(2, StockTransactionsComponent_ng_template_2_Template, 1, 0, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.visible);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1))("closeOnEscape", false)("closable", true)("maximizable", true);
        }
      },
      dependencies: [primeng_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.Button, primeng_table__WEBPACK_IMPORTED_MODULE_5__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SelectableRow, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.Tag],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4135:
/*!**********************************************************!*\
  !*** ./src/app/stock/categories/categories.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesComponent: () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stock.service */ 35427);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputswitch */ 46764);
/* harmony import */ var _category_items_category_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category-items/category-items.component */ 50933);




















const _c0 = () => ({
  width: "30vw"
});
const _c1 = () => ({
  width: "50vw"
});
function CategoriesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openCategoryDialog("add"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CategoriesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openCategoryDialog("edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteSelectedCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.selectedCategory);
  }
}
function CategoriesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CategoriesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 21)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pReorderableRow", record_r4.category_index)("pSelectableRow", record_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](record_r4.category_name);
  }
}
function CategoriesComponent_category_items_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "category-items");
  }
}
function CategoriesComponent_ng_template_12_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CategoriesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CategoriesComponent_ng_template_12_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.submitCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 24)(2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CategoriesComponent_ng_template_12_small_5_Template, 2, 0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p-inputSwitch", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Show on sell page?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.categoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.category_name.invalid && (ctx_r1.category_name.dirty || ctx_r1.category_name.touched));
  }
}
function CategoriesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.categoryDialogVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.submitCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class CategoriesComponent {
  constructor(stockService, confirmationService, notificationService) {
    this.stockService = stockService;
    this.confirmationService = confirmationService;
    this.notificationService = notificationService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    // Categories form and events
    this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      category_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      show_on_sell: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false)
    });
  }
  ngOnInit() {
    this.subscriptions.add(this.stockService.categories.subscribe(res => {
      this.categories = res;
    }));
    this.subscriptions.add(this.stockService.selectedCategory.subscribe(res => {
      this.selectedCategory = res;
    }));
    this.subscriptions.add(this.stockService.categoryDialogVisible.subscribe(res => {
      this.categoryDialogVisible = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  // reorder categories method
  sortCategories() {
    this.stockService.sortCategories();
  }
  // row selection category method
  selectCategory() {
    this.stockService.selectCategory(this.selectedCategory);
    this.stockService.getFilteredItems(this.selectedCategory, 'stock');
  }
  get category_name() {
    return this.categoryForm.get('category_name');
  }
  // open category dialog
  openCategoryDialog(mode) {
    this.dialogMode = mode;
    if (this.dialogMode == 'edit') {
      this.categoryForm.patchValue({
        category_id: this.selectedCategory.category_id,
        category_name: this.selectedCategory.category_name,
        show_on_sell: this.selectedCategory.show_on_sell == 1 ? true : false
      });
    }
    this.stockService.categoryDialogVisible.next(true);
  }
  // submit category dialog
  submitCategory() {
    var _this = this;
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.dialogMode == 'add') {
        if (_this.categoryForm.valid) {
          yield _this.stockService.createCategory(_this.categoryForm.value);
        }
      } else {
        if (_this.categoryForm.valid) {
          yield _this.stockService.updateCategory(_this.categoryForm.value);
          _this.stockService.selectedCategory.next(0);
        }
      }
    })();
  }
  // delete category
  deleteSelectedCategory() {
    if (this.stockService.filteredItems.value.length != 0) {
      this.notificationService.showError('Delete all category items before proceeding!', 'categories');
    } else {
      this.confirmationService.confirm({
        key: 'deleteCategory',
        message: `Are you sure that you want to delete "${this.selectedCategory.category_name}"?`,
        header: 'Warning',
        icon: 'pi pi-exclamation-triangle',
        acceptButtonStyleClass: 'p-button-danger',
        rejectButtonStyleClass: 'p-button-secondary',
        defaultFocus: 'reject',
        accept: () => {
          this.stockService.deleteCategory(this.selectedCategory);
          this.stockService.selectedCategory.next(0);
        }
      });
    }
  }
  // reset form dialog
  resetDialog() {
    this.categoryForm.reset({
      category_name: null,
      show_on_sell: false
    });
  }
  static {
    this.ɵfac = function CategoriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_stock_service__WEBPACK_IMPORTED_MODULE_1__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CategoriesComponent,
      selectors: [["app-categories"]],
      decls: 16,
      vars: 11,
      consts: [[1, "grid", "m-1"], [1, "col-5"], ["header", "Categories"], ["styleClass", "mb-4 p-2"], ["pTemplate", "left"], ["pTemplate", "right"], ["selectionMode", "single", "dataKey", "category_id", "styleClass", "p-datatable-sm", 3, "selectionChange", "onRowReorder", "onRowSelect", "value", "selection"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "col-7"], [4, "ngIf"], ["header", "Category", "styleClass", "p-fluid", 3, "visibleChange", "onHide", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["key", "categories"], ["key", "deleteCategory"], ["pButton", "", "pRipple", "", "label", "New Category", "icon", "pi pi-plus", 1, "p-button-success", "mr-2", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "label", "Edit", "icon", "pi pi-file-edit", 1, "p-button-warning", "p-button-sm", "mr-2", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "label", "Delete", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-sm", 3, "click", "disabled"], ["width", "15%"], ["width", "85%"], [3, "pReorderableRow", "pSelectableRow"], ["pReorderableRowHandle", "", 1, "pi", "pi-bars"], [3, "ngSubmit", "formGroup"], [1, "field", "mt-1"], ["for", "name"], ["type", "text", "pInputText", "", "formControlName", "category_name", "required", "", "autofocus", "", "spellcheck", "false"], ["class", "p-error", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", "gap-2"], ["id", "showOnSell", "formControlName", "show_on_sell"], ["for", "showOnSell"], [1, "p-error"], ["pButton", "", "pRipple", "", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-success", 3, "click"]],
      template: function CategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-panel", 2)(3, "p-toolbar", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CategoriesComponent_ng_template_4_Template, 1, 0, "ng-template", 4)(5, CategoriesComponent_ng_template_5_Template, 2, 2, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p-table", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("selectionChange", function CategoriesComponent_Template_p_table_selectionChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onRowReorder", function CategoriesComponent_Template_p_table_onRowReorder_6_listener() {
            return ctx.sortCategories();
          })("onRowSelect", function CategoriesComponent_Template_p_table_onRowSelect_6_listener() {
            return ctx.selectCategory();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CategoriesComponent_ng_template_7_Template, 5, 0, "ng-template", 7)(8, CategoriesComponent_ng_template_8_Template, 5, 3, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CategoriesComponent_category_items_10_Template, 1, 0, "category-items", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p-dialog", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("visibleChange", function CategoriesComponent_Template_p_dialog_visibleChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.categoryDialogVisible, $event) || (ctx.categoryDialogVisible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onHide", function CategoriesComponent_Template_p_dialog_onHide_11_listener() {
            return ctx.resetDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CategoriesComponent_ng_template_12_Template, 10, 2, "ng-template", 12)(13, CategoriesComponent_ng_template_13_Template, 2, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "p-toast", 14)(15, "p-confirmDialog", 15);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("selection", ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("visible", ctx.categoryDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialog, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_11__.Panel, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_12__.ReorderableRowHandle, primeng_table__WEBPACK_IMPORTED_MODULE_12__.ReorderableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, primeng_toolbar__WEBPACK_IMPORTED_MODULE_15__.Toolbar, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputText, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_18__.InputSwitch, _category_items_category_items_component__WEBPACK_IMPORTED_MODULE_3__.CategoryItemsComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50933:
/*!******************************************************************!*\
  !*** ./src/app/stock/category-items/category-items.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryItemsComponent: () => (/* binding */ CategoryItemsComponent)
/* harmony export */ });
/* harmony import */ var _Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stock.service */ 35427);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputnumber */ 61759);





















const _c0 = ["barcodeInput"];
const _c1 = () => [10, 25, 50];
const _c2 = () => ({
  width: "70vw"
});
const _c3 = () => ({
  width: "50vw"
});
const _c4 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function CategoryItemsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Barcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Average Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Selling Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CategoryItemsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 17)(1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", record_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r2.barcode || " --- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r2.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, record_r2.average_cost_usd));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 8, record_r2.unit_price_usd));
  }
}
function CategoryItemsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No items yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CategoryItemsComponent_ng_template_9_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryItemsComponent_ng_template_9_div_22_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Barcode already exists!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryItemsComponent_ng_template_9_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Barcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 48, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function CategoryItemsComponent_ng_template_9_div_22_Template_input_input_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.clearBarcodeError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CategoryItemsComponent_ng_template_9_div_22_small_5_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c4, ctx_r3.barcodeError));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.barcodeError);
  }
}
function CategoryItemsComponent_ng_template_9_p_inputNumber_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-inputNumber", 49);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c4, ctx_r3.item_cost.invalid && (ctx_r3.item_cost.dirty || ctx_r3.item_cost.touched || ctx_r3.submitted)));
  }
}
function CategoryItemsComponent_ng_template_9_p_inputNumber_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-inputNumber", 50);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c4, ctx_r3.item_cost.invalid && (ctx_r3.item_cost.dirty || ctx_r3.item_cost.touched || ctx_r3.submitted)));
  }
}
function CategoryItemsComponent_ng_template_9_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cost is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryItemsComponent_ng_template_9_p_inputNumber_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-inputNumber", 51);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c4, ctx_r3.item_price.invalid && (ctx_r3.item_price.dirty || ctx_r3.item_price.touched || ctx_r3.submitted)));
  }
}
function CategoryItemsComponent_ng_template_9_p_inputNumber_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-inputNumber", 52);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c4, ctx_r3.item_price.invalid && (ctx_r3.item_price.dirty || ctx_r3.item_price.touched || ctx_r3.submitted)));
  }
}
function CategoryItemsComponent_ng_template_9_small_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Price is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryItemsComponent_ng_template_9_div_52_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Quantity is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryItemsComponent_ng_template_9_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "p-inputNumber", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CategoryItemsComponent_ng_template_9_div_52_small_4_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c4, ctx_r3.qty.invalid && (ctx_r3.qty.dirty || ctx_r3.qty.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.qty.invalid && (ctx_r3.qty.dirty || ctx_r3.qty.touched || ctx_r3.submitted));
  }
}
function CategoryItemsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CategoryItemsComponent_ng_template_9_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.submitItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 20)(2, "div", 21)(3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CategoryItemsComponent_ng_template_9_small_6_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 21)(8, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p-dropdown", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 21)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Has Barcode?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 27)(15, "p-radioButton", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function CategoryItemsComponent_ng_template_9_Template_p_radioButton_onClick_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.clearBarcode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 27)(19, "p-radioButton", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function CategoryItemsComponent_ng_template_9_Template_p_radioButton_onClick_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.clearBarcode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CategoryItemsComponent_ng_template_9_div_22_Template, 6, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20)(24, "div", 33)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "p-radioButton", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Dollar $");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "p-radioButton", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "LBP L.L");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 33)(36, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Item cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, CategoryItemsComponent_ng_template_9_p_inputNumber_38_Template, 1, 3, "p-inputNumber", 39)(39, CategoryItemsComponent_ng_template_9_p_inputNumber_39_Template, 1, 3, "p-inputNumber", 40)(40, CategoryItemsComponent_ng_template_9_small_40_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 33)(42, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Item price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CategoryItemsComponent_ng_template_9_p_inputNumber_44_Template, 1, 3, "p-inputNumber", 42)(45, CategoryItemsComponent_ng_template_9_p_inputNumber_45_Template, 1, 3, "p-inputNumber", 43)(46, CategoryItemsComponent_ng_template_9_small_46_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 20)(48, "div", 33)(49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Stock Management?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "p-dropdown", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, CategoryItemsComponent_ng_template_9_div_52_Template, 5, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.itemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c4, ctx_r3.item_description.invalid && (ctx_r3.item_description.dirty || ctx_r3.item_description.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.item_description.invalid && (ctx_r3.item_description.dirty || ctx_r3.item_description.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.itemForm.controls["has_barcode"].value == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.itemForm.controls["currency"].value == "dollar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.itemForm.controls["currency"].value == "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.item_cost.invalid && (ctx_r3.item_cost.dirty || ctx_r3.item_cost.touched || ctx_r3.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.itemForm.controls["currency"].value == "dollar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.itemForm.controls["currency"].value == "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.item_price.invalid && (ctx_r3.item_price.dirty || ctx_r3.item_price.touched || ctx_r3.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3.stockOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.itemForm.controls["stock_management"].value == 1);
  }
}
function CategoryItemsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryItemsComponent_ng_template_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.itemDialogVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryItemsComponent_ng_template_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.submitItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class CategoryItemsComponent {
  constructor(stockService, confirmationService) {
    this.stockService = stockService;
    this.confirmationService = confirmationService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.stockOptions = [{
      name: 'Yes',
      value: 1
    }, {
      name: 'No',
      value: 0
    }];
    this.submitted = false;
    this.barcodeError = false;
    // Item form and events
    this.itemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      item_ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      item_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      category_ID_FK: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
        value: null,
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      has_barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('yes'),
      barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('dollar', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      item_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      item_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      stock_management: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(1),
      qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      item_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null)
    });
  }
  ngOnInit() {
    this.stockService.itemDialogVisible.next(false);
    this.subscriptions.add(this.stockService.categories.subscribe(res => {
      this.categories = res;
    }));
    this.subscriptions.add(this.stockService.selectedCategory.subscribe(res => {
      this.selectedCategory = res;
    }));
    this.subscriptions.add(this.stockService.filteredItems.subscribe(res => {
      this.filteredItems = res;
      if (this.dt) {
        this.dt.reset();
      }
    }));
    this.subscriptions.add(this.stockService.selectedItem.subscribe(res => {
      this.selectedItem = res;
    }));
    this.subscriptions.add(this.stockService.itemDialogVisible.subscribe(res => {
      this.itemDialogVisible = res;
    }));
    this.subscriptions.add(this.stockService.barcodeError.subscribe(() => {
      this.barcodeInput.nativeElement.select();
      this.barcodeError = true;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  selectItem() {
    this.stockService.selectItem(this.selectedItem);
  }
  reset() {
    this.dt.reset();
  }
  get item_description() {
    return this.itemForm.get('item_description');
  }
  get item_cost() {
    return this.itemForm.get('item_cost');
  }
  get item_price() {
    return this.itemForm.get('item_price');
  }
  get qty() {
    return this.itemForm.get('qty');
  }
  // open category dialog
  openItemDialog(mode) {
    this.dialogMode = mode;
    this.barcodeError = false;
    if (this.dialogMode == 'add') {
      this.itemForm.patchValue({
        category_ID_FK: this.selectedCategory.category_ID
      });
      this.stockService.itemDialogVisible.next(true);
    } else if (this.dialogMode == 'edit') {
      if (this.selectedItem.barcode) {
        this.itemForm.patchValue({
          has_barcode: 'yes'
        });
      } else {
        this.itemForm.patchValue({
          has_barcode: 'no'
        });
      }
      this.itemForm.patchValue(this.selectedItem);
      this.stockService.itemDialogVisible.next(true);
    }
  }
  // submit category dialog
  submitItem() {
    var _this = this;
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.submitted = true;
      // add or remove qty required validator
      if (_this.itemForm.value.stock_management == 1) {
        _this.itemForm.controls['qty'].addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
      } else {
        _this.itemForm.controls['qty'].removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
      }
      _this.itemForm.controls['qty'].updateValueAndValidity();
      if (_this.dialogMode == 'add') {
        if (_this.itemForm.valid) {
          yield _this.stockService.createItem(_this.itemForm.value);
        }
      } else {
        if (_this.itemForm.valid) {
          yield _this.stockService.updateItem(_this.itemForm.value);
          _this.stockService.selectedItem.next(0);
        }
      }
    })();
  }
  // delete item
  deleteSelectedItem() {
    this.confirmationService.confirm({
      key: 'deleteItem',
      message: `Are you sure that you want to delete "${this.selectedItem.item_description}"?`,
      header: 'Warning',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      defaultFocus: 'reject',
      accept: () => {
        this.stockService.deleteItem(this.selectedItem);
        this.stockService.selectedItem.next(0);
      }
    });
  }
  // reset form dialog
  resetDialog() {
    this.submitted = false;
    this.itemForm.reset({
      has_barcode: 'yes',
      currency: 'dollar',
      stock_management: 1
    });
  }
  // clear barcode input
  clearBarcode() {
    this.itemForm.patchValue({
      barcode: null
    });
  }
  clearBarcodeError() {
    this.barcodeError = false;
  }
  clearQty() {}
  static {
    this.ɵfac = function CategoryItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategoryItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_stock_service__WEBPACK_IMPORTED_MODULE_1__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CategoryItemsComponent,
      selectors: [["category-items"]],
      viewQuery: function CategoryItemsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.barcodeInput = _t.first);
        }
      },
      decls: 13,
      vars: 19,
      consts: [["dt", ""], ["barcodeInput", ""], [3, "header"], ["styleClass", "mb-4 p-2"], ["styleClass", "p-datatable-sm", "selectionMode", "single", "dataKey", "item_ID", 3, "selectionChange", "onRowSelect", "value", "selection", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions", "alwaysShowPaginator"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Item", "styleClass", "p-fluid", 3, "visibleChange", "onHide", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["key", "category-items"], ["key", "deleteItem"], ["width", "15%"], ["width", "35%"], ["width", "10%"], ["width", "20%"], [3, "pSelectableRow"], ["colspan", "5"], [3, "ngSubmit", "formGroup"], [1, "formgrid", "grid"], [1, "field", "col-12", "md:col-6"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "item_description", "required", "", "autofocus", "", "spellcheck", "false", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["for", "Category"], ["scrollHeight", "400px", "appendTo", "body", "formControlName", "category_ID_FK", "optionLabel", "category_name", "optionValue", "category_ID", 3, "options"], [1, "field-checkbox"], ["inputId", "barcoded", "value", "yes", "formControlName", "has_barcode", 3, "onClick"], ["for", "barcoded", 1, "ml-2"], ["inputId", "noBarcode", "value", "no", "formControlName", "has_barcode", 3, "onClick"], ["for", "noBarcode", 1, "ml-2"], ["class", "field col-12 md:col-6", 4, "ngIf"], [1, "field", "col-12", "md:col-4"], ["inputId", "dollar", "value", "dollar", "formControlName", "currency"], ["for", "dollar", 1, "ml-2", "text-green-600"], ["inputId", "lira", "value", "lira", "formControlName", "currency"], ["for", "lira", 1, "ml-2", "text-primary"], ["for", "item_cost"], ["formControlName", "item_cost", "inputId", "currency-us", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngClass", 4, "ngIf"], ["formControlName", "item_cost", "inputId", "locale-user", "suffix", " L.L", 3, "ngClass", 4, "ngIf"], ["for", "item_price"], ["formControlName", "item_price", "inputId", "currency-us", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngClass", 4, "ngIf"], ["formControlName", "item_price", "inputId", "locale-user", "suffix", " L.L", 3, "ngClass", 4, "ngIf"], ["appendTo", "body", "formControlName", "stock_management", "optionLabel", "name", "optionValue", "value", 3, "options"], ["class", "field col-12 md:col-4", 4, "ngIf"], [1, "p-error"], ["for", "barcode"], ["id", "barcode", "type", "text", "pInputText", "", "formControlName", "barcode", "spellcheck", "false", 3, "input", "ngClass"], ["formControlName", "item_cost", "inputId", "currency-us", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngClass"], ["formControlName", "item_cost", "inputId", "locale-user", "suffix", " L.L", 3, "ngClass"], ["formControlName", "item_price", "inputId", "currency-us", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngClass"], ["formControlName", "item_price", "inputId", "locale-user", "suffix", " L.L", 3, "ngClass"], ["for", "qty"], ["formControlName", "qty", 3, "ngClass"], ["pButton", "", "pRipple", "", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-success", 3, "click"]],
      template: function CategoryItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-panel", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-toolbar", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-table", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("selectionChange", function CategoryItemsComponent_Template_p_table_selectionChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedItem, $event) || (ctx.selectedItem = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onRowSelect", function CategoryItemsComponent_Template_p_table_onRowSelect_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.selectItem());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CategoryItemsComponent_ng_template_5_Template, 11, 0, "ng-template", 5)(6, CategoryItemsComponent_ng_template_6_Template, 13, 10, "ng-template", 6)(7, CategoryItemsComponent_ng_template_7_Template, 3, 0, "ng-template", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p-dialog", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function CategoryItemsComponent_Template_p_dialog_visibleChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.itemDialogVisible, $event) || (ctx.itemDialogVisible = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onHide", function CategoryItemsComponent_Template_p_dialog_onHide_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.resetDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CategoryItemsComponent_ng_template_9_Template, 53, 15, "ng-template", 9)(10, CategoryItemsComponent_ng_template_10_Template, 2, 0, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "p-toast", 11)(12, "p-confirmDialog", 12);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 14, ctx.selectedCategory.category_name));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.filteredItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("selection", ctx.selectedItem);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c1))("alwaysShowPaginator", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.itemDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c3));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialog, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_10__.Panel, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SelectableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.Dialog, primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__.Toolbar, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_17__.RadioButton, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_18__.InputNumber, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 83801:
/*!************************************************!*\
  !*** ./src/app/stock/items/items.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemsComponent: () => (/* binding */ ItemsComponent)
/* harmony export */ });
/* harmony import */ var _Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/date.service */ 76723);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock.service */ 35427);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accounting/auxiliary.service */ 53591);
/* harmony import */ var src_app_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/print.service */ 5312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var _components_stock_transactions_stock_transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/stock-transactions/stock-transactions.component */ 42999);
























const _c0 = ["tableSearch"];
const _c1 = () => [10, 15, 50, 100];
const _c2 = () => ["sku", "product_name", "barcode"];
const _c3 = () => ({
  width: "65vw"
});
const _c4 = () => ({
  width: "50vw"
});
const _c5 = a0 => [a0];
const _c6 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function ItemsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 21, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function ItemsComponent_ng_template_3_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const dt2_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](dt2_r3.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function ItemsComponent_ng_template_3_Template_p_button_onClick_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.printStock());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemsComponent_ng_template_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.resetTable());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemsComponent_ng_template_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.openItemDialog("add"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const dt2_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dt2_r3.filters["global"] == null ? null : dt2_r3.filters["global"].value);
  }
}
function ItemsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function ItemsComponent_ng_template_4_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.fetchHistory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemsComponent_ng_template_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.openItemDialog("edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function ItemsComponent_ng_template_4_Template_p_button_onClick_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.openStockDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemsComponent_ng_template_4_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.deleteSelectedItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r3.selectedItem)("loading", ctx_r3.historyLoading());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r3.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r3.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r3.selectedItem);
  }
}
function ItemsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Product Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "p-sortIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "p-sortIcon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Qty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "p-sortIcon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Average Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "p-sortIcon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " TTC Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "p-sortIcon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Show More");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ItemsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 42)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r6 = ctx.$implicit;
    const expanded_r7 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", record_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](record_r6.sku || " --- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](record_r6.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](record_r6.category_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](record_r6.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 12, record_r6.average_cost_usd), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 14, record_r6.unit_price_usd));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 16, record_r6.ttc_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rounded", true)("pRowToggler", record_r6)("icon", expanded_r7 ? "pi pi-minus" : "pi pi-plus")("severity", expanded_r7 ? "danger" : "success");
  }
}
function ItemsComponent_ng_template_9_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Barcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Unit Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Units per Box");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ItemsComponent_ng_template_9_ng_template_5_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](record_r8.barcode || " --- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", record_r8.unit_name || " --- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](record_r8.quantity_per_unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](record_r8.supplier_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", record_r8.product_notes || " --- ", " ");
  }
}
function ItemsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 44)(2, "div", 45)(3, "p-table", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ItemsComponent_ng_template_9_ng_template_4_Template, 11, 0, "ng-template", 8)(5, ItemsComponent_ng_template_9_ng_template_5_Template, 11, 5, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const record_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c5, record_r8));
  }
}
function ItemsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No items yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ItemsComponent_ng_template_12_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemsComponent_ng_template_12_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Category is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemsComponent_ng_template_12_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Category is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemsComponent_ng_template_12_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "avg cost is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemsComponent_ng_template_12_small_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Price is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemsComponent_ng_template_12_small_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "TTC is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemsComponent_ng_template_12_small_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Unit is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ItemsComponent_ng_template_12_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.submitItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 49)(2, "div", 50)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 53)(9, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ItemsComponent_ng_template_12_small_14_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 50)(16, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "p-dropdown", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ItemsComponent_ng_template_12_small_21_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 50)(23, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "p-dropdown", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ItemsComponent_ng_template_12_small_28_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 50)(30, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Avg Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "p-inputNumber", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ItemsComponent_ng_template_12_small_35_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 50)(37, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Unit price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "p-inputNumber", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ItemsComponent_ng_template_12_small_42_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 50)(44, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "TTC price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "p-inputNumber", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, ItemsComponent_ng_template_12_small_49_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 50)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Qty per Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "p-inputNumber", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, ItemsComponent_ng_template_12_small_56_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 50)(58, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Unit Barcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 70)(62, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r3.itemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](17, _c6, ctx_r3.product_name.invalid && (ctx_r3.product_name.dirty || ctx_r3.product_name.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.product_name.invalid && (ctx_r3.product_name.dirty || ctx_r3.product_name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r3.categories)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](19, _c6, ctx_r3.category_id_fk.invalid && (ctx_r3.category_id_fk.dirty || ctx_r3.category_id_fk.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.category_id_fk.invalid && (ctx_r3.category_id_fk.dirty || ctx_r3.category_id_fk.touched || ctx_r3.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r3.suppliers)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](21, _c6, ctx_r3.supplier_id_fk.invalid && (ctx_r3.supplier_id_fk.dirty || ctx_r3.supplier_id_fk.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.supplier_id_fk.invalid && (ctx_r3.supplier_id_fk.dirty || ctx_r3.supplier_id_fk.touched || ctx_r3.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](23, _c6, ctx_r3.f.average_cost_usd.invalid && (ctx_r3.f.average_cost_usd.dirty || ctx_r3.f.average_cost_usd.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.f.average_cost_usd.invalid && (ctx_r3.f.average_cost_usd.dirty || ctx_r3.f.average_cost_usd.touched || ctx_r3.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](25, _c6, ctx_r3.unit_price_usd.invalid && (ctx_r3.unit_price_usd.dirty || ctx_r3.unit_price_usd.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.unit_price_usd.invalid && (ctx_r3.unit_price_usd.dirty || ctx_r3.unit_price_usd.touched || ctx_r3.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](27, _c6, ctx_r3.ttc_price.invalid && (ctx_r3.ttc_price.dirty || ctx_r3.ttc_price.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.ttc_price.invalid && (ctx_r3.ttc_price.dirty || ctx_r3.ttc_price.touched || ctx_r3.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](29, _c6, ctx_r3.quantity_per_unit.invalid && (ctx_r3.quantity_per_unit.dirty || ctx_r3.quantity_per_unit.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.quantity_per_unit.invalid && (ctx_r3.quantity_per_unit.dirty || ctx_r3.quantity_per_unit.touched || ctx_r3.submitted));
  }
}
function ItemsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function ItemsComponent_ng_template_13_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.toggleItemDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p-button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function ItemsComponent_ng_template_13_Template_p_button_onClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.submitItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ItemsComponent_ng_template_15_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.submitStock());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 49)(2, "div", 50)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "p-dropdown", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 77)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "p-inputNumber", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 50)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "p-calendar", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 80)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r3.stockForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r3.transactionOptions)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c6, ctx_r3.transaction_type.invalid && (ctx_r3.transaction_type.dirty || ctx_r3.transaction_type.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c6, ctx_r3.quantity.invalid && (ctx_r3.quantity.dirty || ctx_r3.quantity.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showIcon", true)("readonlyInput", true)("showButtonBar", true)("iconDisplay", "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c6, ctx_r3.transaction_notes.invalid && (ctx_r3.transaction_notes.dirty || ctx_r3.transaction_notes.touched || ctx_r3.submitted)));
  }
}
function ItemsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemsComponent_ng_template_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.toggleStockDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemsComponent_ng_template_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.submitStock());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class ItemsComponent {
  // focus barcode input on keydown
  onKeyDown(ev) {
    if (!this.itemDialogVisible && !this.stockDialogVisible) {
      this.tableSearch.nativeElement.focus();
    }
  }
  constructor(stockService, confirmationService, formBuilder, auxiliaryService, printService) {
    this.stockService = stockService;
    this.confirmationService = confirmationService;
    this.formBuilder = formBuilder;
    this.auxiliaryService = auxiliaryService;
    this.printService = printService;
    this.submitted = false;
    this.itemsLoading = this.stockService.itemsLoading;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.dateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(src_app_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateService);
    // Item form and events
    this.itemForm = this.formBuilder.group({
      product_id: [null],
      category_id_fk: [{
        value: null,
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      supplier_id_fk: [{
        value: null,
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      product_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      sku: [null],
      barcode: [null],
      unit_id_fk: [{
        value: 1,
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      quantity_per_unit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      unit_price_usd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ttc_price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      product_notes: [null],
      average_cost_usd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    });
    // ******************************************* CORRECT STOCK DIALOG ******************************************
    this.transactionOptions = [{
      name: 'Add',
      value: 'ADD'
    }, {
      name: 'Remove',
      value: 'REMOVE'
    }];
    // Item form and events
    this.stockForm = this.formBuilder.group({
      product_id_fk: [null],
      transaction_type: [{
        value: null,
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      transaction_datetime: [this.dateService.getCurrentDate(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      transaction_notes: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    });
    this.historyDialogVisible = this.stockService.historyDialogVisible;
    this.historyLoading = this.stockService.historyLoading;
  }
  ngOnInit() {
    this.subscriptions.add(this.stockService.units.subscribe(res => {
      this.units = res;
    }));
    this.subscriptions.add(this.stockService.categories.subscribe(res => {
      this.categories = res;
    }));
    this.subscriptions.add(this.stockService.items.subscribe(res => {
      this.items = res;
    }));
    this.subscriptions.add(this.stockService.itemDialogVisible.subscribe(res => {
      this.itemDialogVisible = res;
    }));
    this.subscriptions.add(this.stockService.stockDialogVisible.subscribe(res => {
      this.stockDialogVisible = res;
    }));
    this.subscriptions.add(this.auxiliaryService.suppliers.subscribe(res => {
      this.suppliers = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  get f() {
    return this.itemForm.controls;
  }
  get product_name() {
    return this.itemForm.get('product_name');
  }
  get category_id_fk() {
    return this.itemForm.get('category_id_fk');
  }
  get supplier_id_fk() {
    return this.itemForm.get('supplier_id_fk');
  }
  get unit_id_fk() {
    return this.itemForm.get('unit_id_fk');
  }
  get quantity_per_unit() {
    return this.itemForm.get('quantity_per_unit');
  }
  get unit_price_usd() {
    return this.itemForm.get('unit_price_usd');
  }
  get ttc_price() {
    return this.itemForm.get('ttc_price');
  }
  // open category dialog
  openItemDialog(mode) {
    this.dialogMode = mode;
    if (this.dialogMode == 'add') {
      this.stockService.itemDialogVisible.next(true);
    } else if (this.dialogMode == 'edit') {
      this.itemForm.patchValue(this.selectedItem);
      this.stockService.itemDialogVisible.next(true);
    }
  }
  toggleItemDialog() {
    this.stockService.itemDialogVisible.next(false);
  }
  // submit category dialog
  submitItem() {
    var _this = this;
    return (0,_Users_jeff_Desktop_kengroup_accounting_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.submitted = true;
      if (_this.dialogMode == 'add') {
        if (_this.itemForm.valid) {
          yield _this.stockService.createItem(_this.itemForm.value);
        }
      } else {
        if (_this.itemForm.valid) {
          yield _this.stockService.updateItem(_this.itemForm.value);
          _this.selectedItem = null;
        }
      }
    })();
  }
  // reset form dialog
  resetDialog() {
    this.submitted = false;
    this.itemForm.reset({
      unit_id_fk: 1
    });
    this.stockService.itemDialogVisible.next(false);
  }
  // delete item
  deleteSelectedItem() {
    this.confirmationService.confirm({
      key: 'deleteItem',
      message: `Are you sure that you want to delete "${this.selectedItem.item_description}"?`,
      header: 'Warning',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      defaultFocus: 'reject',
      accept: () => {
        this.stockService.deleteItem(this.selectedItem);
        this.selectedItem = null;
      }
    });
  }
  // clear barcode input
  clearBarcode() {
    this.itemForm.patchValue({
      barcode: null
    });
  }
  resetTable() {
    this.selectedItem = null;
    this.dt2.reset();
    this.dt2.sortField = 'item_ID';
    this.dt2.sortOrder = 1;
    this.dt2.sortSingle();
    this.stockService.getItems();
  }
  // print stock
  printStock() {
    this.printService.printStock(this.items);
  }
  get transaction_type() {
    return this.stockForm.get('transaction_type');
  }
  get quantity() {
    return this.stockForm.get('quantity');
  }
  get transaction_notes() {
    return this.stockForm.get('transaction_notes');
  }
  // open category dialog
  openStockDialog() {
    this.stockService.stockDialogVisible.next(true);
  }
  toggleStockDialog() {
    this.stockService.stockDialogVisible.next(false);
  }
  // submitStock
  submitStock() {
    this.submitted = true;
    if (this.stockForm.valid) {
      this.stockForm.patchValue({
        product_id_fk: this.selectedItem.product_id,
        transaction_datetime: this.dateService.formatDate(this.stockForm.controls['transaction_datetime'].value, 'YYYY-MM-DD')
      });
      this.stockService.submitStock(this.stockForm.value);
    }
  }
  // resetStockDialog
  resetStockDialog() {
    this.submitted = false;
    this.stockForm.reset({
      transaction_datetime: this.dateService.getCurrentDate()
    });
    this.stockService.stockDialogVisible.next(false);
  }
  // &&&&&&&&&&&&&&&&&&& STOCK HISTORY DIALOG &&&&&&&&&&&&&&&&&&&&&&&
  fetchHistory() {
    this.stockService.fetchStockHistory(this.selectedItem.product_id);
  }
  closeHistoryDialog() {
    this.stockService.historyDialogVisible.set(false);
  }
  static {
    this.ɵfac = function ItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_stock_service__WEBPACK_IMPORTED_MODULE_2__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_accounting_auxiliary_service__WEBPACK_IMPORTED_MODULE_3__.AuxiliaryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ItemsComponent,
      selectors: [["app-items"]],
      viewQuery: function ItemsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dt2 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.tableSearch = _t.first);
        }
      },
      hostBindings: function ItemsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function ItemsComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"]);
        }
      },
      decls: 19,
      vars: 28,
      consts: [["dt2", ""], ["tableSearch", ""], [1, "grid", "m-1"], [1, "col-12"], ["styleClass", "p-2"], ["pTemplate", "left"], ["pTemplate", "right"], ["styleClass", "p-datatable-sm p-datatable-striped", "selectionMode", "single", "dataKey", "product_id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} records", 3, "selectionChange", "exportHeader", "value", "selection", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions", "alwaysShowPaginator", "globalFilterFields", "filterDelay", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], ["header", "Item", "styleClass", "p-fluid", 3, "visibleChange", "onHide", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["header", "Stock Correction", "styleClass", "p-fluid", 3, "visibleChange", "onHide", "visible", "modal"], ["key", "home"], [3, "onClose", "visible", "product_id"], [1, "flex"], [1, "p-input-icon-left", "mr-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Search ...", 1, "p-inputtext-sm", 3, "input", "value"], ["label", "Print", "icon", "pi pi-print", "size", "small", "severity", "contrast", "styleClass", "mx-2", 3, "onClick"], ["pButton", "", "pRipple", "", "label", "Refresh", "icon", "pi pi-refresh", 1, "p-button-primary", "p-button-sm", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "label", "New Item", "icon", "pi pi-plus", 1, "p-button-success", "mr-2", "p-button-sm", 3, "click"], ["label", "History", "size", "small", "severity", "contrast", "icon", "pi pi-history", "styleClass", "mr-2", 3, "onClick", "disabled", "loading"], ["pButton", "", "pRipple", "", "label", "Edit", "icon", "pi pi-file-edit", 1, "p-button-warning", "p-button-sm", 3, "click", "disabled"], ["label", "Correct Stock", "size", "small", "severity", "info", "styleClass", "mx-2", "icon", "pi pi-wrench", 3, "onClick", "disabled"], ["pButton", "", "pRipple", "", "label", "Delete", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-sm", 3, "click", "disabled"], ["width", "8%"], ["width", "35%", "pSortableColumn", "product_name"], ["field", "product_name"], ["width", "10%", "pSortableColumn", "category_name"], ["field", "category_name"], ["width", "7%", "pSortableColumn", "quantity"], ["field", "quantity"], ["width", "10%"], ["width", "10%", "pSortableColumn", "unit_price_usd"], ["field", "unit_price_usd"], ["width", "10%", "pSortableColumn", "ttc_price"], ["field", "ttc_price"], ["width", "10%", 2, "width", "5rem"], [3, "pSelectableRow"], ["pRipple", "", "size", "small", 3, "rounded", "pRowToggler", "icon", "severity"], ["colspan", "7"], [1, "p-2"], [3, "value"], ["colspan", "8"], [3, "ngSubmit", "formGroup"], [1, "formgrid", "grid"], [1, "field", "col-12", "md:col-3"], [1, "text-red-600"], ["type", "text", "autofocus", "", "pInputText", "", "formControlName", "sku", "spellcheck", "false"], [1, "field", "col-12", "md:col-6"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "product_name", "spellcheck", "false", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["for", "Category"], ["scrollHeight", "400px", "appendTo", "body", "formControlName", "category_id_fk", "optionLabel", "category_name", "optionValue", "category_id", "placeholder", "Select Category...", 3, "options", "ngClass"], ["for", "supplier_id_fk"], ["scrollHeight", "400px", "appendTo", "body", "formControlName", "supplier_id_fk", "optionLabel", "name", "optionValue", "account_id", "placeholder", "Select Supplier...", 3, "options", "ngClass"], ["for", "average_cost_usd"], ["formControlName", "average_cost_usd", "inputId", "currency-us", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngClass"], ["for", "unit_price_usd"], ["formControlName", "unit_price_usd", "inputId", "currency-us", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngClass"], ["for", "ttc_price"], ["formControlName", "ttc_price", "inputId", "currency-us", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngClass"], ["formControlName", "quantity_per_unit", 3, "ngClass"], ["for", "barcode"], ["id", "barcode", "type", "text", "pInputText", "", "formControlName", "barcode", "spellcheck", "false"], [1, "field", "col-12", "md:col-9"], ["for", "product_notes"], ["type", "text", "pInputText", "", "formControlName", "product_notes", "spellcheck", "false"], [1, "p-error"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", "size", "small", 3, "onClick"], ["label", "Save", "icon", "pi pi-check", "severity", "success", "size", "small", 3, "onClick"], ["scrollHeight", "400px", "appendTo", "body", "formControlName", "transaction_type", "optionLabel", "name", "optionValue", "value", "placeholder", "transaction type ...", 3, "options", "ngClass"], [1, "field", "col-12", "md:col-2"], ["formControlName", "quantity", 3, "ngClass"], ["styleClass", "p-inputtext-sm mr-2", "formControlName", "transaction_datetime", "dateFormat", "yy-mm-dd", "appendTo", "body", 3, "showIcon", "readonlyInput", "showButtonBar", "iconDisplay"], [1, "field", "col-12", "md:col-4"], ["type", "text", "spellcheck", "false", "pInputText", "", "formControlName", "transaction_notes", 1, "w-full", 3, "ngClass"], ["pButton", "", "pRipple", "", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-success", 3, "click"]],
      template: function ItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p-toolbar", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ItemsComponent_ng_template_3_Template, 8, 1, "ng-template", 5)(4, ItemsComponent_ng_template_4_Template, 4, 5, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p-table", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("selectionChange", function ItemsComponent_Template_p_table_selectionChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedItem, $event) || (ctx.selectedItem = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ItemsComponent_ng_template_7_Template, 22, 0, "ng-template", 8)(8, ItemsComponent_ng_template_8_Template, 20, 18, "ng-template", 9)(9, ItemsComponent_ng_template_9_Template, 6, 3, "ng-template", 10)(10, ItemsComponent_ng_template_10_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p-dialog", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("visibleChange", function ItemsComponent_Template_p_dialog_visibleChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.itemDialogVisible, $event) || (ctx.itemDialogVisible = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onHide", function ItemsComponent_Template_p_dialog_onHide_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.resetDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ItemsComponent_ng_template_12_Template, 65, 31, "ng-template", 13)(13, ItemsComponent_ng_template_13_Template, 2, 0, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p-dialog", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("visibleChange", function ItemsComponent_Template_p_dialog_visibleChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.stockDialogVisible, $event) || (ctx.stockDialogVisible = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onHide", function ItemsComponent_Template_p_dialog_onHide_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.resetStockDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ItemsComponent_ng_template_15_Template, 22, 15, "ng-template", 13)(16, ItemsComponent_ng_template_16_Template, 2, 0, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "p-confirmDialog", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "stock-transactions", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClose", function ItemsComponent_Template_stock_transactions_onClose_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.closeHistoryDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("exportHeader", "customExportHeader")("value", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("selection", ctx.selectedItem);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](23, _c1))("alwaysShowPaginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c2))("filterDelay", 0)("loading", ctx.itemsLoading());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](25, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("visible", ctx.itemDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](26, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("visible", ctx.stockDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](27, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.historyDialogVisible())("product_id", ctx.selectedItem == null ? null : ctx.selectedItem.product_id);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_10__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortIcon, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, primeng_toolbar__WEBPACK_IMPORTED_MODULE_15__.Toolbar, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_19__.InputNumber, primeng_calendar__WEBPACK_IMPORTED_MODULE_20__.Calendar, _components_stock_transactions_stock_transactions_component__WEBPACK_IMPORTED_MODULE_5__.StockTransactionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe],
      styles: ["[_nghost-%COMP%]  .p-button.p-button-icon-only.p-button-rounded {\n  height: 2.2rem !important;\n  width: 0.8rem !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RvY2svaXRlbXMvaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx5QkFBQTtFQUNBLHdCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdDo6bmctZGVlcCAucC1idXR0b24ucC1idXR0b24taWNvbi1vbmx5LnAtYnV0dG9uLXJvdW5kZWQge1xuICAgIC8vIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMi4ycmVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDAuOHJlbSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 15177:
/*!****************************************************************!*\
  !*** ./src/app/stock/stock-archive/stock-archive.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockArchiveComponent: () => (/* binding */ StockArchiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stock.service */ 35427);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);











const _c0 = () => [10, 15, 50, 100];
const _c1 = () => ["sku", "product_name", "barcode"];
function StockArchiveComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 14, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function StockArchiveComponent_ng_template_3_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const at_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](at_r2.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function StockArchiveComponent_ng_template_3_Template_p_button_onClick_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.refreshArchive());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const at_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", at_r2.filters["global"] == null ? null : at_r2.filters["global"].value);
  }
}
function StockArchiveComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-calendar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function StockArchiveComponent_ng_template_4_Template_p_calendar_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.startDate, $event) || (ctx_r2.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function StockArchiveComponent_ng_template_4_Template_p_calendar_onSelect_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.startDateChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "End Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-calendar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function StockArchiveComponent_ng_template_4_Template_p_calendar_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.endDate, $event) || (ctx_r2.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function StockArchiveComponent_ng_template_4_Template_p_calendar_onSelect_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.endDateChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("readonlyInput", true)("showButtonBar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("readonlyInput", true)("showButtonBar", true);
  }
}
function StockArchiveComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Product Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p-sortIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Qty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Avg Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p-sortIcon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " TTC Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "p-sortIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function StockArchiveComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r5.sku || " --- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r5.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r5.category_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r5.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, record_r5.average_cost_usd), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, record_r5.unit_price_usd));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, record_r5.ttc_price));
  }
}
function StockArchiveComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No items yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class StockArchiveComponent {
  constructor() {
    this.stockService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService);
    this.startDate = this.stockService.startDate;
    this.endDate = this.stockService.endDate;
    this.archiveLoading = this.stockService.archiveLoading;
    this.productArchive = this.stockService.productArchive;
  }
  startDateChanged() {
    this.refreshArchive();
  }
  endDateChanged() {
    this.refreshArchive();
  }
  refreshArchive() {
    this.stockService.fetchArchive();
  }
  static {
    this.ɵfac = function StockArchiveComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StockArchiveComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StockArchiveComponent,
      selectors: [["app-stock-archive"]],
      decls: 10,
      vars: 10,
      consts: [["at", ""], ["tableSearch", ""], [1, "grid", "m-1"], [1, "col-12"], ["styleClass", "p-3"], ["pTemplate", "left"], ["pTemplate", "right"], ["dataKey", "product_id", "styleClass", "p-datatable-sm p-datatable-striped", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} records", 3, "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions", "alwaysShowPaginator", "globalFilterFields", "filterDelay"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex"], [1, "p-input-icon-left", "mr-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Search ...", 1, "p-inputtext-sm", 3, "input", "value"], ["label", "refresh", "icon", "pi pi-refresh", "size", "small", "severity", "primary", "styleClass", "ml-2", 3, "onClick"], [1, "mr-2"], ["styleClass", "p-inputtext-sm mr-2", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "onSelect", "ngModel", "showIcon", "readonlyInput", "showButtonBar"], ["width", "8%"], ["width", "35%", "pSortableColumn", "product_name"], ["field", "product_name"], ["width", "10%", "pSortableColumn", "category_name"], ["field", "category_name"], ["width", "7%", "pSortableColumn", "quantity"], ["field", "quantity"], ["width", "10%"], ["width", "10%", "pSortableColumn", "unit_price_usd"], ["field", "unit_price_usd"], ["width", "10%", "pSortableColumn", "ttc_price"], ["field", "ttc_price"], ["colspan", "7"]],
      template: function StockArchiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p-toolbar", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, StockArchiveComponent_ng_template_3_Template, 6, 1, "ng-template", 5)(4, StockArchiveComponent_ng_template_4_Template, 6, 8, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-table", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StockArchiveComponent_ng_template_7_Template, 20, 0, "ng-template", 8)(8, StockArchiveComponent_ng_template_8_Template, 18, 13, "ng-template", 9)(9, StockArchiveComponent_ng_template_9_Template, 3, 0, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.productArchive())("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0))("alwaysShowPaginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1))("filterDelay", 0);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortIcon, primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.Toolbar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 54403:
/*!**********************************************************!*\
  !*** ./src/app/stock/stock-home/stock-home.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockHomeComponent: () => (/* binding */ StockHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class StockHomeComponent {
  constructor() {}
  static {
    this.ɵfac = function StockHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StockHomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StockHomeComponent,
      selectors: [["app-stock-home"]],
      decls: 1,
      vars: 0,
      template: function StockHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95054:
/*!***********************************************!*\
  !*** ./src/app/stock/stock-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockRoutingModule: () => (/* binding */ StockRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items/items.component */ 83801);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/categories.component */ 4135);
/* harmony import */ var _stock_home_stock_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-home/stock-home.component */ 54403);
/* harmony import */ var _stock_settings_stock_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-settings/stock-settings.component */ 94895);
/* harmony import */ var _stock_archive_stock_archive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-archive/stock-archive.component */ 15177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);








const routes = [{
  path: '',
  component: _stock_home_stock_home_component__WEBPACK_IMPORTED_MODULE_2__.StockHomeComponent,
  children: [{
    path: 'categories',
    data: {
      breadcrumb: 'Categories'
    },
    component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesComponent
  }, {
    path: 'items',
    data: {
      breadcrumb: 'Inventory'
    },
    component: _items_items_component__WEBPACK_IMPORTED_MODULE_0__.ItemsComponent
  }, {
    path: 'settings',
    data: {
      breadcrumb: 'Settings'
    },
    component: _stock_settings_stock_settings_component__WEBPACK_IMPORTED_MODULE_3__.StockSettingsComponent
  }, {
    path: 'archive',
    data: {
      breadcrumb: 'Archive'
    },
    component: _stock_archive_stock_archive_component__WEBPACK_IMPORTED_MODULE_4__.StockArchiveComponent
  }, {
    path: '**',
    redirectTo: '/stock/items'
  }]
}];
class StockRoutingModule {
  static {
    this.ɵfac = function StockRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StockRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: StockRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StockRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 80794:
/*!***********************************************************************************!*\
  !*** ./src/app/stock/stock-settings/delivery-charge/delivery-charge.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryChargeComponent: () => (/* binding */ DeliveryChargeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stock.service */ 35427);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);











const _c0 = () => ({
  width: "30vw"
});
function DeliveryChargeComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DeliveryChargeComponent_ng_template_10_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8)(2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Delivery Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "p-inputNumber", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.deliveryChargeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", 1);
  }
}
function DeliveryChargeComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DeliveryChargeComponent_ng_template_11_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleDialog(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DeliveryChargeComponent_ng_template_11_Template_p_button_onClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx_r1.updateDeliveryLoading());
  }
}
class DeliveryChargeComponent {
  constructor() {
    this.stockService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.deliveryChargeValue = this.stockService.deliveryChargeValue;
    this.deliveryChargeDialogVisible = this.stockService.deliveryChargeDialogVisible;
    this.updateDeliveryLoading = this.stockService.updateDeliveryLoading;
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
      let deliveryCharge = this.deliveryChargeValue();
      if (deliveryCharge) {
        this.deliveryChargeForm = this.fb.group({
          setting_value: [deliveryCharge]
        });
      }
    });
  }
  // open dialog method
  toggleDialog(state) {
    this.stockService.deliveryChargeDialogVisible.set(state);
  }
  // submit form
  submit() {
    if (this.deliveryChargeForm.valid) {
      this.stockService.updateDeliveryCharge(this.deliveryChargeForm.value);
    }
  }
  // reset dialog method
  resetDialog() {
    this.deliveryChargeForm.reset({
      setting_value: this.deliveryChargeValue()
    });
    this.stockService.deliveryChargeDialogVisible.set(false);
  }
  static {
    this.ɵfac = function DeliveryChargeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DeliveryChargeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DeliveryChargeComponent,
      selectors: [["delivery-charge"]],
      decls: 12,
      vars: 8,
      consts: [[1, "p-toolbar-group-start"], [1, "text-green-600"], [1, "p-toolbar-group-end"], ["icon", "pi pi-file-edit", "styleClass", "p-button-warning", "label", "Edit", 3, "onClick"], ["header", "Delivery Charge", "styleClass", "p-fluid", 3, "visibleChange", "onHide", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], [3, "ngSubmit", "formGroup"], [1, "field", "mt-1"], ["for", "name"], ["inputId", "integeronly", "formControlName", "setting_value", 3, "min"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", "size", "small", 3, "onClick"], ["label", "Save", "icon", "pi pi-check", "severity", "success", "size", "small", 3, "onClick", "loading"]],
      template: function DeliveryChargeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-toolbar")(1, "div", 0)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Delivery Charge: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2)(8, "p-button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DeliveryChargeComponent_Template_p_button_onClick_8_listener() {
            return ctx.toggleDialog(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-dialog", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function DeliveryChargeComponent_Template_p_dialog_visibleChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.deliveryChargeDialogVisible, $event) || (ctx.deliveryChargeDialogVisible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onHide", function DeliveryChargeComponent_Template_p_dialog_onHide_9_listener() {
            return ctx.resetDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DeliveryChargeComponent_ng_template_10_Template, 5, 2, "ng-template", 5)(11, DeliveryChargeComponent_ng_template_11_Template, 2, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, ctx.deliveryChargeValue()));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.deliveryChargeDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog, primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.Toolbar, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__.InputNumber, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 26374:
/*!*******************************************************************************!*\
  !*** ./src/app/stock/stock-settings/exchange-rate/exchange-rate.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExchangeRateComponent: () => (/* binding */ ExchangeRateComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stock.service */ 35427);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/pipes/lira.pipe */ 62298);











const _c0 = () => ({
  width: "30vw"
});
function ExchangeRateComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ExchangeRateComponent_ng_template_10_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8)(2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Exchange Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p-inputNumber", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.rateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", 1000);
  }
}
function ExchangeRateComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExchangeRateComponent_ng_template_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleDialog(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExchangeRateComponent_ng_template_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ExchangeRateComponent {
  constructor(stockService, formBuilder) {
    this.stockService = stockService;
    this.formBuilder = formBuilder;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.stockService.exchangeRate.subscribe(res => {
      this.exchangeRate = res;
      this.rateForm = this.formBuilder.group({
        rate_value: [this.exchangeRate.rate_value]
      });
    }));
    this.subscriptions.add(this.stockService.rateDialogVisible.subscribe(res => {
      this.rateDialogVisible = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  // open dialog method
  toggleDialog(state) {
    this.stockService.rateDialogVisible.next(state);
  }
  // submit form
  submit() {
    if (this.rateForm.valid) {
      this.stockService.updateExchangeRate(this.rateForm.value);
    }
  }
  // reset dialog method
  resetDialog() {
    this.rateForm.reset({
      rate_value: this.exchangeRate.rate_value
    });
    this.stockService.rateDialogVisible.next(false);
  }
  static {
    this.ɵfac = function ExchangeRateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExchangeRateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ExchangeRateComponent,
      selectors: [["exchange-rate"]],
      decls: 12,
      vars: 8,
      consts: [[1, "p-toolbar-group-start"], [1, "text-green-600"], [1, "p-toolbar-group-end"], ["icon", "pi pi-file-edit", "styleClass", "p-button-warning", "label", "Edit", 3, "onClick"], ["header", "Exchange Rate", "styleClass", "p-fluid", 3, "visibleChange", "onHide", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], [3, "ngSubmit", "formGroup"], [1, "field", "mt-1"], ["for", "name"], ["inputId", "integeronly", "formControlName", "rate_value", 3, "min"], ["pButton", "", "pRipple", "", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-success", 3, "click"]],
      template: function ExchangeRateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-toolbar")(1, "div", 0)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Dollar Exchange: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "i", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "lira");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "p-button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function ExchangeRateComponent_Template_p_button_onClick_8_listener() {
            return ctx.toggleDialog(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p-dialog", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function ExchangeRateComponent_Template_p_dialog_visibleChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.rateDialogVisible, $event) || (ctx.rateDialogVisible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onHide", function ExchangeRateComponent_Template_p_dialog_onHide_9_listener() {
            return ctx.resetDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ExchangeRateComponent_ng_template_10_Template, 5, 2, "ng-template", 5)(11, ExchangeRateComponent_ng_template_11_Template, 2, 0, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, ctx.exchangeRate.rate_value));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.rateDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumber, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_1__.LiraPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 79638:
/*!*********************************************************************!*\
  !*** ./src/app/stock/stock-settings/fix-cost/fix-cost.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FixCostComponent: () => (/* binding */ FixCostComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stock.service */ 35427);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toolbar */ 31973);





class FixCostComponent {
  constructor() {
    this.stockService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService);
    this.avgCostLoading = this.stockService.avgCostLoading;
  }
  fixAverageCost() {
    this.stockService.fixAverageCost();
  }
  static {
    this.ɵfac = function FixCostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FixCostComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FixCostComponent,
      selectors: [["fix-cost"]],
      decls: 5,
      vars: 1,
      consts: [[1, "p-toolbar-group-start"], [1, "p-toolbar-group-center"], ["label", "Fix Average Cost", 3, "onClick", "loading"], [1, "p-toolbar-group-end"]],
      template: function FixCostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "p-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function FixCostComponent_Template_p_button_onClick_3_listener() {
            return ctx.fixAverageCost();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.avgCostLoading());
        }
      },
      dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.Button, primeng_toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 18570:
/*!*************************************************************************!*\
  !*** ./src/app/stock/stock-settings/rate-graph/rate-graph.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateGraphComponent: () => (/* binding */ RateGraphComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stock.service */ 35427);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ 41314);










class RateGraphComponent {
  constructor(stockService, formBuilder) {
    this.stockService = stockService;
    this.formBuilder = formBuilder;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const successColor = documentStyle.getPropertyValue('--green-600');
    const secondaryColor = documentStyle.getPropertyValue('--surface-400');
    this.subscriptions.add(this.stockService.graphYear.subscribe(res => {
      this.graphYear = res;
      this.yearForm = this.formBuilder.group({
        year_picker: [this.graphYear]
      });
    }));
    this.subscriptions.add(this.stockService.graphRates.subscribe(res => {
      this.graphRates = res;
      let labels = this.graphRates.map(record => record.month);
      let minRates = this.graphRates.map(record => record.min_rate_value);
      let maxRates = this.graphRates.map(record => record.max_rate_value);
      let minRate;
      let maxRate;
      if (minRates.length > 0) {
        minRate = Math.min(...minRates);
        maxRate = Math.max(...maxRates);
      }
      this.data = {
        labels: labels,
        datasets: [{
          label: 'Min Rate',
          data: minRates,
          backgroundColor: secondaryColor
        }, {
          label: 'Max Rate',
          data: maxRates,
          backgroundColor: successColor
        }]
      };
      this.options = {
        // indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.73,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            min: minRate - 1000,
            max: maxRate + 500,
            ticks: {
              color: textColorSecondary,
              stepSize: 100
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  changeYear() {
    let year = moment__WEBPACK_IMPORTED_MODULE_0__(this.yearForm.value.year_picker).format('yyyy');
    this.stockService.graphYear.next(year);
    this.stockService.getRatesGraph(year);
  }
  setCurrentYear() {
    this.stockService.graphYear.next('2024');
    this.stockService.getRatesGraph('2024');
  }
  static {
    this.ɵfac = function RateGraphComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RateGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_stock_service__WEBPACK_IMPORTED_MODULE_1__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RateGraphComponent,
      selectors: [["rate-graph"]],
      decls: 13,
      vars: 4,
      consts: [[1, "p-toolbar-group-start"], [1, "field", "grid"], ["for", "yearpicker", 1, "col-fixed"], [1, "col-auto"], [3, "formGroup"], ["name", "yearpicker", "formControlName", "year_picker", "view", "year", "dateFormat", "yy", "styleClass", "p-inputtext-sm w-full", 3, "onSelect", "readonlyInput"], [1, "col"], ["pButton", "", "label", "Now", "size", "small", 3, "click"], ["type", "bar", 3, "data", "options"]],
      template: function RateGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-toolbar")(1, "div", 0)(2, "div", 1)(3, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Graph");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "form", 4)(7, "p-calendar", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelect", function RateGraphComponent_Template_p_calendar_onSelect_7_listener() {
            return ctx.changeYear();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RateGraphComponent_Template_button_click_9_listener() {
            return ctx.setCurrentYear();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-chart", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.yearForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonlyInput", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.Toolbar, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_chart__WEBPACK_IMPORTED_MODULE_8__.UIChart, primeng_calendar__WEBPACK_IMPORTED_MODULE_9__.Calendar],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 41502:
/*!*****************************************************************************!*\
  !*** ./src/app/stock/stock-settings/rate-history/rate-history.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateHistoryComponent: () => (/* binding */ RateHistoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stock.service */ 35427);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/pipes/lira.pipe */ 62298);







function RateHistoryComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function RateHistoryComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "lira");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, record_r1.rate_value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r1.transaction_datetime);
  }
}
class RateHistoryComponent {
  constructor(stockService) {
    this.stockService = stockService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.stockService.recentRates.subscribe(res => {
      this.recentRates = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function RateHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RateHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RateHistoryComponent,
      selectors: [["rate-history"]],
      decls: 5,
      vars: 5,
      consts: [["dt", ""], ["header", "Recent Rates"], ["styleClass", "p-datatable-sm", 3, "value", "paginator", "rows", "showCurrentPageReport", "alwaysShowPaginator"], ["pTemplate", "header"], ["pTemplate", "body"], ["width", "40%"], ["width", "60%"]],
      template: function RateHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-panel", 1)(1, "p-table", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RateHistoryComponent_ng_template_3_Template, 5, 0, "ng-template", 3)(4, RateHistoryComponent_ng_template_4_Template, 6, 4, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.recentRates)("paginator", true)("rows", 10)("showCurrentPageReport", true)("alwaysShowPaginator", false);
        }
      },
      dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_5__.Panel, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_1__.LiraPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 94895:
/*!******************************************************************!*\
  !*** ./src/app/stock/stock-settings/stock-settings.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockSettingsComponent: () => (/* binding */ StockSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _components_links_component_links_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/links-component/links-component.component */ 58225);
/* harmony import */ var _exchange_rate_exchange_rate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-rate/exchange-rate.component */ 26374);
/* harmony import */ var _rate_history_rate_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate-history/rate-history.component */ 41502);
/* harmony import */ var _fix_cost_fix_cost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fix-cost/fix-cost.component */ 79638);
/* harmony import */ var _delivery_charge_delivery_charge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery-charge/delivery-charge.component */ 80794);






class StockSettingsComponent {
  static {
    this.ɵfac = function StockSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StockSettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: StockSettingsComponent,
      selectors: [["stock-settings"]],
      decls: 11,
      vars: 0,
      consts: [[1, "grid", "m-1"], [1, "col-6"]],
      template: function StockSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "exchange-rate")(3, "br")(4, "fix-cost")(5, "br")(6, "rate-history");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "delivery-charge")(9, "br")(10, "links-component");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_components_links_component_links_component_component__WEBPACK_IMPORTED_MODULE_0__.LinksComponentComponent, _exchange_rate_exchange_rate_component__WEBPACK_IMPORTED_MODULE_1__.ExchangeRateComponent, _rate_history_rate_history_component__WEBPACK_IMPORTED_MODULE_2__.RateHistoryComponent, _fix_cost_fix_cost_component__WEBPACK_IMPORTED_MODULE_3__.FixCostComponent, _delivery_charge_delivery_charge_component__WEBPACK_IMPORTED_MODULE_4__.DeliveryChargeComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 51127:
/*!***************************************!*\
  !*** ./src/app/stock/stock.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockModule: () => (/* binding */ StockModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-routing.module */ 95054);
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items/items.component */ 83801);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ 4135);
/* harmony import */ var _stock_home_stock_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-home/stock-home.component */ 54403);
/* harmony import */ var _components_stock_transactions_stock_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/stock-transactions/stock-transactions.component */ 42999);
/* harmony import */ var _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/pipes/lira.pipe */ 62298);
/* harmony import */ var _core_pipes_dollar_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/pipes/dollar.pipe */ 53498);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tabmenu */ 94132);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/inputswitch */ 46764);
/* harmony import */ var _category_items_category_items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-items/category-items.component */ 50933);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var _stock_settings_stock_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-settings/stock-settings.component */ 94895);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/autofocus */ 17159);
/* harmony import */ var _stock_settings_exchange_rate_exchange_rate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stock-settings/exchange-rate/exchange-rate.component */ 26374);
/* harmony import */ var _stock_settings_rate_history_rate_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stock-settings/rate-history/rate-history.component */ 41502);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var _stock_settings_rate_graph_rate_graph_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock-settings/rate-graph/rate-graph.component */ 18570);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var _stock_archive_stock_archive_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stock-archive/stock-archive.component */ 15177);
/* harmony import */ var _stock_settings_fix_cost_fix_cost_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stock-settings/fix-cost/fix-cost.component */ 79638);
/* harmony import */ var _stock_settings_delivery_charge_delivery_charge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stock-settings/delivery-charge/delivery-charge.component */ 80794);
/* harmony import */ var _components_links_component_links_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/links-component/links-component.component */ 58225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);











































class StockModule {
  static {
    this.ɵfac = function StockModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StockModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
      type: StockModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_17__.ConfirmationService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _stock_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockRoutingModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_20__.ConfirmDialogModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__.TabMenuModule, primeng_panel__WEBPACK_IMPORTED_MODULE_22__.PanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_23__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_24__.ToastModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_25__.FieldsetModule, primeng_button__WEBPACK_IMPORTED_MODULE_26__.ButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_27__.DialogModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_28__.ToolbarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_29__.RippleModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__.InputTextModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_31__.CheckboxModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_32__.InputSwitchModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__.DropdownModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_34__.RadioButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_35__.InputNumberModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_36__.InputTextareaModule, primeng_card__WEBPACK_IMPORTED_MODULE_37__.CardModule, primeng_tag__WEBPACK_IMPORTED_MODULE_38__.TagModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_39__.AutoFocusModule, primeng_chart__WEBPACK_IMPORTED_MODULE_40__.ChartModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_41__.CalendarModule, _components_stock_transactions_stock_transactions_component__WEBPACK_IMPORTED_MODULE_4__.StockTransactionsComponent, _components_links_component_links_component_component__WEBPACK_IMPORTED_MODULE_15__.LinksComponentComponent]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](StockModule, {
    declarations: [_items_items_component__WEBPACK_IMPORTED_MODULE_1__.ItemsComponent, _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _stock_home_stock_home_component__WEBPACK_IMPORTED_MODULE_3__.StockHomeComponent, _category_items_category_items_component__WEBPACK_IMPORTED_MODULE_7__.CategoryItemsComponent, _stock_settings_stock_settings_component__WEBPACK_IMPORTED_MODULE_8__.StockSettingsComponent, _stock_settings_exchange_rate_exchange_rate_component__WEBPACK_IMPORTED_MODULE_9__.ExchangeRateComponent, _stock_settings_rate_history_rate_history_component__WEBPACK_IMPORTED_MODULE_10__.RateHistoryComponent, _stock_settings_rate_graph_rate_graph_component__WEBPACK_IMPORTED_MODULE_11__.RateGraphComponent, _stock_archive_stock_archive_component__WEBPACK_IMPORTED_MODULE_12__.StockArchiveComponent, _stock_settings_fix_cost_fix_cost_component__WEBPACK_IMPORTED_MODULE_13__.FixCostComponent, _stock_settings_delivery_charge_delivery_charge_component__WEBPACK_IMPORTED_MODULE_14__.DeliveryChargeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _stock_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockRoutingModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_20__.ConfirmDialogModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__.TabMenuModule, primeng_panel__WEBPACK_IMPORTED_MODULE_22__.PanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_23__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_24__.ToastModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_25__.FieldsetModule, primeng_button__WEBPACK_IMPORTED_MODULE_26__.ButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_27__.DialogModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_28__.ToolbarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_29__.RippleModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__.InputTextModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_31__.CheckboxModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_32__.InputSwitchModule, _core_pipes_lira_pipe__WEBPACK_IMPORTED_MODULE_5__.LiraPipe, _core_pipes_dollar_pipe__WEBPACK_IMPORTED_MODULE_6__.DollarPipe, primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__.DropdownModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_34__.RadioButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_35__.InputNumberModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_36__.InputTextareaModule, primeng_card__WEBPACK_IMPORTED_MODULE_37__.CardModule, primeng_tag__WEBPACK_IMPORTED_MODULE_38__.TagModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_39__.AutoFocusModule, primeng_chart__WEBPACK_IMPORTED_MODULE_40__.ChartModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_41__.CalendarModule, _components_stock_transactions_stock_transactions_component__WEBPACK_IMPORTED_MODULE_4__.StockTransactionsComponent, _components_links_component_links_component_component__WEBPACK_IMPORTED_MODULE_15__.LinksComponentComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_stock_stock_module_ts.js.map