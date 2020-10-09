import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

/**
 * route路由没有匹配到的情况下 使用该组件填充
 * 参看 config.js/routes
 * 如果/user/xx 最后一个添加为404 则/user/xx没有匹配到路由，则在UserLayout前提下展示404子组件
 * 如果/xx 最后一个添加为404 则/xx没有匹配到路由，则在BasicLayout前提下展示404子组件
 *
 * 而exception下面的404，403，500 仅为测试界面
 * 也可通过路由方式跳转过去
 *
 */
const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
