var smf_formSubmitted=false;if(typeof(document.getElementById)=="undefined")
document.getElementById=function(id)
{return document.all[id];}
else if(!window.XMLHttpRequest&&window.ActiveXObject)
window.XMLHttpRequest=function()
{return new ActiveXObject(navigator.userAgent.indexOf("MSIE 5")!=-1?"Microsoft.XMLHTTP":"MSXML2.XMLHTTP");};if(typeof(document.forms)=="undefined")
document.forms=document.getElementsByTagName("form");function getXMLDocument(url,callback)
{if(!window.XMLHttpRequest)
return false;var myDoc=new XMLHttpRequest();if(typeof(callback)!="undefined")
{myDoc.onreadystatechange=function()
{if(myDoc.readyState!=4)
return;if(myDoc.responseXML!=null&&myDoc.status==200)
callback(myDoc.responseXML);};}
myDoc.open('GET',url,true);myDoc.send(null);return true;}
function sendXMLDocument(url,content,callback)
{if(!window.XMLHttpRequest)
return false;var sendDoc=new window.XMLHttpRequest();if(typeof(callback)!="undefined")
{sendDoc.onreadystatechange=function()
{if(sendDoc.readyState!=4)
return;if(sendDoc.responseXML!=null&&sendDoc.status==200)
callback(sendDoc.responseXML);else
callback(false);};}
sendDoc.open('POST',url,true);if(typeof(sendDoc.setRequestHeader)!="undefined")
sendDoc.setRequestHeader('Content-Type','application/x-www-form-urlencoded');sendDoc.send(content);return true;}
function textToEntities(text)
{var entities="";for(var i=0;i<text.length;i++)
{if(text.charCodeAt(i)>127)
entities+="&#"+text.charCodeAt(i)+";";else
entities+=text.charAt(i);}
return entities;}
function reqWin(desktopURL,alternateWidth,alternateHeight,noScrollbars)
{if((alternateWidth&&self.screen.availWidth*0.8<alternateWidth)||(alternateHeight&&self.screen.availHeight*0.8<alternateHeight))
{noScrollbars=false;alternateWidth=Math.min(alternateWidth,self.screen.availWidth*0.8);alternateHeight=Math.min(alternateHeight,self.screen.availHeight*0.8);}
else
noScrollbars=typeof(noScrollbars)!="undefined"&&noScrollbars==true;window.open(desktopURL,'requested_popup','toolbar=no,location=no,status=no,menubar=no,scrollbars='+(noScrollbars?'no':'yes')+',width='+(alternateWidth?alternateWidth:480)+',height='+(alternateHeight?alternateHeight:220)+',resizable=no');return false;}
function storeCaret(text)
{if(typeof(text.createTextRange)!="undefined")
text.caretPos=document.selection.createRange().duplicate();}
function replaceText(text,textarea)
{if(typeof(textarea.caretPos)!="undefined"&&textarea.createTextRange)
{var caretPos=textarea.caretPos;caretPos.text=caretPos.text.charAt(caretPos.text.length-1)==' '?text+' ':text;caretPos.select();}
else if(typeof(textarea.selectionStart)!="undefined")
{var begin=textarea.value.substr(0,textarea.selectionStart);var end=textarea.value.substr(textarea.selectionEnd);var scrollPos=textarea.scrollTop;textarea.value=begin+text+end;if(textarea.setSelectionRange)
{textarea.focus();textarea.setSelectionRange(begin.length+text.length,begin.length+text.length);}
textarea.scrollTop=scrollPos;}
else
{textarea.value+=text;textarea.focus(textarea.value.length-1);}}
function surroundText(text1,text2,textarea)
{if(typeof(textarea.caretPos)!="undefined"&&textarea.createTextRange)
{var caretPos=textarea.caretPos,temp_length=caretPos.text.length;caretPos.text=caretPos.text.charAt(caretPos.text.length-1)==' '?text1+caretPos.text+text2+' ':text1+caretPos.text+text2;if(temp_length==0)
{caretPos.moveStart("character",-text2.length);caretPos.moveEnd("character",-text2.length);caretPos.select();}
else
textarea.focus(caretPos);}
else if(typeof(textarea.selectionStart)!="undefined")
{var begin=textarea.value.substr(0,textarea.selectionStart);var selection=textarea.value.substr(textarea.selectionStart,textarea.selectionEnd-textarea.selectionStart);var end=textarea.value.substr(textarea.selectionEnd);var newCursorPos=textarea.selectionStart;var scrollPos=textarea.scrollTop;textarea.value=begin+text1+selection+text2+end;if(textarea.setSelectionRange)
{if(selection.length==0)
textarea.setSelectionRange(newCursorPos+text1.length,newCursorPos+text1.length);else
textarea.setSelectionRange(newCursorPos,newCursorPos+text1.length+selection.length+text2.length);textarea.focus();}
textarea.scrollTop=scrollPos;}
else
{textarea.value+=text1+text2;textarea.focus(textarea.value.length-1);}}
function isEmptyText(theField)
{var theValue=theField.value;while(theValue.length>0&&(theValue.charAt(0)==' '||theValue.charAt(0)=='\t'))
theValue=theValue.substring(1,theValue.length);while(theValue.length>0&&(theValue.charAt(theValue.length-1)==' '||theValue.charAt(theValue.length-1)=='\t'))
theValue=theValue.substring(0,theValue.length-1);if(theValue=='')
return true;else
return false;}
function submitonce(theform)
{smf_formSubmitted=true;}
function submitThisOnce(form)
{if(navigator.userAgent.indexOf('AppleWebKit')!=-1)
return!smf_formSubmitted;if(typeof(form.form)!="undefined")
form=form.form;for(var i=0;i<form.length;i++)
if(typeof(form[i])!="undefined"&&form[i].tagName.toLowerCase()=="textarea")
form[i].readOnly=true;return!smf_formSubmitted;}
function setInnerHTML(element,toValue)
{if(typeof(element.innerHTML)!='undefined')
element.innerHTML=toValue;else
{var range=document.createRange();range.selectNodeContents(element);range.deleteContents();element.appendChild(range.createContextualFragment(toValue));}}
function setOuterHTML(element,toValue)
{if(typeof(element.outerHTML)!='undefined')
element.outerHTML=toValue;else
{var range=document.createRange();range.setStartBefore(element);element.parentNode.replaceChild(range.createContextualFragment(toValue),element);}}
function getInnerHTML(element)
{if(typeof(element.innerHTML)!='undefined')
return element.innerHTML;else
{var returnStr='';for(var i=0;i<element.childNodes.length;i++)
returnStr+=getOuterHTML(element.childNodes[i]);return returnStr;}}
function getOuterHTML(node)
{if(typeof(node.outerHTML)!='undefined')
return node.outerHTML;var str='';switch(node.nodeType)
{case 1:str+='<'+node.nodeName;for(var i=0;i<node.attributes.length;i++)
{if(node.attributes[i].nodeValue!=null)
str+=' '+node.attributes[i].nodeName+'="'+node.attributes[i].nodeValue+'"';}
if(node.childNodes.length==0&&in_array(node.nodeName.toLowerCase(),['hr','input','img','link','meta','br']))
str+=' />';else
str+='>'+getInnerHTML(node)+'</'+node.nodeName+'>';break;case 3:str+=node.nodeValue;break;case 4:str+='<![CDATA'+'['+node.nodeValue+']'+']>';break;case 5:str+='&'+node.nodeName+';';break;case 8:str+='<!--'+node.nodeValue+'-->';break;}
return str;}
function in_array(variable,theArray)
{for(var i=0;i<theArray.length;i++)
{if(theArray[i]==variable)
return true;}
return false;}
function selectRadioByName(radioGroup,name)
{if(typeof(radioGroup.length)=="undefined")
return radioGroup.checked=true;for(var i=0;i<radioGroup.length;i++)
{if(radioGroup[i].value==name)
return radioGroup[i].checked=true;}
return false;}
function invertAll(headerfield,checkform,mask)
{for(var i=0;i<checkform.length;i++)
{if(typeof(checkform[i].name)=="undefined"||(typeof(mask)!="undefined"&&checkform[i].name.substr(0,mask.length)!=mask))
continue;if(!checkform[i].disabled)
checkform[i].checked=headerfield.checked;}}
var lastKeepAliveCheck=new Date().getTime();function smf_sessionKeepAlive()
{var curTime=new Date().getTime();if(smf_scripturl&&curTime-lastKeepAliveCheck>900000)
{var tempImage=new Image();tempImage.src=smf_scripturl+(smf_scripturl.indexOf("?")==-1?"?":"&")+"action=keepalive;"+curTime;lastKeepAliveCheck=curTime;}
window.setTimeout("smf_sessionKeepAlive();",1200000);}
window.setTimeout("smf_sessionKeepAlive();",1200000);function smf_setThemeOption(option,value,theme,cur_session_id)
{if(cur_session_id==null)
cur_session_id=smf_session_id;var tempImage=new Image();tempImage.src=smf_scripturl+(smf_scripturl.indexOf("?")==-1?"?":"&")+"action=jsoption;var="+option+";val="+value+";sesc="+cur_session_id+(theme==null?"":"&id="+theme)+";"+(new Date().getTime());}
function smf_avatarResize()
{var possibleAvatars=document.getElementsByTagName?document.getElementsByTagName("img"):document.all.tags("img");for(var i=0;i<possibleAvatars.length;i++)
{if(possibleAvatars[i].className!="avatar")
continue;var tempAvatar=new Image();tempAvatar.src=possibleAvatars[i].src;if(smf_avatarMaxWidth!=0&&tempAvatar.width>smf_avatarMaxWidth)
{possibleAvatars[i].height=(smf_avatarMaxWidth*tempAvatar.height)/tempAvatar.width;possibleAvatars[i].width=smf_avatarMaxWidth;}
else if(smf_avatarMaxHeight!=0&&tempAvatar.height>smf_avatarMaxHeight)
{possibleAvatars[i].width=(smf_avatarMaxHeight*tempAvatar.width)/tempAvatar.height;possibleAvatars[i].height=smf_avatarMaxHeight;}
else
{possibleAvatars[i].width=tempAvatar.width;possibleAvatars[i].height=tempAvatar.height;}}
if(typeof(window_oldAvatarOnload)!="undefined"&&window_oldAvatarOnload)
{window_oldAvatarOnload();window_oldAvatarOnload=null;}}
function hashLoginPassword(doForm,cur_session_id)
{if(cur_session_id==null)
cur_session_id=smf_session_id;if(typeof(hex_sha1)=="undefined")
return;if(doForm.user.value.indexOf("@")!=-1)
return;if(typeof(window.opera)=="undefined")
doForm.passwrd.autocomplete="off";doForm.hash_passwrd.value=hex_sha1(hex_sha1(doForm.user.value.php_to8bit().php_strtolower()+doForm.passwrd.value.php_to8bit())+cur_session_id);if(navigator.userAgent.indexOf("Firefox/")!=-1)
doForm.passwrd.value="";else
doForm.passwrd.value=doForm.passwrd.value.replace(/./g,"*");}
function hashAdminPassword(doForm,username,cur_session_id)
{if(cur_session_id==null)
cur_session_id=smf_session_id;if(typeof(hex_sha1)=="undefined")
return;doForm.admin_hash_pass.value=hex_sha1(hex_sha1(username.toLowerCase()+doForm.admin_pass.value)+cur_session_id);doForm.admin_pass.value=doForm.admin_pass.value.replace(/./g,"*");}
function expandPages(spanNode,baseURL,firstPage,lastPage,perPage)
{var replacement='',i,oldLastPage=0;spanNode.style.fontWeight='normal';spanNode.onclick='';if((lastPage-firstPage)/perPage>1000)
{oldLastPage=lastPage;lastPage=firstPage+1000*perPage;}
for(i=firstPage;i<lastPage;i+=perPage)
replacement+='<a class="navPages" href="'+baseURL.replace(/%d/,i)+'">'+(1+i/perPage)+'</a> ';if(oldLastPage>0)
replacement+='<span style="font-weight: bold; cursor: '+(is_ie&&!is_ie6up?'hand':'pointer')+';" onclick="expandPages(this, \''+baseURL+'\', '+lastPage+', '+oldLastPage+', '+perPage+');"> ... </span> ';setInnerHTML(spanNode,replacement);}
function ajax_indicator(turn_on)
{var indicator=document.getElementById("ajax_in_progress");if(indicator!=null)
{if(navigator.appName=="Microsoft Internet Explorer"&&navigator.userAgent.indexOf("MSIE 7")==-1)
{indicator.style.top=document.documentElement.scrollTop;}
indicator.style.display=turn_on?"block":"none";}}