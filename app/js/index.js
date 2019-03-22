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
	$('.js-sliderExperts').slick({
		dots: false,
		prevArrow: '<div id="prev" class="btn btn-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
		nextArrow: '<div id="next" class="btn btn-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>'
	});

	// slick slider for feedback
	$('.js-sliderFeedback').slick({
		dots: true,
		centerMode: true,
		slidesToShow: 3,
		prevArrow: '<div id="prev" class="btn btn-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
		nextArrow: '<div id="next" class="btn btn-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
		responsive: [
			{
			  breakpoint: 900,
			  settings: {
				centerMode: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			}
		  ]
	});

	
	// mobile navbar
	$( '.nav-toggle' ).click( function() {
        if ( $( '#menu' ).is( ':hidden' ) ) {
            $( '#menu' ).show('slideToggle');
        }
        else {
	        $( '#menu' ).hide('slideToggle');
        }
    });

});