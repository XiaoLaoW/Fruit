export default definePageConfig({
  navigationBarTitleText: "拼果团",
  enablePullDownRefresh: true,
  onReachBottomDistance: 30,
  backgroundTextStyle: "dark",
  usingComponents: {
    "van-search": "../../components/vant-weapp/dist/search/index",
  },
});
