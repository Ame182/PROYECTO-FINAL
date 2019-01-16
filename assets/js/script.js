 $(function(){
      $('#galeria-fotos , img').click(function(){
          $('.satura').not(this).removeClass('satura');
          $(this).toggleClass('satura');

      })
    })