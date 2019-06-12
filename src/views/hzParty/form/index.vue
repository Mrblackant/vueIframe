<template>
  <section class="app_wapper app_parnter_wpper  bck_all">
    <div class="app_form_wapper">
      <form class="app_form" :model="form">
        <!-- 表单内容 -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>*</i>
            <span class="app_form_label">院校/机构名称</span>
          </span>
          <div class="app_form_right">
            <select class="app_inp_noline" v-model="form.collegeName">
              <option v-for="item in baseOptions.collegeOpts" :key="item">{{item}}</option>
            </select>
            <i>></i>
          </div>
        </div>
        <!--  -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>*</i>
            <span class="app_form_label">预约分公司</span>
          </span>
          <div class="app_form_right">
            <input v-model="form.yy" class="app_inp_noline" placeholder="请选择" type="text">
            <i>></i>
          </div>
        </div>
        <!--  -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>*</i>
            <span class="app_form_label">预约日期</span>
          </span>
          <div class="app_form_right">
            <input v-model="form.data" class="app_inp_noline" placeholder="请选择" type="text">
            <i>></i>
          </div>
        </div>
        <!--  -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>*</i>
            <span class="app_form_label">预约时间</span>
          </span>
          <div class="app_form_right">
            <input v-model="form.time" class="app_inp_noline" placeholder="请选择" type="text">
            <i>></i>
          </div>
        </div>
        <!--  -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>*</i>
            <span class="app_form_label">拜访人姓名</span>
          </span>
          <div class="app_form_right">
            <input v-model="form.name" class="app_inp_noline" placeholder="请填写" type="text">
            <!-- <i>></i> -->
          </div>
        </div>
        <!--  -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>*</i>
            <span class="app_form_label">拜访人职务</span>
          </span>
          <div class="app_form_right">
            <input v-model="form.zw" class="app_inp_noline" placeholder="请填写" type="text">
            <!-- <i>></i> -->
          </div>
        </div>
        <!--  -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>*</i>
            <span class="app_form_label">拜访人电话</span>
          </span>
          <div class="app_form_right">
            <input v-model="form.tel" class="app_inp_noline" placeholder="请填写" type="text">
            <!-- <i>></i> -->
          </div>
        </div>
        <!--  -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>*</i>
            <span class="app_form_label">拜访人数</span>
          </span>
          <div class="app_form_right">
            <input v-model="form.count" class="app_inp_noline" placeholder="请填写" type="text">
            <!-- <i>></i> -->
          </div>
        </div>
        <!--  -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>*</i>
            <span class="app_form_label">拜访事由</span>
          </span>
          <div class="app_form_right">
            <input v-model="form.sy" class="app_inp_noline" placeholder="请选择" type="text">
            <i>></i>
          </div>
        </div>
        <!--  -->
        <div class="app_form_item app_flex app_flex_row_bettwen">
          <span class="app_form_left">
            <i>&nbsp;&nbsp;</i>
            <span class="app_form_label">备注</span>
          </span>
          <div class="app_form_right">
            <input v-model="form.memo" class="app_inp_noline" placeholder="请填写您的其他需求" row="3" type="textarea">
            <!-- <i>></i> -->
          </div>
        </div>
        <!--  -->
        <div class="app_btn_area">
          <button class="app_btn" :disabled="!ifAll" @click="post">提交拜访</button>
          <p v-if="!ifAll" @click="goyz" class="app_bottom_tips"><span class="app_bottom_link">请完善身份认证</span>否则无法提交拜访申请！</p>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      ifAll: true, //是否完成了实名验证
      baseOptions: { //初始数据H
        collegeOpts: ['小学', '初中']
      },
      form: {
        collegeName: '', //院校/机构名称
        yy: '', //预约分公司
        data: '', //预约日期
        time: '', //预约时间
        name: '', //拜访人姓名
        zw: '', //拜访人职务
        tel: '', //拜访人电话
        count: '', //拜访人数
        sy: '', //拜访事由
        memo: '', //备注


      }
    }
  },
  components: {},
  methods: {
    post() {
      console.log(this.form)
      Object.keys(this.form).forEach(item => {
        if (item !== 'memo' && !this.form[item]) {
          console.log('请将表单填写完整')
        }
      })
    },
    goyz() { //完善身份跳转
      console.log("完善身份跳转")
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
@import '@/styles/detailAndList.scss';

</style>
