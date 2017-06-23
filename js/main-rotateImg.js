/**
 * Created by Administrator on 2017/4/20 0020.
 */
var arrOfJson = [
    {   //  1
        "width":400,
        "top":70,
        "left":50,
        "opacity":0.2,
        "z-index":2
    },
    {  // 2
        width:600,
        top:120,
        left:0,
        opacity:0.8,
        "z-index":3
    },
    {   // 3
        width:800,
        top:100,
        left:200,
        opacity:1,
        "z-index":4
    },
    {  // 4
        width:600,
        top:120,
        left:600,
        opacity:0.8,
        "z-index":3
    },
    {   //5
        width:400,
        top:70,
        left:750,
        opacity:0.2,
        "z-index":2
    }
];

var bride = document.getElementsByClassName("bride")[0];
var bUl = bride.getElementsByTagName("ul")[0];
var bUlLiArr = bUl.getElementsByTagName("li");
var arro = bride.getElementsByClassName("arro")[0];
var Lprev = arro.getElementsByClassName("bt_prev")[0];
var Lnext = arro.getElementsByClassName("bt_next")[0];
var Lflag = true;
var Lflag1 = true;

bride.addEventListener("mouseover", function () {
    rotateFn(arro,{"opacity":1});
});

bride.addEventListener("mouseout", function () {
    rotateFn(arro,{"opacity":0});
});

autoFn();

Lnext.onclick = function () {
    if (Lflag) {
        Lflag = false;
        autoFn(true);
    }
}

Lprev.onclick = function () {
    if (Lflag1) {
        Lflag1 = false;
        autoFn(false);
    }
}

function autoFn(bool) {
    if (bool !== undefined) {
        if (bool) {
            arrOfJson.unshift(arrOfJson.pop());
        }else {
            arrOfJson.push(arrOfJson.shift());
        }
    }
    for (var i=0;i<arrOfJson.length;i++) {
        rotateFn(bUlLiArr[i],arrOfJson[i], function () {
            Lflag = true;
            Lflag1 = true;
        });
    }
}


function rotateFn(ele,Json,fn) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for (var k in Json) {
            if (k === "z-index") {
                ele.style.zIndex = Json[k];
            }else if (k === "opacity") {
                if (getStyle(ele,k)*10 === 0) {
                    var leader = 0;
                }else {
                    var leader = parseInt(getStyle(ele,k)*10) || 10;
                }
                var step = (parseInt(Json[k]*10) - leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader/10;
                ele.style.filter = "alpha(opacity=" + leader*10 + ")";
                if (parseInt(Json[k]*10) !== leader) {
                    bool = false;
                }
            }else {
                var leader = parseInt(getStyle(ele,k)) || 0;
                var step = (Json[k] - leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader + "px";
                if (leader !== Json[k]) {
                    bool = false;
                }
            }
        }
        if (bool) {
            clearInterval(ele.timer);
            if (fn) {
                fn();
            }
        }
    },30);
}