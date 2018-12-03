<template>
  <div class="wapper">
    开始时间：
    <el-date-picker :picker-options="pickerOptions1" v-model="startTime" type="date" placeholder="选择日期" @change="changeTime">
    </el-date-picker>
    结束时间：
    <el-date-picker :picker-options="pickerOptions2" v-model="endTime" type="date" placeholder="选择日期">
    </el-date-picker>
    <div>=+++++++++================================================</div>
    <el-form :rules="model.rules" :model="model" ref="form">
      <el-table :data="model.tableData" stripe style="width: 100%">
        <el-table-column prop="address" label="地址">
          <template slot-scope="scope">
            {{scope.$index}}
            <el-form-item :prop="'tableData.' + scope.$index + '.supplier'" :rules='model.rules.supplier'>
              <el-select clearable v-model="scope.row.supplier">
                <el-option label="哈哈哈" value="dieqa22"></el-option>
              </el-select>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {

      model: { //表单
        rules: {
          supplier: { type: "string", required: true, message: "必填字段", trigger: "change" }
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      },
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
