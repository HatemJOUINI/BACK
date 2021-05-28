(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-timesheet-timesheet-module"],{

/***/ "/7ss":
/*!*************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/timesheet.module.ts ***!
  \*************************************************************/
/*! exports provided: TimesheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetModule", function() { return TimesheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timesheet-routing.module */ "Jq5N");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TimesheetModule = /** @class */ (function () {
    function TimesheetModule() {
    }
    TimesheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_2__["TimesheetRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogModule"].forChild(),
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDatepickerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbProgressBarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCalendarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabsetModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            declarations: [],
            providers: [
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]
            ],
            entryComponents: []
        })
    ], TimesheetModule);
    return TimesheetModule;
}());



/***/ }),

/***/ "Jq5N":
/*!*********************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/timesheet-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TimesheetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetRoutingModule", function() { return TimesheetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _requirement_requirement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requirement/requirement.component */ "N+sy");
/* harmony import */ var _customersmanagement_customersmanagement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customersmanagement/customersmanagement.component */ "O75W");
/* harmony import */ var _timesheetmanagement_timesheetmanagement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timesheetmanagement/timesheetmanagement.component */ "cb1p");
/* harmony import */ var _usersmanagement_usersmanagement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usersmanagement/usersmanagement.component */ "n8v7");
/* harmony import */ var _teamsmanagement_teamsmanagement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teamsmanagement/teamsmanagement.component */ "IWgk");
/* harmony import */ var _holidaymanagement_holidaymanagement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./holidaymanagement/holidaymanagement.component */ "jHV7");
/* harmony import */ var _contractsmanagement_contractsmanagement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contractsmanagement/contractsmanagement.component */ "jJDg");
/* harmony import */ var _releasemanagement_releasemanagement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./releasemanagement/releasemanagement.component */ "Dd78");
/* harmony import */ var _report_and_statistics_management_report_and_statistics_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report-and-statistics-management/report-and-statistics-management.component */ "08ia");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'pages/requirement', component: _requirement_requirement_component__WEBPACK_IMPORTED_MODULE_2__["RequirementComponent"] },
    { path: 'pages/customersmanagement', component: _customersmanagement_customersmanagement_component__WEBPACK_IMPORTED_MODULE_3__["CustomersmanagementComponent"] },
    { path: 'pages/usersmanagement', component: _usersmanagement_usersmanagement_component__WEBPACK_IMPORTED_MODULE_5__["UsersmanagementComponent"] },
    { path: 'pages/teamsmanagement', component: _teamsmanagement_teamsmanagement_component__WEBPACK_IMPORTED_MODULE_6__["TeamsmanagementComponent"] },
    { path: 'pages/timesheetmanagement', component: _timesheetmanagement_timesheetmanagement_component__WEBPACK_IMPORTED_MODULE_4__["TimesheetmanagementComponent"] },
    { path: 'pages/holidaymanagement', component: _holidaymanagement_holidaymanagement_component__WEBPACK_IMPORTED_MODULE_7__["HolidaymanagementComponent"] },
    { path: 'pages/contractmanagement', component: _contractsmanagement_contractsmanagement_component__WEBPACK_IMPORTED_MODULE_8__["ContractsmanagementComponent"] },
    { path: 'pages/release', component: _releasemanagement_releasemanagement_component__WEBPACK_IMPORTED_MODULE_9__["ReleasemanagementComponent"] },
    { path: 'pages/statreports', component: _report_and_statistics_management_report_and_statistics_management_component__WEBPACK_IMPORTED_MODULE_10__["ReportAndStatisticsManagementComponent"] },
];
var TimesheetRoutingModule = /** @class */ (function () {
    function TimesheetRoutingModule() {
    }
    TimesheetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TimesheetRoutingModule);
    return TimesheetRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-timesheet-timesheet-module.js.map