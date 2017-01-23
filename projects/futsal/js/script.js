$(function() {
    var pull = $('.pull');
        menu = $('.main-nav ul');
        menuHeight = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

$(document).ready(function() {

	var login = $('#user-block-login');
	var popupForm = $('.modal-content-login');
	var popupClose = $('.modal-content-login-close');
	var darkWrapOnBody = $('.dark-wrapper-on-body');

	login.on('click', function() {

		darkWrapOnBody.css({'height':'0%', 'opacity':'0'});
		popupForm.toggleClass('modal-content-login-show');

		if (popupForm.hasClass('modal-content-login-show')) {
			darkWrapOnBody.css({'opacity':'0.6', 'height':'100%'});
		}
	});

	popupClose.on('click', function() {

		darkWrapOnBody.css({'height':'0%', 'opacity':'0'});
		
		if ( popupForm.hasClass('modal-content-login-show') ) {
			popupForm.removeClass('modal-content-login-show');
		}
		
	});

	window.addEventListener("keydown", function(event) {

		if ( event.keyCode == 27 ) {
			if ( popupForm.hasClass('modal-content-login-show') ) {
				popupForm.removeClass('modal-content-login-show');
			}
		}

		darkWrapOnBody.css({'height':'0%', 'opacity':'0'});
		
	});

	// Функция для слайда селектов. Для селектов с разными высотами
	function tableSlide() { 

	  var singleValues = $("#divisions-select").val(); 
	  var firstTableHeight = $('#divisions-items #first-division').outerHeight(true);
	  var secondTableHeight = $('#divisions-items #second-division').outerHeight(true);
	  var thirdTableHeight = $('#divisions-items #third-division').outerHeight(true);
	  var fourthTableHeight = $('#divisions-items #fourth-division').outerHeight(true);

	  switch(singleValues) {

	    case ("first"):      	  
	      $('#divisions-items').height(firstTableHeight);
	  	  $('.divisions-item').css('transform','translateX(100%)').css('opacity','0');
	      $('#divisions-items #first-division').css('transform','translateX(0%)').css('opacity', '1');
	    break; 

	    case ("second"):        	
	      $('#divisions-items').height(secondTableHeight);
	    	$('.divisions-item').css('transform','translateX(100%)').css('opacity','0');
	      $('#divisions-items #second-division').css('transform','translateX(0%)').css('opacity', '1');
	    break; 

	    case ("third"):      	  
	  	  $('#divisions-items').height(thirdTableHeight);
	      $('.divisions-item').css('transform','translateX(100%)').css('opacity','0');
	  	  $('#divisions-items #third-division').css('transform','translateX(0%)').css('opacity', '1');
	    break; 

	    case ("fourth"):        	
	    	$('#divisions-items').height(fourthTableHeight);
	    	$('.divisions-item').css('transform','translateX(100%)').css('opacity','0');
	    	$('#divisions-items #fourth-division').css('transform','translateX(0%)').css('opacity', '1');
	    break;
	    
	  }
	}

	$("#divisions-select").change(tableSlide);

	tableSlide(); 


	// Функция для слайда топ бомбардиров.
	function scorersSlide() { 

	  var singleScorerValue = $("#top-scorers-select").val(); 

	  switch(singleScorerValue) {

	    case ("first-division"):      	  
	  	  $('.top-scorers-item').css('transform','translateX(100%)').css('opacity','0');
	      $('#top-scorers-tables #first-division').css('transform','translateX(0%)').css('opacity', '1');
	    break; 

	    case ("second-division"):        	
	    	$('.top-scorers-item').css('transform','translateX(100%)').css('opacity','0');
	      $('#top-scorers-tables #second-division').css('transform','translateX(0%)').css('opacity', '1');
	    break; 

	    case ("third-division"):      	  
	      $('.top-scorers-item').css('transform','translateX(100%)').css('opacity','0');
	  	  $('#top-scorers-tables #third-division').css('transform','translateX(0%)').css('opacity', '1');
	    break; 

	    case ("fourth-division"):        	
	    	$('.top-scorers-item').css('transform','translateX(100%)').css('opacity','0');
	    	$('#top-scorers-tables #fourth-division').css('transform','translateX(0%)').css('opacity', '1');
	    break;
	    
	  }

	}

	$("#top-scorers-select").change(scorersSlide);

	scorersSlide();

}); 


