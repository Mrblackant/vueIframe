<!-- 国合方-详情页面 -->
<template>
  <div class="app_wapper app_wapper_bk3 app_detail_wapper">
    <div class="app_detail_top app_flex app_flex_row_bettwen">
      <span class="app_top_title">已发送分公司</span>
      <span class="app_second_confirm">二次确认</span>
    </div>
    <!-- 按钮 -->
    <!-- <button @click="btnControl('fkhzf')" class="app_btn app_btn_fixed_bot">反馈合作方</button> -->
    <div class="app_fixed_btns_two app_btn_confirm app_flex">
      <button class="app_btn" @click="btnControl('ty')">同意</button>
      <button class="app_btn app_rej_btn" @click="btnControl('jj')">拒绝</button>
    </div>
    <div class="app_fixed_btns_two app_btn_confirm app_flex">
      <button class="app_btn" @click="btnControl2('ywc')">已完成拜访</button>
      <button class="app_btn app_rej_btn" @click="btnControl2('wbf')">未拜访</button>
    </div>
    <div class="app_inner_item">
      <p>国家：{{getData.country}}</p>
      <p>院校名称：{{getData.scholl}}</p>
      <p>预约分公司：{{getData.yyfgs}}</p>
      <p>预约日期：{{getData.yydata}}</p>
      <p>拜访人姓名：{{getData.bfName}}</p>
      <p>拜访人职务：{{getData.bfZw}}</p>
      <p>拜访人电话：{{getData.bfPhone}}</p>
      <p>拜访人数：{{getData.bfRs}}</p>
      <p>拜访事由：{{getData.bfSy}}</p>
      <p>其他需求：{{getData.otherXq}}</p>
      <p>预约状态：{{getData.yyStatus}}</p>
      <p>预约结果：{{getData.yyJg}}
        <span class="app_agree">同意</span>
        <span class="app_not_agree">拒绝</span>
        <span class="app_gery">(拒绝理由:{{'拒绝理由拒绝理由'}})</span>
      </p>
      <p>处理人：{{getData.handlePerson}}</p>
      <p>处理时间：{{getData.handleDate}}</p>
      <p>二次确认备注信息：{{getData.secondMemo}}</p>
    </div>
    <div class="app_inner_item">
      <p>取消原因：{{getData.qxReason}}</p>
      <p>取消时间：{{getData.qxDate}}</p>
    </div>
    <div class="app_inner_item">
      <p>预约人姓名：{{getData.yyrName}}</p>
      <p>预约人手机号：{{getData.yyrPhone}}</p>
      <p>预约人名片：
        <span class="app_inner_item_img  bck_contain"></span>
        {{getData.yyrMp}}</p>
      <p>附加信息：{{getData.fjxx}}</p>
    </div>
    <!-- 弹窗 -->
    <card class="app_common_dia" v-if="ifClick" :iconClass="'quxiaoliyou2'">
      <div class="app_my_content">
        <p>请输入拒绝理由:</p>
        <textarea class="app_my_area" v-model="jjText" placeholder="请填写"></textarea>
        <div class="app_btn_wapper app_flex app_flex_row_bettwen">
          <button @click="ifClick=false" class="app_btn app_btn_qx">取消</button>
          <button @click="btnControltc('qr')" class="app_btn app_btn_confirm">确认</button>
        </div>
      </div>
    </card>
  </div>
</template>
<script>
import card from "@/components/cardAndCricle"

export default {
  data() {
    return {
      ifClick: false, //控制弹窗
      jjText: '', //拒绝理由
      getData: {
        ifSecondConfirm: true,
        hasSendToCom: true,
        country: '美国',
        scholl: '西雅图中央学院',
        yyfgs: '成都分公司',
        yydata: '2019-01-01',
        bfName: '张三',
        bfZw: '总经理',
        bfRs: '1000',
        bfPhone: '1312112121',
        bfSy: '就是来看看您',
        otherXq: '其他需求',
        yyStatus: 'notAgree',
        yyJg: '预约已取消',
        notAgreeReson: '拒绝原因',
        handlePerson: '处理人',
        handleDate: '2019-01-01',
        secondMemo: '二次备注',
        qxReason: '就是取消了',
        qxDate: "2019-01-01",
        ifFkhzf: true, //是否需要反馈合作方
        yyrName: '王刚单',
        yyrPhone: '13121212',
        yyrMp: 'http://',
        fjxx: '这是附件信息'


      }
    }
  },
  components: { card },
  methods: {
    btnControl(type) {
      console.log(type)
    },
    btnControl2(type) {
      console.log(type)
    },
    btnControltc() {
      if (!this.jjText) {
        console.log('请填写')
      }
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';

.app_detail_wapper {
  padding-bottom: 1rem;

  .app_fixed_btns_two {
    padding: 0.10rem 0;
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;

    .app_rej_btn {
      position: absolute;
      // top: -0.1rem;
      // bottom:0.1rem;
      right: 0;
      top: 0;
      bottom: 0;
    }

    button {
      width: 50%;
      padding: 0.16rem 0;
      border-radius: 0;
    }

    button:first-child {
      border-right: 1px solid #fff;
    }
  }
}

</style>
