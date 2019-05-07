<!-- 专业选择弹窗 -->
<template>
  <div class="lx_chose_major_wapper">
    <el-dialog class="lx_chose_major_dia" width="40%" :visible.sync="controlDia" title="专业选择" append-to-body @close="$emit('update:show', false)">
      <el-form size="mini" :model="majorForm" :inline="true">
        <el-form-item label="专业大类">
          <el-select v-model="majorForm.majorType" placeholder="请选择">
            <template v-for="item in baseDataOptions.majorTypeOpts">
              <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="专业名称">
          <el-input v-model="majorForm.majorName">
          </el-input>
        </el-form-item>
      </el-form>
      <!-- 查询按钮 -->
      <el-row type="flex" justify="center">
        <el-button @click="submit" type="primary" size="mini">查询</el-button>
      </el-row>
      <!-- 查询信息展示 -->
      <el-table class="lx_table_wapper" :data="tableData" border style="width: 100%">
        <el-table-column prop="address" label="专业大类">
        </el-table-column>
        <el-table-column prop="address" label="专业名称">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button class="lx_inner_btn" type="text" @click="chose(scope)" size="mini">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      controlDia: this.show,
      //全局需要初始化的数据
      baseDataOptions: {
        majorTypeOpts: [{
          name: '英语专业',
          id: 134
        }]
      },
      tableData: [{
        address: '哈哈哈'
      },{
        address: '哈哈哈'
      },{
        address: '哈哈哈'
      }], //查询结果
      majorForm: { //专业查询表单数据
        majorType: '', //专业大类
        majorName: '', // 专业名称
      }
    }

  },
  methods: {
    submit() { //查询
      console.log(this.majorForm)
    },
    chose(data) { //选择专业
      // 将数据传给父组件
      this.$emit('getMajor', data)
      //弹窗关闭
      this.controlDia = false
    }
  },
  watch: {
    show() {
      this.controlDia = this.show
    }
  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
</style>
