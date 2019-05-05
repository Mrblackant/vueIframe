<template>
  <div id="app" class="">
    <div class="bocx">
      <div class="inner_bocx">wqw</div>
    </div>
    <el-input v-model="firstname"></el-input>
    <el-input v-model="lastname"></el-input>
    <el-input v-model="fullname"></el-input>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  computed: {
    fullname: {
      get() {
        return this.firstname + this.lastname
      },
      set(newval) {
        // 手动改变fullname的时候会调用这个方法
        console.log(newval)
      }

    }
  },
  data() {
    return {
      firstname: '',
      lastname: ''
    }

  },
  methods: {

  }
}

// 求数组的最大值
// es6
var arrlen = [2, 1, 5, 9]
// console.log(...arrlen)
var re = Math.min(...arrlen)
var re2 = Math.max(...arrlen)
// console.log(re)
// console.log(re2)
// 编程式函数 迭代数组
var si = arrlen[0]
for (var i = 0; i < arrlen.length; i++) {
  if (si > arrlen[i]) {
    si = arrlen[i]
  }
}
// console.log(si)
console.log(arrlen instanceof Array)

</script>
<style type="text/css">
.bocx {
  width: 300px;
  height: 200px;
  border: 1px solid red;
  display: flex;

  justify-content: center;
  align-items: center;
}

.inner_bocx {
  width: 100px;
  height: 100px;
  border: 1px solid blue;
  /*align-content: space-around;*/
  /*justify-content:;*/
  /*align-items: center;*/
}

</style>
