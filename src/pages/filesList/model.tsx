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
    resumeDatas: {
      datas: [],
      count: 0,
    },
};

const Model: ModelType = {
  namespace: 'fileslist',

  state: initState,

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getResumeList);
      if(response.status === 1){
        //模拟分页
        const limitStart = (payload.currentPage -1) * payload.pageSize;
        const limitEnd = payload.pageSize * payload.currentPage;
        yield put({
          type: 'save',
          payload: {
            resumeDatas: {
              datas: response.result.slice(limitStart, limitEnd),
              count: response.result.length,
            },
          },
        });
      }
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
        resumeDatas: payload.resumeDatas,
      };
    },
    clear() {
      return initState;
    },
  },
};

export default Model;
