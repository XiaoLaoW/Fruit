import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import { getNowTime } from "../../utils/utils";
import Index from ".";
export default function Order() {
  const List = Taro.getCurrentInstance().preloadData;
  const newArray = List.newArray;
  const totalPrice = List.totalPrice;

  Taro.setStorage({
    key: "time",
    data: getNowTime(),
  });
  Taro.setStorage({
    key: "Price",
    data: totalPrice,
  });
  Taro.setStorage({
    key: "oldArray",
    data: newArray,
  });
  function Return() {
    Taro.navigateBack();
  }
  return (
    <>
      <View className="total">本单总计：{totalPrice.toFixed(2)}元 </View>
      <View className="tip">以下是商品明细:</View>
      <View className="list">
        {newArray.map((item) => {
          return (
            <view className="list-content">
              <view className="name">
                {item.id + 1}.品名:{item.title}
              </view>
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
