<template>
  <div class="lx_anli_reedit_wapper">
    <el-tabs type="border-card">
      <el-tab-pane label="案例分析表">
        <!-- 案例号 -->
        <el-row class="lx_case_info">
          <el-col :span="8">案例号:{{caseNum}}</el-col>
          <el-col :span="8">状态:{{caseStatus}}</el-col>
        </el-row>
        <!-- 分割线 -->
        <div class="lx_for_line">
          <div class="lx_for_line_inner"></div>
        </div>
        <!-- 分割线end -->
        <!-- 统一的标题分割 -->
        <h2 class="lx_block_bg_change lx_block_position ">
          案例基本信息
        </h2>
        <!-- 案例基本信息 表单 -->
        <el-form :model="baseInfoForm" :inline="true" size="mini" label-width="100px">
          <!-- <el-row type="flex" justify="space-bettwen"> -->
          <!-- <el-col > -->
          <el-form-item label="案例名称" class="lx_anli_name">
            <el-input v-model="baseInfoForm.caseName"></el-input>
          </el-form-item>
          <!-- </el-col> -->
          <!-- <el-col> -->
          <el-form-item label="offer预览">
            <el-col>
              <el-button type="text" @click="previewOffer" size="mini">
                查看
              </el-button>
              <el-button size="mini" type="text" @click="reeditOffer">
                编辑
              </el-button>
            </el-col>
          </el-form-item>
          <!-- </el-col> -->
          <!-- </el-row> -->
          <!--   <el-row>
            <el-col :span="6"> -->
          <el-form-item label="顾问姓名">
            <el-row class="lx_college_wapper lx_input_and_text">
              <el-input v-model="tempData.adviserName"></el-input>
              <!-- 文字按钮 -->
              <span class="lx_text_button_wapper">
                <el-button type="text" @click="diaOpen('adviser')">选择</el-button>
                <el-button type="text" @click="clearData('adviser')">清除</el-button>
              </span>
            </el-row>
          </el-form-item>
          <!-- </el-col> -->
          <!-- <el-col :span="6"> -->
          <el-form-item label="公司">
            <el-select v-model="baseInfoForm.companyid">
              <template v-for="item in baseDataOptions.companiesOpts">
                <el-option :key="item.id+item.name" :value="item.id" :label="item.name"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <!-- </el-col> -->
          <!-- <el-col :span="6"> -->
          <el-form-item label="学生姓名">
            <el-row class="lx_college_wapper lx_input_and_text">
              <el-input v-model="tempData.studentName"></el-input>
              <!-- 文字按钮 -->
              <span class="lx_text_button_wapper">
                <el-button type="text" @click="diaOpen('student')">选择</el-button>
                <el-button type="text" @click="clearData('student')">清除</el-button>
              </span>
            </el-row>
          </el-form-item>
          <!-- </el-col> -->
          <!-- <el-col :span="6"> -->
          <el-form-item label="合同号">
            <el-input v-model="baseInfoForm.contractNumber"></el-input>
          </el-form-item>
          <!-- </el-col> -->
          <!-- </el-row> -->
          <el-form-item label="签约时间">
            <el-date-picker v-model="baseInfoForm.signData" type="date" placeholder="选择日期" value-format="timestamp">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="预计成型时间" class="line_height_14">
            <el-date-picker v-model="baseInfoForm.yjCxData" type="date" placeholder="选择日期" value-format="timestamp">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="留学类别">
            <el-select v-model="baseInfoForm.lxTypes" placeholder="请选择">
              <template v-for="item in baseDataOptions.lxTypeOpts">
                <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="申请国家">
            <el-select v-model="baseInfoForm.applicantCountry" placeholder="请选择">
              <template v-for="item in baseDataOptions.applicantCouOpts">
                <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="案例类别" class="lx_anli_type_wapper">
            <el-select v-model="baseInfoForm.caseType" placeholder="请选择">
              <template v-for="item in baseDataOptions.caseTypeOpts">
                <el-option :key="item.name+item.id" :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
            <span class="lx_casetpes_tips">
              注：“名校案例”特指2011年度名校申请奖励政策所列的院校录取案例
            </span>
          </el-form-item>
          <el-form-item label="签约顾问">
            <el-row class="lx_college_wapper lx_input_and_text">
              <el-input v-model="tempData.signingConsultant"></el-input>
              <!-- 文字按钮 -->
              <span class="lx_text_button_wapper">
                <el-button type="text" @click="diaOpen('consultant')">选择</el-button>
                <el-button type="text" @click="clearData('consultant')">清除</el-button>
              </span>
            </el-row>
          </el-form-item>
        </el-form>
        <!-- 分割线 -->
        <div class="lx_for_line">
          <div class="lx_for_line_inner"></div>
        </div>
        <!-- 分割线end -->
        <!-- 学生背景表单 -->
        <!-- 统一的标题分割 -->
        <h2 class="lx_block_bg_change lx_block_position ">
          学生背景
        </h2>
        <el-form :model="studentInfoForm" label-width="120px" size="mini">
          <span class="lx_inner_title_span">
            【学术背景】
          </span>
          <el-row>
            <el-col :span="18">
              <el-form-item label="毕业/在读学校" class="lx_no_control_wid">
                <el-input v-model="studentInfoForm.onschool"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-form-item label="成绩情况（GPA)" class="lx_no_control_wid">
                <el-input v-model="studentInfoForm.achievement"></el-input>
              </el-form-item>
            </el-col>
            <span class="lx_form_tip">*学校成绩具体分数</span>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="目前学历">
                <el-input v-model="studentInfoForm.nowEducation"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="国内专业">
                <el-input v-model="studentInfoForm.chineseMajor"></el-input>
              </el-form-item>
            </el-col>
            <span class="lx_form_tip">*如没有国内专业请填写‘无’</span>
          </el-row>
          <el-row class="lx_inner_form_line">
            <el-col :span="18">
              <el-form-item label="语言情况" class="lx_no_control_wid">
                <el-input v-model="studentInfoForm.languageInfo"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <span class="lx_inner_title_span">
            【家庭背景】
          </span>
          <el-row>
            <el-col :span="8">
              <el-form-item label="父母工作和收入">
                <el-input v-model="studentInfoForm.parentInfo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="担保金情况">
                <el-input v-model="studentInfoForm.guaranteeMoneyInfo"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <!-- 学生背景表单 end-->
        <!-- 分割线 -->
        <div class="lx_for_line">
          <div class="lx_for_line_inner"></div>
        </div>
        <!-- 分割线end -->
        <!-- 学生背景分析 表单 -->
        <!-- 统一的标题分割 -->
        <h2 class="lx_block_bg_change lx_block_position ">
          学生背景分析
        </h2>
        <el-form :model="studentMoreInfoForm" size="mini" label-width="100px" class="lx_inner_form_textarea">
          <el-row class="lx_inner_row">
            <el-form-item label="申请人优势">
              <el-input placeholder="请输入" type="textarea" v-model="studentMoreInfoForm.applicantAdvantage"></el-input>
            </el-form-item>
          </el-row>
          <el-form-item label="申请人劣势">
            <el-input placeholder="请输入" type="textarea" v-model="studentMoreInfoForm.disadvantageApplicants"></el-input>
          </el-form-item>
          <el-form-item label="学生性格特点">
            <el-input placeholder="请输入" type="textarea" v-model="studentMoreInfoForm.studentsCharacteristics"></el-input>
          </el-form-item>
        </el-form>
        <!-- 学生背景分析 表单 end-->
        <!-- 分割线 -->
        <div class="lx_for_line">
          <div class="lx_for_line_inner"></div>
        </div>
        <!-- 分割线end -->
        <h2 class="lx_block_bg_change lx_block_position ">
          申请方案&签证方案设计与分析
        </h2>
        <el-form :model="applicationPlanForm" size="mini" label-width="100px" class="lx_inner_form_textarea" align="left">
          <el-row class="lx_inner_row">
            <el-form-item label="如何对学生的优劣势扬长避短" class="line_height_14">
              <el-input placeholder="请输入" type="textarea" v-model="applicationPlanForm.howSetStudentInfo"></el-input>
            </el-form-item>
          </el-row>
          <el-form-item label="选择申请院校的思路" class="line_height_14">
            <el-input placeholder="请输入" type="textarea" v-model="applicationPlanForm.choseCollegeIdea"></el-input>
          </el-form-item>
          <el-form-item class="line_height_14 lx_sign_form_item" label="签证方案设计思路（包括资金如何准备、提供哪些特殊材料、申请时间节点等">
            <el-input placeholder="请输入" type="textarea" v-model="applicationPlanForm.signWay"></el-input>
          </el-form-item>
        </el-form>
        <!-- 分割线 -->
        <div class="lx_for_line">
          <div class="lx_for_line_inner"></div>
        </div>
        <!-- 分割线end -->
        <!-- 选校方案表单 -->
        <h2 class="lx_block_bg_change lx_block_position ">
          选校方案
        </h2>
        <el-row class="xx_tips">
          注：申请学校和专业，注明哪所是成行学校和专业
        </el-row>
        <el-table :data="xxTableData" stripe style="width: 100%">
          <el-table-column prop="school" label="学校" width="180">
            <template slot-scope="scope">
              <el-row class="lx_college_wapper lx_input_and_text">
                <el-input size="mini" v-model="scope.row.collegeName"></el-input>
                <!-- 文字按钮 -->
                <span class="lx_text_button_wapper">
                  <el-button size="mini" type="text" @click="otherDiaOpen('college')">选择</el-button>
                  <el-button size="mini" type="text" @click="otherClearData('college')">清除</el-button>
                </span>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column prop="major" label="专业" width="180">
            <template slot-scope="scope">
              <el-row class="lx_college_wapper lx_input_and_text">
                <el-input size="mini" v-model="scope.row.majorName"></el-input>
                <!-- 文字按钮 -->
                <span class="lx_text_button_wapper">
                  <el-button size="mini" type="text" @click="otherDiaOpen('major')">选择</el-button>
                  <el-button size="mini" type="text" @click="otherClearData('major')">清除</el-button>
                </span>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column prop="admissionResult" label="录取结果">
            <template slot-scope="scope">
              <el-select size="mini" v-model="scope.row.admissionResult">
                <template v-for="item in baseDataOptions.admissionResultOpts">
                  <el-option :label="item.name" :value="item.id" :key="item.name+item.id"></el-option>
                </template>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="ifCxYx" label="是否成行院校">
            <template slot-scope="scope">
              <el-select size="mini" v-model="scope.row.ifCxYx">
                <template v-for="item in baseDataOptions.cxYxOpts">
                  <el-option :label="item.name" :value="item.id" :key="item.name+item.id"></el-option>
                </template>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="scholarshipInfo" label="奖学金情况">
            <template slot-scope="scope">
              <el-input v-model="scope.row.scholarshipInfo"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="collegeCharacteristics" label="院校特色">
          </el-table-column>
          <el-table-column prop="" label="">
            <template slot-scope="scope" v-if="xxTableData.length>0">
              <el-button size="mini" @click="delTableItem(scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 增加按钮 -->
        <el-button class="lx_xx_btn" type="primary" plain size="mini" @click="addNewItem">增加</el-button>
        <!-- 选校方案表单end -->
        <!-- 分割线 -->
        <div class="lx_for_line">
          <div class="lx_for_line_inner"></div>
        </div>
        <!-- 分割线end -->
        <!-- 申请过程遇到的问题及申请心得 表单 -->
        <h2 class="lx_block_bg_change lx_block_position ">
          申请过程遇到的问题及申请心得
        </h2>
        <el-form :model="feelsForm" size="mini" label-width="100px">
          <el-form-item label="签证结果">
            <el-select size="mini" v-model="feelsForm.signResult">
              <template v-for="item in baseDataOptions.signResultOpts">
                <el-option :label="item.name" :value="item.id" :key="item.name+item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <!-- 多个textarea -->
          <el-row class="lx_inner_form_textarea lx_more_area_wapper">
            <template v-for="(item,index) in formsFeelsOpts">
              <el-form-item :label="item.label" :class="index===0 ? 'lx_inner_row' : ''" class="line_height_14">
                <el-input type="textarea" placeholder="请输入" :model="item.model"></el-input>
              </el-form-item>
            </template>
          </el-row>
          <!-- 多个textarea end-->
          <el-form-item label="接受案例采访">
            <el-select size="mini" v-model="feelsForm.caseInterview">
              <template v-for="item in baseDataOptions.caseInterviewOpts">
                <el-option :label="item.name" :value="item.id" :key="item.name+item.id"></el-option>
              </template>
            </el-select>
            <span class="xx_tips">*采访指的是采访顾问本人</span>
          </el-form-item>
          <!--  <el-form label="上传路径">
          </el-form> -->
        </el-form>
        <!-- 申请过程遇到的问题及申请心得 表单 end-->
        <!-- 选校方案 form-->
        <!-- 分割线 -->
        <div class="lx_for_line">
          <div class="lx_for_line_inner"></div>
        </div>
        <!-- 分割线end -->
        <!-- 申请过程遇到的问题及申请心得 表单 -->
        <h2 class="lx_block_bg_change lx_block_position ">
          选校方案
        </h2>
        <el-form label-width="100px">
          <el-form-item label="录取通知书"></el-form-item>
          <el-form-item label="PS/学习计划"></el-form-item>
          <el-form-item label="推荐信"></el-form-item>
          <el-form-item label="Essay"></el-form-item>
          <el-form-item label="资助信/资金来源说明" class="line_height_14"></el-form-item>
          <el-form-item label="收入证明"></el-form-item>
          <el-form-item label="护照页"></el-form-item>
          <el-form-item label="签证页"></el-form-item>
          <el-form-item label="学生照片"></el-form-item>
          <el-form-item label="其他"></el-form-item>
        </el-form>
        <!-- 选校方案 form end-->
        <!-- 分割线 -->
        <div class="lx_for_line">
          <div class="lx_for_line_inner"></div>
        </div>
        <!-- 分割线end -->
        <h2 class="lx_block_bg_change lx_block_position ">
          审批信息
        </h2>
        <!-- 审批信息 -->
        <el-form label-width="100px" :model="approvalInformationForm" class="lx_inner_form_textarea lx_information_wapper" size="mini">
          <el-row class="lx_invate_wapper">
            <el-col :span="12" class="lx_inner_line">
              <el-form-item label="申请课程" class="">
                <el-input v-model="approvalInformationForm.applicationCourses"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="推荐指数">
                <el-select size="mini" v-model="approvalInformationForm.recommendationIndex">
                  <template v-for="item in baseDataOptions.recommendationOpts">
                    <el-option :label="item.name" :value="item.id" :key="item.name+item.id"></el-option>
                  </template>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="名校案例">
                <el-select size="mini" v-model="approvalInformationForm.famousSchoolCase">
                  <template v-for="item in baseDataOptions.famousSchoolOpts">
                    <el-option :label="item.name" :value="item.id" :key="item.name+item.id"></el-option>
                  </template>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="案例疑难点">
            <el-input type="textarea" v-model="approvalInformationForm.difficultCases"></el-input>
          </el-form-item>
          <el-form-item label="案例特征">
            <el-input type="textarea" v-model="approvalInformationForm.caseCharacteristics"></el-input>
          </el-form-item>
          <el-form-item label="审批意见">
            <el-input type="textarea" v-model="approvalInformationForm.approvalOpinion"></el-input>
          </el-form-item>
        </el-form>
        <!-- 审批信息 end -->
        <!-- 分割线 -->
        <div class="lx_for_line">
          <div class="lx_for_line_inner"></div>
        </div>
        <!-- 分割线end -->
        <!-- 创建人 -->
        <el-row class="lx_creat_wapper">
          创建人:{{creater}}
          创建时间:{{createTime}}
        </el-row>
        <!-- 按钮 -->
        <el-row type="flex" justify="center">
          <el-button size="mini" @click="save" type="primary" plain>保存</el-button>
          <el-button size="mini" @click="post" plain>提交审批</el-button>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <!-- 选择院校弹窗 -->
    <choseCollege-dia :show.sync="collegeShowDia" @getSchool="getSchool"></choseCollege-dia>
    <!-- 选择专业弹窗 -->
    <choseMajor-dia :show.sync="majorShowDia" @getMajor="getMajor"></choseMajor-dia>
  </div>
</template>
<script type="text/ecmascript-6">
import "@/styles/anlikuReedit.scss";
// 选择院校弹窗
import choseCollegeDia from "@/components/anliku/choseCollegeDia"
// 选择专业弹窗
import choseMajorDia from "@/components/anliku/choseMajorDia"
export default {
  components: {
    choseCollegeDia,
    choseMajorDia
  },
  data() {
    return {
      creater: '二狗子', //创建人
      createTime: '2019-01-09', //创建时间
      collegeShowDia: false, //
      majorShowDia: false, //
      approvalInformationForm: { //审批信息 form
        applicationCourses: '', //申请课程
        recommendationIndex: '', //推荐指数
        famousSchoolCase: '', //名校案例
        difficultCases: '', //案例疑难点
        caseCharacteristics: '', //案例特征
        approvalOpinion: '', //审批意见

      },
      xxTableData: [ //选校方案data
        {
          school: '哈哈哈', //学校
          major: '历史', //专业
          admissionResult: 'ok', //录取结果
          ifCxYx: 'ok', //是否成行院校
          scholarshipInfo: 'qdqdq', //奖学金情况
          collegeCharacteristics: '11', //院校特色
          collegeName: '', //学校名称
          majorName: '', //专业名称
        }
      ],
      formsFeelsOpts: [{
        model: 'talkWithStudent',
        label: "与学生和家长沟通中是否出现困难，如何处理"
      }, {
        model: 'talkWithCollege',
        label: "与院校联系中是否出现困难，如何处理                        "
      }, {
        model: 'applicationMaterials',
        label: "申请材料准备中是否出现困难，如何处理                        "
      }, {
        model: 'visaApplication',
        label: "签证申请中是否出现困难，如何处理"
      }, {
        model: 'interviewGuidance',
        label: "面试辅导中是否出现波折，如何处理"
      }, {
        model: 'applicationProcess',
        label: "申请过程是否遇到其他困难，如何处理"
      }, {
        model: 'consultantExperience',
        label: "顾问心得与建议"
      }, {
        model: 'parentsVoice',
        label: "学生/家长感言或反馈（若有）"
      }, ],
      feelsForm: { //申请过程遇到的问题及申请心得 form
        signResult: '', //签证结果
        talkWithStudent: '', //与学生和家长沟通中是否出现困难，如何处理
        talkWithCollege: '', //与院校联系中是否出现困难，如何处理                        
        applicationMaterials: '', //申请材料准备中是否出现困难，如何处理                        
        visaApplication: '', //签证申请中是否出现困难，如何处理
        interviewGuidance: '', //面试辅导中是否出现波折，如何处理
        applicationProcess: '', //申请过程是否遇到其他困难，如何处理
        consultantExperience: '', //顾问心得与建议
        parentsVoice: '', //学生/家长感言或反馈（若有）
        caseInterview: '', //接受案例采访
        // uploadWay: '', //上传途径
      },
      //全局需要初始化的数据
      baseDataOptions: {
        companiesOpts: [{
          name: '新通',
          id: 1212
        }],
        lxTypeOpts: [{ //留学类型 select初始数据
          name: '海外投资',
          id: 1212
        }],
        applicantCouOpts: [ //申请国家 select初始数据
          {
            name: '美国',
            id: 'US'
          }
        ],
        caseTypeOpts: [{ //案例类别 select初始数据
          name: '案例123',
          id: 'US'
        }],
        admissionResultOpts: [{ // 录取结果 select初始数据
          name: '已录取',
          id: 'ok'
        }],
        cxYxOpts: [{ //是否成形院校 select初始数据
          name: '已成型',
          id: 'ok'
        }],
        recommendationOpts: [ // 推荐指数 select初始数据
          {
            name: '100颗星',
            id: 'ok'
          }
        ],
        famousSchoolOpts: [ //名校案例 select初始数据
          {
            name: '案例    aaa',
            id: 'no'
          }
        ],
        signResultOpts: [ //签证结果 select初始数据 
          {
            name: '拒绝了',
            id: 'no'
          }
        ],

        caseInterviewOpts: [ //接受案例采访
          {
            name: '案例1',
            id: 'wqw'
          }
        ]


      },
      caseNum: 121212, //案例号
      caseStatus: '草稿', //案例状态
      baseInfoForm: { //基本案例信息表单
        caseName: '', //案例名称
        companyid: '', //公司
        contractNumber: '', //合同号
        signData: '', // 签约时间
        yjCxData: '', // 预计成型时间
        lxTypes: '', // 留学类别
        applicantCountry: '', // 申请国家
        caseType: '', // 案例类别
        signingConsultant: '', // 签约顾问

      },
      studentInfoForm: { //学生背景表单
        onschool: '', //毕业/在读学校
        achievement: '', //成绩情况（GPA)
        nowEducation: '', //目前学历
        chineseMajor: '', //国内专业
        languageInfo: '', //语言情况
        parentInfo: '', //父母工作和收入
        guaranteeMoneyInfo: '', //担保金情况
      },
      studentMoreInfoForm: { //学生背景分析
        applicantAdvantage: "", //申请人优势
        disadvantageApplicants: '', //申请人劣势
        studentsCharacteristics: '', //学生性格特点

      },
      applicationPlanForm: { //申请方案&签证方案设计与分析
        howSetStudentInfo: '', //如何对学生的优劣势扬长避短
        choseCollegeIdea: '', //选择申请院校的思路
        signWay: '', //签证方案设计思路（包括资金如何准备、提供哪些特殊材料、申请时间节点等
      },
      // 临时数据，作为回显等使用，不提交
      tempData: {
        adviserName: '', //顾问姓名
        majorName: '', //专业名称
        studentName: '', //学生姓名
      },
    }

  },
  mounted() {

  },
  methods: {
    // 学校、专业组件的弹窗打开
    otherDiaOpen(type) {
      console.log(type)
      // type: college院校,major专业
      if (type === 'college') {
        this.collegeShowDia = true
      } else if (type === 'major') {
        this.majorShowDia = true
      }
    },
    // 学校、专业组件的数据清除
    otherClearData(type) {
      console.log(type)
    },
    getTemp(scope) {
      console.log(scope)
    },
    // 保存
    save() {},
    // 提交审批
    post() {},
    // 选校方案-新增
    addNewItem() {
      this.xxTableData.push({
        school: '哈哈哈', //学校
        major: '历史', //专业
        admissionResult: 'ok', //录取结果
        ifCxYx: 'ok', //是否成行院校
        scholarshipInfo: 'qdqdq', //奖学金情况
        collegeCharacteristics: '11', //院校特色
        collegeName: '', //学校名称
        majorName: '', //专业名称
      })

    },
    // 查看offer按钮
    previewOffer() {},
    // 编辑offer按钮
    reeditOffer() {},
    // 顾问等人员的 打开弹窗
    diaOpen(type) {

    },
    // 顾问等人员的数据清除
    clearData(type) {

    },
    delTableItem(scope) { //选校方案内部的删除按钮
      console.log(scope)
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.xxTableData.splice(scope.$index, 1)
      }).catch(() => {

      });
    },
    getSchool() {},
    getMajor() {},
  },
  watch: {

  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
</style>
