<template>
  <section class="app_set_wapper">
    <!-- 上边的tabs -->
    <tabs @tabChange="tabChange" :tabsName="setTabsName" :nums="countNums">
    </tabs>
    <!-- 列表详情 -->
    <section class="app_list_wapper">
      <ul class="app_content">
        <li @click="jumpUrl" class="app_can_active" v-for="(i,index) in datalisr" :key="index">
          <!-- 是否含有一些标志 -->
          <span v-if="true" class="app_title">已过期</span>
          <div class="app_content_item">
            <!-- 标题 -->
            {{i}} :
            <!-- 内容 -->
            &nbsp;&nbsp;
            <span class="app_agree">{{i+1}}</span>
          </div>
        </li>
      </ul>
    </section>
    <!-- 列表详情 end -->
  </section>
</template>
<script>
import tabs from "@/components/commonTabs"
export default {

  name: 'App',
  data() {
    return {
      setTabsName: ['去', '俩', 'hai'],
      countNums: 0,
      datalisr: [

      ],
    }
  },
  components: { tabs },
  mounted() {

    for (var i = 0; i < 10; i++) {
      this.datalisr.push('121212')
    }

  },
  methods: {
    jumpUrl() { //列表的跳转
      console.log(1123)
    },
    tabChange(...data) { //tab切换
      console.log(data)
      this.countNums = 20
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

</style>
