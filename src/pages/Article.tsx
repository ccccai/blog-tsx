/*
 * @Author: caishiyin
 * @Date: 2023-06-15 16:35:54
 * @LastEditTime: 2023-06-17 04:26:21
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
                        <MdViewer />
                    </Col>
                </Row>
            </>
        )
    }
}
