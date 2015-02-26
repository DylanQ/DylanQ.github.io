




/*
     FILE ARCHIVED ON 15:43:32 Feb 27, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 9:30:03 Feb 24, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var rotmg = rotmg || {};

rotmg.Marketing = (function() {
  var pixelsMap_ = {
    "landing": "/web/20140227154332/https://kabam1-a.akamaihd.net/pixelkabam/html/pixels/rmgdirectp2.html",
    "install": "/web/20140227154332/https://kabam1-a.akamaihd.net/pixelkabam/html/pixels/rmgp1.html",
    "tutorialComplete": "/web/20140227154332/https://kabam1-a.akamaihd.net/pixelkabam/html/pixels/rmgp2.html"
  };

  var appendIframe_ = function(url) {
    var pixelFrame = document.createElement("IFRAME"); 

    pixelFrame.setAttribute("src", url);
    pixelFrame.setAttribute("frameborder", "0"); 
    pixelFrame.style.width = "1px"; 
    pixelFrame.style.height = "1px";
    pixelFrame.style.overflow = "hidden";
    pixelFrame.style.border = "none";
    document.body.appendChild(pixelFrame); 
  };

  var track_ = function(name) {
    if (pixelsMap_[name] == undefined) {
      return;
    }

    if ((document.location.host != "www.realmofthemadgod.com") &&
        (document.location.host != "realmofthemadgod.appspot.com")) {
      return;
    }

    appendIframe_(pixelsMap_[name]);
  };

  return {
    track: track_
  };
})();
