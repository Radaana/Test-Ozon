(function(e){function t(t){for(var n,c,o=t[0],u=t[1],i=t[2],d=0,k=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&k.push(r[c][0]),r[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(k.length)k.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==r[u]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Test-Ozon/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},3087:function(e,t,a){"use strict";var n=a("8ed4"),r=a.n(n);r.a},3454:function(e,t,a){},"3e91":function(e,t,a){"use strict";var n=a("3454"),r=a.n(n);r.a},"85ec":function(e,t,a){},"8ed4":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"task-manager"},[a("Calendar"),a("TaskDashboard")],1)])},s=[],c=a("d4ec"),o=a("262e"),u=a("2caf"),i=a("9ab4"),l=a("60a3"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"calendar task-manager__card"},[a("div",{staticClass:"calendar__header task-manager__header"},[e._v(" "+e._s(e.monthArray[e.currentMonth])+" "+e._s(e.currentYear)+" ")]),a("div",{staticClass:"calendar__weekdays"},e._l(e.weekdaysArray,(function(t){return a("div",{key:t,staticClass:"calendar__weekday"},[e._v(" "+e._s(t)+" ")])})),0),a("div",{staticClass:"calendar__days"},e._l(e.currentMonthDays,(function(t){return a("div",{key:t,staticClass:"calendar__day",class:{calendar__day_active:t==e.selectedDay,calendar__day_tasks:e.hasTasks(t)},on:{click:function(a){return e.setNewSelectedDate(t)}}},[e._v(" "+e._s(t)+" ")])})),0)])},k=[],f=a("bee2"),h=a("8511"),p=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(c["a"])(this,a),e=t.apply(this,arguments),e.store=Object(h["d"])(e.$store),e.monthArray=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],e.weekdaysArray=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],e}return Object(f["a"])(a,[{key:"hasTasks",value:function(e){return this.store.hasTasksForSelectedDate(new Date(this.currentYear,this.currentMonth,e))}},{key:"setNewSelectedDate",value:function(e){this.store.setNewSelectedDate(new Date(this.currentYear,this.currentMonth,e))}},{key:"selectedDay",get:function(){return this.store.selectedDate.getDate()}},{key:"currentDate",get:function(){return new Date}},{key:"currentMonth",get:function(){return this.currentDate.getUTCMonth()}},{key:"currentYear",get:function(){return this.currentDate.getFullYear()}},{key:"currentMonthDays",get:function(){this.currentDate.getUTCMonth();for(var e=new Date(this.currentYear,this.currentMonth,1),t=[],a=1;a<e.getDay();a++)t.push("");var n=e;while(n.getMonth()==this.currentMonth)t.push(n.getDate()),n.setDate(n.getDate()+1);return t}}]),a}(l["b"]);p=Object(i["a"])([l["a"]],p);var v=p,y=v,_=(a("3e91"),a("2877")),b=Object(_["a"])(y,d,k,!1,null,"0f78848c",null),D=b.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"task-dashboard task-manager__card"},[a("div",{staticClass:"task-dashboard__header task-manager__header"},[e._v(" События ")]),a("div",{staticClass:"task-dashboard__tasks"},e._l(e.tasksForDay,(function(t){return a("div",{key:t.day,staticClass:"task-dashboard__task task",on:{click:function(a){return e.markChecked(t)}}},[a("div",{staticClass:"task__check",class:{task__check_done:t.done}}),a("span",{staticClass:"task__text"},[e._v(e._s(t.text))])])})),0),a("form",{staticClass:"task-dashboard__form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.taskText,expression:"taskText"}],staticClass:"task-dashboard__input",attrs:{type:"text",name:"taskText",placeholder:"Текст"},domProps:{value:e.taskText},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.setTask(t))},input:function(t){t.target.composing||(e.taskText=t.target.value)}}})])])},g=[],j=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(c["a"])(this,a),e=t.apply(this,arguments),e.store=Object(h["d"])(e.$store),e.tasksArray=[],e.taskText="",e}return Object(f["a"])(a,[{key:"setTask",value:function(){this.store.setNewTask(this.taskText),this.taskText=""}},{key:"markChecked",value:function(e){this.store.markTaskChecked(e.date)}},{key:"tasksForDay",get:function(){return this.store.getTasksForSelectedDate()}}]),a}(l["b"]);j=Object(i["a"])([l["a"]],j);var m=j,T=m,w=(a("3087"),Object(_["a"])(T,O,g,!1,null,"bd95e006",null)),x=w.exports,C=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return a}(l["b"]);C=Object(i["a"])([Object(l["a"])({components:{Calendar:D,TaskDashboard:x}})],C);var M=C,S=M,P=(a("034f"),Object(_["a"])(S,r,s,!1,null,null,null)),F=P.exports,N=a("2f62"),Y=(a("4de4"),a("d81d"),function(){function e(){Object(c["a"])(this,e),this.tasks=[{date:new Date,text:"Выполнить задание",done:!1}],this.selectedDate=new Date}return Object(f["a"])(e,[{key:"setTask",value:function(e){this.tasks.push(e)}},{key:"setDate",value:function(e){this.selectedDate=e}},{key:"markTask",value:function(e){this.tasks.map((function(t){t.date===e&&(t.done=!0)}))}},{key:"setNewTask",value:function(e){this.setTask({date:this.selectedDate,text:e,done:!1})}},{key:"setNewSelectedDate",value:function(e){this.setDate(e)}},{key:"getTasksForSelectedDate",value:function(){var e=this;return this.tasks.filter((function(t){return t.date.getDate()===e.selectedDate.getDate()}))}},{key:"hasTasksForSelectedDate",value:function(e){var t=this.tasks.filter((function(t){return t.date.getDate()===e.getDate()}));return t.length>0}},{key:"markTaskChecked",value:function(e){this.markTask(e)}}]),e}());Object(i["a"])([Object(h["b"])()],Y.prototype,"selectedDate",void 0),Object(i["a"])([Object(h["a"])()],Y.prototype,"setTask",null),Object(i["a"])([Object(h["a"])()],Y.prototype,"setDate",null),Object(i["a"])([Object(h["a"])()],Y.prototype,"markTask",null);var $=new Y;n["a"].use(N["b"]);var A=Object(h["c"])($,{strict:!1,modules:{},plugins:[]});n["a"].config.productionTip=!1,new n["a"]({store:A,render:function(e){return e(F)}}).$mount("#app")}});
//# sourceMappingURL=app.e914e5dd.js.map