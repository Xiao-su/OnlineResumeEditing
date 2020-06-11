import { Request, Response } from 'express';
export interface resumeInforData{
  resume_type: string, 
  resume_source: string,
  resume_id: string,
  resume_name: string,
  resume_parse_time: string,
  resume_update_time: string,
  resume_integrity: string,
}


export interface resumeBaseInfo{
  name: string,
  surname: string,
  gender: string,
  age: string,
  height: string,
  weight: string,
  marital_status: string,
  birthday: string,
  hukou_address: string,
  hukou_address_norm: string,
  id_card: string,
  race: string,
  nationality: string,
  polit_status: string,
  languages: string,
  english_level: string,
  computer_level: string,
  blog: string,
  work_year: string,
  work_year_norm: string,
  work_year_inf: string,
  work_start_time: string,
  work_start_time_inf: string,
  work_position: string,
  work_company: string,
  work_industry: string,
  work_status: string,
  work_salary: string,
  work_salary_min: string,
  work_salary_max: string,
  work_location: string,
  work_location_norm: string,
  work_job_nature: string,
  has_oversea_edu: string,
  has_oversea_exp: string,
  grad_time: string,
  college: string,
  college_type: string,
  college_rank: string,
  college_dept: string,
  major: string,
  degree: string,
  recruit: string,
  technology_direction: string,
}

/**
 * 返回简历信息列表
 * @param req 
 * @param res 
 */
const getResumeList = (req: Request, res: Response) => {
  const result = [
    {
      id: 123,
      name: '张三',
      age: '23',
      birthday: '2019.10.02',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '0',
      technology_direction: '技术方向',
      job_interview: '前端开发',
      evaluation_remarks: '考评备注',
    },
    {
      id: 124,
      name: '王老五',
      age: '22',
      birthday: '2019.10.03',
      race: '汉族',
      work_status: {
        state: 0,
        msg: '离职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '4',
      technology_direction: '技术方向',
      job_interview: '后端开发',
      evaluation_remarks: '考评备注',
    },
    {
      id: 125,
      name: '李四',
      age: '21',
      birthday: '2019.10.04',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '8',
      technology_direction: '技术方向',
      job_interview: '产品经理',
      evaluation_remarks: '考评备注',
    },
    {
      id: 126,
      name: '李四',
      age: '21',
      birthday: '2019.10.04',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '8',
      technology_direction: '技术方向',
      job_interview: '产品经理',
      evaluation_remarks: '考评备注',
    },
    {
      id: 127,
      name: '李四',
      age: '21',
      birthday: '2019.10.04',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '8',
      technology_direction: '技术方向',
      job_interview: '产品经理',
      evaluation_remarks: '考评备注',
    },
    {
      id: 128,
      name: '李四',
      age: '21',
      birthday: '2019.10.04',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '8',
      technology_direction: '技术方向',
      job_interview: '产品经理',
      evaluation_remarks: '考评备注',
    },
    {
      id: 129,
      name: '李四',
      age: '21',
      birthday: '2019.10.04',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '8',
      technology_direction: '技术方向',
      job_interview: '产品经理',
      evaluation_remarks: '考评备注',
    },
    {
      id: 130,
      name: '张三',
      age: '23',
      birthday: '2019.10.02',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '0',
      technology_direction: '技术方向',
      job_interview: '前端开发',
      evaluation_remarks: '考评备注',
    },
    {
      id: 131,
      name: '张三',
      age: '23',
      birthday: '2019.10.02',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '0',
      technology_direction: '技术方向',
      job_interview: '前端开发',
      evaluation_remarks: '考评备注',
    },
    {
      id: 132,
      name: '张三',
      age: '23',
      birthday: '2019.10.02',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '0',
      technology_direction: '技术方向',
      job_interview: '前端开发',
      evaluation_remarks: '考评备注',
    },
    {
      id: 133,
      name: '张三',
      age: '23',
      birthday: '2019.10.02',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '0',
      technology_direction: '技术方向',
      job_interview: '前端开发',
      evaluation_remarks: '考评备注',
    },
    {
      id: 134,
      name: '张三',
      age: '23',
      birthday: '2019.10.02',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '0',
      technology_direction: '技术方向',
      job_interview: '前端开发',
      evaluation_remarks: '考评备注',
    },
    {
      id: 135,
      name: '张三',
      age: '23',
      birthday: '2019.10.02',
      race: '汉族',
      work_status: {
        state: 1,
        msg: '在职',
      },
      language: '普通话',
      dialect: '客家话',
      work_year: '0',
      technology_direction: '技术方向',
      job_interview: '前端开发',
      evaluation_remarks: '考评备注',
    },
  ];
  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  });
}


/**
 * 返回简历信息
 * @param req 
 * @param res 
 */
const getResumeInformationById = (req: Request, res: Response) => {
  const result: resumeInforData = {
    resume_type: '0',
    resume_source: '前程无忧',
    resume_id: '696155325',
    resume_name: '黄忠煌简历',
    resume_parse_time: '2020-06-05 15:55:51',
    resume_update_time: '2017.08.03',
    resume_integrity: '80',
  };
  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  });
}

/**
 * 返回基本信息
 * @param req 
 * @param res 
 */
const getResumeBaseInfoById = (req: Request, res: Response) => {
  const result: resumeBaseInfo = {
    name: '黄忠煌',
    surname: '黄',
    gender: '男',
    age: '24',
    height: '180cm',
    weight: '75kg',
    marital_status: '未婚',
    birthday: '2019.10.01',
    hukou_address: '上海市虹口区广粤路xx弄x号xxx室',
    hukou_address_norm: '中国-上海市-虹口区',
    id_card: '441615678641465134',
    race: '汉族',
    nationality: '中国',
    polit_status: '党员',
    languages: '英语、日语',
    english_level: '大学英语6级',
    computer_level: '计算机水平',
    blog: 'www.blog.com',
    work_year: '应届生',
    work_year_norm: '10',
    work_year_inf: '3.5',
    work_start_time: '2019.10.01',
    work_start_time_inf: '2019.10.01',
    work_position: 'java开发',
    work_company: 'XXX工作室',
    work_industry: '互联网',
    work_status: '在职',
    work_salary: '135000元/年',
    work_salary_min: '8000',
    work_salary_max: '12000',
    work_location: 'XXX路XXX工作室',
    work_location_norm: 'XXX路-XXX楼-xxx单位',
    work_job_nature: '全职',
    has_oversea_edu: '0',
    has_oversea_exp: '0',
    grad_time: '2019.10.01',
    college: 'XXX大学',
    college_type: '3',
    college_rank: '100',
    college_dept: 'XXX院系',
    major: 'XXX专业',
    degree: '博士研究生',
    recruit: '统招',
  };
  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  });
}

/**
 * 返回联系信息
 * @param req 
 * @param res 
 */
const getContactInformationById = (req: Request, res: Response) => {
  const result = {
    email: '1028248469@qq.com',
    phone: '13726263420',
    qq: '1028248469',
    weixin: 'weixinxxx',
    postal_code: '519000',
    city: '茂名',
    city_norm: '中国-广东省-茂名市',
    living_address: '茂名',
    living_address_norm: '中国-广东省-茂名市',
  };

  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  })
};

/**
 * 返回期望工作
 * @param req 
 * @param res 
 */
const getExpectToWork = (req: Request, res: Response) => {
  const result = {
    expect_job: 'sharepoint',
    expect_cpy: '珠海爱浦京软件技术有限公司',
    expect_salary: '5000~6000元/月',
    expect_salary_min: '5000元/月',
    expect_salary_max: '5000元/月',
    expect_industry: '计算机软件',
    expect_time: '随时',
    expect_jnature: '全职',
    expect_jstatus: '在职',
    expect_jlocation: '珠海',
    expect_jlocation_norm: '中国-广东省-珠海市',
  };

  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  })
};

/**
 * 返回教育经历
 * @param req 
 * @param res 
 */
const getEducationExperience = (req: Request, res: Response) => {
  const result = [
    {
      start_date: '2012.01',
      end_date: '2016.01',
      edu_college: '吉林大学珠海学院',
      edu_college_type: '普通院校',
      edu_college_rank: '1000',
      edu_college_dept: '院系名称',
      edu_major: '软件工程',
      edu_recruit: '是否统招',
      edu_gpa: '成绩',
      edu_degree: '本科',
      edu_degree_norm: '本科',
    },
    {
      start_date: '2012.01',
      end_date: '2016.01',
      edu_college: '吉林大学珠海学院',
      edu_college_type: '普通院校',
      edu_college_rank: '1000',
      edu_college_dept: '院系名称',
      edu_major: '软件工程',
      edu_recruit: '是否统招',
      edu_gpa: '成绩',
      edu_degree: '本科',
      edu_degree_norm: '本科',
    },
  ];

  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  })
};

/**
 * 返回工作经历
 * @param req 
 * @param res 
 */
const getWorksExperience = (req: Request, res: Response) => {
  const result = [
    {
      start_date: '2015.01',
      end_date: '2017.06',
      job_cpy: '信盈科技(亚洲)有限公司',
      job_cpy_nature: '外资',
      job_cpy_size: '500人',
      job_cpy_desc: '公司描述',
      job_industry: '计算机软件',
      job_position: '软件UI工程师/系统工程师',
      job_dept: 'IT技术部',
      job_nature: '全职',
      job_salary: '工作薪资',
      job_staff: '下属人数',
      job_report_to: '汇报对象',
      job_location: '工作地点',
      job_why_leave: '离职原因',
      job_duaraton: '1年3个月',
      job_capacity: '工作能力',
      job_content: '1.主要运用bootsrap 与 前端Knedo ui 控件等去设计 sharepoint 门户网页的页面布局,然后再通过.Net server CSOM JSOM 或者 REST api 去实现网页与sharepoint 数据交互。2.负责页面人员权限管理,上传附件,新增网站等功能 webpart 后台开发。',
    }
  ];

  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  })
};

/**
 * 返回项目经历
 * @param req 
 * @param res 
 */
const getProjectExperience = (req: Request, res: Response) => {
  const result = [
    {
      start_date: '2017.03',
      end_date: '2017.06',
      proj_name: '香港联康生物集团有限公司sharepoint',
      proj_cpy: '信盈科技亚洲有限公司',
      proj_position: '职位名称',
      proj_content: '1.负责sharepoint list 与sharepoint 门户网页的数据交互。2.文件上传webpart 开发。',
      proj_resp: '门户网站,运用JSOM api 结合 kendo ui ,实现数据显示,页面运用bootshrap实现响应式页面布局。文件上传部分主要运用SP .net server api 进行权限提升后再更新SP list 与上传文件。',
    },
    {
      start_date: '2017.03',
      end_date: '2017.06',
      proj_name: '香港联康生物集团有限公司sharepoint',
      proj_cpy: '信盈科技亚洲有限公司',
      proj_position: '职位名称',
      proj_content: '1.负责sharepoint list 与sharepoint 门户网页的数据交互。2.文件上传webpart 开发。',
      proj_resp: '门户网站,运用JSOM api 结合 kendo ui ,实现数据显示,页面运用bootshrap实现响应式页面布局。文件上传部分主要运用SP .net server api 进行权限提升后再更新SP list 与上传文件。',
    },
    {
      start_date: '2017.03',
      end_date: '2017.06',
      proj_name: '香港联康生物集团有限公司sharepoint',
      proj_cpy: '信盈科技亚洲有限公司',
      proj_position: '职位名称',
      proj_content: '1.负责sharepoint list 与sharepoint 门户网页的数据交互。2.文件上传webpart 开发。',
      proj_resp: '门户网站,运用JSOM api 结合 kendo ui ,实现数据显示,页面运用bootshrap实现响应式页面布局。文件上传部分主要运用SP .net server api 进行权限提升后再更新SP list 与上传文件。',
    }
  ];

  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  })
};

/**
 * 返回技能列表
 * @param req 
 * @param res 
 */
const getSkillsList = (req: Request, res: Response) => {
  const result = [
    {
      skills_name: 'CET-4',
      skills_level: '熟悉',
      skills_time: '1个月',
      train_loc:  '培训地点',
    },
    {
      skills_name: '面向对象',
      skills_level: '熟悉',
      skills_time: '1个月',
      train_loc:  '培训地点',
    },
    {
      skills_name: 'HTML',
      skills_level: '熟悉',
      skills_time: '1个月',
      train_loc:  '培训地点',
    },{
      skills_name: 'vs',
      skills_level: '熟悉',
      skills_time: '1个月',
      train_loc:  '培训地点',
    },
    {
      skills_name: 'net',
      skills_level: '熟悉',
      skills_time: '1个月',
      train_loc:  '培训地点',
    },
    {
      skills_name: 'MVC',
      skills_level: '熟悉',
      skills_time: '1个月',
      train_loc:  '培训地点',
    },
    {
      skills_name: 'SQL',
      skills_level: '熟悉',
      skills_time: '1个月',
      train_loc:  '培训地点',
    }
  ];

  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  })
};

/**
 * 返回自我评价
 * @param req 
 * @param res 
 */
const getSelfEvaluation = (req: Request, res: Response) => {
  const result = {
    content:'1,熟悉使用C#编程基础语言,具备面向对象的思维方法,有良好的编程风格,熟悉 vs 2012使用 2,熟悉HTML +css+ JavaScript开发 3,熟悉 .net MVC的网站开发 4,掌握SQL语句和SQL Server数据库 5,熟悉sharepoint 2013 的基本开发 6,熟悉kendo ui +bootshrap等控件的使用 7,积极主动、认真踏实、有良好的沟通能力和团队合作精神',
  };

  res.send({
    status: 'ok',
    result: result,
    msg: 'success',
  })
};

export default {
  'GET /api/baseInifo/resumeInformation/:userId': getResumeInformationById,
  'GET /api/baseInifo/resumeBaseInfo/:userId': getResumeBaseInfoById,
  'GET /api/baseInifo/contactInformationById/:userId': getContactInformationById,
  'GET /api/baseInifo/expectToWork/:userId': getExpectToWork,
  'GET /api/baseInifo/educationExperience/:userId': getEducationExperience,
  'GET /api/baseInifo/worksExperience/:userId': getWorksExperience,
  'GET /api/baseInifo/projectExperience/:userId': getProjectExperience,
  'GET /api/baseInifo/skillsList/:userId': getSkillsList,
  'GET /api/baseInifo/selfEvaluation/:userId': getSelfEvaluation,
  'GET /api/baseInifo/resumeList': getResumeList,
};