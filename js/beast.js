(function(){$(function(){var e,a,t,i,r,n,d,o,s,l,c,u,p,f,h,v,m,b,g,y,w,I,k,E,V,C,D,M,B,T,x,S,L,A,P,R,K,O,Y,j,G,N,_,z;return u={},z={},E={},o={},k={},B={},w=0,p=new Showdown.converter,M={},e={},V={},_=640/360,G={},S="",f="",s=[],I=!1,T={},x={spanish:"ref:MI201408250036",german:"ref:MI201408250036",french:"ref:MI201408250036",polish:"ref:MI201408250036",italian:"ref:MI201408250036",japanese:"ref:MI201408250036",brazilian:"ref:MI201408250036",turkish:"ref:MI201408250036","default":"3747000906001"},y=function(){return O(),r(),$(".video-nav ul a.episode li").first().addClass("active"),$(".story-nav ul a.additional-episode li").first().addClass("active"),K(g())},L=function(e){return w+=e,6===w?(A(),m(),w=0):void 0},m=function(){return $.ajax("http://freegeoip.net/json/",{type:"GET",dataType:"json",error:function(e,a,t){return console.log(""+a),y()},success:function(e,a,i){return t(e.country_name)}})},t=function(e){switch(e=e.toLowerCase()){case"germany":N(x.german,e);break;case"austria":N(x.german,e);break;case"spain":N(x.spanish,e);break;case"mexico":N(x.spanish,e);break;case"argentina":N(x.spanish,e);break;case"colombia":N(x.spanish,e);break;case"chile":N(x.spanish,e);break;case"japan":N(x.japanese,e);break;case"poland":N(x.polish,e);break;case"turkey":N(x.turkish,e);break;case"italy":N(x.italian,e);break;case"france":N(x.french,e);break;case"brazil":N(x.brazilian,e);break;default:N(x["default"])}return console.log(e)},N=function(e,a){return T={playerID:"1684512102001",playerKey:"AQ~~%2CAAABTw4lHzE~%2Csr1E9bdX6d4wCdvdlD8QKdNij3uKs2K9",width:$(window).width()/1.5,height:$(window).width()/1.5/_,videoID:""+e},S='<div style="display:none"></div><object id="myExperience" class="BrightcoveExperience"><param name="bgcolor" value="#FFFFFF" /><param name="width" value="{{width}}" /><param name="height" value="{{height}}" /><param name="playerID" value="{{playerID}}" /><param name="playerKey" value="{{playerKey}}" /><param name="isSlim" value="true" /><param name="autoStart" value="false" /><param name="isVid" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" /><param name="@videoPlayer" value="{{videoID}}"; /><param name="includeAPI" value="true" /><param name="templateLoadHandler" value="onTemplateLoad" /><param name="templateReadyHandler" value="onTemplateReady" /></object>',f=a,y()},K=function(e){var a,t;return a={height:e},t=JSON.stringify(a),console.log(a),window.parent.postMessage(t,"*")},g=function(){return $(document).height()},window.onTemplateLoad=function(a){return M=brightcove.api.getExperience(a),e=brightcove.api.modules.APIModules,V=M.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER)},window.onTemplateReady=function(e){return P($("#myExperience")),V.addEventListener(brightcove.api.events.MediaEvent.BEGIN,C),V.addEventListener(brightcove.api.events.MediaEvent.CHANGE,C),V.addEventListener(brightcove.api.events.MediaEvent.COMPLETE,C),V.addEventListener(brightcove.api.events.MediaEvent.ERROR,C),V.addEventListener(brightcove.api.events.MediaEvent.PLAY,C),V.addEventListener(brightcove.api.events.MediaEvent.STOP,C),K(g())},j=function(e){return V.getCurrentVideo(h)},h=function(e,a){switch(f){case"germany":V.loadVideoByID(G.fields.brightcoveVideoIdGerman);break;case"austria":V.loadVideoByID(G.fields.brightcoveVideoIdGerman);break;case"france":V.loadVideoByID(G.fields.brightcoveVideoIdFrench);break;case"japan":V.loadVideoByID(G.fields.brightcoveVideoIdJapanese);break;case"turkey":V.loadVideoByID(G.fields.brightcoveVideoIdTurkish);break;case"brazil":V.loadVideoByID(G.fields.brightVideoIdBrazil);break;case"italy":V.loadVideoByID(G.fields.brightcoveVideoIdItalian);break;case"spain":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;case"mexico":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;case"argentina":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;case"colombia":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;case"chile":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;default:V.loadVideoByID(G.fields.brightcoveVideoId)}return $(".videos h1").empty().text(G.fields.episodeTitle)},C=function(e){},P=function(e){var a,t,i,r,n,d,o,s,l,c,u;return l=e,n=l.attr("width"),r=l.attr("height"),u=$(window).width(),d=n/r,I?void(l.attr("src")&&(s=l.attr("src"),o=/width=([\d\.]*).*height=([\d\.]*)/,i=s.replace(o,""),l.attr("src",i))):(c=u/1.6,l.attr("width",c),l.attr("height",c/d),a=u-c,t=a/2,l.css({marginLeft:t,marginRight:t,opacity:1}))},r=function(){var e,a;return a=Handlebars.compile(S),e=a(T),document.getElementById("player").innerHTML=e,brightcove.createExperiences()},Y=function(){var e,a;return a=document.createElement("script"),a.src="https://www.youtube.com/iframe_api",e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(a,e)},window.onYouTubeIframeAPIReady=function(){return B=new YT.Player("storyplayer",{height:"39",width:"64",videoId:"VsbG4pXrhr8",events:{onReady:D},playerVars:{modestbranding:!0,controls:1,showinfo:0,hd:1,origin:"http://www.redbullmusicacademy.com"}})},D=function(e){return R("#storyplayer")},O=function(){return window.addEventListener("resize",function(){return R($("#myExperience")),R($("#storyplayer"))}),$("a.arrow-right").click(function(e){var a,t,i,r,n;return e.preventDefault(),a=$(".composers-wrap"),n=a.find(".slide").length,i=a.find(".active"),t=i.data("order"),n-2>=t?(r=a.find("[data-order="+(t+1)+"]"),i.removeClass("active"),r.addClass("active")):(r=a.find("[data-order=0]"),i.removeClass("active"),r.addClass("active"))}),$("a.arrow-left").click(function(e){var a,t,i,r,n;return e.preventDefault(),a=$(".composers-wrap"),n=a.find(".slide").length,i=a.find(".active"),t=i.data("order"),t>=1?(r=a.find("[data-order="+(t-1)+"]"),i.removeClass("active"),r.addClass("active")):(r=a.find("[data-order="+(n-1)+"]"),i.removeClass("active"),r.addClass("active"))}),$("a.pulldown").click(function(e){return e.preventDefault(),$(this).parent().find("ul").slideToggle(200,function(){return K(g())})}),$("a.episode").click(function(e){return $(this).children("li").hasClass("unreleased")?void 0:j()})},c=function(e,a,t){var i;return i=t[a].fields,e.find("li").hasClass("unreleased")?void $(".videos h1").empty().text(i.episodeTitle):(player1.cueVideoById(i.ytVideoId),$(".videos h1").empty().text(i.episodeTitle))},l=function(e,a){var t;return t=a[e].fields,B.cueVideoById(t.additionalYouTube),$(".stories h1").empty().text(t.additionalVideoTitle),$(".stories p.body").empty().text(t.description),$(".stories p.body").slideDown()},d=function(e,a,t){var i,r,n,d,o,s,l,c,u,p,f;if("main"===t){for(p=[],d=s=0,c=e.length;c>s;d=++s)o=e[d],r=o.fields.episodeNumber,i=new Date,n=new Date(o.fields.datetimeOfLaunch),a.append(moment()<n?"<a class='episode' href data-order="+d+"><li class='unreleased' data-release='"+n+"'>"+r+"</li>":"<a class='episode' href data-order="+d+"><li class='released'>"+r+"</li>"),p.push(a.find("li").each(function(){var e,a,t,i;return i=$(this),i.hasClass("unreleased")?(a=i.text(),t=i.data("release"),e=new Date(t),i.bind("mouseenter",function(){return i.empty().text(moment(t).format("ddd, MMM Do"))}),i.bind("mouseleave",function(){})):void 0}));return p}if("additional"===t){for(f=[],d=l=0,u=e.length;u>l;d=++l)o=e[d],r=o.fields.additionalVideoTitle,f.push(a.append("<a class='additional-episode' href data-order="+d+"><li>"+r+"</li>"));return f}},a=function(e){var a,t,i,r,n,d,o,s,l,c;for(c=[],i=s=0,l=e.length;l>s;i=++s)a=e[i],d=a.fields,n=d.composerName,r=d.image.fields.file.url,o=p.makeHtml(d.bio),t="<div class='slide' data-order='"+i+"'><div class='img-wrap'><a class='arrow-left' href></a><a class='arrow-right' href></a><img src='"+r+"'/></div><h2>"+d.composerName+"</h2><p>"+o+"</p></div>",$(".composers-wrap").append(t),c.push($(".slide").first().addClass("active"));return c},i=function(e){var a,t,i,r,n,d,o,s,l,c;for(c=[],s=0,l=e.length;l>s;s++)r=e[s],d=r.fields,o=d.artistName,t=d.rbmaRadioEmbedCode,a=d.descriptions,i=d.artistImage.fields.file.url,n="<div class='show'><img src='"+i+"'/>"+t+"<p>"+a+"</p></div>",c.push($(".radio").append(n));return c},R=function(e){var a,t,i,r,n,d,o;return M=$(e),o=$(window).width(),d=o/1.6,r=M.attr("width"),i=M.attr("height"),n=r/i,I&&(d=o/1.5),M.attr("width",d),M.attr("height",d/n),a=o-d,t=a/2,M.css({marginLeft:t,display:"block"}),K(g())},A=function(){return $(".spinner").fadeOut(function(){return $(".spinner").remove()})},v=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?I=!0:void 0},n=function(e){var a,t,i,r;return i=$(".twitter-share"),t=$(".facebook-share"),r=e.twitterShareText,a=e.facebookShareText,i.attr("href","http://twitter.com/intent/tweet?text="+r+"&related=rbma"),t.attr("href","https://www.facebook.com/sharer/sharer.php?u=http://www.redbullmusicacademy.com/magazine/diggin-in-the-carts&amp;t="+a)},b=function(){var e;return e=contentful.createClient({accessToken:"38b8dbaf503a350d5722578c6547caca484511f7c78717736ac8f576832be4b0",space:"s9bc5ah7p1d5"}),e.entries({content_type:"42CpXYSUms44OskS6wUU6I",include:1}).done(function(e){return a(e),L(1)}),e.entries({content_type:"36SuQSSPR6QmWOk8CseMC6",include:1,order:"fields.order"}).done(function(e){return z=e,L(1),d(z,$(".video-nav ul"),"main"),$("a.episode").bind("click",function(e){var a;return e.preventDefault(),$(this).parent().find("li").removeClass("active"),$(this).find("li").addClass("active"),a=$(this).data("order"),G=z[a],$(this).children("li").hasClass("unreleased")?void 0:j()})}),e.entries({content_type:"2YpXtnGW80EEGgCUsSMmCc",include:1}).done(function(e){return L(1),i(e)}),e.entries({content_type:"6fwxAcXrxK4yqyaMUiWwWY",include:1,order:"fields.order"}).done(function(e){return L(1),o=e,d(o,$(".story-nav ul"),"additional"),$("a.additional-episode").bind("click",function(e){var a;return e.preventDefault(),$(this).parent().find("li").removeClass("active"),$(this).find("li").addClass("active"),a=$(this).data("order"),l(a,o)}),Y()}),e.entries({content_type:"3JB3iYStpCGYGuu24mEcQK",include:1}).done(function(e){return L(1),$("footer p").empty().text(e[0].fields.body)}),e.entries({content_type:"5KnZeYIgc8oUo2cgssKAWK",include:1}).done(function(e){var a;return a=e[0].fields,L(1),n(a)})},b(),v()})}).call(this);