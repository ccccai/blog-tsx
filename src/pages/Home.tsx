/*
 * @Author: caishiyin
 * @Date: 2020-06-14 23:10:48
 * @LastEditTime: 2023-09-09 06:42:29
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/pages/Home.tsx
 */
import useFetchData from '../api/hooks'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Tag, Avatar } from 'antd'
import { navList as menuList } from '../assets/settings'
import '../styles/home.less'
import BlogInfo from '../components/InfoBox'
// import Loading from '../components/Loading'

const { Meta } = Card
const firstStyle = { height: 200 }
const secondStyle = { height: 250 }

interface IHomePageData {
    blogInfo: any[]
    categories: any[]
    featuredArticles: any[]
    recentArticles: any[]
    tags: any[]
}

interface IHomePageResData {
    resultCode: any[]
    resultMessage: any[]
    data: IHomePageData
}

const HeaderImg = () => {
    let topImgUrl = ''
    const navIndex = menuList.findIndex(item => item.title_en === 'HOME')
    if (navIndex > -1) {
        topImgUrl = menuList[navIndex].bannerImgUrl
    }
    return (
        <div
            className='home-top-bg'
            style={{
                backgroundImage: `url(${topImgUrl})`,
            }}
        />
    )
}

const ContentBlogInfo = (props: any = {}) => {
    const data = props.data || {}
    return (
        <>
            <div className='box-title'>
                <div className='title-content'>
                    <div className='text'>Blog Info</div>
                </div>
                <div className='gap' />
            </div>
            <BlogInfo blogInfo={data.blogInfo} categories={data.categories} tags={data.tags} count={data.count} />
        </>
    )
}

const ContentRecentArticle = (props: any = {}) => (
    <>
        <div className='box-title'>
            <div className='title-content'>
                <div className='text'>Recent Articles</div>
            </div>
            <div className='gap' />
        </div>
        <Row className='box-content' justify='space-between' gutter={[{ xs: 8, sm: 8, md: 24, xl: 24, xxl: 24 }, 20]}>
            {props.data &&
                props.data.map((item: any, index: number) => (
                    <Col key={'dd' + index} xs={24} sm={24} md={24} lg={8} xl={8} className='card-box'>
                        <Link to={`/article?id=${item.id}`}>
                            <Card cover={<div className='cover-img' style={{ ...firstStyle, backgroundImage: `url(${item.cover})` }} />} className='card-item'>
                                <Meta className='box-bottom-title' title={item.title} description={item.subTitle} />
                            </Card>
                        </Link>
                    </Col>
                ))}
        </Row>
    </>
)

const ContentFeaturedArticles = (props: any = {}) => {
    const data = props.data || []
    return (
        <>
            <div className='box-title'>
                <div className='title-content'>
                    <div className='text'>Featured Articles</div>
                </div>
                <div className='gap' />
            </div>
            <Row gutter={[0, 40]} className='box-content' justify='space-around'>
                {data.map((item: any, index: number) => (
                    <Col key={'card' + index} span={24} className='card-box'>
                        <Link to={`/article?id=${item.id}`}>
                            <Card cover={<div className='cover-img' style={{ ...secondStyle, backgroundImage: `url(${item.cover})` }} />} className='card-item'>
                                <div className='box-description'>
                                    <div className='tag-content'>
                                        {item.tagList &&
                                            item.tagList.map((tag: any, tagIndex: number) => (
                                                <Tag key={'tag' + tagIndex} color='cyan'>
                                                    {tag.name}
                                                </Tag>
                                            ))}
                                    </div>
                                    <h1 className='title'>{item.title || ''}</h1>
                                    <p className='default description'>{item.description}</p>
                                    <div className='bottom-line'>
                                        <Avatar src={item.authorAvatar} />
                                        <>
                                            <span className='memo'>by </span>
                                            <span className='default'>{item.author}</span>
                                        </>
                                        <span className='gary-gap' />
                                        <span className='memo'>{item.createDate}</span>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

const BodyContent = (props: any) => {
    const { blogInfo, categories, featuredArticles, recentArticles, tags, count } = props?.data || {}
    return (
        <Row justify='center' className='home-content'>
            <Col xs={22} sm={20} md={17} lg={20} xl={19} xxl={16} className='home-box' style={{ maxWidth: 1100 }}>
                <ContentRecentArticle data={recentArticles} />
            </Col>
            <Col xs={24} sm={22} md={20} lg={20} xl={19} xxl={16} style={{ maxWidth: 1100 }}>
                <Row justify='center' gutter={40}>
                    <Col xs={22} sm={22} md={20} lg={10} xl={10} xxl={10} className='home-box'>
                        <ContentBlogInfo data={{ blogInfo, categories, tags, count }} />
                    </Col>
                    <Col xs={22} sm={22} md={20} lg={14} xl={14} xxl={14} className='home-box'>
                        <ContentFeaturedArticles data={featuredArticles} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
const Home: React.FC = () => {
    // 组件加载完毕，请求数据
    const { data } = useFetchData<IHomePageResData>('/blog/home')
    return (
        <div className='home'>
            <HeaderImg />
            <BodyContent data={data} />
        </div>
    )
}

export default Home
