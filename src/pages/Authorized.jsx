import React from 'react';
import { Redirect, connect } from 'umi';
import Authorized from '@/utils/Authorized';
import { getRouteAuthority } from '@/utils/utils';

/**
 * 当前暂未用到
 * 真正用到的地方 在BasicLayout里面
 */
const AuthComponent = ({
  children, //通用children属性，类似slot
  route = { //当前route
    routes: [],//默认为【】
  },
  location = { //当前location
    pathname: '',//默认为''
  },
  user, // connect 连接 传递过来的user
}) => {
  //解构出对应值
  const { currentUser } = user;
  const { routes = [] } = route;
  const isLogin = currentUser && currentUser.name;
  return (
    <Authorized
      authority={getRouteAuthority(location.pathname, routes) || ''}
      noMatch={isLogin ? <Redirect to="/exception/403" /> : <Redirect to="/user/login" />}
    >
      {children}
    </Authorized>
  );
};
/**
 * user为models下面的user（使用的是namespace）
 */
export default connect(({ user }) => ({
  user,//user传给props
}))(AuthComponent);
