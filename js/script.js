$(document).ready(function(){
	var sec = $('section');
	var sq = $('.square')[0].outerHTML;
	
	for(var i=0;i<29;i++){
		sec.append( $(sq).addClass('invisiSquare') );
	}

	$('button').click(function(){
		$('.square').each(function(){
			$(this).removeClass('invisiSquare');
		}).click(function(){
			$(this).addClass('invisiSquare');
		});
	});

});

