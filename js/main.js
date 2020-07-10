$(function () {
  $('a[href^="#top"]').click(function () {
    var speed = 500;
    var adjust = 80;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});