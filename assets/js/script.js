 $(function(){
    $('.cero').click(function(){
        $('.satura').not(this).removeClass('satura');
        $(this).toggleClass('satura');
    });


    $('#register_button').click(function(e){
    	alert('Ingresa tus datos');
    	e.preventDefault();
  	})  	

 })