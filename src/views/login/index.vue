<!-- 登录页面-分国合、合作商、分公司 -->
<template>
  <section class="app_wapper app_login_wapper  bck_all">
    <!-- 选择wapper -->
    <section class="app_chose_wapper app_login_card_wapper bck_contain app_flex app_flex_der app_shu">
      <div class="app_title">登录</div>
      <section class="app_login_input_wapper app_flex app_shu">
        <input class="app_inp" v-model="form.userNum" :placeholder="ifRoleShiny?oaplaceholder:partnerplaceholder">
        <input placeholder="请输入登录密码" class="app_inp app_inp_second" v-model="form.password">
        <div v-if="!ifRoleShiny" class="app_tips">忘记密码</div>
        <button v-if="ifRoleShiny" @click="reload" class="app_btn app_btn_login" :disabled="!form.userNum.length>0||!form.password.length>0">登录</button>
        <button v-else @click="reload" class="app_btn app_btn_login" :disabled="!sendCodeFlag">登录</button>
        <span v-if="ifRoleShiny" class="app_gery_color">温馨提示：用户名、密码与原OA一致</span>
        <span v-else class="app_tx_color" @click="goResiter">还没有账号？立即注册</span>
      </section>
    </section>
  </section>
</template>
<script>
import { checkPhone } from "@/utils"
export default {
  data() {
    return {
      form: {
        userNum: '', //用户账号
        password: '', //密码
      },
      sendCodeFlag: false, //是否可以发送验证码
      ifRoleShiny: false, //是否新通自己的员工
      oaplaceholder: '请输入OA账号', //
      partnerplaceholder: '请输入您的手机号', //
    }
  },
  components: {},
  methods: {
    reload() { //登录
      // 如果不是新通员工，那就校验手机号格式
      if (!this.ifRoleShiny) {
        let p = checkPhone(this.form.userNum)
        if (!p) {
          // wx提示
          wx.showToast({
            title: '手机号或密码错误！',
            icon: 'none',
            duration: 2000
          })
        }
      }
    },
    goResiter() { //立即注册跳转

    }
  },
  watch: {
    "form.userNum"() {
      // 如果是合作伙伴，校验手机号
      if (this.ifRoleShiny) return
      this.sendCodeFlag = false
      if (this.form.userNum.length === 11) {
        this.sendCodeFlag = checkPhone(this.form.userNum)
      }
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
@import '@/styles/indexAndSign.scss';

</style>
