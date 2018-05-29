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
    </el-tab-pane>

    <el-tab-pane class="temp"  label="留学" name="second">
    </el-tab-pane>

    <el-tab-pane class="temp"  label="移民" name="third">
    </el-tab-pane>
  </el-tabs>
    </div>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <keep-alive>
    <component :is="currentView"></component>
</keep-alive>
  </div>
</template>

<script>
import crm from '@/view/allFrames/crm'//crm
import lx from '@/view/allFrames/lx'//留学
import ym from '@/view/allFrames/ym'//移民

export default {

  name: 'App',
  data(){
    return{
        activeName: 'first',
        currentView:lx
    }
  },
  components:{
   crm,lx,ym
  },
  methods:{
      handleClick(tab, event) {
        switch(tab.label)
              {
              case 'CRM':
                // this.$router.push('/')
                this.currentView=crm
                break;
              case '留学':
                // this.$router.push('/lx')
                this.currentView=lx

                break;
              case '移民':
                // this.$router.push('/ym')
                this.currentView=ym

                break;
              }
        // console.log(tab, event);
        console.log(tab.label);
      }
  }
}
</script>

<style>
body{
  margin:0;
  padding:5px;
}

  .el-tabs__content{
    // border: 1px solid red;
    // border-top:none;
    // position: absolute;
    // top: 62px;
    // left: 0;
    // bottom: 0;
    // right: 0;
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
