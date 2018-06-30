<template>
  <div class="secondRoute">
    恭喜你，动态添加路由成功，浏览器的链接已经变化；

    <h3>无论你怎么刷新我都会留在当前页面</h3>
    <h3>并且点击浏览器回退键，我会跳到之前页面,不会循环</h3>

  </div>
</template>

<script>
import router2 from '@/router'
import router from 'vue-router'
export default {
  name: 'HelloWorld',
  mounted(){
      localStorage.setItem('new',JSON.stringify({'path':'/secondRouter','component':'kk'}))//保存路由
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
