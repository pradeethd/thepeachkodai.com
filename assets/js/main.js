$(document).ready(function(){
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
});
});

$(document).ready(function(){
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 200) {
              $('.logo').addClass('small');
          } else {
              $('.logo').removeClass('small');
          }
        });
});
$('.hamburger').click(function() {
  $( this ).toggleClass( "active" );
});

