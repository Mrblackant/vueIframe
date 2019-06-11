<template>
  <div class="app_wapper app_set_name_wapper">
    <div class="app_inp_name app_flex">
      <span>姓名<span class="app_span">(限20个汉字)</span></span>
      <input class="app_inp" maxlength="20" v-model="setName" />
    </div>
    <button @click="save" class="app_btn_fixed_bot">保存</button>
  </div>
</template>
<script>
export default {

  data() {
    return {
      setName: '123'
    }
  },
  components: {},
  methods: {
    save(){
      console.log(this.setName)
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

.app_set_name_wapper {
  font-size: 0.26rem;
  background-image: url($partyIndex);
  padding: 0.70rem 0.40rem 0;
  background-color: #fff;

  .app_inp_name {
    padding-bottom: 0.29rem;
    border-bottom: 1px solid #E2E2E2;

    .app_span {
      font-size: 0.24rem;
    }

    input.app_inp {
      width: 4.4rem;
      padding: 0;
      border: none;
      text-align: right;
    }
  }

  
}

</style>
