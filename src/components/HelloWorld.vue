<template>
  <div class="wapper">
    开始时间：
    <el-date-picker :picker-options="pickerOptions1" v-model="startTime" type="date" placeholder="选择日期" @change="changeTime">
    </el-date-picker>
    结束时间：
    <el-date-picker :picker-options="pickerOptions2" v-model="endTime" type="date" placeholder="选择日期">
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      startTime: '', //开始时间
      endTime: '', //结束时间
      pickerOptions1: { //开始时间的限制判断
        disabledDate: (time) => {
          if (this.endTime !== '' && this.endTime !== null) {
            return time.getTime() > this.endTime.getTime();
          }
        },
      },
      pickerOptions2: { //结束时间的限制判断
        disabledDate: (time) => {
          if (this.startTime !== '' && this.startTime !== null) {
            return time.getTime() < this.startTime.getTime();
          }
        },
      }
    }
  },
  components: {},
  methods: {
    changeTime() {
      // console.log(this.startTime)
    }
  }
}

</script>
