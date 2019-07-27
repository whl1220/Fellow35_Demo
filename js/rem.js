(function(doc,win){
    var dcoEl =doc.documentElement,//获取html元素
    //orientationChange 移动端safari浏览器支持 切换横竖屏事件
    resizeEvt = 'orientationChange' in window ? 'orientationChange' : 'resize'
    recalc =function(){
        // document.documentElement.clientWidth 浏览器窗口文档显示区域的宽度，不包括滚动条
        var clientWidth = dcoEl.clientWidth;
        if(!clientWidth)return;
        if(clientWidth>540){
            clientWidth=540;
        }
        //以iphone6为基准 body 100px rem=size/100 红包页面以iPhone6为基准
        dcoEl.style.fontSize = 100 * (clientWidth/750) +'px';
    };
    if(!doc.addEventListener)return;
    win.addEventListener(resizeEvt,recalc,false);
    //DomContentLoaded dom内容加载完成
    doc.addEventListener('DomContentLoaded',recalc,false);
})(document,window);