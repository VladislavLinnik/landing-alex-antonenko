$(document).ready(function(){

	// ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});

	// sticky header
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500){
			$('.header').addClass("header--fixed");
		}
		else{
			$('.header').removeClass("header--fixed");
		}
	});

	// slick slider for review
	// $('.js-sliderExperts').slick({
	// 	slidesToShow: 3,
	// });

	// slick slider for feedback
	$('.js-sliderFeedback').slick({
		slidesToShow: 3,
	});

	
	// $( '.nav-toggle' ).click( function() {
    //     if ( $( '#menu' ).is( ':hidden' ) ) {
    //         $( '#menu' ).show('slideToggle');
    //     }
    //     else {
	//         $( '#menu' ).hide('slideToggle');
    //     }
    // });

});