<!-- 公用的tabs -->
<template>
  <div>
    <!-- 头部tabs -->
    <!-- <section class="app_tabs_wapper"> -->
    <div class="app_tabs_inner_one app_flex app_flex_row_bettwen">
      <span class="app_tabs_card" v-for="(item,index) in tabsName" :keys="item+index" :class="activeIndex===index ? 'app_tab_active': ''" @click="tabChange(index)">
        {{item}}
        <span v-if="activeIndex===index ">
          <span v-if="countNums||countNums===0">
            ({{countNums}}条)
          </span>
        </span>
        <!-- <slot v-if="activeIndex===index" name="countNum"></slot> -->
      </span>
    </div>
    <div class="app_tabs_inner_sc"></div>
    <!-- </section> -->
    <!-- 头部tabs end-->
  </div>
</template>
<script>
export default {
  props: {
    tabsName: {
      type: Array,
      default: () => ['待访问', '待确认', '全部']
    },
    nums: {}
  },
  data() {
    return {
      activeIndex: 0,
      countNums: this.nums, //统计数量

    }
  },
  methods: {
    tabChange(index) {
      this.activeIndex = index
      this.$emit('tabChange', this.tabsName[index], index)
    }
  },
  watch: {
    nums() {
      this.countNums = this.nums
    }
  }

}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

.app_tabs_inner_one {
  width: 100%;
  height: 1.49rem;
  position: fixed;
  top: 0;
  z-index: 9999;
  box-sizing: border-box;
  padding: 0.60rem 0.80rem 0;
  color: #BBDFFB;
  background-color: $baseColor;


  .app_tabs_card {
    display: inline-block;
    height: 0.50rem;
  }

}

.app_tabs_inner_sc {
  position: fixed;
  height: 0.39rem;
  top: 1.49rem;
  width: 100%;
  left: 0;
  background-color: $baseColor;
  // border-top: 1px solid red;

}

.app_tab_active {
  border-bottom: 3px solid #fff;
  color: #fff;
  font-weight: 500;
}

</style>
