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
  $sidenav.css('display', 'flex');
  $sidenav.css('top', '0');
  window.setTimeout(function() {
    // Must be number value. Adjust as needed.
    $sidenav.css({
      'height':'100%',
      'width':'200px', 
      'background-color':'#000'
    });
  }, 10);
  $toggler.css('color', 'white');
  $sidenav.addClass('show');
}

function hideSidenav() {
  $sidenav.css({
    
    'width':'0px', 
    'box-shadow':'none',
    'background':'transparent'
  });
  window.setTimeout(function() {
    $sidenav.css('display', 'none');
  }, 500);
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

