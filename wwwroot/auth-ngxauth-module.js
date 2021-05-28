(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-ngxauth-module"],{

/***/ "/J0c":
/*!*******************************************************!*\
  !*** ./src/app/auth/ngx-auth/ngx-auth.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host nb-card {\n  margin: 0;\n  height: calc(100vh - 2 * 2.5rem);\n}\n\n:host .navigation .link {\n  text-decoration: none;\n}\n\n:host .navigation .link .icon {\n  font-size: 2rem;\n}\n\n:host nb-card-body {\n  display: flex;\n  width: 100%;\n}\n\n:host nb-auth-block {\n  margin: auto;\n}\n\n:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n  padding: 2.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuZ3gtYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUlJLFNBQVM7RUFDVCxnQ0FBaUQ7QUFKckQ7O0FBREE7RUFTSSxxQkFBcUI7QUFKekI7O0FBTEE7RUFZTSxlQUFlO0FBSHJCOztBQVRBO0VBaUJJLGFBQWE7RUFDYixXQUFXO0FBSmY7O0FBZEE7RUFzQkksWUFBWTtBQUpoQjs7QUFsQkE7RUE0Qk0sZUEzQndCO0FBcUI5QiIsImZpbGUiOiJuZ3gtYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuOmhvc3Qge1xyXG4gICRhdXRoLWxheW91dC1wYWRkaW5nOiAyLjVyZW07XHJcblxyXG4gIG5iLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqICN7JGF1dGgtbGF5b3V0LXBhZGRpbmd9KTtcclxuICB9XHJcblxyXG4gIC5uYXZpZ2F0aW9uIC5saW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5iLWNhcmQtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBuYi1hdXRoLWJsb2NrIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gXHJcbiAgL2RlZXAvIHtcclxuICAgIG5iLWxheW91dCAubGF5b3V0IC5sYXlvdXQtY29udGFpbmVyIC5jb250ZW50IC5jb2x1bW5zIG5iLWxheW91dC1jb2x1bW4ge1xyXG4gICAgICBwYWRkaW5nOiAkYXV0aC1sYXlvdXQtcGFkZGluZztcclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufSAiXX0= */");

/***/ }),

/***/ "8chH":
/*!************************************************!*\
  !*** ./src/app/auth/ngxauth-routing.module.ts ***!
  \************************************************/
/*! exports provided: routes, NgxauthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxauthRoutingModule", function() { return NgxauthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_login_ngx_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-login/ngx-login.component */ "zlOg");
/* harmony import */ var _ngx_auth_ngx_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-auth/ngx-auth.component */ "M5t/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _ngx_auth_ngx_auth_component__WEBPACK_IMPORTED_MODULE_3__["NgxAuthComponent"],
        children: [
            {
                path: 'login',
                component: _ngx_login_ngx_login_component__WEBPACK_IMPORTED_MODULE_2__["NgxLoginComponent"],
            },
        ],
    },
];
var NgxauthRoutingModule = /** @class */ (function () {
    function NgxauthRoutingModule() {
    }
    NgxauthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NgxauthRoutingModule);
    return NgxauthRoutingModule;
}());



/***/ }),

/***/ "M5t/":
/*!*****************************************************!*\
  !*** ./src/app/auth/ngx-auth/ngx-auth.component.ts ***!
  \*****************************************************/
/*! exports provided: NgxAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthComponent", function() { return NgxAuthComponent; });
/* harmony import */ var _raw_loader_ngx_auth_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ngx-auth.component.html */ "rrYq");
/* harmony import */ var _ngx_auth_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-auth.component.scss */ "/J0c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "McNs");
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




var NgxAuthComponent = /** @class */ (function (_super) {
    __extends(NgxAuthComponent, _super);
    function NgxAuthComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgxAuthComponent.prototype.ngOnInit = function () {
    };
    NgxAuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ngx-auth',
            template: _raw_loader_ngx_auth_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ngx_auth_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], NgxAuthComponent);
    return NgxAuthComponent;
}(_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthComponent"]));



/***/ }),

/***/ "oShF":
/*!********************************************************!*\
  !*** ./src/app/auth/ngx-login/ngx-login.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaIiwiZmlsZSI6Im5neC1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9Il19 */");

/***/ }),

/***/ "qs+2":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/ngx-login/ngx-login.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/isi2.png\" height=\"150\" width=\"300\" class=\"center\">\n<!-- <h1 id=\"title\" class=\"title\">Login</h1> -->\n<p class=\"sub-title\">Hello! Log in with your user-name.</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-username\">Username:</label>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.username\"\n           #username=\"ngModel\"\n           name=\"username\"\n           id=\"input-username\"\n           placeholder=\"User-name\"\n           autofocus >\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">Password:</label>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           name=\"password\"\n           type=\"password\"\n           id=\"input-password\"\n           placeholder=\"Password\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    \n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"success\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Log In\n  </button>\n</form>\n");

/***/ }),

/***/ "rrYq":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/ngx-auth/ngx-auth.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-layout>\n  <nb-layout-column>\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n        </nav>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-auth-block>\n          <router-outlet></router-outlet>\n        </nb-auth-block>\n      </nb-card-body>\n    </nb-card>\n  </nb-layout-column>\n</nb-layout>");

/***/ }),

/***/ "tzqR":
/*!****************************************!*\
  !*** ./src/app/auth/ngxauth.module.ts ***!
  \****************************************/
/*! exports provided: NgxAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthModule", function() { return NgxAuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _ngxauth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngxauth-routing.module */ "8chH");
/* harmony import */ var _ngx_login_ngx_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-login/ngx-login.component */ "zlOg");
/* harmony import */ var _ngx_auth_ngx_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngx-auth/ngx-auth.component */ "M5t/");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/auth */ "McNs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NgxAuthModule = /** @class */ (function () {
    function NgxAuthModule() {
    }
    NgxAuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
                _ngxauth_routing_module__WEBPACK_IMPORTED_MODULE_5__["NgxauthRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _nebular_auth__WEBPACK_IMPORTED_MODULE_8__["NbAuthModule"]
            ],
            declarations: [_ngx_login_ngx_login_component__WEBPACK_IMPORTED_MODULE_6__["NgxLoginComponent"], _ngx_auth_ngx_auth_component__WEBPACK_IMPORTED_MODULE_7__["NgxAuthComponent"]]
        })
    ], NgxAuthModule);
    return NgxAuthModule;
}());



/***/ }),

/***/ "zlOg":
/*!*******************************************************!*\
  !*** ./src/app/auth/ngx-login/ngx-login.component.ts ***!
  \*******************************************************/
/*! exports provided: NgxLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoginComponent", function() { return NgxLoginComponent; });
/* harmony import */ var _raw_loader_ngx_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ngx-login.component.html */ "qs+2");
/* harmony import */ var _ngx_login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-login.component.css */ "oShF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "McNs");
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




var NgxLoginComponent = /** @class */ (function (_super) {
    __extends(NgxLoginComponent, _super);
    function NgxLoginComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgxLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.onTokenChange().subscribe(function (token) {
            //console.log('inside on init');
            if (token.isValid()) {
                //console.log('token valid');
                _this.router.navigate(['']); // Your redirection goes here
            }
            else {
                //console.log('token not valid');
            }
        }, function (error) {
            _this.errors = error;
            console.log("Login/Email combination is not correct, please try again.");
        });
    };
    NgxLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ngx-login',
            template: _raw_loader_ngx_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ngx_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], NgxLoginComponent);
    return NgxLoginComponent;
}(_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbLoginComponent"]));



/***/ })

}]);
//# sourceMappingURL=auth-ngxauth-module.js.map