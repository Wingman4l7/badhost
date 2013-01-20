// ==UserScript==
// @name           What.CD Bad Covers Collage Edition
// @namespace      google.com
// @description    Highlights all album covers in a collage not on a good host.
// @include        http*://*what.cd/collages.php?id=*
// ==/UserScript==

//By death2y
var goodhosts = [ //If you want more hosts to be "good", add them to this list as a regex matching their domain
    /whatimg\.com/
];

/******************************************************************************/
if (!window.location.search.match(/Report collage/)) { //Collage description page
    var coverElemNodeList = document.getElementsByTagName("img");
	var coverURL;
	for (var i = 0; i < coverElemNodeList.length; i++) {
		coverURL = coverElemNodeList[i].src;
		for (var j = 0; j < goodhosts.length; j++) {
			if (coverURL.match(goodhosts[j])) {
				j = goodhosts.length;
				coverElemNodeList[i].style.border = ".3em outset green";
			}
			else {
				coverElemNodeList[i].style.border = ".3em outset red";
			}
		}
	}
}
