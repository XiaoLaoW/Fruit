import { View, Image, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";
export default function Order() {
  // const List = Taro.getCurrentInstance().preloadData
  // const hisArray = List.hisArray
  const [Array, setArray] = useState([]);
  const [Price, setPrice] = useState("没有购买记录");
  const [time, setTime] = useState("");
  try {
    Taro.getStorage({
      key: "oldArray",
      success: (res) => {
        return res;
      },
    }).then((res) => {
      setArray(res.data);
    });
    Taro.getStorage({
      key: "Price",
      success: (res) => {
        return res;
      },
    }).then((res) => {
      setPrice(res.data);
    });
    Taro.getStorage({
      key: "time",
      success: (res) => {
        return res;
      },
    }).then((res) => {
      setTime(res.data);
    });
  } catch (error) {
    console.log("未获取到缓存");
  }
  // try {
  //   Taro.getStorage({
  //     key: 'Price',
  //     success: (res) => {
  //       return res
  //     },
  //   }).then((res) => {
  //     setPrice(res.data)
  //   })
  // } catch (error) {
  //   console.log('未获取到缓存')
  // }

  return (
    <>
      <view>
        {Array.map((item) => {
          return (
            <View className="goods" key={item.index}>
              <view>品名:{item.title}</view>
              <view>数量:{item.count}</view>
              <view>单价:{item.price}</view>
            </View>
          );
        })}
      </view>
      <view>订单总金额:{Price}</view>
      <view>下单时间:{time}</view>
    </>
  );
}
