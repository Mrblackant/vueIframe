<template>
  <div>
    省市联动
   <el-cascader
  :options="options"
  @change="handleChange"
  change-on-select
></el-cascader>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      
      };
    },
    methods:{
       handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
