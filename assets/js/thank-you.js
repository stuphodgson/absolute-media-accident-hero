$(document).ready(function () {
	// Viewport bubbles
	if (window.location.href.indexOf('localhost') > -1) {
		$('span.viewport').css('display', 'block');
	} else {
		$('span.viewport').css('display', 'none');
	}





	// Smooth scroll
	var anchor_link = $('html, body');
	$('a[href^="#"]').click(function () {
		anchor_link.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 30
		}, 600);
		return false;
	});





	// Getting data from previous page
	$('.fname_pull').text(localStorage.getItem('fname'));
	$('.claim_amount').text(localStorage.getItem('claim_amount'));
	$('.injury_variable').text(localStorage.getItem('injury_variable'));





	// Time of day
	var thehours = new Date().getHours();
	var themessage;
	var morning = ('morning');
	var afternoon = ('afternoon');
	var evening = ('evening');
	if (thehours >= 0 && thehours < 12) {
		themessage = morning;
	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;
	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}
	$('.greeting').append(themessage);
});