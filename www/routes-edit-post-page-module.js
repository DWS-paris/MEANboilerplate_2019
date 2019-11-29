(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-edit-post-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/edit-post-page/edit-post-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/edit-post-page/edit-post-page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Edit post</h2>\n<app-create-post-form\n  *ngIf=\"postData\"\n  (addPost)=\"editPost($event)\"\n  [newPostCreated]=\"newPostEdited\"\n  [postData]=\"postData\"\n></app-create-post-form>");

/***/ }),

/***/ "./src/app/routes/edit-post-page/edit-post-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/edit-post-page/edit-post-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditPostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostPageComponent", function() { return EditPostPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");




let EditPostPageComponent = class EditPostPageComponent {
    constructor(ActivatedRoute, CrudService) {
        this.ActivatedRoute = ActivatedRoute;
        this.CrudService = CrudService;
        this.newPostEdited = false;
        this.getPostData = (id) => {
            this.CrudService.readOneItem('posts', id)
                .then(apiResponse => this.postData = apiResponse)
                .catch(apiResponse => {
                console.error(apiResponse);
            });
        };
        this.editPost = event => {
            this.CrudService.updateItem(`posts/${this.postId}`, event.data)
                .then(apiResponse => console.log(apiResponse))
                .catch(apiResponse => {
                console.error(apiResponse);
            });
        };
    }
    ngOnInit() {
        this.postId = this.ActivatedRoute.snapshot.params['id'];
        this.getPostData(this.postId);
    }
};
EditPostPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
EditPostPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-post-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-post-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/edit-post-page/edit-post-page.component.html")).default
    })
], EditPostPageComponent);



/***/ }),

/***/ "./src/app/routes/edit-post-page/module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/edit-post-page/module.ts ***!
  \*************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _edit_post_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-post-page.component */ "./src/app/routes/edit-post-page/edit-post-page.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/routes/edit-post-page/router.ts");
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
        declarations: [_edit_post_page_component__WEBPACK_IMPORTED_MODULE_3__["EditPostPageComponent"]],
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

/***/ "./src/app/routes/edit-post-page/router.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/edit-post-page/router.ts ***!
  \*************************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_post_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-post-page.component */ "./src/app/routes/edit-post-page/edit-post-page.component.ts");



//
/*
Definition
*/
const route = [
    {
        path: '',
        component: _edit_post_page_component__WEBPACK_IMPORTED_MODULE_2__["EditPostPageComponent"]
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
//# sourceMappingURL=routes-edit-post-page-module.js.map