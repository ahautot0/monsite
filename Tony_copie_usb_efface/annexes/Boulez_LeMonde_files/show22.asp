var sasLib2591179Elt = document.createElement('script');
sasLib2591179Elt.Type = "text/html";
sasLib2591179Elt.src = 'http://cdn1.smartadserver.com/diff/templates/js/agency-redirect/sas-agency-redirect-1.1.js';

adapt_appendToContainer = function (formatid, item) {
        var c = document.getElementById('sas_' + formatid);
        if (!c) { return; }
        if (typeof (item) === "string") {
            var d = document.createElement('div');
            d.innerHTML = item;
            item = d;
        }
        c.appendChild(item);
    };


adapt_appendToContainer(21488, sasLib2591179Elt);
	
        if (typeof(sas_ajax) != 'undefined' && sas_ajax) {
		var getDomElem = function(id) {
			return document.getElementById(id).contentDocument || document.frames[id].document;
		}

		var i = document.createElement('iframe');
		i.id = 'sas_2591179_iframe';
		i.scrolling = 'no';
		i.frameBorder = 0;
		i.width = 1;
		i.height = 1;
		i.style.margin = 0;
		i.style.padding = 0;
		i.style.width = '1px';
		i.style.height = '1px';
		sas_appendToContainer(21488, i);

		i.doc = getDomElem(i.id);
		i.doc.write(
			'<!doctype html><html><head><title></title></head><body style="margin:0;padding:0">'+
			'<scr'+'ipt type="text/javascript">var inDapIF=inDapMgrIf=true;</scr'+'ipt>'+
			'<scr'+'ipt>\r\n'+'var sas_pageid = \'50270/388730\';\r\n'+'var sas_formatid = 21488;\r\n'+'var sas_tmstp = 8679755987986;\r\n'+'</scr'+'ipt>\r\n'+'<!-- BEGIN JS TAG - lemonde.fr news btf - Rubrique Mban < - DO NOT MODIFY --><center><scr'+'ipt type="text/javascript">document.write(\'<scr'+'ipt src="http://ib.adnxs.com/ttj?id=1028284&size=728x90&promo_alignment=center&referrer=lemonde.fr&cb=\' + Math.floor(Math.random()*9999999999) + \'&pt1= http://ww690.smartadserver.com/call/pubj/\' + sas_pageid + \'/\' + sas_formatid + \'/S/\' + sas_tmstp + \'/origine%3Dasq?" type="text/javascript"><\'+\'/script>\');</scr'+'ipt></center><!-- END TAG -->\r\n'+'\r\n'+'\r\n'+
			'<div id="sas_21488_readyDiv" style="display:none;"></div></body></html>'
		);

		if (navigator.userAgent.indexOf('MSIE') == -1 && navigator.userAgent.indexOf('Opera') == -1) i.doc.close();
	} else {
		document.write('<scr'+'ipt>\r\n'+'var sas_pageid = \'50270/388730\';\r\n'+'var sas_formatid = 21488;\r\n'+'var sas_tmstp = 8679755987986;\r\n'+'</scr'+'ipt>\r\n'+'<!-- BEGIN JS TAG - lemonde.fr news btf - Rubrique Mban < - DO NOT MODIFY --><center><scr'+'ipt type="text/javascript">document.write(\'<scr'+'ipt src="http://ib.adnxs.com/ttj?id=1028284&size=728x90&promo_alignment=center&referrer=lemonde.fr&cb=\' + Math.floor(Math.random()*9999999999) + \'&pt1= http://ww690.smartadserver.com/call/pubj/\' + sas_pageid + \'/\' + sas_formatid + \'/S/\' + sas_tmstp + \'/origine%3Dasq?" type="text/javascript"><\'+\'/script>\');</scr'+'ipt></center><!-- END TAG -->\r\n'+'\r\n'+'\r\n');
	}

var iframeConfig_2591179 = {
	formatId: 21488,
	insertionId: 2591179,
	iFrame: i,
	acceptedWidth: "1,728".split(","),
	acceptedHeight: "1,90".split(","), 
	defaultWidth: "1",
	defaultHeight: "1",
        status: "0"		
}
if (typeof(resizableIframeConfig11) != 'undefined')
{
	resizableIframeConfig11.push(iframeConfig_2591179);
}
else
{
	var resizableIframeConfig11 = new Array();
	resizableIframeConfig11.push(iframeConfig_2591179);
}




