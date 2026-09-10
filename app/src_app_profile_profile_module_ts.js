"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 95986:
/*!**********************************************************************!*\
  !*** ./src/app/profile/change-password/change-password.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/user.service */ 99644);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ 45156);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 48361);












const _c0 = ["currentPassword"];
const _c1 = () => ({
  width: "50vw"
});
const _c2 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function ChangePasswordComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_ng_template_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.togglePassDialog(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_ng_template_4_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.current_password.errors["error"] || "this field is required!");
  }
}
function ChangePasswordComponent_ng_template_4_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.new_password.errors["error"] || "this field is required!");
  }
}
function ChangePasswordComponent_ng_template_4_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.confirm_password.errors["error"] || "this field is required!");
  }
}
function ChangePasswordComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_ng_template_4_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.submitPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8)(2, "div", 9)(3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Current Password*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 11, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ChangePasswordComponent_ng_template_4_small_7_Template, 2, 1, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 13)(9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "New Password*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ChangePasswordComponent_ng_template_4_small_12_Template, 2, 1, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13)(14, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Confirm Password*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ChangePasswordComponent_ng_template_4_small_17_Template, 2, 1, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.passForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c2, ctx_r1.current_password.invalid && (ctx_r1.current_password.dirty || ctx_r1.current_password.touched || ctx_r1.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.current_password.invalid && (ctx_r1.current_password.dirty || ctx_r1.current_password.touched || ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c2, ctx_r1.new_password.invalid && (ctx_r1.new_password.dirty || ctx_r1.new_password.touched || ctx_r1.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.new_password.invalid && (ctx_r1.new_password.dirty || ctx_r1.new_password.touched || ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c2, ctx_r1.confirm_password.invalid && (ctx_r1.confirm_password.dirty || ctx_r1.confirm_password.touched || ctx_r1.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.confirm_password.invalid && (ctx_r1.confirm_password.dirty || ctx_r1.confirm_password.touched || ctx_r1.submitted));
  }
}
function ChangePasswordComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.togglePassDialog(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_ng_template_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.submitPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx_r1.loading);
  }
}
class ChangePasswordComponent {
  constructor(userService, profileService, confirmationService) {
    this.userService = userService;
    this.profileService = profileService;
    this.confirmationService = confirmationService;
    this.loggedInUser = this.userService.loggedInUser;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.submitted = false;
    this.oldPasswordError = false;
    // password form
    this.passForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      current_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
  }
  ngOnInit() {
    this.subscriptions.add(this.profileService.passDialogVisible.subscribe(res => {
      this.passDialogVisible = res;
    }));
    this.subscriptions.add(this.profileService.loading.subscribe(res => {
      this.loading = res;
    }));
    this.subscriptions.add(this.profileService.oldPasswordError.subscribe(() => {
      this.currentPassword.nativeElement.select();
      this.oldPasswordError = true;
      this.passForm.controls['current_password'].setErrors({
        error: 'Old password is incorrect!'
      });
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  // open or close user dialog
  togglePassDialog(value) {
    this.profileService.passDialogVisible.next(value);
  }
  get current_password() {
    return this.passForm.get('current_password');
  }
  get new_password() {
    return this.passForm.get('new_password');
  }
  get confirm_password() {
    return this.passForm.get('confirm_password');
  }
  // submit password
  submitPassword() {
    // console.log(this.confirm_password.invalid);
    this.submitted = true;
    if (this.passForm.valid) {
      if (this.passForm.value.new_password == this.passForm.value.confirm_password) {
        this.confirmationService.confirm({
          key: 'profile',
          message: `Are you sure that you want to continue ?`,
          header: 'Warning',
          icon: 'pi pi-exclamation-triangle',
          acceptButtonStyleClass: 'p-button-danger',
          rejectButtonStyleClass: 'p-button-secondary',
          defaultFocus: 'reject',
          accept: () => {
            this.profileService.loading.next(true);
            this.profileService.updatePassword(this.passForm.value);
          },
          reject: () => {
            this.submitted = false;
          }
        });
      } else {
        this.passForm.controls['new_password'].setErrors({
          error: 'password didnt match!'
        });
        this.passForm.controls['confirm_password'].setErrors({
          error: 'password didnt match!'
        });
      }
    }
  }
  // reset form dialog
  resetDialog() {
    this.submitted = false;
    this.passForm.reset();
    this.profileService.loading.next(false);
    this.profileService.passDialogVisible.next(false);
  }
  // fire error on old password input
  currentPasswordError() {
    this.passForm.controls['current_password'].setErrors({
      error: 'old password is incorrect!'
    });
  }
  static {
    this.ɵfac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["change-password"]],
      viewQuery: function ChangePasswordComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.currentPassword = _t.first);
        }
      },
      decls: 6,
      vars: 7,
      consts: [["currentPassword", ""], ["pTemplate", "start"], ["pTemplate", "end"], ["header", "Change Password", "styleClass", "p-fluid", 3, "onHide", "visibleChange", "visible", "modal", "draggable", "resizable"], ["pTemplate", "content"], ["pTemplate", "footer"], ["icon", "pi pi-key", "styleClass", "p-button-secondary", "label", "Change Password", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "formgrid", "grid"], [1, "field", "col-12", "md:col-12"], ["for", "current_password"], ["type", "password", "pInputText", "", "formControlName", "current_password", "required", "", "autofocus", "", "spellcheck", "false", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], [1, "field", "col-12", "md:col-6"], ["for", "password"], ["type", "password", "pInputText", "", "formControlName", "new_password", "required", "", "spellcheck", "false", 3, "ngClass"], ["for", "confirm_password"], ["type", "password", "pInputText", "", "formControlName", "confirm_password", "required", "", "spellcheck", "false", 3, "ngClass"], [1, "p-error"], ["pButton", "", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-secondary", 3, "click"], ["pButton", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-success", 3, "click", "loading"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangePasswordComponent_ng_template_1_Template, 2, 0, "ng-template", 1)(2, ChangePasswordComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-dialog", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onHide", function ChangePasswordComponent_Template_p_dialog_onHide_3_listener() {
            return ctx.resetDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function ChangePasswordComponent_Template_p_dialog_visibleChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.passDialogVisible, $event) || (ctx.passDialogVisible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChangePasswordComponent_ng_template_4_Template, 18, 13, "ng-template", 4)(5, ChangePasswordComponent_ng_template_5_Template, 2, 1, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.passDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true)("draggable", false)("resizable", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 65694:
/*!**********************************************************************!*\
  !*** ./src/app/profile/change-username/change-username.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeUsernameComponent: () => (/* binding */ ChangeUsernameComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/user.service */ 99644);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ 45156);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/keyfilter */ 89735);













const _c0 = ["username"];
const _c1 = () => ({
  width: "50vw"
});
const _c2 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function ChangeUsernameComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Username: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.loggedInUser());
  }
}
function ChangeUsernameComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangeUsernameComponent_ng_template_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleUserDialog(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangeUsernameComponent_ng_template_4_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.new_username.errors["error"] || "this field is required!");
  }
}
function ChangeUsernameComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChangeUsernameComponent_ng_template_4_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.submitUsername());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9)(2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "New Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 11, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ChangeUsernameComponent_ng_template_4_small_6_Template, 2, 1, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, ctx_r0.new_username.invalid && (ctx_r0.new_username.dirty || ctx_r0.new_username.touched || ctx_r0.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.new_username.invalid && (ctx_r0.new_username.dirty || ctx_r0.new_username.touched || ctx_r0.submitted));
  }
}
function ChangeUsernameComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangeUsernameComponent_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleUserDialog(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangeUsernameComponent_ng_template_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.submitUsername());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx_r0.loading);
  }
}
class ChangeUsernameComponent {
  constructor(userService, profileService, confirmationService) {
    this.userService = userService;
    this.profileService = profileService;
    this.confirmationService = confirmationService;
    this.loggedInUser = this.userService.loggedInUser;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.submitted = false;
    // username form
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      new_username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }
  ngOnInit() {
    this.subscriptions.add(this.profileService.userDialogVisible.subscribe(res => {
      this.userDialogVisible = res;
    }));
    this.subscriptions.add(this.profileService.loading.subscribe(res => {
      this.loading = res;
    }));
    this.subscriptions.add(this.profileService.existedUsernameError.subscribe(() => {
      this.username.nativeElement.select();
      this.userForm.controls['new_username'].setErrors({
        error: 'Username already exists'
      });
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  // open or close user dialog
  toggleUserDialog(value) {
    this.profileService.userDialogVisible.next(value);
  }
  get new_username() {
    return this.userForm.get('new_username');
  }
  // submit username
  submitUsername() {
    this.submitted = true;
    if (this.userForm.valid) {
      this.confirmationService.confirm({
        key: 'profile',
        message: `Are you sure that you want to update username to "${this.new_username.value}"?`,
        header: 'Warning',
        icon: 'pi pi-exclamation-triangle',
        acceptButtonStyleClass: 'p-button-danger',
        rejectButtonStyleClass: 'p-button-secondary',
        defaultFocus: 'reject',
        accept: () => {
          this.profileService.loading.next(true);
          this.profileService.updateUsername(this.userForm.value);
        },
        reject: () => {
          this.submitted = false;
        }
      });
    }
  }
  // reset form dialog
  resetDialog() {
    this.submitted = false;
    this.userForm.reset();
    this.profileService.loading.next(false);
    this.profileService.userDialogVisible.next(false);
  }
  static {
    this.ɵfac = function ChangeUsernameComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChangeUsernameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChangeUsernameComponent,
      selectors: [["change-username"]],
      viewQuery: function ChangeUsernameComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.username = _t.first);
        }
      },
      decls: 6,
      vars: 7,
      consts: [["username", ""], ["pTemplate", "start"], ["pTemplate", "end"], ["header", "Change Username", "styleClass", "p-fluid", 3, "onHide", "visibleChange", "visible", "modal", "draggable", "resizable"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "text-green-600"], ["icon", "pi pi-user-edit pi-fw", "styleClass", "p-button-primary", "label", "Change Username", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "field", "mt-1"], ["for", "username"], ["pInputText", "", "formControlName", "new_username", "required", "", "autofocus", "", "spellcheck", "false", "pKeyFilter", "alpha", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], [1, "p-error"], ["pButton", "", "pRipple", "", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-success", 3, "click", "loading"]],
      template: function ChangeUsernameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangeUsernameComponent_ng_template_1_Template, 4, 1, "ng-template", 1)(2, ChangeUsernameComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-dialog", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onHide", function ChangeUsernameComponent_Template_p_dialog_onHide_3_listener() {
            return ctx.resetDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function ChangeUsernameComponent_Template_p_dialog_visibleChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.userDialogVisible, $event) || (ctx.userDialogVisible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChangeUsernameComponent_ng_template_4_Template, 7, 5, "ng-template", 4)(5, ChangeUsernameComponent_ng_template_5_Template, 2, 1, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.userDialogVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true)("draggable", false)("resizable", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_keyfilter__WEBPACK_IMPORTED_MODULE_11__.KeyFilter],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 49818:
/*!****************************************************************!*\
  !*** ./src/app/profile/profile-home/profile-home.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileHomeComponent: () => (/* binding */ ProfileHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profile.service */ 45156);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var _change_username_change_username_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../change-username/change-username.component */ 65694);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../change-password/change-password.component */ 95986);







const _c0 = () => ({
  width: "60vw"
});
class ProfileHomeComponent {
  constructor(profileService) {
    this.profileService = profileService;
  }
  static {
    this.ɵfac = function ProfileHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProfileHomeComponent,
      selectors: [["app-profile-home"]],
      decls: 9,
      vars: 3,
      consts: [[1, "grid", "m-1"], [1, "col-12", "lg:col-6", "lg:col-offset-3"], ["key", "profile"]],
      template: function ProfileHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "change-username")(4, "br")(5, "change-password")(6, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "p-toast", 2)(8, "p-confirmDialog", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
        }
      },
      dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_4__.Card, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialog, _change_username_change_username_component__WEBPACK_IMPORTED_MODULE_1__.ChangeUsernameComponent, _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 31634:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileRoutingModule: () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _profile_home_profile_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-home/profile-home.component */ 49818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _profile_home_profile_home_component__WEBPACK_IMPORTED_MODULE_0__.ProfileHomeComponent
}];
class ProfileRoutingModule {
  static {
    this.ɵfac = function ProfileRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4219:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileModule: () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 31634);
/* harmony import */ var _profile_home_profile_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-home/profile-home.component */ 49818);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/keyfilter */ 89735);
/* harmony import */ var _change_username_change_username_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-username/change-username.component */ 65694);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password/change-password.component */ 95986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);

















class ProfileModule {
  static {
    this.ɵfac = function ProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule, primeng_card__WEBPACK_IMPORTED_MODULE_8__.CardModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.ToolbarModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__.ConfirmDialogModule, primeng_keyfilter__WEBPACK_IMPORTED_MODULE_15__.KeyFilterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_profile_home_profile_home_component__WEBPACK_IMPORTED_MODULE_1__.ProfileHomeComponent, _change_username_change_username_component__WEBPACK_IMPORTED_MODULE_2__.ChangeUsernameComponent, _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule, primeng_card__WEBPACK_IMPORTED_MODULE_8__.CardModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.ToolbarModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__.ConfirmDialogModule, primeng_keyfilter__WEBPACK_IMPORTED_MODULE_15__.KeyFilterModule]
  });
})();

/***/ }),

/***/ 45156:
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileService: () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/api.service */ 22761);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ 35464);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ 99644);







class ProfileService {
  constructor(http, notificationService, api, tokenStorage, userService) {
    this.http = http;
    this.notificationService = notificationService;
    this.api = api;
    this.tokenStorage = tokenStorage;
    this.userService = userService;
    this.host = this.api.host;
    this.userDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.passDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.existedUsernameError = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.oldPasswordError = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  // update username
  updateUsername(username) {
    this.http.put(`${this.host}/profile`, username).subscribe({
      next: res => {
        this.tokenStorage.saveUser(res.username);
        this.tokenStorage.saveToken(res.token);
        this.userService.loggedInUser.set(res.username);
        this.notificationService.showSuccess('Username updated successfully!', 'profile');
      },
      error: error => {
        if (error.status == 406) {
          this.existedUsernameError.next();
        } else {
          this.notificationService.handleError(error, 'profile');
        }
        this.loading.next(false);
      },
      complete: () => {
        this.userDialogVisible.next(false);
        this.loading.next(false);
      }
    });
  }
  // update password
  updatePassword(passwords) {
    this.http.put(`${this.host}/profile/password`, passwords).subscribe({
      next: res => {
        console.log(res);
        this.notificationService.showSuccess(res.message, 'profile');
      },
      error: error => {
        if (error.status == 406) {
          // old password incorrect, server will send code 406 (Not Acceptable)
          console.log(error.error.message);
          this.oldPasswordError.next();
        } else {
          this.notificationService.handleError(error, 'profile');
        }
        this.loading.next(false);
      },
      complete: () => {
        this.passDialogVisible.next(false);
        this.loading.next(false);
      }
    });
  }
  static {
    this.ɵfac = function ProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 89735:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-keyfilter.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYFILTER_VALIDATOR: () => (/* binding */ KEYFILTER_VALIDATOR),
/* harmony export */   KeyFilter: () => (/* binding */ KeyFilter),
/* harmony export */   KeyFilterModule: () => (/* binding */ KeyFilterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 35228);





const KEYFILTER_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => KeyFilter),
  multi: true
};
const DEFAULT_MASKS = {
  pint: /^[\d]*$/,
  int: /^[-]?[\d]*$/,
  pnum: /^[\d\.]*$/,
  money: /^[\d\.\s,]*$/,
  num: /^[-]?[\d\.]*$/,
  hex: /^[0-9a-f]*$/i,
  email: /^[a-z0-9_\.\-@]*$/i,
  alpha: /^[a-z_]*$/i,
  alphanum: /^[a-z0-9_]*$/i
};
const KEYS = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  BACKSPACE: 8,
  DELETE: 46
};
const SAFARI_KEYS = {
  63234: 37,
  // left
  63235: 39,
  // right
  63232: 38,
  // up
  63233: 40,
  // down
  63276: 33,
  // page up
  63277: 34,
  // page down
  63272: 46,
  // delete
  63273: 36,
  // home
  63275: 35 // end
};
/**
 * KeyFilter Directive is a built-in feature of InputText to restrict user input based on a regular expression.
 * @group Components
 */
class KeyFilter {
  document;
  platformId;
  el;
  /**
   * When enabled, instead of blocking keys, input is validated internally to test against the regular expression.
   * @group Props
   */
  pValidateOnly;
  /**
   * Sets the pattern for key filtering.
   * @group Props
   */
  set pattern(_pattern) {
    this._pattern = _pattern;
    if (_pattern instanceof RegExp) {
      this.regex = _pattern;
    } else if (_pattern in DEFAULT_MASKS) {
      this.regex = DEFAULT_MASKS[_pattern];
    } else {
      this.regex = /./;
    }
  }
  get pattern() {
    return this._pattern;
  }
  /**
   * Emits a value whenever the ngModel of the component changes.
   * @param {(string | number)} modelValue - Custom model change event.
   * @group Emits
   */
  ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  regex = /./;
  _pattern;
  isAndroid;
  lastValue;
  constructor(document, platformId, el) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      this.isAndroid = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isAndroid();
    } else {
      this.isAndroid = false;
    }
  }
  isNavKeyPress(e) {
    let k = e.keyCode;
    k = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getBrowser().safari ? SAFARI_KEYS[k] || k : k;
    return k >= 33 && k <= 40 || k == KEYS.RETURN || k == KEYS.TAB || k == KEYS.ESC;
  }
  isSpecialKey(e) {
    let k = e.keyCode || e.charCode;
    return k == 9 || k == 13 || k == 27 || k == 16 || k == 17 || k >= 18 && k <= 20 || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getBrowser().opera && !e.shiftKey && (k == 8 || k >= 33 && k <= 35 || k >= 36 && k <= 39 || k >= 44 && k <= 45);
  }
  getKey(e) {
    let k = e.keyCode || e.charCode;
    return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getBrowser().safari ? SAFARI_KEYS[k] || k : k;
  }
  getCharCode(e) {
    return e.charCode || e.keyCode || e.which;
  }
  findDelta(value, prevValue) {
    let delta = '';
    for (let i = 0; i < value.length; i++) {
      let str = value.substr(0, i) + value.substr(i + value.length - prevValue.length);
      if (str === prevValue) delta = value.substr(i, value.length - prevValue.length);
    }
    return delta;
  }
  isValidChar(c) {
    return this.regex.test(c);
  }
  isValidString(str) {
    for (let i = 0; i < str.length; i++) {
      if (!this.isValidChar(str.substr(i, 1))) {
        return false;
      }
    }
    return true;
  }
  onInput(e) {
    if (this.isAndroid && !this.pValidateOnly) {
      let val = this.el.nativeElement.value;
      let lastVal = this.lastValue || '';
      let inserted = this.findDelta(val, lastVal);
      let removed = this.findDelta(lastVal, val);
      let pasted = inserted.length > 1 || !inserted && !removed;
      if (pasted) {
        if (!this.isValidString(val)) {
          this.el.nativeElement.value = lastVal;
          this.ngModelChange.emit(lastVal);
        }
      } else if (!removed) {
        if (!this.isValidChar(inserted)) {
          this.el.nativeElement.value = lastVal;
          this.ngModelChange.emit(lastVal);
        }
      }
      val = this.el.nativeElement.value;
      if (this.isValidString(val)) {
        this.lastValue = val;
      }
    }
  }
  onKeyPress(e) {
    if (this.isAndroid || this.pValidateOnly) {
      return;
    }
    let browser = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getBrowser();
    let k = this.getKey(e);
    if (browser.mozilla && (e.ctrlKey || e.altKey)) {
      return;
    } else if (k == 17 || k == 18) {
      return;
    }
    // Enter key
    if (k == 13) {
      return;
    }
    let c = this.getCharCode(e);
    let cc = String.fromCharCode(c);
    let ok = true;
    if (!browser.mozilla && (this.isSpecialKey(e) || !cc)) {
      return;
    }
    let valueCheck = this.el.nativeElement.value || '';
    const selectionStart = e.currentTarget.selectionStart || 0;
    const selectionEnd = e.currentTarget.selectionEnd || 0;
    let val = valueCheck.substring(0, selectionStart) + cc + valueCheck.substring(selectionEnd);
    ok = this.regex.test(val);
    if (!ok) {
      e.preventDefault();
    }
  }
  onPaste(e) {
    const clipboardData = e.clipboardData || this.document.defaultView.clipboardData.getData('text');
    if (clipboardData) {
      let pattern = /\{[0-9]+\}/;
      const pastedText = clipboardData.getData('text');
      if (pattern.test(this.regex.toString())) {
        if (!this.regex.test(pastedText)) {
          e.preventDefault();
          return;
        }
      } else {
        for (let char of pastedText.toString()) {
          if (!this.regex.test(char)) {
            e.preventDefault();
            return;
          }
        }
      }
    }
  }
  validate(c) {
    if (this.pValidateOnly) {
      let value = this.el.nativeElement.value;
      if (value && !this.regex.test(value)) {
        return {
          validatePattern: false
        };
      }
    }
  }
  static ɵfac = function KeyFilter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || KeyFilter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: KeyFilter,
    selectors: [["", "pKeyFilter", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function KeyFilter_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function KeyFilter_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        })("keypress", function KeyFilter_keypress_HostBindingHandler($event) {
          return ctx.onKeyPress($event);
        })("paste", function KeyFilter_paste_HostBindingHandler($event) {
          return ctx.onPaste($event);
        });
      }
    },
    inputs: {
      pValidateOnly: [2, "pValidateOnly", "pValidateOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
      pattern: [0, "pKeyFilter", "pattern"]
    },
    outputs: {
      ngModelChange: "ngModelChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([KEYFILTER_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeyFilter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[pKeyFilter]',
      providers: [KEYFILTER_VALIDATOR],
      host: {
        class: 'p-element'
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }], {
    pValidateOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }],
    pattern: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['pKeyFilter']
    }],
    ngModelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['input', ['$event']]
    }],
    onKeyPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keypress', ['$event']]
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['paste', ['$event']]
    }]
  });
})();
class KeyFilterModule {
  static ɵfac = function KeyFilterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || KeyFilterModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: KeyFilterModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeyFilterModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [KeyFilter],
      declarations: [KeyFilter]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map