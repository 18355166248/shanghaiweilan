/**
 * Created by xuzhihui on 2017/4/19.
 */
window.onload = function () {
//¶¥²¿ÂÖ²¥Í¼

    var num = 0;
    for(var i = 0; i < $(".bigPhoto .circleH li").length; i++){
        $(".bigPhoto .circleH li")[i].index = i;
        $(".bigPhoto .circleH li")[i].onmouseover = function () {
            for(var j = 0; j < $(".bigPhoto .circleH li").length; j++){
                $(".bigPhoto .circleH li")[j].className = "";
                if(j !== this.index && j!== num){
                    //clearInterval($(".bigPhoto .photo li")[j].timer);
                    $(".bigPhoto .photo li")[j].style.opacity = 0;
                }
            }
            this.className = "currentHover";
            var newNum = this.index;
            myAnimate($(".bigPhoto .photo li")[this.index],{"opacity":1});
            myAnimate($(".bigPhoto .photo li")[num],{"opacity":0}, function () {
                num = newNum;
            })
            //num = this.index;
        }
    }

}



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
    },100)
}

function myGetStyle(ele,attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    } else {
        return ele.currentStyle[attr];
    }
}