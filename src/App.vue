<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {

  name: 'App',
  data(){
    return{
    }
  },
  components:{
  },
  methods:{
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
