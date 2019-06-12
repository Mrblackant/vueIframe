<template>
  <div class="app_dia_wapper">
    <div :style="{width:width,minHeight:height}" class="app_card_wapper">
      <span class="app_inner_circle" :class="iconClass"></span>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: "5.40rem"
    },
    height: {
      type: String,
      default: "1rem"
    },
    iconClass: {
      type: String,
      default: "shenfen1"
    }
  },
  date() {
    return {}
  },
  methods: {

  },
  mounted() {
    console.log()
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

.app_dia_wapper {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);

  .app_card_wapper {
    color: #3C4F5E;
    // width: 5.40rem;
    // height: 3.86rem;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 3px 14px 1px rgba(20, 63, 95, 0.4);
  }

  .app_inner_circle {
    display: inline-block;
    width: 1.28rem;
    height: 1.28rem;
    position: absolute;
    // border: 1px solid red;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background-size: cover;
  }
}

</style>
