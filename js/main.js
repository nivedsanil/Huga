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
    $("#HugaCarousel").swiperight(function() {
       $(this).carousel('prev');
     });
    $("#HugaCarousel").swipeleft(function() {
       $(this).carousel('next');
    });
 });


