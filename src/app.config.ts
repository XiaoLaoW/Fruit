export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/index/index',
    'pages/my/index',
    'pages/order/index',
    'pages/my/history/index',
    'pages/my/orderList/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#2CC2C3',
    navigationBarTitleText: '拼果团',
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
