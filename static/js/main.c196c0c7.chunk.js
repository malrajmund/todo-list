(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){},73:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),i=(a(45),a(46),a.p+"static/media/logout.b8745a0e.svg"),o=a(4),u=a.n(o),l=a(14),d=a(10),p=a.n(d),j="LOGIN_SUCCESS",b="LOGIN_FAIL",m="USER_LOADED",O="LOGOUT",h="REGISTER_FAIL",g="REGISTER_SUCCESS",f="SET_ALERT",_="REMOVE_ALERT",v="CREATE_LIST",x="EDIT_LIST",y="DELETE_LIST",L="LIST_ERROR",k="GET_LISTS",N="SORT_LISTS",w=function(e){e?p.a.defaults.headers.common={Authorization:"Bearer ".concat(e)}:delete p.a.defaults.headers.common.Authorization},E=a(85),S=function(e,t,a){return function(n){var r=Object(E.a)();n({type:f,payload:{msg:e,alertType:t,id:r}}),setTimeout((function(){return n({type:_,payload:r})}),a)}},C=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&w(localStorage.token),e.prev=1,e.next=4,p.a.get("https://recruitment.ultimate.systems/users/me");case 4:a=e.sent,t({type:m,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},A=a(5),T=a(1),M=Object(A.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){localStorage.token&&localStorage.removeItem("token"),e({type:O}),e(S("Logout successfull!","danger",3e3))}}})((function(e){var t=e.logout,a=e.isAuthenticated;return Object(T.jsxs)("div",{className:"navbar",children:[Object(T.jsx)("div",{className:"navbar__div",children:"ToDo-List"}),a?Object(T.jsx)("img",{className:"navbar__img",src:i,alt:"logout",onClick:function(e){return t()}}):Object(T.jsx)(T.Fragment,{})]})})),I=a(16),D=a(3),R=a(13),W=a(2),U=a(6),F=(a(73),Object(A.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(l.a)(u.a.mark((function a(n){var r,s,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},s=JSON.stringify({identifier:e,password:t}),a.prev=2,a.next=5,p.a.post("https://recruitment.ultimate.systems/auth/local",s,r);case 5:c=a.sent,n({type:j,payload:c.data}),n(C()),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:b}),n(S(a.t0.message,"danger",3e3));case 14:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()},setAlert:S})((function(e){var t=e.login,a=e.setAlert,r=e.isAuthenticated,s=Object(n.useState)({identifier:"",password:""}),c=Object(U.a)(s,2),i=c[0],o=c[1],u=Object(n.useState)({identifierError:"",passwordError:""}),l=Object(U.a)(u,2),d=l[0],p=l[1],j=d.identifierError,b=d.passwordError,m=i.identifier,O=i.password,h=function(e){return o(Object(W.a)(Object(W.a)({},i),{},Object(R.a)({},e.target.name,e.target.value)))},g=function(e){e.preventDefault(),p({}),0===m.trim().length&&(p((function(e){return Object(W.a)(Object(W.a)({},e),{},{identifierError:"Username is empty"})})),a("Username is empty","danger",3e3)),0===O.trim().length&&(p((function(e){return Object(W.a)(Object(W.a)({},e),{},{passwordError:"Password is empty"})})),a("Password is empty","danger",3e3)),Object.values(d).forEach((function(e,t,a){if(""!==e||a.length>0)return null;console.log(t,a.length),a.length})),t(m,O)};return Object(T.jsx)(T.Fragment,{children:r?Object(T.jsx)(D.a,{to:"/todo-list/ListWrapper"}):Object(T.jsxs)("div",{className:"login",children:[Object(T.jsx)("h1",{className:"login__h1",children:"Login"}),Object(T.jsxs)("form",{onSubmit:function(e){return g(e)},className:"login__div",children:[Object(T.jsx)("input",{className:j?"login__input login__input--error":"login__input",type:"text",value:m,name:"identifier",onChange:function(e){return h(e)},placeholder:"Email or Username"}),Object(T.jsx)("input",{className:b?"login__input login__input--error":"login__input",type:"password",value:O,name:"password",onChange:function(e){return h(e)},placeholder:"Password"}),Object(T.jsx)("button",{className:"login__button",type:"submit",children:"Login"})]}),Object(T.jsx)("p",{className:"login__p",children:"or"}),Object(T.jsx)(I.b,{to:"/todo-list/register",className:"login__a",children:"create an account"})]})})}))),G=(a(78),Object(A.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(a){var n,r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},r=JSON.stringify(e),t.prev=2,t.next=5,p.a.post("https://recruitment.ultimate.systems/auth/local/register",r,n);case 5:s=t.sent,a({type:g,payload:s.data}),a(C()),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:h,payload:t.t0.message}),a(S(t.t0.message,"danger",3e3));case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.register,a=e.isAuthenticated,r=Object(n.useState)({username:"",email:"",password:"",password2:""}),s=Object(U.a)(r,2),c=s[0],i=s[1],o=Object(n.useState)({usernameError:"",emailError:"",passwordError:"",password2Error:""}),u=Object(U.a)(o,2),l=u[0],d=u[1],p=c.username,j=c.email,b=c.password,m=c.password2,O=l.usernameError,h=l.emailError,g=l.passwordError,f=l.password2Error,_=function(e){i(Object(W.a)(Object(W.a)({},c),{},Object(R.a)({},e.target.name,e.target.value)))},v=function(e){e.preventDefault(),d({}),0===p.trim().length&&d((function(e){return Object(W.a)(Object(W.a)({},e),{},{usernameError:"Username is empty"})})),0===j.trim().length&&(d((function(e){return Object(W.a)(Object(W.a)({},e),{},{emailError:"Email is empty"})})),console.log(l)),0===b.trim().length&&d((function(e){return Object(W.a)(Object(W.a)({},e),{},{passwordError:"Password is empty"})})),0===m.trim().length&&d((function(e){return Object(W.a)(Object(W.a)({},e),{},{password2Error:"Repeat your password!"})})),b!==m&&d((function(e){return Object(W.a)(Object(W.a)({},e),{},{passwordError:"Passwords doesnt not match!"})})),t(c)};return Object(T.jsx)(T.Fragment,{children:a?Object(T.jsx)(D.a,{to:"/todo-list/ListWrapper"}):Object(T.jsxs)("div",{className:"register",children:[Object(T.jsx)(I.b,{className:"register__iconWrapper",to:"/todo-list",children:Object(T.jsx)("div",{className:"register__icon"})}),Object(T.jsx)("h1",{className:"register__h1",children:"Create a new account"}),Object(T.jsxs)("form",{className:"register__inputWrapper",onSubmit:function(e){return v(e)},children:[Object(T.jsx)("input",{className:O?"register__input register__input--error":"register__input",type:"text",placeholder:"Username",name:"username",value:p,onChange:function(e){return _(e)}}),Object(T.jsx)("input",{className:h?"register__input register__input--error":"register__input",type:"text",placeholder:"Email",name:"email",value:j,onChange:function(e){return _(e)}}),Object(T.jsx)("input",{className:g?"register__input register__input--error":"register__input",type:"password",placeholder:"Password",name:"password",value:b,onChange:function(e){return _(e)}}),Object(T.jsx)("input",{className:f?"register__input register__input--error":"register__input",type:"password",placeholder:"Repeat password",value:m,name:"password2",onChange:function(e){return _(e)}}),Object(T.jsx)("button",{className:"register__button",type:"submit",children:"Create"})]})]})})}))),J=a(12),P=(a(79),a(23)),B=["id"],z=Object(A.b)(null,{createList:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(a){var n,r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},r=JSON.stringify(e),t.prev=2,t.next=5,p.a.post("https://recruitment.ultimate.systems/to-do-lists",r,n);case 5:s=t.sent,console.log(s.data),a({type:v,payload:s.data}),a(S("List created!","success",3e3)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),a({type:L}),a(S(t.t0.message,"danger",3e3));case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()},editList:function(e,t){return function(){var a=Object(l.a)(u.a.mark((function a(n){var r,s,c,i,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},s=t.name,c=t.task.map((function(e){e.id;return Object(P.a)(e,B)})),i=JSON.stringify({name:s,task:c}),a.prev=4,a.next=7,p.a.put("https://recruitment.ultimate.systems/to-do-lists/".concat(e),i,r);case 7:o=a.sent,n({type:x,payload:o.data}),n(S("List edited!","success",3e3)),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(4),n({type:L}),n(S(a.t0.message,"danger",3e3));case 16:case"end":return a.stop()}}),a,null,[[4,12]])})));return function(e){return a.apply(this,arguments)}}()},deleteList:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,p.a.delete("https://recruitment.ultimate.systems/to-do-lists/".concat(e),n);case 4:r=t.sent,a({type:y,payload:r.data}),a(S("List deleted!","info",3e3)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:L}),a(S(t.t0.message,"danger",3e3));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.name,a=e.tasks,r=e.createList,s=e.editList,c=e.deleteList,i=e.handler,o=e.id,u=Object(n.useState)({name:t,task:a?Object(J.a)(a):[]}),l=Object(U.a)(u,2),d=l[0],p=l[1],j=Object(n.useState)({id:Math.random(),name:"",isDone:!1}),b=Object(U.a)(j,2),m=b[0],O=b[1],h=function(e,t){e.preventDefault();var a=Object(J.a)(d.task);console.log(a),"checkbox"===e.target.type?a[t].isDone=e.target.checked:a[t].name=e.target.value,p({name:d.name,task:Object(J.a)(a)}),console.log(d)};return Object(T.jsxs)("div",{className:"ListModal ListModal--open",children:[Object(T.jsx)("input",{className:"ListModal__input",name:"name",value:d.name,onChange:function(e){return p(Object(W.a)(Object(W.a)({},d),{},Object(R.a)({},e.target.name,e.target.value)))}}),Object(T.jsx)("div",{className:"ListModal__line"}),Object(T.jsxs)("div",{className:"ListModal__tasks",children:[d.task?d.task.map((function(e,t){return Object(T.jsxs)("div",{className:"ListModal__task",children:[Object(T.jsx)("input",{type:"checkbox",name:"isDone",checked:e.isDone,className:"ListModal__checkbox",onChange:function(e){return h(e,t)}},Math.random()),Object(T.jsx)("input",{type:"text",name:"name",className:"ListModal__taskName",value:e.name,onChange:function(e){return h(e,t)}})]},e.id)})):Object(T.jsx)("div",{}),Object(T.jsxs)("form",{className:"ListModal__task",children:[Object(T.jsx)("input",{type:"checkbox",name:"isDone",className:"ListModal__checkbox",checked:m.isDone,onChange:function(e){return O(Object(W.a)(Object(W.a)({},m),{},Object(R.a)({},e.target.name,e.target.checked)))}}),Object(T.jsx)("input",{className:"ListModal__taskName",type:"text",value:m.name,placeholder:"New task",name:"name",onChange:function(e){return O(Object(W.a)(Object(W.a)({},m),{},Object(R.a)({},e.target.name,e.target.value)))}}),Object(T.jsxs)("div",{children:[Object(T.jsx)("button",{className:"ListModal__button ListModal__button--orange",disabled:""===m.name||m.name.length<=0,onClick:function(e){!function(e){e.preventDefault(),d.task.length>0?p(Object(W.a)(Object(W.a)({},d),{},{task:[].concat(Object(J.a)(d.task),[m])})):p(Object(W.a)(Object(W.a)({},d),{},{task:[m]}))}(e),O({name:"",isDone:!1})},type:"submit",children:"ADD"}),Object(T.jsx)("button",{onClick:function(e){O({name:"",isDone:!1}),e.preventDefault()},className:"ListModal__button ListModal__button--darkOrange",children:"CANCEL"})]})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("button",{className:"ListModal__button ListModal__button--gray",onClick:i,children:"CANCEL"}),Object(T.jsx)("button",{className:"ListModal__button ListModal__button--orange",onClick:function(e){o?s(o,d):r(d),i()},disabled:0===d.task.length||d.name.length<=0,children:"SAVE"}),Object(T.jsx)("button",{className:"ListModal__button ListModal__button--darkOrange",onClick:function(e){c(o),i()},children:"DELETE"})]})]})})),V=(a(80),function(e){var t=e.name,a=e.createdAt,r=e.completed,s=e.uncompleted,c=e.tasks,i=e.id,o=Object(n.useState)(!1),u=Object(U.a)(o,2),l=u[0],d=u[1],p=function(){d(!l)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"ListItem",onClick:p,children:[Object(T.jsx)("div",{className:"ListItem__name",children:t}),Object(T.jsx)("div",{className:"ListItem__date",children:"Created at: "+a.substr(0,19).replace("T"," ")}),Object(T.jsxs)("div",{className:"ListItem__wrapper",children:[Object(T.jsx)("div",{className:"ListItem__completed",children:"Completed: "+r}),Object(T.jsx)("div",{className:"ListItem__uncompleted",children:"Uncompleted: "+s}),Object(T.jsx)("div",{className:"ListItem__all",children:"All: "+(r+s)})]})]}),l?Object(T.jsx)(z,{id:i,name:t,tasks:c,handler:p}):null]})}),H=(a(81),Object(A.b)((function(e){return{list:e.list,auth:e.auth}}),{getLists:function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,p.a.get("https://recruitment.ultimate.systems/to-do-lists",a);case 4:n=e.sent,t({type:k,payload:n.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:L}),t(S(e.t0.message,"danger",3e3));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},sortLists:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,p.a.get("https://recruitment.ultimate.systems/to-do-lists?_sort=".concat(e),n);case 4:r=t.sent,console.log(r.data),a({type:N,payload:r.data}),a(S("List sorted!","info",3e3)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),a({type:L}),a(S(t.t0.message,"danger",3e3));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getLists,a=e.sortLists,r=e.list,s=r.loading,c=r.list,i=e.auth,o=Object(n.useState)(!1),u=Object(U.a)(o,2),l=u[0],d=u[1],p=function(){d(!l)},j=Object(n.useState)(""),b=Object(U.a)(j,2),m=b[0],O=b[1],h=Object(n.useState)(["name","created_at","updated_at"]),g=Object(U.a)(h,2),f=g[0],_=(g[1],function(e,t){var a=0,n=0;return e.task.map((function(e){return!0===e.isDone?a++:n++})),"completed"===t?a:n});return Object(n.useEffect)((function(){i.loading||t()}),[i.loading,t]),Object(T.jsxs)("div",{className:"ListWrapper",children:[Object(T.jsxs)("div",{className:"ListWrapper__inputWrapper",children:[Object(T.jsx)("input",{type:"text",placeholder:"Search",name:"search",className:"ListWrapper__input",value:m,onChange:function(e){return O(e.target.value)}}),Object(T.jsx)("select",{id:"options",name:"Sort by",className:"ListWrapper__select",onChange:function(e){!function(e){f[e.target.value]}(e),a(e.target.value)},children:f.map((function(e){return Object(T.jsx)("option",{value:e,children:e})}))})]}),s?Object(T.jsx)("div",{className:"ListWrapper__loading"}):c.map((function(e){return e.name.toLowerCase().trim().includes(m.toLowerCase().trim())?Object(T.jsx)(V,{name:e.name,createdAt:e.created_at,completed:_(e,"completed"),uncompleted:_(e),tasks:e.task,handler:p,id:e.id},e.id):null})),c&&0===c.length&&!s?Object(T.jsx)("div",{className:"ListWrapper__info",children:"Nothing here :/"}):null,Object(T.jsx)("div",{className:"ListWrapper__addButton",onClick:p}),l?Object(T.jsx)(z,{name:"List name",handler:p}):null]})}))),q=["component","auth"],K=Object(A.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=a.isAuthenticated,r=a.loading,s=Object(P.a)(e,q);return Object(T.jsx)(D.b,Object(W.a)(Object(W.a)({},s),{},{render:function(e){return n||r?Object(T.jsx)(t,Object(W.a)({},e)):Object(T.jsx)(D.a,{to:"/todo-list"})}}))})),Q=a(18),X=a(39),Y=a(40),Z={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,error:null};var $=[];var ee={list:[],loading:!0};var te=Object(Q.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m:return Object(W.a)(Object(W.a)({},e),{},{isAuthenticated:!0,loading:!1});case j:case g:return localStorage.setItem("token",n.jwt),Object(W.a)(Object(W.a)({},e),{},{token:n.jwt,isAuthenticated:!0,loading:!1});case h:case b:case O:return localStorage.removeItem("token"),Object(W.a)(Object(W.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,error:n});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case f:return[].concat(Object(J.a)(e),[n]);case _:return e.filter((function(e){return e.id!==n}));default:return e}},list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case v:return Object(W.a)(Object(W.a)({},e),{},{list:[].concat(Object(J.a)(e.list),[n]),loading:!1});case k:case N:return Object(W.a)(Object(W.a)({},e),{},{list:Object(J.a)(n),loading:!1});case x:return Object(W.a)(Object(W.a)({},e),{},{list:[].concat(Object(J.a)(e.list.filter((function(e){return e.id!==n.id}))),[n]),loading:!1});case L:return Object(W.a)(Object(W.a)({},e),{},{loading:!1});case y:return Object(W.a)(Object(W.a)({},e),{},{list:Object(J.a)(e.list.filter((function(e){return e.id!==n.id}))),loading:!1});default:return e}}}),ae=[Y.a],ne=Object(Q.createStore)(te,{},Object(X.composeWithDevTools)(Q.applyMiddleware.apply(void 0,ae))),re=(a(82),Object(A.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return Object(T.jsx)(T.Fragment,{children:null!==t&&t.length>0?t.map((function(e){return Object(T.jsx)("div",{className:"alert alert--".concat(e.alertType),children:e.msg},e.id)})):Object(T.jsx)(T.Fragment,{})})}))),se=function(){return Object(n.useEffect)((function(){localStorage.token&&w(localStorage.token),ne.dispatch(C())}),[]),Object(T.jsx)(A.a,{store:ne,children:Object(T.jsxs)(I.a,{children:[Object(T.jsx)(M,{}),Object(T.jsx)(re,{}),Object(T.jsxs)(D.d,{children:[Object(T.jsx)(D.b,{exact:!0,path:"/todo-list",component:F}),Object(T.jsx)(D.b,{exact:!0,path:"/todo-list/register",component:G}),Object(T.jsx)(K,{exact:!0,path:"/todo-list/ListWrapper",component:H})]})]})})};c.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(se,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.c196c0c7.chunk.js.map