jQuery(document).ready(function ($) {
	 "use strict"

	 //Preloader
	$(window).load(function() {
		$('#preloader').fadeOut();
		$('body').delay(350).css({'overflow':'visible'});
	})

    // portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	
	// banner-add-list
	 if ($('.banner-add-list').length > 0) {
	  $('.banner-add-list').owlCarousel({
	      items:1,
	      loop:true,
	      margin:30,
	      autoplay:false,
	      autoplayTimeout:3000,
	      autoplayHoverPause: true,
	      dots:true,
	      nav: false,
	  });
	}    

	// banner-add-list
	 if ($('.feature-video-list').length > 0) {
	  $('.feature-video-list').owlCarousel({
	      items:2,
	      loop:true,
	      margin:0,
	      autoplay:false,
	      autoplayTimeout:3000,
	      autoplayHoverPause: true,
	      dots:false,
	      nav: true,	   
		  navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],   
	      responsive: {
	      		300: {
					 items:1,
				},
	      		800: {
					 items:1,
				},	      		
				1000: {
					 items:2,
				},		    
			} 
	  });
	}    

	
	// tranding-item-list
	 if ($('.tranding-item-list').length > 0) {
	  $('.tranding-item-list').owlCarousel({
	      items:5,
	      loop:true,
	      margin:20,
	      autoplay:false,
	      autoplayTimeout:3000,
	      autoplayHoverPause: true,
		  navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
	      dots:true,
	      nav: true,	     
	      responsive: {
	      		300: {
					 items:1,
				},
				480: {
					 items:2,			
				},
	      		768: {
					 items:3,
				},	
	      		800: {
					 items:3,
				},	      		
				1000: {
					 items:5,
				},		    
			} 
	  });
	}    

	
    // Sectionize-Control
	if ($('select').length > 0) {
		$('select').selectize({
			create: true,
			sortField: {
				field: 'text',
				direction: 'asc'
			},
			dropdownParent: 'body'
		});
	}



    
	// fitVids
    if($(".responsive-video").length > 0){
		$(".responsive-video").fitVids();
	}

	 // Sticky Header 
     $(".sticky-on").sticky({topSpacing: 0});

     // counterUp
	  $('.counter').counterUp({
	        delay: 10,
	        time: 5000
	    });

	// Magnific Popup
	// $('.single-trailer').magnificPopup({
	// 	delegate: '.full-size-video',
	// 	type: 'image',
	// 	mainClass: 'mfp-with-zoom mfp-img-mobile',
	// 	image: {
	// 		verticalFit: true,
	// 		titleSrc: function(item) {
	// 			return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
	// 		}
	// 	},
	// 	gallery: {
	// 		enabled: true
	// 	},
	// 	zoom: {
	// 		enabled: true,
	// 		easing: 'ease-in-out',
	// 		duration: 300,
	// 		opener: function(element) {
	// 			return element.closest('.single-trailer').find('img');
	// 		}
	// 	}
	// });



	// Magnific Popup Iframe

	$('.full-size-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// WOW JS
	// Use in Html <div class="wow fadeInUp" data-wow-duration="5s" data-wow-delay=".01s">...</div>
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();


	// Scroll To Top
	if ($('.scroll-top').length > 0) {
		$(".scroll-top").click(function(){
			$('html,body').animate({scrollTop:0},1000);
		});

		$(window).scroll(function(){
			if($(window).scrollTop() > 400){
				$(".scroll-top").fadeIn();
			}
			else{
				$(".scroll-top").fadeOut();
			}
			return false;
		});
	}


});
// End Ready Function