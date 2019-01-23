<template>
  <div class="wapper">
    <el-date-picker v-model="radioChoseTime" type="date" placeholder="选择生效时间" value-format="timestamp" :picker-options="pickerOptions1">
    </el-date-picker>
    <table>
      <template v-for="(data,index) in tableData">
        <tr :key="index">
          <td>
            <ul>
              <li id="1" @click="changeData(data,1)">1</li>
              <li id="2">2</li>
              <li id="3">3</li>
            </ul>
            <el-select @change="serviceTypeChange(data)" v-model='data.serviceType.code'>
              <el-option v-for="(item,index) in serviceTypeOpt" :label="item.name" :value="item.code" :key="item.code">
              </el-option>
            </el-select>
          </td>
          <td>
             {{data.serviceType.code}}
            <el-input v-model="data.serviceType.code"></el-input>
           <!--  <el-select @change="serviceTypeChange(data)" v-model='data.serviceType.code'>
              <el-option v-for="(item,index) in serviceTypeOpt" :label="item.name" :value="item.code" :key="item.code">
              </el-option>
            </el-select> -->
          </td>
          <td>
             {{data.serviceType.code}}
            <el-input v-model="data.serviceType.code"></el-input>
           <!--  <el-select @change="serviceTypeChange(data)" v-model='data.serviceType.code'>
              <el-option v-for="(item,index) in serviceTypeOpt" :label="item.name" :value="item.code" :key="item.code">
              </el-option>
            </el-select> -->
          </td>
          <td>
             {{data.serviceType.code}}
            <el-input v-model="data.serviceType.code"></el-input>
            <!-- <el-select @change="serviceTypeChange(data)" v-model='data.serviceType.code'>
              <el-option v-for="(item,index) in serviceTypeOpt" :label="item.name" :value="item.code" :key="item.code">
              </el-option>
            </el-select> -->
          </td>
          <td>
            {{data.serviceType.code}}
            <el-input v-model="data.serviceType.code"></el-input>
            <!-- <el-select @change="serviceTypeChange(data)" v-model='data.serviceType.code'>
              <el-option v-for="(item,index) in serviceTypeOpt" :label="item.name" :value="item.code" :key="item.code">
              </el-option>
            </el-select> -->
          </td>
          <!--  <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td> -->
        </tr>
      </template>
    </table>
    <el-radio @change="choseChangeTime" v-model="radioChoseTime" class="lx_radio_btn" label="1" border>立即生效</el-radio>
    <el-button @click="saveSth">保存</el-button>
    <el-button @click="testSome">测试</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
import foraTable from "./forTable.vue"
export default {
  name: 'HelloWorld',
  components: {
    foraTable
  },
  mounted() {
    this.makeData()
  },
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        }
      },
      formClick: false,
      radioChoseTime: '', //立即生效的勾选框

      returnTxt: '说是计算机',
      serviceTypeOpt: [{
        code: "ONLY_SCHOOL",
        name: "单办入学"
      }, {
        code: "ONLY_SIGN",
        name: "单办签证"

      }, {
        code: "SIGN_SCHOOL",
        name: "入学+签证"
      }],
      tableData: []
    }
  },


  filters: {

  },
  methods: {
    changeData(data, value) {
      data.serviceType.code = value
    },
    makeData() {
      let tempData = []
      for (var i = 0; i < 500; i++) {
        tempData.push({
          name: 'lili',
          serviceType: { code: "ONLY_SIGN", name: "单办签证" },
          feeApplyschool: '',
          feeApplyvisa: '',
          feeVisaReject: ''
        })
      }
      this.tableData = tempData
    },
    choseChangeTime() { //选择时间-立即生效的单选
      // this.radioChoseTime = new Date().getTime()

    },
    testSome() {
      var aee = [1, 3, 4, 5]
      aee = aee.map((item, index) => {
        this.testWhen(index, aee.length)
        if (item > 3) {
          return item
        }
      })

    },
    testWhen(index, len) {
      if (index + 1 === len) {
        alert(index)
      }
    },
    filterReturnTxt(data) {
      if (returnTxt === 0 || returnTxt === '0') {
        return "当前项不可为0"
      } else if (returnTxt === '') {
        return "当前项不可为空"
      } else {
        return data
      }
    },
    saveSth() {
      this.formClick = true
      let noreeditStr = "21990bbndnsnl"
      noreeditStr = noreeditStr.substring(1, noreeditStr.length)
      var arr = ['a', 'b', 'c']
      var arr2 = ['a', 'b', 'd']
      this.sortStringArr(arr, arr2)

    },
    sortStringArr(arr, arr2) { //对数组进行排序转字符串
      let base = []

      arr.forEach((item, index) => {
        arr2.forEach((item2, index) => {
          if (item === item2) {
            base.push(item)
          }
        })
      })
    },
    handleClick(scope, typeKey) { //限制不能输入0开头，只能输入数字
      this.$nextTick(() => {
        if (scope.row[typeKey] !== null) {
          if (parseInt(scope.row[typeKey]) === 0) {
            scope.row[typeKey] = ''
          } else {
            scope.row[typeKey] = scope.row[typeKey].replace(/[^\d]/g, '')
          }
        }
      })
    },
    serviceTypeChange(scope) {
      // let scopeServiceType = scope.row.serviceType.code
      // if (scopeServiceType === 'ONLY_SCHOOL') {
      //   // 只有入学

      //   scope.row.feeApplyvisa = 0
      //   scope.row.feeVisaReject = 0
      // }


    },
    formatterServiceType(row, column) { //服务类型的筛选
      return row.serviceType.name
    },
  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
@import "./hellow.scss";

.wapper {
  height: 400px;
  overflow: auto;
}

.imageWrapper {
  padding: 30px;
  border: 2px solid red;
}

.lx_table_wapper {
  // max-height: 400px;

}

</style>
