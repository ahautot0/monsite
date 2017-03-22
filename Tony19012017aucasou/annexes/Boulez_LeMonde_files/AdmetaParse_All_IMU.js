var Adh_site, Adh_loc, Adh_height=250, Adh_width=300;
// CALLBACK FUNCTION
function callbackIMU() {
		// GET ALL THE USER SPECIFIC INFO TO MAKE THE CORRECT ADHESE CALL
		var propNames = Object.getOwnPropertyNames(adhese.profile), profile = "";
		propNames.forEach(function(name){
			// PREVENT SLOT PARSING FROM PROFILE
			if (name != "sl"){
				if (name == "in"){
					// ADDING THE ADMETA INTEREST TO PREVENT A NEW ADMETA CALL
					profile += name + adhese.profile[name]+";admeta/";
				}else{
					profile += name + adhese.profile[name]+"/";
				}
			}
		});
	if(typeof adhese.hkey !== "undefined"){var hky = adhese.hkey}
	document.write('<scr'+'ipt src="https://ads-pebblemedia.adhese.com/adj/sl_'+Adh_site+'_'+Adh_loc+'_-'+Adh_format+'/'+profile+'/ms/hk'+hky+'/?t='+new Date().getTime()+'" type="text/javascript"></scri'+'pt>');
}
// TRACKING SOLD IMPRESSIONS FUNCTION
function soldTrackIMU(trackInfo) {
	var image = document.createElement("img");
	image.src = 'https://ads-pebblemedia.adhese.com/track/'+ trackInfo +'/';
	image.style.display = 'none';
	image.width = '0';
	image.height = '1';
	document.body.appendChild(image);
}
// FUNCTION TO FIND THIS SCRIPT	
	function GetScript(){
		var observer, current, nodes;
		// IE+11 - untested with other browsers.
		if (!document.currentScript && typeof MutationObserver=='function') {
			observer = new MutationObserver(function(mutations) {
				if (document.readyState=='complete') observer.disconnect();
				mutations.forEach(function(mutation) {
					nodes = mutation.addedNodes;
					if (nodes.length && nodes[0].nodeName=='SCRIPT') {
						current = nodes[0];
					}
				});
			});
			observer.observe(window.document, {childList: true, subtree: true});
		}
			//if (document.readyState=='complete') return;
			// CHROME+29, FIREFOX+4, OPERA+16
			if (document.currentScript) return document.currentScript;

			var i, s=document.getElementsByTagName('SCRIPT');

			// MSIE+5-10
			if (s[0].readyState) 
				for(i=0; i<s.length; i++)
					if (s[i].readyState=='interactive') return s[i];

			// IE+11
			if (current) return current;

			// BEST GUESS
			var id = 'placeholder-' + Math.floor(Math.random() * 1e10); 
			document.write('<div id=' + id + ' style="display:none;"></div>'); 
			return document.getElementById(id);		
	}
// INDEXOF POLYFILL	
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (obj, fromIndex) {
    if (fromIndex == null) {
        fromIndex = 0;
    } else if (fromIndex < 0) {
        fromIndex = Math.max(0, this.length + fromIndex);
    }
    for (var i = fromIndex, j = this.length; i < j; i++) {
        if (this[i] === obj)
            return i;
    }
    return -1;
  };
}
// GETTING THE CALL INFORMATION FROM ADHESE
if (typeof adhese !== 'undefined'){
	if (adhese.publication != ''){ 
		Adh_site = adhese.publication; 
		Adh_loc = adhese.product;
		var adh_ad = adhese.ads[adhese.ads.length - 1];
		var Adh_format = adh_ad.template;
	}else { 
		Adh_site = adhesePublication; 
		Adh_loc = adheseLocation; 
		var Adh_format = adheseFormat;
		} 
}
else{
	var adh_scripts = document.getElementsByTagName('script');
	for(var i=0;i<adh_scripts.length;i++){
		if (adh_scripts[i].src.indexOf("http://ads.pebblemedia.adhese.com/adj/sl") > -1)
		{
			var adh_call = adh_scripts[i];
		}	
	}
	var adh_scr = adh_call.src;
	var adh_parts = adh_scr.split("/");
	var adh_needed = adh_parts[4].split("_");
	Adh_site = adh_needed[1];
	Adh_loc = adh_needed[2];
	var Adh_format = adh_needed[3].substring(1);
}	
// GET THE INFO FOR TRACKING THE SOLD IMPRESSIONS 
	var node = GetScript();
	var trackinginfo = node.src.replace(/^[^\?]+\??/,'');
// FORM ADMETA CALL INFO
ADM_PL =  {tp:'sp', pbId:228, Site:Adh_site, Page:Adh_loc, Width:Adh_width, Height:Adh_height, Rank:1, clk:adh_url25590,unsoldMethod: 'callbackIMU();', soldMethod: 'soldTrackIMU('+eval(trackinginfo)+');'};
// MAKE ACTUAL CALL TO ADMETA
document.write("<script type='text/javascript' src='//s.atemda.com/Admeta.js'></script>");
document.write("<noscript><iframe src='//p228.atemda.com/nojsadserving.ashx?pbId=228&wsName=[Site]&wName=[Page]&bfDim=[Width]x[Height]&rank=[Rank]&clk=[URL-encoded external clicktracking link goes here]' width='[Width]' height='[Height]' frameborder='0' marginheight='0' marginwidth='0' scrolling='no'></iframe></noscript>");