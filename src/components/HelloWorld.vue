<template>
  <div id="app">
    <div class="makeWapper">
      <table border>
        <th>
        <td>牛牛牛</td>
        <td>nanlin </td>
        <td>牛牛牛</td>
        <td>牛牛牛</td>
        </th>
        <template v-if="tabledata.length>0">
          <template v-for="(item,index) in tabledata">
            <edit-form :data="item">
            </edit-form>
          </template>
        </template>
      </table>
      <!-- <el-table></el-table> -->
    </div>
    <!--  <el-breadcrumb separator="/">
            <el-breadcrumb-item>主页</el-breadcrumb-item>
            <el-breadcrumb-item>某表单页</el-breadcrumb-item>
        </el-breadcrumb>
        <main class="ct-wrap">
            <div class="ct">
                <div class="basic-info ct-form" v-for="(config, configIndex) in formConfig" :key="configIndex">
                    <edit-form
                        :config="config"
                        :data="formData"
                        :options="formOptions">
                    </edit-form>
                </div>
            </div>
        </main> -->
  </div>
</template>
<script>
import editForm from './edit-form.vue';
import API from './api';

export default {
  name: 'app',
  data() {
    return {
      tabledata: [{
        name: 'lili',
        age: 30,
        cnCode: '',
        anum: 30,
        bnum: 30,
        cnum: 50,
        dnum: 900,
      }],
      formOptions: {},
      formConfig: [],
      formData: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    makeData() {
      let tempData = []
      for (var i = 0; i < 10; i++) {
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
      // console.log(tempData)
      this.tabledata = tempData
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
<style>
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

</style>
