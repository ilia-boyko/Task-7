$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		slidesToScroll:4,
		infinite:false,
		speed:500,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2,
					infinite:true,
					slidesToScroll:2
				}
			},
		]
	});
});

