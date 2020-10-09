/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter, SettingDrawer } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import {Link, useIntl, connect, history, Redirect} from 'umi';
import { GithubOutlined} from '@ant-design/icons';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { getAuthorityFromRouter } from '@/utils/utils';
import logo from '../../public/logo.jpg';
//没有权限的时候的页面
const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);

/**
 * use Authorized check all menu item
 */
const menuDataRender = (menuList) =>
  menuList.map((item) => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    //菜单验证权限，没有权限则返回menu，不显示
    return Authorized.check(item.authority, localItem, null);
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} 个人出品`}
    links={[
      {
        key: 'jianshu',
        title: '简书',
        href: 'https://www.jianshu.com/u/d234d1569eed',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/fly7632785',
        blankTarget: true,
      },
      {
        key: 'juejin',
        title: '掘金',
        href: 'https://juejin.im/user/993614678728334',
        blankTarget: true,
      },
    ]}
  />
);
/**
 * 大框架
 * 带sider header menu 包裹
 */
const BasicLayout = (props) => {
  const {
    dispatch,
    children,
    settings,
    currentUser,
    location = {
      pathname: '/',
    },
  } = props;

  const isLogin = currentUser && currentUser.name;

  // 如果要登录才能使用，可以在这里加入这个判断，非登录状态下访问url，直接跳转登录界面
  // if(!isLogin){
  //   return (<Redirect to='/user/login'></Redirect>)
  // }

  /**
   * constructor
   */

  /**
   * 函数组件 使用useEffect来替代生命周期方法mount unmounted update等
   */
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  const handleMenuCollapse = (payload) => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  //从routes获取对应界面的权限组
  const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
    authority: undefined,
  };
  console.log('authorized.authority',authorized.authority)
  const { formatMessage } = useIntl();
  return (
    <>
      <ProLayout
        logo={logo}
        formatMessage={formatMessage}
        onCollapse={handleMenuCollapse}
        onMenuHeaderClick={() => history.push('/')}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }

          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: formatMessage({
              id: 'menu.home',
            }),
          },
          ...routers,
        ]}
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
          ) : (
            <span>{route.breadcrumbName}</span>
          );
        }}
        footerRender={() => defaultFooterDom}
        menuDataRender={menuDataRender}
        rightContentRender={() => <RightContent />}
        {...props}
        {...settings}
      >
        {/*权限组校验*/}
        <Authorized authority={authorized.authority} noMatch={noMatch}>
          {children}
        </Authorized>
      </ProLayout>
      {/*<SettingDrawer*/}
      {/*  settings={settings}*/}
      {/*  onSettingChange={(config) =>*/}
      {/*    dispatch({*/}
      {/*      type: 'settings/changeSetting',*/}
      {/*      payload: config,*/}
      {/*    })*/}
      {/*  }*/}
      {/*/>*/}
    </>
  );
};

export default connect(({user, global, settings }) => ({
  collapsed: global.collapsed,
  currentUser:user.currentUser,
  settings,
}))(BasicLayout);
