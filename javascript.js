function main() {
	$('.wrapper, .sienna, .lexus').hide();
	// $('.camry').hide();
	// $('.sienna').hide();
	// $('.lexus').hide();
	$('.wrapper').fadeIn(1000);

	$('.specs').hide();
	$('.specs-button').click(function() {
		$(this).next().slideToggle(500);
		$(this).toggleClass('active');
	})

	$('.camry-button').click(function() {

		$('.sienna, .lexus').hide();
		// $('.sienna-button, .lexus-button').toggleClass('inactive');
		$('.camry').fadeIn(500);
		$('.camry').show();

		// $('.camry-button').toggleClass('active');

	})

	$('.sienna-button').click(function() {

		$('.camry, .lexus').hide();
		// $('.camry-button, .lexus-button').toggleClass('inactive');
		$('.sienna').fadeIn(500);
		$('.sienna').show();
		// $('.sienna-button').toggleClass('active');

	})

	$('.lexus-button').click(function() {

		$('.camry, .sienna').hide();
		// $('.camry-button, .sienna-button').toggleClass('inactive');
		$('.lexus').fadeIn(500);
		$('.lexus').show();
		// $('.lexus-button').toggleClass('active');

	})


}
$(document).ready(main);