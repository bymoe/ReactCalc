(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(292)},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(4),c=a.n(r),o=(a(137),a(26)),i=a(296),s=a(295),u=a(297),m=a(298),d=a(294),f=a(14);var p=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),E=function(e,t,a){return a/e*(1-Math.pow(1+e,-t))},g=(a(138),a(139),a(140),function(e){var t=Object(n.useState)("horizontal"),a=Object(o.a)(t,2),r=(a[0],a[1],{}),c=d.a.Title,g=Object(n.useState)(1e3),h=Object(o.a)(g,2),v=h[0],b=h[1],w=Object(n.useState)(200),y=Object(o.a)(w,2),_=y[0],O=y[1],j=Object(n.useState)(1e3),S=Object(o.a)(j,2),I=S[0],N=S[1],A=Object(n.useState)(.0085),C=Object(o.a)(A,2),F=C[0],k=C[1],M=Object(n.useState)(.035),x=Object(o.a)(M,2),T=x[0],z=x[1],V=Object(n.useState)(30),D=Object(o.a)(V,2),U=D[0],$=D[1],B=Object(n.useState)(.28),R=Object(o.a)(B,2),W=R[0],H=R[1],L=Object(n.useState)(.41),P=Object(o.a)(L,2),J=P[0],q=P[1],G=i.a.Option,K=function(){return Q()-I/12},Q=function(){return parseFloat(Math.min(Math.min(v*W),J*v-_).toFixed(4))},X=function(){return F*E(T/12,12*U,K())/12};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(c,{level:2},l.a.createElement(f.a,{type:"calculator",theme:"twoTone"})," Home Affordability Calculator"),l.a.createElement(s.a,{layout:"vertical",className:"form"},l.a.createElement(s.a.Item,Object.assign({label:"Monthly income"},r),l.a.createElement(u.a,{size:"large",defaultValue:1e3,step:500,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){b(e)}})),l.a.createElement(s.a.Item,Object.assign({label:"Front end DTI"},r),l.a.createElement(i.a,{size:"large",defaultValue:"28%",style:{width:88},onChange:function(e){H(parseFloat((e/100).toFixed(4)))}},l.a.createElement(G,{value:28},"28% USDA"),l.a.createElement(G,{value:40},"40% FHA Manual"),l.a.createElement(G,{value:46.99},"46.99% FHA A/E"),l.a.createElement(G,{value:49.99},"49.99% Conventional"))),l.a.createElement(s.a.Item,Object.assign({label:"Monthly bills excluding utilities"},r),l.a.createElement(u.a,{size:"large",defaultValue:200,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){O(e)}})),l.a.createElement(s.a.Item,Object.assign({label:"Back end DTI"},r),l.a.createElement(i.a,{size:"large",defaultValue:"41%",style:{width:88},onChange:function(e){q(parseFloat((e/100).toFixed(4)))}},l.a.createElement(G,{value:41},"41% USDA"),l.a.createElement(G,{value:50},"50% FHA Manual"),l.a.createElement(G,{value:56.99},"56.99% FHA A/E"),l.a.createElement(G,{value:60},"60%"))),l.a.createElement(s.a.Item,Object.assign({className:"result"},r),l.a.createElement(m.a,{title:"Maximum Monthly Payment",value:p.format(Q())})),l.a.createElement(s.a.Item,Object.assign({label:"Annual Property Taxes/Insurance"},r),l.a.createElement(u.a,{size:"large",defaultValue:1e3,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){N(e)}})),l.a.createElement(s.a.Item,Object.assign({label:"Term of Mortgage (years):"},r),l.a.createElement(u.a,{size:"large",defaultValue:30,formatter:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){$(e)}})),l.a.createElement(s.a.Item,Object.assign({label:"Interest Rate"},r),l.a.createElement(u.a,{size:"large",defaultValue:3.5,step:.125,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")},onChange:function(e){z(e/100)}})),l.a.createElement(s.a.Item,Object.assign({label:"MI Rate"},r),l.a.createElement(i.a,{size:"large",defaultValue:.85,style:{width:88},onChange:function(e){k(e/100)}},l.a.createElement(G,{value:.125},"0.125"),l.a.createElement(G,{value:.35},"0.35 USDA"),l.a.createElement(G,{value:.5},"0.50"),l.a.createElement(G,{value:.85},"0.85 FHA"),l.a.createElement(G,{value:1},"1.0"))),l.a.createElement(s.a.Item,Object.assign({className:"result"},r),l.a.createElement(m.a,{title:"Final Loan",value:p.format(-1*E(T/12,12*U,-K()+X()))}))),l.a.createElement(s.a.Item,null,l.a.createElement("form",{method:"POST",action:"https://loangraphs.activehosted.com/proc.php",id:"_form_3_",className:"_form _form_3 _inline-form  _dark",noValidate:!0},l.a.createElement("input",{type:"hidden",name:"u",value:"3"}),l.a.createElement("input",{type:"hidden",name:"f",value:"3"}),l.a.createElement("input",{type:"hidden",name:"s"}),l.a.createElement("input",{type:"hidden",name:"c",value:"0"}),l.a.createElement("input",{type:"hidden",name:"m",value:"0"}),l.a.createElement("input",{type:"hidden",name:"act",value:"sub"}),l.a.createElement("input",{type:"hidden",name:"v",value:"2"}),l.a.createElement("div",{className:"_form-content"},l.a.createElement("div",{className:"_form_element _x03902238 _full_width _clear"},l.a.createElement("div",{className:"_html-code"},l.a.createElement("p",null,"Close More Loans. Sign up for a Demo of LoanGraphs."))),l.a.createElement("div",{className:"_form_element _x92094134 _full_width "},l.a.createElement("label",{className:"_form-label"}),l.a.createElement("div",{className:"_field-wrapper"},l.a.createElement("input",{type:"text",name:"email",placeholder:"Type your email",required:!0}))),l.a.createElement("div",{className:"_button-wrapper _full_width"},l.a.createElement("button",{id:"_form_3_submit",className:"_submit",type:"submit"},"Submit")),l.a.createElement("div",{className:"_clear-element"})),l.a.createElement("div",{className:"_form-thank-you",style:{display:"none"}})))))}),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ReactCalc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ReactCalc","/service-worker.js");h?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):v(t,e)})}}()}},[[132,1,2]]]);
//# sourceMappingURL=main.4cfc2c6c.chunk.js.map