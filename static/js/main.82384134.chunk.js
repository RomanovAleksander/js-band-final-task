(this["webpackJsonpjs-band-hw-task-7"]=this["webpackJsonpjs-band-hw-task-7"]||[]).push([[0],{30:function(e,t,a){e.exports=a(45)},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),s=a(13),l=a(11),i=a(10),u=(a(39),function(e){var t=e.userName,a=e.userAvatar;return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(l.b,{to:"/"},r.a.createElement("div",{className:"logo text-dark"},"JS BAND STORE / Oleksandr Romanov")),r.a.createElement("div",{className:"shop-menu row"},r.a.createElement(l.b,{to:"/cart"},r.a.createElement("div",null,r.a.createElement("i",{className:"cart fa fa-shopping-cart"}))),r.a.createElement("button",{className:"btn btn-info"},"Sign-Out"),r.a.createElement("div",{className:"oval"},r.a.createElement("img",{src:a,alt:"userAvatar"})),r.a.createElement("div",{className:"userName"},t)))}),m=a(8),b=a(9),h=a(14),E=a(12),p=a(15),v=(a(41),function(e){var t=e.book,a=t.title,n=t.author,o=t.price,c=t.cover;return r.a.createElement("div",{className:"book-list-item"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{src:c,alt:"cover"})),r.a.createElement("div",{className:"book-details"},r.a.createElement("div",{className:"book-title"},a),r.a.createElement("div",{className:"book-author"},n)),r.a.createElement("div",{className:"book-footer"},r.a.createElement("div",{className:"book-price"},o),r.a.createElement("button",{className:"btn btn-info add-to-cart"},"View")))}),d=new(function(){function e(){Object(m.a)(this,e),this.data=[{id:0,title:"Success",author:"Romanov",price:"50$",cover:""},{id:1,title:"The Rock",author:"Rock",price:"70$",cover:""}]}return Object(b.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t,a){setTimeout((function(){t(e.data),a(new Error("Error"))}),800)}))}}]),e}()),f=(a(42),function(){return r.a.createElement("div",null,"Loading...")}),k=(a(43),function(e){var t=e.books;return r.a.createElement("ul",{className:"book-list"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(v,{book:e}))})))}),O=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.booksLoaded;(0,e.booksRequested)(),d.getBooks().then((function(e){t(e)}))}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.loading,n=e.visibleBooks;return a?r.a.createElement(f,null):n?r.a.createElement(k,{books:n}):r.a.createElement(k,{books:t})}}]),t}(r.a.Component),j={booksLoaded:function(e){return{type:"FETCH_BOOKS_SUCCESS",payload:e}},booksRequested:function(){return{type:"FETCH_BOOKS_REQUEST"}}},y=Object(s.b)((function(e){return{books:e.books,visibleBooks:e.visibleBooks,loading:e.loading}}),j)(O),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onSearchChange=function(e){var t=e.target,n=a.props;(0,n.searchBook)(n.books,t.value)},a}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.searchText;return r.a.createElement("div",{className:"filter__item"},r.a.createElement("input",{type:"search",className:"filter__search",placeholder:"search by title",onChange:this.onSearchChange,value:e}),r.a.createElement("select",{className:"select-status select",key:"status"},r.a.createElement("option",{value:"Price"},"Price"),r.a.createElement("option",{value:"0-15"},"0-15"),r.a.createElement("option",{value:"15-30"},"15-30"),r.a.createElement("option",{value:">30"},">30")))}}]),t}(r.a.Component),N={searchBook:function(e,t){return{type:"SEARCH_BOOK",payload:{searchText:t,books:e}}}},S=Object(s.b)((function(e){return{books:e.books,searchText:e.searchText}}),N)(g),w=function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(y,null))},C=function(){return r.a.createElement("div",null,"Book Page")},B=(a(44),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(E.a)(t).call(this))).state={hasError:!1},e}return Object(p.a)(t,e),Object(b.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,"Error"):this.props.children}}]),t}(r.a.Component)),T=a(16),P=a(28),_=a(29);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(_.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D={books:[],loading:!0,searchText:"",visibleBooks:null,filterPrice:"Price"},A=Object(T.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_BOOKS_REQUEST":return R({},e,{books:[],loading:!0});case"FETCH_BOOKS_SUCCESS":return R({},e,{books:n,loading:!1});case"SEARCH_BOOK":return R({},e,{searchText:n.searchText,visibleBooks:n.books.filter((function(e){return e.title.toLowerCase().includes(n.searchText.toLowerCase())}))});default:return e}}),Object(P.composeWithDevTools)());c.a.render(r.a.createElement(s.a,{store:A},r.a.createElement(B,null,r.a.createElement(l.a,null,r.a.createElement((function(){return r.a.createElement("main",{className:"container"},r.a.createElement(u,{userName:"Alex"}),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:w,exact:!0}),r.a.createElement(i.a,{path:"/cart",component:C})))}),null)))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.82384134.chunk.js.map