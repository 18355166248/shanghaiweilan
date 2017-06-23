
window.onload = function () {

    //ε������ �����Ƽ�  ������水ť ��ѡ�е�ul��ʾ  ��������
    var jiangxinzuopin = document.getElementsByClassName('jiangxinzuopin')[0];
    var mainArr = jiangxinzuopin.getElementsByClassName("main");
    var login55 = document.getElementsByClassName('login55')[0];
    var btnArr = login55.getElementsByTagName("button");
    for (var i=0;i<btnArr.length;i++) {
        btnArr[i].index = i;
        btnArr[i].onclick = function () {
            for (var j=0;j<btnArr.length;j++) {
                mainArr[j].style.display = "none";
                btnArr[j].className = "";
            }
            mainArr[this.index].style.display = "block";
            btnArr[this.index].className = "current";
        }
    }


        //    �ײ��ַ���  ҳ����Ϣ ����ף��
        //����1: ������li��ǩ�ϱ���ͼ;
        var qingjl = document.getElementsByClassName("qingjl")[0];
        var liArr1 = qingjl.getElementsByTagName("li");
        console.log(liArr1);
        ////ѭ������ÿһ��li��ǩ;
        for(var i=0;i<liArr1.length;i++){
            //��ÿһ��li�ӱ���ͼ;
            liArr1[i].style.background = "url(images/qing"+(i+1)+".png) no-repeat";
//
            //����2: �������ĸ�li,��ǰ��li��ȱ�Ϊ800.�����ı�Ϊ100;
            liArr1[i].onclick = function () {
                //����˼��;�ɵ�������,ʣ�����Լ�;
                for(var j=0;j<liArr1.length;j++){
                    animate111(liArr1[j],{"width":57});
                }
                //��ǰ�ı�Ϊ800;
                animate111(this,{"width":894});
            }
        }

        //����3: ����ƿ����������,����li����Ϊ240;
//            qingjl.onmouseleave = function () {
//                //����li��ȱ�Ϊ240;
//                for(var i=0;i<liArr1.length;i++){
//                    animate111(liArr1[i],{"width":150});
//                }
//            }


        //    ���ض���С���
        var returnTop = document.getElementsByClassName('returnTop')[0];
        var timer = null,leader = 0;
        var gotop = document.getElementsByClassName('gotop')[0];
        var tuitui = document.getElementsByClassName('tuitui')[0];
        var waiwai = document.getElementsByClassName('waiwai')[0];
        var keke = document.getElementsByClassName('keke')[0];

        window.onscroll = function () {
            if (scroll().top>500) {
                returnTop.style.display = "block";
            } else {
                returnTop.style.display = "none";
            }
            leader = scroll().top;
        }

        //���ض��� ¥�㵼��
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

        //�����Ƽ�  ¥�㵼��
        tuitui.onclick = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                var step = (1332-leader)/10;
                step= step>0?Math.ceil(step):Math.floor(step);
                leader += step;
                scrollTo(0,leader);
                if (leader === 1332) {
                    clearInterval(timer);
                }
            },20)
        }

        //�⾰�Ƽ�  ¥�㵼��
        waiwai.onclick = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                var step = (2194-leader)/10;
                step= step>0?Math.ceil(step):Math.floor(step);
                leader += step;
                scrollTo(0,leader);
                if (leader === 2194) {
                    clearInterval(timer);
                }
            },20)
        }

        //���˿�Ƭ�Ƽ�  ¥�㵼��
        //���˿�Ƭ�Ƽ�  ¥�㵼��
        keke.onclick = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                var step = (3601-leader)/10;
                step= step>0?Math.ceil(step):Math.floor(step);
                leader += step;
                scrollTo(0,leader);
                if (leader === 3601) {
                    clearInterval(timer);
                }
            },20)
        }
    }
