$('#core').prepend('<div class="header">')
$('.header').append('<div id="logoHold">')
$('#logoHold').append('<a href="index.html"><img src="resources/logo.png" alt="logo" id="logo"></a>')
$('#logoHold').append('</div>')
$('.header').append('<div class="logohead">')
$('.logohead').append('<a href="index.html"><h1 id="headtext">SKYBROOK FOUNDATION</h1></a>')
$('.header').append('</div>')
$('.header').append('<div id="spacer"></div>')
$('.header').append('<div class="menu">')
$('.menu').append('<div class="mainmenu">')
$('.mainmenu').append('<ul id="menulist">')
$('#menulist').append('<x id="menuitem"><a href="index.html">Home</a>','</x>')
$('#menulist').append(' | ')
$('#menulist').append('<x id="menuitem"><a href="resources.html">Resources</a>','</x>')
$('#menulist').append(' | ')
$('#menulist').append('<x id="menuitem"><a href="about.html">About</a>','</x>')
$('.mainmenu').append('</ul>')
$('.menu').append('</div>')
$('.header').append('</div>')

// End of Header
//Begin sideBar
$('.content').append('<div class="sideBar">')
$('.sideBar').append('<div class="sideBarC1">')
$('.sideBarC1').append('<h3 id="menuHeader">Menu</h3>')
$('.sideBarC1').append('<hr id="menuBreak">')
$('.sideBarC1').append('<a class="twitter-timeline" href="https://twitter.com/SkyBrookFndtn?ref_src=twsrc%5Etfw">Tweets by SkyBrookFndtn</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>')
$('.sideBarC1').append('</div>')
$('.sideBar').append('</div>')
//end sidebar
// Begin of footer
$('#core').append('<div id="footer">')
$('#footer').append('<div id="footContent">')
$('#footContent').append('<p id="copyrightNotice">All content is wholly owned by Skybrook Foundation, copyright 2018©<br><br>DISCLAIMER: While we attempt to keep information as up to date and accurate as possible, we are not responsible for accidentally inaccurate information. If you have questions make sure to inquire further with your physician. If you spot an inaccuracy in our information, feel free to let us know via the contact us form.</p>')
$('#footer').append('</div>')
$('#core').append('</div>')
