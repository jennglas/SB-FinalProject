/* =================================
This is to scroll smooth for the anchor tags
==================================== */

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


/* =================================
This is for the floatingMenu so it doesn't cover the text under
==================================== */

$(document).ready(function() {
    var doesntcovertext = $('#floatingMenu').position().top + $('#header').height();
    $('#content').css('margin-top',contentPlacement);
});
