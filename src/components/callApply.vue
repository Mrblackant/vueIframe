<template>
  <div id="app">
    <el-form class="lx_caseForm_wapper" ref="caseForm" :model="caseForm" label-width="80px" size="mini" :inline="true">
      <el-form-item label="院校名称">
        <el-row class="lx_college_wapper lx_input_and_text">
          <el-tooltip class="item" effect="dark" :disabled="caseForm.collegeName.length==0" :content="caseForm.collegeName" placement="top-start">
            <el-input v-model="caseForm.collegeName"></el-input>
          </el-tooltip>
          <!-- 文字按钮 -->
          <span class="lx_text_button_wapper">
            <el-button type="text" @click="diaOpen('college')">选择</el-button>
            <el-button type="text">清除</el-button>
          </span>
        </el-row>
      </el-form-item>
      <el-form-item label="案例状态">
        <el-select v-model="caseForm.region" placeholder="请选择">
          <template v-for="item in baseDataOptions.caseStatusOpts">
            <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="申请专业">
        <el-row class="lx_input_and_text">
          <el-tooltip class="item" effect="dark" :disabled="caseForm.collegeName.length==0" :content="caseForm.collegeName" placement="top-start">
            <el-input v-model="caseForm.name"></el-input>
          </el-tooltip>
          <!-- 文字按钮 -->
          <span class="lx_text_button_wapper">
            <el-button type="text">选择</el-button>
            <el-button type="text">清除</el-button>
          </span>
        </el-row>
      </el-form-item>
      <el-form-item label="学生姓名">
        <el-input v-model="caseForm.stuName"></el-input>
      </el-form-item>
      <el-form-item label="案例名称">
        <el-input v-model="caseForm.caseName"></el-input>
      </el-form-item>
      <el-form-item label="名校案例">
        <el-select v-model="caseForm.isCaseFamous">
          <el-option value="true" label="是"></el-option>
          <el-option value="false" label="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申请学历">
        <el-select v-model="caseForm.name" placeholder="请选择">
          <template v-for="item in baseDataOptions.applicationEduOpts">
            <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="合同号">
        <el-input v-model="caseForm.conNo"></el-input>
      </el-form-item>
      <el-form-item label="签约日期">
        <el-date-picker v-model="caseForm.signDate" type="daterange" range-separator="至" value-format="timestamp" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="目前学历">
        <el-select v-model="caseForm.education" placeholder="请选择">
          <template v-for="item in baseDataOptions.educationOpts">
            <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="申请国家">
        <el-select v-model="caseForm.countryCode" placeholder="请选择">
          <template v-for="item in baseDataOptions.countryOpts">
            <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="是否录取">
        <el-select v-model="caseForm.admitResult" placeholder="请选择">
          <el-option label="是" :value="true"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="成行日期">
        <el-date-picker v-model="caseForm.cxDate" type="daterange" range-separator="至" value-format="timestamp" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="毕业学校">
        <el-input v-model="caseForm.graduateSchool"></el-input>
      </el-form-item>
      <el-form-item label="语言情况">
        <el-input v-model="caseForm.languageInfo"></el-input>
      </el-form-item>
      <el-form-item label="国内专业">
        <el-input v-model="caseForm.localSpecialty"></el-input>
      </el-form-item>
      <el-form-item label="成绩情况(GPA)" class="line_height_14">
        <el-input v-model="caseForm.scoreInfo"></el-input>
      </el-form-item>
      <el-form-item label="收入情况">
        <el-input v-model="caseForm.parentsWorkIncome"></el-input>
      </el-form-item>
      <el-form-item label="担保金情况" class="line_height_14">
        <el-input v-model="caseForm.guaranteesInfo"></el-input>
      </el-form-item>
      <el-form-item label="所属公司">
        <el-select v-model="caseForm.companyId" placeholder="请选择">
          <template v-for="item in baseDataOptions.affiliatedCompanyOpts">
            <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="创建日期">
        <el-date-picker v-model="caseForm.cxDate" type="daterange" range-separator="至" value-format="timestamp" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="顾问姓名">
        <el-input v-model="caseForm.consultantName"></el-input>
      </el-form-item>
      <el-form-item label="案例类型">
        <el-select v-model="caseForm.caseType" placeholder="请选择">
          <template v-for="item in baseDataOptions.caseTypeOpts">
            <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="审批通过时间" class="line_height_14">
        <el-date-picker v-model="caseForm.name" type="daterange" range-separator="至" value-format="timestamp" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <!-- 提交按钮 -->
    <el-row type="flex" justify="center">
      <el-button type="primary" @click="onSubmit" size="mini">查询</el-button>
      <el-button type="primary" plain size="mini">新建</el-button>
    </el-row>
    <!-- 查询结果table -->
    <el-table class="lx_table_wapper" :data="tableData" border style="width: 100%">
      <template v-for="item in tableDataInit">
        <el-table-column :key="item.propsCode+item.labelNmae" :prop="item.propsCode" :label="item.labelNmae">
        </el-table-column>
      </template>
    </el-table>
    <!-- 选择院校弹窗 -->
    <choseCollege-dia :show.sync="collegeShowDia" @getSchool="getSchool"></choseCollege-dia>
  </div>
</template>
<script>
import "@/styles/callApply.scss"
import "@/styles/feesChange.scss"
import choseCollegeDia from "@/components/anliku/choseCollegeDia"
import choseMajorDia from "@/components/anliku/choseMajorDia"
export default {
  components: {
    choseCollegeDia,
    choseMajorDia
  },
  data() {
    return {
      collegeShowDia: false, //控制院校选择的弹窗
      tableData: [], //table查询信息
      tableDataInit: [ //动态渲染table的列表
        {
          propsCode: '',
          labelNmae: '创建时间'
        },
        {
          propsCode: '',
          labelNmae: '所属公司'
        },
        {
          propsCode: '',
          labelNmae: '案例名称'
        },
        {
          propsCode: '',
          labelNmae: '学生姓名'
        },
        {
          propsCode: '',
          labelNmae: '合同号'
        },
        {
          propsCode: '',
          labelNmae: '顾问姓名'
        },
        {
          propsCode: '',
          labelNmae: '毕业学校'
        },
        {
          propsCode: '',
          labelNmae: '成绩情况(GPA)'
        },
        {
          propsCode: '',
          labelNmae: '目前学历'
        },
        {
          propsCode: '',
          labelNmae: '国内专业'
        },
        {
          propsCode: '',
          labelNmae: '语言情况'
        },
        {
          propsCode: '',
          labelNmae: '收入情况'
        },
        {
          propsCode: '',
          labelNmae: '担保金情况'
        },
        {
          propsCode: '',
          labelNmae: '案例状态'
        },
        {
          propsCode: '',
          labelNmae: '审批通过时间'
        }, {
          propsCode: '',
          labelNmae: '操作'
        }
      ],
      baseDataOptions: { //全局需要初始化的数据
        //案例状态 select初始数据
        caseStatusOpts: [{
          name: '成功',
          id: 's'
        }],
        // 申请学历 select初始数据
        applicationEduOpts: [{
          name: '大学',
          id: 'college'
        }],
        // 目前学历 select初始数据
        educationOpts: [{
          name: '小学',
          id: 'college'
        }],
        // 国家 select初始数据
        countryOpts: [{
          name: '美国',
          id: 'US'
        }],
        // 所属公司 select初始数据
        affiliatedCompanyOpts: [{
          name: '新通',
          id: 'xt'
        }],
        // 案例类型 select初始数据
        caseTypeOpts: [{
          name: '新通',
          id: 'xt'
        }]

      },
      caseForm: { //查询form
        collegeName: '', //院校名称
        //,案例状态  
        //,申请专业
        stuName: '', //学生姓名       
        caseName: '', //案例名称 
        isCaseFamous: '', //名校案例
        // ,申请学历
        conNo: '', //合同号
        signDate: [], //签约日期
        education: '', //目前学历
        countryCode: '', //申请国家
        admitResult: '', //是否录取
        cxDate: '', //成行日期
        graduateSchool: '', //毕业学校
        languageInfo: '', //语言情况
        localSpecialty: '', //国内专业
        scoreInfo: '', //成绩情况(GPA)
        parentsWorkIncome: '', //收入情况
        guaranteesInfo: '', //担保金情况
        companyId: '', //所属公司
        //,创建日期
        consultantName: '', //顾问姓名
        caseType: '', //案例类型
        // ,审批通过时间

      }

    }

  },
  methods: {
    onSubmit() { //查询
      console.log(this.caseForm)
    },
    diaOpen(type) { //院校、专业弹窗的打开控制
      // type: college院校,major专业
      console.log(type)
      if (type === 'college') {
        this.collegeShowDia = true
      }
    },
    getSchool(data) { //获取到学校的数据
      console.log(data)
      this.caseForm.collegeName = data.row.address

    }
  },
  watch: {
    "caseForm.signDate"() {
      console.log(this.caseForm.signDate)
    }
  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
</style>
