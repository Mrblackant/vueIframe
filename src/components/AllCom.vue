<template>
  <div>
    <!-- 请选择按钮 -->
    <el-button size="mini" @click="choseCompany">请选择</el-button>
    <!-- 显示勾选的公司名称 -->
    <el-tooltip class="item" :disabled="companiesName===''" effect="dark" :content="companiesName" placement="top-start">
      <span class="lx_show_companies">{{companiesName}}</span>
    </el-tooltip>
    <!-- 请选择按钮 end -->
    <!-- 弹窗 -->
    <el-dialog title="选择大区" :visible.sync="dialogVisible">
      <div class="lx_fieldset_wapper">
        <fieldset class="lx_fieldset" v-for="(v, k, index) in tableData">
          <legend>{{k}}
            <el-checkbox :label="k" v-model="itemChkAll[k]" class="lx_country_padding" @change="handleCheckAllChange(k, v)">全选
            </el-checkbox>
          </legend>
          <el-checkbox-group class="lx_checkbox_wapper" v-model="itemChkList" @change="handleCheckedChange(k)">
            <template v-for="item in v">
              <el-checkbox class="lx_country_mult" border :label="item" :key="item.code">
                {{item.nameCn}}
              </el-checkbox>
            </template>
          </el-checkbox-group>
        </fieldset>
      </div>
      <div slot="footer" class="lx_dialog_footer">
        <el-button size="mini" type="primary" @click="makeSure">确 定</el-button>
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
import { json } from "./tempJson.js"
export default {
  data() {
    return {
      dialogVisible: true,
      tableData: [],
      companiesName: '', //选中的公司的名称
      itemChkAll: {}, //全选绑定
      itemChkList: []
    }

  },
  mounted() {
    // 处理初始数据
    this.handleJson()
    this.baseCodeToShow('US,CA') //回显数据
  },
  methods: {
    baseCodeToShow(codes) { //回显，传来公司的code集合
      let _this = this
      let tempArr = []
      if (codes) {
        codes = codes.split(",")
        codes.forEach((item, index) => {
          json.data.forEach((item2, index) => {
            if (item === item2.code) {
              tempArr.push(item2)
            }
          })
        })
        _this.itemChkList = tempArr
        // 回显勾选对应的大区
        _this.reShow()
        // 根据code显示名字
        _this.baseCodeGetCompany()
      }

    },
    makeSure() { //确认按钮
      //取到对应的公司名称
      this.baseCodeGetCompany()
      // 弹窗关闭
      this.dialogVisible = false
    },
    baseCodeGetCompany() { //取到对应的公司名称
      let tempArr = []
      // 循环取到公司名称
      this.itemChkList.forEach((item, index) => {
        tempArr.push(item.nameCn)
      })
      this.companiesName = tempArr.join(",")
    },
    choseCompany() { //请选择，打开弹窗h
      this.dialogVisible = true
    },
    reShow() { //传来code，回显勾选状态
      let _this = this
      let obj = {}
      setTimeout(function() {
        // 给选择公司的model数据，做回显，拿到选择的对应code所在的item
        json.data.forEach((item, index) => {
          obj[item.regionCode] = []
        })
        // 把值返回给对应的大区里边
        _this.itemChkList.forEach((item, index) => {
          obj[item.regionCode].push(item)
        })
        // 判断勾选公司的长度是否等于源数据里对应大区里公司的长度，相等的话，让所在大区勾选
        _this.itemChkList.forEach((item, index) => {
          _this.$set(_this.itemChkAll, item.regionCode, obj[item.regionCode].length === _this.tableData[item.regionCode].length)
        })

      }, 300)
    },
    handleJson() { //处理数据
      let tempObj = {}
      let jsonObj = {}
      // 遍历数据，抽取主大区
      json.data.forEach((item, index) => {
        if (!tempObj[item.regionCode]) {
          tempObj[item.regionCode] = true
          jsonObj[item.regionCode] = []

        }
      })
      // 将各个分公司赋值给对应主大区
      json.data.forEach((item, index) => {
        if (tempObj[item.regionCode]) {
          jsonObj[item.regionCode].push(item)
        }
      })
      this.tableData = jsonObj
    },
    handleCheckAllChange(k, v) { //全选框的change
      // k是当前勾选框所在的大区范围名称
      // v是其大区范围下的所有的公司数组
      if (this.itemChkAll[k]) {
        this.itemChkList = this.itemChkList.concat(v)
      } else {
        this.itemChkList = this.itemChkList.filter((item, index) => {
          if (item.regionCode !== k) {
            return true
          }
        })
      }
    },
    handleCheckedChange(k) { //单独勾选的
      // k是当前勾选框所在的大区范围名称
      let m = 0
      // 根据选择的公司循环对比，勾选的公司是否跟对应的大区，数量相同
      // 相同的情况下，设置对应的大区旁边的全选勾中
      this.itemChkList.forEach((item, index) => {
        if (item.regionCode === k) {
          ++m
        }
      })
      this.$set(this.itemChkAll, k, m === this.tableData[k].length)
    }
  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
.lx_fieldset_wapper {
  max-height: 400px;
  overflow: auto;
}

.lx_fieldset {

  padding: 0.35em 0.75em 0.625em;
  border: 1px solid #e4e7ed;
  margin-top: 18px;
  padding-top: 10px;
  padding-left: 12px;
  min-width: auto;

  label {
    margin-right: 10px;
    margin-bottom: 10px;
    width: 154px;
    text-align: center;
  }

  .lx_checkbox_wapper {
    label {
      margin-left: 0 !important;
    }
  }
}

.lx_dialog_footer {
  text-align: center;
}

.lx_show_companies {
  display: inline-block;
  // border: 1px solid red;
  width: 80%;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
