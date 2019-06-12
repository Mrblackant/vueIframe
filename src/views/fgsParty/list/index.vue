<!-- 国合方list -->
<template>
  <section class="app_set_wapper">
    <!-- 上边的tabs -->
    <tabs @tabChange="tabChange" :tabsName="setTabsName" :nums="countNums">
    </tabs>
    <!-- 列表详情 -->
    <section class="app_list_wapper">
      <ul class="app_content">
        <li @click="jumpUrl" class="app_can_active" v-for="(item,index) in datalisr" :key="index+item">
          <!-- 是否含有一些标志--二次确认 -->
          <span v-if="item.ifSecondConfim" class="app_second_confirm">二次确认</span>
          <!-- 已过期 -->
          <span class="app_second_confirm app_second_confirm_gery">已过期</span>
          <div class="app_content_item">
            国家: {{item.country}}
          </div>
          <div class="app_content_item">
            院校名称：{{item.scholl}}
          </div>
          <div class="app_content_item">
            预约分公司：{{item.yyfgs}}
          </div>
          <div class="app_content_item">
            预约日期： {{item.yydata}}
          </div>
          <div class="app_content_item">
            预约状态： {{item.yyStatus}}
          </div>
          <div class="app_content_item">
            二次确认备注信息： {{item.yyStatus}}
          </div>
          <div class="app_content_item">
            预约结果：
            <span class="app_agree">同意</span>
            <span class="app_not_agree">拒绝
              <span class="app_gery">(拒绝理由:拒绝
                )</span>
            </span>
          </div>
          <div class="app_content_item">
            处理人 ：{{item.yyStatus}}
          </div>
          <div class="app_content_item">
            处理时间 ：{{item.yyStatus}}
          </div>
          <div class="app_content_item">
            拜访结果 ：{{item.yyStatus}}
          </div>
          <div class="app_btns_wapper app_flex app_has_padding app_flex_row_bettwen">
            <button class="app_btn app_muti_btn" @click.stop="btnClick('ty',item)">同意</button>
            <button class="app_btn app_muti_btn app_rej_btn" @click.stop="btnClick('jj',item)">拒绝</button>
          </div>
          <div class="app_btns_wapper app_flex app_has_padding app_flex_row_bettwen">
            <button class="app_btn app_muti_btn" @click.stop="btnClickSecond('wcbf',item)">已完成拜访</button>
            <button class="app_btn app_muti_btn app_rej_btn" @click.stop="btnClickSecond('wbf',item)">未拜访</button>
          </div>
        </li>
      </ul>
    </section>
    <!-- 列表详情 end -->
    <!-- 弹窗 -->
    <card class="app_common_dia" v-if="ifClick" :iconClass="'quxiaoliyou2'">
      <div class="app_my_content">
        <p>请输入拒绝理由:</p>
        <textarea class="app_my_area" v-model="jjText" placeholder="请填写"></textarea>
        <div class="app_btn_wapper app_flex app_flex_row_bettwen">
          <button @click="ifClick=false" class="app_btn app_btn_qx">取消</button>
          <button @click="btnControl('qr')" class="app_btn app_btn_confirm">确认</button>
        </div>
      </div>
    </card>
  </section>
</template>
<script>
import tabs from "@/components/commonTabs"
import card from "@/components/cardAndCricle"

export default {

  name: 'App',
  data() {
    return {
      jjText: '', //备注信息
      ifClick: false, //控制弹窗
      setTabsName: ['待处理', '待拜访', '全部'],
      countNums: 12,
      datalisr: [{
          country: '美国',
          scholl: '家里如你丫',
          yyfgs: '成都',
          yydata: '2019-01-01',
          status: 'wait'
        },
        {
          country: '美国',
          scholl: '家里如你丫',
          yyfgs: '成都',
          yydata: '2019-01-01',
          yyStatus: '分公司已确认',
          status: 'agree',
          ifSecondConfim: true, //是否进行了二次确认

        },
        {
          country: '美国',
          scholl: '家里如你丫',
          yyfgs: '成都',
          yydata: '2019-01-01',
          yyStatus: '分公司已确认',
          status: 'notAgree',
          notAgreeInfo: '就是不同意吗',
        },
        {
          country: '美国',
          scholl: '家里如你丫',
          yyfgs: '成都',
          yydata: '2019-01-01',
          yyStatus: '分公司已确认',
          status: 'notAgree',
          notAgreeInfo: '就是不同意吗',
          ifSecondConfim: true, //是否进行了二次确认
        },
      ],
    }
  },
  components: { tabs, card },
  mounted() {

    // for (var i = 0; i < 10; i++) {
    //   this.datalisr.push('121212')
    // }

  },
  methods: {
    jumpUrl() { //列表的跳转
      console.log(1123)
      // wx.showToast({
      //   title: 123,
      //   icon: 'success',
      //   duration: 1000
      // })
    },
    btnClick(...type) { //页面上的按钮点击
      console.log(type[1])
      let btnType = type[0]
      let dataItem = type[1]
      if (btnType === 'jj') {
        this.ifClick = true
      }
      // wx.showToast({
      //   title: type,
      //   icon: 'success',
      //   duration: 1000
      // })
    },
    btnClickSecond(type) {
      console.log(type)
    },
    btnControl(type) {
      console.log(type)
      if (!this.jjText) {
        console.log('请填写')

      }
    },
    tabChange(...data) { //tab切换
      console.log(data)
      let dataIndex = data[1]
      this.countNums = 20
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

</style>
