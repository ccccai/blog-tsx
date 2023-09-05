/*
 * @Author: caishiyin
 * @Date: 2020-12-09 15:15:06
 * @LastEditTime: 2023-08-30 19:28:54
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/TimelineList.tsx
 */
import '../styles/timeline-list.less'
import { Pagination } from 'antd'
import { ReactComponent as Time } from '../assets/images/svg/time.svg'

interface ListProps {
    list: Array<{
        time: string
        content: Array<any>
    }>
}

const TimelineList = (props: ListProps) => {
    const { list } = props
    return (
        <>
            <div className='timeline-content'>
                <div className='timeline-list'>
                    {list.map((item, index) => (
                        <div key={index}>
                            <div className='list-year'>{item.time}</div>
                            <div className='list-box-info'>
                                {item.content.map((article, aIndex) => (
                                    <a href='/article?id=222' className='list-box' key={`a${aIndex}`}>
                                        <div className='list-img' style={{ backgroundImage: `url(${article.img})` }} />
                                        <div className='list-desc'>
                                            <div className='desc-date'>
                                                <Time />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className='desc-title'>{article.title}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='pager-content'>
                    <Pagination total={50} />
                </div>
            </div>
        </>
    )
}

export default TimelineList
