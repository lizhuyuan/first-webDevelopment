$(function () {
    $('.pic ul li ').mousemove(function () {
        $(this).stop(true).animate({"width":"900px"},500).siblings().stop(true).animate({"width":"100px"},500);
        /*siblings()这个函数是指元素的其他兄弟元素，即其他li标签*/
        /*学习的时候出现问题，鼠标移到上面没反应，因为前面引用的时候没有写对 type="text/javascript"，
        之后发现有反应但是会有些反应问题，添加stop（TRUE）后没问题*/
        /*stop(true,true)，即停止当前动画并直接到达当前动画的末状态，并清空动画队列。*/
        /*在这里两个true会很快没有动画效果，而一个则有很好的动画效果*/
        /*stop(true)程序会把当前元素接下来尚未执行完的动画队列清空*/
    });
});