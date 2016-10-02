$(document).ready(function(){
	var sec = $('section');
	var sq = "<div class='square invisiSquare'></div>";
	var sqCount = 30;

	for(var i = 0; i < sqCount; i++){
		var color = 51 * (i%5);

		sec.append( 
			$(sq).css({
				'background-color' : 'rgb('+color+','+color*3+','+color*4+')'
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