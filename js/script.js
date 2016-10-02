$(document).ready(function(){
	var sq = $('.square');
	var sec = $('section');

	for(var i=0;i<29;i++){
		sec.append( $(sq[0].outerHTML).addClass('invisiSquare') );
	}

	$('button').click(function(){
		$('.square').each(function(){
			$(this).removeClass('invisiSquare');
		});

		$('.square').click(function(){
			$(this).addClass('invisiSquare');
		});
	});
});

