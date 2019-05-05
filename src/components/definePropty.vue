<template>
  <div id="app" class="">
    <el-button @click="changeData">阿牛</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
var obj = {};
Object.defineProperty(obj, 'txt', {
  get: function() {
    console.log(obj)
    return obj;
  },
  set: function(newValue) {
    console.log(newValue)
  }
});
var i = 0;
do {
  console.log('hello world <br>');
  i++;
} while (i < 5);

let oppp = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('陈宫了')
    reject('rejectd')
  }, 300)
})
oppp.then(res => {
  // console.log(res)
})
oppp.catch(res => {
  console.log(res)
})
export default {

  data() {
    return {


    }

  },
  methods: {
    changeData() {
      obj.txt += 'ant'
    }
  }
}

</script>
<style type="text/css">
</style>
