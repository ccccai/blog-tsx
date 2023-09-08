import '../styles/notes-list.less'
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

const NotesList = (props: ListProps) => {
    const { list, total, pageSize, pageNo, onPageChange } = props
    return (
        <>
            <div className='notes-content'>
                <div className='notes-list'>
                    {list &&
                        list.length &&
                        list.map((item, index) => {
                            return item.list.length ? (
                                <div key={index}>
                                    <div className='list-year'>{item.date}</div>
                                    <div className='list-box-info'>
                                        {item.list.map((article, aIndex) => (
                                            <a href={article.link} className='list-box' key={`a${aIndex}`}>
                                                <div className='list-img' style={{ backgroundImage: `url(${article.cover})` }} />
                                                <div className='list-desc'>
                                                    <div className='desc-title'>{article.title}</div>
                                                    <div className='desc-date'>
                                                        <Time />
                                                        <span>{article.createDate}</span>
                                                    </div>
                                                    <div className='desc-text'>{article.description}</div>
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
                    <Pagination showTotal={total => `Total ${total} article`} pageSize={pageSize} current={pageNo} total={total} onChange={onPageChange} />
                </div>
            </div>
        </>
    )
}

export default NotesList
