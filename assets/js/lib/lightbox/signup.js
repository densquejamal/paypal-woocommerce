window.JSON||(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(a){if(a instanceof Object){var b="";if(a.constructor===Array){for(var c=0;c<a.length;b+=this.stringify(a[c])+",",c++);return"["+b.substr(0,b.length-1)+"]"}if(a.toString!==Object.prototype.toString)return'"'+a.toString().replace(/"/g,"\\$&")+'"';for(var d in a)b+='"'+d.replace(/"/g,"\\$&")+'":'+this.stringify(a[d])+",";return"{"+b.substr(0,b.length-1)+"}"}return"string"==typeof a?'"'+a.replace(/"/g,"\\$&")+'"':String(a)}}),function(){"use strict";var a={};a.parse=function(a){return"string"!=typeof a?{}:(a=a.trim().replace(/^\?/,""))?(a=a.replace("?","&"),a.trim().split("&").reduce(function(a,b){var c=b.replace(/\+/g," ").split("="),d=c[0],e=c[1];return d=decodeURIComponent(d),e=void 0===e?null:decodeURIComponent(e),a.hasOwnProperty(d)?Array.isArray(a[d])?a[d].push(e):a[d]=[a[d],e]:a[d]=e,a},{})):{}},a.stringify=function(a){return a?Object.keys(a).map(function(b){var c=a[b];return Array.isArray(c)?c.map(function(a){return encodeURIComponent(b)+"="+encodeURIComponent(a)}).join("&"):encodeURIComponent(b)+"="+encodeURIComponent(c)}).join("&"):""},window.queryString=a}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";function a(a,b,c,d){d=d||a;var e;a.addEventListener?(e=function(a){c.call(d,a)},a.addEventListener(b,e,!1)):a.attachEvent&&(e=function(){var a=window.event;a.target=a.target||a.srcElement,a.preventDefault=function(){window.event.returnValue=!1},c.call(d,a)},a.attachEvent("on"+b,e)),g.push([a,b,c,e])}function b(a,b,c){var d,e,f;for(f=0;f<g.length;f++)e=g[f],e[0]==a&&e[1]==b&&e[2]==c&&(d=e[3],d&&(a.removeEventListener?a.removeEventListener(b,d,!1):a.detachEvent&&a.detachEvent("on"+b,d)))}function c(){var a,b=navigator.userAgent,c=b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(c[1])?(a=/\brv[ :]+(\d+)/g.exec(b)||[],["IE",a[1]||""]):"Chrome"===c[1]&&(a=b.match(/\bOPR\/(\d+)/),null!=a)?["Opera",a[1]]:(c=c[2]?[c[1],c[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(a=b.match(/version\/(\d+(\.\d{1,2}))/i))&&c.splice(1,1,a[1]),c)}function d(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=escape(a);var c,d,e,f,g,h="",i="",j="",k=0;do c=a.charCodeAt(k++),d=a.charCodeAt(k++),i=a.charCodeAt(k++),e=c>>2,f=(3&c)<<4|d>>4,g=(15&d)<<2|i>>6,j=63&i,isNaN(d)?g=j=64:isNaN(i)&&(j=64),h=h+b.charAt(e)+b.charAt(f)+b.charAt(g)+b.charAt(j),c=d=i="",e=f=g=j="";while(k<a.length);return h}var e=window.location;e=window.location?window.location:window.src;var f=Math.max(document.documentElement.clientWidth,window.innerWidth||0);window.opener&&window.opener.document.domain===document.domain&&f<=460&&(window.opener.location.href=document.location.href,window.close()),PAYPAL.apps.Signup.MiniBrowser=function(){function d(a){console}function e(a){}function f(b){var c=u.UI={};b=b||{},c.wrapper=document.createElement("div"),c.wrapper.id=v.name,c.panel=document.createElement("div"),c.panel.className="panel",c.panel.id="PPPanel",c.mask=document.createElement("div"),c.mask.className="mask",c.mask.id="mask",a(c.mask,"click",PAYPAL.apps.Signup.MiniBrowser.restartFlow,this),c.loading=document.createElement("div"),c.loading.className="ppmodal",c.loading.id="ppmodal",a(c.loading,"click",PAYPAL.apps.Signup.MiniBrowser.restartFlow,this);var d=document.createElement("div");d.className="pplogo",c.loading.appendChild(d);var e=document.createElement("div");e.className="message",e.id="message",e.innerHTML=v.secureWindowmsg;var f=document.createElement("a");f.className="ppbutton",f.innerHTML=v.secureButtonmsg,e.appendChild(f),a(f,"click",PAYPAL.apps.Signup.MiniBrowser.restartFlow,this),c.loading.appendChild(e);var g=document.createElement("a");if(g.className="closeButton",g.role="button",g.innerText="Close Window",a(g,"click",m,this),c.loading.appendChild(g),b.error){var h=document.createElement("div");h.className="text",h.innerText=b.error,c.loading.appendChild(h)}else c.loading.className=c.loading.className+" loading";c.wrapper.appendChild(c.mask),c.wrapper.appendChild(c.loading),document.body.className=document.body.className+" "+v.name,document.body.appendChild(c.wrapper)}function g(){var a="",b=document.createElement("style");a+='a[data-paypal-button="PPLtBlue"]::before {content:"";background:url(https://www.braintreepayments.com/assets/paypal/pp-mono.png) 12px no-repeat #FFF;background-size:18.34px;display:table-cell;width:40px;height:42px;float:left;margin-right:16px;border-bottom-left-radius:5px;border-top-left-radius:5px;margin-top:-12px}',a+='a[data-paypal-button="PPLtBlue"] {padding-top:12px;border-radius:5px;border:1px solid #9DA3A6;vertical-align:middle;padding-right:16px;display:table-cell;text-decoration:none;background-color:#1B9DDb;color:#fff;font-size:15px;font-family:HelveticaNeueMedium,"Helvetica Neue Medium",Helvetica,Arial,sans-serif}',a+="#"+v.name+" { z-index: 20002; top: 0; left: 0; }",a+="#"+v.name+" .mask { z-index: 20001; position: absolute; top: 0; left: 0; background-color: black; background-image: radial-gradient(circle farthest-corner, #000000, #4A4A4A); opacity: 0.80; filter: alpha(opacity=80); }",a+="#"+v.name+' .ppmodal { font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif; font-size: 14px; text-align: center; color:#fff; z-index: 20003; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box; width: 270px; top: 50%; left: 50%; position: fixed; margin-left: -165px; margin-top: -80px; }',a+="#"+v.name+" .loading .spinner { height:30px; width:30px; position:absolute; left:48%; top:50%; margin:-15px auto auto -15px; opacity:1; filter: alpha(opacity=100); background-color: rgba(255, 255, 255, 0.701961); -webkit-animation: rotation .7s infinite linear; -moz-animation: rotation .7s infinite linear; -o-animation: rotation .7s infinite linear; animation: rotation .7s infinite linear; border-left:8px solid rgba(0,0,0,.20); border-right:8px solid rgba(0,0,0,.20); border-bottom:8px solid rgba(0,0,0,.20); border-top:8px solid rgba(33,128,192,1); border-radius:100%; } @-webkit-keyframes rotation { from {-webkit-transform: rotate(0deg);} to {-webkit-transform: rotate(359deg);}} @-moz-keyframes rotation { from {-moz-transform: rotate(0deg);} to {-moz-transform: rotate(359deg);} } @-o-keyframes rotation { from {-o-transform: rotate(0deg);} to {-o-transform: rotate(359deg);} } @keyframes rotation { from {transform: rotate(0deg);} to {transform: rotate(359deg);}}",a+="#"+v.name+" .loading.noanimation .spinner {height: 48px; width: 48px; border:none; background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/icon_loader_med.gif) no-repeat center center;}",a+="#"+v.name+" .ppmodal.loading { min-height: 160px; }",a+="#"+v.name+" .ppmodal .pplogo {background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/mb_sprite.png) no-repeat 0 0; width: 94px; height: 25px; margin:0 0 26px 80px}",a+="#"+v.name+" .ppmodal .closeButton {position:fixed; top:10px; right:10px; display:inline-block; background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/mb_sprite.png) no-repeat 0 -67px; width: 14px; height: 14px; text-indent: -999em; cursor: pointer; }",a+="#"+v.name+" .ppmodal .closeButton:hover {background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/mb_sprite.png) no-repeat -50px -67px; width: 14px; height: 14px;}",a+="#"+v.name+" .ppmodal .text { font-size: 14px; }",a+="#"+v.name+" .ppmodal a.button {display:block; cursor:pointer; margin-top:20px; color: #0088cc;}",a+="#"+v.name+" .ppmodal a.ppbutton {display:block; cursor:pointer; margin-top:20px; color: #0088cc;}",a+='@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: ~"2/1"), only screen and (min-device-pixel-ratio: 2)  { #'+v.name+" .ppmodal .pplogo {background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/mb_sprite_2x.png) no-repeat 0 0; background-size: 100px 75px;}}",b.type="text/css",b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a)),v.css=a,document.getElementsByTagName("head")[0].appendChild(b)}function h(){var a,b,c,d,e,f,g=document.documentElement?document.documentElement.clientWidth:window.innerWidth;window.innerHeight&&window.scrollMaxY?(c=g+window.scrollMaxX,d=window.innerHeight+window.scrollMaxY):document.body.scrollHeight>document.body.offsetHeight?(c=document.body.scrollWidth,d=document.body.scrollHeight):(c=document.body.offsetWidth,d=document.body.offsetHeight),window.innerHeight?(a=g,b=window.innerHeight):document.documentElement&&document.documentElement.clientHeight?(a=document.documentElement.clientWidth,b=document.documentElement.clientHeight):document.body&&(a=document.body.clientWidth,b=document.body.clientHeight),e=a>c?a:c,f=b>d?b:d,u.UI.mask.style.width=e+"px",u.UI.mask.style.height=f+"px",v.name&&document.body.className.indexOf(v.name)===-1&&(document.body.className+=" "+v.name)}function i(){var a,b,c,f,g=v.mbWidth,h=v.mbHeight,i=!1,k=document.querySelector("#PPMiniWin .ppmodal.loading");window.outerWidth?(a=Math.round((window.outerWidth-g)/2)+window.screenX,b=Math.round((window.outerHeight-h)/2)+window.screenY):window.screen.width&&(a=Math.round((window.screen.width-g)/2),b=Math.round((window.screen.height-h)/2));var l=!1;if(v.currentAgent&&v.currentAgent.length>0){var n=v.currentAgent[0],o=Number(v.currentAgent[1]);"Chrome"===n&&o>=59&&(l=!0)}if(c=l?window.open("about:blank",v.name,"top="+b+", left="+a+", width="+g+", height="+h+", status=yes, toolbar=no, menubar=no, resizable=yes, scrollbars=no"):window.open("about:blank",v.name,"top="+b+", left="+a+", width="+g+", height="+h+", location=1, status=1, toolbar=0, menubar=0, resizable=1, scrollbars=1"),u.win=c,"undefined"==typeof c)return e({step:"OPEN_MB",status:"OPEN_MB_FAILED"}),window;e({step:"OPEN_MB",status:"OPEN_MB_SUCCESS"}),c&&c.focus&&c.focus(),k&&(k.className="ppmodal");try{c.document.write('<!DOCTYPE html><html><head><style>body.PPMiniWin{overflow: hidden;} #PPMiniWin .mask {z-index: 20001;position: absolute;top: 0;left: 0;background-color: black;opacity: 0.54;filter: alpha(opacity=54);}#PPMiniWin .ppmodal {z-index: 20003;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;width: 100%;height: 100%;top: 0;left: 0;overflow: hidden;background-color: #EFEFEF;-moz-background-clip: padding;-webkit-background-clip: padding-box;background-clip: padding-box;padding: 2em;font-family: "helvetica heue", arial, helvetica, sans-serif;position: fixed;}#PPMiniWin .loading .mask {height: 30px;width: 30px;position: absolute;left: 48%;top: 50%;margin: -15px auto auto -15px;opacity: 1;filter: alpha(opacity=100);background-color: rgba(255, 255, 255, 0.701961);-webkit-animation: rotation .7s infinite linear;-moz-animation: rotation .7s infinite linear;-o-animation: rotation .7s infinite linear;animation: rotation .7s infinite linear;border-left: 8px solid rgba(0, 0, 0, .20);border-right: 8px solid rgba(0, 0, 0, .20);border-bottom: 8px solid rgba(0, 0, 0, .20);border-top: 8px solid rgba(33, 128, 192, 1);border-radius: 100%;}@-webkit-keyframes rotation {from {-webkit-transform: rotate(0deg);}to {-webkit-transform: rotate(359deg);}}@-moz-keyframes rotation {from {-moz-transform: rotate(0deg);}to {-moz-transform: rotate(359deg);}}@-o-keyframes rotation {from {-o-transform: rotate(0deg);}to {-o-transform: rotate(359deg);}}@keyframes rotation {from {transform: rotate(0deg);}to {transform: rotate(359deg);}}#PPMiniWin .loading.noanimation .mask {height: 48px;width: 48px;border: none;background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/icon_loader_med.gif) no-repeat center center;}#PPMiniWin .ppmodal.loading {min-height: 160px;}#PPMiniWin .ppmodal .pplogo {background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/logo.png) no-repeat;position: relative;top: 33%;left: 38%;width: 106px;height: 29px;}#PPMiniWin .ppmodal .closeButton {width: 13px;height: 13px;padding: 8px;position: absolute;top: 4px;right: 4px;background: transparent url(/images/icon_close_2x.png) no-repeat center center;background-size: 13px;text-indent: -999em;-webkit-tap-highlight-color: rgba(0, 0, 0, 0.2);cursor: pointer;}</style></head><body><div id="PPMiniWin"><div class="ppmodal loading"><div class="pplogo"></div><div class="mask"></div></div></div></body></html>')}catch(p){d("unable to write to minibrowser")}return i=!0,i&&(f=setInterval(function(){if(c&&c.closed)return clearInterval(f),i=!1,m()},500)),j(),c}function j(){var a,b=window.addEventListener?"addEventListener":"attachEvent",c=window[b],e="attachEvent"===b?"onmessage":"message";window.postMessage&&c(e,function(b){var c=document.querySelector("#PPMiniWin .message");if(b.origin.match(/paypal.com/i)||v.devMode){if(a=JSON.parse(b.data),v.returnUrl=a.returnUrl,v.landingUrl=a.landingUrl,v.secureWindowmsg=a.secureWindowmsg||v.secureWindowmsg,v.returnUrl&&(v.returnUrl=v.returnUrl.replace(/&amp;/g,"&")),v.landingUrl&&(v.landingUrl=v.landingUrl.replace(/&amp;/g,"&")),a.cancelUrl&&(v.cancelUrl=a.cancelUrl.replace(/&amp;/g,"&")),a.onboardedCompleteToken){var e=v.onboardCompleteCallback;if("function"==typeof e)try{e(a.onboardedCompleteToken)}catch(f){console.log("PAYPAL::SIGNUP::MINIBROWSER::onboardCompleteCallback::ERROR::Callback function has an error and could not completely executed.")}}c&&(c.innerHTML=v.secureWindowmsg),a.updateParent&&v.returnUrl&&(c.innerHTML=v.loadingMsg,a.cancelUrl=null,m())}else d("Message received from invalid domain")},!1)}function k(){try{var a=window.event?window.event.currentTarget||window.event.target||window.event.srcElement:this,b=this.href,c=this.href;if(window.event&&(event.ctrlKey||event.shiftKey||event.metaKey)&&e({step:"RENDER",status:"META_KEYPRESS"}),v.qString=queryString.parse(this.href),v.partnerId=queryString.parse(this.href).partnerId,v.displayMode=queryString.parse(this.href).displayMode,!v.displayMode||"MINIBROWSER"!==v.displayMode.toUpperCase()&&"LIGHTBOX"!==v.displayMode.toUpperCase()&&"EMBEDDED"!==v.displayMode.toUpperCase()&&"EMBEDDEDMINI"!==v.displayMode.toUpperCase())return void(v.showMiniB=!1);v.showMiniB=!0,a&&a.form?a.form.target=v.name:a&&a.tagName&&"a"===a.tagName.toLowerCase()?a.target=v.name:a&&a.tagName&&"img"===a.tagName.toLowerCase()&&"a"===a.parentNode.tagName.toLowerCase()?a.parentNode.target=v.name:this&&this.hasOwnProperty("target")&&"undefined"!=typeof this.target&&(this.target=v.name);var d=a?a.getAttribute("data-paypal-popup-close"):"",g=window&&window[d]||PAYPAL.apps.Signup.MiniBrowser.onPopupClose;l(g)&&(v.popupCloseCallback=g);var j=a?a.getAttribute("data-paypal-onboard-complete"):"",k=window&&window[j]||PAYPAL.apps.Signup.MiniBrowser.onOnboardComplete;return"function"==typeof k&&(v.onboardCompleteCallback=k),document.querySelectorAll("#PPMiniWin").length||(f(),h(),o()),w=!0,c=c.replace("displayMode=embedded","displayMode=regular"),c=c.replace("displayMode=lightbox","displayMode=regular"),c=c.replace("displayMode=minibrowser","displayMode=regular"),v.appUrl=c,b=b.replace("displayMode=regular","displayMode=minibrowser"),b=b.replace("displayMode=embedded","displayMode=minibrowser"),b=b.replace("displayMode=lightbox","displayMode=minibrowser"),b.indexOf("displayMode=")==-1&&(b+="&displayMode=minibrowser"),this.href=b,i()}catch(m){e({step:"RENDER",status:"ERROR",error_msg:m})}}function l(a){return"function"==typeof a}function m(a){var c=u.UI;if(w&&c.wrapper&&c.wrapper.parentNode){var d=document.querySelector("#PPMiniWin .message");d&&v.cancelUrl?(d.innerHTML=v.loadingMsg,e({step:"DESTROY",status:"CANCEL_URL"}),(v.fromStartFlow||window.location.href.split("#")[0]==v.cancelUrl.split("#")[0])&&c.wrapper.parentNode.removeChild(c.wrapper),window.location.replace(v.cancelUrl)):(c.wrapper.parentNode.removeChild(c.wrapper),e({step:"DESTROY",status:"NO_CANCEL_URL"}))}window.orientation&&b(window,"orientationchange",h),b(window,"resize",h),w=!1,u.win&&u.win.close&&u.win.close();var f=v.popupCloseCallback;if(l(f))try{f()}catch(g){var i=console&&console.log,j=g&&g.message;l(i)&&i("PAYPAL::SIGNUP::MINIBROWSER::onPopupClose::ERROR::Callback function has an error and could not completely executed."+j)}v.returnUrl&&(e({step:"DESTROY",status:"RETURN_URL"}),v.fromStartFlow&&w&&c.wrapper&&c.wrapper.parentNode&&c.wrapper.parentNode.removeChild(c.wrapper),window.location.replace(v.returnUrl))}function n(a){null!==a.which||null===a.charCode&&null===a.keyCode||(a.which=null!==a.charCode?a.charCode:a.keyCode),27===a.which&&m()}function o(){window.orientation&&a(window,"orientationchange",h,this),a(window,"resize",h,this),a(window,"keyup",n,this)}function p(){var a=null;a=document.querySelectorAll("[data-paypal-button]");for(var b,c=a.length;c--;)b=a[c].href,b=b.replace("displayMode=lightbox","displayMode=minibrowser"),b=b.replace("displayMode=embedded","displayMode=minibrowser"),a[c].href=b,q(a[c]),a[c].removeAttribute("target")}function q(b){a(b,"click",k,this)}function r(a){var b=!1;return a.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)&&(b=!0),b}function s(a){return/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a)}function t(){var a=navigator.userAgent.toLowerCase();return v.isSmartPhone=r(a),v.isWebView=s(a),"object"==typeof v.currentAgent&&2===v.currentAgent.length&&parseFloat(v.currentAgent[1])<v.supportedAgents[v.currentAgent[0]]?(e({step:"ICEligiblity",status:"BROWSER_NOT_SUPPORTED",browser:v.currentAgent[0],browserversion:v.currentAgent[1]}),!1):!(v.isSmartPhone||v.isWebView||v.oldIe)}var u={},v={name:"PPMiniWin",bridgeName:"PayPalBridge",trigger:null,isSmartPhone:!1,isWebView:!1,merchantID:null,showMiniB:!0,pxpUrl:"https://api-pxp.paypal.com/v1/experimentation/treatments",pxpDevUrl:"https://pxprest.qa.paypal.com:12533/v1/experimentation/treatments",sandBox:document.querySelectorAll("[data-paypal-sandbox]")&&document.querySelectorAll("[data-paypal-sandbox]").length,devMode:!1,log:!0,mbWidth:450,mbHeight:600,secureWindowmsg:document.querySelectorAll("[data-secureWindowMsg]")[0].attributes["data-securewindowmsg"].value,secureButtonmsg:document.querySelectorAll("[data-secureButtonMsg]")[0].attributes["data-secureButtonMsg"].value,loadingMsg:"Loading...",oldIe:navigator.userAgent.match(/MSIE [87]\./i),currentAgent:c(),supportedAgents:{Chrome:27,IE:10,MSIE:10,Firefox:30,Safari:5.1,Opera:23}},w=!1;return u.init=function(){p(),g()},u.setTrigger=function(b){if(b.constructor.toString().indexOf("Array")>-1)for(var c=0;c<b.length;c++)u.setTrigger(b[c]);else b="string"==typeof b?document.getElementById(b):b,a(b,"click",k,this)},u.initXO=function(){t()&&v.showMiniB&&(v.win=k())},u.startFlow=function(a,b){if(a&&a.match(/paypal.com/i)&&(v.fromStartFlow=!0),!t()||!v.showMiniB)return void(a?location.href=a:window.name=v.name);var c=b===!0?v.win||window:k();c=c||window;try{c.name=c.name||v.name}catch(e){d("Mini browser window already opened and trying to change name")}a&&("embeddedmini"===PAYPAL.apps.experience?window.top.location=a:c.location?c.location=a:c.src=a)},u.closeFlow=function(a){m(),a&&(top.location.href=a)},u.isOpen=function(){return w},u.restartFlow=function(a){return u.win?void u.win.focus():(a=v.appUrl,u.startFlow(a),!1)},u.showError=function(a){f({error:a}),h(),o(),w=!0},u}(),PAYPAL.apps.Signup.Embedded=function(){function c(b){var c=q.UI={};b=b||{},c.wrapper=document.createElement("div"),c.wrapper.id=r.name,c.panel=document.createElement("div"),c.panel.className="panel",c.panel.id="PPPanel";try{c.iframe=document.createElement('<iframe name="'+r.name+'">')}catch(d){c.iframe=document.createElement("iframe"),c.iframe.name="PPFrame"}c.iframe.frameBorder="0",c.iframe.border="0",c.iframe.scrolling="no",c.iframe.allowTransparency="true",c.iframe.id="PPFrame",c.iframe.height="1450px",c.iframe.setAttribute("data-referrer",location.href),c.panel.style.visibility="hidden",c.mask=document.createElement("div"),c.mask.className="mask",c.loading=document.createElement("div"),c.loading.className="modal";var e=document.createElement("div");if(e.className="logo",c.loading.appendChild(e),b.error){var f=document.createElement("div");f.className="text",f.innerText=b.error,c.loading.appendChild(f);var g=document.createElement("a");g.className="closeButton",g.role="button",g.innerText="Close Window",a(g,"click",j,this),c.loading.appendChild(g)}else{c.loading.className=c.loading.className+" loading";var h=document.createElement("div");h.className="mask",c.loading.appendChild(h)}c.panel.appendChild(c.iframe),c.wrapper.appendChild(c.mask),c.wrapper.appendChild(c.loading),c.wrapper.appendChild(c.panel),document.body.className=document.body.className+" "+r.name;var i=m("data-paypal-url");i[0].appendChild(c.wrapper);m("data-partner-email")}function e(){var a="",b=document.createElement("style");a+="html { overflow: scroll; }",a+="body."+r.name+" { overflow: hidden; }",a+="#"+r.name+" { }",a+="#"+r.name+" .panel { border: none; width: auto; height: auto; overflow: visible; }",a+="#"+r.name+" .panel iframe { width: 100%; /*height: 1800px;*/ border:0; }",a+="#"+r.name+" .mask { position: absolute; top: 0; left: 0; background-color: black; opacity: 0.54; filter: alpha(opacity=54); }",a+="#"+r.name+' .modal { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box; width: 330px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; overflow: hidden; background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/cloth.png) #EFEFEF; -moz-background-clip: padding; -webkit-background-clip: padding-box; background-clip: padding-box; -moz-box-shadow: 0 0 8px 1px #000000; -webkit-box-shadow: 0 0 8px 1px black; box-shadow: 0 0 8px 1px black; padding: 2em; font-family: "helvetica heue", arial, helvetica, sans-serif; top: 50%; left: 50%; position: fixed; margin-left: -165px; margin-top: -80px; }',a+="#"+r.name+" .modal.loading { min-height: 160px; }",a+="#"+r.name+" .modal .logo { background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/logo.png) no-repeat; width: 106px; height: 29px; margin-bottom: 20px; }",a+="#"+r.name+" .modal .mask { background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/spinner.gif) no-repeat center center; position: absolute; top: 0; bottom: 0; left: 0; right: 0; }",a+="#"+r.name+" .modal .closeButton {  width: 13px; height: 13px; padding: 8px; position: absolute; top: 4px; right: 4px; background: transparent url(/images/icon_close_2x.png) no-repeat center center; background-size: 13px; text-indent: -999em; -webkit-tap-highlight-color: rgba(0, 0, 0, 0.2); cursor: pointer; }",a+="#"+r.name+" .modal .text { font-size: 14px; }",b.type="text/css",b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a)),document.getElementsByTagName("head")[0].appendChild(b)}function f(a){var b,c,d,e,f,g,h=document.documentElement?document.documentElement.clientWidth:window.innerWidth;window.innerHeight&&window.scrollMaxY?(d=h+window.scrollMaxX,e=window.innerHeight+window.scrollMaxY):document.body.scrollHeight>document.body.offsetHeight?(d=document.body.scrollWidth,e=document.body.scrollHeight):(d=document.body.offsetWidth,e=document.body.offsetHeight),window.innerHeight?(b=h,c=window.innerHeight):document.documentElement&&document.documentElement.clientHeight?(b=document.documentElement.clientWidth,c=document.documentElement.clientHeight):document.body&&(b=document.body.clientWidth,c=document.body.clientHeight),f=b>d?b:d,g=c>e?c:e,g=g>1200?g:"1200",q.UI.mask.style.width=f+"px",q.UI.mask.style.height=g+"px",q.UI.iframe.clientHeight>document.documentElement.clientHeight?document.body.className=document.body.className.replace(r.name,""):r.name&&document.body.className.indexOf(r.name)===-1&&(document.body.className+=" "+r.name)}function g(a){var b,c,d;window.innerWidth?(b=window.innerWidth,c=window.innerHeight,d=window.pageYOffset):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(b=document.documentElement.clientWidth,c=document.documentElement.clientHeight,d=document.documentElement.scrollTop):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(b=document.body.clientWidth,c=document.body.clientHeight,d=document.body.scrollTop)}function h(){if(r.isSmartPhone)return window.open("",r.name);c(),l(),s=!0,setTimeout(function(){q.UI.panel.style.visibility="visible",q.UI.panel.setAttribute("tabindex","-1"),q.UI.loading.style.display="none"},500);var a=window.addEventListener?"addEventListener":"attachEvent",b=window[a],d="attachEvent"==a?"onmessage":"message";return b(d,function(a){isNaN(a.data)?document.getElementById("PPFrame").height="1400px":document.getElementById("PPFrame").height=a.data+"px"},!1),q.UI.iframe}function i(a){q.UI;null===q.UI.iframe.contentWindow.document.getElementById("onboardingContent")?setTimeout(i,500):q.UI.iframe.style.height=q.UI.iframe.contentWindow.document.body.scrollHeight+"px"}function j(a){var c=q.UI;s&&c.wrapper&&c.wrapper.parentNode&&c.wrapper.parentNode.removeChild(c.wrapper),window.orientation&&b(window,"orientationchange",f),b(window,"resize",f),b(window,"resize",g),b(window,"unload",j),s=!1,document.body.className=document.body.className.replace(r.name,"")}function k(a){null!==a.which||null===a.charCode&&null===a.keyCode||(a.which=null!==a.charCode?a.charCode:a.keyCode),27===a.which&&j()}function l(){window.orientation&&a(window,"orientationchange",f,this),a(window,"unload",j,this),a(window,"keyup",k,this)}function m(a){function b(a,c){for(c(a),a=a.firstChild;a;)b(a,c),a=a.nextSibling}var c=[];return b(document.body,function(b){1===b.nodeType&&b.getAttribute(a)&&c.push(b)}),c}function n(){var a=null;a=document.querySelectorAll?document.querySelectorAll("[data-paypal-button]"):m("data-paypal-button");var b,c=a.length;for(b=window.location?window.location:window.src;c--;)a[c].href=a[c].href+"&ref="+b,o(a[c])}function o(b){b&&b.form?b.form.target=r.name:b&&"a"==b.tagName.toLowerCase()&&(b.target=r.name),a(b,"click",h,this)}function p(){var a=navigator.userAgent.toLowerCase(),b=!1;a.match(/iPhone|iPod|Android|Blackberry.*WebKit/i)&&(b=!(a.search("android")>-1&&a.search("mobile")===-1)),r.isSmartPhone=b}var q={},r={name:"PPFrameWrapper",trigger:null,isSmartPhone:!1,showMiniB:!1,showLegacyXP:!0,pxpUrl:"https://api-pxp.paypal.com/v1/experimentation/treatments",pxpDevUrl:"https://pxprest.qa.paypal.com:12533/v1/experimentation/treatments",devMode:!1},s=!1;return q.render=function(){var a,b,c=[],f=(r.devMode?r.pxpDevUrl:r.pxpUrl,this),g="legacy";n(),e(),p(),window.paypalInit&&!window.paypalInit.hasRun&&(window.paypalInit.hasRun=!0,window.paypalInit());var c=null;c=document.querySelectorAll?document.querySelectorAll("[data-paypal-url]"):m("data-paypal-url");var h,i,j=c.length;window.location?(h=window.location,i=window.top.location):(h=window.src,i=window.src);for(var k,l;j--;)for(var o=c[j].attributes.length;o--;)"data-paypal-url"===c[j].attributes[o].nodeName&&(k=c[j].attributes[o].nodeValue),"data-partner-email"===c[j].attributes[o].nodeName&&(l=c[j].attributes[o].nodeValue);r.qString=queryString.parse(k),r.partnerId=queryString.parse(k).partnerId,r.displayMode=queryString.parse(k).displayMode,b=i,r.showMiniB=!0,r.showLegacyXP=!1,g="minibrowser",a=PAYPAL.apps.ppobjects+"/webstatic/partneronboard/productSelection.html?ppUrl="+encodeURIComponent(k)+"&emailAddress="+l+"&showMB="+r.showMiniB+"&parentRef="+b;d(a);f.startFlow(a)},q.setTrigger=function(b){if(b.constructor.toString().indexOf("Array")>-1)for(var c=0;c<b.length;c++)q.setTrigger(b[c]);else b="string"==typeof b?document.getElementById(b):b,b&&b.form?b.form.target=r.name:b&&"a"===b.tagName.toLowerCase()&&(b.target=r.name),a(b,"click",h,this)},q.startFlow=function(a){var b=h();setTimeout(function(){q.UI.panel.style.visibility="visible",q.UI.panel.setAttribute("tabindex","-1"),q.UI.panel.focus(),q.UI.loading.style.display="none"},500),b.location?b.location=a:b.src=a},q.closeFlow=function(){j()},q.isOpen=function(){return s},q.showError=function(a){c({error:a}),f(),g(),l(),s=!0},q.resizeIframe=function(){q.UI;null===q.UI.iframe.contentWindow.document.getElementById("onboardingContent")&&setTimeout(i,500)},q.getScroll=function(){if(void 0!=window.pageYOffset)return[pageXOffset,pageYOffset];var a,b,c=document,d=c.documentElement,e=c.body;return a=d.scrollLeft||e.scrollLeft||0,b=d.scrollTop||e.scrollTop||0,[a,b]},q.getState=function(){var a=document.getElementById("myFrame"),b="getstate";a.contentWindow.postMessage?a.contentWindow.postMessage(b,"*"):alert("Your browser does not support the postMessage method!")},q.onMessage=function(a){var b=a.data,c=b.split(",");"true"==c[0]?alert("The check box is checked."):alert("The check box is not checked.");var d=Number(c[1]);alert("The "+(d+1)+". option is selected.")},q}(),PAYPAL.apps.Signup.render=function(){PAYPAL.apps.Signup.MiniBrowser.init()};var g=[]}(),function(){function a(){if(!h&&(h=!0,i)){for(var a=0;a<i.length;a++)i[a].call(window,[]);i=[]}}function b(a){var b=window.onload;"function"!=typeof window.onload?window.onload=a:window.onload=function(){b&&b(),a()}}function c(){if(!g){if(g=!0,document.addEventListener&&!f.opera&&document.addEventListener("DOMContentLoaded",a,!1),f.msie&&window==top&&function(){if(!h){try{document.documentElement.doScroll("left")}catch(b){return void setTimeout(arguments.callee,0)}a()}}(),f.opera&&document.addEventListener("DOMContentLoaded",function(){if(!h){for(var b=0;b<document.styleSheets.length;b++)if(document.styleSheets[b].disabled)return void setTimeout(arguments.callee,0);a()}},!1),f.safari){var c=0;!function(){if(!h){if("loaded"!=document.readyState&&"complete"!=document.readyState)return void setTimeout(arguments.callee,0);if(void 0===c){for(var b=document.getElementsByTagName("link"),d=0;d<b.length;d++)"stylesheet"==b[d].getAttribute("rel")&&c++;var e=document.getElementsByTagName("style");c+=e.length}return document.styleSheets.length!=c?void setTimeout(arguments.callee,0):void a()}}()}b(a)}}var d=window.DomReady={},e=navigator.userAgent.toLowerCase(),f={version:(e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(e),opera:/opera/.test(e),msie:/msie/.test(e)&&!/opera/.test(e),mozilla:/mozilla/.test(e)&&!/(compatible|webkit)/.test(e)},g=!1,h=!1,i=[];d.ready=function(a,b){c(),h?a.call(window,[]):i.push(function(){return a.call(window,[])})},c()}(),DomReady.ready(function(){if("embedded"===PAYPAL.apps.experience)PAYPAL.apps.Signup.Embedded.render();else if("embeddedmini"===PAYPAL.apps.experience){var a=queryString.parse(location.search);"true"===a.showMB&&PAYPAL.apps.Signup.MiniBrowser.init()}else PAYPAL.apps.Signup.MiniBrowser.init()});