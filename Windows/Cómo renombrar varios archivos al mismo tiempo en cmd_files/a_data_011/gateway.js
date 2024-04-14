var versionPixelFired=false;let isInit=false;let isGwd=false;function __ez_init_gateway(){isInit=true;firepx();setInitCookie();checkGwd();}
function setInitCookie(){let expireTime=(new Date(Date.now()+300000)).toUTCString();let version=-1;if(typeof window.ezgwb!=='undefined'&&typeof window.ezgwb.version!=='undefined'&&!isNaN(window.ezgwb.version)){version=parseInt(window.ezgwb.version);}
let intCookie="ezgwv="+version+"; expires="+expireTime+"; path=/";document.cookie=intCookie;}
function checkGwd(){if(window.hideGatewayButton===true){isGwd=true;return}
if(typeof window.ezgwb!=='undefined'&&typeof window.ezgwb.version!=='undefined'&&(window.ezgwb.version===-1||isNaN(window.ezgwb.version))){isGwd=true;return}
let minPageLength=window.innerHeight*2.5;if(getPageLength()<=minPageLength){isGwd=true;return}
let seenVignette=getCookie("ezvignetteviewed");let confirmedShowMore=getCookie("ezgwcc");if(seenVignette!==""||confirmedShowMore!==""){isGwd=true;return}}
function __ez_show_gateway(){if(isInit!==true){__ez_init_gateway();}
if(isGwd===false){let triggerLength=800;if(typeof window.ezcustscry!=='undefined'){triggerLength=window.ezcustscry;}
let gateway=document.getElementById("ez-gateway");let gatewaybg=document.getElementById("ez-gateway-background");if(!gateway||!gatewaybg){return;}
gateway.style.display="flex";gatewaybg.style.display="block";scrollEventThrottle((scrollPosition,prevScrollPos)=>{if(prevScrollPos>scrollPosition){if(window.pageYOffset<triggerLength){gateway.style.display="none";gatewaybg.style.display="none";}}else{if(window.pageYOffset>triggerLength+2){window.scrollTo(0,triggerLength+2);}}});let gwClickBtn=document.getElementById("ez-gateway-button");if(gwClickBtn){gwClickBtn.onclick=function(){let expireTime=(new Date(Date.now()+300000)).toUTCString();let intCookie="ezgwcc=1; expires="+expireTime+"; path="+window.location.pathname;document.cookie=intCookie;}}}};function firepx(){if(!versionPixelFired&&typeof window.ezgwb!=='undefined'&&typeof window.ezgwb.version!=='undefined'){let gatewayVersion=-1;if(!isNaN(window.ezgwb.version)){gatewayVersion=parseInt(window.ezgwb.version);}
__ez.bit.AddAndFire(window["_ezaq"]["page_view_id"],[(new __ezDotData('show_more_version',gatewayVersion))]);versionPixelFired=true;}}
window.addEventListener("beforeunload",function(e){sessionStorage.setItem("position",window.scrollY);});function scrollEventThrottle(fn){let scrollPosition=0;let ticking=false;window.addEventListener("scroll",function(){let prevScrollPos=scrollPosition;scrollPosition=window.scrollY;if(!ticking){window.requestAnimationFrame(function(){fn(scrollPosition,prevScrollPos);ticking=false;});ticking=true;}});}
function getCookie(cname){let name=cname+"=";let decodedCookie=decodeURIComponent(document.cookie);let ca=decodedCookie.split(';');for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function getPageLength(){return Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);}