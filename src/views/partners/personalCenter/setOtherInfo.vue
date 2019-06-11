<template>
  <div class="app_wapper app_set_name_wapper">
    <div class="app_inp_name ">
      <p>附加信息<span class="app_sm">（限200个汉字）</span></p>
      <textarea placeholder="填写更加完整的信息，让我们更加了解您" class="app_tx" maxlength="200" v-model="setName"></textarea>
    </div>
    <button @click="save" class="app_btn">保存</button>
  </div>
</template>
<script>
export default {

  data() {
    return {
      setName: ''
    }
  },
  components: {},
  methods: {
    save() {
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
    .app_sm {
      font-size: 0.22rem;
    }

    .app_tx {
      width: 100%;
      min-height: 2.50rem;
      margin-top: 0.30rem;
      border: 1px solid #E2E2E2;
      outline: none;
      font-size: 0.26rem;
      box-sizing: border-box;
      padding: 0.32rem;
    }
  }

  .app_btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.27rem 0;
    border-radius: 0;
  }
}

</style>
