$(document).ready(function() {

	cajaSkills=$('#skills');
	cajaIdiomas=$('#idiomas');

	$(window).scroll(function() {
		documentScroll=$(document).scrollTop()+700;
		if (documentScroll > cajaSkills.offset().top) {
			$('.progress-html').animate({width: '90%'}, 2000);
			$('.progress-css').animate({width: '85%'}, 2000);
			$('.progress-js').animate({width: '60%'}, 2000);
			$('.progress-angular').animate({width: '60%'}, 2000);
			$('.progress-flutter').animate({width: '50%'}, 2000);
			$('.progress-vuejs').animate({width: '40%'}, 2000);
			$('.progress-c').animate({width: '40%'}, 2000);
			$('.progress-dart').animate({width: '40%'}, 2000);
			$('.progress-fr').animate({width: '100%'}, 2000);
			$('.progress-en').animate({width: '70%'}, 2000);
			$('.progress-es').animate({width: '80%'}, 2000);
		}
	});

});
