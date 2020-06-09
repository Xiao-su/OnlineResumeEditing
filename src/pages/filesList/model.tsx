import { Effect, Reducer } from 'umi';

import { resumeDatas } from './data.d';
import { getResumeList } from './service';

export interface ModelType {
  namespace: string;
  state: resumeDatas;
  effects: {
    fetch: Effect;
    fetchSalesData: Effect;
  };
  reducers: {
    save: Reducer<resumeDatas>;
    clear: Reducer<resumeDatas>;
  };
}

const initState = {
    resumeDatas: [],
};

const Model: ModelType = {
  namespace: 'fileslist',

  state: initState,

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(getResumeList);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchSalesData(_, { call, put }) {
    //   const response = yield call(fakeChartData);
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       salesData: response.salesData,
    //     },
    //   });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clear() {
      return initState;
    },
  },
};

export default Model;
