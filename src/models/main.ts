import { Effect, Reducer, Subscription } from 'umi';
import { getHeroList, getToolList, getSkillList } from '@/service/index';

export interface HeroModelState {
  heroList: Array<any>;
  toolList: Array<any>;
  skillList: Array<any>;
}

export interface HeroModelType {
  namespace: 'global';
  state: HeroModelState;
  effects: {
    fetHeroList: Effect;
    fetchToolList: Effect;
    fetchSkillList: Effect;
  };
  reducers: {
    saveHero: Reducer<HeroModelState>;
    saveTool: Reducer<HeroModelState>;
    saveSkill: Reducer<HeroModelState>;
  };
  subscriptions: { setup: Subscription };
}

const HeroModel: HeroModelType = {
  namespace: 'global',

  state: {
    heroList: [],
    toolList: [],
    skillList: [],
  },

  effects: {
    *fetHeroList({ payload }, { call, put }) {
      const data = yield call(getHeroList);
      yield put({
        type: 'saveHero',
        payload: {
          heroList: data,
        },
      });
    },

    *fetchToolList({ payload }, { call, put }) {
      const data = yield call(getToolList);
      yield put({
        type: 'saveTool',
        payload: {
          toolList: data,
        },
      });
    },

    *fetchSkillList({ payload }, { call, put }) {
      const data = yield call(getSkillList);
      yield put({
        type: 'saveSkill',
        payload: {
          skillList: data,
        },
      });
    },
  },

  reducers: {
    saveHero(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    saveTool(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    saveSkill(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/hero') {
          // dispatch({
          //   type: 'fetHeroList'
          // })
        } else if (pathname === '/tool') {
          dispatch({
            type: 'fetchToolList',
          });
        } else if (pathname === '/skill') {
          dispatch({
            type: 'fetchSkillList',
          });
        }
      });
    },
  },
};

export default HeroModel;
