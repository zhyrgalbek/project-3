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
	// $(".form").on("click",function(){
	// 	$(this).css("width", "100%");
	// 	$(".search").css("display", "block");
	// 	$(".hamburger, .logo").css("display", "none");
	// });
	var bool;
	$(".form button").on("click",function(){
		// if(bool == true){
			// bool=false;
			// // console.log(bool);	
			// $(".nav-block").css("justify-content", "space-between");
			// $(".form").css("width", "40px");
			// $(".search").css("display", "none");
			// $(".hamburger, .logo").css("display", "block");	
		// }
		// else{
		// 	bool = true;
		// 	// console.log(bool);
		// 	$(".nav-block").css("justify-content", "flex-end");
		// 	$(this).css("width", "100%");
		// 	$(".search").css("display", "block");
		// 	$(".hamburger, .logo").css("display", "none");
		// }
		$(".nav-block").css("justify-content", "flex-end");
		$(".form").css({
			"width": "100%",
			// "height": "50px"
		});
		$(".search").css("display", "block");
		$(".hamburger, .logo").css("display", "none");
		$(document).mouseup(function(e){
			if(!$(e.target).is('[data-rel="drop"]')){
				$(".nav-block").css("justify-content", "space-between");
				$(".form").css("width", "40px");
				$(".search").css("display", "none");
				$(".hamburger, .logo").css("display", "block");	
			}
		});
	});
});