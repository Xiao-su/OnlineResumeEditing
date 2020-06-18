import { Effect, Reducer } from 'umi';

import { 
  getResumeInformationById,
  getResumeBaseInfoById,
  getContactInformationById,
  getExpectToWorkById,
  getEducationExperienceById,
  getWorksExperienceById,
  getProjectExperienceById,
  getSkillsListById,
  getSelfEvaluationById,
} from './service';

export interface ModelType {
  namespace: string;
  state: any;
  effects: {
    fetch: Effect;
    fetchSalesData: Effect;
  };
  reducers: {
    save: Reducer<any>;
    clear: Reducer<any>;
  };
}

const initState = {
  resumeInfor: {},
  resumeBaseInfo: {},
  contactInfo: {},
  expectToWork: {},
  educationExp: [],
  worksExp: [],
  projectExp: [],
  skillsLis: [],
  selfEvaluation: {},
};

const Model: ModelType = {
  namespace: 'resumeAnalysis',

  state: initState,

  effects: {
    *fetchResumeInformation({ payload }, { call, put }) {
      const response = yield call(getResumeInformationById, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveResumeInformation',
          payload: {
            result: response.result,
          },
        });
      }
    },

    *fetchResumeBaseInfo({ payload }, { call, put }) {
      const response = yield call(getResumeBaseInfoById, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveResumeBaseInfo',
          payload: {
            result: response.result,
          },
        });
      }
    },

    *fetchContactInformatio({ payload }, { call, put }) {
      const response = yield call(getContactInformationById, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveContactInformatio',
          payload: {
            result: response.result,
          },
        });
      }
    },

    *fetchExpectToWork({ payload }, { call, put }) {
      const response = yield call(getExpectToWorkById, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveExpectToWork',
          payload: {
            result: response.result,
          },
        });
      }
    },

    *fetchEducationExperience({ payload }, { call, put }) {
      const response = yield call(getEducationExperienceById, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveEducationExperience',
          payload: {
            result: response.result,
          },
        });
      }
    },

    *fetchWorksExperience({ payload }, { call, put }) {
      const response = yield call(getWorksExperienceById, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveWorksExperience',
          payload: {
            result: response.result,
          },
        });
      }
    },

    *fetchProjectExperienc({ payload }, { call, put }) {
      const response = yield call(getProjectExperienceById, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveProjectExperienc',
          payload: {
            result: response.result,
          },
        });
      }
    },

    *fetchSkillsLis({ payload }, { call, put }) {
      const response = yield call(getSkillsListById, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveSkillsLis',
          payload: {
            result: response.result,
          },
        });
      }
    },
    *fetchSelfEvaluation({ payload }, { call, put }) {
      const response = yield call(getSelfEvaluationById, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveSelfEvaluation',
          payload: {
            result: response.result,
          },
        });
      }
    },
  },

  reducers: {
    saveResumeInformation(state, { payload }) {
      return {
        ...state,
        resumeInfor: payload.result,
      };
    },

    saveResumeBaseInfo(state, { payload }) {
      return {
        ...state,
        resumeBaseInfo: payload.result,
      };
    },

    saveContactInformatio(state, { payload }) {
      return {
        ...state,
        contactInfo: payload.result,
      };
    },

    saveExpectToWork(state, { payload }) {
      return {
        ...state,
        expectToWork: payload.result,
      };
    },

    saveEducationExperience(state, { payload }) {
      return {
        ...state,
        educationExp: payload.result,
      };
    },

    saveWorksExperience(state, { payload }) {
      return {
        ...state,
        worksExp: payload.result,
      };
    },

    saveProjectExperienc(state, { payload }) {
      return {
        ...state,
        projectExp: payload.result,
      };
    },

    saveSkillsLis(state, { payload }) {
      return {
        ...state,
        skillsLis: payload.result,
      };
    },
    saveSelfEvaluation(state, { payload }) {
      return {
        ...state,
        selfEvaluation: payload.result,
      };
    },
    clear() {
      return initState;
    },
  },
};

export default Model;
