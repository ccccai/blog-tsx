import { Row, Col } from 'antd'
import { navList as menuList } from '../assets/settings'
import BannerBox from '../components/BannerBox'
import BlogInfo from '../components/InfoBox'
import TimelineList from '../components/TimelineList'
import '../styles/tech.less'

const list = [
    {
        time: '2020',
        content: [
            {
                img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
                date: '2020-06-02',
                title: '使用Github Actions自动化React Native端到端测试',
            },
            {
                img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
                date: '2020-06-02',
                title: '使用Github Actions自动化React Native端到端测试',
            },
            {
                img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
                date: '2020-06-02',
                title: '使用Github Actions自动化React Native端到端测试',
            },
        ],
    },
    {
        time: '2020',
        content: [
            {
                img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
                date: '2020-06-02',
                title: '使用Github Actions自动化React Native端到端测试',
            },
            {
                img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
                date: '2020-06-02',
                title: '使用Github Actions自动化React Native端到端测试',
            },
            {
                img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
                date: '2020-06-02',
                title: '使用Github Actions自动化React Native端到端测试',
            },
        ],
    },
]
const Tech: React.FC = () => {
    let BannerImgUrl = ''
    const navIndex = menuList.findIndex(item => item.title_en === 'TECH')
    if (navIndex > -1) {
        BannerImgUrl = menuList[navIndex].bannerImgUrl
    }
    return (
        <>
            <BannerBox title='Technology' bannerUrl={BannerImgUrl} />
            <Row justify='center'>
                <Col xs={24} sm={22} xl={20} xxl={18}>
                    <Row justify='center' gutter={25}>
                        <Col xs={22} sm={22} lg={9} xl={8} className='tech-left'>
                            <BlogInfo />
                        </Col>
                        <Col xs={22} sm={22} lg={15} xl={16} className='tech-right'>
                            <div className='tech-content'>
                                <TimelineList list={list} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Tech
