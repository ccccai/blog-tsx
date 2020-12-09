import React, { Component, ReactHTML } from 'react'
import { Layout } from 'antd'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import { withRouter } from 'react-router-dom'
import '../styles/app.less'
const { Header, Content, Footer } = Layout;
interface IProps {
  children: ReactHTML
}
class App extends Component<IProps> {
  render() {
    const { children } = this.props
    return (
      <Layout className="app-layout">
        <Header className="header">
          <TopNav />
        </Header>
        <Content
          className="content"
          style={{
            minHeight: `calc(${document.body.offsetHeight}px - 380px)`,
          }}
        >
          { children }
        </Content>
        <Footer className="footer">
          <BottomNav />
        </Footer>
      </Layout>
    )
  }
}
const AppMap: any = App
export default withRouter(AppMap)