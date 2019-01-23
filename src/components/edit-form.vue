<template>
  <tr class="magg">
    <td>{{data.name}}</td>
    <td>
      <el-select v-model="data.age">
        <el-option v-for="ii in op1" :key="ii.num" :value="ii.num" :label="ii.num"></el-option>
      </el-select>
    </td>
    <td>国家：
      <el-select v-model="data.cnCode">
        <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
      </el-select>
    </td>
    <td>国家：
      <el-select v-model="data.cnCode">
        <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
      </el-select>
    </td>
    <td>国家：
      <el-select v-model="data.cnCode">
        <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
      </el-select>
    </td>
    <td>国家：
      <el-select v-model="data.cnCode">
        <el-option v-for="i2 in countryOpt" :key="i2.code" :value="i2.code" :label="i2.name"></el-option>
      </el-select>
    </td>
    <td>国家：code
      <el-input v-model="data.cnCode"></el-input>
    </td>
    <td>年龄：{{data.age}}</td>
    <td>进球数：<el-input v-model="data.anum"></el-input>
    </td>
    <td>助攻数：<el-input v-model="data.bnum"></el-input>
    </td>
    <td>
      年龄：
      <el-input v-model="data.age"></el-input>
    </td>
     <td>
      年龄：
      <el-input v-model="data.age"></el-input>
    </td>
     <td>
      年龄：
      <el-input v-model="data.age"></el-input>
    </td>
     <td>
      年龄：
      <el-input v-model="data.age"></el-input>
    </td>
     <td>
      年龄：
      <el-input v-model="data.age"></el-input>
    </td>
     <td>
      年龄：
      <el-input v-model="data.age"></el-input>
    </td>
     <td>
      年龄：
      <el-input v-model="data.age"></el-input>
    </td>
    
    <td>
      冲突数：
      <el-input v-model="data.cnum"></el-input>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'edit-form',
  props: {
    data: {

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
    .magg{
        margin-bottom: 15px;
    }
</style>