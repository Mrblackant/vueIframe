<template>
  <div>
    点击新增 动态路由: "secondRouter"
    <br/>
    <el-button @click="srouter" type="primary">新增动态路由</el-button>

  </div>
</template>

<script>
import router from 'vue-router'
import {constantRouterMap} from '@/router'


export default {
  name: 'kk',
  mounted(){
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    srouter(){
      let newRoutes=constantRouterMap.concat([{path:'/secondRouter',
        component :resolve => require(["@/components/kk"], resolve )
      }])
      this.$router.addRoutes(newRoutes)
      this.$router.push({path:'/secondRouter'})
    }
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
