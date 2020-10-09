import { Redirect, Route } from 'umi';
import React from 'react';
import Authorized from './Authorized';

/**
 * 暂未用到
 * 真正用到的地方 在BasicLayout里面
 */
const AuthorizedRoute = ({ component: Component, render, authority, redirectPath, ...rest }) => (
  <Authorized
    authority={authority}
    noMatch={
      <Route
        {...rest}
        render={() => (
          <Redirect
            to={{
              pathname: redirectPath,
            }}
          />
        )}
      />
    }
  >
    <Route {...rest} render={(props) => (Component ? <Component {...props} /> : render(props))} />
  </Authorized>
);

export default AuthorizedRoute;
