(function(){$(function(){var e,a,t,i,r,n,d,o,s,l,c,u,p,f,h,v,m,y,g,b,w,I,C,E,V,k,D,M,B,T,x,L,S,j,A,P,O,R,K,Y,G,N,_,z;return u={},z={},E={},o={},C={},B={},w=0,p=new Showdown.converter,M={},e={},V={},_=640/360,G={},L="",f="",s=[],I=!1,T={},x={spanish:"ref:MI201408250036",german:"ref:MI201408250036",french:"ref:MI201408250036",polish:"ref:MI201408250036",italian:"ref:MI201408250036",japanese:"ref:MI201408250036",brazilian:"ref:MI201408250036",turkish:"ref:MI201408250036","default":"3747000906001"},b=function(){return R(),r(),$(".video-nav ul a.episode li").first().addClass("active"),$(".story-nav ul a.additional-episode li").first().addClass("active"),O(g())},S=function(e){return w+=e,6===w?(j(),b(),w=0):void 0},m=function(){return $.ajax("http://freegeoip.net/json/",{type:"GET",dataType:"json",error:function(e,a,t){return console.log(""+a),f="default",y()},success:function(e,a,i){return f=e.country_name,console.log("Country: "+f),f=f.toLowerCase(),y(),t(e.country_name)}})},t=function(e){switch(e=e.toLowerCase()){case"germany":return N(x.german,e);case"austria":return N(x.german,e);case"spain":return N(x.spanish,e);case"mexico":return N(x.spanish,e);case"argentina":return N(x.spanish,e);case"colombia":return N(x.spanish,e);case"chile":return N(x.spanish,e);case"japan":return N(x.japanese,e);case"poland":return N(x.polish,e);case"turkey":return N(x.turkish,e);case"italy":return N(x.italian,e);case"france":return N(x.french,e);case"brazil":return N(x.brazilian,e);default:return N(x["default"])}},N=function(e,a){return T={playerID:"1684512102001",playerKey:"AQ~~%2CAAABTw4lHzE~%2Csr1E9bdX6d4wCdvdlD8QKdNij3uKs2K9",width:$(window).width()/1.5,height:$(window).width()/1.5/_,videoID:""+e},L='<div style="display:none"></div><object id="myExperience" class="BrightcoveExperience"><param name="bgcolor" value="#FFFFFF" /><param name="width" value="{{width}}" /><param name="height" value="{{height}}" /><param name="playerID" value="{{playerID}}" /><param name="playerKey" value="{{playerKey}}" /><param name="isSlim" value="true" /><param name="autoStart" value="false" /><param name="isVid" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" /><param name="@videoPlayer" value="{{videoID}}"; /><param name="includeAPI" value="true" /><param name="templateLoadHandler" value="onTemplateLoad" /><param name="templateReadyHandler" value="onTemplateReady" /></object>',f=a.toLowerCase(),b()},O=function(e){var a,t;return a={height:e},t=JSON.stringify(a),window.parent.postMessage(t,"*")},g=function(){return $(document.body).height()},window.onTemplateLoad=function(a){return M=brightcove.api.getExperience(a),e=brightcove.api.modules.APIModules,V=M.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER)},window.onTemplateReady=function(e){return A($("#myExperience")),V.addEventListener(brightcove.api.events.MediaEvent.BEGIN,k),V.addEventListener(brightcove.api.events.MediaEvent.CHANGE,k),V.addEventListener(brightcove.api.events.MediaEvent.COMPLETE,k),V.addEventListener(brightcove.api.events.MediaEvent.ERROR,k),V.addEventListener(brightcove.api.events.MediaEvent.PLAY,k),V.addEventListener(brightcove.api.events.MediaEvent.STOP,k),O(g())},Y=function(e){return V.getCurrentVideo(h)},h=function(e,a){switch(f){case"germany":V.loadVideoByID(G.fields.brightcoveVideoIdGerman);break;case"austria":V.loadVideoByID(G.fields.brightcoveVideoIdGerman);break;case"france":V.loadVideoByID(G.fields.brightcoveVideoIdFrench);break;case"japan":V.loadVideoByID(G.fields.brightcoveVideoIdJapanese);break;case"turkey":V.loadVideoByID(G.fields.brightcoveVideoIdTurkish);break;case"brazil":V.loadVideoByID(G.fields.brightVideoIdBrazil);break;case"italy":V.loadVideoByID(G.fields.brightcoveVideoIdItalian);break;case"spain":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;case"mexico":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;case"argentina":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;case"colombia":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;case"chile":V.loadVideoByID(G.fields.brightcoveVideoIdSpanish);break;default:V.loadVideoByID(G.fields.brightcoveVideoId)}return $(".videos h1").empty().text(G.fields.episodeTitle)},k=function(e){},A=function(e){var a,t,i,r,n,d,o,s,l,c,u;return l=e,n=l.attr("width"),r=l.attr("height"),u=$(window).width(),d=n/r,I?void(l.attr("src")&&(s=l.attr("src"),o=/width=([\d\.]*).*height=([\d\.]*)/,i=s.replace(o,""),l.attr("src",i))):(c=u/1.6,l.attr("width",c),l.attr("height",c/d),a=u-c,t=a/2,l.css({marginLeft:t,marginRight:t,opacity:1}))},r=function(){var e,a;return a=Handlebars.compile(L),e=a(T),document.getElementById("player").innerHTML=e,brightcove.createExperiences()},K=function(){var e,a;return a=document.createElement("script"),a.src="https://www.youtube.com/iframe_api",e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(a,e)},window.onYouTubeIframeAPIReady=function(){return B=new YT.Player("storyplayer",{height:"39",width:"64",videoId:"VsbG4pXrhr8",events:{onReady:D},playerVars:{modestbranding:!0,controls:1,showinfo:0,hd:1,origin:"http://www.redbullmusicacademy.com"}})},D=function(e){return P("#storyplayer")},R=function(){return window.addEventListener("resize",function(){return P($("#myExperience")),P($("#storyplayer"))}),$("a.arrow-right").click(function(e){var a,t,i,r,n;return e.preventDefault(),a=$(".composers-wrap"),n=a.find(".slide").length,i=a.find(".active"),t=i.data("order"),n-2>=t?(r=a.find("[data-order="+(t+1)+"]"),i.removeClass("active"),r.addClass("active")):(r=a.find("[data-order=0]"),i.removeClass("active"),r.addClass("active"))}),$("a.arrow-left").click(function(e){var a,t,i,r,n;return e.preventDefault(),a=$(".composers-wrap"),n=a.find(".slide").length,i=a.find(".active"),t=i.data("order"),t>=1?(r=a.find("[data-order="+(t-1)+"]"),i.removeClass("active"),r.addClass("active")):(r=a.find("[data-order="+(n-1)+"]"),i.removeClass("active"),r.addClass("active"))}),$("a.pulldown").click(function(e){return e.preventDefault(),$(this).parent().find("ul").slideToggle(200,function(){return O(g())})}),$("a.episode").click(function(e){return $(this).children("li").hasClass("unreleased")?void 0:Y()})},c=function(e,a,t){var i;return i=t[a].fields,e.find("li").hasClass("unreleased")?void $(".videos h1").empty().text(i.episodeTitle):(player1.cueVideoById(i.ytVideoId),$(".videos h1").empty().text(i.episodeTitle))},l=function(e,a){var t;return t=a[e].fields,B.cueVideoById(t.additionalYouTube),$(".stories h1").empty().text(t.additionalVideoTitle),$(".stories p.body").empty().text("japan"===f?t.japaneseDescription:t.description),$(".stories p.body").slideDown()},d=function(e,a,t){var i,r,n,d,o,s,l,c,u,p,h;if("main"===t){for(p=[],d=s=0,c=e.length;c>s;d=++s)o=e[d],r=o.fields.episodeNumber,i=new Date,n=new Date("japan"===f?o.fields.datetimeOfLaunchJapan:o.fields.datetimeOfLaunch),a.append(moment()<n?"<a class='episode' href data-order="+d+"><li class='unreleased' data-release='"+n+"'>"+r+"</li>":"<a class='episode' href data-order="+d+"><li class='released'>"+r+"</li>"),p.push(a.find("li").each(function(){var e,a,t,i;return i=$(this),i.hasClass("unreleased")?(a=i.text(),t=i.data("release"),e=new Date(t),i.bind("mouseenter",function(){return i.empty().text(moment(t).format("ddd, MMM Do"))}),i.bind("mouseleave",function(){})):void 0}));return p}if("additional"===t){for(h=[],d=l=0,u=e.length;u>l;d=++l)o=e[d],r=o.fields.additionalVideoTitle,h.push(a.append("<a class='additional-episode' href data-order="+d+"><li>"+r+"</li>"));return h}},a=function(e){var a,t,i,r,n,d,o,s,l,c;for(c=[],i=s=0,l=e.length;l>s;i=++s)a=e[i],d=a.fields,n=d.composerName,r=d.image.fields.file.url,o=p.makeHtml("japan"===f?d.japaneseBio?d.japaneseBio:d.bio:d.bio),t="<div class='slide' data-order='"+i+"'><div class='img-wrap'><a class='arrow-left' href></a><a class='arrow-right' href></a><img src='"+r+"'/></div><h2>"+d.composerName+"</h2><p>"+o+"</p></div>",$(".composers-wrap").append(t),c.push($(".slide").first().addClass("active"));return c},i=function(e){var a,t,i,r,n,d,o,s,l,c;for(c=[],s=0,l=e.length;l>s;s++)r=e[s],d=r.fields,o=d.artistName,t=d.rbmaRadioEmbedCode,a=d.descriptions,i=d.artistImage.fields.file.url,n="<div class='show'><img src='"+i+"'/>"+t+"<p>"+a+"</p></div>",c.push($(".radio").append(n));return c},P=function(e){var a,t,i,r,n,d,o;return M=$(e),o=$(window).width(),d=o/1.6,r=M.attr("width"),i=M.attr("height"),n=r/i,I&&(d=o/1.5),M.attr("width",d),M.attr("height",d/n),a=o-d,t=a/2,M.css({marginLeft:t,display:"block"}),O(g())},j=function(){return $(".spinner").fadeOut(function(){return $(".spinner").remove()})},v=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?I=!0:void 0},n=function(e){var a,t,i,r;return i=$(".twitter-share"),t=$(".facebook-share"),r=e.twitterShareText,a=e.facebookShareText,i.attr("href","http://twitter.com/intent/tweet?text="+r+"&related=rbma"),t.attr("href","https://www.facebook.com/sharer/sharer.php?u=http://www.redbullmusicacademy.com/magazine/diggin-in-the-carts&amp;t="+a)},y=function(){var e;return e=contentful.createClient({accessToken:"38b8dbaf503a350d5722578c6547caca484511f7c78717736ac8f576832be4b0",space:"s9bc5ah7p1d5"}),e.entries({content_type:"42CpXYSUms44OskS6wUU6I",include:1}).done(function(e){return a(e),S(1)}),e.entries({content_type:"36SuQSSPR6QmWOk8CseMC6",include:1,order:"fields.order"}).done(function(e){return z=e,S(1),d(z,$(".video-nav ul"),"main"),$("a.episode").bind("click",function(e){var a;return e.preventDefault(),$(this).parent().find("li").removeClass("active"),$(this).find("li").addClass("active"),a=$(this).data("order"),G=z[a],$(this).children("li").hasClass("unreleased")?void 0:Y()})}),e.entries({content_type:"2YpXtnGW80EEGgCUsSMmCc",include:1}).done(function(e){return S(1),i(e)}),e.entries({content_type:"6fwxAcXrxK4yqyaMUiWwWY",include:1,order:"fields.order"}).done(function(e){return S(1),o=e,console.log(o),d(o,$(".story-nav ul"),"additional"),$("a.additional-episode").bind("click",function(e){var a;return e.preventDefault(),$(this).parent().find("li").removeClass("active"),$(this).find("li").addClass("active"),a=$(this).data("order"),l(a,o)}),K()}),e.entries({content_type:"3JB3iYStpCGYGuu24mEcQK",include:1}).done(function(e){return S(1),$("footer p").empty().text("japan"===f?e[0].fields.bodyJapanese:e[0].fields.body)}),e.entries({content_type:"5KnZeYIgc8oUo2cgssKAWK",include:1}).done(function(e){var a;return a=e[0].fields,S(1),n(a)})},m(),v()})}).call(this);