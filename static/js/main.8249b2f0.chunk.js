(this["webpackJsonpreact-test-task"]=this["webpackJsonpreact-test-task"]||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(21),a=n.n(o),r=n(8),s=n(2),i=n(0),l=function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)(r.c,{to:"/",exact:!0,className:"navbar-item is-tab",children:"Dashboard"}),Object(i.jsx)(r.c,{to:"/addbook",className:"navbar-item is-tab",children:"Add a Book"})]})},u=n(5),b=(n(11),n(34),function(t){var e=t.book,n=t.onBookDeleted;return Object(i.jsxs)("tr",{className:"Book",children:[Object(i.jsx)("td",{children:e.title}),Object(i.jsx)("td",{children:e.author}),Object(i.jsx)("td",{children:e.category}),Object(i.jsx)("td",{children:e.isbn}),Object(i.jsxs)("td",{children:[Object(i.jsx)(r.b,{className:"Book__button bZutton button--edit",to:{pathname:"/editbook/:book.id",state:{book:e,isEditing:!0}},children:"EDIT"}),Object(i.jsx)("button",{type:"button",className:"Book__button button button--delete",onClick:function(){n(e.id)},children:"DELETE"})]})]},e.id)}),j=function(t,e){return fetch("".concat("http://localhost:3004").concat(t),e).then((function(t){return t.json()}))},d=function(){return j("/books")},h=function(t){return e="/books/".concat(t),j(e,{method:"DELETE"});var e};function O(t){return function(t,e){return j(t,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)})}("/books",t)}var f=function(t){var e=t.id,n=t.title,c=t.author,o=t.category,a=t.isbn;return function(t,e){var n=e.title,c=e.author,o=e.category,a=e.isbn;return j(t,{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({title:n,author:c,category:o,isbn:a})})}("/books/".concat(e),{title:n,author:c,category:o,isbn:a})},m=(n(35),function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1];Object(c.useEffect)((function(){d().then((function(t){return o(t)}))}),[]);var a=function(t){h(t).then((function(){o((function(e){return e.filter((function(e){return e.id!==t}))}))}))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("table",{className:"BooksTable table is-fullwidth",children:[Object(i.jsxs)("thead",{children:[Object(i.jsx)("th",{className:"BooksTable__title",children:"Title"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"Author"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"Category"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"ISBN"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"Action"})]}),Object(i.jsx)("tbody",{children:n.map((function(t){return Object(i.jsx)(b,{book:t,books:n,onBookDeleted:a})}))})]})})}),p=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"Books List"}),Object(i.jsx)(m,{})]})},x=n(15),k=n(9),g=(n(36),function(){return j("/categories")}),N=(n(37),function(t){var e=t.errors;return Object(i.jsxs)("div",{className:"ErrorsPlace",children:[Object(i.jsx)("p",{children:e.emptyTitle}),Object(i.jsx)("p",{children:e.emptyAuthor}),Object(i.jsx)("p",{children:e.numberInAuthor}),Object(i.jsx)("p",{children:e.noCategory}),Object(i.jsx)("p",{children:e.emptyISBN}),Object(i.jsx)("p",{children:e.lettersInISBN}),Object(i.jsx)("p",{children:e.lengthISBN})]})}),v=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)(!1),r=Object(u.a)(a,2),l=r[0],b=r[1],d=Object(c.useState)({title:"",author:"",category:"",ISBN:""}),h=Object(u.a)(d,2),f=h[0],m=h[1],p=Object(s.g)();Object(c.useEffect)((function(){g().then((function(t){return o(t)}))}),[]);var v=function(t){0!==t&&function(t){return j("/categories/".concat(t))}(t).then((function(t){return m(Object(k.a)(Object(k.a)({},f),{},{category:t.name}))}))},y=Object(c.useMemo)((function(){var t={emptyTitle:"",emptyAuthor:"",numberInAuthor:"",noCategory:"",emptyISBN:"",lettersInISBN:"",lengthISBN:""};for(var e in f)switch(e){case"title":t.emptyTitle=""===f[e]?"The book title field cannot be blank":"";break;case"author":t.emptyAuthor=""===f[e]?"The book author field cannot be blank":"",t.numberInAuthor=f[e].match(/\d+/g)?"The book author cannot contain numbers":"";break;case"category":t.noCategory=""===f[e]?"Select book category":"";break;case"ISBN":t.emptyISBN=""===f[e]?"The book ISBN field cannot be blank":"",t.lettersInISBN=f[e].match(/[a-zA-Z]/g)?"The book ISBN cannot contain letters":"",t.lengthISBN=13===f[e].length?"":"The book ISBN field must contain 13 digits"}return t}),[f]),B=function(t){t.preventDefault();var e=t.target,n=e.name,c=e.value;m((function(t){return Object(k.a)(Object(k.a)({},t),{},Object(x.a)({},n,c))}))},S=function(){var t=0;for(var e in y)y[e].length>0&&t++;return t},I=function(t){O({title:t.title,author:t.author,category:t.category,isbn:t.ISBN}),_()},_=function(){return p.replace("/")};return Object(i.jsxs)("div",{className:"AddBook",children:[Object(i.jsxs)("form",{className:"AddBook__form ",onSubmit:function(t){t.preventDefault(),b(!0),0===S()&&I(Object(k.a)({},f))},children:[Object(i.jsx)("input",{className:"input is-small field is-grouped-centered",name:"title",type:"text",placeholder:"Title of book",value:f.title,onChange:B}),Object(i.jsx)("input",{className:"input is-small field",name:"author",type:"text",placeholder:"Author of book",value:f.author,onChange:B}),Object(i.jsxs)("select",{name:"category",id:"category",className:"AddBook__select select is-small field",onChange:function(t){return v(+t.target.value)},children:[Object(i.jsx)("option",{value:"0",hidden:!0,selected:!0,children:"Select category of book"}),n.map((function(t){return Object(i.jsx)("option",{value:t.id,children:t.name},t.id)}))]}),Object(i.jsx)("input",{className:"input is-small field",name:"ISBN",type:"text",placeholder:"ISBN of book",value:f.ISBN,onChange:B}),Object(i.jsx)("button",{type:"submit",className:"AddBook__button button",children:"Add book"})]}),Object(i.jsx)("div",{className:"AddBook__errors errors",children:l&&Object(i.jsx)(N,{errors:y})})]})},y=n(23),B=(n(38),function(){var t=Object(s.h)();console.log(t.state);var e=t.state.book,n=Object(c.useState)([]),o=Object(u.a)(n,2),a=o[0],r=o[1],l=Object(c.useState)(e?e.title:""),b=Object(u.a)(l,2),j=b[0],h=b[1],O=Object(c.useState)(e?e.author:""),m=Object(u.a)(O,2),p=m[0],x=m[1],N=Object(c.useState)(e?e.category:""),v=Object(u.a)(N,2),B=v[0],S=v[1],I=Object(c.useState)(e?e.isbn:""),_=Object(u.a)(I,2),T=_[0],A=_[1],C=Object(c.useState)([]),E=Object(u.a)(C,2),D=E[0],F=E[1];Object(c.useEffect)((function(){g().then((function(t){return r(t)})),d().then((function(t){return F(t)}))}),[]);var w=Object(s.g)(),q=function(t){!function(t){var e=Object(y.a)(D),n=D.findIndex((function(e){return e.id===t.id}));e.splice(n,1,t),F(e),f(t)}(Object(k.a)(Object(k.a)({},e),t))},J=function(){return w.push("/")};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{className:"AddBook__form",onSubmit:function(t){t.preventDefault(),q({title:j,author:p,category:B,isbn:T}),J()},children:[Object(i.jsx)("input",{className:"input is-small",name:"title",type:"text",placeholder:"Title of book",value:j,onChange:function(t){return h(t.target.value)},required:!0}),Object(i.jsx)("input",{className:"input is-small",type:"text",placeholder:"Author of book",value:p,onChange:function(t){return x(t.target.value)},required:!0}),Object(i.jsxs)("select",{name:"category",id:"category",className:" select is-small",onChange:function(t){return S(t.target.value)},value:B,required:!0,children:[Object(i.jsx)("option",{value:"0",children:"Select category of book"}),a.map((function(t){return Object(i.jsx)("option",{value:t.name,children:t.name},t.id)}))]}),Object(i.jsx)("input",{className:"input is-small",name:"isbn",type:"text",placeholder:"ISBN of book",value:T,onChange:function(t){return A(t.target.value)},required:!0}),Object(i.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Save"})]})})}),S=(n(39),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{exact:!0,path:"/",children:Object(i.jsx)(p,{})}),Object(i.jsx)(s.b,{path:"/addbook",component:v}),Object(i.jsx)(s.b,{path:"/editbook",component:B}),Object(i.jsx)(s.a,{path:"/home",to:"/"})]})})]})});a.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(S,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8249b2f0.chunk.js.map