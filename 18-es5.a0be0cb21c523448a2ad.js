function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,n):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{S4AJ:function(t,n,e){"use strict";e.r(n),e.d(n,"TaskDetailPageModule",(function(){return _}));var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),c=e("mrSG"),s=e("Mwlb"),l=e("fXoL"),u=e("ptfe");function b(t,n){if(1&t){var e=l.Nb();l.Mb(0,"div",4),l.Mb(1,"div",5),l.mc(2,"When did you last do this?"),l.Lb(),l.Mb(3,"ion-datetime",12),l.Ub("ionChange",(function(t){return l.gc(e),l.Wb().onChange(t)})),l.Lb(),l.Lb()}if(2&t){var i=l.Wb();l.zb(3),l.cc("max",i.now.toISOString())("value",i.lastExecution)}}function f(t,n){if(1&t){var e=l.Nb();l.Mb(0,"ion-item-sliding"),l.Mb(1,"ion-item"),l.Mb(2,"ion-label"),l.mc(3),l.Lb(),l.Lb(),l.Mb(4,"ion-item-options",15),l.Mb(5,"ion-item-option",16),l.Ub("click",(function(t){l.gc(e);var i=n.index;return l.Wb(2).deleteTime(t,i)})),l.mc(6,"delete"),l.Lb(),l.Lb(),l.Lb()}if(2&t){var i=n.$implicit;l.zb(3),l.pc("",i.toLocaleDateString()," ",i.toLocaleTimeString(),"")}}function g(t,n){if(1&t&&(l.Mb(0,"div",4),l.Mb(1,"div",5),l.mc(2,"Last executions (showing 5 most recent)"),l.Lb(),l.Mb(3,"ion-list",13),l.lc(4,f,7,2,"ion-item-sliding",14),l.Xb(5,"slice"),l.Lb(),l.Lb()),2&t){var e=l.Wb();l.zb(4),l.cc("ngForOf",l.Zb(5,1,e.task.executions,0,5))}}function d(t,n){if(1&t){var e=l.Nb();l.Mb(0,"ion-button",17),l.Ub("click",(function(){return l.gc(e),l.Wb().create()})),l.mc(1,"Create"),l.Lb()}}function m(t,n){if(1&t){var e=l.Nb();l.Mb(0,"ion-button",17),l.Ub("click",(function(){return l.gc(e),l.Wb().update()})),l.mc(1,"Update"),l.Lb()}}function p(t,n){if(1&t){var e=l.Nb();l.Mb(0,"ion-button",18),l.Ub("click",(function(){return l.gc(e),l.Wb().delete()})),l.mc(1,"Remove this task"),l.Lb()}}var h,M,v,k=[{path:"",component:(h=function(){function t(n,e,i){_classCallCheck(this,t),this.nav=n,this.tasksService=e,this.activatedRoute=i,this.now=new Date,this.task=s.a.createEmpty(),this.new=!0,this.lastExecution=this.now.toISOString()}return _createClass(t,[{key:"onChange",value:function(t){var n=new Date(t.detail.value);this.task.executions=[n],this.task.computeProgress()}},{key:"deleteTime",value:function(t,n){this.lastExecution=void 0;var e=_toConsumableArray(this.task.executions);e.splice(n,1),this.task.executions=e}},{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.params.subscribe((function(n){return Object(c.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.new="new"===n.id,this.new){t.next=5;break}return t.next=3,this.tasksService.getTaskById(n.id);case 3:e=t.sent,this.task=e,this.lastExecution=e.lastDone.toISOString();case 5:this.task.computeProgress();case 6:case"end":return t.stop()}}),t,this)})))}))}},{key:"goBack",value:function(){this.task.computeProgress(),window.history.length>2?this.nav.back():this.nav.navigateBack("/")}},{key:"create",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=this.new,!t.t0){t.next=5;break}return t.next=4,this.tasksService.createTask(this.task);case 4:this.goBack();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"update",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=this.new,t.t0){t.next=5;break}return t.next=4,this.tasksService.updateTask(this.task);case 4:this.goBack();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"delete",value:function(){this.new||(this.tasksService.deleteTask(this.task),this.goBack())}}]),t}(),h.\u0275fac=function(t){return new(t||h)(l.Jb(r.s),l.Jb(u.a),l.Jb(a.a))},h.\u0275cmp=l.Db({type:h,selectors:[["app-task-detail"]],decls:25,vars:8,consts:[[3,"fullscreen"],[1,"form"],[1,"cancel-button"],["fill","clear",3,"click"],[1,"form-element"],[1,"title"],[3,"ngModel","ngModelChange"],[1,"repeat-selector"],["class","form-element",4,"ngIf"],[1,"actions"],["expand","block","color","primary",3,"click",4,"ngIf"],["fill","clear","color","danger",3,"click",4,"ngIf"],["displayFormat","DDDD MMM D, YYYY",3,"max","value","ionChange"],["id","history"],[4,"ngFor","ngForOf"],["side","end"],["color","danger",3,"click"],["expand","block","color","primary",3,"click"],["fill","clear","color","danger",3,"click"]],template:function(t,n){1&t&&(l.Mb(0,"ion-content",0),l.Mb(1,"main"),l.Mb(2,"div",1),l.Mb(3,"div",2),l.Mb(4,"ion-button",3),l.Ub("click",(function(){return n.goBack()})),l.mc(5,"Cancel"),l.Lb(),l.Lb(),l.Mb(6,"div",4),l.Mb(7,"div",5),l.mc(8,"Let's give it a name!"),l.Lb(),l.Mb(9,"ion-input",6),l.Ub("ngModelChange",(function(t){return n.task.title=t})),l.Lb(),l.Lb(),l.Mb(10,"div",4),l.Mb(11,"div",5),l.mc(12,"When do you usually do this task?"),l.Lb(),l.Mb(13,"div",7),l.Mb(14,"span"),l.mc(15," Every "),l.Lb(),l.Mb(16,"ion-input",6),l.Ub("ngModelChange",(function(t){return n.task.repeat=t})),l.Lb(),l.Mb(17,"span"),l.mc(18," days "),l.Lb(),l.Lb(),l.Lb(),l.lc(19,b,4,2,"div",8),l.lc(20,g,6,5,"div",8),l.Lb(),l.Mb(21,"div",9),l.lc(22,d,2,0,"ion-button",10),l.lc(23,m,2,0,"ion-button",10),l.lc(24,p,2,0,"ion-button",11),l.Lb(),l.Lb(),l.Lb()),2&t&&(l.cc("fullscreen",!0),l.zb(9),l.cc("ngModel",n.task.title),l.zb(7),l.cc("ngModel",n.task.repeat),l.zb(3),l.cc("ngIf",n.new||0===n.task.executions.length),l.zb(1),l.cc("ngIf",!n.new&&0!==n.task.executions.length),l.zb(2),l.cc("ngIf",n.new),l.zb(1),l.cc("ngIf",!n.new),l.zb(1),l.cc("ngIf",!n.new))},directives:[r.d,r.c,r.h,r.w,o.c,o.d,i.k,r.e,r.v,r.n,i.j,r.l,r.i,r.m,r.k,r.j],pipes:[i.o],styles:["[_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100%;padding-bottom:calc(env(safe-area-inset-bottom) + 10px)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;font-weight:700}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]{padding:10px 20px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%], [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border:1px solid var(--ion-color-light)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{padding:0 10px!important}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;max-width:70%;padding:20px 0 10px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   div.repeat-selector[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   div.repeat-selector[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:0 10px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:0 40px}"]}),h)}],C=((v=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:v}),v.\u0275inj=l.Gb({factory:function(t){return new(t||v)},imports:[[a.i.forChild(k)],a.i]}),v),_=((M=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:M}),M.\u0275inj=l.Gb({factory:function(t){return new(t||M)},imports:[[i.c,o.a,r.q,C]]}),M)}}]);