import mockjs from 'mockjs';

const radarOriginData = [
  {
    name: '技能',
    android: 9,
    javaweb: 6,
    vue: 5,
    react: 5,
    html: 7,
  },
];
const radarData = [];
const radarTitleMap = {
  android: 'Android',
  javaweb: 'JavaWeb',
  vue: 'Vue',
  react: 'React',
  html: 'Html',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

export default {
  'GET  /resume/currentUser': {
    name: '韩建飞',
    avatar: './me.jpeg',
    email: '522648467@qq.com',
    phone: '13982004324',
    job: 'Android工程师 4-5年工作经验',
    university: '本科 成都东软学院',
    motto: 'what can\'t kill you makes you stronger',
    money: '14-18k',
    geographic: {
      province: {
        label: '四川省',
        key: '330000',
      },
      city: {
        label: '成都市',
        key: '330100',
      },
    },
    tags: mockjs.mock({
      'list|80': [
        {
          'name|1': [
            'kotlin',
            '函数式',
            '插件化',
            'Android',
            'javaWeb',
            'Vue全家桶',
            'React全家桶',
            '开源github',
            '个人博客',
            'usb-otg',
            'swagger',
            '申请软件著作',
            '组件化',
            'socket即时通讯',
            'mac开发',
            'docker',
            'nginx',
            '热爱篮球',
            '逆向|加固',
            'jni相关',
            '音视频',
            '多媒体播放',
            'Android-TV',
            'arduino智能小车',
            'blockly少儿编程',
            '微信小程序',
            '数据库',
            '',
            '',
            '',
          ],
          'value|0-150': 150,
          'type|0-2': 1,
        },
      ],
    }).list,
    selfDesc:[
      {
        id: 'xxx1',
        title: '我对自己的定位',
        logo: './selficons/map.png',
        description: '主攻Android端，其次全栈，积极学习各类技术栈，由深度向广度扩张，全面发展，让自己能够高效解决大多数问题。很多技术不求甚解，但求知之。涉猎较广，软硬件都接触，喜欢充实自己。热爱分享，开源。',
        member: '主攻Android，进而全栈，分享，开源',
      },
      {
        id: 'xxx2',
        title: '我对工作的态度',
        logo: './selficons/certified-supplier.png',
        description: '1、要高效地完成自己的本职工作。2、在完成的基础上，复查其质量。3、把其余的时间用在学习提升上，让自己能够胜任未来未知的工作',
        member: '高效，保质，提升',
      },
      {
        id: 'xxx3',
        title: '我怎样克服困难',
        logo: './selficons/cry.png',
        description: '1、优先使用各类搜索引擎。2、官网文档、其生态社区搜寻。3、如果还没有解决，那么，回本溯源，从代码源头触发，换一个角度，重新分析问题，寻找其他解决办法。5、与其他群友、朋友、同事、作者请教交流',
        member: '搜索，社区，回溯',
      },
      {
        id: 'xxx4',
        title: '怎样保持自己的视野',
        logo: './selficons/jewelry.png',
        description: '多学多看，不求甚至，但求知之，这个行业只会一门是不现实的，多多益善。github，开源社区，程序员论坛，各大博客网站，都是学习的好地方，见多识广，让自己拥有更多的知识储备，这样遇到问题，也知道从哪个方向入手',
        member: '学，看，知，广',
      },
      {
        id: 'xxx5',
        title: '我的优势',
        logo: './selficons/good.png',
        description: '1、追求高效，拒绝拖沓。2、爱学习，全自学，学习能力强，理解能力强，很多问题能够快速理解并实践运用。3、善于解决问题，无论是自己的问题还是帮助同事。4、打破砂锅问到底，遇到问题，绞尽脑汁也要解决。5、身体好，喜欢打球。6、喜好分享开源',
        member: '高效，自学，理解力，解决问题能力',
      },
      {
        id: 'xxx6',
        title: '我的劣势',
        logo: './selficons/bad.png',
        description: '1、对算法不精。2、不喜欢过于理论化的东西。3、讨厌加班。',
        member: '算法不精，讨厌加班',
      },
    ],
    certificate:[
      {
        time:'2015',
        name:'CET6',
      },
      {
        time:'2014',
        name:'IC3',
      },
      {
        time:'2014',
        name:'校内Java程序大赛一等奖',
      },
    ],
    social:[
      {
        name:'Github',
        link:'https://github.com/fly7632785',
      },
      {
        name:'简书',
        link:'https://www.jianshu.com/u/d234d1569eed',
      },
    ],

  },
  'GET  /resume/company': [
    {
      name:'有范科技有限公司(10-15人)',
      time:'2018-12 至今',
      icon:'./company/youfan.png',
    },
    {
      name:'蛙众科技有限公司(30-50人)',
      time:'2018-03 至 2018-12',
      icon:'./company/wazhong.png',
    },
    {
      name:'成都市飞狼科技有限公司(20-50人)',
      time:'2017-03 至 2018-03',
      icon:'./company/feilang.png',
    },
    {
      name:'成都初唐网络股份有限公司(50-150人)',
      time:'2016-06 至 2017-03',
      icon:'./company/chutang.jpg',
    },
    {
      name:'计速科技有限公司(5-10人)',
      time:'2014-09 至 2016-01',
      icon:'./company/jisu.jpg',
    },
  ],
  'GET  /resume/project': [
    {
      name:'react-admin',
      company:'个人',
      time:'2020-9 至今',
      icon:'./me.jpeg',
      desc:'1、react全家桶+dva+umijs+pro-antd实现管理后台框架\n2、该网站的搭建的部署\n3、个人网页简历\n4、SPA单页面应用',
      tech:'1、react全家桶\n2、dva+umijs+pro-antd',
      link:'',
    },
    {
      name:'GPS定位系统-java后台',
      company:'个人',
      time:'2019-12 至 2020-04',
      icon:'./me.jpeg',
      desc:'java后台，提供数据库调用存储数据，gps相关接口调用',
      tech:'1、springboot全家桶+mybatis+mybatis-generator\n2、jwt token验证\n3、服务器端docker使用，nginx、java等部署\n4、全局异常处理\n5、跨域问题处理\n6、travis+docker+阿里云镜像实现持续部署',
      link:'https://www.jianshu.com/p/2e51318c56e0',
    },
    {
      name:'GPS定位系统-Web-Admin',
      company:'个人',
      time:'2019-12 至 2020-04',
      icon:'./me.jpeg',
      desc:'web端，地图展示实时定位，地图展示轨迹，用户信息管理',
      tech:'1、Vue + Vue-cli + iview + axios + vue-router + vuex 全家桶\n2、高德地图 js api的使用\n3、axios restful接口的异常处理封装\n' +
        '4、modal弹框编辑个人信息template\n5、admin管理框架\n6、nginx+docker部署\n7、arme.sh申请免费证书，域名+证书实现https接口访问\n8、SPA单页面应用',
      link:'https://www.jianshu.com/p/9df016cd65fa',
    },
    {
      name:'GPS定位系统-App',
      company:'个人',
      time:'2019-12 至 2020-04',
      icon:'./me.jpeg',
      desc:'App保活，定位，定时上传数据',
      tech:'1、高德地图、定位使用\n2、高德坐标系转换\n3、模拟定位\n4、卸载重装也不变的uuid|imei\n5、保活策略和原理',
      link:'https://www.jianshu.com/p/e463b1ea6b7d',
    },
    {
      name:'HDP',
      company:'有范科技有限公司',
      time:'2018-12 至今',
      icon:'./company/youfan.png',
      responsibility:'1、项目迭代更新及其维护\n2、广告模块接入，通过价格比较权重方案，为广告争取最大收益\n3、优化配置，节目源等结构，节约oss的每月几十G的cdn成本\n4、需求评审\n5、代码审查',
      desc:'AndroidTv的百万级电视直播App。切台快，广告少，适配各中类型的盒子及其智能电视，覆盖全省所有几千个电视频道',
      tech:'1、ijkplayer编译、封装\n2、插件的升级、管理\n3、源加密解密\n4、tvbus相关p2p源使用\n5、渠道、地域、版本等多维度定制开发',
      link:'http://www.hdplive.net',
    },
    {
      name:'橙色直播',
      company:'个人',
      time:'2019-02 至今',
      icon:'./me.jpeg',
      responsibility:'',
      desc:'AndroidTv的电视直播App。切台快，广告少，精简版',
      tech:'1、ijkplayer编译、封装\n2、插件的升级、管理\n3、源加密解密\n4、tvbus相关p2p源使用\n5、渠道、地域、版本等多维度定制开发',
      link:'http://www.dangbei.com/app/tv/2020/0605/7510.html',
    },
    {
      name:'口袋电视',
      company:'有范科技有限公司',
      time:'2019-02 至 2019-04',
      icon:'./company/youfan.png',
      responsibility:'1、基盘框架搭建\n2、技术选型\n3、独立开发',
      desc:'电视直播App手机版。具有投屏、回看、截图、录制等功能',
      tech:'1、ijkplayer编译、封装\n2、视频控制器，音量、亮度等视图封装\n3、DLNA投屏协议实现投屏功能\n4、重写ijk C层，实现rtmp、rtsp视频录制功能\n5、插件化',
      link:'http://www.hdplive.net',
    },
    {
      name:'云校卫',
      company:'蛙众科技有限公司',
      time:'2018-03 至 2018-12',
      icon:'./company/wazhong.png',
      responsibility:'im的开发，实时音视频，pstn落地电话的二次开发和实现, OA移动办公一套开发',
      desc:'智慧校园App。有校园保卫，门禁，即时通讯，人脸识别，教学教务，校园管控等功能',
      tech:'1、IM即时通信，socket长连接，google ProtoBuf通信协议\n2、pstn sdk集成，实时音视频电话\n3、人脸识别模块，App端相机调用及其图像处理',
      link:'http://www.sgurad.com/',
    },
    {
      name:'校园事务通',
      company:'蛙众科技有限公司',
      time:'2018-03 至 2018-12',
      icon:'./company/wazhong.png',
      responsibility:'im的开发，实时音视频，pstn 落地电话的二次开发和实现，OA 移动办公一套开发',
      desc:'校园管理平台类App。考勤、签到、审批、办公、音视频、voip网络电话等功能',
      tech:'1、IM即时通信，socket长连接，google ProtoBuf通信协议\n2、人脸识别模块，App端相机调用及其图像处理',
      link:'https://sj.qq.com/myapp/detail.htm?apkName=com.education.cuiteducation',
    },
    {
      name:'阿坝地质灾害监管平台',
      company:'蛙众科技有限公司',
      time:'2018-03 至 2018-08',
      icon:'./company/wazhong.png',
      responsibility:'1、完成产品的设计\n2、架构设计、技术选型、基盘搭建 \n3、独立开发和测试',
      desc:'阿坝地质灾害监管平台。拥有 oa 相关功能模块，灾害监管相关功能模块，即时通讯模块，视频观测，地图监管等',
      tech:'1、mvp+okhttp+eventbus \n2、高德地图开发\n3、数据图表MPandroidchart\n4、萤石云视频监\n5、IM即时通讯 \n6、仿支付宝菜单模块 \n7、富文本编辑',
      link:'',
    },
    {
      name:'Blockly',
      company:'外包',
      time:'2018-04 至 2018-05',
      icon:'./me.jpeg',
      responsibility:'1、Blockly 的二次开发，包括控制指令协议拟定\n2、蓝牙与智能硬件通信\n3、蓝牙串口通信协议',
      desc:'少儿编程类App。基于Google开源的少儿编程框架Blockly的定制开发，App少儿编程蓝牙控制智能机器人项目',
      tech:'1、Android Ble蓝牙相关\n2、Blockly 编程框架二次开发\n3、js与android交互',
      link:'https://www.jianshu.com/p/ff4c515a62d6',
    },
    {
      name:'arduino智能小车',
      company:'个人',
      time:'2018-04 至 2018-05',
      icon:'./me.jpeg',
      desc:'arduino智能硬件小车。1、基于arduino硬件模块，编写c语言程序，实现小车的 循迹、避障、移动\n2、定制蓝牙串口协议，App与蓝牙通信，操控小车运行',
      tech:'1、arduino硬件模块，包括电机、红外传感器、面包板、电池盒、蓝牙模块、距离传感器等组装拼接\n2、c语言编写运行程序\n3、蓝牙串口模块通信，控制小车',
      link:'https://www.jianshu.com/p/eb20bcbfff45',
    },
    {
      name:'啊哈锁屏',
      company:'个人练手',
      time:'2018-01 至 2018-02',
      icon:'./me.jpeg',
      responsibility:'1、App 的设计\n2、App 技术选型、基盘搭建、开发',
      desc:'记单词的锁屏软件。专门为没有自觉性的人设计，主要收录的cet6级词汇',
      tech:'1、锁屏技术，关于window类型的浮窗使用\n2、realm数据库使用\n3、数据库数据表设计及其数据导入\n4、字符串匹配、正则表达式\n5、随机乱序的策略\n6、前台service保活进程',
      link:'https://www.jianshu.com/p/0bc3d3a65243',
    },
    {
      name:'万代',
      company:'成都市飞狼科技',
      time:'2017-11 至 2018-01',
      icon:'./company/feilang.png',
      responsibility:'1、产品迭代升级\n2、产品 bug 修复，隐形 bug 分析',
      desc:'日本万代公司的周边商城类App。购物车，订单，个人中心，周边，社区等功能',
      tech:'MVP模式、rxjava+retrofit+okhttp',
      link:'https://play.google.com/store/apps/details?id=jp.pbandai.app',
    },
    {
      name:'Tak',
      company:'成都市飞狼科技',
      time:'2017-11 至 2017-12',
      icon:'./company/feilang.png',
      responsibility:'1、技术选型、基盘搭建\n2、App 的设计与研发',
      desc:'一款日本的运动类App。主要功能是从google fit服务器获取步数信息，与别人PK等',
      tech:'1、Google Fit服务交互开发\n2、MVP模式\n3、rxjava+retrofit+okhttp\n4、个别模块尝试kotlin开发',
      link:'',
    },
    {
      name:'HealthCare',
      company:'成都市飞狼科技',
      time:'2017-06 至 2017-10',
      icon:'./company/feilang.png',
      responsibility:'1、App 数据统计图表模块开发\n2、App 登录、设置、公共模块发开',
      desc:'这是一款日本的健康 App，涉及功能有:统计健康数据信息，压力测试，图表展示，病例 管理等等',
      tech:'1、Google Fit 服务交互开发\n2、MPAndroidChart 图表应用\n3、rxjava+retrofit+okhttp\n4、单元测试覆盖',
      link:'https://play.google.com/store/apps/details?id=jp.co.nittsusystem.healthcare',
    },
    {
      name:'客管家',
      company:'成都初唐网络科技',
      time:'2016-06 至 2016-12',
      icon:'./company/chutang.jpg',
      responsibility:'1、App 的迭代、升级\n2、App 的 BUG 修复\n3、研究学习插件化、热更新相关',
      desc:'一款客立方房地产的客户管理软件',
      tech:'1、Volley 框架应用\n2、Zeus 插件化框架\n3、插件化、热更新',
      link:'http://www.pretang.com/',
    },
    {
      name:'楼市小秘书',
      company:'成都初唐网络科技',
      time:'2016-06 至 2016-12',
      icon:'./company/chutang.jpg',
      responsibility:'1、App 的迭代、升级\n2、App 的 BUG 修复\n3、研究学习插件化、热更新相关\n',
      desc:'一款楼市经济人的管理软件',
      tech:'1、Volley 框架应用\n2、Zeus 插件化框架\n3、插件化、热更新\n4、数据表格',
      link:'http://www.pretang.com/',
    },
  ],
  'GET  /resume/skill': radarData
}
