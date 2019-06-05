$(document).ready(function(){
	var w = $(window).width();
	if(w > 600){
		$(".hamburger").addClass("hamburger-drop");
	} else {
		$(".hamburger").removeClass("hamburger-drop");
	}
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 600){
			$(".hamburger").addClass("hamburger-drop");
		} else {
			$(".hamburger").removeClass("hamburger-drop");
		}
	});
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
		var v = $(window).width();
		$(".nav-block_right").css("justify-content", "flex-end");
		$(".nav-block_right,form.form").css({
			"width": "100%"
		});
		$(".search").css("display", "block");
		if(v > 600){
			$(".logo").css("display","block")
			$("ul.menu").css("display", "none");
			$(".nav-block_right,form.form").css({
				"width": "500px"
			});
		} else {
			$(".logo").css("display", "none");
		}
		$(".hamburger").addClass("hamburger-drop");
		$(document).mouseup(function(e){
			if(!$(e.target).is('[data-rel="drop"]')){
				var w = $(window).width();
				$(".nav-block").css("justify-content", "space-between");
				$(".nav-block_right,form.form").css("width", "");
				$(".search").css("display", "none");
				if(w > 600){
					$(".hamburger").addClass("hamburger-drop");
					$(".logo").css("display", "block");	
				} 
				else if(w < 600) {
					$(".hamburger").removeClass("hamburger-drop");
					$(".logo").css("display", "block");
				} 
				if(v > 600){
					$("ul.menu").css("display", "flex");
				}
			}
		});
		// if(w > 1055){
		// 	$("form.form").css("display", "none");
		// 	var li = $("li").addClass(".menu-li");
		// 	$("ul.menu").aprepend(li);
		// }
	});
});