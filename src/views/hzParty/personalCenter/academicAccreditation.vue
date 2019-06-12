<!-- 添加所属院系/机构 -->
<template>
  <div class="app_wapper app_tj_wapper">
    <div class="app_items_wapper">
      <div class="app_item app_flex app_flex_der app_flex_row_bettwen">
        <span><i>*</i> 属性</span>
        <input v-model="form.sx" class="app_inp" placeholder="请选择所属院系或机构">
      </div>
      <div class="app_item app_flex app_flex_der app_flex_row_bettwen">
        <span><i>*</i> 国家</span>
        <input v-model="form.country" class="app_inp" placeholder="请选择">
      </div>
      <div class="app_item app_yx app_flex app_flex_der app_flex_row_bettwen app_no_bk">
        <span><i>*</i> 院校/机构名称</span>
        <input placeholder="请填写" v-model="form.school" class="app_inp">
      </div>
    </div>
    <p class="app_p">注：请尽量输入完整的院校/机构名称，以便我们更好的了解您</p>
    <button class="app_btn app_btn_fixed_bot" @click="save">保存</button>
  </div>
</template>
<script>
export default {

  data() {
    return {
      form: {
        sx: '', //属性
        country: '', //国家
        school: '', //院校
      }
    }
  },
  components: {},
  methods: {
    save() {
      console.log('保存')
      Object.keys(this.form).forEach(item => {
        if (!this.form[item]) {
          console.log('请完整填写表单')
          return
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

.app_tj_wapper {
  background-image: url($partyIndex);
  background-color: #fff;
  padding-top: 0.68rem;

  .app_p {
    color: #939393;
    text-align: center;
    font-size: 0.23rem;
    margin-top: -0.15rem;
  }

  .app_yx {
    input.app_inp {
      width: 4rem;
    }
  }

  .app_item {
    i {
      position: relative;
      top: 3px;
      color: #df514e;
    }
  }
}

</style>
