(this["webpackJsonpjs-band-final-task"]=this["webpackJsonpjs-band-final-task"]||[]).push([[0],{34:function(e,t,a){e.exports=a(57)},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),i=a(2),l=a(13),s=a(15),u=(a(43),{userSignOut:function(){return{type:"SIGN_OUT"}}}),m=Object(s.g)(Object(i.b)((function(e){return{booksInCart:e.bookDetails.booksInCart,username:e.userData.user.username,avatar:e.userData.user.avatar,token:e.userData.user.token,isAuthorized:e.userData.isAuthorized}}),u)((function(e){var t=e.username,a=e.avatar,n=e.isAuthorized,o=e.booksInCart,c=e.history,i=e.userSignOut,s=r.a.createElement("div",{className:"shop-menu"},r.a.createElement(l.b,{to:"/cart"},r.a.createElement("i",{className:"cart fa fa-shopping-cart"}),r.a.createElement("span",{className:"cart-count"},o)),r.a.createElement("div",{className:"menu-item"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){i(),c.push("/signin")}},"Sign-Out")),r.a.createElement("div",{className:"menu-item row"},r.a.createElement("img",{src:a,alt:"avatar",className:"rounded-circle"}),r.a.createElement("div",{className:"user-name"},t)));return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(l.b,{to:"/books"},r.a.createElement("div",{className:"logo"},"JS BAND STORE / Oleksandr Romanov")),n?s:null)}))),d=a(3),b=a(4),p=a(7),f=a(6),h=a(8),E=(a(45),function(e){var t=e.book,a=e.onView,n=t.title,o=t.author,c=t.price,i=t.cover;return r.a.createElement("div",{className:"book-list-item"},r.a.createElement("img",{src:i,alt:"cover",className:"cart-img-top"}),r.a.createElement("div",{className:"book-details"},r.a.createElement("div",{className:"book-title"},n),r.a.createElement("div",{className:"book-author"},o)),r.a.createElement("div",{className:"book-footer"},r.a.createElement("div",{className:"book-price"},c," $"),r.a.createElement("button",{onClick:a,className:"btn btn-primary"},"View")))}),v=a(19),O=a.n(v),k=a(27),g=new(function(){function e(){Object(d.a)(this,e),this._url="https://js-band-api.glitch.me"}return Object(b.a)(e,[{key:"fetchData",value:function(){var e=Object(k.a)(O.a.mark((function e(t,a){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._url).concat(t),a);case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Invalid request");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(k.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.fetchData(t,{mode:"cors",headers:{Authorization:"Bearer ".concat(a)}}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"post",value:function(e,t,a){var n={"Content-Type":"application/json"};return a&&(n.Authorization="Bearer ".concat(a)),this.fetchData(e,{method:"POST",mode:"cors",headers:n,body:JSON.stringify(t)})}}]),e}()),y=(a(47),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"loadingio-spinner-double-ring-5gwf7wyqw2d"},r.a.createElement("div",{className:"ldio-mrii3anle"},r.a.createElement("div",null," "),r.a.createElement("div",null," "),r.a.createElement("div",null,r.a.createElement("div",null," ")),r.a.createElement("div",null,r.a.createElement("div",null," ")))))}),j=(a(48),function(e){var t=e.books,a=e.onView;return r.a.createElement("ul",{className:"book-list"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(E,{book:e,onView:function(){return a(e.id)}}))})))}),C=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.booksLoaded,a=e.booksRequested,n=e.token;a(),g.get("/books",n).then((function(e){return t(e)})).catch((function(){}))}},{key:"search",value:function(e,t){return 0===t?e:e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"filterByPrice",value:function(e,t){switch(t){case"all":return e;case"0-15":return e.filter((function(e){return e.price>=0&&e.price<15}));case"15-30":return e.filter((function(e){return e.price>=15&&e.price<=30}));case">30":return e.filter((function(e){return e.price>30}));default:return e}}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.loading,n=e.searchText,o=e.filterPrice,c=e.onView,i=e.isAuthorized;if(a)return r.a.createElement(y,null);if(!i)return r.a.createElement("div",null,"Not Found");if(t){var l=this.filterByPrice(this.search(t,n),o);return r.a.createElement(j,{onView:c,books:l})}}}]),t}(r.a.Component),S={booksLoaded:function(e){return{type:"FETCH_BOOKS_SUCCESS",payload:e}},booksRequested:function(){return{type:"FETCH_BOOKS_REQUEST"}}},N=Object(i.b)((function(e){return{books:e.bookList.books,searchText:e.bookList.searchText,filterPrice:e.bookList.filterPrice,token:e.userData.user.token,isAuthorized:e.userData.isAuthorized,loading:e.bookList.loading}}),S)(C),w=(a(49),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onSearchChange=function(e){var t=e.target;(0,a.props.searchBooks)(t.value)},a.handleFilterChange=function(e){var t=e.target;(0,a.props.filterBooks)(t.value)},a}return Object(h.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchText,a=e.filterPrice;return r.a.createElement("div",{className:"filter-wrapper"},r.a.createElement("input",{type:"search",className:"form-control",placeholder:"search by title",onChange:this.onSearchChange,value:t}),r.a.createElement("select",{className:"select-status select",key:"status",onChange:this.handleFilterChange,value:a},r.a.createElement("option",{value:"all"},"Price"),r.a.createElement("option",{value:"0-15"},"0-15"),r.a.createElement("option",{value:"15-30"},"15-30"),r.a.createElement("option",{value:">30"},">30")))}}]),t}(r.a.Component)),D={searchBooks:function(e){return{type:"SEARCH_BOOKS",payload:{searchText:e}}},filterBooks:function(e){return{type:"FILTER_BOOKS",payload:{filterPrice:e}}}},T=Object(i.b)((function(e){return{searchText:e.bookList.searchText,filterPrice:e.bookList.filterPrice}}),D)(w),P=(a(50),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).trackScroll=function(){var t=window.pageYOffset,a=document.documentElement.clientHeight;t>a&&e.setState({isScrolled:!0}),t<a&&e.setState({isScrolled:!1})},e.backToTop=function(){window.pageYOffset>0&&(window.scrollBy(0,-100),setTimeout(e.backToTop,0))},e.state={isScrolled:!1},e}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.trackScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.trackScroll)}},{key:"render",value:function(){var e=this.state.isScrolled?"show":"";return r.a.createElement("div",{className:"back-top ".concat(e),title:"Go to top",onClick:this.backToTop},r.a.createElement("i",{className:"fa fa-arrow-circle-up","aria-hidden":"true"}," "))}}]),t}(r.a.Component)),x=Object(s.g)((function(e){var t=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(T,null),r.a.createElement(N,{onView:function(e){t.push("/books/".concat(e))}}),r.a.createElement(P,null))})),I=(a(51),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).onCountChange=function(t){var a=t.target;e.setState({booksCount:parseFloat(a.value)})},e.onSubmit=function(t){t.preventDefault();var a=e.props,n=a.book,r=a.bookAddedToCart,o=e.state.booksCount;r(n.id,o),e.setState({booksCount:0})},e.state={booksCount:1},e}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.bookLoaded,a=e.bookRequested,n=e.bookId,r=e.token;a(),g.get("/books/".concat(n),r).then((function(e){t(e)}))}},{key:"render",value:function(){var e=this.props,t=e.book,a=e.loading,n=e.maxCount,o=e.minCount,c=e.cartItems,i=e.isAuthorized,l=this.state.booksCount,s=c.findIndex((function(e){return e.id===t.id})),u=c[s],m=u?u.count:0;if(a)return r.a.createElement(y,null);if(!i)return r.a.createElement("div",null,"Not Found");if(t){var d=t.title,b=t.author,p=t.level,f=t.tags,h=t.cover,E=t.description,v=t.price,O=n-m,k=l<=O||isNaN(l)?"is-valid":"is-invalid",g=(v*l).toFixed(2),j=isNaN(l)?0:g;return r.a.createElement("main",{className:"container book-page"},r.a.createElement("div",{className:"book-details-wrapper"},r.a.createElement("div",{className:"main-details"},r.a.createElement("img",{src:h,alt:"cover",className:"cart-img"}),r.a.createElement("div",{className:"book-details"},r.a.createElement("div",{className:"book-title"},r.a.createElement("b",null,"Title: "),d),r.a.createElement("div",{className:"book-author"},r.a.createElement("b",null,"Author: "),b),r.a.createElement("div",{className:"book-level"},r.a.createElement("b",null,"Level: "),p),r.a.createElement("div",{className:"book-tags"},r.a.createElement("b",null,"Tags: "),f))),r.a.createElement("div",{className:"description"},r.a.createElement("b",null,"Description: "),E)),r.a.createElement("form",{className:"price-wrapper",onSubmit:this.onSubmit},r.a.createElement("div",{className:"price-counter"},r.a.createElement("div",{className:"price-item"},r.a.createElement("b",null,"Price, $"),r.a.createElement("b",null,v)),r.a.createElement("label",{className:"counter-wrapper",htmlFor:"count-input"},r.a.createElement("b",null,"Count"),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("input",{type:"number",className:"counter form-control ".concat(k),onChange:this.onCountChange,max:O,min:o,value:l,id:"count-input",required:!0}),r.a.createElement("div",{className:"invalid-feedback"},"We don't have so much =("))),r.a.createElement("div",{className:"price-item"},r.a.createElement("b",null,"Total price"),r.a.createElement("b",null,j))),r.a.createElement("button",{className:"btn btn-primary add-to-cart",type:"submit"},"Add to cart")))}}}]),t}(r.a.Component)),A={bookLoaded:function(e){return{type:"FETCH_BOOK_SUCCESS",payload:e}},bookRequested:function(){return{type:"FETCH_BOOK_REQUEST"}},bookAddedToCart:function(e,t){return{type:"BOOK_ADDED_TO_CART",payload:{bookId:e,count:t}}}},_=Object(i.b)((function(e){return{book:e.bookDetails.book,maxCount:e.bookDetails.maxCount,minCount:e.bookDetails.minCount,cartItems:e.bookDetails.cartItems,token:e.userData.user.token,isAuthorized:e.userData.isAuthorized,loading:e.bookDetails.loading}}),A)(I),F=function(e){var t=e.bookId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(_,{bookId:t}))},B=(a(52),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).purchase=function(){var t=e.props,a=t.items,n=t.token,r=t.purchaseBooks;(0,t.purchaseRequest)(),g.post("/purchase",{books:a},n).then((function(t){r(),e.setState({isShow:!0,message:t.message})}))},e.renderRow=function(e){var t=e.id,a=e.title,n=e.count,o=e.totalPrice;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,o))},e.renderEmptyCart=function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement("i",{className:"cart fa fa-shopping-cart cartEmpty"}),r.a.createElement("p",{className:"cartEmptyText"},"Cart empty..."))},e.renderFilledCart=function(t,a){return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Book title:"),r.a.createElement("th",null,"Count:"),r.a.createElement("th",null,"Total price:"))),r.a.createElement("tbody",null,t.map(e.renderRow))),r.a.createElement("div",{className:"total"},"Total price, $ ",a))},e.renderCartItems=function(){var t=e.props,a=t.isCartEmpty,n=t.items,o=t.total,c=e.state,i=c.message;return c.isShow?r.a.createElement("div",{className:"purchase-message"},i):a?e.renderEmptyCart():e.renderFilledCart(n,o)},e.state={isShow:!1,message:null},e}return Object(h.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isCartEmpty,a=e.loadingC;return r.a.createElement("div",{className:"cart-container"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.purchase,disabled:t},"Purchase"),a?r.a.createElement(y,null):this.renderCartItems())}}]),t}(r.a.Component)),R={purchaseBooks:function(){return{type:"PURCHASE_SUCCESS"}},purchaseRequest:function(){return{type:"PURCHASE_REQUEST"}}},z=Object(i.b)((function(e){return{items:e.bookDetails.cartItems,total:e.bookDetails.orderTotal,isCartEmpty:e.bookDetails.isCartEmpty,token:e.userData.user.token,loadingC:e.bookDetails.loadingC}}),R)(B),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(z,null))},U=(a(53),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).onChange=function(t){var a=t.target;e.setState({username:a.value})},e.onSubmit=function(t){t.preventDefault();var a=e.state.username,n=e.props.history;g.post("/signin",{username:a}).then((function(t){e.props.userSignIn(t),localStorage.setItem("userData",JSON.stringify(t)),console.log(t,localStorage)})).then((function(){n.push("/books")}))},e.state={username:"",minLength:4,maxLength:16},e}return Object(h.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.minLength,n=e.maxLength,o=this.props.isAuthorized,c=t.length>=a&&t.length<=n?"is-valid":"is-invalid";return o?r.a.createElement("div",{className:"already-authorized"},"You are already authorized"):r.a.createElement("div",{className:"container d-flex justify-content-center"},r.a.createElement("form",{className:"d-flex flex-column align-items-center",onSubmit:this.onSubmit},r.a.createElement("img",{src:"https://api.adorable.io/avatars/100/orange.png",alt:"avatar",className:"sign-in-avatar"}),r.a.createElement("label",{className:"d-flex flex-column align-items-center",htmlFor:"sign-in-input"},r.a.createElement("b",null,"Username"),r.a.createElement("div",{className:"d-flex flex-column justify-content-start mt-2"},r.a.createElement("input",{type:"text",className:"form-control ".concat(c),onChange:this.onChange,maxLength:n,minLength:a,value:t,placeholder:"type Username",id:"sign-in-input",required:!0}),r.a.createElement("div",{className:"invalid-feedback text-center"},"Field is not valid!"))),r.a.createElement("button",{className:"btn btn-primary sign-in w-100",type:"submit"},"Sign-In")))}}]),t}(r.a.Component)),H={userSignIn:function(e){return{type:"SIGN_IN",payload:e}}},K=Object(s.g)(Object(i.b)((function(e){return{isAuthorized:e.userData.isAuthorized}}),H)(U)),Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(K,null))},q=(a(54),function(){return r.a.createElement("div",{className:"not-found"},"Not Found")}),G=function(){return r.a.createElement(q,null)},V=a(32),J=Object(i.b)((function(e){return{isAuthorized:e.userData.isAuthorized}}))((function(e){var t=e.component,a=e.isAuthorized,n=Object(V.a)(e,["component","isAuthorized"]);return r.a.createElement(s.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(G,null)}}))})),M=(a(55),Object(i.b)((function(e){return{isAuthorized:e.userData.isAuthorized,booksQuantity:e.bookList.booksQuantity}}))((function(e){var t=e.isAuthorized;return r.a.createElement("div",{className:"container"},r.a.createElement(s.d,null,r.a.createElement(s.a,{from:"/",to:t?"/books":"/signin",exact:!0}),r.a.createElement(s.b,{path:"/signin",component:Q}),r.a.createElement(J,{path:"/books",component:x,exact:!0}),r.a.createElement(J,{path:"/cart",component:L}),r.a.createElement(J,{path:"/books/:id",component:function(e){var t=e.match,a=e.booksQuantity,n=t.params.id;return n>(a||77)?r.a.createElement(G,null):r.a.createElement(F,{bookId:n})}}),r.a.createElement(s.b,{component:G})))}))),W=(a(56),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).state={hasError:!1},e}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"error-boundry"},"Ops... Something went wrong"):this.props.children}}]),t}(r.a.Component)),Y=a(16),$=a(33),X=a(17),Z=a(22);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){Object(X.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae={book:null,bookId:null,maxCount:0,minCount:0,cartItems:[],orderTotal:0,booksInCart:0,isCartEmpty:!0,loading:!0,loadingC:!1},ne=function(e,t,a){return-1===a?[].concat(Object(Z.a)(e),[t]):[].concat(Object(Z.a)(e.slice(0,a)),[t],Object(Z.a)(e.slice(a+1)))},re=function(e,t,a){if(t){var n=t.totalPrice+e.price*a;return te({},t,{count:t.count+a,totalPrice:parseFloat(n.toFixed(2))})}return te({},t,{id:e.id,count:a,totalPrice:parseFloat((e.price*a).toFixed(2)),title:e.title})};function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(a),!0).forEach((function(t){Object(X.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ie={books:[],booksQuantity:null,searchText:"",filterPrice:"all",loading:!0};function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){Object(X.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ue={user:{username:null,avatar:null,token:null},isAuthorized:!1},me=Object(Y.combineReducers)({bookList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_BOOKS_REQUEST":return ce({},e,{books:[],loading:!0});case"FETCH_BOOKS_SUCCESS":return ce({},e,{books:n,booksQuantity:n.length,loading:!1});case"SEARCH_BOOKS":return ce({},e,{searchText:n.searchText});case"FILTER_BOOKS":return ce({},e,{filterPrice:n.filterPrice});case"SIGN_OUT":return ce({},ie);default:return e}},bookDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_BOOK_REQUEST":return te({},e,{book:[],loading:!0});case"FETCH_BOOK_SUCCESS":return te({},e,{book:n,maxCount:n.count,loading:!1});case"PURCHASE_REQUEST":return te({},ae,{loadingC:!0});case"PURCHASE_SUCCESS":return te({},ae,{loadingC:!1});case"BOOK_ADDED_TO_CART":var r=e.book,o=e.cartItems,c=e.orderTotal,i=e.booksInCart,l=o.findIndex((function(e){return e.id===n.bookId})),s=o[l],u=re(r,s,n.count),m=parseFloat((c+r.price*n.count).toFixed(2)),d=i+n.count;return te({},e,{isCartEmpty:!1,cartItems:ne(e.cartItems,u,l),orderTotal:m,booksInCart:d});case"SIGN_OUT":return te({},ae);default:return e}},userData:function(e,t){if(void 0===e)return localStorage.userData?{user:JSON.parse(localStorage.getItem("userData")),isAuthorized:!0}:ue;var a=t.type,n=t.payload;switch(a){case"SIGN_IN":return{user:se({},n),isAuthorized:!0};case"SIGN_OUT":return localStorage.clear(),se({},ue);default:return e}}}),de=Object(Y.createStore)(me,Object($.composeWithDevTools)());c.a.render(r.a.createElement(i.a,{store:de},r.a.createElement(W,null,r.a.createElement(l.a,null,r.a.createElement(M,null)))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4413d18e.chunk.js.map