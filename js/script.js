$(document).ready(function(){
	var sec = $('section');
	var sq = "<div class='square invisiSquare'></div>";
	var sqCount = 30;

	for(var i = 1; i <= sqCount; i++){
		var color = 51 * (i%5);

		sec.append( 
			$(sq).css({
				'background-color' : 'rgb('+color+','+color+','+color+')'
			})
		);
	}

	$('button').click(function(){
		$('.square').each(function(){
			$(this).removeClass('invisiSquare');
		}).click(function(){
			$(this).addClass('invisiSquare');
		});
	});
});