$(document).ready(function() {

	cajaSkills=$('#skills');
	cajaIdiomas=$('#idiomas');

	$(window).scroll(function() {
		documentScroll=$(document).scrollTop()+700;
		if (documentScroll > cajaSkills.offset().top) {
			$('.progress-html').animate({width: '90%'}, 2000);
			$('.progress-css').animate({width: '85%'}, 2000);
			$('.progress-js').animate({width: '60%'}, 2000);
			$('.progress-wp').animate({width: '40%'}, 2000);
		}
	});

	$(window).scroll(function() {
		documentScroll=$(document).scrollTop();
		if (documentScroll > cajaIdiomas.offset().top) {
			$('.progress-fr').animate({width: '100%'}, 2000);
			$('.progress-en').animate({width: '70%'}, 2000);
			$('.progress-es').animate({width: '80%'}, 2000);
		}
	});



});
