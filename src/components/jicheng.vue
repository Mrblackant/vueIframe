<template>
  <div id="app" class="wapperAll">
    <el-input v-model="teees"></el-input>
  </div>
</template>
<script>
  // 原型链
 function faterClass(){
  this.name="father"
 }
 function sub(){

 }
 sub.prototype=new faterClass()
 console.log(new sub().name)

 // 组合继承 构造函数+call
 function ab(){
  this.name="构造函数"
 }
 function subAb(){
  // call改变this指向
  ab.call(this)
  this.age=30
 }
 var newAB=new  subAb()
 // console.log(newAB.name)
 // 原型继承
 function createAnother(o) {
        // 创建一个临时构造函数
        function F() {

        }
        // 将传入的对象作为它的原型
        F.prototype = o;
        // 返回一个实例
        return new F();
    }
    var box={
      name:'box',
      size:12
    }
    var box1=createAnother(box)
    console.log(box1.name)
  export default {
    directives:{

    },
  data() {
    return {
      teees:''
    }

  },
  methods: {

  }
}

</script>
<style type="text/css">
</style>
