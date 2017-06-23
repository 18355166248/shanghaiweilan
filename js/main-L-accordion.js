/**
 * Created by Administrator on 2017/4/22 0022.
 */
var bigLi = document.getElementsByClassName("L_accordion")[0];
var liArr = bigLi.getElementsByTagName("li");
var Json1 = {"width":120}
var Json2 = {"width":600}
var LArr = ["L-imgs/1491121347868252.jpg","L-imgs/1491122768644831.jpg","L-imgs/1491291975700256.jpg","L-imgs/1491293520700471.jpg","L-imgs/1491293814710626.jpg","L-imgs/1491293828507775.jpg"]
for (var i=0;i<liArr.length;i++) {
    liArr[i].style.background = "url(" + LArr[i] + ") no-repeat";
    liArr[i].onmouseenter = function () {
        for (var j=0;j<liArr.length;j++) {
            accordionFn(liArr[j],Json1);
        }
        accordionFn(this,Json2);
    }
}
bigLi.onmouseleave = function () {
    for (var i=0;i<liArr.length;i++) {
        accordionFn(liArr[i],{"width":200});
    }
}

function accordionFn(ele,Json,fn) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for (var k in Json) {
            if (k === "z-index") {
                ele.style.zIndex = Json[k];
            }else if (k === "opacity") {
                if (LgetStyle(ele,k)*10 === 0) {
                    var leader = 0;
                }else {
                    var leader = parseInt(LgetStyle(ele,k)*10) || 10;
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
                var leader = parseInt(LgetStyle(ele,k)) || 0;
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
    },16);
}

function LgetStyle(ele,attr) {
    if (window.getComputedStyle !== undefined) {
        return window.getComputedStyle(ele,null)[attr];
    }else {
        return ele.currentStyle[attr];
    }
}
