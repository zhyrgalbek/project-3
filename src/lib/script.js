$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		// margin: 10,
		loop: true,
		navText: ["",""],
		animateOut: 'zoomOut',
    	animateIn: 'fadeIn',
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:true
			},
			1000:{
				items:1,
				nav:true,
				loop:false
			}
		}
	});
	$(".hamburger").on("click",function(){
		$(".hamburger").toggleClass("is-active");
		$(".menu").toggleClass("menu-active");
	});

	$(".form button").on("click",function(){
		$(".nav-block").css("justify-content", "flex-end");
		$(".form").css({
			"width": "100%",
			// "height": "50px"
		});
		$(".search").css("display", "block");
		$(".hamburger, .logo").css("display", "none");
		$(document).mouseup(function(e){
			if(!$(e.target).is('[data-rel="drop"]')){
				var w = $(window).width();
				$(".nav-block").css("justify-content", "space-between");
				$(".form").css("width", "40px");
				$(".search").css("display", "none");
				if(w > 600){
					$(".hamburger").css("display", "none");
					$(".logo").css("display", "block");	
				} else if(w < 600) {
					$(".hamburger, .logo").css("display", "block");
				}	
			}
		});
	});
});