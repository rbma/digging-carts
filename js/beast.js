(function(){$(function(){var e,a,t,i,r,n,o,d,s,l,c,u,p,f,h,v,m,g,y,b,w,I,V,C,D,B,E,k,x,S,T,L,M,j,A,O,P,R,z,Y,K,N,_,J,F,U,G,H,W,Q,X;return p={},H={},B={},o={},D={},L={},V=0,f=new Showdown.converter,T={},W={},e={},E={},G=640/360,F={},A="",v="",u=0,s=!1,h={},Q=!1,X=0,d=[],C=!1,M={},j={spanish:"3779128128001",french:"3780031778001",polish:"3779128125001",italian:"3779128126001",japanese:"3791818840001",brazilian:"3780202967001",turkish:"3779128127001","default":"3779128126001"},_=["spain","mexico","chile","argentina","france","poland","italy","turkey","japan","colombia","brazil"],I=function(){return K(),i(),Y(w())},O=function(e){return V+=e,6===V?(P(),I(),V=0):void 0},y=function(){return $.ajax("http://freegeoip.net/json/",{type:"GET",dataType:"json",timeout:3e3,error:function(e,a,t){return console.log(""+a),v="default",b(),U(j["default"],v)},success:function(e,a,t){return v=e.country_name,console.log("Country: "+v),v=v.toLowerCase(),"japan"===v&&(s=!0,$("#caption-toggle .captions").addClass("active"),$("#caption-toggle .captions-text").addClass("active").empty().text("Subtitles On")),b(),U(j["default"],v)}})},U=function(e,a){return"japan"===a&&(e=3791818840001),M={playerID:"1890493041001",playerKey:"AQ~~%2CAAABuJ3Komk~%2CgXybzBdQzgLgC0zHvAZXtMeryIVplW-t",width:$(window).width()/1.5,height:$(window).width()/1.5/G,videoID:""+e},A='<div style="display:none"></div><object id="myExperience" class="BrightcoveExperience"><param name="bgcolor" value="#FFFFFF" /><param name="width" value="{{width}}" /><param name="height" value="{{height}}" /><param name="playerID" value="{{playerID}}" /><param name="playerKey" value="{{playerKey}}" /><param name="isSlim" value="true" /><param name="autoStart" value="false" /><param name="isVid" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" /><param name="@videoPlayer" value="{{videoID}}"; /><param name="includeAPI" value="true" /><param name="linkBaseURL" value="http://www.redbullmusicacademy.com/magazine/diggin-in-the-carts"/><param name="templateLoadHandler" value="onTemplateLoad" /><param name="templateReadyHandler" value="onTemplateReady" /></object>',v=a.toLowerCase(),_.indexOf(v)>-1?$("#caption-toggle").show():void 0},Y=function(e){var a,t;return a={height:e},t=JSON.stringify(a),window.parent.postMessage(t,"*")},w=function(){return $(document.body).height()},i=function(){var e,a;return a=Handlebars.compile(A),e=a(M),document.getElementById("player").innerHTML=e,brightcove.createExperiences()},window.onTemplateLoad=function(a){return T=brightcove.api.getExperience(a),e=brightcove.api.modules.APIModules,E=T.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER),makeCaptionOverlay()},window.onTemplateReady=function(a){return W=T.getModule(e.VIDEO_PLAYER),R($("#myExperience")),E.addEventListener(brightcove.api.events.MediaEvent.BEGIN,k),E.addEventListener(brightcove.api.events.MediaEvent.CHANGE,k),E.addEventListener(brightcove.api.events.MediaEvent.COMPLETE,k),E.addEventListener(brightcove.api.events.MediaEvent.ERROR,k),E.addEventListener(brightcove.api.events.MediaEvent.PLAY,k),E.addEventListener(brightcove.api.events.MediaEvent.STOP,k),Y(w())},$("#caption-toggle").click(function(e){var a;if(e.stopPropagation(),e.preventDefault(),a=$(this).data("order"),F=H[a],$(this).hasClass("unreleased"));else{if(s)return s=!1,$("#caption-toggle .captions").removeClass("active"),$("#caption-toggle .captions-text").removeClass("active").empty().text("Subtitles Off"),W.loadVideoByID(j["default"]);if(!s)switch(s=!0,$("#caption-toggle .captions").addClass("active"),$("#caption-toggle .captions-text").addClass("active").empty().text("Subtitles On"),v){case"france":return W.loadVideoByID(F.fields.brightcoveVideoIdFrench);case"japan":return W.loadVideoByID(F.fields.brightcoveVideoIdJapanese);case"turkey":return W.loadVideoByID(F.fields.brightcoveVideoIdTurkish);case"brazil":return W.loadVideoByID(F.fields.brightVideoIdBrazil);case"italy":return W.loadVideoByID(F.fields.brightcoveVideoIdItalian);case"spain":return W.loadVideoByID(F.fields.brightcoveVideoIdSpanish);case"mexico":return W.loadVideoByID(F.fields.brightcoveVideoIdSpanish);case"argentina":return W.loadVideoByID(F.fields.brightcoveVideoIdSpanish);case"colombia":return W.loadVideoByID(F.fields.brightcoveVideoIdSpanish);case"chile":return W.loadVideoByID(F.fields.brightcoveVideoIdSpanish);case"poland":return W.loadVideoByID(F.fields.brightcoveVideoIdPolish);default:return E.loadVideoByID(F.fields.brightcoveVideoId)}}}),x=function(e){return X=e.position},k=function(e){return"mediaBegin"===e.type?Q=!0:"mediaStop"===e.type?Q=!1:void 0},J=function(e){return E.getCurrentVideo(m)},m=function(e,a){if(s)switch(v){case"france":E.loadVideoByID(F.fields.brightcoveVideoIdFrench);break;case"japan":W.loadVideoByID(F.fields.brightcoveVideoIdJapanese);break;case"turkey":E.loadVideoByID(F.fields.brightcoveVideoIdTurkish);break;case"brazil":E.loadVideoByID(F.fields.brightVideoIdBrazil);break;case"italy":E.loadVideoByID(F.fields.brightcoveVideoIdItalian);break;case"spain":E.loadVideoByID(F.fields.brightcoveVideoIdSpanish);break;case"mexico":E.loadVideoByID(F.fields.brightcoveVideoIdSpanish);break;case"argentina":E.loadVideoByID(F.fields.brightcoveVideoIdSpanish);break;case"colombia":E.loadVideoByID(F.fields.brightcoveVideoIdSpanish);break;case"chile":E.loadVideoByID(F.fields.brightcoveVideoIdSpanish);break;default:E.loadVideoByID(F.fields.brightcoveVideoId)}else W.loadVideoByID(F.fields.brightcoveVideoId);return $(".videos h1").empty().text(F.fields.episodeTitle)},R=function(e){var a,t,i,r,n,o,d,s,l,c,u;return l=e,n=l.attr("width"),r=l.attr("height"),u=$(window).width(),o=n/r,C?void(l.attr("src")&&(s=l.attr("src"),d=/width=([\d\.]*).*height=([\d\.]*)/,i=s.replace(d,""),l.attr("src",i))):(c=u/1.6,l.attr("width",c),l.attr("height",c/o),a=u-c,t=a/2,l.css({marginLeft:t,marginRight:t,opacity:1}))},N=function(){var e,a;return a=document.createElement("script"),a.src="https://www.youtube.com/iframe_api",e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(a,e)},window.onYouTubeIframeAPIReady=function(){return L=new YT.Player("storyplayer",{height:"39",width:"64",videoId:"bNAWv6-IK0c",events:{onReady:S},playerVars:{modestbranding:!0,controls:1,showinfo:0,hd:1,origin:"http://www.redbullmusicacademy.com"}})},S=function(e){return z("#storyplayer")},K=function(){return window.addEventListener("resize",function(){return z($("#myExperience")),z($("#storyplayer"))}),$("a.arrow-right").click(function(e){var a,t,i,r,n;return e.preventDefault(),a=$(".composers-wrap"),n=a.find(".slide").length,i=a.find(".active"),t=i.data("order"),n-2>=t?(r=a.find("[data-order="+(t+1)+"]"),i.removeClass("active"),r.addClass("active")):(r=a.find("[data-order=0]"),i.removeClass("active"),r.addClass("active"))}),$("a.arrow-left").click(function(e){var a,t,i,r,n;return e.preventDefault(),a=$(".composers-wrap"),n=a.find(".slide").length,i=a.find(".active"),t=i.data("order"),t>=1?(r=a.find("[data-order="+(t-1)+"]"),i.removeClass("active"),r.addClass("active")):(r=a.find("[data-order="+(n-1)+"]"),i.removeClass("active"),r.addClass("active"))})},c=function(e,a,t){var i;return i=t[a].fields,e.find("li").hasClass("unreleased")?void $(".videos h1").empty().text(i.episodeTitle):(player1.cueVideoById(i.ytVideoId),$(".videos h1").empty().text(i.episodeTitle))},l=function(e,a){var t;return t=a[e].fields,L.cueVideoById(t.additionalYouTube),$(".stories h1").empty().text(t.additionalVideoTitle),$(".stories p.body").empty().text("japan"===v?t.japaneseDescription:t.description),$(".stories p.body").slideDown()},n=function(e,a,t){var i,r,n,o,d,s,l,c,u,p,f;if("main"===t){for(p=[],o=s=0,c=e.length;c>s;o=++s)d=e[o],r=d.fields.episodeNumber,i=new Date,n=new Date("japan"===v?d.fields.datetimeOfLaunchJapan:d.fields.datetimeOfLaunch),a.append(moment()<n?"<a class='episode' href data-order="+o+"><li class='unreleased' data-release='"+n+"'>"+r+"</li>":"<a class='episode' href data-order="+o+"><li class='released'>"+r+"</li>"),p.push(a.find("li").each(function(){var e,a,t,i;return i=$(this),i.hasClass("unreleased")?(a=i.text(),t=i.data("release"),e=new Date(t),i.bind("mouseenter",function(){return i.empty().text(moment(t).format("ddd, MMM Do"))}),i.bind("mouseleave",function(){})):void 0}));return p}if("additional"===t){for(f=[],o=l=0,u=e.length;u>l;o=++l)d=e[o],r=d.fields.additionalVideoTitle,f.push(a.append("<a class='additional-episode' href data-order="+o+"><li>"+r+"</li>"));return f}},a=function(e){var a,t,i,r,n,o,d,s,l,c;for(c=[],i=s=0,l=e.length;l>s;i=++s)a=e[i],o=a.fields,n=o.composerName,r=o.image.fields.file.url,d=f.makeHtml("japan"===v?o.japaneseBio?o.japaneseBio:o.bio:o.bio),t="<div class='slide' data-order='"+i+"'><div class='img-wrap'><a class='arrow-left' href></a><a class='arrow-right' href></a><img src='"+r+"'/></div><h2>"+o.composerName+"</h2><p>"+d+"</p></div>",$(".composers-wrap").append(t),c.push($(".slide").first().addClass("active"));return c},t=function(e){var a,t,i,r,n,o,d,s,l,c;for(c=[],s=0,l=e.length;l>s;s++)r=e[s],o=r.fields,d=o.artistName,i=o.artistImage.fields.file.url,a=o.descriptions?o.descriptions:"",t=o.rbmaRadioEmbedCode?o.rbmaRadioEmbedCode:"",n="<div class='show'><img src='"+i+"'/>"+t+"<p>"+a+"</p></div>",c.push($(".radio").append(n));return c},z=function(e){var a,t,i,r,n,o,d;return T=$(e),d=$(window).width(),o=d/1.6,r=T.attr("width"),i=T.attr("height"),n=r/i,C&&(o=d/1.4),T.attr("width",o),T.attr("height",o/n),a=d-o,t=a/2,T.css({marginLeft:t,display:"block"}),Y(w())},P=function(){return $(".spinner").fadeOut(function(){return $(".spinner").remove()})},g=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?C=!0:void 0},r=function(e){var a,t,i,r,n;return r=$(".twitter-share"),i=$(".facebook-share"),v=v.toLowerCase(),"japan"===v?(n=e.twitterShareTextJapan,a=e.facebookShareTextJapan):(n=e.twitterShareText,t=e.facebookShareText),r.attr("href","http://twitter.com/intent/tweet?text="+n),i.attr("href","https://www.facebook.com/sharer/sharer.php?u=http://www.redbullmusicacademy.com/magazine/diggin-in-the-carts&amp;t="+t)},b=function(){var e;return e=contentful.createClient({accessToken:"38b8dbaf503a350d5722578c6547caca484511f7c78717736ac8f576832be4b0",space:"s9bc5ah7p1d5"}),e.entries({content_type:"42CpXYSUms44OskS6wUU6I",include:1,order:"sys.updatedAt"}).done(function(e){return a(e),O(1)}),e.entries({content_type:"36SuQSSPR6QmWOk8CseMC6",include:1,order:"fields.order"}).done(function(e){return H=e,O(1),n(H,$(".video-nav ul"),"main"),$("a.episode").bind("click",function(e){var a;return e.preventDefault(),$(this).parent().find("li").removeClass("active"),$(this).find("li").addClass("active"),a=$(this).data("order"),F=H[a],$("#caption-toggle").data("order",a),$(this).children("li").hasClass("unreleased")?void $("#caption-toggle").addClass("unreleased"):($("#caption-toggle").removeClass("unreleased"),J())})}),e.entries({content_type:"2YpXtnGW80EEGgCUsSMmCc",include:1,order:"fields.order"}).done(function(e){return O(1),t(e)}),e.entries({content_type:"6fwxAcXrxK4yqyaMUiWwWY",include:1,order:"fields.order"}).done(function(e){return O(1),o=e,n(o,$(".story-nav ul"),"additional"),$("a.additional-episode").bind("click",function(e){var a;return e.preventDefault(),$(this).parent().find("li").removeClass("active"),$(this).find("li").addClass("active"),a=$(this).data("order"),l(a,o)}),N()}),e.entries({content_type:"3JB3iYStpCGYGuu24mEcQK",include:1}).done(function(e){return O(1),$("footer p").empty().text("japan"===v?e[0].fields.bodyJapanese:e[0].fields.body)}),e.entries({content_type:"5KnZeYIgc8oUo2cgssKAWK",include:1}).done(function(e){var a;return a=e[0].fields,O(1),r(a)})},y(),g(),$(".pulldown").click(function(e){return e.stopPropagation(),e.preventDefault(),$(this).parent().find("ul").slideToggle(400,"linear",function(){return Y(w())})})})}).call(this);