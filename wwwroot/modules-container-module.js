(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-container-module"],{

/***/ "/a0m":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/timesheet/pointing-chart/pointing-chart.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nb-card>\n    <nb-card-header>\n     Pointing Chart\n    </nb-card-header>\n  \n    <nb-card-body>\n      <br>\n      <form>\n        <div class=\"row\">\n          <div class=\"form-group\" class=\"col-md-2\">\n            <label>Employee</label>\n            <div class=\"form-group\">\n              <select class=\"form-control\" placeholder=\"Select Employee\" size=\"small\" outline status=\"success\"\n                [(ngModel)]=\"employee\" name=\"employee\" (click)=\"$event.preventDefault()\" required>\n                <option value=\"default\" disabled selected> </option>\n                <option value={{employee}} *ngFor=\"let employee of employees\">\n                  {{employee.firstName}} {{employee.lastName}}\n                </option>\n              </select>\n            </div>\n          </div>\n  \n          <div class=\"form-group\" class=\"col-md-2\">\n            <label>Month</label>\n            <select class=\"form-control\" placeholder=\"Select Month\" size=\"small\" outline status=\"success\"\n              [(ngModel)]=\"month\" name=\"month\" (click)=\"$event.preventDefault()\" required>\n              <option value=\"default\" disabled selected> </option>\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n              <option value=\"11\">11</option>\n              <option value=\"12\">12</option>\n            </select>\n          </div>\n  \n          <div class=\"form-group\" class=\"col-md-2\">\n            <label>Year</label>\n            <select class=\"form-control\" placeholder=\"Select Year\" size=\"small\" outline status=\"success\"\n              [(ngModel)]=\"year\" name=\"year\" (click)=\"$event.preventDefault()\" required>\n              <option value=\"default\" disabled selected> </option>\n              <option value=\"2019\">2019</option>\n              <option value=\"2020\">2020</option>\n              <option value=\"2021\">2021</option>\n              <option value=\"2022\">2022</option>\n              <option value=\"2023\">2023</option>\n              <option value=\"2024\">2024</option>\n              <option value=\"2025\">2025</option>\n            </select>\n          </div>\n  \n        </div>\n  \n        <button nbButton hero status=\"success\" (click)=\"generate()\" class=\"submitButton\">Generate</button>\n        <button nbButton type=\"reset\" outline status=\"info\" class=\"clearButton\">Clear</button>\n        <ng2-smart-table\n      [settings]=\"settings\" [source]=\"source\"\n      (editConfirm)=\"onEditConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n    </ng2-smart-table>\n  \n      </form>\n    </nb-card-body>\n  </nb-card> -->");

/***/ }),

/***/ "/abR":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/timesheet/taskmanagement/taskmanagement.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n  <nb-card-header>\n    Tasks List\n    <button *ngIf=\"accessChecker.isGranted('remove', 'teams') | async\" nbButton hero status=\"success\"\n      (click)=\"openValidateTasks()\">Validate Tasks</button>\n\n    <button *ngIf=\"accessChecker.isGranted('view', 'tasks') | async\" nbButton hero status=\"success\"\n      (click)=\"open()\">New Task</button>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <div class=\"column\" class=\"col-sm-3\">\n      <div *ngIf=\"accessChecker.isGranted('remove', 'teams') | async\">\n        <label><b>Employee</b></label>\n        <select class=\"form-control\" placeholder=\"Select User\" size=\"small\" hero status=\"success\" [(ngModel)]=\"idE\"\n          name=\"idE\" (click)=\"reload()\">\n          <!--(click)=\"$event.preventDefault()-->\n          <option value=\"user.id\" selected disabled> </option>\n          <option *ngFor=\" let employee of employees \" value=\"{{employee.id}}\">\n            {{employee.firstName}} {{employee.lastName}}\n          </option>\n        </select>\n        <br>\n        <br>\n      </div>\n    </div>\n\n    <ng2-smart-table *ngIf=\"accessChecker.isGranted('view', 'tasks') | async\" \n      [settings]=\"settings\" [source]=\"source\"\n      (editConfirm)=\"onEditConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n    </ng2-smart-table>\n    \n    <ngx-loading [show]=\"loading\" \n      [config]=\"{ backdropBorderRadius: '3px' }\" \n      >\n    </ngx-loading>\n\n  </nb-card-body>\n</nb-card>");

/***/ }),

/***/ "0KCB":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/taskmanagement/taskmanagement.component.ts ***!
  \************************************************************************************/
/*! exports provided: TaskmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskmanagementComponent", function() { return TaskmanagementComponent; });
/* harmony import */ var _raw_loader_taskmanagement_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./taskmanagement.component.html */ "/abR");
/* harmony import */ var _taskmanagement_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskmanagement.component.css */ "9KdG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modules_modals_taskmanagement_modals_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/modals/taskmanagement-modals/create-task/create-task.component */ "s/Lv");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/userTask.service */ "3TdX");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/security */ "lWTH");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ "McNs");
/* harmony import */ var src_app_modules_modals_taskmanagement_modals_validate_tasks_validate_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/modals/taskmanagement-modals/validate-tasks/validate-tasks.component */ "ZmnQ");
/* harmony import */ var src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/parameter.service */ "xmDL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/employee.service */ "yWs4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var src_app_modules_renderers_custom_editor_task_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/renderers/custom-editor-task-type */ "43ZY");
/* harmony import */ var src_app_modules_renderers_custom_editor_task_status__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/renderers/custom-editor-task-status */ "XkAL");
/* harmony import */ var src_app_modules_renderers_custom_date_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/renderers/custom-date-editor */ "GTGX");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var TaskmanagementComponent = /** @class */ (function () {
    function TaskmanagementComponent(taskService, dialogService, toastrService, accessChecker, authService, parameterService, datePipe, //For Date format
    employeeService, //Get All Users For Combo box
    http) {
        var _this = this;
        this.taskService = taskService;
        this.dialogService = dialogService;
        this.toastrService = toastrService;
        this.accessChecker = accessChecker;
        this.authService = authService;
        this.parameterService = parameterService;
        this.datePipe = datePipe;
        this.employeeService = employeeService;
        this.http = http;
        this.loading = false; //for loading
        this.l = [];
        this.typeListUpdate = [];
        this.tasks = [];
        this.employees = [];
        ///////////////////////////////////////////////////////////////////////////
        this.settings = {};
        this.settingsAdminTL = {
            pager: {
                display: true,
                perPage: 10
            },
            hideSubHeader: false,
            actions: {
                add: false,
                delete: true,
                update: true
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                description: {
                    title: 'Description',
                    type: 'string',
                },
                requirementNom: {
                    title: 'Requirement Name',
                    type: 'string',
                    editable: false,
                },
                type: {
                    title: 'Type',
                    type: 'html',
                    editor: {
                        type: 'custom',
                        component: src_app_modules_renderers_custom_editor_task_type__WEBPACK_IMPORTED_MODULE_14__["CustomEditorTaskType"],
                    },
                },
                status: {
                    title: 'Status',
                    type: 'html',
                    editor: {
                        type: 'custom',
                        component: src_app_modules_renderers_custom_editor_task_status__WEBPACK_IMPORTED_MODULE_15__["CustomEditorTaskStatus"],
                    },
                },
                closingDate: {
                    title: 'Closing Date',
                    type: 'string',
                    valuePrepareFunction: function (closingDate) {
                        var raw = new Date(closingDate);
                        var formatted = _this.datePipe.transform(raw, 'dd-MM-yyyy');
                        return formatted;
                    },
                    editor: {
                        type: 'custom',
                        component: src_app_modules_renderers_custom_date_editor__WEBPACK_IMPORTED_MODULE_16__["CustomDateEditor"],
                    },
                },
                estimateWorkLoad: {
                    title: 'Estimated WorkLoad',
                    type: 'string',
                },
                tofinalise: {
                    title: 'To Finalise',
                    type: 'string',
                },
                isValidated: {
                    title: 'Is validated',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: [
                                { value: 'true', title: 'true' },
                                { value: 'false', title: 'false' },
                            ],
                        },
                    },
                },
            },
        };
        this.settingsUser = {
            pager: {
                display: true,
                perPage: 10
            },
            hideSubHeader: false,
            actions: {
                add: false,
                delete: true,
                update: true
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                description: {
                    title: 'Description',
                    type: 'string',
                },
                requirementNom: {
                    title: 'Requirement Name',
                    type: 'string',
                    editable: false,
                },
                type: {
                    title: 'Type',
                    type: 'html',
                    editor: {
                        type: 'custom',
                        component: src_app_modules_renderers_custom_editor_task_type__WEBPACK_IMPORTED_MODULE_14__["CustomEditorTaskType"],
                    },
                },
                status: {
                    title: 'Status',
                    type: 'html',
                    editor: {
                        type: 'custom',
                        component: src_app_modules_renderers_custom_editor_task_status__WEBPACK_IMPORTED_MODULE_15__["CustomEditorTaskStatus"],
                    },
                },
                closingDate: {
                    title: 'Closing Date',
                    type: 'string',
                    valuePrepareFunction: function (closingDate) {
                        var raw = new Date(closingDate);
                        var formatted = _this.datePipe.transform(raw, 'dd-MM-yyyy');
                        return formatted;
                    },
                    editor: {
                        type: 'custom',
                        component: src_app_modules_renderers_custom_date_editor__WEBPACK_IMPORTED_MODULE_16__["CustomDateEditor"],
                    },
                },
                estimateWorkLoad: {
                    title: 'Estimated WorkLoad',
                    type: 'string',
                },
                tofinalise: {
                    title: 'To Finalise',
                    type: 'string',
                },
                isValidated: {
                    title: 'Is validated',
                    type: 'string',
                    editable: false,
                },
            },
        };
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
            //this.source1 = new CustomServerDataSource(this.http, this.user.id);
        });
    }
    TaskmanagementComponent.prototype.ngOnInit = function () {
        this.idE = this.user.id;
        this.reload();
    };
    TaskmanagementComponent.prototype.reload = function () {
        var _this = this;
        this.loading = true;
        if (this.user.rol != "User") {
            this.employeeService.getAll().subscribe(function (data) {
                _this.employees = data;
                _this.employees.sort(function (a, b) {
                    var textA = a.firstName.toUpperCase();
                    var textB = b.firstName.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
            });
            this.settings = this.settingsAdminTL;
        }
        else {
            this.settings = this.settingsUser;
        }
        //this.source1 = new CustomServerDataSource(this.http, this.idE);
        this.taskService.getById(this.idE).subscribe(function (data) {
            _this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__["LocalDataSource"](data);
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            //...
        });
    };
    TaskmanagementComponent.prototype.open = function () {
        var _this = this;
        this.dialogService.open(src_app_modules_modals_taskmanagement_modals_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__["CreateTaskComponent"], { context: { employeeId: this.idE } })
            .onClose.subscribe(function (data) {
            if (data) {
                _this.source.prepend(data);
            }
            _this.reload();
        });
    };
    TaskmanagementComponent.prototype.showToast = function (status, message) {
        this.toastrService.success(status, message, { status: status, });
    };
    TaskmanagementComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        var dataToDelete = event.data;
        if (window.confirm('Are you sure you want to delete?')) {
            this.taskService.destroy(dataToDelete.id).
                subscribe(function (data) {
                _this.source.prepend(dataToDelete);
                /*if(data==-2){
                  this.source.prepend(dataToDelete);
                  this.dialogService.open(DeleteErrorComponent)
                }
                else if(data==0){
                  this.showToast('Task deleted successfully', 'Success')
                }else{
                  this.showToast('Unknown deletion error', 'Success')
                }*/
            });
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    TaskmanagementComponent.prototype.onEditConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to update?')) {
            this.loading = true;
            this.taskService.update(event.newData).
                subscribe(function (data) {
                _this.loading = false;
                _this.showToast('Task updated successfully', 'Success');
                event.confirm.resolve();
            });
        }
        else {
            event.confirm.reject();
            this.loading = false;
        }
    };
    TaskmanagementComponent.prototype.openValidateTasks = function () {
        this.dialogService.open(src_app_modules_modals_taskmanagement_modals_validate_tasks_validate_tasks_component__WEBPACK_IMPORTED_MODULE_8__["ValidateTasksComponent"]);
    };
    TaskmanagementComponent.ctorParameters = function () { return [
        { type: src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_5__["UserTaskService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] },
        { type: _nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbAccessChecker"] },
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthService"] },
        { type: src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_9__["ParameterService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
        { type: src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_11__["EmployeeService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }
    ]; };
    TaskmanagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-taskmanagement',
            template: _raw_loader_taskmanagement_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_taskmanagement_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_5__["UserTaskService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"],
            _nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbAccessChecker"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthService"],
            src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_9__["ParameterService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"],
            src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_11__["EmployeeService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]])
    ], TaskmanagementComponent);
    return TaskmanagementComponent;
}());



/***/ }),

/***/ "43ZY":
/*!**************************************************************!*\
  !*** ./src/app/modules/renderers/custom-editor-task-type.ts ***!
  \**************************************************************/
/*! exports provided: CustomEditorTaskType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEditorTaskType", function() { return CustomEditorTaskType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/parameter.service */ "xmDL");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomEditorTaskType = /** @class */ (function (_super) {
    __extends(CustomEditorTaskType, _super);
    function CustomEditorTaskType(parameterService) {
        var _this = _super.call(this) || this;
        _this.parameterService = parameterService;
        return _this;
    }
    CustomEditorTaskType.prototype.ngOnInit = function () {
        var _this = this;
        this.parameterService.getByGroup("UserTasksType")
            .subscribe(function (data) { return _this.types = data; });
    };
    CustomEditorTaskType.prototype.onChange = function (deviceValue) {
        this.cell.newValue = deviceValue;
    };
    CustomEditorTaskType.ctorParameters = function () { return [
        { type: src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_2__["ParameterService"] }
    ]; };
    CustomEditorTaskType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <select name=\"types\"\n    [(ngModel)]=\"type\" (click)=\"$event.preventDefault()\" (change)=\"onChange($event.target.value)\">\n    <option Selected value={{type.value}} *ngFor=\"let type of types\" >\n        {{type.value}}\n    </option>\n  </select>\n  ",
        }),
        __metadata("design:paramtypes", [src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_2__["ParameterService"]])
    ], CustomEditorTaskType);
    return CustomEditorTaskType;
}(ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["DefaultEditor"]));



/***/ }),

/***/ "4AnF":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/personalmanagement/personalmanagement.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbG1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "51BE":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/home/home.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\r\n    <nb-card-header>Home</nb-card-header>\r\n    <nb-card-body></nb-card-body>\r\n</nb-card>\r\n    <!--\r\n<h1>Selected range: {{ range.start | date }} - {{ range.end | date }}</h1>\r\n<nb-calendar-range [(range)]=\"range\" (rangeChange)=\"handleRangeChange($event)\" \r\n[(boundingMonth)]=\"boundingMonthValue\">\r\n</nb-calendar-range>\r\n        -->\r\n");

/***/ }),

/***/ "5CiB":
/*!********************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/generic-task/generic-task.component.ts ***!
  \********************************************************************************/
/*! exports provided: GenericTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericTaskComponent", function() { return GenericTaskComponent; });
/* harmony import */ var _raw_loader_generic_task_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./generic-task.component.html */ "FCET");
/* harmony import */ var _generic_task_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-task.component.css */ "YmRG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/userTask.service */ "3TdX");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/security */ "lWTH");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/auth */ "McNs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var src_app_modules_modals_taskmanagement_modals_create_other_task_create_other_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/modals/taskmanagement-modals/create-other-task/create-other-task.component */ "AoG1");
/* harmony import */ var src_app_modules_modals_delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/modals/delete-error/delete-error.component */ "U4aP");
/* harmony import */ var src_app_modules_renderers_custom_editor_other_task_type_render_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/renderers/custom-editor-other-task-type-render.component */ "iUNn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var GenericTaskComponent = /** @class */ (function () {
    function GenericTaskComponent(taskService, dialogService, toastrService, accessChecker, authService, http) {
        var _this = this;
        this.taskService = taskService;
        this.dialogService = dialogService;
        this.toastrService = toastrService;
        this.accessChecker = accessChecker;
        this.authService = authService;
        this.http = http;
        this.loading = false; //for loading
        this.settings = {
            pager: {
                display: true,
                perPage: 10
            },
            hideSubHeader: false,
            actions: {
                add: false,
                delete: true,
                update: true
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                description: {
                    title: 'Description',
                    type: 'string',
                },
                requirementNom: {
                    title: 'Requirement Name',
                    type: 'string',
                    editable: false,
                },
                type: {
                    title: 'Type',
                    type: 'html',
                    editor: {
                        type: 'custom',
                        component: src_app_modules_renderers_custom_editor_other_task_type_render_component__WEBPACK_IMPORTED_MODULE_11__["CustomEditorOtherTaskType"],
                    },
                },
                isValidated: {
                    title: 'Is validated',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: [
                                { value: 'true', title: 'true' },
                                { value: 'false', title: 'false' },
                            ],
                        },
                    },
                },
            },
        };
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
            //this.source1 = new CustomServerDataSource(this.http, this.user.id);
        });
    }
    GenericTaskComponent.prototype.ngOnInit = function () {
        this.reload();
    };
    GenericTaskComponent.prototype.showToastSuccess = function (status, message) {
        this.toastrService.success(status, message, { status: status, });
    };
    GenericTaskComponent.prototype.reload = function () {
        var _this = this;
        this.loading = true;
        this.taskService.GetAllOtherTasks(this.user.id.toString()).subscribe(function (data) {
            _this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["LocalDataSource"](data);
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
    };
    GenericTaskComponent.prototype.open = function () {
        var _this = this;
        this.dialogService.open(src_app_modules_modals_taskmanagement_modals_create_other_task_create_other_task_component__WEBPACK_IMPORTED_MODULE_9__["CreateOtherTaskComponent"])
            .onClose.subscribe(function (data) {
            if (data) {
                _this.source.prepend(data);
                _this.showToastSuccess('Success', 'Task created successfully');
            }
            _this.reload();
        });
    };
    GenericTaskComponent.prototype.showToast = function (status, message) {
        this.toastrService.success(status, message, { status: status, });
    };
    GenericTaskComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        var dataToDelete = event.data;
        if (window.confirm('Are you sure you want to delete?')) {
            this.loading = true;
            this.taskService.destroy(event.data.id).
                subscribe(function (data) {
                if (data == -2) {
                    _this.source.prepend(dataToDelete);
                    _this.dialogService.open(src_app_modules_modals_delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_10__["DeleteErrorComponent"]);
                }
                else if (data == 0) {
                    _this.showToast('Task deleted successfully', 'Success');
                }
                else {
                    _this.showToast('Unknown deletion error', 'Success');
                }
            });
            this.loading = false;
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    GenericTaskComponent.prototype.onEditConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to update?')) {
            this.loading = true;
            this.taskService.update(event.newData).
                subscribe(function (data) {
                _this.loading = false;
                _this.showToast('Task updated successfully', 'Success');
                event.confirm.resolve();
            });
        }
        else {
            event.confirm.reject();
            this.loading = false;
        }
    };
    GenericTaskComponent.ctorParameters = function () { return [
        { type: src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__["UserTaskService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] },
        { type: _nebular_security__WEBPACK_IMPORTED_MODULE_5__["NbAccessChecker"] },
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbAuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
    ]; };
    GenericTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-generic-task',
            template: _raw_loader_generic_task_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_generic_task_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__["UserTaskService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"],
            _nebular_security__WEBPACK_IMPORTED_MODULE_5__["NbAccessChecker"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbAuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], GenericTaskComponent);
    return GenericTaskComponent;
}());



/***/ }),

/***/ "9KdG":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/taskmanagement/taskmanagement.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-card-header button {\r\n    float: right;\r\n  }\r\n  \r\n  button {\r\n    margin: 1rem;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2ttYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoidGFza21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWNhcmQtaGVhZGVyIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "9gRR":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/modals/customersmanagement-modals/customer-details/customer-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _raw_loader_customer_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./customer-details.component.html */ "Huuh");
/* harmony import */ var _customer_details_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details.component.css */ "CCyG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(contractService, toastrService) {
        this.contractService = contractService;
        this.toastrService = toastrService;
        this.contracts = [];
        this.settings = {
            hideSubHeader: false,
            actions: {
                add: false,
                edit: true,
                delete: true
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                id: {
                    title: 'Id',
                    type: 'string',
                },
                name: {
                    title: 'Name',
                    type: 'string',
                },
                customerId: {
                    title: 'Customer Id',
                    type: 'string',
                },
                startDate: {
                    title: 'Start Date',
                    type: 'string',
                },
                endDate: {
                    title: 'End Date',
                    type: 'string',
                },
                coeffSunday: {
                    title: 'Coeff Sunday',
                    type: 'string',
                },
                status: {
                    title: 'Status',
                    type: 'string',
                },
                coeffBase: {
                    title: 'Coeff Base',
                    type: 'string',
                },
                coeffOutOfBusinessWeek: {
                    title: 'Coeff Out Of Business Week',
                    type: 'string',
                },
                coeffSaturday: {
                    title: 'Coeff Saturday',
                    type: 'string',
                },
                description: {
                    title: 'Description',
                    type: 'string',
                },
            },
        };
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contractService.getAll().subscribe(function (data) {
            _this.contracts = data;
            console.log(_this.contracts);
        });
    };
    CustomerDetailsComponent.prototype.showToast = function (status, message) {
        this.toastrService.success(status, message, { status: status, });
    };
    CustomerDetailsComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            this.contractService.destroy(event.data.id).
                subscribe(function (data) { return _this.showToast('Contract deleted successfully', 'Success'); });
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    CustomerDetailsComponent.prototype.onEditConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to update?')) {
            this.contractService.update(event.newData).
                subscribe(function (data) { return _this.showToast('Contract updated successfully', 'Success'); });
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    CustomerDetailsComponent.ctorParameters = function () { return [
        { type: src_app_core__WEBPACK_IMPORTED_MODULE_3__["ContractService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }
    ]; };
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-customer-details',
            template: _raw_loader_customer_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_customer_details_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_core__WEBPACK_IMPORTED_MODULE_3__["ContractService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "AoG1":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/modals/taskmanagement-modals/create-other-task/create-other-task.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CreateOtherTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOtherTaskComponent", function() { return CreateOtherTaskComponent; });
/* harmony import */ var _raw_loader_create_other_task_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-other-task.component.html */ "fOC3");
/* harmony import */ var _create_other_task_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-other-task.component.css */ "VX1V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/userTask.service */ "3TdX");
/* harmony import */ var src_app_core_models_userTask_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/models/userTask.model */ "C3FO");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ "McNs");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/employee.service */ "yWs4");
/* harmony import */ var src_app_core_models_requirement_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/models/requirement.model */ "Uuu5");
/* harmony import */ var src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/parameter.service */ "xmDL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CreateOtherTaskComponent = /** @class */ (function () {
    function CreateOtherTaskComponent(ref, taskService, requirementService, employeeService, authService, toastrService, parameterService, formBuilder) {
        var _this = this;
        this.ref = ref;
        this.taskService = taskService;
        this.requirementService = requirementService;
        this.employeeService = employeeService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.parameterService = parameterService;
        this.formBuilder = formBuilder;
        this.TypeSelectHasError = true;
        this.RequirementSelectHasError = true;
        this.EmployeesSelectHasError = true;
        this.StatusSelectHasError = true;
        this.submitted = false;
        this.task = new src_app_core_models_userTask_model__WEBPACK_IMPORTED_MODULE_5__["UserTask"]();
        this.closingDateT = new Date();
        this.requirements = [];
        this.sourceEmp = []; //Liste of All Employees
        this.settingsReq = {
            pager: {
                display: true,
                perPage: 5
            },
            hideSubHeader: false,
            actions: false,
            columns: {
                nom: {
                    title: 'Name',
                    type: 'string',
                    filter: true
                },
                description: {
                    title: 'Description',
                    type: 'string',
                    filter: true
                },
                type: {
                    title: 'Type',
                    type: 'string',
                    filter: true
                },
                status: {
                    title: 'Status',
                    type: 'string',
                    filter: true
                },
                contractName: {
                    title: 'Contract',
                    type: 'string',
                    filter: true
                },
                releaseDescription: {
                    title: 'Release',
                    type: 'string',
                    filter: true
                },
                parentRequirementNom: {
                    title: 'Parent Requirement',
                    type: 'string',
                    filter: true
                },
            },
        };
        this.hideUsersCombo = true; // div containing list of users hidden by default
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
        });
    }
    CreateOtherTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskForm = this.formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            closingDate: ['', this.DateValidator()],
            Requirement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            status: [],
            Type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
        });
        this.parameterService.getByGroup("RequirementsStatus")
            .subscribe(function (data) { return _this.parameters = data; });
        this.requirementService.GetOther(this.user.id.toString()).subscribe(function (data) {
            _this.sourceReq = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["LocalDataSource"](data);
        });
        this.parameterService.getByGroup("HRTasksType")
            .subscribe(function (data) { return _this.typeList = data; });
        if (this.user.rol != "User") {
            this.employeeService.getAll().subscribe(function (data) {
                _this.sourceEmp = data;
                _this.sourceEmp.sort(function (a, b) {
                    var textA = a.firstName.toUpperCase();
                    var textB = b.firstName.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
            });
        }
        this.parameter = "Open";
    };
    Object.defineProperty(CreateOtherTaskComponent.prototype, "f", {
        get: function () { return this.taskForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateOtherTaskComponent.prototype.showToastSuccess = function (status, message) {
        this.toastrService.success(status, message, { status: status, });
    };
    CreateOtherTaskComponent.prototype.create = function () {
        var _this = this;
        this.submitted = true;
        if (this.taskForm.invalid) {
            return;
        }
        this.task.status = this.parameter;
        this.task.requirementId = this.req.id;
        this.task.closingDate = this.closingDateT.toDateString();
        //this.task.userId = this.user.id; 
        this.task.type = this.type;
        if (this.user.rol == 'User') {
            this.task.isValidated = 'False';
        }
        else {
            this.task.isValidated = 'True'; //got from combo box
        }
        this.taskService.create(this.task).
            subscribe(function (task) {
            _this.ref.close(task);
        });
    };
    CreateOtherTaskComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    CreateOtherTaskComponent.prototype.rowClicked = function (event) {
        this.req = event.data;
        this.reloadComboReq(); // reload combo box method to display selected row
    };
    CreateOtherTaskComponent.prototype.reloadComboReq = function () {
        this.requirements = []; // clear requirement array
        this.requirements.push(this.req); // put the selected requirement into requirements
        this.idR = this.req.nom;
    };
    CreateOtherTaskComponent.prototype.DateValidator = function (format) {
        if (format === void 0) { format = "dd/MM/YYYY"; }
        return function (control) {
            var val = moment__WEBPACK_IMPORTED_MODULE_13__(control.value, format, true);
            if (!val.isValid()) {
                return { invalidDate: true };
            }
            return null;
        };
    };
    CreateOtherTaskComponent.prototype.StatusValidateSelect = function (value) {
        if (!value) {
            this.StatusSelectHasError = true;
        }
        else {
            this.StatusSelectHasError = false;
        }
    };
    CreateOtherTaskComponent.prototype.RequirementValidateSelect = function (value) {
        if (!value) {
            this.RequirementSelectHasError = true;
        }
        else {
            this.RequirementSelectHasError = false;
        }
    };
    CreateOtherTaskComponent.prototype.TypeValidateSelect = function (value) {
        if (!value) {
            this.TypeSelectHasError = true;
        }
        else {
            this.TypeSelectHasError = false;
        }
    };
    CreateOtherTaskComponent.ctorParameters = function () { return [
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"] },
        { type: src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__["UserTaskService"] },
        { type: src_app_core__WEBPACK_IMPORTED_MODULE_6__["RequirementService"] },
        { type: src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeService"] },
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] },
        { type: src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_11__["ParameterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] }
    ]; };
    CreateOtherTaskComponent.propDecorators = {
        employeeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        requirement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    CreateOtherTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-other-task',
            template: _raw_loader_create_other_task_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_other_task_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"],
            src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__["UserTaskService"],
            src_app_core__WEBPACK_IMPORTED_MODULE_6__["RequirementService"],
            src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeService"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"],
            src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_11__["ParameterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]])
    ], CreateOtherTaskComponent);
    return CreateOtherTaskComponent;
}());



/***/ }),

/***/ "CCyG":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/modals/customersmanagement-modals/customer-details/customer-details.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host nb-tab {\r\n    padding: 1.25rem;\r\n  }\r\n\r\n  nb-card-header button {\r\n    float: right;\r\n  }\r\n\r\n  button {\r\n    margin: 1rem;\r\n  }\r\n\r\n  [nbInput] {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .form-control:focus {\r\n    box-shadow:none;\r\n  }\r\n\r\n  .submitButton {\r\n    float: right;\r\n  }\r\n\r\n  nb-card-header button {\r\n    float: right;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgbmItdGFiIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICBuYi1jYXJkLWhlYWRlciBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICB9XHJcblxyXG4gIFtuYklucHV0XSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgfVxyXG5cclxuICAuc3VibWl0QnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIG5iLWNhcmQtaGVhZGVyIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "EH6k":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/pointing-chart/pointing-chart.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2ludGluZy1jaGFydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "FCET":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/timesheet/generic-task/generic-task.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n    <nb-card-header>\n      Generic Tasks List\n  \n      <button *ngIf=\"accessChecker.isGranted('view', 'tasks') | async\" nbButton hero status=\"success\"\n        (click)=\"open()\">New Generic Task</button>\n    </nb-card-header>\n  \n    <nb-card-body>\n  \n      <ng2-smart-table *ngIf=\"accessChecker.isGranted('view', 'tasks') | async\" \n        [settings]=\"settings\" [source]=\"source\"\n        (editConfirm)=\"onEditConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n      </ng2-smart-table>\n      \n      <ngx-loading [show]=\"loading\" \n        [config]=\"{ backdropBorderRadius: '3px' }\" \n        >\n      </ngx-loading>\n  \n    </nb-card-body>\n  </nb-card>");

/***/ }),

/***/ "FT3U":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/parameters-management/parameters-management.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\r\n    margin: 1rem;\r\n  }\r\n\r\n  [nbInput] {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .form-control:focus {\r\n    box-shadow:none;\r\n  }\r\n\r\n  .submitButton {\r\n    float: right;\r\n  }\r\n\r\n  nb-card-header button {\r\n    float: right;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFtZXRlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJwYXJhbWV0ZXJzLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgfVxyXG5cclxuICBbbmJJbnB1dF0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzpub25lO1xyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdEJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICBuYi1jYXJkLWhlYWRlciBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "Hque":
/*!******************************************************!*\
  !*** ./src/app/modules/pages/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "51BE");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css */ "RdIi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "Huuh":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/modals/customersmanagement-modals/customer-details/customer-details.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [style.width.px]=\"1250\" [style.height.px]=\"700\">\n   <nb-card-body>\n\n      <nb-tabset>\n         <nb-tab tabIcon=\"nb-person\">\n            <p>Customer<strong>Details</strong>.</p>\n         </nb-tab>\n\n         <nb-tab tabIcon=\"nb-notifications\">\n            <p>List of <strong>Contracts</strong>.</p>\n\n            <ng2-smart-table [settings]=\"settings\" [source]=\"contracts\" (editConfirm)=\"onEditConfirm($event)\"\n               (deleteConfirm)=\"onDeleteConfirm($event)\">\n            </ng2-smart-table>\n\n         </nb-tab>\n      </nb-tabset>\n\n   </nb-card-body>\n</nb-card>");

/***/ }),

/***/ "KzB1":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/renderers/button-customer-details-render.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ButtonCustomerDetailsRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCustomerDetailsRenderComponent", function() { return ButtonCustomerDetailsRenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _modals_customersmanagement_modals_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/customersmanagement-modals/customer-details/customer-details.component */ "9gRR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonCustomerDetailsRenderComponent = /** @class */ (function () {
    function ButtonCustomerDetailsRenderComponent(dialogService) {
        this.dialogService = dialogService;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonCustomerDetailsRenderComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    ButtonCustomerDetailsRenderComponent.prototype.onClick = function () {
        this.dialogService.open(_modals_customersmanagement_modals_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_2__["CustomerDetailsComponent"]);
    };
    ButtonCustomerDetailsRenderComponent.ctorParameters = function () { return [
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }
    ]; };
    ButtonCustomerDetailsRenderComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        save: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    ButtonCustomerDetailsRenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-view',
            template: "\n<button nbButton hero status=\"success\" (click)=\"onClick()\">\nDetails\n</button>",
            styles: ["i {font-size: 1rem;}"]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"]])
    ], ButtonCustomerDetailsRenderComponent);
    return ButtonCustomerDetailsRenderComponent;
}());



/***/ }),

/***/ "Piuu":
/*!************************************************************************!*\
  !*** ./src/app/modules/renderers/button-timesheet-render.component.ts ***!
  \************************************************************************/
/*! exports provided: ButtonTimeSheetRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTimeSheetRenderComponent", function() { return ButtonTimeSheetRenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonTimeSheetRenderComponent = /** @class */ (function () {
    function ButtonTimeSheetRenderComponent(dialogService) {
        this.dialogService = dialogService;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonTimeSheetRenderComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    ButtonTimeSheetRenderComponent.prototype.onClick = function () { };
    ButtonTimeSheetRenderComponent.ctorParameters = function () { return [
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }
    ]; };
    ButtonTimeSheetRenderComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        save: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    ButtonTimeSheetRenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-view',
            template: "\n  <button nbButton outline status=\"success\" (click)=\"onClick()\"><i class=\"nb-compose\"></i></button>\n  ",
            styles: ["i {\n        font-size: 2rem;\n        text-decoration: none; }"]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"]])
    ], ButtonTimeSheetRenderComponent);
    return ButtonTimeSheetRenderComponent;
}());



/***/ }),

/***/ "RdIi":
/*!*******************************************************!*\
  !*** ./src/app/modules/pages/home/home.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" :host nb-layout-column {\r\n    height: 50vw;\r\n  }\r\n  :host nb-layout-column:first-child {\r\n    background: #e3e6f9;\r\n  }\r\n  :host nb-layout-column:last-child {\r\n    background: #edeef7;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLFlBQVk7RUFDZDtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IG5iLWxheW91dC1jb2x1bW4ge1xyXG4gICAgaGVpZ2h0OiA1MHZ3O1xyXG4gIH1cclxuICA6aG9zdCBuYi1sYXlvdXQtY29sdW1uOmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2U2Zjk7XHJcbiAgfVxyXG4gIDpob3N0IG5iLWxheW91dC1jb2x1bW46bGFzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRlZWY3O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "TAKS":
/*!************************************************!*\
  !*** ./src/app/modules/container.component.ts ***!
  \************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _raw_loader_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./container.component.html */ "UCbM");
/* harmony import */ var _container_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.component.css */ "p90G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent.ctorParameters = function () { return []; };
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-container',
            template: _raw_loader_container_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_container_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "TEOU":
/*!************************************************!*\
  !*** ./src/app/core/models/parameter.model.ts ***!
  \************************************************/
/*! exports provided: Parameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return Parameter; });
var Parameter = /** @class */ (function () {
    function Parameter() {
    }
    return Parameter;
}());



/***/ }),

/***/ "UCbM":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/container.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-layout>\n  <nb-layout-header fixed>\n    <app-nav></app-nav>\n  </nb-layout-header>\n  <nb-sidebar>\n    <app-sidebar></app-sidebar>\n  </nb-sidebar>\n  <nb-layout-column>\n    <router-outlet></router-outlet>\n  </nb-layout-column>\n  <nb-layout-footer fixed>\n    <app-footer></app-footer>\n  </nb-layout-footer>\n</nb-layout>");

/***/ }),

/***/ "V5NM":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/pointing-chart/pointing-chart.component.ts ***!
  \************************************************************************************/
/*! exports provided: PointingChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointingChartComponent", function() { return PointingChartComponent; });
/* harmony import */ var _raw_loader_pointing_chart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./pointing-chart.component.html */ "/a0m");
/* harmony import */ var _pointing_chart_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointing-chart.component.css */ "EH6k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/employee.service */ "yWs4");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PointingChartComponent = /** @class */ (function () {
    function PointingChartComponent(employeeService) {
        this.employeeService = employeeService;
        this.weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.settings = {
            hideSubHeader: false,
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                day: {
                    title: 'Day',
                    type: 'string',
                },
            },
        };
    }
    PointingChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getAll().subscribe(function (data) {
            _this.employees = data;
            _this.employees.sort(function (a, b) {
                var textA = a.firstName.toUpperCase();
                var textB = b.firstName.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        });
    };
    PointingChartComponent.prototype.generate = function () {
        //console.log(this.getDaysInMonth(this.year,this.month));
        //console.log(this.getDay(this.year,this.month,1))
        var daysNumber = this.getDaysInMonth(this.year, this.month);
        //let date1=new Date(this.year,this.month-1,2);
        for (var i = 1; i < daysNumber + 1; i++) {
            //console.log(this.weekday[this.getDayIndex(this.year,this.month-1,i)]);
            //console.log(this.getDayIndex(this.year,this.month-1,i));
            this.pointings[i - 1].day = this.weekday[this.getDayIndex(this.year, this.month - 1, i)];
        }
        // console.log(this.pointings)
        // this.source = new LocalDataSource(this.pointings);
    };
    PointingChartComponent.prototype.getDayIndex = function (y, m, d) {
        return new Date(y, m, d).getDay();
    };
    PointingChartComponent.prototype.getDaysInMonth = function (y, m) {
        return new Date(y, m, 0).getDate();
    };
    PointingChartComponent.ctorParameters = function () { return [
        { type: src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] }
    ]; };
    PointingChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pointing-chart',
            template: _raw_loader_pointing_chart_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_pointing_chart_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]])
    ], PointingChartComponent);
    return PointingChartComponent;
}());



/***/ }),

/***/ "VX1V":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/modals/taskmanagement-modals/create-other-task/create-other-task.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\r\n    margin: 1rem;\r\n  }\r\n\r\n  [nbInput] {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .form-control:focus {\r\n    box-shadow:none;\r\n  }\r\n\r\n  .submitButton {\r\n    float: right;\r\n  }\r\n\r\n  nb-card-header button {\r\n    float: right;\r\n  }\r\n\r\n  .container {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  nb-progress-bar {\r\n    flex: 1;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1vdGhlci10YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLE9BQU87RUFDVCIsImZpbGUiOiJjcmVhdGUtb3RoZXItdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICB9XHJcblxyXG4gIFtuYklucHV0XSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgfVxyXG5cclxuICAuc3VibWl0QnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIG5iLWNhcmQtaGVhZGVyIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgbmItcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "XyRq":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/personalmanagement/personalmanagement.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PersonalmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalmanagementComponent", function() { return PersonalmanagementComponent; });
/* harmony import */ var _raw_loader_personalmanagement_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./personalmanagement.component.html */ "yLqA");
/* harmony import */ var _personalmanagement_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personalmanagement.component.css */ "4AnF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalmanagementComponent = /** @class */ (function () {
    function PersonalmanagementComponent() {
    }
    PersonalmanagementComponent.prototype.ngOnInit = function () {
    };
    PersonalmanagementComponent.ctorParameters = function () { return []; };
    PersonalmanagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-personalmanagement',
            template: _raw_loader_personalmanagement_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_personalmanagement_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalmanagementComponent);
    return PersonalmanagementComponent;
}());



/***/ }),

/***/ "YmRG":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/generic-task/generic-task.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-card-header button {\r\n    float: right;\r\n  }\r\n  \r\n  button {\r\n    margin: 1rem;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyaWMtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6ImdlbmVyaWMtdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZC1oZWFkZXIgYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "ZO8f":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/modals/taskmanagement-modals/create-task/create-task.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [style.width.px]=\"1200\" [style.height.px]=\"800\">\n  <nb-card-header>\n    Add Task\n    <button nbButton hero status=\"danger\" (click)=\"dismiss()\">Close</button>\n  </nb-card-header>\n\n  <nb-card-body>\n    <div class=\"form-group\">\n      <h5>Requirements List</h5>\n      <ng2-smart-table [settings]=\"settingsReq\" [source]=\"sourceReq\" (userRowSelect)=\"rowClicked($event)\">\n      </ng2-smart-table>\n    </div>\n    <form [formGroup]=\"taskForm\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea formControlName=\"description\" nbInput class=\"form-control\" rows=\"4\" placeholder=\"Description\"\n              name=\"description\" [(ngModel)]=\"task.description\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.description.invalid }\"></textarea>\n            <div *ngIf=\"submitted && f.description.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.description.errors.required\">Description is required</div>\n            </div>\n          </div>\n\n          <div [hidden]=\"hideRequirementListCombo\" class=\"form-group\">\n            <label for=\"contract\">Requirement</label>\n            <input formControlName=\"Requirement\"  disabled class=\"form-control\" size=\"small\" outline\n              status=\"success\" [(ngModel)]=\"idR\" name=\"idR\" (click)=\"$event.preventDefault()\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.Requirement.invalid }\">\n              <div *ngIf=\"submitted && f.Requirement.invalid\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.Requirement.errors.required\">Requirement is required</div>\n                </div>\n          </div>\n\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Estimate WorkLoad</label>\n            <input formControlName=\"estimateWorkLoad\" nbInput type=\"number\"  min=\"0\" placeholder=\"Estimate WorkLoad\"\n              class=\"form-control\" name=\"estimateWorkLoad\" [(ngModel)]=\"task.estimateWorkLoad\">\n              <!--[ngClass]=\"{ 'is-invalid': submitted && f.estimateWorkLoad.invalid }\"-->\n            <!-- <div *ngIf=\"submitted && f.estimateWorkLoad.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.estimateWorkLoad.errors.required\">Estimate WorkLoad is invalid</div>\n              <div *ngIf=\"f.estimateWorkLoad.errors.min\">Estimate WorkLoad must be positive</div>\n            </div> -->\n          </div>\n\n          <div class=\"form-group\">\n            <label>To finalise</label>\n            <input formControlName=\"toFinalise\" nbInput type=\"number\" min=\"0\" \n              placeholder=\"To finalise\" class=\"form-control\"\n              name=\"toFinalise\" [(ngModel)]=\"task.toFinalise\">\n              <!-- [ngClass]=\"{ 'is-invalid': submitted && f.toFinalise.invalid }\" -->\n            <!-- <div *ngIf=\"submitted && f.toFinalise.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.toFinalise.errors.required\">To Finalise is invalid</div>\n              <div *ngIf=\"f.toFinalise.errors.min\">To Finalise must be positive</div>\n            </div> -->\n          </div>\n\n            <div class=\"form-group\">\n              <label>Type</label>\n              <select formControlName=\"Type\" \n              (blur)=\"TypeValidateSelect($event.target.value)\"\n                (change)=\"TypeValidateSelect($event.target.value)\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && TypeSelectHasError}\" placeholder=\"Select Type\"\n                size=\"small\" outline status=\"success\" [(ngModel)]=\"type\" name=\"type\" (click)=\"$event.preventDefault()\">\n                <option value=\"\" selected> </option>\n                <option value={{p.value}} *ngFor=\"let p of typeList\">\n                  {{p.value}}\n                </option>\n              </select>\n              <div *ngIf=\"TypeSelectHasError\" class=\"invalid-feedback\">Type is required</div>\n            </div>\n\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Closing date</label>\n            <input formControlName=\"closingDate\" [nbDatepicker]=\"datepicker\" placeholder=\"Closing date\"\n              class=\"form-control\" [(ngModel)]=\"closingDateT\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.closingDate.errors }\">\n            <nb-datepicker #datepicker format=\"MM/dd/yyyy\"></nb-datepicker>\n            <div *ngIf=\"submitted && f.closingDate.errors\" class=\"invalid-feedback\">\n              <div>Closing Date is required</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Status</label>\n            <select formControlName=\"status\" \n            [(ngModel)]=\"parameter\" name=\"parameter\" class=\"form-control\"  \n            placeholder=\"Select Status\" size=\"small\" outline status=\"success\" (click)=\"$event.preventDefault()\">\n              <option value=\"\"  selected> </option>\n              <option value={{parameter.value}} *ngFor=\"let parameter of parameters\">\n                {{parameter.value}}\n              </option>\n            </select>\n          </div>\n\n          <div [hidden]=\"hideUsersCombo\" class=\"form-group\">\n            <!-- change that later no ! for user-->\n            <label>Employees</label>\n            <!-- Will be auto complete here -->\n            <select class=\"form-control\" placeholder=\"Select Employee\"\n              size=\"small\" outline status=\"success\" formControlName=\"employees\" [(ngModel)]=\"idEmp\" name=\"idEmp\"\n              (click)=\"employeeChange()\" >\n              <!-- <option value=\"\" disabled selected> </option> -->\n              <option *ngFor=\"let employee of sourceEmp\" value=\"{{employee.id}}\">\n                {{employee.firstName}} {{employee.lastName}}\n              </option>\n            </select>\n          </div>\n\n        </div>\n      </div>\n      <button nbButton class=\"clearButton\" type=\"reset\" outline status=\"info\">Clear</button>\n\n      <button nbButton class=\"submitButton\" hero status=\"success\" (click)=\"create()\">Submit</button>\n\n    </form>\n\n  </nb-card-body>\n</nb-card>");

/***/ }),

/***/ "ZmnQ":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/modals/taskmanagement-modals/validate-tasks/validate-tasks.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ValidateTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTasksComponent", function() { return ValidateTasksComponent; });
/* harmony import */ var _raw_loader_validate_tasks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./validate-tasks.component.html */ "gT55");
/* harmony import */ var _validate_tasks_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate-tasks.component.css */ "eEir");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/userTask.service */ "3TdX");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ValidateTasksComponent = /** @class */ (function () {
    function ValidateTasksComponent(taskService, dialogService, toastrService, ref, datePipe) {
        var _this = this;
        this.taskService = taskService;
        this.dialogService = dialogService;
        this.toastrService = toastrService;
        this.ref = ref;
        this.datePipe = datePipe;
        this.settings = {
            selectMode: 'multi',
            pager: {
                display: true,
                perPage: 5
            },
            hideSubHeader: false,
            actions: {
                add: false,
                edit: false,
                delete: true
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                userFullName: {
                    title: 'User Name',
                    type: 'string',
                },
                requirementNom: {
                    title: 'Requirement Name',
                    type: 'string',
                },
                description: {
                    title: 'Description',
                    type: 'string',
                },
                type: {
                    title: 'Type',
                    type: 'string',
                },
                status: {
                    title: 'Status',
                    type: 'string',
                },
                closingDate: {
                    title: 'Closing Date',
                    type: 'string',
                    valuePrepareFunction: function (closingDate) {
                        var raw = new Date(closingDate);
                        var formatted = _this.datePipe.transform(raw, 'dd-MM-yyyy');
                        return formatted;
                    },
                },
                estimateWorkLoad: {
                    title: 'Estimated WorkLoad',
                    type: 'string',
                },
                tofinalise: {
                    title: 'To Finalise',
                    type: 'string',
                },
                isValidated: {
                    title: 'Is validated',
                    type: 'string',
                },
            },
        };
    }
    ValidateTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasksToValidate = [];
        this.taskService.getAllNotValidated().subscribe(function (data) {
            _this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"](data);
        });
    };
    ValidateTasksComponent.prototype.showToast = function (status, message) {
        this.toastrService.success(status, message, { status: status, });
    };
    ValidateTasksComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            this.taskService.destroy(event.data.id).
                subscribe(function (data) { return _this.showToast('Task deleted successfully', 'Success'); });
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    ValidateTasksComponent.prototype.onEditConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to update?')) {
            this.taskService.update(event.newData).
                subscribe(function (data) { return _this.showToast('Task updated successfully', 'Success'); });
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    ValidateTasksComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    ValidateTasksComponent.prototype.create = function () {
        var _this = this;
        //console.log(this.tasksToValidate);
        this.tasksToValidate.forEach(function (task) {
            task.isValidated = "True";
            _this.taskService.update(task).
                subscribe(function (userTask) {
                _this.ref.close(userTask);
            });
        });
    };
    ValidateTasksComponent.prototype.rowClicked = function (event) {
        if (!this.tasksToValidate.includes(event.data)) {
            this.tasksToValidate.push(event.data); // add it into the list
        }
        else {
            if (this.tasksToValidate.includes(event.data)) {
                this.idx = this.tasksToValidate.indexOf(event.data);
                this.tasksToValidate.splice(this.idx, 1);
            }
        }
    };
    ValidateTasksComponent.ctorParameters = function () { return [
        { type: src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__["UserTaskService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDialogService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDialogRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
    ]; };
    ValidateTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-validate-tasks',
            template: _raw_loader_validate_tasks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_validate_tasks_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__["UserTaskService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDialogService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDialogRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], ValidateTasksComponent);
    return ValidateTasksComponent;
}());



/***/ }),

/***/ "Zmsh":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/timesheet/parameters-management/parameters-management.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n  <nb-card-header>\n    Parameters List\n  </nb-card-header>\n\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"onEditConfirm($event)\"\n          (deleteConfirm)=\"onDeleteConfirm($event)\">\n        </ng2-smart-table>\n\n        <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\">\n        </ngx-loading>\n\n      </div>\n      <div class=\"col-sm-6\">\n        <form>\n          <nb-card>\n            <nb-card-header>\n              Add Parameters\n            </nb-card-header>\n            <nb-card-body>\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div *ngIf=!showhide>\n                    <label>Parameter Groups</label>\n\n                    <select (ngModelChange)=\"onChange($event)\" class=\"form-control\" placeholder=\"Select Contract\"\n                      size=\"small\" outline status=\"success\" [(ngModel)]=\"group\" name=\"group\">\n                      <option value={{group}} *ngFor=\"let group of groups\">\n                        {{group}}\n                      </option>\n                    </select></div>\n\n                  <div *ngIf=showhide><label for=\"value\">Group</label>\n                    <input nbInput class=\"form-control\" id=\"newGroup\" name=\"newGroup\" placeholder=\"new Group\"\n                      [(ngModel)]=\"newGroup\">\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label for=\"newValue\">Value</label>\n                  <input nbInput class=\"form-control\" id=\"newValue\" name=\"newValue\" placeholder=\"newValue\"\n                    [(ngModel)]=\"newValue\">\n                </div>\n              </div>\n\n              <div *ngIf=!showhide>\n                <button nbButton hero status=\"success\" (click)=\"showhide=!showhide\">Add Group</button>\n                <button nbButton class=\"submitButton\" type=\"submit\" hero status=\"success\" (click)=\"addValue()\">Add\n                  Value</button>\n              </div>\n\n              <div *ngIf=showhide>\n                <button nbButton hero status=\"success\" (click)=\"showhide=!showhide\">Back</button>\n                <button nbButton class=\"submitButton\" type=\"submit\" hero status=\"success\" (click)=\"addGroup()\">Add\n                  Group</button>\n              </div>\n\n            </nb-card-body>\n          </nb-card>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>");

/***/ }),

/***/ "eEir":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/modals/taskmanagement-modals/validate-tasks/validate-tasks.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-card-header button {\r\n    float: right;\r\n  }\r\n\r\n  button {\r\n    margin: 1rem;\r\n  }\r\n\r\n  [nbInput] {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .form-control:focus {\r\n    box-shadow:none;\r\n  }\r\n\r\n  .submitButton {\r\n    float: right;\r\n  }\r\n\r\n  nb-card-header button {\r\n    float: right;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlLXRhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InZhbGlkYXRlLXRhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkLWhlYWRlciBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICB9XHJcblxyXG4gIFtuYklucHV0XSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgfVxyXG5cclxuICAuc3VibWl0QnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIG5iLWNhcmQtaGVhZGVyIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "ew0r":
/*!*********************************************!*\
  !*** ./src/app/modules/container.module.ts ***!
  \*********************************************/
/*! exports provided: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerModule", function() { return ContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_modules_modals_requirement_modals_create_requirement_create_requirement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/modals/requirement-modals/create-requirement/create-requirement.component */ "idQz");
/* harmony import */ var src_app_modules_modals_customersmanagement_modals_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/modals/customersmanagement-modals/create-customer/create-customer.component */ "dwlI");
/* harmony import */ var src_app_modules_modals_contractsmanagement_modals_create_contract_create_contract_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/modals/contractsmanagement-modals/create-contract/create-contract.component */ "rRmc");
/* harmony import */ var src_app_modules_modals_taskmanagement_modals_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/modals/taskmanagement-modals/create-task/create-task.component */ "s/Lv");
/* harmony import */ var src_app_modules_modals_taskmanagement_modals_list_task_list_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/modals/taskmanagement-modals/list-task/list-task.component */ "F6nW");
/* harmony import */ var src_app_modules_modals_contractsmanagement_modals_list_contract_list_contract_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/modals/contractsmanagement-modals/list-contract/list-contract.component */ "sni/");
/* harmony import */ var src_app_modules_modals_usersmanagement_modals_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/modals/usersmanagement-modals/create-user/create-user.component */ "/NKc");
/* harmony import */ var src_app_modules_modals_teamsmanagement_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/modals/teamsmanagement/create-team/create-team.component */ "0Sn9");
/* harmony import */ var src_app_modules_modals_usersmanagement_modals_request_holiday_request_holiday_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/modals/usersmanagement-modals/request-holiday/request-holiday.component */ "YEg7");
/* harmony import */ var src_app_modules_modals_usersmanagement_modals_assign_user_to_team_assign_user_to_team_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/modals/usersmanagement-modals/assign-user-to-team/assign-user-to-team.component */ "cykN");
/* harmony import */ var src_app_modules_modals_releasemanagement_modals_create_release_create_release_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/modals/releasemanagement-modals/create-release/create-release.component */ "gycS");
/* harmony import */ var src_app_modules_renderers_button_list_contracts_render_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/renderers/button-list-contracts-render.component */ "yI9j");
/* harmony import */ var src_app_modules_renderers_button_list_tasks_render_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modules/renderers/button-list-tasks-render.component */ "gIBt");
/* harmony import */ var src_app_modules_renderers_button_timesheet_render_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/modules/renderers/button-timesheet-render.component */ "Piuu");
/* harmony import */ var src_app_modules_pages_timesheet_releasemanagement_releasemanagement_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/modules/pages/timesheet/releasemanagement/releasemanagement.component */ "Dd78");
/* harmony import */ var src_app_modules_pages_timesheet_contractsmanagement_contractsmanagement_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/modules/pages/timesheet/contractsmanagement/contractsmanagement.component */ "jJDg");
/* harmony import */ var src_app_modules_pages_timesheet_customersmanagement_customersmanagement_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/modules/pages/timesheet/customersmanagement/customersmanagement.component */ "O75W");
/* harmony import */ var src_app_modules_pages_timesheet_holidaymanagement_holidaymanagement_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/modules/pages/timesheet/holidaymanagement/holidaymanagement.component */ "jHV7");
/* harmony import */ var src_app_modules_pages_timesheet_teamsmanagement_teamsmanagement_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/modules/pages/timesheet/teamsmanagement/teamsmanagement.component */ "IWgk");
/* harmony import */ var src_app_modules_pages_timesheet_usersmanagement_usersmanagement_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/modules/pages/timesheet/usersmanagement/usersmanagement.component */ "n8v7");
/* harmony import */ var src_app_modules_pages_timesheet_timesheetmanagement_timesheetmanagement_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/modules/pages/timesheet/timesheetmanagement/timesheetmanagement.component */ "cb1p");
/* harmony import */ var src_app_modules_pages_timesheet_requirement_requirement_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/modules/pages/timesheet/requirement/requirement.component */ "N+sy");
/* harmony import */ var _pages_timesheet_taskmanagement_taskmanagement_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/timesheet/taskmanagement/taskmanagement.component */ "0KCB");
/* harmony import */ var src_app_modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/modules/pages/home/home.component */ "Hque");
/* harmony import */ var _container_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./container.component */ "TAKS");
/* harmony import */ var src_app_modules_container_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/modules/container-routing.module */ "rue9");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../shared/layout/layout.module */ "pV/B");
/* harmony import */ var _renderers_button_list_employees_render_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./renderers/button-list-employees-render.component */ "y366");
/* harmony import */ var _renderers_button_list_employees_team_render_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./renderers/button-list-employees-team-render.component */ "wIkX");
/* harmony import */ var _modals_usersmanagement_modals_assigned_users_to_team_assigned_users_to_team_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modals/usersmanagement-modals/assigned-users-to-team/assigned-users-to-team.component */ "KAYy");
/* harmony import */ var _renderers_ButtonListContractsUserRenderComponent__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./renderers/ButtonListContractsUserRenderComponent */ "CxUo");
/* harmony import */ var _modals_contractsmanagement_modals_list_contract_rate_list_contract_rate_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modals/contractsmanagement-modals/list-contract-rate/list-contract-rate.component */ "RtOu");
/* harmony import */ var _renderers_ButtonAddContractRenderComponent__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./renderers/ButtonAddContractRenderComponent */ "QBdM");
/* harmony import */ var _modals_contractsmanagement_modals_contract_to_user_contract_to_user_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modals/contractsmanagement-modals/contract-to-user/contract-to-user.component */ "l9q2");
/* harmony import */ var _modals_taskmanagement_modals_validate_tasks_validate_tasks_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modals/taskmanagement-modals/validate-tasks/validate-tasks.component */ "ZmnQ");
/* harmony import */ var _modals_usersmanagement_modals_profile_profile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modals/usersmanagement-modals/profile/profile.component */ "nNYp");
/* harmony import */ var _modals_usersmanagement_modals_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modals/usersmanagement-modals/reset-password/reset-password.component */ "uH41");
/* harmony import */ var _renderers_button_reset_password_render_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./renderers/button-reset-password-render-component */ "TPK3");
/* harmony import */ var _pages_timesheet_parameters_management_parameters_management_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/timesheet/parameters-management/parameters-management.component */ "k2xv");
/* harmony import */ var _renderers_custom_editor_duration_comment_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./renderers/custom-editor-duration-comment.component */ "mdBU");
/* harmony import */ var _renderers_custom_render_duration_comment_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./renderers/custom-render-duration-comment.component */ "0Nl+");
/* harmony import */ var _modals_timesheetmanagement_modals_add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./modals/timesheetmanagement-modals/add-tasks/add-tasks.component */ "gX8G");
/* harmony import */ var _modals_timesheetmanagement_modals_add_other_task_add_other_task_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./modals/timesheetmanagement-modals/add-other-task/add-other-task.component */ "wRmK");
/* harmony import */ var _modals_taskmanagement_modals_create_task_in_list_task_create_task_in_list_task_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./modals/taskmanagement-modals/create-task-in-list-task/create-task-in-list-task.component */ "ItP9");
/* harmony import */ var _modals_customersmanagement_modals_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./modals/customersmanagement-modals/customer-details/customer-details.component */ "9gRR");
/* harmony import */ var _renderers_button_customer_details_render_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./renderers/button-customer-details-render.component */ "KzB1");
/* harmony import */ var _pages_timesheet_personalmanagement_personalmanagement_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/timesheet/personalmanagement/personalmanagement.component */ "XyRq");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-loading */ "qC+V");
/* harmony import */ var _renderers_CustomEditorUserRoleComponent__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./renderers/CustomEditorUserRoleComponent */ "4wPG");
/* harmony import */ var _renderers_custom_editor_requirement_status__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./renderers/custom-editor-requirement-status */ "ubHN");
/* harmony import */ var _renderers_custom_editor_requirement_type__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./renderers/custom-editor-requirement-type */ "l4X2");
/* harmony import */ var _renderers_custom_editor_task_type__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./renderers/custom-editor-task-type */ "43ZY");
/* harmony import */ var _renderers_custom_editor_task_status__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./renderers/custom-editor-task-status */ "XkAL");
/* harmony import */ var _renderers_custom_editor_civilstatus__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./renderers/custom-editor-civilstatus */ "ZIuQ");
/* harmony import */ var _renderers_custom_editor_team_type__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./renderers/custom-editor-team-type */ "q3Cx");
/* harmony import */ var _renderers_custom_editor_contract_status__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./renderers/custom-editor-contract-status */ "DuWQ");
/* harmony import */ var _renderers_custom_date_editor__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./renderers/custom-date-editor */ "GTGX");
/* harmony import */ var _pages_timesheet_report_and_statistics_management_report_and_statistics_management_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/timesheet/report-and-statistics-management/report-and-statistics-management.component */ "08ia");
/* harmony import */ var _pages_timesheet_pointing_chart_pointing_chart_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pages/timesheet/pointing-chart/pointing-chart.component */ "V5NM");
/* harmony import */ var _pages_timesheet_generic_task_generic_task_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./pages/timesheet/generic-task/generic-task.component */ "5CiB");
/* harmony import */ var _modals_taskmanagement_modals_create_other_task_create_other_task_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./modals/taskmanagement-modals/create-other-task/create-other-task.component */ "AoG1");
/* harmony import */ var _modals_delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./modals/delete-error/delete-error.component */ "U4aP");
/* harmony import */ var _renderers_custom_editor_other_task_type_render_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./renderers/custom-editor-other-task-type-render.component */ "iUNn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































































var ContainerModule = /** @class */ (function () {
    function ContainerModule() {
    }
    ContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngx_loading__WEBPACK_IMPORTED_MODULE_52__["NgxLoadingModule"].forRoot({}),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_modules_container_routing_module__WEBPACK_IMPORTED_MODULE_30__["ContainerRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"].forChild(),
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbProgressBarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCalendarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
                _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_31__["LayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCalendarRangeModule"],
            ],
            declarations: [
                src_app_modules_pages_timesheet_requirement_requirement_component__WEBPACK_IMPORTED_MODULE_26__["RequirementComponent"], src_app_modules_modals_requirement_modals_create_requirement_create_requirement_component__WEBPACK_IMPORTED_MODULE_5__["CreateRequirementComponent"], src_app_modules_modals_customersmanagement_modals_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_6__["CreateCustomerComponent"],
                src_app_modules_renderers_button_timesheet_render_component__WEBPACK_IMPORTED_MODULE_18__["ButtonTimeSheetRenderComponent"], src_app_modules_pages_timesheet_customersmanagement_customersmanagement_component__WEBPACK_IMPORTED_MODULE_21__["CustomersmanagementComponent"], src_app_modules_modals_contractsmanagement_modals_create_contract_create_contract_component__WEBPACK_IMPORTED_MODULE_7__["CreateContractComponent"],
                src_app_modules_modals_taskmanagement_modals_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaskComponent"], src_app_modules_modals_taskmanagement_modals_list_task_list_task_component__WEBPACK_IMPORTED_MODULE_9__["ListTaskComponent"], src_app_modules_renderers_button_list_tasks_render_component__WEBPACK_IMPORTED_MODULE_17__["ButtonListTasksRenderComponent"],
                src_app_modules_modals_contractsmanagement_modals_list_contract_list_contract_component__WEBPACK_IMPORTED_MODULE_10__["ListContractComponent"], src_app_modules_renderers_button_list_contracts_render_component__WEBPACK_IMPORTED_MODULE_16__["ButtonListContractsRenderComponent"], src_app_modules_pages_timesheet_timesheetmanagement_timesheetmanagement_component__WEBPACK_IMPORTED_MODULE_25__["TimesheetmanagementComponent"],
                src_app_modules_pages_timesheet_usersmanagement_usersmanagement_component__WEBPACK_IMPORTED_MODULE_24__["UsersmanagementComponent"], src_app_modules_pages_timesheet_teamsmanagement_teamsmanagement_component__WEBPACK_IMPORTED_MODULE_23__["TeamsmanagementComponent"],
                src_app_modules_modals_usersmanagement_modals_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"], src_app_modules_modals_teamsmanagement_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_12__["CreateTeamComponent"], src_app_modules_modals_usersmanagement_modals_request_holiday_request_holiday_component__WEBPACK_IMPORTED_MODULE_13__["RequestHolidayComponent"],
                src_app_modules_modals_usersmanagement_modals_assign_user_to_team_assign_user_to_team_component__WEBPACK_IMPORTED_MODULE_14__["AssignUserToTeamComponent"], src_app_modules_pages_timesheet_holidaymanagement_holidaymanagement_component__WEBPACK_IMPORTED_MODULE_22__["HolidaymanagementComponent"], src_app_modules_pages_timesheet_contractsmanagement_contractsmanagement_component__WEBPACK_IMPORTED_MODULE_20__["ContractsmanagementComponent"],
                src_app_modules_pages_timesheet_releasemanagement_releasemanagement_component__WEBPACK_IMPORTED_MODULE_19__["ReleasemanagementComponent"], src_app_modules_modals_releasemanagement_modals_create_release_create_release_component__WEBPACK_IMPORTED_MODULE_15__["CreateReleaseComponent"], _renderers_button_list_employees_render_component__WEBPACK_IMPORTED_MODULE_32__["ButtonListEmployeesRenderComponent"],
                _pages_timesheet_taskmanagement_taskmanagement_component__WEBPACK_IMPORTED_MODULE_27__["TaskmanagementComponent"],
                _container_component__WEBPACK_IMPORTED_MODULE_29__["ContainerComponent"],
                src_app_modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"],
                _renderers_button_list_employees_team_render_component__WEBPACK_IMPORTED_MODULE_33__["ButtonListEmployeesTeamRenderComponent"],
                _modals_usersmanagement_modals_assigned_users_to_team_assigned_users_to_team_component__WEBPACK_IMPORTED_MODULE_34__["AssignedUsersToTeamComponent"], _renderers_ButtonListContractsUserRenderComponent__WEBPACK_IMPORTED_MODULE_35__["ButtonListContractsUserRenderComponent"], _modals_contractsmanagement_modals_list_contract_rate_list_contract_rate_component__WEBPACK_IMPORTED_MODULE_36__["ListContractRateComponent"],
                _renderers_ButtonAddContractRenderComponent__WEBPACK_IMPORTED_MODULE_37__["ButtonAddContractRenderComponent"], _modals_contractsmanagement_modals_contract_to_user_contract_to_user_component__WEBPACK_IMPORTED_MODULE_38__["ContractToUserComponent"], _modals_taskmanagement_modals_validate_tasks_validate_tasks_component__WEBPACK_IMPORTED_MODULE_39__["ValidateTasksComponent"],
                _renderers_custom_editor_duration_comment_component__WEBPACK_IMPORTED_MODULE_44__["CustomEditorDurationCommentComponent"], _renderers_custom_render_duration_comment_component__WEBPACK_IMPORTED_MODULE_45__["CustomRenderDurationCommentComponent"], _renderers_ButtonAddContractRenderComponent__WEBPACK_IMPORTED_MODULE_37__["ButtonAddContractRenderComponent"],
                _modals_contractsmanagement_modals_contract_to_user_contract_to_user_component__WEBPACK_IMPORTED_MODULE_38__["ContractToUserComponent"], _modals_taskmanagement_modals_validate_tasks_validate_tasks_component__WEBPACK_IMPORTED_MODULE_39__["ValidateTasksComponent"], _modals_usersmanagement_modals_profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"],
                _modals_usersmanagement_modals_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_41__["ResetPasswordComponent"], _renderers_button_reset_password_render_component__WEBPACK_IMPORTED_MODULE_42__["ButtonResetPasswordRenderComponent"], _pages_timesheet_parameters_management_parameters_management_component__WEBPACK_IMPORTED_MODULE_43__["ParametersManagementComponent"],
                _modals_timesheetmanagement_modals_add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_46__["AddTasksComponent"], _modals_timesheetmanagement_modals_add_other_task_add_other_task_component__WEBPACK_IMPORTED_MODULE_47__["AddOtherTaskComponent"], _modals_taskmanagement_modals_create_task_in_list_task_create_task_in_list_task_component__WEBPACK_IMPORTED_MODULE_48__["CreateTaskInListTaskComponent"],
                _modals_customersmanagement_modals_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_49__["CustomerDetailsComponent"], _renderers_button_customer_details_render_component__WEBPACK_IMPORTED_MODULE_50__["ButtonCustomerDetailsRenderComponent"], _pages_timesheet_personalmanagement_personalmanagement_component__WEBPACK_IMPORTED_MODULE_51__["PersonalmanagementComponent"],
                _renderers_CustomEditorUserRoleComponent__WEBPACK_IMPORTED_MODULE_53__["CustomEditorUserRoleComponent"], _renderers_custom_editor_requirement_status__WEBPACK_IMPORTED_MODULE_54__["CustomEditorRequirementStatus"], _renderers_custom_editor_requirement_type__WEBPACK_IMPORTED_MODULE_55__["CustomEditorRequirementType"],
                _renderers_custom_editor_task_type__WEBPACK_IMPORTED_MODULE_56__["CustomEditorTaskType"], _renderers_custom_editor_task_status__WEBPACK_IMPORTED_MODULE_57__["CustomEditorTaskStatus"], _renderers_custom_editor_civilstatus__WEBPACK_IMPORTED_MODULE_58__["CustomEditorCivilStatus"], _renderers_custom_editor_team_type__WEBPACK_IMPORTED_MODULE_59__["CustomEditorTeamType"],
                _renderers_custom_editor_contract_status__WEBPACK_IMPORTED_MODULE_60__["CustomEditorContractStatus"], _renderers_custom_date_editor__WEBPACK_IMPORTED_MODULE_61__["CustomDateEditor"], _pages_timesheet_report_and_statistics_management_report_and_statistics_management_component__WEBPACK_IMPORTED_MODULE_62__["ReportAndStatisticsManagementComponent"], _pages_timesheet_pointing_chart_pointing_chart_component__WEBPACK_IMPORTED_MODULE_63__["PointingChartComponent"],
                _pages_timesheet_generic_task_generic_task_component__WEBPACK_IMPORTED_MODULE_64__["GenericTaskComponent"], _modals_taskmanagement_modals_create_other_task_create_other_task_component__WEBPACK_IMPORTED_MODULE_65__["CreateOtherTaskComponent"], _modals_delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_66__["DeleteErrorComponent"], _renderers_custom_editor_other_task_type_render_component__WEBPACK_IMPORTED_MODULE_67__["CustomEditorOtherTaskType"]
            ],
            providers: [
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]
            ],
            entryComponents: [
                src_app_modules_pages_timesheet_requirement_requirement_component__WEBPACK_IMPORTED_MODULE_26__["RequirementComponent"], src_app_modules_modals_requirement_modals_create_requirement_create_requirement_component__WEBPACK_IMPORTED_MODULE_5__["CreateRequirementComponent"], src_app_modules_modals_customersmanagement_modals_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_6__["CreateCustomerComponent"],
                src_app_modules_renderers_button_timesheet_render_component__WEBPACK_IMPORTED_MODULE_18__["ButtonTimeSheetRenderComponent"], src_app_modules_pages_timesheet_customersmanagement_customersmanagement_component__WEBPACK_IMPORTED_MODULE_21__["CustomersmanagementComponent"], src_app_modules_modals_contractsmanagement_modals_create_contract_create_contract_component__WEBPACK_IMPORTED_MODULE_7__["CreateContractComponent"],
                src_app_modules_modals_taskmanagement_modals_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaskComponent"], src_app_modules_modals_taskmanagement_modals_list_task_list_task_component__WEBPACK_IMPORTED_MODULE_9__["ListTaskComponent"], src_app_modules_renderers_button_list_tasks_render_component__WEBPACK_IMPORTED_MODULE_17__["ButtonListTasksRenderComponent"],
                src_app_modules_modals_contractsmanagement_modals_list_contract_list_contract_component__WEBPACK_IMPORTED_MODULE_10__["ListContractComponent"], src_app_modules_renderers_button_list_contracts_render_component__WEBPACK_IMPORTED_MODULE_16__["ButtonListContractsRenderComponent"], src_app_modules_pages_timesheet_timesheetmanagement_timesheetmanagement_component__WEBPACK_IMPORTED_MODULE_25__["TimesheetmanagementComponent"],
                src_app_modules_pages_timesheet_usersmanagement_usersmanagement_component__WEBPACK_IMPORTED_MODULE_24__["UsersmanagementComponent"], src_app_modules_pages_timesheet_teamsmanagement_teamsmanagement_component__WEBPACK_IMPORTED_MODULE_23__["TeamsmanagementComponent"],
                src_app_modules_modals_usersmanagement_modals_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"], src_app_modules_modals_teamsmanagement_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_12__["CreateTeamComponent"], src_app_modules_modals_usersmanagement_modals_request_holiday_request_holiday_component__WEBPACK_IMPORTED_MODULE_13__["RequestHolidayComponent"],
                src_app_modules_modals_usersmanagement_modals_assign_user_to_team_assign_user_to_team_component__WEBPACK_IMPORTED_MODULE_14__["AssignUserToTeamComponent"], src_app_modules_pages_timesheet_holidaymanagement_holidaymanagement_component__WEBPACK_IMPORTED_MODULE_22__["HolidaymanagementComponent"], src_app_modules_pages_timesheet_contractsmanagement_contractsmanagement_component__WEBPACK_IMPORTED_MODULE_20__["ContractsmanagementComponent"],
                src_app_modules_pages_timesheet_releasemanagement_releasemanagement_component__WEBPACK_IMPORTED_MODULE_19__["ReleasemanagementComponent"], src_app_modules_modals_releasemanagement_modals_create_release_create_release_component__WEBPACK_IMPORTED_MODULE_15__["CreateReleaseComponent"], _renderers_button_list_employees_render_component__WEBPACK_IMPORTED_MODULE_32__["ButtonListEmployeesRenderComponent"],
                _pages_timesheet_taskmanagement_taskmanagement_component__WEBPACK_IMPORTED_MODULE_27__["TaskmanagementComponent"], _renderers_button_list_employees_team_render_component__WEBPACK_IMPORTED_MODULE_33__["ButtonListEmployeesTeamRenderComponent"], _modals_usersmanagement_modals_assigned_users_to_team_assigned_users_to_team_component__WEBPACK_IMPORTED_MODULE_34__["AssignedUsersToTeamComponent"],
                _renderers_ButtonListContractsUserRenderComponent__WEBPACK_IMPORTED_MODULE_35__["ButtonListContractsUserRenderComponent"], _modals_contractsmanagement_modals_list_contract_rate_list_contract_rate_component__WEBPACK_IMPORTED_MODULE_36__["ListContractRateComponent"], _renderers_ButtonAddContractRenderComponent__WEBPACK_IMPORTED_MODULE_37__["ButtonAddContractRenderComponent"],
                _modals_contractsmanagement_modals_contract_to_user_contract_to_user_component__WEBPACK_IMPORTED_MODULE_38__["ContractToUserComponent"], _modals_taskmanagement_modals_validate_tasks_validate_tasks_component__WEBPACK_IMPORTED_MODULE_39__["ValidateTasksComponent"], _renderers_custom_editor_duration_comment_component__WEBPACK_IMPORTED_MODULE_44__["CustomEditorDurationCommentComponent"],
                _renderers_custom_render_duration_comment_component__WEBPACK_IMPORTED_MODULE_45__["CustomRenderDurationCommentComponent"], _modals_contractsmanagement_modals_contract_to_user_contract_to_user_component__WEBPACK_IMPORTED_MODULE_38__["ContractToUserComponent"], _modals_taskmanagement_modals_validate_tasks_validate_tasks_component__WEBPACK_IMPORTED_MODULE_39__["ValidateTasksComponent"],
                _modals_usersmanagement_modals_profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"], _modals_usersmanagement_modals_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_41__["ResetPasswordComponent"], _renderers_button_reset_password_render_component__WEBPACK_IMPORTED_MODULE_42__["ButtonResetPasswordRenderComponent"],
                _pages_timesheet_parameters_management_parameters_management_component__WEBPACK_IMPORTED_MODULE_43__["ParametersManagementComponent"], _modals_timesheetmanagement_modals_add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_46__["AddTasksComponent"], _modals_timesheetmanagement_modals_add_other_task_add_other_task_component__WEBPACK_IMPORTED_MODULE_47__["AddOtherTaskComponent"],
                _modals_taskmanagement_modals_create_task_in_list_task_create_task_in_list_task_component__WEBPACK_IMPORTED_MODULE_48__["CreateTaskInListTaskComponent"], _renderers_CustomEditorUserRoleComponent__WEBPACK_IMPORTED_MODULE_53__["CustomEditorUserRoleComponent"], _renderers_custom_editor_requirement_status__WEBPACK_IMPORTED_MODULE_54__["CustomEditorRequirementStatus"], _renderers_custom_editor_requirement_type__WEBPACK_IMPORTED_MODULE_55__["CustomEditorRequirementType"],
                _renderers_custom_editor_task_type__WEBPACK_IMPORTED_MODULE_56__["CustomEditorTaskType"], _renderers_custom_editor_task_status__WEBPACK_IMPORTED_MODULE_57__["CustomEditorTaskStatus"], _renderers_custom_editor_civilstatus__WEBPACK_IMPORTED_MODULE_58__["CustomEditorCivilStatus"], _renderers_custom_editor_team_type__WEBPACK_IMPORTED_MODULE_59__["CustomEditorTeamType"],
                _renderers_custom_editor_contract_status__WEBPACK_IMPORTED_MODULE_60__["CustomEditorContractStatus"], _renderers_custom_date_editor__WEBPACK_IMPORTED_MODULE_61__["CustomDateEditor"], _pages_timesheet_pointing_chart_pointing_chart_component__WEBPACK_IMPORTED_MODULE_63__["PointingChartComponent"], _pages_timesheet_generic_task_generic_task_component__WEBPACK_IMPORTED_MODULE_64__["GenericTaskComponent"], _modals_taskmanagement_modals_create_other_task_create_other_task_component__WEBPACK_IMPORTED_MODULE_65__["CreateOtherTaskComponent"],
                _modals_delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_66__["DeleteErrorComponent"], _renderers_custom_editor_other_task_type_render_component__WEBPACK_IMPORTED_MODULE_67__["CustomEditorOtherTaskType"]
            ]
        })
    ], ContainerModule);
    return ContainerModule;
}());



/***/ }),

/***/ "fOC3":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/modals/taskmanagement-modals/create-other-task/create-other-task.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [style.width.px]=\"1400\" [style.height.px]=\"900\">\n  <nb-card-header>\n    Add Generic Task\n    <button nbButton hero status=\"danger\" (click)=\"dismiss()\">Close</button>\n  </nb-card-header>\n\n  <nb-card-body>\n    <div class=\"form-group\">\n      <h5>Requirements List</h5>\n      <ng2-smart-table [settings]=\"settingsReq\" [source]=\"sourceReq\" (userRowSelect)=\"rowClicked($event)\">\n      </ng2-smart-table>\n    </div>\n    <form [formGroup]=\"taskForm\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea formControlName=\"description\" nbInput class=\"form-control\" rows=\"4\" placeholder=\"Description\"\n              name=\"description\" [(ngModel)]=\"task.description\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.description.invalid }\"></textarea>\n            <div *ngIf=\"submitted && f.description.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.description.errors.required\">Description is required</div>\n            </div>\n          </div>\n\n          \n\n        </div>\n        <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"contract\">Requirement</label>\n          <input formControlName=\"Requirement\"  disabled class=\"form-control\" size=\"small\" outline\n            status=\"success\" [(ngModel)]=\"idR\" name=\"idR\" (click)=\"$event.preventDefault()\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.Requirement.invalid }\">\n            <div *ngIf=\"submitted && f.Requirement.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.Requirement.errors.required\">Requirement is required</div>\n              </div>\n        </div>\n        \n        <div class=\"form-group\">\n          <label>Type</label>\n          <select formControlName=\"Type\" \n          (blur)=\"TypeValidateSelect($event.target.value)\"\n            (change)=\"TypeValidateSelect($event.target.value)\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && TypeSelectHasError}\" placeholder=\"Select Type\"\n            size=\"small\" outline status=\"success\" [(ngModel)]=\"type\" name=\"type\" (click)=\"$event.preventDefault()\">\n            <option value=\"\" selected> </option>\n            <option value={{p.value}} *ngFor=\"let p of typeList\">\n              {{p.value}}\n            </option>\n          </select>\n          <div *ngIf=\"TypeSelectHasError\" class=\"invalid-feedback\">Type is required</div>\n        </div>\n      </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Closing date</label>\n            <input formControlName=\"closingDate\" [nbDatepicker]=\"datepicker\" placeholder=\"Closing date\"\n              class=\"form-control\" [(ngModel)]=\"closingDateT\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.closingDate.errors }\">\n            <nb-datepicker #datepicker format=\"MM/dd/yyyy\"></nb-datepicker>\n            <div *ngIf=\"submitted && f.closingDate.errors\" class=\"invalid-feedback\">\n              <div>Closing Date is required</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Status</label>\n            <select formControlName=\"status\" \n            [(ngModel)]=\"parameter\" name=\"parameter\" class=\"form-control\"  \n            placeholder=\"Select Status\" size=\"small\" outline status=\"success\" (click)=\"$event.preventDefault()\">\n              <option value=\"\"  selected> </option>\n              <option value={{parameter.value}} *ngFor=\"let parameter of parameters\">\n                {{parameter.value}}\n              </option>\n            </select>\n          </div>\n\n          \n\n        </div>\n      </div>\n      <button nbButton class=\"clearButton\" type=\"reset\" outline status=\"info\">Clear</button>\n\n      <button nbButton class=\"submitButton\" hero status=\"success\" (click)=\"create()\">Submit</button>\n\n    </form>\n\n  </nb-card-body>\n</nb-card>");

/***/ }),

/***/ "gT55":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/modals/taskmanagement-modals/validate-tasks/validate-tasks.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [style.width.px]=\"1200\" [style.height.px]=\"700\">\n  <nb-card-header>\n    Not Validated Tasks\n    <button nbButton hero status=\"danger\" (click)=\"dismiss()\">Close</button>\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" \n      (editConfirm)=\"onEditConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n      (userRowSelect)=\"rowClicked($event)\">\n    </ng2-smart-table>\n    <br>\n    <button nbButton class=\"submitButton\" (click)=\"create()\" type=\"submit\" hero status=\"success\">Validate</button>\n\n  </nb-card-body>\n\n</nb-card>\n\n\n");

/***/ }),

/***/ "iUNn":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/renderers/custom-editor-other-task-type-render.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomEditorOtherTaskType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEditorOtherTaskType", function() { return CustomEditorOtherTaskType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/parameter.service */ "xmDL");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomEditorOtherTaskType = /** @class */ (function (_super) {
    __extends(CustomEditorOtherTaskType, _super);
    function CustomEditorOtherTaskType(parameterService) {
        var _this = _super.call(this) || this;
        _this.parameterService = parameterService;
        return _this;
    }
    CustomEditorOtherTaskType.prototype.ngOnInit = function () {
        var _this = this;
        this.parameterService.getByGroup("HRTasksType")
            .subscribe(function (data) { return _this.types = data; });
    };
    CustomEditorOtherTaskType.prototype.onChange = function (deviceValue) {
        this.cell.newValue = deviceValue;
    };
    CustomEditorOtherTaskType.ctorParameters = function () { return [
        { type: src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_2__["ParameterService"] }
    ]; };
    CustomEditorOtherTaskType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <select name=\"types\"\n    [(ngModel)]=\"type\" (click)=\"$event.preventDefault()\" (change)=\"onChange($event.target.value)\">\n    <option Selected value={{type.value}} *ngFor=\"let type of types\" >\n        {{type.value}}\n    </option>\n  </select>\n  ",
        }),
        __metadata("design:paramtypes", [src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_2__["ParameterService"]])
    ], CustomEditorOtherTaskType);
    return CustomEditorOtherTaskType;
}(ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["DefaultEditor"]));



/***/ }),

/***/ "k2xv":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pages/timesheet/parameters-management/parameters-management.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ParametersManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersManagementComponent", function() { return ParametersManagementComponent; });
/* harmony import */ var _raw_loader_parameters_management_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./parameters-management.component.html */ "Zmsh");
/* harmony import */ var _parameters_management_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters-management.component.css */ "FT3U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/parameter.service */ "xmDL");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var src_app_core_models_parameter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/models/parameter.model */ "TEOU");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var src_app_modules_modals_delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/modals/delete-error/delete-error.component */ "U4aP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ParametersManagementComponent = /** @class */ (function () {
    function ParametersManagementComponent(parameterservice, toastrService, dialogService) {
        this.parameterservice = parameterservice;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.loading = false; //for loading
        this.submittedV = false;
        this.submittedG = false;
        this.showhide = false;
        this.parameter = new src_app_core_models_parameter_model__WEBPACK_IMPORTED_MODULE_5__["Parameter"]();
        this.settings = {
            hideSubHeader: false,
            actions: {
                add: false,
                edit: true,
                delete: true
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                group: {
                    title: 'Groupe',
                    type: 'string',
                },
                value: {
                    title: 'Value',
                    type: 'string',
                },
            },
        };
    }
    ParametersManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.parameterservice.getAll().subscribe(function (data) {
            _this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"](data);
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            //...
        });
        this.parameterservice.getGroup().subscribe(function (data) {
            _this.groups = data;
            _this.groups.push("Add a new Group...");
        });
    };
    ParametersManagementComponent.prototype.addGroup = function () {
        var _this = this;
        this.parameter.Group = this.newGroup;
        this.parameter.Value = this.newValue;
        this.parameterservice.create(this.parameter).
            subscribe(function (data) {
            _this.source.prepend(data);
            _this.showhide = !_this.showhide;
            _this.parameterservice.getGroup().subscribe(function (data) {
                _this.groups = data;
                _this.groups.push("Add a new Group...");
            });
        });
    };
    ParametersManagementComponent.prototype.addValue = function () {
        var _this = this;
        this.parameter.Group = this.group;
        this.parameter.Value = this.newValue;
        this.parameterservice.create(this.parameter).
            subscribe(function (data) {
            _this.source.prepend(data);
        });
    };
    ParametersManagementComponent.prototype.onChange = function (selectedGroup) {
        if (selectedGroup === "Add a new Group...")
            this.showhide = !(this.showhide);
    };
    ParametersManagementComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        var dataToDelete = event.data;
        this.loading = true;
        if (window.confirm('Are you sure you want to delete?')) {
            this.parameterservice.destroy(event.data.id).
                subscribe(function (data) {
                if (data == -2) {
                    _this.source.prepend(dataToDelete);
                    _this.dialogService.open(src_app_modules_modals_delete_error_delete_error_component__WEBPACK_IMPORTED_MODULE_7__["DeleteErrorComponent"]);
                }
                else if (data == 0) {
                    _this.showToast('Parameter deleted successfully', 'Success');
                }
                else {
                    _this.showToast('Unknown deletion error', 'Success');
                }
            });
            this.loading = false;
            event.confirm.resolve();
        }
        else {
            this.loading = false;
            event.confirm.reject();
        }
    };
    ParametersManagementComponent.prototype.onEditConfirm = function (event) {
        var _this = this;
        this.loading = true;
        if (window.confirm('Are you sure you want to update?')) {
            this.parameterservice.update(event.newData).
                subscribe(function () { return _this.showToast('Parameter updated successfully', 'Success'); });
            this.loading = false;
            event.confirm.resolve();
        }
        else {
            this.loading = false;
            event.confirm.reject();
        }
    };
    ParametersManagementComponent.prototype.showToast = function (status, message) {
        this.toastrService.success(status, message, { status: status, });
    };
    ParametersManagementComponent.ctorParameters = function () { return [
        { type: src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_3__["ParameterService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogService"] }
    ]; };
    ParametersManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-parameters-management',
            template: _raw_loader_parameters_management_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_parameters_management_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_3__["ParameterService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogService"]])
    ], ParametersManagementComponent);
    return ParametersManagementComponent;
}());



/***/ }),

/***/ "kLqA":
/*!***************************************************!*\
  !*** ./node_modules/guid-typescript/dist/guid.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var Guid =
/** @class */
function () {
  function Guid(guid) {
    if (!guid) {
      throw new TypeError("Invalid argument; `value` has no value.");
    }

    this.value = Guid.EMPTY;

    if (guid && Guid.isGuid(guid)) {
      this.value = guid;
    }
  }

  Guid.isGuid = function (guid) {
    var value = guid.toString();
    return guid && (guid instanceof Guid || Guid.validator.test(value));
  };

  Guid.create = function () {
    return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-"));
  };

  Guid.createEmpty = function () {
    return new Guid("emptyguid");
  };

  Guid.parse = function (guid) {
    return new Guid(guid);
  };

  Guid.raw = function () {
    return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
  };

  Guid.gen = function (count) {
    var out = "";

    for (var i = 0; i < count; i++) {
      // tslint:disable-next-line:no-bitwise
      out += ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    return out;
  };

  Guid.prototype.equals = function (other) {
    // Comparing string `value` against provided `guid` will auto-call
    // toString on `guid` for comparison
    return Guid.isGuid(other) && this.value === other.toString();
  };

  Guid.prototype.isEmpty = function () {
    return this.value === Guid.EMPTY;
  };

  Guid.prototype.toString = function () {
    return this.value;
  };

  Guid.prototype.toJSON = function () {
    return {
      value: this.value
    };
  };

  Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
  Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
  return Guid;
}();

exports.Guid = Guid;

/***/ }),

/***/ "p90G":
/*!*************************************************!*\
  !*** ./src/app/modules/container.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "qC+V":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js ***!
  \***********************************************************************/
/*! exports provided: NgxLoadingService, NgxLoadingComponent, NgxLoadingModule, NgxLoadingConfig, ngxLoadingAnimationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingService", function() { return NgxLoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingComponent", function() { return NgxLoadingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingModule", function() { return NgxLoadingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingConfig", function() { return NgxLoadingConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxLoadingAnimationTypes", function() { return ngxLoadingAnimationTypes; });
/* harmony import */ var C_Users_hatem_Documents_PFE_ING_ManagementTool_ManagementTool_ManagementTool_API_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Users_hatem_Documents_PFE_ING_ManagementTool_ManagementTool_ManagementTool_API_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */




var _c0 = function _c0(a0) {
  return {
    "full-screen": a0
  };
};

var _c1 = function _c1(a0, a1, a2, a3) {
  return {
    "border-top-color": a0,
    "border-right-color": a1,
    "border-bottom-color": a2,
    "border-left-color": a3
  };
};

function NgxLoadingComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 14);
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, (ctx_r1.config == null ? null : ctx_r1.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](4, _c1, ctx_r1.config == null ? null : ctx_r1.config.secondaryColour, ctx_r1.config == null ? null : ctx_r1.config.secondaryColour, ctx_r1.config == null ? null : ctx_r1.config.secondaryColour, ctx_r1.config == null ? null : ctx_r1.config.primaryColour));
  }
}

var _c2 = function _c2(a0) {
  return {
    "background-color": a0
  };
};

function NgxLoadingComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, (ctx_r2.config == null ? null : ctx_r2.config.fullScreenBackdrop) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](20, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
  }
}

function NgxLoadingComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 25);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, ctx_r3.config == null ? null : ctx_r3.config.primaryColour))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, (ctx_r3.config == null ? null : ctx_r3.config.fullScreenBackdrop) == true));
  }
}

function NgxLoadingComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, (ctx_r4.config == null ? null : ctx_r4.config.fullScreenBackdrop) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));
  }
}

function NgxLoadingComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, (ctx_r5.config == null ? null : ctx_r5.config.fullScreenBackdrop) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, ctx_r5.config == null ? null : ctx_r5.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c2, ctx_r5.config == null ? null : ctx_r5.config.secondaryColour));
  }
}

function NgxLoadingComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, (ctx_r6.config == null ? null : ctx_r6.config.fullScreenBackdrop) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, ctx_r6.config == null ? null : ctx_r6.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c2, ctx_r6.config == null ? null : ctx_r6.config.secondaryColour));
  }
}

function NgxLoadingComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 38);
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, (ctx_r7.config == null ? null : ctx_r7.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r7.config == null ? null : ctx_r7.config.primaryColour));
  }
}

function NgxLoadingComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, (ctx_r8.config == null ? null : ctx_r8.config.fullScreenBackdrop) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, ctx_r8.config == null ? null : ctx_r8.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c2, ctx_r8.config == null ? null : ctx_r8.config.secondaryColour));
  }
}

var _c3 = function _c3(a0) {
  return {
    "color": a0
  };
};

function NgxLoadingComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 42);
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, (ctx_r9.config == null ? null : ctx_r9.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c3, ctx_r9.config == null ? null : ctx_r9.config.primaryColour));
  }
}

function NgxLoadingComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 43);
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, (ctx_r10.config == null ? null : ctx_r10.config.fullScreenBackdrop) == true));
  }
}

function NgxLoadingComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, (ctx_r11.config == null ? null : ctx_r11.config.fullScreenBackdrop) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, ctx_r11.config == null ? null : ctx_r11.config.primaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c2, ctx_r11.config == null ? null : ctx_r11.config.secondaryColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx_r11.config == null ? null : ctx_r11.config.tertiaryColour));
  }
}

function NgxLoadingComponent_div_0_ng_container_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function NgxLoadingComponent_div_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NgxLoadingComponent_div_0_ng_container_14_ng_container_1_Template, 1, 0, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.template);
  }
}

var _c4 = function _c4(a0, a1) {
  return {
    "border-radius": a0,
    "background-color": a1
  };
};

function NgxLoadingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NgxLoadingComponent_div_0_div_3_Template, 1, 9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NgxLoadingComponent_div_0_div_4_Template, 10, 30, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NgxLoadingComponent_div_0_div_5_Template, 1, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NgxLoadingComponent_div_0_div_6_Template, 6, 18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NgxLoadingComponent_div_0_div_7_Template, 3, 9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NgxLoadingComponent_div_0_div_8_Template, 3, 9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NgxLoadingComponent_div_0_div_9_Template, 1, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NgxLoadingComponent_div_0_div_10_Template, 3, 9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NgxLoadingComponent_div_0_div_11_Template, 1, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NgxLoadingComponent_div_0_div_12_Template, 1, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NgxLoadingComponent_div_0_div_13_Template, 4, 12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NgxLoadingComponent_div_0_ng_container_14_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, (ctx_r0.config == null ? null : ctx_r0.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](16, _c4, ctx_r0.config == null ? null : ctx_r0.config.backdropBorderRadius, ctx_r0.config == null ? null : ctx_r0.config.backdropBackgroundColour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r0.config == null ? null : ctx_r0.config.animationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.circle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.cubeGrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.rotatingPlane);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.rectangleBounce);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.wanderingCubes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.doubleBounce);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.pulse);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.chasingDots);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.circleSwish);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.none);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.template);
  }
}

var NgxLoadingConfig =
/**
 * @param {?=} config
 */
function NgxLoadingConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  Object(C_Users_hatem_Documents_PFE_ING_ManagementTool_ManagementTool_ManagementTool_API_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxLoadingConfig);

  this.backdropBorderRadius = config.backdropBorderRadius;
  this.backdropBackgroundColour = config.backdropBackgroundColour;
  this.fullScreenBackdrop = config.fullScreenBackdrop;
  this.animationType = config.animationType;
  this.primaryColour = config.primaryColour;
  this.secondaryColour = config.secondaryColour;
  this.tertiaryColour = config.tertiaryColour;
};
/** @type {?} */


var ngxLoadingAnimationTypes = {
  chasingDots: 'chasing-dots',
  circle: 'sk-circle',
  circleSwish: 'circleSwish',
  cubeGrid: 'sk-cube-grid',
  doubleBounce: 'double-bounce',
  none: 'none',
  pulse: 'pulse',
  rectangleBounce: 'rectangle-bounce',
  rotatingPlane: 'rotating-plane',
  threeBounce: 'three-bounce',
  wanderingCubes: 'wandering-cubes'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

var NgxLoadingService =
/**
 * @param {?} config
 */
function NgxLoadingService(config) {
  Object(C_Users_hatem_Documents_PFE_ING_ManagementTool_ManagementTool_ManagementTool_API_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxLoadingService);

  this.config = config;
  this.loadingConfig = this.config || new NgxLoadingConfig();
};

NgxLoadingService.ɵfac = function NgxLoadingService_Factory(t) {
  return new (t || NgxLoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]('loadingConfig', 8));
};

NgxLoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: NgxLoadingService,
  factory: NgxLoadingService.ɵfac,
  providedIn: 'root'
});

NgxLoadingService.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
      args: ['loadingConfig']
    }]
  }];
};
/** @nocollapse */


NgxLoadingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({
  factory: function NgxLoadingService_Factory() {
    return new NgxLoadingService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])("loadingConfig", 8));
  },
  token: NgxLoadingService,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxLoadingService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
        args: ['loadingConfig']
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgxLoadingComponent = /*#__PURE__*/function () {
  /**
   * @param {?} LoadingService
   * @param {?} changeDetectorRef
   */
  function NgxLoadingComponent(LoadingService, changeDetectorRef) {
    Object(C_Users_hatem_Documents_PFE_ING_ManagementTool_ManagementTool_ManagementTool_API_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxLoadingComponent);

    this.LoadingService = LoadingService;
    this.changeDetectorRef = changeDetectorRef;
    this.config = new NgxLoadingConfig();
    this.defaultConfig = {
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
      backdropBorderRadius: '0px',
      fullScreenBackdrop: false,
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    };
    this.ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  }
  /**
   * @return {?}
   */


  Object(C_Users_hatem_Documents_PFE_ING_ManagementTool_ManagementTool_ManagementTool_API_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NgxLoadingComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.setupConfig();
    }
    /**
     * @return {?}
     */

  }, {
    key: "setupConfig",
    value: function setupConfig() {
      for (var option in this.defaultConfig) {
        if (typeof this.config[option] === 'boolean') {
          if (this.config[option] != null) {
            continue;
          }

          this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
        } else {
          if (this.config[option] != null) {
            continue;
          }

          this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
        }
      }
    }
    /**
     * @param {?} show
     * @return {?}
     */

  }, {
    key: "setShow",
    value: function setShow(show) {
      this.show = show;
      this.changeDetectorRef.markForCheck();
    }
  }]);

  return NgxLoadingComponent;
}();

NgxLoadingComponent.ɵfac = function NgxLoadingComponent_Factory(t) {
  return new (t || NgxLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgxLoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
};

NgxLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NgxLoadingComponent,
  selectors: [["ngx-loading"]],
  inputs: {
    config: "config",
    show: "show",
    template: "template"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "backdrop", 3, "ngClass", "ngStyle"], [3, "ngSwitch"], ["class", "spinner-circle", 3, "ngClass", "ngStyle", 4, "ngSwitchCase"], ["class", "sk-cube-grid", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-sk-rotateplane", 3, "ngStyle", "ngClass", 4, "ngSwitchCase"], ["class", "spinner-rectangle-bounce", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-wandering-cubes", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-double-bounce", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-pulse", 3, "ngClass", "ngStyle", 4, "ngSwitchCase"], ["class", "spinner-chasing-dots", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-circle-swish", 3, "ngClass", "ngStyle", 4, "ngSwitchCase"], [3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-three-bounce", 3, "ngClass", 4, "ngSwitchDefault"], [1, "spinner-circle", 3, "ngClass", "ngStyle"], [1, "sk-cube-grid", 3, "ngClass"], [1, "sk-cube", "sk-cube1", 3, "ngStyle"], [1, "sk-cube", "sk-cube2", 3, "ngStyle"], [1, "sk-cube", "sk-cube3", 3, "ngStyle"], [1, "sk-cube", "sk-cube4", 3, "ngStyle"], [1, "sk-cube", "sk-cube5", 3, "ngStyle"], [1, "sk-cube", "sk-cube6", 3, "ngStyle"], [1, "sk-cube", "sk-cube7", 3, "ngStyle"], [1, "sk-cube", "sk-cube8", 3, "ngStyle"], [1, "sk-cube", "sk-cube9", 3, "ngStyle"], [1, "spinner-sk-rotateplane", 3, "ngStyle", "ngClass"], [1, "spinner-rectangle-bounce", 3, "ngClass"], [1, "rect1", 3, "ngStyle"], [1, "rect2", 3, "ngStyle"], [1, "rect3", 3, "ngStyle"], [1, "rect4", 3, "ngStyle"], [1, "rect5", 3, "ngStyle"], [1, "spinner-wandering-cubes", 3, "ngClass"], [1, "cube1", 3, "ngStyle"], [1, "cube2", 3, "ngStyle"], [1, "spinner-double-bounce", 3, "ngClass"], [1, "double-bounce1", 3, "ngStyle"], [1, "double-bounce2", 3, "ngStyle"], [1, "spinner-pulse", 3, "ngClass", "ngStyle"], [1, "spinner-chasing-dots", 3, "ngClass"], [1, "dot1", 3, "ngStyle"], [1, "dot2", 3, "ngStyle"], [1, "spinner-circle-swish", 3, "ngClass", "ngStyle"], [3, "ngClass"], [1, "spinner-three-bounce", 3, "ngClass"], [1, "bounce1", 3, "ngStyle"], [1, "bounce2", 3, "ngStyle"], [1, "bounce3", 3, "ngStyle"], [4, "ngTemplateOutlet"]],
  template: function NgxLoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NgxLoadingComponent_div_0_Template, 15, 19, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.show);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
  styles: [".backdrop[_ngcontent-%COMP%] {\n        z-index: 1999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n\n      \n      .spinner-circle[_ngcontent-%COMP%], .spinner-circle[_ngcontent-%COMP%]:after {\n          border-radius: 50%;\n          width: 10em;\n          height: 10em;\n      }\n\n      .spinner-circle[_ngcontent-%COMP%] {\n          font-size: 6px;\n          border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-left: 1.1em solid #ffffff;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n      }\n      @-webkit-keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n      @keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n\n      \n      .spinner-circle-swish[_ngcontent-%COMP%] {\n          font-size: 60px;\n          overflow: hidden;\n          width: 1em;\n          height: 1em;\n          z-index: 2000;\n          border-radius: 50%;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n          animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n        }\n        @-webkit-keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @-webkit-keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n      \n      .sk-cube-grid[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n          width: 33%;\n          height: 33%;\n          background-color: #333;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      \n      .spinner-double-bounce[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          background-color: #333;\n          opacity: 0.6;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n\n      \n      .spinner-pulse[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          background-color: #333;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          border-radius: 100%;\n          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n          animation: sk-scaleout 1.0s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-scaleout {\n          0% { -webkit-transform: scale(0) }\n          100% {\n            -webkit-transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      @keyframes sk-scaleout {\n          0% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          } 100% {\n            -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      \n      .spinner-three-bounce[_ngcontent-%COMP%] {\n          width: 70px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 20px;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-three-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n          width: 18px;\n          height: 18px;\n          background-color: #ffffff;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      }\n\n      .spinner-three-bounce[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n      }\n\n      .spinner-three-bounce[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n      }\n\n      @-webkit-keyframes sk-bouncedelay {\n          0%, 80%, 100% { -webkit-transform: scale(0) }\n          40% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bouncedelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          } 40% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n          }\n      }\n\n      \n      .spinner-sk-rotateplane[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          background-color: #ffffff;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n          animation: sk-rotateplane 1.2s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-rotateplane {\n          0% { -webkit-transform: perspective(120px) }\n          50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n      }\n\n      @keyframes sk-rotateplane {\n          0% {\n              transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n          } 50% {\n              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n          } 100% {\n              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n      }\n\n      \n      .spinner-rectangle-bounce[_ngcontent-%COMP%] {\n          width: 50px;\n          height: 40px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n          background-color: #ffffff;\n          height: 100%;\n          width: 6px;\n          display: inline-block;\n          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n          animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      @-webkit-keyframes sk-stretchdelay {\n          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n          20% { -webkit-transform: scaleY(1.0) }\n      }\n\n      @keyframes sk-stretchdelay {\n          0%, 40%, 100% {\n              transform: scaleY(0.4);\n              -webkit-transform: scaleY(0.4);\n          }  20% {\n              transform: scaleY(1.0);\n              -webkit-transform: scaleY(1.0);\n          }\n      }\n\n      \n      .spinner-wandering-cubes[_ngcontent-%COMP%] {\n          width: 60px;\n          height: 58px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .cube1[_ngcontent-%COMP%], .cube2[_ngcontent-%COMP%] {\n          background-color: #ffffff;\n          width: 15px;\n          height: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n      }\n\n      .cube2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      @-webkit-keyframes sk-cubemove {\n          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n          100% { -webkit-transform: rotate(-360deg) }\n      }\n\n      @keyframes sk-cubemove {\n          25% {\n              transform: translateX(42px) rotate(-90deg) scale(0.5);\n              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n          } 50% {\n              transform: translateX(42px) translateY(42px) rotate(-179deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n          } 50.1% {\n              transform: translateX(42px) translateY(42px) rotate(-180deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n          } 75% {\n              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n          } 100% {\n              transform: rotate(-360deg);\n              -webkit-transform: rotate(-360deg);\n          }\n      }\n\n      \n      .sk-circle[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n        }\n        .sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%] {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]:before {\n          content: '';\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n        }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(30deg);\n              -ms-transform: rotate(30deg);\n                  transform: rotate(30deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(60deg);\n              -ms-transform: rotate(60deg);\n                  transform: rotate(60deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(90deg);\n              -ms-transform: rotate(90deg);\n                  transform: rotate(90deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(120deg);\n              -ms-transform: rotate(120deg);\n                  transform: rotate(120deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(150deg);\n              -ms-transform: rotate(150deg);\n                  transform: rotate(150deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(210deg);\n              -ms-transform: rotate(210deg);\n                  transform: rotate(210deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(240deg);\n              -ms-transform: rotate(240deg);\n                  transform: rotate(240deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(270deg);\n              -ms-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(300deg);\n              -ms-transform: rotate(300deg);\n                  transform: rotate(300deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(330deg);\n              -ms-transform: rotate(330deg);\n                  transform: rotate(330deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s; }\n\n        @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        \n        .spinner-chasing-dots[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          text-align: center;\n          -webkit-animation: sk-rotate 2.0s infinite linear;\n          animation: sk-rotate 2.0s infinite linear;\n        }\n\n        .dot1[_ngcontent-%COMP%], .dot2[_ngcontent-%COMP%] {\n          width: 60%;\n          height: 60%;\n          display: inline-block;\n          position: absolute;\n          top: 0;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n        }\n\n        .dot2[_ngcontent-%COMP%] {\n          top: auto;\n          bottom: 0;\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n        }\n\n        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n        @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n        }\n\n        @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n        }\n\n      .full-screen[_ngcontent-%COMP%] {\n          position: fixed;\n          position: -ms-page;\n      }"]
});

NgxLoadingComponent.ctorParameters = function () {
  return [{
    type: NgxLoadingService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }];
};

NgxLoadingComponent.propDecorators = {
  show: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  template: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxLoadingComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'ngx-loading',
      template: "\n    <div *ngIf=\"show\">\n      <div class=\"backdrop\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'border-radius': config?.backdropBorderRadius, 'background-color': config?.backdropBackgroundColour}\"></div>\n\n      <div [ngSwitch]=\"config?.animationType\">\n        <div class=\"spinner-circle\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circle\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"\n          [ngStyle]=\"{'border-top-color': config?.secondaryColour, 'border-right-color': config?.secondaryColour, 'border-bottom-color': config?.secondaryColour, 'border-left-color': config?.primaryColour}\">\n        </div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.cubeGrid\" class=\"sk-cube-grid\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"sk-cube sk-cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube6\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube7\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube8\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube9\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-sk-rotateplane\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rotatingPlane\" [ngStyle]=\"{'background-color': config?.primaryColour}\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div class=\"spinner-rectangle-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rectangleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"rect1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-wandering-cubes\" *ngSwitchCase=\"ngxLoadingAnimationTypes.wanderingCubes\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"cube2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-double-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.doubleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"double-bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"double-bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-pulse\" *ngSwitchCase=\"ngxLoadingAnimationTypes.pulse\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n\n        <div class=\"spinner-chasing-dots\" *ngSwitchCase=\"ngxLoadingAnimationTypes.chasingDots\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"dot1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"dot2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-circle-swish\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circleSwish\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'color': config?.primaryColour}\"></div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.none\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div *ngSwitchDefault class=\"spinner-three-bounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n          <div class=\"bounce3\" [ngStyle]=\"{'background-color': config?.tertiaryColour}\"></div>\n        </div>\n        \n        <ng-container *ngIf=\"template\">\n            <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n  ",
      styles: ["\n      .backdrop {\n        z-index: 1999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n\n      /* Spinner Circle styles */\n      .spinner-circle,\n      .spinner-circle:after {\n          border-radius: 50%;\n          width: 10em;\n          height: 10em;\n      }\n\n      .spinner-circle {\n          font-size: 6px;\n          border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-left: 1.1em solid #ffffff;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n      }\n      @-webkit-keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n      @keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n\n      /* Circle Swish styles */\n      .spinner-circle-swish {\n          font-size: 60px;\n          overflow: hidden;\n          width: 1em;\n          height: 1em;\n          z-index: 2000;\n          border-radius: 50%;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n          animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n        }\n        @-webkit-keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @-webkit-keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n      /* Cube Grid styles */\n      .sk-cube-grid {\n          width: 40px;\n          height: 40px;\n\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .sk-cube-grid .sk-cube {\n          width: 33%;\n          height: 33%;\n          background-color: #333;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n\n      .sk-cube-grid .sk-cube1 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube2 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube3 {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n\n      .sk-cube-grid .sk-cube4 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube5 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube6 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube7 {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n\n      .sk-cube-grid .sk-cube8 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube9 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      /* Double Bounce styles */\n      .spinner-double-bounce {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .double-bounce1, .double-bounce2 {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          background-color: #333;\n          opacity: 0.6;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n\n      /* Pulse styles */\n      .spinner-pulse {\n          width: 40px;\n          height: 40px;\n          background-color: #333;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          border-radius: 100%;\n          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n          animation: sk-scaleout 1.0s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-scaleout {\n          0% { -webkit-transform: scale(0) }\n          100% {\n            -webkit-transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      @keyframes sk-scaleout {\n          0% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          } 100% {\n            -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      /* Three Bounce styles */\n      .spinner-three-bounce {\n          width: 70px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 20px;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-three-bounce > div {\n          width: 18px;\n          height: 18px;\n          background-color: #ffffff;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      }\n\n      .spinner-three-bounce .bounce1 {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n      }\n\n      .spinner-three-bounce .bounce2 {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n      }\n\n      @-webkit-keyframes sk-bouncedelay {\n          0%, 80%, 100% { -webkit-transform: scale(0) }\n          40% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bouncedelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          } 40% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n          }\n      }\n\n      /* Rotate Plane styles */\n      .spinner-sk-rotateplane {\n          width: 40px;\n          height: 40px;\n          background-color: #ffffff;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n          animation: sk-rotateplane 1.2s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-rotateplane {\n          0% { -webkit-transform: perspective(120px) }\n          50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n      }\n\n      @keyframes sk-rotateplane {\n          0% {\n              transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n          } 50% {\n              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n          } 100% {\n              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n      }\n\n      /* Rectangle Bounce styles*/\n      .spinner-rectangle-bounce {\n          width: 50px;\n          height: 40px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-rectangle-bounce > div {\n          background-color: #ffffff;\n          height: 100%;\n          width: 6px;\n          display: inline-block;\n          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n          animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      }\n\n      .spinner-rectangle-bounce .rect2 {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .spinner-rectangle-bounce .rect3 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      .spinner-rectangle-bounce .rect4 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .spinner-rectangle-bounce .rect5 {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      @-webkit-keyframes sk-stretchdelay {\n          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n          20% { -webkit-transform: scaleY(1.0) }\n      }\n\n      @keyframes sk-stretchdelay {\n          0%, 40%, 100% {\n              transform: scaleY(0.4);\n              -webkit-transform: scaleY(0.4);\n          }  20% {\n              transform: scaleY(1.0);\n              -webkit-transform: scaleY(1.0);\n          }\n      }\n\n      /* Wandering Cubes styles */\n      .spinner-wandering-cubes {\n          width: 60px;\n          height: 58px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .cube1, .cube2 {\n          background-color: #ffffff;\n          width: 15px;\n          height: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n      }\n\n      .cube2 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      @-webkit-keyframes sk-cubemove {\n          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n          100% { -webkit-transform: rotate(-360deg) }\n      }\n\n      @keyframes sk-cubemove {\n          25% {\n              transform: translateX(42px) rotate(-90deg) scale(0.5);\n              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n          } 50% {\n              transform: translateX(42px) translateY(42px) rotate(-179deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n          } 50.1% {\n              transform: translateX(42px) translateY(42px) rotate(-180deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n          } 75% {\n              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n          } 100% {\n              transform: rotate(-360deg);\n              -webkit-transform: rotate(-360deg);\n          }\n      }\n\n      /* Circle styles */\n      .sk-circle {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n        }\n        .sk-circle .sk-child {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle .sk-child:before {\n          content: '';\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n        }\n        .sk-circle .sk-circle2 {\n          -webkit-transform: rotate(30deg);\n              -ms-transform: rotate(30deg);\n                  transform: rotate(30deg); }\n        .sk-circle .sk-circle3 {\n          -webkit-transform: rotate(60deg);\n              -ms-transform: rotate(60deg);\n                  transform: rotate(60deg); }\n        .sk-circle .sk-circle4 {\n          -webkit-transform: rotate(90deg);\n              -ms-transform: rotate(90deg);\n                  transform: rotate(90deg); }\n        .sk-circle .sk-circle5 {\n          -webkit-transform: rotate(120deg);\n              -ms-transform: rotate(120deg);\n                  transform: rotate(120deg); }\n        .sk-circle .sk-circle6 {\n          -webkit-transform: rotate(150deg);\n              -ms-transform: rotate(150deg);\n                  transform: rotate(150deg); }\n        .sk-circle .sk-circle7 {\n          -webkit-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .sk-circle .sk-circle8 {\n          -webkit-transform: rotate(210deg);\n              -ms-transform: rotate(210deg);\n                  transform: rotate(210deg); }\n        .sk-circle .sk-circle9 {\n          -webkit-transform: rotate(240deg);\n              -ms-transform: rotate(240deg);\n                  transform: rotate(240deg); }\n        .sk-circle .sk-circle10 {\n          -webkit-transform: rotate(270deg);\n              -ms-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n        .sk-circle .sk-circle11 {\n          -webkit-transform: rotate(300deg);\n              -ms-transform: rotate(300deg);\n                  transform: rotate(300deg); }\n        .sk-circle .sk-circle12 {\n          -webkit-transform: rotate(330deg);\n              -ms-transform: rotate(330deg);\n                  transform: rotate(330deg); }\n        .sk-circle .sk-circle2:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s; }\n        .sk-circle .sk-circle3:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s; }\n        .sk-circle .sk-circle4:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s; }\n        .sk-circle .sk-circle5:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s; }\n        .sk-circle .sk-circle6:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s; }\n        .sk-circle .sk-circle7:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s; }\n        .sk-circle .sk-circle8:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s; }\n        .sk-circle .sk-circle9:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s; }\n        .sk-circle .sk-circle10:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s; }\n        .sk-circle .sk-circle11:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s; }\n        .sk-circle .sk-circle12:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s; }\n\n        @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        /* Chasing Dots styles */\n        .spinner-chasing-dots {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          text-align: center;\n          -webkit-animation: sk-rotate 2.0s infinite linear;\n          animation: sk-rotate 2.0s infinite linear;\n        }\n\n        .dot1, .dot2 {\n          width: 60%;\n          height: 60%;\n          display: inline-block;\n          position: absolute;\n          top: 0;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n        }\n\n        .dot2 {\n          top: auto;\n          bottom: 0;\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n        }\n\n        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n        @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n        }\n\n        @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n        }\n\n      .full-screen {\n          position: fixed;\n          position: -ms-page;\n      }\n    "]
    }]
  }], function () {
    return [{
      type: NgxLoadingService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    show: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgxLoadingModule = /*#__PURE__*/function () {
  function NgxLoadingModule() {
    Object(C_Users_hatem_Documents_PFE_ING_ManagementTool_ManagementTool_ManagementTool_API_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxLoadingModule);
  }

  Object(C_Users_hatem_Documents_PFE_ING_ManagementTool_ManagementTool_ManagementTool_API_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NgxLoadingModule, null, [{
    key: "forRoot",
    value:
    /**
     * @param {?} loadingConfig
     * @return {?}
     */
    function forRoot(loadingConfig) {
      return {
        ngModule: NgxLoadingModule,
        providers: [{
          provide: 'loadingConfig',
          useValue: loadingConfig
        }]
      };
    }
  }]);

  return NgxLoadingModule;
}();

NgxLoadingModule.ɵfac = function NgxLoadingModule_Factory(t) {
  return new (t || NgxLoadingModule)();
};

NgxLoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NgxLoadingModule
});
NgxLoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxLoadingModule, {
    declarations: function declarations() {
      return [NgxLoadingComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
    },
    exports: function exports() {
      return [NgxLoadingComponent];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxLoadingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      declarations: [NgxLoadingComponent],
      exports: [NgxLoadingComponent]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


 //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuanMiLCJzb3VyY2VzIjpbIm5neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy1jb25maWcudHMiLCJuZ3gtbG9hZGluZy9saWIvbmd4LWxvYWRpbmcuc2VydmljZS50cyIsIm5neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy5jb21wb25lbnQudHMiLCJuZ3gtbG9hZGluZy9saWIvbmd4LWxvYWRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCSSxZQUFZLFNBQTRCLEVBQUU7QUFDOUMsUUFBUSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO0FBQ2hFLFFBQVEsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztBQUN4RSxRQUFRLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7QUFDNUQsUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7QUFDbEQsUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7QUFDbEQsUUFBUSxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7QUFDdEQsUUFBUSxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDcEQsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLE1BQWEsd0JBQXdCLEdBQUc7QUFDeEMsSUFBSSxXQUFXLEVBQUUsY0FBYztBQUMvQixJQUFJLE1BQU0sRUFBRSxXQUFXO0FBQ3ZCLElBQUksV0FBVyxFQUFFLGFBQWE7QUFDOUIsSUFBSSxRQUFRLEVBQUUsY0FBYztBQUM1QixJQUFJLFlBQVksRUFBRSxlQUFlO0FBQ2pDLElBQUksSUFBSSxFQUFFLE1BQU07QUFDaEIsSUFBSSxLQUFLLEVBQUUsT0FBTztBQUNsQixJQUFJLGVBQWUsRUFBRSxrQkFBa0I7QUFDdkMsSUFBSSxhQUFhLEVBQUUsZ0JBQWdCO0FBQ25DLElBQUksV0FBVyxFQUFFLGNBQWM7QUFDL0IsSUFBSSxjQUFjLEVBQUUsaUJBQWlCO0FBQ3JDLENBQUM7QUFBRTtBQUNIO0FBQUs7QUFBbUM7QUFBbUU7QUM3QzNHO0FBQTJCO0FBQVM7QUFBMEI7QUFDdEQsSUFRTixZQUF5RCxNQUF5QjtBQUNwRixRQUQyRCxXQUFNLEdBQU4sTUFBTSxDQUFtQjtBQUFFLFFBQ2xGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDL0QsS0FBRztBQUNIOytDQVRDLFVBQVUsU0FBQyxtQkFDVixVQUFVLEVBQUUsTUFBTSxlQUNuQjt1SUFDSztBQUFFO0FBQ1UsNENBRUgsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlO0FBQVM7QUFBSTs7Ozs7Ozs7Ozs7a0NBSXFFO0FBQUM7QUFBQztBQUFLO0FBQW1DO0FBQW1FO0FDYmhQO0FBQTZCO0FBQVM7QUFBa0M7QUFDdEQ7QUFBUyxJQXd4QnZCLFlBQW9CLGNBQWlDLEVBQVUsaUJBQW9DO0FBQUssUUFBcEYsbUJBQWMsR0FBZCxjQUFjLENBQW1CO0FBQUUsUUFBUSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0FBQUUsUUFiNUYsV0FBTSxHQUFzQixJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDaEUsUUFDWSxrQkFBYSxHQUFzQjtBQUMvQyxZQUFRLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxXQUFXO0FBQzNELFlBQVEsd0JBQXdCLEVBQUUsb0JBQW9CO0FBQ3RELFlBQVEsb0JBQW9CLEVBQUUsS0FBSztBQUNuQyxZQUFRLGtCQUFrQixFQUFFLEtBQUs7QUFDakMsWUFBUSxhQUFhLEVBQUUsU0FBUztBQUNoQyxZQUFRLGVBQWUsRUFBRSxTQUFTO0FBQ2xDLFlBQVEsY0FBYyxFQUFFLFNBQVM7QUFDakMsU0FBSyxDQUFDO0FBQ04sUUFBVyw2QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztBQUMvRCxLQUM0RztBQUM1RztBQUNPO0FBQ0U7QUFBUyxJQURkLFFBQVE7QUFDWixRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMzQixLQUFLO0FBQ0w7QUFDTztBQUFvQjtBQUMxQixJQURXLFdBQVc7QUFBTSxRQUNyQixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDakQsWUFBWSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7QUFDMUQsZ0JBQWdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDakQsb0JBQW9CLFNBQVM7QUFDN0IsaUJBQWlCO0FBQ2pCLGdCQUNnQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pLLGFBQWE7QUFBRSxpQkFBSTtBQUNuQixnQkFBZ0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtBQUNqRCxvQkFBb0IsU0FBUztBQUM3QixpQkFBaUI7QUFDakIsZ0JBQ2dCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakssYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUF3QjtBQUN2QjtBQUFTLElBRE4sT0FBTyxDQUFDLElBQWE7QUFBSyxRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM5QyxLQUFLO0FBQ0w7aURBanpCQyxTQUFTLFNBQUMsbUJBQ1AsUUFBUSxFQUFFLGFBQWEsbUJBQ3ZCLFFBQVEsRUFBRTs7Ozs7aXlFQStEWCxtQkFDQyxNQUFNLEVBQUUsdUJBQ0osMmdyQkFtc0JGO0FBQUU7QUFDUixZQXp3QlMsaUJBQWlCO0FBQUssWUFGdEIsaUJBQWlCO0FBQUk7QUFBSTtBQUF3QyxtQkEyd0JyRSxLQUFLO0FBQU0scUJBQ1gsS0FBSztBQUFNLHVCQUNYLEtBQUs7QUFBSztnSEFOVjtnQkFDQTtNQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBSWdCO0FBQUM7QUFBQztBQUFLO0FBQ1A7QUFDaUI7QUMvd0JsQztBQUEwQjtBQUFTO0FBQ2hCO0FBQW9CO0FBQVMsSUFVOUMsT0FBTyxPQUFPLENBQUMsYUFBZ0M7QUFBSyxRQUNsRCxPQUFPO0FBQ1gsWUFBTSxRQUFRLEVBQUUsZ0JBQWdCO0FBQ2hDLFlBQU0sU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQztBQUN4RSxTQUFLLENBQUM7QUFDTixLQUFHO0FBQ0g7OENBWkMsUUFBUSxTQUFDLG1CQUNSLE9BQU8sRUFBRSxDQUFDO0FBQVksQ0FBQyxtQkFDdkIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUMsbUJBQ25DO0lBQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDLGVBQy9COzs7Ozs7Ozs7MEJBQ0s7QUFBQztBQUFDO0FBQUs7QUFDRTtBQUNSO0FBQUk7QUFBQztBQUNUO0FBQ0E7QUFBbUU7QUFDdEU7QUFBQzs7QUhNQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQzVDQSxBQVNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBUkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ1RBLEFBeXhCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFiQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBaHpCQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQStEQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBZ3NCQSxBQUNBLEFBQ0EsQUF2d0JBLEFBQUEsQUFGQSxBQUFBLEFBMndCQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUM3d0JBLEFBV0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFYQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSU5neExvYWRpbmdDb25maWcge1xyXG4gICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICBiYWNrZHJvcEJhY2tncm91bmRDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBmdWxsU2NyZWVuQmFja2Ryb3A/OiBib29sZWFuO1xyXG4gICAgYW5pbWF0aW9uVHlwZT86IHN0cmluZztcclxuICAgIHByaW1hcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBzZWNvbmRhcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICB0ZXJ0aWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nQ29uZmlnIGltcGxlbWVudHMgSU5neExvYWRpbmdDb25maWcge1xyXG4gICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICBiYWNrZHJvcEJhY2tncm91bmRDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBmdWxsU2NyZWVuQmFja2Ryb3A/OiBib29sZWFuO1xyXG4gICAgYW5pbWF0aW9uVHlwZT86IHN0cmluZztcclxuICAgIHByaW1hcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBzZWNvbmRhcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICB0ZXJ0aWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcEJvcmRlclJhZGl1cyA9IGNvbmZpZy5iYWNrZHJvcEJvcmRlclJhZGl1cztcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQmFja2dyb3VuZENvbG91ciA9IGNvbmZpZy5iYWNrZHJvcEJhY2tncm91bmRDb2xvdXI7XHJcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuQmFja2Ryb3AgPSBjb25maWcuZnVsbFNjcmVlbkJhY2tkcm9wO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVHlwZSA9IGNvbmZpZy5hbmltYXRpb25UeXBlO1xyXG4gICAgICAgIHRoaXMucHJpbWFyeUNvbG91ciA9IGNvbmZpZy5wcmltYXJ5Q29sb3VyO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5Q29sb3VyID0gY29uZmlnLnNlY29uZGFyeUNvbG91cjtcclxuICAgICAgICB0aGlzLnRlcnRpYXJ5Q29sb3VyID0gY29uZmlnLnRlcnRpYXJ5Q29sb3VyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzID0ge1xyXG4gICAgY2hhc2luZ0RvdHM6ICdjaGFzaW5nLWRvdHMnLFxyXG4gICAgY2lyY2xlOiAnc2stY2lyY2xlJyxcclxuICAgIGNpcmNsZVN3aXNoOiAnY2lyY2xlU3dpc2gnLFxyXG4gICAgY3ViZUdyaWQ6ICdzay1jdWJlLWdyaWQnLFxyXG4gICAgZG91YmxlQm91bmNlOiAnZG91YmxlLWJvdW5jZScsXHJcbiAgICBub25lOiAnbm9uZScsXHJcbiAgICBwdWxzZTogJ3B1bHNlJyxcclxuICAgIHJlY3RhbmdsZUJvdW5jZTogJ3JlY3RhbmdsZS1ib3VuY2UnLFxyXG4gICAgcm90YXRpbmdQbGFuZTogJ3JvdGF0aW5nLXBsYW5lJyxcclxuICAgIHRocmVlQm91bmNlOiAndGhyZWUtYm91bmNlJyxcclxuICAgIHdhbmRlcmluZ0N1YmVzOiAnd2FuZGVyaW5nLWN1YmVzJ1xyXG59O1xyXG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOZ3hMb2FkaW5nQ29uZmlnLCBOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9uZ3gtbG9hZGluZy1jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBsb2FkaW5nQ29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdCgnbG9hZGluZ0NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZykge1xyXG4gICAgdGhpcy5sb2FkaW5nQ29uZmlnID0gdGhpcy5jb25maWcgfHwgbmV3IE5neExvYWRpbmdDb25maWcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLCBJTmd4TG9hZGluZ0NvbmZpZywgTmd4TG9hZGluZ0NvbmZpZyB9IGZyb20gJy4vbmd4LWxvYWRpbmctY29uZmlnJztcclxuaW1wb3J0IHsgTmd4TG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuL25neC1sb2FkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1sb2FkaW5nJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCIgW25nU3R5bGVdPVwieydib3JkZXItcmFkaXVzJzogY29uZmlnPy5iYWNrZHJvcEJvcmRlclJhZGl1cywgJ2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LmJhY2tkcm9wQmFja2dyb3VuZENvbG91cn1cIj48L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbmZpZz8uYW5pbWF0aW9uVHlwZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWNpcmNsZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMuY2lyY2xlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JvcmRlci10b3AtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91ciwgJ2JvcmRlci1yaWdodC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyLCAnYm9yZGVyLWJvdHRvbS1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyLCAnYm9yZGVyLWxlZnQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jdWJlR3JpZFwiIGNsYXNzPVwic2stY3ViZS1ncmlkXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmUzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU2XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTdcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlOFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU5XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1zay1yb3RhdGVwbGFuZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMucm90YXRpbmdQbGFuZVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLXJlY3RhbmdsZS1ib3VuY2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnJlY3RhbmdsZUJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0MVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0MlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0M1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0NFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0NVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItd2FuZGVyaW5nLWN1YmVzXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy53YW5kZXJpbmdDdWJlc1wiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWJlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWJlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1kb3VibGUtYm91bmNlXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5kb3VibGVCb3VuY2VcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG91YmxlLWJvdW5jZTFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG91YmxlLWJvdW5jZTJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItcHVsc2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnB1bHNlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY2hhc2luZy1kb3RzXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jaGFzaW5nRG90c1wiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3QxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRvdDJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY2lyY2xlLXN3aXNoXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jaXJjbGVTd2lzaFwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMubm9uZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwic3Bpbm5lci10aHJlZS1ib3VuY2VcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlM1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8udGVydGlhcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgei1pbmRleDogMTk5OTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogU3Bpbm5lciBDaXJjbGUgc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLWNpcmNsZSxcclxuICAgICAgLnNwaW5uZXItY2lyY2xlOmFmdGVyIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1jaXJjbGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxLjFlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxLjFlbSBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgIH1cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBsb2FkOCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBDaXJjbGUgU3dpc2ggc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLWNpcmNsZS1zd2lzaCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XHJcbiAgICAgICAgICBhbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDYge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNSUsXHJcbiAgICAgICAgICA5NSUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAlLFxyXG4gICAgICAgICAgNTklIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4wODdlbSAtMC44MjVlbSAwIC0wLjQyZW0sIC0wLjE3M2VtIC0wLjgxMmVtIDAgLTAuNDRlbSwgLTAuMjU2ZW0gLTAuNzg5ZW0gMCAtMC40NmVtLCAtMC4yOTdlbSAtMC43NzVlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAzOCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjM3N2VtIC0wLjc0ZW0gMCAtMC40MmVtLCAtMC42NDVlbSAtMC41MjJlbSAwIC0wLjQ0ZW0sIC0wLjc3NWVtIC0wLjI5N2VtIDAgLTAuNDZlbSwgLTAuODJlbSAtMC4wOWVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBsb2FkNiB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1JSxcclxuICAgICAgICAgIDk1JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMCUsXHJcbiAgICAgICAgICA1OSUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM4JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcm91bmQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgcm91bmQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLyogQ3ViZSBHcmlkIHN0eWxlcyAqL1xyXG4gICAgICAuc2stY3ViZS1ncmlkIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUge1xyXG4gICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgIH0gMzUlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgIH0gMzUlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIERvdWJsZSBCb3VuY2Ugc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLWRvdWJsZS1ib3VuY2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgICAgICAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XHJcbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAgICAgICAgIDAlLCAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgICAgICAgIH0gNTAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUHVsc2Ugc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXB1bHNlIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXNjYWxlb3V0IDEuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXNjYWxlb3V0IDEuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgICAgICAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stc2NhbGVvdXQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBUaHJlZSBCb3VuY2Ugc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXRocmVlLWJvdW5jZSB7XHJcbiAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXRocmVlLWJvdW5jZSA+IGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIC5ib3VuY2UxIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIC5ib3VuY2UyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgfVxyXG4gICAgICAgICAgNDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgfSA0MCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUm90YXRlIFBsYW5lIHN0eWxlcyAqL1xyXG4gICAgICAuc3Bpbm5lci1zay1yb3RhdGVwbGFuZSB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XHJcbiAgICAgICAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgfVxyXG4gICAgICAgICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgfVxyXG4gICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpICByb3RhdGVYKDE4MGRlZykgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylcclxuICAgICAgICAgIH0gNTAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpXHJcbiAgICAgICAgICB9IDEwMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFJlY3RhbmdsZSBCb3VuY2Ugc3R5bGVzKi9cclxuICAgICAgLnNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZSB7XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgPiBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0MiB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0MyB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0NCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0NSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcclxuICAgICAgICAgIDAlLCA0MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCkgfVxyXG4gICAgICAgICAgMjAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxLjApIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDQwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICAgICAgICB9ICAyMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBXYW5kZXJpbmcgQ3ViZXMgc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXdhbmRlcmluZy1jdWJlcyB7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGhlaWdodDogNThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdWJlMSwgLmN1YmUyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1YmUyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlbW92ZSB7XHJcbiAgICAgICAgICAyNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpIH1cclxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpIH1cclxuICAgICAgICAgIDc1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KSB9XHJcbiAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stY3ViZW1vdmUge1xyXG4gICAgICAgICAgMjUlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgfSA1MCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcclxuICAgICAgICAgIH0gNTAuMSUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgICAgIH0gNzUlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICAgIH0gMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogQ2lyY2xlIHN0eWxlcyAqL1xyXG4gICAgICAuc2stY2lyY2xlIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2hpbGQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNrLWNpcmNsZUJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMiB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUzIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTQge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU2IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTcge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU5IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEwIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEyIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTI6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTM6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTFzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNTpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlODpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOTpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zczsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExOmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzOyB9XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgICAgICAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDQwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgICAgICAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDQwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ2hhc2luZyBEb3RzIHN0eWxlcyAqL1xyXG4gICAgICAgIC5zcGlubmVyLWNoYXNpbmctZG90cyB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlIDIuMHMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG90MSwgLmRvdDIge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdDIge1xyXG4gICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGUgeyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH19XHJcbiAgICAgICAgQGtleWZyYW1lcyBzay1yb3RhdGUgeyAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH19XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgICAgICAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XHJcbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgICAgICB9IDUwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLmZ1bGwtc2NyZWVuIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHBvc2l0aW9uOiAtbXMtcGFnZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBzaG93OiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IG5ldyBOZ3hMb2FkaW5nQ29uZmlnKCk7XHJcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbmZpZzogSU5neExvYWRpbmdDb25maWcgPSB7XHJcbiAgICAgICAgYW5pbWF0aW9uVHlwZTogbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnRocmVlQm91bmNlLFxyXG4gICAgICAgIGJhY2tkcm9wQmFja2dyb3VuZENvbG91cjogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXHJcbiAgICAgICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM6ICcwcHgnLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5CYWNrZHJvcDogZmFsc2UsXHJcbiAgICAgICAgcHJpbWFyeUNvbG91cjogJyNmZmZmZmYnLFxyXG4gICAgICAgIHNlY29uZGFyeUNvbG91cjogJyNmZmZmZmYnLFxyXG4gICAgICAgIHRlcnRpYXJ5Q29sb3VyOiAnI2ZmZmZmZidcclxuICAgIH07XHJcbiAgICBwdWJsaWMgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzID0gbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgTG9hZGluZ1NlcnZpY2U6IE5neExvYWRpbmdTZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cENvbmZpZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb25maWcoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gaW4gdGhpcy5kZWZhdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWdbb3B0aW9uXSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWdbb3B0aW9uXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdbb3B0aW9uXSA9IHRoaXMuTG9hZGluZ1NlcnZpY2UubG9hZGluZ0NvbmZpZ1tvcHRpb25dICE9IG51bGwgPyB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSA6IHRoaXMuZGVmYXVsdENvbmZpZ1tvcHRpb25dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnW29wdGlvbl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnW29wdGlvbl0gPSB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSAhPSBudWxsID8gdGhpcy5Mb2FkaW5nU2VydmljZS5sb2FkaW5nQ29uZmlnW29wdGlvbl0gOiB0aGlzLmRlZmF1bHRDb25maWdbb3B0aW9uXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2hvdyhzaG93OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gc2hvdztcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi4vcHVibGljX2FwaSc7XHJcbmltcG9ydCB7IE5neExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL25neC1sb2FkaW5nLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05neExvYWRpbmdDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOZ3hMb2FkaW5nQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QobG9hZGluZ0NvbmZpZzogSU5neExvYWRpbmdDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hMb2FkaW5nTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6ICdsb2FkaW5nQ29uZmlnJywgdXNlVmFsdWU6IGxvYWRpbmdDb25maWcgfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==

/***/ }),

/***/ "rue9":
/*!*****************************************************!*\
  !*** ./src/app/modules/container-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContainerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerRoutingModule", function() { return ContainerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "Hque");
/* harmony import */ var _container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container.component */ "TAKS");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-guard.service */ "5nbR");
/* harmony import */ var _pages_timesheet_releasemanagement_releasemanagement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/timesheet/releasemanagement/releasemanagement.component */ "Dd78");
/* harmony import */ var _pages_timesheet_contractsmanagement_contractsmanagement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/timesheet/contractsmanagement/contractsmanagement.component */ "jJDg");
/* harmony import */ var _pages_timesheet_holidaymanagement_holidaymanagement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/timesheet/holidaymanagement/holidaymanagement.component */ "jHV7");
/* harmony import */ var _pages_timesheet_timesheetmanagement_timesheetmanagement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/timesheet/timesheetmanagement/timesheetmanagement.component */ "cb1p");
/* harmony import */ var _pages_timesheet_teamsmanagement_teamsmanagement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/timesheet/teamsmanagement/teamsmanagement.component */ "IWgk");
/* harmony import */ var _pages_timesheet_usersmanagement_usersmanagement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/timesheet/usersmanagement/usersmanagement.component */ "n8v7");
/* harmony import */ var _pages_timesheet_customersmanagement_customersmanagement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/timesheet/customersmanagement/customersmanagement.component */ "O75W");
/* harmony import */ var _pages_timesheet_requirement_requirement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/timesheet/requirement/requirement.component */ "N+sy");
/* harmony import */ var _pages_timesheet_taskmanagement_taskmanagement_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/timesheet/taskmanagement/taskmanagement.component */ "0KCB");
/* harmony import */ var _pages_timesheet_parameters_management_parameters_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/timesheet/parameters-management/parameters-management.component */ "k2xv");
/* harmony import */ var _pages_timesheet_report_and_statistics_management_report_and_statistics_management_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/timesheet/report-and-statistics-management/report-and-statistics-management.component */ "08ia");
/* harmony import */ var _pages_timesheet_pointing_chart_pointing_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/timesheet/pointing-chart/pointing-chart.component */ "V5NM");
/* harmony import */ var _pages_timesheet_generic_task_generic_task_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/timesheet/generic-task/generic-task.component */ "5CiB");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        children: [
            {
                path: 'pages/home',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: 'pages/requirement',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_requirement_requirement_component__WEBPACK_IMPORTED_MODULE_12__["RequirementComponent"]
            },
            {
                path: 'pages/customersmanagement',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_customersmanagement_customersmanagement_component__WEBPACK_IMPORTED_MODULE_11__["CustomersmanagementComponent"]
            },
            {
                path: 'pages/usersmanagement',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_usersmanagement_usersmanagement_component__WEBPACK_IMPORTED_MODULE_10__["UsersmanagementComponent"]
            },
            {
                path: 'pages/teamsmanagement',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_teamsmanagement_teamsmanagement_component__WEBPACK_IMPORTED_MODULE_9__["TeamsmanagementComponent"]
            },
            {
                path: 'pages/timesheetmanagement',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_timesheetmanagement_timesheetmanagement_component__WEBPACK_IMPORTED_MODULE_8__["TimesheetmanagementComponent"]
            },
            {
                path: 'pages/holidaymanagement',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_holidaymanagement_holidaymanagement_component__WEBPACK_IMPORTED_MODULE_7__["HolidaymanagementComponent"]
            },
            {
                path: 'pages/contractmanagement',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_contractsmanagement_contractsmanagement_component__WEBPACK_IMPORTED_MODULE_6__["ContractsmanagementComponent"]
            },
            {
                path: 'pages/release',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_releasemanagement_releasemanagement_component__WEBPACK_IMPORTED_MODULE_5__["ReleasemanagementComponent"]
            },
            {
                path: 'pages/tasks',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_taskmanagement_taskmanagement_component__WEBPACK_IMPORTED_MODULE_13__["TaskmanagementComponent"]
            },
            {
                path: 'pages/parameters',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_parameters_management_parameters_management_component__WEBPACK_IMPORTED_MODULE_14__["ParametersManagementComponent"]
            },
            {
                path: 'pages/statreports',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_report_and_statistics_management_report_and_statistics_management_component__WEBPACK_IMPORTED_MODULE_15__["ReportAndStatisticsManagementComponent"]
            },
            {
                path: 'pages/pointing',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_pointing_chart_pointing_chart_component__WEBPACK_IMPORTED_MODULE_16__["PointingChartComponent"]
            },
            {
                path: 'pages/generictask',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                component: _pages_timesheet_generic_task_generic_task_component__WEBPACK_IMPORTED_MODULE_17__["GenericTaskComponent"]
            },
        ],
    },
];
var ContainerRoutingModule = /** @class */ (function () {
    function ContainerRoutingModule() {
    }
    ContainerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ContainerRoutingModule);
    return ContainerRoutingModule;
}());



/***/ }),

/***/ "s/Lv":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/modals/taskmanagement-modals/create-task/create-task.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function() { return CreateTaskComponent; });
/* harmony import */ var _raw_loader_create_task_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-task.component.html */ "ZO8f");
/* harmony import */ var _create_task_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task.component.css */ "z/yX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/userTask.service */ "3TdX");
/* harmony import */ var src_app_core_models_userTask_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/models/userTask.model */ "C3FO");
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core */ "ey9i");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ "McNs");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "Neo5");
/* harmony import */ var src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/employee.service */ "yWs4");
/* harmony import */ var src_app_core_models_requirement_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/models/requirement.model */ "Uuu5");
/* harmony import */ var src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/parameter.service */ "xmDL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! guid-typescript */ "kLqA");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















//import { OtherTask } from 'src/app/core/models/othertask.model';
var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent(ref, taskService, requirementService, employeeService, authService, parameterService, formBuilder) {
        var _this = this;
        this.ref = ref;
        this.taskService = taskService;
        this.requirementService = requirementService;
        this.employeeService = employeeService;
        this.authService = authService;
        this.parameterService = parameterService;
        this.formBuilder = formBuilder;
        this.TypeSelectHasError = true;
        this.RequirementSelectHasError = true;
        this.EmployeesSelectHasError = true;
        this.StatusSelectHasError = true;
        this.submitted = false;
        this.task = new src_app_core_models_userTask_model__WEBPACK_IMPORTED_MODULE_5__["UserTask"]();
        this.closingDateT = new Date();
        this.requirements = [];
        this.sourceEmp = []; //Liste of All Employees
        this.settingsReq = {
            pager: {
                display: true,
                perPage: 5
            },
            hideSubHeader: false,
            actions: false,
            columns: {
                nom: {
                    title: 'Name',
                    type: 'string',
                    filter: true
                },
                description: {
                    title: 'Description',
                    type: 'string',
                    filter: true
                },
                type: {
                    title: 'Type',
                    type: 'string',
                    filter: true
                },
                status: {
                    title: 'Status',
                    type: 'string',
                    filter: true
                },
                contractName: {
                    title: 'Contract',
                    type: 'string',
                    filter: true
                },
                releaseDescription: {
                    title: 'Release',
                    type: 'string',
                    filter: true
                },
                parentRequirementNom: {
                    title: 'Parent Requirement',
                    type: 'string',
                    filter: true
                },
            },
        };
        this.hideUsersCombo = true; // div containing list of users hidden by default
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
            if (_this.user.rol != 'User') {
                _this.hideUsersCombo = false;
            }
        });
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idEmp = this.employeeId;
        this.taskForm = this.formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            estimateWorkLoad: [],
            toFinalise: [],
            closingDate: ['', this.DateValidator()],
            employees: [],
            Requirement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            status: [],
            Type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
        });
        this.parameterService.getByGroup("RequirementsStatus")
            .subscribe(function (data) { return _this.parameters = data; });
        this.parameterService.getByGroup("UserTasksType")
            .subscribe(function (data) { return _this.typeList = data; });
        this.requirementService.GetAllByEmployeeId(this.idEmp.toString()).subscribe(function (data) {
            _this.sourceReq = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["LocalDataSource"](data);
        });
        if (this.user.rol != "User") {
            this.employeeService.getAll().subscribe(function (data) {
                _this.sourceEmp = data;
                _this.sourceEmp.sort(function (a, b) {
                    var textA = a.firstName.toUpperCase();
                    var textB = b.firstName.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
            });
        }
        this.parameter = "Open";
    };
    Object.defineProperty(CreateTaskComponent.prototype, "f", {
        get: function () { return this.taskForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateTaskComponent.prototype.create = function () {
        var _this = this;
        this.submitted = true;
        if (this.taskForm.invalid) {
            return;
        }
        this.task.status = this.parameter;
        this.task.requirementId = this.req.id;
        this.task.status = this.parameter;
        this.task.type = this.type;
        this.task.closingDate = this.closingDateT.toDateString();
        this.task.userId = this.idEmp;
        if (this.user.rol == 'User') {
            this.task.isValidated = 'False';
        }
        else {
            this.task.isValidated = 'True'; //got from combo box
        }
        this.taskService.create(this.task).
            subscribe(function (task) {
            _this.ref.close(task);
        });
    };
    CreateTaskComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    CreateTaskComponent.prototype.rowClicked = function (event) {
        this.req = event.data;
        this.reloadComboReq(); // reload combo box method to display selected row
    };
    CreateTaskComponent.prototype.reloadComboReq = function () {
        this.requirements = []; // clear requirement array
        this.requirements.push(this.req); // put the selected requirement into requirements
        this.idR = this.req.nom;
    };
    CreateTaskComponent.prototype.DateValidator = function (format) {
        if (format === void 0) { format = "dd/MM/YYYY"; }
        return function (control) {
            var val = moment__WEBPACK_IMPORTED_MODULE_13__(control.value, format, true);
            if (!val.isValid()) {
                return { invalidDate: true };
            }
            return null;
        };
    };
    CreateTaskComponent.prototype.EmployeesValidateSelect = function (value) {
        if (!value) {
            this.EmployeesSelectHasError = true;
        }
        else {
            this.EmployeesSelectHasError = false;
        }
    };
    CreateTaskComponent.prototype.StatusValidateSelect = function (value) {
        if (!value) {
            this.StatusSelectHasError = true;
        }
        else {
            this.StatusSelectHasError = false;
        }
    };
    CreateTaskComponent.prototype.TypeValidateSelect = function (value) {
        if (!value) {
            this.TypeSelectHasError = true;
        }
        else {
            this.TypeSelectHasError = false;
        }
    };
    CreateTaskComponent.prototype.RequirementValidateSelect = function (value) {
        if (!value) {
            this.RequirementSelectHasError = true;
        }
        else {
            this.RequirementSelectHasError = false;
        }
    };
    CreateTaskComponent.prototype.employeeChange = function () {
        var _this = this;
        this.requirementService.GetAllByEmployeeId(this.idEmp.toString()).subscribe(function (data) {
            _this.sourceReq = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["LocalDataSource"](data);
        });
    };
    CreateTaskComponent.ctorParameters = function () { return [
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"] },
        { type: src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__["UserTaskService"] },
        { type: src_app_core__WEBPACK_IMPORTED_MODULE_6__["RequirementService"] },
        { type: src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeService"] },
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthService"] },
        { type: src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_11__["ParameterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] }
    ]; };
    CreateTaskComponent.propDecorators = {
        employeeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        requirement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    CreateTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-task',
            template: _raw_loader_create_task_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_task_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"],
            src_app_core_services_userTask_service__WEBPACK_IMPORTED_MODULE_4__["UserTaskService"],
            src_app_core__WEBPACK_IMPORTED_MODULE_6__["RequirementService"],
            src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeService"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthService"],
            src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_11__["ParameterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]])
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());



/***/ }),

/***/ "yLqA":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/timesheet/personalmanagement/personalmanagement.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  personalmanagement works!\n</p>\n");

/***/ }),

/***/ "z/yX":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/modals/taskmanagement-modals/create-task/create-task.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\r\n    margin: 1rem;\r\n  }\r\n\r\n  [nbInput] {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .form-control:focus {\r\n    box-shadow:none;\r\n  }\r\n\r\n  .submitButton {\r\n    float: right;\r\n  }\r\n\r\n  nb-card-header button {\r\n    float: right;\r\n  }\r\n\r\n  .container {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  nb-progress-bar {\r\n    flex: 1;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS10YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLE9BQU87RUFDVCIsImZpbGUiOiJjcmVhdGUtdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICB9XHJcblxyXG4gIFtuYklucHV0XSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgfVxyXG5cclxuICAuc3VibWl0QnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIG5iLWNhcmQtaGVhZGVyIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgbmItcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=modules-container-module.js.map