// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const prodGzipList = ['js', 'css'];
export default defineConfig({
  publicPath: './',
  // history: {
  //   type: 'hash',
  // },
  hash: true,//路由方式 hash or history
  antd: {},//antd相关
  dva: {//开启dva
    hmr: true,//开启热更新
  },
  locale: { //多语言
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {//动态import
    //懒加载方式 loading显示组件
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/security', // 测试是否登录验证界面，没有登录，直接重定向到登录界面
          component: '../layouts/SecurityLayout',
          Routes: ['src/pages/Authorized'],
          routes: [
            {
              path: '/security/test',
              component: './test',
            },
          ],
        },
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            //如果user/xxx 404则子模块为404
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          // authority: ['admin', 'user'], 这里设置无用
          routes: [
            // {
            //   path: '/',
            //   redirect: './index',
            // },
            {
              path: '/',
              name: 'index',
              icon: 'dashboard',
              component: './simple-index',
            },
            // {
            //   path: '/dashboard',
            //   name: 'dashboard',
            //   icon: 'dashboard',
            //   // authority: ['admin', 'user'],
            //   //可以在这里设置 则表现为 进入dashboard/xxx 页面 都需要验证权限 是否为admin or user
            //   // 否则 显示403界面
            //   routes: [
            //     {
            //       name: 'analysis',
            //       icon: 'smile',
            //       path: '/dashboard/analysis',
            //       component: './dashboard/analysis',
            //     },
            //     {
            //       name: 'monitor',
            //       icon: 'smile',
            //       path: '/dashboard/monitor',
            //       component: './dashboard/monitor',
            //     },
            //     {
            //       name: 'workplace',
            //       icon: 'smile',
            //       path: '/dashboard/workplace',
            //       component: './dashboard/workplace',
            //     },
            //   ],
            // },
            // {
            //   path: '/form',
            //   icon: 'form',
            //   name: 'form',
            //   routes: [
            //     {
            //       name: 'basic-form',
            //       icon: 'smile',
            //       path: '/form/basic-form',
            //       component: './form/basic-form',
            //     },
            //     {
            //       name: 'step-form',
            //       icon: 'smile',
            //       path: '/form/step-form',
            //       component: './form/step-form',
            //     },
            //     {
            //       name: 'advanced-form',
            //       icon: 'smile',
            //       path: '/form/advanced-form',
            //       component: './form/advanced-form',
            //     },
            //   ],
            // },
            // {
            //   path: '/list',
            //   icon: 'table',
            //   name: 'list',
            //   routes: [
            //     {
            //       path: '/list/search',
            //       name: 'search-list',
            //       component: './list/search',
            //       routes: [
            //         {
            //           path: '/list/search',
            //           redirect: '/list/search/articles',
            //         },
            //         {
            //           name: 'articles',
            //           icon: 'smile',
            //           path: '/list/search/articles',
            //           component: './list/search/articles',
            //         },
            //         {
            //           name: 'projects',
            //           icon: 'smile',
            //           path: '/list/search/projects',
            //           component: './list/search/projects',
            //         },
            //         {
            //           name: 'applications',
            //           icon: 'smile',
            //           path: '/list/search/applications',
            //           component: './list/search/applications',
            //         },
            //       ],
            //     },
            //     {
            //       name: 'table-list',
            //       icon: 'smile',
            //       path: '/list/table-list',
            //       component: './list/table-list',
            //     },
            //     {
            //       name: 'list-table-list',
            //       icon: 'smile',
            //       path: '/list/listtablelist',
            //       component: './listtablelist/index.jsx',
            //     },
            //     {
            //       name: 'basic-list',
            //       icon: 'smile',
            //       path: '/list/basic-list',
            //       component: './list/basic-list',
            //     },
            //     {
            //       name: 'card-list',
            //       icon: 'smile',
            //       path: '/list/card-list',
            //       component: './list/card-list',
            //     },
            //   ],
            // },
            // {
            //   path: '/profile',
            //   name: 'profile',
            //   icon: 'profile',
            //   routes: [
            //     {
            //       name: 'basic',
            //       icon: 'smile',
            //       path: '/profile/basic',
            //       component: './profile/basic',
            //     },
            //     {
            //       name: 'advanced',
            //       icon: 'smile',
            //       path: '/profile/advanced',
            //       component: './profile/advanced',
            //     },
            //   ],
            // },
            // {
            //   name: 'result',
            //   icon: 'CheckCircleOutlined',
            //   path: '/result',
            //   routes: [
            //     {
            //       name: 'success',
            //       icon: 'smile',
            //       path: '/result/success',
            //       component: './result/success',
            //     },
            //     {
            //       name: 'fail',
            //       icon: 'smile',
            //       path: '/result/fail',
            //       component: './result/fail',
            //     },
            //   ],
            // },
            // {
            //   name: 'exception',
            //   icon: 'warning',
            //   path: '/exception',
            //   routes: [
            //     {
            //       name: '403',
            //       icon: 'smile',
            //       path: '/exception/403',
            //       component: './exception/403',
            //     },
            //     {
            //       name: '404',
            //       icon: 'smile',
            //       path: '/exception/404',
            //       component: './exception/404',
            //     },
            //     {
            //       name: '500',
            //       icon: 'smile',
            //       path: '/exception/500',
            //       component: './exception/500',
            //     },
            //   ],
            // },
            // {
            //   name: 'account',
            //   icon: 'user',
            //   path: '/account',
            //   routes: [
            //     {
            //       name: 'center',
            //       icon: 'smile',
            //       path: '/account/center',
            //       component: './account/center',
            //     },
            //     {
            //       name: 'settings',
            //       icon: 'smile',
            //       path: '/account/settings',
            //       component: './account/settings',
            //     },
            //   ],
            // },
            // {
            //   name: 'other',
            //   icon: 'highlight',
            //   path: '/other',
            //   routes: [
            //     {
            //       name: 'admin',
            //       icon: 'smile',
            //       path: 'other/admin',
            //       component: './admin'
            //     },
            //     {
            //       name: 'welcome',
            //       icon: 'smile',
            //       path: 'other/welcome',
            //       component: './welcome'
            //     },
            //     {
            //       name: 'test',
            //       icon: 'smile',
            //       path: 'other/test',
            //       component: './test'
            //     },
            //   ]
            // },
            // {
            //   name: 'editor',
            //   icon: 'highlight',
            //   path: '/editor',
            //   routes: [
            //     {
            //       name: 'flow',
            //       icon: 'smile',
            //       path: '/editor/flow',
            //       component: './editor/flow',
            //     },
            //     {
            //       name: 'mind',
            //       icon: 'smile',
            //       path: '/editor/mind',
            //       component: './editor/mind',
            //     },
            //     {
            //       name: 'koni',
            //       icon: 'smile',
            //       path: '/editor/koni',
            //       component: './editor/koni',
            //     },
            //   ],
            // },
            // //如果/xxx 404则子模块为404
            // {
            //   component: '404',
            // },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  chainWebpack(config) {
    if (process.env.NODE_ENV === 'production') {  // 生产模式开启
      config.plugin('compression-webpack-plugin').use(
        new CompressionWebpackPlugin({
          // filename: 文件名称，这里我们不设置，让它保持和未压缩的文件同一个名称
          algorithm: 'gzip', // 指定生成gzip格式
          test: new RegExp('\\.(' + prodGzipList.join('|') + ')$'), // 匹配哪些格式文件需要压缩
          threshold: 10240, //对超过10k的数据进行压缩
          minRatio: 0.6, // 压缩比例，值为0 ~ 1
        }),
      );
    }
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          minChunks: 2,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test: /^.*node_modules[\\/](?!ag-grid-|lodash|wangeditor|react-virtualized|rc-select|rc-drawer|rc-time-picker|rc-tree|rc-table|rc-calendar|antd).*$/,
              chunks: 'all',
              priority: 10,
            },
            virtualized: {
              name: 'virtualized',
              test: /[\\/]node_modules[\\/]react-virtualized/,
              chunks: 'all',
              priority: 10,
            },
            rcselect: {
              name: 'rc-select',
              test: /[\\/]node_modules[\\/]rc-select/,
              chunks: 'all',
              priority: 10,
            },
            rcdrawer: {
              name: 'rcdrawer',
              test: /[\\/]node_modules[\\/]rc-drawer/,
              chunks: 'all',
              priority: 10,
            },
            rctimepicker: {
              name: 'rctimepicker',
              test: /[\\/]node_modules[\\/]rc-time-picker/,
              chunks: 'all',
              priority: 10,
            },
            ag: {
              name: 'ag',
              test: /[\\/]node_modules[\\/]ag-grid-/,
              chunks: 'all',
              priority: 10,
            },
            antd: {
              name: 'antd',
              test: /[\\/]node_modules[\\/]antd[\\/]/,
              chunks: 'all',
              priority: 9,
            },
            rctree: {
              name: 'rctree',
              test: /[\\/]node_modules[\\/]rc-tree/,
              chunks: 'all',
              priority: -1,
            },
            rccalendar: {
              name: 'rccalendar',
              test: /[\\/]node_modules[\\/]rc-calendar[\\/]/,
              chunks: 'all',
              priority: -1,
            },
            rctable: {
              name: 'rctable',
              test: /[\\/]node_modules[\\/]rc-table[\\/]es[\\/]/,
              chunks: 'all',
              priority: -1,
            },
            wang: {
              name: 'wang',
              test: /[\\/]node_modules[\\/]wangeditor[\\/]/,
              chunks: 'all',
              priority: -1,
            },
            lodash: {
              name: 'lodash',
              test: /[\\/]node_modules[\\/]lodash[\\/]/,
              chunks: 'all',
              priority: -2,
            },
            bizcharts: {
              name: 'bizcharts',
              test: /[\\/]node_modules[\\/]bizcharts[\\/]/,
              chunks: 'all',
              priority: 10,
            },
            xlsx: {
              name: 'xlsx',
              test: /[\\/]node_modules[\\/]xlsx[\\/]/,
              chunks: 'async',
              priority: 10,
            },
          },
        },
      },
    });
    //过滤掉momnet的那些不使用的国际化文件
    config.plugin('replace').use(require('webpack').ContextReplacementPlugin).tap(() => {
      return [/moment[/\\]locale$/, /zh-cn/];
    });
  }
})
