
$(document).ready(function(){
	'use strict';
	$('.do_button').on('click',function(){
		let inputCode = $('.textarea').val();
    try{
    	eval(inputCode);
    }catch(ex){
    	$('.textarea').css({'color':'red'});
    	$('body').append('<div class = "ex">Возникла ошибка в коде: ' + ex + '</div>');
    }
	})

	$('.delete_button').on('click',function(){
		$('.textarea').css({'color':'black'});
		$('.ex').remove();
		$('.textarea').val('');
		
	})
})