$(document).ready(function() {

  var menuWrapper = $('#menu-wrapper');
  var menuToggle = $('#menu-btn-toggle');
  var logo = $('#header-logo');
  var logoImg = $('#logoImg');

  menuToggle.on('click', function(event) {
    event.preventDefault();
    menuWrapper.toggleClass('menu-open');
    menuToggle.toggleClass('active');
    menuToggle.toggleClass('fixed');
    logo.toggleClass('fixed');
  });  


  new WOW().init();


  $('#filter-container').mixItUp({
    selectors: {
      target: '.projects__item'
    },
    animation: {
      duration: 1000
    }
  });

});