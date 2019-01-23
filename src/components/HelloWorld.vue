<template>
  <div id="app">
    <div class="makeWapper" v-if="tabledata.length>0">
      <el-table :data="tabledata2" class="ooo">
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column props="cnCode" label="国家" width="100">
          <template slot-scope="scope">
            <el-select v-model="scope.row.cnCode">
              <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
      <!-- ========= -->
      
      <template v-for="(i1 ,index) in tabledata">
       <edit-form :index="index" :data="i1"></edit-form>
      </template>
      <!-- ========= -->
    </div>
  </div>
</template>
<script>
import editForm from './edit-form.vue';
import API from './api';

export default {
  name: 'app',
  data() {
    return {
      countryOpt: [{
          code: 'us',
          name: '美国'
        },
        {
          code: 'uk',
          name: '英国'
        },
        {
          code: 'gb',
          name: '日本'
        },
        {
          code: 'cn',
          name: '中国'
        }
      ],
      tabledata2: [{
        name: 'lili',
        age: 30,
        cnCode: '',
        anum: 30,
        bnum: 30,
        cnum: 50,
        dnum: 900
      }],
      tabledata: [],
      formOptions: {},
      formConfig: [],
      formData: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    makeData() {
      let tempData = []
      for (var i = 0; i < 300; i++) {
        tempData.push({
          name: 'lili',
          age: 30,
          cnCode: '',
          anum: 30,
          bnum: 30,
          cnum: 50,
          dnum: 900,
        })
      }
      let cc = this.chunk(tempData, 2)
      this.tabledata = cc
    },
    chunk(array, size) {
      //获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
      const length = array.length
      //判断不是数组，或者size没有设置，size小于1，就返回空数组
      if (!length || !size || size < 1) {
        return []
      }
      //核心部分
      let index = 0 //用来表示切割元素的范围start
      let resIndex = 0 //用来递增表示输出数组的下标

      //根据length和size算出输出数组的长度，并且创建它。
      let result = new Array(Math.ceil(length / size))
      //进行循环
      while (index < length) {
        //循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
        result[resIndex++] = array.slice(index, (index += size))
      }
      //输出新数组
      return result
    },
    makeSplice() {

    }
  },
  mounted() {
    this.makeData()
    // API.getFormConfigData()
    //   .then((d) => {
    //     this.formOptions = d.formOptions;
    //     this.formConfig = d.formConfig;
    //     this.formData = d.formData;
    //   });
  },
  components: {
    editForm
  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
// @import "./feesChange.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}

.ct-wrap {
  position: relative;
  margin-top: 64px;
  height: 600px;
  overflow: auto;
  border: 1px solid red;
}

.ct {
  width: 1110px;
  margin: 0 auto;
  border: 1px solid #BFBFBF;
  padding: 56px 40px 40px;
  box-sizing: border-box;
}

.ct-form {
  margin-bottom: 48px;
}

.form__title {
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
}

.form-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}

.form-content .el-form-item {
  width: 440px;
}

.form-content .el-input {
  width: 194px;
}

.form-content .el-form-item.form-item--full {
  width: 100%;
}

.form-content .form-item-unit--full {
  width: 696px;
}

.makeWapper {
  height: 600px;
  border: 1px solid red;
  overflow: auto;
}

.ooo {
  margin-bottom: 30px;
  border: 1px solid red;
}

</style>
