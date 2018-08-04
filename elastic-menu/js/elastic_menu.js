$(function () {
    $('.uitem').hide();
    $('.item > a').click(function () {/*toggle()函数在1.9版本之后显示隐藏出现问题，所以这里不能用*/
        if($(this).next().css('display')=='none'){
            $(this).next().slideDown();
            var index=$('.uitem').index($(this).next());/*这一段代码是取到打开的.uitem取得他的索引*/
            $('.uitem').not(":eq("+index+")").slideUp();/*不是上面var的索引的其他.uiem则是向上滑，即关闭状态*/
        }
        else {
            $(this).next().slideUp();
            var index=$('.uitem').index($(this).next());
            $('.uitem').not(":eq("+index+")").slideUp();
        }
    });
})
/*
$(function () {
    $('.uitem').hide();
    $('.item > a').hover(function () {
        $(this).next().slideDown();
    },function () {
        $(this).next().slideUp();
    });
    /!*这一段代码是鼠标移到上面时所作的操作*!/
})*/
