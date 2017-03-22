/**
 * © 2015 Cedexis Inc.
 * Radar JavaScript client
 * Application Version: 0.1.281
 * Build Timestamp: 1454033847
 */
(function(window,document){'use strict';function m(e){var h=e.bb||18,g=e.cb||21,b,f,k,l;this.g=e.w;this.Y=e.d;this.ka=e.samplerId;this.K=[];this.g.cedexis=this.g.cedexis||{};this.g.cedexis.callbacks=this.g.cedexis.callbacks||[];this.Fa=e.w&&e.w.location&&/radar-no-ajax/i.test(e.w.location.search)?!1:e.w.XMLHttpRequest&&"undefined"!==typeof(new e.w.XMLHttpRequest).withCredentials?!0:!1;this.Ja=function(){return b};this.Ka=function(){return document};this.Aa=function(a,c){for(var d=[],b=0;100>b&&(0<a.length||0<c.length);)0<a.length&&
d.push(a.shift()),0<c.length&&d.push(c.shift()),b+=1;return d};this.I=function(){return(new Date).getTime()};this.v=function(a,c){return setTimeout(a,c)};this.o=function(a){clearTimeout(a)};this.y64enc=this.P=function(){return function(a){var c="",d,b,f,e,g,h,k=0;a=a.replace(/\r\n/g,"\n");b="";for(f=0;f<a.length;f+=1)e=a.charCodeAt(f),128>e?b+=String.fromCharCode(e):(127<e&&2048>e?b+=String.fromCharCode(e>>6|192):(b+=String.fromCharCode(e>>12|224),b+=String.fromCharCode(e>>6&63|128)),b+=String.fromCharCode(e&
63|128));for(a=b;k<a.length;)d=a.charCodeAt(k),k+=1,b=a.charCodeAt(k),k+=1,f=a.charCodeAt(k),k+=1,e=d>>2,d=(d&3)<<4|b>>4,g=(b&15)<<2|f>>6,h=f&63,isNaN(b)?g=h=64:isNaN(f)&&(h=64),c=c+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".charAt(e)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".charAt(d)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".charAt(g)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".charAt(h);return c}}();
this.ba=function(a){var c=/radar_(tags|impact)_(\w{3,})/i,d;if(("radar_tags_"===a.slice(0,11)||"radar_impact_"===a.slice(0,13))&&(c=c.exec(a))&&3===c.length){try{d=p(window[a])}catch(b){return null}return c[2]+":"+this.P(d)}return null};this.H=function(a){if(!a.includePartnerTags)return"0";if(!window.JSON||"function"!==typeof window.JSON.stringify)return"1";if(a=a.getImpactObject()){var c;try{c=p(a)}catch(b){return"error"}try{c=this.P(c)}catch(b){return"error"}return"impact_kpi:"+c}c=[];for(var d in window){a=
null;if(void 0!==window.hasOwnProperty)window.hasOwnProperty(d)&&(a=this.ba(d));else try{void 0!==window[d]&&(a=this.ba(d))}catch(b){}a&&c.push(a)}return 1>c.length?"0":c.join("@")};this.D=function(a){var c=document.getElementById("cdx");c||(c=document.createElement("div"),c.id="cdx",document.body.appendChild(c));c.appendChild(a)};this.ca=function(){return Math.random()};this.Ma=function(a){return Math.floor(this.ca()*(a-0+1))+0};this.N=function(a,c){var d,b=[];c=c||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(d=0;d<a;d+=1)b.push(c.charAt(this.Ma(c.length-1)));return b.join("")};this.xa=function(a){return/http:/i.test(a)?"http":/https:/i.test(a)?"https":/\/\//.test(a)?window.location.protocol.replace(":",""):null};this.ua=function(){var a=[],c=b.p.p,d,f;c.a&&c.a.a?a.push({a:"cold",b:1,f:!!c.d,t:c.a.a.t,u:c.a.a.u}):c.b&&c.b.a&&a.push({a:"cold",b:1,f:!!c.d,t:c.b.a.t,u:c.b.a.u});c.d&&a.push({a:"uni",t:c.d.t,u:c.d.u});if(c.a)for(c.a.b&&a.push({a:"rtt",b:0,f:!!c.d,t:c.a.b.t,u:c.a.b.u}),f=b.b,d=0;d<f;d++)c.a.c&&
a.push({a:"kbps",b:14,f:!!c.d,t:c.a.c.t,u:c.a.c.u,report:f-1===d,probeIdSuffix:0===d?"":String.fromCharCode(97+d)});else if(c.b)for(c.b.b&&a.push({a:"rtt",b:0,f:!!c.d,t:c.b.b.t,u:c.b.b.u}),f=b.b,d=0;d<f;d++)c.b.c&&a.push({a:"kbps",b:14,f:!!c.d,t:c.b.c.t,u:c.b.c.u,report:f-1===d,probeIdSuffix:0===d?"":String.fromCharCode(97+d)});c.c&&(d=this.xa(c.c.u))&&("http:"!==this.g.location.protocol&&"https"!==d||a.push({a:"custom",b:2,f:!!c.d,t:c.c.t,u:c.c.u}));b.L=a};this.va=function(a){var c=[];a.connect&&
c.push({a:"cold",b:1,f:!1,t:1,u:a.connect});a.response_time&&c.push({a:"rtt",b:0,f:!1,t:1,u:a.response_time});a.kbps&&c.push({a:"kbps",b:14,f:!1,t:1,u:a.kbps});b.L=c};this.ab=function(a){return"uni"===a?[b.requestor.zoneId,b.requestor.customerId,b.p.z,b.p.c,b.p.i,this.N(8),b.requestor.requestSignature].join("-"):[a,b.requestor.zoneId,b.requestor.customerId,b.p.z,b.p.c,b.p.i,b.requestor.transactionId,b.requestor.requestSignature].join("-")};this.A=function(a,c){var d="";a=a||f.u;if(!1!==b.a){d="?rnd=";
-1<a.indexOf("?",0)&&(d="&rnd=");var e;"uni"===f.a?e="uni":e=f.b+(c||"");d+=this.ab(e)}return a+d};this.Ra=function(a){var c=a.indexOf("//");if(-1<c){var d=a.substring(c+2),b="//";0<c&&(b=a.substring(0,c)+"//");a=d.split("/");a[0]=this.N(63,"abcdefghijklmnopqrstuvwxyz")+"."+a[0];return b+a.join("/")}return null};this.M=function(a,c){var d=/(\d+)kb\./i.exec(c);return!d||2>d.length?0:Math.floor(8E3*parseInt(d[1],10)/a)};this.B=function(a){var c,d,e;if(b&&f){b.c?(c=b.c.a,d=b.c.b,e=b.c.c):(c=b.p.z,d=
b.p.c,e=b.p.i);q(this,"Success",c,d,e,f.b,0,a);var g=b.requestor;a=[g.domains.report,"f1",g.requestSignature,c,d,e,f.b,0,a,k||"0",this.H(g)];this.C("//"+a.join("/"));this.v(this.ma(),200)}};this.ma=function(){var a=this;return function(){a.h()}};this.Va=function(){var a=this;return function(){a.l()}};this.j=function(a){var c,d,e;if(b&&f){b.c?(c=b.c.a,d=b.c.b,e=b.c.c):(c=b.p.z,d=b.p.c,e=b.p.i);q(this,"Error",c,d,e,f.b,a,0);var g=b.requestor;a=[g.domains.report,"f1",g.requestSignature,c,d,e,f.b,a,0,
k||"0",this.H(g)];this.C("//"+a.join("/"));this.v(this.Va(),200)}};this.G=function(a){return!0===a.f&&null===k};this.$=function(a,c,d){a===f&&(c=d.call(null,c),0<c&&4E3>=c?(d=c,14===a.b&&(d=this.M(c,a.u)),this.G(a)?(l={probe:a,measurement:d},this.h()):this.B(d)):this.j(1))};this.na=function(a,c,d){var b=this;return function(){a.c||(b.o(a.e),b.$(a,c,d))}};this.O=function(a){var c,d;c=document.createElement("script");c.async=!0;c.src=this.A();f.c=!1;f.d="loading";d=this.I();void 0!==c.onreadystatechange?
c.onreadystatechange=function(c,b){var e=!1;return function(){e||"loaded"!==this.readyState&&"complete"!==this.readyState||(e=!0,b!==f||b.c||(c.o(b.e),c.$(b,d,a)))}}(this,f):c.onload=this.na(f,d,a);c.onerror=function(a,c){return function(){c===f&&(a.o(c.e),c.c=!0,c.d="error",a.j(4))}}(this,f);f.e=this.v(this.F(),4E3);window.radar.stoppedAt=window.cedexis.radar.stopped_at=null;this.D(c)};this.ea=function(){var a=this;return function(c){return a.I()-c}};this.F=function(a){var c=this,d=f;return function(){var b=
1;d.c||(a&&a.call(null),d===f&&("loaded"===d.d&&(b=4),d.c=!0,d.d="timeout",c.j(b)))}};this.Qa=function(){var a=this;return function(){k="2";a.J()}};this.Ta=function(){var a=this,c=f,d;return d=function(){a.o(c.e);this.removeEventListener("load",d,!1);c.c||(c.d="loaded")}};this.Ua=function(a,c){return function(){a.removeEventListener("load",c,!1)}};this.Sa=function(){var a=this,c=f,d;return d=function(e){function g(a,c){var d=[u.domains.report,"f1",u.requestSignature,h.p.z,h.p.c,h.p.i,c,v,n];q(a,"DSA",
h.p.z,h.p.c,h.p.i,c,v,n);d.push(k||"0");d.push(a.H(u));d.push(h.m.ciphertext);a.C("//"+d.join("/"))}if(c===f){var h;try{h=JSON.parse(e.data)}catch(D){}if(h&&h.source&&"dsa"===h.source&&"l"!==h.s&&(window.removeEventListener("message",d,!1),"s"===h.s&&!c.c)){var n=h.m.responseEnd-h.m.domainLookupStart,u=b.requestor,v=0;if(4E3>=n){if(a.G(c)){l={probe:c,measurement:n,extraFields:[h.m.ciphertext]};a.h();return}g(a,1);g(a,0)}else v=1,n=0,g(a,1);a.l()}}}};this.ha=function(){var a=document.createElement("iframe"),
c=this.A(),d=this.Ta();window.addEventListener("message",this.Sa(),!1);a.addEventListener("load",d,!1);a.src=c;a.style.display="none";f.c=!1;f.d="loading";f.e=this.v(this.F(this.Ua(a,d)),4E3);this.D(a)};this.X=function(){this.O(function(a){return window.radar.stoppedAt?window.radar.stoppedAt.getTime()-a:window.cedexis.radar.stopped_at?window.cedexis.radar.stopped_at.getTime()-a:null})};this.Wa=function(a,c){var d=this;return function(){d.o(a.e);d.B(d.I()-c)}};this.ga=function(){var a=this.Ka().createElement("iframe"),
c=this.I();a.src=this.A();a.style.display="none";f.c=!1;f.d="loading";a.onload=this.Wa(f,c);f.e=this.v(this.F(),4E3);this.D(a)};this.aa=function(a){if(this.g.performance&&this.g.performance.getEntriesByType)for(var c=this.g.performance.getEntriesByType("resource"),d=c.length;d--;)if(c[d].name===a)return c[d];return null};this.Ia=function(a){var c=this.g.performance;if(c&&"getEntriesByName"in c)return c.getEntriesByName(a)};this.Xa=function(a){var c=this;return function(){if(f===a&&(c.o(a.e),!a.c&&
"loading"===a.d))if(a.d="loaded","report"in a&&!a.report)c.h();else{var d=c.aa(this.src);if(d){var b,e=14===a.b;0<d.requestStart?(b=e?Math.round(d.responseEnd-d.requestStart):Math.round(d.responseStart-d.requestStart),1>b&&0<d.duration&&(b=Math.round(d.duration))):b=Math.round(d.duration);1>b?c.l():0<b&&4E3>=b?(d=b,e&&(d=c.M(b,a.u)),c.G(a)?(l={probe:a,measurement:d},c.h()):c.B(d)):c.j(1)}}}};this.Za=function(a,c){var d=(new Date).getTime(),b=this;return function(){b.o(a.e);var e=(new Date).getTime();
a.c||(e-=d,e>c?b.j(1):b.G(a)?(l={probe:a,measurement:e},b.h()):b.B(e))}};this.Ya=function(a){var c=this;return function(){c.o(a.e);if(!a.c){var b=c.aa(this.src);b&&(b=0<b.requestStart?Math.round(b.domainLookupEnd-b.domainLookupStart):Math.round(b.duration),1>b?c.l():4E3>=b?c.B(b):c.j(1))}}};this.fa=function(a){var c=this;return function(){f===a&&(c.o(a.e),a.c||"loading"!==a.d||(a.c=!0,a.d="error",c.j(4)))}};this.ia=function(){var a="cold"===f.a,c="performance"in this.g&&"getEntriesByType"in this.g.performance,
d=a&&!c;a||c?(a=b.timeout||4E3,c=new Image,c.onload=d?this.Za(f,a):this.Xa(f),c.onerror=this.fa(f),f.c=!1,f.d="loading",f.e=this.v(this.F(),a),c.src=this.A(void 0,f.probeIdSuffix||null)):this.h()};this.ta=function(){var a=new Image;a.onload=this.Ya(f);a.onerror=this.fa(f);f.c=!1;f.d="loading";f.e=this.v(this.F(),4E3);var c=this.Ra(f.u);c?a.src=this.A(c):this.h()};this.sa=function(){if("performance"in this.g&&"getEntriesByType"in this.g.performance&&this.Fa){var a=this.A(),c=new XMLHttpRequest,d=this.Pa(f,
a);c.addEventListener("load",d);c.addEventListener("error",d);c.addEventListener("abort",d);c.addEventListener("timeout",d);c.open("GET",a,!0);c.timeout=b.timeout||4E3;c.send()}else this.l()};this.Pa=function(a,c){var d=this,e=!1;return function(g){if(b&&a===f&&!e){e=!0;var h=b.requestor,k=h.getImpactObject()||{};k.metadata=k.metadata||{};k.metadata.providers=k.metadata.providers||{};k.metadata.providers[b.p.i]=k.metadata.providers[b.p.i]||{};var l=k.metadata.providers[b.p.i][a.b]={};h.setImpactObject(k);
l.event=g.type;switch(g.type){case "load":l.status="undefined"===typeof this.status?"unknown":this.status;l.readyState="undefined"===typeof this.readyState?"unknown":this.readyState;l.statusText="undefined"===typeof this.statusText?"unknown":this.statusText;200===this.status?(g=d.Ia(c))&&g.length?(l.contentAsBase36Int=parseInt(this.responseText,36),d.wa(a,g[g.length-1])):d.l():d.j(1);break;case "timeout":d.j(1);break;case "error":case "abort":d.j(4)}}}};this.wa=function(a,c){var b,e=14===a.b;b=0<
c.requestStart?e?Math.round(c.responseEnd-c.requestStart):Math.round(c.responseStart-c.requestStart):Math.round(c.duration);if(1>b)this.l();else if(0<b&&4E3>=b){var f=b;e&&(f=this.M(b,a.u));this.G(a)?(l={probe:a,measurement:f},this.h()):this.B(f)}else this.j(1)};this.J=function(){function a(a,b){var g=[c.domains.report,"f1",c.requestSignature,d,e,f,b,0,l.measurement,k||"0",a.H(c)];if("extraFields"in l)for(var h=0;h<l.extraFields.length;h+=1)g.push(l.extraFields[h]);q(a,"Success",d,e,f,b,0,l.measurement);
a.C("//"+g.join("/"))}if(b)if(l){var c=b.requestor,d,e,f;b.c?(d=b.c.a,e=b.c.b,f=b.c.c):(d=b.p.z,e=b.p.c,f=b.p.i);4===l.probe.t?(a(this,1),a(this,0),this.l()):(a(this,l.probe.b),this.h())}else this.h()};this.pa=function(a){var c=this;return function(d){f!==a||b.p.i!==d.id||a.c||(a.d="loaded",k=d.node,c.J())}};this.ra=function(){return function(){}};this.qa=function(){return function(){}};this.Da=function(){var a,c;a=document.createElement("script");c=this.A();window.cdx=window.cdx||{};window.cdx.s=
window.cdx.s||{};window.cdx.s.b=this.pa(f);a.onload=this.ra();a.onerror=this.qa();f.c=!1;f.d="loading";a.type="text/javascript";a.async=!0;a.src=c;this.D(a)};this.oa=function(){var a=this;return function(c){var d,e,g;if(b&&f){try{d=JSON.parse(c.data)}catch(h){}d&&"uni"===d.source&&(c=parseInt(d.p.z,10),e=parseInt(d.p.c,10),g=parseInt(d.p.i,10),g===b.p.i&&e===b.p.c&&c===b.p.z&&d.r.z===b.requestor.zoneId&&d.r.c===b.requestor.customerId&&(a.o(f.e),"l"===d.s?f.d="loaded":-1<"es".indexOf(d.s)&&("e"===
d.s?(f.d="error",k="2"):"s"===d.s&&(!1===d.encoded&&(d.node_id=encodeURIComponent("base64:"+window.cedexis.base64.encode(d.node_id))),k=d.node_id),a.J())))}}};this.Ea=function(){return"function"===typeof window.postMessage&&"function"===typeof window.addEventListener};this.Ca=function(){var a;this.Ea()?(f.c=!1,f.d="loading",a=document.createElement("iframe"),a.style.display="none",a.src=this.A(),f.e=this.v(this.Qa(),4E3),this.D(a)):(k="1",this.J())};this.La=function(a){a=a.slice(a.lastIndexOf("/")+
1);var c=[/cdx10b/,/rdr12/,/radar\.js/,/r\d+(-\d+kb)?\.js/i,/r\d+\w+(-\d+kb)?\.js/i],b;if("d17.html"===a)return 4;for(b=0;b<c.length;b+=1)if(c[b].test(a))return 1;return/\.js(\?)?/i.test(a)?5:/\.(ico|png|bmp|gif|jpg|jpeg)(\?)?/i.test(a)?2:/\.(htm(l)?)(\?)?/i.test(a)?3:null};this.Ba=function(){var a;if(f)switch(f.t){case 1:this.X();break;case 2:this.ia();break;case 3:this.ga();break;case 4:this.ha();break;case 5:this.O(this.ea());break;case 6:a=this.La(f.u);switch(a){case 1:this.X();break;case 2:this.ia();
break;case 3:this.ga();break;case 4:this.ha();break;case 5:this.O(this.ea());break;default:this.j(5)}break;case 7:this.Ca();break;case 8:this.Da();break;case 9:this.ta();break;case 10:this.sa();break;default:this.j(6)}};this.h=function(){b&&(0<b.L.length?(f=b.L.shift(),this.Ba()):(b=null,this.l()))};this.l=function(){b=f=null;0<this.K.length?(l=k=null,b=this.K.shift(),r(this,"Cedexis Measure Provider",{providerOwnerZoneId:b.p.z,providerOwnerCustomerId:b.p.c,providerId:b.p.i}),b.p.source_url?this.ya():
(this.ua(),this.h())):r(this,"Cedexis Radar Session Finished")};this.ya=function(){var a,c,d;window.XMLHttpRequest&&(c=new window.XMLHttpRequest)&&(a=b.p.source_url,d=Math.ceil(99999999*this.ca()),a=0>a.indexOf("?",0)?a+("?rnd="+d):a+("&rnd="+d),c.open("GET",a,!0),c.onreadystatechange=this.la(),c.send())};this.la=function(){var a=this,c=b;return function(){var d;200===this.status&&4===this.readyState&&(d=JSON.parse(this.responseText),c===b&&(a.va(d),0<b.L.length?a.h():a.l()))}};this.Na=function(){var a=
0;window.chrome&&window.chrome.loadTimes?(a=window.chrome.loadTimes(),a=Math.round(1E3*a.firstPaintTime)):window.performance&&window.performance.timing&&window.performance.timing.msFirstPaint&&(a=Math.round(window.performance.timing.msFirstPaint));return a};this.$a=function(a){return this.da(a,a.transactionId)};this.da=function(a,c){if(this.g.location&&this.g.location.protocol){var b="https:"===this.g.location.protocol?"s":"i",e=[];e.push("i1");e.push(this.ka);e.push(h);e.push(g);e.push(a.zoneId);
e.push(a.customerId);e.push(c.toString(10));e.push(b);e=e.join("-");b=[];b.push(e+".init."+a.domains.init);b.push("i1");b.push(Math.floor((new Date).getTime()/1E3).toString(10));b.push(c.toString(10));b.push("xml");b="//"+b.join("/");return b+("?seed="+e)}return""};this.Oa=function(a,b){for(var d=0;d<a.length;d+=1)a[d].requestor=b;this.K=this.Aa(this.K,a);this.Ja()||this.l()};this.run=this.za=function(a){a.runCalledAt=(new Date).getTime();this.g.cedexis.resourceTimingManager&&this.g.cedexis.resourceTimingManager.setToClearOnBufferFull(!0);
t({a:this.$a(a),b:w(this,a)});"afterRun"in a&&a.afterRun()};"function"===typeof window.addEventListener&&window.addEventListener("message",this.oa(),!1)}m.prototype.ja="navigationStart unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" ");
function q(e,h,g,b,f,k,l,a){r(e,"Cedexis Send "+h+" Report",{providerOwnerZoneId:g,providerOwnerCustomerId:b,providerId:f,probeId:k,resultCode:l,value:a})}
function r(e,h,g){for(var b=e.g.cedexis,f=b.callbacks,k=f.length;k--;)"function"===typeof f[k]&&f[k].call(e.g,h,g);for(var l in b.requestors)b.requestors.hasOwnProperty(l)&&b.requestors[l].sendParentMessages&&e.g.parent&&"function"===typeof e.g.parent.postMessage&&e.g.parent.postMessage({radar:{type:"status",data:{messageName:h,messageData:g}}},"*");if("dispatchEvent"in e.Y&&"CustomEvent"in e.g){var a;try{a=new CustomEvent(h,{detail:g})}catch(c){"Object doesn't support this action"===c.message&&(a=
document.createEvent("CustomEvent"),a.initCustomEvent(h,!1,!1,g))}a&&e.Y.dispatchEvent(a)}}m.prototype.log=function(e){var h=this.g.console;h&&h.log&&h.log.call(h,(new Date).toUTCString()+": "+e)};
m.prototype.Ha=function(){if(this.g.performance&&this.g.performance.getEntriesByType){for(var e=this.g.performance.getEntriesByType("resource"),h=e.length,g={},b;h--;){var f=e[h];b=f.name.split("//");if(b[1]){b=b[1].split("/");b=g[b[0]]=g[b[0]]||{V:0,W:0,R:0,S:0};var k,l;0<f.requestStart?(l=Math.round(f.responseEnd-f.requestStart),k=Math.round(f.responseStart-f.requestStart)):k=l=Math.round(f.duration);9<k&&(b.V+=k,b.R+=1);9<l&&(b.W+=l,b.S+=1);k=Math.round(f.startTime);b.U="undefined"===typeof b.U?
k:Math.min(k,b.U);k=Math.round(f.responseEnd);b.T="undefined"===typeof b.T?k:Math.max(k,b.T)}}var e=[],a;for(a in g)g.hasOwnProperty(a)&&(b=g[a],e.push([a,b.V,b.W,b.R,b.U,b.T,b.S]));return e}return null};m.prototype.getDomainPerformance=m.prototype.Ha;
function x(e,h){var g=(e.g.performance||{}).timing;if(g){if(0===g.loadEventEnd){e.Z=e.g.setInterval(y(e,h),1E3);return}for(var b=[h.domains.report,"n1",0],f=0;f<e.ja.length;f+=1){var k=g[e.ja[f]];b.push(void 0===k?0:k)}b.push(h.requestSignature);b.push(e.H(h));b.push(e.Na());g.connectEnd<g.connectStart||g.domainLookupEnd<g.domainLookupStart||g.domComplete<g.domLoading||g.fetchStart<g.navigationStart||g.loadEventEnd<g.loadEventStart||g.loadEventEnd<g.navigationStart||g.responseEnd<g.responseStart||
g.responseStart<g.requestStart||e.C("//"+b.join("/"))}Math.random()<h.remoteProbingSampleRate&&z(e,h)}function y(e,h){var g=20;return function(){0<g--?0<e.g.performance.timing.loadEventEnd&&(e.g.clearInterval(e.Z),x(e,h)):(e.g.clearInterval(e.Z),Math.random()<h.remoteProbingSampleRate&&z(e,h))}}
function p(e){function h(e,b){for(var f="",h=0;h<e.length;h++)f=b(f,e[h],h);return f}switch(typeof e){case "string":return'"'+(""+e).replace(/\"/g,'\\"')+'"';case "number":return isNaN(e)?"null":e;case "boolean":return e?"true":"false";case "undefined":return"null";default:return null===e?"null":""+e!==e&&"[object Array]"==Object.prototype.toString.call(e)?"["+h(e,function(e,b){return e+","+p(b)}).substring(1)+"]":"{"+h(function(e){var b=[],f;for(f in e)b.push(f);return b}(e),function(g,b){void 0!==
e[b]&&"function"!==typeof e[b]&&(g+=","+p(b)+":"+p(e[b]));return g}).substring(1)+"}"}};m.prototype.ka="j1";function t(e){var h=new XMLHttpRequest;e.c=e.c||{};if(h)try{h.open("GET",e.a,!0),"b"in e&&(h.onreadystatechange=function(){200===this.status&&4===this.readyState&&e.b.call(this)}),e.d&&(h.timeout=e.d),h.send()}catch(g){}}
function w(e,h){return function(){if(this.responseText){var g=/<requestSignature>([\w@]+)</.exec(this.responseText);g&&2===g.length&&(h.requestSignature=g[1],h.requestSignatureTimestamp=(new Date).getTime(),h.notify("init"),h.sendPLT&&Math.random()<h.pltSampleRate?x(e,h):Math.random()<h.remoteProbingSampleRate&&z(e,h))}}}m.prototype.C=function(e){t({a:e})};m.prototype.send_report=m.prototype.C;
function z(e,h){var g,b;g=[];var f="",k=h.deviceCaps.call(h),l=Object.keys(k);for(b=l.length;b--;)g.push(l[b]+"="+k[l[b]]);if(window.location&&window.location.search)for((b=/radar-location=\w+-\w+-\w+/.exec(window.location.search))&&g.push(b[0]),k=window.location.search.slice(1).split("&"),b=k.length;b--;)if(l=k[b].split("="),2===l.length)switch(l[0]){case "radar-geo":l=l[1].split("-");g.push("country="+l[0]);g.push("asn="+l[1]);break;case "radar-provider-count":g.push("providerCount="+l[1]);break;
case "radar-provider-count-public":g.push("providerCountPublic="+l[1]);break;case "radar-provider-count-private":g.push("providerCountPrivate="+l[1]);break;case "radar-providers-set":g.push("providersSet="+l[1])}else 1===l.length&&"radar-include-tiny-networks"==l[0]&&g.push("alwaysMeasureTinyNetworks");0<g.length&&(f="?"+g.join("&"));g=[h.domains.code,h.zoneId,h.customerId,"radar",h.buildTimestamp,e.N(20),"providers.json"];g="//"+g.join("/")+f;t({a:g,b:function(a){return function(){var b;try{b=JSON.parse(this.responseText)}catch(d){return}a.Oa(b,
h)}}(e)})}m.prototype.Ga=function(e,h){if("function"===typeof h){var g;var b;(b=this.g.crypto||this.g.msCrypto)&&b.getRandomValues?(g=new Uint32Array(1),b.getRandomValues(g),g=g[0]):g=Math.floor(1E9*Math.random());t({a:this.da(e,g),b:h})}};m.prototype.doInitWithCallback=m.prototype.Ga;window.cedexis.main=window.cedexis.main||new m({w:window,d:document,samplerId:"j1"});var A,B,C;if(window.cedexis.requestors)for(A=Object.keys(window.cedexis.requestors),B=A.length;B--;)C=window.cedexis.requestors[A[B]],C.transactionId&&!C.runCalledAt&&window.cedexis.main.run(C);}(window,document));