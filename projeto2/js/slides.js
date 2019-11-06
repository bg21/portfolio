$(function(){

	$('section.mosaico div.container div.mosaico-wraper').slick({
		centerMode: false,
  		slidesToShow: 5,
  		arrows:false,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		responsive:[
  			{
  				breakpoint:768,
  				settings:{
  					arrows:false,
  					centerMode:true,
  					slidesToShow:3
  				}
  			},
  			{
  				breakpoint:580,
  				settings:{
  					slidesToShow:2
  				}
  			},
  			{
  				breakpoint:320,
  				settings:{
  					slidesToShow:1
  				}
  			}
  		]
	});

	$('section.depoimentos >.container').slick({
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 2000,
  		dots:true
	});

	$('section.social .mosaico-social').slick({
		slidesToShow: 6,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 2000,
  		responsive:[
  			{
  				breakpoint:768,
  				settings:{
  					slidesToShow:4
  				}
  			},
  			{
  				breakpoint:320,
  				settings:{
  					slidesToShow:1
  				}
  			}
  		]
	});

});