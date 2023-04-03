$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".topBtn").fadeIn(250);
      } else {
        $(".topBtn").fadeOut(200);
      }
    });

    $('.topBtn').click(function () {
        $("html, body").animate({scrollTop: 0}, 400);
        return false;
    });
})