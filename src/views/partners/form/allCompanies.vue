<!-- 合作方表单-选择分公司 -->
<template>
  <section class="app_wapper app_chose_company bak_all">
    <div class="app_select_wapper app_flex app_allow_wrap">
      <span class="app_select_span" v-for="(item,index) in baseOptions.comOpts " :key="item+index">
        <label>
          <input v-model="allChose" type="checkbox" name="chkCom" :value="item" />
          {{item}}
        </label>
      </span>
    </div>
    <button class="app_btn app_wapper_btn" @click="makeSure">确认</button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      allChose: [], //
      baseOptions: {
        comOpts: ['新通1', '新通2', '新通3', '新e通4', '新通6', '新通1', '新通1', '新通10']
      }
    }
  },
  components: {},
  methods: {
    makeSure() {
      console.log(this.allChose)
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
@import '@/styles/detailAndList.scss';

.app_chose_company {
  color: #343437;
  background-image: url($partyIndex);
  background-color: #fff;
  // padding-bottom: 1rem;
  box-sizing: border-box;
  padding: 0.95rem 1.03rem;
  overflow: auto;
}

.app_wapper_btn {
  width: 100%;
  padding: 0.26rem 0;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 0;
}

.app_select_span {
  display: inline-block;
  width: 50%;
  margin-bottom:0.30rem;

  input {
    background: none;
    border: 1px solid #397DB0;
  }
}

</style>
