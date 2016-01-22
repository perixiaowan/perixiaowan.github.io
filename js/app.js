$(document).ready(function () {
	$('.anchor').on('click', function () {
		var elid = '#modal-' + $(this).data('id');
		console.log(elid);
		$(elid).show();
		$('.al-actionbar').show();
	});
	$('#button-ok').on('click', function () {
		console.log('aaa');
		$('.modal').hide();
		$('.al-actionbar').hide();
	});
	var screenWidth  = $(window).width();
	var screenHeight = $(window).height();
	console.log(screenHeight, screenWidth);

	var axis = screenWidth/2 - 20;

	$('.modal').css('width', screenWidth - 80);
	$('.modal').css('margin-left', 0 - (screenWidth - 80)/2 );
	$('.modal').css('height', screenHeight - 200);
	$('.modal').css('margin-top', -50 - (screenHeight - 200)/2 );
});