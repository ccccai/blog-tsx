import { useState, useEffect, useRef } from 'react'
import { Row, Col } from 'antd'
import { navList as menuList } from '../assets/settings'
import BannerBox from '../components/BannerBox'
import BlogInfo from '../components/InfoBox'
import TimelineList from '../components/TimelineList'
import '../styles/tech.less'
import { fetchSidebarData, fetchArticleList } from '../api'

let BannerImgUrl = ''
const navIndex = menuList.findIndex(item => item.title_en === 'TECH')
if (navIndex > -1) {
    BannerImgUrl = menuList[navIndex].bannerImgUrl
}

const Tech: React.FC = () => {
    // 超时或者页面销毁/路由跳转，取消请求
    const abortControllerRef = useRef<AbortController>()

    const [loading, setLoading] = useState<boolean>(false)
    const [total, setTotal] = useState<number>(0)
    const [pageNo, setPageNo] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10)
    const [sidebarData, setSidebarData] = useState<any>()
    const [articleList, setArticleListData] = useState<any>()

    function destory() {
        setLoading(false)
        setPageNo(1)
        setPageSize(10)
        setTotal(0)
        setSidebarData(undefined)
        setArticleListData(undefined)
        abortControllerRef.current && abortControllerRef.current.abort()
    }

    function handlePage(pageNo: number, pageSize: number) {
        setPageNo(pageNo)
        setPageSize(pageSize)
        fetchArticleList({ pageNo, pageSize }).then((res: any) => {
            console.log('fetchArticleList', res)
            if (Number(res.resultCode) === 0 && res?.data) {
                setArticleListData(res.data?.list)
                setTotal(res.data?.total || 0)
            }
        })
    }

    // 组件加载完毕，请求数据
    useEffect(() => {
        setLoading(true)
        fetchSidebarData().then((res: any) => {
            console.log('fetchSidebarData', res)
            if (Number(res.resultCode) === 0 && res?.data) {
                setSidebarData(res.data)
            }
        })

        handlePage(1, 10)

        return () => destory()
    }, [])

    console.log('loading', loading)
    // console.log('pageNo', pageNo)
    // console.log('total', total)
    return (
        <>
            <BannerBox title='Technology' bannerUrl={BannerImgUrl} />
            <Row justify='center'>
                <Col xs={24} sm={22} xl={20} xxl={18}>
                    <Row justify='center' gutter={25}>
                        <Col xs={22} sm={22} lg={9} xl={8} className='tech-left'>
                            <BlogInfo blogInfo={sidebarData?.blogInfo} categories={sidebarData?.categories} tags={sidebarData?.tags} count={sidebarData?.count} />
                        </Col>
                        <Col xs={22} sm={22} lg={15} xl={16} className='tech-right'>
                            <div className='tech-content'>
                                <TimelineList list={articleList} total={total} pageSize={pageSize} pageNo={pageNo} onPageChange={handlePage} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Tech
