/**
 * Created by Administrator on 2017/4/19 0019.
 */
var main = document.getElementsByClassName("main")[0];
var bigImg = main.getElementsByClassName("bigimg")[0];
var imgWidth = bigImg.offsetWidth;
var ul = bigImg.getElementsByTagName("ul")[0];
var ol = bigImg.getElementsByTagName("ol")[0];
var ulLiArr = ul.getElementsByTagName("li");
var prev = bigImg.getElementsByClassName("prev")[0];
var next = bigImg.getElementsByClassName("next")[0];
var arr = bigImg.getElementsByClassName("arr")[0];

for (var i=0;i<ulLiArr.length;i++) {
    var newLi = document.createElement("li");
    newLi.innerHTML = i + 1;
    ol.appendChild(newLi);
}
var olLiArr = ol.children;
olLiArr[0].className = "cur";
ul.appendChild(ulLiArr[0].cloneNode(true));

for (var i=0;i<olLiArr.length;i++) {
    olLiArr[i].index = i;
    olLiArr[i].addEventListener("mouseover",function () {
        for (var j=0;j<olLiArr.length;j++) {
            olLiArr[j].className = "";
        }
        this.className = "cur";
        fn(ul,-this.index*imgWidth);
        num = cnt = this.index;
    });
}

var cnt = 0;
var num = 0;
next.addEventListener("click",autoPlay);

prev.addEventListener("click",function () {
    num--;
    cnt--;
    if (num==-1) {
        ul.style.left = -(ulLiArr.length-1)*imgWidth + "px";
        num = ulLiArr.length-2;
    }
    if (cnt==-1) {
        cnt = olLiArr.length-1;
    }
    for (var i=0;i<olLiArr.length;i++) {
        olLiArr[i].className = "";
    }
    olLiArr[cnt].className = "cur";
    fn(ul,-num*imgWidth);
});

var timer1 = setInterval(autoPlay,2000);

bigImg.addEventListener("mouseover",function () {
    arr.style.display = "block";
    clearInterval(timer1);
});

bigImg.addEventListener("mouseout",function () {
    arr.style.display = "none";
    timer1 = setInterval(autoPlay,2000);
});

function autoPlay() {
    num++;
    cnt++;
    if (num==ulLiArr.length) {
        ul.style.left = 0;
        num = 1;
    }
    if (cnt==olLiArr.length) {
        cnt = 0;
    }
    for (var i=0;i<olLiArr.length;i++) {
        olLiArr[i].className = "";
    }
    olLiArr[cnt].className = "cur";
    fn(ul,-num*imgWidth);
}

function fn(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = target>ele.offsetLeft?10:-10;
        ele.style.left = ele.offsetLeft + step + "px";
        if (Math.abs(target-ele.offsetLeft)<=Math.abs(step)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },1);
}
