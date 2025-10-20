window.addEventListener('load', function() { 
	$('#preloader').delay(400).fadeOut('slow');
	$('#preloader .clock').fadeOut();
 
	AOS.init({
		easing: 'ease-in-out-sine'
	});
});