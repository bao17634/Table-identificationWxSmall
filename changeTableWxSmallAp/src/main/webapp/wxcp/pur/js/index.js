/*

function Show_Hidden(obj)
{
    if(obj.style.display=="none")
    {
        obj.style.display='block';
    }
    else
    {
        obj.style.display='none';
    }
}
window.onload=function()
{
    var olink=document.getElementById("link");
    var odiv=document.getElementById("thediv");
    olink.onclick=function()
    {
        Show_Hidden(odiv);
        return false;
    }
}
autodivheight();
function autodivheight(){ //函数：获取尺寸
    //获取浏览器窗口高度
    var winHeight=0;
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    //通过深入Document内部对body进行检测，获取浏览器窗口高度
    if (document.documentElement && document.documentElement.clientHeight)
        winHeight = document.documentElement.clientHeight;
    //DIV高度为浏览器窗口的高度
    //document.getElementById("test").style.height= winHeight +"px";
    //DIV高度为浏览器窗口高度的一半
/!*
    document.getElementById("mybody").style.height= winHeight/2 +"px";
*!/
}
window.onresize=autodivheight; //浏览器窗口发生变化时同时变化DIV高度*/