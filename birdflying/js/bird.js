
$(function () {
    var $bird=$('#bird');
    var pos=$bird.offset();/*获取小鸟的方位*/
    var birdSize={width:$bird.width(),height:$bird.height()};/*获取小鸟的尺寸*/
    var speed=10;/*设置小鸟移动的速度*/
    var keyrecord=39;
    $(document).keydown(function (even) {
        var key=even.keyCode;/*得到键盘事件到底是哪个*/
        if(key!== keyrecord)
        {
            $bird.removeClass().addClass(' dir_'+key);
        }
        keyrecord=key;
        switch (key)
        {
            case 37:
                pos.left-=speed;/*左边*/
                if(pos.left<=-birdSize.width)
                {
                    pos.left=$(window).width();
                }
                break;
            case 38:
                pos.top-=speed;/*上边*/
                if(pos.top<=-birdSize.height)
                {
                    pos.top=$(window).height();
                }
                break;
            case 39:
                pos.left+=speed;/*右边*/
                if(pos.left>=$(window).width())
                {
                    pos.left=-birdSize.width;
                }
                break;
            case 40:
                pos.top+=speed;/*下边*/
                if(pos.top>=$(window).height())
                {
                    pos.top=-birdSize.height;
                }
                break;
        }
       $bird.offset(pos);
    });
});