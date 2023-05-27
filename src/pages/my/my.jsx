import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
// import { dateToString } from '../../utils/utils'
export default function History() {
  const [res, setRes] = useState()
  Taro.cloud
    .callFunction({
      // 要调用的云函数名称
      name: 'orderList',
      // 传递给云函数的event参数
    })
    .then((res) => {
      setRes(res.result.data)
    })
    .catch((err) => {
      console.log(err)
    })
  // const stamp1 = dateToString(new Date(new Date().setHours(0, 0, 0, 0))) //获取当天零点的时间
  //查看本端口历史单据
  function history() {
    Taro.navigateTo({ url: './history/index' })
  }
  //查看所有人的商品汇总
  async function orderList() {
    const c1 = new Taro.cloud.Cloud({
      resourceEnv: 'test-taro1-4gdydbsi405487f2',
    })

    const ResultList = []
    ResultList.value = res
    console.log(res)
    Taro.preload({ ResultList: res })
    Taro.navigateTo({ url: './orderList/index' })
  }
  //清空数据库
  async function clearList() {
    //判断权限
    Taro.showModal({
      editable: true,
      placeholderText: '请输入密码',
      success: async (res) => {
        if (res.confirm && res.content == 1) {
          const c1 = new Taro.cloud.Cloud({
            resourceEnv: 'test-taro1-4gdydbsi405487f2',
          })
          const db = Taro.cloud.database({})
          await db
            .collection('orderList')
            .where({
              all: null,
            })
            .remove()
          Taro.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000,
          })
        } else if (res.cancel) {
          console.log('用户取消')
        } else {
          Taro.showToast({
            title: '密码错误',
            icon: 'error',
          })
        }
      },
    })
  }
  //更新商品列表
  function upDate() {
    //判断权限
    Taro.showModal({
      editable: true,
      placeholderText: '请输入密码',
      success: async (res) => {
        if (res.confirm && res.content == 1) {
          Taro.navigateTo({
            url: './upDate/index',
          })
        } else if (res.cancel) {
          console.log('用户取消')
        } else {
          Taro.showToast({
            title: '密码错误',
            icon: 'error',
          })
        }
      },
    })
  }
  return (
    <>
      <View className="history1">
        <text onClick={() => history()}>我的订单</text>
      </View>
      <View className="history1">
        <text onClick={() => orderList()}>拼团汇总</text>
      </View>

      <View className="history">
        <text onClick={() => upDate()}>更新商品</text>
      </View>
      <View className="history">
        <text onClick={() => clearList()}>删库</text>
      </View>
    </>
  )
}
