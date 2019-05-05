<template>
  <div id="app" class="wapperAll">
    <div class="wapper1 wapper">
      div1
      <div class="wapper1_inner wapper_inner"></div>
    </div>
    <div class="wapper2 wapper">
      div2
      <div class="wapper2_inner wapper_inner"></div>
    </div>
    <div class="wapper3 wapper">
      <div class="wapper3_inner wapper_inner">紧急集合或或或或</div>
    </div>
    <div class="wapper2 wapper">
      div2
      <div class="wapper2_inner wapper_inner"></div>
    </div>
    <div class="wapper2 wapper">
      div2
      <div class="wapper2_inner wapper_inner"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
var canRun = true;
window.onscroll = function() {
  if (!canRun) {
    // 判断是否已空闲，如果在执行中，则直接return
    return;
  }
  canRun = false;
  setTimeout(function() {
    console.log("函数节流");
    canRun = true;
  }, 300);
};
// window.onscroll  = function () {
//     if(timer){
//         clearTimeout(timer)
//     }
//     console.log(timer)
//     timer = setTimeout(function () {
//         //滚动条位置
//         let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//         console.log('滚动条位置：' + scrollTop);
//         timer = undefined;
//     },200)
// }
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
var ab = ['a', 'c', 'g']
ab.splice(0, 1)
console.log(ab)

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() { alert(this.name) }
}
var person1 = new Person('Zaxlct', 28, 'Software Engineer');
var person2 = new Person('Mick', 23, 'Doctor');
// console.log(person1.constructor == Person); //true
// console.log(person2.constructor == Person); //true

function P2() {}
P2.prototype.name = 'lili'
P2.prototype.sayName = function() {
  console.log(this.name)
}

var p1 = new P2()
var p3 = new P2()

// console.log(p1.sayName()==p3.sayName())
var A = P2.prototype
console.log(P2.prototype == A)

console.log("-----------------原型继承------------------")

function parentFun() {
  this.name = '这里是父亲'
}

function childFun() {}
childFun.prototype = new parentFun()
let cnew = new childFun()
console.log(cnew.name)
console.log("-----------------call+构造函数继承------------------")

function callChild() {
  parentFun.call(this)
}
let callNew = new callChild()
console.log(callNew.name)
console.log("-----------------原型继承------------------")

function yuxing(o) {
  function f() {}
  f.prototype = o
  return new f()
}
let objjj = {
  name: 'lili'
}
let co = yuxing(objjj)
console.log(co.name)

</script>
<style type="text/css">
.wapper {
  width: 300px;
  height: 300px;
  border: 1px solid red;
  margin-bottom: 15px;
  position: relative;
}

.wapper_inner {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}

.wapper1_inner {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
}

.wapper2_inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}


.wapper3 {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.wapper3_inner {
  display: inline-block;
}

.wapperAll {
  overflow: auto;
}

</style>
