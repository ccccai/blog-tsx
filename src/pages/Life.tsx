import { useState, useEffect, useRef } from 'react'
import { Row, Col } from 'antd'
import { navList as menuList } from '../assets/settings'
import BannerBox from '../components/BannerBox'
import NotesList from '../components/NotesList'
import '../styles/life.less'
import { fetchArticleList } from '../api'

let BannerImgUrl = ''
const navIndex = menuList.findIndex(item => item.title_en === 'LIFE')
if (navIndex > -1) {
    BannerImgUrl = menuList[navIndex].bannerImgUrl
}
const Life: React.FC = () => {
    // 超时或者页面销毁/路由跳转，取消请求
    const abortControllerRef = useRef<AbortController>()

    const [loading, setLoading] = useState<boolean>(false)
    const [total, setTotal] = useState<number>(0)
    const [pageNo, setPageNo] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10)
    const [articleList, setArticleListData] = useState<any>()

    function destory() {
        setLoading(false)
        setPageNo(1)
        setPageSize(10)
        setTotal(0)
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
        handlePage(1, 10)

        return () => destory()
    }, [])

    console.log('loading', loading)
    return (
        <>
            <BannerBox title='Life Notes' bannerUrl={BannerImgUrl} />
            <Row justify='center'>
                <Col xs={24} sm={22} lg={22} xl={18} xxl={16} className='life-box'>
                    <div className='life-content'>
                        <NotesList list={articleList} total={total} pageSize={pageSize} pageNo={pageNo} onPageChange={handlePage} />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Life
