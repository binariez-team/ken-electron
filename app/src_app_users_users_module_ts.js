"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["src_app_users_users_module_ts"],{

/***/ 24021:
/*!**********************************************************!*\
  !*** ./src/app/users/users-home/users-home.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersHomeComponent: () => (/* binding */ UsersHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../users.service */ 99700);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 26895);















const _c0 = ["name"];
const _c1 = () => [10, 15, 50, 100];
const _c2 = () => ["username", "first_name", "last_name"];
const _c3 = () => ({
  width: "70vw"
});
const _c4 = () => ({
  width: "50vw"
});
const _c5 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function UsersHomeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 19, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function UsersHomeComponent_ng_template_3_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const dt_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](dt_r3.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersHomeComponent_ng_template_3_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.openUserDialog("add"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const dt_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", dt_r3.filters["global"] == null ? null : dt_r3.filters["global"].value);
  }
}
function UsersHomeComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersHomeComponent_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.openUserDialog("edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersHomeComponent_ng_template_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.deleteSelectedUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r3.selectedUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r3.selectedUser);
  }
}
function UsersHomeComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr")(10, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "View Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "View Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Delete Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Modify Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function UsersHomeComponent_ng_template_8_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UsersHomeComponent_ng_template_8_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UsersHomeComponent_ng_template_8_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UsersHomeComponent_ng_template_8_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UsersHomeComponent_ng_template_8_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UsersHomeComponent_ng_template_8_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UsersHomeComponent_ng_template_8_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UsersHomeComponent_ng_template_8_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UsersHomeComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 26)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UsersHomeComponent_ng_template_8_td_7_Template, 2, 0, "td", 27)(8, UsersHomeComponent_ng_template_8_td_8_Template, 2, 0, "td", 27)(9, UsersHomeComponent_ng_template_8_td_9_Template, 2, 0, "td", 27)(10, UsersHomeComponent_ng_template_8_td_10_Template, 2, 0, "td", 27)(11, UsersHomeComponent_ng_template_8_td_11_Template, 2, 0, "td", 27)(12, UsersHomeComponent_ng_template_8_td_12_Template, 2, 0, "td", 27)(13, UsersHomeComponent_ng_template_8_td_13_Template, 2, 0, "td", 27)(14, UsersHomeComponent_ng_template_8_td_14_Template, 2, 0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const record_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pSelectableRow", record_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r6.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r6.first_name || " --- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r6.last_name || " --- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", record_r6.view_stock == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", record_r6.view_stock == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", record_r6.view_reports == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", record_r6.view_reports == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", record_r6.delete_invoice == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", record_r6.delete_invoice == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", record_r6.modify_customers == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", record_r6.modify_customers == 0);
  }
}
function UsersHomeComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No records yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function UsersHomeComponent_ng_template_11_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.username.errors["error"] || "this field is required!");
  }
}
function UsersHomeComponent_ng_template_11_div_8_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.password.errors["error"] || "this field is required!");
  }
}
function UsersHomeComponent_ng_template_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Password*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UsersHomeComponent_ng_template_11_div_8_small_4_Template, 2, 1, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, ctx_r3.password.invalid && (ctx_r3.password.dirty || ctx_r3.password.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.password.invalid && (ctx_r3.password.dirty || ctx_r3.password.touched || ctx_r3.submitted));
  }
}
function UsersHomeComponent_ng_template_11_div_9_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.confirm_password.errors["error"] || "this field is required!");
  }
}
function UsersHomeComponent_ng_template_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Confirm Password*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UsersHomeComponent_ng_template_11_div_9_small_4_Template, 2, 1, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, ctx_r3.confirm_password.invalid && (ctx_r3.confirm_password.dirty || ctx_r3.confirm_password.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.confirm_password.invalid && (ctx_r3.confirm_password.dirty || ctx_r3.confirm_password.touched || ctx_r3.submitted));
  }
}
function UsersHomeComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsersHomeComponent_ng_template_11_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.submitUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32)(2, "div", 33)(3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Username*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 35, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UsersHomeComponent_ng_template_11_small_7_Template, 2, 1, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UsersHomeComponent_ng_template_11_div_8_Template, 5, 4, "div", 37)(9, UsersHomeComponent_ng_template_11_div_9_Template, 5, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 32)(11, "div", 38)(12, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 38)(16, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 32)(20, "div", 43)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "View Stock?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "p-dropdown", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 43)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "View Reports?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "p-dropdown", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 43)(29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Delete Invoice?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "p-dropdown", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 43)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Modify Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "p-dropdown", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c5, ctx_r3.username.invalid && (ctx_r3.username.dirty || ctx_r3.username.touched || ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.username.invalid && (ctx_r3.username.dirty || ctx_r3.username.touched || ctx_r3.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.dialogMode == "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.dialogMode == "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.permissionOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.permissionOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.permissionOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.permissionOptions);
  }
}
function UsersHomeComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersHomeComponent_ng_template_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.closeUserDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersHomeComponent_ng_template_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.submitUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx_r3.loading);
  }
}
class UsersHomeComponent {
  constructor(usersService, confirmationService) {
    this.usersService = usersService;
    this.confirmationService = confirmationService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    this.submitted = false;
    this.permissionOptions = [{
      name: 'Yes',
      value: 1
    }, {
      name: 'No',
      value: 0
    }];
    // users form
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      view_stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
      view_reports: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
      delete_invoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
      modify_customers: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0)
    });
  }
  // on initialize lifecycle hook
  ngOnInit() {
    this.usersService.selectedUser.next(0);
    this.subscriptions.add(this.usersService.users.subscribe(res => {
      this.users = res;
    }));
    this.subscriptions.add(this.usersService.userDialogVisible.subscribe(res => {
      this.userDialogVisible = res;
    }));
    this.subscriptions.add(this.usersService.loading.subscribe(res => {
      this.loading = res;
    }));
    this.subscriptions.add(this.usersService.existedUsernameError.subscribe(() => {
      this.name.nativeElement.select();
      this.userForm.controls['username'].setErrors({
        'error': 'Username already exists'
      });
    }));
    this.subscriptions.add(this.usersService.selectedUser.subscribe(res => {
      this.selectedUser = res;
    }));
  }
  // on destroy lifecycle hook
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  get username() {
    return this.userForm.get('username');
  }
  get password() {
    return this.userForm.get('password');
  }
  get confirm_password() {
    return this.userForm.get('confirm_password');
  }
  // open users dialog
  openUserDialog(mode) {
    this.dialogMode = mode;
    if (this.dialogMode == 'add') {
      this.usersService.userDialogVisible.next(true);
    } else if (this.dialogMode == 'edit') {
      this.userForm.patchValue(this.selectedUser);
      this.usersService.userDialogVisible.next(true);
    }
  }
  // submit user
  submitUser() {
    this.submitted = true;
    // if adding user
    if (this.dialogMode == 'add') {
      // add validators to password inputs
      this.userForm.controls['password'].addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
      this.userForm.controls['confirm_password'].addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
      this.userForm.controls['password'].updateValueAndValidity();
      this.userForm.controls['confirm_password'].updateValueAndValidity();
      // validate form
      if (this.userForm.valid) {
        // if passwords matches
        if (this.userForm.value.password === this.userForm.value.confirm_password) {
          this.confirmationService.confirm({
            key: 'users',
            message: `Are you sure that you want to continue ?`,
            header: 'Warning',
            icon: 'pi pi-exclamation-triangle',
            acceptButtonStyleClass: 'p-button-danger',
            rejectButtonStyleClass: 'p-button-secondary',
            defaultFocus: 'reject',
            accept: () => {
              this.usersService.loading.next(true);
              this.usersService.createUser(this.userForm.value);
            },
            reject: () => {
              this.submitted = false;
            }
          });
        } else {
          // if passwords didn't match
          this.userForm.controls['password'].setErrors({
            'error': 'password didnt match!'
          });
          this.userForm.controls['confirm_password'].setErrors({
            'error': 'password didnt match!'
          });
        }
      }
    } else {
      // updating user
      this.userForm.controls['password'].removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
      this.userForm.controls['confirm_password'].removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
      this.userForm.controls['password'].updateValueAndValidity();
      this.userForm.controls['confirm_password'].updateValueAndValidity();
      if (this.userForm.valid) {
        this.usersService.loading.next(true);
        this.usersService.updateUser(this.userForm.value);
      }
    }
  }
  // delete
  deleteSelectedUser() {
    this.confirmationService.confirm({
      key: 'users',
      message: `Are you sure that you want to continue ?`,
      header: 'Warning',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      defaultFocus: 'reject',
      accept: () => {
        this.usersService.deleteUser(this.selectedUser);
      }
    });
  }
  // close dialog
  closeUserDialog() {
    this.usersService.userDialogVisible.next(false);
  }
  // reset form dialog
  resetDialog() {
    this.submitted = false;
    this.usersService.userDialogVisible.next(false);
    this.userForm.reset({
      view_stock: 0,
      view_reports: 0,
      delete_invoice: 0,
      modify_customers: 0
    });
  }
  // select user event
  selectUser(event) {
    this.usersService.selectedUser.next(event.data);
  }
  // unselect user event
  unselectUser() {
    this.usersService.selectedUser.next(0);
  }
  static {
    this.ɵfac = function UsersHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UsersHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UsersHomeComponent,
      selectors: [["app-users-home"]],
      viewQuery: function UsersHomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.name = _t.first);
        }
      },
      decls: 15,
      vars: 18,
      consts: [["dt", ""], ["tableSearch", ""], ["name", ""], [1, "grid", "m-1"], [1, "col-12"], ["styleClass", "p-2"], ["pTemplate", "left"], ["pTemplate", "right"], ["styleClass", "p-datatable-sm p-datatable-striped", "selectionMode", "single", "dataKey", "user_id", 3, "onRowSelect", "onRowUnselect", "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions", "alwaysShowPaginator", "globalFilterFields", "filterDelay"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "User", "styleClass", "p-fluid", 3, "visibleChange", "onHide", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["key", "users"], [1, "flex"], [1, "p-input-icon-left", "mr-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Search ...", 1, "p-inputtext-sm", 3, "input", "value"], ["pButton", "", "pRipple", "", "label", "New User", "icon", "pi pi-plus", 1, "p-button-success", "ml-2", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "label", "Edit", "icon", "pi pi-file-edit", 1, "p-button-warning", "p-button-sm", "mr-2", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "label", "Delete", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-sm", 3, "click", "disabled"], ["rowspan", "2"], ["colspan", "4"], ["width", "13%"], [3, "pSelectableRow"], [4, "ngIf"], [1, "pi", "pi-check-circle", "text-green-600"], [1, "pi", "pi-times-circle", "text-red-600"], ["colspan", "7"], [3, "ngSubmit", "formGroup"], [1, "formgrid", "grid"], [1, "field", "col-12", "md:col-4"], ["for", "name"], ["type", "text", "pInputText", "", "formControlName", "username", "required", "", "autofocus", "", "spellcheck", "false", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["class", "field col-12 md:col-4", 4, "ngIf"], [1, "field", "col-12", "md:col-6"], ["for", "first_name"], ["id", "first_name", "type", "text", "pInputText", "", "formControlName", "first_name", "spellcheck", "false"], ["for", "last_name"], ["id", "last_name", "type", "text", "pInputText", "", "formControlName", "last_name", "spellcheck", "false"], [1, "field", "col-12", "md:col-3"], ["appendTo", "body", "formControlName", "view_stock", "optionLabel", "name", "optionValue", "value", 3, "options"], ["appendTo", "body", "formControlName", "view_reports", "optionLabel", "name", "optionValue", "value", 3, "options"], ["appendTo", "body", "formControlName", "delete_invoice", "optionLabel", "name", "optionValue", "value", 3, "options"], ["appendTo", "body", "formControlName", "modify_customers", "optionLabel", "name", "optionValue", "value", 3, "options"], [1, "p-error"], ["for", "password"], ["id", "password", "type", "password", "pInputText", "", "formControlName", "password", "required", "", "spellcheck", "false", 3, "ngClass"], ["for", "confirm_password"], ["id", "confirm_password", "type", "password", "pInputText", "", "formControlName", "confirm_password", "required", "", "spellcheck", "false", 3, "ngClass"], ["pButton", "", "pRipple", "", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-success", 3, "click", "loading"]],
      template: function UsersHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "p-toolbar", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UsersHomeComponent_ng_template_3_Template, 6, 1, "ng-template", 6)(4, UsersHomeComponent_ng_template_4_Template, 2, 2, "ng-template", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-table", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRowSelect", function UsersHomeComponent_Template_p_table_onRowSelect_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.selectUser($event));
          })("onRowUnselect", function UsersHomeComponent_Template_p_table_onRowUnselect_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.unselectUser());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UsersHomeComponent_ng_template_7_Template, 18, 0, "ng-template", 9)(8, UsersHomeComponent_ng_template_8_Template, 15, 12, "ng-template", 10)(9, UsersHomeComponent_ng_template_9_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-dialog", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function UsersHomeComponent_Template_p_dialog_visibleChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userDialogVisible, $event) || (ctx.userDialogVisible = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onHide", function UsersHomeComponent_Template_p_dialog_onHide_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.resetDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UsersHomeComponent_ng_template_11_Template, 36, 11, "ng-template", 13)(12, UsersHomeComponent_ng_template_12_Template, 2, 1, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-toast", 15)(14, "p-confirmDialog", 15);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.users)("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1))("alwaysShowPaginator", false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c2))("filterDelay", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.userDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c4));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SelectableRow, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.Toast, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.Dialog, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 56770:
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersRoutingModule: () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _users_home_users_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-home/users-home.component */ 24021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _users_home_users_home_component__WEBPACK_IMPORTED_MODULE_0__.UsersHomeComponent
}];
class UsersRoutingModule {
  static {
    this.ɵfac = function UsersRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UsersRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UsersRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UsersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 70456:
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersModule: () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 56770);
/* harmony import */ var _users_home_users_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-home/users-home.component */ 24021);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
















class UsersModule {
  static {
    this.ɵfac = function UsersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UsersModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UsersModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.ToolbarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UsersModule, {
    declarations: [_users_home_users_home_component__WEBPACK_IMPORTED_MODULE_1__.UsersHomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.ToolbarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule]
  });
})();

/***/ }),

/***/ 99700:
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersService: () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/notifications.service */ 24861);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/api.service */ 22761);





class UsersService {
  constructor(http, notificationService, api) {
    this.http = http;
    this.notificationService = notificationService;
    this.api = api;
    this.host = this.api.host;
    this.users = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.userDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.existedUsernameError = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.getUsers();
  }
  // get users
  getUsers() {
    this.http.get(`${this.host}/users`).subscribe({
      next: res => {
        this.users.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'users');
      }
    });
  }
  // add user
  createUser(user) {
    this.http.post(`${this.host}/users`, user).subscribe({
      next: res => {
        this.users.next([...this.users.value, res]);
        this.loading.next(false);
        this.userDialogVisible.next(false);
        this.notificationService.showSuccess('User added successfully!', 'users');
      },
      error: error => {
        if (error.status == 406) {
          this.loading.next(false);
          this.existedUsernameError.next();
        } else {
          this.notificationService.handleError(error.error, 'users');
        }
      }
    });
  }
  // edit user
  updateUser(user) {
    this.http.put(`${this.host}/users`, user).subscribe({
      next: res => {
        this.userDialogVisible.next(false);
        let index = this.users.value.findIndex(x => x.user_ID === user.user_ID);
        let usersToUpdate = this.users.value;
        usersToUpdate[index] = user;
        this.users.next(usersToUpdate);
        this.selectedUser.next(user);
        this.loading.next(false);
        this.notificationService.showSuccess(res.message, 'users');
      },
      error: error => {
        if (error.status == 406) {
          this.existedUsernameError.next();
        } else {
          this.notificationService.handleError(error.error, 'users');
        }
        this.loading.next(false);
      }
    });
  }
  // delete user
  deleteUser(user) {
    this.http.delete(`${this.host}/users/${user.user_id}`).subscribe({
      next: res => {
        let index = this.users.value.findIndex(x => x.user_id === user.user_id);
        let usersToUpdate = this.users.value;
        usersToUpdate.splice(index, 1);
        this.users.next(usersToUpdate);
        this.notificationService.showSuccess(res.message, 'users');
      },
      error: error => {
        this.notificationService.handleError(error.error, 'users');
      }
    });
  }
  static {
    this.ɵfac = function UsersService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_users_users_module_ts.js.map