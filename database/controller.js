$(function(){

function initAutoincrement()
{var i=0;while(document.getElementById('i'+i+'_autoincrement')!=undefined)
{document.getElementById('i'+i+'_autoincrement').disabled=true;i++;}}
function toggleAutoincrement(i)
{var type=document.getElementById('i'+i+'_type');var primarykey=document.getElementById('i'+i+'_primarykey');var autoincrement=document.getElementById('i'+i+'_autoincrement');if(!autoincrement)return false;if(type.value=='INTEGER'&&primarykey.checked)
autoincrement.disabled=false;else
{autoincrement.disabled=true;autoincrement.checked=false;}}
function toggleNull(i)
{var pk=document.getElementById('i'+i+'_primarykey');var notnull=document.getElementById('i'+i+'_notnull');if(pk.checked)
{notnull.disabled=true;notnull.checked=true;}
else
{notnull.disabled=false;}}
function checkAll(field)
{for(var i=0;i < $('.select_row').length;i++)
{$('#check_'+i).iCheck('check');}}
function uncheckAll(field)
{for(var i=0;i < $('.select_row').length;i++)
{$('#check_'+i).iCheck('uncheck');}}
function changeIgnore(area,e,u)
{if(area.value!="")
{if(document.getElementById(e)!=undefined)
document.getElementById(e).checked=false;if(document.getElementById(u)!=undefined)
document.getElementById(u).checked=false;}}
function moveFields()
{var fields=document.getElementById("fieldcontainer");var selected=[];for(var i=0;i<fields.options.length;i++)
if(fields.options[i].selected)
selected.push(fields.options[i].value);for(var i=0;i<selected.length;i++)
insertAtCaret("queryval",'"'+selected[i].replace(/"/g,'""')+'"');}
function insertAtCaret(areaId,text)
{var txtarea=document.getElementById(areaId);var scrollPos=txtarea.scrollTop;var strPos=0;var br=((txtarea.selectionStart||txtarea.selectionStart=='0')?"ff":(document.selection?"ie":false));if(br=="ie")
{txtarea.focus();var range=document.selection.createRange();range.moveStart('character',-txtarea.value.length);strPos=range.text.length;}
else if(br=="ff")
strPos=txtarea.selectionStart;var front=(txtarea.value).substring(0,strPos);var back=(txtarea.value).substring(strPos,txtarea.value.length);txtarea.value=front+text+back;strPos=strPos+text.length;if(br=="ie")
{txtarea.focus();var range=document.selection.createRange();range.moveStart('character',-txtarea.value.length);range.moveStart('character',strPos);range.moveEnd('character',0);range.select();}
else if(br=="ff")
{txtarea.selectionStart=strPos;txtarea.selectionEnd=strPos;txtarea.focus();}
txtarea.scrollTop=scrollPos;}
function notNull(checker)
{document.getElementById(checker).checked=false;}
function disableText(checker,textie)
{if(checker.checked)
{document.getElementById(textie).value="";document.getElementById(textie).disabled=true;}
else
{document.getElementById(textie).disabled=false;}}
function toggleExports(val)
{document.getElementById("exportoptions_sql").style.display="none";document.getElementById("exportoptions_csv").style.display="none";document.getElementById("exportoptions_"+val).style.display="block";}
function toggleImports(val)
{document.getElementById("importoptions_sql").style.display="none";document.getElementById("importoptions_csv").style.display="none";document.getElementById("importoptions_"+val).style.display="block";}
function openHelp(section)
{PopupCenter('?help=1#'+section,"Help Section");}
var helpsec=false;function PopupCenter(pageURL,title)
{helpsec=window.open(pageURL,title,"toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=400,height=300");}
function checkLike(srchField,selOpt)
{if(selOpt=="LIKE%"){var textArea=document.getElementById(srchField);textArea.value="%"+textArea.value+"%";}}
function createCORSRequest(method,url)
{var xhr=new XMLHttpRequest();if("withCredentials"in xhr)
{xhr.open(method,url,true);}
else if(typeof XDomainRequest!="undefined")
{xhr=new XDomainRequest();xhr.open(method,url);}
else
{xhr=null;}
return xhr;}
function checkVersion(installed,url)
{var xhr=createCORSRequest('GET',url);if(!xhr)
return false;xhr.onload=function()
{if(xhr.responseText.split("\n").indexOf(installed)==-1)

{document.getElementById('oldVersion').style.display='inline';}};xhr.send();}
$('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
 $(" .select2").select2();
$(".checkAll").click(function(){
	checkAll();
});
$(".unCheckAll").click(function(){
	uncheckAll();
});
 var sqlRunner = CodeMirror.fromTextArea(document.getElementById('queryval'),{
 	lineNumbers: true,
 	mode: "sql",
 	theme: "blackboard"
 });
 $("#dataTable_table").DataTable();
});