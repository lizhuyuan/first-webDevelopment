<template>
  <div class="leftNav">
    <ul>
      <li><i class="icon iconfont icon-home"><div>首页</div></i></li>
      <li><i class="icon iconfont icon-peoplefill"><div>会员</div></i></li>
      <li><i class="icon iconfont icon-wodedingdan"><div>订单</div></i></li>
      <li><i class="icon iconfont icon-cart_fill_light"><div>购物车</div></i></li>
      <li><i class="icon iconfont icon-shezhi"><div>设置</div></i></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "leftNav"
    }
</script>

<style>
  .leftNav{
    width: 5%;
    height: 100%;
    background-color:darkslategrey;
    color:white;
    font-size: 16px;
    float: left;
  }
  .iconfont{
   font-size: 20px;
  }
  .leftNav ul{
    padding: 0px;
    margin: 0px;
  }
  .leftNav li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid white;
    padding: 10px;
  }
</style>
