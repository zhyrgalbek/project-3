$(document).ready(function () {
	var w = $(window).width();
	if (w > 1055) {
		$(".hamburger").addClass("hamburger-drop");
	} else {
		$(".hamburger").removeClass("hamburger-drop");
	}
	$(window).resize(function () {
		var w = $(window).width();
		if (w > 1055) {
			$(".hamburger").addClass("hamburger-drop");
		} else {
			$(".hamburger").removeClass("hamburger-drop");
		}
	});
	$("#header_owl").owlCarousel({
		// margin: 10,
		loop: true,
		navText: ["", ""],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 1,
				nav: true
			},
			1000: {
				items: 1,
				nav: true,
				loop: false
			}
		}
	});
	$(".hamburger").on("click", function () {
		$(".hamburger").toggleClass("is-active");
		var v = $(window).width();
		if (v < 600) {
			$(".menu").toggleClass("menu-active");
		} else {
			$(".menu").toggleClass("menu-active__tablet");
		}
		// $(".menu").toggleClass("menu-active");
	});
	
	$(".form button").on("click", function (e) {
		e.preventDefault();
		var v = $(window).width();
		$(".nav-block_right").css("justify-content", "flex-end");
		$(".nav-block_right,form.form").css({
			"width": "100%"
		});
		$("form.form").css("transition", "0.3s ease-out");
		$(".search").css("display", "block");
		$(".hamburger").addClass("hamburger-drop");
		if (v > 600) {
			$(".logo").css("display", "block")
			$("ul.menu").css("display", "none");
			$(".nav-block_right,form.form").css({
				"width": "500px"
			});
		} else {
			$(".logo").css("display", "none");
		}
		$(document).mouseup(function (e) {
			if (!$(e.target).is('[data-rel="drop"]')) {
				var w = $(window).width();
				$(".nav-block").css("justify-content", "space-between");
				$(".nav-block_right,form.form").css("width", "");
				$("form.form").css("transition", "none");
				$(".search").css("display", "none");
				if (w < 1055) {
					$(".hamburger").removeClass("hamburger-drop");
					$(".logo").css("display", "block");
				}
				if (v > 600) {
					$("ul.menu").css("display", "flex");
				}
			}
		});
	});
	$(".main-header_read").hover(function () {
		$(this).find(".read_h2").css("color", "#c7b299");
		$(this).find(".line").css("border-color", "#c7b299");
	}, function () {
		$(this).find(".read_h2").css("color", "#555555");
		$(this).find(".line").css("border-color", "#f1eee9");
	});
	// $(".tab_content").hide();
	$(".tabs-li:first").find("a").addClass("tabs-active");
	$(".tabs-li a").click(function (e) {
		e.preventDefault();
		$(".tabs-li a.tabs-active").removeClass("tabs-active");
		$(this).addClass("tabs-active");
		// $(".tab_content").hide();
		var id = $(this).attr("data-tab");
		var tabContent = $('.tab_content .col[data-tab="' + id + '"]');
		if (id != "all") {
			$(".tab_content .col").addClass("zoomOut").hide();
			$(tabContent).removeClass("zoomOut");
			$(tabContent).addClass("zoomIn").show();
		} else if (id == "all") {
			$(".tab_content .col").removeClass("zoomOut");
			$(".tab_content .col").addClass("zoomIn").show();
		}
	});
	// $("button.vjs-big-play-button[title='Play Video']").on("click", function(e){
	// 	// e.preventDefault();
	// 	// $(this).parent().siblings("div.fonvideo").hide();
	// 	// $(".wrapper main.main section.main-video div.fonvideo").addClass("video-block-none");
	// 	// alert("Hello world");
	// 	// $("div.fonvideo").hide();
	// });
	$("#main-posts__owl").owlCarousel({
		margin: 40,
		// nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				// nav: true
			},
			600: {
				items: 2,
				// nav:true
			},
			1000: {
				items: 3,
				// nav: true,
				// loop: true
			}
		}
	});
	$(window).scroll(function () {
		var top = $(document).scrollTop();
		var w = $(window).width();
		if (top < 1000){
			$(".nav").css({
				"position": "absolute",
				"background": "transparent"
			});
			if(w > 600)
				$(".nav .menu").css("background","transparent");
			else
				$(".nav .menu").css("background","#000");
		}
		else {
			$(".nav").css({
				"position": "fixed",
				"background": "#000"
			});
			$(".nav .menu").css("background","#000");
		}
	});

});