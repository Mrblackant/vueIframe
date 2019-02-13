<template>
  <div id="app">
    <div style="width: 100%;border:1px solid red;">
      <div class="table-head">
        <table align="center">
          <thead>
            <tr>
              <th>序号</th>
              <th>内容</th>
              <th>内容</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>我只是用来测试的</td>
              <td>我只是用来测试的</td>
              <td>我只是用来测试的</td>
            </tr>
            <tr>
              <td>2</td>
              <td>我只是用来测试的</td>
            </tr>
            <tr>
              <td>3</td>
              <td>我只是用来测试的</td>
            </tr>
            <tr>
              <td>4</td>
              <td>我只是用来测试的</td>
            </tr>
            <tr>
              <td>5</td>
              <td>我只是用来测试的</td>
            </tr>
            <tr>
              <td>6</td>
              <td>我只是用来测试的</td>
            </tr>
            <tr>
              <td>7</td>
              <td>我只是用来测试的</td>
            </tr>
            <tr>
              <td>8</td>
              <td>我只是用来测试的</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}

  },
  methods: {},
  mounted() {

  },

}

</script>
<style lang="scss" rel="stylesheet/scss">
table tbody {
  display: block;
  height: 200px;
  overflow-y: scroll;
}

table thead,
table tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
  text-align: center;
}

thead th,
tbody td {
  // width: 50px;
}

table thead {
  width: calc(100% - 1em);
}

</style>
