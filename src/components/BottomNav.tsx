import React from 'react'
import { Col, Row } from 'antd'
import '../styles/nav.less'
import { ReactComponent as Bear } from '../assets/images/svg/bear.svg'

const NavTop = () => (
  <div className="bottom-nav-top">
    <div className="logo">
      <Bear />
    </div>
  </div>
)
const NavMiddle = () => (
  <div className="bottom-nav-middle">
    LOVE & PEACE
  </div>
)
const NavBottom = () => (
  <Row className="bottom-nav-bottom">
    <Col span={24} className="bottom-right">
      @2018-2020 By Caishiyin
    </Col>
    <Col span={24} className="bottom-right">
      Antd | TypeScript | Koa
    </Col>
    <Col span={24} className="bottom-right" style={{color: '#01070b'}} >
      <a rel="noopener noreferrer" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备20003849号-1</a>
    </Col>
  </Row>
)

class BottomNav extends React.Component {
  public toHome = () => {
    console.log(666)
  }
  render() {
    return (
      <Row justify="center" className="bottom-nav">
        <Col xs={22} sm={22} md={20} lg={20} xl={19} xxl={16}>
          <NavTop />
          <NavMiddle />
          <NavBottom />
        </Col>
      </Row>
    )
  }
}

export default BottomNav