import request from 'umi-request';

export async function getResumeList() {
  return request('/api/baseInifo/resumeList');
}
