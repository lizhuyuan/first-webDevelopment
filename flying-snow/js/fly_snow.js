var minsize=5;
var maxsize=50;/*雪花雪片的最大尺寸*/
var newon=200;/*多少毫秒产生一个雪花，即雪下的大小*/
var flakeColor='#fff';
var flake=$('<div></div>').css({'position':'absolute','top':'-50px'}).html("<i class='fa fa-snowflake-o' aria-hidden='true'></i>");
$(function () {
    var documentHeight=$(document).height();
    var documentWidth=$(document).width();
    setInterval(function () {
       var starPositionleft=Math.random()*documentWidth;
       var starOpacity=0.7+Math.random()*0.3;/*产生随机数*/
        var starSize=minsize+Math.random()*maxsize;
        var endPositiontop=documentHeight;
        var endPositionleft=Math.random()*documentWidth;
        var durationFall=4000+Math.random()*3000;/*下降速度的随机数，在2秒到5秒之内*/
        flake.clone().appendTo("body").css({
            "left":starPositionleft,
            "opacity":starOpacity,
            "font-size":starSize,
            "color":flakeColor,
        }).animate({
            "top":endPositiontop,
            "left":endPositionleft,
            "opacity":0.5,/*间隔durationFall速度落下*/
        },durationFall,function () {$(this).remove()});
    },newon);/*setIterval()间隔多少秒执行一次，这里是newon个*/
    $('body').css('overflow','hidden');/*禁止滚动条滑动*/
});