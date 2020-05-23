function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-detail-task-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-selector/week-selector.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-selector/week-selector.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWeekSelectorWeekSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"day\" [ngClass]=\"{'selected': week.includes(day.day)}\" (click)=\"toggle(day)\" *ngFor=\"let day of days\">\n  {{day.symbol}}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskDetailTaskDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <ion-button (click)=\"goBack()\" fill=\"clear\">Cancel</ion-button>\n  <app-week-selector [(week)]=\"when\" ></app-week-selector>\n  <span *ngFor=\"let item of when\">{{item}}</span>\n  <!-- <AtoZCol>\n      <div>\n        <CancelButton onClick={goBack}>Cancel</CancelButton>\n        <IonItem>\n          <IonLabel position=\"stacked\">Let's give it a name</IonLabel>\n          <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} />\n        </IonItem>\n        <IonItem>\n          <IonLabel position=\"stacked\">When do you usually do this task?</IonLabel>\n          <WeekSelector when={when} onValueChange={data => setWhen(data)} />\n        </IonItem>\n        <IonItem>\n          <IonLabel position=\"stacked\">When did you last do this?</IonLabel>\n          <IonDatetime displayFormat=\"DDDD MMM D, YYYY\"\n            value={lastExecution?.toISOString()} onIonChange={e => changeLastExecution(e.detail.value!)}>\n          </IonDatetime>\n        </IonItem>\n      </div>\n      <div className=\"actions\">\n        <IonButton size=\"large\" onClick={save} expand=\"block\">{task ? 'Update' : 'Create'}</IonButton>\n        {task && (<span className='remove' onClick={() => remove(task)}>Remove this task</span>)}\n      </div>\n    </AtoZCol>\n    <IonToast\n      isOpen={!isFormValid}\n      onDidDismiss={() => setIsFormValid(true)}\n      message=\"All fields are required.\"\n      duration={1000}\n    /> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/week-selector/week-selector.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/week-selector/week-selector.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWeekSelectorWeekSelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  justify-content: space-between;\n}\n:host .day {\n  border-radius: 50%;\n  font-weight: 700;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n:host .day:active, :host .day.selected {\n  background-color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dhdWdlcy9nYXVnZXMvc3JjL2FwcC9jb21wb25lbnRzL3dlZWstc2VsZWN0b3Ivd2Vlay1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93ZWVrLXNlbGVjdG9yL3dlZWstc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUVFLHdDQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlZWstc2VsZWN0b3Ivd2Vlay1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5kYXkge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6YWN0aXZlLFxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmRheSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5kYXk6YWN0aXZlLCA6aG9zdCAuZGF5LnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/week-selector/week-selector.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/week-selector/week-selector.component.ts ***!
    \*********************************************************************/

  /*! exports provided: WeekSelectorComponent */

  /***/
  function srcAppComponentsWeekSelectorWeekSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekSelectorComponent", function () {
      return WeekSelectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WeekSelectorComponent = /*#__PURE__*/function () {
      function WeekSelectorComponent() {
        _classCallCheck(this, WeekSelectorComponent);

        this.value = [];
        this.days = [{
          symbol: 'M',
          day: 1
        }, {
          symbol: 'T',
          day: 2
        }, {
          symbol: 'W',
          day: 3
        }, {
          symbol: 'T',
          day: 4
        }, {
          symbol: 'F',
          day: 5
        }, {
          symbol: 'S',
          day: 6
        }, {
          symbol: 'S',
          day: 0
        }];
        this.weekChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(WeekSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle",
        value: function toggle(day) {
          if (this.week.includes(day.day)) {
            this.week = _toConsumableArray(this.week.filter(function (d) {
              return day.day !== d;
            }));
          } else {
            this.week = [].concat(_toConsumableArray(this.week), [day.day]);
          }
        }
      }, {
        key: "week",
        get: function get() {
          return this.value;
        },
        set: function set(val) {
          this.value = val;
          console.log(val);
          this.weekChange.emit(val);
        }
      }]);

      return WeekSelectorComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], WeekSelectorComponent.prototype, "weekChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WeekSelectorComponent.prototype, "week", null);
    WeekSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-week-selector',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./week-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/week-selector/week-selector.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./week-selector.component.scss */
      "./src/app/components/week-selector/week-selector.component.scss"))["default"]]
    })], WeekSelectorComponent);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TaskDetailPageRoutingModule */

  /***/
  function srcAppPagesTaskDetailTaskDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailPageRoutingModule", function () {
      return TaskDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _task_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-detail.page */
    "./src/app/pages/task-detail/task-detail.page.ts");

    var routes = [{
      path: '',
      component: _task_detail_page__WEBPACK_IMPORTED_MODULE_3__["TaskDetailPage"]
    }];

    var TaskDetailPageRoutingModule = function TaskDetailPageRoutingModule() {
      _classCallCheck(this, TaskDetailPageRoutingModule);
    };

    TaskDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TaskDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail.module.ts ***!
    \*********************************************************/

  /*! exports provided: TaskDetailPageModule */

  /***/
  function srcAppPagesTaskDetailTaskDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailPageModule", function () {
      return TaskDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task-detail-routing.module */
    "./src/app/pages/task-detail/task-detail-routing.module.ts");
    /* harmony import */


    var _task_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task-detail.page */
    "./src/app/pages/task-detail/task-detail.page.ts");
    /* harmony import */


    var src_app_components_week_selector_week_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/week-selector/week-selector.component */
    "./src/app/components/week-selector/week-selector.component.ts");

    var TaskDetailPageModule = function TaskDetailPageModule() {
      _classCallCheck(this, TaskDetailPageModule);
    };

    TaskDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskDetailPageRoutingModule"]],
      declarations: [_task_detail_page__WEBPACK_IMPORTED_MODULE_6__["TaskDetailPage"], src_app_components_week_selector_week_selector_component__WEBPACK_IMPORTED_MODULE_7__["WeekSelectorComponent"]]
    })], TaskDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskDetailTaskDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail.page.ts ***!
    \*******************************************************/

  /*! exports provided: TaskDetailPage */

  /***/
  function srcAppPagesTaskDetailTaskDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailPage", function () {
      return TaskDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TaskDetailPage = /*#__PURE__*/function () {
      function TaskDetailPage(nav) {
        _classCallCheck(this, TaskDetailPage);

        this.nav = nav;
        this.when = [5];
      }

      _createClass(TaskDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.nav.pop();
        }
      }]);

      return TaskDetailPage;
    }();

    TaskDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    TaskDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-detail.page.scss */
      "./src/app/pages/task-detail/task-detail.page.scss"))["default"]]
    })], TaskDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-task-detail-task-detail-module-es5.js.map