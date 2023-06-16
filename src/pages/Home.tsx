/*
 * @Author: caishiyin
 * @Date: 2020-06-14 23:10:48
 * @LastEditTime: 2023-06-15 16:45:39
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/pages/Home.tsx
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Tag, Avatar } from 'antd'
import '../styles/home.less'
import topImgUrl from '../assets/images/home-banner.jpg'
import BlogInfo from '../components/InfoBox'

const { Meta } = Card
const firstStyle = { height: 200 }
const secondStyle = { height: 250 }

const FeaturedArticlesDescription = () => (
    <div className='box-description'>
        <div className='tag-content'>
            <Tag color='cyan'>cyan</Tag>
        </div>
        <h1 className='title'>Personal Blog Website</h1>
        <p className='default description'>
            Because TypeScript is a superset of JavaScript, it doesn't have a default template - there would be too many. Instead, other projects have their own TypeScript bootstrap templates with
            their own context. These projects provide templates which include TypeScript support.
        </p>
        <div className='bottom-line'>
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            <>
                <span className='memo'>by </span>
                <span className='default'>Greeny</span>
            </>
            <span className='gary-gap' />
            <span className='memo'>19 June 2020</span>
        </div>
    </div>
)

const HeaderImg = () => (
    <div
        className='home-top-bg'
        style={{
            // height: document.body.offsetHeight,
            backgroundImage: `url(${topImgUrl})`,
        }}
    />
)

const ContentBlogInfo = () => (
    <>
        <div className='box-title'>
            <div className='title-content'>
                <div className='text'>Blog Info</div>
            </div>
            <div className='gap' />
        </div>
        <BlogInfo />
    </>
)

const ContentRecentArticle = () => (
    <>
        <div className='box-title'>
            <div className='title-content'>
                <div className='text'>Recent Articles</div>
            </div>
            <div className='gap' />
        </div>
        <Row className='box-content' justify='space-around' gutter={[{ xs: 8, sm: 8, md: 24, xl: 24, xxl: 24 }, 20]}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className='card-box'>
                <Link to='/article?id=111'>
                    <Card cover={<div className='cover-img' style={firstStyle} />} className='card-item'>
                        <Meta title='Card title' description='This is the description' />
                    </Card>
                </Link>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className='card-box'>
                <Link to='/article?id=222'>
                    <Card cover={<div className='cover-img' style={firstStyle} />} className='card-item'>
                        <Meta title='Card title' description='This is the description' />
                    </Card>
                </Link>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className='card-box'>
                <Link to='/article?id=333'>
                    <Card cover={<div className='cover-img' style={firstStyle} />} className='card-item'>
                        <Meta title='Card title' description='This is the description' />
                    </Card>
                </Link>
            </Col>
        </Row>
    </>
)

const ContentFeaturedArticles = () => (
    <>
        <div className='box-title'>
            <div className='title-content'>
                <div className='text'>Featured Articles</div>
            </div>
            <div className='gap' />
        </div>
        <Row gutter={[0, 40]} className='box-content' justify='space-around'>
            <Col span={24} className='card-box'>
                <Card cover={<div className='cover-img' style={secondStyle} />} className='card-item'>
                    <FeaturedArticlesDescription />
                </Card>
            </Col>
            <Col span={24} className='card-box'>
                <Card cover={<div className='cover-img' style={secondStyle} />} className='card-item'>
                    <FeaturedArticlesDescription />
                </Card>
            </Col>
            <Col span={24} className='card-box'>
                <Card cover={<div className='cover-img' style={secondStyle} />} className='card-item'>
                    <FeaturedArticlesDescription />
                </Card>
            </Col>
        </Row>
    </>
)

const BodyContent = () => (
    <Row justify='center' className='home-content'>
        <Col xs={22} sm={20} md={17} lg={20} xl={19} xxl={16} className='home-box' style={{ maxWidth: 1100 }}>
            <ContentRecentArticle />
        </Col>
        <Col xs={24} sm={22} md={20} lg={20} xl={19} xxl={16} style={{ maxWidth: 1100 }}>
            <Row justify='center' gutter={40}>
                <Col xs={22} sm={22} md={20} lg={10} xl={10} xxl={10} className='home-box'>
                    <ContentBlogInfo />
                </Col>
                <Col xs={22} sm={22} md={20} lg={14} xl={14} xxl={14} className='home-box'>
                    <ContentFeaturedArticles />
                </Col>
            </Row>
        </Col>
    </Row>
)

export default class Home extends Component {
    public state = {
        text: 0,
        height: document.body.offsetHeight,
    }
    public handleClick = () => {
        console.log(this.refs.homeContent)
        const dom = this.refs.homeContent as HTMLDivElement
        if (this.state.text) {
            dom.style.backgroundColor = '#fff'
        }
        console.log(this.state.text)
        this.setState({
            text: !this.state.text,
        })
        console.log(this.state.text)
    }
    render() {
        // const { height } = this.state
        return (
            <div
                ref='homeContent'
                className='home'
                // style={{
                //     minHeight: height,
                // }}
            >
                <HeaderImg />
                <BodyContent />
            </div>
        )
    }
}
