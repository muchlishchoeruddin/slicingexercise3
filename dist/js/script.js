$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    items:1,
});
// portfolio
	$('[data-category="all"]').click(function(){
		$('.datacategories').show(200);
	});
	$('[data-category="themes"]').click(function(){
		$('.datacategories:not(.themes)').hide(200);
		$('.themes').show(200);
	});
	$('[data-category="icons"]').click(function(){
		$('.datacategories:not(.icons)').hide(200);
		$('.icons').show(200);
	});
	$('[data-category="patterns"]').click(function(){
		$('.datacategories:not(.patterns)').hide(200);
		$('.patterns').show(200);
	});
	$('[data-category="mockups"]').click(function(){
		$('.datacategories:not(.mockups)').hide(200);
		$('.mockups').show(200);
	});
	$('[data-category="uikits"]').click(function(){
		$('.datacategories:not(.uikits)').hide(200);
		$('.uikits').show(200);
	});
// end portfolio
$('.nav-link').click(function(){
	if($(this).attr('href')=="#"){
		var x=0;
	}else{
		var x = $($(this).attr('href')).position().top;
	}
	$('html').animate({scrollTop:x},1000,'swing')
});
$(window).scroll(function(){
	if($(this).scrollTop()>685.4545593261719){
		$('.navbar').addClass('fixed-top')
	}else{
		$('.navbar').removeClass('fixed-top')
	}
});