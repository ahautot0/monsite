(function(w){var location=w.location;var newHostname;var xtSearch;var xtorRegex=/[\?#&]xtor=[a-zA-Z0-9-]+/g;var queryStart=/\?/g;if(w.screen.width>699||location.host.indexOf("mobile")!==-1||document.cookie.indexOf("no_mobile=")!==-1||location.href.indexOf("abonnement")!==-1||location.href.indexOf("account")!==-1||!/(?:www|abonnes)\.lemonde/.test(location.host)||location.hash.indexOf("no_mobile")!==-1)return;newHostname=location.hostname.indexOf("abonnes")!==-1?location.hostname.replace("abonnes",
"abonnes.mobile"):location.hostname.replace("www","mobile");if(newHostname!==location.hostname){xtSearch=buildQueryString(location);location.href=[location.protocol,"//",newHostname,location.pathname,xtSearch.search,xtSearch.hashKey].join("")}function buildQueryString(loc){var searchEls=[];var xtReferrer=decodeURIComponent(document.referrer)||"acc_dir";var xtorNoise=document.referrer.match(xtorRegex)||"";var xtors=loc.search.match(xtorRegex)||[];var anXtor="";var cleanSearch="";var key="";var candidateKey=
null;if(document.referrer){if(candidateKey=document.referrer.match(/[\?#&]clef=[a-zA-Z0-9_]+/g))key=candidateKey[0].replace(/\?/g,"#");if(xtReferrer.search(/^http[s]{0,1}:\/\/(?:www|abonnes)\.lemonde(?:\-)(?:dev|prodtest).fr/)!==-1)xtReferrer=xtReferrer.replace(/[<>]/g,"").replace(/&/g,"$").replace(queryStart,"$");else if(xtReferrer=xtReferrer.match("^[^?]+"))xtReferrer=xtReferrer[0]}searchEls.push("xtref="+xtReferrer);while(xtorNoise.length){anXtor=xtorNoise.pop();xtReferrer=xtReferrer.replace(anXtor,
"")}if(xtors.length){anXtor=xtors[xtors.length-1];searchEls.push(anXtor.substring(1,anXtor.length))}if(loc.search){cleanSearch=loc.search.replace(queryStart,"&").replace(xtorRegex,"").substring(1,loc.search.length);if(cleanSearch)searchEls.push(cleanSearch)}return{search:"?"+searchEls.join("&"),hashKey:key}}})(window);
