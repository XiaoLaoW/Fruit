import { View, Image, Input, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { eventCenter, usePullDownRefresh } from "@tarojs/taro";
import A from "../../image/jiantou.png";
import Ad from "../../image/add.png";
import Le from "../../image/reduce.png";
import { eventHandler, window } from "@tarojs/runtime";
import { getNowTime, getArrayIndex } from "../../utils/utils";
export default function Fruit() {
  // const ListValue = Taro.getCurrentInstance().preloadData;
  const c1 = new Taro.cloud.Cloud({
    resourceEnv: "test-taro1-4gdydbsi405487f2",
  });
  const db = Taro.cloud.database();
  const clientName = Taro.getStorageSync("yourName"); // 获取本地缓存中的用户名
  const [List, setList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [searchArray, setSearchArray] = useState([]);
  const [searchIpt, setSearchIpt] = useState(true);
  //获取水果列表
  useEffect(() => {
    Taro.showNavigationBarLoading();
    Taro.cloud
      .callFunction({
        // 要调用的云函数名称
        name: "fruitList",
        // 传递给云函数的event参数
      })
      .then((res) => {
        setList(res.result.data);
        Taro.hideNavigationBarLoading();
      })
      .catch((err) => {
        console.log(error);
      });
    // db.collection("fruitList")
    //   .get()
    //   .then((res) => {
    //     setList(res.data);
    //     Taro.hideNavigationBarLoading();
    //   });
  }, []); //页面加载时获取列表数据
  async function FruitList1() {
    Taro.cloud
      .callFunction({
        // 要调用的云函数名称
        name: "fruitList",
      })
      .then((res) => {
        setList(res.result.data);
      })
      .catch((err) => {});
  }
  //下拉刷新水果列表
  usePullDownRefresh(async () => {
    Taro.cloud
      .callFunction({
        // 要调用的云函数名称
        name: "fruitList",
      })
      .then((res) => {
        console.log("已更新:");

        setList(() => {
          var newList1 = [];

          const newList = res.result.data;
          console.log(1, newList1, newList);
          if (List.length < newList.length) {
            for (var i = 0; i < List.length; i++) {
              newList1.push(List[i]);
            }
            for (var j = List.length; j < newList.length; j++) {
              newList1.push(newList[j]);
            }
          } else if (List.length > newList.length) {
            for (var x = 0; x < List.length; x++) {
              var obj = List[x];
              for (var y = 0; y < newList.length; y++) {
                var newObj = newList[y];
                if (obj.title === newObj.title) {
                  newList1.push(obj);
                }
              }
            }
            var price = 0;
            var count = 0;
            for (var j = 0; j < newList1.length; j++) {
              price = newList1[j].count * newList1[j].price + price;
              count = newList1[j].count + count;
            }
            console.log(price, count);
            setTotalPrice(price);
            setTotalCount(count);
          } else {
            for (var i = 0; i < List.length; i++) {
              newList1.push(List[i]);
            }
          }

          console.log(2, newList1);
          return newList1;
        });
      });

    Taro.stopPullDownRefresh();
  });
  //从数据获取最新列表后，再把原有的商品数量添加到新列表里

  function Less(item, id, text, title, price, count) {
    const newId = getArrayIndex(List, item);
    const oldId = id;
    const oldText = text;
    const oldtitle = title;
    const oldPrice = price;
    const newCount = Number(count) - 1;
    const newArray = {
      id: oldId,
      text: oldText,
      title: oldtitle,
      price: oldPrice,
      count: newCount,
    };
    setList((List) => {
      var ListA = JSON.parse(JSON.stringify(List));
      ListA.splice(newId, 1, newArray);
      return ListA;
    });
    //计算总价格
    var newPrice = -1 * oldPrice;
    setTotalPrice(totalPrice + newPrice);
    //计算总数量
    setTotalCount(totalCount - 1);
  }

  function Add(item, id, text, title, price, count) {
    const newId = getArrayIndex(List, item);
    const oldId = id;
    const oldText = text;
    const oldtitle = title;
    const oldPrice = price;
    const newCount = Number(count) + 1;
    const newArray = {
      id: oldId,
      text: oldText,
      title: oldtitle,
      price: oldPrice,
      count: newCount,
    };
    setList((List) => {
      var ListA = JSON.parse(JSON.stringify(List));
      ListA.splice(newId, 1, newArray);
      return ListA;
    });
    //计算总价格
    var newPrice = 1 * oldPrice;
    setTotalPrice(totalPrice + newPrice);
    //计算总数量
    setTotalCount(totalCount + 1);
  }
  async function order() {
    var orderArray = [];
    for (var i = 0; i < List.length; i++) {
      var id = i;
      var count = Number(List[i].count);
      var title = List[i].title;
      var price = List[i].price;
      if (count > 0 || count < 0) {
        orderArray.push({ id, count, title, price });
      }
    }

    //如果购物车无商品，不跳转页面
    if ((orderArray.length >= 1) & (clientName != null)) {
      const newArray = [];
      newArray.value = orderArray;
      const Price = Number;
      Price.vaule = totalPrice;
      Taro.preload({ newArray: orderArray, totalPrice: totalPrice });
      jumpClear();
      //跳转页面
      Taro.navigateTo({
        url: "../order/index",
      });
      //上传订单、开单时间和总金额

      const addRes = await db
        .collection("orderList")
        .add({
          data: {
            array: orderArray,
            totalPrice: totalPrice,
            clientName: clientName,
            time: getNowTime(),
          },
        })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      var id = addRes._id;
      console.log(id);
      Taro.setStorageSync("id", id);

      console.log(addRes);
      if (!addRes._id) {
        Taro.showToast({
          title: "下单失败",
          icon: "error",
          duration: 1000,
        });
      } else {
        Taro.showToast({
          title: "下单成功",
          icon: "success",
          duration: 1000,
        });
      }
    } else {
      Taro.showToast({
        title: "请添加商品",
        icon: "error",
        duration: 1000,
      });
    }
  }
  //手动清空清空购物车
  function clear() {
    setTotalCount(0);
    setTotalPrice(0);
    FruitList1();
    Taro.showLoading({
      title: "已清空购物车",
    });
    setTimeout(function () {
      Taro.hideLoading();
    }, 2000);
  }
  //跳转页面时清空购物车
  function jumpClear() {
    setTotalCount(0);
    setTotalPrice(0);
    FruitList1();
  }
  //更新数量
  function updateCount(e, item) {
    const newId = getArrayIndex(List, item);
    var inputCount = e.detail.value.replace(",", ".");
    console.log(inputCount);

    if (inputCount.includes(",")) {
      Taro.showToast({
        title: "请检查符号数量",
        icon: "error",
      });
      const oldId = item.id;
      const oldText = item.text;
      const oldtitle = item.title;
      const oldPrice = item.price;
      const oldCount = item.count;
      const newArray = {
        id: oldId,
        text: oldText,
        title: oldtitle,
        price: oldPrice,
        count: oldCount,
      };
      setList((List) => {
        var ListA = JSON.parse(JSON.stringify(List));
        ListA.splice(newId, 1, newArray);
        return ListA;
      });
    } else {
      const oldId = item.id;
      const oldText = item.text;
      const oldtitle = item.title;
      const oldPrice = item.price;
      const oldCount = item.count;
      const newCount = inputCount;
      const newArray = {
        id: oldId,
        text: oldText,
        title: oldtitle,
        price: oldPrice,
        count: newCount,
      };
      setList((List) => {
        var ListA = JSON.parse(JSON.stringify(List));
        ListA.splice(newId, 1, newArray);
        console.log(newArray);
        return ListA;
      });
      //计算总价格 计算总数量

      var newPrice = inputCount * oldPrice - oldCount * Number(oldPrice);
      setTotalPrice(totalPrice + Number(newPrice));
      var newTotalCount = totalCount - Number(oldCount) + Number(inputCount);
      setTotalCount(newTotalCount);
    }
  }
  function updateSearchCount(event, item) {
    console.log(item);
    const newId = getArrayIndex(searchArray, item);
    const newId1 = getArrayIndex(List, item);
    var inputCount = event.detail.value.replace(",", ".");
    if (inputCount.includes(",")) {
      Taro.showToast({
        title: "请检查符号数量",
        icon: "error",
      });
      const oldId = item.id;
      const oldText = item.text;
      const oldtitle = item.title;
      const oldPrice = item.price;
      const oldCount = item.count;
      const newArray = {
        id: oldId,
        text: oldText,
        title: oldtitle,
        price: oldPrice,
        count: oldCount,
      };
      setSearchArray((searchArray) => {
        var ListA = JSON.parse(JSON.stringify(searchArray));
        ListA.splice(newId, 1, newArray);
        return ListA;
      });
    } else {
      const oldId = item.id;
      const oldText = item.text;
      const oldtitle = item.title;
      const oldPrice = item.price;
      const oldCount = item.count;
      const newCount = inputCount;
      const newArray = {
        id: oldId,
        text: oldText,
        title: oldtitle,
        price: oldPrice,
        count: newCount,
      };
      setSearchArray((searchArray) => {
        var ListA = JSON.parse(JSON.stringify(searchArray));
        ListA.splice(newId, 1, newArray);
        return ListA;
      });
      setList((List) => {
        var ListA = JSON.parse(JSON.stringify(List));
        ListA.splice(newId1, 1, newArray);
        console.log(newId1, newArray, ListA);
        return ListA;
      });
      //计算总价格 计算总数量
      var newPrice = inputCount * oldPrice - oldCount * Number(oldPrice);
      setTotalPrice(totalPrice + Number(newPrice));
      var newTotalCount = totalCount - Number(oldCount) + Number(inputCount);
      setTotalCount(newTotalCount);
    }
  }
  function search(e) {
    if (e.detail) {
      var content = e.detail.value;
      var newSearchArray = List.filter((item) => {
        return item.title.includes(content);
      });
      console.log(newSearchArray.length);
      setSearchArray(newSearchArray);
      if (newSearchArray.length === 0) {
        Taro.showToast({
          title: "未找到水果",
          icon: "error",
          duration: 2000,
        });
      }
    }
  }
  function hide() {
    setSearchIpt(false);
  }
  function back() {
    setSearchIpt(true);
    setSearchArray([]);
  }
  return (
    <>
      <view className="search">
        <van-search
          ConfirmType="search"
          onFocus={() => hide()}
          onBlur={(e) => search(e)}
          placeholder="请输入搜索关键词"
        />
        <button
          onClick={() => back()}
          size="mini"
          style={searchIpt == true ? "display:none" : "display:flex"}
        >
          返回列表
        </button>
        <view
          className="search-content"
          style={searchIpt == true ? "display:none" : "display:flex"}
        >
          {searchArray.map((item) => {
            return (
              <view key={item.id}>
                <view className="Number">
                  <Image src={A} className="arrow"></Image>
                </view>
                <view className="count">
                  <text>
                    {getArrayIndex(searchArray, item) + 1}.{item.title}
                  </text>
                  <Input
                    className="input"
                    placeholder="0"
                    type="digit"
                    value={item.count}
                    onBlur={(event) => updateSearchCount(event, item)}
                  />
                  <text className="countText">购买数量:</text>
                </view>
                <view className="price">单价:{item.price}</view>
                <view className="content">{item.text}</view>
              </view>
            );
          })}
        </view>
      </view>

      <view
        className="container"
        style={searchIpt == false ? "display:none" : "display:flex"}
      >
        <view className="list">
          {List.map((item) => {
            return (
              <view key={item.id}>
                <view className="Number">
                  <Image src={A} className="arrow"></Image>
                </view>
                <view className="count">
                  <text>
                    {getArrayIndex(List, item) + 1}.{item.title}
                  </text>
                  <Input
                    className="input"
                    placeholder="0"
                    type="digit"
                    value={item.count}
                    onBlur={(event) => updateCount(event, item)}
                  />
                  <text className="countText">购买数量:</text>
                </view>
                <view className="price">
                  单价:{item.price}
                  <view className="countBtn">
                    <Image
                      src={Le}
                      className="btn"
                      onClick={() =>
                        Less(
                          item,
                          item.id,
                          item.text,
                          item.title,
                          item.price,
                          item.count
                        )
                      }
                    ></Image>
                    <Image
                      src={Ad}
                      className="btn"
                      onClick={() =>
                        Add(
                          item,
                          item.id,
                          item.text,
                          item.title,
                          item.price,
                          item.count
                        )
                      }
                    ></Image>
                  </view>
                </view>
                <view className="content">{item.text}</view>
              </view>
            );
          })}
        </view>
        <view className="total">
          <view className="content">
            <view className="totalP">当前总价格:{totalPrice.toFixed(2)}</view>
            <view className="totalC">购物车商品总数:{totalCount}</view>
          </view>
          <view className="totalBtn">
            <view className="totalBtnOrder">
              <Button
                size="mini"
                type="default"
                onClick={() => {
                  order();
                }}
              >
                下单
              </Button>
            </view>
            <view className="totalBtnClear">
              <Button
                size="mini"
                type="warn"
                onClick={() => {
                  clear();
                }}
              >
                清空
              </Button>
            </view>
          </view>
        </view>
      </view>
    </>
  );
}
