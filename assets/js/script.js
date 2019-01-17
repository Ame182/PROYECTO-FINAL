 $(function(){
  
// Gallery//
    $('.cero').click(function(){
        $('.satura').not(this).removeClass('satura');
        $(this).toggleClass('satura');
    });

// Termina Gallery//


    $('#register_button').click(function(e){
    	alert('Ingresa tus datos');
    	e.preventDefault();
  	})  


 // Despliegue de informaciòn en el Organigrama//
 	$('.gg').one("click" , function(e){
    	$('.gg').prepend('<h2>DIOS!</h2>')	
  
    });

    $('.vt').one("click" , function(e){
    	$('.vt').append('<p>Jefas Zonales</p>' + '<br' + '<p>Jefas de Diagnostico</p>')	

    });

  	$('.mkt').one("click" , function(e){
    	$('.mkt').append('<p>Gerente de Marketing</p>' + '<br' + '<p>Coordinador de Marketing</p>'+ '<br' + '<p>Asistentes de Marketing</p>')	
 
    });	

    $('.fin').one("click" , function(e){
    	$('.fin').append('<p>Gerente de Finanzas</p>' + '<br' + '<p>Coordinador de Finanzas</p>'+ '<br' + '<p>Gestion de pago/p>')	
 
    });	

    $('.abs').one("click" , function(e){
	    $('.abs').append('<p>Gerente de Abastecimiento</p>' + '<br' + '<p>Encargado de Abastecimiento</p>')	
 
    });	

    $('.cl').one("click" , function(e){
    	$('.cl').append('<p>Gerente Clínico</p>' + '<br' + '<p>Sub Gerente Clínico</p>'+ '<br' + '<p>Contralores</p>')	
 
    });	

    $('.con').one("click" , function(e){
    	$('.con').append('<p>Gerente de Contabilidad</p>' + '<br' + '<p>Analista de Contabilidad</p>'+ '<br' + '<p>Asistentes de contabilidad</p>')	
 
    });	

    $('.organigrama a').click(function(e){
    	e.preventDefault()
    });
 //Termina Organigrama//

// Tickets //

	$('.myform').on('submit' , function(event){
		var text= $(".texto").val();
		event.preventDefault();
		 
		$('input').click(function(e) {
		
		var $newTweet = $('.demotweet').clone();
	    $newTweet.find('.contenido-tweet').html('<p>' + text + '</p>').val();
	    $('.derecha').prepend($newTweet);
	    e.preventDefault();

		});
});

	  $('body').on('click', '.like', function(){
	    var likes = parseInt($(this).parent().find('.contador-likes').html());
	    likes++;
	    $(this).parent().find('.contador-likes').html(likes);
	
	    if (likes == 1) {
	
	      $(this).parent().find('.like').addClass('like--rojo');
	    };
	});

  $('body').on('click', '.eliminar', function (e) {
	    e.preventDefault();
	    $(this).parent().parent().fadeOut();
	
	  });


 })