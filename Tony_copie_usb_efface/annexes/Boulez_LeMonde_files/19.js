function error(msg) {
  var version = "2.5.8";
  var now = new Date();
  var dUrl = '';
  if (top === self) dUrl = window.location.href;
  else dUrl = document.referrer;
  if (dUrl === "") dUrl = parent.document.location.href;
  var content = [now, version, msg, dUrl].join('|');
  content += '|' + navigator.userAgent;
  var errorUrl = "//its.tradelab.fr/?type=debug&content=" + encodeURIComponent(content);
  var img = new Image();
  img.src = errorUrl;
  if ( typeof console != "undefined" ) console.log(content);
}
try { 
(function(){

var hasTM = true;
if (typeof tldc == 'undefined') {
	window.tldc = {};
	hasTM = false;
}
if ( typeof tldc.params == 'undefined') tldc.params = {};
if ( typeof tldc.params.fsegs == 'undefined') tldc.params.fsegs = {};
if ( typeof tldc.advid == 'undefined' ) tldc.advid = '334517';
if ( typeof tldc.funnelSegments == 'undefined' ) tldc.funnelSegments = {};
if ( typeof tldc.funnelSegments['19'] == 'undefined' ) {
	tldc.funnelSegments['19'] = [];
	var n=0;
	tldc.funnelSegments['19'][n++] = { 'seg':'1856013', 	'step':1, 'ievs':'1856010', 'conv':'208814' };
	tldc.funnelSegments['19'][n++] = { 'seg':'1856014', 	'step':2, 'ievs':'1856011', 'conv':'208815' };
	tldc.funnelSegments['19'][n++] = { 'seg':'1856015', 	'step':3, 'ievs':'1856012', 'conv':'208816' };

}

tl_async_loader=function(c){function d(b,a){var d=c.createElement(b),e;for(e in a)a.hasOwnProperty(e)&&d.setAttribute(e,a[e]);return d}function a(){var a=navigator.userAgent;b={async:!0===c.createElement("script").async};(b.webkit=/AppleWebKit\//.test(a))||(b.ie=/MSIE|Trident/.test(a))||(b.opera=/Opera/.test(a))||(b.gecko=/Gecko\//.test(a))||(b.unknown=!0)}function e(l,k,q,s,t){var u=function(){var a=m[l],b,c;a&&(b=a.callback,c=a.urls,c.shift(),pollCount=0,c.length||(b&&b.call(a.context,a.obj),m[l]=
null,n[l].length&&e(l)))},r=[],f,p,g,v;b||a();if(k)if(k="string"===typeof k?[k]:k.concat(),b.async||b.gecko||b.opera)n[l].push({urls:k,callback:q,obj:s,context:t});else for(f=0,p=k.length;f<p;++f)n[l].push({urls:[k[f]],callback:f===p-1?q:null,obj:s,context:t});if(!m[l]&&(v=m[l]=n[l].shift())){h||(h=c.head||c.getElementsByTagName("head")[0]);k=v.urls.concat();f=0;for(p=k.length;f<p;++f)q=k[f],g=d("script",{src:q}),g.async=!1,g.className="lazyload",g.setAttribute("charset","utf-8"),b.ie&&"onreadystatechange"in
g&&!("draggable"in g)?g.onreadystatechange=function(){/loaded|complete/.test(g.readyState)&&(g.onreadystatechange=null,u())}:g.onload=g.onerror=u,r.push(g);f=0;for(p=r.length;f<p;++f)h.appendChild(r[f])}}var b,h,m={},n={js:[]};return{js:function(a,b,c,d){e("js",a,b,c,d)}}}(this.document);function tl_getStoredStep(c){return"undefined"==typeof tldc.params.fsegs?0:"undefined"==typeof tldc.params.fsegs[c]?0:tldc.params.fsegs[c]}
function tl_storeStep(c,d){tldc.params.fsegs[d]=c;"function"===typeof tldc.tl_setParamsCookie&&tldc.tl_setParamsCookie(tldc.params)}function getFunnelStepData(c,d){for(var a={},e=0;e<d.length;e++){var b=d[e];if(b.seg==c)return a.step=b.step,a.i=e,a}return{step:!1,i:!1}}function insertInDom(c){var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}
function firePixel(c,d){var a=document.createElement("img"),e;a.style.position="absolute";a.style.height=0;a.style.width=0;e=document.location.protocol;e="https:"===e?e+"//secure.adnxs.com/":e+"//ib.adnxs.com/";a.src=null===d?e+"seg?add="+c+"&t=2":e+"seg?add="+c+":"+d+"&t=2";insertInDom(a)}function contains(c,d){for(var a=c.length;a--;)if(c[a]===d)return!0;return!1}
function tl_getLocation(){var c="",c=top===self?window.location.href:document.referrer;""===c&&(c=parent.document.location.href);return c}
function fireFSEG(c,d,a,e,b){var h=document.createElement("img"),m=navigator.userAgent,n=tl_getLocation();"undefined"===typeof tldc.tl_getAnalyticsData&&"function"===typeof tl_getAnalyticsData&&(tldc.tl_getAnalyticsData=tl_getAnalyticsData);b=b?"&isregen=1&ua="+encodeURIComponent(encodeURIComponent(m))+"&ur="+encodeURIComponent(encodeURIComponent(n)):"&isregen=0&ua="+encodeURIComponent(encodeURIComponent(m))+"&ur="+encodeURIComponent(encodeURIComponent(n));"function"===typeof tldc.tl_getAnalyticsData&&
(b+="&adata="+tldc.tl_getAnalyticsData());h.style.position="absolute";h.style.height=0;h.style.width=0;h.src="object"==typeof tldc.ses&&"string"==typeof tldc.ses.uuid2&&""!=tldc.ses.uuid2?"//its.tradelab.fr/?type=fseg&uuid2="+tldc.ses.uuid2+"&sid="+c+"&fun="+e+"&step="+a+"&iev="+d+"&fp="+fingerprint+"&advid="+tldc.advid+b:"//ib.adnxs.com/getuid?//its.tradelab.fr/?type=fseg&uuid2=$UID&sid="+c+"&fun="+e+"&step="+a+"&iev="+d+"&fp="+fingerprint+"&advid="+tldc.advid+b;insertInDom(h)}
function processFunnelSeg(c,d,a){if(!1===hasTM)void 0!==c&&firePixel(c,null);else{var e=getFunnelStepData(c,a),b=e.i,e=e.step,h=getFunnelStepData(tl_getStoredStep(d),a).step;!1===h||h<e?("0"!=a[b].conv?tl_async_loader.js("//cdn.tradelab.fr/conv/"+a[b].conv+".js",function(){"undefined"!=typeof a[b].seg&&(firePixel(a[b].seg,null),hasTM&&fireFSEG(a[b].seg,a[b].ievs,a[b].step,d,!1))}):"undefined"!=typeof a[b].seg&&(firePixel(a[b].seg,null),hasTM&&fireFSEG(a[b].seg,a[b].ievs,d,!1)),tl_storeStep(c,d)):
"undefined"!=typeof a[b].seg&&(firePixel(a[b].seg,null),hasTM&&fireFSEG(a[b].seg,a[b].ievs,d,!1));return!0}};

var qs = {},
		fingerprint = '0';
if (typeof tldc.tlfseg == 'undefined') tldc.tlfseg = {};
var scriptTags = document.getElementsByTagName("script");
for (var i = 0; i < scriptTags.length; i++) {
  var scriptTag = scriptTags[i],
      ssrc = scriptTag.getAttribute("src");
  //console.log('src:'+scriptTag.getAttribute("src"));
  if (undefined !== ssrc && null !== ssrc && ssrc.indexOf('fseg') !== -1 && ssrc.indexOf('19.js') !== -1) {  	
  	ssrc.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
	    qs[$1] = $3;
	  });
	  //console.log('qs.add:'+qs.add);
    if ( typeof qs.add != 'undefined' ) {
    //console.log('tlfseg:'+JSON.stringify(tldc.tlfseg));
    	if ( typeof tldc.tlfseg[qs.add] === 'undefined' ) {	    		  		
    		if ( processFunnelSeg(qs.add,'19',tldc.funnelSegments['19']) ) tldc.tlfseg[qs.add] = 1;  
    	}
    }
  }
}

})();

} catch(err) { error('fseg|'+err.message); }