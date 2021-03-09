// Navbar will change color
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function(){
  $(".headshot").fadeIn(400)
})