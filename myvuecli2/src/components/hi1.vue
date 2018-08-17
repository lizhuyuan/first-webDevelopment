<template>
    <div class="hi1">{{msg}}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是hi页面！！！'
    }
  }
}
</script>

<style scoped>
.hi1{
  float: left;
  height: 200px;
  width: 50%;
  background-color: royalblue;
}
</style>
