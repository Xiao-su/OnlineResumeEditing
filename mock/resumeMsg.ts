import { Request, Response } from 'express';
interface resumeInforData{
  resume_type: string, 
  resume_source: string,
  resume_id: string,
  resume_name: string,
  resume_parse_time: string,
  resume_update_time: string,
  resume_integrity: string,
}


interface resumeBaseInfo{
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
}


const GetResumeList = (req: Request, res: Response) => {
  res.json([

  ]);
};

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

const getResumeBaseInfoById = (req: Request, res: Response) => {
  const result: resumeBaseInfo = {
    name: '黄忠煌',
    surname: '黄',
    gender: '	男',
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

export default {
  'GET /api/resumes': GetResumeList,
  'GET /api/baseInifo/resumeInformation/:userId': getResumeInformationById,
  'GET /api/baseInifo/resumeBaseInfo/:userId': getResumeBaseInfoById,
};

// resume_type	简历类型	string	取值0~4：
// 0:中文
// 1:英文
// 2:中英（前中后英）
// 3:英中（前英后中）
// 4:空
// resume_source	简历来源	string	智联、智联卓聘、前程无忧、51精英、猎聘、boss直聘、拉勾
// resume_id	简历id	string	智联/51job等网站里的简历id
// resume_name	简历文件名	string	输入的简历文件名
// resume_parse_time	简历解析时间	string	YYYY-MM-DD HH-MM-SS
// resume_update_time	简历更新时间	string	更新时间
// resume_integrity	简历完整度	string	取值0~100