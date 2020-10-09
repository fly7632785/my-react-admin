import { history } from 'umi';
import { message } from 'antd';
import { parse } from 'qs';
import { fakeAccountLogin, getFakeCaptcha } from './service';
export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}
export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  //保存到本地
  localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority)); // hard code
  // reload Authorized component

  //重新加载权限组验证
  try {
    if (window.reloadAuthorized) {
      window.reloadAuthorized();
    }
  } catch (error) {
    // do not need do anything
  }

  return authority;
}
const Model = {
  namespace: 'userAndlogin',
  state: {
    status: undefined,
  },
  effects: {
    // *login(_, { call, put }) { 如果没有就_
    // *login(state, { call, put }) {
    *login({payload}, { call, put }) {
      console.log("login model state",state)
      // const response = yield call(fakeAccountLogin, state.payload);
      const response = yield call(fakeAccountLogin, payload);
      //登录成功
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      }); // Login successfully

      if (response.status === 'ok') {
        message.success('登录成功！');
        const urlParams = new URL(window.location.href);
        //如果从其他界面跳转过来 带了redirect的，登录成功后，跳转回去还是那个界面
        const params = getPageQuery();
        let { redirect } = params;

        if (redirect) {
          const redirectUrlParams = new URL(redirect);

          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        //路由重新定向到该路径
        history.replace(redirect || '/');
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      //保存currentAuthority
      setAuthority(payload.currentAuthority);
      //修改成功状态
      return { ...state, status: payload.status, type: payload.type };
    },
  },
};
export default Model;
