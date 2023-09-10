/*
 * @Author: caishiyin
 * @Date: 2020-12-09 15:15:06
 * @LastEditTime: 2023-09-10 01:27:25
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/NotesList.tsx
 */
import '../styles/notes-list.less'
import '../styles/note.less'
import { Pagination } from 'antd'
import NoteItem from './NoteItem'

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
                                            <NoteItem data={article} key={`a${aIndex}`} />
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

export default NotesList
