<template>
  <div id="app" class="">
  </div>
</template>
<script>
  export default {
  data() {
    return {
    }

  },
  methods: {

  }
}

// 求数组的最大值
// es6
var arrlen=[2,1,5,9]
// console.log(...arrlen)
var re=Math.min(...arrlen)
var re2=Math.max(...arrlen)
// console.log(re)
// console.log(re2)
// 编程式函数 迭代数组
var si=arrlen[0]
for(var i=0;i<arrlen.length;i++){
  if (si>arrlen[i]) {
    si=arrlen[i]
  }
}
// console.log(si)
console.log(arrlen instanceof Array)
</script>
<style type="text/css">
</style>
