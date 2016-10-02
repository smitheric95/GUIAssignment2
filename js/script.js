$(document).ready(function(){
	$('button').click(function(){
		var $sq = $('.square')[0].outerHTML
		var $sec = $('section');

		console.log($sq);

		for(var i=0;i<30;i++){
			$sec.append($sq);
		}
	});
});

