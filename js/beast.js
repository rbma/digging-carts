(function(){$(function(){var e,a,t,i,r,n,d,o,s,l,c,u,p,f,h,v,m,y,g,b,w,I,C,E,V,k,D,M,B,T,x,L,S,j,A,P,R,O,K,Y,G,N,_,z,F;return p={},F={},V={},o={},E={},T={},I=0,f=new Showdown.converter,B={},e={},k={},z=640/360,N={},S="",h="",u=0,s=[],C=!1,x={},L={spanish:"ref:MI201408250036",german:"ref:MI201408250036",french:"ref:MI201408250036",polish:"ref:MI201408250036",italian:"ref:MI201408250036",japanese:"ref:MI201408250036",brazilian:"ref:MI201408250036",turkish:"ref:MI201408250036","default":"3747000906001"},w=function(){return K(),r(),$(".video-nav ul a.episode li").first().addClass("active"),$(".story-nav ul a.additional-episode li").first().addClass("active"),O(b())},j=function(e){return I+=e,6===I?(A(),w(),I=0):void 0},y=function(){return $.ajax("http://freegeoip.net/json/",{type:"GET",dataType:"json",error:function(e,a,t){return console.log(""+a),h="default",g()},success:function(e,a,i){return h=e.country_name,console.log("Country: "+h),h=h.toLowerCase(),g(),t(e.country_name)}})},t=function(e){switch(e=e.toLowerCase()){case"germany":return _(L.german,e);case"austria":return _(L.german,e);case"spain":return _(L.spanish,e);case"mexico":return _(L.spanish,e);case"argentina":return _(L.spanish,e);case"colombia":return _(L.spanish,e);case"chile":return _(L.spanish,e);case"japan":return _(L.japanese,e);case"poland":return _(L.polish,e);case"turkey":return _(L.turkish,e);case"italy":return _(L.italian,e);case"france":return _(L.french,e);case"brazil":return _(L.brazilian,e);default:return _(L["default"])}},_=function(e,a){return x={playerID:"1684512102001",playerKey:"AQ~~%2CAAABTw4lHzE~%2Csr1E9bdX6d4wCdvdlD8QKdNij3uKs2K9",width:$(window).width()/1.5,height:$(window).width()/1.5/z,videoID:""+e},S='<div style="display:none"></div><object id="myExperience" class="BrightcoveExperience"><param name="bgcolor" value="#FFFFFF" /><param name="width" value="{{width}}" /><param name="height" value="{{height}}" /><param name="playerID" value="{{playerID}}" /><param name="playerKey" value="{{playerKey}}" /><param name="isSlim" value="true" /><param name="autoStart" value="false" /><param name="isVid" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" /><param name="@videoPlayer" value="{{videoID}}"; /><param name="includeAPI" value="true" /><param name="templateLoadHandler" value="onTemplateLoad" /><param name="templateReadyHandler" value="onTemplateReady" /></object>',h=a.toLowerCase(),w()},O=function(e){var a,t;return a={height:e},t=JSON.stringify(a),window.parent.postMessage(t,"*")},b=function(){return $(document.body).height()},window.onTemplateLoad=function(a){return B=brightcove.api.getExperience(a),e=brightcove.api.modules.APIModules,k=B.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER)},window.onTemplateReady=function(e){return P($("#myExperience")),k.addEventListener(brightcove.api.events.MediaEvent.BEGIN,D),k.addEventListener(brightcove.api.events.MediaEvent.CHANGE,D),k.addEventListener(brightcove.api.events.MediaEvent.COMPLETE,D),k.addEventListener(brightcove.api.events.MediaEvent.ERROR,D),k.addEventListener(brightcove.api.events.MediaEvent.PLAY,D),k.addEventListener(brightcove.api.events.MediaEvent.STOP,D),O(b())},G=function(e){return k.getCurrentVideo(v)},v=function(e,a){switch(h){case"germany":k.loadVideoByID(N.fields.brightcoveVideoIdGerman);break;case"austria":k.loadVideoByID(N.fields.brightcoveVideoIdGerman);break;case"france":k.loadVideoByID(N.fields.brightcoveVideoIdFrench);break;case"japan":k.loadVideoByID(N.fields.brightcoveVideoIdJapanese);break;case"turkey":k.loadVideoByID(N.fields.brightcoveVideoIdTurkish);break;case"brazil":k.loadVideoByID(N.fields.brightVideoIdBrazil);break;case"italy":k.loadVideoByID(N.fields.brightcoveVideoIdItalian);break;case"spain":k.loadVideoByID(N.fields.brightcoveVideoIdSpanish);break;case"mexico":k.loadVideoByID(N.fields.brightcoveVideoIdSpanish);break;case"argentina":k.loadVideoByID(N.fields.brightcoveVideoIdSpanish);break;case"colombia":k.loadVideoByID(N.fields.brightcoveVideoIdSpanish);break;case"chile":k.loadVideoByID(N.fields.brightcoveVideoIdSpanish);break;default:k.loadVideoByID(N.fields.brightcoveVideoId)}return $(".videos h1").empty().text(N.fields.episodeTitle)},D=function(e){},P=function(e){var a,t,i,r,n,d,o,s,l,c,u;return l=e,n=l.attr("width"),r=l.attr("height"),u=$(window).width(),d=n/r,C?void(l.attr("src")&&(s=l.attr("src"),o=/width=([\d\.]*).*height=([\d\.]*)/,i=s.replace(o,""),l.attr("src",i))):(c=u/1.6,l.attr("width",c),l.attr("height",c/d),a=u-c,t=a/2,l.css({marginLeft:t,marginRight:t,opacity:1}))},r=function(){var e,a;return a=Handlebars.compile(S),e=a(x),document.getElementById("player").innerHTML=e,brightcove.createExperiences()},Y=function(){var e,a;return a=document.createElement("script"),a.src="https://www.youtube.com/iframe_api",e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(a,e)},window.onYouTubeIframeAPIReady=function(){return T=new YT.Player("storyplayer",{height:"39",width:"64",videoId:"VsbG4pXrhr8",events:{onReady:M},playerVars:{modestbranding:!0,controls:1,showinfo:0,hd:1,origin:"http://www.redbullmusicacademy.com"}})},M=function(e){return R("#storyplayer")},K=function(){return window.addEventListener("resize",function(){return R($("#myExperience")),R($("#storyplayer"))}),$("a.arrow-right").click(function(e){var a,t,i,r,n;return e.preventDefault(),a=$(".composers-wrap"),n=a.find(".slide").length,i=a.find(".active"),t=i.data("order"),n-2>=t?(r=a.find("[data-order="+(t+1)+"]"),i.removeClass("active"),r.addClass("active")):(r=a.find("[data-order=0]"),i.removeClass("active"),r.addClass("active"))}),$("a.arrow-left").click(function(e){var a,t,i,r,n;return e.preventDefault(),a=$(".composers-wrap"),n=a.find(".slide").length,i=a.find(".active"),t=i.data("order"),t>=1?(r=a.find("[data-order="+(t-1)+"]"),i.removeClass("active"),r.addClass("active")):(r=a.find("[data-order="+(n-1)+"]"),i.removeClass("active"),r.addClass("active"))}),$("a.pulldown").click(function(e){return e.preventDefault(),$(this).parent().find("ul").slideToggle(200,function(){return O(b())})}),$("a.episode").click(function(e){return $(this).children("li").hasClass("unreleased")?void 0:G()})},c=function(e,a,t){var i;return i=t[a].fields,e.find("li").hasClass("unreleased")?void $(".videos h1").empty().text(i.episodeTitle):(player1.cueVideoById(i.ytVideoId),$(".videos h1").empty().text(i.episodeTitle))},l=function(e,a){var t;return t=a[e].fields,T.cueVideoById(t.additionalYouTube),$(".stories h1").empty().text(t.additionalVideoTitle),$(".stories p.body").empty().text("japan"===h?t.japaneseDescription:t.description),$(".stories p.body").slideDown()},d=function(e,a,t){var i,r,n,d,o,s,l,c,u,p,f;if("main"===t){for(p=[],d=s=0,c=e.length;c>s;d=++s)o=e[d],r=o.fields.episodeNumber,i=new Date,n=new Date("japan"===h?o.fields.datetimeOfLaunchJapan:o.fields.datetimeOfLaunch),a.append(moment()<n?"<a class='episode' href data-order="+d+"><li class='unreleased' data-release='"+n+"'>"+r+"</li>":"<a class='episode' href data-order="+d+"><li class='released'>"+r+"</li>"),p.push(a.find("li").each(function(){var e,a,t,i;return i=$(this),i.hasClass("unreleased")?(a=i.text(),t=i.data("release"),e=new Date(t),i.bind("mouseenter",function(){return i.empty().text(moment(t).format("ddd, MMM Do"))}),i.bind("mouseleave",function(){})):void 0}));return p}if("additional"===t){for(f=[],d=l=0,u=e.length;u>l;d=++l)o=e[d],r=o.fields.additionalVideoTitle,f.push(a.append("<a class='additional-episode' href data-order="+d+"><li>"+r+"</li>"));return f}},a=function(e){var a,t,i,r,n,d,o,s,l,c;for(c=[],i=s=0,l=e.length;l>s;i=++s)a=e[i],d=a.fields,n=d.composerName,r=d.image.fields.file.url,o=f.makeHtml("japan"===h?d.japaneseBio?d.japaneseBio:d.bio:d.bio),t="<div class='slide' data-order='"+i+"'><div class='img-wrap'><a class='arrow-left' href></a><a class='arrow-right' href></a><img src='"+r+"'/></div><h2>"+d.composerName+"</h2><p>"+o+"</p></div>",$(".composers-wrap").append(t),c.push($(".slide").first().addClass("active"));return c},i=function(e){var a,t,i,r,n,d,o,s,l,c;for(c=[],s=0,l=e.length;l>s;s++)r=e[s],d=r.fields,o=d.artistName,i=d.artistImage.fields.file.url,a=d.descriptions?d.descriptions:"",t=d.rbmaRadioEmbedCode?d.rbmaRadioEmbedCode:"",n="<div class='show'><img src='"+i+"'/>"+t+"<p>"+a+"</p></div>",c.push($(".radio").append(n));return c},R=function(e){var a,t,i,r,n,d,o;return B=$(e),o=$(window).width(),d=o/1.6,r=B.attr("width"),i=B.attr("height"),n=r/i,C&&(d=o/1.4),B.attr("width",d),B.attr("height",d/n),a=o-d,t=a/2,B.css({marginLeft:t,display:"block"}),O(b())},A=function(){return $(".spinner").fadeOut(function(){return $(".spinner").remove()})},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?C=!0:void 0},n=function(e){var a,t,i,r;return i=$(".twitter-share"),t=$(".facebook-share"),r=e.twitterShareText,a=e.facebookShareText,i.attr("href","http://twitter.com/intent/tweet?text="+r+"&related=rbma"),t.attr("href","https://www.facebook.com/sharer/sharer.php?u=http://www.redbullmusicacademy.com/magazine/diggin-in-the-carts&amp;t="+a)},g=function(){var e;return e=contentful.createClient({accessToken:"38b8dbaf503a350d5722578c6547caca484511f7c78717736ac8f576832be4b0",space:"s9bc5ah7p1d5"}),e.entries({content_type:"42CpXYSUms44OskS6wUU6I",include:1}).done(function(e){return a(e),j(1)}),e.entries({content_type:"36SuQSSPR6QmWOk8CseMC6",include:1,order:"fields.order"}).done(function(e){return F=e,j(1),d(F,$(".video-nav ul"),"main"),$("a.episode").bind("click",function(e){var a;return e.preventDefault(),$(this).parent().find("li").removeClass("active"),$(this).find("li").addClass("active"),a=$(this).data("order"),N=F[a],$(this).children("li").hasClass("unreleased")?void 0:G()})}),e.entries({content_type:"2YpXtnGW80EEGgCUsSMmCc",include:1,order:"fields.order"}).done(function(e){return j(1),i(e)}),e.entries({content_type:"6fwxAcXrxK4yqyaMUiWwWY",include:1,order:"fields.order"}).done(function(e){return j(1),o=e,console.log(o),d(o,$(".story-nav ul"),"additional"),$("a.additional-episode").bind("click",function(e){var a;return e.preventDefault(),$(this).parent().find("li").removeClass("active"),$(this).find("li").addClass("active"),a=$(this).data("order"),l(a,o)}),Y()}),e.entries({content_type:"3JB3iYStpCGYGuu24mEcQK",include:1}).done(function(e){return j(1),$("footer p").empty().text("japan"===h?e[0].fields.bodyJapanese:e[0].fields.body)}),e.entries({content_type:"5KnZeYIgc8oUo2cgssKAWK",include:1}).done(function(e){var a;return a=e[0].fields,j(1),n(a)})},y(),m()})}).call(this);