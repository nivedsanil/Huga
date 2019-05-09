(function(){
    var timeout;
    var $window = $(window);
    var $navbar = $('.navbar');
    
    $window.on('scroll', function(e){
      clearTimeout(timeout);
      
      timeout = setTimeout(function(){
        if ($window.scrollTop() < 150) {
          $navbar.removeClass('hide');
        } else {
          $navbar.addClass('hide');
        }
      }, 100);
    });
  }());

  $(document).ready(function() {
    $("#myCarousel").swiperight(function() {
       $(this).carousel('prev');
     });
    $("#myCarousel").swipeleft(function() {
       $(this).carousel('next');
    });
 });


