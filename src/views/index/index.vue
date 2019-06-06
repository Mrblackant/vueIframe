<!-- 首页-选择身份 -->
<template>
  <section class="app_wapper app_index_wapper bck_all">
    <!-- 选择wapper -->
    <section class="app_chose_wapper bck_contain app_flex app_flex_der app_shu">
      <div class="app_logo_wapper bck_contain"></div>
      <div class="app_title">请选择登录人身份</div>
      <template v-for="item in btnArr">
        <span :key="item" @click="choseUser(item)" class="app_like_btn">{{item}}</span>
      </template>
    </section>
  </section>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      btnArr: [
        '合作方', '分公司员工', '国合'
      ]
    }
  },
  components: {},
  methods: {
    choseUser(type) {
      console.log(type)
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
@import '@/styles/indexAndSign.scss';

</style>

