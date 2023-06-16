import React, { Component, ReactNode } from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import { Layout } from 'antd'
import { Dispatch } from 'redux'
import { navList as menuList } from '../assets/settings'
import { setActiveNav } from '../actions'
import '../styles/app.less'

const { Header, Content, Footer } = Layout

interface ILocation {
    pathname: string
}

export interface IProps {
    activeNav: number
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
    
    return hasCurrent ? currentNavIndex : 0
}

class App extends Component<IProps> {
    public componentDidMount() {
        const { location } = this.props

        setActiveNav(getNavIndex(location))
    }
    public render() {
        const { activeNav, children } = this.props
        return (
            <Layout className='app-layout'>
                <Header className='header'>
                    <TopNav currentNav={activeNav} />
                </Header>
                <Content
                    className='content'
                    // style={{
                    //     minHeight: `calc(${document.body.offsetHeight}px - 380px)`,
                    // }}
                >
                    {children}
                </Content>
                <Footer className='footer'>
                    <BottomNav />
                </Footer>
            </Layout>
        )
    }
}

export default App
