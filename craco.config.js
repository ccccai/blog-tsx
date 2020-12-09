/*
 * @Author: caishiyin
 * @Date: 2020-06-14 23:33:52
 * @LastEditTime: 2020-12-06 17:53:09
 * @LastEditors: caishiyin
 * @Description: https://www.npmjs.com/package/craco-less
 * @FilePath: /blog-react-ts/craco.config.js
 */
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        postcssLoaderOptions: {
          ident: "postcss",
          plugins: () => [
            require('postcss-pxtorem')({
              rootValue: 54, // 换算基数，默认100，自行根据效果调整。
              mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
              minPixelValue: 3, // 设置要替换的最小像素值默认0，这里表示大于3px会被转rem。
              propList: ['*']
              // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
              // propWhiteList: []
            })
          ]
        },
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#6dafac', // 全局主色
              '@link-color': '#002230', // 链接色
              '@success-color': '#52c41a', // 成功色
              '@warning-color': '#faad14', // 警告色
              '@error-color': '#f5222d', // 错误色
              '@font-size-base': '14px', // 主字号
              '@heading-color': '#00455a', // 标题色
              '@text-color': '#000010', // 主文本色
              '@text-color-secondary': '#d57228', // 次文本色
              '@disabled-color': '#002162', // 失效色
              '@border-radius-base': '6px', // 组件/浮层圆角
              '@border-color-base': '#bd8e5d', // 边框色
              '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)' // 浮层阴影
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
