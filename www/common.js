(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-post-form/create-post-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-post-form/create-post-form.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Ajouter un article</h2>\n\n<form   \n  [formGroup]=\"form\" \n  (submit)=\"addPost.emit({ data: form.value, action: action })\"\n>\n  <label for=\"title\">Titre</label>\n  <input \n    type=\"text\" id=\"title\" name=\"title\" required minlength=\"5\"\n    formControlName=\"title\"\n  >\n\n  <label for=\"body\">Contenu</label>\n  <textarea \n    name=\"body\" id=\"body\" required minlength=\"5\"\n    formControlName=\"body\"\n  ></textarea>\n\n  <button \n    type=\"submit\"\n    [disabled]=\"!form.valid\"\n  >Ajouter</button>\n</form>");

/***/ }),

/***/ "./src/app/components/create-post-form/create-post-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-post-form/create-post-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreatePostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostFormComponent", function() { return CreatePostFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

/*
Imports & definition
*/

// Gestion des formulaires

let CreatePostFormComponent = 
//
/*
Export
*/
class CreatePostFormComponent {
    //
    constructor(FormBuilder) {
        this.FormBuilder = FormBuilder;
        /*
        Declaration
        */
        this.addPost = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.action = 'create';
        /*
        Methods
        */
        this.resetForm = (data = null) => {
            // Configurer le formulaire
            if (data === null) {
                this.form = this.FormBuilder.group({
                    title: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    body: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    userId: 1
                });
            }
            else {
                this.action = 'edit';
                this.form = this.FormBuilder.group({
                    title: [data.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    body: [data.body, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    userId: data.userId
                });
                console.log(this.form.value);
            }
        };
    }
    //
    ngOnInit() { }
    ngOnChanges(changes) {
        // Vider le formulaire
        if (changes.newPostCreated) {
            this.resetForm();
        }
        if (changes.postData.currentValue !== null) {
            this.resetForm(changes.postData.currentValue);
        }
    }
};
CreatePostFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreatePostFormComponent.prototype, "addPost", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreatePostFormComponent.prototype, "newPostCreated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreatePostFormComponent.prototype, "postData", void 0);
CreatePostFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-post-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-post-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-post-form/create-post-form.component.html")).default
    })
    //
    /*
    Export
    */
], CreatePostFormComponent);

//


/***/ }),

/***/ "./src/app/components/create-post-form/module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create-post-form/module.ts ***!
  \*******************************************************/
/*! exports provided: CreatePostFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostFormModule", function() { return CreatePostFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _create_post_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-post-form.component */ "./src/app/components/create-post-form/create-post-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

/*
Imports
*/



// Gestion des formulaires

//
/*
Definition & export
*/
let CreatePostFormModule = class CreatePostFormModule {
};
CreatePostFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_create_post_form_component__WEBPACK_IMPORTED_MODULE_3__["CreatePostFormComponent"]],
        exports: [_create_post_form_component__WEBPACK_IMPORTED_MODULE_3__["CreatePostFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], CreatePostFormModule);

;
//


/***/ })

}]);
//# sourceMappingURL=common.js.map