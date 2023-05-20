import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
export default function Login() {
  const [memberName, setMemberName] = useState()
  const userInfo = Taro.getStorageSync('yourName')
  console.log(userInfo)
  if (userInfo) {
    Taro.switchTab({
      url: '../index/index',
    })
  }
  function getValue(e) {
    setMemberName(e.detail.value)
  }
  function login() {
    if (memberName) {
      Taro.setStorageSync('yourName', memberName)
      console.log(memberName)
      Taro.switchTab({
        url: '../index/index',
      })
      Taro.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000,
      })
    } else {
      Taro.showToast({
        title: '请输入昵称',
        icon: 'error',
      })
    }
  }

  return (
    <>
      <View className="inp">
        <input
          onInput={(e) => getValue(e)}
          placeholder="请输入您的昵称"></input>
      </View>
      <View className="btn">
        <Button onClick={() => login()} type="primary">
          准备开团
        </Button>
      </View>
    </>
  )
}
