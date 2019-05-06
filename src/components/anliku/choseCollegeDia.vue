<!-- 院校选择弹窗 -->
<template>
  <div>
    <el-dialog class="lx_chose_college_wapper" width="40%" :visible.sync="controlDia" title="院校选择" append-to-body @close="$emit('update:show', false)">
      <el-form size="mini" :model="collegeForm">
        <el-form-item label="国家或地区">
          <el-select v-model="collegeForm.location">
            <template v-for="item in baseDataOptions.locationOpts">
              <el-option :key="item.id+item.name" :label="item.name" :value="item.id">
              </el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="" class="lx_form_name">
          <el-input v-model="collegeForm.name"></el-input>
          <el-button @click="submit" type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 字母区域 -->
      <el-row class="lx_zm_wapper">
        <template v-for="(item,index) in baseDataOptions.zmOpts">
          <span @click="choseZm(item)" :key="item+index">{{item}}</span>
        </template>
      </el-row>
      <!-- 查询结果 -->
      <el-table class="lx_table_wapper" :data="tableData" border style="width: 100%">
        <el-table-column prop="address" label="学校英文名称">
        </el-table-column>
        <el-table-column prop="address" label="学校中文名称">
        </el-table-column>
        <el-table-column prop="address" label="合作机构">
        </el-table-column>
        <el-table-column prop="address" label="等级">
          <template slot-scope="scope">
            <el-button class="lx_inner_btn" type="text" @click="chose(scope)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
// 生成26个英文字母
function generateBig() {
  var str = [];
  for (var i = 65; i < 91; i++) {
    str.push(String.fromCharCode(i));
  }
  return str;
}
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 生成字母选项
    this.baseDataOptions.zmOpts =
      generateBig().concat(this.baseDataOptions.zmOpts)

  },
  data() {
    return {
      controlDia: this.show,
      tableData: [{ //查询数据
        address: '纽约',
      }], //
      baseDataOptions: { //全局需要初始化的数据
        // 国家或地区  select初始数据
        locationOpts: [{
          name: '美国',
          id: 'US'
        }],
        //26个字母 select初始数据
        zmOpts: ['推荐院校', '学校待定']
      },
      collegeForm: {
        location: '', //国家或地区
        name: '', //名称

      }
    }

  },
  methods: {
    submit() { //查询
      console.log(this.collegeForm)
    },
    choseZm(data) { //点击字母进行查询
      console.log(data)
    },
    chose(data) { //选择学校
      // 将数据传给父组件
      this.$emit('getSchool', data)
      //弹窗关闭
      this.controlDia = false
    }
  },
  watch: {
    show() {
      console.log(this.show)
      this.controlDia = this.show
    }
  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
.lx_chose_college_wapper {}

</style>
