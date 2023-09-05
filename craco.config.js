/*
 * @Author: caishiyin
 * @Date: 2020-06-14 23:33:52
 * @LastEditTime: 2023-08-29 23:47:25
 * @LastEditors: caishiyin
 * @Description: https://www.npmjs.com/package/craco-less
 * @FilePath: /blog-tsx/craco.config.js
 */
const CracoLessPlugin = require('craco-less')

module.exports = {
    webpack: {
        /**
         * 重写 webpack 任意配置
         *  - 与直接定义 configure 对象方式互斥
         *  - 几乎所有的 webpack 配置均可以在 configure 函数中读取，然后覆盖
         */
        configure: {
            ignoreWarnings: [/Failed to parse source map/],
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                postcssLoaderOptions: {
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-pxtorem')({
                            rootValue: 54, // 换算基数，默认100，自行根据效果调整。
                            mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
                            minPixelValue: 3, // 设置要替换的最小像素值默认0，这里表示大于3px会被转rem。
                            propList: ['*'],
                            // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
                            // propWhiteList: []
                        }),
                    ],
                },
            },
        },
    ],
}
