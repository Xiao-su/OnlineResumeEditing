import { UploadOutlined } from '@ant-design/icons';
import {
  Col,
  Row,
  Card,
  Tabs,
  Divider,
  Descriptions,
} from 'antd';
import React, { Component, Fragment } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import { getResumeType, hasOverseaEdu, getCollegeType } from '@/utils/utils';
import styles from './style.less';

const { TabPane } = Tabs;

class ResumeAnalysis extends Component<any, any> {
  state: any = {};

  componentDidMount() {
    this.fetchAnalyticalResults();
  }

  fetchAnalyticalResults(){
    const { dispatch } = this.props;
    dispatch({
      type: 'resumeAnalysis/fetchResumeInformation',
      payload: {}
    });
    dispatch({
      type: 'resumeAnalysis/fetchResumeBaseInfo',
      payload: {}
    });
    dispatch({
      type: 'resumeAnalysis/fetchExpectToWork',
      payload: {}
    });
    dispatch({
      type: 'resumeAnalysis/fetchEducationExperience',
      payload: {}
    });
    dispatch({
      type: 'resumeAnalysis/fetchWorksExperience',
      payload: {}
    });
    dispatch({
      type: 'resumeAnalysis/fetchProjectExperienc',
      payload: {}
    });
    dispatch({
      type: 'resumeAnalysis/fetchSkillsLis',
      payload: {}
    });
    dispatch({
      type: 'resumeAnalysis/fetchSelfEvaluation',
      payload: {}
    });
  }

  componentWillUnmount() {}

  tabChangeHandle(key: any) {}


  renderAnalysis() {
    const {
      resumeInfor,
      resumeBaseInfo,
      contactInfo,
      expectToWork,
      educationExp,
      worksExp,
      projectExp,
      skillsLis,
      selfEvaluation
    } = this.props;


    return (
      <div>
        <Descriptions title="简历信息" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="简历类型">{getResumeType(resumeInfor['resume_type'])}</Descriptions.Item>
          <Descriptions.Item label="简历来源">{resumeInfor['resume_source']}</Descriptions.Item>
          <Descriptions.Item label="简历id">{resumeInfor['resume_id']}</Descriptions.Item>
          <Descriptions.Item label="简历文件名">{resumeInfor['resume_name']}</Descriptions.Item>
          <Descriptions.Item label="简历解析时间">{resumeInfor['resume_parse_time']}</Descriptions.Item>
          <Descriptions.Item label="简历更新时间">{resumeInfor['resume_update_time']}</Descriptions.Item>
          <Descriptions.Item label="简历完整度">{resumeInfor['resume_integrity']}%</Descriptions.Item>
        </Descriptions>
        <Divider style={{ marginBottom: 32 }} />
        <Descriptions title="基础信息" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="姓名">{resumeBaseInfo['name']}</Descriptions.Item>
          <Descriptions.Item label="姓氏">{resumeBaseInfo['surname']}</Descriptions.Item>
          <Descriptions.Item label="性别">{resumeBaseInfo['gender']}</Descriptions.Item>
          <Descriptions.Item label="年龄">{resumeBaseInfo['age']}</Descriptions.Item>
          <Descriptions.Item label="身高">{resumeBaseInfo['height']}</Descriptions.Item>
          <Descriptions.Item label="体重">{resumeBaseInfo['weight']}</Descriptions.Item>
          <Descriptions.Item label="婚姻状态">{resumeBaseInfo['marital_status']}</Descriptions.Item>
          <Descriptions.Item label="出生日期">{resumeBaseInfo['birthday']}</Descriptions.Item>
          <Descriptions.Item label="户口地址">{resumeBaseInfo['hukou_address']}</Descriptions.Item>
          <Descriptions.Item label="户口地址（规范化）">{resumeBaseInfo['hukou_address_norm']}</Descriptions.Item>
          <Descriptions.Item label="籍贯地址">{resumeBaseInfo['hometown_address']}</Descriptions.Item>
          <Descriptions.Item label="籍贯地址（规范化）">{resumeBaseInfo['hometown_address_norm']}</Descriptions.Item>
          <Descriptions.Item label="身份证号">{resumeBaseInfo['id_card']}</Descriptions.Item>
          <Descriptions.Item label="民族">{resumeBaseInfo['race']}</Descriptions.Item>
          <Descriptions.Item label="国籍">{resumeBaseInfo['nationality']}</Descriptions.Item>
          <Descriptions.Item label="政治面貌">{resumeBaseInfo['polit_status']}</Descriptions.Item>
          <Descriptions.Item label="语言能力">{resumeBaseInfo['languages']}</Descriptions.Item>
          <Descriptions.Item label="英语水平">{resumeBaseInfo['english_level']}</Descriptions.Item>
          <Descriptions.Item label="计算机水平">{resumeBaseInfo['computer_level']}</Descriptions.Item>
          <Descriptions.Item label="博客/主页地址">{resumeBaseInfo['blog']}</Descriptions.Item>
          <Descriptions.Item label="工作年限（自填或从工作经历推断）">{resumeBaseInfo['work_year']}</Descriptions.Item>
          <Descriptions.Item label="工作年限（规范化）">{resumeBaseInfo['work_year_norm']}</Descriptions.Item>
          <Descriptions.Item label="工作年限（从工作经历里推断）">{resumeBaseInfo['work_year_inf']}</Descriptions.Item>
          <Descriptions.Item label="参加工作时间（自填或从工作经历推断）">{resumeBaseInfo['work_start_time']}</Descriptions.Item>
          <Descriptions.Item label="参加工作时间（从工作经历推断）">{resumeBaseInfo['work_start_time_inf']}</Descriptions.Item>
          <Descriptions.Item label="当前职位">{resumeBaseInfo['work_position']}</Descriptions.Item>
          <Descriptions.Item label="当前单位">{resumeBaseInfo['work_company']}</Descriptions.Item>
          <Descriptions.Item label="所处行业">{resumeBaseInfo['work_industry']}</Descriptions.Item>
          <Descriptions.Item label="在职状态">{resumeBaseInfo['work_status']}</Descriptions.Item>
          <Descriptions.Item label="当前薪资">{resumeBaseInfo['work_salary']}</Descriptions.Item>
          <Descriptions.Item label="当前月薪(下限)">{resumeBaseInfo['work_salary_min']}</Descriptions.Item>
          <Descriptions.Item label="当前月薪(上限)">{resumeBaseInfo['work_salary_max']}</Descriptions.Item>
          <Descriptions.Item label="工作地点">{resumeBaseInfo['work_location']}</Descriptions.Item>
          <Descriptions.Item label="工作地点（规范化）">{resumeBaseInfo['work_location_norm']}</Descriptions.Item>
          <Descriptions.Item label="工作性质">{resumeBaseInfo['work_job_nature']}</Descriptions.Item>
          <Descriptions.Item label="有否海外留学经历">{hasOverseaEdu(resumeBaseInfo['has_oversea_edu'])}</Descriptions.Item>
          <Descriptions.Item label="有否海外工作经历">{hasOverseaEdu(resumeBaseInfo['has_oversea_exp'])}</Descriptions.Item>
          <Descriptions.Item label="毕业时间">{resumeBaseInfo['grad_time']}</Descriptions.Item>
          <Descriptions.Item label="毕业学校">{resumeBaseInfo['college']}</Descriptions.Item>
          <Descriptions.Item label="毕业学校类型">{getCollegeType(resumeBaseInfo['college_type'])}</Descriptions.Item>
          <Descriptions.Item label="毕业学校排名">{resumeBaseInfo['college_rank']}</Descriptions.Item>
          <Descriptions.Item label="毕业院系">{resumeBaseInfo['college_dept']}</Descriptions.Item>
          <Descriptions.Item label="所学专业">{resumeBaseInfo['major']}</Descriptions.Item>
          <Descriptions.Item label="学历">{resumeBaseInfo['degree']}</Descriptions.Item>
          <Descriptions.Item label="是否统招">{resumeBaseInfo['recruit']}</Descriptions.Item>
        </Descriptions>
        <Divider style={{ marginBottom: 32 }} />
        <Descriptions title="联系方式" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="邮箱">{contactInfo['email']}</Descriptions.Item>
          <Descriptions.Item label="电话号码">{contactInfo['phone']}</Descriptions.Item>
          <Descriptions.Item label="QQ号">{contactInfo['qq']}</Descriptions.Item>
          <Descriptions.Item label="微信号">{contactInfo['weixin']}</Descriptions.Item>
          <Descriptions.Item label="邮编">{contactInfo['postal_code']}</Descriptions.Item>
          <Descriptions.Item label="所在城市">{contactInfo['city']}</Descriptions.Item>
          <Descriptions.Item label="所在城市（规范化）">{contactInfo['city_norm']}</Descriptions.Item>
          <Descriptions.Item label="当前所在地">{contactInfo['living_address']}</Descriptions.Item>
          <Descriptions.Item label="当前所在地（规范化）">{contactInfo['living_address_norm']}</Descriptions.Item>
        </Descriptions>
        <Divider style={{ marginBottom: 32 }} />
        <Descriptions title="期望工作" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="期望工作">{expectToWork['expect_job']}</Descriptions.Item>
          <Descriptions.Item label="期望工作单位">{expectToWork['expect_cpy']}</Descriptions.Item>
          <Descriptions.Item label="期望薪资">{expectToWork['expect_salary']}</Descriptions.Item>
          <Descriptions.Item label="期望薪资（下限）">{expectToWork['expect_salary_min']}</Descriptions.Item>
          <Descriptions.Item label="期望薪资（上限）">{expectToWork['expect_salary_max']}</Descriptions.Item>
          <Descriptions.Item label="期望行业">{expectToWork['expect_industry']}</Descriptions.Item>
          <Descriptions.Item label="到岗时间">{expectToWork['expect_time']}</Descriptions.Item>
          <Descriptions.Item label="期望工作性质">{expectToWork['expect_jnature']}</Descriptions.Item>
          <Descriptions.Item label="当前离职/在职状态">{expectToWork['expect_jstatus']}</Descriptions.Item>
          <Descriptions.Item label="期望工作地址">{expectToWork['expect_jlocation']}</Descriptions.Item>
          <Descriptions.Item label="期望工作地址（规范化）">{expectToWork['expect_jlocation_norm']}</Descriptions.Item>
        </Descriptions>
        <Divider style={{ marginBottom: 32 }} />
        
        <Descriptions title="教育经历" style={{ marginBottom: 32 }}>
          {educationExp.map((eduExp: any)=>(
              <Fragment>
                <Descriptions.Item label="开始时间">{eduExp['start_date']}</Descriptions.Item>
                <Descriptions.Item label="结束时间">{eduExp['end_date']}</Descriptions.Item>
                <Descriptions.Item label="学校">{eduExp['edu_college']}</Descriptions.Item>
                <Descriptions.Item label="学校类型">{eduExp['edu_college_type']}</Descriptions.Item>
                <Descriptions.Item label="学校排名">{eduExp['edu_college_rank']}</Descriptions.Item>
                <Descriptions.Item label="院系">{eduExp['edu_college_dept']}</Descriptions.Item>
                <Descriptions.Item label="专业">{eduExp['edu_major']}</Descriptions.Item>
                <Descriptions.Item label="是否统招">{eduExp['edu_recruit']}</Descriptions.Item>
                <Descriptions.Item label="gpa成绩">{eduExp['edu_gpa']}</Descriptions.Item>
                <Descriptions.Item label="学历">{eduExp['edu_degree']}</Descriptions.Item>
                <Descriptions.Item label="学历（规范化）">{eduExp['edu_degree_norm']}</Descriptions.Item>
              </Fragment>
          ))}
        </Descriptions>
        <Divider style={{ marginBottom: 32 }} />

        <Descriptions title="工作经历" style={{ marginBottom: 32 }}>
          {worksExp.map((wExp: any)=>(
              <Fragment>
                <Descriptions.Item label="开始时间">{wExp['start_date']}</Descriptions.Item>
                <Descriptions.Item label="结束时间">{wExp['end_date']}</Descriptions.Item>
                <Descriptions.Item label="公司">{wExp['job_cpy']}</Descriptions.Item>
                <Descriptions.Item label="公司性质">{wExp['job_cpy_nature']}</Descriptions.Item>
                <Descriptions.Item label="公司规模">{wExp['job_cpy_size']}</Descriptions.Item>
                <Descriptions.Item label="公司描述">{wExp['job_cpy_desc']}</Descriptions.Item>
                <Descriptions.Item label="行业">{wExp['job_industry']}</Descriptions.Item>
                <Descriptions.Item label="职位">{wExp['job_position']}</Descriptions.Item>
                <Descriptions.Item label="所在部门">{wExp['job_dept']}</Descriptions.Item>
                <Descriptions.Item label="工作性质">{wExp['job_nature']}</Descriptions.Item>
                <Descriptions.Item label="工作薪资">{wExp['job_salary']}</Descriptions.Item>
                <Descriptions.Item label="下属人数">{wExp['job_staff']}</Descriptions.Item>
                <Descriptions.Item label="汇报对象">{wExp['job_report_to']}</Descriptions.Item>
                <Descriptions.Item label="工作地点">{wExp['job_location']}</Descriptions.Item>
                <Descriptions.Item label="离职原因">{wExp['job_why_leave']}</Descriptions.Item>
                <Descriptions.Item label="持续时间">{wExp['job_duaraton']}</Descriptions.Item>
                <Descriptions.Item label="工作能力">{wExp['job_capacity']}</Descriptions.Item>
                <Descriptions.Item label="工作内容">{wExp['job_content']}</Descriptions.Item>
              </Fragment>
          ))}
        </Descriptions>
        <Divider style={{ marginBottom: 32 }} />
        <Descriptions title="项目经历" style={{ marginBottom: 32 }}>
          {projectExp.map((proExp: any)=>(
              <Fragment>
                <Descriptions.Item label="开始时间">{proExp['start_date']}</Descriptions.Item>
                <Descriptions.Item label="结束时间">{proExp['end_date']}</Descriptions.Item>
                <Descriptions.Item label="项目名称">{proExp['proj_name']}</Descriptions.Item>
                <Descriptions.Item label="所在公司">{proExp['proj_cpy']}</Descriptions.Item>
                <Descriptions.Item label="担任职位">{proExp['proj_position']}</Descriptions.Item>
                <Descriptions.Item label="项目内容">{proExp['proj_content']}</Descriptions.Item>
                <Descriptions.Item label="项目职责">{proExp['proj_resp']}</Descriptions.Item>
              </Fragment>
          ))}
        </Descriptions>

        <Divider style={{ marginBottom: 32 }} />
        <Descriptions title="技能列表" style={{ marginBottom: 32 }}>
          {skillsLis.map((skill: any)=>(
              <Fragment>
                <Descriptions.Item label="技能名称">{skill['skills_name']}</Descriptions.Item>
                <Descriptions.Item label="熟练程度">{skill['skills_level']}</Descriptions.Item>
                <Descriptions.Item label="技能使用时间">{skill['skills_time']}</Descriptions.Item>
              </Fragment>
          ))}
        </Descriptions>

        <Divider style={{ marginBottom: 32 }} />
        <Descriptions title="自我评价" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="项目职责">{selfEvaluation['content']}</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }

  render() {
    const {} = this.state;
    const {} = this.props;
    console.log("this.props:",this.props);

    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Tabs onChange={this.tabChangeHandle} type="card">
            <TabPane tab="解析结果" key="1">
              {this.renderAnalysis()}
            </TabPane>
            <TabPane tab="原始文本" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="智能评估" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="人岗匹配" key="4">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect(
  ({
    resumeAnalysis,
    loading,
  }: {
    resumeAnalysis: any;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    resumeInfor: resumeAnalysis['resumeInfor'],
    resumeBaseInfo: resumeAnalysis['resumeBaseInfo'],
    contactInfo: resumeAnalysis['contactInfo'],
    expectToWork: resumeAnalysis['expectToWork'],
    educationExp: resumeAnalysis['educationExp'],
    worksExp: resumeAnalysis['worksExp'],
    projectExp: resumeAnalysis['projectExp'],
    skillsLis: resumeAnalysis['skillsLis'],
    selfEvaluation: resumeAnalysis['selfEvaluation'],
    loading: loading.effects['resumeAnalysis/fetchResumeInformation'],
  }),
)(ResumeAnalysis);
