<template>
  
    
  
  <el-table :key="index" :data="data" class="ooo">
    <el-table-column type="index" width="100">
    </el-table-column>
    <el-table-column props="name" label="名称" width="100">
      <template slot-scope="scope">
        <el-input v-model="scope.row.name"></el-input>
      </template>
    </el-table-column>
    <el-table-column props="age" label="年龄" width="100">
      <template slot-scope="scope">
        <el-input v-model="scope.row.age"></el-input>
      </template>
    </el-table-column>
    <el-table-column props="cnCode" label="国家" width="100">
      <template slot-scope="scope">
        <el-select v-model="scope.row.cnCode">
          <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column props="cnCode" label="国家" width="100">
      <template slot-scope="scope">
        <el-select v-model="scope.row.cnCode">
          <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column props="cnCode" label="国家" width="100">
      <template slot-scope="scope">
        <el-select v-model="scope.row.cnCode">
          <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column props="cnCode" label="国家" width="100">
      <template slot-scope="scope">
        <el-select v-model="scope.row.cnCode">
          <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column props="cnCode" label="国家" width="100">
      <template slot-scope="scope">
        <el-select v-model="scope.row.cnCode">
          <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column props="anum" label="进球数" width="100">
      <template slot-scope="scope">
        <el-input v-model="scope.row.anum"></el-input>
      </template>
    </el-table-column>
    <el-table-column props="bnum" label="助攻数" width="100">
      <template slot-scope="scope">
        <el-input v-model="scope.row.bnum"></el-input>
      </template>
    </el-table-column>
    <el-table-column props="cnum" label='高度' width="100">
      <template slot-scope="scope">
        <el-input v-model="scope.row.cnum"></el-input>
      </template>
    </el-table-column>
    </el-table-column>
    </el-table-column>
    <el-table-column props="dnum" label="长度" width="100">
      <template slot-scope="scope">
        <el-input v-model="scope.row.dnum"></el-input>
      </template>
    </el-table-column>
    <el-table-column props="" label="111222" width="100">
      <template slot-scope="scope">
        <template v-if="scope.row.cnCode==='us'">
          <el-input v-model="scope.row.dnum" placeholder="美国"></el-input>
        </template>
        <template v-else-if="scope.row.cnCode==='uk'">
          <el-input v-model="scope.row.dnum" placeholder="英国"></el-input>
        </template>
        <template v-else>
          <el-input v-model="scope.row.dnum" placeholder="别国"></el-input>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'edit-form',

  props: {
    data: {

    },
    index: {

    }
  },
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
      op1: [{
        num: 30,
      }, {
        num: 40,
      }, {
        num: 90
      }]
    }
  }
};

</script>
<style>
.magg {
  margin-bottom: 15px;
}

</style>
