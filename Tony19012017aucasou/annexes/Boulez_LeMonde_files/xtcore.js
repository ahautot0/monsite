/***@licence*Copyright2014ATInternet,AllRightsReserved.*ATInternetTag4.6.4*/window.Xtconf={xt1:'.lemonde.fr',xtLogDom:'.xiti.com/hit.xiti',xtfirst:false,xt2:'1',xt3:397,xt4sec:'30',xt4rss:'30',xt4epr:'30',xt4erec:'30',xt4adi:'30',xt4adc:'30',xt4al:'30',xtsds:'https://logs13',xtsd:'http://logc2',xtsts:0,xtsite:function(x){return x+ xt8},xtscript:'',xtpreview:false,xtnocookies:false,xtcode:'',xt46:'1',xt50:'1',xt48:'',xt54:false,xt58:false,xtdocl:false,xttredir:500,xtkwv:'xtmc',xtkwp:'xtnp',idcExp:397,idcType:'fixed',weboAccountId:0};
window.ATInternet=window.ATInternet||{};
window.ATInternet.Utils=new function(){var d=this;d.getCookie=function(d){return d=(d=RegExp("(?:^| )"+d+"=([^;]+)").exec(document.cookie)||null)&&1<d.length?d[1]:null};d.setCookie=function(d,r,j,g,p){var n=new Date;n.setTime(n.getTime()+1E3*j);j="expires="+n.toGMTString();document.cookie=d+"="+r+";"+j+";path="+(p?p:"/")+";domain="+(g?g:"")};d.serialJSON=function(l,r){var j=typeof l;if("object"!==j||null===l)return"string"===j&&(l=r?encodeURIComponent('"'+l+'"'):'"'+l+'"'),String(l);var g,p,n=[],
D=l&&l.constructor===Array;for(g in l)l.hasOwnProperty(g)&&(p=l[g],j=typeof p,"function"!==j&&("string"===j?p=r?encodeURIComponent('"'+p.replace(/[^\\]"/g,'\\"')+'"'):'"'+p.replace(/[^\\]"/g,'\\"')+'"':"object"===j&&null!==p&&(p=d.serialJSON(p,r)),n.push((D?"":r?encodeURIComponent('"'+g+'":'):'"'+g+'":')+String(p))));return(D?"[":"{")+String(n)+(D?"]":"}")};d.parseJSON=function(d){return null===d?d:"string"===typeof d?(new Function("return "+d))():!1}};
window.Xtcore=function(){function d(b){return"undefined"!==typeof b}function l(b){return ATInternet.Utils.serialJSON(b,!0)}function r(b){return b.replace(/%3C/g,"<").replace(/%3E/g,">").replace(/[<>]/g,"")}function j(b,a,h,c,e){a=0===e?a:encodeURIComponent(a);na||(m.cookie=b+"="+a+";expires="+h.toGMTString()+";path=/"+c)}function g(b,f,h){var c;try{c=R.location.href}catch(e){c=a.location.href}f=null===f||!d(f)?r(c.toLowerCase().replace(/%3d/g,"=")):f;if(0<f.indexOf(b+"=")){f=f.substr(1);b=f.substr(f.indexOf(b+
"="));if(2!=h){if(1!=h)try{b=decodeURIComponent(b)}catch(j){b=unescape(b)}if(f=b.match(/(\[[^\]]*\])/g)){c="";for(var g=0,K=f.length;g<K;g++)c=f[g].substring(1,f[g].length-1),b=b.replace(c,encodeURIComponent(c))}}f=b.indexOf("#");c=b.search(/&.[^&]+=/gi);c=-1==c?-1==f?b.length:f:0<f&&f<c?f:c;return 1==h?decodeURIComponent(b.substring(b.indexOf("=")+1,c)):2==h?b.substring(b.indexOf("=")+1,c):b.substring(b.indexOf("=")+1,c).replace("&","%26")}return null}function p(b,a,h,c){if((0===oa||3==oa||"C"!=
b)&&"P"!=b)Wa&&"0"==Y&&"F"==b?(v=v.replace("&p="+g("p",v,2),""),v=v.replace("&s2="+g("s2",v),""),AT_hit.isPreviewOrPrerendering()||AT_hit.sendTag(b,null,null,a),Wa=!1):AT_hit.sendTag(b,a);null!==h&&(d(h)&&"M"!=b)&&(""===c||null===c?m.location=h:window.open(h,"xfen","").focus())}function n(b){b-=100*Math.floor(b/100);return 10>b?"0"+b:b}function D(b){return Math.floor(Math.random()*Math.pow(10,b))}var pa=this;pa.sentHits=[];var k=Xtconf.xt1,Xa=Xtconf.xtscript,Ya=window.xtLogDom=Xtconf.xtLogDom,ub=
Xtconf.xtpreview,Za=Xtconf.xtfirst,na=Xtconf.xtnocookies,$a=Xtconf.xtcode,Y=Xtconf.xt46,qa=Xtconf.xt50,ab=Xtconf.xt48,vb=Xtconf.xt54,wb=Xtconf.xt58,xb=Xtconf.xtdocl,yb=Xtconf.xt2,zb=Xtconf.xt3;window.xttredir=Xtconf.xttredir;var bb=Xtconf.xtkwv,cb=Xtconf.xtkwp,ra=[],A=[];A.sec=Xtconf.xt4sec;A.rss=Xtconf.xt4rss;A.epr=Xtconf.xt4epr;A.erec=Xtconf.xt4erec;A.adi=Xtconf.xt4adi;A.adc=Xtconf.xt4adc;A.al=Xtconf.xt4al;A.es=Xtconf.xt4epr;A.ad=Xtconf.xt4adi;var sa=[],Wa=!0,L=!1,ta=null,a=window.xw=window,m=window.xd=
document,t=navigator,Ab=window.xtv=a.xtczv?"4.6.4-"+a.xtczv:"4.6.4",k=window.xt1=a.xtdmc?";domain="+a.xtdmc:""!==k?";domain="+k:"",R=a.xtnv?a.xtnv:m,Bb=window.xt7=a.xtsdi?a.xtsdi:a.xtsd?a.xtsd+Ya:("https:"===m.location.protocol?Xtconf.xtsds:Xtconf.xtsd)+Ya,Z=a.xtsts?a.xtsts:Xtconf.xtsts,$="";if(vb){var ua="";try{ua=R.location.href}catch(Zb){ua=a.location.href}var Cb=/#.*/,va=null;try{va=ua.match(Cb)[0]}catch($b){va=null}$=($=va)?"&sta="+encodeURIComponent(r($)):""}"undefined"!==typeof window.ATTvTracking&&
window.ATTvTracking.init(a.Xtconf);var db=a.xtcustom?l(a.xtcustom):"",E=window.xt8=a.xtsite?a.xtsite:0,Db=window.xt9=a.xtn2?"&s2="+a.xtn2:"",Eb=window.xt8b=(0===E?"":"s="+E)+(0===Z?"":0===E?"sts="+Z:"&sts="+Z),aa=window.xtp=a.xtpage?a.xtpage:"",eb=a.xto_force?a.xto_force.toLowerCase():null,F="redirect"===E,Fb=a.xtdi?"&di="+a.xtdi:"",Gb=a.xtidp?"&idpays="+a.xtidp:"",Hb=a.xtidprov?"&idprov="+a.xtidprov:"",s=a.xtparam?a.xtparam:"",Y=a.xtnopage&&"1"===a.xtnopage?"0":Y,qa=a.xtergo&&"0"===a.xtergo?"0":
qa,oa=a.scriptOnClickZone&&"1"===qa?a.scriptOnClickZone:0,Ib=""!==$a?"&code="+$a:"",wa=[],ba=[],S=[],ca=[],xa=[],I=[];window.xt44=a.xtprod_load?"&pdtl="+a.xtprod_load:"";a.addEventListener?a.addEventListener("unload",function(){},!1):a.attachEvent&&a.attachEvent("onunload",function(){});m.addEventListener?(m.addEventListener("keydown",function(){L=!0},!1),m.addEventListener("keyup",function(){L=!1},!1)):m.attachEvent&&(m.attachEvent("onkeydown",function(){L=!0}),m.attachEvent("onkeyup",function(){L=
!1}));var Jb=a.roimt&&0>s.indexOf("&roimt",0)?"&roimt="+a.roimt:"",Kb=0>s.indexOf("&mc=",0)?a.xtmc?"&mc="+a.xtmc:g(bb)?"&mc="+g(bb):g("xtmc")?"&mc="+g("xtmc"):"":"",Lb=g("xtcr")?"&mcrg="+g("xtcr"):"",Mb=a.xtac&&0>s.indexOf("&ac=",0)?"&ac="+a.xtac:"",Nb=a.xtat&&0>s.indexOf("&at=",0)?"&at="+a.xtat:"",fb=a.xtan&&0>s.indexOf("&an=",0)?"&an="+a.xtan:"",Ob=0>s.indexOf("&np=",0)?a.xtnp?"&np="+a.xtnp:g(cb)?"&np="+g(cb):g("xtnp")?"&np="+g("xtnp"):"":"",Pb=a.xtprm&&0>s.indexOf("&x",0)?a.xtprm:"",s=s+(Jb+Kb+
Lb+Mb+(""!==fb?fb:Nb)+Ob+Pb+$),ya="";try{ya=top.document.referrer}catch(ac){try{ya=R.referrer}catch(bc){}}var da=screen,G=window.xt21=new Date,gb=G.getTime()/36E5,q=window.xtf1=function(b,a){if(na)return null;a=null!==a&&d(a)?a:"0";var h=RegExp("(?:^| )"+b+"=([^;]+)").exec(m.cookie)||null;if(h&&(h=r(h[1]),"1"!=a))try{h=decodeURIComponent(h)}catch(c){h=unescape(h)}return h};window.xt_addchain=function(b,a){var h=a?a:"abmv",c=!ra[h]?0:ra[h];c++;s+="&"+h+""+c+"="+b;ra[h]=c};"function"===typeof xt_adch&&
xt_adch();window.wck=j;window.xtf3=g;window.xt_mvt=function(b,a,h,c,e){if(c)for(var d=1;d<c.length+1;d++)h+="&"+(e?e:"abmv")+d+"="+c[d-1];p("","&p="+b+"&s2="+a+"&abmvc="+h+"&type=mvt")};window.xt_med=function(b,a,h,c,e,j,g,K){c="F"==b&&(null===c||!d(c))?g?"&stc="+l(g):"":"M"==b?"&a="+c+"&m1="+e+"&m2="+j+"&m3="+g+"&m4="+K:"&clic="+c+(g?"&stc="+l(g):"");p(b,"&s2="+a+"&p="+h+c,e,j)};if(Za=window.xtfirst=-1!=t.userAgent.indexOf("Safari")&&0>t.userAgent.indexOf("Chrome")||-1!=t.userAgent.indexOf("iPhone")||
-1!=t.userAgent.indexOf("iPod")||-1!=t.userAgent.indexOf("iPad")||Za||a.xtidc||na){var ea=a.xtidc,za=q("xtidc"),M="",M=ea?ea:za?za:(new Date).getTime()+""+D(7);if("relative"==Xtconf.idcType||ea||!za&&!ea){var Aa=new Date;Aa.setTime(Aa.getTime()+864E5*Xtconf.idcExp);j("xtidc",M,Aa,k,1)}var hb=q("xtidc"),M=M+(!a.xtidc&&(null===hb||hb!=M)?"-NO":"")}window.xt_ad=function(b,f,h,c){p("AT","&atc="+b+"&type=AT&patc="+a.xtpage+"&s2atc="+a.xtn2+(c?"&stc="+l(c):""),f,h)};window.xt_adi=function(b,a,h){p("AT",
"&ati="+b+"&type=AT",a,h)};window.xt_adc=function(b,f,h,c,e){p("AT","&atc="+f+"&type=AT&patc="+a.xtpage+"&s2atc="+a.xtn2+(e?"&stc="+l(e):""));return AT_click.do_navig(b,h,c?"_blank":null,!0)};window.xt_click=function(b,a,h,c,e,j,g,K){e=("F"==a&&(null===e||!d(e))?"":"&clic="+e)+(K?"&stc="+l(K):"");p(a,"&s2="+h+"&p="+c+e);return AT_click.do_navig(b,j,g?"_blank":null,!0)};window.xt_form=function(b,a,h,c,e,j,g){e=("F"==a&&(null===e||!d(e))?"":"&clic="+e)+(g?"&stc="+l(g):"");p(a,"&s2="+h+"&p="+c+e);return AT_click.do_submit(b,
!0,j)};window.xt_rm=function(b,f,h,c,e,d,g,j,w,n,l,k,m,q){p(b,"&p="+h+"&s2="+f+"&type="+b+"&a="+c+"&m5="+l+"&m6="+k+(null!==e&&"0"!=e?"&"+e:"")+(null!==g&&"pause"!=c&&"stop"!=c?"&m1="+g+"&"+j+"&m3="+w+"&m4="+n+"&m7="+m+"&m8="+q+"&prich="+a.xtpage+"&s2rich="+a.xtn2:"")+(null!==d&&"0"!=d&&null!==g?"&rfsh="+d:""));e=new Date;if(null!==d&&"0"!=d&&("play"==c||"play&buf=1"==c||"refresh"==c)){I[b]&&18E5<e.getTime()-I[b]&&(S[b]=0);if(("play"==c||"play&buf=1"==c)&&!S[b])S[b]=e.getTime()/1E3,ca[b]=parseInt(g),
c=Math.floor(d),c=1500<c?1500:5>c?5:c,wa[b]=c,ba[b]=c,I[b]=!1;else if("refresh"==c&&("live"==k||!ca[b]||300<ca[b]&&2>100*wa[b]/ca[b]))c=I[b]?xa[b]:e.getTime()/1E3-S[b],5>100*ba[b]/(c+30)&&(ba[b]=5*((c+30)/100)),I[b]&&(I[b]=!1,S[b]=e.getTime()/1E3-xa[b]),xa[b]=c;sa[b]=a.setTimeout("xt_rm('"+b+"','"+f+"','"+h+"','refresh','0','"+d+"',null,'"+j+"','"+w+"','"+n+"','"+l+"','"+k+"')",1E3*ba[b])}else if(("pause"==c||"stop"==c)&&null!==sa)a.clearTimeout(sa[b]),"stop"==c?wa[b]=0:I[b]=e.getTime()};var Ba=window.xtidpg=
n(G.getHours())+""+n(G.getMinutes())+""+n(G.getSeconds())+""+D(7),u=0,ib=0;window.xt16="";window.xt_addProduct=function(b,f,h,c,e,d){u++;a.xt16+="&pdt"+u+"=";a.xt16+=b?b+"::":"";a.xt16+=f?f:"";a.xt16+=h?"&qte"+u+"="+h:"";a.xt16+=c?"&mt"+u+"="+c:"";a.xt16+=e?"&dsc"+u+"="+e:"";a.xt16+=d?"&pcode"+u+"="+d:""};window.xt_rd=D;window.xt_addProduct_v2=function(b,f,h,c,e,d,g,j,n){u++;a.xt16+="&pdt"+u+"=";a.xt16+=b?b+"::":"";a.xt16+=f?f:"";a.xt16+=h?"&qte"+u+"="+h:"";a.xt16+=c?"&mt"+u+"="+c:"";a.xt16+=e?"&mtht"+
u+"="+e:"";a.xt16+=d?"&dsc"+u+"="+d:"";a.xt16+=g?"&dscht"+u+"="+g:"";a.xt16+=n?"&roimt"+u+"="+n:"";a.xt16+=j?"&pcode"+u+"="+j:""};window.xt_addProduct_load=function(b,f,h){f&&(ib++,a.xt44+=1==ib?"&pdtl=":"|",a.xt44+=b?b+"::":"",a.xt44+=f,a.xt44+=h?";"+h:"")};"function"==typeof xt_cart?xt_cart():a.xt16="";window.xt_ParseUrl=function(b,a,h){AT_hit.sendTag(h?"F":"old",a)};window.xt_ParseUrl3=function(b,a,h,c,e){AT_hit.sendTag("&ati="==e?"AT":"PDT",a,null,"&type="+("&ati="==e?"AT":"PDT"))};window.AT_click=
{id:0,objs:[],elem:function(b,a,h,c,e,g,j,n){var w={};w.urlDest=e;w.type=b;w.n2=a;w.label=h;w.typeClick=c;w.target=g;w.submit=!1!==e;w.redir=!d(j)?!0:j;w.xtcust=d(n)?"&stc="+l(n):"";return w},addListener:function(b,a,h){window.addEventListener?b.addEventListener(a,h,!1):window.attachEvent&&b.attachEvent("on"+a,h)},tag:function(a,f,h,c,e,d,g,j,n){if(a&&"function"==typeof a.setAttribute)this.addElem(a,f,h,c,e,d,g,j,n);else if("object"==typeof a)for(var l in a)a.hasOwnProperty(l)&&"function"==typeof a[l].setAttribute&&
this.addElem(a[l],f,h,c,e,d,g,j,n)},addElem:function(a,f,h,c,e,d,g,j,n){this.id++;a.setAttribute("data-xtclickid",this.id);this.objs[this.id]=this.elem(f,h,c,e,d,g,j,n);"FORM"!=a.nodeName?this.addListener(a,"click",this.on_click_submit):this.addListener(a,"submit",this.on_click_submit)},on_click_submit:function(a){try{var f=a.target||a.srcElement,h=f.getAttribute("data-xtclickid"),c={},e="",d=a.defaultPrevented,g=window.AT_click;if(!h)for(var j=f.parentNode;j;){if(j.getAttribute("data-xtclickid")){h=
j.getAttribute("data-xtclickid");break}j=j.parentNode}h&&(c=g.objs[h],"AT"!=c.type?e+="&p="+c.label+("C"==c.type?"&clic="+c.typeClick:""):"AT"==c.type&&(e+="&type=AT&atc="+c.label),e+=c.xtcust,p(c.type,"&s2="+c.n2+e),!d&&c.redir&&(a.preventDefault(),"FORM"!=f.nodeName?g.do_navig(f,c.urlDest,c.target):g.do_submit(f,null,c.submit)))}catch(n){}},do_navig:function(b,f,h,c){var e=null;if("A"!=b.nodeName)for(var d=b.parentNode;d;){if("A"==d.nodeName){e=d;break}d=d.parentNode}else e=b;if(e){if(e.target=
h||b.target||"_self",e.href=f||b.href||e.href,!c||c&&!L)if(b=e.href.split('"').join('\\"'),0>e.href.indexOf("mailto:"))if("_self"==e.target.toLowerCase()){if(setTimeout('self.location.href="'+b+'"',a.xttredir),c)return!1}else if("_top"==e.target.toLowerCase()){if(setTimeout('top.location.href="'+b+'"',a.xttredir),c)return!1}else if("_parent"==e.target.toLowerCase()){if(setTimeout('parent.location.href="'+b+'"',a.xttredir),c)return!1}else return!0;else if(setTimeout('AT_click.mail_to("'+b+'");',a.xttredir),
c)return!1}else if(f||b.href)if(f=f?f:b.href,0>f.indexOf("mailto:"))if("_blank"==h)setTimeout('(xw.open("'+f.split('"').join('\\"')+'","_blank")).focus();',1);else{if(setTimeout('self.location.href="'+f.split('"').join('\\"')+'"',a.xttredir),c)return!1}else if(setTimeout('AT_click.mail_to("'+f.split('"').join('\\"')+'");',a.xttredir),c)return!1;if(c)return L=!1,!0},do_submit:function(a,f,h){if(h&&(setTimeout(function(){a.submit()},500),f&&h))return!1},mail_to:function(a){window.location=a}};window.AT_hit=
{first:!0,referrer:("acc_dir"==g("xtref")?"":null!==g("xtref")?g("xtref"):"acc_dir"==q("xtref")?"":q("xtref")||ya.replace(/[<>]/g,"")||"").replace(/[<>]/g,"").substring(0,1600),parse:function(a,f,h,c){var e=[""];if(1600>=f.length)e[0]=f;else{a=AT_hit.first&&"F"==a?Ba:Ba.substring(0,6)+D(8);var d="",j="",n,l={};n=[];var k=0;0<=f.indexOf("&ref=")&&(d=f.substring(f.indexOf("&ref=")),f=f.replace(d,""));if(c)for(var p in c)if(c.hasOwnProperty(p)&&0<=f.indexOf("&"+p+"=")&&1600<(j=g(p,f,2)).length)f=f.replace("&"+
p+"="+j,""),n=RegExp("["+c[p]+"]","gi"),l[p]=j.replace(/&/g,"%26").split(n);n=RegExp("["+h+"]","gi");n=f.split(n);for(var m in n)n.hasOwnProperty(m)&&(1600>=e[k].length+n[m].length+1?e[k]+=""!==n[m]?"&"+n[m]:"":(e.push(""),k++,e[k]=1600>n[m].length?e[k]+(""!==n[m]?"&"+n[m]:""):e[k]+("&mherr=1&"+n[m].substring(0,1600))));for(var q in l)if(l.hasOwnProperty(q)){f="&"+q+"=";h=!1;p=l[q].length;for(m=0;m<p;m++)1600>=e[k].length+l[q][m].length+1?(h||(e[k]+=f,h=!0),e[k]+=""!==l[q][m]?l[q][m]+("stc"===q&&
p-1===m?"":c[q]):""):(e.push(f),h=!0,k++,e[k]=1600>l[q][m].length?e[k]+(""!==l[q][m]?l[q][m]+("stc"===q&&p-1===m?"":c[q]):""):e[k]+("mherr=1"+c[q]))}d&&(1600>=e[k].length+d.length||(e.push(""),k++),e[k]+=d);for(c=0;c<e.length;c++)e[c]="&mh="+(c+1)+"-"+e.length+"-"+a+e[c]}return e},sendTag:function(b,f,d,c){"undefined"!=typeof window.ATTvTracking&&window.ATTvTracking.update();"undefined"!=typeof window.ATTagWebo&&ATTagWebo.update();var e=[];d=d||Qb+Eb;d+=a.xtfirst?"&idclient="+M:"";b=b||"F";f=f||v;
f+=(c?c:"")+"&vtag="+Ab+AT_hit.localHour()+AT_hit.resolution()+"&rn="+(new Date).getTime();AT_hit.first&&"F"==b&&(f+=db&&0>f.indexOf("&stc=")?"&stc="+db:"",f+="&ref="+AT_hit.referrer.replace(/&/g,"$"));"C"===b&&(f+="&pclick="+a.xtpage+"&s2click="+(a.xtn2?a.xtn2:""));e=AT_hit.parse(b,f,"&",{ati:",",atc:",",pdtl:"|",stc:",",dz:"|"});for(f=0;f<e.length;f++)AT_hit.loadImage(d+e[f]);AT_hit.first&&("F"==b&&""!==Xa)&&AT_hit.loadFile("script",Xa,!0,"text/javascript");"F"==b&&(AT_hit.first=!1)},loadImage:function(a){var f=
new Image;f.src=a;pa.sentHits instanceof Array&&pa.sentHits.push(a);f.onload=function(){f.onload=null}},loadFile:function(a,f,d,c,e){a=document.createElement(a);a.type=c;a.async=d;a.src=f;(e||document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(a,null)},localHour:function(a){a=a?a:new Date;return"&hl="+a.getHours()+"x"+a.getMinutes()+"x"+a.getSeconds()},resolution:function(){if(4<=parseFloat(t.appVersion))try{var a;
a="undefined"!==typeof window.devicePixelRatio?window.devicePixelRatio:1;return"&r="+da.width*a+"x"+da.height*a+"x"+da.pixelDepth+"x"+da.colorDepth}catch(d){}return""},prerenderDisplaying:function(){AT_hit.first&&(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+aa+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))},isPreviewOrPrerendering:function(){return window.navigator&&"preview"===window.navigator.loadPurpose&&-1!=t.userAgent.indexOf("Safari")&&
0>t.userAgent.indexOf("Chrome")?(ub&&(AT_hit.sendTag("F",null,null,"&pvw=1"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+aa+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):""))),!0):"prerender"==m.webkitVisibilityState?(m.addEventListener("webkitvisibilitychange",AT_hit.prerenderDisplaying,!1),!0):!1}};if(0!==E||0!==Z||F){var T="";if(""!==ab){T=q("xtvid");T||(ta=T=G.getTime()+""+D(6));var Ca=new Date;Ca.setMinutes(Ca.getMinutes()+30);j("xtvid",
T,Ca,"",1)}window.xtvid=T;var jb=Xtconf.xtsite("xtor"),Da=Xtconf.xtsite("xtdate"),kb=Xtconf.xtsite("xtocl"),Ea=Xtconf.xtsite("xtan"),Fa=Xtconf.xtsite("xtat"),U=Xtconf.xtsite("xtant"),J=g("xtor"),Ga=g("xtdt"),x=g("xtan"),y=g("xtat"),Ha=g("an",s),Ia=g("at",s),lb=g("ac",s),mb=q(kb),Ja=q("xtgo"),Ka=q("xtord"),nb=q("xtvrn"),V=null!==mb?mb:"$",Rb="0"===Ja?Ka:null,La=null!==Ja?Ja:"0",fa=null!==nb?nb:"$",ob=G.getTime()/6E4,W=null!==Ga&&(g("xts")==E||F)?30>ob-Ga&&0<=ob-Ga?"2":"1":La,Sb="1"==La?"&pgt="+Ka:
"1"==W&&null!==J?"&pgt="+J:"",N=null!==eb?eb:null!==J&&"0"==W?J:!F?Rb:null,N=0>V.indexOf("$"+N+"$")||"$"==V?N:null,C="0"==W?N:"2"==La?Ka:"2"==W?J:null,O,Ma;null!==C?(Ma=C.substring(0,C.indexOf("-")),O=A[Ma]):O="1";if(null===O||!d(O))O=A.ad;null===x&&!F&&(x=q("xtanrd"));null===y&&!F&&(y=q("xtatrd"));var pb=q(Ea),qb=q(Fa),ga=q(U),B=new Date,z=window.xt29=new Date,Na=new Date;F?B.setTime(B.getTime()+3E4):B.setTime(B.getTime()+864E5*O);Na.setTime(Na.getTime()+18E5);z.setTime(z.getTime()+864E5*zb);var Oa=
null!==x?x.indexOf("-"):0,Pa=null!==y?y.indexOf("-"):0,rb=null!==Ha?"":null!==x&&0<Oa?"&ac="+x.substring(0,Oa)+"&ant=0&an="+x.substring(Oa+1,x.length):null!==pb?"&anc="+pb+"&anct="+ga:"",Tb=null!==Ia?"":null!==y&&0<Pa?"&ac="+y.substring(0,Pa)+"&ant=0&at="+y.substring(Pa+1,y.length):null!==qb?"&attc="+qb+"&anct="+ga:"",H=0>fa.indexOf("$"+E+"$")?"&vrn=1":"",Ub=null!==g("xtatc")&&null===g("atc",s)?"&atc="+g("xtatc"):"";""!==H&&j("xtvrn",141>fa.length?fa+E+"$":fa.substring(0,141),z,k,0);H+=null===N?"":
"&xto="+N;H+=(""!==rb?rb:Tb)+Sb+Ub;null!==Ha?(j(Ea,lb+"-"+Ha,z,k,1),j(U,"1",z,k,1)):null!==x&&"1"!=ga&&(j(Ea,x,z,k,1),j(U,"0",z,k,1));null!==Ia?(j(Fa,lb+"-"+Ia,z,k,1),j(U,"1",z,k,1)):null!==y&&"1"!=ga&&(j(Fa,y,z,k,1),j(U,"0",z,k,1));var Qa=q(jb),X=q(Da),X=(/[a-zA-Z]/.test(X)?(new Date(X)).getTime()/36E5:parseFloat(q(Da)))||(new Date).getTime()/36E5,Vb=0<=Math.floor(gb-X)?Math.floor(gb-X):0,H=H+(null===Qa?"":"&xtor="+Qa+"&roinbh="+Vb);if(F)j("xtgo",W,B,k,1),null!==J&&j("xtord",J,B,k,1),null!==x&&j("xtanrd",
x,B,k,1),null!==y&&j("xtatrd",y,B,k,1),j("xtref",AT_hit.referrer?AT_hit.referrer.replace(/&/g,"$"):"acc_dir",B,k,0),a.xtloc&&(R.location=a.xtloc);else{null!==C&&(0>V.indexOf("$"+encodeURIComponent(C)+"$")||"$"==V)&&j(kb,V+C+"$",Na,k,1);var ha=t.appName+" "+t.appVersion,P=ha.indexOf("MSIE"),Q;0<=P?(Q=parseInt(ha.substr(P+5)),P=!0):(Q=parseFloat(t.appVersion),P=!1);var Wb=0<=ha.indexOf("Netscape"),Xb=0<=ha.indexOf("Mac"),Ra=0<=t.userAgent.indexOf("Opera"),ia="",sb="",Sa="",Ta="";if(P&&5<=Q&&!Xb&&!Ra&&
!F)try{m.body.addBehavior("#default#clientCaps"),ia="&cn="+m.body.connectionType,ia+="&ul="+m.body.UserLanguage,m.body.addBehavior("#default#homePage"),sb=m.body.isHomePage(location.href)?"&hm=1":"&hm=0",Ta="&re="+m.body.offsetWidth+"x"+m.body.offsetHeight}catch(cc){}else 5<=Q&&(Ta="&re="+a.innerWidth+"x"+a.innerHeight);Wb&&4<=Q||Ra?Sa="&lng="+t.language:P&&(4<=Q&&!Ra)&&(Sa="&lng="+t.userLanguage);j("xtord","",G,k,1);if(null!==C&&(null===Qa||"1"==yb))j(jb,C,B,k,1),j(Da,G.getTime()/36E5,B,k,1);var Yb=
xb?"&docl="+encodeURIComponent(R.location.href.replace(/&/g,"#ec#")):"",v=Db+"&p="+aa+Fb+Gb+Hb+H+Yb+Ib+s+ia+sb+Sa+"&idp="+Ba,Ua=q("xtvalCZ",1);if(null!==Ua){var v=v+decodeURIComponent(Ua.replace(/%at1%/g,"-").replace(/%at2%/g,"_").replace(/%at3%/g,".").replace(/%at4%/g,"!").replace(/%at5%/g,"~").replace(/%at6%/g,"*").replace(/%at7%/g,"'").replace(/%at8%/g,"(").replace(/%at9%/g,")")).replace("&c=","&current=").replace("&b=","&before=").replace("&a=","&after="),Va=new Date;Va.setTime(Va.getTime()-36E5);
j("xtvalCZ",Ua,Va,k,1)}var Qb=window.Xt_id=Bb+"?",ja=q("xtide");if(null!==C)switch(Ma.toLowerCase()){case "erec":case "epr":case "es":var ka=null;try{var la=C.match(/(\[[^\]]*\])|([^\-]+)|(-)/g),tb=0,ma;for(ma in la)"-"==la[ma]&&tb++,5==tb&&"-"!=la[ma]&&(ka=la[ma])}catch(dc){ka=null}null!==ka&&(ja=ka,j("xtide",ja,z,"",1))}v+="&jv="+(t.javaEnabled()?"1":"0")+Ta+xt16+(null!==ja?"&ide="+ja:"");ta&&(v+="&lnk="+ab+"&vid="+ta);"0"!=Y&&!AT_hit.isPreviewOrPrerendering()&&(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",
xt44,null,"&type=PDT&p="+aa+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))}}0<oa&&"function"==typeof xtNodesload&&(wb?a.addEventListener?a.addEventListener("load",xtNodesload,!1):a.attachEvent&&a.attachEvent("onload",xtNodesload):xtNodesload())};window.Xtconf.weboAccountId||(window.attag=new Xtcore);
window.ATWebo=function(){var d=this,l=("https:"==document.location.protocol?"https://":"http://")+"aimfr.solution.weborama.fr/fcgi-bin/dispatch.fcgi?g.wr=1&a.A=la",r={},j={},g=!1,p=!1;d.init=function(g){r=g;l+="&a.si="+r.weboAccountId+"&a.cb=ATTagWebo.callback&_="+Math.random();g=null;r.xtnocookies?(d.initInfoWebo(),j.info.message="xtnocookies",d.setXtcore()):(g=ATInternet.Utils.getCookie("atwebo"))?(j=ATInternet.Utils.parseJSON(g),d.setXtcore()):(d.initInfoWebo(),d.run())};d.update=function(){var d=
ATInternet.Utils.getCookie("atwebo");d&&ATInternet.Utils.setCookie("atwebo",d,1800,r.xt1)};d.run=function(){var g=document.createElement("script");g.type="text/javascript";g.async=!0;g.src=l;g.onerror=d.setScriptError;(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(g,null);setTimeout(d.setTimeoutError,500)};d.initInfoWebo=function(){j.info={version:"1.0.0",accountid:r.weboAccountId,message:"",
error:[]}};d.setDataWebo=function(d){j.data={accountid:r.weboAccountId,code:d}};d.setCookieWebo=function(){var d=ATInternet.Utils.serialJSON(j);ATInternet.Utils.setCookie("atwebo",d,1800,r.xt1);ATInternet.Utils.getCookie("atwebo")||(j.info.error.push("cookieError"),j={info:j.info})};d.setXtcore=function(){g||(window.xtcustom=window.xtcustom||{},window.xtcustom.wbo=j,window.attag=new Xtcore,g=!0)};d.setScriptError=function(){j.info.error.push("noScript");d.setCookieWebo();d.setXtcore()};d.setTimeoutError=
function(){p=!0;g||(j.info.error.push("timeout"),d.setCookieWebo(),d.setXtcore())};d.callback=function(g){p||("string"===typeof g?0!==g.length?d.setDataWebo(g):j.info.message="noAction":j.info.error.push("codeError"),d.setCookieWebo(),d.setXtcore())}};window.Xtconf.weboAccountId&&(window.ATTagWebo=new ATWebo,ATTagWebo.init(window.Xtconf));
