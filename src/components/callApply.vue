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

  }
}

// 

var xw = {
  name: '小王',
  age: 20,
  hi: function(words,de) {
    console.log(this.age)
    console.log(this.name)
    console.log(words)
    console.log(de)
  }
}

var xh = {
  name: "小红",
  age: 18
}
// xw.hi.call(xh, '这是call方法','现在this的指向已经指给了xh');
// xw.hi.apply(xh,[ '这是apply方法','现在this的指向已经指给了xh']);

xw.hi.bind(xh)( '这是bind方法','现在this的指向已经指给了xh');
// console.log(xw.hi.bind(xh))

</script>
