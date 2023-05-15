import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
export default function Login() {
  function login() {
    Taro.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          Taro.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code,
            },
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
    })
  }

  return <Button onClick={() => login()}>登录</Button>
}
