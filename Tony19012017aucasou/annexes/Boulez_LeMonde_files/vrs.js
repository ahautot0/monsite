/*
 * vrs v47
 * Copyright 2015 Outbrain Inc.
 * @Date Mon Jan 25 2016 10:55:11 GMT-0500 (EST)
 */
!function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";var r={};r.np=function(){return e("../utils/cookies").getItem("__vrid")||null},r.cookie=function(){return e("../utils/cookies").getItem("__vrf")},r.zones=function(){return e("../utils/zones").getAll()},r.contentTypes=function(t){return e("../utils/typecat").contentTypes(t)},r.contentCategories=function(t){return e("../utils/typecat").contentCategories(t)},r.authors=function(t){return e("../utils/authors").getAuthors(t)},r.domain=function(e){e=e||document.location.hostname;var t=null,n={"co.uk":1,"co.il":1,"co.in":1,"co.ke":1,"co.ug":1,"com.my":1,"com.au":1,"com.br":1},r=e.split(".");return r.length>=2&&(t=r.slice(-2).join("."),n[t]&&(t=r.slice(-3).join("."))),t},r.charset=function(){return e("../utils/dom").getCharset()||"UTF-8"},r.trackURL=function(t,n,r){return t=t||e("../utils/dom").getProperty("vr:canonical"),t&&t.content?e("../utils/url").absolute(t.content):(n=n||e("../utils/dom").getHeader("link","rel","canonical"),n&&n.href?e("../utils/url").absolute(n.href):(r=r||e("../utils/dom").getProperty("og:url"),r&&r.content?e("../utils/url").absolute(r.content):document.location.href))},r.refURL=function(t,n){return n=n||e("../cache"),t||(t=document.referrer),n.metaRefreshedVisit()&&(t=n.trackURL()),t},r.metaRefreshedVisit=function(t,n,r){var o;return t=t||e("../cache"),t.hasCookies?(n=n||e("../utils/dom").getHeader("meta","http-equiv","refresh"),n&&n.content&&(r=r||decodeURIComponent(e("../utils/cookies").getItem("__vrrefresh")),o=parseInt(n.content.split(";")[0],10),o=Math.round(o/60*100)/100+.1,e("../utils/cookies").setItem("__vrrefresh",encodeURIComponent(t.trackURL()),o,t.domain),r===t.trackURL())?!0:!1):!1},t.exports=r},{"../cache":2,"../utils/authors":15,"../utils/cookies":17,"../utils/dom":20,"../utils/typecat":31,"../utils/url":32,"../utils/zones":34}],2:[function(e,t,n){"use strict";var r=e("./property"),o=e("./getters"),i=function(){this.np=new r(o.np),this.hasCookies=new r(null,!0),this.automate=new r(null,!1),this.charset=new r(o.charset),this.cookie=new r(o.cookie),this.domain=new r(o.domain),this.trackURL=new r(o.trackURL),this.refURL=new r(o.refURL),this.metaRefreshedVisit=new r(o.metaRefreshedVisit),this.zones=new r(o.zones,{}),this.contentTypes=new r(o.contentTypes),this.contentCategories=new r(o.contentCategories),this.authors=new r(o.authors)};i.prototype.init=function(){this.cookie(),this.domain()},t.exports=new i},{"./getters":1,"./property":3}],3:[function(e,t,n){"use strict";var r=function(e,t){var n=this;return n.value=t||null,function(t,r){return t?n.cache(t):!e||t||n.value&&!r||n.cache(e()),n.value}};r.prototype.cache=function(e){this.value=e},t.exports=r},{}],4:[function(e,t,n){"use strict";var r=e("../utils/objects");t.exports=r.extend(e("./production"),e("./shared"))},{"../utils/objects":27,"./production":5,"./shared":6}],5:[function(e,t,n){"use strict";t.exports={environment:"production",logLimit:35}},{}],6:[function(e,t,n){"use strict";t.exports={trackingServer:"//vrt.outbrain.com/",trackingServerError:"//vrt.outbrain.com/error/",trackingServerVideo:"//vrt.outbrain.com/video/",servingServer:"//vrp.outbrain.com/",headline:{dashOld:{origin:"https://editorial.outbrain.com",injectScriptUrl:"https://editorial.outbrain.com/static/js/reports/frontpage/frontpage.headline_test_overlay.js"},dashNew:{origin:"https://beta-editorial.outbrain.com",injectScriptUrl:"https://beta-editorial.outbrain.com/vendor/headline-preview-control.js"}}}},{}],7:[function(e,t,n){"use strict";var r={};r.TYPE_LIMIT=2,r.TYPE_CHAR_LIMIT=20,r.CATEGORY_LIMIT=5,r.CATEGORY_CHAR_LIMIT=20,t.exports=r},{}],8:[function(e,t,n){"use strict";var r=e("./utils/log"),o=e("./config");if(window._vrqloaded){var i=window.console&&window.console.log;return i&&console.log("VRS: Attempted to load `vrs.js` more than once")}window._vrtrack=function(){},window._vrq=window._vrq||[];var s=e("./cache"),a=e("./utils/cookies");e("./utils/events");window.cache=s,window._vrqloaded=!0,r("Loaded and initialized"),e("./utils/time").start(),s.init(),window._vrtrack=e("./track/impression").manual,window._vrq.run=e("./vrq").run,window._vrq.stop=e("./vrq").stop,window._vrq.jsonp=e("./vrq").jsonp,window._vrdebug=r.prototype,window._vrq.run(),s.hasCookies()&&!s.cookie()&&a.setItem("__vrf",e("./utils/hash").generate(),30,"/",s.domain()),e("./utils/dom").onReadyByTag("body",function(){function t(t){e("./utils/script").load(t,{async:!0,id:"vrs-script-"+(new Date).getTime()})}s.trackURL(),s.charset(),s.zones(),e("./track/impression").ping({refURL:a.getItem("__vru")||s.refURL(),seenURL:document.location.href}),e("./serve/tasks").get(function(t){e("./serve/tasks").run(t)});try{window.parent.opener?e("./utils/collections").each([o.headline.dashOld.injectScriptUrl,o.headline.dashNew.injectScriptUrl],function(e){t(e)}):window.parent.location!==window.self.location&&(document.referrer||"").indexOf(o.headline.dashNew.origin)>-1&&t(o.headline.dashNew.injectScriptUrl)}catch(n){r(n)}}),e("./track/click").attachEventListeners()},{"./cache":2,"./config":4,"./serve/tasks":12,"./track/click":13,"./track/impression":14,"./utils/collections":16,"./utils/cookies":17,"./utils/dom":20,"./utils/events":21,"./utils/hash":22,"./utils/log":25,"./utils/script":28,"./utils/time":30,"./vrq":37}],9:[function(e,t,n){"use strict";var r={};r.impression=function(t){t=t||{};var n="?idsite="+t.np;return n+="&url="+t.trackURL,n+="&seen_url="+t.seenURL,n+="&t="+t.title,n+="&c="+t.cookie,n+="&ypos="+t.yPos,n+="&zone="+t.zone,n+="&debug="+t.debug,t.refURL&&(n+="&refurl="+t.refURL),t.refNP&&(n+="&refnp="+t.refNP),t.normRefURL&&(n+="&norm_refurl="+t.normRefURL),t.conversionID&&(n+="&cv_id="+t.conversionID),t.contentType&&(n+="&content_type="+t.contentType),t.noCookies&&(n+="&no_cookies=true"),t.manualPing&&(n+="&man=true"),t.contentTypes&&(n+="&vr_types="+t.contentTypes),t.contentCategories&&(n+="&vr_categories="+t.contentCategories),t.authors&&(n+="&authors="+t.authors),t.eventType&&(n+="&event_type="+t.eventType),n+="&v="+e("../version")},r.error=function(t){t=t||{};var n="?idsite="+t.np;return n+="&url="+t.url,n+="&msg="+t.msg,n+="&line_number="+t.lineNumber,n+="&v="+e("../version")},r.video=function(e){e=e||{};var t="?idsite="+e.np;return t+="&v_id="+e.id,t+="&url="+e.trackURL,t+="&cat="+e.cat,t+="&c="+e.cookie,t+="&r="+e.timestamp,t+="&v="+e.version,t+="&o="+e.offset,t+="&t="+e.title,t+="&a="+e.action,t+="&length="+e.length,t+="&player="+e.player,t+="&refURL="+e.refURL},t.exports=r},{"../version":35}],10:[function(e,t,n){"use strict";var r={};r.run=function(t){e("../utils/log")("Automating "+t.length+" module(s)");for(var n=0,o=t.length;o>n;n++)r.paint(t[n])},r.paint=function(t){var n,r=30,o=100;if(t.config.manip_test&&"#vr-test-modules"!=e("../utils/url").hash())return!1;var i=function(){return(n=e("../cache").zones(null,!0)[t.config.container_zone])?(n.innerHTML=t.served_html,void e("../utils/log")("Container zone found, loading module")):r>0?(r--,e("../utils/log")("Container zone found, loading module"),setTimeout(i,o),void 0):void e("../utils/log")('data-vr-zone "'+t.config.container_zone+'" was not found on the page')};return i()},t.exports=r},{"../cache":2,"../utils/log":25,"../utils/url":32}],11:[function(e,t,n){"use strict";var r=e("../utils/string"),o={};o.run=function(t){e("../utils/log")("Doing "+t.length+" module(s)");for(var n=(e("../cache").zones(),o.splitTraffic(e("../utils/cookies").getItem("__vrf"),2)),r=0,i=t.length;i>r;r++)o.start(t[r],n)},o.start=function(t,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");e("../utils/log")("Cookie Split: "+r[n]);var i,s=20,a=100,c=function(){i=e("../cache").zones(null,!0)[t.config.data_vr_zone];{if(!i)return s>0?(s--,e("../utils/log")("Tries left to find zone: "+s),setTimeout(c,a),void 0):void e("../utils/log")('data-vr-zone "'+t.config.data_vr_zone+'" was not found on the page');var r=t.content.new_titles[n],u=t.content.current_title,l=t.content.new_images[n],d=t.content.current_image,p=[];t.config.winner&&(r=t.config.winner.title,l=t.config.winner.image,e("../utils/log")("A winner was sent, so use that instead"));for(var f in e("../cache").zones())if(f===t.config.data_vr_zone&&e("../cache").zones().hasOwnProperty(f))for(var m=0;m<e("../cache").zones()[f].length&&(p.push(o.replaceImage(d,l,e("../cache").zones()[f][m],!1)),p.push(o.replaceTitle(u,r,e("../cache").zones()[f][m],!1)),!p[0]&&!p[1]);m++);}};return c()},o.replaceTitle=function(t,n,o){var i,s,a,c=!1,u=50,l=100,d=r.strip(e("../utils/html").decodeEntities(t)).toLowerCase();if(!n||t===n)return e("../utils/log")("Goal title is current title, do nothing"),!1;e("../utils/log")("Searching for headline: "+t);var p=function(t){return r.strip(e("../utils/html").decodeEntities(t)).toLowerCase()},f=function(){i=o.getElementsByTagName("a");for(var m,h=0,g=i.length;g>h;h++)m=i[h].innerHTML,r.trim(m).length>=r.trim(t).length&&(m=r.strip(e("../utils/html").decodeEntities(m)).toLowerCase(),m===d&&(c=!0,i[h].innerHTML=n,e("../utils/log")("Headline found and replaced (anchor value)")));if(!c)for(h=0;g>h;h++){s=i[h].getElementsByTagName("*");for(var v=-1,_=s.length;++v<_;)a=s[v].innerHTML,a.length>=t.length/2&&(a=p(a),a===d?(c=!0,s[v].innerHTML=n,e("../utils/log")("Headline found and replaced (child value)")):p(s[v].outerHTML)===d&&(c=!0,s[v].outerHTML=n,e("../utils/log")("Headline found and replaced (child)")))}return c?c:u>0?(u--,e("../utils/log")("Tries left to find headline: "+u),setTimeout(f,l),void 0):(e("../utils/log")("Headline not found in zone"),!1)};return f()},o.replaceImage=function(t,n,r){var o,i,s=!1,a=50,c=100;if(!n||t===n)return e("../utils/log")("Goal image is current image, do nothing"),!1;e("../utils/log")("Searching for image: "+t);var u=function(){o=r.getElementsByTagName("img");for(var l=0,d=o.length;d>l;l++)if(i=o[l].src,i===t||i===decodeURI(t))return s=!0,o[l].src=decodeURI(n),e("../utils/log")("Image found and replaced"),!0;return a>0?(a--,e("../utils/log")("Tries left to find image: "+a),setTimeout(u,c),void 0):(e("../utils/log")("Image not found in zone"),!1)};return u()},o.splitTraffic=function(e,t){if(!e)return 0;for(var n=0,r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",o=e.substr(-t,t),i=o.length,s=0;i>s;s++)n=n+r.indexOf(o.charAt(s))+1;return n%t},t.exports=o},{"../cache":2,"../utils/cookies":17,"../utils/html":23,"../utils/log":25,"../utils/string":29}],12:[function(e,t,n){"use strict";var r=e("../utils/log"),o=(e("../utils/url"),e("../utils/script")),i=e("../utils/cors"),s=e("../cache"),a=e("../config"),c=a.servingServer,u={};u.get=function(e){i.isCors?(r("Get serving tasks (cors)"),u.corsTasks(u.run)):(r("Get serving tasks (jsonp)"),u.jsonpTasks(u.run)),e([])},u.jsonpTasks=function(t){var n=c+u.getQueryString("jsonp"),r="callbackFn";return n+="&callback=_vrq.jsonp."+r,e("../vrq").jsonp[r]=t,o.load(n,{async:!0,id:"vr-script-002"}),n},u.corsTasks=function(t){var n=c+u.getQueryString("jsonp"),o="callbackFn";return n+="&callback=_vrq.jsonp."+o,e("../vrq").jsonp[o]=t,i.request({method:"GET",url:n,headers:{Accept:"application/json"},timeout:2e3,load:function(){try{new Function(this.responseText)(),r("serve corsRequest loaded "+JSON.stringify(this))}catch(e){r("serve corsRequest responseText failed when being invoked "+e)}},error:function(){r("serve corsRequest failed "+JSON.stringify(this))}}),n},u.getQueryString=function(e){var t="?transport="+e;return t+="&idsite="+s.np(),t+="&url="+encodeURIComponent(s.trackURL()),t+="&content_type="+s.charset()},u.run=function(t){for(var n=[],r=[],o=0;o<t.length;o++)"content_test"===t[o].type?n.push(t[o]):"automation_module"===t[o].type&&r.push(t[o]);e("./automation").run(r),e("./headline").run(n)},t.exports=u},{"../cache":2,"../config":4,"../utils/cors":18,"../utils/log":25,"../utils/script":28,"../utils/url":32,"../vrq":37,"./automation":10,"./headline":11}],13:[function(e,t,n){"use strict";var r=e("../cache"),o=e("../utils/events"),i=e("../utils/cookies"),s=e("../utils/node"),a=e("../utils/y-pos"),c=.6,u={};u.activeNode=null;var l=document.getElementsByTagName("a"),d=u.onMousedownFn=function(e,t){var n=s.getParent(t,s.isAnchor);if(n){var o=a.indexOf(l,n),d=s.getParent(n,s.isZone);i.setItem("__vrl",encodeURIComponent(n.href),c,"/",r.domain()),i.setItem("__vry",o,c,"/",r.domain()),d&&d.getAttribute&&i.setItem("__vrz",encodeURIComponent(d.getAttribute("data-vr-zone")),c,"/",r.domain()),i.setItem("__vru",encodeURIComponent(r.trackURL()),c,"/",r.domain()),i.hasItem("__vrrefresh")&&i.removeItem("__vrrefresh","/",r.domain()),i.setItem("__vrid",r.np(),c,"/",r.domain()),u.activeNode=t}else i.removeItem("__vrl","/",r.domain()),i.removeItem("__vry","/",r.domain()),i.removeItem("__vrz","/",r.domain());var p,f,m;e.pageX||e.pageY?(p=e.pageX,f=e.pageY):(e.clientX||e.clientY)&&(p=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,f=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),p&&(m=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth,i.setItem("__vrm",p+"_"+f+"_"+m,c,"/",r.domain()))},p=u.onMouseupFn=function(e,t){u.activeNode&&t!==u.activeNode&&(i.removeItem("__vrl","/",r.domain()),i.removeItem("__vry","/",r.domain()),i.removeItem("__vrm","/",r.domain()),i.removeItem("__vrz","/",r.domain())),u.activeNode=null},f=u.onUnloadFn=function(){i.setItem("__vru",encodeURIComponent(r.trackURL()),c,"/",r.domain())};u.attachEventListeners=function(){r.hasCookies()&&(o.attach(document,"mousedown",d),o.attach(document,"mouseup",p),o.attach(window,"unload",f))},t.exports=u},{"../cache":2,"../utils/cookies":17,"../utils/events":21,"../utils/node":26,"../utils/y-pos":33}],14:[function(e,t,n){"use strict";var r=e("../cache"),o=e("../utils/cookies"),i=e("../utils/time"),s=e("../utils/url"),a=e("../utils/image"),c=e("../utils/document"),u=e("../utils/cors"),l=e("../utils/log"),d=e("../mappers/ping"),p=e("../config"),f=p.trackingServer,m={};m.ping=function(e){r.np(e.np),r.trackURL(e.trackURL);var t,n=encodeURIComponent(c.title()),a=e.conversionID,l=o.getItem("__vry")||-1,p=o.getItem("__vrz")||"",h=o.getItem("__vrid"),g=e.refURL,v=null,_=null;return e.manualPing?v=g:o.hasItem("__vru")&&(v=decodeURIComponent(o.getItem("__vru"))),_=o.hasItem("__vrl")?decodeURIComponent(o.getItem("__vrl")):e.seenURL||r.trackURL(),t=d.impression({trackURL:s.encode(r.trackURL()),seenURL:s.encode(_),refURL:g,normRefURL:s.encode(v),np:r.np(),refNP:h,title:n,cookie:o.getItem("__vrf"),debug:e.debug||'{"frame":'+(window.parent.location!==window.self.location)+',"loadTime":'+(i.now()-i._startTime)+',"timestamp":'+i.now().getTime()+',"transport":'+(u.isCors&&'"cors"'||'"beacon"')+"}",yPos:l,zone:s.encode(p),conversionID:a,contentType:r.charset(),contentTypes:r.contentTypes(),contentCategories:r.contentCategories(),authors:encodeURIComponent(r.authors()),noCookies:!r.hasCookies(),manualPing:e.manualPing,eventType:e.eventType}),u.isCors?m.loadCors(f,t):m.loadImage(t),o.hasItem("__vrl")&&o.removeItem("__vrl","/",r.domain()),f+t},m.loadImage=function(e){a.loadResource(f+e)},m.loadCors=function(e,t,n){n="number"==typeof n?n:2500,u.request({method:"GET",url:e+t,headers:{Accept:"application/json"},timeout:n,load:function(){l("track corsRequest loaded "+JSON.stringify(this))},error:function(){l("track corsRequest failed "+JSON.stringify(this))}})},m.manual=function(e){e=e||{};var t=e.refurl?e.refurl:o.getItem("__vru")||r.trackURL();return m.ping({automate:!!e.automate,conversionID:e.conversion_id,manualPing:!0,refURL:t,trackID:e.track_id,trackURL:e.track_url,eventType:e.event_type,debug:e.debug})},t.exports=m},{"../cache":2,"../config":4,"../mappers/ping":9,"../utils/cookies":17,"../utils/cors":18,"../utils/document":19,"../utils/image":24,"../utils/log":25,"../utils/time":30,"../utils/url":32}],15:[function(e,t,n){"use strict";var r={},o=e("./string");r._extractAuthors=function(e,t){for(var n="",r=0;r<e.length;r++)for(var i=t(e[r]),s=i.split(","),a=0;a<s.length;a++)s[a].length>0&&(n+=o.trim(s[a])+",");return n.slice(0,-1)},r.getAuthors=function(t){var n=e("./dom"),o=function(e){return e.content},i=function(e){return e.textContent},s=function(t){return e("./url").parse(t.content).pathname.split("/").pop()},a=function(){return r._extractAuthors(n.getAllProperties("vr:author"),o)||r._extractAuthors(n.getAllProperties("author"),o)||r._extractAuthors(n.getAllHeaders("a","rel","author"),i)||r._extractAuthors(n.getAllProperties("article:author"),s)||""};return t||a()},t.exports=r},{"./dom":20,"./string":29,"./url":32}],16:[function(e,t,n){"use strict";var r={},o={};r.nativeForEach=function(){return Array.prototype&&Array.prototype.forEach||!1},r.each=function(t,n,i){if(null!==t)if(t.forEach===r.nativeForEach())t.forEach(n,i);else if(t.length===+t.length){for(var s=0,a=t.length;a>s;s++)if(n.call(i,t[s],s,t)===o)return}else for(var c in t)if(e("./objects").has(t,c)&&n.call(i,t[c],c,t)===o)return},t.exports=r},{"./objects":27}],17:[function(e,t,n){"use strict";var r={getItem:function(e,t){return t=t||document.cookie,decodeURIComponent(t.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,n,r,o,i){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:var a=new Date;a.setTime(a.getTime()+60*n*1e3),s=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; expires="+a.toUTCString();break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+s+(o?"; domain="+o:"")+(r?"; path="+r:"")+(i?"; secure":""),!0},removeItem:function(e,t,n,r){return r=r||document.cookie,e&&this.hasItem(e,r)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0):!1},hasItem:function(e,t){return t=t||document.cookie,new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(t)},keys:function(e){e=e||document.cookie;for(var t=e.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=0;n<t.length;n++)t[n]=decodeURIComponent(t[n]);return t}};t.exports=r},{}],18:[function(e,t,n){"use strict";var r=e("./collections"),o=e("./objects"),i=e("./log"),s={},a=window.XMLHttpRequest,c=function(){};s.isCors=!!a&&"withCredentials"in new a,s.request=function(e){e=e||{},e=o.extend({method:"GET",data:null,load:c,error:c},e);var t,n=this,s=n.xhr();s.open(e.method,e.url,!0),e.headers&&r.each(e.headers,function(e,t){s.setRequestHeader(t,e)}),e.withCredentials&&(s.withCredentials=!0),s.onload=function(){"number"==typeof t&&clearTimeout(t),e.load.apply(this,arguments)},s.onerror=e.error;try{s.send(e.data)}catch(a){i(a)}return"number"==typeof e.timeout&&(t=setTimeout(function(){s.abort()},e.timeout)),s},s.xhr=function(){return new XMLHttpRequest},t.exports=s},{"./collections":16,"./log":25,"./objects":27}],19:[function(e,t,n){"use strict";var r={};r.title=function(){return document.title},t.exports=r},{}],20:[function(e,t,n){"use strict";var r={};r.onReadyByTag=function(e,t){var n,o=50;if(document.getElementsByTagName&&setTimeout){var i=document.getElementsByTagName(e);i&&i.length&&i.length>0?(clearTimeout(n),t()):n=setTimeout(function(){r.onReadyByTag(e,t)},o)}},r.getAllHeaders=function(e,t,n,r){n=n||"";var o=[],i=document.getElementsByTagName("head");if(i)for(var s=0,a=i.length;a>s;s++){var c=i[s].getElementsByTagName(e);if(c)for(var u=0,l=c.length;l>u;u++)if(c[u].getAttribute(t)&&(!n||n==c[u].getAttribute(t).toLowerCase())&&(o.push(c[u]),r))return o}return o},r.getHeader=function(e,t,n){return r.getAllHeaders(e,t,n,!0).pop()||null},r.getProperty=function(e){return r.getHeader("meta","property",e)||r.getHeader("meta","name",e)},r.getAllProperties=function(e){return r.getAllHeaders("meta","property",e).concat(r.getAllHeaders("meta","name",e))},r.getCharset=function(){var e,t=r.getHeader("meta","http-equiv","content-type");return t?(e=t.content.split("charset=")[1],e&&(e=e.split(";")[0]),e||(e=t.content.split(";")[1],e||(e=t.content))):(t=r.getHeader("meta","charset",null),t&&(e=t.getAttribute("charset"))),e},t.exports=r},{}],21:[function(e,t,n){"use strict";var r={};r.attach=function(e,t,n){var r=function(e){e=e||event,n.apply(document,[e,e.target||e.srcElement])};document.addEventListener?e.addEventListener(t,r,!1):document.attachEvent&&e.attachEvent("on"+t,r)},r.debounce=function(e,t){var n;return function(r){var o=this,i=arguments,s=function(){r||e.apply(o,i),n=null};n&&clearTimeout(n),r&&e.apply(o,i),n=setTimeout(s,t||100)}},t.exports=r},{}],22:[function(e,t,n){"use strict";var r={};r.generate=function(){var e,t,n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),r=(new Date).getTime().toString();for(t=0;32>t;t++)e=Math.floor(62*Math.random()),r+=n[e];return r},t.exports=r},{}],23:[function(e,t,n){"use strict";var r={};r.decodeEntities=function(){function e(e){return e&&"string"==typeof e&&(e=escape(e).replace(/%26/g,"&").replace(/%23/g,"#").replace(/%3B/g,";"),t.innerHTML=e,t.innerText?(e=t.innerText,t.innerText=""):(e=t.textContent,t.textContent="")),unescape(e)}var t=document.createElement("div");return e}(),t.exports=r},{}],24:[function(e,t,n){"use strict";var r={};r.loadResource=function(e){var t=new Image(1,1);return t.src=e,t},t.exports=r},{}],25:[function(e,t,n){"use strict";function r(){var e=Array.prototype.slice.apply(arguments),t=new Date;return function(){var n="VRS version: ["+i+"] ";n+=(t.getMinutes()>9?t.getMinutes():"0"+t.getMinutes())+":",n+=(t.getSeconds()>9?t.getSeconds():"0"+t.getSeconds())+".",n+=t.getMilliseconds()>9?t.getMilliseconds()>99?t.getMilliseconds():"0"+t.getMilliseconds():"00"+t.getMilliseconds(),e.unshift(n),console.log(e.join(" "))}}function o(){return this instanceof o?void(s.logLimit<=this.queue.length||this.queue.push(r.apply(null,arguments[0]))):new o(arguments)}var i=e("../version"),s=e("../config");o.prototype.queue=[],o.prototype.run=function(){for(var e;e=this.queue.shift();)e()},t.exports=o},{"../config":4,"../version":35}],26:[function(e,t,n){"use strict";var r={};r.isAnchor=function(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()},r.isZone=function(e){return e&&e.getAttribute&&!!e.getAttribute("data-vr-zone")},r.getParent=function(e,t,n){for(n=n||25;e&&n--;){if(t(e))return e;e=e.parentNode}return null},t.exports=r},{}],27:[function(e,t,n){"use strict";var r={},o=Array.prototype,i=Object.prototype,s=o.slice,a=i.toString;r.extend=function(t){return e("./collections").each(s.call(arguments,1),function(e){if(e)for(var n in e)t[n]=e[n]}),t},r.has=function(e,t){return hasOwnProperty.call(e,t)},r.is=function(e,t){return a.call(e)==="[object "+t+"]"},t.exports=r},{"./collections":16}],28:[function(e,t,n){"use strict";var r={};r.load=function(e,t,n){t.id&&r.remove(t.id);var o=document.createElement("script"),i=document.getElementsByTagName("script")[0];if(o.src=e,t.id&&(o.id=t.id),t.async&&(o.async=!0),t.onload){var s=!1;o.onload=o.onreadystatechange=function(){s||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(s=!0,t.onload(),o.onload=o.onreadystatechange=null,o.parentNode&&o.parentNode.removeChild(o))}}i.parentNode.insertBefore(o,i)},r.remove=function(e){var t=document.getElementById(e);if(t){t.parentNode.removeChild(t);try{for(var n in t)delete t[n]}catch(r){}}},t.exports=r},{}],29:[function(e,t,n){"use strict";var r={};r.strip=function(e){return e.replace(/\s/g,"")},r.trim=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},t.exports=r},{}],30:[function(e,t,n){"use strict";var r={};r._startTime=null,r.start=function(){r._startTime=r.now()},r.now=function(){return new Date},t.exports=r},{}],31:[function(e,t,n){"use strict";var r=e("./string"),o=e("../constants/typecat"),i=e("./log"),s={};s.extractTypeCat=function(e,t){var n="",o=0;e:for(var s=0,a=e.length;a>s;s++)for(var c=e[s].content.split(","),u=0,l=c.length;l>u;u++){var d=c[u],p=d.length,f=t.LIMIT&&t.LIMIT<=o,m=t.CHAR_LIMIT&&t.CHAR_LIMIT<p;if(0!==p&&!m){if(f){i("typecat has exceeded "+t.LIMIT);break e}o++,n+=r.trim(d)+","}}return n.slice(0,-1)},s.sanitize=function(e){return e.toLowerCase()},s.contentTypes=function(t){return t=t||s.extractTypeCat(e("./dom").getAllProperties("vr:type"),{LIMIT:o.TYPE_LIMIT,CHAR_LIMIT:o.TYPE_CHAR_LIMIT}),s.sanitize(t)},s.contentCategories=function(t){return t=t||s.extractTypeCat(e("./dom").getAllProperties("vr:category"),{LIMIT:o.CATEGORY_LIMIT,CHAR_LIMIT:o.CATEGORY_CHAR_LIMIT}),s.sanitize(t)},t.exports=s},{"../constants/typecat":7,"./dom":20,"./log":25,"./string":29}],32:[function(e,t,n){"use strict";var r={};r.serialize=function(e,t){var n,o,i=[];for(var s in e)e.hasOwnProperty(s)&&(n=t?t+"["+s+"]":s,o=e[s],i.push("object"==typeof o?r.serialize(o,n):encodeURIComponent(n)+"="+encodeURIComponent(o)));return i.join("&")},r.encode=function(e){if(!e)return e;var t,n=[];for(t=0;t<e.length;t++)e.charCodeAt(t)<128?n.push(e.charAt(t)):n.push(encodeURIComponent(e.charAt(t)));return encodeURIComponent(n.join(""))},r.absolute=function(e){var t=/^http(?:s)?:\/\//;if(-1!=e.search(t))return e;var n=document.createElement("div");return n.innerHTML='<a href="'+r.escapeURL(e)+'">x</a>',n.firstChild.href},r.escapeURL=function(e){return e.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/\"/g,"&quot;")},r.hash=function(){return window.location.hash},r.parse=function(e){e=e||"";var t=document.createElement("a");return t.href=e,{protocol:t.protocol,host:t.host,hostname:t.hostname,port:t.port,pathname:t.pathname,search:t.search,hash:t.hash}},t.exports=r},{}],33:[function(e,t,n){"use strict";var r={};r.indexOf=function(e,t){if(!t||null===e)return-1;var n,r,o=-1;for(n=0,r=e.length;r>n;n++)if(e[n].href===t.href&&(o+=1),e[n]===t)return o;return-1},t.exports=r},{}],34:[function(e,t,n){"use strict";var r={};r.getAll=function(){var e,t,n,r={},o=0;if(document.querySelectorAll){for(e=document.querySelectorAll("*[data-vr-zone]"),n=e.length;n>o;o++)t=e[o].getAttribute("data-vr-zone"),r[t]?r[t].push(e[o]):r[t]=[e[o]];return r}var i=document.all;for(n=i.length;n>o;o++)t=i[o].getAttribute("data-vr-zone"),t&&(r[t]?r[t].push(i[o]):r[t]=[i[o]]);return r},t.exports=r},{}],35:[function(e,t,n){"use strict";t.exports=47},{}],36:[function(e,t,n){"use strict";var r=e("../cache"),o=e("../mappers/ping"),i=e("../utils/cookies"),s=e("../utils/image"),a=e("../config").trackingServerVideo,c={};c._tracker={cache:{},get:function(e){return this.cache[e]||(this.cache[e]=new l(e)),this.cache[e]}},c.heartRate=function(){return 3e3};var u=function(t,n){return o.video({np:r.np(),id:t.id,trackURL:r.trackURL(),cat:t.categories.join(","),cookie:r.cookie(),timestamp:e("../utils/time").now().getTime(),version:e("../version"),offset:t.offset,title:t.title,action:n,length:t.length,player:t.player,refURL:i.getItem("__vru")||r.refURL(),trackingEvent:"video"})},l=function(e,t){t=t||{},this.id=e,this.categories=t.categories||[],this.offset=t.offset||"",this.title=t.title||"",this.length=t.length||"",this.player=t.player||""};l.prototype.impression=function(){s.loadResource(a+u(this,"impression"))},l.prototype.play=function(e){s.loadResource(a+u(this,"play")),this._startHeartbeat()},l.prototype._startHeartbeat=function(){var e=this;this.pulse=setInterval(function(){s.loadResource(a+u(e,"impression"))},c.heartRate())},l.prototype._killHeartbeat=function(){clearInterval(this.pulse)},t.exports=c},{"../cache":2,"../config":4,"../mappers/ping":9,"../utils/cookies":17,"../utils/image":24,"../utils/time":30,"../version":35}],37:[function(e,t,n){"use strict";var r={},o=null,i=-1;r.run=function(){var t=window._vrq.length,n=e("./cache");for(o&&(clearTimeout(o),o=null);i!==t&&t--;)switch(window._vrq[t][0]){case"id":n.np(parseInt(window._vrq[t][1],10));break;case"automate":n.automate(!!window._vrq[t][1]);break;case"charset":n.charset(window._vrq[t][1]);break;case"track_url":n.trackURL(window._vrq[t][1]);break;case"no_cookies":n.hasCookies(!window._vrq[t][1]);break;default:e("./utils/log")("default vrq config",window._vrq[t][0])}i=window._vrq.length,o=setTimeout(window._vrq.run,1e3)},r.stop=function(){clearTimeout(o),e("./utils/collections").each(e("./video/api")._tracker.cache,function(e,t){e._killHeartbeat()})},r.jsonp={},t.exports=r},{"./cache":2,"./utils/collections":16,"./utils/log":25,"./video/api":36}]},{},[8]);