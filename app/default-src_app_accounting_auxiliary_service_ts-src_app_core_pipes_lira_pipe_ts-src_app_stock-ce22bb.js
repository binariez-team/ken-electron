"use strict";
(self["webpackChunkaccounting"] = self["webpackChunkaccounting"] || []).push([["default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb"],{

/***/ 53591:
/*!*************************************************!*\
  !*** ./src/app/accounting/auxiliary.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuxiliaryService: () => (/* binding */ AuxiliaryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/api.service */ 22761);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/notifications.service */ 24861);






class AuxiliaryService {
  constructor(http, api, notificationService) {
    this.http = http;
    this.api = api;
    this.notificationService = notificationService;
    this.host = this.api.host;
    this.accounts = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.customers = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.suppliers = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.banks = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.employees = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.dialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.selectedAccount = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.customersLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false);
    this.getAccounts();
    this.getCustomers();
    this.getSuppliers();
    this.getEmployees();
    this.getBanks();
  }
  // get accounts
  getAccounts() {
    this.http.get(`${this.host}/auxiliary/all`).subscribe({
      next: res => {
        this.accounts.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // get customers
  getCustomers() {
    this.customersLoading.set(true);
    this.http.get(`${this.host}/auxiliary/customers`).subscribe({
      next: res => {
        this.customers.next(res);
        this.customersLoading.set(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
        this.customersLoading.set(false);
      }
    });
  }
  // get suppliers
  getSuppliers() {
    this.http.get(`${this.host}/auxiliary/suppliers`).subscribe({
      next: res => {
        this.suppliers.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // get banks
  getBanks() {
    this.http.get(`${this.host}/auxiliary/banks`).subscribe({
      next: res => {
        this.banks.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // get employees
  getEmployees() {
    this.http.get(`${this.host}/auxiliary/employees`).subscribe({
      next: res => {
        this.employees.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // add account
  addAccount(account) {
    this.http.post(`${this.host}/auxiliary`, account).subscribe({
      next: res => {
        this.notificationService.showSuccess('Account added successfully!', 'home');
        this.accounts.next([...this.accounts.value, res]);
        this.dialogVisible.next(false);
        this.getCustomers();
        this.getSuppliers();
        this.getEmployees();
        this.getBanks();
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // edit account
  editAccount(account) {
    this.http.put(`${this.host}/auxiliary`, account).subscribe({
      next: res => {
        this.selectedAccount.next(res);
        this.notificationService.showSuccess('Account updated successfully!', 'home');
        let index = this.accounts.value.findIndex(x => x.account_id == res.account_id);
        let temp = this.accounts.value;
        temp[index] = res;
        this.accounts.next(temp);
        this.dialogVisible.next(false);
        this.getCustomers();
        this.getSuppliers();
        this.getEmployees();
        this.getBanks();
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // delete account
  deleteAccount(account) {
    this.http.delete(`${this.host}/auxiliary/${account.account_id}`).subscribe({
      next: res => {
        this.getAccounts();
        this.getCustomers();
        this.getSuppliers();
        this.getEmployees();
        this.getBanks();
        this.notificationService.showSuccess(res.message, 'home');
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  static {
    this.ɵfac = function AuxiliaryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuxiliaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuxiliaryService,
      factory: AuxiliaryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 62298:
/*!*****************************************!*\
  !*** ./src/app/core/pipes/lira.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiraPipe: () => (/* binding */ LiraPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class LiraPipe {
  transform(value) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0
    }).format(Number(value)) + ` L.L`;
  }
  static {
    this.ɵfac = function LiraPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LiraPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "lira",
      type: LiraPipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 35427:
/*!****************************************!*\
  !*** ./src/app/stock/stock.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockService: () => (/* binding */ StockService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/date.service */ 76723);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/notifications.service */ 24861);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/api.service */ 22761);








class StockService {
  constructor(http, notificationService, api) {
    this.http = http;
    this.notificationService = notificationService;
    this.api = api;
    this.dateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateService);
    this.host = this.api.host;
    this.exchangeRate = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this.recentRates = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.graphRates = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.graphYear = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(moment__WEBPACK_IMPORTED_MODULE_0__().year().toString());
    this.units = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.categories = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.categoryDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.selectedCategory = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this.items = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.filteredItems = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.selectedItem = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this.totalStock = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({
      totalCost: 0,
      totalPrice: 0
    });
    this.rateDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    // sell model
    this.selectedCategorySell = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({
      category_name: 'No Category Selected!'
    });
    this.sellFilteredItems = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.itemDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.stockDialogVisible = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.barcodeError = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    // #################################### Items ###############################################
    // ##########################################################################################
    this.itemsLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    // **************************** Fetch Stock History *********************************
    this.stockHistory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)([]);
    this.historyLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.historyDialogVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@ Stock Archive @@@@@@@@@@@@@@@@@@@@@@@@@@@
    this.archiveLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.productArchive = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)([]);
    this.startDate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(this.dateService.getStartOfCurrentMonth());
    this.endDate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(this.dateService.getCurrentDate());
    // fix average cost
    this.avgCostLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    // delivery charge methods
    this.deliveryChargeValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null);
    this.deliveryChargeDialogVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.updateDeliveryLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false);
    this.getExchangeRate();
    this.getCategories();
    this.getItems();
    this.getUnitsOfMeasure();
    this.getRecentRates();
    this.getDeliveryCharge();
    // this.getRatesGraph(this.graphYear.value)
  }
  resetSellPage() {
    this.selectedCategorySell.next({
      category_name: 'No Category Selected!'
    });
    this.sellFilteredItems.next([]);
  }
  // #################################### Units ###############################################
  // get units of measure
  getUnitsOfMeasure() {
    this.http.get(`${this.host}/stock/units`).subscribe({
      next: res => {
        this.units.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'categories');
      }
    });
  }
  // #################################### Categories ###############################################
  // ##########################################################################################
  // get all categories
  getCategories() {
    this.http.get(`${this.host}/stock/categories`).subscribe({
      next: res => {
        this.categories.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'categories');
      }
    });
  }
  // category row selection
  selectCategory(category) {
    this.selectedCategory.next(category);
    this.selectedItem.next(0);
  }
  // add new category
  createCategory(data) {
    this.http.post(`${this.host}/stock/categories`, data).subscribe({
      next: res => {
        let values = this.categories.value;
        values.push(res);
        this.categories.next(values);
        this.notificationService.showSuccess('Category has been added successfully!', 'home');
        this.categoryDialogVisible.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // reorder categories
  sortCategories() {
    this.http.patch(`${this.host}/stock/categories/sort`, this.categories.value).subscribe({
      next: res => {
        this.categories.next(res);
        this.notificationService.showSuccess('Rows reordered successfully!', 'home');
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // update category
  updateCategory(category) {
    this.http.put(`${this.host}/stock/categories`, category).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'home');
        this.getCategories();
        // this.resetSellPage();
        this.categoryDialogVisible.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // delete category
  deleteCategory(category) {
    this.http.delete(`${this.host}/stock/categories/${category.category_id}`).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'home');
        this.getCategories();
        this.selectedCategory.next(0);
        this.resetSellPage();
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  getItems() {
    this.itemsLoading.set(true);
    this.http.get(`${this.host}/stock/items`).subscribe({
      next: res => {
        this.items.next(res);
        this.itemsLoading.set(false);
      },
      error: error => {
        this.itemsLoading.set(false);
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  getFilteredItems(category, location) {
    this.http.get(`${this.host}/stock/items/${category.category_id}`).subscribe({
      next: res => {
        if (location == 'stock') {
          this.filteredItems.next(res);
        } else {
          this.sellFilteredItems.next(res);
        }
        this.itemsLoading.set(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
        this.itemsLoading.set(false);
      }
    });
  }
  // category row selection
  selectItem(item) {
    this.selectedItem.next(item);
  }
  // add item
  createItem(item) {
    this.http.post(`${this.host}/stock/items`, item).subscribe({
      next: res => {
        let values = this.items.value;
        values.push(res);
        this.items.next(values);
        this.getFilteredItems(this.selectedCategory.value, 'stock');
        this.notificationService.showSuccess('Item Created Successfully!', 'home');
        this.resetSellPage();
      },
      error: error => {
        if (error.status == 400) {
          this.barcodeError.next();
        }
        this.notificationService.handleError(error, 'home');
      },
      complete: () => {
        this.itemDialogVisible.next(false);
      }
    });
  }
  // update item
  updateItem(item) {
    this.http.put(`${this.host}/stock/items`, item).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'home');
        this.getItems();
        this.getFilteredItems(this.selectedCategory.value, 'stock');
        this.resetSellPage();
      },
      error: error => {
        if (error.status == 400) {
          this.barcodeError.next();
        }
        this.notificationService.handleError(error, 'home');
      },
      complete: () => {
        this.itemDialogVisible.next(false);
      }
    });
  }
  // delete item
  deleteItem(product) {
    this.http.delete(`${this.host}/stock/items/${product.product_id}`).subscribe({
      next: res => {
        this.notificationService.showSuccess(res.message, 'home');
        this.getItems();
        this.getFilteredItems(this.selectedCategory.value, 'stock');
        this.selectedItem.next(0);
        this.resetSellPage();
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Exchange Rate $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  // get exchange rate
  getExchangeRate() {
    this.http.get(`${this.host}/stock/rate`).subscribe({
      next: res => {
        this.exchangeRate.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // update exchange rate
  updateExchangeRate(rate) {
    this.http.post(`${this.host}/stock/rate`, rate).subscribe({
      next: res => {
        this.notificationService.showSuccess('Rate updated successfully!', 'home');
        this.exchangeRate.next(res);
        this.rateDialogVisible.next(false);
        this.getRecentRates();
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // get recent rates
  getRecentRates() {
    this.http.get(`${this.host}/stock/rates`).subscribe({
      next: res => {
        this.recentRates.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // get rates for graph
  getRatesGraph(year) {
    this.http.get(`${this.host}/stock/rates/graph/${year}`).subscribe({
      next: res => {
        // console.log(res);
        this.graphRates.next(res);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  // ************************** STOCK CORRECTION ***********************************
  submitStock(data) {
    this.http.post(`${this.host}/stock/correction`, data).subscribe({
      next: res => {
        // let values = this.items.value;
        // values.push(res);
        // this.items.next(values);
        // this.getFilteredItems(this.selectedCategory.value, 'stock');
        // this.notificationService.showSuccess(
        //     'Stock Updated Successfully!',
        //     'home'
        // );
        this.notificationService.showSuccess(res.message, 'home');
        this.getItems();
        this.getFilteredItems(this.selectedCategory.value, 'stock');
        this.resetSellPage();
        this.stockDialogVisible.next(false);
      },
      error: error => {
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  fetchStockHistory(id) {
    this.historyLoading.set(true);
    this.http.get(`${this.host}/stock/history/${id}`).subscribe({
      next: res => {
        this.historyLoading.set(false);
        this.stockHistory.set(res);
        this.historyDialogVisible.set(true);
      },
      error: error => {
        this.historyLoading.set(false);
        this.notificationService.handleError(error.error, 'home');
      }
    });
  }
  fetchArchive() {
    let start = this.dateService.formatDate(this.startDate());
    let end = this.dateService.formatDate(this.endDate());
    this.archiveLoading.set(true);
    this.http.get(`${this.api.host}/stock/items/${start}&${end}`).subscribe({
      next: res => {
        this.archiveLoading.set(false);
        this.productArchive.set(res);
      },
      error: error => {
        this.notificationService.showError(error.error, 'home');
        this.archiveLoading.set(false);
      }
    });
  }
  fixAverageCost() {
    this.avgCostLoading.set(true);
    this.http.get(`${this.api.host}/stock/average-cost`).subscribe({
      next: res => {
        this.getItems();
        this.notificationService.showSuccess(res.message, 'home');
        this.avgCostLoading.set(false);
      },
      error: error => {
        console.log(error.message);
        this.notificationService.showError(error.message, 'home');
        this.avgCostLoading.set(false);
      }
    });
  }
  getDeliveryCharge() {
    this.http.get(`${this.host}/stock/settings`).subscribe({
      next: res => {
        this.deliveryChargeValue.set(res.setting_value);
      },
      error: error => {
        this.notificationService.showError(error.error, 'home');
      }
    });
  }
  // update deliveryCharge
  updateDeliveryCharge(value) {
    this.updateDeliveryLoading.set(true);
    this.http.put(`${this.host}/stock/settings`, value).subscribe({
      next: res => {
        this.deliveryChargeValue.set(res.setting_value);
        this.deliveryChargeDialogVisible.set(false);
        this.notificationService.showSuccess('Delivery Charge Updated Successfully!', 'home');
        this.updateDeliveryLoading.set(false);
      },
      error: error => {
        this.updateDeliveryLoading.set(false);
        this.notificationService.showError(error.error, 'home');
      }
    });
  }
  static {
    this.ɵfac = function StockService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: StockService,
      factory: StockService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_accounting_auxiliary_service_ts-src_app_core_pipes_lira_pipe_ts-src_app_stock-ce22bb.js.map