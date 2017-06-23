$(window).ready(function () {
    var scBdUl = $(".sc5 .bd");
    $(".sc5 .hd li").each( function (index,ele) {
        console.log(index);
        $(ele).on("click mouseenter",function () {
            scBdUl.stop().animate({"top":-index*350});
        });
    });
});