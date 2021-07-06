(this["webpackJsonpreact-test-task"]=this["webpackJsonpreact-test-task"]||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(19),a=n.n(c),r=n(7),s=n(2),i=(n(10),n(0)),b=function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)(r.c,{to:"/book",exact:!0,className:"navbar-item is-tab",activeClassName:"is-active",children:"Dashboard"}),Object(i.jsx)(r.c,{to:"/addbook",className:"navbar-item is-tab",activeClassName:"is-active",children:"Add a Book"})]})},l=n(9),u=(n(31),function(t){var e=t.book,n=t.onBookDeleted;return Object(i.jsxs)("tr",{className:"Book",children:[Object(i.jsx)("td",{children:e.title}),Object(i.jsx)("td",{children:e.author}),Object(i.jsx)("td",{children:e.category}),Object(i.jsx)("td",{children:e.isbn}),Object(i.jsxs)("td",{children:[Object(i.jsx)(r.b,{className:"Book__button button button--edit",to:"/book/".concat(e.id),children:"EDIT"}),Object(i.jsx)("button",{type:"button",className:"Book__button button button--delete",onClick:function(){n(e.id)},children:"DELETE"})]})]},e.id)}),j=function(t,e){return fetch("".concat("https://books-data-base.herokuapp.com").concat(t),e).then((function(t){return t.json()}))},h=function(t){return e="/books/".concat(t),j(e,{method:"DELETE"});var e};function d(t){return function(t,e){return j(t,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)})}("/books",t)}var m=function(t){var e=t.id,n=t.title,o=t.author,c=t.category,a=t.isbn;return function(t,e){var n=e.title,o=e.author,c=e.category,a=e.isbn;return j(t,{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({title:n,author:o,category:c,isbn:a})})}("/books/".concat(e),{title:n,author:o,category:c,isbn:a})},O=(n(32),function(){var t=Object(o.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1];Object(o.useEffect)((function(){j("/books").then((function(t){return c(t)}))}),[n]);var a=function(t){h(t).then((function(){c((function(e){return e.filter((function(e){return e.id!==t}))}))}))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("table",{className:"BooksTable table  is-striped is-narrow is-hoverable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"BooksTable__title",children:"Title"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"Author"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"Category"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"ISBN"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"Action"})]})}),Object(i.jsx)("tbody",{children:n.map((function(t){return Object(i.jsx)(u,{book:t,books:n,onBookDeleted:a},t.id)}))})]})})}),f=(n(33),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"Dashboard__title title",children:"Books Table"}),Object(i.jsx)(O,{})]})}),k=n(12),x=n(13),p=(n(34),n(35),n(36),function(t){var e=t.errors;return console.log(e),Object(i.jsx)("div",{className:"Errors",children:Object.values(e).map((function(t){return Object(i.jsx)("p",{children:t})}))})}),v=function(t){var e=t.match,n=Object(o.useState)([]),c=Object(l.a)(n,2),a=c[0],r=c[1],b=Object(o.useState)(!1),u=Object(l.a)(b,2),h=u[0],O=u[1],f=Object(o.useState)({title:"",author:"",category:"",isbn:""}),v=Object(l.a)(f,2),g=v[0],N=v[1],y=e.params.bookId,B=Object(s.g)();Object(o.useEffect)((function(){(function(t){return j("/books/".concat(t))})(y).then((function(t){return N(Object(x.a)({},t))})),j("/categories").then((function(t){return r(t)}))}),[y]);var _=function(t){y?m(t):d(t),C()},T=Object(o.useMemo)((function(){var t={};for(var e in g)switch(e){case"title":t.emptyTitle=0===g[e].length?"The book title field cannot be blank":"";break;case"author":t.emptyAuthor=""===g[e]?"The book author field cannot be blank":"",t.numberInAuthor=g[e].match(/\d+/g)?"The book author cannot contain numbers":"";break;case"category":t.noCategory=""===g[e]?"Select book category":"";break;case"isbn":t.emptyISBN=""===g[e]?"The book ISBN field cannot be blank":"",t.lettersInISBN=g[e].match(/[a-zA-Z]/g)?"The book ISBN cannot contain letters":"",t.lengthISBN=13===g[e].length?"":"The book ISBN field must contain 13 digits"}return t}),[g]),S=function(){var t=0;for(var e in T)T[e].length>0&&t++;return t},I=function(t){t.preventDefault();var e=t.target,n=e.name,o=e.value;N((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(k.a)({},n,o))}))},C=function(){B.replace("/book")};return Object(i.jsxs)("div",{className:"BookForm",children:[Object(i.jsxs)("form",{className:"BookForm__form ",onSubmit:function(t){t.preventDefault(),O(!0),0===S()&&_(g)},action:"/book",children:[Object(i.jsx)("input",{className:"input is-small field is-grouped-centered",name:"title",type:"text",placeholder:"Title of book",value:g.title,onChange:I}),Object(i.jsx)("input",{className:"input is-small field",name:"author",type:"text",placeholder:"Author of book",value:g.author,onChange:I}),Object(i.jsxs)("select",{name:"category",id:"category",className:"BookForm__select select is-small field",onChange:I,value:g.category,children:[Object(i.jsx)("option",{value:"0",hidden:!0,selected:!0,children:"Select category of book"}),a.map((function(t){return Object(i.jsx)("option",{value:t.name,children:t.name},t.id)}))]}),Object(i.jsx)("input",{className:"input is-small field",name:"isbn",type:"text",placeholder:"ISBN of book",value:g.isbn,onChange:I}),Object(i.jsx)("button",{type:"submit",className:"BookForm__button button",children:"Save"})]}),Object(i.jsx)("div",{className:"BookForm__errors errors",children:h&&Object(i.jsx)(p,{errors:T})})]})},g=(n(37),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{}),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{exact:!0,path:"/book",children:Object(i.jsx)(f,{})}),Object(i.jsx)(s.b,{path:"/addbook",component:v}),Object(i.jsx)(s.b,{exact:!0,path:"/book/:bookId",component:v}),Object(i.jsx)(s.a,{path:"/",to:"/book"})]})})]})});a.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2bdcff6f.chunk.js.map