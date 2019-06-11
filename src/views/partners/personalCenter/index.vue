<template>
  <section class="app_wapper app_personl_wapper bck_all">
    <div class="app_top_bak bck_all"></div>
    <span class="app_set_img"></span>
    <div class="app_items_wapper">
      <div @click="jumpTo('sf')" class="app_item app_flex app_flex_row_bettwen">
        <span>身份认证</span>
        <span :class="ifWs ? 'app_agree' : 'app_not_agree'">
          {{ifWs ?'已完善' : '未完善'}}
        </span>
      </div>
      <div @click="jumpTo('name')" class="app_item app_flex app_flex_row_bettwen">
        <span>姓名</span>
        <span>{{form.perName}}</span>
      </div>
      <div @click="jumpTo('phone')" class="app_item app_no_bk app_flex app_flex_row_bettwen">
        <span>手机号</span>
        <span>{{form.perPhone}}</span>
      </div>
      <div @click="jumpTo('otherInfo')" class="app_item app_flex app_flex_row_bettwen">
        <span>附加信息</span>
        <span>
          <input disabled class="app_inp" v-model="form.perOtherInfo" placeholder="填写更加完整的信息，让我们更加了解您">
        </span>
      </div>
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
      ifWs: false, //是否完善
      ifClick: true, //控制弹窗
      form: {
        perName: '二狗', //姓名
        perPhone: '12312312312', //手机号
        perOtherInfo: '你的', //附加信息
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

</style>
