(this["webpackJsonpjohn-app"]=this["webpackJsonpjohn-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),r=n(15),a=n.n(r),i=(n(20),n(6)),l=n(4),u=(n(21),n(0)),s=function(t){var e=t.note,n=t.toggleImportanceOf,o=e.important?"setUnimportant":"setImportant";return Object(u.jsx)("div",{children:Object(u.jsxs)("li",{children:[Object(u.jsx)("button",{onClick:n,children:o}),e.content]})})},f=n(3),d=n.n(f),j="/api/notes",p=function(){return d.a.get(j)},b=function(t){return d.a.post(j,t)},g=function(t,e){return d.a.put("".concat(j,"/").concat(t),e)},h=function(t){var e=Object(o.useState)([]),n=Object(l.a)(e,2),c=n[0],r=n[1],a=Object(o.useState)("a new note..."),f=Object(l.a)(a,2),d=f[0],j=f[1],h=Object(o.useState)(!0),O=Object(l.a)(h,2),m=O[0],v=O[1];Object(o.useEffect)((function(){console.log("effect"),p().then((function(t){console.log("promise fufilled"),console.log(t),r(t.data)}))}),[]),console.log("render",c.length,"notes");var x=m?c:c.filter((function(t){return!0===t.important}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:"Notes Header"}),Object(u.jsx)("button",{onClick:function(){return v(!m)},children:m?"Important":"All"}),Object(u.jsx)("ul",{children:x.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportanceOf:function(){return function(t){console.log("Note",t,"needs to be toggled.");var e=c.find((function(e){return e.id===t})),n=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});g(t,n).then((function(e){console.log("promise fulfilled"),console.log(e),r(c.map((function(n){return n.id!==t?n:e.data})))})).catch((function(n){alert("the note '".concat(e.content,"' was already deleted from server")),r(c.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:d,date:(new Date).toISOString(),important:Math.random()<.5};b(e).then((function(t){console.log("promise fulfilled"),console.log(t),r(c.concat(t.data)),j("")}))},children:[Object(u.jsx)("input",{value:d,onChange:function(t){console.log(t.target.value),j(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),r(t),a(t)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[41,1,2]]]);
//# sourceMappingURL=main.b3e2e0f9.chunk.js.map