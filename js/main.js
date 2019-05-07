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

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

