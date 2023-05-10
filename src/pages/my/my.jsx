import { View, Image, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
export default function History() {
  function history() {
    Taro.getStorage({
      key: "oldArray",
      key: "Price",
      success: function (res) {
        console.log(res);
      },
    });
  }
  return (
    <>
      <View className="history">
        <text onClick={() => history()}>历史订单</text>
      </View>
    </>
  );
}
