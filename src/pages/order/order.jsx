import { View, label } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
export default function Order() {
  const pages = Taro.getCurrentPages();
  const current = pages[pages.length - 1];
  const eventChannel = current.getOpenerEventChannel();
  // 接收 A页面的 events 中的 acceptDataFromOpenerPage 传递的数据
  eventChannel.on("acceptDataFromOpenerPage", (res) => {
    console.log(res);
    window.orderArray = res.data;
  });
  const newArray = window.orderArray.orderArray;
  const totalPrice = window.orderArray.totalPrice;
  console.log(newArray);
  function Return() {
    Taro.navigateBack();
  }
  return (
    <>
      <View className="total">本单总计：{totalPrice}元 </View>
      <View className="tip">以下是商品明细:</View>
      <View className="list">
        {newArray.map((item) => {
          return (
            <view className="list-content">
              <view className="name">品名:{item.title}</view>
              <view className="count">数量:{item.count}</view>
              <view className="price">单价:{item.price}</view>
            </view>
          );
        })}
      </View>
      <View>
        <button
          type="primary"
          onClick={() => {
            Return();
          }}
        >
          返回首页
        </button>
      </View>
    </>
  );
}
