// Slider ----------------------------------------
$(document).on("ready", function () {
	$(".regular").slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2500,
	});

	// Videp Slider ----------------------------------------
	$(".videoSlide").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		//autoplay: true,
		autoplaySpeed: 5000,
	});
});
