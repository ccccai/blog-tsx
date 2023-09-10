/*
 * @Author: caishiyin
 * @Date: 2020-12-09 15:15:06
 * @LastEditTime: 2023-09-11 01:44:27
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/NoteItem.tsx
 */
import '../styles/note.less'
import { ReactComponent as Time } from '../assets/images/svg/time.svg'

const NoteItem: React.FC<any> = ({ data }: any) => {
    return (
        <a href={`/article?id=${data.id}`} className='list-box'>
            <div className='list-img' style={{ backgroundImage: `url(${data.cover})` }} />
            <div className='list-desc'>
                <div className='desc-title'>{data.title}</div>
                <div className='desc-subtitle'>{data.subTitle}</div>
                <div className='desc-date'>
                    <Time />
                    <span>{data.createDate}</span>
                </div>
                <div className='desc-text'>{data.description}</div>
            </div>
        </a>
    )
}

export default NoteItem
