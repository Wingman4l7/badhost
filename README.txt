So I liked the [url=https://what.cd/forums.php?action=viewthread&threadid=56191]"Bad Album Art" script[/url] that [url=https://what.cd/user.php?id=79731]death2y[/url] wrote, and I thought that it'd be nice if there was something like that, but for collages.  

[align=center]I present to you 
[b]What.CD Bad Covers: Collage Edition[/b].
https://github.com/Wingman4l7/badhost

[URL=https://whatimg.com/viewer.php?file=w5126f.png][IMG]https://whatimg.com/i/w5126f_thumb.png[/IMG][/URL][/align]

This simply uses a red border to highlight album cover images which aren't hosted on WhatIMG [i](or any other domain on the script's whitelist)[/i].  You will still need to click through to the album page if you want to rehost them.  This should handle any of the options in the "Collage album covers to show per page" user setting [i](the bit of code that does could come in handy for those who wish to make collage-oriented scripts)[/i].  It doesn't do anything for an album with no cover image.  

It has been tested successfully in Chrome.  It's not working in Firefox -- it's complaining that the script "appears to be corrupt"; I'm guessing this probably means that it's just missing some header info.  Any help with this would be appreciated!  Firefox may also need its own [code]style.MozBoxSizing[/code] line to work.

The border is inside the image, so it does cover a bit of the album cover.  I ended up doing it this way because having the border on the outside was causing funky overlap issues when bad host images were next to good host ones, and the border was getting cut off at the edges of the grid due to CSS overflow parameters.  I also experimented with replacing the album image with a custom "REHOST ME!" image encoded in base64, but then I remembered that most people would like to be able to still see the album image, bad host or not.  There is also the option of setting opacities or tint, but again, I didn't want to mess with the images.  One friend's idea was to wrap the thumbnail in a <blink> tag -- but I'm not that sadistic.  =P

Unfortunately, using a border means it's a little hard to tell if some images are bad-hosted or not if they're in the middle of a bunch of others that are [i](the middle image in the screenshot being a good example)[/i].  I opted against bordering good-hosted images because then that border would be there all the time.  If you think you have a more elegant solution, feel free to recommend it!

In the future I might make a version of this script that integrates death2y's Bad Album Art script and his WhatIMG Upload Helper script [i](or the [url=https://what.cd/forums.php?action=viewthread&threadid=166516]"One-click URL upload to WhatIMG" script[/url] by [url=https://what.cd/user.php?id=605]tobbez[/url])[/i], but for now I will leave it separate.  Thanks to [url=https://what.cd/user.php?id=171682]Erbavore[/url]'s [url=https://what.cd/forums.php?action=viewthread&threadid=163016]"Collage Export Utility" script[/url] for the code that grabs the image URLs from within the unordered list only and not the whole page.

If you want to experiment with using a base64-encoded image to replace a bad-hosted album cover, just replace the two [code].style[/code] lines with this code snippet:
[i](I never got around to writing in the "REHOST ME!" in the middle of the image.)[/i]
[hide=Code][code]coverElemNodeList[i].src = 
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2AgMAAABgyY+CAAAABGdBTUEAA
LGPC/xhBQAAAAlQTFRFAAAA7Rwk////o0eFZAAAADVJREFUSMdjYBhIEIobBIxKD1LpqFVYwNRR6VHpU
elR6VHpUelR6VHpUekRIT3aRh5c0gMHAADLOmi/TeqmAAAAAElFTkSuQmCC";
				// MSPaint to make a 118x118 image, 
				// shrunk with http://tinypng.org/,
				// converted with http://www.base64-image.de/
[/code][/hide]
[i](The long string was screwing up the line wrapping of the Layer Cake stylesheet so I put in some line breaks -- be sure to remove those!)[/i].

Enjoy!