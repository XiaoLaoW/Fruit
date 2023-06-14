/* eslint-disable jsx-quotes */
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { getMaxIndex } from "../../../utils/utils";

export default function UpDate() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState();
  const [kind, setKind] = useState();
  // eslint-disable-next-line no-unused-vars
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
  function kindInput(e) {
    setKind(e.detail.value);
  }
  //判断当前商品种数

  useEffect(() => {
    Taro.cloud
      .callFunction({
        // 要调用的云函数名称
        name: "fruitList",
      })
      .then((res) => {
        console.log(res);
        var x = res.result.data;

        var count = getMaxIndex(x);
        console.log(x, count);
        setId(count + 1);
      });
  }, []);
  //上传商品
  // eslint-disable-next-line no-unused-vars
  const c1 = new Taro.cloud.Cloud({
    resourceEnv: "test-taro1-4gdydbsi405487f2",
  });
  const db = Taro.cloud.database();
  const good = [];
  function upLoad() {
    if (!selctedimg[0]) {
      Taro.showToast({
        title: "请选择图片",
        icon: "error",
        duration: 1000,
      });
    }
    Taro.cloud.uploadFile({
      cloudPath: "image/" + selctedimg[0].slice(11) + ".png",
      // eslint-disable-next-line no-undef
      filePath: selctedimg[0], // 文件路径
      success: (res) => {
        // get resource ID
        console.log(res.fileID);
        good.push({
          id: Number(id + 1),
          title: name,
          text: content,
          price: Number(price),
          count: "",
          kind: kind,
          src: res.fileID,
        });
        console.log(good[0]);
        if (
          good[0].id &&
          good[0].title &&
          good[0].text &&
          good[0].price &&
          good[0].kind
        ) {
          db.collection("fruitList")
            .add({
              data: good[0],
            })
            // eslint-disable-next-line no-shadow
            .then((res) => {
              console.log(res);
              Taro.showToast({
                title: "创建成功",
                icon: "success",
                duration: 2000,
              });
            })
            .catch(console.error);
          setId(Number(id + 1));
          setName("");
          setContent("");
          setPrice();
        } else {
          Taro.showToast({
            title: "商品信息不完整",
            icon: "error",
          });
        }
      },
      // eslint-disable-next-line no-unused-vars
      fail: (err) => {
        // handle error
      },
    });
  }
  //删除商品
  const [title2, setTitle2] = useState();
  function idInput1(e) {
    setTitle2(e.detail.value);
  }
  async function del() {
    if (title2) {
      await db
        .collection("fruitList")
        .where({
          title: title2,
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
    } else {
      Taro.showToast({
        title: "请输入品名",
        icon: "error",
      });
    }
  }

  //返回首页
  function back() {
    Taro.switchTab({
      url: "../../index/index",
    });
  }
  //传图
  const [selctedimg, setSelctedimg] = useState([]);
  function upLoadImage() {
    Taro.chooseMedia({
      count: 1,
      mediaType: ["image", "video"],
      sourceType: ["album", "camera"],
      maxDuration: 30,
      camera: "back",
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFiles;
        const PathsArray = [];
        for (var i = 0; i < tempFilePaths.length; i++) {
          PathsArray.push(tempFilePaths[i].tempFilePath);
        }
        // const fileName = res.tempFilePaths.slice(11)
        console.log(PathsArray);
        setSelctedimg(PathsArray);
      },
    });
  }

  return (
    <>
      <view className="page">
        <view className="goods">
          <view className="line">
            <text>品名:</text>
            <input value={name} onInput={(e) => nameInput(e)} type="text" />
          </view>
          <view className="line">
            <text>简介:</text>
            <input
              value={content}
              onInput={(e) => contentInput(e)}
              type="text"
            />
          </view>
          <view className="line">
            <text>价格:</text>
            <input value={price} onInput={(e) => priceInput(e)} type="text" />
          </view>
        </view>
        <view className="line">
          <text>品种:</text>
          <input value={kind} onInput={(e) => kindInput(e)} type="text" />
        </view>
      </view>
      <text>图片预览：</text>
      <view className="img">
        {selctedimg.map((item) => {
          return (
            <view key={item.index}>
              <image mode="aspectFill" src={item}></image>
            </view>
          );
        })}
      </view>
      <view className="btn">
        <button onClick={() => upLoadImage()} className="btn1" type="primary">
          选择图片
        </button>
      </view>
      <view className="btn">
        <button onClick={() => upLoad()} className="btn1" type="primary">
          新建上架
        </button>
      </view>
      <view className="btn">
        <view className="line">
          <text>品名:</text>
          <input value={title2} onInput={(e) => idInput1(e)} type="text" />
        </view>
        <text>删除商品需填入对应的品名</text>
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
