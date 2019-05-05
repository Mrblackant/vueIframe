<template>
  <div>
    <el-date-picker v-model="inqDate" :picker-options="pickerOptionsStart" value-format="timestamp" type="date" placeholder="选择日期">
    </el-date-picker>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      inqDate: '',
      pickerOptionsStart: {
        disabledDate: (time) => {
          // 只能选今天以后的
          return time.getTime() < new Date()
        }
      },
    }

  },
  mounted() {

  },
  methods: {

  },
  watch: {

  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
</style>
