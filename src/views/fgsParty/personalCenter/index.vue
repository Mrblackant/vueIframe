<!-- 个人中心 -->
<template>
  <section class="app_wapper app_personl_wapper bck_all">
    <div class="app_top_bak bck_all"></div>
    <span class="app_set_img"></span>
    <div class="app_items_wapper">
      <div class="app_item app_flex app_flex_row_bettwen app_no_bk">
        <span>所属分公司</span>
        <span>{{getData.company}}</span>
      </div>
      <!--  <div class="app_item app_flex app_flex_row_bettwen app_allow_wrap app_no_bk">
        <span>国家线</span>
        <span class="app_tmmp_cun">{{getData.countries}}</span>
      </div> -->
    </div>
    <button @click="loginOut" class="app_btn app_out_btn">退出登录</button>
    <card v-if="ifClick" :iconClass="'tuichu'">
      <div class="app_my_content">
        <p>您确定要退出登录吗？</p>
        <div class="app_btn_wapper app_flex app_flex_row_bettwen">
          <button @click="ifClick=false" class="app_btn app_btn_qx">取消</button>
          <button @click="btnControl('qr')" class="app_btn app_btn_confirm">确认</button>
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
      ifClick: false, //控制弹窗
      getData: {
        company: '美国，金新加坡美国',
      }

    }
  },
  components: {
    card
  },
  methods: {
    loginOut() { //退出登录
      console.log('退出')
      this.ifClick = true
    },
    jumpTo(type) { //跳转
      console.log(type)
    },
    btnControl(type) { //弹窗按钮
      console.log(type)

    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

.app_personl_wapper {
  .app_tmmp_cun {
    width: 5.00rem;
    text-align: right;
  }
}

</style>
