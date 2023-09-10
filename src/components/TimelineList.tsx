/*
 * @Author: caishiyin
 * @Date: 2020-12-09 15:15:06
 * @LastEditTime: 2023-09-11 02:02:43
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/TimelineList.tsx
 */
import '../styles/timeline-list.less'
import { Pagination } from 'antd'
import { ReactComponent as Time } from '../assets/images/svg/time.svg'

interface ListProps {
    list: Array<{
        date: string
        list: Array<any>
    }>
    total: number
    pageSize: number
    pageNo: number
    onPageChange: any
}

const TimelineList = (props: ListProps) => {
    const { list, total, pageSize, pageNo, onPageChange } = props
    return (
        <>
            <div className='timeline-content'>
                <div className='timeline-list'>
                    {list &&
                        list.length &&
                        list.map((item, index) => {
                            return item.list.length ? (
                                <div key={index}>
                                    <div className='list-year'>{item.date}</div>
                                    <div className='list-box-info'>
                                        {item.list.map((article, aIndex) => (
                                            <a href={`/article?id=${article.id}`} className='list-box' key={`a${aIndex}`}>
                                                <div className='list-img' style={{ backgroundImage: `url(${article.cover})` }} />
                                                <div className='list-desc'>
                                                    <div className='desc-date'>
                                                        <Time />
                                                        <span>{article.createDate}</span>
                                                    </div>
                                                    <div className='desc-title'>{article.title}</div>
                                                    <div className='desc-subtitle'>{article.subTitle}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                ''
                            )
                        })}
                </div>
                <div className='pager-content'>
                    {total > 0 ? (
                        <Pagination showTotal={total => `Total ${total} article`} pageSize={pageSize} current={pageNo} total={total} onChange={onPageChange} />
                    ) : (
                        <span>这个作者很懒，什么都没有写~~</span>
                    )}
                </div>
            </div>
        </>
    )
}

export default TimelineList
