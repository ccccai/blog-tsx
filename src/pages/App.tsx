import { useEffect, ReactNode, useState } from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import { Layout } from 'antd'
import { Dispatch } from 'redux'
import { navList as menuList } from '../assets/settings'
// import { setActiveNav } from '../actions'
import '../styles/app.less'

const { Header, Content, Footer } = Layout

interface ILocation {
    pathname: string
}

export interface IProps {
    children: ReactNode
    location: ILocation
    dispatch: Dispatch
}

const getNavIndex = (location: ILocation) => {
    let currentNavIndex = 0
    const hasCurrent = menuList.some((item, index) => {
        if (item.url === location.pathname) {
            currentNavIndex = index
            return true
        } else {
            return false
        }
    })
    
    console.log('hasCurrent', hasCurrent)
    return hasCurrent ? currentNavIndex : -1
}

const preloadImg = (imgs: Array<any>) => {
    const images = []
    for (let i = 0; i < imgs.length; i++) {
        images[i] = new Image()
        images[i].src = imgs[i]
    }
}

const App: React.FC<IProps> = ({ children, location }) => {
    const [currentNav, setCurrentNav] = useState(-1)

    window.addEventListener('load', async () => {
        console.log('load image...')
        const bannerImgs = menuList.map((item: any) => item.bannerImgUrl)
        await preloadImg(bannerImgs)
    })

    useEffect(() => {
        setCurrentNav(getNavIndex(location))
    }, [location])

    return (
            <Layout className='app-layout'>
                <Header className='header'>
                    <TopNav currentNav={currentNav} />
                </Header>
                <Content
                    className='content'
                >
                    {children}
                </Content>
                <Footer className='footer'>
                    <BottomNav />
                </Footer>
            </Layout>
        )
}

export default App
