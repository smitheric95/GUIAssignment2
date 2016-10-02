$(document).ready(function(){
	var sec = $('section');
	var sq = $('.square')[0].outerHTML;
	var sqCount = 30;

	for(var i = 2; i <= sqCount; i++){
		var color = 51 * (i%5);
		console.log(color);

		sec.append( 
			$(sq).addClass('invisiSquare').css({
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