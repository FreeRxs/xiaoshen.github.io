function loading(){$(".loading1").show()}function loadingDone(){$(".loading1").hide()}function hackClip(){let n=document.createElement("input");document.body.appendChild(n);n.value="1";n.select();document.execCommand("copy")&&document.execCommand("copy");document.body.removeChild(n)}function CopyrightProtect(){setInterval(function(){try{(function(){}).constructor("debugger")();$(".article-content").on("keydown",function(n){var i=0,t=n||window.event;return i=t.keyCode||t.which||t.charCode,i==123||t.ctrlKey&&i==67||t.ctrlKey&&i==83||t.ctrlKey&&i==85?(clearSelect(),t.cancelBubble=!0,t.returnValue=!1,!1):void 0});document.onkeydown=function(n){var i=0,t=n||window.event;return i=t.keyCode||t.which||t.charCode,i==123||t.ctrlKey&&i==65||t.ctrlKey&&i==83||t.ctrlKey&&i==85||t.ctrlKey&&t.shiftKey||t.altKey?(clearSelect(),t.cancelBubble=!0,t.returnValue=!1,!1):void 0};document.ondragstart=function(n){return n.returnValue=!1,hackClip(),!1};$(".article-content").on("copy",function(n){return n.returnValue=!1,hackClip(),!1});document.oncontextmenu=function(n){return n.returnValue=!1,hackClip(),!1}}catch(n){console.error(n)}},500)}function CopyrightProtect4Editor(){setInterval(function(){try{(function(){}).constructor("debugger")();document.getElementById("ueditor_0").contentWindow.document.body.onkeydown=function(n){var i=0,t=n||window.event;return i=t.keyCode||t.which||t.charCode,i==123||t.ctrlKey&&i==67||t.ctrlKey&&i==83||t.ctrlKey&&i==85||t.ctrlKey&&i==88||t.ctrlKey&&t.shiftKey||t.altKey?(clearSelect(),t.cancelBubble=!0,t.returnValue=!1,!1):void 0};document.getElementById("ueditor_0").contentWindow.document.body.ondragstart=function(n){return n.returnValue=!1,hackClip(),!1};document.getElementById("ueditor_0").contentWindow.document.body.oncopy=function(n){return n.returnValue=!1,hackClip(),!1}}catch(n){console.error(n)}},500)}function GlobalCopyrightProtect(){setInterval(function(){try{(function(){}).constructor("debugger")();$(".article-content").on("keydown",function(n){var i=0,t=n||window.event;return i=t.keyCode||t.which||t.charCode,i==123||t.ctrlKey&&i==67||t.ctrlKey&&i==83||t.ctrlKey&&i==85?(t.cancelBubble=!0,t.returnValue=!1,clearSelect(),!1):void 0});document.onkeydown=function(n){var i=0,t=n||window.event;return i=t.keyCode||t.which||t.charCode,i==123||t.ctrlKey&&i==65||t.ctrlKey&&i==83||t.ctrlKey&&i==85||t.ctrlKey&&t.shiftKey||t.altKey?(t.cancelBubble=!0,t.returnValue=!1,clearSelect(),!1):void 0};document.ondragstart=function(n){return n.returnValue=!1,hackClip(),!1};$(".article-content").on("copy",function(n){return n.returnValue=!1,hackClip(),!1});document.oncontextmenu=function(){return event.returnValue=!1,hackClip(),!1}}catch(n){console.error(n)}},500)}function GetOperatingSystem(n){return n?n.indexOf("Windows")>=0?'<i class="icon-windows8"><\/i>'+n:n.indexOf("Mac")>=0?'<i class="icon-apple"><\/i>'+n:n.indexOf("Chrome")>=0?'<i class="icon-chrome"><\/i>'+n:n.indexOf("Android")>=0?'<i class="icon-android"><\/i>'+n:'<i class="icon-stats"><\/i>'+n:'<i class="icon-stats"><\/i>未知操作系统'}function GetBrowser(n){return n?n.indexOf("Chrome")>=0?'<i class="icon-chrome"><\/i>'+n:n.indexOf("Firefox")>=0?'<i class="icon-firefox"><\/i>'+n:n.indexOf("IE")>=0?'<i class="icon-IE"><\/i>'+n:n.indexOf("Edge")>=0?'<i class="icon-edge"><\/i>'+n:n.indexOf("Opera")>=0?'<i class="icon-opera"><\/i>'+n:n.indexOf("Safari")>=0?'<i class="icon-safari"><\/i>'+n:'<i class="icon-browser2"><\/i>'+n:'<i class="icon-browser2"><\/i>未知浏览器'}function getFile(n,t){$("input[name='"+t+"']").val($(n).val())}function popBrowserTips(){if(window.sessionStorage){var n=window.sessionStorage.getItem("deny")||!1;window.screen.width<=320&&!n&&swal({title:"访问受限制?",html:"由于检测到您的设备<span style='color:red'>屏幕宽度过小<\/span>，网站的部分功能可能不会兼容你的设备，但是您<span style='color:red'>可以继续浏览<\/span>，为确保最佳用户体验，建议使用<span style='color:red'>5寸以上移动设备<\/span>，或分辨率大于<span style='color:red'>1360 x 768<\/span>的<span style='color:red'>电脑浏览器<\/span>访问本站，感谢您的来访和支持！",type:"error",showCloseButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"我知道了",cancelButtonText:"哦哦"}).then(function(n){n&&window.sessionStorage.setItem("deny",!0)})}}function post(n,t,i,r){var u=new FormData;Object.keys(t).forEach(function(n){u.append(n,t[n])});window.fetch(n,{credentials:"include",method:"POST",mode:"cors",body:u}).then(function(n){return n.json()}).then(function(n){i(n)}).catch(function(n){loadingDone();r&&r(n)})}function get(n,t,i){window.fetch(n,{credentials:"include",method:"GET",mode:"cors"}).then(function(n){return n.json()}).then(function(n){t(n)}).catch(function(n){loadingDone();i&&i(n)})}function update(){var i,r,n,t;if(i=Math.min(Math.max(-mouseY,-size),size)/radius*tspeed,r=-Math.min(Math.max(-mouseX,-size),size)/radius*tspeed,lasta=i,lastb=r,!(Math.abs(i)<=.01)||!(Math.abs(r)<=.01)){for(sineCosine(i,r,0),n=0;n<mcList.length;n++)if(!mcList[n].on){var u=mcList[n].cx,l=mcList[n].cy*ca+mcList[n].cz*-sa,f=mcList[n].cy*sa+mcList[n].cz*ca,e=u*cb+f*sb,o=l,a=u*-sb+f*cb,s=e*cc+o*-sc,h=e*sc+o*cc,c=a;mcList[n].cx=s;mcList[n].cy=h;mcList[n].cz=c;per=d/(d+c);mcList[n].x=howElliptical*s*per-howElliptical*2;mcList[n].y=h*per;mcList[n].scale=per;t=per;t=(t-.6)*(10/6);mcList[n].alpha=t*t*t-.2;mcList[n].zIndex=Math.ceil(100-Math.floor(mcList[n].cz))}doPosition()}}function positionAll(){for(var t=0,i=0,r=mcList.length,n=0;n<r;n++)distr?(t=Math.acos(-1+(2*(n+1)-1)/r),i=Math.sqrt(r*Math.PI)*t):(t=Math.random()*Math.PI,i=Math.random()*2*Math.PI),mcList[n].cx=radius*Math.cos(i)*Math.sin(t),mcList[n].cy=radius*Math.sin(i)*Math.sin(t),mcList[n].cz=radius*Math.cos(t),aA[n].style.left=mcList[n].cx+oDiv.offsetWidth/2-mcList[n].offsetWidth/2+"px",aA[n].style.top=mcList[n].cy+oDiv.offsetHeight/2-mcList[n].offsetHeight/2+"px"}function doPosition(){for(var t,i=oDiv.offsetWidth/2,r=oDiv.offsetHeight/2,n=0;n<mcList.length;n++)if(!mcList[n].on){if(t=aA[n].style,mcList[n].alpha>.1)t.display!=""&&(t.display="");else{t.display!="none"&&(t.display="none");continue}t.left=mcList[n].cx+i-mcList[n].offsetWidth/2+"px";t.top=mcList[n].cy+r-mcList[n].offsetHeight/2+"px";t.filter="alpha(opacity="+100*mcList[n].alpha+")";t.zIndex=mcList[n].zIndex;t.opacity=mcList[n].alpha}}function sineCosine(n,t,i){sa=Math.sin(n*dtr);ca=Math.cos(n*dtr);sb=Math.sin(t*dtr);cb=Math.cos(t*dtr);sc=Math.sin(i*dtr);cc=Math.cos(i*dtr)}var clearSelect,DeviceInfo;(function(n,t){typeof define=="function"&&define.amd?define(["$"],t):typeof exports=="object"?module.exports=t():n.Query=t(window.Zepto||window.jQuery||$)})(this,function(n){return{getQuery:function(n,t,r){var h=new RegExp("(^|&|#)"+n+"=([^&]*)(&|$|#)","i"),u,f,e,o,s;if(r=r||window,u=r.location.href,o="",f=t=="#"?u.split("#"):u.split("?"),e=f.length==1?"":f[1],e!="")for(gg=e.split(/&|#/),s=gg.length,str=arguments[0]+"=",i=0;i<s;i++)if(gg[i].indexOf(str)==0){o=gg[i].replace(str,"");break}return decodeURI(o)},getForm:function(t){var i={},r={},f,u,e;n(t).find("*[name]").each(function(t,u){var h,s=n(u).attr("name"),e=n.trim(n(u).val()),f=[],o,c;s==""||n(u).hasClass("getvalued")||(n(u).data("type")=="money"&&(e=e.replace(/\,/gi,"")),n(u).attr("type")=="radio"&&(o=null,n("input[name='"+s+"']:radio").each(function(){n(this).is(":checked")&&(o=n.trim(n(this).val()))}),e=o?o:""),n(u).attr("type")=="checkbox"&&(o=[],n("input[name='"+s+"']:checkbox").each(function(){n(this).is(":checked")&&o.push(n.trim(n(this).val()))}),e=o.length?o.join(","):""),n(u).attr("listvalue")&&(i[n(u).attr("listvalue")]||(i[n(u).attr("listvalue")]=[],n("input[listvalue='"+n(u).attr("listvalue")+"']").each(function(){var r,t,f;n(this).val()!=""&&(r=n(this).attr("name"),t={},t[r]=n(this).data("type")=="json"?JSON.parse(n(this).val()):n.trim(n(this).val()),n(this).attr("paramquest")&&(f=JSON.parse(n(this).attr("paramquest")),t=n.extend(t,f)),i[n(u).attr("listvalue")].push(t),n(this).addClass("getvalued"))}))),n(u).attr("arrayvalue")&&(i[n(u).attr("arrayvalue")]||(i[n(u).attr("arrayvalue")]=[],n("input[arrayvalue='"+n(u).attr("arrayvalue")+"']").each(function(){var t,r;n(this).val()!=""&&(t={},t=n(this).data("type")=="json"?JSON.parse(n(this).val()):n.trim(n(this).val()),n(this).attr("paramquest")&&(r=JSON.parse(n(this).attr("paramquest")),t=n.extend(t,r)),i[n(u).attr("arrayvalue")].push(t))}))),s==""||n(u).hasClass("getvalued"))||(s.match(/\./)?(f=s.split("."),h=f[0],f.length==3?(r[f[1]]=r[f[1]]||{},r[f[1]][f[2]]=e):n(u).data("type")=="json"?(r[f[1]]=JSON.parse(e),n(u).attr("paramquest")&&(c=JSON.parse(n(u).attr("paramquest")),r[f[1]]=n.extend(r[f[1]],c))):r[f[1]]=e,i[h]=i[h]?n.extend({},i[h],r):r):i[s]=e)});f={};for(u in i)e=i[u],f[u]=typeof e=="object"?JSON.stringify(e):i[u];return n(".getvalued").removeClass("getvalued"),f},setHash:function(t){var u="",r,i;t=n.extend(this.getHash(),t);r=[];for(i in t)t[i]!=""&&r.push(i+"="+encodeURIComponent(t[i]));return u+=r.join("&"),location.hash=u,this},getHash:function(n){var u,t,f,i,e,r;if(typeof n=="string")return this.getQuery(n,"#");if(u={},t=location.hash,t.length>0)for(t=t.substr(1),f=t.split("&"),i=0,e=f.length;i<e;i++)r=f[i].split("="),r.length>0&&(u[r[0]]=decodeURI(r[1])||"");return u}}}),function(n,t){typeof define=="function"&&define.amd?define(["$","query"],t):typeof exports=="object"?module.exports=t():n.Paging=t(window.Zepto||window.jQuery||$,Query)}(this,function(n,t){function i(){var n=Math.random().toString().replace(".","");this.id="Paging_"+n}return n.fn.Paging=function(t){var r=[];return n(this).each(function(){var f=n.extend({target:n(this)},t),u=new i;u.init(f);r.push(u)}),r},i.prototype={init:function(t){this.settings=n.extend({callback:null,pagesize:10,current:1,prevTpl:"上一页",nextTpl:"下一页",firstTpl:"首页",lastTpl:"末页",ellipseTpl:"...",toolbar:!1,hash:!0,pageSizeList:[5,10,15,20]},t);this.target=n(this.settings.target);this.container=n('<div id="'+this.id+'" class="ui-paging-container"/>');this.target.append(this.container);this.render(this.settings);this.format();this.bindEvent()},render:function(n){this.count=n.count||this.settings.count;this.pagesize=n.pagesize||this.settings.pagesize;this.current=n.current||this.settings.current;this.pagecount=Math.ceil(this.count/this.pagesize);this.format()},bindEvent:function(){var t=this;this.container.on("click","li.js-page-action,li.ui-pager",function(){if(n(this).hasClass("ui-pager-disabled")||n(this).hasClass("focus"))return!1;n(this).hasClass("js-page-action")?(n(this).hasClass("js-page-first")&&(t.current=1),n(this).hasClass("js-page-prev")&&(t.current=Math.max(1,t.current-1)),n(this).hasClass("js-page-next")&&(t.current=Math.min(t.pagecount,t.current+1)),n(this).hasClass("js-page-last")&&(t.current=t.pagecount)):n(this).data("page")&&(t.current=parseInt(n(this).data("page")));t.go()})},go:function(n){var i=this;this.current=n||this.current;this.current=Math.max(1,i.current);this.current=Math.min(this.current,i.pagecount);this.format();this.settings.hash&&t.setHash({page:this.current});this.settings.callback&&this.settings.callback(this.current,this.pagesize,this.pagecount)},changePagesize:function(n){this.render({pagesize:n})},format:function(){var t="<ul>",i;if(t+='<li class="js-page-first js-page-action ui-pager" >'+this.settings.firstTpl+"<\/li>",t+='<li class="js-page-prev js-page-action ui-pager">'+this.settings.prevTpl+"<\/li>",this.pagecount>6){if(t+='<li data-page="1" class="ui-pager">1<\/li>',this.current<=2)t+='<li data-page="2" class="ui-pager">2<\/li>',t+='<li data-page="3" class="ui-pager">3<\/li>',t+='<li class="ui-paging-ellipse">'+this.settings.ellipseTpl+"<\/li>";else if(this.current>2&&this.current<=this.pagecount-2)t+="<li>"+this.settings.ellipseTpl+"<\/li>",t+='<li data-page="'+(this.current-1)+'" class="ui-pager">'+(this.current-1)+"<\/li>",t+='<li data-page="'+this.current+'" class="ui-pager">'+this.current+"<\/li>",t+='<li data-page="'+(this.current+1)+'" class="ui-pager">'+(this.current+1)+"<\/li>",t+='<li class="ui-paging-ellipse" class="ui-pager">'+this.settings.ellipseTpl+"<\/li>";else for(t+='<li class="ui-paging-ellipse" >'+this.settings.ellipseTpl+"<\/li>",i=this.pagecount-2;i<this.pagecount;i++)t+='<li data-page="'+i+'" class="ui-pager">'+i+"<\/li>";t+='<li data-page="'+this.pagecount+'" class="ui-pager">'+this.pagecount+"<\/li>"}else for(i=1;i<=this.pagecount;i++)t+='<li data-page="'+i+'" class="ui-pager">'+i+"<\/li>";t+='<li class="js-page-next js-page-action ui-pager">'+this.settings.nextTpl+"<\/li>";t+='<li class="js-page-last js-page-action ui-pager">'+this.settings.lastTpl+"<\/li>";t+="<\/ul>";this.container.html(t);this.current==1&&(n(".js-page-prev",this.container).addClass("ui-pager-disabled"),n(".js-page-first",this.container).addClass("ui-pager-disabled"));this.current==this.pagecount&&(n(".js-page-next",this.container).addClass("ui-pager-disabled"),n(".js-page-last",this.container).addClass("ui-pager-disabled"));this.container.find('li[data-page="'+this.current+'"]').addClass("focus").siblings().removeClass("focus");this.settings.toolbar&&this.bindToolbar()},bindToolbar:function(){for(var r=this,t=n('<li class="ui-paging-toolbar"><select class="ui-select-pagesize"><\/select><input type="text" class="ui-paging-count"/><a href="javascript:void(0)">跳转<\/a><\/li>'),u=n(".ui-select-pagesize",t),f="",i=0,e=this.settings.pageSizeList.length;i<e;i++)f+='<option value="'+this.settings.pageSizeList[i]+'">'+this.settings.pageSizeList[i]+"条/页<\/option>";u.html(f);u.val(this.pagesize);n("input",t).val(this.current);n("input",t).click(function(){n(this).select()}).keydown(function(t){if(t.keyCode==13){var i=parseInt(n(this).val())||1;r.go(i)}});n("a",t).click(function(){var t=parseInt(n(this).prev().val())||1;r.go(t)});u.change(function(){r.changePagesize(n(this).val())});this.container.children("ul").append(t)}},i}),function(n,t){typeof exports=="object"&&typeof module!="undefined"?module.exports=t():typeof define=="function"&&define.amd?define(t):n.ripplet=t()}(this,function(){"use strict";function t(n,t){var i=n.currentTarget,f=n.clientX,e=n.clientY;if(i instanceof Element&&typeof f=="number"&&typeof e=="number")return r({clientX:f,clientY:e},i.getBoundingClientRect(),window.getComputedStyle(i),u(t))}function r(n,t,i,r){var e=document,o=e.body.appendChild(e.createElement("div")),f=o.style,s;f.position="absolute";f.overflow="hidden";f.pointerEvents="none";f.left=t.left+e.documentElement.scrollLeft+e.body.scrollLeft+"px";f.top=t.top+e.documentElement.scrollTop+e.body.scrollTop+"px";f.width=t.width+"px";f.height=t.height+"px";f.zIndex=""+((i.zIndex&&parseInt(i.zIndex,10)||0)+1);f.borderTopLeftRadius=i.borderTopLeftRadius;f.borderTopRightRadius=i.borderTopRightRadius;f.borderBottomLeftRadius=i.borderBottomLeftRadius;f.borderBottomRightRadius=i.borderBottomRightRadius;f.opacity=r.opacity;s=o.appendChild(e.createElement("div"));s.className=r.className;var c=Math.max(n.clientX-t.left,t.right-n.clientX),l=Math.max(n.clientY-t.top,t.bottom-n.clientY),h=Math.sqrt(c*c+l*l),u=s.style;return u.backgroundColor=r.color,u.width=h*2+"px",u.height=h*2+"px",u.marginLeft=n.clientX-t.left-h+"px",u.marginTop=n.clientY-t.top-h+"px",u.borderRadius="50%",u.transitionProperty="transform,opacity",u.transitionDuration=r.spreadingDuration+","+r.clearingDuration,u.transitionTimingFunction=r.spreadingTimingFunction+","+r.clearingTimingFunction,u.transitionDelay=r.spreadingDelay+","+r.clearingDelay,u.transform="scale(0)",u.opacity="1",setTimeout(function(){u.transform="scale(1)";u.opacity="0"}),s.addEventListener("transitionend",function(n){n.propertyName==="opacity"&&o.parentNode&&o.parentNode.removeChild(o)}),o}function u(t){if(!t)return n;var i={};return Object.keys(n).forEach(function(r){i[r]=t.hasOwnProperty(r)?t[r]:n[r]}),i}var n={className:"",color:"rgba(0, 0, 0, .1)",opacity:null,spreadingDuration:".4s",spreadingDelay:"0s",spreadingTimingFunction:"linear",clearingDuration:"1s",clearingDelay:"0s",clearingTimingFunction:"ease-in-out"},i=Object.freeze({defaultOptions:n,"default":t});return Object.keys(i).reduce(function(n,t){return n[t]=i[t],n},t)}),function(n){n.fn.serializeObject=function(){var t={},i=this.serializeArray();return n.each(i,function(){t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""}),t}}(jQuery);$(function(){popBrowserTips();$("img").lazyload({effect:"fadeIn",threshold:2700,failure_limit:10});$(".notices").bootstrapNews({newsPerPage:4,autoplay:!0,pauseOnHover:!0,navigation:!1,direction:"down",newsTickerInterval:2500,onToDo:function(){}});$("a[href]").click(function(){$(this).attr("target")!="_blank"&&($(this).attr("href").indexOf("#")>=0||$(this).attr("href").indexOf("javascript")>=0||(loading(),setTimeout(function(){loadingDone();window.notie.alert({type:4,text:"页面加载失败！",time:4})},6e4)))});var n=$(".cd-main-header");document.documentElement.scrollTop||document.body.scrollTop>0?n.css("background-color","white"):n.css("background-color","transparent");document.onscroll=function(){document.documentElement.scrollTop||document.body.scrollTop>10?n.css({"background-color":"white",transition:"all 1s ease-in-out"}):n.css({"background-color":"transparent",transition:"all 1s ease-in-out"})};$(".btn").on("mousedown",function(n){window.ripplet(n,{color:null,className:"rainbow",clearingDuration:"3s",spreadingDuration:"1s"})});Object.prototype.hasOwnProperty.call(window,"event")||["mousedown","mouseenter","onmouseleave"].forEach(function(n){window.addEventListener(n,function(n){window.event=n},!0)});window.fetch("/notice/last").then(function(n){return n.json()}).then(function(n){if(n.Success){n=n.Data;var t=[].concat(JSON.parse(window.localStorage.getItem("notice")||"[]"));t.indexOf(n.Id)==-1&&layer.open({title:"网站公告："+n.Title,offset:window.screen.width>400?"100px":"40px",area:(window.screen.width>400?400:window.screen.width-10)+"px",shade:.6,closeBtn:!0,content:n.Content,btn:["查看详情","知道了"],btn1:function(){t.push(n.Id);window.localStorage.setItem("notice",JSON.stringify(t));window.location.href="/notice/"+n.Id;loading()},btn2:function(){t.push(n.Id);window.localStorage.setItem("notice",JSON.stringify(t));layer.closeAll()}})}}).catch(function(){console.log("Oops, error")});setInterval(function(){let n=(new Date).getTime();DotNet.invokeMethodAsync("Masuit.MyBlogs.Core","Latency").then(()=>{$("#ping").text((new Date).getTime()-n)})},2e3);$("img").on("error",function(){var n=$(this),t=n.attr("retry")||0;t>10||(t++,n.attr("retry",t),n.attr("src",n.attr("src")))});$("img").on("abort",function(){var n=$(this),t=n.attr("retry")||0;t>10||(t++,n.attr("retry",t),n.attr("src",n.attr("src")))})});clearSelect="getSelection"in window?function(){window.getSelection().removeAllRanges()}:function(){document.selection.empty()},function(n,t){function u(){o(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");f();r()}function r(){for(var n=0;n<i.length;n++){if(i[n].alpha<=0){t.body.removeChild(i[n].el);i.splice(n,1);continue}i[n].y--;i[n].scale+=.004;i[n].alpha-=.013;i[n].el.style.cssText="left:"+i[n].x+"px;top:"+i[n].y+"px;opacity:"+i[n].alpha+";transform:scale("+i[n].scale+","+i[n].scale+") rotate(45deg);background:"+i[n].color}requestAnimationFrame(r)}function f(){var t=typeof n.onclick=="function"&&n.onclick;n.onclick=function(n){t&&t();e(n)}}function e(n){var r=t.createElement("div");r.className="heart";i.push({el:r,x:n.clientX-5,y:n.clientY-5,scale:1,alpha:1,color:s()});t.body.appendChild(r)}function o(n){var i=t.createElement("style");i.type="text/css";try{i.appendChild(t.createTextNode(n))}catch(r){i.styleSheet.cssText=n}t.getElementsByTagName("head")[0].appendChild(i)}function s(){return"rgb("+~~(Math.random()*255)+","+~~(Math.random()*255)+","+~~(Math.random()*255)+")"}var i=[];n.requestAnimationFrame=function(){return n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(n){setTimeout(n,1e3/60)}}();u()}(window,document);DeviceInfo=function(){var r=typeof self!="undefined"?self:this,i=r||{},t={navigator:typeof r.navigator!="undefined"?r.navigator:{},infoMap:{engine:["WebKit","Trident","Gecko","Presto"],browser:["Safari","Chrome","Edge","IE","Firefox","Firefox Focus","Chromium","Opera","Vivaldi","Yandex","Arora","Lunascape","QupZilla","Coc Coc","Kindle","Iceweasel","Konqueror","Iceape","SeaMonkey","Epiphany","360","360SE","360EE","UC","QQBrowser","QQ","Baidu","Maxthon","Sogou","LBBROWSER","2345Explorer","TheWorld","XiaoMi","Quark","Qiyu","Wechat","Taobao","Alipay","Weibo","Douban","Suning","iQiYi"],os:["Windows","Linux","Mac OS","Android","Ubuntu","FreeBSD","Debian","iOS","Windows Phone","BlackBerry","MeeGo","Symbian","Chrome OS","WebOS"],device:["Mobile","Tablet","iPad"]}},n=function(){return{getMatchMap:function(n){return{Trident:n.indexOf("Trident")>-1||n.indexOf("NET CLR")>-1,Presto:n.indexOf("Presto")>-1,WebKit:n.indexOf("AppleWebKit")>-1,Gecko:n.indexOf("Gecko/")>-1,Safari:n.indexOf("Safari")>-1,Chrome:n.indexOf("Chrome")>-1||n.indexOf("CriOS")>-1,IE:n.indexOf("MSIE")>-1||n.indexOf("Trident")>-1,Edge:n.indexOf("Edge")>-1,Firefox:n.indexOf("Firefox")>-1||n.indexOf("FxiOS")>-1,"Firefox Focus":n.indexOf("Focus")>-1,Chromium:n.indexOf("Chromium")>-1,Opera:n.indexOf("Opera")>-1||n.indexOf("OPR")>-1,Vivaldi:n.indexOf("Vivaldi")>-1,Yandex:n.indexOf("YaBrowser")>-1,Arora:n.indexOf("Arora")>-1,Lunascape:n.indexOf("Lunascape")>-1,QupZilla:n.indexOf("QupZilla")>-1,"Coc Coc":n.indexOf("coc_coc_browser")>-1,Kindle:n.indexOf("Kindle")>-1||n.indexOf("Silk/")>-1,Iceweasel:n.indexOf("Iceweasel")>-1,Konqueror:n.indexOf("Konqueror")>-1,Iceape:n.indexOf("Iceape")>-1,SeaMonkey:n.indexOf("SeaMonkey")>-1,Epiphany:n.indexOf("Epiphany")>-1,"360":n.indexOf("QihooBrowser")>-1||n.indexOf("QHBrowser")>-1,"360EE":n.indexOf("360EE")>-1,"360SE":n.indexOf("360SE")>-1,UC:n.indexOf("UC")>-1||n.indexOf(" UBrowser")>-1,QQBrowser:n.indexOf("QQBrowser")>-1,QQ:n.indexOf("QQ/")>-1,Baidu:n.indexOf("Baidu")>-1||n.indexOf("BIDUBrowser")>-1,Maxthon:n.indexOf("Maxthon")>-1,Sogou:n.indexOf("MetaSr")>-1||n.indexOf("Sogou")>-1,LBBROWSER:n.indexOf("LBBROWSER")>-1,"2345Explorer":n.indexOf("2345Explorer")>-1,TheWorld:n.indexOf("TheWorld")>-1,XiaoMi:n.indexOf("MiuiBrowser")>-1,Quark:n.indexOf("Quark")>-1,Qiyu:n.indexOf("Qiyu")>-1,Wechat:n.indexOf("MicroMessenger")>-1,Taobao:n.indexOf("AliApp(TB")>-1,Alipay:n.indexOf("AliApp(AP")>-1,Weibo:n.indexOf("Weibo")>-1,Douban:n.indexOf("com.douban.frodo")>-1,Suning:n.indexOf("SNEBUY-APP")>-1,iQiYi:n.indexOf("IqiyiApp")>-1,Windows:n.indexOf("Windows")>-1,Linux:n.indexOf("Linux")>-1||n.indexOf("X11")>-1,"Mac OS":n.indexOf("Macintosh")>-1,Android:n.indexOf("Android")>-1||n.indexOf("Adr")>-1,Ubuntu:n.indexOf("Ubuntu")>-1,FreeBSD:n.indexOf("FreeBSD")>-1,Debian:n.indexOf("Debian")>-1,"Windows Phone":n.indexOf("IEMobile")>-1||n.indexOf("Windows Phone")>-1,BlackBerry:n.indexOf("BlackBerry")>-1||n.indexOf("RIM")>-1,MeeGo:n.indexOf("MeeGo")>-1,Symbian:n.indexOf("Symbian")>-1,iOS:n.indexOf("like Mac OS X")>-1,"Chrome OS":n.indexOf("CrOS")>-1,WebOS:n.indexOf("hpwOS")>-1,Mobile:n.indexOf("Mobi")>-1||n.indexOf("iPh")>-1||n.indexOf("480")>-1,Tablet:n.indexOf("Tablet")>-1||n.indexOf("Nexus 7")>-1,iPad:n.indexOf("iPad")>-1}},matchInfoMap:function(i){var e=t.navigator.userAgent||{},o=n.getMatchMap(e),r,u,f;for(r in t.infoMap)for(u=0;u<t.infoMap[r].length;u++)f=t.infoMap[r][u],o[f]&&(i[r]=f)},getOS:function(){var t=this;return n.matchInfoMap(t),t.os},getOSVersion:function(){var i=this,n=t.navigator.userAgent||{},r;return i.osVersion="",r={Windows:function(){var t=n.replace(/^.*Windows NT ([\d.]+);.*$/,"$1");return{"6.4":"10","6.3":"8.1","6.2":"8","6.1":"7","6.0":"Vista","5.2":"XP","5.1":"XP","5.0":"2000"}[t]||t},Android:function(){return n.replace(/^.*Android ([\d.]+);.*$/,"$1")},iOS:function(){return n.replace(/^.*OS ([\d_]+) like.*$/,"$1").replace(/_/g,".")},Debian:function(){return n.replace(/^.*Debian\/([\d.]+).*$/,"$1")},"Windows Phone":function(){return n.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/,"$2")},"Mac OS":function(){return n.replace(/^.*Mac OS X ([\d_]+).*$/,"$1").replace(/_/g,".")},WebOS:function(){return n.replace(/^.*hpwOS\/([\d.]+);.*$/,"$1")}},r[i.os]&&(i.osVersion=r[i.os](),i.osVersion==n&&(i.osVersion="")),i.osVersion},GetOSBit:function(){return navigator.userAgent.indexOf("x64")>0?"64位":""},getOrientationStatu:function(){var n=window.matchMedia("(orientation: portrait)");return n.matches?"竖屏":"横屏"},getDeviceType:function(){var t=this;return t.device="PC",n.matchInfoMap(t),t.device},getNetwork:function(){return navigator&&navigator.connection&&navigator.connection.effectiveType},getLanguage:function(){var n=this;return n.language=function(){var i=t.navigator.browserLanguage||t.navigator.language,n=i.split("-");return n[1]&&(n[1]=n[1].toUpperCase()),n.join("_")}(),n.language},getBrowserInfo:function(){var u=this,o,c,s;n.matchInfoMap(u);var r=t.navigator.userAgent||{},h=function(n,i){var r=t.navigator.mimeTypes;for(var u in r)if(r[u][n]==i)return!0;return!1},f=n.getMatchMap(r),e=!1;if(i.chrome&&(o=r.replace(/^.*Chrome\/([\d]+).*$/,"$1"),o>36&&i.showModalDialog?e=!0:o>45&&(e=h("type","application/vnd.chromium.remoting-viewer"))),f.Baidu&&f.Opera&&(f.Baidu=!1),f.Mobile&&(f.Mobile=!(r.indexOf("iPad")>-1)),e&&(h("type","application/gameplugin")?f["360SE"]=!0:t.navigator&&typeof t.navigator.connection.saveData=="undefined"?f["360SE"]=!0:f["360EE"]=!0),f.IE||f.Edge){c=window.screenTop-window.screenY;switch(c){case 102:f["360EE"]=!0;break;case 104:f["360SE"]=!0}}return s={Safari:function(){return r.replace(/^.*Version\/([\d.]+).*$/,"$1")},Chrome:function(){return r.replace(/^.*Chrome\/([\d.]+).*$/,"$1").replace(/^.*CriOS\/([\d.]+).*$/,"$1")},IE:function(){return r.replace(/^.*MSIE ([\d.]+).*$/,"$1").replace(/^.*rv:([\d.]+).*$/,"$1")},Edge:function(){return r.replace(/^.*Edge\/([\d.]+).*$/,"$1")},Firefox:function(){return r.replace(/^.*Firefox\/([\d.]+).*$/,"$1").replace(/^.*FxiOS\/([\d.]+).*$/,"$1")},"Firefox Focus":function(){return r.replace(/^.*Focus\/([\d.]+).*$/,"$1")},Chromium:function(){return r.replace(/^.*Chromium\/([\d.]+).*$/,"$1")},Opera:function(){return r.replace(/^.*Opera\/([\d.]+).*$/,"$1").replace(/^.*OPR\/([\d.]+).*$/,"$1")},Vivaldi:function(){return r.replace(/^.*Vivaldi\/([\d.]+).*$/,"$1")},Yandex:function(){return r.replace(/^.*YaBrowser\/([\d.]+).*$/,"$1")},Arora:function(){return r.replace(/^.*Arora\/([\d.]+).*$/,"$1")},Lunascape:function(){return r.replace(/^.*Lunascape[\/\s]([\d.]+).*$/,"$1")},QupZilla:function(){return r.replace(/^.*QupZilla[\/\s]([\d.]+).*$/,"$1")},"Coc Coc":function(){return r.replace(/^.*coc_coc_browser\/([\d.]+).*$/,"$1")},Kindle:function(){return r.replace(/^.*Version\/([\d.]+).*$/,"$1")},Iceweasel:function(){return r.replace(/^.*Iceweasel\/([\d.]+).*$/,"$1")},Konqueror:function(){return r.replace(/^.*Konqueror\/([\d.]+).*$/,"$1")},Iceape:function(){return r.replace(/^.*Iceape\/([\d.]+).*$/,"$1")},SeaMonkey:function(){return r.replace(/^.*SeaMonkey\/([\d.]+).*$/,"$1")},Epiphany:function(){return r.replace(/^.*Epiphany\/([\d.]+).*$/,"$1")},"360":function(){return r.replace(/^.*QihooBrowser\/([\d.]+).*$/,"$1")},"360SE":function(){var n=r.replace(/^.*Chrome\/([\d]+).*$/,"$1");return{"63":"10.0","55":"9.1","45":"8.1","42":"8.0","31":"7.0","21":"6.3"}[n]||""},"360EE":function(){var n=r.replace(/^.*Chrome\/([\d]+).*$/,"$1");return{"69":"11.0","63":"9.5","55":"9.0","50":"8.7","30":"7.5"}[n]||""},Maxthon:function(){return r.replace(/^.*Maxthon\/([\d.]+).*$/,"$1")},QQBrowser:function(){return r.replace(/^.*QQBrowser\/([\d.]+).*$/,"$1")},QQ:function(){return r.replace(/^.*QQ\/([\d.]+).*$/,"$1")},Baidu:function(){return r.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/,"$1")},UC:function(){return r.replace(/^.*UC?Browser\/([\d.]+).*$/,"$1")},Sogou:function(){return r.replace(/^.*SE ([\d.X]+).*$/,"$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/,"$1")},LBBROWSER:function(){var n=navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/,"$1");return{"57":"6.5","49":"6.0","46":"5.9","42":"5.3","39":"5.2","34":"5.0","29":"4.5","21":"4.0"}[n]||""},"2345Explorer":function(){return r.replace(/^.*2345Explorer\/([\d.]+).*$/,"$1")},TheWorld:function(){return r.replace(/^.*TheWorld ([\d.]+).*$/,"$1")},XiaoMi:function(){return r.replace(/^.*MiuiBrowser\/([\d.]+).*$/,"$1")},Quark:function(){return r.replace(/^.*Quark\/([\d.]+).*$/,"$1")},Qiyu:function(){return r.replace(/^.*Qiyu\/([\d.]+).*$/,"$1")},Wechat:function(){return r.replace(/^.*MicroMessenger\/([\d.]+).*$/,"$1")},Taobao:function(){return r.replace(/^.*AliApp\(TB\/([\d.]+).*$/,"$1")},Alipay:function(){return r.replace(/^.*AliApp\(AP\/([\d.]+).*$/,"$1")},Weibo:function(){return r.replace(/^.*weibo__([\d.]+).*$/,"$1")},Douban:function(){return r.replace(/^.*com.douban.frodo\/([\d.]+).*$/,"$1")},Suning:function(){return r.replace(/^.*SNEBUY-APP([\d.]+).*$/,"$1")},iQiYi:function(){return r.replace(/^.*IqiyiVersion\/([\d.]+).*$/,"$1")}},u.browserVersion="",s[u.browser]&&(u.browserVersion=s[u.browser](),u.browserVersion==r&&(u.browserVersion="")),u.browser=="Edge"&&(u.engine="EdgeHTML"),u.browser=="Chrome"&&parseInt(u.browserVersion)>27&&(u.engine="Blink"),u.browser=="Opera"&&parseInt(u.browserVersion)>12&&(u.engine="Blink"),u.browser=="Yandex"&&(u.engine="Blink"),{Name:u.browser,Version:u.browserVersion,CoreType:u.engine}}}}(),u=function(){return{DeviceInfoObj:function(){return{deviceType:n.getDeviceType(),OS:{Name:n.getOS(),Version:n.getOSVersion(),Bit:n.GetOSBit(),toString:function(){return n.getOS()+" "+n.getOSVersion()+" "+n.GetOSBit()}},screenHeight:i.screen.height,screenWidth:i.screen.width,language:n.getLanguage(),netWork:n.getNetwork(),orientation:n.getOrientationStatu(),browserInfo:n.getBrowserInfo(),userAgent:t.navigator.userAgent}}}}();return u.DeviceInfoObj()}();typeof Object.create!="function"&&(Object.create=function(n){function t(){}return t.prototype=n,new t}),function(n,t,i,r){var u={init:function(t,i){var r=this;if(r.elem=i,r.$elem=n(i),r.newsTagName=r.$elem.find(":first-child").prop("tagName"),r.newsClassName=r.$elem.find(":first-child").attr("class"),r.timer=null,r.resizeTimer=null,r.animationStarted=!1,r.isHovered=!1,typeof t=="string"){console&&console.error("String property override is not supported");throw"String property override is not supported";}else r.options=n.extend({},n.fn.bootstrapNews.options,t),r.prepareLayout(),r.options.autoplay&&r.animate(),r.options.navigation&&r.buildNavigation(),typeof r.options.onToDo=="function"&&r.options.onToDo.apply(r,arguments)},prepareLayout:function(){var i=this,r;n(i.elem).find("."+i.newsClassName).on("mouseenter",function(){i.onReset(!0)});n(i.elem).find("."+i.newsClassName).on("mouseout",function(){i.onReset(!1)});n.map(i.$elem.find(i.newsTagName),function(t,r){r>i.options.newsPerPage-1?n(t).hide():n(t).show()});i.$elem.find(i.newsTagName).length<i.options.newsPerPage&&(i.options.newsPerPage=i.$elem.find(i.newsTagName).length);r=0;n.map(i.$elem.find(i.newsTagName),function(t,u){u<i.options.newsPerPage&&(r=parseInt(r)+parseInt(n(t).height())+10)});n(i.elem).css({"overflow-y":"hidden",height:r});n(t).resize(function(){i.resizeTimer!==null&&clearTimeout(i.resizeTimer);i.resizeTimer=setTimeout(function(){i.prepareLayout()},200)})},findPanelObject:function(){for(var n=this.$elem;n.parent()!==r;)if(n=n.parent(),n.parent().hasClass("panel"))return n.parent();return r},buildNavigation:function(){var t=this.findPanelObject(),i,r,u;if(t){i='<ul class="pagination pull-right" style="margin: 0px;"><li><a href="#" class="prev"><span class="glyphicon glyphicon-chevron-down"><\/span><\/a><\/li><li><a href="#" class="next"><span class="glyphicon glyphicon-chevron-up"><\/span><\/a><\/li><\/ul><div class="clearfix"><\/div>';r=n(t).find(".panel-footer")[0];r?n(r).append(i):n(t).append('<div class="panel-footer">'+i+"<\/div>");u=this;n(t).find(".prev").on("click",function(n){n.preventDefault();u.onPrev()});n(t).find(".next").on("click",function(n){n.preventDefault();u.onNext()})}},onStop:function(){},onPause:function(){var n=this;n.isHovered=!0;this.options.autoplay&&n.timer&&clearTimeout(n.timer)},onReset:function(n){var t=this;t.timer&&clearTimeout(t.timer);t.options.autoplay&&(t.isHovered=n,t.animate())},animate:function(){var n=this;n.timer=setTimeout(function(){n.options.pauseOnHover||(n.isHovered=!1);n.isHovered||(n.options.direction==="up"?n.onNext():n.onPrev())},n.options.newsTickerInterval)},onPrev:function(){var t=this,i;if(t.animationStarted)return!1;t.animationStarted=!0;i="<"+t.newsTagName+' style="display:none;" class="'+t.newsClassName+'">'+n(t.$elem).find(t.newsTagName).last().html()+"<\/"+t.newsTagName+">";n(t.$elem).prepend(i);n(t.$elem).find(t.newsTagName).first().slideDown(t.options.animationSpeed,function(){n(t.$elem).find(t.newsTagName).last().remove()});n(t.$elem).find(t.newsTagName+":nth-child("+parseInt(t.options.newsPerPage+1)+")").slideUp(t.options.animationSpeed,function(){t.animationStarted=!1;t.onReset(t.isHovered)});n(t.elem).find("."+t.newsClassName).on("mouseenter",function(){t.onReset(!0)});n(t.elem).find("."+t.newsClassName).on("mouseout",function(){t.onReset(!1)})},onNext:function(){var t=this,i;if(t.animationStarted)return!1;t.animationStarted=!0;i="<"+t.newsTagName+' style="display:none;" class='+t.newsClassName+">"+n(t.$elem).find(t.newsTagName).first().html()+"<\/"+t.newsTagName+">";n(t.$elem).append(i);n(t.$elem).find(t.newsTagName).first().slideUp(t.options.animationSpeed,function(){n(this).remove()});n(t.$elem).find(t.newsTagName+":nth-child("+parseInt(t.options.newsPerPage+1)+")").slideDown(t.options.animationSpeed,function(){t.animationStarted=!1;t.onReset(t.isHovered)});n(t.elem).find("."+t.newsClassName).on("mouseenter",function(){t.onReset(!0)});n(t.elem).find("."+t.newsClassName).on("mouseout",function(){t.onReset(!1)})}};n.fn.bootstrapNews=function(n){return this.each(function(){var t=Object.create(u);t.init(n,this)})};n.fn.bootstrapNews.options={newsPerPage:4,navigation:!0,autoplay:!0,direction:"up",animationSpeed:"normal",newsTickerInterval:4e3,pauseOnHover:!0,onStop:null,onPause:null,onReset:null,onPrev:null,onNext:null,onToDo:null}}(jQuery,window,document);var radius=90,d=200,dtr=Math.PI/180,mcList=[],lasta=1,lastb=1,distr=!0,tspeed=11,size=200,mouseX=0,mouseY=10,howElliptical=1,aA=null,oDiv=null;window.onload=function(){var n=0,t=null;if(oDiv=document.getElementById("tagscloud"),oDiv){for(aA=oDiv.getElementsByTagName("a"),n=0;n<aA.length;n++)t={},aA[n].onmouseover=function(n){return function(){n.on=!0;this.style.zIndex=9999;this.style.color="#fff";this.style.padding="5px 5px";this.style.filter="alpha(opacity=100)";this.style.opacity=1}}(t),aA[n].onmouseout=function(n){return function(){n.on=!1;this.style.zIndex=n.zIndex;this.style.color="#fff";this.style.padding="5px";this.style.filter="alpha(opacity="+100*n.alpha+")";this.style.opacity=n.alpha;this.style.zIndex=n.zIndex}}(t),t.offsetWidth=aA[n].offsetWidth,t.offsetHeight=aA[n].offsetHeight,mcList.push(t);sineCosine(0,0,0);positionAll(),function(){update();setTimeout(arguments.callee,40)}()}};$(function(){var n=$("#rocket-to-top"),r=$(document).scrollTop(),i,t=!0;$(window).scroll(function(){var i=$(document).scrollTop();i==0?n.css("background-position")=="0px 0px"?n.fadeOut("slow"):t&&(t=!1,$(".level-2").css("opacity",1),n.delay(100).animate({marginTop:"-1000px"},"normal",function(){n.css({"margin-top":"-125px",display:"none"});t=!0})):n.fadeIn("slow")});n.hover(function(){$(".level-2").stop(!0).animate({opacity:1})},function(){$(".level-2").stop(!0).animate({opacity:0})});$(".level-3").click(function(){function r(){var r=n.css("background-position");if(n.css("display")=="none"||t==0){clearInterval(i);n.css("background-position","0px 0px");return}switch(r){case"0px 0px":n.css("background-position","-298px 0px");break;case"-298px 0px":n.css("background-position","-447px 0px");break;case"-447px 0px":n.css("background-position","-596px 0px");break;case"-596px 0px":n.css("background-position","-745px 0px");break;case"-745px 0px":n.css("background-position","-298px 0px")}}t&&(i=setInterval(r,50),$("html,body").animate({scrollTop:0},"slow"))})});jQuery(document).ready(function(n){function t(){n(".cd-nav-trigger").removeClass("nav-is-visible");n(".cd-main-header").removeClass("nav-is-visible");n(".cd-primary-nav").removeClass("nav-is-visible");n(".has-children ul").addClass("is-hidden");n(".has-children a").removeClass("selected");n(".moves-out").removeClass("moves-out");n(".cd-main-content").removeClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){n("body").removeClass("overflow-hidden")})}function i(t){t=="close"?(n(".cd-search").removeClass("is-visible"),n(".cd-search-trigger").removeClass("search-is-visible")):(n(".cd-search").toggleClass("is-visible"),n(".cd-search-trigger").toggleClass("search-is-visible"),n(window).width()>u&&n(".cd-search").hasClass("is-visible")&&n(".cd-search").find('input[type="search"]').focus(),n(".cd-search").hasClass("is-visible")?n(".cd-overlay").addClass("is-visible"):n(".cd-overlay").removeClass("is-visible"))}function f(){var n=window,t="inner";return"innerWidth"in window||(t="client",n=document.documentElement||document.body),n[t+"Width"]>=u?!0:!1}function r(){var t=n(".cd-nav"),i=f();i?(t.detach(),t.insertBefore(".cd-header-buttons")):(t.detach(),t.insertAfter(".cd-main-content"))}var u=1170;r();n(window).on("resize",function(){window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,300)});n(".cd-nav-trigger").on("click",function(r){if(r.preventDefault(),n(".cd-main-content").hasClass("nav-is-visible"))t(),n(".cd-overlay").removeClass("is-visible");else{n(this).addClass("nav-is-visible");n(".cd-primary-nav").addClass("nav-is-visible");n(".cd-main-header").addClass("nav-is-visible");n(".cd-main-content").addClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){n("body").addClass("overflow-hidden")});i("close");n(".cd-overlay").addClass("is-visible")}});n(".cd-search-trigger").on("click",function(n){n.preventDefault();i();t()});n(".cd-overlay").on("swiperight",function(){n(".cd-primary-nav").hasClass("nav-is-visible")&&(t(),n(".cd-overlay").removeClass("is-visible"))});n(".nav-on-left .cd-overlay").on("swipeleft",function(){n(".cd-primary-nav").hasClass("nav-is-visible")&&(t(),n(".cd-overlay").removeClass("is-visible"))});n(".cd-overlay").on("click",function(){t();i("close");n(".cd-overlay").removeClass("is-visible")});n(".cd-primary-nav").children(".has-children").children("a").on("click",function(n){n.preventDefault()});n(".has-children").children("a").on("click",function(t){f()||t.preventDefault();var r=n(this);r.next("ul").hasClass("is-hidden")?(r.addClass("selected").next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("moves-out"),r.parent(".has-children").siblings(".has-children").children("ul").addClass("is-hidden").end().children("a").removeClass("selected"),n(".cd-overlay").addClass("is-visible")):(r.removeClass("selected").next("ul").addClass("is-hidden").end().parent(".has-children").parent("ul").removeClass("moves-out"),n(".cd-overlay").removeClass("is-visible"));i("close")});n(".go-back").on("click",function(){n(this).parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("moves-out")})})