$(function() {
    var onoff = 1;
    $('#nav_btn').click(function() {
        $('#nav_btn div').toggleClass('burger');
        if(onoff == 1) {
            $('nav').fadeIn(300);
            onoff *= -1;
        } else  {
            $('nav').fadeOut(300);
            onoff *= -1;
        }
    });

    var close = 'closed';
    $('.gnb_1').each(function() {
        var li_1 = $(this);
        var gnb_1 = $('.gnb_1 a');
        // var lnb = $('.lnb');

        function closeAll() {
            gnb_1.addClass(close);
            li_1.find('.nav_bar').removeClass('on');
            li_1.find('ul').stop(true).slideUp(500);
        }
        function open() {
            gnb_1.removeClass(close);
            li_1.find('.nav_bar').addClass('on');
            // lnb.stop().slideUp();
            li_1.find('ul').stop(true).slideDown(500);
        }

        closeAll();

        li_1.hover(open,closeAll);
    });
}); 