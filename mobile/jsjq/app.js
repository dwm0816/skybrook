$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("currentLink");
        }
    });
});

$('#core').prepend('<div class="header">')
$('.header').append('<div class="logohead">')
$('.logohead').append('<a href="index.html"><h1 id="headtext">SKYBROOK</h1></a>')
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
