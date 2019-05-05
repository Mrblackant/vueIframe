<template>
  <div>
    <!-- 请选择按钮 -->
    <el-button
      size="mini"
      @click="choseCompany"
    >请选择</el-button>
    <!-- 显示勾选的公司名称 -->
    <el-tooltip
      class="item"
      :disabled="companiesName===''"
      effect="dark"
      :content="companiesName"
      placement="top-start"
    >
      <span class="lx_show_companies">{{companiesName}}</span>
    </el-tooltip>
    <!-- 请选择按钮 end -->
    <!-- 弹窗 -->
    <el-dialog
      title="选择大区"
      :visible.sync="dialogVisible"
    >
      <div class="lx_fieldset_wapper">
        <fieldset
          class="lx_fieldset"
          v-for="(v, k, index) in tableData"
        >
          <legend>{{checkName[k]}}
            <el-checkbox
              :label="k"
              v-model="itemChkAll[k]"
              class="lx_country_padding"
              @change="handleCheckAllChange(k, v)"
            >全选
            </el-checkbox>
          </legend>

          <el-checkbox-group
            class="lx_checkbox_wapper"
            v-model="itemChkList[k]"
            @change="handleCheckedChange(k,itemChkList[k])"
          >
            <template v-for="item in v">
              <el-checkbox
                class="lx_country_mult"
                border
                :label="item"
                :key="item.code"
              >
                {{item.unitName}}
              </el-checkbox>
            </template>
          </el-checkbox-group>
        </fieldset>
      </div>
      <div
        slot="footer"
        class="lx_dialog_footer"
      >
        <el-button
          size="mini"
          type="primary"
          @click="makeSure"
        >确 定</el-button>
        <el-button
          size="mini"
          @click="dialogVisible = false"
        >取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
import { json } from "./tempJson.js"
export default {
  data () {
    return {
      dialogVisible: true,
      tableData: [],
      checkName: {},
      checkList: [],
      companiesName: '', //选中的公司的名称
      itemChkAll: {}, //全选绑定
      itemChkList: {}
    }

  },
  mounted () {
    // 处理初始数据
    // this.handleJson()
    this.baseCodeToShow() //回显数据
    this._initData()
  },
  methods: {
    handleCheckAllChange (k, data) {
      let bol = this.itemChkAll[k]
      this.itemChkList[k] = bol ? data : []
      this.checkList = []
      // 全选的时候加上主国家的过滤，不让返回已经选择的主国家
      if (this.itemChkList[k].length > 0) {
        this.itemChkList[k] = this.itemChkList[k].filter((ii) => {
          if (ii.code !== this.choseMainCountry) {
            return true
          }
        })
      }
      Object.keys(this.itemChkList).forEach(key => {
        if (this.itemChkList[key]) {
          this.checkList.push(...this.itemChkList[key])
        }
      })
    },
    _initData () {
      setTimeout(() => {

        this.tableData = {}
        if (json.data) {
          let list = json.data
          for (var i = 0; i < list.length; i++) {
            if (list[i].type === 0) {
              this.checkName[list[i].id] = list[i].unitName
              continue
            }
          }
          for (var i = 0; i < list.length; i++) {
            if (!this.checkName[list[i].parentId]) {
              continue
            }
            if (!list[i].parentId) {
              list[i].parentId = ""
            }
            if (!this.tableData[list[i].parentId]) {
              this.$set(this.itemChkAll, list[i].parentId, false)
              this.$set(this.itemChkList, list[i].parentId, [])
              this.checkList.forEach(item => {
                if (item.parentId === list[i].parentId) {
                  this.itemChkList[list[i].parentId].push(item)
                }
              })
              this.tableData[list[i].parentId] = []
            }
            this.tableData[list[i].parentId].push(list[i]);
          }
          Object.keys(this.itemChkList).forEach(key => {

            if (this.itemChkList[key].length < this.tableData[key].length) {
              this.itemChkAll[key] = false
            } else {
              this.itemChkAll[key] = true
            }
          })
        }
      }, 500)
    },
    baseCodeToShow (codes) { //回显，传来公司的code集合
      // codes是数组
      // code: "XT_SY"
      codes = ['XT_SY']
      let temparr = []

      json.data.forEach((item, index) => {
        codes.forEach((item2, index) => {
          if (item.code === item2) {
            temparr.push(item)
          }
        })
      })
      this.checkList = temparr
    },
    makeSure () { //确认按钮
      //取到对应的公司名称
      this.baseCodeGetCompany(this.checkList)
      // 弹窗关闭
      this.dialogVisible = false
    },
    baseCodeGetCompany (list) { //取到对应的公司名称
      let tempArr = []
      // 循环取到公司名称
      list.forEach((item, index) => {
        tempArr.push(item.unitName)
      })
      this.companiesName = tempArr.join(",")
    },
    choseCompany () { //请选择，打开弹窗h
      this.dialogVisible = true
    },
    reShow () { //传来code，回显勾选状态

    },
    handleJson () { //处理数据
      let tempObj = {}
      let jsonObj = {}
      // 遍历数据，抽取主大区
      json.data.forEach((item, index) => {
        this.itemChkList[item.parentId] = []

        if (!tempObj[item.parentId]) {
          tempObj[item.parentId] = true
          jsonObj[item.parentId] = []
        }
      })
      // 将各个分公司赋值给对应主大区
      json.data.forEach((item, index) => {
        if (tempObj[item.parentId]) {
          jsonObj[item.parentId].push(item)
        }
      })
      this.tableData = jsonObj
    },
    handleCheckedChange (k, value) { //单独勾选的
      if (value && value.length < this.tableData[k].length) {
        this.itemChkAll[k] = false
      } else {
        this.itemChkAll[k] = true
      }
      this.checkList = []
      Object.keys(this.itemChkList).forEach(key => {
        if (this.itemChkList[key]) {
          this.checkList.push(...this.itemChkList[key])
        }
      })
    }
  },
  watch: {
    checkList () { //监听选中的list的变化，做请选择旁边文案的回显
      if (this.checkList.length > 0) {
        this.baseCodeGetCompany(this.checkList)
      }
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
