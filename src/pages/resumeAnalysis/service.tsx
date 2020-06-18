import request from 'umi-request';

export async function getResumeInformationById(params: any) {
  return request('/api/baseInifo/resumeInformation', {
    params, 
  });
}

export async function getResumeBaseInfoById(params: any) {
  return request('/api/baseInifo/resumeBaseInfo', {
    params, 
  });
}

export async function getContactInformationById(params: any) {
  return request('/api/baseInifo/contactInformationById', {
    params, 
  });
}

export async function getExpectToWorkById(params: any) {
  return request('/api/baseInifo/expectToWork', {
    params, 
  });
}

export async function getEducationExperienceById(params: any) {
  return request('/api/baseInifo/educationExperience', {
    params, 
  });
}

export async function getWorksExperienceById(params: any) {
  return request('/api/baseInifo/worksExperience', {
    params, 
  });
}

export async function getProjectExperienceById(params: any) {
  return request('/api/baseInifo/projectExperience', {
    params, 
  });
}

export async function getSkillsListById(params: any) {
  return request('/api/baseInifo/skillsList', {
    params, 
  });
}

export async function getSelfEvaluationById(params: any) {
  return request('/api/baseInifo/selfEvaluation', {
    params, 
  });
}