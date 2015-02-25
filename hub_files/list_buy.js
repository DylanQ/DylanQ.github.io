




/*
     FILE ARCHIVED ON 21:00:27 Mar 1, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 9:30:04 Feb 24, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var xmlDoc;
if (window.XMLHttpRequest)
  {
  xmlDoc=new window.XMLHttpRequest();
  xmlDoc.open("GET","/web/20120301210027/http://classifieds.realmtools.com/listing.php?state=1",false);
  xmlDoc.send("");
  xmlDoc=xmlDoc.responseXML;
  }
// IE 5 and IE 6
else if (ActiveXObject("Microsoft.XMLDOM"))
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async=false;
  xmlDoc.load("/web/20120301210027/http://classifieds.realmtools.com/listing.php?state=1");
  }

var x=xmlDoc.getElementsByTagName("listing");
for (i = x.length; i--;)
  { 
document.write("<div class='item ");
document.write(x[i].getElementsByTagName("item")[0].childNodes[0].nodeValue);
document.write("'>");

document.write("<table cellpadding='0' cellspacing='0' border='0' class='itemtable'><tr><td valign='middle'><div class='i1'><table cellpadding='5' cellspacing='0' border='0'><tr><td><div class='i_tab'>Buying&nbsp;:</div></td><td><img src='items/");
document.write(x[i].getElementsByTagName("item")[0].childNodes[0].nodeValue);
document.write(".png' />");

document.write("</td><td><div class='i_item'>");
document.write(x[i].getElementsByTagName("item")[0].childNodes[0].nodeValue);
document.write("<span class='quantity q");
document.write(x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue);
document.write("'><br />Quantity : ");
document.write(x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue);
document.write("</span></div></td></tr></table></div></td><td valign='middle'><div class='i2'><table cellpadding='5' cellspacing='0' border='0'><tr><td><span class='i_tab'>Offer:</span></td><td><div class='i_text'>");

document.write(x[i].getElementsByTagName("text")[0].childNodes[0].nodeValue);
document.write("</div></td></tr></table></div></td><td valign='middle'><div class='i3'><table cellpadding='5' cellspacing='0' border='0'><tr><td><span class='i_name'>");
document.write(x[i].getElementsByTagName("playername")[0].childNodes[0].nodeValue);
document.write("</span><br /><a href='/web/20120301210027/http://forums.wildshadow.com/messages/new/");
document.write(x[i].getElementsByTagName("forumid")[0].childNodes[0].nodeValue);
document.write("' target='_blank'>Message this buyer</a></td></tr></table></div></td></tr></table></div>");
}