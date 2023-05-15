export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/order/index',
    'pages/my/history/index',
    'pages/login/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#fff',
    selectedColor: '#2a2d2d',
    backgroundColor: '#98c9c8',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ],
  },
})
