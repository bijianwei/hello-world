window.onload = function() {
    var inner = document.getElementById("inner");
    var imgArr = document.getElementsByTagName("li");
    var spanArr = document.getElementsByTagName("span");
    var leftGo = document.getElementById("leftGo");
    var rightGo = document.getElementById("rightGo");
    var picWidth = 950; //��ȡ��һ��ͼƬ�Ŀ��
    var index = 0;
    var timer = null;
    var AutoTimer = null;
    timer = setInterval(AutoGo,2000); //���ü�ʱ��
    leftGo.onclick=function(){
    Goleft(); //�����ߵ�С��ͷ
    };
    rightGo.onclick = function(){
    Goright(); //����ұߵ�С��ͷ
    };
    inner.onmouseover=function(){
    clearInterval(timer); //������룬�����ʱ��
    }
    inner.onmouseleave=function(){
    timer = setInterval(AutoGo,2000); //����Ƴ���������ʱ��
    }
    function AutoGo(){
        // �Զ��ֲ�
        var start = inner.offsetLeft; //������ߵı߿�ĳ���
        var end = - index * picWidth;  //�յ�
        var moveDistance = end - start;
        var speed = 20; //Ҫ�ߵĲ���
        var speedCount = 0;
        clearInterval(AutoTimer);
            // ���֮ǰ�ļ�ʱ���������Խ��Խ��
        clearInterval(timer);
        AutoTimer = setInterval(function(){
            speedCount++;
            if(speedCount >= speed) {
                // �����㹻
                clearInterval(AutoTimer);
                clearInterval(timer);
                timer = setInterval(Goright,1000);
                // �ٴ�������ʱ��
            }
            inner.style.left = moveDistance + start + "px";
        // ÿ��Ҫ�ߵľ���
         },100)
        for(var i = 0; i < spanArr.length; i++){
            // �±����ʽ�ı䣬�Լ�����¼��İ�
            spanArr[i].index = i;
            spanArr[i].className = "";
            spanArr[index].className = "active";
            spanArr[i].onclick = function(){
                index = this.index; //���ݵ�ǰ�����λ��
                AutoGo();             
            }
        }
    }

    function Goleft(){
        // ������һ��;
        if(index > 0){
            index--;
        }else{
            index = 5;
        }
        AutoGo();
    }
    function Goright() {
         // ������һ��
        if(index < 5){
            index++;
        }else {
            index = 0;
        }
        AutoGo();
    }
}