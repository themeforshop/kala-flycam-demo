/* #SmoothScroll v1.2.1 */
var $=jQuery;
(function(a){($.browser=$.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||
navigator.vendor||window.opera);(function(a){($.browser=$.browser||{}).ipad=/ipad/i.test(a)})(navigator.userAgent||navigator.vendor||window.opera);
var mobile=$.browser.mobile,ipad=$.browser.ipad,defaultOptions={frameRate:60,animationTime:700,stepSize:100,pulseAlgorithm:!0,pulseScale:6,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!1,arrowScroll:50,touchpadSupport:!0,fixedBackground:!1,excluded:""},options=defaultOptions,isExcluded=!1,isFrame=!1,direction={x:0,y:0},initDone=!1,root=document.documentElement,activeElement,observer,deltaBuffer=[120,120,120],key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,
end:35,home:36};function initTest(){var a=!1;-1<document.URL.indexOf("google.com/reader/view")&&(a=!0);if(options.excluded){var b=options.excluded.split(/[,\n] ?/);b.push("mail.google.com");for(var c=b.length;c--;)if(-1<document.URL.indexOf(b[c])){observer&&observer.disconnect();removeEvent("mousewheel",wheel);isExcluded=a=!0;break}}a&&removeEvent("keydown",keydown);options.keyboardSupport&&!a&&addEvent("keydown",keydown)}
function init(){if(document.body){var a=document.body,b=document.documentElement,c=window.innerHeight,d=a.scrollHeight;if(!$("body").hasClass("no-smooth-scroll")){root=0<=document.compatMode.indexOf("CSS")?b:a;activeElement=a;initTest();initDone=!0;if(top!=self)isFrame=!0;else if(d>c&&(a.offsetHeight<=c||b.offsetHeight<=c)){var e=!1,d=function(){e||b.scrollHeight==document.height||(e=!0,setTimeout(function(){b.style.height=document.height+"px";e=!1},500))};setTimeout(d,10);observer=new MutationObserver(d);
observer.observe(a,{attributes:!0,childList:!0,characterData:!1});root.offsetHeight<=c&&(c=document.createElement("div"),c.style.clear="both",a.appendChild(c))}-1<document.URL.indexOf("mail.google.com")?(c=document.createElement("style"),c.innerHTML=".iu { visibility: hidden }",(document.getElementsByTagName("head")[0]||b).appendChild(c)):-1<document.URL.indexOf("www.facebook.com")&&(c=document.getElementById("home_stream"))&&(c.style.webkitTransform="translateZ(0)");options.fixedBackground||isExcluded||
(a.style.backgroundAttachment="scroll",b.style.backgroundAttachment="scroll")}}}var que=[],pending=!1,lastScroll=+new Date;
function scrollArray(a,b,c,d){d||(d=1E3);directionCheck(b,c);if(1!=options.accelerationMax){var e=+new Date-lastScroll;e<options.accelerationDelta&&(e=(1+30/e)/2,1<e&&(e=Math.min(e,options.accelerationMax),b*=e,c*=e));lastScroll=+new Date}que.push({x:b,y:c,lastX:0>b?.99:-.99,lastY:0>c?.99:-.99,start:+new Date});if(!pending){var q=a===document.body,p=function(e){e=+new Date;for(var h=0,k=0,l=0;l<que.length;l++){var f=que[l],m=e-f.start,n=m>=options.animationTime,g=n?1:m/options.animationTime;options.pulseAlgorithm&&
(g=pulse(g));m=f.x*g-f.lastX>>0;g=f.y*g-f.lastY>>0;h+=m;k+=g;f.lastX+=m;f.lastY+=g;n&&(que.splice(l,1),l--)}q?window.scrollBy(h,k):(h&&(a.scrollLeft+=h),k&&(a.scrollTop+=k));b||c||(que=[]);que.length?requestFrame(p,a,d/options.frameRate+1):pending=!1};requestFrame(p,a,0);pending=!0}}
function wheel(a){initDone||init();var b=a.target,c=overflowingAncestor(b);if(!c||a.defaultPrevented||isNodeName(activeElement,"embed")||isNodeName(b,"embed")&&/\.pdf/i.test(b.src))return!0;var b=a.wheelDeltaX||0,d=a.wheelDeltaY||0;b||d||(d=a.wheelDelta||0);if(!options.touchpadSupport&&isTouchpad(d))return!0;1.2<Math.abs(b)&&(b*=options.stepSize/120);1.2<Math.abs(d)&&(d*=options.stepSize/120);scrollArray(c,-b,-d);a.preventDefault()}
function keydown(a){var b=a.target,c=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==key.spacebar;if(/input|textarea|select|embed/i.test(b.nodeName)||b.isContentEditable||a.defaultPrevented||c||isNodeName(b,"button")&&a.keyCode===key.spacebar)return!0;var d;d=b=0;var c=overflowingAncestor(activeElement),e=c.clientHeight;c==document.body&&(e=window.innerHeight);switch(a.keyCode){case key.up:d=-options.arrowScroll;break;case key.down:d=options.arrowScroll;break;case key.spacebar:d=a.shiftKey?
1:-1;d=-d*e*.9;break;case key.pageup:d=.9*-e;break;case key.pagedown:d=.9*e;break;case key.home:d=-c.scrollTop;break;case key.end:e=c.scrollHeight-c.scrollTop-e;d=0<e?e+10:0;break;case key.left:b=-options.arrowScroll;break;case key.right:b=options.arrowScroll;break;default:return!0}scrollArray(c,b,d);a.preventDefault()}function mousedown(a){activeElement=a.target}var cache={};setInterval(function(){cache={}},1E4);var uniqueID=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}();
function setCache(a,b){for(var c=a.length;c--;)cache[uniqueID(a[c])]=b;return b}function overflowingAncestor(a){var b=[],c=root.scrollHeight;do{var d=cache[uniqueID(a)];if(d)return setCache(b,d);b.push(a);if(c===a.scrollHeight){if(!isFrame||root.clientHeight+10<c)return setCache(b,document.body)}else if(a.clientHeight+10<a.scrollHeight&&(overflow=getComputedStyle(a,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return setCache(b,a)}while(a=a.parentNode)}
function addEvent(a,b,c){window.addEventListener(a,b,c||!1)}function removeEvent(a,b,c){window.removeEventListener(a,b,c||!1)}function isNodeName(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()}function directionCheck(a,b){a=0<a?1:-1;b=0<b?1:-1;if(direction.x!==a||direction.y!==b)direction.x=a,direction.y=b,que=[],lastScroll=0}var deltaBufferTimer;
function isTouchpad(a){if(a){a=Math.abs(a);deltaBuffer.push(a);deltaBuffer.shift();clearTimeout(deltaBufferTimer);deltaBufferTimer=setTimeout(function(){chrome.storage.local.set({deltaBuffer:deltaBuffer})},1E3);a=deltaBuffer[0]==deltaBuffer[1]&&deltaBuffer[1]==deltaBuffer[2];var b=isDivisible(deltaBuffer[0],120)&&isDivisible(deltaBuffer[1],120)&&isDivisible(deltaBuffer[2],120);return!(a||b)}}function isDivisible(a,b){return Math.floor(a/b)==a/b}
var requestFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1E3/60)}}(),MutationObserver=window.MutationObserver||window.WebKitMutationObserver;function pulse_(a){var b;a*=options.pulseScale;1>a?b=a-(1-Math.exp(-a)):(b=Math.exp(-1),a=1-Math.exp(-(a-1)),b+=a*(1-b));return b*options.pulseNormalize}
function pulse(a){if(1<=a)return 1;if(0>=a)return 0;1==options.pulseNormalize&&(options.pulseNormalize/=pulse_(1));return pulse_(a)}jQuery("body").hasClass("no-smooth-scroll")||mobile||ipad||(addEvent("mousedown",mousedown),addEvent("mousewheel",wheel),addEvent("load",init));
