
import React from 'react'
import { Row, Col } from 'antd'
import avatarUrl from '../assets/images/avatar.jpg'
import { ReactComponent as Git } from '../assets/images/svg/github.svg'
import { ReactComponent as Mail } from '../assets/images/svg/mail.svg'
import { ReactComponent as Category } from '../assets/images/svg/category.svg'
import { ReactComponent as Tags } from '../assets/images/svg/tag.svg'
import '../styles/blog-info-box.less'

const tagsList = [
  'Android', 'Babel', 'Webpack', 'CSS', 'ECMAScript', 'Git', 'LESS', 'SESS', 'GitHub', 'HTML', 'JavaScript', 'ES6', 'NodeJs',
  'React', 'ReactNative', 'TypeScript', 'Koa', 'Ant Design', 'Mysql', 'PHP', 'Npm', 'px2rem', 'component', 'postman', 'umi', 'Nginx',
  'Linux', 'Apache', 'PhpStudy'
]
const getRendomFontSize = (min: number, max: number) => {
  const length = max - min;
  const num = Math.ceil(Math.random() * length + min)
  return num
}
const toTag = () => {
  console.log(33333)
}

const BlogInfoBox = () => {
  return (
    <Row gutter={[0, 30]} className="blog-info-content" justify="space-around">
      <Col span={24} className="blog-info-box persion-info">
        <div className="avatar">
          <img alt="头像" title="头像" src={avatarUrl} />
        </div>
        <div className="name">蔡诗茵</div>
        <div className="sub-title">
          <span>JavaScript/</span>
          <span>TypeScript/</span>
          <span>PHP/</span>
          <span>Vue/</span>
          <span>React/</span>
          <span>Laravel</span>
        </div>
        <ul className="detail-list">
          <li className="detail-item">
            <div className="detail-item-top">ARTICLES</div>
            <div className="detail-item-bottom">24</div>
          </li>
          <li className="detail-item">
            <div className="detail-item-top">TAGS</div>
            <div className="detail-item-bottom">12</div>
          </li>
          <li className="detail-item">
            <div className="detail-item-top">CATEGORY</div>
            <div className="detail-item-bottom">5</div>
          </li>
        </ul>
        <ul className="third-party">
          <li className="third-party-item">
            <Git title="gayhub" />
          </li>
          <li className="third-party-item">
            <Mail title="mail" />
          </li>
        </ul>
      </Col>
      <Col span={24} className="blog-info-box category-info">
        <div className="info-box-title">
          <Category />
          <span>Categories</span>
        </div>
        <ul className="category-list">
          <li className="category-list-item">
            <span>前端开发</span>
            <span className="count">3</span>
          </li>
          <li className="category-list-item">
            <span>后端开发</span>
            <span className="count">3</span>
          </li>
          <li className="category-list-item">
            <span>工具</span>
            <span className="count">3</span>
          </li>
          <li className="category-list-item">
            <span>Android</span>
            <span className="count">3</span>
          </li>
          <li className="category-list-item">
            <span>IOS</span>
            <span className="count">3</span>
          </li>
        </ul>
      </Col>
      <Col span={24} className="blog-info-box tag-info">
        <div className="info-box-title">
          <Tags />
          <span>Tags</span>
        </div>
        <ul className="tags-list">
          {
            tagsList.map((item, index) => (
              <li className="tags-list-item" key={index} style={{ fontSize: getRendomFontSize(14, 24) }}>
                <span onClick={toTag}>{item}</span>
              </li>
            ))
          }
        </ul>
      </Col>
    </Row>
  )
}

export default BlogInfoBox