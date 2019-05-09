var $sidenav = $('.sidenav'),
    $toggler = $('.navbar-toggler'),
    collapsed = false;

$sidenav.css('top', $('.navbar').outerHeight());

if (window.innerWidth < 768) {
  collapse();
}

$(window).resize(function() {
  if (window.innerWidth < 768) {
    console.log(collapsed);
    collapse();
  } else {
    console.log(collapsed);
    restore();
  }
});

$toggler.click(function() {
  if (!$sidenav.hasClass('show')) {
    showSidenav();
  } else {
    hideSidenav();
  }
})

function showSidenav() {
  $('li').css("opacity", "1");
  $sidenav.css('display', 'flex');
  $sidenav.css('top','0');
  $('body').css("overflow-y", "hidden");
  window.setTimeout(function() {
    $sidenav.css({

      'height':'1200px',
      'width':'200px', 
      'background-color':'#000'
    });

    $('.navbar-toggler').animate({
      'margin-right': '190px'
    },150);
  }, 10);

  $toggler.css('color', 'white');
  $sidenav.addClass('show');
}

function hideSidenav() {

  $('body').css("overflow-y", "scroll");
  $sidenav.css({
    
    'width':'0px', 
    'box-shadow':'none',
    'background':'transparent'
  });

  $('.navbar-toggler').animate({
    'margin-right': '0px'
  },250);

  window.setTimeout(function() {

    $sidenav.css('display', 'none');

  }, 400);

  $toggler.css('color', 'white')
  $sidenav.removeClass('show');

}

function collapse() {
  if (!collapsed) {
    $('.navbar-collapse > ul').appendTo('.sidenav').addClass('w-100 text-center');
    $('.sidenav > ul .nav-link').addClass('w-100');
    collapsed = true;
  }
}

function restore() {
  if (collapsed) {
    $('.sidenav > ul').appendTo('.navbar-collapse').removeClass('w-100 text-center');
    $('.sidenav > ul .nav-link').removeClass('w-100');
    hideSidenav();
    collapsed = false;
  }
}

