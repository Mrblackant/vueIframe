<template>
  <section class="app_wapper app_login_wapper  bck_all">
    <div class="app_regist_wapper app_flex app_flex_der app_shu">
      <input type="tel" class="app_inp" maxlength="11" v-model="form.userNum" placeholder="请输入手机号">
      <div class="app_temp_wapper">
        <input type="number" class="app_inp" v-model="form.code" placeholder="请输入验证码">
        <button @click="getCode" :disabled="!sendCodeFlag" class="app_get_code app_btn">{{codeText}}</button>
      </div>
      <input class="app_inp" v-model="form.password" placeholder="请设置登录密码（请输入6~16位密码）" maxlength="16" minlength="6">
      <button @click="register" class="app_btn app_btn_register" :disabled="!sendCodeFlag||!form.code.length>0||!form.password.length>0">注册</button>
    </div>
  </section>
</template>
<script>
var settime
import { checkPhone } from "@/utils"
export default {
  data() {
    return {
      form: {
        userNum: '13333333333',
        code: '', //验证码
        password: '', //密码
      },
      codeCount: 10, //倒计时
      codeText: '获取验证码', //
      sendCodeFlag: false, //是否可以发送验证码

    }
  },
  components: {},
  methods: {
    getCode() { //获取验证码按钮
      // console.log(this.form)
      // 不让再次点击
      this.sendCodeFlag = false
      // 重新归到10
      this.codeCount = 10
      let _this = this
      // 立即显示文字
      this.codeText = "重新发送(10s)"

      settime = setInterval(() => {
        console.log(_this.codeCount)
        _this.codeCount--
        _this.codeText = "重新发送(" + _this.codeCount + "s)"

        if (parseInt(_this.codeCount) < 0 || parseInt(_this.codeCount) === 0) {
          // 还原数据
          _this.goBase()
        }

      }, 1000)

    },
    goBase() { //将数据还原
      this.codeText = "获取验证码"
      this.sendCodeFlag = true
      clearInterval(settime)
    },
    register() { //注册
      console.log(this.form)
    }
  },
  watch: {
    "form.userNum": {
      handler(newval, oldval) {
        this.sendCodeFlag = false
        if (newval.length === 11 && checkPhone(newval)) {
          this.sendCodeFlag = true
          this.goBase()
        }
      },
      immediate: true
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
@import '@/styles/indexAndSign.scss';

</style>
