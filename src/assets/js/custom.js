(function($) {
	'use strict';

	// preloader js start
	// function loader() {
	// 	$(window).on('load', function () {
	// 		$('#ctn-preloader').addClass('loaded');
	// 		$("#loading").fadeOut(500);
	// 		// Una vez haya terminado el preloader aparezca el scroll

	// 		if ($('#ctn-preloader').hasClass('loaded')) {
	// 			// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
	// 			$('#preloader').delay(900).queue(function () {
	// 				$(this).remove();
	// 			});
	// 		}
	// 	});
	// }
	// loader();
	// preloader js end

	// data background js start
	// $("[data-background").each(function () {
	// 	$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	// });

	// $("[data-bg-color]").each(function () {

	// 	$(this).css("background-color", $(this).attr("data-bg-color"));

	// });

	// Nice Select JS
	$('select').niceSelect();
	
	// Header Sticky
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
		
	}

	//Mobile Nav Hide Show
	// if($('.mobile-menu').length){
		
	// 	// $('.mobile-menu .menu-box').mCustomScrollbar();
		
	// 	var mobileMenuContent = $('.header-area .menu-area .main-menu').html();
	// 	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
	// 	//$('.sticky-header .main-menu').append(mobileMenuContent);
		
	// 	//Dropdown Button
	// 	$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
	// 		$(this).toggleClass('open');
	// 		$(this).prev('ul').slideToggle(500);
	// 	});
	// 	//Dropdown Button
	// 	$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
	// 		$(this).prev('.megamenu').slideToggle(900);
	// 	});
	// 	//Menu Toggle Btn
	// 	$('.mobile-nav-toggler').on('click', function() {
	// 		$('body').addClass('mobile-menu-visible');
	// 	});

	// 	//Menu Toggle Btn
	// 	$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
	// 		$('body').removeClass('mobile-menu-visible');
	// 	});
	// }

	
	// Odometer 
	// $('.odometer').appear(function(e) {
	// 	var odo = $(".odometer");
	// 	odo.each(function() {
	// 		var countNumber = $(this).attr("data-count");
	// 		$(this).html(countNumber);
	// 	});
	// });

	// Go to Top
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});


	// Animation
	new WOW().init();

	// Tabs 
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});
		
	// Popup Video
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

})(jQuery);