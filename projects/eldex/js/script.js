var wow = new WOW(
  {
    boxClass:     'animate',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       150,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$(document).ready(function(){

  var map = $('#map');

  map.on('click', function() {
    $('#map iframe').removeClass('scroll-off');
  });

  $('#map').mouseleave(function () {
      $('#map iframe').addClass('scroll-off');
  });

});