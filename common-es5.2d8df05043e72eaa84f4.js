!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e,n,r,i,o,a){try{var u=t[o](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,i)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){f(o,r,i,a,u,"next",t)}function u(t){f(o,r,i,a,u,"throw",t)}a(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},KwJk:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return u}));var r=function(t,e){return null!==e.closest(t)},i=function(t){return"string"==typeof t&&t.length>0?(r=!0,(n="ion-color-"+t)in(e={"ion-color":!0})?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e):void 0;var e,n,r},o=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=l(regeneratorRuntime.mark((function t(e,n,r){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||a.test(e)){t.next=4;break}if(!(i=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),i.push(e,r)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},Mwlb:function(t,e,r){"use strict";var u;e.a=((u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=a(r);function r(t){var i;return n(this,r),i=e.call(this),Object.assign(s(i),t),i.computeProgress(),i}return i(r,[{key:"computeProgress",value:function(){this.executions.sort((function(t,e){return e.getTime()-t.getTime()})),this.lastDone=this.executions[0];var t=r.today-this.lastDone.getTime(),e=r.WEEK/Math.max(this.when.length,1);this.progress=this.rangePercentage(Math.floor((e-t)/e*100))}},{key:"rangePercentage",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return Math.min(Math.max(t,e),n)}}],[{key:"parseTasks",value:function(t){return t.map((function(t){return new r(t)}))}},{key:"createEmpty",value:function(){return new r({title:"",id:"",when:[],executions:[new Date]})}}]),r}(function(){return function t(){n(this,t)}}())).today=Date.now(),u.WEEK=6048e5,u)},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(){var t=l(regeneratorRuntime.mark((function t(e,n,r,i,o){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return a.classList.add(t)})),o&&Object.assign(a,o),n.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),i=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},ptfe:function(e,r,o){"use strict";o.d(r,"a",(function(){return v}));var a,u=o("mrSG"),s=o("2Vo4"),c=o("Mwlb"),f=o("fXoL"),l=o("TEn/"),p=((a=function(){function t(e){n(this,t),this.toastController=e}return i(t,[{key:"showToast",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:t,duration:e});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"showUndoDeletedTask",value:function(t,e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:'"'.concat(e.title,'" has been removed.'),buttons:[{side:"end",text:"Undo",handler:function(){return!!t.updateTask(e)}}],duration:3e3});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}}]),t}()).\u0275fac=function(t){return new(t||a)(f.Qb(l.y))},a.\u0275prov=f.Fb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),d=Date.now();new Date(d-864e5),new Date(d-864e6),new Date(d-864e6),new Date(d-3456e5);var h,v=((h=function(){function e(t){var r=this;n(this,e),this.notifs=t,this.tasks=new s.a([]),this.localStorageKey="tasks",this.loaded=new Promise((function(t){r.loadTasks().then((function(e){r.tasks.next(c.a.parseTasks(e)),t(!0)}))}))}return i(e,[{key:"getTasks",value:function(){return this.tasks}},{key:"getTaskById",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loaded;case 2:return e.abrupt("return",this.tasks.getValue().find((function(e){return e.id===t})));case 3:case"end":return e.stop()}}),e,this)})))}},{key:"deleteTask",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r,i,o,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=this.tasks.getValue(),!((i=r.indexOf(e))<0)){n.next=3;break}throw Error("Task does not exist");case 3:if(0!==(o=r.splice(i,1)).length){n.next=6;break}throw Error("Cannot delete task");case 6:return a=o[0],this.tasks.next(t(r)),n.next=10,this.persistTasksInDb();case 10:this.notifs.showUndoDeletedTask(this,a);case 11:case"end":return n.stop()}}),n,this)})))}},{key:"createOrUpdateTask",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id||!this.tasks.getValue().find((function(e){return e.id===t.id}))){e.next=6;break}return e.next=3,this.updateTask(t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,this.createTask(t);case 8:e.t0=e.sent;case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,this)})))}},{key:"createTask",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=this.tasks.getValue().reduce((function(t,e){return parseInt(e.id,16)>t?parseInt(e.id,16):t}),0),e.id=(r+1).toString(16),this.tasks.next([].concat(t(this.tasks.getValue()),[e])),n.next=5,this.persistTasksInDb();case 5:return n.abrupt("return",e);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"updateTask",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.tasks.next([].concat(t(this.tasks.getValue().filter((function(t){return t.id!==e.id}))),[e])),n.next=3,this.persistTasksInDb();case 3:return n.abrupt("return",e);case 4:case"end":return n.stop()}}),n,this)})))}},{key:"markTaskDone",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.executions.push(new Date),t.computeProgress(),e.next=4,this.updateTask(t);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"loadTasks",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadTasksFromDb();case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=[];case 5:return t.abrupt("return",t.t0);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"persistTasksInDb",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem(this.localStorageKey,JSON.stringify(this.tasks.getValue()));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"loadTasksFromDb",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem(this.localStorageKey)){t.next=3;break}return t.abrupt("return");case 3:return n=JSON.parse(e),t.abrupt("return",(n.forEach((function(t){t.executions=t.executions.map((function(t){return new Date(t)}))})),n));case 5:case"end":return t.stop()}}),t,this)})))}}]),e}()).\u0275fac=function(t){return new(t||h)(f.Qb(p))},h.\u0275prov=f.Fb({token:h,factory:h.\u0275fac,providedIn:"root"}),h)},xgmX:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return i}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},u=function(){r.selectionEnd()},s=function(t){r.impact(t)}}}])}();