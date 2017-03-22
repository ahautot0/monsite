if (typeof ord == "undefined") {
    var ord = Math.random() * 1e16;
}

var ekl, mts, xas, hky, categoryName, category, subcategory, adhoccategory, subcat, category, brandid, price;

if (!adh_3rd_dm) {
    var adh_3rd_dm = "";
}

function Adhese() {
    this.detection = new this.Detection();
}

Adhese.prototype.registerDM = function(val) {
    if (!this.profile.dm) {
        this.profile.dm = ";";
    }
    if (!~this.profile.dm.indexOf(";" + val)) {
        this.profile.dm += ";" + val;
    }
    if (!adh_3rd_dm) {
        adh_3rd_dm = ";";
    }
    if (!~adh_3rd_dm.indexOf(";" + val)) {
        adh_3rd_dm += ";" + val;
    }
};

Adhese.prototype.init = function() {
    this.host = "http://ads-pebblemedia.adhese.com/adj";
    this.previewHost = "http://pebblemedia.adhese.org/creatives/preview/tag.do?";
    if (window.location.protocol === "https:") {
        this.host = "https://ads-pebblemedia.adhese.com/adj";
        this.previewHost = "https://pebblemedia.adhese.org/creatives/preview/tag.do?";
    }
    this.template = "none";
    this.ads = [];
    this.flash.check();
    this.browser.detect();
    this.preview.check();
    this.hkey = "unknown";
    this.rand = Math.round(Math.random() * 1e4);
    this.numberOfAdsInStack = 3;
    this.product = "";
    if (typeof adheseLocation !== "undefined" && adheseLocation != "") {
        this.product = adheseLocation;
    }
    this.publication = "";
    if (typeof adhesePublication !== "undefined" && adhesePublication != "") {
        this.publication = adhesePublication;
    }
    this.profile = {};
    this.profile["in"] = "allowfloat";
    if (typeof ps_display_params != "undefined" && typeof bw_ps_adspot_id != "undefined" && ps_display_params != "") {
        this.profile["in"] += ";prx";
    }
    this.profile.rn = Math.round(Math.random() * 1e4);
    this.profile.br = this.browser.name + ";" + this.browser.name + this.browser.version + ";" + this.browser.os;
    this.profile.HR = this.base64.encode(window.location.href);
    this.profile.RF = this.base64.encode(document.referrer.substr(0, 200));
    this.profile.dt = this.detection.device();
    if (typeof mediasynced_target != "undefined" && mediasynced_target != "") {
        this.profile.ct = mediasynced_target;
    } else {
        this.profile.ct = "";
    }
    if (this.profile.br.indexOf("Explorer7") != -1 || document.documentMode && document.documentMode < 8) {
        this.adformDisplayed = true;
    } else {
        this.adformDisplayed = false;
    }
    if (typeof hky != "undefined") this.hkey = "MESSAGENT-" + hky;
    this.profile.dm = adh_3rd_dm;
};

Adhese.prototype.tag = function(options) {
    if ((options.format == "Splash" || options.format == "MSP" || options.format == "TSP") && this.cookie.read(options.publication + "Splash") && !this.preview.active) {
        options = null;
    }
    if (options && options.format && options.location) {
        var adOptions = {};
        if (typeof options != "undefined") {
            adOptions.product = "_";
            if (options.publication) {
                this.publication = options.publication;
                adOptions.product += options.publication + "_";
            }
            if (options.location) {
                if (options.publication && options.publication != "undefined" && options.format == "textlink") {
                    this.product = options.publication + "-" + options.location;
                } else {
                    this.product = options.location;
                }
                adOptions.product += options.location + "_";
            }
            if (options.placement) {
                adOptions.product += options.placement + "_";
                this.product = options.location;
            }
            if (options.categories) {
                categoryName = options.categories[0];
                var ct = options.categories.join(";");
                ct = ct.toLowerCase();
                ct = ct.replace(new RegExp("[-_. ']", "g"), "");
                if (this.profile.ct == "") {
                    this.profile.ct = ct;
                } else {
                    this.profile.ct += ";" + ct;
                }
                this.profile.se = ct;
            }
        }
        this.ads.push(new adhese.Ad(options.format, adOptions));
    }
    if (options && options.format == "Splash" && (~window.location.href.indexOf("hbvl") || ~window.location.href.indexOf("gva"))) {
        this.adh_didam = {};
        this.adh_didam.content_category = options.location;
        this.adh_didam.content_subcategory = options.categories;
        this.adh_didam.brand = options.publication;
        this.adh_didam.options = options;
        this.adh_didam.options.format = "didamtracker";
        this.tag(this.adh_didam.options);
    }
};

Adhese.prototype.taghc = function(loc, template) {
    this.tag({
        format: template,
        location: loc
    });
};

Adhese.prototype.taghcs = function(loc, template, num) {
    this.numberOfAdsInStack = num;
    this.tag({
        format: template,
        location: loc
    });
};

Adhese.prototype.write = function(sl) {
    var req = "";
    req += "/sl" + sl;
    req += "/br" + this.browser.name + ";" + this.browser.name + this.browser.version + ";" + this.browser.os;
    req += "/rn" + this.rand;
    req += "/hk" + this.hkey;
    req += "/?t=" + new Date().getTime();
    document.write("<scr" + "ipt type='text/javascript' src=" + this.host + req + "></scri" + "pt>");
};

Adhese.prototype.createCookie = function(name, value, days) {
    if (days && days > 0) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
};

Adhese.prototype.readCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

Adhese.prototype.cookie = {};

Adhese.prototype.cookie.create = function(name, value, days) {
    if (days && days > 0) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

Adhese.prototype.cookie.read = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

Adhese.prototype.cookie.erase = function(name) {
    this.create(name, "", -1);
};

Adhese.prototype.visible = {};

Adhese.prototype.visible.check = function(id, pc) {
    var pc = pc ? pc : .5;
    if (document.getElementById(id)) {
        return this.offset(id).top - (this.viewHeight() + this.scrollTop()) <= this.elementHeight(id) * pc * -1;
    } else {
        return null;
    }
};

Adhese.prototype.visible.viewHeight = function() {
    if (typeof window.innerWidth != "undefined") {
        return window.innerHeight;
    } else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
        return document.documentElement.clientHeight;
    } else {
        return document.getElementsByTagName("body")[0].clientHeight;
    }
};

Adhese.prototype.visible.offset = function(id) {
    var oElement = document.getElementById(id);
    var pX = 0;
    var pY = 0;
    if (typeof oElement != "undefined") {
        for (pX = 0, pY = 0; oElement; oElement = oElement.offsetParent) {
            pX += oElement.offsetLeft;
            pY += oElement.offsetTop;
        }
    } else {
        pX += oElement.x;
        pY += oElement.y;
    }
    return {
        top: pY,
        left: pX
    };
};

Adhese.prototype.visible.scrollTop = function() {
    if (document.documentElement && document.documentElement.scrollTop) {
        return document.documentElement.scrollTop;
    } else if (document.body && document.body.scrollTop) {
        return document.body.scrollTop;
    } else if (window.pageYOffset) {
        return window.pageYOffset;
    } else if (window.scrollY) {
        return window.scrollY;
    }
    return 0;
};

Adhese.prototype.visible.elementHeight = function(id) {
    return document.getElementById(id) ? document.getElementById(id).offsetHeight : null;
};

Adhese.prototype.getLocation = function() {
    var lang = "";
    var l = window.location.href != "about:blank" ? window.location : parent.window.location;
    var p = l.hostname.replace(new RegExp("www."), "") || "unknown";
    var s = l.pathname.replace(/^\/([^\/]*).*$/, "$1");
    if (l.hostname.indexOf("pebblemedia.be") != -1 || l.hostname == "") {
        s = "";
        p = "sporza_socio_home";
    }
    p += s != "" ? "_" + s : "";
    var loc = "_" + lang + p + "_";
    return loc.toLowerCase();
};

Adhese.prototype.addLoadEvent = function(func) {
    var ol = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            ol();
            func();
        };
    }
};

Adhese.prototype.shuffleArray = function(a) {
    var ci = a.length;
    var v;
    var ri;
    while (0 !== ci) {
        ri = Math.floor(Math.random() * ci);
        ci -= 1;
        v = a[ci];
        a[ci] = a[ri];
        a[ri] = v;
    }
    return a;
};

Adhese.prototype.addEvent = function(t, f) {
    if (window.addEventListener) {
        window.addEventListener(t, f, false);
    } else if (window.attachEvent) {
        window.attachEvent("on" + t, f);
    }
};

Adhese.prototype.removeEvent = function(t, f) {
    if (window.removeEventListener) {
        window.removeEventListener(t, f, false);
    } else if (window.detachEvent) {
        window.detachEvent("on" + t, f);
    }
};

Adhese.prototype.checkParam = function(t, s) {
    return t.indexOf(s) == -1 && t != "" ? true : false;
};

Adhese.prototype.getOffset = function(id) {
    var el = document.getElementById(id);
    var o = {
        top: 0,
        left: 0
    };
    if (typeof el != "undefined") {
        for (o.left = 0, o.top = 0; el; el = el.offsetParent) {
            o.left += el.offsetLeft;
            o.top += el.offsetTop;
        }
    } else {
        o.left += oElement.x;
        o.top += oElement.y;
    }
    return o;
};

Adhese.prototype.merge = function(a, b) {
    var c = {};
    for (var k in a) {
        c[k] = a[k];
    }
    for (var k in b) {
        c[k] = b[k];
    }
    return c;
};

Adhese.prototype.refresh = function() {
    var rel = adhese.ads;
    adhese.photocounter++;
    if (arguments.length > 0) {
        rel = [];
        var x = 0;
        while (arguments.length > x) {
            var y = 0;
            while (adhese.ads.length > y) {
                if (adhese.ads[y].options.uid == arguments[x]) {
                    rel.push(adhese.ads[y]);
                    break;
                }
                y++;
            }
            x++;
        }
    }
    var i = 0;
    while (rel.length > i) {
        rel[i].reload();
        i++;
    }
};

Adhese.prototype.getBodyDimensions = function() {
    var myWidth = 0, myHeight = 0;
    if (typeof window.innerWidth == "number") {
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return {
        width: myWidth,
        height: myHeight
    };
};

Adhese.prototype.removeFloatTarget = function() {
    this.profile["in"] = this.profile["in"].replace("allowfloat", "");
};

Adhese.prototype.base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(input) {
        if (typeof btoab == "function") {
            return btoa(input);
        } else {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = adhese.base64._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
            }
            return output;
        }
    },
    _utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode(c >> 6 | 192);
                utftext += String.fromCharCode(c & 63 | 128);
            } else {
                utftext += String.fromCharCode(c >> 12 | 224);
                utftext += String.fromCharCode(c >> 6 & 63 | 128);
                utftext += String.fromCharCode(c & 63 | 128);
            }
        }
        return utftext;
    }
};

Adhese.prototype.Detection = function() {
    this.deviceType = {};
    return this;
};

Adhese.prototype.Detection.prototype.device = function(ua) {
    ua = ua ? ua : window.navigator.userAgent;
    if (ua.match(/webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile Safari|SymbianOS/i) && !ua.match(/Android/i)) {
        this.deviceType = "phone";
    } else if (ua.match(/Mobile/i) && ua.match(/Android/i)) {
        this.deviceType = "phone";
    } else if (ua.match(/iPad|Android|Tablet|Silk/i)) {
        this.deviceType = "tablet";
    } else {
        this.deviceType = "desktop";
    }
    return this.deviceType;
};

Adhese.prototype.preview = {};

Adhese.prototype.preview.check = function() {
    this.active = false;
    this.formats = {};
    if (window.location.search.indexOf("adhesePreview") != -1) {
        var b = window.location.search.substring(1);
        var countCreatives = b.match(/adhesePreviewCreativeId/g).length;
        var p = b.split("&");
        var c = "";
        var s = "";
        var t = "";
        var templateCodes = new Array();
        for (var x = 0; x < p.length; x++) {
            if (p[x].split("=")[0] == "adhesePreviewCreativeId") {
                c = unescape(p[x].split("=")[1]);
            }
            if (p[x].split("=")[0] == "adhesePreviewSlotId") {
                s = p[x].split("=")[1];
            }
            if (p[x].split("=")[0] == "adhesePreviewCreativeTemplate") {
                t = p[x].split("=")[1];
                if (countCreatives > 1) {
                    this.formats[t] = {
                        slot: s,
                        creative: c
                    };
                } else {
                    templateCodes.push(t);
                }
            }
        }
        if (countCreatives == 1) {
            for (var y = 0; y < templateCodes.length; y++) {
                this.formats[templateCodes[y]] = {
                    slot: s,
                    creative: c
                };
            }
        }
        var c = [];
        for (k in this.formats) {
            c.push(k + "," + this.formats[k].creative + "," + this.formats[k].slot);
        }
        adhese.cookie.create("adhese_preview", c.join("|"), 0);
        this.active = true;
        adhese.addEvent("load", this.showSign);
    } else if (adhese.cookie.read("adhese_preview")) {
        var v = adhese.cookie.read("adhese_preview").split("|");
        for (var x = 0; x < v.length; x++) {
            var c = v[x].split(",");
            this.formats[c[0]] = {
                creative: c[1],
                slot: c[2]
            };
        }
        this.active = true;
        adhese.addEvent("load", this.showSign);
    }
};

Adhese.prototype.preview.close = function() {
    adhese.cookie.erase("adhese_preview");
    adhese.preview.active = false;
    if (location.search.indexOf("adhesePreviewCreativeId") != -1) {
        window.location.search = window.location.search.split("?")[0];
    } else {
        window.location.reload();
    }
};

Adhese.prototype.preview.showSign = function() {
    var p = document.createElement("DIV");
    var msg = "<div onclick='adhese.preview.close(); return false;' style='font-family:Helvetica,Verdana; font-size:12px; text-align:center; background-color:#000000; color: #ffffff; position:fixed; top:0px; left:6px; padding:4px; border-style:dashed; border:2px; border-color:#000000;z-index:9999;cursor:pointer;'>";
    msg += "<p><b>Disable<br>Adhese<br>preview</b></p></div>";
    p.innerHTML = msg;
    document.body.appendChild(p);
};

Adhese.prototype.Ad = function Ad(t, o) {
    this.defaults = {
        async: false,
        product: adhese.product,
        slot: ""
    };
    this.options = adhese.merge(this.defaults, o);
    delete this.defaults;
    this.template = t;
    if (this.options.uid) {} else {
        this.options.uid = t + adhese.rand;
    }
    this.get();
};

Adhese.prototype.Ad.prototype.write = function() {
    var adurl = this.getAdRequest();
    document.write("<scr" + "ipt type='text/javascript' src=" + adurl + "></scri" + "pt>");
};

Adhese.prototype.Ad.prototype.get = function() {
    var that = this;
    that.isLoaded = false;
    if (!this.options.lazy && !this.options.async) {
        this.write();
    } else if (this.options.lazy) {
        if (!document.getElementById(this.options.uid)) {
            document.write("<div id='" + this.options.uid + "' style='padding:-1px;margin:-1px;height:2px;'></div>");
        }
        that.LIVfn = function() {
            that.loadIfVisible();
        };
        that.removeScrollEvent(that.LIVfn);
        that.addScrollEvent(that.LIVfn);
    } else if (this.options.async) {
        that.load();
    }
};

Adhese.prototype.Ad.prototype.loaded = function(data) {
    var that = this;
    if (data != "") {
        var str_html = "<script>" + data + "</script>";
        document.getElementById(that.options.uid).style.height = null;
        $("#" + that.options.uid).html(writeCapture.sanitize(str_html));
    }
};

Adhese.prototype.Ad.prototype.load = function() {
    var that = this;
    var adurl = this.getAdRequest();
    if ($.browser.msie && window.XDomainRequest) {
        var xdr = new XDomainRequest();
        xdr.open("get", adurl);
        xdr.onload = function() {
            var data = xdr.responseText;
            that.loaded(data);
        };
        xdr.send();
    } else {
        $.ajax({
            dataType: "text",
            beforeSend: function(xhr) {
                xhr.withCredentials = true;
            },
            url: adurl,
            success: function(data, s, j) {
                that.loaded(data);
            }
        });
    }
};

Adhese.prototype.Ad.prototype.getAdRequest = function() {
    var req = [];
    if (adhese.preview.active && adhese.preview.formats[this.template]) {
        req = adhese.previewHost + "id=" + adhese.preview.formats[this.template].creative + "&slotId=" + adhese.preview.formats[this.template].slot;
    } else {
        adhese.profile.sl = this.options.product + this.options.slot + "-" + this.template;
        for (k in adhese.profile) {
            req.push(k + adhese.profile[k]);
        }
        req.push("hk" + adhese.hkey);
        req.push("?t=" + Math.random() * 1e4);
        req = adhese.host + "/" + req.join("/");
    }
    return req;
};

Adhese.prototype.Ad.prototype.addScrollEvent = function(func) {
    adhese.addEvent("scroll", func);
};

Adhese.prototype.Ad.prototype.removeScrollEvent = function(func) {
    adhese.removeEvent("scroll", func);
};

Adhese.prototype.Ad.prototype.addOnBlurEvent = function(func) {
    adhese.addEvent("blur", func);
};

Adhese.prototype.Ad.prototype.addOnFocusEvent = function(func) {
    adhese.removeEvent("blur", func);
};

Adhese.prototype.Ad.prototype.loadIfVisible = function() {
    var that = this;
    if (!that.isLoaded) {
        if (adhese.visible.check(that.options.uid)) {
            that.removeScrollEvent(that.LIVfn);
            that.isLoaded = true;
            that.load();
        }
    }
};

Adhese.prototype.Ad.prototype.reload = function() {
    this.options.product = adhese.getLocation();
    this.options.async = true;
    this.get();
};

Adhese.prototype.flash = {};

Adhese.prototype.flash.check = function() {
    this.active = false;
    if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) {
        this.active = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
    } else if (document.all && navigator.appVersion.indexOf("Mac") == -1) {
        eval('try {var xObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if (xObj) this.active = true; xObj = null; } catch (e) {}');
    }
    var plugin = navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
    if (plugin) {
        var dcfl = plugin.description.split(" ");
        var dcct;
        for (dcct = 0; dcct < dcfl.length; dcct++) {
            if (!isNaN(dcfl[dcct])) {
                if (parseInt(dcfl[dcct]) >= 8) this.active = true;
                break;
            }
        }
    } else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE") >= 0 && (navigator.userAgent.indexOf("Windows 95") >= 0 || navigator.userAgent.indexOf("Windows 98") >= 0 || navigator.userAgent.indexOf("Windows NT") >= 0)) {
        document.write("<scr" + 'ipt language="VBScript"> \n');
        document.write("on error resume next \n");
        document.write('adhese.flash.active = (Isobject(Createobject("ShockwaveFlash.ShockwaveFlash.8")))\n');
        document.write("</scr" + "ipt>\n");
    }
    return this.active ? this.active = true : this.active = false;
};

Adhese.prototype.browser = {};

Adhese.prototype.browser.detect = function() {
    this.name = this.searchString(this.dataBrowser) || "unknownBrowser";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "unknownVersion";
    this.os = this.searchString(this.dataOS) || "unknownOS";
};

Adhese.prototype.browser.searchString = function(data) {
    for (var i = 0; i < data.length; i++) {
        var dataString = data[i].string;
        var dataProp = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;
        if (dataString) {
            if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
        } else if (dataProp) return data[i].identity;
    }
};

Adhese.prototype.browser.searchVersion = function(dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
};

Adhese.prototype.browser.dataBrowser = [ {
    string: navigator.userAgent,
    subString: "Chrome",
    identity: "Chrome"
}, {
    string: navigator.userAgent,
    subString: "OmniWeb",
    versionSearch: "OmniWeb/",
    identity: "OmniWeb"
}, {
    string: navigator.vendor,
    subString: "Apple",
    identity: "Safari",
    versionSearch: "Version"
}, {
    prop: window.opera,
    identity: "Opera"
}, {
    string: navigator.vendor,
    subString: "iCab",
    identity: "iCab"
}, {
    string: navigator.vendor,
    subString: "KDE",
    identity: "Konqueror"
}, {
    string: navigator.userAgent,
    subString: "Firefox",
    identity: "Firefox"
}, {
    string: navigator.vendor,
    subString: "Camino",
    identity: "Camino"
}, {
    string: navigator.userAgent,
    subString: "Netscape",
    identity: "Netscape"
}, {
    string: navigator.userAgent,
    subString: "MSIE",
    identity: "Explorer",
    versionSearch: "MSIE"
}, {
    string: navigator.userAgent,
    subString: "Trident/7",
    identity: "Explorer",
    versionSearch: "rv"
}, {
    string: navigator.userAgent,
    subString: "Gecko",
    identity: "Mozilla",
    versionSearch: "rv"
}, {
    string: navigator.userAgent,
    subString: "Mozilla",
    identity: "Netscape",
    versionSearch: "Mozilla"
} ];

Adhese.prototype.browser.dataOS = [ {
    string: navigator.userAgent,
    subString: "Android",
    identity: "Android"
}, {
    string: navigator.userAgent,
    subString: "Windows NT 10.0",
    identity: "Windows10"
}, {
    string: navigator.userAgent,
    subString: "Windows NT 6.3",
    identity: "Windows8.1"
}, {
    string: navigator.userAgent,
    subString: "Windows NT 6.2",
    identity: "Windows8"
}, {
    string: navigator.userAgent,
    subString: "Windows NT 6.1",
    identity: "Windows7"
}, {
    string: navigator.userAgent,
    subString: "Windows NT 6.0",
    identity: "WindowsVista"
}, {
    string: navigator.userAgent,
    subString: "Windows NT 5.1",
    identity: "WindowsXP"
}, {
    string: navigator.userAgent,
    subString: "Windows 98",
    identity: "Windows98"
}, {
    string: navigator.userAgent,
    subString: "Windows 95",
    identity: "Windows95"
}, {
    string: navigator.platform,
    subString: "Linux",
    identity: "Linux"
}, {
    string: navigator.userAgent,
    subString: "iPad",
    identity: "iPad"
}, {
    string: navigator.userAgent,
    subString: "iPhone",
    identity: "iPhone"
}, {
    string: navigator.userAgent,
    subString: "iPod",
    identity: "iPod"
}, {
    string: navigator.platform,
    subString: "Mac",
    identity: "Mac"
}, {
    string: navigator.userAgent,
    subString: "PlayStation Portable",
    identity: "PlayStationPortable"
}, {
    string: navigator.userAgent,
    subString: "BlackBerry",
    identity: "BlackBerry"
}, {
    string: navigator.userAgent,
    subString: "Symbian",
    identity: "Symbian"
} ];

Adhese.prototype.syncUser = function(network, identification) {
    if (network == "rubicon") {
        this.rubiconUserSync(identification);
    }
};

Adhese.prototype.rubiconUserSync = function(option) {
    if (option && option.rp_account && option.rp_account != "") {
        if (document.cookie.indexOf("rubicon_uid_last_sync") == -1) {
            this.addEvent("load", this.rubiconMultiSync);
            var date = new Date();
            date.setDate(date.getDate() + 1);
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            var diff = date.getTime() - new Date().getTime();
            this.cookie.create("rubicon_uid_last_sync", diff, diff / 24 / 60 / 60 / 1e3);
        }
    }
};

Adhese.prototype.rubiconMultiSync = function() {
    var script = document.createElement("SCRIPT");
    script.type = "text/javascript";
    script.setAttribute("id", "multisync");
    script.setAttribute("data-partner", "adhese");
    script.setAttribute("data-region", "eu");
    script.setAttribute("data-country", "be");
    script.setAttribute("data-endpoint", "eu");
    script.src = "http://assets.rubiconproject.com/utils/xapi/multi-sync.js";
    document.body.appendChild(script);
};

window.AdheseVisibleData = [];

Adhese.prototype.checkVisible = function() {
    var that = this;
    var ads = new Array();
    var visibleIndex = 0;
    for (var i = 0; i < window.AdheseVisibleData.length; i++) {
        visibleIndex = i;
        ads[i] = window.AdheseVisibleData[i];
        var el = document.getElementById(ads[i].uid);
        if (el) {
            var rect = el.getBoundingClientRect();
            ads[i].visible = rect.height > 0 && rect.width > 0 && rect.top >= 0 && rect.left >= 0 && rect.bottom - rect.height * .5 <= (window.innerHeight || document.documentElement.clientHeight) && rect.right - rect.width * .5 <= (window.innerWidth || document.documentElement.clientWidth);
            if (ads[i].visible && !ads[i].active && !ads[i].tracked) {
                that.track(ads[i].inviewTracker);
                ads[i].active = true;
                ads[i].out = setTimeout(function(activeAd) {
                    that.track(activeAd.visibleTracker);
                    activeAd.tracked = true;
                    window.AdheseVisibleData.splice(window.AdheseVisibleData.indexOf(activeAd), 1);
                }, 1e3, ads[i]);
            } else if (!ads[i].visible && ads[i].active) {
                clearTimeout(ads[i].out);
                ads[i].active = false;
            }
        } else {
            this.helper.log("Can't find <div> width id: " + ads[i].uid);
            ads[i].tracked = true;
        }
    }
};

Adhese.prototype.track = function(uri) {
    var img = document.createElement("img");
    img.src = uri;
    img.style.height = "1px";
    img.style.width = "1px";
    img.style.margin = "-1px";
    img.style.border = "0";
    img.style.position = "absolute";
    img.style.top = "0";
    document.body.appendChild(img);
};

var adhesePebble = new Adhese();

if (typeof adhese != "undefined") {
    var previousAdhese = adhese;
}

adhese = adhesePebble;

adhesePebble.init();

adhese.helper = {};

adhese.helper.log = function() {};

adhese.syncUser("rubicon", {
    rp_account: "adhese"
});

if (adhesePublication && adheseLocation && adheseFormat) {
    if (typeof adhesePosition === "undefined") {
        adhesePosition = "";
    }
    if (typeof adheseCategorie !== "undefined") {
        adhese.tag({
            format: adheseFormat,
            publication: adhesePublication,
            location: adheseLocation,
            placement: adhesePosition,
            categories: [ adheseCategorie ]
        });
    } else {
        adhese.tag({
            format: adheseFormat,
            publication: adhesePublication,
            location: adheseLocation,
            placement: adhesePosition,
            categories: []
        });
    }
}

if (typeof previousAdhese != "undefined") {
    adhese = previousAdhese;
}

adhese.addEvent("load", adhese.checkVisible.bind(adhese));

adhese.addEvent("scroll", adhese.checkVisible.bind(adhese));