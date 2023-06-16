/*
 * @Author: caishiyin
 * @Date: 2020-12-09 15:15:06
 * @LastEditTime: 2023-02-10 14:39:31
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: /blog-tsx/src/pages/About.tsx
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import BannerImgUrl from '../assets/images/banner-about.jpg'
import BannerBox from '../components/BannerBox'
import '../styles/about.less'

export default class Home extends Component {
    render() {
        return (
            <>
                <BannerBox title='About Me' bannerUrl={BannerImgUrl} />
                <Row justify='center' gutter={25}>
                    <Col className='about' xs={22} sm={22} xl={20} xxl={18}>
                        <p>CV工程师，目前无业游民状态；</p>
                        <p>之前的工作重心主要是VueJs，小程序，公众号H5页面等；</p>
                        <p>空闲之余自学React和Ts，对NodeJs兴趣浓厚处于入门摸索阶段；</p>
                        <p>喜欢码并致力于成为全栈工程师的普通打工人，喜欢阅读和学习带给自己的充实感。</p>
                    </Col>
                </Row>
            </>
        )
    }
}
