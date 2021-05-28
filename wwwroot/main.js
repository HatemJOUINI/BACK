(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hatem\Documents\PFE ING\ManagementTool\ManagementTool\ManagementTool.API\ClientApp\src\main.ts */"zUnb");


/***/ }),

/***/ "1cnm":
/*!***************************************************!*\
  !*** ./src/app/core/services/contract.service.ts ***!
  \***************************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "qc5V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractService = /** @class */ (function () {
    function ContractService(apiService) {
        this.apiService = apiService;
    }
    ContractService.prototype.getAll = function () {
        return this.apiService.get('api/Contract');
    };
    ContractService.prototype.create = function (contract) {
        return this.apiService.post('api/Contract/', contract);
    };
    ContractService.prototype.destroy = function (contractId) {
        return this.apiService.delete('api/Contract/' + contractId);
    };
    ContractService.prototype.update = function (contract) {
        return this.apiService.put('api/Contract/', contract);
    };
    ContractService.prototype.getContractsByCustomerId = function (customerId) {
        return this.apiService.get('api/Contract/byCustomers/' + customerId);
    };
    ContractService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
    ]; };
    ContractService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "3tlG":
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/*! exports provided: FooterComponent, NavComponent, SidebarComponent, ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "r7Ig");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "4CIR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]; });

/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "Vj15");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]; });

/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "hi3J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]; });







/***/ }),

/***/ "4CIR":
/*!****************************************************!*\
  !*** ./src/app/shared/layout/nav/nav.component.ts ***!
  \****************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nav.component.html */ "5zgg");
/* harmony import */ var _nav_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.component.css */ "Aij0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ "McNs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_modules_modals_usersmanagement_modals_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/modals/usersmanagement-modals/profile/profile.component */ "nNYp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavComponent = /** @class */ (function () {
    function NavComponent(sidebarService, authService, nbMenuService, router, dialogService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.authService = authService;
        this.nbMenuService = nbMenuService;
        this.router = router;
        this.dialogService = dialogService;
        // token: NbAuthJWTToken; // inside the component
        this.items = [
            { title: 'Profile' },
            { title: 'Logout' },
        ];
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
        });
    }
    NavComponent.prototype.toggle = function () {
        this.sidebarService.toggle(true);
        return false;
    };
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nbMenuService.onItemClick()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_a) {
            var tag = _a.tag;
            return tag === 'my-context-menu';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var title = _a.item.title;
            return title;
        }))
            .subscribe(function (title) {
            if (title === 'Logout') {
                localStorage.clear();
                _this.router.navigate(['auth/login']);
            }
            if (title === 'Profile') {
                _this.dialogService.open(src_app_modules_modals_usersmanagement_modals_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]);
            }
        });
    };
    NavComponent.ctorParameters = function () { return [
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"] },
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"] }
    ]; };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nav',
            template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_nav_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "5nbR":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "McNs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['auth/login']);
            }
        }));
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "5oFn":
/*!***********************************************!*\
  !*** ./src/app/core/models/employee.model.ts ***!
  \***********************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "5zgg":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/nav/nav.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table style=\"position: absolute; top: 0; bottom: 0; left: 0; right: 0;\">\r\n\r\n  <tr>\r\n\r\n    <td width=\"1%\"></td>\r\n\r\n    <td>\r\n      <a href=\"#\" (click)=\"toggle()\"><i class=\"nb-menu\"></i></a>\r\n    </td>\r\n\r\n    <td width=\"5%\"></td>\r\n\r\n    <td>\r\n      <table font-family=\"Segoe UI\">\r\n        <tr>\r\n          <td><img src=\"assets/isi2.png\" height=\"75\" width=\"150\"></td>\r\n          <td><H2>Management</H2></td>\r\n          <td><H2>Tools</H2></td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n\r\n<td width=\"81%\"></td>\r\n\r\n<td width=\"7%\">\r\n  <div *ngIf=\"!user; else elseBlock\">\r\n    <!-- not display current user credentials if not logged in  -->\r\n  </div>\r\n  <ng-template #elseBlock>\r\n    <form>\r\n      <nb-user [name]=\"user?.fullName\" [title]=\"user?.function\" size=\"middle\" [nbContextMenu]=\"items\"\r\n        nbContextMenuTag=\"my-context-menu\">\r\n      </nb-user>\r\n    </form>\r\n  </ng-template>\r\n</td>\r\n\r\n<td width=\"2%\"></td>\r\n\r\n</tr>\r\n\r\n</table>\r\n");

/***/ }),

/***/ "9DPC":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/modals/usersmanagement-modals/profile/profile.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\r\n  margin: 1rem;\r\n}\r\n\r\n[nbInput] {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-control:focus {\r\n  box-shadow:none;\r\n}\r\n\r\nnb-card-header button {\r\n  float: right;\r\n}\r\n\r\nimg {\r\n  border-radius: 50%;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n\r\n  margin:  0 0 0 8pxauto;\r\n  padding: 16px;\r\n}\r\n\r\n.title {\r\n  color: grey;\r\n  font-size: 18px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nimg {\r\ndisplay: block;\r\nmax-width:230px;\r\nmax-height:170px;\r\nwidth: auto;\r\nheight: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwwQ0FBMEM7O0VBRTFDLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0FBQ0EsY0FBYztBQUNkLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLFlBQVk7QUFDWiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuW25iSW5wdXRdIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxubmItY2FyZC1oZWFkZXIgYnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gIG1hcmdpbjogIDAgMCAwIDhweGF1dG87XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5pbWcge1xyXG5kaXNwbGF5OiBibG9jaztcclxubWF4LXdpZHRoOjIzMHB4O1xyXG5tYXgtaGVpZ2h0OjE3MHB4O1xyXG53aWR0aDogYXV0bztcclxuaGVpZ2h0OiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host nb-layout-column {\n  width: 500px;\n}\n\n:host nb-layout-column a {\n  background: #f4f4f7;\n}\n\n:host nb-layout-column nb-user{\n  background: #f4f4f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgbmItbGF5b3V0LWNvbHVtbiB7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuOmhvc3QgbmItbGF5b3V0LWNvbHVtbiBhIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNztcbn1cblxuOmhvc3QgbmItbGF5b3V0LWNvbHVtbiBuYi11c2Vye1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY3O1xufSJdfQ== */");

/***/ }),

/***/ "AMah":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/sidebar/pages-menu.ts ***!
  \*****************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Reports & Statistics',
        icon: 'nb-bar-chart',
        expanded: false,
        children: [
            {
                title: 'Monthly TS BY Contract',
                icon: 'nb-bar-chart',
                link: '/pages/statreports',
            },
        ],
    },
    {
        title: 'Parameters',
        icon: 'nb-compose',
        link: '/pages/parameters',
    },
];


/***/ }),

/***/ "AWfZ":
/*!***********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Aij0":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/nav/nav.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-user {\n  justify-content: flex-end;\n  float: right;\n}\n\na {\n  font-size: 2rem;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkIiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi11c2VyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BJ44":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/footer/footer.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    All rights reserved 2019.\n</p>\n");

/***/ }),

/***/ "CMso":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/sidebar/sidebar.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-menu *ngIf=\"accessChecker.isGranted('view', 'tasks') | async\" [items]=\"menu2\">\n</nb-menu>\n\n<br>\n\n<nb-menu *ngIf=\"accessChecker.isGranted('remove', 'teams') | async\" [items]=\"menu3\">\n</nb-menu>\n\n<br>\n\n<nb-menu *ngIf=\"accessChecker.isGranted('remove', 'teams') | async\" [items]=\"menu\">\n</nb-menu>");

/***/ }),

/***/ "Ei3w":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/sidebar/pages-menu3.ts ***!
  \******************************************************/
/*! exports provided: MENU_ITEMS3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS3", function() { return MENU_ITEMS3; });
var MENU_ITEMS3 = [
    {
        title: 'Personal',
        icon: 'nb-gear',
        expanded: false,
        children: [
            {
                title: 'Users',
                icon: 'nb-compose',
                link: '/pages/usersmanagement',
            },
            {
                title: 'Teams',
                icon: 'nb-compose',
                link: '/pages/teamsmanagement',
            },
        ],
    },
    {
        title: 'Contracts & Customers',
        icon: 'nb-gear',
        expanded: false,
        children: [
            {
                title: 'Customers',
                icon: 'nb-person',
                link: '/pages/customersmanagement',
            },
            {
                title: 'Contracts',
                icon: 'nb-compose',
                link: '/pages/contractmanagement',
            },
        ],
    },
];


/***/ }),

/***/ "FqB0":
/*!*************************************************************!*\
  !*** ./src/app/shared/layout/content/content.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "H47D":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/modals/usersmanagement-modals/profile/profile.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [style.width.px]=\"1300\" [style.height.px]=\"800\">\n\n  <nb-card-header>\n    Profile\n    <button nbButton hero status=\"danger\" (click)=\"dismiss()\">Close</button>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <form [formGroup]=\"ProfilForm\" autocomplete=\"off\">\n      <div class=\"card\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <img src=\"assets/blank_profile_h.jpg\"></div>\n          <div class=\"col-sm-7\">\n            <div class=\"form-group\">\n              <b>First Name:</b>\n              <div *ngIf=\"showHide\"><input formControlName=\"firstName\" nbInput type=\"text\" class=\"form-control\"\n                  name=\"firstName\" placeholder=\"First Name\" [(ngModel)]=\"employee.firstName\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                </div>\n              </div>\n              <div *ngIf=\"!showHide\"> <label>{{employee.firstName}}</label></div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"lastname\"><b>Last Name:</b></label>\n              <div *ngIf=\"showHide\"> <input formControlName=\"lastName\" nbInput type=\"text\" class=\"form-control\"\n                  id=\"lastname\" name=\"lastname\" placeholder=\"Last Name\" [(ngModel)]=\"employee.lastName\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors}\" />\n                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                  Last Name is required\n                </div>\n              </div>\n              <div *ngIf=\"!showHide\"> <label>{{employee.lastName}}</label></div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\"><b>Email:</b></label>\n              <div *ngIf=\"showHide\"><input formControlName=\"email\" nbInput class=\"form-control\" id=\"email\" name=\"email\"\n                  placeholder=\"email\" [(ngModel)]=\"employee.email\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                  Email is required\n                </div>\n              </div>\n              <div *ngIf=\"!showHide\"> <label>{{employee.email}}</label></div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"function\"><b>Function:</b></label>\n              <div *ngIf=\"showHide\"><input formControlName=\"function\" nbInput type=\"text\" class=\"form-control\"\n                  id=\"function\" name=\"function\" placeholder=\"Function\" [(ngModel)]=\"employee.function\"\n                  [ngClass]=\"{ 'is-invalid':submitted && f.function.errors}\">\n                <div *ngIf=\"submitted && f.function.errors\" class=\"invalid-feedback\">\n                  Function is required\n                </div>\n              </div>\n              <div *ngIf=\"!showHide\"> <label>{{employee.function}}</label></div>\n            </div>\n          </div>\n          <div class=\"col-sm-2\">\n            <div class=\"form-group\">\n              <label><b>Role:&nbsp;&nbsp;&nbsp;</b></label>\n              <div> <label>{{employee.role}}</label></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <a> Personal Data</a>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"cin\"><b>Cin:</b></label>\n              <div *ngIf=\"showHide\"><input formControlName=\"cin\" nbInput type=\"text\" class=\"form-control\" id=\"cin\"\n                  name=\"cin\" placeholder=\"Cin\" [(ngModel)]=\"employee.cin\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.cin.errors}\">\n                <div *ngIf=\"submitted && f.cin.errors\" class=\"invalid-feedback\">\n                  Cin is required\n                </div>\n              </div>\n              <div *ngIf=\"!showHide\"> <label>{{employee.cin}}</label></div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"adress\"><b>Address:</b></label>\n              <div *ngIf=\"showHide\"><input formControlName=\"adress\" nbInput type=\"text\" class=\"form-control\" id=\"adress\"\n                  name=\"adress\" placeholder=\"Address\" [(ngModel)]=\"employee.adress\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.adress.errors}\">\n                <div *ngIf=\"submitted && f.adress.errors\" class=\"invalid-feedback\">\n                  Adress is required\n                </div>\n              </div>\n              <div *ngIf=\"!showHide\"> <label>{{employee.adress}}</label></div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"city\"><b>City:&nbsp;&nbsp;&nbsp;</b></label>\n              <div *ngIf=\"showHide\"><input formControlName=\"city\" nbInput type=\"text\" class=\"form-control\" id=\"city\"\n                  name=\"city\" placeholder=\"City\" [(ngModel)]=\"employee.city\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.city.errors}\">\n                <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\n                  City is required\n                </div>\n              </div>\n              <div *ngIf=\"!showHide\"> <label>{{employee.city}}</label></div>\n            </div>\n            <div class=\"form-group\">\n              <label><b>Birthday:&nbsp;&nbsp;&nbsp;</b></label>\n              <!--<div *ngIf=\"showHide\"> <input nbInput formControlName=\"birthday\" [nbDatepicker]=\"birthday\" class=\"form-control\"\n                  placeholder=\"Birthday\" [(ngModel)]=\"birthdayP\" name=\"birthday\" \n                  [ngClass]=\"{ 'is-invalid': submitted && f.birthday.errors }\">\n              <nb-datepicker #birthday format=\"MM/dd/yyyy\"></nb-datepicker>\n              <div *ngIf=\"submitted && f.birthday.errors\" class=\"invalid-feedback\">Birthday is required</div>\n            </div>-->\n              <label>{{employee.birthday}}</label>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"phoneNumber\"><b>Phone Number:</b></label>\n              <div *ngIf=\"showHide\"><input formControlName=\"phoneNumber\" nbInput type=\"phoneNumber\" class=\"form-control\"\n                  id=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"Phone Number\" [(ngModel)]=\"employee.phoneNumber\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.phoneNumber.errors}\">\n                <div *ngIf=\"submitted && f.phoneNumber.errors\" class=\"invalid-feedback\">\n                  Phone Number is required\n                </div>\n              </div>\n              <div *ngIf=\"!showHide\"> <label>{{employee.phoneNumber}}</label></div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"registrationNumber\"><b>Registration Number:</b></label>\n              <div *ngIf=\"showHide\"><input formControlName=\"registrationNumber\" nbInput type=\"text\" class=\"form-control\"\n                  id=\"registrationNumber\" name=\"registrationNumber\" placeholder=\"Registration Number\"\n                  [(ngModel)]=\"employee.registrationNumber\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.registrationNumber.errors }\" required>\n                <div *ngIf=\"submitted && f.registrationNumber.errors\" class=\"invalid-feedback\">\n                  Registration Number is required\n                </div>\n              </div>\n\n              <div *ngIf=\"!showHide\"> <label>{{employee.registrationNumber}}</label></div>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>Civil Status:&nbsp;&nbsp;&nbsp;</b></label>\n              <div *ngIf=\"showHide\">\n                <select formControlName=\"civilStatus\" class=\"form-control\" outline status=\"success\" name=\"civilStatu\"\n                  placeholder=\"Civil Status\" [(ngModel)]=\"civilStatu\" (click)=\"$event.preventDefault()\">\n                  <option value={{civilStatu.value}} *ngFor=\"let civilStatu of civilStatuss\">\n                    {{civilStatu.value}}\n                  </option>\n                </select>\n              </div>\n              <div *ngIf=\"!showHide\"> <label>{{employee.civilStatus}}</label></div>\n            </div>\n            <div class=\"form-group\">\n              <label><b>Start Date:</b></label>\n              <!--<div *ngIf=\"showHide\"><input nbInput formControlName=\"startDate\" [nbDatepicker]=\"startDate\" class=\"form-control\"\n                  placeholder=\"Start Date\" [(ngModel)]=\"startDateP\" name=\"startDate\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.startDate.errors }\">\n                <nb-datepicker #startDate format=\"MM/dd/yyyy\"></nb-datepicker>\n                <div *ngIf=\"submitted && f.startDate.errors\" class=\"invalid-feedback\">Start date is required</div>\n              </div>-->\n              <label>{{employee.startDate}}</label>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </form>\n    <div class=\"card\">\n      <a>Login Parameters</a>\n      <hr>\n      <form [formGroup]=\"PassForm\">\n        <div class=\"row\">\n          <div class=\"col-sm-5\">\n            <div class=\"form-group\">\n              <label>User name</label>\n              <input Disabled nbInput formControlName=\"userName\" type=\"text\" class=\"form-control\" id=\"userName\"\n                name=\"userName\" placeholder=\"User Name\" [(ngModel)]=\"employee.userName\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"oldPassword\">Current Password</label>\n                  <input nbInput formControlName=\"currentPassword\" type=\"password\" class=\"form-control\" id=\"oldPassword\"\n                    name=\"oldPassword\" placeholder=\"oldPassword\" [(ngModel)]=\"oldPassword\"\n                    [ngClass]=\"{ 'is-invalid': changed && ff.currentPassword.errors }\">\n                  <div *ngIf=\"changed && ff.currentPassword.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"ff.currentPassword.errors.required\">password is required</div>\n                    <div *ngIf=\"ff.currentPassword.errors.minlength\">Password must be at least 6 characters</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"newPassword\">New Password</label>\n                  <input nbInput formControlName=\"newPassword\" type=\"password\" class=\"form-control\" id=\"newPassword\"\n                    name=\"newPassword\" placeholder=\"newPassword\" [(ngModel)]=\"newPassword\"\n                    [ngClass]=\"{ 'is-invalid': changed && ff.newPassword.errors }\">\n                  <div *ngIf=\"changed && ff.newPassword.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"ff.newPassword.errors.required\">password is required</div>\n                    <div *ngIf=\"ff.newPassword.errors.minlength\">Password must be at least 6 characters</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-2\">\n            <button nbButton class=\"submitButton\" type=\"submit\" hero status=\"success\" (click)=\"changePassword()\">Change\n              Password</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=!showHide>\n      <button nbButton status=\"info\" (click)=\"showHide = !showHide\" style=\"float: right;\">Edit</button>\n    </div>\n    <div *ngIf=showHide>\n      <button nbButton hero status=\"danger\" (click)=\"showHide = !showHide\">Cancel</button>\n      <button nbButton class=\"submitButton\" type=\"submit\" (click)=\"update()\" hero status=\"success\"\n        style=\"float: right;\">Submit</button>\n    </div>\n  </nb-card-body>\n</nb-card>");

/***/ }),

/***/ "M0ag":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, FooterComponent, NavComponent, SidebarComponent, ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "PCNd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "3tlG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"]; });





/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.module */ "pV/B");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            ],
            declarations: [],
            providers: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "Qycn":
/*!************************************************!*\
  !*** ./src/app/core/services/role.provider.ts ***!
  \************************************************/
/*! exports provided: RoleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleProvider", function() { return RoleProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators/map */ "NVK1");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "McNs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleProvider = /** @class */ (function () {
    function RoleProvider(authService) {
        this.authService = authService;
    }
    RoleProvider.prototype.getRole = function () {
        return this.authService.onTokenChange()
            .pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (token) {
            return token.isValid() ? token.getPayload()['rol'] : 'guest';
        }));
    };
    RoleProvider.ctorParameters = function () { return [
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] }
    ]; };
    RoleProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]])
    ], RoleProvider);
    return RoleProvider;
}());



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Ss2B":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/content/content.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "McNs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TlEd":
/*!*************************************************************!*\
  !*** ./src/app/shared/layout/sidebar/sidebar.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Vj15":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/sidebar/sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "CMso");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "TlEd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/security */ "lWTH");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-menu */ "AMah");
/* harmony import */ var _pages_menu2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages-menu2 */ "acT8");
/* harmony import */ var _pages_menu3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages-menu3 */ "Ei3w");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(accessChecker) {
        this.accessChecker = accessChecker;
        this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_4__["MENU_ITEMS"];
        this.menu2 = _pages_menu2__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS2"];
        this.menu3 = _pages_menu3__WEBPACK_IMPORTED_MODULE_6__["MENU_ITEMS3"];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbAccessChecker"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbAccessChecker"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "Wole":
/*!**************************************************************!*\
  !*** ./src/app/modules/renderers/custom-render.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRenderComponent", function() { return CustomRenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomRenderComponent = /** @class */ (function () {
    function CustomRenderComponent() {
    }
    CustomRenderComponent.prototype.ngOnInit = function () {
        if (this.value === '1') {
            this.renderValue = 'Opened';
        }
        else if (this.value = '2') {
            this.renderValue = 'Closed';
        }
        else {
            this.renderValue = 'OnGoing';
        }
    };
    CustomRenderComponent.ctorParameters = function () { return []; };
    CustomRenderComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    CustomRenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    {{renderValue}}\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], CustomRenderComponent);
    return CustomRenderComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _modules_renderers_custom_render_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/renderers/custom-render.component */ "Wole");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/auth */ "McNs");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/security */ "lWTH");
/* harmony import */ var _core_services_role_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/role.provider */ "Qycn");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "qlzE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _modules_renderers_custom_render_component__WEBPACK_IMPORTED_MODULE_5__["CustomRenderComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["JsonpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeModule"].forRoot({ name: 'default' }),
                // this will enable the default theme, you can change this to `cosmic` to enable the dark theme
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbProgressBarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                _nebular_security__WEBPACK_IMPORTED_MODULE_12__["NbSecurityModule"].forRoot({
                    accessControl: {
                        User: {
                            // login
                            // home 
                            // full access on : task, timesheetElement
                            view: ['tasks', 'timesheets', 'releases', 'requirements', 'home', 'login'],
                            create: ['tasks', 'timesheets', 'requirements'],
                            remove: ['tasks', 'timesheets', 'requirements'],
                        },
                        TeamLeader: {
                            parent: 'User',
                            // parent user : task, timesheet
                            // full access on : users, teams, releases, requirement
                            view: ['users', 'teams', 'releases', 'requirements', 'contracts', 'customers'],
                            create: ['users', 'teams', 'releases', 'requirements'],
                            remove: ['users', 'teams', 'releases', 'requirements'],
                        },
                        Admin: {
                            // customers, contracts, rates, : Admin
                            // full access on : everything
                            view: '*',
                            create: '*',
                            remove: '*',
                        },
                    },
                }),
                _nebular_auth__WEBPACK_IMPORTED_MODULE_11__["NbAuthModule"].forRoot({
                    strategies: [
                        _nebular_auth__WEBPACK_IMPORTED_MODULE_11__["NbPasswordAuthStrategy"].setup({
                            name: 'email',
                            token: {
                                class: _nebular_auth__WEBPACK_IMPORTED_MODULE_11__["NbAuthJWTToken"],
                                key: 'auth_token',
                            },
                            //baseEndpoint: 'http://tools.biwamconsulting.com:5001', 
                            //baseEndpoint: 'http://tools.biwamconsulting.com', 
                            baseEndpoint: 'https://localhost:44303',
                            login: {
                                endpoint: '/api/Auth/login',
                                method: 'post',
                                defaultErrors: ['Login/Email combination is not correct, please try again.'],
                            },
                        }),
                    ],
                    forms: {},
                }),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            providers: [
                { provide: _nebular_security__WEBPACK_IMPORTED_MODULE_12__["NbRoleProvider"], useClass: _core_services_role_provider__WEBPACK_IMPORTED_MODULE_13__["RoleProvider"] },
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "acT8":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/sidebar/pages-menu2.ts ***!
  \******************************************************/
/*! exports provided: MENU_ITEMS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS2", function() { return MENU_ITEMS2; });
var MENU_ITEMS2 = [
    {
        title: 'Home',
        icon: 'nb-home',
        link: '/pages/home',
        home: true
    },
    {
        title: 'Requirements',
        icon: 'nb-list',
        link: '/pages/requirement',
    },
    {
        title: 'Tasks',
        icon: 'nb-compose',
        link: '/pages/tasks',
    },
    {
        title: 'RH Tasks',
        icon: 'nb-compose',
        link: '/pages/generictask',
    },
    {
        title: 'Timesheets',
        icon: 'nb-compose',
        link: '/pages/timesheetmanagement',
    },
    {
        title: 'Release',
        icon: 'nb-compose',
        link: '/pages/release',
    },
];


/***/ }),

/***/ "dJ3e":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ApiService, ContractService, RequirementService, TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "qc5V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract.service */ "1cnm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return _contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"]; });

/* harmony import */ var _requirement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requirement.service */ "o1FN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequirementService", function() { return _requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"]; });

/* harmony import */ var _timesheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timesheet.service */ "rn5v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return _timesheet_service__WEBPACK_IMPORTED_MODULE_3__["TimesheetService"]; });







/***/ }),

/***/ "hi3J":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/content/content.component.ts ***!
  \************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _raw_loader_content_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./content.component.html */ "Ss2B");
/* harmony import */ var _content_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.component.css */ "FqB0");
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



var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.ctorParameters = function () { return []; };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-content',
            template: _raw_loader_content_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_content_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "nNYp":
/*!************************************************************************************!*\
  !*** ./src/app/modules/modals/usersmanagement-modals/profile/profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "H47D");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.css */ "9DPC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/employee.service */ "yWs4");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ "McNs");
/* harmony import */ var src_app_core_models_employee_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/models/employee.model */ "5oFn");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var src_app_core_models_passwordChange_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/models/passwordChange.model */ "s+If");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/parameter.service */ "xmDL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(employeeservice, authService, ref, toastrService, formBuilder, parameterService) {
        var _this = this;
        this.employeeservice = employeeservice;
        this.authService = authService;
        this.ref = ref;
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.parameterService = parameterService;
        this.startDateP = new Date();
        this.birthdayP = new Date();
        this.submitted = false;
        this.changed = false;
        this.employee = new src_app_core_models_employee_model__WEBPACK_IMPORTED_MODULE_5__["Employee"]();
        this.passwordchange = new src_app_core_models_passwordChange_model__WEBPACK_IMPORTED_MODULE_7__["PasswordChange"]();
        this.showHide = 0;
        this.isMale = 0; // for blank photo
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeservice.getById(this.user.id).subscribe(function (data) {
            _this.employee = data;
        });
        this.parameterService.getByGroup("CivilStatus")
            .subscribe(function (data) { return _this.civilStatuss = data; });
        this.ProfilForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            function: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            cin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            // birthday:['',this.DateValidator()],
            adress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            registrationNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            // startDate:['',this.DateValidator()],
            civilStatus: []
        });
        this.PassForm = this.formBuilder.group({
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6)]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6)]],
            userName: []
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "f", {
        get: function () { return this.ProfilForm.controls; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "ff", {
        get: function () { return this.PassForm.controls; },
        enumerable: false,
        configurable: true
    });
    ProfileComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.submitted = true;
        if (this.ProfilForm.invalid) {
            return;
        }
        //this.employee.birthday=this.birthdayP.toDateString();
        //this.employee.startDate=this.startDateP.toDateString();
        this.employee.civilStatus = this.civilStatu;
        console.log(this.employee);
        this.employeeservice.update(this.employee)
            .subscribe(function () { _this.showHide = 0; });
    };
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        this.changed = true;
        if (this.PassForm.invalid) {
            return;
        }
        this.passwordchange.userId = this.employee.id;
        this.passwordchange.newPassword = this.newPassword;
        this.passwordchange.oldPassword = this.oldPassword;
        this.employeeservice.changePassword(this.passwordchange).subscribe(function () {
            _this.showToast('Password updated successfully', 'Success');
        }, function (error) { _this.toastrService.danger(status, 'Old password is invalid'); });
    };
    ProfileComponent.prototype.showToast = function (status, message) {
        this.toastrService.success(status, message, { status: status });
    };
    ProfileComponent.prototype.DateValidator = function (format) {
        if (format === void 0) { format = "dd/MM/YYYY"; }
        return function (control) {
            var val = moment__WEBPACK_IMPORTED_MODULE_10__(control.value, format, true);
            if (!val.isValid()) {
                return { invalidDate: true };
            }
            return null;
        };
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogRef"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_9__["ParameterService"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogRef"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            src_app_core_services_parameter_service__WEBPACK_IMPORTED_MODULE_9__["ParameterService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "o1FN":
/*!******************************************************!*\
  !*** ./src/app/core/services/requirement.service.ts ***!
  \******************************************************/
/*! exports provided: RequirementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementService", function() { return RequirementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "qc5V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequirementService = /** @class */ (function () {
    function RequirementService(apiService) {
        this.apiService = apiService;
    }
    RequirementService.prototype.getAll = function () {
        return this.apiService.get('api/Requirement');
    };
    RequirementService.prototype.create = function (requirement) {
        return this.apiService.post('api/Requirement/', requirement);
    };
    RequirementService.prototype.destroy = function (requirementId) {
        return this.apiService.delete('api/Requirement/' + requirementId);
    };
    RequirementService.prototype.update = function (requirement) {
        return this.apiService.put('api/Requirement/', requirement);
    };
    RequirementService.prototype.GetAllByEmployeeId = function (employeeId) {
        return this.apiService.get('api/Requirement/byEmployees/' + employeeId);
    };
    RequirementService.prototype.GetOther = function (employeeId) {
        return this.apiService.get('api/Requirement/other/' + employeeId);
    };
    RequirementService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
    ]; };
    RequirementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], RequirementService);
    return RequirementService;
}());



/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "dJ3e");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
                _services__WEBPACK_IMPORTED_MODULE_2__["ContractService"],
                _services__WEBPACK_IMPORTED_MODULE_2__["RequirementService"],
                _services__WEBPACK_IMPORTED_MODULE_2__["TimesheetService"]
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "pV/B":
/*!************************************************!*\
  !*** ./src/app/shared/layout/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "r7Ig");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "4CIR");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "Vj15");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "hi3J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"]
            ],
            providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "qc5V":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ "McNs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.token = token.getValue(); // here we receive a payload from the token and assigne it to our `user` variable 
            }
        });
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](); }
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.get(path, { headers: myHeaders });
    };
    ApiService.prototype.put = function (path, body) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.put(path, body, { headers: myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.post(path, body, { headers: myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.delete(path, { headers: myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put2 = function (path, body) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.put(path, body, { headers: myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] }
    ]; };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "r7Ig":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "BJ44");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "AWfZ");
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



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "rn5v":
/*!****************************************************!*\
  !*** ./src/app/core/services/timesheet.service.ts ***!
  \****************************************************/
/*! exports provided: TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return TimesheetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "qc5V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimesheetService = /** @class */ (function () {
    function TimesheetService(apiService) {
        this.apiService = apiService;
    }
    TimesheetService.prototype.getAll = function () {
        return this.apiService.get('api/TimeSheetElement');
    };
    TimesheetService.prototype.create = function (timesheet) {
        return this.apiService.post('/api/TimeSheetElement/', timesheet);
    };
    TimesheetService.prototype.getById = function (idUser) {
        return this.apiService.get('api/TimeSheetElement/byUser/' + idUser);
    };
    //[HttpGet("byUser/{idUser}/{startDate}")]
    TimesheetService.prototype.GetWeekTsByUser = function (idUser, startDate) {
        return this.apiService.get('api/TimeSheetElement/byUser/' + idUser + '/' + startDate);
    };
    //AddTsByWeek
    TimesheetService.prototype.update = function (timesheet) {
        return this.apiService.post('api/TimeSheetElement/AddTsByWeek/', timesheet);
    };
    TimesheetService.prototype.getAllTimesheetsByContractMonthYear = function (contractId, month, year) {
        return this.apiService.get('api/TimeSheetElement/getAllTimesheetsByContractMonthYear/' +
            contractId + '/' + month + '/' + year);
    };
    TimesheetService.prototype.getAllTimesheetsByContractMonthYearByUser = function (contractId, month, year, employeeId) {
        return this.apiService.get('api/TimeSheetElement/getAllTimesheetsByContractMonthYearByUser/' +
            contractId + '/' + month + '/' + year + '/' + employeeId);
    };
    TimesheetService.prototype.getAllTimesheetsByContractMonthYear2 = function (contractId, month, year) {
        return this.apiService.get('api/TimeSheetElement/getAllTimesheetsByContractMonthYear2/' +
            contractId + '/' + month + '/' + year);
    };
    TimesheetService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
    ]; };
    TimesheetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TimesheetService);
    return TimesheetService;
}());



/***/ }),

/***/ "s+If":
/*!*****************************************************!*\
  !*** ./src/app/core/models/passwordChange.model.ts ***!
  \*****************************************************/
/*! exports provided: PasswordChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChange", function() { return PasswordChange; });
var PasswordChange = /** @class */ (function () {
    function PasswordChange() {
    }
    return PasswordChange;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.service */ "5nbR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        children: [
            {
                path: '',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
                loadChildren: './modules/container.module#ContainerModule',
            },
            {
                path: 'auth',
                loadChildren: './auth/ngxauth.module#NgxAuthModule',
            },
        ],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "xmDL":
/*!****************************************************!*\
  !*** ./src/app/core/services/parameter.service.ts ***!
  \****************************************************/
/*! exports provided: ParameterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterService", function() { return ParameterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "qc5V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParameterService = /** @class */ (function () {
    function ParameterService(apiService) {
        this.apiService = apiService;
    }
    ParameterService.prototype.getAll = function () {
        return this.apiService.get('api/Parameter');
    };
    ParameterService.prototype.create = function (parameter) {
        return this.apiService.post('api/Parameter', parameter);
    };
    ParameterService.prototype.destroy = function (parameterId) {
        return this.apiService.delete('api/Parameter/' + parameterId);
    };
    ParameterService.prototype.update = function (parameter) {
        return this.apiService.put('api/Parameter/', parameter);
    };
    ParameterService.prototype.getById = function (parameterId) {
        return this.apiService.get('api/Parameter/' + parameterId);
    };
    ParameterService.prototype.getByGroup = function (group) {
        return this.apiService.get('api/Parameter/' + group);
    };
    ParameterService.prototype.getGroup = function () {
        return this.apiService.get('api/Parameter/Groups/');
    };
    ParameterService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
    ]; };
    ParameterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ParameterService);
    return ParameterService;
}());



/***/ }),

/***/ "yWs4":
/*!***************************************************!*\
  !*** ./src/app/core/services/employee.service.ts ***!
  \***************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "qc5V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService(apiService) {
        this.apiService = apiService;
    }
    EmployeeService.prototype.getAll = function () {
        return this.apiService.get('api/Employee');
    };
    EmployeeService.prototype.create = function (employee) {
        return this.apiService.post('api/accounts', employee);
    };
    EmployeeService.prototype.destroy = function (employeeId) {
        return this.apiService.delete('api/Employee/' + employeeId);
    };
    EmployeeService.prototype.update = function (employee) {
        return this.apiService.put('api/Employee/', employee);
    };
    EmployeeService.prototype.getById = function (employeeId) {
        return this.apiService.get('api/Employee/' + employeeId);
    };
    EmployeeService.prototype.changePassword = function (passwordchange) {
        return this.apiService.put('api/accounts', passwordchange);
    };
    EmployeeService.prototype.resetPassword = function (passwordChange) {
        return this.apiService.put('/api/Accounts/PutAsyncReset', passwordChange);
    };
    EmployeeService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
    ]; };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/ngxauth.module": [
		"tzqR",
		"auth-ngxauth-module"
	],
	"./modules/container.module": [
		"ew0r",
		"default~modules-container-module~pages-timesheet-timesheet-module",
		"modules-container-module"
	],
	"./pages/timesheet/timesheet.module": [
		"/7ss",
		"default~modules-container-module~pages-timesheet-timesheet-module",
		"pages-timesheet-timesheet-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map