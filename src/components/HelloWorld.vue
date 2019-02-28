<template>
  <div id="app">
    <router-link  to="/promise">
      promise
    </router-link>
  </div>
</template>
<script>
// 箭头函数
var sun = (a, b) => { return a + b }
var sun = (a, b) => a + b
var sunm = (a) => 1
// console.log(sunm('ss'))
// 扩展运算符
// 取出参数对象中所有可遍历属性，赋值到当前对象
let abo = {
  a: 1,
  b: 200
}
let cbd = {
  ...abo,
  a: 22,
  c: 23,
}
let ar1 = [
  1, 3
]
let ar2 = [
  3, 5
]
var add = (a, b) => a + b
// console.log(add(...ar2))
// console.log([...ar1,...ar2])
// console.log(cbd)
// Object.assign

let a3 = {
  name: 'lii',
  age: 3,
  app: 33
}
let a4 = {
  name: 'ant',
  age: 4
}
// console.log(Object.assign({},a4,a3))
export default {
  data() {
    return {}

  },
  methods: {
    changePro() {

    }
  },
  mounted() {

  },

}

</script>
<style lang="scss" rel="stylesheet/scss">
// table tbody {
//   display: block;
//   height: 200px;
//   overflow-y: scroll;
// }

// table thead,
// table tbody tr {
//   display: table;
//   width: 100%;
//   table-layout: fixed;
//   text-align: center;
// }

// thead th,
// tbody td {
//   // width: 50px;
// }

// table thead {
//   width: calc(100% - 1em);
// }

</style>
