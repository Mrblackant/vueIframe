<template>
  <div id="app">
  </div>
</template>
<script>
export default {
  data() {
    return {
      clearTime: false,
      activeTab: ''
    }

  },
  methods: {
    chane() {}
  }
}

let p1 = Promise.resolve('p11')
let p2 = Promise.resolve('p22')
let p3 = Promise.reject('p33')
let p4 = new Promise((resolve, reject) => {
  resolve('p44')
})

Promise.all([p1, p2, p4]).then(data => {
  // console.log(data)
}, err => {
  // console.log(err)
})


Promise.race([p1, p2, p3, p4]).then(data => {
  // console.log(data)
}, err => {
  // console.log(err)

})

async function baseDemo() {
  console.log('123')
  let c = await ab()
  console.log(c)
  console.log('1234')

}
baseDemo()

function ab() {
  // return 'vd'
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('300毫秒后的事件')
    }, 900)
  })
  return p
}
// 手写一个promise
// function Promise(exector) {
//   let _self = this
//   this.status = 'pengding'
//   this.value = undefined
//   this.err = undefined

//   function resolve(data) {
//     if (_self.status === 'pengding') {
//       _self.value = data
//       _self.status = 'resolved'

//     }
//   }

//   function reject(err) {
//     if (_self.status === 'pengding') {
//       _self.err = err
//       _self.status = 'rejected'

//     }
//   }
//   exector(resolve, reject)
// }

</script>
