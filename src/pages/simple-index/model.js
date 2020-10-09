import { queryCompany, queryCurrent, queryProject, querySkill } from './service';
import resume from './resume.js';

const Model = {
  namespace: 'index',
  state: {
    currentUser: {},
    company: [],
    project: [],
    skill: [],

  },
  effects: {
    * fetchCurrent({ payload }, { call, put }) {
      // const response = yield call(queryCurrent);
      const response = resume['GET  /resume/currentUser'];
      console.log(response.tags)
      yield put({
        type: 'showCurrentUser',
        payload: response,
      });
    },
    * fetchCompany({ payload }, { call, put }) {
      // const response = yield call(queryCompany);
      const response = resume['GET  /resume/company'];
      yield put({
        type: 'showCompany',
        payload: response,
      });
    },
    * fetchProject({ payload }, { call, put }) {
      // const response = yield call(queryProject);
      const response = resume['GET  /resume/project'];
      yield put({
        type: 'showProject',
        payload: response,
      });
    },
    * fetchSkill({ payload }, { call, put }) {
      // const response = yield call(querySkill);
      const response = resume['GET  /resume/skill'];
      console.log(response);
      yield put({
        type: 'showSkill',
        payload: response,
      });
    },
  },
  reducers: {
    showCurrentUser(state, { payload }) {
      return { ...state, currentUser: payload || {} };
    },
    showCompany(state, { payload }) {
      return { ...state, company: payload || {} };
    },
    showProject(state, { payload }) {
      return { ...state, project: payload || {} };
    },
    showSkill(state, { payload }) {
      return { ...state, skill: payload || {} };
    },
  },
  descriptions: {},

};

export default Model;
