/*窗体滚动式头部header变小固定在顶部*/
$(window).scroll(function () {
    headerInit();
});
function headerInit(){
    if($(this).scrollTop()>0){
        $("body").addClass("fiexed-header-on");
    }else {
        $("body").removeClass("fiexed-header-on");
    }
}
headerInit();
/*窗体滚动式头部header变小固定在顶部的结束*/

/*首页背景图片轮播事件的开始*/
var images=["img/背景1.jpg","img/背景2.jpg","img/背景3.jpg"];
$(".index").backstretch(images,{
    fade:750,
    duration:4000,/*持续几秒钟*/
    preload:1,
    start:2
});

/*首页背景图片轮播事件的结束*/

/*关于页面的脚本的开始*/
if($("[data-animation-effect]").length>0){
    $("[data-animation-effect]").each(function(index,el){
        var $this=$(this);
        var animationEffect=$this.attr["data-animation-effect"];
        setTimeout(function(){
            $this.removeClass("object-none-visiable").addClass("object-visiable");
            $this.addClass('animated'+animationEffect);
        },1000);
    });
}
/*滚动监听*/
$('body').scrollspy({ target: '#mynavbar' })
/*页面间平滑滚动的特效*/
$(".navbar a").click(function(event) {
    /*console.log(this.hash);打印出锚点*/
    var target=$(this.hash);/*找到目标#index或者#about*/
    $("html").animate({
        scrollTop:target.offset().top/*一秒钟内把高度加上去*/
    },2000);
})


/*关于页面的脚本的结束*/

/*图集里图片的动画效果的开始*/
$(".filter li a").click(function(){
    var filterValue =  $(this).attr('data-filter');
    $(".isotope-container").isotope({ filter: filterValue });

    $(this).parent().addClass('active').siblings().removeClass('active');
    /*这一条是给点击之后的li列表加上active样式，二siblings()函数则是其与列表移除active样式*/

    return false;/*一开始点击是会链接到首页，但是return FALSE的话就可以阻止首页出来*/
});




/*图集里图片的动画效果的结束*/
