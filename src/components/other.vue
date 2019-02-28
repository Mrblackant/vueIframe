<template>
  <div id="app" class="">
    <div class="makeheigth"></div>
  </div>
</template>
<script>
  // 函数节流
// var canRun=true
// window.onscroll=function(){
// if (!canRun) {
//   return
// }
// canRun=false
// setTimeout(()=>{
//   console.log('函数节流')
// canRun=true
// },300)
// }
// 函数防抖
var canRun2=false

window.onscroll=function(){
  clearTimeout(canRun2)
  canRun2=setTimeout(()=>{
console.log('函数防抖')
  },300)
}
  export default {
  data() {
    return {
      clearTime: false,
      activeTab: ''
    }

  },
  methods: {

  }
}

</script>
<style type="text/css">
.makeheigth {
  height: 3000px;
  border: 1px solid red;
}

</style>
