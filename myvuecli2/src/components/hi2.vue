<template>
<div class="hi2">{{msg}}</div>
</template>

<script>
export default {
  name: 'hi2',
  data () {
    return {
      msg: '这是hi2页面！！！'
    }
  }
}
</script>

<style scoped>
  .hi2{
    float: left;
    height: 200px;
    width: 50%;
    background-color: rosybrown;
  }
</style>
