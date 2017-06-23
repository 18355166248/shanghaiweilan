/**
 * Created by xuzhihui on 2017/4/24.
 */
window.onload = function () {
    //ÉÏ·½ÎŞ·ìÂÖ²¥Í¼
    var num = 0,key = 0;
    for(var i = 0; i < $("#circleH li").length; i++){
        $("#circleH li")[i].index = i;
        $("#circleH li")[i].onmouseenter = function () {
            for(var j = 0; j<$("#circleH li").length;j++){
                $("#circleH li")[j].className = "";
            }
            this.className = "currentHover";
            var target = -this.index*$("#photo li")[0].offsetHeight;
            myAnimate($("#photo")[0],{"top":target});
            num = key = this.index;
        }
    }
    $("#bigPhoto")[0].onmouseenter = function () {
        clearInterval(timer);
    }
    $("#bigPhoto")[0].onmouseleave = function () {
        timer = setInterval(function () {
            myAotuPlay();
        },3000);
    }
    var newLi = $("#photo li")[0].cloneNode(true);
    $("#photo")[0].appendChild(newLi);
    var timer = setInterval(function () {
        myAotuPlay();
    },2000);

    function myAotuPlay(){
        num++;
        key++;
        if(num === $("#photo li").length){
            $("#photo")[0].style.top = 0;
            num = 1;
        }
        if(key === $("#photo li").length-1){
            key = 0;
        }
        for(var j = 0; j<$("#circleH li").length;j++){
            $("#circleH li")[j].className = "";
        }
        $("#circleH li")[key].className = "currentHover";
        myAnimate($("#photo")[0],{"top":-num*$("#photo li")[0].offsetHeight});
    }

    //Ô²Í¼ÇøÓò
    $("#contentx li").mouseenter(function () {
        $(this).find("div").eq(0).animate({"backgroundPositionY":"-201"});
    }).mouseleave(function () {
        $(this).find("div").eq(0).animate({"backgroundPositionY":"0"});
    })
    //Ô²Í¼ÇøÓò×óÓÒÂÖ²¥
    //ÓÒ²à¼ıÍ·
    var liArr = $(".contentx ul")[0].children;
    $(".circlex .arrowrx")[0].onclick = function () {
        myAnimate($("#contentx ul")[0],{left:-270}, function () {
            $("#contentx ul")[0].appendChild(liArr[0]);
            $(".contentx ul")[0].style.left = 0;
        });
    }
    $(".circlex .arrowlx")[0].onclick = function () {
        $(".contentx ul")[0].style.left = "-270px";

        $("#contentx ul")[0].insertBefore(liArr[4],liArr[0]);
        myAnimate($("#contentx ul")[0],{left:0})
    }

    //×îĞÂ»î¶¯ÂÖ²¥Í¼
    var imgWidth = $(".news .bd li img")[0].offsetWidth;
    for(var i = 0 ; i < $(".news .hd li").length;i++){
        $(".news .hd li")[i].index = i;
        $(".news .hd li")[i].onmouseenter = function () {
            myAnimate($(".news .bd")[0],{"left":-this.index*imgWidth});
        }
    }

    //ÈÈÃÅ¾°µã
    $(".sc9 .hd ul li").mouseenter(function () {
        $(".sc9 .bd li").eq($(this).index()).fadeIn().siblings("li").fadeOut();
        $(".sc9 .hd span").stop().animate({"left":this.offsetLeft})
    })


    $(".sc1 div").mouseenter(function () {
        $(this).find("span").stop().animate({"top":0});
    }).mouseleave(function () {
        $(this).find("span").stop().animate({"top":-259});
    });
































    function myAnimate(ele,json,fn){
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var bool = true;
            for(var k in json){
                if(k==="z-index"){
                    ele.zIndex = json[k];
                }else if(k==="opacity"){
                    if(myGetStyle(ele,k) == 0) {
                        var leader = 0;
                    }else{
                        var leader = myGetStyle(ele,k)*100 || 100;
                    }
                    var step = (json[k]*100-leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader += step;
                    ele.style.opacity = leader/100;
                    ele.style.filter = "alpha(opacity = leader)";
                    if(leader !== json[k]*100){
                        bool = false;
                    }
                }else {
                    var leader = parseInt(myGetStyle(ele,k));
                    var step = (json[k]-leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader += step;
                    ele.style[k] = leader + "px";
                    if(leader !== json[k]){
                        bool = false;
                    }
                }
            }
            if(bool) {
                clearInterval(ele.timer);
                if(fn){
                    fn();
                }
            }
        },50)
    }

    function myGetStyle(ele,attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(ele, null)[attr];
        } else {
            return ele.currentStyle[attr];
        }
    }


















//  Â¥²ãÌøÔ¾  s
    var returnTop = document.getElementsByClassName('returnTop')[0];
    var gotop = document.getElementsByClassName('gotop')[0];
    var tuitui = document.getElementsByClassName('tuitui')[0];
    var waiwai = document.getElementsByClassName('waiwai')[0];
    var keke = document.getElementsByClassName('keke')[0];
    var timer = null,leader = 0;

    window.onscroll = function () {
        if (scroll().top>500) {
            returnTop.style.display = "block";
        } else {
            returnTop.style.display = "none";
        }
        leader = scroll().top;
    }

    //??????? ?????
    gotop.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (0-leader)/10;
            step= step>0?Math.ceil(step):Math.floor(step);
            leader += step;
            scrollTo(0,leader);
            if (leader === 0) {
                clearInterval(timer);
            }
        },20)
    }

    //???????  ?????
    tuitui.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (2332-leader)/10;
            step= step>0?Math.ceil(step):Math.floor(step);
            leader += step;
            scrollTo(0,leader);
            if (leader === 2332) {
                clearInterval(timer);
            }
        },20)
    }

    //?????  ?????
    waiwai.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (5850-leader)/10;
            step= step>0?Math.ceil(step):Math.floor(step);
            leader += step;
            scrollTo(0,leader);
            if (leader === 5850) {
                clearInterval(timer);
            }
        },20)
    }

    //?????????  ?????
    keke.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (10701-leader)/10;
            step= step>0?Math.ceil(step):Math.floor(step);
            leader += step;
            scrollTo(0,leader);
            if (leader === 10701) {
                clearInterval(timer);
            }
        },20)
    }

    //  Â¥²ãÌøÔ¾  e


}


