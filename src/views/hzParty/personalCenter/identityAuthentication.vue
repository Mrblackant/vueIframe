<!-- 身份认证 -->
<template>
  <div class="app_wapper app_sf_wapper">
    <div class="app_items_wapper">
      <div @click="jumpTo('img')" class="app_item app_flex app_flex_der app_flex_row_bettwen">
        <span>身份认证</span>
        <input v-if="!ifImg" class="app_inp" placeholder="请上传您的名片，完善您的身份认证！" disabled>
        <span v-else class="app_show_img bck_contain"></span>
      </div>
      <div class="app_list_wapper">
        <div @click="jumpTo('yx')" class="app_item app_flex app_flex_row_bettwen">
          <span>院校认证</span>
          <input class="app_inp" v-model="getSchools" placeholder="请添加所属院校/机构！" disabled>
        </div>
        <div v-if="schoolLists.length>0" v-for="(item,index) in schoolLists" class="app_list_item">
          <span class="app_btn_del bck_all" @click="delBtn(item,index)"></span>
          <p>国家: {{item.country}}</p>
          <p class="app_no_ma">院校名称: {{item.collegeName}}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            {{item.collegeNameEn}}</p>
        </div>
      </div>
    </div>
    <button @click="save" class="app_btn">保存</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getSchools: '', //院校
      ifImg: false, //是否上传了图片
      schoolLists: [{ //院校列表
        country: '美国',
        collegeName: '美术学院',
        collegeNameEn: 'USSS'
      }, {
        country: '美国1',
        collegeName: '美术学院',
        collegeNameEn: 'USSS'
      }],
    }
  },
  components: {},
  methods: {
    jumpTo(type) { //点击事件
      console.log(type)
      if (type === 'img') {
        this.ifImg = true
      }
    },
    delBtn(...data) {
      let $index = data[1]
      console.log($index)
      this.schoolLists.splice($index, 1)

      // .splice(data[1], 1)
    },

  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

.app_sf_wapper {
  background-image: url($partyIndex);
  padding-top: 0.68rem;
  box-sizing: border-box;
  background-color: #fff;

  .app_show_img {
    display: inline-block;
    width: 1.30rem;
    height: 1.30rem;
    border: 1px solid red;
  }

  .app_list_item {
    background-color: $commonCardBk;
    padding: 0.33rem;
    font-size: 0.24rem;
    margin-bottom: 0.36rem;
    position: relative;

    .app_btn_del {
      width: 0.34rem;
      height: 0.34rem;
      display: block;
      position: absolute;
      right: 0.33rem;
      top: 0.33rem;
      background-image: url($delBtn);
    }

    .app_no_ma {}

    p {
      margin-bottom: 0.25rem;
    }

    p:last-child {
      margin: 0;
    }
  }

  .app_list_wapper {
    border-bottom: 1px solid #E2E2E2;

    .app_item {
      border: none;
      padding-bottom: 0;


    }
  }
}

</style>
