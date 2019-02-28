<template>
  <div id="app" class="">
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {}

  },
  methods: {

  }
}
// 1.indexOf
var arr = [3, 2, 2, 5]

function onRepeat(arr) {
  var tempArr = []
  for (var i = 0; i < arr.length; i++) {
    if (tempArr.indexOf(arr[i]) === -1) {
      tempArr.push(arr[i])
    }
  }
  return tempArr
}
// console.log( onRepeat(arr))
// 2.对象键值对
var obj = {}
var objArr = []
for (var i = 0; i < arr.length; i++) {
  let oarr = arr[i]
  if (!obj[oarr]) {
    obj[oarr] = true
    objArr.push(oarr)
  }
}
// console.log(objArr)
// 3.es6 new Set
// console.log(Array.from(new Set(arr)))

// 检测变量是否为数组的方法
// console.log(arr instanceof Array)
// console.log(arr.constructor=== Array)
// console.log(Array.isArray(arr))

// ===================排序===================
var arre = [1, 5, 9, 0, 3]
// 1.sort方法
arre.sort(function(x, y) {
  // return x-y//升序
  return y - x //降序
})
console.log(arre)
// 2.冒泡排序

function sortarr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
console.log(sortarr(arre))

</script>
<style type="text/css">
</style>
