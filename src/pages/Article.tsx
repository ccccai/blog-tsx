/*
 * @Author: caishiyin
 * @Date: 2023-06-15 16:35:54
 * @LastEditTime: 2023-06-17 05:05:22
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/pages/Article.tsx
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import MdViewer from '../components/MdViewer'
import '../styles/article.less'

// const Empty = ({ tips = '' }: any) => (
//     <div className='empty-content'>
//         <span className='empty-tips'>{tips || '啊哦。找不到内容~'}</span>
//     </div>
// )

export default class Article extends Component {
    render() {
        return (
            <>
                {/* <Empty tips='' /> */}
                <Row justify='center' className='article-content'>
                    <Col xs={24} sm={22} xl={20} xxl={18}>
                        <MdViewer content='|  区别    |   var   |   let   |   const   |
| ---- | ---- | ---- | ---- |
|   是否有块级作用域   |      |   ✔️   |   ✔️   |
|   是否存在变量提升   |   ✔️   |   ×   |   ×   |
|   是否添加全局属性   |   ✔️   |   ×   |   ×   |
|   能否重复声明变量   |   ✔️   |   ×   |   ×   |
|   是否存在暂时性死区   |   ×   |   ✔️   |   ✔️   |
|   是否必须设置初始值   |   ×   |   ×   |   ✔️   |
|   能否改变指针指向   |   ✔️   |   ✔️   |   ×   |
# 这是标题
```js
function myInstanceof(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left)
  // 获取构造函数的prototype对象
  let prototype = right.prototype
  
  // 判断构造函数的prototype对象是否在对象的原型链上
  while(true) {
    if (!proto) return false
    if (proto === prototype) return true
    // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法来获取指定对象的原型
    proto = Object.getPrototypeOf(proto)
  }
}
```' />
                    </Col>
                </Row>
            </>
        )
    }
}
