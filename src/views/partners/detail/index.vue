<template>
  <section class="app_wapper app_partner_detail_wapper bck_all">
    <div class="app_item_wapper">
      <p v-for="(item2,index) in forList" :key="item2+index">
        {{item2.title}}:
        &nbsp;&nbsp;
        <span class="app_agree">{{detailData[item2.valueKey]}}</span>
        <span class="app_not_agree">{{detailData[item2.valueKey]}}</span>
      </p>
    </div>
    <div v-if="ifQx" class="app_qx_wapper">
      预约已取消：
      <p> 取消原因：{{qxReason}}</p>
      <p> 取消时间：{{qxDate}}</p>
    </div>
    <button v-if="!ifQx" @click="qx" class="app_btn app_btn_detail">取消预约</button>
    <card v-if="ifClick" :iconClass="'quxiaoliyou2'">
      <div class="app_my_content_d">
        <p>请填写取消理由</p>
        <textarea class="app_textarea" v-model="qxReasonForm"></textarea>
        <div class="app_btn_wapper app_flex app_flex_row_bettwen">
          <button @click="btnControl('qx')" class="app_btn app_btn_qx">取消</button>
          <button @click="btnControl('qr')" class="app_btn app_btn_confirm">确认</button>
        </div>
      </div>
    </card>
  </section>
</template>
<script>
import card from "@/components/cardAndCricle"
export default {
  data() {
    return {
      ifClick: false, //控制弹窗打开
      ifQx: false, //是否取消了
      qxReasonForm: '', //填写的取消理由
      qxReason: '123', //取消原因
      qxDate: '20190', //取消时间
      detailData: { mm: 123 },
      forList: [{
          title: '国家',
          valueKey: 'mm'
        },
        {
          title: '院校名称',
          valueKey: 'mm'
        },
        {
          title: '预约分公司',
          valueKey: 'mm'
        },
        {
          title: '预约日期',
          valueKey: 'mm'
        },
        {
          title: '拜访人姓名',
          valueKey: 'mm'
        },
        {
          title: '拜访人职务',
          valueKey: 'mm'
        },
        {
          title: '拜访人电话',
          valueKey: 'mm'
        },
        {
          title: '拜访人数',
          valueKey: 'mm'
        },
        {
          title: '拜访事由',
          valueKey: 'mm'
        },
        {
          title: '其他需求',
          valueKey: 'mm'
        },
        {
          title: '预约状态',
          valueKey: 'mm'
        },
        {
          title: '创建日期',
          valueKey: 'mm'
        }
      ]
    }
  },
  components: { card },
  methods: {
    qx() { //取消预约按钮
      console.log(123)
      this.ifClick = true
      // this.ifQx = !this.ifQx
    },
    btnControl(type) { //弹窗的点击
      console.log(type)
      this.ifClick = false
      if (type === 'qr') {
        this.ifQx = true
      }
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
@import '@/styles/detailAndList.scss';

</style>
