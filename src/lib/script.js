$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		// margin: 10,
		loop: true,
		navText: ["prev","next"],
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
	var hamburger = $(".hamburger");
	hamburger.on("click", function(){
		$(this).toggleClass("is-active");
	});
});