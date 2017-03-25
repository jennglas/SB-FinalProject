
/* =================================
MAP API
==================================== */



/* =================================
Smooth scroll
==================================== */


$(function () {
  $('.internallink').on('click', function () {
    var target= $(this)[0].href;
    targetID = target.substring(target.indexOf("#"));
    console.log(targetID);
    targetElement = $(targetID);
    targetOffset = targetElement.offset().top - 80;
    $('html, body').animate({
           scrollTop: targetOffset
         }, 1000);
         return false;

  });


  });
