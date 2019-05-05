<template>
  <div>
    <span class="inner" sert="133"></span>
    <span class="inner" sert="121212"></span>
    <span class="inner" sert="jjjjj"></span>
    <el-button @click="gett">点击</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {}

  },
  mounted() {},
  methods: {
    gett() {
      let likeArr=$(".inner")
      console.log(likeArr)
      likeArr=Array.from(likeArr)
      console.log(likeArr)
      
      likeArr.forEach((item,index)=>{
        console.log(item)
      })

    }
  },
  watch: {

  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
.c {
  overflow: auto
}

</style>
