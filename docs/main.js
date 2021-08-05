(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Terry Nguyen\Documents\Code\Personal Projects\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "7Fmy":
/*!******************************************************!*\
  !*** ./src/app/proj-banner/proj-banner.component.ts ***!
  \******************************************************/
/*! exports provided: ProjBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjBannerComponent", function() { return ProjBannerComponent; });
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjBannerComponent {
    constructor() { }
    ngOnInit() {
        var animation = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
            loop: true,
            duration: 1200,
            autoplay: false
        });
        animation.add({
            targets: '.container-fluid .squares',
            opacity: 1,
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(100, { grid: [27, 5] })
        }).add({
            targets: '.container-fluid .square-normal',
            backgroundColor: "#000000",
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(20, { grid: [27, 5], from: "center" })
        }).add({
            targets: '.container-fluid .square-normal',
            backgroundColor: "#ffffff",
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(50, { grid: [27, 5], from: "center" })
        });
        animation.restart();
    }
}
ProjBannerComponent.ɵfac = function ProjBannerComponent_Factory(t) { return new (t || ProjBannerComponent)(); };
ProjBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjBannerComponent, selectors: [["app-proj-banner"]], decls: 148, vars: 0, consts: [[2, "padding", "2vh"], [1, "container-fluid", "profile"], [1, "row"], [1, "justify-content-center", "d-flex"], [1, "squares", "square-normal"], [1, "squares", "square-blank"], [2, "padding", "3vh"]], template: function ProjBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "div", 6);
    } }, styles: [".squares[_ngcontent-%COMP%] {\r\n    width: 3vw;\r\n    height: 6vh;\r\n    display: inline-block;\r\n    opacity: 0;\r\n}\r\n\r\n.square-normal[_ngcontent-%COMP%] {\r\n    background-color: deepskyblue;\r\n}\r\n\r\n.square-blank[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2otYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoicHJvai1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcXVhcmVzIHtcclxuICAgIHdpZHRoOiAzdnc7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5zcXVhcmUtbm9ybWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG59XHJcblxyXG4uc3F1YXJlLWJsYW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() {
        this.viewportBrand = false;
        this.viewportIcons = false;
        this.animationReset = false;
    }
    ngOnInit() {
        var half = document.getElementById("svg-brand");
        half.style.opacity = "0";
        var iconContainer = document.getElementById("icon-container");
        iconContainer.style.opacity = "0";
        var icons = document.getElementsByClassName("col zoom");
        //Translation Effect
        var translationIcon = Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: icons,
            translateX: [-1500, 0],
            duration: 2000,
            autoplay: false,
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(100)
        });
        //Zoom effect for the icons
        var icons = document.getElementsByClassName("zoom-icon");
        for (let i = 0; i < icons.length; i++) {
            var animationEnter = Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                targets: icons[i],
                scale: [1.0, 1.2],
                duration: 500,
                elasticity: 300,
                autoplay: false
            });
            var animationLeave = Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                targets: icons[i],
                scale: [1.2, 1.0],
                duration: 500,
                elasticity: 300,
                autoplay: false
            });
            icons[i].addEventListener('mouseenter', animationEnter.play);
            icons[i].addEventListener('mouseleave', animationLeave.play);
        }
        //SVG effect
        var terryNguyen = document.getElementsByClassName("terryNguyen");
        var underLine = document.getElementsByClassName("underLine");
        var programmer = document.getElementsByClassName("programmer");
        console.log(underLine);
        var timeline = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
            duration: 1000,
            loop: true,
            autoplay: false,
        });
        timeline.add({
            targets: terryNguyen,
            strokeDashoffset: [animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].setDashoffset, 0],
            easing: 'easeInOutSine',
            delay: function (el, i) { return i * 300; },
            direction: 'alternate',
        }).add({
            targets: programmer,
            strokeDashoffset: [animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].setDashoffset, 0],
            easing: 'easeInOutSine',
            delay: function (el, i) { return i * 300; },
            direction: 'alternate'
        });
        //Scroll effect
        window.onscroll = function (e) {
            const brand = document.getElementById("svg-brand");
            const rectBrand = brand.getBoundingClientRect();
            const icons = document.getElementById("icon-container");
            const rectIcons = brand.getBoundingClientRect();
            const carousel = document.getElementById("carouselExampleDark");
            const rectCarousel = carousel.getBoundingClientRect();
            function boundFunc(rect) {
                return (rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth));
            }
            ;
            const inViewPortBrand = boundFunc(rectBrand);
            const inViewPortIcons = boundFunc(rectIcons);
            const inViewPortCarousel = boundFunc(rectCarousel);
            if (inViewPortBrand && !this.viewportBrand && !this.animationReset) {
                //If the page is scrolled to where the SVG can come into view
                this.viewportBrand = true;
                Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    targets: brand,
                    duration: 2000,
                    opacity: 1
                });
            }
            if (inViewPortIcons && !this.viewportIcons && !this.animationReset) {
                //If the page is scrolled to the bottom where the icons are
                this.viewportIcons = true;
                this.animationReset = true;
                Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    targets: icons,
                    duration: 2000,
                    opacity: 1
                });
                timeline.restart();
                translationIcon.restart();
            }
            if (this.animationReset && inViewPortCarousel) {
                this.viewportIcons = false;
                this.animationReset = false;
                this.viewportBrand = false;
                Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    targets: [icons, brand],
                    duration: 1000,
                    opacity: 0
                });
            }
        };
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 66, vars: 0, consts: [["id", "carouselExampleDark", "data-bs-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], ["data-bs-interval", "10000", 1, "carousel-item", "active"], ["loading", "lazy", "src", "/assets/home-carousel/image1.webp", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], ["data-bs-interval", "2000", 1, "carousel-item"], ["loading", "lazy", "src", "/assets/home-carousel/image2.webp", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["loading", "lazy", "src", "/assets/home-carousel/image3.webp", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "half"], ["id", "svg-brand"], [1, "container-fluid"], [1, "row", 2, "text-align", "center"], [1, "justify-content-center"], ["viewBox", "0 0 500 500", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "bx", "https://boxy-svg.com", "width", "auto", "height", "800"], ["stroke", "#6B6EC1", "stroke-width", "1", "transform", "matrix(-0.371973, 0.489764, -0.489764, -0.371973, 238.506683, 108.973579)", "d", "M 169.863 83.798 L 194.137 83.798 L 199.259 120.871 A 64.481 64.481 0 0 1 213.728 126.865 L 243.564 104.272 L 260.728 121.436 L 238.135 151.272 A 64.481 64.481 0 0 1 244.129 165.741 L 281.202 170.863 L 281.202 195.137 L 244.129 200.259 A 64.481 64.481 0 0 1 238.135 214.728 L 260.728 244.564 L 243.564 261.728 L 213.728 239.135 A 64.481 64.481 0 0 1 199.259 245.129 L 194.137 282.202 L 169.863 282.202 L 164.741 245.129 A 64.481 64.481 0 0 1 150.272 239.135 L 120.436 261.728 L 103.272 244.564 L 125.865 214.728 A 64.481 64.481 0 0 1 119.871 200.259 L 82.798 195.137 L 82.798 170.863 L 119.871 165.741 A 64.481 64.481 0 0 1 125.865 151.272 L 103.272 121.436 L 120.436 104.272 L 150.272 126.865 A 64.481 64.481 0 0 1 164.741 120.871 Z M 182 153.239 A 29.761 29.761 0 0 0 182 212.761 A 29.761 29.761 0 0 0 182 153.239", 0, "bx", "shape", "cog 182 183 29.761 64.481 99.202 0.38 8 1@4cca357a", 2, "fill", "rgb(216, 216, 216)"], ["stroke", "#000000", "stroke-width", "1", "d", "M 107.829 204.793 L 106.869 204.793 L 106.869 154.443 L 87.399 154.443 L 87.399 153.493 L 127.299 153.493 L 127.299 154.443 L 107.829 154.443 L 107.829 204.793 ZM 156.369 203.843 L 187.429 203.843 L 187.429 204.793 L 155.419 204.793 L 155.419 153.493 L 187.429 153.493 L 187.429 154.443 L 156.369 154.443 L 156.369 178.293 L 179.739 178.293 L 179.739 179.243 L 156.369 179.243 L 156.369 203.843 ZM 239.119 154.443 L 218.409 154.443 L 218.409 181.893 L 239.119 181.893 C 243.046 181.893 245.672 180.943 246.999 179.043 C 248.332 177.143 248.999 174.453 248.999 170.973 L 248.999 164.323 C 248.999 161.41 248.189 159.033 246.569 157.193 C 244.956 155.36 242.472 154.443 239.119 154.443 Z M 218.409 182.753 L 218.409 204.793 L 217.459 204.793 L 217.459 153.493 L 239.119 153.493 C 242.786 153.493 245.509 154.523 247.289 156.583 C 249.056 158.643 249.939 161.223 249.939 164.323 L 249.939 170.873 C 249.939 173.793 249.559 176.186 248.799 178.053 C 248.039 179.92 246.522 181.2 244.249 181.893 L 245.289 181.893 C 249.156 181.893 252.039 182.766 253.939 184.513 C 255.839 186.253 256.789 188.77 256.789 192.063 L 256.789 204.793 L 255.839 204.793 L 255.839 192.063 C 255.839 188.963 254.982 186.636 253.269 185.083 C 251.556 183.53 248.896 182.753 245.289 182.753 L 218.409 182.753 ZM 309.704 154.443 L 288.994 154.443 L 288.994 181.893 L 309.704 181.893 C 313.631 181.893 316.257 180.943 317.584 179.043 C 318.917 177.143 319.584 174.453 319.584 170.973 L 319.584 164.323 C 319.584 161.41 318.774 159.033 317.154 157.193 C 315.541 155.36 313.057 154.443 309.704 154.443 Z M 288.994 182.753 L 288.994 204.793 L 288.044 204.793 L 288.044 153.493 L 309.704 153.493 C 313.371 153.493 316.094 154.523 317.874 156.583 C 319.641 158.643 320.524 161.223 320.524 164.323 L 320.524 170.873 C 320.524 173.793 320.144 176.186 319.384 178.053 C 318.624 179.92 317.107 181.2 314.834 181.893 L 315.874 181.893 C 319.741 181.893 322.624 182.766 324.524 184.513 C 326.424 186.253 327.374 188.77 327.374 192.063 L 327.374 204.793 L 326.424 204.793 L 326.424 192.063 C 326.424 188.963 325.567 186.636 323.854 185.083 C 322.141 183.53 319.481 182.753 315.874 182.753 L 288.994 182.753 ZM 373.629 188.543 L 372.969 188.543 L 372.969 204.793 L 372.019 204.793 L 372.019 188.543 L 371.069 188.543 C 369.676 188.543 368.426 188.226 367.319 187.593 C 366.212 186.96 365.152 185.946 364.139 184.553 L 354.919 171.733 C 354.226 170.78 353.812 169.67 353.679 168.403 C 353.559 167.136 353.499 165.81 353.499 164.423 L 353.499 153.493 L 354.439 153.493 L 354.439 164.423 C 354.439 165.75 354.506 167 354.639 168.173 C 354.766 169.346 355.146 170.406 355.779 171.353 L 364.989 184.183 C 365.816 185.443 366.766 186.33 367.839 186.843 C 368.919 187.343 369.996 187.593 371.069 187.593 L 373.629 187.593 C 374.836 187.593 375.929 187.326 376.909 186.793 C 377.889 186.253 378.856 185.383 379.809 184.183 L 389.309 171.353 C 389.942 170.526 390.322 169.496 390.449 168.263 C 390.576 167.03 390.639 165.75 390.639 164.423 L 390.639 153.493 L 391.589 153.493 L 391.589 164.423 C 391.589 165.81 391.542 167.123 391.449 168.363 C 391.349 169.596 390.919 170.72 390.159 171.733 L 380.659 184.553 C 379.652 185.946 378.592 186.96 377.479 187.593 C 376.372 188.226 375.089 188.543 373.629 188.543 Z", "transform", "matrix(1, 0, 0, 1, 0, 0)", 1, "terryNguyen", 2, "fill", "rgb(51, 51, 51)", "white-space", "pre"], ["stroke", "#000000", "stroke-width", "1", "d", "M 49.093 225.135 L 84.053 264.465 L 84.053 224.375 L 85.013 224.375 L 85.013 275.675 L 84.053 275.675 L 84.053 265.885 L 48.143 225.605 C 48.083 225.545 48.006 225.485 47.913 225.425 C 47.82 225.358 47.74 225.325 47.673 225.325 C 47.606 225.325 47.56 225.358 47.533 225.425 C 47.5 225.485 47.483 225.545 47.483 225.605 L 47.483 275.675 L 46.533 275.675 L 46.533 225.425 C 46.533 225.038 46.66 224.752 46.913 224.565 C 47.166 224.372 47.42 224.275 47.673 224.275 C 47.926 224.275 48.15 224.338 48.343 224.465 C 48.53 224.598 48.78 224.822 49.093 225.135 ZM 155.608 275.675 L 136.708 275.675 C 133.221 275.675 130.368 275.455 128.148 275.015 C 125.935 274.568 124.195 273.855 122.928 272.875 C 121.661 271.895 120.791 270.628 120.318 269.075 C 119.845 267.522 119.608 265.638 119.608 263.425 L 119.608 236.815 C 119.608 232.322 120.621 229.125 122.648 227.225 C 124.675 225.325 128.728 224.375 134.808 224.375 L 151.238 224.375 L 151.238 225.325 L 134.808 225.325 C 129.235 225.325 125.465 226.195 123.498 227.935 C 121.538 229.682 120.558 232.642 120.558 236.815 L 120.558 263.425 C 120.558 267.538 121.648 270.452 123.828 272.165 C 126.015 273.872 130.308 274.725 136.708 274.725 L 154.658 274.725 L 154.658 256.585 L 155.608 256.585 L 155.608 275.675 ZM 189.728 263.995 L 189.728 224.375 L 190.678 224.375 L 190.678 263.995 C 190.678 267.535 191.928 270.398 194.428 272.585 C 196.928 274.772 201.695 275.865 208.728 275.865 C 215.761 275.865 220.545 274.772 223.078 272.585 C 225.605 270.398 226.868 267.535 226.868 263.995 L 226.868 224.375 L 227.828 224.375 L 227.828 263.995 C 227.828 267.788 226.495 270.875 223.828 273.255 C 221.175 275.628 216.141 276.815 208.728 276.815 C 201.315 276.815 196.295 275.628 193.668 273.255 C 191.041 270.875 189.728 267.788 189.728 263.995 ZM 280.938 259.425 L 280.278 259.425 L 280.278 275.675 L 279.328 275.675 L 279.328 259.425 L 278.378 259.425 C 276.985 259.425 275.735 259.108 274.628 258.475 C 273.521 257.842 272.461 256.828 271.448 255.435 L 262.228 242.615 C 261.535 241.662 261.121 240.552 260.988 239.285 C 260.868 238.018 260.808 236.692 260.808 235.305 L 260.808 224.375 L 261.748 224.375 L 261.748 235.305 C 261.748 236.632 261.815 237.882 261.948 239.055 C 262.075 240.228 262.455 241.288 263.088 242.235 L 272.298 255.065 C 273.125 256.325 274.075 257.212 275.148 257.725 C 276.228 258.225 277.305 258.475 278.378 258.475 L 280.938 258.475 C 282.145 258.475 283.238 258.208 284.218 257.675 C 285.198 257.135 286.165 256.265 287.118 255.065 L 296.618 242.235 C 297.251 241.408 297.631 240.378 297.758 239.145 C 297.885 237.912 297.948 236.632 297.948 235.305 L 297.948 224.375 L 298.898 224.375 L 298.898 235.305 C 298.898 236.692 298.851 238.005 298.758 239.245 C 298.658 240.478 298.228 241.602 297.468 242.615 L 287.968 255.435 C 286.961 256.828 285.901 257.842 284.788 258.475 C 283.681 259.108 282.398 259.425 280.938 259.425 ZM 333.303 274.725 L 364.363 274.725 L 364.363 275.675 L 332.353 275.675 L 332.353 224.375 L 364.363 224.375 L 364.363 225.325 L 333.303 225.325 L 333.303 249.175 L 356.673 249.175 L 356.673 250.125 L 333.303 250.125 L 333.303 274.725 ZM 398.863 225.135 L 433.823 264.465 L 433.823 224.375 L 434.783 224.375 L 434.783 275.675 L 433.823 275.675 L 433.823 265.885 L 397.913 225.605 C 397.853 225.545 397.776 225.485 397.683 225.425 C 397.59 225.358 397.51 225.325 397.443 225.325 C 397.376 225.325 397.33 225.358 397.303 225.425 C 397.27 225.485 397.253 225.545 397.253 225.605 L 397.253 275.675 L 396.303 275.675 L 396.303 225.425 C 396.303 225.038 396.43 224.752 396.683 224.565 C 396.936 224.372 397.19 224.275 397.443 224.275 C 397.696 224.275 397.92 224.338 398.113 224.465 C 398.3 224.598 398.55 224.822 398.863 225.135 Z", "transform", "matrix(1, 0, 0, 1, 0, 0)", 1, "terryNguyen", 2, "fill", "rgb(51, 51, 51)", "white-space", "pre"], ["stroke", "#000000", "stroke-width", "1", "d", "M 13.205 323.7 L 22.745 323.7 L 22.745 324.13 L 13.205 324.13 C 11.998 324.13 11.038 324.46 10.325 325.12 C 9.605 325.78 9.245 326.61 9.245 327.61 L 9.245 331.14 C 9.245 332.14 9.445 332.843 9.845 333.25 C 10.245 333.65 10.775 333.907 11.435 334.02 L 20.515 335.87 C 21.375 336.043 22.082 336.417 22.635 336.99 C 23.195 337.563 23.475 338.593 23.475 340.08 L 23.475 342.58 C 23.475 343.84 23.045 344.877 22.185 345.69 C 21.325 346.51 20.165 346.92 18.705 346.92 L 7.995 346.92 L 7.995 346.49 L 18.705 346.49 C 20.025 346.49 21.078 346.123 21.865 345.39 C 22.652 344.663 23.045 343.727 23.045 342.58 L 23.045 340.08 C 23.045 338.733 22.808 337.81 22.335 337.31 C 21.862 336.81 21.225 336.473 20.425 336.3 L 11.355 334.45 C 10.608 334.31 9.998 334.017 9.525 333.57 C 9.052 333.123 8.815 332.313 8.815 331.14 L 8.815 327.61 C 8.815 326.463 9.215 325.527 10.015 324.8 C 10.822 324.067 11.885 323.7 13.205 323.7 ZM 54.391 328.99 L 54.391 341.67 C 54.391 343.39 53.775 344.79 52.541 345.87 C 51.308 346.943 49.015 347.48 45.661 347.48 C 42.308 347.48 40.028 346.943 38.821 345.87 C 37.621 344.79 37.021 343.39 37.021 341.67 L 37.021 328.99 C 37.021 327.27 37.621 325.873 38.821 324.8 C 40.028 323.72 42.308 323.18 45.661 323.18 C 49.015 323.18 51.308 323.72 52.541 324.8 C 53.775 325.873 54.391 327.27 54.391 328.99 Z M 37.451 328.99 L 37.451 341.67 C 37.451 343.277 38.025 344.577 39.171 345.57 C 40.318 346.557 42.481 347.05 45.661 347.05 C 48.841 347.05 51.021 346.557 52.201 345.57 C 53.375 344.577 53.961 343.277 53.961 341.67 L 53.961 328.99 C 53.961 327.383 53.375 326.087 52.201 325.1 C 51.021 324.107 48.841 323.61 45.661 323.61 C 42.481 323.61 40.318 324.107 39.171 325.1 C 38.025 326.087 37.451 327.383 37.451 328.99 ZM 69.648 346.92 L 69.218 346.92 L 69.218 323.7 L 82.938 323.7 L 82.938 324.13 L 69.648 324.13 L 69.648 336.43 L 79.458 336.43 L 79.458 336.86 L 69.648 336.86 L 69.648 346.92 ZM 102.459 346.92 L 102.029 346.92 L 102.029 324.13 L 93.209 324.13 L 93.209 323.7 L 111.269 323.7 L 111.269 324.13 L 102.459 324.13 L 102.459 346.92 ZM 133.283 335.95 L 135.223 335.95 C 135.683 335.95 136.056 336.087 136.343 336.36 C 136.63 336.633 136.956 337.173 137.323 337.98 L 140.853 345.89 C 140.966 346.177 141.14 346.347 141.373 346.4 C 141.6 346.46 141.813 346.49 142.013 346.49 L 142.233 346.49 C 142.46 346.49 142.673 346.397 142.873 346.21 C 143.073 346.023 143.19 345.817 143.223 345.59 L 144.293 340.68 C 144.406 340.14 144.47 339.44 144.483 338.58 C 144.503 337.72 144.513 336.973 144.513 336.34 L 144.513 323.7 L 144.943 323.7 L 144.943 336.38 C 144.943 337.013 144.933 337.76 144.913 338.62 C 144.9 339.48 144.836 340.183 144.723 340.73 L 143.653 345.59 C 143.533 346.043 143.353 346.38 143.113 346.6 C 142.866 346.813 142.573 346.92 142.233 346.92 L 141.933 346.92 C 141.673 346.92 141.4 346.87 141.113 346.77 C 140.826 346.67 140.626 346.477 140.513 346.19 L 136.983 338.19 C 136.636 337.417 136.343 336.923 136.103 336.71 C 135.856 336.49 135.563 336.38 135.223 336.38 L 133.283 336.38 C 132.943 336.38 132.65 336.49 132.403 336.71 C 132.163 336.923 131.87 337.417 131.523 338.19 L 127.993 346.19 C 127.88 346.477 127.68 346.67 127.393 346.77 C 127.106 346.87 126.833 346.92 126.573 346.92 L 126.273 346.92 C 125.933 346.92 125.64 346.813 125.393 346.6 C 125.153 346.38 124.973 346.043 124.853 345.59 L 123.783 340.73 C 123.67 340.183 123.606 339.48 123.593 338.62 C 123.573 337.76 123.563 337.013 123.563 336.38 L 123.563 323.7 L 123.993 323.7 L 123.993 336.34 C 123.993 336.973 124.003 337.72 124.023 338.58 C 124.036 339.44 124.1 340.14 124.213 340.68 L 125.283 345.59 C 125.316 345.817 125.433 346.023 125.633 346.21 C 125.833 346.397 126.046 346.49 126.273 346.49 L 126.493 346.49 C 126.693 346.49 126.906 346.46 127.133 346.4 C 127.366 346.347 127.54 346.177 127.653 345.89 L 131.183 337.98 C 131.55 337.173 131.876 336.633 132.163 336.36 C 132.45 336.087 132.823 335.95 133.283 335.95 ZM 159.381 337.76 L 159.381 339.09 L 176.151 339.09 L 176.151 337.76 C 176.151 336.987 176.088 336.27 175.961 335.61 C 175.828 334.95 175.661 334.333 175.461 333.76 L 172.501 326.75 C 172.181 326.003 171.851 325.38 171.511 324.88 C 171.164 324.38 170.591 324.13 169.791 324.13 L 165.571 324.13 C 164.711 324.13 164.111 324.38 163.771 324.88 C 163.424 325.38 163.108 325.99 162.821 326.71 L 160.071 333.76 C 159.871 334.333 159.704 334.95 159.571 335.61 C 159.444 336.27 159.381 336.987 159.381 337.76 Z M 176.581 346.92 L 176.151 346.92 L 176.151 339.52 L 159.381 339.52 L 159.381 346.92 L 158.951 346.92 L 158.951 337.76 C 158.951 336.96 159.014 336.223 159.141 335.55 C 159.274 334.877 159.454 334.223 159.681 333.59 L 162.431 326.54 C 162.751 325.733 163.111 325.06 163.511 324.52 C 163.911 323.973 164.598 323.7 165.571 323.7 L 169.791 323.7 C 170.738 323.7 171.404 323.973 171.791 324.52 C 172.178 325.06 172.541 325.747 172.881 326.58 L 175.851 333.59 C 176.078 334.223 176.258 334.877 176.391 335.55 C 176.518 336.223 176.581 336.96 176.581 337.76 L 176.581 346.92 ZM 200.877 324.13 L 191.497 324.13 L 191.497 336.56 L 200.877 336.56 C 202.65 336.56 203.837 336.13 204.437 335.27 C 205.044 334.41 205.347 333.19 205.347 331.61 L 205.347 328.6 C 205.347 327.28 204.98 326.207 204.247 325.38 C 203.514 324.547 202.39 324.13 200.877 324.13 Z M 191.497 336.94 L 191.497 346.92 L 191.067 346.92 L 191.067 323.7 L 200.877 323.7 C 202.537 323.7 203.767 324.167 204.567 325.1 C 205.374 326.027 205.777 327.193 205.777 328.6 L 205.777 331.57 C 205.777 332.89 205.604 333.973 205.257 334.82 C 204.917 335.66 204.23 336.24 203.197 336.56 L 203.667 336.56 C 205.414 336.56 206.717 336.953 207.577 337.74 C 208.437 338.527 208.867 339.667 208.867 341.16 L 208.867 346.92 L 208.437 346.92 L 208.437 341.16 C 208.437 339.753 208.05 338.7 207.277 338 C 206.504 337.293 205.3 336.94 203.667 336.94 L 191.497 336.94 ZM 223.482 346.49 L 237.552 346.49 L 237.552 346.92 L 223.052 346.92 L 223.052 323.7 L 237.552 323.7 L 237.552 324.13 L 223.482 324.13 L 223.482 334.92 L 234.062 334.92 L 234.062 335.35 L 223.482 335.35 L 223.482 346.49 ZM 261.274 346.49 L 275.344 346.49 L 275.344 346.92 L 260.844 346.92 L 260.844 323.7 L 275.344 323.7 L 275.344 324.13 L 261.274 324.13 L 261.274 334.92 L 271.854 334.92 L 271.854 335.35 L 261.274 335.35 L 261.274 346.49 ZM 289.952 324.04 L 305.782 341.85 L 305.782 323.7 L 306.212 323.7 L 306.212 346.92 L 305.782 346.92 L 305.782 342.49 L 289.522 324.26 C 289.495 324.233 289.462 324.203 289.422 324.17 C 289.375 324.143 289.339 324.13 289.312 324.13 C 289.285 324.13 289.262 324.143 289.242 324.17 C 289.229 324.203 289.222 324.233 289.222 324.26 L 289.222 346.92 L 288.792 346.92 L 288.792 324.17 C 288.792 323.997 288.849 323.87 288.962 323.79 C 289.082 323.703 289.199 323.66 289.312 323.66 C 289.425 323.66 289.525 323.687 289.612 323.74 C 289.699 323.8 289.812 323.9 289.952 324.04 ZM 337.167 346.92 L 328.607 346.92 C 327.033 346.92 325.743 346.82 324.737 346.62 C 323.737 346.42 322.95 346.097 322.377 345.65 C 321.803 345.203 321.407 344.63 321.187 343.93 C 320.973 343.23 320.867 342.377 320.867 341.37 L 320.867 329.33 C 320.867 327.297 321.327 325.85 322.247 324.99 C 323.16 324.13 324.993 323.7 327.747 323.7 L 335.187 323.7 L 335.187 324.13 L 327.747 324.13 C 325.227 324.13 323.52 324.523 322.627 325.31 C 321.74 326.097 321.297 327.437 321.297 329.33 L 321.297 341.37 C 321.297 343.237 321.79 344.557 322.777 345.33 C 323.77 346.103 325.713 346.49 328.607 346.49 L 336.737 346.49 L 336.737 338.28 L 337.167 338.28 L 337.167 346.92 ZM 363.947 346.49 L 363.947 346.92 L 350.277 346.92 L 350.277 346.49 L 356.937 346.49 L 356.937 324.13 L 350.277 324.13 L 350.277 323.7 L 363.947 323.7 L 363.947 324.13 L 357.367 324.13 L 357.367 346.49 L 363.947 346.49 ZM 378.778 324.04 L 394.608 341.85 L 394.608 323.7 L 395.038 323.7 L 395.038 346.92 L 394.608 346.92 L 394.608 342.49 L 378.348 324.26 C 378.321 324.233 378.288 324.203 378.248 324.17 C 378.201 324.143 378.165 324.13 378.138 324.13 C 378.111 324.13 378.088 324.143 378.068 324.17 C 378.055 324.203 378.048 324.233 378.048 324.26 L 378.048 346.92 L 377.618 346.92 L 377.618 324.17 C 377.618 323.997 377.675 323.87 377.788 323.79 C 377.908 323.703 378.025 323.66 378.138 323.66 C 378.251 323.66 378.351 323.687 378.438 323.74 C 378.525 323.8 378.638 323.9 378.778 324.04 ZM 410.593 346.49 L 424.663 346.49 L 424.663 346.92 L 410.163 346.92 L 410.163 323.7 L 424.663 323.7 L 424.663 324.13 L 410.593 324.13 L 410.593 334.92 L 421.173 334.92 L 421.173 335.35 L 410.593 335.35 L 410.593 346.49 ZM 438.711 346.49 L 452.781 346.49 L 452.781 346.92 L 438.281 346.92 L 438.281 323.7 L 452.781 323.7 L 452.781 324.13 L 438.711 324.13 L 438.711 334.92 L 449.291 334.92 L 449.291 335.35 L 438.711 335.35 L 438.711 346.49 ZM 476.169 324.13 L 466.789 324.13 L 466.789 336.56 L 476.169 336.56 C 477.943 336.56 479.129 336.13 479.729 335.27 C 480.336 334.41 480.639 333.19 480.639 331.61 L 480.639 328.6 C 480.639 327.28 480.273 326.207 479.539 325.38 C 478.806 324.547 477.683 324.13 476.169 324.13 Z M 466.789 336.94 L 466.789 346.92 L 466.359 346.92 L 466.359 323.7 L 476.169 323.7 C 477.829 323.7 479.059 324.167 479.859 325.1 C 480.666 326.027 481.069 327.193 481.069 328.6 L 481.069 331.57 C 481.069 332.89 480.896 333.973 480.549 334.82 C 480.209 335.66 479.523 336.24 478.489 336.56 L 478.959 336.56 C 480.706 336.56 482.009 336.953 482.869 337.74 C 483.729 338.527 484.159 339.667 484.159 341.16 L 484.159 346.92 L 483.729 346.92 L 483.729 341.16 C 483.729 339.753 483.343 338.7 482.569 338 C 481.796 337.293 480.593 336.94 478.959 336.94 L 466.789 336.94 Z", "transform", "matrix(0.9484121203422546, 0, 0, 1, 9.939245223999023, 0.6150060296058655)", 1, "programmer", 2, "fill", "rgb(51, 51, 51)", "white-space", "pre"], ["stroke", "#000000", "stroke-width", "1", "x1", "25.83", "y1", "301.626", "x2", "457.565", "y2", "301.011", 1, "underLine", 2, "stroke", "rgb(0, 0, 0)"], ["id", "icon-container", 1, "container-fluid", 2, "text-align", "center"], [1, "row"], [1, "justify-content-center", "d-flex"], [1, "col", "zoom", 2, "padding-bottom", "100px"], [1, "zoom-icon"], ["href", "profile"], ["xmlns", "http://www.w3.org/2000/svg", "width", "auto", "height", "250", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-circle"], ["d", "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], ["fill-rule", "evenodd", "d", "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"], [2, "padding-top", "20px"], ["href", "projects"], ["xmlns", "http://www.w3.org/2000/svg", "width", "auto", "height", "250", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-lightbulb-fill"], ["d", "M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"], ["href", "work"], ["xmlns", "http://www.w3.org/2000/svg", "width", "auto", "height", "250", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-briefcase-fill"], ["d", "M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"], ["d", "M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "welcome to my portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "i'm currently a fourth-year computer science undergraduate student based in california");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "looking to graduate this year and looking to discover more about life as I enter a new chapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "svg", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".rounded-circle[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    width: 400px;\r\n    height: 400px;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    top: 40%;\r\n    bottom: auto;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 30px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color:black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufSJdfQ== */"] });


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBlUNMqinIIUL5M_5AbvY3sQzDErdNp9nE",
        authDomain: "portfolio-2ded5.firebaseapp.com",
        databaseURL: "https://portfolio-2ded5-default-rtdb.firebaseio.com",
        projectId: "portfolio-2ded5",
        storageBucket: "portfolio-2ded5.appspot.com",
        messagingSenderId: "329222340747",
        appId: "1:329222340747:web:dfb6e71877cb84f192d48e",
        measurementId: "G-6ERQE9056Z"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MqEc":
/*!******************************************************!*\
  !*** ./src/app/league-site/league-site.component.ts ***!
  \******************************************************/
/*! exports provided: LeagueSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueSiteComponent", function() { return LeagueSiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a1) { return ["/projects/league-site", a1]; };
function LeagueSiteComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r3 = ctx_r5.index;
    const icon_r2 = ctx_r5.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r4.championNames[i_r3]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", icon_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LeagueSiteComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeagueSiteComponent_ng_container_9_ng_container_1_Template, 4, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 != 0 && i_r3 < ctx_r0.icons.length / 2);
} }
function LeagueSiteComponent_ng_container_35_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r7 = ctx_r9.index;
    const icon_r6 = ctx_r9.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r8.championNames[i_r7 + 1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", icon_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LeagueSiteComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeagueSiteComponent_ng_container_35_ng_container_1_Template, 4, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 > ctx_r1.halfIconLength);
} }
class LeagueSiteComponent {
    constructor(_router) {
        this._router = _router;
    }
    getSearch() {
        var searchBar = document.getElementById('searchBar');
        var keyword = searchBar.value.toLowerCase();
        this._router.navigate(['/projects/league-site/search'], { queryParams: { value: keyword, page: 1 } });
    }
    ngOnInit() {
        const searchBar = document.getElementById('searchBar');
        searchBar.addEventListener("keyup", event => {
            if (event.key == "Enter") {
                this.getSearch();
            }
        });
        fetch('/assets/league_icons/collector.json').then(response => response.json()).then(data => {
            this.icons = data.images;
            this.halfIconLength = Math.floor(this.icons.length / 2);
        });
        fetch('/assets/championNames.txt').then(response => response.text()).then(data => {
            var names = data.split('\n');
            var holderArray = new Array();
            names.forEach((ele) => {
                holderArray.push(ele.trim());
            });
            this.championNames = holderArray;
        });
    }
    ngAfterViewInit() {
        var iconsTop = document.querySelectorAll('.carousel-1 .carousel .carousel-item');
        var iconsBottom = document.querySelectorAll('.carousel-2 .carousel .carousel-item');
        iconsTop.forEach((element) => {
            const minSlide = 10;
            let next = element.nextElementSibling;
            for (var i = 1; i < minSlide; i++) {
                if (!next) {
                    next = iconsTop[0];
                }
                let cloneChild = next.cloneNode(true);
                element.appendChild(cloneChild.firstChild);
                next = next.nextElementSibling;
            }
        });
        iconsBottom.forEach((element) => {
            const minSlide = 10;
            let next = element.nextElementSibling;
            for (var i = 1; i < minSlide; i++) {
                if (!next) {
                    next = iconsBottom[0];
                }
                let cloneChild = next.cloneNode(true);
                element.appendChild(cloneChild.firstChild);
                next = next.nextElementSibling;
            }
        });
    }
}
LeagueSiteComponent.ɵfac = function LeagueSiteComponent_Factory(t) { return new (t || LeagueSiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LeagueSiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeagueSiteComponent, selectors: [["app-league-site"]], decls: 36, vars: 10, consts: [["id", "body-container", 1, "container-fluid"], [1, "container-fluid"], [1, "row", "mx-auto", "my-auto", "justify-content-center"], [1, "carousel-1"], ["data-bs-ride", "carousel", "data-bs-interval", "3000", "data-bs-pause", "false", 1, "carousel", "slide", 2, "padding-top", "40px"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active"], [3, "routerLink"], [1, "d-block", "w-20", "rounded", 2, "margin-right", "20px", 3, "src"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], [2, "padding-top", "10px"], ["id", "searchBar", "type", "text", "placeholder", "Input champion name...", 1, "form-control", "me-2", 2, "width", "70%"], ["id", "searchButton", 1, "btn", "btn-outline-primary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-search"], ["d", "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"], [1, "container-fluid", "carousel-2", 2, "padding-top", "40px"], ["data-bs-ride", "carousel", "data-bs-interval", "3000", "data-bs-pause", "false", 1, "carousel", "slide", 2, "padding-bottom", "40px"], ["alt", "...", 1, "d-block", "w-20", "rounded", 2, "margin-right", "20px", 3, "src"], [4, "ngIf"], [1, "carousel-item"]], template: function LeagueSiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LeagueSiteComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " LEAGUE OF LEGENDS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Optimal Item Builder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Last Patch Updated: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "11.13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeagueSiteComponent_Template_button_click_25_listener() { return ctx.getSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LeagueSiteComponent_ng_container_35_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.championNames[0]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.icons[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.championNames[ctx.halfIconLength + 1]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.icons[ctx.halfIconLength], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    font-size: 7vw;\r\n    text-align: center;\r\n    font-family: \"Rosario\", sans-serif;\r\n    color: #cfaa17;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 2.5vw;\r\n    font-family: \"Rosario\", sans-serif;\r\n    color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: \"Rosario\", sans-serif;\r\n    color: white;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    width: 65vw;\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n#body-container[_ngcontent-%COMP%]{\r\n    background-image: url(/assets/league_banners/summoner_rift.jpg);\r\n    height: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .carousel-inner[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .carousel-inner[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n        display: block;\r\n    }\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%]   .carousel-item.active[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%]   .carousel-item-next[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%]   .carousel-item-prev[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .carousel-inner[_ngcontent-%COMP%]   .carousel-item-end.active[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%]   .carousel-item-next[_ngcontent-%COMP%] {\r\n      transform: translateX(15%);\r\n    }\r\n    \r\n    .carousel-inner[_ngcontent-%COMP%]   .carousel-item-start.active[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%]   .carousel-item-prev[_ngcontent-%COMP%] {\r\n      transform: translateX(-15%);\r\n    }\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%]   .carousel-item-end[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%]   .carousel-item-start[_ngcontent-%COMP%] { \r\n  transform: translateX(0);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWd1ZS1zaXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksK0RBQStEO0lBQy9ELFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBOzs7SUFHSSxhQUFhO0FBQ2pCOztBQUVBLDBCQUEwQjs7QUFDMUI7O0lBRUk7O01BRUUsMEJBQTBCO0lBQzVCOztJQUVBOztNQUVFLDJCQUEyQjtJQUM3QjtBQUNKOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJsZWFndWUtc2l0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJSb3NhcmlvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2NmYWExNztcclxufVxyXG5cclxuaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9zYXJpb1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvc2FyaW9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICB3aWR0aDogNjV2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4jYm9keS1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9sZWFndWVfYmFubmVycy9zdW1tb25lcl9yaWZ0LmpwZyk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxyXG4uY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tbmV4dCxcclxuLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLXByZXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLyogbWVkaXVtIGFuZCB1cCBzY3JlZW5zICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgXHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tZW5kLmFjdGl2ZSxcclxuICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS1uZXh0IHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1JSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS1zdGFydC5hY3RpdmUsIFxyXG4gICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLXByZXYge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS1lbmQsXHJcbi5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS1zdGFydCB7IFxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "MyZq":
/*!********************************************************!*\
  !*** ./src/app/project-card/project-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _proj_banner_proj_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../proj-banner/proj-banner.component */ "7Fmy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProjectCardComponent_div_2_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go to Github Repo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.websites[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectCardComponent_div_2_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go to Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.websites[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectCardComponent_div_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Private Repo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectCardComponent_div_2_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const image_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectCardComponent_div_2_a_16_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectCardComponent_div_2_a_17_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectCardComponent_div_2_ng_template_18_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectCardComponent_div_2_img_22_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.line1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.line2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.line3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.websites[0][0] != "\r")("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.websites.length == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.images);
} }
class ProjectCardComponent {
    constructor() { }
    ngOnInit() {
        fetch('/assets/projects.txt').then(response => response.text()).then(data => {
            var project_data = data.split("\n");
            var holderArray = new Array();
            for (let i = 0; i < project_data.length; i += 8) {
                var objectData = {
                    date: project_data[i],
                    name: project_data[i + 1],
                    line1: project_data[i + 2],
                    line2: project_data[i + 3],
                    line3: project_data[i + 4],
                    images: project_data[i + 5].split(","),
                    websites: project_data[i + 6].split(",")
                };
                console.log(objectData.websites);
                holderArray.push(objectData);
            }
            this.projects = holderArray;
        });
    }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) { return new (t || ProjectCardComponent)(); };
ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["app-project-card"]], decls: 3, vars: 1, consts: [[1, "container-fluid"], [4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-6"], [1, "card-title"], [1, "card-text"], ["target", "_blank", "class", "btn btn-dark", 3, "href", 4, "ngIf", "ngIfElse"], ["class", "btn btn-dark", 3, "href", 4, "ngIf"], ["elseBlock", ""], [1, "container"], ["id", "icon-images", "class", "rounded zoom", 3, "src", 4, "ngFor", "ngForOf"], [2, "padding-top", "1%"], ["target", "_blank", 1, "btn", "btn-dark", 3, "href"], [1, "btn", "btn-dark", 3, "href"], ["href", "#", 1, "btn", "btn-dark", "disabled"], ["id", "icon-images", 1, "rounded", "zoom", 3, "src"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-proj-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectCardComponent_div_2_Template, 24, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_proj_banner_proj_banner_component__WEBPACK_IMPORTED_MODULE_1__["ProjBannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["h5[_ngcontent-%COMP%] {\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 25px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 18px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 16px;\r\n    width: 12vw;\r\n    margin-left: 5%;\r\n}\r\n\r\n#icon-images[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: auto;\r\n    padding-right: 2%;\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InByb2plY3QtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMTJ2dztcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuI2ljb24taW1hZ2Vze1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcclxufVxyXG5cclxuLnpvb20ge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi56b29tOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "RPZ8":
/*!**********************************************************!*\
  !*** ./src/app/league-search/league-search.component.ts ***!
  \**********************************************************/
/*! exports provided: LeagueSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueSearchComponent", function() { return LeagueSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a1) { return ["/projects/league-site", a1]; };
function LeagueSearchComponent_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r4.getChampionUrl(result_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r4.urlReplacement(result_r2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](result_r2.toUpperCase());
} }
function LeagueSearchComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LeagueSearchComponent_ng_container_19_div_1_Template, 8, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r3 < ctx_r0.currentPage * ctx_r0.resultRestriction && i_r3 >= (ctx_r0.currentPage - 1) * ctx_r0.resultRestriction);
} }
const _c1 = function () { return ["/projects/league-site/search"]; };
const _c2 = function (a0, a1) { return { value: a0, page: a1 }; };
function LeagueSearchComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c2, ctx_r1.keyword, i_r6 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r6 + 1);
} }
const _c3 = function () { return ["/projects/league-site"]; };
class LeagueSearchComponent {
    constructor(route, _router) {
        this.route = route;
        this._router = _router;
        this.resultRestriction = 10;
        this.pageLimit = Array.from({ length: this.resultRestriction }, (x, i) => i);
        this._router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    getSearch() {
        var searchBar = document.getElementById('searchBar');
        var keyword = searchBar.value.toLowerCase();
        this._router.navigate(['/projects/league-site/search'], { queryParams: { value: keyword, page: this.currentPage } });
    }
    getChampionUrl(champion) {
        return champion.replace(' ', '-');
    }
    dataFetch(_callBack) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            fetch('/assets/championNames.txt').then(response => response.text()).then(data => {
                var names = Array.from(data.split('\r\n'));
                for (let i = 0; i < names.length; i++) {
                    names[i] = names[i].replace(/[^0-9a-z]/gi, ' ');
                }
                this.searchMatches = Array.from(names.filter(character => {
                    return character.toLowerCase().includes(this.search);
                }));
                const searchResults = document.getElementById('results');
                searchResults.innerHTML = "Search keyword <i>" + this.search + "</i> led to " + this.searchMatches.length.toString() + " result(s).";
                searchResults.style.color = "white";
                this.pages = Array.from({ length: Math.ceil(this.searchMatches.length / this.resultRestriction) }, (x, i) => i);
                _callBack();
            });
        });
    }
    upperCaseWord(str) {
        const firstLetter = str.charAt(0);
        const upper = firstLetter.toUpperCase();
        return upper + str.slice(1);
    }
    urlReplacement(champion) {
        if (champion.split(' ').length == 1) {
            return "assets/league_banners/" + this.upperCaseWord(champion) + "_0.jpg";
        }
        else {
            var arrayForm = champion.split(' ');
            for (let i = 0; i < arrayForm.length; i++) {
                if (arrayForm[i] == "sa" || arrayForm[i] == "zix") {
                    continue;
                }
                else if (arrayForm[i] == "iv") {
                    arrayForm[i] = arrayForm[i].toUpperCase();
                }
                else {
                    arrayForm[i] = this.upperCaseWord(arrayForm[i]);
                }
            }
            champion = arrayForm.join().replace(',', "");
            return "assets/league_banners/" + champion + "_0.jpg";
        }
    }
    resizeBack() {
        if (window.innerWidth < 550) {
            let backSVG = document.getElementById("back-svg");
            backSVG.setAttribute("width", "30");
            backSVG.setAttribute("height", "30");
            let backButton = document.getElementById("back-button");
            backButton.style.top = "60px";
            backButton.style.left = "5px";
        }
        else {
            let backSVG = document.getElementById('back-svg');
            backSVG.setAttribute("width", "50");
            backSVG.setAttribute("height", "50");
            let backButton = document.getElementById("back-button");
            backButton.style.top = "75px";
            backButton.style.left = "20px";
        }
    }
    ngOnInit() {
        var searchBar = document.getElementById('searchBar');
        this.keyword = searchBar.value.toLowerCase();
        this.dataFetch(() => {
            this.loaded = false;
        });
        this.route.queryParams.subscribe(params => {
            this.search = params.value;
            this.currentPage = parseInt(params.page);
        });
    }
    ngAfterViewInit() {
        this.resizeBack();
        window.addEventListener("resize", this.resizeBack);
    }
    ngAfterViewChecked() {
        var cards = document.getElementsByClassName("card");
        if (cards.length > 0 && !this.loaded) {
            this.loaded = true;
            var pagination = document.getElementsByClassName("number");
            pagination.item(this.currentPage - 1).setAttribute("aria-current", "page");
            pagination.item(this.currentPage - 1).classList.add("active");
            var skips = document.getElementsByClassName("skip");
            if (this.currentPage != 1) {
                skips.item(0).setAttribute("aria-disabled", "false");
                skips.item(0).classList.remove("disabled");
            }
            if (this.currentPage == pagination.length) {
                skips.item(1).setAttribute("aria-disabled", "true");
                skips.item(1).classList.add("disabled");
            }
            animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cards);
            Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
                targets: cards,
                duration: 500,
                delay: function (el, i, l) {
                    return i * 500;
                },
                translateX: [-3000, 0],
                easing: 'easeInOutSine'
            });
            for (let i = 0; i < cards.length; i++) {
                let card = cards[i].getElementsByClassName("card-img")[0];
                cards[i].addEventListener("mouseenter", () => {
                    animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"].remove(card);
                    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
                        targets: card, duration: 400, scale: 1.2, easing: 'easeInOutSine',
                    });
                });
                cards[i].addEventListener("mouseleave", () => {
                    animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"].remove(card);
                    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
                        targets: card, duration: 200, scale: 1.0, easing: 'easeInOutSine'
                    });
                });
            }
        }
    }
}
LeagueSearchComponent.ɵfac = function LeagueSearchComponent_Factory(t) { return new (t || LeagueSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LeagueSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LeagueSearchComponent, selectors: [["app-league-search"]], decls: 31, vars: 17, consts: [["id", "body-container", 1, "container-fluid"], [1, "row"], [1, "d-flex", "justify-content-center", 2, "text-align", "center"], ["id", "back-button", 1, "container-fluid", "no-filter"], ["id", "back-link", 2, "color", "white", 3, "routerLink"], ["id", "back-svg", "xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], ["id", "back-hr", 2, "opacity", "0", "stroke-width", "3"], [1, "d-flex", "justify-content-center"], ["id", "searchBar", "type", "text", "placeholder", "Input champion name...", 1, "form-control", "me-2", 2, "width", "70%", 3, "value", "keyup.enter"], ["id", "searchButton", 1, "btn", "btn-outline-primary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-search"], ["d", "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"], ["id", "results"], [2, "margin", "50px"], [1, "container"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], [1, "page-item", "disabled", "skip"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link", 3, "routerLink", "queryParams"], ["class", "page-item number", "aria-current", "false", 4, "ngFor", "ngForOf"], [1, "page-item", "skip"], [1, "page-link", 3, "routerLink", "queryParams"], [2, "padding-bottom", "30px"], [4, "ngIf"], [3, "routerLink"], [1, "card", "bg-dark", "text-white"], ["loading", "lazy", "alt", "...", 1, "card-img", 3, "src"], [1, "card-img-overlay"], [1, "card-text", 2, "padding-left", "10px"], [2, "padding", "30px"], ["aria-current", "false", 1, "page-item", "number"]], template: function LeagueSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function LeagueSearchComponent_Template_input_keyup_enter_11_listener() { return ctx.getSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LeagueSearchComponent_Template_button_click_12_listener() { return ctx.getSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LeagueSearchComponent_ng_container_19_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, LeagueSearchComponent_li_26_Template, 3, 7, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.searchMatches);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](10, _c2, ctx.keyword, ctx.currentPage - 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c2, ctx.keyword, ctx.currentPage + 1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#body-container[_ngcontent-%COMP%] {\r\n    background-image: url(/assets/league_banners/summoner_rift.jpg);\r\n    height: 100%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 40vh;\r\n    object-fit: cover;\r\n    object-position: 70% 30%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    letter-spacing: 30px;\r\n    color: white;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    letter-spacing: 15px;\r\n    font-size: 52px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    color: white;\r\n    padding-top: 35px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    letter-spacing: 2px;\r\n}\r\n\r\n#back-button[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    top: 75px;\r\n    bottom: 0px;\r\n    left: 20px;    \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWd1ZS1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtEQUErRDtJQUMvRCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVOztBQUVkIiwiZmlsZSI6ImxlYWd1ZS1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib2R5LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9sZWFndWVfYmFubmVycy9zdW1tb25lcl9yaWZ0LmpwZyk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiA3MCUgMzAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5wIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbiNiYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogNzVweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMjBweDsgICAgXHJcblxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _profile_banner_profile_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile-banner/profile-banner.component */ "ri2Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_67_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_div_67_img_6_Template, 1, 1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r3.images)("ngForTrackBy", ctx_r2.trackImage);
} }
class ProfileComponent {
    constructor() {
        this.animationCheck = false;
        this.windowCheck = function () {
            this.innerWidth = window.innerWidth;
            var prof_desc = document.getElementById("prof-desc");
            if (window.innerWidth <= 1500) {
                prof_desc.className = "col";
            }
            else {
                prof_desc.className = "col-8";
            }
        };
    }
    ngOnInit() {
        //Data fetch for the icon pictures
        fetch('/assets/profile.txt').then(response => response.text()).then(data => {
            var newData = data.split("\n");
            var holderArray = new Array();
            for (let i = 0; i < newData.length; i += 3) {
                var objectData = {
                    title: newData[i],
                    images: newData[i + 1].split(',')
                };
                holderArray.push(objectData);
            }
            this.data = holderArray;
            this.windowCheck();
        });
        //profile Banner Animation
        Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: document.getElementById("profile-banner"),
            loop: true,
            scale: [
                { value: .1, easing: 'easeOutSine', duration: 500 },
                { value: 1, easing: 'easeInOutQuad', duration: 1200 }
            ],
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(200, { grid: [17, 10], from: 'center' })
        });
        //Icons Animation
        var icons = document.getElementById("icon-translate");
        var resetAnim = Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: icons,
            duration: 100,
            opacity: 0,
            easing: 'easeInOutSine',
            autoplay: false
        });
        var startAnim = Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: icons,
            duration: 500,
            opacity: 1,
            easing: 'easeInOutSine',
            translateX: [-2000, 0]
        });
        icons.style.opacity = "0";
        window.onscroll = function (e) {
            const half = document.getElementById("half");
            const profileBanner = document.getElementById("profile-banner");
            const end = document.getElementById("end");
            const rectIcons = half.getBoundingClientRect();
            const rectProfile = profileBanner.getBoundingClientRect();
            const rectEnd = end.getBoundingClientRect();
            function funcBound(rect) {
                return (rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth));
            }
            if (funcBound(rectIcons) && !this.animationCheck) {
                this.animationCheck = true;
                startAnim.restart();
            }
            if (funcBound(rectProfile) && this.animationCheck) {
                //user has scrolled to the very top for the animation reset
                this.animationCheck = false;
                console.log("resetting the animation");
                resetAnim.restart();
            }
        };
    }
    onResize(event) {
        this.windowCheck();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], hostBindings: function ProfileComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ProfileComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 69, vars: 3, consts: [[1, "container-fluid"], ["id", "profile-banner"], [1, "row"], ["class", "col-4 d-flex justify-content-center", 4, "ngIf"], ["id", "prof-desc", 1, "col-8"], [1, "container-fluid", 2, "text-align", "center"], [1, "d-flex", "justify-content-center"], ["class", "row", 4, "ngIf"], [1, "justify-content-center", "d-flex"], [1, "col-3", "zoom"], ["href", "https://github.com/terryhn1", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "width", "75", "height", "75", "fill", "black", "viewBox", "0 0 16 16", 1, "bi", "bi-github"], ["d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"], [2, "padding-left", "5px", "padding-right", "5px"], ["href", "https://www.linkedin.com/in/terryhoangnguyen/", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "width", "75", "height", "75", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-linkedin"], ["d", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"], ["id", "half", 2, "padding", "2%"], ["id", "icon-translate"], [4, "ngFor", "ngForOf"], ["id", "end"], [1, "col-4", "d-flex", "justify-content-center"], ["id", "profile-pic", "src", "\\assets\\prof-pic.webp", "alt", "profile picture", 1, "rounded-circle", "zoom"], ["id", "profile-pic", "src", "\\assets\\prof-pic.JPG", 1, "rounded-circle", "zoom"], [1, "d-flex", "justify-content-center", 2, "padding-bottom", "1%", "text-align", "center"], [1, "container"], [1, "row", "d-flex", "justify-content-center", "icon-t", 2, "padding-bottom", "3%"], ["id", "languages", "class", "zoom", 3, "src", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "languages", 1, "zoom", 3, "src"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-profile-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_div_10_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "4 years experience in programming with an emphasis on Python, but very open to other languages. Looking for opportunities in Software Development/ Game Development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Student Email: terryhn1@uci.edu | Work Email: terryhoangnguyen@gmail.com | Linkedin: Check link below");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "University of California - Irvine | Computer Science Major | Specialization in AI | Current GPA: 3.797 | Expected Grad: Spring 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Coursework");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Data Structures, Machine Learning, Algorithm Graph Models, Computer Vision, Information Retrieval, Data Management, Computational Geometry, Human Computer Interaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Hobbies and Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Volleyball, Basketball, Running, Photography, Hiking, Cooking, Music, Strategy Video Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ProfileComponent_div_67_Template, 7, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.innerWidth >= 1500);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.innerWidth < 1500);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_profile_banner_profile_banner_component__WEBPACK_IMPORTED_MODULE_2__["ProfileBannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    padding-top: 7%;\r\n    padding-bottom: 7%;\r\n    margin-bottom: 2%;\r\n    margin-top:2%;\r\n    justify-content: center;\r\n    text-align: center;\r\n    color: white;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 50px;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 30px;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 20px;\r\n}\r\n#projects[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n#languages[_ngcontent-%COMP%] {\r\n    width: 140px;\r\n    height: auto;\r\n    padding-top: 2%;\r\n}\r\n.image-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap:wrap;\r\n    align-content: space-evenly;\r\n}\r\n#skills[_ngcontent-%COMP%] { \r\n    justify-content: center;\r\n}\r\n.rounded-circle[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    width: 400px;\r\n    height: 400px;\r\n}\r\n.zoom[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s;\r\n}\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.15);\r\n}\r\n.gradientBlack[_ngcontent-%COMP%] {\r\n    background: rgb(186,186,186);\r\n    background: linear-gradient(90deg, rgba(186,186,186,1) 0%, rgba(10,10,40,1) 56%, rgba(0,0,0,1) 100%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0dBQW9HO0FBQ3hHIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgbWFyZ2luLXRvcDoyJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiNwcm9qZWN0cyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsYW5ndWFnZXMge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4jc2tpbGxzIHsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi56b29tIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG59XHJcblxyXG4uem9vbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG59XHJcblxyXG4uZ3JhZGllbnRCbGFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg2LDE4NiwxODYpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE4NiwxODYsMTg2LDEpIDAlLCByZ2JhKDEwLDEwLDQwLDEpIDU2JSwgcmdiYSgwLDAsMCwxKSAxMDAlKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "WoCX":
/*!**************************************************************!*\
  !*** ./src/app/league-champion/league-champion.component.ts ***!
  \**************************************************************/
/*! exports provided: LeagueChampionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueChampionComponent", function() { return LeagueChampionComponent; });
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class LeagueChampionComponent {
    constructor(db) {
        var href = document.location.href.split('/');
        this.champion = href[href.length - 1];
        const firstLetter = this.champion.charAt(0);
        const upper = firstLetter.toUpperCase();
        var firstNameInstance = (upper + this.champion.slice(1)).split('-');
        if (firstNameInstance.length == 1) {
            this.champion = firstNameInstance.join('');
        }
        else {
            let firstLetter = firstNameInstance[1].charAt(0);
            let upper = firstLetter.toUpperCase();
            var secondName = upper + firstNameInstance[1].slice(1);
            this.champion = firstNameInstance[0] + secondName;
        }
        this.data = db.object(this.champion).valueChanges();
        this.items = db.object("Items").valueChanges();
    }
    goBack() {
        window.history.back();
    }
    itemSRC(item) {
        return "http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/" + item.toString() + ".png";
    }
    ngOnInit() {
        this.championBanner = "/assets/league_banners/" + this.champion + "_0.jpg";
        this.data.subscribe(res => {
            let physical = document.getElementById('physical');
            let ability = document.getElementById('ability');
            let defense = document.getElementById('defense');
            physical.style.width = JSON.stringify(res.physical * 10) + "%";
            ability.style.width = JSON.stringify(res.magic * 10) + "%";
            defense.style.width = JSON.stringify(res.defense * 10) + "%";
        });
        var backHR = document.getElementById("back-hr");
        var backLink = document.getElementById("back-link");
        console.log("Champion page arrived");
        let animation = function (duration, opacity) {
            return Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                targets: backHR,
                duration: duration,
                opacity: opacity,
                easing: 'easeInOutSine',
                autoplay: false
            });
        };
        backLink.addEventListener("mouseenter", () => {
            animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].remove(backHR);
            animation(400, 1).play();
        });
        backLink.addEventListener("mouseleave", () => {
            animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].remove(backHR);
            animation(200, 0).play();
        });
    }
    ngAfterViewInit() {
        this.items.subscribe(res => {
            var itemNames = document.getElementsByClassName("item-name");
            var itemImages = document.getElementsByClassName("item-image");
            for (let i = 0; i < itemNames.length; i++) {
                let name = itemNames.item(i).innerHTML;
                itemImages.item(i).setAttribute("src", this.itemSRC(res[name]));
                itemImages.item(i).style.width = "100px";
                itemImages.item(i).style.height = "90px";
                itemImages.item(i).style.marginBottom = "10px";
            }
        });
    }
    ngOnDestroy() {
        this.items.subscribe().unsubscribe();
        this.data.subscribe().unsubscribe();
    }
}
LeagueChampionComponent.ɵfac = function LeagueChampionComponent_Factory(t) { return new (t || LeagueChampionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
LeagueChampionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeagueChampionComponent, selectors: [["app-league-champion"]], decls: 160, vars: 38, consts: [["id", "page", 1, "container-fluid", "background-filter"], ["id", "banner", 1, "container-lg", "no-filter"], [1, "d-flex", "justify-content-center"], ["loading", "lazy", 1, "rounded", 3, "src"], ["id", "back-button", 1, "container-fluid", "no-filter"], ["id", "back-link", "type", "button", 2, "color", "white", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], ["id", "back-hr", 2, "opacity", "0", "stroke-width", "3"], ["id", "title", 1, "container-lg", "no-filter", 2, "color", "white"], ["id", "content", 1, "container-lg", "no-filter"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "general-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "items-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "matchup-tab", "data-bs-toggle", "tab", "data-bs-target", "#contact", "type", "button", "role", "tab", "aria-controls", "contact", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "general-tab", 1, "tab-pane", "fade", "show", "active"], [1, "container-md"], [1, "row"], [2, "margin-top", "15px"], [1, "col-6"], [1, "progress"], ["id", "physical", "role", "progressbar", "aria-valuenow", "5", "aria-valuemin", "0", "aria-valuemax", "10", 1, "progress-bar"], [2, "margin-top", "10px"], ["id", "ability", "role", "progressbar", "aria-valuenow", "5", "aria-valuemin", "0", "aria-valuemax", "10", 1, "progress-bar"], ["id", "defense", "role", "progressbar", "aria-valuenow", "5", "aria-valuemin", "0", "aria-valuemax", "10", 1, "progress-bar"], [1, "row", 2, "text-align", "center"], [1, "col-4"], [2, "margin-top", "20px", "font-size", "11px"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "items-tab", 1, "tab-pane", "fade"], [2, "margin-top", "10px", "margin-bottom", "20px"], [1, "container"], [1, "item-image"], [1, "item-name"], ["id", "contact", "role", "tabpanel", "aria-labelledby", "matchup-tab", 1, "tab-pane", "fade"], ["type", "search", "placeholder", "Input champion name...", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-outline-primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-search"], ["d", "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"], ["id", "spacer", 2, "padding-bottom", "10px"]], template: function LeagueChampionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueChampionComponent_Template_a_click_5_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "General Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Item Build Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Matchups");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "CAPABILITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Physical Damage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Ability Power");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Defense");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "TOTAL WINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "TOTAL GAMES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "WIN RATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "*Data is determinant on Master, Grandmaster, and Challenger divisions. This data does not represent the whole community. Data is collected from Riot Games API'S Data Dragon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " BEST IN SLOT GENERAL BUILD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](109, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](129, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](138, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](147, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "*If any item is listed as N/A, there is not enough data to compute. Therefore, this champion is not often played or/and has too low a winrate to be considered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "SELECT A MATCH UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        let tmp_10_0 = null;
        let tmp_11_0 = null;
        let tmp_12_0 = null;
        let tmp_13_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.championBanner, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.championBanner, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.champion.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 16, ctx.data)) == null ? null : tmp_3_0.role1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 18, ctx.data)) == null ? null : tmp_4_0.role2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 20, ctx.data)) == null ? null : tmp_5_0.totalWins, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 22, ctx.data)) == null ? null : tmp_6_0.totalGames, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 24, ctx.data)) == null ? null : tmp_7_0.winRatio, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 26, ctx.data)) == null ? null : tmp_8_0.item1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](109, 28, ctx.data)) == null ? null : tmp_9_0.item2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 30, ctx.data)) == null ? null : tmp_10_0.item3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](129, 32, ctx.data)) == null ? null : tmp_11_0.item4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](138, 34, ctx.data)) == null ? null : tmp_12_0.item5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](147, 36, ctx.data)) == null ? null : tmp_13_0.item6);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["#page[_ngcontent-%COMP%] {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n    font-family: 'Rosario', sans-serif;\r\n    letter-spacing: 15px;\r\n}\r\n\r\n#content[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    border-radius: 25px;\r\n}\r\n\r\n#back-button[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    top: 40px;\r\n    bottom: 0px;\r\n    left: 20px;    \r\n\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n     size: 36px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: \"Rosario\", sans-serif;\r\n    letter-spacing: 5px;\r\n}\r\n\r\n.background-filter[_ngcontent-%COMP%]::after {\r\n    -webkit-backdrop-filter: blur(0.3rem);\r\n    backdrop-filter: blur(0.3rem);\r\n\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width:100%;\r\n    height: 100%;\r\n    top:0;\r\n}\r\n\r\n.background-filter[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.no-filter[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.container-lg[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.tab-pane[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 100%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWd1ZS1jaGFtcGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0tBQ0ssVUFBVTtBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLHFDQUFxQztJQUNyQyw2QkFBNkI7O0lBRTdCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osS0FBSztBQUNUOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWYiLCJmaWxlIjoibGVhZ3VlLWNoYW1waW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9zYXJpbycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4jYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDIwcHg7ICAgIFxyXG5cclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgICBzaXplOiAzNnB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTogXCJSb3NhcmlvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG59XHJcblxyXG5cclxuLmJhY2tncm91bmQtZmlsdGVyOjphZnRlciB7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjNyZW0pO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuM3JlbSk7XHJcblxyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDowO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1maWx0ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubm8tZmlsdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXItbGd7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnRhYi1wYW5lIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-card/project-card.component */ "MyZq");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _work_profile_work_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./work-profile/work-profile.component */ "mY7H");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _profile_banner_profile_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile-banner/profile-banner.component */ "ri2Y");
/* harmony import */ var _proj_banner_proj_banner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./proj-banner/proj-banner.component */ "7Fmy");
/* harmony import */ var _work_banner_work_banner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./work-banner/work-banner.component */ "pwgQ");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _league_site_league_site_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./league-site/league-site.component */ "MqEc");
/* harmony import */ var _league_champion_league_champion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./league-champion/league-champion.component */ "WoCX");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _league_search_league_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./league-search/league-search.component */ "RPZ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__["ProjectCardComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _work_profile_work_profile_component__WEBPACK_IMPORTED_MODULE_9__["WorkProfileComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _profile_banner_profile_banner_component__WEBPACK_IMPORTED_MODULE_12__["ProfileBannerComponent"],
        _proj_banner_proj_banner_component__WEBPACK_IMPORTED_MODULE_13__["ProjBannerComponent"],
        _work_banner_work_banner_component__WEBPACK_IMPORTED_MODULE_14__["WorkBannerComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
        _league_site_league_site_component__WEBPACK_IMPORTED_MODULE_16__["LeagueSiteComponent"],
        _league_champion_league_champion_component__WEBPACK_IMPORTED_MODULE_17__["LeagueChampionComponent"],
        _league_search_league_search_component__WEBPACK_IMPORTED_MODULE_21__["LeagueSearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"]] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "navbar", "bottom", "navbar-dark", "navbar-expand-lg", 2, "padding", "1%", "background-color", "black", "font-family", "'Asap', sans-serif"], [1, "container-fluid"], [1, "navbar-text"], [1, "navbar-nav"], ["href", "https://github.com/terryhn1", "target", "_blank", 1, "nav-link", "justify-content-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-github"], ["d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"], ["href", "https://www.linkedin.com/in/terryhoangnguyen/", "target", "_blank", 1, "nav-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-linkedin"], ["d", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Website powered by Angular JS & Bootstrap 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 17, vars: 0, consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", 2, "font-family", "'Asap', sans-serif", "background-color", "black"], [1, "container-fluid"], ["href", "home", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "profile", 1, "nav-link"], ["href", "projects", 1, "nav-link"], ["href", "work", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Terry Hoang Nguyen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], decls: 2, vars: 0, template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "card works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "mY7H":
/*!********************************************************!*\
  !*** ./src/app/work-profile/work-profile.component.ts ***!
  \********************************************************/
/*! exports provided: WorkProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkProfileComponent", function() { return WorkProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _work_banner_work_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../work-banner/work-banner.component */ "pwgQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function WorkProfileComponent_div_4_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r6);
} }
function WorkProfileComponent_div_4_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go to website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", data_r1.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WorkProfileComponent_div_4_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkProfileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WorkProfileComponent_div_4_p_12_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WorkProfileComponent_div_4_a_13_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WorkProfileComponent_div_4_ng_template_14_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.banner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", data_r1.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r1.website.length > 1)("ngIfElse", _r4);
} }
class WorkProfileComponent {
    constructor() {
    }
    ngOnInit() {
        fetch('/assets/work.txt').then(response => response.text()).then(data => {
            var work_data = data.split("\n");
            var holderArray = new Array();
            for (let i = 0; i < work_data.length; i += 10) {
                var objectData = {
                    date: work_data[i],
                    company_name: work_data[i + 1],
                    location: work_data[i + 2],
                    titles: work_data[i + 3],
                    info: [work_data[i + 4], work_data[i + 5], work_data[i + 6]],
                    website: work_data[i + 7],
                    banner: work_data[i + 8]
                };
                holderArray.push(objectData);
            }
            this.work = holderArray;
        });
    }
}
WorkProfileComponent.ɵfac = function WorkProfileComponent_Factory(t) { return new (t || WorkProfileComponent)(); };
WorkProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkProfileComponent, selectors: [["app-work-profile"]], decls: 5, vars: 1, consts: [[1, "container-fluid"], [1, "container-fluid", "d-flex", "justify-content-center"], [1, "row"], ["class", "card mb-3 col-6", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "col-6"], ["id", "card-picture", 1, "card-img-top", "zoom", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], ["class", "card-text", 4, "ngFor", "ngForOf"], ["target", "_blank", "class", "btn btn-dark d-grid gap-2", "role", "button", "data-bs-toggle", "button", 3, "href", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "card-text"], ["target", "_blank", "role", "button", "data-bs-toggle", "button", 1, "btn", "btn-dark", "d-grid", "gap-2", 3, "href"], ["role", "button", "data-bs-toggle", "button", 1, "btn", "btn-dark", "d-grid", "gap-2", "disabled"]], template: function WorkProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-work-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkProfileComponent_div_4_Template, 16, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.work);
    } }, directives: [_work_banner_work_banner_component__WEBPACK_IMPORTED_MODULE_1__["WorkBannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["h3[_ngcontent-%COMP%] {\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 25px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 17px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    font-family: 'Dosis', sans-serif;\r\n    font-size: 16px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.02);\r\n}\r\n\r\n.gradientBlack[_ngcontent-%COMP%]{\r\n    background: rgb(186,186,186);\r\n    background: linear-gradient(90deg, rgba(186,186,186,1) 0%, rgba(10,10,40,1) 56%, rgba(0,0,0,1) 100%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG9HQUFvRztBQUN4RyIsImZpbGUiOiJ3b3JrLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uem9vbSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxufVxyXG5cclxuLnpvb206aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG4uZ3JhZGllbnRCbGFja3tcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODYsMTg2LDE4Nik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTg2LDE4NiwxODYsMSkgMCUsIHJnYmEoMTAsMTAsNDAsMSkgNTYlLCByZ2JhKDAsMCwwLDEpIDEwMCUpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
        var notFound = document.getElementById("not-found");
        Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: notFound,
            strokedDashoffset: [animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function (el, i) { return i * 100; },
            direction: 'alternate',
            loop: true
        });
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 7, vars: 0, consts: [["viewBox", "0 0 500 500", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "bx", "https://boxy-svg.com", "width", "auto", "height", "1000"], ["id", "404", "stroke", "#ff0000", "stroke-width", "2", "d", "M 118.395 111.081 L 116.185 111.081 L 116.185 105.851 L 106.465 105.851 L 105.965 104.641 L 113.715 90.501 L 116.015 90.501 L 108.535 103.941 L 116.185 103.941 L 116.185 98.451 L 116.655 96.551 L 118.395 96.551 L 118.395 103.941 L 121.225 103.941 L 121.225 105.481 L 118.395 105.851 L 118.395 111.081 ZM 133.155 111.171 L 129.145 111.171 C 128.158 111.171 127.278 110.998 126.505 110.651 C 125.725 110.304 125.118 109.771 124.685 109.051 C 124.245 108.331 124.025 107.404 124.025 106.271 L 124.025 95.351 C 124.025 94.244 124.245 93.324 124.685 92.591 C 125.118 91.851 125.725 91.291 126.505 90.911 C 127.278 90.524 128.158 90.331 129.145 90.331 L 133.155 90.331 C 134.308 90.331 135.248 90.541 135.975 90.961 C 136.708 91.381 137.245 91.964 137.585 92.711 C 137.931 93.458 138.105 94.338 138.105 95.351 L 138.105 106.271 C 138.105 107.964 137.651 109.204 136.745 109.991 C 135.845 110.778 134.648 111.171 133.155 111.171 Z M 129.565 109.181 L 132.645 109.181 C 133.785 109.181 134.608 108.894 135.115 108.321 C 135.615 107.754 135.865 106.978 135.865 105.991 L 135.865 95.511 C 135.865 94.451 135.598 93.658 135.065 93.131 C 134.538 92.611 133.761 92.351 132.735 92.351 L 129.515 92.351 C 128.501 92.351 127.708 92.628 127.135 93.181 C 126.555 93.728 126.265 94.504 126.265 95.511 L 126.265 105.991 C 126.265 107.051 126.558 107.848 127.145 108.381 C 127.731 108.914 128.538 109.181 129.565 109.181 ZM 153.395 111.081 L 151.185 111.081 L 151.185 105.851 L 141.465 105.851 L 140.965 104.641 L 148.715 90.501 L 151.015 90.501 L 143.535 103.941 L 151.185 103.941 L 151.185 98.451 L 151.655 96.551 L 153.395 96.551 L 153.395 103.941 L 156.225 103.941 L 156.225 105.481 L 153.395 105.851 L 153.395 111.081 Z", "transform", "matrix(6.539731979370117, 0, 0, 8.63061237335205, -611.2822265625, -686.8975219726562)", 2, "fill", "rgb(255, 70, 70)", "white-space", "pre"], ["id", "not-found", "stroke", "#000000", "strokewidth", "2", "d", "M 99.223 329.489 L 96.133 329.489 L 96.133 301.079 L 107.443 301.079 C 108.27 301.079 109.113 301.189 109.973 301.409 C 110.833 301.629 111.636 302.052 112.383 302.679 C 113.13 303.312 113.73 304.226 114.183 305.419 C 114.63 306.619 114.853 308.196 114.853 310.149 C 114.853 312.156 114.616 313.772 114.143 314.999 C 113.67 316.219 113.053 317.156 112.293 317.809 C 111.533 318.469 110.716 318.916 109.843 319.149 C 108.963 319.376 108.113 319.489 107.293 319.489 C 106.906 319.489 106.34 319.476 105.593 319.449 C 104.846 319.429 104.056 319.399 103.223 319.359 C 102.383 319.319 101.603 319.272 100.883 319.219 C 100.163 319.172 99.61 319.136 99.223 319.109 L 99.223 329.489 Z M 99.223 303.859 L 99.223 316.749 L 106.903 316.749 C 107.803 316.749 108.626 316.556 109.373 316.169 C 110.12 315.782 110.706 315.116 111.133 314.169 C 111.56 313.216 111.773 311.889 111.773 310.189 C 111.773 308.516 111.56 307.222 111.133 306.309 C 110.706 305.396 110.146 304.759 109.453 304.399 C 108.76 304.039 108 303.859 107.173 303.859 L 99.223 303.859 ZM 118.829 329.489 L 115.659 329.489 L 125.389 301.079 L 129.329 301.079 L 139.049 329.489 L 135.889 329.489 L 133.029 321.379 L 121.609 321.379 L 118.829 329.489 Z M 127.359 303.779 L 122.379 318.599 L 132.259 318.599 L 127.359 303.779 ZM 151.363 329.679 C 149.563 329.706 148.069 329.429 146.883 328.849 C 145.696 328.269 144.769 327.389 144.103 326.209 C 143.436 325.022 142.959 323.516 142.673 321.689 C 142.393 319.862 142.253 317.702 142.253 315.209 C 142.253 312.816 142.399 310.719 142.693 308.919 C 142.993 307.112 143.503 305.612 144.223 304.419 C 144.943 303.219 145.926 302.326 147.173 301.739 C 148.419 301.146 149.983 300.849 151.863 300.849 C 152.863 300.849 153.906 300.886 154.993 300.959 C 156.073 301.039 157.126 301.156 158.153 301.309 C 159.179 301.462 160.133 301.642 161.013 301.849 L 161.013 304.169 C 160.499 304.089 159.779 304.006 158.853 303.919 C 157.926 303.826 156.889 303.756 155.743 303.709 C 154.596 303.656 153.456 303.629 152.323 303.629 C 150.469 303.629 149.036 304.009 148.023 304.769 C 147.003 305.529 146.296 306.762 145.903 308.469 C 145.503 310.182 145.303 312.442 145.303 315.249 C 145.303 317.509 145.409 319.386 145.623 320.879 C 145.843 322.372 146.213 323.556 146.733 324.429 C 147.246 325.309 147.946 325.936 148.833 326.309 C 149.719 326.682 150.846 326.869 152.213 326.869 C 153.419 326.869 154.666 326.712 155.953 326.399 C 157.239 326.092 158.333 325.759 159.233 325.399 L 159.233 317.019 L 152.363 317.019 L 152.363 314.739 C 152.849 314.666 153.443 314.602 154.143 314.549 C 154.836 314.496 155.576 314.452 156.363 314.419 C 157.143 314.379 157.933 314.359 158.733 314.359 C 159.399 314.359 160.029 314.366 160.623 314.379 C 161.216 314.392 161.733 314.436 162.173 314.509 L 162.173 329.489 L 159.933 329.489 L 159.463 327.479 C 158.536 327.946 157.359 328.422 155.933 328.909 C 154.506 329.396 152.983 329.652 151.363 329.679 ZM 174.162 329.639 C 173.549 329.639 172.895 329.582 172.202 329.469 C 171.502 329.356 170.845 329.119 170.232 328.759 C 169.612 328.399 169.109 327.852 168.722 327.119 C 168.335 326.386 168.142 325.386 168.142 324.119 L 168.142 306.789 C 168.142 305.682 168.302 304.762 168.622 304.029 C 168.949 303.296 169.382 302.719 169.922 302.299 C 170.462 301.872 171.065 301.562 171.732 301.369 C 172.405 301.176 173.075 301.079 173.742 301.079 C 175.335 301.106 176.815 301.139 178.182 301.179 C 179.542 301.212 180.835 301.249 182.062 301.289 C 183.282 301.329 184.472 301.376 185.632 301.429 L 185.632 303.899 L 174.512 303.899 C 173.512 303.899 172.715 304.169 172.122 304.709 C 171.529 305.249 171.232 306.109 171.232 307.289 L 171.232 314.009 L 183.932 314.199 L 183.932 316.559 L 171.232 316.749 L 171.232 323.429 C 171.232 324.382 171.392 325.102 171.712 325.589 C 172.039 326.076 172.472 326.399 173.012 326.559 C 173.552 326.712 174.105 326.789 174.672 326.789 L 185.632 326.789 L 185.632 329.259 C 184.445 329.332 183.202 329.396 181.902 329.449 C 180.602 329.502 179.302 329.542 178.002 329.569 C 176.709 329.596 175.429 329.619 174.162 329.639 ZM 204.804 329.489 L 201.754 329.489 L 201.754 301.079 L 204.264 301.079 L 219.084 324.199 L 219.084 301.079 L 222.134 301.079 L 222.134 329.489 L 219.624 329.489 L 204.804 306.369 L 204.804 329.489 ZM 237.84 329.719 C 236.014 329.719 234.41 329.546 233.03 329.199 C 231.657 328.852 230.514 328.189 229.6 327.209 C 228.687 326.236 228.004 324.796 227.55 322.889 C 227.104 320.982 226.88 318.486 226.88 315.399 C 226.88 312.312 227.11 309.809 227.57 307.889 C 228.037 305.976 228.734 304.509 229.66 303.489 C 230.587 302.476 231.73 301.782 233.09 301.409 C 234.457 301.036 236.04 300.849 237.84 300.849 C 239.694 300.849 241.307 301.036 242.68 301.409 C 244.06 301.782 245.207 302.476 246.12 303.489 C 247.034 304.509 247.71 305.976 248.15 307.889 C 248.584 309.809 248.8 312.312 248.8 315.399 C 248.8 318.486 248.577 320.982 248.13 322.889 C 247.677 324.796 246.994 326.236 246.08 327.209 C 245.167 328.189 244.027 328.852 242.66 329.199 C 241.3 329.546 239.694 329.719 237.84 329.719 Z M 237.84 326.979 C 239.28 326.979 240.504 326.839 241.51 326.559 C 242.51 326.272 243.327 325.726 243.96 324.919 C 244.587 324.106 245.044 322.939 245.33 321.419 C 245.61 319.906 245.75 317.899 245.75 315.399 C 245.75 312.799 245.604 310.716 245.31 309.149 C 245.017 307.576 244.554 306.392 243.92 305.599 C 243.287 304.799 242.477 304.269 241.49 304.009 C 240.497 303.756 239.28 303.629 237.84 303.629 C 236.5 303.629 235.337 303.756 234.35 304.009 C 233.357 304.269 232.534 304.799 231.88 305.599 C 231.22 306.392 230.73 307.576 230.41 309.149 C 230.09 310.716 229.93 312.799 229.93 315.399 C 229.93 317.899 230.064 319.906 230.33 321.419 C 230.604 322.939 231.047 324.106 231.66 324.919 C 232.28 325.726 233.097 326.272 234.11 326.559 C 235.13 326.839 236.374 326.979 237.84 326.979 ZM 263.35 329.489 L 260.26 329.489 L 260.26 303.859 L 251.5 303.859 L 251.5 301.079 L 272.11 301.079 L 272.11 303.859 L 263.35 303.859 L 263.35 329.489 ZM 289.202 329.489 L 286.112 329.489 L 286.112 306.789 C 286.112 305.682 286.272 304.762 286.592 304.029 C 286.918 303.296 287.352 302.719 287.892 302.299 C 288.432 301.872 289.035 301.562 289.702 301.369 C 290.375 301.176 291.045 301.079 291.712 301.079 C 292.845 301.106 294.075 301.132 295.402 301.159 C 296.722 301.186 298.085 301.216 299.492 301.249 C 300.892 301.289 302.262 301.362 303.602 301.469 L 303.602 303.899 L 292.442 303.899 C 291.415 303.899 290.618 304.182 290.052 304.749 C 289.485 305.316 289.202 306.152 289.202 307.259 L 289.202 314.629 L 301.902 314.819 L 301.902 317.179 L 289.202 317.369 L 289.202 329.489 ZM 318.262 329.719 C 316.435 329.719 314.832 329.546 313.452 329.199 C 312.079 328.852 310.935 328.189 310.022 327.209 C 309.109 326.236 308.425 324.796 307.972 322.889 C 307.525 320.982 307.302 318.486 307.302 315.399 C 307.302 312.312 307.532 309.809 307.992 307.889 C 308.459 305.976 309.155 304.509 310.082 303.489 C 311.009 302.476 312.152 301.782 313.512 301.409 C 314.879 301.036 316.462 300.849 318.262 300.849 C 320.115 300.849 321.729 301.036 323.102 301.409 C 324.482 301.782 325.629 302.476 326.542 303.489 C 327.455 304.509 328.132 305.976 328.572 307.889 C 329.005 309.809 329.222 312.312 329.222 315.399 C 329.222 318.486 328.999 320.982 328.552 322.889 C 328.099 324.796 327.415 326.236 326.502 327.209 C 325.589 328.189 324.449 328.852 323.082 329.199 C 321.722 329.546 320.115 329.719 318.262 329.719 Z M 318.262 326.979 C 319.702 326.979 320.925 326.839 321.932 326.559 C 322.932 326.272 323.749 325.726 324.382 324.919 C 325.009 324.106 325.465 322.939 325.752 321.419 C 326.032 319.906 326.172 317.899 326.172 315.399 C 326.172 312.799 326.025 310.716 325.732 309.149 C 325.439 307.576 324.975 306.392 324.342 305.599 C 323.709 304.799 322.899 304.269 321.912 304.009 C 320.919 303.756 319.702 303.629 318.262 303.629 C 316.922 303.629 315.759 303.756 314.772 304.009 C 313.779 304.269 312.955 304.799 312.302 305.599 C 311.642 306.392 311.152 307.576 310.832 309.149 C 310.512 310.716 310.352 312.799 310.352 315.399 C 310.352 317.899 310.485 319.906 310.752 321.419 C 311.025 322.939 311.469 324.106 312.082 324.919 C 312.702 325.726 313.519 326.272 314.532 326.559 C 315.552 326.839 316.795 326.979 318.262 326.979 ZM 344.545 329.719 C 342.945 329.719 341.501 329.579 340.215 329.299 C 338.928 329.012 337.828 328.529 336.915 327.849 C 336.001 327.169 335.301 326.242 334.815 325.069 C 334.328 323.896 334.085 322.436 334.085 320.689 L 334.085 301.079 L 337.165 301.079 L 337.165 320.689 C 337.165 322.309 337.455 323.569 338.035 324.469 C 338.615 325.369 339.458 326.006 340.565 326.379 C 341.671 326.752 342.998 326.939 344.545 326.939 C 346.085 326.939 347.408 326.752 348.515 326.379 C 349.621 326.006 350.465 325.369 351.045 324.469 C 351.625 323.569 351.915 322.309 351.915 320.689 L 351.915 301.079 L 355.005 301.079 L 355.005 320.689 C 355.005 322.436 354.758 323.896 354.265 325.069 C 353.778 326.242 353.078 327.169 352.165 327.849 C 351.251 328.529 350.151 329.012 348.865 329.299 C 347.578 329.579 346.138 329.719 344.545 329.719 ZM 364.142 329.489 L 361.092 329.489 L 361.092 301.079 L 363.602 301.079 L 378.422 324.199 L 378.422 301.079 L 381.472 301.079 L 381.472 329.489 L 378.962 329.489 L 364.142 306.369 L 364.142 329.489 ZM 398.139 329.489 L 386.909 329.489 L 386.909 301.079 L 398.139 301.079 C 399.865 301.079 401.322 301.396 402.509 302.029 C 403.689 302.656 404.645 303.576 405.379 304.789 C 406.112 305.996 406.645 307.479 406.979 309.239 C 407.319 311.006 407.489 313.022 407.489 315.289 C 407.489 318.269 407.139 320.816 406.439 322.929 C 405.745 325.036 404.705 326.656 403.319 327.789 C 401.925 328.922 400.199 329.489 398.139 329.489 Z M 389.999 303.859 L 389.999 326.749 L 397.909 326.749 C 399.429 326.749 400.665 326.279 401.619 325.339 C 402.572 324.399 403.279 323.072 403.739 321.359 C 404.205 319.652 404.439 317.629 404.439 315.289 C 404.439 313.176 404.309 311.392 404.049 309.939 C 403.789 308.486 403.395 307.309 402.869 306.409 C 402.342 305.509 401.669 304.859 400.849 304.459 C 400.022 304.059 399.042 303.859 397.909 303.859 L 389.999 303.859 Z", "transform", "matrix(1, 0, 0, 1, 0, 0)", 2, "fill", "rgb(51, 51, 51)", "white-space", "pre"], ["transform", "matrix(-0.47162, 0.250862, -0.250862, -0.47162, 325.236542, 722.970459)", "d", "M 133.974 615.529 L 160.026 615.529 L 165.524 655.319 A 69.206 69.206 0 0 1 181.052 661.751 L 213.075 637.503 L 231.497 655.925 L 207.249 687.948 A 69.206 69.206 0 0 1 213.681 703.476 L 253.471 708.974 L 253.471 735.026 L 213.681 740.524 A 69.206 69.206 0 0 1 207.249 756.052 L 231.497 788.075 L 213.075 806.497 L 181.052 782.249 A 69.206 69.206 0 0 1 165.524 788.681 L 160.026 828.471 L 133.974 828.471 L 128.476 788.681 A 69.206 69.206 0 0 1 112.948 782.249 L 80.925 806.497 L 62.503 788.075 L 86.751 756.052 A 69.206 69.206 0 0 1 80.319 740.524 L 40.529 735.026 L 40.529 708.974 L 80.319 703.476 A 69.206 69.206 0 0 1 86.751 687.948 L 62.503 655.925 L 80.925 637.503 L 112.948 661.751 A 69.206 69.206 0 0 1 128.476 655.319 Z M 147 690.059 A 31.941 31.941 0 0 0 147 753.941 A 31.941 31.941 0 0 0 147 690.059", 0, "bx", "shape", "cog 147 722 31.941 69.206 106.471 0.38 8 1@f6c5ac59", 2, "fill", "rgb(216, 216, 216)"], ["transform", "matrix(-0.425965, 0.322352, -0.322352, -0.425965, 834.257629, -143.676239)", "d", "M 807.647 39.199 L 830.353 39.199 L 835.145 73.88 A 60.321 60.321 0 0 1 848.68 79.487 L 876.592 58.352 L 892.648 74.408 L 871.513 102.32 A 60.321 60.321 0 0 1 877.12 115.855 L 911.801 120.647 L 911.801 143.353 L 877.12 148.145 A 60.321 60.321 0 0 1 871.513 161.68 L 892.648 189.592 L 876.592 205.648 L 848.68 184.513 A 60.321 60.321 0 0 1 835.145 190.12 L 830.353 224.801 L 807.647 224.801 L 802.855 190.12 A 60.321 60.321 0 0 1 789.32 184.513 L 761.408 205.648 L 745.352 189.592 L 766.487 161.68 A 60.321 60.321 0 0 1 760.88 148.145 L 726.199 143.353 L 726.199 120.647 L 760.88 115.855 A 60.321 60.321 0 0 1 766.487 102.32 L 745.352 74.408 L 761.408 58.352 L 789.32 79.487 A 60.321 60.321 0 0 1 802.855 73.88 Z M 819 104.16 A 27.84 27.84 0 0 0 819 159.84 A 27.84 27.84 0 0 0 819 104.16", 0, "bx", "shape", "cog 819 132 27.84 60.321 92.801 0.38 8 1@889bcbb9", 2, "fill", "rgb(216, 216, 216)"], ["transform", "matrix(-0.334373, 0.416595, -0.416595, -0.334373, 166.634796, 48.710857)", "d", "M 132.077 21.547 L 155.923 21.547 L 160.955 57.967 A 63.344 63.344 0 0 1 175.168 63.854 L 204.479 41.66 L 221.34 58.521 L 199.146 87.832 A 63.344 63.344 0 0 1 205.033 102.045 L 241.453 107.077 L 241.453 130.923 L 205.033 135.955 A 63.344 63.344 0 0 1 199.146 150.168 L 221.34 179.479 L 204.479 196.34 L 175.168 174.146 A 63.344 63.344 0 0 1 160.955 180.033 L 155.923 216.453 L 132.077 216.453 L 127.045 180.033 A 63.344 63.344 0 0 1 112.832 174.146 L 83.521 196.34 L 66.66 179.479 L 88.854 150.168 A 63.344 63.344 0 0 1 82.967 135.955 L 46.547 130.923 L 46.547 107.077 L 82.967 102.045 A 63.344 63.344 0 0 1 88.854 87.832 L 66.66 58.521 L 83.521 41.66 L 112.832 63.854 A 63.344 63.344 0 0 1 127.045 57.967 Z M 144 89.764 A 29.236 29.236 0 0 0 144 148.236 A 29.236 29.236 0 0 0 144 89.764", 0, "bx", "shape", "cog 144 119 29.236 63.344 97.453 0.38 8 1@436da5ac", 2, "fill", "rgb(216, 216, 216)"], ["transform", "matrix(-0.381642, 0.373773, -0.373773, -0.381642, 952.15448, 446.815369)", "d", "M 652.389 615.228 L 685.611 615.228 L 692.621 665.968 A 88.252 88.252 0 0 1 712.424 674.171 L 753.26 643.249 L 776.751 666.74 L 745.829 707.576 A 88.252 88.252 0 0 1 754.032 727.379 L 804.772 734.389 L 804.772 767.611 L 754.032 774.621 A 88.252 88.252 0 0 1 745.829 794.424 L 776.751 835.26 L 753.26 858.751 L 712.424 827.829 A 88.252 88.252 0 0 1 692.621 836.032 L 685.611 886.772 L 652.389 886.772 L 645.379 836.032 A 88.252 88.252 0 0 1 625.576 827.829 L 584.74 858.751 L 561.249 835.26 L 592.171 794.424 A 88.252 88.252 0 0 1 583.968 774.621 L 533.228 767.611 L 533.228 734.389 L 583.968 727.379 A 88.252 88.252 0 0 1 592.171 707.576 L 561.249 666.74 L 584.74 643.249 L 625.576 674.171 A 88.252 88.252 0 0 1 645.379 665.968 Z M 669 710.268 A 40.732 40.732 0 0 0 669 791.732 A 40.732 40.732 0 0 0 669 710.268", 0, "bx", "shape", "cog 669 751 40.732 88.252 135.772 0.38 8 1@2f8a21d5", 2, "fill", "rgb(216, 216, 216)"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "pwgQ":
/*!******************************************************!*\
  !*** ./src/app/work-banner/work-banner.component.ts ***!
  \******************************************************/
/*! exports provided: WorkBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkBannerComponent", function() { return WorkBannerComponent; });
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WorkBannerComponent {
    constructor() { }
    ngOnInit() {
        var animation = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
            loop: true,
            duration: 1200,
            autoplay: false
        });
        animation.add({
            targets: '.container-fluid .squares',
            opacity: 1,
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(100, { grid: [23, 5] })
        }).add({
            targets: '.container-fluid .square-normal',
            backgroundColor: "#000000",
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(20, { grid: [23, 5], from: "center" })
        }).add({
            targets: '.container-fluid .square-normal',
            backgroundColor: "#ffffff",
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(50, { grid: [23, 5], from: "center" })
        });
        animation.restart();
    }
}
WorkBannerComponent.ɵfac = function WorkBannerComponent_Factory(t) { return new (t || WorkBannerComponent)(); };
WorkBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkBannerComponent, selectors: [["app-work-banner"]], decls: 128, vars: 0, consts: [[2, "padding", "2vh"], [1, "container-fluid", "profile"], [1, "row"], [1, "justify-content-center", "d-flex"], [1, "squares", "square-normal"], [1, "squares", "square-blank"], [2, "padding", "3vh"]], template: function WorkBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "div", 6);
    } }, styles: [".squares[_ngcontent-%COMP%] {\r\n    width: 3vw;\r\n    height: 6vh;\r\n    display: inline-block;\r\n    opacity: 0;\r\n}\r\n\r\n.square-normal[_ngcontent-%COMP%] {\r\n    background-color: deepskyblue;\r\n}\r\n\r\n.square-blank[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoid29yay1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcXVhcmVzIHtcclxuICAgIHdpZHRoOiAzdnc7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5zcXVhcmUtbm9ybWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG59XHJcblxyXG4uc3F1YXJlLWJsYW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ri2Y":
/*!************************************************************!*\
  !*** ./src/app/profile-banner/profile-banner.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBannerComponent", function() { return ProfileBannerComponent; });
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileBannerComponent {
    constructor() { }
    ngOnInit() {
        var animation = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
            loop: true,
            duration: 1200,
            autoplay: false
        });
        animation.add({
            targets: '.container-fluid .squares',
            opacity: 1,
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(100, { grid: [25, 5] })
        }).add({
            targets: '.container-fluid .square-normal',
            backgroundColor: "#000000",
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(20, { grid: [25, 5], from: "center" })
        }).add({
            targets: '.container-fluid .square-normal',
            backgroundColor: "#ffffff",
            delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(50, { grid: [25, 5], from: "center" })
        });
        animation.restart();
        // anime({
        //   targets: '.container-fluid .squares',
        //   opacity: 1,
        //   delay: anime.stagger(200, {grid: [25, 5]}),
        //   loop:true,
        //   duration: 1500
        // });
    }
}
ProfileBannerComponent.ɵfac = function ProfileBannerComponent_Factory(t) { return new (t || ProfileBannerComponent)(); };
ProfileBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileBannerComponent, selectors: [["app-profile-banner"]], decls: 138, vars: 0, consts: [[2, "padding", "2vh"], [1, "container-fluid"], [1, "row"], [1, "justify-content-center", "d-flex"], [1, "squares", "square-normal"], [1, "squares", "square-blank"], [2, "padding", "3vh"]], template: function ProfileBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "div", 6);
    } }, styles: [".squares[_ngcontent-%COMP%] {\r\n    width: 3vw;\r\n    height: 6vh;\r\n    display: inline-block;\r\n    opacity: 0;\r\n}\r\n\r\n.square-normal[_ngcontent-%COMP%] {\r\n    background-color: deepskyblue;\r\n}\r\n\r\n.square-blank[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoicHJvZmlsZS1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcXVhcmVzIHtcclxuICAgIHdpZHRoOiAzdnc7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5zcXVhcmUtbm9ybWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG59XHJcblxyXG4uc3F1YXJlLWJsYW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _league_champion_league_champion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./league-champion/league-champion.component */ "WoCX");
/* harmony import */ var _league_search_league_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./league-search/league-search.component */ "RPZ8");
/* harmony import */ var _league_site_league_site_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./league-site/league-site.component */ "MqEc");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-card/project-card.component */ "MyZq");
/* harmony import */ var _work_profile_work_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work-profile/work-profile.component */ "mY7H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [{ path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'projects', component: _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__["ProjectCardComponent"] },
    { path: 'work', component: _work_profile_work_profile_component__WEBPACK_IMPORTED_MODULE_8__["WorkProfileComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'projects/league-site', component: _league_site_league_site_component__WEBPACK_IMPORTED_MODULE_4__["LeagueSiteComponent"] },
    { path: 'projects/league-site/search', component: _league_search_league_search_component__WEBPACK_IMPORTED_MODULE_3__["LeagueSearchComponent"] },
    { path: 'projects/league-site/:championName', component: _league_champion_league_champion_component__WEBPACK_IMPORTED_MODULE_2__["LeagueChampionComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map