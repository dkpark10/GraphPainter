(this.webpackJsonpgraphpainter=this.webpackJsonpgraphpainter||[]).push([[0],{25:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(9),c=n.n(i),a=(n(25),n(2)),h=function(t){return t.reduce((function(t,e,n){var r=e.split(" "),o=Object(a.a)(r,3),i=o[0],c=o[1],h=o[2];return""===i?t:(t[i]=t[i]||[],void 0===c&&void 0===h||""===c||t[i].push([c,h]),t)}),{})},s=n(5),u=n(3),f="SETSHORTESTPATH",d={from:"",to:"",path:{}},j=function(t){return{type:f,payload:t}};var b="SETGRAPHINFO",l={graph:{vertexCount:"0",edgeCount:"",graph:{}}};var p=n(1),g=function(){var t=Object(s.b)(),e=Object(r.useState)(""),n=Object(a.a)(e,2),o=n[0],i=n[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("textarea",{style:{resize:"none"},value:o,onChange:function(e){var n=function(t){var e=t.target.value.split("\n"),n=e[0].split(" "),r=Object(a.a)(n,2),o=r[0],i=r[1];if(!0!==isNaN(Number(o))||!0!==isNaN(Number(i)))return{vertexCount:o,edgeCount:i,graph:h(e.splice(1))}}(e);void 0!==n&&(t({type:b,payload:n}),t(j(d))),i((function(t){return e.target.value}))}})})},v=function(t){var e=t.onChange;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{className:"direct-button",children:[Object(p.jsx)("input",{type:"checkbox",onChange:e}),Object(p.jsx)("span",{className:"onoff-switch"})]})})},O=function(t){var e=t.text,n=t.name,r=t.onChange,o=t.value;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{style:{fontSize:"13px"},children:[" ",e," "]}),Object(p.jsx)("input",{type:"text",name:n,onChange:r,value:o,style:{width:"40px",height:"25px"}})]})},x="SETDIRECT",m={directed:!1};var y=n(6),k=n(7),C=n(17),w=n.n(C),I=Math.floor(Number.MAX_SAFE_INTEGER/987),S=function(){function t(e){Object(y.a)(this,t),this.initGraph=void 0,this.from=void 0,this.to=void 0,this.graph={},this.vertexCount=0,this.initGraph=e.getGraphInfo(),this.from=e.getFromVertex(),this.to=e.getToVertex(),this.vertexCount=Number(this.initGraph.vertexCount)}return Object(k.a)(t,[{key:"run",value:function(){return this.mapping(),!1!==this.isExistVertex()&&this.backtracking(this.dijkstra())}},{key:"mapping",value:function(){var t=this;Object.entries(this.initGraph.graph).forEach((function(e){var n=Object(a.a)(e,2),r=n[0],o=n[1];t.isExceedVertexCount(t.graph)&&o.length<=0||(t.graph[r]=t.graph[r]||{},o.forEach((function(e){var n=Object(a.a)(e,2),o=n[0],i=n[1];void 0===o&&void 0===i||t.isExceedVertexCount(t.graph)&&!t.graph[o]||(t.graph[o]=t.graph[o]||{},!1===Object.keys(t.graph[r]).includes(o)&&(t.graph[r][o]=i),!1===Object.keys(t.graph[o]).includes(r)&&(t.graph[o][r]=i))})))}))}},{key:"dijkstra",value:function(){var t=this,e={},n={};Object.keys(this.graph).forEach((function(t){e[t]=e[t]||I,n[t]=n[t]||t})),e[this.from]=0;var r=new w.a({comparator:function(t,e){return t[0]-e[0]}});r.queue([0,this.from]);for(var o=function(){var o=r.peek(),i=Object(a.a)(o,2),c=i[0],h=i[1];if(r.dequeue(),e[h]<c)return"continue";Object.entries(t.graph[h]).forEach((function(t){var o=Object(a.a)(t,2),i=o[0],s=o[1],u=Number(s)+c;u<e[i]&&(n[i]=h,e[i]=u,r.queue([u,i]))}))};r.length;)o();return n}},{key:"backtracking",value:function(t){for(var e={},n=this.to;n!==t[n];)e[n]=e[n]||!1,n=t[n];return e[n]=e[n]||!1,e[this.to]=!0,e[this.from]=!0,e}},{key:"isExistVertex",value:function(){return Object.keys(this.graph).includes(this.from)&&Object.keys(this.graph).includes(this.to)}},{key:"isExceedVertexCount",value:function(t){return Object.keys(this.graph).length>=this.vertexCount}}]),t}(),M=function(){function t(){Object(y.a)(this,t),this.graphInfo=void 0,this.from=void 0,this.to=void 0}return Object(k.a)(t,[{key:"setGraphInfo",value:function(t){return this.graphInfo=t,this}},{key:"setFromVertex",value:function(t){return this.from=t,this}},{key:"setToVertex",value:function(t){return this.to=t,this}},{key:"getGraphInfo",value:function(){return this.graphInfo}},{key:"getFromVertex",value:function(){return this.from}},{key:"getToVertex",value:function(){return this.to}},{key:"build",value:function(){return new S(this)}}]),t}(),T={margin:"12px",fontSize:"15px"},P=function(){var t=Object(s.b)(),e=Object(r.useState)({from:"",to:""}),n=Object(a.a)(e,2),o=n[0],i=n[1],c=Object(s.c)((function(t){return{graphInfo:t.graph.graph}})).graphInfo,h=function(t){var e=t.target,n=e.name,r=e.value;i("path-from"===n?function(t){return Object(u.a)(Object(u.a)({},t),{},{from:r})}:function(t){return Object(u.a)(Object(u.a)({},t),{},{to:r})})};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"config",children:[Object(p.jsx)("label",{style:T,children:"Undirected : Directed"}),Object(p.jsx)(v,{onChange:function(e){return t((n=e.target.checked,{type:x,payload:n}));var n}}),Object(p.jsx)("label",{style:T,children:"Shortest Path Find"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{text:"from",name:"path-from",onChange:h,value:o.from}),Object(p.jsx)(O,{text:"to",name:"path-to",onChange:h,value:o.to})]}),Object(p.jsx)("button",{onClick:function(){var e=(new M).setGraphInfo(c).setFromVertex(o.from).setToVertex(o.to).build().run();!1!==e&&t(j({from:o.from,to:o.to,path:e}))},children:"Find"}),Object(p.jsx)("img",{onClick:function(){return window.open("https://github.com/dkpark10/graphpainter","_blank")},style:{width:"45px",height:"45px",cursor:"pointer"},alt:"my github",src:"https://media.cdnandroid.com/item_images/1097581/imagen-github-0thumb.jpeg"})]})})},E=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("aside",{children:[Object(p.jsx)(g,{}),Object(p.jsx)(P,{})]})})},F=function(){return Object(p.jsx)("header",{children:Object(p.jsx)("h1",{children:"Graph Painter"})})},B=n(10),N=function(t){var e=t.size,n=t.value,r=t.onPointerDown,o=t.onPointerUp,i=t.onPointerMove,c=t.color,a=void 0===c?"#cfcfcf":c,h=e.y,s=e.x;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("g",{children:[Object(p.jsx)("circle",{cy:s,cx:h,r:"22",fill:"#16afc0",stroke:a,strokeWidth:"2.5",onPointerDown:r,onPointerUp:o,onPointerMove:i}),Object(p.jsx)("text",{y:s,x:h,dy:".35em",fontSize:"17",fill:"white",textAnchor:"middle",children:n})]})})},G=function(t){var e=t.from,n=t.to,r=t.cost,o=t.color,i=void 0===o?"#cfcfcf":o,c=Object(s.c)((function(t){return{direct:t.direct.directed}})).direct,h=Object(a.a)(e,2),u=h[0],f=h[1],d=Object(a.a)(n,2),j=d[0],b=d[1],l=function(t,e){var n=Math.max(t[0],e[0]),r=Math.max(t[1],e[1]),o=Math.min(t[0],e[0]),i=Math.min(t[1],e[1]),c=0;return e[0]>t[0]&&e[1]>t[1]?c+=15:e[0]<t[0]&&e[1]<t[1]&&(c+=12),[(n-o)/2+o-c,(r-i)/2+i+c]}(e,n),g=Object(a.a)(l,2),v=g[0],O=g[1],x="M ".concat(u," ").concat(f," L ").concat(j," ").concat(b),m=!0===c?"url(#arrow)":"";return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("g",{children:[Object(p.jsx)("defs",{children:Object(p.jsx)("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"23",refY:"5",markerWidth:"8",markerHeight:"8",orient:"auto-start-reverse",children:Object(p.jsx)("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#cfcfcf"})})}),Object(p.jsx)("path",{d:x,strokeWidth:"2",stroke:i,markerEnd:m}),Object(p.jsx)("text",{y:O,x:v,dx:".3em",dy:".9em",fontSize:"17",fill:i,textAnchor:"right",children:r})]})})},L=n(18),V=function t(e,n){Object(y.a)(this,t),this.y=void 0,this.x=void 0,this.y=e,this.x=n},R=function(){function t(e){Object(y.a)(this,t),this.graphInfo=void 0,this.vertexCount=0,this.leftTop=void 0,this.rightBottom=void 0,this.nodeCoord=[],this.graphInfo=e.getGraphInfo(),this.leftTop=e.getLeftTop(),this.rightBottom=e.getRightBottom(),this.vertexCount=Number(this.graphInfo.vertexCount)}return Object(k.a)(t,[{key:"run",value:function(){return this.BinarySpacePartitioning(Object(u.a)({},this.leftTop),Object(u.a)({},this.rightBottom),0),this.extractNodeCoordList(),this.extractVertex()}},{key:"BinarySpacePartitioning",value:function(t,e,n){if(Math.pow(2,n)>=this.vertexCount){var r=Math.floor(Math.random()*(e.y-t.y)+t.y),o=Math.floor(Math.random()*(e.x-t.x)+t.x);this.nodeCoord.push(new V(r,o))}else{var i=Math.floor(Math.floor(2*Math.random())),c=Math.floor(3*Math.random()+4);if(0===i){var a=(e.y-t.y)*c/10+t.y;this.BinarySpacePartitioning(Object(u.a)({},t),new V(a,e.x),n+1),this.BinarySpacePartitioning(new V(a+1,t.x),Object(u.a)({},e),n+1)}else{var h=(e.x-t.x)*c/10+t.x;this.BinarySpacePartitioning(Object(u.a)({},t),new V(e.y,h),n+1),this.BinarySpacePartitioning(new V(t.y,h+1),Object(u.a)({},e),n+1)}}}},{key:"extractNodeCoordList",value:function(){for(var t=this.nodeCoord.length-this.vertexCount;t;){var e=this.nodeCoord.length,n=Math.floor(Math.random()*e);this.nodeCoord.splice(n,1),t--}}},{key:"extractVertex",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{connectedList:[],coord:void 0},n={};return Object.entries(this.graphInfo.graph).forEach((function(r,o){var i=Object(a.a)(r,2),c=i[0],h=i[1];Object.keys(n).length>=t.vertexCount&&!1===Object.keys(n).includes(c)||(n[c]=n[c]||Object(u.a)({},e),n[c].coord||(n[c].coord=t.nodeCoord[0],t.nodeCoord.shift()),n[c].connectedList=t.connect(n,h))})),n}},{key:"connect",value:function(t,e){var n=this,r=[];return e.forEach((function(e){""!==e[0]&&void 0!==e[0]&&(Object.keys(t).length>=n.vertexCount&&void 0===t[e[0]]||(r.push(e),t[e[0]]=t[e[0]]||{connectedList:[],coord:void 0},t[e[0]].coord||(t[e[0]].coord=n.nodeCoord[0],n.nodeCoord.shift())))})),r}}]),t}(),z=function(){function t(){Object(y.a)(this,t),this.graphInfo=void 0,this.leftTop=void 0,this.rightBottom=void 0}return Object(k.a)(t,[{key:"setGraphInfo",value:function(t){return this.graphInfo=t,this}},{key:"setLeftTop",value:function(t){return this.leftTop=t,this}},{key:"setRightBottom",value:function(t){return this.rightBottom=t,this}},{key:"getGraphInfo",value:function(){return this.graphInfo}},{key:"getLeftTop",value:function(){return this.leftTop}},{key:"getRightBottom",value:function(){return this.rightBottom}},{key:"build",value:function(){return new R(this)}}]),t}(),A=20,D=function(t,e){return t<=A&&(t=40),t>=e.height-A&&(t=e.height-40),t},H=function(){var t=Object(r.useRef)(null),e=Object(r.useState)({width:0,height:0}),n=Object(a.a)(e,2),o=n[0],i=n[1],c=Object(r.useState)({}),h=Object(a.a)(c,2),f=h[0],d=h[1],j=Object(r.useState)(!1),b=Object(a.a)(j,2),l=b[0],g=b[1],v=Object(s.c)((function(t){return{graphInfo:t.graph.graph,shortestPath:t.path}})),O=v.graphInfo,x=v.shortestPath;Object(r.useEffect)((function(){i((function(e){return Object(u.a)(Object(u.a)({},e),{},{width:t.current.offsetWidth,height:t.current.offsetHeight})}));var e=(new z).setGraphInfo(O).setLeftTop(new V(40,40)).setRightBottom(new V(o.width-40,o.height-40)).build();d((function(t){return Object(u.a)({},e.run())}))}),[t,O,o.width,o.height]);var m=function(){return g(!0)},y=function(){return g(!1)},k=Object(L.debounce)((function(t,e){var n=Object(a.a)(e,2),r=n[0],i=n[1],c=D(i.coord.y+t.movementX,o),h=D(i.coord.x+t.movementY,o);l&&d((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(B.a)({},r,Object(u.a)(Object(u.a)({},f[r]),{},{coord:new V(c,h)})))}))}),10),C=Object.entries(f).map((function(t,e){var n=Object(a.a)(t,2),r=n[0],o=n[1];return Object(p.jsx)(N,{size:{y:o.coord.y,x:o.coord.x},value:r,onPointerMove:function(e){return k(e,t)},onPointerDown:m,onPointerUp:y},e)})),w=Object.entries(f).map((function(t,e,n){var r=Object(a.a)(t,2),o=r[0],i=r[1],c=i.coord;return i.connectedList.map((function(t,r){var i=Object(a.a)(t,2),h=i[0],s=i[1],u=f[h].coord,d=function(t,e,n){var r=Object.keys(t).length;return!(t[e]&&t[n]&&r>2)&&Object.keys(t).includes(e)&&Object.keys(t).includes(n)}(x.path,o,h)?"#ebe534":void 0;return Object(p.jsx)(G,{from:[c.y,c.x],to:[u.y,u.x],cost:s,color:d},e*n.length+r)}))}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("main",{ref:t,children:Object(p.jsxs)("svg",{style:{width:o.width,height:o.height},onClick:function(){return g(!1)},children:[w,C]})})})},U=function(){return console.log("App render"),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(F,{}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(E,{}),Object(p.jsx)(H,{})]})]})},W=n(8),_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),i(t),c(t)}))},q=n(19),X=n.n(q),J=n(20),Y=Object(W.combineReducers)({graph:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;return e.type===b?Object(u.a)(Object(u.a)({},t),{},{graph:e.payload}):t},direct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;return e.type===x?Object(u.a)(Object(u.a)({},t),{},{directed:e.payload}):t},path:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;return e.type===f?Object(u.a)(Object(u.a)({},t),{},{from:e.payload.from,to:e.payload.to,path:e.payload.path}):t}}),K=Object(W.createStore)(Y,X.a);c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(J.a,{children:Object(p.jsx)(s.a,{store:K,children:Object(p.jsx)(U,{})})})}),document.getElementById("root")),_()}},[[35,1,2]]]);
//# sourceMappingURL=main.e5bc2d6b.chunk.js.map