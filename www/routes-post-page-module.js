(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-post-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/post-page/post-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/post-page/post-page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main\n  *ngIf=\"post\"\n>\n  <h1 [innerText]=\"post.title\"></h1>\n  <p [innerText]=\"post.body\"></p>\n</main>");

/***/ }),

/***/ "./src/app/routes/post-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/post-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _post_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-page.component */ "./src/app/routes/post-page/post-page.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/routes/post-page/router.ts");

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
        declarations: [_post_page_component__WEBPACK_IMPORTED_MODULE_3__["PostPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _router__WEBPACK_IMPORTED_MODULE_4__["Routing"]]
    })
    //
    /*
    Export
    */
], Module);

;
//


/***/ }),

/***/ "./src/app/routes/post-page/post-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/post-page/post-page.component.ts ***!
  \*********************************************************/
/*! exports provided: PostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageComponent", function() { return PostPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");

/*
Import
*/
// Angular


// Inner

//
/*
Definition & export
*/
let PostPageComponent = class PostPageComponent {
    //
    constructor(CrudService, ActivatedRoute) {
        this.CrudService = CrudService;
        this.ActivatedRoute = ActivatedRoute;
        /*
        Methode
        */
        this.getPostContent = (id) => {
            this.CrudService.readOneItem('posts', id)
                .then(apiResponse => this.post = apiResponse)
                .catch(apiResponse => console.error(apiResponse));
        };
    }
    //
    /*
    Hooks
    */
    ngOnInit() {
        this.postId = this.ActivatedRoute.snapshot.params['id'];
        this.getPostContent(this.postId);
    }
};
PostPageComponent.ctorParameters = () => [
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PostPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/post-page/post-page.component.html")).default
    })
], PostPageComponent);

//


/***/ }),

/***/ "./src/app/routes/post-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/post-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-page.component */ "./src/app/routes/post-page/post-page.component.ts");



//
/*
Definition
*/
const route = [
    {
        path: '',
        component: _post_page_component__WEBPACK_IMPORTED_MODULE_2__["PostPageComponent"]
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
//# sourceMappingURL=routes-post-page-module.js.map