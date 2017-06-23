/**
 * Created by Administrator on 2017/4/19.
 */
window.onload= function () {
    //当鼠标点击登录信息以何种方式登录时，背景改变；
    var dler=document.getElementsByClassName("dler")[0];
    var dlerSpanArr=dler.children;
    var message=document.getElementsByClassName("message")[0];
    var erweima=document.getElementById("erweima");


        dlerSpanArr[1].onclick= function () {
            dlerSpanArr[0].className="gray";
            dlerSpanArr[1].className="white";
            erweima.className="show";
            message.className="message hide"
        }
        dlerSpanArr[0].onclick= function () {
        dlerSpanArr[0].className="white";
        dlerSpanArr[1].className="gray";
        erweima.className="hide";
        message.className="message "
    }



    //邮箱验证；
    var email=document.getElementById("email");
    var check=document.getElementById("check");
    email.onfocus= function () {
        check.className="hide";
        this.value="";
    }
    email.onblur= function () {
        if(this.value.trim() === ""){
            return;
        }
        if(/^[\w\-\.]+\@[\w]+\.[\w]{2,4}$/.test(this.value)==true){
            check.className="hide";
        }else{
            check.className="showw";
        }
    }
    //密码认证；
    var passworddyd=document.getElementById("passworddyd");
    var jy=document.getElementsByClassName("jy")[0];
    var mima=document.getElementsByClassName("mima")[0];
    passworddyd.onfocus= function () {
        this.value="";
        mima.className="mima";
        jy.className="jy hide"
    }
    //判断密码
    passworddyd.onblur= function () {
        if(this.value.trim() === ""){
            return;
        }
        if(/^[\$a-zA-Z0-9_-]{6,18}$/.test(this.value)){
            jy.className="jy hide";
            if(/^[A-Za-z0-9]+[_$][A-Za-z0-9]*$/.test(this.value)){
                mima.className = "mima str4";
            }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|([0-9].*[a-zA-Z])$/.test(this.value)){
                mima.className = "mima str3";
            }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(this.value)){
                mima.className = "mima str2";
            }else{
                mima.className = "mima str1";
            }
        }else{
            jy.className="jy showw"
        }


    }



}


