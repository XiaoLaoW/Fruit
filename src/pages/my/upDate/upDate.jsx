import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
export default function UpDate() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [content, setContent] = useState();
  const [price, setPrice] = useState();
  function idInput(e) {
    setId(e.detail.value);
  }
  function nameInput(e) {
    setName(e.detail.value);
  }
  function contentInput(e) {
    setContent(e.detail.value);
  }
  function priceInput(e) {
    setPrice(e.detail.value);
  }
  //上传商品
  const c1 = new Taro.cloud.Cloud({
    resourceEnv: "test-taro1-4gdydbsi405487f2",
  });
  const db = Taro.cloud.database();
  const good = [];
  function upLoad() {
    good.push({
      id: id + 1,
      title: name,
      text: content,
      price: price,
      count: "",
    });
    console.log(good);
    db.collection("fruitList")
      .add({
        data: good[0],
      })
      .then((res) => {
        console.log(res);
        Taro.showToast({
          title: "创建成功",
          icon: "success",
          duration: 2000,
        });
      })
      .catch(console.error);

    setId();
    setName("");
    setContent("");
    setPrice("");
    console.log(112321);
  }
  //删除商品
  const [id2, setId2] = useState();
  function idInput1(e) {
    setId2(e.detail.value);
  }
  async function del() {
    const result = await db
      .collection("fruitList")
      .where({
        id: Number(id2),
      })
      .remove()
      .then((res) => {
        console.log(res);
        Taro.showToast({
          title: "删除成功",
          icon: "success",
          duration: 2000,
        });
      })
      .catch(console.error);
  }
  //判断当前商品种数
  useEffect(() => {
    db.collection("fruitList")
      .get()
      .then((res) => {
        var count = res.data.length;
        setId(count);
      });
  }, []);
  //返回首页
  function back() {
    Taro.switchTab({
      url: "../../index/index",
    });
  }
  return (
    <>
      <view className="goods">
        <view className="line">
          <text>序号:</text>
          <input value={id + 1} onInput={(e) => idInput(e)} type="text" />
        </view>
        <view className="line">
          <text>品名:</text>
          <input onInput={(e) => nameInput(e)} type="text" />
        </view>
        <view className="line">
          <text>简介:</text>
          <input onInput={(e) => contentInput(e)} type="text" />
        </view>
        <view className="line">
          <text>价格:</text>
          <input onInput={(e) => priceInput(e)} type="text" />
        </view>
      </view>
      <view className="btn">
        <text>新建商品时自动填充序号,无需修改</text>
        <button onClick={() => upLoad()} className="btn1" type="primary">
          新建上架
        </button>
      </view>
      <view className="btn">
        <view className="line">
          <text>序号:</text>
          <input onInput={(e) => idInput1(e)} type="text" />
        </view>
        <text>删除商品只需填入对应的序号</text>
        <button onClick={() => del()} className="btn2" type="warn">
          删除下架
        </button>
      </view>
      <view>
        <button className="btn2" onClick={() => back()}>
          返回下单
        </button>
      </view>
    </>
  );
}
