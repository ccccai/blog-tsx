import React, { useState } from 'react'
import { Col, Row, Drawer } from 'antd'
import { Link, useHistory, withRouter } from 'react-router-dom'
import '../styles/nav.less'
import { ReactComponent as Bear } from '../assets/images/svg/bear.svg'
import { ReactComponent as More } from '../assets/images/svg/more.svg'
import { ReactComponent as Close } from '../assets/images/svg/close-drawer.svg'
import { navList as menuList } from '../assets/settings'

const NavLeft = withRouter(() => (
  <div className="top-nav-left">
    <Link className="logo" to="/" >
      <Bear />
      <span>CAISHIYIN'S BLOG</span>
    </Link>
  </div>
))
const NavCenter = ({ onClick, activeIndex }: any) => (
  <div className="top-menu-nav">
    <ul className="menu-nav-content">
      {
        menuList.map((item, index) => (
          <li className={`menu-nav-item ${activeIndex === index ? 'active-nav-item' : ''}`} key={index}>
            <span onClick={() => onClick(index, item.url)}>{item.title_en}</span>
          </li>
        ))
      }
    </ul>
  </div>
)
// const NavRight = () => (
//   <div className="top-nav-right">
//     gggg
//   </div>
// )

const TopNav: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [activeNavIndex, setActiveNavIndex] = useState(0)
  const history = useHistory()
  const drawerStyle: React.CSSProperties = {
    color: '#eaa151',
    backgroundColor: '#004853'
  }
  const toRouter = (index: number, url: string) => {
    setActiveNavIndex(index)
    history.push(url)
  }
  const handleDrawer = () => {
    console.log('handleNav')
    setVisible(true)
  }
  const onCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <div className="top-nav">
      <Row justify="center">
        <Col className="nav-content" xs={22} sm={22} md={22} lg={22} xl={20} xxl={16} style={{maxWidth: 1100}}>
          <NavLeft />
          <NavCenter activeIndex={activeNavIndex} onClick={ toRouter } />
        </Col>
      </Row>
      <div className="mobile-nav-content">
        <More onClick={handleDrawer} className="more" title="点击展开导航" />
        <NavLeft />
        <Drawer
          width="100"
          placement="left"
          closable={false}
          onClose={onCloseDrawer}
          visible={visible}
          drawerStyle={drawerStyle}
          bodyStyle={{padding:0}}
        >
          <div onClick={onCloseDrawer} className="drawer-close">
            <Close className="drawer-close-svg"/>
          </div>
          <ul className="menu-drawer-content">
            {
              menuList.map((item, index) => (
                <li className="menu-drawer-item"  onClick={onCloseDrawer} key={index}>
                  <Link to={item.url}>{item.title_en}</Link>
                </li>
              ))
            }
          </ul>
        </Drawer>
      </div>
    </div>
  )
}

export default TopNav
