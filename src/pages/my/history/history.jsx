import { View, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'
import { getArrayIndex } from '../../../utils/utils'
import { warn } from '@tarojs/shared'
export default function Order() {
  const [Array, setArray] = useState([])
  const [Price, setPrice] = useState('无购买记录')
  const [time, setTime] = useState('')
  const [locationId, setLocationId] = useState()
  try {
    Taro.getStorage({
      key: 'oldArray',
      success: (res) => {
        return res
      },
    }).then((res) => {
      setArray(res.data)
    })
    Taro.getStorage({
      key: 'Price',
      success: (res) => {
        return res
      },
    }).then((res) => {
      setPrice(res.data)
    })
    Taro.getStorage({
      key: 'time',
      success: (res) => {
        return res
      },
    }).then((res) => {
      setTime(res.data)
    })
    Taro.getStorage({
      key: 'id',
      success: (res) => {
        return res
      },
    }).then((res) => {
      setLocationId(res.data)
    })
  } catch (error) {
    console.log('未获取到缓存')
  }
  //撤销单据
  const [type1, setType1] = useState(1)
  async function revoke() {
    const c1 = new Taro.cloud.Cloud({
      resourceEnv: 'test-taro1-4gdydbsi405487f2',
    })
    const db = Taro.cloud.database({})
    await db
      .collection('orderList')
      .where({
        _id: locationId,
      })
      .remove()
    Taro.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 1000,
    })
    setType1(0)
  }
  return (
    <>
      <view>
        {Array.map((item) => {
          return (
            <View className="goods" key={item.index}>
              <view className="name">
                {getArrayIndex(Array, item) + 1}.{item.title}
              </view>
              <view className="count">数量:{item.count}</view>
              <view className="price">单价:{item.price}</view>
            </View>
          )
        })}
      </view>
      <view>订单总金额:{Price}</view>
      <view>{time}</view>
      <button type={type1 ? 'warn' : 'primary'} onClick={() => revoke()}>
        撤销单据
      </button>
    </>
  )
}
