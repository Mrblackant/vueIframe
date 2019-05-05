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
// console.log(arre)
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
// console.log(sortarr(arre))

// some、every、find、filter、map、forEach
var arr2 = [1, 8, 9, 0]
let tempp = arr2.find((item, index) => {
  return item > 2
})
// console.log(tempp)//8
// reduce
//扁平化数组
var arr2 = [
  [1, 2, 9, 3],
  [4, 5],
  [6, 7]
];
var new2 = arr2.reduce(function(pre, next, index) {
  return pre.concat(next); //前数组拼接后数组 .concat()
})
// console.log(new2)

// for in /for of
var arr3 = [3, { name: 'lili' }]
var obj = { age: 20, class: 12 }
for (var item in arr3) {
  // console.log(item)
}
for (var item of arr3) {
  // console.log(item)
}

// js变量提升

</script>
<style type="text/css">
</style>
