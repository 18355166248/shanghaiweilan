$(window).ready(function () {
    //���� �˵��� ������Ч s
    $("#nav>ul>li").on("mouseenter", function () {
        $(this).find("b").animate({top:20},100);
        $(this).find("span").animate({top:-23},100);
    });
    $("#nav>ul>li").on("mouseleave", function () {
        $(this).find("b").animate({top:0},100);
        $(this).find("span").animate({top:0},100);
    });
    //�ײ��˵��� ������Ч
    $("#nav2>ul>li").on("mouseenter", function () {
        $(this).find("b").animate({top:20},100);
        $(this).find("span").animate({top:-23},100);
    });
    $("#nav2>ul>li").on("mouseleave", function () {
        $(this).find("b").animate({top:0},100);
        $(this).find("span").animate({top:0},100);
    });

    //�����ֻ���ڶ�ά��
    $(".top .iph").on("mouseenter mouseleave", function () {
       $(this).find(".phonejl").stop().slideToggle(200);
    });

    //���� �˵��� ������Ч e

    //����   �����˵�
    $("#nav>ul>li").mouseenter(function () {
        console.log($(".top-caidan .nav>ul>li"));
        $(this).find("ul").stop().slideDown();
    });
    $("#nav>ul>li").mouseleave(function () {
        console.log($(".top-caidan .nav>ul>li"));
        $(this).find("ul").stop().slideUp();
    });

    //��ʾ���ֲ�
    $(".topFirst .sk").click(function () {
        hideOrShow();
    });
    $("#j_hideFormAdd").click(function () {
        hideOrShow();
    });

    //��װ
    function hideOrShow() {
        //��ʾ���ֲ����ӱ��ĺ���;
        $("#j_mask").toggle();
        $("#j_formAdd").toggle();
    }


    //�����̶�  ������
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



    //�����������ʾ  ε���������»
    $(".pinpaichuxin li").mouseenter(function () {
        console.log($(".pinpaichuxin li"));
        $(this).css("opacity",1).siblings("li").css("opacity",0.6);
    });
    $(".le-pic").mouseleave(function () {
        $(this).find("li").css("opacity",1);
    });

    //����ƶ���ȥ���������ƶ�5px
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


//    ε������ �����Ƽ� ������ ͼƬ��Ӱ���� ����ƿ� ͼƬ��Ӱ��ʧ
    //��һ��
    $(".jiangxinzuopin>.w>ul .texiao1").mouseenter(function () {
        $(this).find("i").slideDown();
        $(this).find(".font55").css("color","#d61aa8");
    });
    $(".jiangxinzuopin>.w>ul .texiao1").mouseleave(function () {
        $(this).find("i").slideUp();
        $(this).find(".font55").css("color","#999");
    });
    //�ڶ���
    $(".jiangxinzuopin>.w>ul .texiao2").mouseenter(function () {
        $(this).find("i").fadeIn(1000);
        $(this).find(".font55").css("color","#d61aa8");
    });
    $(".jiangxinzuopin>.w>ul .texiao2").mouseleave(function () {
        $(this).find("i").fadeOut(500);
        $(this).find(".font55").css("color","#999");
    });
    //������
    $(".jiangxinzuopin>.w>ul .texiao3").mouseenter(function () {
        $(this).find("i").show(1000);
        $(this).find(".font55").css("color","#d61aa8");
    });
    $(".jiangxinzuopin>.w>ul .texiao3").mouseleave(function () {
        $(this).find("i").hide(500);
        $(this).find(".font55").css("color","#999");
    });


//    ε������  ˽���⾰
    $(".sijiawaijing>.luomafengqing>.box2 li").mouseenter(function () {
        console.log($(".sijiawaijing>.luomafengqing>.box2 li"));
        $(this).animate({"top":10});
    });
    $(".sijiawaijing>.luomafengqing>.box2 li").mouseleave(function () {
        console.log($(".sijiawaijing>.luomafengqing>.box2 li"));
        $(this).animate({"top":0});
    });


    //����ӵ��һ����ʽ,���Ը�ֵ�����е�li,�����������תľ��ʽ�Ĳ���;
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
        //�ж�:�������ִ����ô�ŵ��ú���
        if(flag){
            //���֮�����̹ر�;   ���ε����ʱ��Ͳ�������
            flag = false;
            //autoPlay();ִ����ϵ�ʱ��;   animate()��ʱ�������ʱ��;
            //animate();�Ļص�����ִ�е�ʱ��;
            autoPlay(false);
        }
    }

    //2.�����ఴť: �������е����һ����ʽɾ����ӵ��������ǰ��;
    prev.onclick = function () {
        if(flag) {
            flag = false;
            autoPlay(true);
        }

    }

    //��װ:
    function autoPlay(bool) {
        //���������undefined��ô��Ӧ�ý����ж�,ֱ��forѭ������li����;
        if(bool !== undefined){
            if(bool){
                arrOfJson.push(arrOfJson.shift());
            }else{
                arrOfJson.unshift(arrOfJson.pop());
            }
        }
        //(2).������li�ٴ�ִ����ʽ�������������;
        for(var i=0;i<liArr.length;i++){
            animate111(liArr[i],arrOfJson[i], function () {
                //������animate()����Ķ�ʱ����ִ�������;�������Զ�������ִ��Ŀ��λ��;
                //������ε��;
                flag = true;
            });
        }
    }


    //�ַ���
    //$(".qingzhu>.qingjl li").mouseenter(function () {
    //    $(this).stop().animate({"width":895}).siblings("li").animate({"width":57});
    //});
    //$(".qingzhu").mouseleave(function () {
    //    $(this).find('li').stop().animate({"width":150});
    //});



//    С���
    $(".smallAd").animate({"width":125});
    $(".smallAd>span").animate({"width":40});

    $(".smallAd>span").click(function () {
        $(".smallAd").animate({"width":0});
        $(".smallAd>span").animate({"width":0});
        $(".img2").animate({"width":198});
    });




    //΢������   ���鷢��
    $(".boxjl11").click(function () {
        $(".xqfb").fadeToggle();
    });


//    ¥����Ծ ��Ч��ɫ s
    $(".returnTop>ul").on("mouseenter","li", function () {

        $(this).stop().animate({"background-color":"#000"});
    });
    $(".returnTop>ul").on("mouseleave","li", function () {

        $(this).stop().animate({"background-color":"#48a3cc"});
    });
//    ¥����Ծ ��Ч��ɫ e

});



