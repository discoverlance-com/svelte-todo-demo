import{S as e,i as t,s,e as a,t as l,c as r,a as o,b as c,d as i,f as n,g as d,h as m,l as h,j as v,n as f,k as u,m as x,o as b,p as k,q as g,r as p,u as w,v as y,w as E,x as I,y as T,z as L,A as S,B as A}from"./vendor.be4e2906.js";function D(e){let t,s,u,x;return{c(){t=a("button"),s=l(e[1]),this.h()},l(a){t=r(a,"BUTTON",{class:!0});var l=o(t);s=c(l,e[1]),l.forEach(i),this.h()},h(){n(t,"class","px-4 py-2 m-2 text-white transform bg-lime-500 rounded-xl focus:outline-none hover:translate-y-1 dark:text-lime-500 dark:bg-white")},m(a,l){d(a,t,l),m(t,s),e[3](t),u||(x=h(t,"click",e[2]),u=!0)},p(e,[t]){2&t&&v(s,e[1])},i:f,o:f,d(s){s&&i(t),e[3](null),u=!1,x()}}}function U(e,t,s){let a,l;l=null!==localStorage.getItem("theme")&&"light"===localStorage.getItem("theme")?"Dark Theme":"Light Theme";return[a,l,e=>{null===localStorage.getItem("theme")?localStorage.setItem("theme","dark"):("light"===localStorage.theme?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),"light"===localStorage.theme?s(0,a.innerText="Dark Theme",a):s(0,a.innerText="Light Theme",a)),"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},function(e){u[e?"unshift":"push"]((()=>{a=e,s(0,a)}))}]}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,r)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return s(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),l(i)},onload(){s(self[t].moduleMap[o]),l(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/svelte-todo-demo/assets/");class O extends e{constructor(e){super(),t(this,e,U,D,s,{})}}function $(e,t,s){const a=e.slice();return a[12]=t[s],a}function N(e,t){let s,f,u,k,g,p,w,y,E,I=t[12].text+"";return{key:e,first:null,c(){s=a("li"),f=a("span"),u=l(I),k=x(),g=a("i"),w=x(),this.h()},l(e){s=r(e,"LI",{class:!0});var t=o(s);f=r(t,"SPAN",{class:!0});var a=o(f);u=c(a,I),a.forEach(i),k=b(t),g=r(t,"I",{"data-key":!0,class:!0}),o(g).forEach(i),w=b(t),t.forEach(i),this.h()},h(){n(f,"class","svelte-1vkbibx"),n(g,"data-key",p=t[12].id),n(g,"class","ml-3 text-red-500 cursor-pointer bi bi-x-circle-fill dark:hover:text-white hover:text-red-900 svelte-1vkbibx"),n(s,"class","flex justify-around p-2 text-2xl rounded-lg shadow-lg svelte-1vkbibx"),this.first=s},m(e,a){d(e,s,a),m(s,f),m(f,u),m(s,k),m(s,g),m(s,w),y||(E=h(g,"click",t[6]),y=!0)},p(e,s){t=e,4&s&&I!==(I=t[12].text+"")&&v(u,I),4&s&&p!==(p=t[12].id)&&n(g,"data-key",p)},d(e){e&&i(s),y=!1,E()}}}function j(e){let t,s,f,u,A,D,U,j,B,M,V,P,C,R,_,z,F,J,q,H,G,K,Q,W,X,Y,Z,ee,te,se,ae,le,re,oe,ce,ie,ne,de,me,he,ve,fe,ue,xe,be,ke,ge,pe=[],we=new Map;te=new O({});let ye=e[2];const Ee=e=>e[12].id;for(let a=0;a<ye.length;a+=1){let t=$(e,ye,a),s=Ee(t);we.set(s,pe[a]=N(s,t))}return{c(){t=a("div"),s=a("div"),f=a("div"),u=a("div"),A=a("div"),D=a("i"),U=x(),j=a("div"),B=a("p"),M=l(e[0]),V=x(),P=a("div"),C=a("button"),R=a("span"),_=l("Close"),z=x(),F=a("i"),J=x(),q=a("main"),H=a("h1"),G=l("TODO"),K=x(),Q=a("p"),W=l("Todos are stored in your browser if it allows it, you can visit anytime to see your todos. Use the "),X=a("a"),Y=l("Clear All Items"),Z=l(" Button to remove all todos from your browser."),ee=x(),k(te.$$.fragment),se=x(),ae=a("div"),le=a("label"),re=l("Add New Item: "),oe=a("small"),ce=l("Press Enter after typing to add new item"),ie=x(),ne=a("input"),de=x(),me=a("button"),he=a("i"),ve=l("\n      Clear All Items"),fe=x(),ue=a("div"),xe=a("ul");for(let e=0;e<pe.length;e+=1)pe[e].c();this.h()},l(a){t=r(a,"DIV",{class:!0});var l=o(t);s=r(l,"DIV",{class:!0,role:!0,"aria-live":!0});var n=o(s);f=r(n,"DIV",{class:!0});var d=o(f);u=r(d,"DIV",{class:!0});var m=o(u);A=r(m,"DIV",{class:!0});var h=o(A);D=r(h,"I",{class:!0}),o(D).forEach(i),U=b(h),j=r(h,"DIV",{class:!0});var v=o(j);B=r(v,"P",{class:!0});var x=o(B);M=c(x,e[0]),x.forEach(i),v.forEach(i),h.forEach(i),V=b(m),P=r(m,"DIV",{class:!0});var k=o(P);C=r(k,"BUTTON",{class:!0});var p=o(C);R=r(p,"SPAN",{class:!0});var w=o(R);_=c(w,"Close"),w.forEach(i),z=b(p),F=r(p,"I",{class:!0}),o(F).forEach(i),p.forEach(i),k.forEach(i),m.forEach(i),d.forEach(i),n.forEach(i),l.forEach(i),J=b(a),q=r(a,"MAIN",{class:!0});var y=o(q);H=r(y,"H1",{class:!0});var E=o(H);G=c(E,"TODO"),E.forEach(i),K=b(y),Q=r(y,"P",{class:!0});var I=o(Q);W=c(I,"Todos are stored in your browser if it allows it, you can visit anytime to see your todos. Use the "),X=r(I,"A",{href:!0,class:!0});var T=o(X);Y=c(T,"Clear All Items"),T.forEach(i),Z=c(I," Button to remove all todos from your browser."),I.forEach(i),ee=b(y),g(te.$$.fragment,y),se=b(y),ae=r(y,"DIV",{class:!0});var L=o(ae);le=r(L,"LABEL",{class:!0,for:!0});var S=o(le);re=c(S,"Add New Item: "),oe=r(S,"SMALL",{class:!0});var O=o(oe);ce=c(O,"Press Enter after typing to add new item"),O.forEach(i),S.forEach(i),ie=b(L),ne=r(L,"INPUT",{type:!0,class:!0,placeholder:!0,id:!0}),de=b(L),me=r(L,"BUTTON",{id:!0,class:!0});var $=o(me);he=r($,"I",{class:!0}),o(he).forEach(i),ve=c($,"\n      Clear All Items"),$.forEach(i),L.forEach(i),fe=b(y),ue=r(y,"DIV",{class:!0});var N=o(ue);xe=r(N,"UL",{class:!0});var be=o(xe);for(let e=0;e<pe.length;e+=1)pe[e].l(be);be.forEach(i),N.forEach(i),y.forEach(i),this.h()},h(){n(D,"class","flex-shrink-0 w-5 h-5 text-white stroke-current bi bi-check-all svelte-1vkbibx"),n(B,"class","text-sm text-white svelte-1vkbibx"),n(j,"class","flex-grow svelte-1vkbibx"),n(A,"class","flex items-center flex-grow space-x-2 svelte-1vkbibx"),n(R,"class","sr-only svelte-1vkbibx"),n(F,"class","w-5 h-5 fill-current bi-x-circle-fill bi svelte-1vkbibx"),n(C,"class","text-white transition-colors duration-200 hover:text-gray-100 focus:outline-none svelte-1vkbibx"),n(P,"class","flex flex-shrink-0 svelte-1vkbibx"),n(u,"class","flex items-start space-x-2 svelte-1vkbibx"),n(f,"class","p-4 svelte-1vkbibx"),n(s,"class","hidden max-w-sm overflow-hidden rounded shadow-lg pointer-events-auto w-72 bg-lime-600 svelte-1vkbibx"),n(s,"role","status"),n(s,"aria-live","polite"),n(t,"class","fixed inset-0 z-50 flex items-end justify-center p-2 pointer-events-none sm:items-start sm:justify-end svelte-1vkbibx"),n(H,"class","m-5 text-6xl font-bold text-center text-lime-500 svelte-1vkbibx"),n(X,"href","#clearall"),n(X,"class","text-gray-500 svelte-1vkbibx"),n(Q,"class","my-12 text-2xl tracking-wide text-center text-lime-500 svelte-1vkbibx"),n(oe,"class","svelte-1vkbibx"),n(le,"class","text-lg text-white dark:text-gray-500 svelte-1vkbibx"),n(le,"for","newItem"),n(ne,"type","text"),n(ne,"class","block w-full col-span-2 p-2 my-5 tracking-wide rounded-xl dark:bg-white focus:outline-none dark:text-black svelte-1vkbibx"),n(ne,"placeholder","Type here..."),n(ne,"id","newItem"),n(he,"class","bi bi-x-circle-fill svelte-1vkbibx"),n(me,"id","clearall"),n(me,"class","px-4 col-span-2 md:col-span-1 py-2 m-2 text-white transform bg-red-500 rounded-xl focus:outline-none hover:translate-y-0.5 dark:text-red-500 dark:bg-white hover:bg-red-400 dark:hover:bg-red-100 svelte-1vkbibx"),n(ae,"class","grid grid-cols-2 p-4 my-5 bg-gray-500 rounded-lg shadow-2xl dark:bg-transparent svelte-1vkbibx"),n(xe,"class"," svelte-1vkbibx"),n(ue,"class","my-12 svelte-1vkbibx"),n(q,"class","container px-4 mx-auto text-black md:px-0 pmax-w-sm dark:text-white md:max-w-xl lg:max-w-2xl xl:max-w-4xl svelte-1vkbibx")},m(a,l){d(a,t,l),m(t,s),m(s,f),m(f,u),m(u,A),m(A,D),m(A,U),m(A,j),m(j,B),m(B,M),m(u,V),m(u,P),m(P,C),m(C,R),m(R,_),m(C,z),m(C,F),e[8](s),d(a,J,l),d(a,q,l),m(q,H),m(H,G),m(q,K),m(q,Q),m(Q,W),m(Q,X),m(X,Y),m(Q,Z),m(q,ee),p(te,q,null),m(q,se),m(q,ae),m(ae,le),m(le,re),m(le,oe),m(oe,ce),m(ae,ie),m(ae,ne),w(ne,e[3]),m(ae,de),m(ae,me),m(me,he),m(me,ve),m(q,fe),m(q,ue),m(ue,xe);for(let e=0;e<pe.length;e+=1)pe[e].m(xe,null);be=!0,ke||(ge=[h(C,"click",e[4]),h(ne,"input",e[9]),h(ne,"keydown",e[5]),h(me,"click",e[7])],ke=!0)},p(e,[t]){(!be||1&t)&&v(M,e[0]),8&t&&ne.value!==e[3]&&w(ne,e[3]),68&t&&(ye=e[2],pe=y(pe,t,Ee,1,e,ye,we,xe,S,N,null,$))},i(e){be||(E(te.$$.fragment,e),be=!0)},o(e){I(te.$$.fragment,e),be=!1},d(s){s&&i(t),e[8](null),s&&i(J),s&&i(q),T(te);for(let e=0;e<pe.length;e+=1)pe[e].d();ke=!1,L(ge)}}}function B(e,t,s){let a,l;function r(e){s(0,a=e),l.classList.remove("hidden"),l.classList.add("block"),setTimeout((()=>{l.classList.remove("block"),l.classList.add("hidden")}),2500)}function o(){Storage&&localStorage.setItem("todos",JSON.stringify(c))}let c=[];if(Storage){(function(){const e=localStorage.getItem("todos");e&&s(2,c=JSON.parse(e))})()}let i="";return[a,l,c,i,function(){l.classList.remove("block"),l.classList.add("hidden")},e=>{"Enter"===e.key||"Enter"===e.code?""===i?r("Task empty!"):(s(2,c=[...c,{id:A(),text:i,completed:!1}]),s(3,i=""),o(),r("Task Added Successfully!")):s(3,i=e.target.value)},e=>{const t=e.target.getAttribute("data-key");s(2,c=c.filter((function(e){return e.id!=t}))),r("Task deleted!"),o(),s(2,c)},()=>{c&&c.length&&(s(2,c=[]),o(),localStorage.removeItem("todos"),r("All Tasks cleared!"))},function(e){u[e?"unshift":"push"]((()=>{l=e,s(1,l)}))},function(){i=this.value,s(3,i)}]}new class extends e{constructor(e){super(),t(this,e,B,j,s,{})}}({target:document.getElementById("app")});
