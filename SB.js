
function initMap() {
  var uluru = {lat: 38.220819, lng: -85.691749};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

/* =================================
Smooth scroll and Google Map API
==================================== */


$(function () {
  $('.internalLink').on('click', function () {
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
