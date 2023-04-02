(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c.n(a),n=c(2),l=c(1),o=c.n(l);c(10),c(11);function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var i,d=c(4),j=c.n(d),u=c(0),h=function(e){var t=e.todo,c=e.handleChosenTodo,a=e.chosenTodo,s=t.completed,n=t.id,l=t.title;return Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:n}),Object(u.jsx)("td",{className:"is-vcentered",children:s&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!s,"has-text-success":s}),children:l})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(t)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",{"far fa-eye":(null===a||void 0===a?void 0:a.id)!==n,"fa-eye-slash":(null===a||void 0===a?void 0:a.id)===n})})})})})]})},b=o.a.memo((function(e){var t=e.todos,c=e.handleChosenTodo,a=e.chosenTodo;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsx)(h,{todo:e,chosenTodo:a,handleChosenTodo:c},e.id)}))})]})})),m=function(e){var t=e.filterType,c=e.setFilterType,a=e.query,s=e.setQuery,n=e.applyQuery,l=e.cleanQuery;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){var t=e.target;return c(t.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){s(e.target.value),n(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){l(""),s("")},"aria-label":"Clear Search Button"})})]})]})},O=(c(13),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),x=function(e){var t=e.chosenTodo,c=e.handleChosenTodo,a=Object(l.useState)(!0),s=Object(n.a)(a,2),o=s[0],i=s[1],d=Object(l.useState)(null),j=Object(n.a)(d,2),h=j[0],b=j[1],m=Object(l.useState)(!1),x=Object(n.a)(m,2),f=x[0],p=x[1],v=t.id,y=t.title,N=t.completed,g=t.userId;return Object(l.useEffect)((function(){(function(e){return r("/users/".concat(e))})(g).then((function(e){b(e)})).catch((function(){return p(!0)})).finally((function(){return i(!1)}))}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),o?Object(u.jsx)(O,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(v)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:y}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[N?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",h&&!f?Object(u.jsx)("a",{href:"mailto:".concat(h.email),children:h.name}):Object(u.jsx)("span",{children:"--  Error, something went wrong while loading user \ud83d\ude2d  --"})]})]})]})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(i||(i={}));var f=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(!0),o=Object(n.a)(s,2),d=o[0],j=o[1],h=Object(l.useState)(null),f=Object(n.a)(h,2),p=f[0],v=f[1],y=Object(l.useState)(i.All),N=Object(n.a)(y,2),g=N[0],T=N[1],C=Object(l.useState)(""),k=Object(n.a)(C,2),w=k[0],S=k[1],A=Object(l.useState)(""),E=Object(n.a)(A,2),Q=E[0],_=E[1];Object(l.useEffect)((function(){r("/todos").then(a).catch((function(){return new Error("Sorry todos not found.")})).finally((function(){return j(!1)}))}),[]);var B=Object(l.useCallback)((function(e){v(e)}),[]),L=Object(l.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];c=setTimeout.apply(void 0,[e,t].concat(s))}}(_,1e3),[]),F=Object(l.useMemo)((function(){return c.filter((function(e){return e.title.toLowerCase().includes(Q.toLowerCase())})).filter((function(e){switch(g){case i.Completed:return e.completed;case i.Active:return!e.completed;default:return e}}))}),[c,g,Q]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(m,{filterType:g,setFilterType:T,query:w,setQuery:S,applyQuery:L,cleanQuery:_})}),Object(u.jsxs)("div",{className:"block",children:[d&&Object(u.jsx)(O,{}),!!c.length&&Object(u.jsx)(b,{todos:F,chosenTodo:p,handleChosenTodo:B})]})]})})}),p&&Object(u.jsx)(x,{chosenTodo:p,handleChosenTodo:B})]})};s.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dcde27f5.chunk.js.map