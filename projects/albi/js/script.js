//  Плавающая топ навигация
var myElement = document.querySelector("header");

var headroom = new Headroom(myElement, {
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
headroom.init();

//  Parallax
$(window).scroll(function() {

	var scrollTop = $(this).scrollTop();

	$(".banner-title").css({
		"transform" : "translate(0%, " + scrollTop /5 + "%"
	});

	$(".trade-banner").css({
		"transform" : "translate(0%, " + scrollTop /10 + "%"
	});

	$(".bottlers-banner").css({
		"transform" : "translate(0%, " + scrollTop /10 + "%"
	});

	$(".pharma-banner").css({
		"transform" : "translate(0%, " + scrollTop /10 + "%"
	});

	$(".food-banner").css({
		"transform" : "translate(0%, " + scrollTop /10 + "%"
	});

});

// Выпадающее меню
var dropdown = document.querySelector('.navbar .nav .dropdown');
var submenu = document.querySelector('.navbar .nav .dropdown .submenu');

dropdown.addEventListener("click", function() {
	submenu.classList.add('submenu-show');
});

dropdown.addEventListener("mouseover", function() {
	submenu.classList.add('submenu-show');
});

dropdown.addEventListener("mouseout", function() {
	submenu.classList.remove('submenu-show');
});



//Счетчик
jQuery(document).ready(function( $ ) {
  $('.counter').counterUp({
      delay: 10,
      time: 2000
  });
});

