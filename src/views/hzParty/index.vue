<template>
  <section class="app_wapper app_partner_wapper  bck_all">
    <section class="app_footer bck_all"></section>
    <div class="app_btns_wapper app_flex app_flex_row_bettwen">
      <div @click="jumpUrl('bf')" class="app_box app_box_fir">预约拜访</div>
      <div @click="jumpUrl('gl')" class="app_box app_box_sec">预约管理
      </div>
    </div>
    <card v-if="ifClick">
      <div class="app_my_content">
        <p>请完善身份认证，</p>
        <p>否则无法提交拜访申请！</p>
        <div class="app_btn_wapper app_flex app_flex_row_bettwen">
          <button @click="btnControl('qx')" class="app_btn app_btn_qx">取消</button>
          <button @click="btnControl('qws')" class="app_btn app_btn_confirm">去完善</button>
        </div>
      </div>
    </card>
  </section>
</template>
<script>
import card from "@/components/cardAndCricle"
export default {
  data() {
    return {
      ifClick: true, //控制弹窗
    }
  },
  components: {
    card
  },
  methods: {
    jumpUrl(type) {
      console.log(type)
    },
    btnControl(type) { //弹窗上的两个按钮
      console.log(type)
      this.ifClick = false
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
@import '@/styles/detailAndList.scss';

</style>
