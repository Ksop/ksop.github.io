jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.cd-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
		    		$('.cd-header').addClass('is-visible');
		    	} else {
		    		$('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.cd-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});


  //info about teamate on mobile devices
	var teamateDescr1 = $('#teamate-descr-1');
	var teamateDescr2 = $('#teamate-descr-2');
	var teamateDescr3 = $('#teamate-descr-3');
	var teamateInfoShow1 = $('#about-teamate-btn-1');
	var teamateInfoShow2 = $('#about-teamate-btn-2');
	var teamateInfoShow3 = $('#about-teamate-btn-3');
	var teamateInfoClose1 = $('#about-teamate-btn-close-1');
	var teamateInfoClose2 = $('#about-teamate-btn-close-2');
	var teamateInfoClose3 = $('#about-teamate-btn-close-3');


	function openDescr(openBtn, closeBtn, teamateDescr) {
		
		openBtn.on('click', function(){
			teamateDescr.addClass('modal-teamate-descr-show');
		});

		closeBtn.on('click', function(){
			teamateDescr.removeClass('modal-teamate-descr-show');
		});

	}

	openDescr(teamateInfoShow1, teamateInfoClose1, teamateDescr1);
	openDescr(teamateInfoShow2, teamateInfoClose2, teamateDescr2);
	openDescr(teamateInfoShow3, teamateInfoClose3, teamateDescr3);


  //отключение изменения масштаба на google map
  var map = $('#map');

  map.on('click', function() {
    $('#map iframe').removeClass('scroll-off');
  });

  $('#map').mouseleave(function () {
      $('#map iframe').addClass('scroll-off');
  });


});


// Скрипт для работы галереи
(function() {
  // create SVG circle overlay and append it to the preview element
  function createCircleOverlay(previewEl) {
    var dummy = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    dummy.setAttributeNS(null, 'version', '1.1');
    dummy.setAttributeNS(null, 'width', '100%');
    dummy.setAttributeNS(null, 'height', '100%');
    dummy.setAttributeNS(null, 'class', 'overlay');
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttributeNS(null, 'cx', 0);
    circle.setAttributeNS(null, 'cy', 0);
    circle.setAttributeNS(null, 'r', Math.sqrt(Math.pow(previewEl.offsetWidth,2) + Math.pow(previewEl.offsetHeight,2)));
    dummy.appendChild(g);
    g.appendChild(circle);
    previewEl.appendChild(dummy);
  }
  
  new GridFx(document.querySelector('.grid'), {
    onInit : function(instance) {
      createCircleOverlay(instance.previewEl);
    },
    onResize : function(instance) {
      instance.previewEl.querySelector('svg circle').setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
    },
    onOpenItem : function(instance, item) {
      // item's image
      var gridImg = item.querySelector('img'),
        gridImgOffset = gridImg.getBoundingClientRect(),
        win = {width: document.documentElement.clientWidth, height: window.innerHeight},
        SVGCircleGroupEl = instance.previewEl.querySelector('svg > g'),
        SVGCircleEl = SVGCircleGroupEl.querySelector('circle');
        
      SVGCircleEl.setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
      // set the transform for the SVG g node. This will animate the circle overlay. The origin of the circle depends on the position of the clicked item.
      if( gridImgOffset.left + gridImg.offsetWidth/2 < win.width/2 ) {
        SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(' + win.width + ', ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
      }
      else {
        SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(0, ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
      }
    }
  });
})();

