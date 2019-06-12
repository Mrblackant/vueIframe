<!-- 国合方list -->
<template>
  <section class="app_set_wapper">
    <!-- 上边的tabs -->
    <tabs @tabChange="tabChange" :tabsName="setTabsName" :nums="countNums">
    </tabs>
    <!-- 列表详情 -->
    <section class="app_list_wapper">
      <ul v-if="showWaitingTab" class="app_content">
        <li @click="jumpUrl" class="app_can_active" v-for="(item,index) in datalisr" :key="index+item">
          <!-- 是否含有一些标志--二次确认 -->
          <span v-if="item.ifSecondConfim" class="app_second_confirm">二次确认</span>
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
          <!-- 是否是需要确认的按钮 -->
          <div v-if="item.status==='wait'" class="app_content_item">
            <div class="app_btns_wapper app_flex app_flex_row_center">
              <button class="app_btn app_muti_btn" @click.stop="btnClick('sendToCom',item)">发送分公司</button>
            </div>
          </div>
          <!-- 同意/拒绝 -->
          <div v-else>
            <div class="app_content_item">
              预约状态: {{item.yyStatus}}
            </div>
            <div class="app_content_item">
              预约结果:
              <!-- 同意 -->
              <span v-if="item.status&&item.status==='agree'" :class="item.status==='agree' ? 'app_agree' :''">
                同意
              </span>
              <!-- 拒绝 -->
              <span v-if="item.status&&item.status==='notAgree'" :class="item.status==='notAgree' ? 'app_not_agree' :''">
                拒绝<span class="app_gery" v-if="item.notAgreeInfo">(拒绝理由:{{item.notAgreeInfo}})</span>
              </span>
            </div>
            <!-- 控制按钮的显示 -->
            <div class="app_btns_wapper app_flex " :class="!item.ifSecondConfim&&item.status==='notAgree' ? 'app_has_padding app_flex_row_bettwen' : 'app_flex_row_center'">
              <button class="app_btn app_muti_btn" @click.stop="btnClick('fkhzf',item)">反馈合作方</button>
              <button v-if="!item.ifSecondConfim&&item.status==='notAgree'" class="app_btn app_muti_btn" @click.stop="btnClick('fsfgs',item)">发送分公司</button>
            </div>
          </div>
        </li>
      </ul>
      <!-- 未完结、全部tab显示这个ul -->
      <ul v-else class="app_content">
        <li v-for="(item,index) in dataListAll" class="app_can_active" @click="jumpUrl" :key="index+item">
          <!-- 是否含有一些标志--二次确认 -->
          <span v-if="item.ifSecondConfim" class="app_second_confirm">二次确认</span>
          <!-- 已过期 -->
          <span v-if="item.ifOutdate" class="app_second_confirm app_second_confirm_gery">已过期</span>
          <!--  -->
          <!-- 有无已反馈合作方、分公司的top -->
          <div v-if="item.ifSendCom||item.ifSendpar" class="app_content_item">
            <span class="app_top_title">
              {{item.ifSendCom ? '已发送分公司' :'已反馈合作方'}}
            </span>
          </div>
          <!-- 有无已反馈合作方、分公司的top end-->
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
            预约状态：{{item.yyStatus}}
          </div>
          <!-- 结果是拒绝、同意 -->
          <div v-if="item.status==='gq'||item.status==='agree'||item.status==='notAgree'">
            <div class="app_content_item">
              预约结果：<span :class="item.status==='agree' ? 'app_agree': 'app_not_agree'">
                {{item.status==='agree'? '同意' : '拒绝'}}
              </span>
              <span v-if="item.notAgreeInfo" class="app_gery">(拒绝理由:{{item.notAgreeInfo}})</span>
            </div>
            <div class="app_content_item">
              处理人： {{item.handlePerson}}
            </div>
            <div class="app_content_item">
              处理时间： {{item.handelData}}
            </div>
            <div v-if="item.secondMemo" class="app_content_item">
              二次确认备注信息： {{item.secondMemo}}
            </div>
          </div>
          <!-- 数据的其他状况 -->
          <div v-else>
            <div v-if="item.qxReason" class="app_content_item">
              取消原因： {{item.qxReason}}
            </div>
            <div v-if="item.qxData" class="app_content_item">
              取消时间： {{item.qxData}}
            </div>
            <div v-if="item.visitResult" class="app_content_item">
              拜访结果： {{item.visitResult}}
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- 列表详情 end -->
    <!-- 弹窗 -->
    <card class="app_common_dia" v-if="ifClick" :iconClass="'quxiaoliyou2'">
      <div class="app_my_content">
        <p>请填写二次确认的备注信息:</p>
        <textarea class="app_my_area" v-model="bzText" placeholder="请填写"></textarea>
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
      bzText: '', //备注信息
      ifClick: false, //控制弹窗
      setTabsName: ['待处理', '未完结', '全部'],
      countNums: 12,
      showWaitingTab: true, //是否展示第一个tab
      // 未完结、全部的数据
      dataListAll: [{
          country: '美国',
          scholl: '家里如你丫',
          yyfgs: '成都',
          yydata: '2019-01-01',
          yyStatus: '待分公司确认',
          status: 'waiting',
          handlePerson: '鲤鱼竿',
          handelData: '1999-01-09',
          ifSendCom: true, //是否已发送分公司
          visitResult: '未拜访', //拜访结果
        },
        {
          status: 'notAgree',
          notAgreeInfo: '就是不同意吗',
          country: '美国',
          scholl: '家里如你丫',
          yyfgs: '成都',
          yydata: '2019-01-01',
          yyStatus: '待分公司确认',
          handlePerson: '王二狗',
          handelData: '1999-01-09',
          ifSecondConfim: true, //是否进行了二次确认
          secondMemo: '这是二次备注啊啊啊',
          ifSendCom: true, //是否已发送分公司
        },
        {
          country: '美国',
          scholl: '家里如你丫',
          yyfgs: '成都',
          ifOutdate: true, //是否进行了二次确认
          yydata: '2019-01-01',
          yyStatus: '分公司已确认',
          status: 'agree',
          handlePerson: '王二狗',
          handelData: '1999-01-09',
          ifSecondConfim: true, //是否进行了二次确认

        },
        { //已过期且同意
          country: '美国',
          scholl: '家里如你丫',
          yyfgs: '成都',
          yydata: '2019-01-01',
          yyStatus: '已过期且同意',
          status: 'gq',
          handlePerson: '王二狗',
          handelData: '1999-01-09',
          ifSecondConfim: true, //是否进行了二次确认

        },
        {
          status: 'qx',
          qxReason: '就是不想来',
          qxData: '2019-01-01',
          country: '美国',
          scholl: '家里如你丫',
          yyfgs: '成都',
          yydata: '2019-01-01',
          yyStatus: '待分公司确认',
          handlePerson: '王二狗',
          handelData: '1999-01-09',
          ifSecondConfim: true, //是否进行了二次确认
          secondMemo: '这是二次备注啊啊啊',
          ifSendpar: true, //是否已发送合作方
        }
      ],
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
      if (btnType === 'fsfgs') {
        this.ifClick = true
      }
      // wx.showToast({
      //   title: type,
      //   icon: 'success',
      //   duration: 1000
      // })
    },
    btnControl(type) {
      console.log(type)
      if (!this.bzText) {
        console.log('请填写')

      }
    },
    tabChange(...data) { //tab切换
      console.log(data)
      let dataIndex = data[1]
      if (dataIndex !== 0) {
        this.showWaitingTab = false
      } else {
        this.showWaitingTab = true
      }
      this.countNums = 20
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

</style>
