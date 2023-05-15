import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
export default function History() {
  function history() {
    Taro.navigateTo({ url: './history/index' })
  }
  return (
    <>
      <View className="history">
        <text onClick={() => history()}>历史订单</text>
      </View>
    </>
  )
}
