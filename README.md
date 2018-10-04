<h1 align="center">What.CD Bad Covers Collage Edition</h1>
<p align="center">
<b>Highlights all album covers in a collage not on a whitelisted host.</b></p>

<p align="center">
  <img src="https://raw.github.com/Wingman4l7/badhost/master/What.CD%20Bad%20Covers%20Collage%20Edition.png" alt="screenshot"/>
</p>

About
-----
This simply uses a red border to highlight album cover images which aren't hosted on WhatIMG *(or any other domain on the script's whitelist)*. You will still need to click through to the album page if you want to rehost them. This should handle any of the options in the "Collage album covers to show per page" user setting *(the bit of code that does could come in handy for those who wish to make collage-oriented scripts)*. It doesn't do anything for an album with no cover image.

It has been tested successfully in Chrome, and at least two users have had it work in Firefox.

Limitations
-----------
The border is inside the image, so it does cover a bit of the album cover. I ended up doing it this way because having the border on the outside was causing funky overlap issues when bad host images were next to good host ones, and the border was getting cut off at the edges of the grid due to CSS overflow parameters. Unfortunately, using a border means it's a little hard to tell if some images are bad-hosted or not if they're in the middle of a bunch of others that are *(the middle image in the screenshot being a good example)*.

Experimenting
-------------
If you want to experiment with using a base64-encoded image to replace a bad-hosted album cover, just replace the two `.style` lines with this code snippet:
> `imgElement.src = 
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2Ag`
<BR>
> `MAAABgyY+CAAAABGdBTUEAALGPC/xhBQAAAAlQTFRFAAAA7Rwk////o0`
<BR>
> `eFZAAAADVJREFUSMdjYBhIEIobBIxKD1LpqFVYwNRR6VHpUelR6VHpU`
<BR>
> `elR6VHpUekRIT3aRh5c0gMHAADLOmi/TeqmAAAAAElFTkSuQmCC";`
<BR>
> `// MSPaint to make a 118x118 image,`
<BR>
> `// shrunk with http://tinypng.org/,`
<BR>
> `// converted with http://www.base64-image.de/`

*(The long string was screwing up the line wrapping of the README, so I put in some line breaks -- be sure to remove those!)*.

Discuss It / Install It
-----------------------
Discuss the script [here][1]; for a 1-click install, find it on UserScripts [here][2].

  [1]: https://what.cd/forums.php?action=viewthread&threadid=171416
  [2]: http://userscripts-mirror.org/scripts/show/162954
