package com.shinyway.lx.model.entity.caseLib;
import com.shinyway.lx.model.entity.base.BaseAbstractEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * 案例关联院校表 Model
 * @Copyright 
 * @author ZHD
 * @date 2018-12-21
 */ 
 @ApiModel(value="T_CASE_COLLEGE",description="")
public class CaseCollege extends BaseAbstractEntity
{
	private static final long serialVersionUID = 1L;
	/** 案例ID */
	private String caseId;
	/** 院校ID */
	private String collegeId;
	/** 专业 */
	private String specialty;
	/** 录取结果 */
	private String admitResult;
	/** 是否成行院校	 */
	private java.math.BigDecimal isCx;
	/** 院校名称 */
	private String collegeName;
	/** 院校特色 */
	private String collegeFeatures;
	/** 奖学金情况 */
	private String scholarship;
	/** 专业ID */
	private String specialtyId;
	/** 专业备注 */
	private String specialtyMemo;
	/** 案例类型 */
	private String caseType;
	
	public void setCaseId(String caseId) {
		this.caseId = caseId;
	}
	
	public String getCaseId() {
		return this.caseId;
	}
	
	public void setCollegeId(String collegeId) {
		this.collegeId = collegeId;
	}
	
	public String getCollegeId() {
		return this.collegeId;
	}
	
	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}
	
	public String getSpecialty() {
		return this.specialty;
	}
	
	public void setAdmitResult(String admitResult) {
		this.admitResult = admitResult;
	}
	
	public String getAdmitResult() {
		return this.admitResult;
	}
	
	public void setIsCx(java.math.BigDecimal isCx) {
		this.isCx = isCx;
	}
	
	public java.math.BigDecimal getIsCx() {
		return this.isCx;
	}
	
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	
	public String getCollegeName() {
		return this.collegeName;
	}
	
	public void setCollegeFeatures(String collegeFeatures) {
		this.collegeFeatures = collegeFeatures;
	}
	
	public String getCollegeFeatures() {
		return this.collegeFeatures;
	}
	
	public void setScholarship(String scholarship) {
		this.scholarship = scholarship;
	}
	
	public String getScholarship() {
		return this.scholarship;
	}
	
	public void setSpecialtyId(String specialtyId) {
		this.specialtyId = specialtyId;
	}
	
	public String getSpecialtyId() {
		return this.specialtyId;
	}
	
	public void setSpecialtyMemo(String specialtyMemo) {
		this.specialtyMemo = specialtyMemo;
	}
	
	public String getSpecialtyMemo() {
		return this.specialtyMemo;
	}
	
	public void setCaseType(String caseType) {
		this.caseType = caseType;
	}
	
	public String getCaseType() {
		return this.caseType;
	}
}
package com.shinyway.lx.model.entity.caseLib;
import com.shinyway.lx.model.entity.base.BaseAbstractEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Date;

/**
 * 案例查询主表 Model
 * @Copyright 
 * @author ZHD
 * @date 2018-12-21
 */ 
 @ApiModel(value="T_CASE_ANALYSIS",description="")
public class CaseAnalysis extends BaseAbstractEntity
{
	private static final long serialVersionUID = 1L;
	/** 案例ID */
	private String caseId;
	/** 案例类型 */
	private String caseType;
	/** 案例名称 */
	private String caseName;
	/** 公司ID */
	private String companyId;
	/** 学生姓名 */
	private String stuName;
	/** 国家code */
	private String countryCode;
	/** 签约日期 */
	private Date signDate;
	/** 成行时间 */
	private Date cxDate;
	/** 毕业/在读学校 */
	private String graduateSchool;
	/** 成绩情况 */
	private String scoreInfo;
	/** 语言情况 */
	private String languageInfo;
	/** 父母工作和收入 */
	private String parentsWorkIncome;
	/** 担保金情况 */
	private String guaranteesInfo;
	/** 申请人优势 */
	private String superiority;
	/** 申请人劣势 */
	private String inferior;
	/** 选择申请院校的思路 */
	private String fasj;
	/** 签证方案设计思路（包括资金如何准备、提供哪些特殊材料、申请时间节点等） */
	private java.sql.Clob signPlan;
	/** 顾问心得与建议 */
	private String experience;
	/** 状态(1:草稿,2:审核中,3:驳回,4:审核通过,5:撤回) */
	private java.math.BigDecimal status;
	/** 接受案例采访 */
	private java.math.BigDecimal isInterview;
	/** 创建人名称 */
	private String creatername;
	/** 最后修改人ID */
	private String modifier;
	/** 最后修改人名称 */
	private String modifiername;
	/** 最后修改时间 */
	private Date modified;
	/** 顾问ID */
	private String consultantId;
	/** 顾问姓名 */
	private String consultantName;
	/** 申请课程 */
	private String caseApply;
	/** 名校案例备注 */
	private String caseFamousMemo;
	/** 案例疑难点 */
	private String caseDifficult;
	/** 案例特征 */
	private String caseFeatures;
	/** 推荐指数 */
	private String recommendIndex;
	/** 文件路径 */
	private String filePath;
	/** 文件名称 */
	private String fileName;
	/** 学生ID */
	private String stuId;
	/** 签证结果 */
	private String signResult;
	/** 该案例对应的文件列表(<br>隔开) */
	private String attaches;
	/** 是否名校案例 */
	private java.math.BigDecimal isCaseFamous;
	/** 审批意见 */
	private String caseApplyMemo;
	/** 预计成行时间 */
	private Date yjCxDate;
	/** 学生性格特点 */
	private String stuPersonalities;
	/** 学生/家长感言或反馈 */
	private String feedback;
	/** 与学生和家长沟通中是否出现困难，如何处理 */
	private String communicationDifficult;
	/** 与院校联系中是否出现困难，如何处理 */
	private String yxLxDifficult;
	/** 申请材料准备中是否出现困难，如何处理 */
	private String signZlDifficult;
	/** 签证申请中是否出现困难，如何处理 */
	private String signDifficult;
	/** 面试辅导中是否出现波折，如何处理 */
	private String viewPxDifficult;
	/** 申请过程是否遇到其他困难，如何处理 */
	private String otherDifficult;
	/** 如何对学生的优劣势扬长避短 */
	private String avoidWeaknesses;
	/** 国内专业 */
	private String localSpecialty;
	/** 目前学历 */
	private String education;
	/** 留学类别 */
	private String lxType;
	/** 合同号 */
	private String conNo;
	/** 签约顾问姓名 */
	private String consultantNameQy;
	/** 签约顾问ID */
	private String consultantIdQy;
	
	public void setCaseId(String caseId) {
		this.caseId = caseId;
	}
	
	public String getCaseId() {
		return this.caseId;
	}
	
	public void setCaseType(String caseType) {
		this.caseType = caseType;
	}
	
	public String getCaseType() {
		return this.caseType;
	}
	
	public void setCaseName(String caseName) {
		this.caseName = caseName;
	}
	
	public String getCaseName() {
		return this.caseName;
	}
	
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	
	public String getCompanyId() {
		return this.companyId;
	}
	
	public void setStuName(String stuName) {
		this.stuName = stuName;
	}
	
	public String getStuName() {
		return this.stuName;
	}
	
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	
	public String getCountryCode() {
		return this.countryCode;
	}
	
	public void setSignDate(Date signDate) {
		this.signDate = signDate;
	}
	
	public Date getSignDate() {
		return this.signDate;
	}
	
	public void setCxDate(Date cxDate) {
		this.cxDate = cxDate;
	}
	
	public Date getCxDate() {
		return this.cxDate;
	}
	
	public void setGraduateSchool(String graduateSchool) {
		this.graduateSchool = graduateSchool;
	}
	
	public String getGraduateSchool() {
		return this.graduateSchool;
	}
	
	public void setScoreInfo(String scoreInfo) {
		this.scoreInfo = scoreInfo;
	}
	
	public String getScoreInfo() {
		return this.scoreInfo;
	}
	
	public void setLanguageInfo(String languageInfo) {
		this.languageInfo = languageInfo;
	}
	
	public String getLanguageInfo() {
		return this.languageInfo;
	}
	
	public void setParentsWorkIncome(String parentsWorkIncome) {
		this.parentsWorkIncome = parentsWorkIncome;
	}
	
	public String getParentsWorkIncome() {
		return this.parentsWorkIncome;
	}
	
	public void setGuaranteesInfo(String guaranteesInfo) {
		this.guaranteesInfo = guaranteesInfo;
	}
	
	public String getGuaranteesInfo() {
		return this.guaranteesInfo;
	}
	
	public void setSuperiority(String superiority) {
		this.superiority = superiority;
	}
	
	public String getSuperiority() {
		return this.superiority;
	}
	
	public void setInferior(String inferior) {
		this.inferior = inferior;
	}
	
	public String getInferior() {
		return this.inferior;
	}
	
	public void setFasj(String fasj) {
		this.fasj = fasj;
	}
	
	public String getFasj() {
		return this.fasj;
	}
	
	public void setSignPlan(java.sql.Clob signPlan) {
		this.signPlan = signPlan;
	}
	
	public java.sql.Clob getSignPlan() {
		return this.signPlan;
	}
	
	public void setExperience(String experience) {
		this.experience = experience;
	}
	
	public String getExperience() {
		return this.experience;
	}
	
	public void setStatus(java.math.BigDecimal status) {
		this.status = status;
	}
	
	public java.math.BigDecimal getStatus() {
		return this.status;
	}
	
	public void setIsInterview(java.math.BigDecimal isInterview) {
		this.isInterview = isInterview;
	}
	
	public java.math.BigDecimal getIsInterview() {
		return this.isInterview;
	}
	
	public void setCreatername(String creatername) {
		this.creatername = creatername;
	}
	
	public String getCreatername() {
		return this.creatername;
	}
	
	public void setModifier(String modifier) {
		this.modifier = modifier;
	}
	
	public String getModifier() {
		return this.modifier;
	}
	
	public void setModifiername(String modifiername) {
		this.modifiername = modifiername;
	}
	
	public String getModifiername() {
		return this.modifiername;
	}
	
	public void setModified(Date modified) {
		this.modified = modified;
	}
	
	public Date getModified() {
		return this.modified;
	}
	
	public void setConsultantId(String consultantId) {
		this.consultantId = consultantId;
	}
	
	public String getConsultantId() {
		return this.consultantId;
	}
	
	public void setConsultantName(String consultantName) {
		this.consultantName = consultantName;
	}
	
	public String getConsultantName() {
		return this.consultantName;
	}
	
	public void setCaseApply(String caseApply) {
		this.caseApply = caseApply;
	}
	
	public String getCaseApply() {
		return this.caseApply;
	}
	
	public void setCaseFamousMemo(String caseFamousMemo) {
		this.caseFamousMemo = caseFamousMemo;
	}
	
	public String getCaseFamousMemo() {
		return this.caseFamousMemo;
	}
	
	public void setCaseDifficult(String caseDifficult) {
		this.caseDifficult = caseDifficult;
	}
	
	public String getCaseDifficult() {
		return this.caseDifficult;
	}
	
	public void setCaseFeatures(String caseFeatures) {
		this.caseFeatures = caseFeatures;
	}
	
	public String getCaseFeatures() {
		return this.caseFeatures;
	}
	
	public void setRecommendIndex(String recommendIndex) {
		this.recommendIndex = recommendIndex;
	}
	
	public String getRecommendIndex() {
		return this.recommendIndex;
	}
	
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	
	public String getFilePath() {
		return this.filePath;
	}
	
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
	public String getFileName() {
		return this.fileName;
	}
	
	public void setStuId(String stuId) {
		this.stuId = stuId;
	}
	
	public String getStuId() {
		return this.stuId;
	}
	
	public void setSignResult(String signResult) {
		this.signResult = signResult;
	}
	
	public String getSignResult() {
		return this.signResult;
	}
	
	public void setAttaches(String attaches) {
		this.attaches = attaches;
	}
	
	public String getAttaches() {
		return this.attaches;
	}
	
	public void setIsCaseFamous(java.math.BigDecimal isCaseFamous) {
		this.isCaseFamous = isCaseFamous;
	}
	
	public java.math.BigDecimal getIsCaseFamous() {
		return this.isCaseFamous;
	}
	
	public void setCaseApplyMemo(String caseApplyMemo) {
		this.caseApplyMemo = caseApplyMemo;
	}
	
	public String getCaseApplyMemo() {
		return this.caseApplyMemo;
	}
	
	public void setYjCxDate(Date yjCxDate) {
		this.yjCxDate = yjCxDate;
	}
	
	public Date getYjCxDate() {
		return this.yjCxDate;
	}
	
	public void setStuPersonalities(String stuPersonalities) {
		this.stuPersonalities = stuPersonalities;
	}
	
	public String getStuPersonalities() {
		return this.stuPersonalities;
	}
	
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	
	public String getFeedback() {
		return this.feedback;
	}
	
	public void setCommunicationDifficult(String communicationDifficult) {
		this.communicationDifficult = communicationDifficult;
	}
	
	public String getCommunicationDifficult() {
		return this.communicationDifficult;
	}
	
	public void setYxLxDifficult(String yxLxDifficult) {
		this.yxLxDifficult = yxLxDifficult;
	}
	
	public String getYxLxDifficult() {
		return this.yxLxDifficult;
	}
	
	public void setSignZlDifficult(String signZlDifficult) {
		this.signZlDifficult = signZlDifficult;
	}
	
	public String getSignZlDifficult() {
		return this.signZlDifficult;
	}
	
	public void setSignDifficult(String signDifficult) {
		this.signDifficult = signDifficult;
	}
	
	public String getSignDifficult() {
		return this.signDifficult;
	}
	
	public void setViewPxDifficult(String viewPxDifficult) {
		this.viewPxDifficult = viewPxDifficult;
	}
	
	public String getViewPxDifficult() {
		return this.viewPxDifficult;
	}
	
	public void setOtherDifficult(String otherDifficult) {
		this.otherDifficult = otherDifficult;
	}
	
	public String getOtherDifficult() {
		return this.otherDifficult;
	}
	
	public void setAvoidWeaknesses(String avoidWeaknesses) {
		this.avoidWeaknesses = avoidWeaknesses;
	}
	
	public String getAvoidWeaknesses() {
		return this.avoidWeaknesses;
	}
	
	public void setLocalSpecialty(String localSpecialty) {
		this.localSpecialty = localSpecialty;
	}
	
	public String getLocalSpecialty() {
		return this.localSpecialty;
	}
	
	public void setEducation(String education) {
		this.education = education;
	}
	
	public String getEducation() {
		return this.education;
	}
	
	public void setLxType(String lxType) {
		this.lxType = lxType;
	}
	
	public String getLxType() {
		return this.lxType;
	}
	
	public void setConNo(String conNo) {
		this.conNo = conNo;
	}
	
	public String getConNo() {
		return this.conNo;
	}
	
	public void setConsultantNameQy(String consultantNameQy) {
		this.consultantNameQy = consultantNameQy;
	}
	
	public String getConsultantNameQy() {
		return this.consultantNameQy;
	}
	
	public void setConsultantIdQy(String consultantIdQy) {
		this.consultantIdQy = consultantIdQy;
	}
	
	public String getConsultantIdQy() {
		return this.consultantIdQy;
	}
}