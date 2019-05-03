(function(){
    var timeout;
    var $window = $(window);
    var $navbar = $('.navbar');
    
    $window.on('scroll', function(e){
      clearTimeout(timeout);
      
      timeout = setTimeout(function(){
        if ($window.scrollTop() < 650) {
          $navbar.removeClass('hide');
        } else {
          $navbar.addClass('hide');
        }
      }, 100);
    });
  }());

