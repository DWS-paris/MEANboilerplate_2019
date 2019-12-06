(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-home-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form   \n  [formGroup]=\"form\" \n  (submit)=\"submitForm()\"\n>\n    <fieldset>\n        <legend>Credentials</legend>\n        <label for=\"email\">Email</label>\n        <input \n            type=\"email\" id=\"email\" name=\"email\" required minlength=\"5\"\n            formControlName=\"email\"\n        >\n\n        <label for=\"password\">Password</label>\n        <input \n            type=\"password\" id=\"password\" name=\"password\" required minlength=\"5\"\n            formControlName=\"password\"\n        >\n    </fieldset>\n\n  <button \n    type=\"submit\"\n    [disabled]=\"!form.valid\"\n  >Register</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 [innerText]=\"post.title\"></h2>\n<p [innerText]=\"post.body\"></p>\n\n<button \n    (click)=\"sendPostId.emit({ id: post.id, action: 'read' })\"\n>Read more...</button>\n<button \n    (click)=\"sendPostId.emit({ id: post.id, action: 'edit' })\"\n>Edit</button>\n\n<button \n    (click)=\"sendPostId.emit({ id: post.id, action: 'delete' })\"\n>Delete</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home-page/home-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home-page/home-page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-login-form></app-login-form>\n\n<ul *ngIf=\"postCollection\">\n  <li *ngFor=\"let item of postCollection\">\n    <app-post\n      [post]=\"item\"\n      (sendPostId)=\"openPostPage($event)\"\n    ></app-post>\n  </li>\n</ul>");

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");

/*
Imports & definition
*/

// Gestion des formulaires


let LoginFormComponent = 
//
/*
Export
*/
class LoginFormComponent {
    //
    constructor(FormBuilder, CrudService) {
        this.FormBuilder = FormBuilder;
        this.CrudService = CrudService;
        /*
        Declaration
        */
        this.register = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /*
        Methods
        */
        this.resetForm = () => {
            this.form = this.FormBuilder.group({
                email: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        };
        this.submitForm = () => {
            // User the CRUD service to log user
            this.CrudService.createItem('auth/login', this.form.value)
                .then(apiResponse => {
                console.log(apiResponse);
            })
                .catch(apiResponse => {
                console.error(apiResponse);
            });
        };
    }
    //
    ngOnInit() {
        this.resetForm();
    }
    ngOnChanges(changes) { }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginFormComponent.prototype, "register", void 0);
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html")).default
    })
    //
    /*
    Export
    */
], LoginFormComponent);

//


/***/ }),

/***/ "./src/app/components/login-form/module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/login-form/module.ts ***!
  \*************************************************/
/*! exports provided: LoginFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return LoginFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

/*
Imports
*/



// Gestion des formulaires

//
/*
Definition & export
*/
let LoginFormModule = class LoginFormModule {
};
LoginFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]],
        exports: [_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], LoginFormModule);

;
//


/***/ }),

/***/ "./src/app/components/post/module.ts":
/*!*******************************************!*\
  !*** ./src/app/components/post/module.ts ***!
  \*******************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.component */ "./src/app/components/post/post.component.ts");

/*
Imports
*/



//
/*
Definition & export
*/
let PostModule = class PostModule {
};
PostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"]],
        exports: [_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })
], PostModule);

;
//


/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*
Inport
*/

//
/*
Desfinnition & export
*/
let PostComponent = class PostComponent {
    //
    constructor() {
        this.sendPostId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "post", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PostComponent.prototype, "sendPostId", void 0);
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html")).default
    })
], PostComponent);

//


/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");

/*
Imports
*/
// Angular


// Inner

//
/*
Definition & export
*/
let HomePageComponent = class HomePageComponent {
    //
    constructor(CrudService, Router) {
        this.CrudService = CrudService;
        this.Router = Router;
        /*
        Methods
        */
        this.getPosts = () => {
            this.CrudService.readItem('posts')
                .then(apiResponse => {
                this.postCollection = apiResponse;
            })
                .catch(apiResponse => {
                console.error(apiResponse);
            });
        };
        this.openPostPage = (event) => {
            if (event.action === 'read') {
                this.Router.navigateByUrl(`/post/${event.id}`);
            }
            else if (event.action === 'edit') {
                this.Router.navigateByUrl(`/edit/${event.id}`);
            }
            else if (event.action === 'delete') {
                this.CrudService.deleteItem('posts', event.id)
                    .then(apiResponse => {
                    console.log(apiResponse);
                })
                    .catch(apiResponse => {
                    console.error(apiResponse);
                });
            }
        };
    }
    //
    /*
    Hooks
    */
    ngOnInit() {
        // this.getPosts();
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home-page/home-page.component.html")).default
    })
], HomePageComponent);

//


/***/ }),

/***/ "./src/app/routes/home-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/routes/home-page/router.ts");
/* harmony import */ var _components_post_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post/module */ "./src/app/components/post/module.ts");
/* harmony import */ var _components_login_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/login-form/module */ "./src/app/components/login-form/module.ts");

/*
Imports
*/
// Angular


// Components




//
/*
Definition
*/
let Module = 
//
/*
Export
*/
class Module {
};
Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _router__WEBPACK_IMPORTED_MODULE_4__["Routing"], _components_post_module__WEBPACK_IMPORTED_MODULE_5__["PostModule"], _components_login_form_module__WEBPACK_IMPORTED_MODULE_6__["LoginFormModule"]]
    })
    //
    /*
    Export
    */
], Module);

;
//


/***/ }),

/***/ "./src/app/routes/home-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");



//
/*
Definition
*/
const route = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }
];
//
/*
Export
*/
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route);
//


/***/ })

}]);
//# sourceMappingURL=routes-home-page-module.js.map