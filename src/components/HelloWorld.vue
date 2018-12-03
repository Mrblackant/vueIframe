<template>
  <div class="wapper">
    <el-table :data="tableData" ref="table" tooltip-effect="dark" border stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
        <template slot-scope="scope">
          <el-input v-if="scope.row.canWrite" :class="scope.row.date===''&&btnSaveClick ? 'badInp' : 'rightInp'" :ref="scope.row.id" v-model="scope.row.date"></el-input>
          <!-- <el-input v-if="scope.row.canWrite" v-model="scope.row.date"></el-input> -->
          <span v-else>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="schoolFeed" label="入学费用" width="180">
        <template slot-scope="scope">
          <el-input v-if="scope.row.canWrite" :class="scope.row.schoolFeed===''&&btnSaveClick ? 'badInp' : 'rightInp'" v-model="scope.row.schoolFeed"></el-input>
          <span v-else>{{scope.row.schoolFeed}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <!-- 操作 -->
      <el-table-column fixed="right" label="操作" width="100" class-name="makelll">
        <template slot-scope="scope">
          <el-button :class="scope.row.id" @click="handleClick(scope.row,$event)" type="text" size="small">禁用</el-button>
          <el-button type="text" size="small" @click="edit(scope.row)">启用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center">
      <el-button pain @click="saveBtn">保存</el-button>
    </el-row>
  </div>
</template>
<script>
  export default {
  name: 'HelloWorld',
  data() {
    return {
      btnSaveClick:false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        id: "one",//动态控制
        canWrite:true,//是否禁用
        schoolFeed:''//入学费用
      }, {
        date: '2016-05-04',
        id: "two",
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        canWrite:true,//是否禁用
        schoolFeed:''//入学费用

      }, {
        date: '2016-05-01',
        name: '王小虎',
        id: "three",
        address: '上海市普陀区金沙江路 1519 弄',
        canWrite:true,//是否禁用
        schoolFeed:''//入学费用


      }]
    }
  },
  components: {},
  methods: {
    selectRow() {

    },
    handleClick(data,e){
      let detailClass="."+data.id
      // let badDom='<div class="lineBad"></div>'
    $(detailClass).parents('tr').find('td').not(".makelll").addClass('lineThoung')
      data.canWrite=false
      // console.log(e)
      // console.log($(e))
    },
    edit(data,e){
      let detailClass="."+data.id
        $(detailClass).parents('tr').find('td').removeClass('lineThoung')
      data.canWrite=true
    },
    saveBtn() {
      this.btnSaveClick=true
      // this.tableData.forEach((item, index) => {
      //   if (item.date === '') {
      //     this.tableData[index].id='bad'
      //   }else{
      //     this.tableData[index].id='bad'
      //   }
      // })
    }
  }
}

</script>
<style type="text/css">
.hover-row .badInp input {
  border-color: red;

}

.badInp input {
  border-color: red;
}

.lineThoung {
  text-decoration: line-through;
  text-decoration-color: red;
}

.lineBad {
  width: 100%;
  height: 3px;
  background-color: red;
}

</style>
