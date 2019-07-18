var tag=0;
var aLi = document.getElementById('slider-pointer');
var aImg = document.getElementById('slider-img');
var arr_li=aLi.getElementsByTagName('li');
var arr_img =aImg.getElementsByTagName('img');

for(var i=0;i<arr_li.length;i++){
    arr_li[i].index=i;
    arr_li[i].onclick =function(){
        changeSlider(this.index);
        tag = this.index;
    }
}

var timer;
gotimer();
function gotimer(){
    timer = setInterval(function(){
        tag++;
        tag=tag==arr_li.length?0:tag;
        changeSlider(tag);
    },1000);
}

var item_slide =document.getElementById('slider');
item_slide.onmouseover=function(){
    clearInterval(timer);
}
item_slide.onmouseout=function(){
    gotimer();
}
function changeSlider(_tag){
    for(var j=0;j<arr_li.length;j++){
        arr_li[j].className='';
        arr_img[j].className='';
    }
    arr_li[_tag].className='selected';
    arr_img[_tag].className='active';
}