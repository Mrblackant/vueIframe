<template>
 <div>
 <template v-for="(item,index) in arrItem">
    <el-button  v-if="controlBtn[item].flag" @click="addMind(item)">{{controlBtn[item].name}}</el-button>
</template>
<p v-if="!controlBtn.newLx.flag">我是做个促使</p>
<div class="btn"><el-button @click='jump' type="primary">查看上传</el-button></div>
<div class="btn"><el-button @click='jump2' type="primary">查看布局</el-button></div>
</div>
</template>

<script> 
export default {
  mounted(){
    this.set()
  },
  data(){
    return{
    arrItem:[],
    controlBtn:{
        'newLx':{'flag':true,'name':'+新增留学意向'},
        'newFl':{'flag':true,'name':'+新增培训意向'},
        'newYm':{'flag':true,'name':'+新增海外投资意向'},
        'newYx':{'flag':true,'name':'+新增游学意向'}
      }
    }
},
methods:{
  set(){
    var arr =Object.keys(this.controlBtn)
    this.arrItem=arr
  },
  addMind(keys) { // 新增意向的按钮点击,控制对应的表单显示，按钮消失
    this.controlBtn[keys]=false
    },
    jump(){
      this.$router.push('/upload')
    },
    jump2(){
      this.$router.push('/layout')
    }
}
}
</script>

<style>
.btn{
  text-align:center;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>