(this["webpackJsonpkeeper-part-3-starting"]=this["webpackJsonpkeeper-part-3-starting"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),u=n(7),o=n(3);var i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Keeper"))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))};var E=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.deleteNote(e.id)}},"DELETE"))},f=n(4);var d=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),l=n[0],c=n[1];function u(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(f.a)(Object(f.a)({},e),{},{[n]:a})}))}return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{onChange:u,value:l.title,name:"title",placeholder:"Title"}),r.a.createElement("textarea",{onChange:u,value:l.content,name:"content",placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.addNote(l),c({title:"",content:""})}},"Add")))};var p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];function c(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(d,{addNote:function(e){l((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,deleteNote:c})})),r.a.createElement(m,null))};c.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c5618e88.chunk.js.map