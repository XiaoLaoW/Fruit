import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

class App extends Component<PropsWithChildren> {
  componentDidMount() {
    if (!Taro.cloud) {
      console.error
    } else {
      Taro.cloud.init({
        traceUser: true,
      })
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  render() {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
