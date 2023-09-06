/*
 * @Author: caishiyin
 * @Date: 2020-06-14 23:10:48
 * @LastEditTime: 2023-09-07 01:48:32
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
// const FeaturedArticlesDescription = (props: any = {}) => {
//     const data = props.data || {}
//     console.log(88888, data)
//     return (
//     )
// }

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
            <BlogInfo blogInfo={data.blogInfo} categories={data.categories} tags={data.tags} />
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
        <Row className='box-content' justify='space-around' gutter={[{ xs: 8, sm: 8, md: 24, xl: 24, xxl: 24 }, 20]}>
            {props.data &&
                props.data.map((item: any, index: number) => (
                    <Col key={index} xs={24} sm={24} md={24} lg={8} xl={8} className='card-box'>
                        <Link to={item.link}>
                            <Card cover={<div className='cover-img' style={{ ...firstStyle, backgroundImage: `url(${item.cover})` }} />} className='card-item'>
                                <Meta title={item.title} description={item.subTitle} />
                            </Card>
                        </Link>
                    </Col>
                ))}
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className='card-box'>
                <Link to='/article?id=111'>
                    <Card cover={<div className='cover-img' style={firstStyle} />} className='card-item'>
                        <Meta title='Card title' description='This is the description' />
                    </Card>
                </Link>
            </Col>
            {/*     <Col xs={24} sm={24} md={24} lg={8} xl={8} className='card-box'>
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
                </Col> */}
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
                    <Col key={index} span={24} className='card-box'>
                        <Link to={item.link}>
                            <Card cover={<div className='cover-img' style={{ ...secondStyle, backgroundImage: `url(${item.cover})` }} />} className='card-item'>
                                <div className='box-description'>
                                    <div className='tag-content'>
                                        {item.tagsList &&
                                            item.tagsList.map((tag: any, tagIndex: number) => (
                                                <Tag key={tagIndex} color='cyan'>
                                                    {tag.name}
                                                </Tag>
                                            ))}
                                        {/* <Tag color='cyan'>cyan</Tag> */}
                                    </div>
                                    <h1 className='title'>{item.title || ''}</h1>
                                    <p className='default description'>{item.description}</p>
                                    <div className='bottom-line'>
                                        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                                        <>
                                            <span className='memo'>by </span>
                                            <span className='default'>{item.author}</span>
                                        </>
                                        <span className='gary-gap' />
                                        <span className='memo'>{item.groupTimestamp}</span>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                ))}
                {/* <Col span={24} className='card-box'>
                <Link to='/article?id=222'>
                    <Card cover={<div className='cover-img' style={secondStyle} />} className='card-item'>
                        <FeaturedArticlesDescription />
                    </Card>
                </Link>
            </Col> */}
                {/* <Col span={24} className='card-box'>
                <Link to='/article?id=222'>
                    <Card cover={<div className='cover-img' style={secondStyle} />} className='card-item'>
                        <FeaturedArticlesDescription />
                    </Card>
                </Link>
            </Col>
            <Col span={24} className='card-box'>
                <Link to='/article?id=222'>
                    <Card cover={<div className='cover-img' style={secondStyle} />} className='card-item'>
                        <FeaturedArticlesDescription />
                    </Card>
                </Link>
            </Col> */}
            </Row>
        </>
    )
}

const BodyContent = (props: any) => {
    const { blogInfo, categories, featuredArticles, recentArticles, tags } = props?.data || {}
    console.log('blogInfo', blogInfo)
    console.log('categories', categories)
    console.log('tags', tags)
    return (
        <Row justify='center' className='home-content'>
            <Col xs={22} sm={20} md={17} lg={20} xl={19} xxl={16} className='home-box' style={{ maxWidth: 1100 }}>
                <ContentRecentArticle data={recentArticles} />
            </Col>
            <Col xs={24} sm={22} md={20} lg={20} xl={19} xxl={16} style={{ maxWidth: 1100 }}>
                <Row justify='center' gutter={40}>
                    <Col xs={22} sm={22} md={20} lg={10} xl={10} xxl={10} className='home-box'>
                        <ContentBlogInfo data={{ blogInfo, categories, tags }} />
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
    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)
    // 组件加载完毕，请求数据
    // useEffect(() => {
    //     // setLoading(true)
    //     fetchHomeData
    //         .then(res => {
    //             console.log(8888, res)
    //             // setData(res.data)
    //             // setLoading(false)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //             // setLoading(false)
    //         })
    // }, [])
    const { loading, data } = useFetchData<IHomePageResData>('/blog/home')
    console.log(loading)
    console.log(data)
    return (
        <div className='home'>
            <HeaderImg />
            <BodyContent loading={loading} data={data} />
        </div>
    )
}

export default Home
