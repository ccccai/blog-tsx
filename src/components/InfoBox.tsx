/*
 * @Author: caishiyin
 * @Date: 2020-12-09 15:15:06
 * @LastEditTime: 2023-08-30 19:40:23
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/InfoBox.tsx
 */
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import avatarUrl from '../assets/images/avatar.jpg'
import { ReactComponent as Git } from '../assets/images/svg/github.svg'
import { ReactComponent as Mail } from '../assets/images/svg/mail.svg'
import { ReactComponent as Category } from '../assets/images/svg/category.svg'
import { ReactComponent as Tags } from '../assets/images/svg/tag.svg'
import '../styles/blog-info-box.less'
import { categoryList, tagsList } from '../assets/settings'

const getRendomFontSize = (min: number, max: number) => {
    const length = max - min
    const num = Math.ceil(Math.random() * length + min)
    return num
}
const toTag = () => {
    console.log(33333)
}

const BlogInfoBox: React.FC = () => {
    const query = new URLSearchParams(window.location.search),
        categoryId = query.get('category') || 0,
        tag = query.get('tag') || ''

    return (
        <Row gutter={[0, 30]} className='blog-info-content' justify='space-around'>
            <Col span={24} className='blog-info-box persion-info'>
                <div className='avatar'>
                    <img alt='头像' title='头像' src={avatarUrl} />
                </div>
                <div className='name'>蔡诗茵</div>
                <div className='sub-title'>
                    <span>JavaScript/</span>
                    <span>TypeScript/</span>
                    <span>PHP/</span>
                    <span>Vue/</span>
                    <span>React/</span>
                    <span>Laravel</span>
                </div>
                <ul className='detail-list'>
                    <li className='detail-item'>
                        <Link to={`/tech`}>
                            <div className='detail-item-top'>ARTICLES</div>
                            <div className='detail-item-bottom'>24</div>
                        </Link>
                    </li>
                    <li className='detail-item'>
                        <Link to={`/tech`}>
                            <div className='detail-item-top'>TAGS</div>
                            <div className='detail-item-bottom'>12</div>
                        </Link>
                    </li>
                    <li className='detail-item'>
                        <Link to={`/tech`}>
                            <div className='detail-item-top'>CATEGORY</div>
                            <div className='detail-item-bottom'>3</div>
                        </Link>
                    </li>
                </ul>
                <ul className='third-party'>
                    <li className='third-party-item'>
                        <Git title='gayhub' />
                    </li>
                    <li className='third-party-item'>
                        <Mail title='mail' />
                    </li>
                </ul>
            </Col>
            <Col span={24} className='blog-info-box category-info'>
                <div className='info-box-title'>
                    <Category />
                    <span>Categories</span>
                </div>
                <ul className='category-list'>
                    {categoryList.map(category => {
                        return (
                            <Link to={`/tech?category=${category.id}`} key={`category${category.id}`}>
                                <li className={`category-list-item ${Number(categoryId) === Number(category.id) ? 'active-category-item' : ''}`}>
                                    <span>{category.name}</span>
                                    <span className='count'>3</span>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </Col>
            <Col span={24} className='blog-info-box tag-info'>
                <div className='info-box-title'>
                    <Tags />
                    <span>Tags</span>
                </div>
                <ul className='tags-list'>
                    {tagsList.map((item, index) => (
                        <Link to={`/tech?tag=${encodeURIComponent(item)}`} key={`tags${index}`}>
                            <li className={`tags-list-item ${tag === item ? 'active-tags-item' : ''}`} style={{ fontSize: tag === item ? 24 : getRendomFontSize(12, 20) }}>
                                <span onClick={toTag}>{item}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </Col>
        </Row>
    )
}

export default BlogInfoBox
