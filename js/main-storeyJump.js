/**
 * Created by Administrator on 2017/4/24 0024.
 */
var LstoreyJump = document.getElementsByClassName("storey_jump")[0];
var Lul = LstoreyJump.children[2];
var Lol = LstoreyJump.children[1];
var LulLiArr = [Lul.children[0],Lul.children[2],Lul.children[4]];
var LolLiArr = Lol.children;
var topRocket = document.getElementsByClassName("top_rocket")[0];
var Lktimer = null;
var Lkleader = 0;
var Ltarget2 = 0,Lleader2 = 0,Ltimer2 = null;

for (var i=0;i<LolLiArr.length;i++) {
    LolLiArr[i].Lkindex = i;
    LolLiArr[i].onclick = function () {
        Ltarget2 = LulLiArr[this.Lkindex].offsetTop;
        clearInterval(Ltimer2);
        Ltimer2 = setInterval(function () {
            var step = (Ltarget2 - Lleader2)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            Lleader2 = Lleader2 + step;
            window.scrollTo(0,Lleader2);
            if (Lleader2 == Ltarget2) {
                clearInterval(Ltimer2);
            }
        },30);
    }
}

window.onscroll = function () {
    if (scroll().top>800) {
        Lshow(topRocket);
    }else {
        Lhide(topRocket);
    }
    Lkleader = scroll().top;
    Lleader2 = scroll().top;
}

topRocket.onclick = function () {
    clearInterval(Lktimer);
    Lktimer = setInterval(function () {
        var step = (0 - Lkleader)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        Lkleader = Lkleader + step;
        window.scrollTo(0,Lkleader);
        if (Lkleader == step) {
            clearInterval(Lktimer);
        }
    },30);

}

function Lshow(ele) {
    ele.style.display = "block";
}
function Lhide(ele) {
    ele.style.display = "none";
}