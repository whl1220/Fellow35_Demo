# Fellow35_Demo
练习代码
2019-7-7
once again
我又出现了

2019-7-7 修改

###2019-7-17 轮播图
####简单轮播图
<head>
    <style>   
        *{
            margin: 0;
            padding: 0;
            user-select: none;
        }
        li{
            list-style: none;
        }
        #container{
            width: 600px;
            height: 300px;
            margin: 100px auto;
            position: relative;
        }
        #container>img{
            display: none;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
        #pointer{
            width: 150px;
            height: 20px;
            line-height: 20px;
            position: absolute;
            right: 20px;
            bottom: 20px;
        }
        #pointer>li{
            float: left;
            width: 20px;
            height: 20px;
            text-align: center;
            margin: 0 5px;
            border-radius: 5px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.6);
            cursor: pointer;
        }
        #left{
            display: inline-block;
            width: 50px;
            height: 50px;
            margin-top: -25px;
            background-color: rgba(0, 0, 0, 0.5);            
            position: absolute;
            top: 50%;
            left: 10px;
            cursor: pointer;
        }
        #left>div{
            width: 20px;
            height: 20px;
            border-left: 5px solid #fff;
            border-bottom:5px solid #fff;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            top: 10px;
            left: 20px;  
        }
        #right{
            display: inline-block;
            width: 50px;
            height: 50px;
            margin-top: -25px;
            background-color: rgba(0, 0, 0, 0.5);            
            position: absolute;
            top: 50%;
            right: 10px;
            cursor: pointer;
        }
        #right>div{
            width: 20px;
            height: 20px;
            border-right: 5px solid #fff;
            border-top:5px solid #fff;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            top: 10px;
            right: 15px;  
        }
        #pointer>li.selected{
            background-color: #ff0036;
        }
        #container>img.active{
            display: block;
        }
    </style>
</head>
<body>
    <div id="container">
        <img src="img/pic1.jpg" alt="#" class="active">
        <img src="img/pic2.jpg" alt="#">
        <img src="img/pic3.jpg" alt="#">
        <img src="img/pic4.jpg" alt="#">
        <img src="img/pic5.jpg" alt="#">
        <ul id="pointer">
            <li class="selected">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <span id="left">
            <div></div>
        </span>
        <span id="right">
            <div></div>
        </span>
    </div>
    <script>
        var tag=0;
        var timer;
        var aLi = document.getElementsByTagName('li');
        var oImg = document.getElementsByTagName('img');
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onclick =function (){
                changeSlider(this.index);
                tag=this.index;
            }
        }
        var btn_l = document.getElementById("left");
        var btn_r = document.getElementById('right');
        btn_l.onclick =function(){
            tag--;
            tag =tag==-1?aLi.length-1:tag;
            changeSlider(tag);   
        }
        btn_r.onclick =function(){
            tag++;
            tag=tag==aLi.length?0:tag;
            changeSlider(tag);  
        }
        gotimer();
        function gotimer(){
            timer=setInterval(function(){
                btn_r.onclick();
            },1000);
        }
        var Ocon =document.getElementById('container');
        Ocon.onmouseover =function(){
            clearInterval(timer);
        }
        Ocon.onmouseout =function(){
            gotimer();
        }
        function changeSlider(num){
            for(var j=0;j<aLi.length;j++){
                    aLi[j].className='';
                    oImg[j].className='';
                }
                aLi[num].className='selected';
                oImg[num].className='active';
        }
    </script>
</body>

####滑动轮播图

<style>
    *{
        margin: 0;
        padding: 0;
        user-select: none;
    }
    li{
        list-style: none;
    }
    #container{
        width: 600px;
        height: 300px;
        margin: 0 auto;
        margin-top: 50px;
        overflow: hidden;
        position: relative;
    }
    #slider{
        width: 3000px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transition: left 0.5s;
        transition: left 0.5s;
    }
    #slider>img{
        float: left;
        width: 600px;
        height: 300px;
    }
    #pointer{
        position: absolute;
        bottom: 20px;
        right: 15px;
    }
    #pointer>li{
        float: left;
        width: 20px;
        height: 20px;
        margin: 0 5px;
        text-align: center;
        line-height: 20px;
        border-radius: 5px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }
    #pointer>li.selected{
        background-color: #ff0036;
    }
    #left{
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-top: -25px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 50%;
        left: 10px;
    }
    #left>div{
        width: 20px;
        height: 20px;
        border-top:5px solid #fff;
        border-left: 5px solid #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        position: absolute;
        top:13px;
        left: 17px;
        cursor: pointer;
    }
    #right{
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-top: -25px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 50%;
        right: 10px;
        cursor: pointer;
    }
    #right>div{
        width: 20px;
        height: 20px;
        border-top:5px solid #fff;
        border-right: 5px solid #fff;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top:13px;
        right: 17px;
    }
</style>

</head>
<body>
    <div id="container">
        <div id="slider">
            <img src="img/pic1.jpg" alt="#" class="active">
            <img src="img/pic2.jpg" alt="#">
            <img src="img/pic3.jpg" alt="#">
            <img src="img/pic4.jpg" alt="#">
            <img src="img/pic5.jpg" alt="#">
        </div>
        <ul id="pointer">
            <li class="selected">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <span id="left">
            <div></div>
        </span>
        <span id="right">
            <div></div>
        </span>
    </div>
    <script>
        var aLi = document.getElementsByTagName('li');
        var oImg = document.getElementsByTagName('img');
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onclick =function(){
                changeSlider(this.index);
                tag=this.index;
            } 
        }
        var tag=0;
        var btn_l = document.getElementById('left');
        var btn_r = document.getElementById('right');
        btn_l.onclick = function(){
            tag--;
            tag= tag==-1?aLi.length-1:tag;
            changeSlider(tag);
        }
        btn_r.onclick = function(){
            tag++;
            tag= tag==aLi.length?0:tag;
            changeSlider(tag);
        }
        gotimer();
        var timer;
        function gotimer(){
            timer = setInterval(function(){
                btn_r.onclick();
            },1000);
        }
        var oCon =document.getElementById('container');
        oCon.onmouseover=function(){
            clearInterval(timer);
        }
        oCon.onmouseout =function(){
            gotimer();
        }
        var oSlider =document.getElementById('slider');
        function changeSlider(_tag){
            for(var j=0;j<aLi.length;j++){
                aLi[j].className='';
            }
            aLi[_tag].className='selected';
            oSlider.style.left=-_tag*600+'px';
        }
    </script>
</body>
####淡入淡出轮播图

###2019-7-18 
####无缝滚动
####拖拽
####

