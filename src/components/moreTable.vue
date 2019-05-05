<template>
  <div>
    测试多table、tr
    <section class="tableWapper">
      <table>
        <thead>
          <tr class="lx_table_h">
            <th>名称</th>
            <th>年龄</th>
            <th>选择水果</th>
          </tr>
        </thead>
        <template v-for="(item,index) in baseData">
          <tr>
            <td>{{index+1}}</td>
            <td>
              <el-input size="mini" v-model="item.name"></el-input>
            </td>
            <td>
              <el-input size="mini" v-model="item.age"></el-input>
            </td>
            <td>
              <el-select size="mini" v-model="item.thing">
                <template v-for="(i,index) in optionData">
                  <el-option :value="i.price" :label="i.name"></el-option>
                </template>
              </el-select>
            </td>
            <td>
              <el-select size="mini" v-model="item.thing2">
                <template v-for="(i,index) in optionData">
                  <el-option :value="i.price" :label="i.name"></el-option>
                </template>
              </el-select>
            </td>
            <td>
              <el-select size="mini" v-model="item.thing3">
                <template v-for="(i,index) in optionData">
                  <el-option :value="i.price" :label="i.name"></el-option>
                </template>
              </el-select>
            </td>
          </tr>
        </template>
      </table>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      baseData: [],
      optionData: [{
        name: '水果',
        price: 30
      }, {
        name: '王老吉',
        price: 20
      }]
    }

  },
  mounted() {
    this.makeData()
  },
  methods: {
    makeData() {
      let tempArr = []
      for (var i = 0; i < 10; i++) {
        tempArr.push({
          name: 'lili',
          age: 30,
          thing: '',
          thing2: '',
          thing3: '',
        })
      }
      this.baseData = tempArr
      console.log(tempArr)
    }
  }
}

</script>
<style type="text/css">
.tableWapper {
  width: 100%;
  height: 300px;
  overflow: auto;
  border: 1px solid red;
}

</style>
