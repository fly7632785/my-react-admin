import React from 'react';

//传入children 返回 children 没有多余修饰
//BasicLayout 和 UserLayout是兄弟关系  父亲都是它
//UseLayout有自己的布局，BasicLayout是大框架（sider\header\menu）
const Layout = ({ children }) => <>{children}</>;

export default Layout;
