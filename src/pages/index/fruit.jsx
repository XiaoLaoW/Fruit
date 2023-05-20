import { View, Image, Button, Input } from '@tarojs/components'
import { useState } from 'react'
import Taro, { eventCenter } from '@tarojs/taro'
import A from '../../image/jiantou.png'
import Ad from '../../image/add.png'
import Le from '../../image/reduce.png'
import { eventHandler, window } from '@tarojs/runtime'
import { getNowTime } from '../../utils/utils'
export default function Fruit() {
  const c1 = new Taro.cloud.Cloud({
    resourceEnv: 'test-taro1-4gdydbsi405487f2',
  })
  const db = Taro.cloud.database({})
  const clientName = Taro.getStorageSync('yourName')
  const fruitList = [
    {
      id: 1,
      text: '蓝莓到货‼️‼️高品质蓝莓🫐诱人的蓝色小浆果，皮薄、肉脆、味甜！营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100',
      title: '蓝莓',
      price: '10',
      count: '',
    },
    {
      id: 2,
      text: '营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100',
      title: '草莓',
      price: '100',
      count: '',
    },
    {
      id: 3,
      text: '营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100',
      title: 'banana',
      price: '10',
      count: '',
    },
    {
      id: 4,
      text: '营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100',
      title: '宁夏大西瓜',
      price: '10',
      count: '',
    },
    {
      id: 5,
      text: '营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100',
      title: '仙人球',
      price: '10',
      count: '',
    },
    {
      id: 6,
      text: '营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100',
      title: '玛卡巴卡',
      price: '10',
      count: '',
    },
    {
      id: 7,
      text: '营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100',
      title: '无锡底细',
      price: '10',
      count: '',
    },
    {
      id: 8,
      text: '营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100',
      title: 'banan',
      price: '10',
      count: '',
    },
  ]
  const [List, setList] = useState(fruitList)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  function Less(id, text, title, price, count) {
    const oldId = id
    const oldText = text
    const oldtitle = title
    const oldPrice = price
    const newCount = Number(count) - 1
    const newArray = {
      id: oldId,
      text: oldText,
      title: oldtitle,
      price: oldPrice,
      count: newCount,
    }
    setList((List) => {
      var ListA = JSON.parse(JSON.stringify(List))
      ListA.splice(id - 1, 1, newArray)
      return ListA
    })
    //计算总价格
    var newPrice = -1 * oldPrice
    setTotalPrice(totalPrice + newPrice)
    //计算总数量
    setTotalCount(totalCount - 1)
  }

  function Add(id, text, title, price, count) {
    const oldId = id
    const oldText = text
    const oldtitle = title
    const oldPrice = price
    const newCount = Number(count) + 1
    const newArray = {
      id: oldId,
      text: oldText,
      title: oldtitle,
      price: oldPrice,
      count: newCount,
    }
    setList((List) => {
      var ListA = JSON.parse(JSON.stringify(List))
      ListA.splice(id - 1, 1, newArray)
      return ListA
    })
    //计算总价格
    var newPrice = 1 * oldPrice
    setTotalPrice(totalPrice + newPrice)
    //计算总数量
    setTotalCount(totalCount + 1)
  }
  async function order() {
    var orderArray = []
    for (var i = 0; i < List.length; i++) {
      var id = i
      var count = Number(List[i].count)
      var title = List[i].title
      var price = List[i].price
      if (count > 0 || count < 0) {
        orderArray.push({ id, count, title, price })
      }
    }
    //如果购物车无商品，不跳转页面
    if (orderArray.length >= 1) {
      const newArray = []
      newArray.value = orderArray
      const Price = Number
      Price.vaule = totalPrice
      Taro.preload({ newArray: orderArray, totalPrice: totalPrice })
      jumpClear()
      //跳转页面
      Taro.navigateTo({
        url: '../order/index',
      })
      //上传订单、开单时间和总金额

      const addRes = await db
        .collection('orderList')
        .add({
          data: {
            array: orderArray,
            totalPrice: totalPrice,
            clientName: clientName,
            time: getNowTime(),
          },
        })
        .then((res) => {
          return res
        })
        .catch((err) => {
          return err
        })
      var id = addRes._id
      console.log(id)
      Taro.setStorageSync('id', id)

      console.log(addRes)
      if (!addRes._id) {
        Taro.showToast({
          title: '下单失败',
          icon: 'error',
          duration: 1000,
        })
      } else {
        Taro.showToast({
          title: '下单成功',
          icon: 'success',
          duration: 1000,
        })
      }
    } else {
      Taro.showToast({
        title: '请添加商品',
        icon: 'error',
        duration: 1000,
      })
    }
  }
  //手动清空清空购物车
  function clear() {
    setTotalCount(0)
    setTotalPrice(0)
    setList(fruitList)
    Taro.showLoading({
      title: '已清空购物车',
    })
    setTimeout(function () {
      Taro.hideLoading()
    }, 2000)
  }
  //跳转页面时清空购物车
  function jumpClear() {
    setTotalCount(0)
    setTotalPrice(0)
    setList(fruitList)
  }
  //更新数量
  function updateCount(e, item) {
    var inputCount = e.detail.value
    const oldId = item.id
    const oldText = item.text
    const oldtitle = item.title
    const oldPrice = item.price
    const oldCount = item.count
    const newCount = inputCount
    const newArray = {
      id: oldId,
      text: oldText,
      title: oldtitle,
      price: oldPrice,
      count: newCount,
    }
    setList((List) => {
      var ListA = JSON.parse(JSON.stringify(List))
      ListA.splice(oldId - 1, 1, newArray)
      return ListA
    })
    //计算总价格 计算总数量

    var newPrice = inputCount * oldPrice - oldCount * Number(oldPrice)
    setTotalPrice(totalPrice + Number(newPrice))
    var newTotalCount = totalCount - Number(oldCount) + Number(inputCount)
    setTotalCount(newTotalCount)
  }

  return (
    <>
      <view className="container">
        <view className="list">
          {List.map((item) => {
            return (
              <view key={item.id}>
                <view className="Number">
                  <Image src={A} className="arrow"></Image>
                </view>
                <view className="count">
                  <text>
                    {item.id}.{item.title}
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
                          item.id,
                          item.text,
                          item.title,
                          item.price,
                          item.count
                        )
                      }></Image>
                    <Image
                      src={Ad}
                      className="btn"
                      onClick={() =>
                        Add(
                          item.id,
                          item.text,
                          item.title,
                          item.price,
                          item.count
                        )
                      }></Image>
                  </view>
                </view>
                <view className="content">{item.text}</view>
              </view>
            )
          })}
        </view>
        <view className="total">
          <view className="content">
            <view className="totalP">当前总价格:{totalPrice}</view>
            <view className="totalC">购物车商品总数:{totalCount}</view>
          </view>
          <view className="totalBtn">
            <view className="totalBtnOrder">
              <Button
                size="mini"
                type="default"
                onClick={() => {
                  order()
                }}>
                下单
              </Button>
            </view>
            <view className="totalBtnClear">
              <Button
                size="mini"
                type="warn"
                onClick={() => {
                  clear()
                }}>
                清空
              </Button>
            </view>
          </view>
        </view>
      </view>
    </>
  )
}
