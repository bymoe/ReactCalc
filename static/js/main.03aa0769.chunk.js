(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(292)},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(4),o=a.n(c),l=(a(137),a(14)),i=a(296),u=a(295),s=a(297),m=a(298),f=a(294),g=a(15);var b=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),d=function(e,t,a){return a/e*(1-Math.pow(1+e,-t))},j=(a(138),a(139),a(140),function(e){var t=Object(n.useState)("horizontal"),a=Object(l.a)(t,2),c=(a[0],a[1],{}),o=f.a.Title,j=Object(n.useState)(1e3),O=Object(l.a)(j,2),p=O[0],h=O[1],E=Object(n.useState)(200),v=Object(l.a)(E,2),w=v[0],y=v[1],S=Object(n.useState)(1e3),I=Object(l.a)(S,2),C=I[0],k=I[1],F=Object(n.useState)(.0085),$=Object(l.a)(F,2),z=$[0],B=$[1],M=Object(n.useState)(.035),x=Object(l.a)(M,2),T=x[0],V=x[1],A=Object(n.useState)(30),R=Object(l.a)(A,2),W=R[0],N=R[1],U=Object(n.useState)(30),D=Object(l.a)(U,2),P=(D[0],D[1],Object(n.useState)(.43)),L=Object(l.a)(P,2),J=L[0],H=L[1],q=Object(n.useState)(.4955),G=Object(l.a)(q,2),K=G[0],Q=G[1],X=Object(n.useState)(0),Y=Object(l.a)(X,2),Z=(Y[0],Y[1],Object(n.useState)(0)),_=Object(l.a)(Z,2),ee=(_[0],_[1],Object(n.useState)(0)),te=Object(l.a)(ee,2),ae=(te[0],te[1],Object(n.useState)(0)),ne=Object(l.a)(ae,2),re=(ne[0],ne[1],Object(n.useState)(0)),ce=Object(l.a)(re,2),oe=(ce[0],ce[1],Object(n.useState)(!0)),le=Object(l.a)(oe,2),ie=(le[0],le[1],i.a.Option),ue=function(){return se()-C/12},se=function(){return parseFloat(Math.min(Math.min(p*J),K*p-w).toFixed(4))},me=function(){return z*d(T/12,12*W,ue())/12};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(o,{level:2},r.a.createElement(g.a,{type:"calculator",theme:"twoTone"})," Home Affordability Calculator"),r.a.createElement(u.a,{layout:"vertical",className:"form"},r.a.createElement(u.a.Item,Object.assign({label:"Monthly income"},c),r.a.createElement(s.a,{size:"large",defaultValue:1e3,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){h(e)}})),r.a.createElement(u.a.Item,Object.assign({label:"Front end DTI"},c),r.a.createElement(i.a,{size:"large",defaultValue:"43%",style:{width:88},onChange:function(e){H(parseFloat((e/100).toFixed(4)))}},r.a.createElement(ie,{value:29},"29%"),r.a.createElement(ie,{value:36},"36%"),r.a.createElement(ie,{value:43},"43%"),r.a.createElement(ie,{value:46.99},"46.99%"))),r.a.createElement(u.a.Item,Object.assign({label:"Monthly bills excluding utilities"},c),r.a.createElement(s.a,{size:"large",defaultValue:200,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){y(e)}})),r.a.createElement(u.a.Item,Object.assign({label:"Back end DTI"},c),r.a.createElement(i.a,{size:"large",defaultValue:"49.55%",style:{width:88},onChange:function(e){Q(parseFloat((e/100).toFixed(4)))}},r.a.createElement(ie,{value:41},"41%"),r.a.createElement(ie,{value:49.55},"49.55%"),r.a.createElement(ie,{value:56.99},"56.99%"))),r.a.createElement(u.a.Item,Object.assign({label:"Maximum Monthly Payment"},c),r.a.createElement("strong",null,b.format(se()))),r.a.createElement(u.a.Item,Object.assign({label:"Annual Property Taxes/Insurance"},c),r.a.createElement(s.a,{size:"large",defaultValue:1e3,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){k(e)}})),r.a.createElement(u.a.Item,Object.assign({label:"Term of Mortgage (years):"},c),r.a.createElement(s.a,{size:"large",defaultValue:30,formatter:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){N(e)}})),r.a.createElement(u.a.Item,Object.assign({label:"Interest Rate"},c),r.a.createElement(s.a,{size:"large",defaultValue:3.5,formatter:function(e){return"".concat(e," %").replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){V(e/100)}})),r.a.createElement(u.a.Item,Object.assign({label:"MI Rate"},c),r.a.createElement(s.a,{size:"large",defaultValue:.85,formatter:function(e){return"".concat(e," %").replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){B(e/100)}})),r.a.createElement(u.a.Item,Object.assign({className:"result"},c),r.a.createElement(m.a,{title:"Final Loan",value:b.format(-1*d(T/12,12*W,-ue()+me()))})))))}),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ReactCalc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ReactCalc","/service-worker.js");O?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):p(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):p(t,e)})}}()}},[[132,1,2]]]);
//# sourceMappingURL=main.03aa0769.chunk.js.map