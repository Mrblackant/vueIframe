<template>
  <div id="app">
    <div class="lllxlxl">
      <ul>
        <li>wqwq</li>
        <li>ss </li>
      </ul>
    </div>
    <div class="lx">
      <ul>
        <li>wqwq</li>
        <li>ss </li>
      </ul>
    </div>
  </div>
</template>
<script>
console.log(0=='0')
console.log(0==='0')
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

async function f1() {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, 3000)
  })
  console.log('-----')

  let re = await p
  console.log(re)
}
// f1()
function takeLongTime() {
  return new Promise(resolve => {
    setTimeout(() => resolve("long_time_value"), 1000);
  });
}

// takeLongTime().then(v => {
//     console.log("got", v);
// });

async function test() {
  let c = await takeLongTime()
  console.log(c)
}
// test()
// ---------------
async function test1() {
  return 123
}
// test1().then(data=>{
//  console.log(data)
// })
// ---------------

function abc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('abc----')
    }, 300)
  })
}

function def() {
  console.log('def------')
}

async function fff() {
  await def()
  console.log('接下来')
  let c = await abc()
  console.log(c)

}
// fff() 

// -----------------
// 模拟3个请求，每个请求都是依赖于上一个请求的结果

function makeResult(time, req) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(req)
    }, time)
  })
}
// promise版本
makeResult(1000, '一').then(res => {
  makeResult(600, res + '二').then(res => {
    makeResult(300, res + '三').then(res => {
      // console.log(res)
    })
  })
})

async function tone() {
  let r1 = await makeResult(1000, 'r1')
  let r2 = await makeResult(600, r1 + 'r2')
  let r3 = await makeResult(300, r2 + 'r3')
  console.log(r3)
}
tone()

</script>
<style>
.lx {
  margin-top: 40px;
  /*padding: 30px;*/
  clear: both;
}

.lllxlxl {
  float: left;
}

ul {
  border: 1px solid red;
}

li {
  padding: 5px;
  background-color: yellow;
}

</style>
