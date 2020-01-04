(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/About/about.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/About/about.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>About CouponWorld</h3>\n<p>\n    CouponWorld has started as a family buisness in the 17th century in Munich, Bavaria. <br>\n    By the time it started the coupons were mostly for beer. It has been a success, untill <br>\n    the 20th century, our family has to leave europe, so we imigrated to New york, in the <br>\n    wave of imigrantion, sailed from Hamburg to the land of the free oportunity, where we <br>\n    established from scratch our coupon empire you can enjoy today. <br><br>\n    CEO Stephen Weinstephen.\n</p>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-add/admin-comp-add.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-add/admin-comp-add.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Add Company</h3>\n\n    <p>Please fill the new Company inforamtion below, and press Add:</p>\n\n    <input type=\"text\" placeholder=\"name\" [(ngModel)]=\"company.name\" /><br>\n    <input type=\"text\" placeholder=\"email\" [(ngModel)]=\"company.email\" /><br>\n    <input type=\"text\" placeholder=\"password\" [(ngModel)]=\"company.password\" /><br>\n\n    <input class=\"btn\" type=\"button\" value=\"Add\" (click)=\"addCompany()\">\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-delete/admin-comp-delete.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-delete/admin-comp-delete.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Delete Company</h3>\n\n    <p>Please input the company ID number you want to delete.</p>\n    <p>Caution:</p>\n\n    <input type=\"number\" placeholder=\"id\" [(ngModel)]=\"companyID\" />\n\n    <input class=\"btn\" type=\"button\" value=\"Delete\" (click)=\"deleteCompany()\">\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-getall/admin-comp-getall.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-getall/admin-comp-getall.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Get All Companies</h3>\n    \n    <p>Here you can see all Companys information.</p>\n\n    <div id=\"table\">\n        <table>\n            <th>id</th>\n            <th>name</th>\n            <th>email</th>\n            <th>password</th>\n            <tr *ngFor=\"let comp of companyList\">\n                <td>{{comp.companyID}}</td>\n                <td>{{comp.name}}</td>\n                <td>{{comp.email}}</td>\n                <td>{{comp.password}}</td>\n            </tr>\n        </table>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-getone/admin-comp-getone.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-getone/admin-comp-getone.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Get ONE Company</h3>\n\n    <p>Please enter the Company ID you want to see below:</p>\n\n    <input type=\"number\" placeholder=\"id\" min=\"1\" [(ngModel)]=\"companyID\">\n\n    <input class=\"btn\" type=\"button\" value=\"Get\" (click)=\"getOneCompany()\" >\n\n    <table>\n        <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Password</th>\n        </tr>\n        <tr>\n            <td>{{company.companyID}}</td>\n            <td>{{company.name}}</td>\n            <td>{{company.email}}</td>\n            <td>{{company.password}}</td>\n        </tr>\n    </table>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-update/admin-comp-update.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-update/admin-comp-update.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Update Company</h3>\n\n    <p>Update the Company you want by id</p>\n\n    <input type=\"number\" placeholder=\"id\" min=\"1\" [(ngModel)]=\"company.companyID\" /><br/>\n    <input type=\"text\" placeholder=\"name\" [(ngModel)]=\"company.name\" /><br/>\n    <input type=\"text\" placeholder=\"email\" [(ngModel)]=\"company.email\" /><br/>\n    <input type=\"text\" placeholder=\"password\" [(ngModel)]=\"company.password\" /><br/>\n\n    <input class=\"btn\" type=\"button\" value=\"Update\" (click)=\"updateCompany()\" >\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-add/admin-cust-add.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-add/admin-cust-add.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Add Customer</h3>\n\n    <p>Please fill the new Customer inforamtion below, and press Add:</p>\n\n    <input type=\"text\" placeholder=\"firstName\" [(ngModel)]=\"customer.firstName\" /><br/>\n    <input type=\"text\" placeholder=\"lastName\" [(ngModel)]=\"customer.lastName\" /><br/>\n    <input type=\"text\" placeholder=\"email\" [(ngModel)]=\"customer.email\" /><br/>\n    <input type=\"text\" placeholder=\"password\" [(ngModel)]=\"customer.password\" /><br/>\n    \n    <input class=\"btn\" type=\"button\" value=\"Add\" (click)=\"addCustomer()\" >\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-delete/admin-cust-delete.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-delete/admin-cust-delete.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Delete Customer</h3>\n\n    <p>Please fill the new Customer inforamation below, and press Add:</p>\n    \n    <input type=\"number\" placeholder=\"id\" min=\"1\" [(ngModel)]=\"customerID\" /><br/>\n    \n    <input class=\"btn\" type=\"button\" value=\"Delete\" (click)=\"deleteCustomer()\">\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-getall/admin-cust-getall.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-getall/admin-cust-getall.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Get All Customers</h3>\n\n    <p>Here you can see all Customers information.</p>\n    \n    <div id=\"table\">\n        <table>\n            <tr>\n                <th>id</th>\n                <th>firstName</th>\n                <th>lastName</th>\n                <th>email</th>\n                <th>password</th>\n            </tr>\n            <tr *ngFor=\"let cust of customerList\">\n                <td>{{cust.customerID}}</td>\n                <td>{{cust.firstName}}</td>\n                <td>{{cust.lastName}}</td>\n                <td>{{cust.email}}</td>\n                <td>{{cust.password}}</td>\n            </tr>\n        </table>\n    </div>\n    \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-getone/admin-cust-getone.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-getone/admin-cust-getone.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Get One Customer</h3>\n\n    <p>Please enter the Customer ID you want to see below:</p>\n\n    <input type=\"number\" placeholder=\"id\" min=\"1\" [(ngModel)]=\"customerID\">\n\n    <input class=\"btn\" type=\"button\" value=\"Get\" (click)=\"getOneCustomer()\" >\n\n    <table>\n        <tr>\n            <th>ID</th>\n            <th>FirstName</th>\n            <th>LastName</th>\n            <th>Email</th>\n            <th>Password</th>\n        </tr>\n        <tr>\n            <td>{{customer.customerID}}</td>\n            <td>{{customer.firstName}}</td>\n            <td>{{customer.lastName}}</td>\n            <td>{{customer.email}}</td>\n            <td>{{customer.password}}</td>\n        </tr>\n    </table>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-update/admin-cust-update.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-update/admin-cust-update.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Update Customer</h3>\n\n    <p>Update the Customer you want by id</p>\n\n    <input type=\"number\" placeholder=\"id\" min=\"1\" [(ngModel)]=\"customer.customerID\" /><br/>\n    <input type=\"text\" placeholder=\"firstName\" [(ngModel)]=\"customer.firstName\" /><br/>\n    <input type=\"text\" placeholder=\"lastName\" [(ngModel)]=\"customer.lastName\" /><br/>\n    <input type=\"text\" placeholder=\"email\" [(ngModel)]=\"customer.email\" /><br/>\n    <input type=\"text\" placeholder=\"password\" [(ngModel)]=\"customer.password\" /><br/>\n\n    <input class=\"btn\" type=\"button\" value=\"Update\" (click)=\"updateCustomer()\" >\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n\n<div id=\"panel\">\n\n    <h3>You logged as Admin</h3><br>\n\n    <!-- Company fun -->\n    <p>Company Panel:</p>\n    <!-- 1 -->\n    <a routerLink=\"addCompany\">Add Company</a>\n    <!-- 2 -->\n    <a routerLink=\"updateCompany\">Update Compan</a>\n    <!-- 3 -->\n    <a routerLink=\"deleteCompany\">Delete Company</a>\n    <!-- 5 -->\n    <a routerLink=\"getOneCompany\">Get One Company</a>\n    <!-- 4 -->\n    <a routerLink=\"getAllCompany\">Get All Companies</a>\n\n    <!-- Customer fun -->\n    <p>Customer Panel:</p>\n    <!-- 1 -->\n    <a routerLink=\"addCustomer\">Add Customer</a>\n    <!-- 2 -->\n    <a routerLink=\"updateCustomer\">Update Customer</a>\n    <!-- 3 -->\n    <a routerLink=\"deleteCustomer\">Delete Customer</a>\n    <!-- 5 -->\n    <a routerLink=\"getOneCustomer\">Get One Customer</a>\n    <!-- 4 -->\n    <a routerLink=\"getAllCustomer\">Get All Customers</a>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-add/company-coup-add.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-add/company-coup-add.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Add Coupon</h3>\n\n    <p>Please fill the new Coupon inforamtion below, and press Add:</p>\n    \n    <input type=\"number\" placeholder=\"amount\" min=\"1\" [(ngModel)]=\"coupon.amount\"><br />\n    <select [(ngModel)]=\"coupon.category\">\n        <option>Food</option>\n        <option>Electricity</option>\n        <option>Restaurant</option>\n        <option>Vacation</option>\n    </select><br>\n\n    <!-- <input type=\"text\" placeholder=\"category\" [(ngModel)]=\"coupon.category\" /><br /> -->\n    <input type=\"text\" placeholder=\"title\" [(ngModel)]=\"coupon.title\" /><br />\n    <input type=\"text\" placeholder=\"description\" [(ngModel)]=\"coupon.description\" /><br />\n    <input type=\"text\" placeholder=\"image\" [(ngModel)]=\"coupon.image\" /><br />\n    <input type=\"date\" placeholder=\"startDate\" [(ngModel)]=\"coupon.startDate\" /><br />\n    <input type=\"date\" placeholder=\"endDate\" [(ngModel)]=\"coupon.endDate\" /><br />\n    <input type=\"number\" placeholder=\"price\" min=\"1\" [(ngModel)]=\"coupon.price\" /><br />\n\n    <input class=\"btn\" type=\"button\" value=\"Add\" (click)=\"addCoupon()\">\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-all-cat/company-coup-all-cat.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-all-cat/company-coup-all-cat.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Get all Coupons by Category</h3>\n\n    <p>Please choose one of the following catecories:</p>\n\n    <select [(ngModel)]=\"category\">\n        <option>Food</option>\n        <option>Electricity</option>\n        <option>Restaurant</option>\n        <option>Vacation</option>\n    </select>\n    \n    <input class=\"btn\" type=\"button\" value=\"Get\" (click)=\"getCouponsByCat()\"><br>\n    <div id=\"table\">\n        <table>\n            <tr>\n                <th>id</th>\n                <th>amount</th>\n                <th>category</th>\n                <th>title</th>\n                <th>description</th>\n                <th>image</th>\n                <th>startDate</th>\n                <th>endDate</th>\n                <th>price</th>\n            </tr>\n            <tr *ngFor=\"let coup of couponList\">\n                <td>{{coup.couponID}}</td>\n                <td>{{coup.amount}}</td>\n                <td>{{coup.category}}</td>\n                <td>{{coup.title}}</td>\n                <td>{{coup.description}}</td>\n                <td>{{coup.image}}</td>\n                <td>{{coup.startDate}}</td>\n                <td>{{coup.endDate}}</td>\n                <td>{{coup.price}}</td>\n            </tr>\n        </table>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-all-max/company-coup-all-max.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-all-max/company-coup-all-max.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Get Coupons by Maxprice</h3>\n\n    <p>Insert the max price</p>\n\n    <input type=\"number\" placeholder=\"price\" min=\"1\" [(ngModel)]=\"price\">\n    \n    <input class=\"btn\" type=\"button\" value=\"Get\" (click)=\"getCouponsBMaxprice()\">\n    \n    <div id=\"table\">\n        <table>\n            <tr>\n                <th>id</th>\n                <th>amount</th>\n                <th>category</th>\n                <th>title</th>\n                <th>description</th>\n                <th>image</th>\n                <th>startDate</th>\n                <th>endDate</th>\n                <th>price</th>\n            </tr>\n            <tr *ngFor=\"let coup of couponList\">\n                <td>{{coup.couponID}}</td>\n                <td>{{coup.amount}}</td>\n                <td>{{coup.category}}</td>\n                <td>{{coup.title}}</td>\n                <td>{{coup.description}}</td>\n                <td>{{coup.image}}</td>\n                <td>{{coup.startDate}}</td>\n                <td>{{coup.endDate}}</td>\n                <td>{{coup.price}}</td>\n            </tr>\n        </table>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-all/company-coup-all.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-all/company-coup-all.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Get All Coupons</h3>\n\n    <p>Here you can see all Companys Coupons.</p>\n\n    <div id=\"table\">\n        <table>\n            <th>ID</th>\n            <th>Amount</th>\n            <th>Category</th>\n            <th>Title</th>\n            <th>Description</th>\n            <th>Image</th>\n            <th>StartDate</th>\n            <th>EndDate</th>\n            <th>Price</th>\n            <tr *ngFor=\"let coup of couponList\">\n                <td>{{coup.couponID}}</td>\n                <td>{{coup.amount}}</td>\n                <td>{{coup.category}}</td>\n                <td>{{coup.title}}</td>\n                <td>{{coup.description}}</td>\n                <td>{{coup.image}}</td>\n                <td>{{coup.startDate}}</td>\n                <td>{{coup.endDate}}</td>\n                <td>{{coup.price}}</td>\n            </tr>\n        </table>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-delete/company-coup-delete.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-delete/company-coup-delete.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Delete Coupon</h3>\n\n    <p>Please input the Coupon ID you want to delete below, and press Delete:</p>\n\n    <input type=\"number\" placeholder=\"id\" min=\"1\" [(ngModel)]=\"couponID\" />\n\n    <input class=\"btn\" type=\"button\" value=\"Delete\" (click)=\"deleteCoupon()\">\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-update/company-coup-update.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-update/company-coup-update.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Update the Coupon</h3>\n\n    <p>Update the coupon information by coupon id.</p>\n    \n    <!-- <input type=\"number\" placeholder=\"id\" (change)=\"getCoupon($event.target.value)\" /><br/> -->\n    <input type=\"number\" placeholder=\"id\" min=\"1\" [(ngModel)]=\"coupon.couponID\"/><br/>\n    <input type=\"number\" placeholder=\"amount\" min=\"1\" [(ngModel)]=\"coupon.amount\" /><br />\n    <select [(ngModel)]=\"coupon.category\">\n        <option>Food</option>\n        <option>Electricity</option>\n        <option>Restaurant</option>\n        <option>Vacation</option>\n    </select><br>\n    <input type=\"text\" placeholder=\"title\" [(ngModel)]=\"coupon.title\" /><br />\n    <input type=\"text\" placeholder=\"description\" [(ngModel)]=\"coupon.description\" /><br />\n    <input type=\"text\" placeholder=\"image\" [(ngModel)]=\"coupon.image\" /><br />\n    <input type=\"date\" placeholder=\"startDate\" [(ngModel)]=\"coupon.startDate\" /><br />\n    <input type=\"date\" placeholder=\"endDate\" [(ngModel)]=\"coupon.endDate\" /><br />\n    <input type=\"number\" placeholder=\"price\" min=\"1\" [(ngModel)]=\"coupon.price\" /><br />\n\n    <input class=\"btn\" type=\"button\" value=\"Update\" (click)=\"updateCoupon()\">\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-details/company-details.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-details/company-details.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\">\n\n<div id=\"container\">\n\n    <h3>Company Details</h3>\n\n    <p>Here you can get your details.</p>\n\n    <table>\n        <tr>\n            <th>id</th>\n            <th>name</th>\n            <th>email</th>\n            <th>password</th>\n        </tr>\n        <tr>\n            <td>{{company.companyID}}</td>\n            <td>{{company.name}}</td>\n            <td>{{company.email}}</td>\n            <td>{{company.password}}</td>\n        </tr>\n    </table>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n\n<div id=\"panel\">\n\n    <h3>You logged as a Company</h3><br>\n        \n    <!-- Company fun -->\n    <h4>Company Panel:</h4>\n    <!-- 1 -->\n    <a routerLink=\"addCoupon\">Add Coupon</a>\n    <!-- 2 -->\n    <a routerLink=\"updateCoupon\">Update Coupon</a>\n    <!-- 3 -->\n    <a routerLink=\"deleteCoupon\">Delete Coupon</a>\n    <!-- 4 -->\n    <a routerLink=\"getAllCoupon\">Get All Coupons</a>\n    <!-- 5 -->\n    <a routerLink=\"getAllCouponsByCategory\">Get All Coupons By Category</a>\n    <!-- 6 -->\n    <a routerLink=\"getAllCouponsByMaxprice\">Get All Coupons By Max Price</a>\n    <!-- 7 -->\n    <a routerLink=\"companyDetails\">Company Details</a>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.html": 
        /*!*****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.html ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\"type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n\n<div id=\"container\">\n\n    <h3>Get all Coupons by Category</h3>\n\n    <p>Here you can get information about you coupons by category. <br>\n        Please choose one of the following categories.</p>\n\n    <select [(ngModel)]=\"category\">\n        <option>Food</option>\n        <option>Electricity</option>\n        <option>Restaurant</option>\n        <option>Vacation</option>\n    </select>\n\n    <input class=\"btn\" type=\"button\" value=\"Get\" (click)=\"getCouponsByCat()\">\n\n    <div id=\"table\">\n        <table>\n            <tr>\n                <th>id</th>\n                <th>amount</th>\n                <th>category</th>\n                <th>title</th>\n                <th>description</th>\n                <th>image</th>\n                <th>startDate</th>\n                <th>endDate</th>\n                <th>price</th>\n            </tr>\n            <tr *ngFor=\"let coup of couponList\">\n                <td>{{coup.couponID}}</td>\n                <td>{{coup.amount}}</td>\n                <td>{{coup.category}}</td>\n                <td>{{coup.title}}</td>\n                <td>{{coup.description}}</td>\n                <td>{{coup.image}}</td>\n                <td>{{coup.startDate}}</td>\n                <td>{{coup.endDate}}</td>\n                <td>{{coup.price}}</td>\n            </tr>\n        </table>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-all-max/customer-coup-all-max.component.html": 
        /*!*****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-all-max/customer-coup-all-max.component.html ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n\n<div id=\"container\">\n\n    <h3>Get all Customer Coupons By Maxprice</h3>\n\n    <p>Here you can get information about you coupons by max price. <br>\n        Please insert your max price.</p>\n\n    <input type=\"number\" placeholder=\"price\" min=\"1\" [(ngModel)]=\"price\">\n\n    <input class=\"btn\" type=\"button\" value=\"Get\" (click)=\"getCouponsBMaxprice()\">\n\n    <div id=\"table\">\n        <table>\n            <th>id</th>\n            <th>amount</th>\n            <th>category</th>\n            <th>title</th>\n            <th>description</th>\n            <th>image</th>\n            <th>startDate</th>\n            <th>endDate</th>\n            <th>price</th>\n            <tr *ngFor=\"let coup of couponList\">\n                <td>{{coup.couponID}}</td>\n                <td>{{coup.amount}}</td>\n                <td>{{coup.category}}</td>\n                <td>{{coup.title}}</td>\n                <td>{{coup.description}}</td>\n                <td>{{coup.image}}</td>\n                <td>{{coup.startDate}}</td>\n                <td>{{coup.endDate}}</td>\n                <td>{{coup.price}}</td>\n            </tr>\n        </table>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-all/customer-coup-all.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-all/customer-coup-all.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n\n<div id=\"container\">\n   \n    <h3>Get all Coupons</h3>\n\n    <p>Here you can get information about the coupons, before you buy them.</p>\n\n    <div id=\"table\">\n        <table>\n            <tr>\n                <th>id</th>\n                <th>amount</th>\n                <th>category</th>\n                <th>title</th>\n                <th>description</th>\n                <th>image</th>\n                <th>startDate</th>\n                <th>endDate</th>\n                <th>price</th>\n            </tr>\n            <tr *ngFor=\"let coup of couponList\">\n                <td>{{coup.couponID}}</td>\n                <td>{{coup.amount}}</td>\n                <td>{{coup.category}}</td>\n                <td>{{coup.title}}</td>\n                <td>{{coup.description}}</td>\n                <td>{{coup.image}}</td>\n                <td>{{coup.startDate}}</td>\n                <td>{{coup.endDate}}</td>\n                <td>{{coup.price}}</td>\n            </tr>\n        </table>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-purchase/customer-coup-purchase.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-purchase/customer-coup-purchase.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n\n<div id=\"container\">\n\n    <h3>Purchase Coupon</h3>\n\n    <p>Please enter the coupon ID you would like to purchase. <br>\n        WARNING: We recomend you use the getAllCoupons first.</p>\n\n    <input type=\"number\" placeholder=\"ID\" min=\"1\" [(ngModel)]=\"couponID\">\n\n    <input class=\"btn\" type=\"button\" value=\"Buy\" (click)=\"purchaseCoupon()\">\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n\n<div id=\"container\">\n\n    <h3>All Customer Coupons</h3>\n\n    <p>Here you can get information about your coupons.</p>\n\n    <div id=\"table\">\n        <table>\n            <th>id</th>\n            <th>amount</th>\n            <th>category</th>\n            <th>title</th>\n            <th>description</th>\n            <th>image</th>\n            <th>startDate</th>\n            <th>endDate</th>\n            <th>price</th>\n            <tr *ngFor=\"let coup of couponList\">\n                <td>{{coup.couponID}}</td>\n                <td>{{coup.amount}}</td>\n                <td>{{coup.category}}</td>\n                <td>{{coup.title}}</td>\n                <td>{{coup.description}}</td>\n                <td>{{coup.image}}</td>\n                <td>{{coup.startDate}}</td>\n                <td>{{coup.endDate}}</td>\n                <td>{{coup.price}}</td>\n            </tr>\n        </table>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-details/customer-details.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-details/customer-details.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"back\" type=\"button\" value=\"Back\" (click)=\"backClicked()\">\n<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n\n<div id=\"container\">\n\n    <h3>Customer Details</h3>\n\n    <p>Here you can get your details.</p>\n    \n    <table>\n        <th>ID</th>\n        <th>FirstName</th>\n        <th>LastName</th>\n        <th>Email</th>\n        <th>Password</th>\n        <tr>\n            <td>{{customer.customerID}}</td>\n            <td>{{customer.firstName}}</td>\n            <td>{{customer.lastName}}</td>\n            <td>{{customer.email}}</td>\n            <td>{{customer.password}}</td>\n        </tr>\n    </table>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"btn\" id=\"logout\" type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n\n<div id=\"panel\">\n\n    <h3>You logged as a Customer</h3>\n\n    <!-- Customer fun -->\n    <p>Customer Panel:</p>\n    <!-- 1 -->\n    <a routerLink=\"purchaseCoupon\">Purchase Coupon</a>\n    <!-- 2 -->\n    <a routerLink=\"allCoupon\">All Coupons</a>\n    <!-- 3 -->\n    <a routerLink=\"allCouponByCategory\">Get All Coupons By Category</a>\n    <!-- 4 -->\n    <a routerLink=\"allCouponByMaxprice\">Get All Coupons By MaxPrice</a>\n    <!-- 5 -->\n    <a routerLink=\"custCoupons\">My Coupons</a>\n    <!-- 6 -->\n    <a routerLink=\"details\">My Details</a>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ftr\">\n    <p> CouponWord, inc. © 2020  </p>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery/gallery.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery/gallery.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-thumbnail imageSource=\"assets/images/GoDaddy-coupon.jpg\" imageDescription=\"GoDaddy-coupon\"></app-thumbnail>\n    <app-thumbnail imageSource=\"assets/images/UberEats-coupon.jpg\" imageDescription=\"UberEats-coupon\"></app-thumbnail>\n    <app-thumbnail imageSource=\"assets/images/Walmart-coupon.jpg\" imageDescription=\"Walmart-coupon\"></app-thumbnail>\n    <app-thumbnail imageSource=\"assets/images/Wix-coupon.png\" imageDescription=\"Wix-coupon\"></app-thumbnail>\n    <app-thumbnail imageSource=\"assets/images/Via-coupon.jpg\" imageDescription=\"Via-coupon\"></app-thumbnail>\n    <app-thumbnail imageSource=\"assets/images/JensonUSA-coupon.jpg\" imageDescription=\"JensonUSA-coupon\"></app-thumbnail>\n    <app-thumbnail imageSource=\"assets/images/Silhouette-coupon.png\" imageDescription=\"Silhouette-coupon\"></app-thumbnail>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1>Coupon World</h1>\n    <h6>coupons for everyone!</h6>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-login></app-login>\n    \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <header>\n        <app-header></app-header>\n    </header>\n    <nav>\n        <app-navigation></app-navigation>\n    </nav>\n    <main>\n        <!-- <app-home></app-home> -->\n        <!-- <app-gallery></app-gallery> -->\n        <router-outlet></router-outlet>\n    </main>\n    <footer>\n        <app-footer></app-footer>\n    </footer>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-box\">\n    <h1>Login</h1>\n\n    <div class=\"textbox\">\n        <i class=\"fa fa-at\"></i>\n        <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" /><br>\n    </div>\n\n    <div class=\"textbox\">\n        <i class=\"fa fa-lock\"></i>\n        <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"pass\" /><br>\n    </div>\n\n    <div class=\"textbox\">\n    <i class=\"fa fa-user\" aria-hiddeb=\"true\"></i>\n    <select list=\"type\" [(ngModel)]=\"type\">\n        <option>Admin</option>\n        <option>Company</option>\n        <option>Customer</option>\n    </select><br>\n    </div>\n\n    <input class=\"btn\" type=\"button\" value=\"Sign in\" (click)=\"login()\" />\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <!-- app-routing.module -->\n    <a routerLink=\"home\">Login</a>\n    <a routerLink=\"gallery\">Gallery</a>\n    <a routerLink=\"about\">About</a>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thumbnail/thumbnail.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/thumbnail/thumbnail.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <img [src]=\"imageSource\" \n        [alt]=\"imageDescription\"/><br/>\n    <span>{{imageDescription}}</span>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
            /* harmony import */ var _components_admin_comp_add_admin_comp_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-comp-add/admin-comp-add.component */ "./src/app/components/admin-comp-add/admin-comp-add.component.ts");
            /* harmony import */ var _components_admin_comp_update_admin_comp_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin-comp-update/admin-comp-update.component */ "./src/app/components/admin-comp-update/admin-comp-update.component.ts");
            /* harmony import */ var _components_admin_comp_getone_admin_comp_getone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-comp-getone/admin-comp-getone.component */ "./src/app/components/admin-comp-getone/admin-comp-getone.component.ts");
            /* harmony import */ var _components_admin_comp_getall_admin_comp_getall_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-comp-getall/admin-comp-getall.component */ "./src/app/components/admin-comp-getall/admin-comp-getall.component.ts");
            /* harmony import */ var _components_admin_comp_delete_admin_comp_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin-comp-delete/admin-comp-delete.component */ "./src/app/components/admin-comp-delete/admin-comp-delete.component.ts");
            /* harmony import */ var _components_admin_cust_add_admin_cust_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin-cust-add/admin-cust-add.component */ "./src/app/components/admin-cust-add/admin-cust-add.component.ts");
            /* harmony import */ var _components_admin_cust_update_admin_cust_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin-cust-update/admin-cust-update.component */ "./src/app/components/admin-cust-update/admin-cust-update.component.ts");
            /* harmony import */ var _components_admin_cust_delete_admin_cust_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin-cust-delete/admin-cust-delete.component */ "./src/app/components/admin-cust-delete/admin-cust-delete.component.ts");
            /* harmony import */ var _components_admin_cust_getone_admin_cust_getone_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-cust-getone/admin-cust-getone.component */ "./src/app/components/admin-cust-getone/admin-cust-getone.component.ts");
            /* harmony import */ var _components_admin_cust_getall_admin_cust_getall_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin-cust-getall/admin-cust-getall.component */ "./src/app/components/admin-cust-getall/admin-cust-getall.component.ts");
            /* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
            /* harmony import */ var _components_company_coup_add_company_coup_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/company-coup-add/company-coup-add.component */ "./src/app/components/company-coup-add/company-coup-add.component.ts");
            /* harmony import */ var _components_company_coup_update_company_coup_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/company-coup-update/company-coup-update.component */ "./src/app/components/company-coup-update/company-coup-update.component.ts");
            /* harmony import */ var _components_company_coup_delete_company_coup_delete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/company-coup-delete/company-coup-delete.component */ "./src/app/components/company-coup-delete/company-coup-delete.component.ts");
            /* harmony import */ var _components_company_coup_all_company_coup_all_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/company-coup-all/company-coup-all.component */ "./src/app/components/company-coup-all/company-coup-all.component.ts");
            /* harmony import */ var _components_company_coup_all_cat_company_coup_all_cat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/company-coup-all-cat/company-coup-all-cat.component */ "./src/app/components/company-coup-all-cat/company-coup-all-cat.component.ts");
            /* harmony import */ var _components_company_coup_all_max_company_coup_all_max_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/company-coup-all-max/company-coup-all-max.component */ "./src/app/components/company-coup-all-max/company-coup-all-max.component.ts");
            /* harmony import */ var _components_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/company-details/company-details.component */ "./src/app/components/company-details/company-details.component.ts");
            /* harmony import */ var _components_customer_coup_purchase_customer_coup_purchase_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/customer-coup-purchase/customer-coup-purchase.component */ "./src/app/components/customer-coup-purchase/customer-coup-purchase.component.ts");
            /* harmony import */ var _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/customer-details/customer-details.component */ "./src/app/components/customer-details/customer-details.component.ts");
            /* harmony import */ var _components_customer_coup_all_customer_coup_all_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/customer-coup-all/customer-coup-all.component */ "./src/app/components/customer-coup-all/customer-coup-all.component.ts");
            /* harmony import */ var _components_customer_cust_coupons_all_customer_cust_coupons_all_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/customer-cust-coupons-all/customer-cust-coupons-all.component */ "./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.ts");
            /* harmony import */ var _components_customer_coup_all_max_customer_coup_all_max_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/customer-coup-all-max/customer-coup-all-max.component */ "./src/app/components/customer-coup-all-max/customer-coup-all-max.component.ts");
            /* harmony import */ var _components_customer_coup_all_cat_customer_coup_all_cat_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/customer-coup-all-cat/customer-coup-all-cat.component */ "./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.ts");
            /* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
            /* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
            /* harmony import */ var _components_About_about_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/About/about.component */ "./src/app/components/About/about.component.ts");
            var routes = [
                // default
                { path: "", redirectTo: "home", pathMatch: "full" },
                // menu
                { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], },
                { path: "gallery", component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__["GalleryComponent"] },
                { path: "about", component: _components_About_about_component__WEBPACK_IMPORTED_MODULE_31__["AboutComponent"] },
                // admin
                { path: "admin", component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
                { path: "admin/addCompany", component: _components_admin_comp_add_admin_comp_add_component__WEBPACK_IMPORTED_MODULE_5__["AdminCompAddComponent"] },
                { path: "admin/updateCompany", component: _components_admin_comp_update_admin_comp_update_component__WEBPACK_IMPORTED_MODULE_6__["AdminCompUpdateComponent"] },
                { path: "admin/deleteCompany", component: _components_admin_comp_delete_admin_comp_delete_component__WEBPACK_IMPORTED_MODULE_9__["AdminCompDeleteComponent"] },
                { path: "admin/getOneCompany", component: _components_admin_comp_getone_admin_comp_getone_component__WEBPACK_IMPORTED_MODULE_7__["AdminCompGetOneComponent"] },
                { path: "admin/getAllCompany", component: _components_admin_comp_getall_admin_comp_getall_component__WEBPACK_IMPORTED_MODULE_8__["AdminCompGetAllComponent"] },
                { path: "admin/addCustomer", component: _components_admin_cust_add_admin_cust_add_component__WEBPACK_IMPORTED_MODULE_10__["AdminCustAddComponent"] },
                { path: "admin/updateCustomer", component: _components_admin_cust_update_admin_cust_update_component__WEBPACK_IMPORTED_MODULE_11__["AdminCustUpdateComponent"] },
                { path: "admin/deleteCustomer", component: _components_admin_cust_delete_admin_cust_delete_component__WEBPACK_IMPORTED_MODULE_12__["AdminCustDeleteComponent"] },
                { path: "admin/getOneCustomer", component: _components_admin_cust_getone_admin_cust_getone_component__WEBPACK_IMPORTED_MODULE_13__["AdminCustGetoneComponent"] },
                { path: "admin/getAllCustomer", component: _components_admin_cust_getall_admin_cust_getall_component__WEBPACK_IMPORTED_MODULE_14__["AdminCustGetallComponent"] },
                // company
                { path: "company", component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_15__["CompanyComponent"] },
                { path: "company/addCoupon", component: _components_company_coup_add_company_coup_add_component__WEBPACK_IMPORTED_MODULE_16__["CompanyCoupAddComponent"] },
                { path: "company/updateCoupon", component: _components_company_coup_update_company_coup_update_component__WEBPACK_IMPORTED_MODULE_17__["CompanyCoupUpdateComponent"] },
                { path: "company/deleteCoupon", component: _components_company_coup_delete_company_coup_delete_component__WEBPACK_IMPORTED_MODULE_18__["CompanyCoupDeleteComponent"] },
                { path: "company/getAllCoupon", component: _components_company_coup_all_company_coup_all_component__WEBPACK_IMPORTED_MODULE_19__["CompanyCoupAllComponent"] },
                { path: "company/getAllCouponsByCategory", component: _components_company_coup_all_cat_company_coup_all_cat_component__WEBPACK_IMPORTED_MODULE_20__["CompanyCoupAllCatComponent"] },
                { path: "company/getAllCouponsByMaxprice", component: _components_company_coup_all_max_company_coup_all_max_component__WEBPACK_IMPORTED_MODULE_21__["CompanyCoupAllMaxComponent"] },
                { path: "company/companyDetails", component: _components_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_22__["CompanyDetailsComponent"] },
                // customer
                { path: "customer", component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_29__["CustomerComponent"] },
                { path: "customer/purchaseCoupon", component: _components_customer_coup_purchase_customer_coup_purchase_component__WEBPACK_IMPORTED_MODULE_23__["CustomerCoupPurchaseComponent"] },
                { path: "customer/allCoupon", component: _components_customer_coup_all_customer_coup_all_component__WEBPACK_IMPORTED_MODULE_25__["CustomerCoupAllComponent"] },
                { path: "customer/allCouponByCategory", component: _components_customer_coup_all_cat_customer_coup_all_cat_component__WEBPACK_IMPORTED_MODULE_28__["CustomerCoupAllCatComponent"] },
                { path: "customer/allCouponByMaxprice", component: _components_customer_coup_all_max_customer_coup_all_max_component__WEBPACK_IMPORTED_MODULE_27__["CustomerCoupAllMaxComponent"] },
                { path: "customer/custCoupons", component: _components_customer_cust_coupons_all_customer_cust_coupons_all_component__WEBPACK_IMPORTED_MODULE_26__["CustomerCustCouponsAllComponent"] },
                { path: "customer/details", component: _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_24__["CustomerDetailsComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
            /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/thumbnail/thumbnail.component */ "./src/app/components/thumbnail/thumbnail.component.ts");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
            /* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
            /* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
            /* harmony import */ var _components_admin_comp_add_admin_comp_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin-comp-add/admin-comp-add.component */ "./src/app/components/admin-comp-add/admin-comp-add.component.ts");
            /* harmony import */ var _components_admin_comp_update_admin_comp_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin-comp-update/admin-comp-update.component */ "./src/app/components/admin-comp-update/admin-comp-update.component.ts");
            /* harmony import */ var _components_admin_comp_delete_admin_comp_delete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin-comp-delete/admin-comp-delete.component */ "./src/app/components/admin-comp-delete/admin-comp-delete.component.ts");
            /* harmony import */ var _components_admin_comp_getone_admin_comp_getone_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin-comp-getone/admin-comp-getone.component */ "./src/app/components/admin-comp-getone/admin-comp-getone.component.ts");
            /* harmony import */ var _components_admin_comp_getall_admin_comp_getall_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin-comp-getall/admin-comp-getall.component */ "./src/app/components/admin-comp-getall/admin-comp-getall.component.ts");
            /* harmony import */ var _components_admin_cust_add_admin_cust_add_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin-cust-add/admin-cust-add.component */ "./src/app/components/admin-cust-add/admin-cust-add.component.ts");
            /* harmony import */ var _components_admin_cust_delete_admin_cust_delete_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin-cust-delete/admin-cust-delete.component */ "./src/app/components/admin-cust-delete/admin-cust-delete.component.ts");
            /* harmony import */ var _components_admin_cust_update_admin_cust_update_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admin-cust-update/admin-cust-update.component */ "./src/app/components/admin-cust-update/admin-cust-update.component.ts");
            /* harmony import */ var _components_admin_cust_getall_admin_cust_getall_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin-cust-getall/admin-cust-getall.component */ "./src/app/components/admin-cust-getall/admin-cust-getall.component.ts");
            /* harmony import */ var _components_admin_cust_getone_admin_cust_getone_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin-cust-getone/admin-cust-getone.component */ "./src/app/components/admin-cust-getone/admin-cust-getone.component.ts");
            /* harmony import */ var _components_company_coup_add_company_coup_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/company-coup-add/company-coup-add.component */ "./src/app/components/company-coup-add/company-coup-add.component.ts");
            /* harmony import */ var _components_company_coup_update_company_coup_update_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/company-coup-update/company-coup-update.component */ "./src/app/components/company-coup-update/company-coup-update.component.ts");
            /* harmony import */ var _components_company_coup_delete_company_coup_delete_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/company-coup-delete/company-coup-delete.component */ "./src/app/components/company-coup-delete/company-coup-delete.component.ts");
            /* harmony import */ var _components_company_coup_all_company_coup_all_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/company-coup-all/company-coup-all.component */ "./src/app/components/company-coup-all/company-coup-all.component.ts");
            /* harmony import */ var _components_company_coup_all_cat_company_coup_all_cat_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/company-coup-all-cat/company-coup-all-cat.component */ "./src/app/components/company-coup-all-cat/company-coup-all-cat.component.ts");
            /* harmony import */ var _components_company_coup_all_max_company_coup_all_max_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/company-coup-all-max/company-coup-all-max.component */ "./src/app/components/company-coup-all-max/company-coup-all-max.component.ts");
            /* harmony import */ var _components_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/company-details/company-details.component */ "./src/app/components/company-details/company-details.component.ts");
            /* harmony import */ var _components_customer_coup_purchase_customer_coup_purchase_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/customer-coup-purchase/customer-coup-purchase.component */ "./src/app/components/customer-coup-purchase/customer-coup-purchase.component.ts");
            /* harmony import */ var _components_customer_cust_coupons_all_customer_cust_coupons_all_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/customer-cust-coupons-all/customer-cust-coupons-all.component */ "./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.ts");
            /* harmony import */ var _components_customer_coup_all_cat_customer_coup_all_cat_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/customer-coup-all-cat/customer-coup-all-cat.component */ "./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.ts");
            /* harmony import */ var _components_customer_coup_all_max_customer_coup_all_max_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/customer-coup-all-max/customer-coup-all-max.component */ "./src/app/components/customer-coup-all-max/customer-coup-all-max.component.ts");
            /* harmony import */ var _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/customer-details/customer-details.component */ "./src/app/components/customer-details/customer-details.component.ts");
            /* harmony import */ var _components_customer_coup_all_customer_coup_all_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/customer-coup-all/customer-coup-all.component */ "./src/app/components/customer-coup-all/customer-coup-all.component.ts");
            /* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
            /* harmony import */ var _components_About_about_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/About/about.component */ "./src/app/components/About/about.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_39__["GalleryComponent"],
                        _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__["ThumbnailComponent"],
                        _components_About_about_component__WEBPACK_IMPORTED_MODULE_40__["AboutComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                        _components_company_company_component__WEBPACK_IMPORTED_MODULE_14__["CompanyComponent"],
                        _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_15__["CustomerComponent"],
                        _components_admin_comp_add_admin_comp_add_component__WEBPACK_IMPORTED_MODULE_16__["AdminCompAddComponent"],
                        _components_admin_comp_update_admin_comp_update_component__WEBPACK_IMPORTED_MODULE_17__["AdminCompUpdateComponent"],
                        _components_admin_comp_delete_admin_comp_delete_component__WEBPACK_IMPORTED_MODULE_18__["AdminCompDeleteComponent"],
                        _components_admin_comp_getone_admin_comp_getone_component__WEBPACK_IMPORTED_MODULE_19__["AdminCompGetOneComponent"],
                        _components_admin_comp_getall_admin_comp_getall_component__WEBPACK_IMPORTED_MODULE_20__["AdminCompGetAllComponent"],
                        _components_admin_cust_add_admin_cust_add_component__WEBPACK_IMPORTED_MODULE_21__["AdminCustAddComponent"],
                        _components_admin_cust_delete_admin_cust_delete_component__WEBPACK_IMPORTED_MODULE_22__["AdminCustDeleteComponent"],
                        _components_admin_cust_update_admin_cust_update_component__WEBPACK_IMPORTED_MODULE_23__["AdminCustUpdateComponent"],
                        _components_admin_cust_getall_admin_cust_getall_component__WEBPACK_IMPORTED_MODULE_24__["AdminCustGetallComponent"],
                        _components_admin_cust_getone_admin_cust_getone_component__WEBPACK_IMPORTED_MODULE_25__["AdminCustGetoneComponent"],
                        _components_company_coup_add_company_coup_add_component__WEBPACK_IMPORTED_MODULE_26__["CompanyCoupAddComponent"],
                        _components_company_coup_update_company_coup_update_component__WEBPACK_IMPORTED_MODULE_27__["CompanyCoupUpdateComponent"],
                        _components_company_coup_delete_company_coup_delete_component__WEBPACK_IMPORTED_MODULE_28__["CompanyCoupDeleteComponent"],
                        _components_company_coup_all_company_coup_all_component__WEBPACK_IMPORTED_MODULE_29__["CompanyCoupAllComponent"],
                        _components_company_coup_all_cat_company_coup_all_cat_component__WEBPACK_IMPORTED_MODULE_30__["CompanyCoupAllCatComponent"],
                        _components_company_coup_all_max_company_coup_all_max_component__WEBPACK_IMPORTED_MODULE_31__["CompanyCoupAllMaxComponent"],
                        _components_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_32__["CompanyDetailsComponent"],
                        _components_customer_coup_purchase_customer_coup_purchase_component__WEBPACK_IMPORTED_MODULE_33__["CustomerCoupPurchaseComponent"],
                        _components_customer_cust_coupons_all_customer_cust_coupons_all_component__WEBPACK_IMPORTED_MODULE_34__["CustomerCustCouponsAllComponent"],
                        _components_customer_coup_all_cat_customer_coup_all_cat_component__WEBPACK_IMPORTED_MODULE_35__["CustomerCoupAllCatComponent"],
                        _components_customer_coup_all_max_customer_coup_all_max_component__WEBPACK_IMPORTED_MODULE_36__["CustomerCoupAllMaxComponent"],
                        _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_37__["CustomerDetailsComponent"],
                        _components_customer_coup_all_customer_coup_all_component__WEBPACK_IMPORTED_MODULE_38__["CustomerCoupAllComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
                    ],
                    providers: [],
                    bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/About/about.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/About/about.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h3, p{\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    padding-left: 4%;\r\n    padding-right: 4%;\r\n\r\n}\r\np{\r\n    font-size: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzLCBwe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQlO1xyXG5cclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/About/about.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/About/about.component.ts ***!
          \*****************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/About/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/About/about.component.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-add/admin-comp-add.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/admin-comp-add/admin-comp-add.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wLWFkZC9hZG1pbi1jb21wLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wLWFkZC9hZG1pbi1jb21wLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-add/admin-comp-add.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/admin-comp-add/admin-comp-add.component.ts ***!
          \***********************************************************************/
        /*! exports provided: AdminCompAddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompAddComponent", function () { return AdminCompAddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var AdminCompAddComponent = /** @class */ (function () {
                function AdminCompAddComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCompAddComponent.prototype.ngOnInit = function () {
                    this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
                };
                // add company - works
                AdminCompAddComponent.prototype.addCompany = function () {
                    this.adminServ.addCompany(this.company).subscribe(function (comp) {
                        // confirmation:
                        console.log(comp); // console
                        alert("Company added successfully"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                AdminCompAddComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCompAddComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCompAddComponent;
            }());
            AdminCompAddComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            AdminCompAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-comp-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-comp-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-add/admin-comp-add.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-comp-add.component.css */ "./src/app/components/admin-comp-add/admin-comp-add.component.css")).default]
                })
            ], AdminCompAddComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-delete/admin-comp-delete.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/admin-comp-delete/admin-comp-delete.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wLWRlbGV0ZS9hZG1pbi1jb21wLWRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wLWRlbGV0ZS9hZG1pbi1jb21wLWRlbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-delete/admin-comp-delete.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/admin-comp-delete/admin-comp-delete.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: AdminCompDeleteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompDeleteComponent", function () { return AdminCompDeleteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdminCompDeleteComponent = /** @class */ (function () {
                function AdminCompDeleteComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCompDeleteComponent.prototype.ngOnInit = function () { };
                // delete company:
                AdminCompDeleteComponent.prototype.deleteCompany = function () {
                    if (this.companyID == undefined) {
                        alert("Your ID number is empty");
                    }
                    else {
                        this.adminServ.deleteCompany(this.companyID).subscribe(function (id) {
                            // confirmation:
                            console.log(id); // console
                            alert("Company " + id + " deleted successfully"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                AdminCompDeleteComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCompDeleteComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCompDeleteComponent;
            }());
            AdminCompDeleteComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            AdminCompDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-comp-delete',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-comp-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-delete/admin-comp-delete.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-comp-delete.component.css */ "./src/app/components/admin-comp-delete/admin-comp-delete.component.css")).default]
                })
            ], AdminCompDeleteComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-getall/admin-comp-getall.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/admin-comp-getall/admin-comp-getall.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wLWdldGFsbC9hZG1pbi1jb21wLWdldGFsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wLWdldGFsbC9hZG1pbi1jb21wLWdldGFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuI3RhYmxle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-getall/admin-comp-getall.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/admin-comp-getall/admin-comp-getall.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: AdminCompGetAllComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompGetAllComponent", function () { return AdminCompGetAllComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var AdminCompGetAllComponent = /** @class */ (function () {
                function AdminCompGetAllComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCompGetAllComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.adminServ.getAllCompanies().subscribe(function (data) {
                        _this.companyList = data;
                    });
                };
                // get all companies
                AdminCompGetAllComponent.prototype.getAllCompanies = function () {
                    this.adminServ.getAllCompanies().subscribe(function (comp) {
                        // confirmation:
                        console.log(comp); // console
                        alert("Companies found successfully"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                AdminCompGetAllComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCompGetAllComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCompGetAllComponent;
            }());
            AdminCompGetAllComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            AdminCompGetAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-comp-getall',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-comp-getall.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-getall/admin-comp-getall.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-comp-getall.component.css */ "./src/app/components/admin-comp-getall/admin-comp-getall.component.css")).default]
                })
            ], AdminCompGetAllComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-getone/admin-comp-getone.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/admin-comp-getone/admin-comp-getone.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wLWdldG9uZS9hZG1pbi1jb21wLWdldG9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLWNvbXAtZ2V0b25lL2FkbWluLWNvbXAtZ2V0b25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-getone/admin-comp-getone.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/admin-comp-getone/admin-comp-getone.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: AdminCompGetOneComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompGetOneComponent", function () { return AdminCompGetOneComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var AdminCompGetOneComponent = /** @class */ (function () {
                function AdminCompGetOneComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCompGetOneComponent.prototype.ngOnInit = function () {
                    this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
                };
                // get one company
                AdminCompGetOneComponent.prototype.getOneCompany = function () {
                    var _this = this;
                    if (this.companyID == undefined) {
                        alert("Your ID number is empty!");
                    }
                    else {
                        this.adminServ.getOneCompany(this.companyID).subscribe(function (comp) {
                            _this.company = comp;
                            // confirmation:
                            console.log(comp); // console
                            alert("Companies found successfully!"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                AdminCompGetOneComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCompGetOneComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCompGetOneComponent;
            }());
            AdminCompGetOneComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            AdminCompGetOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-comp-getone',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-comp-getone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-getone/admin-comp-getone.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-comp-getone.component.css */ "./src/app/components/admin-comp-getone/admin-comp-getone.component.css")).default]
                })
            ], AdminCompGetOneComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-update/admin-comp-update.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/admin-comp-update/admin-comp-update.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wLXVwZGF0ZS9hZG1pbi1jb21wLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wLXVwZGF0ZS9hZG1pbi1jb21wLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-comp-update/admin-comp-update.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/admin-comp-update/admin-comp-update.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: AdminCompUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompUpdateComponent", function () { return AdminCompUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var AdminCompUpdateComponent = /** @class */ (function () {
                function AdminCompUpdateComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCompUpdateComponent.prototype.ngOnInit = function () {
                    this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
                };
                // update company
                AdminCompUpdateComponent.prototype.updateCompany = function () {
                    this.adminServ.updateCompany(this.company).subscribe(function (comp) {
                        // confirmation:
                        console.log(comp); // console
                        alert("Company deleted successfully"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                AdminCompUpdateComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCompUpdateComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCompUpdateComponent;
            }());
            AdminCompUpdateComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            AdminCompUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-comp-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-comp-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-comp-update/admin-comp-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-comp-update.component.css */ "./src/app/components/admin-comp-update/admin-comp-update.component.css")).default]
                })
            ], AdminCompUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-add/admin-cust-add.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/admin-cust-add/admin-cust-add.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jdXN0LWFkZC9hZG1pbi1jdXN0LWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY3VzdC1hZGQvYWRtaW4tY3VzdC1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xyXG5cclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-add/admin-cust-add.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/admin-cust-add/admin-cust-add.component.ts ***!
          \***********************************************************************/
        /*! exports provided: AdminCustAddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCustAddComponent", function () { return AdminCustAddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdminCustAddComponent = /** @class */ (function () {
                function AdminCustAddComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCustAddComponent.prototype.ngOnInit = function () {
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
                };
                // add customer
                AdminCustAddComponent.prototype.addCustomer = function () {
                    this.adminServ.addCustomer(this.customer).subscribe(function (cust) {
                        // confirmation:
                        console.log(cust); // console
                        alert("customer added successfully"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                AdminCustAddComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCustAddComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCustAddComponent;
            }());
            AdminCustAddComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            AdminCustAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-cust-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-cust-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-add/admin-cust-add.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-cust-add.component.css */ "./src/app/components/admin-cust-add/admin-cust-add.component.css")).default]
                })
            ], AdminCustAddComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-delete/admin-cust-delete.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/admin-cust-delete/admin-cust-delete.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jdXN0LWRlbGV0ZS9hZG1pbi1jdXN0LWRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jdXN0LWRlbGV0ZS9hZG1pbi1jdXN0LWRlbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-delete/admin-cust-delete.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/admin-cust-delete/admin-cust-delete.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: AdminCustDeleteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCustDeleteComponent", function () { return AdminCustDeleteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdminCustDeleteComponent = /** @class */ (function () {
                function AdminCustDeleteComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCustDeleteComponent.prototype.ngOnInit = function () { };
                // delete customer
                AdminCustDeleteComponent.prototype.deleteCustomer = function () {
                    if (this.customerID == undefined) {
                        alert("Your ID number is empty!");
                    }
                    else {
                        this.adminServ.deleteCustomer(this.customerID).subscribe(function (cust) {
                            // confirmation:
                            console.log(cust); // console
                            alert("Customer deleted successfully!"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                AdminCustDeleteComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCustDeleteComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCustDeleteComponent;
            }());
            AdminCustDeleteComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            AdminCustDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-cust-delete',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-cust-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-delete/admin-cust-delete.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-cust-delete.component.css */ "./src/app/components/admin-cust-delete/admin-cust-delete.component.css")).default]
                })
            ], AdminCustDeleteComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-getall/admin-cust-getall.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/admin-cust-getall/admin-cust-getall.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jdXN0LWdldGFsbC9hZG1pbi1jdXN0LWdldGFsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jdXN0LWdldGFsbC9hZG1pbi1jdXN0LWdldGFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuI3RhYmxle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-getall/admin-cust-getall.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/admin-cust-getall/admin-cust-getall.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: AdminCustGetallComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCustGetallComponent", function () { return AdminCustGetallComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var AdminCustGetallComponent = /** @class */ (function () {
                function AdminCustGetallComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCustGetallComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.adminServ.getAllCustomer().subscribe(function (cust) {
                        _this.customerList = cust;
                    });
                };
                // get all customers
                AdminCustGetallComponent.prototype.getAllCustomer = function () {
                    this.adminServ.getAllCustomer().subscribe(function (data) {
                        // confirmation:
                        console.log(data); // console
                        alert("Coupon updated successfully"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                AdminCustGetallComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCustGetallComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCustGetallComponent;
            }());
            AdminCustGetallComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            AdminCustGetallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-cust-getall',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-cust-getall.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-getall/admin-cust-getall.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-cust-getall.component.css */ "./src/app/components/admin-cust-getall/admin-cust-getall.component.css")).default]
                })
            ], AdminCustGetallComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-getone/admin-cust-getone.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/admin-cust-getone/admin-cust-getone.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jdXN0LWdldG9uZS9hZG1pbi1jdXN0LWdldG9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLWN1c3QtZ2V0b25lL2FkbWluLWN1c3QtZ2V0b25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-getone/admin-cust-getone.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/admin-cust-getone/admin-cust-getone.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: AdminCustGetoneComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCustGetoneComponent", function () { return AdminCustGetoneComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var AdminCustGetoneComponent = /** @class */ (function () {
                function AdminCustGetoneComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCustGetoneComponent.prototype.ngOnInit = function () {
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
                };
                // get one customer
                AdminCustGetoneComponent.prototype.getOneCustomer = function () {
                    var _this = this;
                    if (this.customerID == undefined) {
                        alert("You ID number is empty!");
                    }
                    else {
                        this.adminServ.getOneCustomer(this.customerID).subscribe(function (cust) {
                            _this.customer = cust;
                            // confirmation:
                            console.log(cust); // console
                            alert("Customer was found successfully!"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                AdminCustGetoneComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCustGetoneComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCustGetoneComponent;
            }());
            AdminCustGetoneComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            AdminCustGetoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-cust-getone',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-cust-getone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-getone/admin-cust-getone.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-cust-getone.component.css */ "./src/app/components/admin-cust-getone/admin-cust-getone.component.css")).default]
                })
            ], AdminCustGetoneComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-update/admin-cust-update.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/admin-cust-update/admin-cust-update.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jdXN0LXVwZGF0ZS9hZG1pbi1jdXN0LXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jdXN0LXVwZGF0ZS9hZG1pbi1jdXN0LXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-cust-update/admin-cust-update.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/admin-cust-update/admin-cust-update.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: AdminCustUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCustUpdateComponent", function () { return AdminCustUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdminCustUpdateComponent = /** @class */ (function () {
                function AdminCustUpdateComponent(adminServ, loginService, router, location) {
                    this.adminServ = adminServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                AdminCustUpdateComponent.prototype.ngOnInit = function () {
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
                };
                // update customer - works
                AdminCustUpdateComponent.prototype.updateCustomer = function () {
                    this.adminServ.updateCustomer(this.customer).subscribe(function (cust) {
                        alert("Customer " + cust + " updated successfully.");
                        // confirmation:
                        console.log(cust); // console
                        alert("Customer updated successfully!"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                AdminCustUpdateComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                AdminCustUpdateComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminCustUpdateComponent;
            }());
            AdminCustUpdateComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminsService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            AdminCustUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-cust-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-cust-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-cust-update/admin-cust-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-cust-update.component.css */ "./src/app/components/admin-cust-update/admin-cust-update.component.css")).default]
                })
            ], AdminCustUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin/admin.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/admin/admin.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#panel{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n    width: 50%;\r\n    overflow: auto;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\na{\r\n    width: 150px;\r\n    font-size: 12px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: black;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: block;\r\n    padding: 3px;\r\n    margin: 3px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn{\r\n    float: right;\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDOztBQUVwQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYW5lbHtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG50YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxuXHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/admin/admin.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/admin/admin.component.ts ***!
          \*****************************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdminComponent = /** @class */ (function () {
                function AdminComponent(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                }
                AdminComponent.prototype.ngOnInit = function () {
                };
                AdminComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return AdminComponent;
            }());
            AdminComponent.ctorParameters = function () { return [
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-add/company-coup-add.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/company-coup-add/company-coup-add.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWNvdXAtYWRkL2NvbXBhbnktY291cC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1jb3VwLWFkZC9jb21wYW55LWNvdXAtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-add/company-coup-add.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/company-coup-add/company-coup-add.component.ts ***!
          \***************************************************************************/
        /*! exports provided: CompanyCoupAddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCoupAddComponent", function () { return CompanyCoupAddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var CompanyCoupAddComponent = /** @class */ (function () {
                function CompanyCoupAddComponent(compServ, loginService, router, location) {
                    this.compServ = compServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CompanyCoupAddComponent.prototype.ngOnInit = function () {
                    this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
                };
                // add company - works
                CompanyCoupAddComponent.prototype.addCoupon = function () {
                    console.log(this.coupon); // console
                    if (this.coupon.amount == undefined || this.coupon.price == undefined) {
                        alert("Incorrect input!");
                    }
                    else {
                        this.compServ.addCoupon(this.coupon).subscribe(function (coup) {
                            // confirmation:
                            console.log(coup); // console
                            alert("Coupon added successfully!"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                CompanyCoupAddComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CompanyCoupAddComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CompanyCoupAddComponent;
            }());
            CompanyCoupAddComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanysService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            CompanyCoupAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-coup-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-coup-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-add/company-coup-add.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-coup-add.component.css */ "./src/app/components/company-coup-add/company-coup-add.component.css")).default]
                })
            ], CompanyCoupAddComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-all-cat/company-coup-all-cat.component.css": 
        /*!************************************************************************************!*\
          !*** ./src/app/components/company-coup-all-cat/company-coup-all-cat.component.css ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n    width: 90%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 80%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWNvdXAtYWxsLWNhdC9jb21wYW55LWNvdXAtYWxsLWNhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtJQUNWLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1jb3VwLWFsbC1jYXQvY29tcGFueS1jb3VwLWFsbC1jYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4jdGFibGV7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-all-cat/company-coup-all-cat.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/company-coup-all-cat/company-coup-all-cat.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: CompanyCoupAllCatComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCoupAllCatComponent", function () { return CompanyCoupAllCatComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CompanyCoupAllCatComponent = /** @class */ (function () {
                function CompanyCoupAllCatComponent(compServ, loginService, router, location) {
                    this.compServ = compServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CompanyCoupAllCatComponent.prototype.ngOnInit = function () {
                };
                // get all companies by category
                CompanyCoupAllCatComponent.prototype.getCouponsByCat = function () {
                    var _this = this;
                    if (this.category == undefined) {
                        alert("Please choose a category!");
                    }
                    else {
                        console.log(this.category);
                        this.compServ.getCompanyCouponsCategory(this.category).subscribe(function (coup) {
                            _this.couponList = coup;
                            // confirmation:
                            console.log(coup); // console
                            alert("Found successfully!"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                CompanyCoupAllCatComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CompanyCoupAllCatComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CompanyCoupAllCatComponent;
            }());
            CompanyCoupAllCatComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanysService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            CompanyCoupAllCatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-coup-all-cat',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-coup-all-cat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-all-cat/company-coup-all-cat.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-coup-all-cat.component.css */ "./src/app/components/company-coup-all-cat/company-coup-all-cat.component.css")).default]
                })
            ], CompanyCoupAllCatComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-all-max/company-coup-all-max.component.css": 
        /*!************************************************************************************!*\
          !*** ./src/app/components/company-coup-all-max/company-coup-all-max.component.css ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n    width: 90%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 80%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWNvdXAtYWxsLW1heC9jb21wYW55LWNvdXAtYWxsLW1heC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtJQUNWLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1jb3VwLWFsbC1tYXgvY29tcGFueS1jb3VwLWFsbC1tYXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4jdGFibGV7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-all-max/company-coup-all-max.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/company-coup-all-max/company-coup-all-max.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: CompanyCoupAllMaxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCoupAllMaxComponent", function () { return CompanyCoupAllMaxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var CompanyCoupAllMaxComponent = /** @class */ (function () {
                function CompanyCoupAllMaxComponent(compServ, loginService, router, location) {
                    this.compServ = compServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CompanyCoupAllMaxComponent.prototype.ngOnInit = function () {
                };
                // get all companies
                CompanyCoupAllMaxComponent.prototype.getCouponsBMaxprice = function () {
                    var _this = this;
                    if (this.price == undefined) {
                        alert("Please input a price!");
                    }
                    else {
                        this.compServ.getAllCouponsByMaxprice(this.price).subscribe(function (coup) {
                            _this.couponList = coup;
                            // confirmation:
                            console.log(coup); // console
                            alert("Coupons found successfully!"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                CompanyCoupAllMaxComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CompanyCoupAllMaxComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CompanyCoupAllMaxComponent;
            }());
            CompanyCoupAllMaxComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanysService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            CompanyCoupAllMaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-coup-all-max',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-coup-all-max.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-all-max/company-coup-all-max.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-coup-all-max.component.css */ "./src/app/components/company-coup-all-max/company-coup-all-max.component.css")).default]
                })
            ], CompanyCoupAllMaxComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-all/company-coup-all.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/company-coup-all/company-coup-all.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 90%;\r\n    width: 90%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 80%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWNvdXAtYWxsL2NvbXBhbnktY291cC1hbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnktY291cC1hbGwvY29tcGFueS1jb3VwLWFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiN0YWJsZXtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-all/company-coup-all.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/company-coup-all/company-coup-all.component.ts ***!
          \***************************************************************************/
        /*! exports provided: CompanyCoupAllComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCoupAllComponent", function () { return CompanyCoupAllComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CompanyCoupAllComponent = /** @class */ (function () {
                function CompanyCoupAllComponent(compServ, loginService, router, location) {
                    this.compServ = compServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CompanyCoupAllComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.compServ.getAllCoupons().subscribe(function (data) {
                        _this.couponList = data;
                    });
                };
                // get all companies - dont
                CompanyCoupAllComponent.prototype.getAllCoupons = function () {
                    this.compServ.getAllCoupons().subscribe(function (coup) {
                        // confirmation:
                        console.log(coup); // console
                        alert("Companies found successfully!"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                CompanyCoupAllComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CompanyCoupAllComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CompanyCoupAllComponent;
            }());
            CompanyCoupAllComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanysService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            CompanyCoupAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-coup-all',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-coup-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-all/company-coup-all.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-coup-all.component.css */ "./src/app/components/company-coup-all/company-coup-all.component.css")).default]
                })
            ], CompanyCoupAllComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-delete/company-coup-delete.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/components/company-coup-delete/company-coup-delete.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWNvdXAtZGVsZXRlL2NvbXBhbnktY291cC1kZWxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1jb3VwLWRlbGV0ZS9jb21wYW55LWNvdXAtZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-delete/company-coup-delete.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/company-coup-delete/company-coup-delete.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: CompanyCoupDeleteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCoupDeleteComponent", function () { return CompanyCoupDeleteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var CompanyCoupDeleteComponent = /** @class */ (function () {
                function CompanyCoupDeleteComponent(compServ, loginService, router, location) {
                    this.compServ = compServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CompanyCoupDeleteComponent.prototype.ngOnInit = function () { };
                // delete coupon
                CompanyCoupDeleteComponent.prototype.deleteCoupon = function () {
                    if (this.couponID == undefined) {
                        alert("The input Coupon ID is empty!");
                    }
                    else {
                        this.compServ.deleteCoupon(this.couponID).subscribe(function (coup) {
                            // confirmation:
                            console.log(coup); // console
                            alert("Coupon deleted successfully!"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                CompanyCoupDeleteComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CompanyCoupDeleteComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CompanyCoupDeleteComponent;
            }());
            CompanyCoupDeleteComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanysService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            CompanyCoupDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-coup-delete',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-coup-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-delete/company-coup-delete.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-coup-delete.component.css */ "./src/app/components/company-coup-delete/company-coup-delete.component.css")).default]
                })
            ], CompanyCoupDeleteComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-update/company-coup-update.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/components/company-coup-update/company-coup-update.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWNvdXAtdXBkYXRlL2NvbXBhbnktY291cC11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1jb3VwLXVwZGF0ZS9jb21wYW55LWNvdXAtdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/company-coup-update/company-coup-update.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/company-coup-update/company-coup-update.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: CompanyCoupUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCoupUpdateComponent", function () { return CompanyCoupUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CompanyCoupUpdateComponent = /** @class */ (function () {
                function CompanyCoupUpdateComponent(compServ, loginService, router, location) {
                    this.compServ = compServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CompanyCoupUpdateComponent.prototype.ngOnInit = function () {
                    this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
                };
                // update coupon
                CompanyCoupUpdateComponent.prototype.updateCoupon = function () {
                    console.log(this.coupon);
                    // checks
                    if (this.coupon.amount == undefined || this.coupon.couponID == undefined || this.coupon.price == undefined) {
                        alert("VC:One of your fields is empty!");
                    }
                    else {
                        // the update
                        this.compServ.updateCoupon(this.coupon).subscribe(function (coup) {
                            // confirmation:
                            console.log(coup); // console
                            alert("Coupon updated successfully"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                CompanyCoupUpdateComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CompanyCoupUpdateComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                CompanyCoupUpdateComponent.prototype.getCoupon = function (id) {
                    var _this = this;
                    this.compServ.getOneCoupon(id).subscribe(function (data) {
                        _this.coupon = data;
                        // confirmation:
                        console.log(data); // console
                        alert("Coupon updated successfully"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                return CompanyCoupUpdateComponent;
            }());
            CompanyCoupUpdateComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanysService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            CompanyCoupUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-coup-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-coup-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-coup-update/company-coup-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-coup-update.component.css */ "./src/app/components/company-coup-update/company-coup-update.component.css")).default]
                })
            ], CompanyCoupUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company-details/company-details.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/company-details/company-details.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWRldGFpbHMvY29tcGFueS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnktZGV0YWlscy9jb21wYW55LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiN0YWJsZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/company-details/company-details.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/company-details/company-details.component.ts ***!
          \*************************************************************************/
        /*! exports provided: CompanyDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function () { return CompanyDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CompanyDetailsComponent = /** @class */ (function () {
                function CompanyDetailsComponent(compServ, loginService, router, location) {
                    this.compServ = compServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CompanyDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
                    this.compServ.getCompanyDetails().subscribe(function (comp) {
                        _this.company = comp;
                        // confirmation:
                        console.log(comp); // console
                        alert("Company loaded successfully!"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                CompanyDetailsComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CompanyDetailsComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CompanyDetailsComponent;
            }());
            CompanyDetailsComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanysService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            CompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-details/company-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-details.component.css */ "./src/app/components/company-details/company-details.component.css")).default]
                })
            ], CompanyDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company/company.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/company/company.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#panel{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n    width: 50%;\r\n    overflow: auto;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\na{\r\n    width: 150px;\r\n    font-size: 12px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: black;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: block;\r\n    padding: 3px;\r\n    margin: 3px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn{\r\n    float: right;\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtJQUNWLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFuZWx7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuYXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/company/company.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/company/company.component.ts ***!
          \*********************************************************/
        /*! exports provided: CompanyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () { return CompanyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CompanyComponent = /** @class */ (function () {
                function CompanyComponent(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                }
                CompanyComponent.prototype.ngOnInit = function () {
                };
                CompanyComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CompanyComponent;
            }());
            CompanyComponent.ctorParameters = function () { return [
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")).default]
                })
            ], CompanyComponent);
            /***/ 
        }),
        /***/ "./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.css": 
        /*!**************************************************************************************!*\
          !*** ./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.css ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n    width: 90%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 80%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1jb3VwLWFsbC1jYXQvY3VzdG9tZXItY291cC1hbGwtY2F0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1jb3VwLWFsbC1jYXQvY3VzdG9tZXItY291cC1hbGwtY2F0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuI3RhYmxle1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4jYmFja3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jbG9nb3V0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: CustomerCoupAllCatComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCoupAllCatComponent", function () { return CustomerCoupAllCatComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CustomerCoupAllCatComponent = /** @class */ (function () {
                function CustomerCoupAllCatComponent(custServ, loginService, router, location) {
                    this.custServ = custServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CustomerCoupAllCatComponent.prototype.ngOnInit = function () {
                };
                // get coupons by category
                CustomerCoupAllCatComponent.prototype.getCouponsByCat = function () {
                    var _this = this;
                    if (this.category == undefined) {
                        alert("Please choose a category!");
                    }
                    else {
                        this.custServ.getCustomerCouponsByCategory(this.category).subscribe(function (coup) {
                            _this.couponList = coup;
                            // confirmation:
                            console.log(coup); // console
                            alert("Coupons found successfully!"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                CustomerCoupAllCatComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CustomerCoupAllCatComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CustomerCoupAllCatComponent;
            }());
            CustomerCoupAllCatComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            CustomerCoupAllCatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer-coup-all-cat',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-coup-all-cat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-coup-all-cat.component.css */ "./src/app/components/customer-coup-all-cat/customer-coup-all-cat.component.css")).default]
                })
            ], CustomerCoupAllCatComponent);
            /***/ 
        }),
        /***/ "./src/app/components/customer-coup-all-max/customer-coup-all-max.component.css": 
        /*!**************************************************************************************!*\
          !*** ./src/app/components/customer-coup-all-max/customer-coup-all-max.component.css ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n    width: 90%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 80%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td {\r\n\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1jb3VwLWFsbC1tYXgvY3VzdG9tZXItY291cC1hbGwtbWF4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItY291cC1hbGwtbWF4L2N1c3RvbWVyLWNvdXAtYWxsLW1heC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiN0YWJsZXtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/customer-coup-all-max/customer-coup-all-max.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/components/customer-coup-all-max/customer-coup-all-max.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: CustomerCoupAllMaxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCoupAllMaxComponent", function () { return CustomerCoupAllMaxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CustomerCoupAllMaxComponent = /** @class */ (function () {
                function CustomerCoupAllMaxComponent(custServ, loginService, router, location) {
                    this.custServ = custServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CustomerCoupAllMaxComponent.prototype.ngOnInit = function () {
                };
                // get all companies
                CustomerCoupAllMaxComponent.prototype.getCouponsBMaxprice = function () {
                    var _this = this;
                    if (this.price == undefined) {
                        alert("Please input a price number!");
                    }
                    else {
                        this.custServ.getCustomerCouponsByMaxprice(this.price).subscribe(function (coup) {
                            _this.couponList = coup;
                            // confirmation:
                            console.log(coup); // console
                            alert("Coupons found successfully!"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                CustomerCoupAllMaxComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CustomerCoupAllMaxComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CustomerCoupAllMaxComponent;
            }());
            CustomerCoupAllMaxComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            CustomerCoupAllMaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer-coup-all-max',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-coup-all-max.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-all-max/customer-coup-all-max.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-coup-all-max.component.css */ "./src/app/components/customer-coup-all-max/customer-coup-all-max.component.css")).default]
                })
            ], CustomerCoupAllMaxComponent);
            /***/ 
        }),
        /***/ "./src/app/components/customer-coup-all/customer-coup-all.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/customer-coup-all/customer-coup-all.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 90%;\r\n    width: 90%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    \r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 80%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td { \r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1jb3VwLWFsbC9jdXN0b21lci1jb3VwLWFsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsWUFBWTs7SUFFWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbWVyLWNvdXAtYWxsL2N1c3RvbWVyLWNvdXAtYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4jdGFibGV7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQgeyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4jYmFja3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jbG9nb3V0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/customer-coup-all/customer-coup-all.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/customer-coup-all/customer-coup-all.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: CustomerCoupAllComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCoupAllComponent", function () { return CustomerCoupAllComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var CustomerCoupAllComponent = /** @class */ (function () {
                function CustomerCoupAllComponent(custServ, loginService, router, location) {
                    this.custServ = custServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CustomerCoupAllComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.custServ.getAllCoupons().subscribe(function (coup) {
                        _this.couponList = coup;
                        // confirmation:
                        console.log(coup); // console
                        alert("Coupons loaded successfully"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                CustomerCoupAllComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CustomerCoupAllComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CustomerCoupAllComponent;
            }());
            CustomerCoupAllComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            CustomerCoupAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer-coup-all',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-coup-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-all/customer-coup-all.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-coup-all.component.css */ "./src/app/components/customer-coup-all/customer-coup-all.component.css")).default]
                })
            ], CustomerCoupAllComponent);
            /***/ 
        }),
        /***/ "./src/app/components/customer-coup-purchase/customer-coup-purchase.component.css": 
        /*!****************************************************************************************!*\
          !*** ./src/app/components/customer-coup-purchase/customer-coup-purchase.component.css ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    margin: 1%;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1jb3VwLXB1cmNoYXNlL2N1c3RvbWVyLWNvdXAtcHVyY2hhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItY291cC1wdXJjaGFzZS9jdXN0b21lci1jb3VwLXB1cmNoYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/customer-coup-purchase/customer-coup-purchase.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/components/customer-coup-purchase/customer-coup-purchase.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: CustomerCoupPurchaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCoupPurchaseComponent", function () { return CustomerCoupPurchaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            var CustomerCoupPurchaseComponent = /** @class */ (function () {
                function CustomerCoupPurchaseComponent(custServ, loginService, router, location) {
                    this.custServ = custServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CustomerCoupPurchaseComponent.prototype.ngOnInit = function () {
                };
                // add coupon
                CustomerCoupPurchaseComponent.prototype.purchaseCoupon = function () {
                    if (this.couponID == undefined) {
                        alert("Input the coupon id!");
                    }
                    else {
                        this.custServ.purchaseCoupon(this.couponID).subscribe(function (coupon) {
                            // confirmation:
                            console.log(coupon); // console
                            alert("Coupon purchased successfully"); // alert
                        }, function (error) {
                            alert(error.error);
                        });
                    }
                };
                CustomerCoupPurchaseComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CustomerCoupPurchaseComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CustomerCoupPurchaseComponent;
            }());
            CustomerCoupPurchaseComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            CustomerCoupPurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer-coup-purchase',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-coup-purchase.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-coup-purchase/customer-coup-purchase.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-coup-purchase.component.css */ "./src/app/components/customer-coup-purchase/customer-coup-purchase.component.css")).default]
                })
            ], CustomerCoupPurchaseComponent);
            /***/ 
        }),
        /***/ "./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.css": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.css ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n    width: 90%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    height: 80%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td {\r\n\r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1jdXN0LWNvdXBvbnMtYWxsL2N1c3RvbWVyLWN1c3QtY291cG9ucy1hbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1jdXN0LWNvdXBvbnMtYWxsL2N1c3RvbWVyLWN1c3QtY291cG9ucy1hbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4jdGFibGV7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4jYmFja3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jbG9nb3V0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: CustomerCustCouponsAllComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCustCouponsAllComponent", function () { return CustomerCustCouponsAllComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CustomerCustCouponsAllComponent = /** @class */ (function () {
                function CustomerCustCouponsAllComponent(custServ, loginService, router, location) {
                    this.custServ = custServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CustomerCustCouponsAllComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // public getCustomerCoupons(): void {
                    this.custServ.getCustomerCoupons().subscribe(function (coup) {
                        _this.couponList = coup;
                        // confirmation:
                        console.log(coup); // console
                        alert("Coupons loaded successfully"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                    // }
                };
                CustomerCustCouponsAllComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CustomerCustCouponsAllComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CustomerCustCouponsAllComponent;
            }());
            CustomerCustCouponsAllComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
            ]; };
            CustomerCustCouponsAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer-cust-coupons-all',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-cust-coupons-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-cust-coupons-all.component.css */ "./src/app/components/customer-cust-coupons-all/customer-cust-coupons-all.component.css")).default]
                })
            ], CustomerCustCouponsAllComponent);
            /***/ 
        }),
        /***/ "./src/app/components/customer-details/customer-details.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/customer-details/customer-details.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\n.btn{\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n}\r\n\r\n#table{\r\n    \r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntable, th, td { \r\n    border: 1px solid black;\r\n    font-size: 12px;\r\n}\r\n\r\n#back{\r\n    float: left;\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtJQUNWLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuI3RhYmxle1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSwgdGgsIHRkIHsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/customer-details/customer-details.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/customer-details/customer-details.component.ts ***!
          \***************************************************************************/
        /*! exports provided: CustomerDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function () { return CustomerDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CustomerDetailsComponent = /** @class */ (function () {
                function CustomerDetailsComponent(custServ, loginService, router, location) {
                    this.custServ = custServ;
                    this.loginService = loginService;
                    this.router = router;
                    this.location = location;
                }
                CustomerDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
                    this.custServ.getCustomerDetails().subscribe(function (cust) {
                        _this.customer = cust;
                        // confirmation:
                        console.log(cust); // console
                        alert("Your information loaded successfully!"); // alert
                    }, function (error) {
                        alert(error.error);
                    });
                };
                CustomerDetailsComponent.prototype.backClicked = function () {
                    this.location.back();
                };
                CustomerDetailsComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CustomerDetailsComponent;
            }());
            CustomerDetailsComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-details/customer-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-details.component.css */ "./src/app/components/customer-details/customer-details.component.css")).default]
                })
            ], CustomerDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/customer/customer.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/customer/customer.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#panel{\r\n    margin: 5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 80%;\r\n    width: 50%;\r\n    overflow: auto;\r\n}\r\n\r\np{\r\n    font-size: 12px;\r\n}\r\n\r\na{\r\n    width: 150px;\r\n    font-size: 12px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: black;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: block;\r\n    padding: 3px;\r\n    margin: 3px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n}\r\n\r\n.btn{\r\n    float: right;\r\n    width: 50px;\r\n    background: pink;\r\n    border: 1px solid ;\r\n    border-color: red;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 3px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1%;\r\n    border-inline-start-style: solid;\r\n\r\n}\r\n\r\n#logout{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFuZWx7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuYXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XHJcblxyXG59XHJcblxyXG4jbG9nb3V0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/customer/customer.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/customer/customer.component.ts ***!
          \***********************************************************/
        /*! exports provided: CustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () { return CustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CustomerComponent = /** @class */ (function () {
                function CustomerComponent(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                }
                CustomerComponent.prototype.ngOnInit = function () {
                };
                CustomerComponent.prototype.logout = function () {
                    this.loginService.logout();
                    this.router.navigate(["/home"]);
                };
                return CustomerComponent;
            }());
            CustomerComponent.ctorParameters = function () { return [
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")).default]
                })
            ], CustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/footer/footer.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.ftr{\r\n    margin-top: 1%;\r\n    text-align: center;\r\n    font-size: 10pt;\r\n    font-family: 'arial';\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZ0cntcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdhcmlhbCc7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/footer/footer.component.ts ***!
          \*******************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/gallery/gallery.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/gallery/gallery.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ndiv>*{\r\n    margin: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuZGl2Pip7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/gallery/gallery.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/gallery/gallery.component.ts ***!
          \*********************************************************/
        /*! exports provided: GalleryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () { return GalleryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GalleryComponent = /** @class */ (function () {
                function GalleryComponent() {
                }
                GalleryComponent.prototype.ngOnInit = function () {
                };
                return GalleryComponent;
            }());
            GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-gallery',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery/gallery.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.css */ "./src/app/components/gallery/gallery.component.css")).default]
                })
            ], GalleryComponent);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/header/header.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    text-align: center;\r\n}\r\nh1{\r\n    padding-top: 0%;\r\n    scroll-padding-bottom: 0%;\r\n    margin-top: 0%;\r\n    font-size: 16pt;\r\n    color: brown;\r\n    font-family: 'Times New Roman', Times, serif;\r\n\r\n}\r\nh6{\r\n    padding-top: 0%;\r\n    scroll-padding-bottom: 0%;\r\n    margin-top: 0%;\r\n    font-size: 12pt;\r\n    color: sienna;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osNENBQTRDOztBQUVoRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYix5Q0FBeUM7O0FBRTdDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDF7XHJcbiAgICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgICBzY3JvbGwtcGFkZGluZy1ib3R0b206IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuXHJcbn1cclxuaDZ7XHJcbiAgICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgICBzY3JvbGwtcGFkZGluZy1ib3R0b206IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBjb2xvcjogc2llbm5hO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\nh3{\r\n    text-align: left;\r\n}\r\ninput{\r\n    align-content: center;\r\n}\r\n#imgContainer{\r\n    text-align: center;\r\n}\r\n#exBinding{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmlucHV0e1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbiNpbWdDb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNleEJpbmRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                // public discount: number;
                // public today: Date;
                // public maxPrice: number;
                // public imgWidth: number;
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                    // this.discount = 15;
                    // this.today = new Date();
                    // this.maxPrice = 10.8;
                    // this.imgWidth = 500;
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/layout/layout.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/layout/layout.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("section{\r\n    height: 100%;  \r\n    background-color: gray;\r\n    display: grid; \r\n    grid-template-rows: 10% 85% 5%;\r\n    grid-template-columns: 20% 80%;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    \r\n}\r\n\r\n/* child of section>* */\r\n\r\nsection>*{\r\n    border: none;\r\n    /* border: solid black 1px; */\r\n}\r\n\r\nheader{\r\n    grid-column: span 2;\r\n    background-color: orangered;\r\n}\r\n\r\nnav{\r\n    background-color: rgb(0, 130, 0);\r\n}\r\n\r\nmain{\r\n    background-color: rgb(187, 51, 51);\r\n}\r\n\r\nfooter{\r\n    grid-column: span 2;\r\n    background-color: orange;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBkaXNwbGF5OiBncmlkOyBcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDg1JSA1JTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgIFxyXG59XHJcblxyXG4vKiBjaGlsZCBvZiBzZWN0aW9uPiogKi9cclxuc2VjdGlvbj4qe1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7ICovXHJcbn1cclxuaGVhZGVye1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxufVxyXG5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMwLCAwKTtcclxufVxyXG5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgNTEsIDUxKTtcclxufVxyXG5cclxuZm9vdGVye1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/layout/layout.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/layout/layout.component.ts ***!
          \*******************************************************/
        /*! exports provided: LayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () { return LayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LayoutComponent = /** @class */ (function () {
                function LayoutComponent() {
                }
                LayoutComponent.prototype.ngOnInit = function () {
                };
                return LayoutComponent;
            }());
            LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")).default]
                })
            ], LayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/login/login.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import \"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\";\r\n\r\n/* body{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    background: url(src\\assets\\images\\bg.jpg) no-repeat;\r\n    background-size: cover;\r\n} */\r\n\r\n.login-box{\r\n    width: 280;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    color: white;\r\n}\r\n\r\n.login-box h1{\r\n    float: left;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 40;\r\n    border-bottom: 6px solid white;\r\n    margin-bottom: 50px;\r\n    padding: 13px 0;\r\n}\r\n\r\n.textbox{\r\n    width: 100%;\r\n    overflow: hidden;\r\n    font-size: 20px;\r\n    padding: 8px 0;\r\n    margin: 8px 0;\r\n    border-bottom: 3px solid white;\r\n}\r\n\r\n.textbox i{\r\n    width: 26px;\r\n    float: left;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.textbox input{\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    color: white;\r\n    font-size: 18px;\r\n    width: 80%;\r\n    float: left;\r\n    margin: 0 10px;\r\n}\r\n\r\n.btn{\r\n    width: 100%;\r\n    background: red;\r\n    border: 2px solid red;\r\n    color: white;\r\n    border-color: rgb(250, 36, 36);\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);\r\n    padding: 5px;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    margin: 12px 0;\r\n    border-inline-start-style: groove;\r\n\r\n}\r\n\r\n/* .login{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin: 5%;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3Rjs7QUFFeEY7Ozs7OztHQU1HOztBQUVIO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUNBQWlDOztBQUVyQzs7QUFFQTs7O0dBR0ciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI7XHJcblxyXG4vKiBib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKHNyY1xcYXNzZXRzXFxpbWFnZXNcXGJnLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSAqL1xyXG5cclxuLmxvZ2luLWJveHtcclxuICAgIHdpZHRoOiAyODA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggaDF7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MDtcclxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDA7XHJcbn1cclxuXHJcbi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4udGV4dGJveCBpe1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi50ZXh0Ym94IGlucHV0e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjUwLCAzNiwgMzYpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IGdyb292ZTtcclxuXHJcbn1cclxuXHJcbi8qIC5sb2dpbntcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiA1JTtcclxufSAqLyJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/login/login.component.ts ***!
          \*****************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    if (this.email == undefined) {
                        alert("Please enter your email adress.");
                    }
                    else if (this.pass == undefined) {
                        alert("Please enter your password.");
                    }
                    else if (this.type == undefined) {
                        alert("Please enter your type of user.");
                    }
                    else {
                        // send login data to server and get the server response (using sevice)!
                        this.loginService.login(this.email, this.pass, this.type).subscribe(function (response) {
                            if (response.startsWith("Error")) {
                                alert("Incorrect input! Please try again.");
                            }
                            else {
                                // we got a token from server... save it
                                // sessionStorage.setItem("token", response);
                                sessionStorage.token = response;
                                // and navigate to a new component
                                if (_this.type == "Admin") {
                                    _this.router.navigate(["/admin"]);
                                }
                                if (_this.type == "Company") {
                                    _this.router.navigate(["/company"]);
                                }
                                if (_this.type == "Customer") {
                                    _this.router.navigate(["/customer"]);
                                }
                            }
                        });
                    }
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/navigation/navigation.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/navigation/navigation.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    margin: 10px;\r\n}\r\ndiv>a{\r\n    font-family: sans-serif;\r\n    color: black;\r\n    text-align: center;\r\n\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 5px;\r\n    background-color: #97ec1f;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbmRpdj5he1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdlYzFmO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/navigation/navigation.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/navigation/navigation.component.ts ***!
          \***************************************************************/
        /*! exports provided: NavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () { return NavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavigationComponent = /** @class */ (function () {
                function NavigationComponent() {
                }
                NavigationComponent.prototype.ngOnInit = function () {
                };
                return NavigationComponent;
            }());
            NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")).default]
                })
            ], NavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/components/thumbnail/thumbnail.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/thumbnail/thumbnail.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    text-align: center;\r\n}\r\nimg{\r\n    width: 150px;\r\n    /* border: solid black 2px; */\r\n    box-shadow: chocolate 5px 5px;\r\n    border-radius: 8px;\r\n}\r\nspan{\r\n    font-size: 14pt;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aHVtYm5haWwvdGh1bWJuYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aHVtYm5haWwvdGh1bWJuYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjayAycHg7ICovXHJcbiAgICBib3gtc2hhZG93OiBjaG9jb2xhdGUgNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/thumbnail/thumbnail.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/thumbnail/thumbnail.component.ts ***!
          \*************************************************************/
        /*! exports provided: ThumbnailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function () { return ThumbnailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ThumbnailComponent = /** @class */ (function () {
                function ThumbnailComponent() {
                }
                ThumbnailComponent.prototype.ngOnInit = function () {
                };
                return ThumbnailComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ThumbnailComponent.prototype, "imageSource", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ThumbnailComponent.prototype, "imageDescription", void 0);
            ThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-thumbnail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thumbnail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thumbnail/thumbnail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thumbnail.component.css */ "./src/app/components/thumbnail/thumbnail.component.css")).default]
                })
            ], ThumbnailComponent);
            /***/ 
        }),
        /***/ "./src/app/models/company.ts": 
        /*!***********************************!*\
          !*** ./src/app/models/company.ts ***!
          \***********************************/
        /*! exports provided: Company */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function () { return Company; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Company = /** @class */ (function () {
                function Company(companyID, name, email, password) {
                    this.companyID = companyID;
                    this.name = name;
                    this.email = email;
                    this.password = password;
                }
                // get
                Company.prototype.getId = function () {
                    return this.companyID;
                };
                Company.prototype.getName = function () {
                    return this.name;
                };
                Company.prototype.getEmail = function () {
                    return this.email;
                };
                Company.prototype.getPassword = function () {
                    return this.password;
                };
                // set
                Company.prototype.setId = function (companyID) {
                    this.companyID = companyID;
                };
                Company.prototype.setName = function (name) {
                    this.name = name;
                };
                Company.prototype.setEmail = function (email) {
                    this.email = email;
                };
                Company.prototype.setPassword = function (password) {
                    this.password = password;
                };
                return Company;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/coupon.ts": 
        /*!**********************************!*\
          !*** ./src/app/models/coupon.ts ***!
          \**********************************/
        /*! exports provided: Coupon */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function () { return Coupon; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Coupon = /** @class */ (function () {
                // private couponID: number;
                // private companyID: Company;
                // private amount: number;
                // private category: string;
                // private title: string;
                // private description: string;
                // private image: string;
                // private startDate: Date;
                // private endDate: Date;
                // private price: number;
                function Coupon(couponID, amount, category, title, description, image, startDate, endDate, price) {
                    this.couponID = couponID;
                    this.amount = amount;
                    this.category = category;
                    this.title = title;
                    this.description = description;
                    this.image = image;
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.price = price;
                }
                return Coupon;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/customer.ts": 
        /*!************************************!*\
          !*** ./src/app/models/customer.ts ***!
          \************************************/
        /*! exports provided: Customer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function () { return Customer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Customer = /** @class */ (function () {
                // private customerID: number;
                // private firstName: string;
                // private lastName: string;
                // private email: string;
                // private password: string;
                // private coupons: Coupon[];
                function Customer(customerID, firstName, lastName, email, password) {
                    // this.customerID = customerID;
                    // this.firstName = firstName;
                    // this.lastName = lastName;
                    // this.email = email;
                    // this.password = password;
                }
                return Customer;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/admin.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/admin.service.ts ***!
          \*******************************************/
        /*! exports provided: AdminsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsService", function () { return AdminsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AdminsService = /** @class */ (function () {
                function AdminsService(client) {
                    this.client = client;
                    this.basePath = "http://localhost:8080/admin";
                }
                // -------------- Company --------------
                AdminsService.prototype.addCompany = function (company) {
                    return this.client.post(this.basePath + "/addCompany/" + sessionStorage.token, company);
                };
                AdminsService.prototype.updateCompany = function (company) {
                    return this.client.put(this.basePath + "/updateCompany/" + sessionStorage.token, company);
                };
                AdminsService.prototype.deleteCompany = function (companyID) {
                    return this.client.delete(this.basePath + "/deleteCompany/" + sessionStorage.token + "/" + companyID);
                };
                AdminsService.prototype.getAllCompanies = function () {
                    return this.client.get(this.basePath + "/getAllCompany/" + sessionStorage.token);
                };
                AdminsService.prototype.getOneCompany = function (companyID) {
                    return this.client.get(this.basePath + "/getOneCompany/" + sessionStorage.token + "/" + companyID);
                };
                // -------------- Customer --------------
                AdminsService.prototype.addCustomer = function (customer) {
                    return this.client.post(this.basePath + "/addCustomer/" + sessionStorage.token, customer);
                };
                AdminsService.prototype.updateCustomer = function (customer) {
                    return this.client.put(this.basePath + "/updateCustomer/" + sessionStorage.token, customer);
                };
                AdminsService.prototype.deleteCustomer = function (customerID) {
                    return this.client.delete(this.basePath + "/deleteCustomer/" + sessionStorage.token + "/" + customerID);
                };
                AdminsService.prototype.getAllCustomer = function () {
                    return this.client.get(this.basePath + "/getAllCustomers/" + sessionStorage.token);
                };
                AdminsService.prototype.getOneCustomer = function (customerID) {
                    return this.client.get(this.basePath + "/getOneCustomer/" + sessionStorage.token + "/" + customerID);
                };
                return AdminsService;
            }());
            AdminsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AdminsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdminsService);
            /***/ 
        }),
        /***/ "./src/app/services/company.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/company.service.ts ***!
          \*********************************************/
        /*! exports provided: CompanysService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanysService", function () { return CompanysService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CompanysService = /** @class */ (function () {
                function CompanysService(client) {
                    this.client = client;
                    this.basePath = "http://localhost:8080/company";
                }
                CompanysService.prototype.addCoupon = function (coupon) {
                    return this.client.post(this.basePath + "/addCoupon/" + sessionStorage.token, coupon);
                };
                CompanysService.prototype.updateCoupon = function (coupon) {
                    return this.client.put(this.basePath + "/updateCoupon/" + sessionStorage.token, coupon);
                };
                CompanysService.prototype.deleteCoupon = function (couponID) {
                    return this.client.delete(this.basePath + "/deleteCoupon/" + sessionStorage.token + "/" + couponID);
                };
                CompanysService.prototype.getOneCoupon = function (couponID) {
                    return this.client.get(this.basePath + "/getOneCoupon/" + sessionStorage.token + "/" + couponID);
                };
                CompanysService.prototype.getAllCoupons = function () {
                    return this.client.get(this.basePath + "/getCompanyCoupons/" + sessionStorage.token);
                };
                CompanysService.prototype.getCompanyCouponsCategory = function (category) {
                    return this.client.get(this.basePath + "/getCompanyCouponsCategory/" + sessionStorage.token + "/" + category);
                };
                CompanysService.prototype.getAllCouponsByMaxprice = function (price) {
                    return this.client.get(this.basePath + "/getCompanyCouponsMaxprice/" + sessionStorage.token + "/" + price);
                };
                CompanysService.prototype.getCompanyDetails = function () {
                    return this.client.get(this.basePath + "/getCompanyDetails/" + sessionStorage.token);
                };
                return CompanysService;
            }());
            CompanysService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CompanysService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CompanysService);
            /***/ 
        }),
        /***/ "./src/app/services/customer.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/customer.service.ts ***!
          \**********************************************/
        /*! exports provided: CustomersService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function () { return CustomersService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _models_coupon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/coupon */ "./src/app/models/coupon.ts");
            var CustomersService = /** @class */ (function () {
                function CustomersService(client) {
                    this.client = client;
                    this.basePath = "http://localhost:8080/customer";
                }
                CustomersService.prototype.fetch = function () {
                    return this.client;
                };
                CustomersService.prototype.purchaseCoupon = function (couponID) {
                    return this.client.post(this.basePath + "/purchaseCoupon/" + sessionStorage.token + "/" + couponID, _models_coupon__WEBPACK_IMPORTED_MODULE_3__["Coupon"]);
                };
                CustomersService.prototype.getCustomerCoupons = function () {
                    return this.client.get(this.basePath + "/getCustomerCoupons/" + sessionStorage.token);
                };
                CustomersService.prototype.getCustomerCouponsByCategory = function (category) {
                    return this.client.get(this.basePath + "/getCustomerCouponsByCategory/" + sessionStorage.token + "/" + category);
                };
                CustomersService.prototype.getCustomerCouponsByMaxprice = function (price) {
                    return this.client.get(this.basePath + "/getCustomerCouponsByMaxprice/" + sessionStorage.token + "/" + price);
                };
                CustomersService.prototype.getCustomerDetails = function () {
                    return this.client.get(this.basePath + "/getCustomerDetails/" + sessionStorage.token);
                };
                CustomersService.prototype.getAllCoupons = function () {
                    return this.client.get(this.basePath + "/getAllCoupons/" + sessionStorage.token);
                };
                return CustomersService;
            }());
            CustomersService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CustomersService);
            /***/ 
        }),
        /***/ "./src/app/services/login.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/login.service.ts ***!
          \*******************************************/
        /*! exports provided: LoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function () { return LoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoginService = /** @class */ (function () {
                function LoginService(client) {
                    this.client = client;
                    this.basePath = "http://localhost:8080";
                }
                LoginService.prototype.login = function (email, pass, type) {
                    return this.client.post(this.basePath + "/login/" + email + "/" + pass + "/" + type, null, { responseType: 'text' });
                };
                LoginService.prototype.logout = function () {
                    this.client.post(this.basePath + "/logout/" + sessionStorage.getItem("token"), null);
                    sessionStorage.removeItem("token");
                    alert("logged out successfully!");
                };
                return LoginService;
            }());
            LoginService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
            ]; };
            LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoginService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Development\AngularDev\InternetShop\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map