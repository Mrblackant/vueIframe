<template>
  <div class="wapper">
    <!-- 入学费用 -->
    <el-tooltip :disabled="scope.row[rowKey]!==''&&parseInt(scope.row[rowKey])!==0||!formClick" class="item" effect="dark" :content="scope.row[rowKey]==='' ? '当前项不可为空' : '当前项不可为0'" placement="top-start">
      <el-input :class="scope.row[rowKey]===''&&formClick||parseInt(scope.row[rowKey])===0&&formClick ? 'badInp' : ''" v-model="scope.row[rowKey]" @input.native="handleClick(scope,rowKey)"></el-input>
      }
    </el-tooltip>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  props: {
    scope: {},
    rowKey: {
      type: String,
      default: ''
    },
    formChildClick: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formClick: false
    }
  },


  filters: {

  },
  components: {},
  methods: {
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
  },
  watch: {
    formChildClick() {
      this.formClick = this.formChildClick
    }
  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
@import "./hellow.scss";

</style>
