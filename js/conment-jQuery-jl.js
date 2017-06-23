$(window).ready(function () {
    //顶部 菜单栏 文字特效 s
    $("#nav>ul>li").on("mouseenter", function () {
        $(this).find("b").animate({top:20},100);
        $(this).find("span").animate({top:-23},100);
    });
    $("#nav>ul>li").on("mouseleave", function () {
        $(this).find("b").animate({top:0},100);
        $(this).find("span").animate({top:0},100);
    });
    //底部菜单栏 文字特效
    $("#nav2>ul>li").on("mouseenter", function () {
        $(this).find("b").animate({top:20},100);
        $(this).find("span").animate({top:-23},100);
    });
    $("#nav2>ul>li").on("mouseleave", function () {
        $(this).find("b").animate({top:0},100);
        $(this).find("span").animate({top:0},100);
    });

    //顶部手机入口二维码
    $(".top .iph").on("mouseenter mouseleave", function () {
       $(this).find(".phonejl").stop().slideToggle(200);
    });

    //顶部 菜单栏 文字特效 e

    //顶部   下拉菜单
    $("#nav>ul>li").mouseenter(function () {
        console.log($(".top-caidan .nav>ul>li"));
        $(this).find("ul").stop().slideDown();
    });
    $("#nav>ul>li").mouseleave(function () {
        console.log($(".top-caidan .nav>ul>li"));
        $(this).find("ul").stop().slideUp();
    });

    //显示遮罩层
    $(".topFirst .sk").click(function () {
        hideOrShow();
    });
    $("#j_hideFormAdd").click(function () {
        hideOrShow();
    });

    //封装
    function hideOrShow() {
        //显示遮罩层和添加表单的盒子;
        $("#j_mask").toggle();
        $("#j_formAdd").toggle();
    }


    //顶部固定  导航栏
    $(window).scroll(function () {
        if($(window).scrollTop() > 600) {
            var json1 = {"opacity":0.5,"position":"fixed","top":0,"left":0};
            $(".topFirst").css(json1);
            $(".top-caidan").css("marginTop",63);
        } else {
            var json2 = {"opacity":1,"position":"static"};
            $(".topFirst").css(json2);
            $(".top-caidan").css("marginTop",0);
        }
    });



    //鼠标进入高亮显示  蔚蓝海岸最新活动
    $(".pinpaichuxin li").mouseenter(function () {
        console.log($(".pinpaichuxin li"));
        $(this).css("opacity",1).siblings("li").css("opacity",0.6);
    });
    $(".le-pic").mouseleave(function () {
        $(this).find("li").css("opacity",1);
    });

    //鼠标移动上去文字向上移动5px
    $(".pinpaichuxin .pin-head>span").mouseenter(function () {
       $(this).animate({"marginTop":245});
    });
    $(".pinpaichuxin .pin-head>span").mouseleave(function () {
        $(this).animate({"marginTop":250});
    });

    $(".jiangxinzuopin .pin-head>span").mouseenter(function () {
        $(this).animate({"marginTop":140});
    });
    $(".jiangxinzuopin .pin-head>span").mouseleave(function () {
        $(this).animate({"marginTop":145});
    });

    $(".sijiawaijing .pin-head>span").mouseenter(function () {
        $(this).animate({"marginTop":140});
    });
    $(".sijiawaijing .pin-head>span").mouseleave(function () {
        $(this).animate({"marginTop":145});
    });

    $(".xinrenkepian .pin-head>span").mouseenter(function () {
        $(this).animate({"marginTop":140});
    });
    $(".xinrenkepian .pin-head>span").mouseleave(function () {
        $(this).animate({"marginTop":145});
    });

    $(".xinrnezhufu1 .pin-head>span").mouseenter(function () {
        $(this).animate({"marginTop":140});
    });
    $(".xinrnezhufu1 .pin-head>span").mouseleave(function () {
        $(this).animate({"marginTop":145});
    });


//    蔚蓝海岸 拍摄推荐 鼠标进入 图片阴影出现 鼠标移开 图片阴影消失
    //第一排
    $(".jiangxinzuopin>.w>ul .texiao1").mouseenter(function () {
        $(this).find("i").slideDown();
        $(this).find(".font55").css("color","#d61aa8");
    });
    $(".jiangxinzuopin>.w>ul .texiao1").mouseleave(function () {
        $(this).find("i").slideUp();
        $(this).find(".font55").css("color","#999");
    });
    //第二排
    $(".jiangxinzuopin>.w>ul .texiao2").mouseenter(function () {
        $(this).find("i").fadeIn(1000);
        $(this).find(".font55").css("color","#d61aa8");
    });
    $(".jiangxinzuopin>.w>ul .texiao2").mouseleave(function () {
        $(this).find("i").fadeOut(500);
        $(this).find(".font55").css("color","#999");
    });
    //第三排
    $(".jiangxinzuopin>.w>ul .texiao3").mouseenter(function () {
        $(this).find("i").show(1000);
        $(this).find(".font55").css("color","#d61aa8");
    });
    $(".jiangxinzuopin>.w>ul .texiao3").mouseleave(function () {
        $(this).find("i").hide(500);
        $(this).find(".font55").css("color","#999");
    });


//    蔚蓝海岸  私家外景
    $(".sijiawaijing>.luomafengqing>.box2 li").mouseenter(function () {
        console.log($(".sijiawaijing>.luomafengqing>.box2 li"));
        $(this).animate({"top":10});
    });
    $(".sijiawaijing>.luomafengqing>.box2 li").mouseleave(function () {
        console.log($(".sijiawaijing>.luomafengqing>.box2 li"));
        $(this).animate({"top":0});
    });


    //我们拥有一套样式,可以赋值给所有的li,让他们完成旋转木马式的操作;
    var arrOfJson = [
        {   //  1
            "width":400,
            "top":10,
            "left":50,
            "opacity":0.2,
            "z-index":2
        },
        {  // 2
            width:600,
            top:50,
            left:250,
            opacity:0.8,
            "z-index":3
        },
        {   // 3
            width:800,
            top:90,
            left:450,
            opacity:1,
            "z-index":4
        },
        {  // 4
            width:600,
            top:50,
            left:650,
            opacity:0.8,
            "z-index":3
        },
        {   //5
            width:400,
            top:10,
            left:850,
            opacity:0.2,
            "z-index":2
        }
    ];

    var kepiantupian = document.getElementsByClassName('kepiantupian')[0];
    var kepianUl = document.getElementsByClassName("kepianul")[0];
    var liArr = kepianUl.getElementsByTagName("li");
    var arrow = document.getElementsByClassName('arrow')[0];
    var prev = arrow.getElementsByClassName("prev")[0];
    var next = arrow.getElementsByClassName("next")[0];
    var flag = true;

    kepiantupian.onmouseenter = function () {
        animate111(arrow,{"opacity":0.7});
    }
    kepiantupian.onmouseleave = function () {
        animate111(arrow,{"opacity":0});
    }

    autoPlay();

    next.onclick = function () {
        //判断:如果可以执行那么才调用函数
        if(flag){
            //点击之后立刻关闭;   二次点击的时候就不能用了
            flag = false;
            //autoPlay();执行完毕的时候;   animate()定时器清除的时候;
            //animate();的回调函数执行的时候;
            autoPlay(false);
        }
    }

    //2.点击左侧按钮: 把数组中的最后一套样式删除添加到数组的最前面;
    prev.onclick = function () {
        if(flag) {
            flag = false;
            autoPlay(true);
        }

    }

    //封装:
    function autoPlay(bool) {
        //如果参数是undefined那么不应该进行判断,直接for循环设置li数组;
        if(bool !== undefined){
            if(bool){
                arrOfJson.push(arrOfJson.shift());
            }else{
                arrOfJson.unshift(arrOfJson.pop());
            }
        }
        //(2).让所有li再次执行样式数组里面的内容;
        for(var i=0;i<liArr.length;i++){
            animate111(liArr[i],arrOfJson[i], function () {
                //在这里animate()里面的定时器就执行完毕了;所有属性都到达了执行目标位置;
                //允许二次点击;
                flag = true;
            });
        }
    }


    //手风琴
    //$(".qingzhu>.qingjl li").mouseenter(function () {
    //    $(this).stop().animate({"width":895}).siblings("li").animate({"width":57});
    //});
    //$(".qingzhu").mouseleave(function () {
    //    $(this).find('li').stop().animate({"width":150});
    //});



//    小广告
    $(".smallAd").animate({"width":125});
    $(".smallAd>span").animate({"width":40});

    $(".smallAd>span").click(function () {
        $(".smallAd").animate({"width":0});
        $(".smallAd>span").animate({"width":0});
        $(".img2").animate({"width":198});
    });




    //微博发布   心情发布
    $(".boxjl11").click(function () {
        $(".xqfb").fadeToggle();
    });


//    楼层跳跃 特效变色 s
    $(".returnTop>ul").on("mouseenter","li", function () {

        $(this).stop().animate({"background-color":"#000"});
    });
    $(".returnTop>ul").on("mouseleave","li", function () {

        $(this).stop().animate({"background-color":"#48a3cc"});
    });
//    楼层跳跃 特效变色 e

});



