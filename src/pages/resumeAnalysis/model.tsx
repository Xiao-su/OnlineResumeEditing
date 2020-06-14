import { Effect, Reducer } from 'umi';

// import { } from './service';

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

const initState = {};

const Model: ModelType = {
  namespace: 'resumeAnalysis',

  state: initState,

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call();
      if (response.status === 'ok') {
        yield put({
          type: 'save',
          payload: {},
        });
      }
    },
    *fetchSalesData(_, { call, put }) {},
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
      };
    },
    clear() {
      return initState;
    },
  },
};

export default Model;
