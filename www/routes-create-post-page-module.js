(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-create-post-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/create-post-page/create-post-page.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/create-post-page/create-post-page.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Add post</h2>\n<app-create-post-form\n    (addPost)=\"createNewPost($event)\"\n    [newPostCreated]=\"newPostCreated\"\n></app-create-post-form>");

/***/ }),

/***/ "./src/app/routes/create-post-page/create-post-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/create-post-page/create-post-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreatePostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostPageComponent", function() { return CreatePostPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");

/*
Imports & definition
*/


let CreatePostPageComponent = 
//
/*
Export
*/
class CreatePostPageComponent {
    constructor(CrudService) {
        this.CrudService = CrudService;
        this.newPostCreated = false;
        this.createNewPost = (postData) => {
            this.CrudService.createItem('posts', postData)
                .then(apiResponse => {
                console.log(apiResponse);
                this.newPostCreated = true;
            })
                .catch(apiResponse => {
                console.error(apiResponse);
            });
        };
    }
    ngOnInit() {
    }
};
CreatePostPageComponent.ctorParameters = () => [
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
CreatePostPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-post-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-post-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/create-post-page/create-post-page.component.html")).default
    })
    //
    /*
    Export
    */
], CreatePostPageComponent);

//


/***/ }),

/***/ "./src/app/routes/create-post-page/module.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/create-post-page/module.ts ***!
  \***************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _create_post_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-post-page.component */ "./src/app/routes/create-post-page/create-post-page.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/routes/create-post-page/router.ts");
/* harmony import */ var _components_create_post_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/create-post-form/module */ "./src/app/components/create-post-form/module.ts");

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
        declarations: [_create_post_page_component__WEBPACK_IMPORTED_MODULE_3__["CreatePostPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _router__WEBPACK_IMPORTED_MODULE_4__["Routing"], _components_create_post_form_module__WEBPACK_IMPORTED_MODULE_5__["CreatePostFormModule"]]
    })
    //
    /*
    Export
    */
], Module);

;
//


/***/ }),

/***/ "./src/app/routes/create-post-page/router.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/create-post-page/router.ts ***!
  \***************************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_post_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-post-page.component */ "./src/app/routes/create-post-page/create-post-page.component.ts");



//
/*
Definition
*/
const route = [
    {
        path: '',
        component: _create_post_page_component__WEBPACK_IMPORTED_MODULE_2__["CreatePostPageComponent"]
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
//# sourceMappingURL=routes-create-post-page-module.js.map