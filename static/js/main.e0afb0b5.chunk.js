(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(271)},127:function(e,t,a){},128:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(3),c=a.n(l),o=(a(127),a(13)),u=a(274),m=a(273),i=a(275);var s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),b=(a(128),a(129),function(e){var t=Object(n.useState)("horizontal"),a=Object(o.a)(t,2),l=(a[0],a[1],{labelCol:{span:12},wrapperCol:{span:12}}),c=Object(n.useState)(5e3),b=Object(o.a)(c,2),f=b[0],d=b[1],E=Object(n.useState)(500),p=Object(o.a)(E,2),O=p[0],g=p[1],j=Object(n.useState)(2500),h=Object(o.a)(j,2),v=h[0],y=h[1],x=Object(n.useState)(.035),w=Object(o.a)(x,2),F=w[0],S=w[1],I=Object(n.useState)(3.5),M=Object(o.a)(I,2),C=(M[0],M[1]),B=Object(n.useState)(30),$=Object(o.a)(B,2),V=$[0],k=$[1],N=Object(n.useState)(.43),T=Object(o.a)(N,2),D=T[0],P=T[1],z=Object(n.useState)(.4999),J=Object(o.a)(z,2),R=J[0],U=J[1],W=Object(n.useState)(0),A=Object(o.a)(W,2),L=(A[0],A[1],Object(n.useState)(0)),q=Object(o.a)(L,2),G=(q[0],q[1],Object(n.useState)(0)),H=Object(o.a)(G,2),K=(H[0],H[1],Object(n.useState)(0)),Q=Object(o.a)(K,2),X=(Q[0],Q[1],Object(n.useState)(0)),Y=Object(o.a)(X,2),Z=(Y[0],Y[1],Object(n.useState)(!0)),_=Object(o.a)(Z,2),ee=_[0],te=_[1],ae=u.a.Option,ne=function(){return parseFloat((f*D).toFixed(4))},re=function(){return parseFloat((v/12).toFixed(2))},le=function(){return parseFloat((ne()-re()).toFixed(2))},ce=function(){return parseFloat((le()+O).toFixed(2))},oe=function(){return parseFloat(100*(ce()/f).toFixed(4))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{layout:"horizontal",className:"form"},r.a.createElement(m.a.Item,Object.assign({label:"Monthly pretax income"},l),r.a.createElement(i.a,{defaultValue:5e3,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){d(e)}})),r.a.createElement(m.a.Item,Object.assign({label:"Monthly bills excluding utilities"},l),r.a.createElement(i.a,{defaultValue:500,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){g(e)}})),r.a.createElement(m.a.Item,Object.assign({label:"Annual Property Taxes/Insurance"},l),r.a.createElement(i.a,{defaultValue:2500,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){y(e)}})),r.a.createElement(m.a.Item,Object.assign({label:"MI Rate"},l),r.a.createElement(i.a,{defaultValue:35,formatter:function(e){return"".concat(e," %").replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){S(e/100)}})),r.a.createElement(m.a.Item,Object.assign({label:"Interest Rate"},l),r.a.createElement(i.a,{defaultValue:3.5,formatter:function(e){return"".concat(e," %").replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){C(e/100)}})),r.a.createElement(m.a.Item,Object.assign({label:"Term"},l),r.a.createElement(u.a,{defaultValue:30,style:{width:88},onChange:function(e){k(e)}},r.a.createElement(ae,{value:10},"10"),r.a.createElement(ae,{value:15},"15"),r.a.createElement(ae,{value:20},"20"),r.a.createElement(ae,{value:30},"30"))),r.a.createElement(m.a.Item,Object.assign({label:"Front end DTI"},l),r.a.createElement(u.a,{defaultValue:"43%",style:{width:88},onChange:function(e){P(parseFloat((e/100).toFixed(4)))}},r.a.createElement(ae,{value:29},"29%"),r.a.createElement(ae,{value:36},"36%"),r.a.createElement(ae,{value:40},"40%"),r.a.createElement(ae,{value:46.99},"46.99%"))),r.a.createElement(m.a.Item,Object.assign({label:"Back end DTI"},l),r.a.createElement(u.a,{defaultValue:"49.55%",style:{width:88},onChange:function(e){U(parseFloat((e/100).toFixed(4)))}},r.a.createElement(ae,{value:41},"41%"),r.a.createElement(ae,{value:49.55},"49.55%"),r.a.createElement(ae,{value:56.99},"56.99%")))),r.a.createElement("ul",{className:"results"},r.a.createElement("li",null,"Maximum Monthly Payment:"," ",r.a.createElement("strong",null,s.format(ne()))),r.a.createElement("li",null,"Monthly Property Taxes:"," ",r.a.createElement("strong",null,s.format(re()))),r.a.createElement("li",null,"Max monthly payment minus taxes:"," ",r.a.createElement("strong",null,s.format(le()))),r.a.createElement("li",null,"Maxmimum Backend Payment:"," ",r.a.createElement("strong",null,s.format(ce()))),r.a.createElement("li",null,"Maximum backend payment percent :"," ",r.a.createElement("strong",null,oe(),"%")),r.a.createElement("li",{className:"result"},function(){var e,t,a=(e=F/12,t=12*V,le()/e*(1-Math.pow(1+e,-t)));return oe()<100*R?(ee||te(!0),"Maximum payment: ".concat(s.format(a))):oe()>100*R?(ee&&te(!1),"Maximum Loan: ".concat(s.format(a))):void 0}()))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,1,2]]]);
//# sourceMappingURL=main.e0afb0b5.chunk.js.map