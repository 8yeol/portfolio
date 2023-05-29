$(function() {

    // 마우스 오버 시 
    $('article').mouseenter(function() {
        var vid = $(this).find("img").get(0);
        vid.crrentTime=0;
        // vid.play();
        $(this).stop().animate({
            'width':'30%'
        },1000,function() {
            $(this).find('h3').stop().animate({'right':'10px'},400);
            $(this).find('p').stop().animate({'right':'10px'},800);
        });
        $(this).find("img").stop().animate({'opacity':'1'},1200);
    });

    // 마우스 아웃 시
    $("article").mouseleave(function() {
        var vid = $(this).find("img").get(0);
        $(this).stop().animate({'width':'12%'},700);
        $(this).find("img").stop().animate({'opacity':'0'},2000);
        $(this).find("h3").stop().animate({'right':'-310px'},200);
        $(this).find("p").stop().animate({'right':'-310px'},500);
    });
});