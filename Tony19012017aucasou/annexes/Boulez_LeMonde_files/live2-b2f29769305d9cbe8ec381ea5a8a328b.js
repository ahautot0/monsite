/**
 * Package www/live2
 * lmd/module/live2/page
 * lmd/module/live2/providers/scribblelive
 * lmd/util/url-tools
 * lmd/ui/sharing
 */

/* -- start module lmd/module/live2/page -- */
define("lmd/module/live2/page",function(require){var $=require("jquery");var postTemplate=require("hoganpower!/partials/element/live2/post.html.mu@www");var popinTemplate=require("hoganpower!/partials/element/live2/popin.html.mu@www");var sliderTemplate=require("hoganpower!/partials/element/live2/slider.html.mu@www");var slideshow=require("lmd/ui/slideshow");var momentFr=require("lib/moment/langs/fr");var md5=require("lib/crypto/core/md5");var urlTools=require("lmd/util/url-tools");var xiti=require("lmd/module/xiti/hit");
var conf=require("lmd/core/conf");require("lib/moment/core/2.0.0/moment");require("lib/jquery/plugin/jquery.spin");moment.lang("fr",momentFr);var twitterScriptLoader=$.getScript("https://platform.twitter.com/widgets.js");var instagramScriptLoader=$.getScript("//platform.instagram.com/fr_FR/embeds.js");var provider=null;var $container=$(".live2-container");var options={$globalScrollElement:$("body"),$toolbar:$(".live-toolbar",$container),$body:$(".live-body",$container),$postsContainer:$(".live-body .posts",
$container),$newPostsContainer:$(".new-posts",$container),$factsContainer:$(".facts-content",$container),$participationButton:$(".live-toolbar .participation-button",$container),$topPageButton:$(".live-toolbar .top-page-button",$container),$liveContentTab:$("[data-content-class=live-content]",$container),$oldPostsContainer:$(".old-posts",$container),$newPostsButton:$(".new-posts-button",$container),$newPostsScroll:$("#js-new-post-scroll",$container),$oldPostsButton:$(".old-posts-button",$container),
$postCommentContainer:$(".post-comment-container",$container)};var commentForm={$container:options.$postCommentContainer,$form:$("form",options.$postCommentContainer),$comment:$("[name=comment]",options.$postCommentContainer),$spinners:$(".spinner",options.$postCommentContainer),$notifications:$(".notification",options.$postCommentContainer),$notificationContainers:$(".notification-container",options.$postCommentContainer),$submitButton:$("button[type=submit]",options.$postCommentContainer),notify:function(notification){commentForm.$notifications.html(notification);
commentForm.$notificationContainers.fadeIn(400).delay(3E3).fadeOut(400)},onCommentSent:function(){commentForm.$comment.val("");commentForm.$spinners.unspin();commentForm.notify("Merci, votre contribution a bien \u00e9t\u00e9 envoy\u00e9e !")},onCommentSendingFailed:function(){commentForm.$spinners.unspin();commentForm.notify("Une erreur est survenue, veuillez r\u00e9essayer ult\u00e9rieurement")}};var containerTopPosition=$container.offset().top;var positionToShowScrollButton=options.$postsContainer.position().top+
600;var activeNewPostsScroll=false;var isDiplayNewPostsScroll=false;var refreshDayHeaders;var onSlidePageDisplayed;var showTabContent;var showNewPosts;var addPosts;var addOldPosts;var deletePosts;var createPost;var getpostUrl;var postsDisplayed;var getDayId;var getDisplayedDate;var getPost;var addEvents=function(){$container.on("click",".tab",function(){showTabContent($(this))});if(containerTopPosition===$(window).scrollTop())options.$toolbar.addClass("fixed");else $(window).bind("scroll",function(){if($(window).scrollTop()>=
containerTopPosition)options.$toolbar.addClass("fixed");else options.$toolbar.removeClass("fixed")});options.$participationButton.on("click",function(){xiti.hit(this,"C","","Live::Participer","A");if(commentForm.$container.is(":hidden")){showTabContent(options.$liveContentTab);commentForm.$container.fadeIn()}else options.$globalScrollElement.animate({scrollTop:commentForm.$container.offset().top-options.$toolbar.height()},1E3)});options.$topPageButton.on("click",function(){xiti.hit(this,"C","","Live::Haut_de_Page",
"A");options.$globalScrollElement.animate({scrollTop:0},1E3)});$("body").on("click",$container.selector+" .close-popin",function(){$($(this).data("close-popin-target")).fadeOut(function(){if($(this).data("close-popin-remove"))$(this).remove()})});options.$newPostsButton.on("click",function(){showNewPosts()});options.$newPostsScroll.on("click",function(){options.$globalScrollElement.animate({scrollTop:options.$body.offset().top-50},800);showNewPosts();return false});$(window).on("scroll",function(){if(activeNewPostsScroll)if($(this).scrollTop()>
positionToShowScrollButton&&!isDiplayNewPostsScroll){isDiplayNewPostsScroll=true;options.$newPostsScroll.fadeIn()}else if($(this).scrollTop()<positionToShowScrollButton&&isDiplayNewPostsScroll){isDiplayNewPostsScroll=false;options.$newPostsScroll.fadeOut()}});options.$oldPostsButton.on("click",function(){xiti.hit(this,"C","","Live::Voir_Plus","A");options.$oldPostsContainer.find(".post").fadeIn();options.$oldPostsButton.hide();$(provider).trigger("oldPostsDisplayed")});commentForm.$form.on("submit",
function(e){e.preventDefault();commentForm.$spinners.spin({height:10,spRadius:3,spWidth:2,spLength:4,spLines:10});var dataParsed={comment:e.target.comment.value,pseudonym:e.target.pseudonym.value};$(provider).trigger("postComment",dataParsed)});commentForm.$form.on("keyup",function(e){if($(e.target.form).find(":invalid").length===0)commentForm.$submitButton.removeAttr("disabled");else commentForm.$submitButton.attr("disabled","disabled")})};var refreshTimeElements=$container.get(0).getElementsByClassName("refresh-time");
var fixedTimesRegex=/\u00e0 [0-9]{2}h[0-9]{2}/g;var days=[];var refreshTimes=function(){var displayedDate;var $element;var i=refreshTimeElements.length;while(i){i--;$element=$(refreshTimeElements[i]);displayedDate=getDisplayedDate(moment(new Date($element.data("time"))),$element.hasClass("full-time-format"));$element.html(displayedDate);if(displayedDate.search(fixedTimesRegex)!==-1)$element.removeClass("refresh-time")}refreshDayHeaders();window.setTimeout(refreshTimes,5E3)};refreshDayHeaders=function(){var i=
days.length;while(i){i--;if(days[i]!==getDayId(moment()))$(".post[data-day-id="+days[i]+"]:first",options.$body).addClass("last-post-of-day")}};var onNewPostsAvailable=function(e,posts){var hiddenPostsCounter;addPosts(posts.posts,options.$newPostsContainer);if(options.$newPostsContainer.find(".post:visible").length===0){showNewPosts();return}hiddenPostsCounter=options.$newPostsContainer.find(".main-post:hidden").length;if(hiddenPostsCounter===0){options.$newPostsButton.fadeOut();return}if(hiddenPostsCounter===
1){options.$newPostsButton.html("Voir la nouvelle actualit\u00e9");options.$newPostsScroll.html("Nouveau contenu")}else{options.$newPostsButton.html("Voir les "+hiddenPostsCounter+" nouvelles actualit\u00e9s");options.$newPostsScroll.html("Nouveaux contenus")}options.$newPostsButton.fadeIn();activeNewPostsScroll=true;if($(window).scrollTop()>positionToShowScrollButton)options.$newPostsScroll.fadeIn()};var refreshTweets=function(post){var tweets=post.getElementsByClassName("tweet");var tweetId="";
var i=tweets.length;while(i){i--;tweetId=tweets[i].getAttribute("data-tweet-id");if(tweetId!=="")twttr.widgets.createTweet(tweetId,tweets[i])}};var refreshSliders=function(post){var slideshows=$(post).find(".slider");var i=slideshows.length;var $slideshow;var params;while(i){i--;$slideshow=$(slideshows[i]);params={"$container":$slideshow,"$content":$(".content",$slideshow),"$nav":$("nav",$slideshow),"$navPrev":$(".previous",$slideshow),"$navNext":$(".next",$slideshow),"actifPrevNext":"active","$navDotContainer":null,
"autoSlideOn":0,"numberDisplayBlock":1,infini:true};slideshow().init(params);$slideshow.on("pageDisplayed",onSlidePageDisplayed)}};onSlidePageDisplayed=function(e,data){$(e.currentTarget).find(".counter").text(data.vals.currentPage+" sur "+data.vals.totalPage)};var onOldPostsAvailable=function(e,posts){addOldPosts(posts.posts,options.$oldPostsContainer);options.$oldPostsButton.fadeIn()};var onPostsDeleted=function(e,posts){deletePosts(posts.posts)};var onNewFactsContent=function(e,data){options.$factsContainer.html(data.content)};
var onDisplayCommentForm=function(e,data){if(data.display===0){options.$participationButton.animate({width:"0"});commentForm.$container.animate({height:"0",opacity:0})}else{options.$participationButton.animate({width:"auto"});commentForm.$container.animate({height:"auto",opacity:1})}};showTabContent=function($tab){var $tabs=$container.find(".tab");var i=$tabs.length;while(i){i--;$container.find("."+$($tabs[i]).data("content-class")).hide();$($tabs[i]).removeClass("active")}$container.find("."+$tab.data("content-class")).show();
$tab.addClass("active")};showNewPosts=function(){options.$newPostsContainer.find(".post").fadeIn();options.$newPostsButton[0].style.display="none";activeNewPostsScroll=false;isDiplayNewPostsScroll=false;options.$newPostsScroll[0].style.display="none"};addPosts=function(posts,$container){var newDisplayedPosts=[];var displayedPosts=[];var $post;var $newPost;var i=posts.length;while(i){i--;$post=getPost(posts[i].id);if($post===null){$post=createPost(posts[i]);$post.hide();displayedPosts.unshift($post);
newDisplayedPosts.unshift($post)}else{$newPost=createPost(posts[i]);if($post.data("hash")!==$newPost.data("hash")){$post.html($newPost.html());displayedPosts.unshift($post)}}}$container.prepend(newDisplayedPosts);postsDisplayed(displayedPosts)};addOldPosts=function(posts,$container){var displayedPosts=[];var $post;var i=0;var postsLength=posts.length;var postCreated=false;for(;i<postsLength;i++)if(getPost(posts[i].id)===null){postCreated=true;$post=createPost(posts[i]);$post.hide();displayedPosts.push($post)}if(!postCreated)$(provider).trigger("oldPostsDisplayed");
else{$container.append(displayedPosts);postsDisplayed(displayedPosts)}};deletePosts=function(posts){var $post;var i=posts.length;while(i){i--;$post=getPost(posts[i].id);if($post!==null)$post.remove()}};createPost=function(post){post.time=post.createdAt.getTime();var momentDate=moment(post.createdAt);if(!post.hasOwnProperty("fullTimeFormat"))post.fullTimeFormat=false;if(!post.hasOwnProperty("mainPost"))post.mainPost=true;post.date=getDisplayedDate(momentDate,post.fullTimeFormat);post.day={id:getDayId(momentDate),
content:momentDate.format("dddd D MMMM")};if(days.indexOf(post.day.id)===-1)days.push(post.day.id);post.content=post.content.replace(/^(?:\s|<br ?\/?>)*|(?:\s|<br ?\/?>)*$/g,"");post.hash=md5(JSON.stringify(post));post.url=getpostUrl(post.id);return $(postTemplate.render(post))};getpostUrl=function(id){var param;var queryString=window.location.search;if(queryString!==""){if(queryString.charAt(0)==="?")queryString=queryString.substring(1);param=urlTools.parseQueryString(queryString)}else param={};
param.highlight=id;return"http://"+conf.www.location.hostname+window.location.pathname+"?"+$.param(param)};postsDisplayed=function(posts){twitterScriptLoader.done(function(){var i=posts.length;while(i){i--;refreshTweets(posts[i][0])}});instagramScriptLoader.done(function(){window.instgrm.Embeds.process()});var i=posts.length;while(i){i--;refreshSliders(posts[i][0])}refreshDayHeaders()};getDayId=function(momentDate){return parseInt(momentDate.format("YYYYMMDD"))};getDisplayedDate=function(momentDate,
fullTimeFormat){if(moment().diff(momentDate,"minutes")>=44){var prefix="";if(fullTimeFormat===true)prefix="le "+momentDate.format("D MMMM ");return prefix+"\u00e0 "+momentDate.format("HH")+"h"+momentDate.format("mm")}else return momentDate.fromNow()};getPost=function(id){var $post=options.$postsContainer.find(".post-"+id);if($post.length)return $post;else return null};var highlightPost=function(id){var $post;var $popin;provider.getPostData(id).done(function(){if(this.post){this.post.fullTimeFormat=
true;$post=createPost(this.post);$popin=$(popinTemplate.render());$popin.find(".content").append($post);$popin.find(".live-title").append($("body").find(".live-toolbar .live-title").html());$("body").append($popin);postsDisplayed([$post])}})};return{start:function(providerInstance,id){var urlParams;var labels=null;provider=providerInstance;options.$newPostsScroll.css("margin-left",options.$postsContainer.width()/2);addEvents();$(this).on("newPostsAvailable",onNewPostsAvailable);$(this).on("oldPostsAvailable",
onOldPostsAvailable);$(this).on("postsDeleted",onPostsDeleted);$(this).on("newFactsContent",onNewFactsContent);$(this).on("displayCommentForm",onDisplayCommentForm);$(this).on("commentSent",commentForm.onCommentSent);$(this).on("commentSendingFailed",commentForm.onCommentSendingFailed);urlParams=urlTools.parseQueryString(document.location.search.substr(1));if(urlParams.highlight)highlightPost(urlParams.highlight);if(urlParams.labels)labels=decodeURIComponent(urlParams.labels).split(",");provider.pageInitialization(this,
id,labels);if(options.$factsContainer.html()!=="")provider.refreshFactsContent();refreshTimes()},getTweetContent:function(id){return'<div class="tweet" data-tweet-id="'+id+'"></div>'},getInstagramPostContent:function(id){return'<div class="instagram">'+'<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="4">'+'<a href="https://instagram.com/p/'+id+'/"></a>'+"</blockquote></div>"},getCommentContent:function(pseudo,date,content,sameDay){var param={type:"html",mainPost:false,
createdAt:date,author:{name:pseudo,avatar:null},content:content};if(!sameDay)param.fullTimeFormat=true;return createPost(param)},getSliderContent:function(slides){return sliderTemplate.render({slides:slides})}}});

/* -- end module lmd/module/live2/page -- */
/* -- start module lmd/module/live2/providers/scribblelive -- */
define("lmd/module/live2/providers/scribblelive",function(require){var $=require("jquery");var conf=require("lmd/core/conf");require("lib/moment/core/2.0.0/moment");var page=null;var id="";var oldestCreatedAt;var lastModified=null;var currentPage=null;var labels=null;var liveArticle={id:null,revisionId:null,refreshRate:conf.live2Scribblelive.factsRefreshDelay*1E3};var isCommenting=null;var isOpen=true;var options={ajaxDefaultParameters:{token:conf.live2Scribblelive.token,format:"json",pageSize:conf.live2Scribblelive.pageSize},postsRefreshRate:conf.live2Scribblelive.postsRefreshDelay*
1E3};var getRecentData=function(){var url="";var data=options.ajaxDefaultParameters;var posts;if(lastModified===null)url=conf.live2Scribblelive.endpoint+"/event/"+id+"/page/"+(currentPage===null?"last":currentPage-1);else{url=conf.live2Scribblelive.endpoint+"/event/"+id+"/posts/";data.since=moment(lastModified).utc().format("YYYY/M/D H:m:ss")}$.getJSON(url,data,function(data){if(data.IsCommenting!==undefined&&isCommenting!==data.IsCommenting){isCommenting=data.IsCommenting;$(page).trigger("displayCommentForm",
{display:isCommenting})}if(data.IsLive!==undefined){isOpen=data.IsLive===1;if(!isOpen&&refreshLiveArticleContentTimeoutId)window.clearTimeout(refreshLiveArticleContentTimeoutId)}if(currentPage===null)currentPage=data.Pages-1;else currentPage--;posts=parseJson(data);if(posts.adds.length<=0&&currentPage>0)getRecentData();else{lastModified=parseDate(data.LastModified);lastModified.setSeconds(lastModified.getSeconds()+1);var i=posts.adds.length;while(i){i--;if(posts.adds[i].createdAt<oldestCreatedAt)posts.adds.splice(i,
1)}if(posts.adds.length>0){$(page).trigger("newPostsAvailable",{posts:posts.adds});if(oldestCreatedAt===null)oldestCreatedAt=posts.adds[posts.adds.length-1].createdAt}getOldData()}if(posts.deletes.length>0)$(page).trigger("postsDeleted",{posts:posts.deletes})}).always(function(){if(isOpen)window.setTimeout(getRecentData,options.postsRefreshRate)})};var getOldData=function(){if(currentPage>0){var url=conf.live2Scribblelive.endpoint+"/event/"+id+"/page/"+(currentPage-1);$.getJSON(url,options.ajaxDefaultParameters,
function(data){currentPage--;var posts=parseJson(data);if(posts.adds.length>0){$(page).trigger("oldPostsAvailable",{posts:posts.adds});oldestCreatedAt=posts.adds[posts.adds.length-1].createdAt}else getOldData()})}};var hasRightLabel=function(post){if(labels===null)return true;if(!post.tags)return false;var i;var j=labels.length;while(j){i=post.tags.length;j--;while(i){i--;if(post.tags[i].name.toUpperCase()===labels[j].toUpperCase())return true}}return false};var getPostData=function(id){return $.getJSON(conf.live2Scribblelive.endpoint+
"/post/"+id+"/",options.ajaxDefaultParameters,function(data){this.post=transformPost(data)})};var refreshLiveArticle=function(){var url=conf.live2Scribblelive.endpoint+"/event/"+id;return $.getJSON(url,options.ajaxDefaultParameters,function(data){if(data.LiveArticle&&liveArticle.id!==data.LiveArticle)liveArticle.id=data.LiveArticle;if(liveArticle.id!==null)refreshLiveArticleContent()})};var refreshLiveArticleContentTimeoutId;var refreshLiveArticleContent=function(){var url=conf.live2Scribblelive.endpoint+
"/article/"+liveArticle.id+"/revision/published/latest";var emptyLiveArticle=false;return $.getJSON(url,options.ajaxDefaultParameters,function(data){if(data.Id&&data.Html){emptyLiveArticle=data.Html.replace(htmlTagsRegex,"")==="";if(liveArticle.revisionId!==data.Id&&(liveArticle.revisionId!==null||!emptyLiveArticle)){liveArticle.revisionId=data.Id;$(page).trigger("newFactsContent",{content:data.Html})}}if(!emptyLiveArticle&&isOpen)refreshLiveArticleContentTimeoutId=window.setTimeout(refreshLiveArticleContent,
liveArticle.refreshRate)})};var parseDate=function(string){var regex=/^\/Date\(([0-9]{13}\+[0-9]{4})\)\/$/g;var matches=regex.exec(string);if(matches!==null)return new Date(parseInt(matches[1]));else return null};var parseJson=function(data){var ret={adds:[],deletes:[]};if(data.Posts)ret.adds=parsePosts(data.Posts);if(data.Edits)ret.adds=$.merge(ret.adds,parsePosts(data.Edits));if(data.Deletes)ret.deletes=parsePosts(data.Deletes);ret.adds.sort(function(a,b){return b.createdAt-a.createdAt});return ret};
var parsePosts=function(posts){var ret=[];var post;var i=posts.length;while(i){i--;post=transformPost(posts[i]);if(post!==null&&hasRightLabel(post))ret[ret.length]=post}return ret};var htmlTagsRegex=/(<([^>]+)>)/ig;var tweetIdRegex=/https?:\/\/twitter\.com\/[^/]+\/status\/(\d+)/mi;var instagramPostIdRegex=/https?:\/\/instagram\.com\/p\/([^/"']+)/mi;var commentBlockquoteRegex=/(?:<span[^>]*>(.*)<\/span><span[^>]*>.*<span[^>]*>(.*)<\/span>.*<span[^>]*>[^ ]* (.*)<\/span><\/span>|<span[^>]*>(.*)<img.*<em>(.*)<\/em><span[^>]*>(.*)<\/span><\/span>)/mi;
var aTagRegex=/<a /mgi;var transformPost=function(post){var data={id:post.Id,type:post.Source.replace(htmlTagsRegex,"").toLowerCase(),createdAt:parseDate(post.Created),author:{name:post.Creator.Name,avatar:post.Creator.Avatar},content:post.Content};if(post.Icons){var i=post.Icons.length;data.tags=[];var tagName;while(i){i--;if(post.Icons[i].Name&&post.Icons[i].TextColor){tagName=post.Icons[i].Name;if(tagName==="URGENT")data.isUrgent=true;else data.tags[data.tags.length]={name:tagName,color:post.Icons[i].TextColor}}}}if(data.type===
"")data.type=post.Type.toLowerCase();var matches;if(data.type==="twitter"){matches=tweetIdRegex.exec(post.Source);if(matches&&matches[1])data.content=page.getTweetContent(matches[1])}else if(data.type==="instagram"){matches=instagramPostIdRegex.exec(post.Source);if(matches&&matches[1])data.content=page.getInstagramPostContent(matches[1])}else if(data.type==="image"){if(post.Media&&post.Media.length>0)data.content=getMediaContainerFromMediaNode(post.Media,post.Content)}else{data.content=replaceContainerContents(data.content,
"blockquote",commentBlockquoteRegex,getCommentBlockquoteContent,{postDate:data.createdAt});data.content=replaceContainerContents(data.content,".sltc-twitter",tweetIdRegex,getTweetContent);data.content=replaceContainerContents(data.content,".Media",instagramPostIdRegex,getInstagramPostContent);if(data.content.indexOf("<iframe ")===0)data.content='<div class="Media">'+data.content+"</div>";if(post.Media&&post.Media.length>0)data.content+=getMediaContainerFromMediaNode(post.Media);data.content=replaceSliders(data.content);
data.content=data.content.replace(aTagRegex,'<a target="_blank" ')}return data};var replaceContainerContents=function(string,selector,idRegex,getContent,options){var $content=$("<div>"+string+"</div>");var $posts=$content.find(selector);var matches;var newContent;var i=$posts.length;while(i){i--;matches=idRegex.exec($posts[i].innerHTML);if(matches){newContent=getContent(matches,options);if(newContent!==false)$($posts[i]).replaceWith(newContent)}}return $content.html()};var getTweetContent=function(eggs){return page.getTweetContent(eggs[1])};
var getInstagramPostContent=function(eggs){return page.getInstagramPostContent(eggs[1])};var commentBlockquoteDayRegex=/^(\d{1,2}) (\w+) \u00e0 (\d{1,2}) h (\d{1,2}) $/;var commentBlockquoteFullDayRegex=/^(?:\w+) (\d{1,2}) (\w+) (\d{4}) \u00e0 (\d{1,2}):(\d{1,2})$/;var commentBlockquoteTimeRegex=/^\u00e0? ?(\d{1,2}):(\d{1,2})$/;var getCommentBlockquoteContent=function(eggs,options){var commentDate;var matches=commentBlockquoteDayRegex.exec(eggs[3]);if(matches){commentDate=new Date(options.postDate.getFullYear(),
moment(matches[2],"MMMM").format("M")-1,matches[1],matches[3],matches[4],0,0);if(commentDate.getTime()>options.postDate.getTime())commentDate.setYear(commentDate.getYear()-1)}else{matches=commentBlockquoteTimeRegex.exec(eggs[3]);if(matches){commentDate=new Date(options.postDate);commentDate.setHours(matches[1]);commentDate.setMinutes(matches[2]);if(commentDate.getTime()>options.postDate.getTime())commentDate.setDate(commentDate.getDate()-1)}}if(commentDate)return page.getCommentContent(eggs[2],commentDate,
eggs[1],options.postDate.toDateString()===commentDate.toDateString());else{matches=commentBlockquoteFullDayRegex.exec(eggs[6]);if(matches){commentDate=new Date(matches[3],moment(matches[2],"MMMM").format("M")-1,matches[1],matches[4],matches[5],0,0);return page.getCommentContent(eggs[5],commentDate,eggs[4],options.postDate.toDateString()===commentDate.toDateString())}else return false}};var getMediaContainerFromMediaNode=function(data,legend){var html="";var i=data.length;if(i>0){html='<div class="Media">';
while(i){i--;if(data[i].Url&&data[i].Type&&data[i].Type==="IMAGE")html+='<img src="'+data[i].Url+'" />'}if(legend)html+='<div class="Caption">'+legend+"</div>";html+="</div>"}return html};var styleAttributeRegex=/style="[^"]*"/mgi;var replaceSliders=function(content){var $content=$("<div>"+content+"</div>");var sliders=$content.find(".SL_SlideShow");var i=sliders.length;var slides;while(i){i--;slides=[];$(sliders[i]).find(".MediaWrap").each(function(idx,el){slides.push(el.innerHTML.replace(styleAttributeRegex,
""))});$(sliders[i]).replaceWith(page.getSliderContent(slides))}return $content.html()};var onPostComment=function(userData){var data={UserName:userData.pseudonym,Content:userData.comment,Token:conf.live2Scribblelive.token,format:"json"};$.getJSON(conf.live2Scribblelive.endpoint+"/event/"+id,data,function(data){if(data.Code===200)$(page).trigger("commentSent");else $(page).trigger("commentSendingFailed")}).fail(function(){$(page).trigger("commentSendingFailed")})};return{pageInitialization:function(pageInstance,
scribbleliveId,filterLabels){id=scribbleliveId;page=pageInstance;labels=filterLabels;$.getScript("http://embed.scribblelive.com/modules/lib/addons.js?id="+scribbleliveId);getRecentData();$(this).on("oldPostsDisplayed",getOldData);$(this).on("postComment",function(e,data){onPostComment(data)})},refreshFactsContent:refreshLiveArticle,getPostData:getPostData}});

/* -- end module lmd/module/live2/providers/scribblelive -- */
/* -- start module lmd/util/url-tools -- */
define("lmd/util/url-tools",{toUrlFriendly:function(str){str=str.toLowerCase();str=this.clean(str);var tmpStr="";var tmp="";var intLen=str.length;for(var i=0;i<intLen;i++){var c=str.charCodeAt(i);if(c<48||c>122||c>57&&c<97)tmp="-";else tmp=str.charAt(i);tmpStr+=tmp}tmpStr=tmpStr.replace(/\-+/g,"-");return tmpStr},parseQueryString:function(query){var tab=query.split("&");var tabIn=null;var tabResult={};for(var ct=0;ct<tab.length;ct++){tabIn=tab[ct].split("=");if(tabIn.length>1)tabResult[tabIn[0]]=tabIn[1];else tabResult[tabIn[0]]=
null}return tabResult},clean:function(str){str=str.replace(/\xE0/g,"a");str=str.replace(/\xE1/g,"a");str=str.replace(/\xE2/g,"a");str=str.replace(/\xE3/g,"a");str=str.replace(/\xE4/g,"a");str=str.replace(/\xE5/g,"a");str=str.replace(/\xE6/g,"a");str=str.replace(/\xE7/g,"c");str=str.replace(/\xE8/g,"e");str=str.replace(/\xE9/g,"e");str=str.replace(/\xEA/g,"e");str=str.replace(/\xEB/g,"e");str=str.replace(/\xEC/g,"i");str=str.replace(/\xED/g,"i");str=str.replace(/\xEE/g,"i");str=str.replace(/\xEF/g,
"i");str=str.replace(/\xF0/g,"o");str=str.replace(/\xF2/g,"o");str=str.replace(/\xF3/g,"o");str=str.replace(/\xF4/g,"o");str=str.replace(/\xF5/g,"o");str=str.replace(/\xF6/g,"o");str=str.replace(/\xF1/g,"n");str=str.replace(/\xF9/g,"u");str=str.replace(/\xFA/g,"u");str=str.replace(/\xFB/g,"u");str=str.replace(/\xFC/g,"u");str=str.replace(/\xFD/g,"y");str=str.replace(/\xFF/g,"y");return str},normalize:function(str){str=this.clean(str);str=str.replace(/[^a-zA-Z0-9]/g,"_");return str}});

/* -- end module lmd/util/url-tools -- */
/* -- start module lmd/ui/sharing -- */
define("lmd/ui/sharing",function(require){var $=require("jquery");var conf=require("lmd/core/conf");var context=require("lmd/core/context");var objectPath=require("lib/object-path");var xiti=require("lmd/module/xiti/hit");require("lib/jquery/plugin/jquery.spin");var facebook=require("lmd/core/social/facebook");function Sharing(element){this.$el=$(element)}Sharing.prototype.xtClick=function(elmt,name,type){var label=elmt.getAttribute("data-xiti-label");if(!label){var titre=objectPath.get(context,"item.titre");if(!titre)return;
label="Partage::"+name+"::"+titre}if(typeof type==="undefined")type="A";xiti.hit(elmt,"C","",label,type);return false};Sharing.prototype.getPageUrl=function(xtor,urlencode){var hostname=conf.www.location.hostname;var url="http://"+hostname+context.page.link;if(typeof xtor==="string"&&xtor!=="")url+="#xtor="+xtor;if(typeof urlencode==="boolean")if(urlencode===false)return url;return encodeURI(url)};Sharing.prototype.openPopupShare=function(url,params){var width=typeof params.width!=="undefined"?params.width:
650;var height=typeof params.height!=="undefined"?params.height:430;var left=($(window).width()-width)/2;var top=($(window).height()-height)/2;var paramsOpen="width="+width+",height="+height+",top="+top+",left="+left;paramsOpen+=",location=no,resizable=yes,status=no,titlebar=no,toolbar=no";window.open(url,"toolbar_share_popup",paramsOpen)};Sharing.prototype.getSpecificUrl=function($el,xtor,encodeUrl){var $refElement;var url;$refElement=$($el.data("sharing-target"));if($refElement&&$refElement!==undefined){url=
$refElement.data("sharing-url");if(url&&url!==undefined){if(typeof xtor==="string"&&xtor!=="")url+="#xtor="+xtor;return encodeUrl?encodeURIComponent(url):url}}return null};Sharing.prototype.init=function(){var self=this;var media=$('meta[property="og:image"]').attr("content");this.$el.on("click","[data-sharewith=facebook]",function(event){event.preventDefault();self.xtClick(event.currentTarget,"Facebook");var link=self.getSpecificUrl($(event.currentTarget),"",false);if(link===null)link=self.getPageUrl("",
false);facebook.load().done(function(){FB.ui({method:"feed",link:link,picture:media})})});this.$el.on("click","[data-sharewith=twitter]",function(event){event.preventDefault();self.xtClick(event.currentTarget,"Twitter");var link=self.getSpecificUrl($(event.currentTarget),"AL-32280258",true);if(link===null)link=self.getPageUrl("AL-32280258",true);var baseUrl="http://twitter.com/share?related=lemondefr&via=lemondefr&lang=fr&text=";var text=$("<div />").html(context.item.titre).text();var url=baseUrl+
encodeURIComponent(text)+"&url="+link;self.openPopupShare(url,{width:550,height:443})});this.$el.on("click","[data-sharewith=linkedin]",function(event){self.xtClick(event.currentTarget,"Linkedin");var link=self.getPageUrl("AL-32280506",true);var baseUrl="http://www.linkedin.com/shareArticle?mini=true&url=";var url=baseUrl+link+"&title="+encodeURIComponent(context.item.titre)+"&source=LeMonde.fr";self.openPopupShare(url,{width:550,height:590})});this.$el.on("click","[data-sharewith=google-plus]",function(event){self.xtClick(event.currentTarget,
"Google+");var url="https://plus.google.com/share?hl=fr&url="+self.getPageUrl("",true);self.openPopupShare(url,{width:600,height:855})});this.$el.on("click","[data-sharewith=pinterest]",function(event){self.xtClick(event.currentTarget,"Pinterest");var link=self.getPageUrl("",true);var baseUrl="https://www.pinterest.com/pin/create/button/?url=";var url=baseUrl+link+"&description="+encodeURIComponent(context.item.titre);if(typeof media!=="undefined"&&media!==null)url=url+"&media="+media;self.openPopupShare(url,
{width:750,height:330})});this.$el.on("click","[data-sharewith=link]",function(event){event.preventDefault();self.xtClick(event.currentTarget,"Lien");var $currentTarget=$(event.currentTarget);if($currentTarget.find(".link-sharing-popin").length===0){var link=self.getSpecificUrl($currentTarget,"",false);if(link===null)link=self.getPageUrl("",false);var popinTemplate=require("hoganpower!/partials/social/link-sharing-popin.html.mu@www");var $popin=$(popinTemplate.render({link:link}));$popin.mouseleave(function(e){$(e.currentTarget).remove()});
$(event.currentTarget).append($popin);$popin.find("input").focus().select()}})};return{init:function(selector){$(selector).each(function(){if(typeof $(this).data("lmd-sharing")==="undefined"){var module=new Sharing(this);module.init();$(this).data("lmd-sharing",true)}})},formatCounter:function(counter){var suffix="";if(counter>=1E5){counter=Math.floor(counter/1E3);suffix="k"}if(counter>=1E3)counter=Math.floor(counter/1E3)+" "+counter.toString().substr(-3);return counter+suffix},getFacebookLikes:function(){var deferred=
$.Deferred();$.ajax({url:"http://graph.facebook.com",dataType:"json",data:{id:Sharing.prototype.getPageUrl()},timeout:2E3,success:function(data){if(data.shares!==undefined)deferred.resolve(data.shares);else deferred.resolve(0)},error:function(){deferred.resolve(0)}});return deferred}}});

/* -- end module lmd/ui/sharing -- */