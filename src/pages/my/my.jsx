import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { dateToString } from "../../utils/utils";
export default function History() {
  const stamp1 = dateToString(new Date(new Date().setHours(0, 0, 0, 0))); //获取当天零点的时间
  console.log(stamp1);
  //查看本端口历史单据
  function history() {
    Taro.navigateTo({ url: "./history/index" });
  }
  //查看所有人的商品汇总
  async function orderList() {
    const c1 = new Taro.cloud.Cloud({
      resourceEnv: "test-taro1-4gdydbsi405487f2",
    });
    const db = Taro.cloud.database({});
    const _ = db.command;
    const result = await db
      .collection("orderList")
      .where({
        time: _.gt(stamp1),
      })
      .get();
    console.log(result);
    const ResultList = [];
    ResultList.value = result;
    Taro.preload({ ResultList: result });
    Taro.navigateTo({ url: "./orderList/index" });
  }
  //清空数据库
  async function clearList() {
    const c1 = new Taro.cloud.Cloud({
      resourceEnv: "test-taro1-4gdydbsi405487f2",
    });
    const db = Taro.cloud.database({});
    await db
      .collection("orderList")
      .where({
        all: null,
      })
      .remove();
    Taro.showToast({
      title: "删除成功",
      icon: "success",
      duration: 1000,
    });
  }
  return (
    <>
      <View className="history">
        <text onClick={() => history()}>历史订单</text>
      </View>
      <View className="history">
        <text onClick={() => orderList()}>团购汇总</text>
      </View>
      <View className="history">
        <text onClick={() => clearList()}>删库</text>
      </View>
    </>
  );
}
