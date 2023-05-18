import { View, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'
import { getArrayIndex } from '../../../utils/utils'
export default function List() {
  const List = Taro.getCurrentInstance().preloadData
  const result = List.ResultList.data
  console.log(result)
  //计算总金额
  const totalPrice = []

  //遍历商品
  const firstArray = []
  for (var i = 0; i < result.length; i++) {
    var Price = result[i].totalPrice
    totalPrice.push(Price)
    var secondArray = result[i].array
    for (var j = 0; j < secondArray.length; j++) {
      firstArray.push(secondArray[j])
    }
  }
  console.log(firstArray, totalPrice)
  var countSum = firstArray.reduce(function (prev, cur) {
    return cur.count + prev
  }, 0)
  var priceSum = totalPrice.reduce(function (prev, cur) {
    return cur + prev
  }, 0)

  console.log(countSum, priceSum)
  //数组去重,买了哪些商品
  let newArr = firstArray.reduce((pre, cur) => {
    if (!pre.includes(cur.title)) {
      return pre.concat(cur.title)
    } else {
      return pre
    }
  }, [])
  console.log(newArr)
  const productsCount = []
  for (var i = 0; i < newArr.length; i++) {
    var title = newArr[i]
    var newFirst = firstArray.filter((item) => item.title == title)
    console.log(newFirst)
    var count = newFirst.reduce(function (prev, cur) {
      return cur.count + prev
    }, 0)
    productsCount.push(count)

    console.log(count)
  }

  return (
    <>
      <view className="title">本次团水果总件数:{countSum}件</view>
      <view className="title">本次团水果总金额:{priceSum}元</view>
      <view>
        <text className="title">以下是商品数量汇总:</text>
      </view>
      <View className="total">
        <View>
          {newArr.map((item) => {
            return <view className="totalTitle">品名:{item}</view>
          })}
        </View>
        <View>
          {productsCount.map((item) => {
            return <view className="totalCount">总件数:{item}件</view>
          })}
        </View>
      </View>

      <View className="list">
        {firstArray.map((item) => {
          return (
            <>
              <view className="list-content" key={firstArray.index}>
                <view className="name">
                  {getArrayIndex(firstArray, item) + 1}.{item.title}
                </view>
                <view className="count">数量:{item.count}</view>
                <view className="price">单价:{item.price}</view>
              </view>
            </>
          )
        })}
      </View>
    </>
  )
}
