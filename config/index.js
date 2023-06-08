const config = {
  projectName: 'wx-Fruit',
  date: '2023-5-4',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/],
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  },
  copy: {
    patterns: [
      { from: 'src/components/vant-weapp/dist/wxs', to: 'dist/components/vant-weapp/dist/wxs' },
      { from: 'src/components/vant-weapp/dist/common/style', to: 'dist/components/vant-weapp/dist/common/style' },
      {
        from: 'src/components/vant-weapp/dist/common/index.wxss',
        to: 'dist/components/vant-weapp/dist/common/index.wxss',
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/index.wxs',
        to: 'dist/components/vant-weapp/dist/calendar/index.wxs',
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/utils.wxs',
        to: 'dist/components/vant-weapp/dist/calendar/utils.wxs',
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/calendar.wxml',
        to: 'dist/components/vant-weapp/dist/calendar/calendar.wxml',
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/components/month/index.wxs',
        to: 'dist/components/vant-weapp/dist/calendar/components/month/index.wxs',
      },
    ],
    options: {},
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
