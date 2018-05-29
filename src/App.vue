<template>
  <div id="app">
<div class="allWapper">
  <!-- logo -->
    <div class="shinywayLogo">
      <img src="http://an888.net/all/shinywayUnversity.png">
    </div>
    <!-- 顶部tabs -->
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane class="temp" label="CRM" name="first">
      <iframe v-if="ifArr.first" class="ifa" scrolling=auto src="http://an888.net/dist/#/seedlist/index" frameborder="0"></iframe>
    </el-tab-pane>
    <el-tab-pane class="temp"  label="留学" name="second">
       <iframe v-if="ifArr.second"   class="ifa" scrolling=auto src="https://segmentfault.com/" frameborder="0"></iframe>
    </el-tab-pane>
    <el-tab-pane class="temp"  label="移民" name="third">
       <iframe v-if="ifArr.third"  class="ifa" scrolling=auto src="https://www.baidu.com/" frameborder="0"></iframe>
    </el-tab-pane>
  </el-tabs>

</div>
<!-- </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        activeName: 'first',
        ifArr:{
          first:true,
          second:false,
          third:false
        }
    }
  },
  methods:{
      handleClick(tab, event) {
        console.log(tab, event)
       let flagName=tab.name
       this.ifArr[flagName]=true
      }
  }
}
</script>

<style>
body{
  margin:0;
  padding:5px;
}
.ifa{
    width:100%;
height:100%;
  }
  .el-tabs__content{
    border: 1px solid red;
    border-top:none;
    position: absolute;
    top: 62px;
    left: 0;
    bottom: 0;
    right: 0;
    // width:100%;
    // height:80%;
  }
  .allWapper{
    display:flex;
    border-bottom:1px solid #e4e7ed;
  }
  .el-tabs__header{
    margin-bottom:0px;
  }
  .el-tabs__header .el-tabs__item{
    margin:8px 0;
    font-size:16px;
    padding-left:29px;

  }
  .temp{
      width:100%;
    height:100%;
  }
.shinywayLogo{
      width: 200px;
    height: 53px;
    margin-right:35px;
}
.shinywayLogo img{
  width:100%;
}
</style>
