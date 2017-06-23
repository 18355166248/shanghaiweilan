/**
 * Created by Administrator on 2017/4/22 0022.
 */
$(".change_nav>span").mouseenter(function () {
    $(this).addClass("top_red_line").siblings("span").removeClass("top_red_line");
    $(".L_nav1>ul").eq($(this).index()).addClass("disp").siblings("ul").removeClass("disp");
});
$(".L_nav1 ul").children("li").css("opacity",0.3) ;
$(".L_nav1 li").mouseenter(function () {
    $(this).css("opacity",1).siblings("li").css("opacity",0.3);
});
$(".L_nav1 ul").mouseleave(function () {
    $(this).children("li").css("opacity",0.3) ;
});
//ª¨»Î

$(".text_emerge li").mouseenter(function () {
    $(this).children(".L_info").animate({bottom: 0,"background-color":"#FF1BBE","color":"#fff"},1000);
});
$(".text_emerge li").mouseleave(function () {
    $(this).children(".L_info").animate({bottom: -150,"background-color":"#1BFF10","color":"#0913FE"},1000);
    hide($(this).children(".L_info"));
});
