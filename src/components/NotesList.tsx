import '../styles/notes-list.less'
import { Pagination } from 'antd'
import { ReactComponent as Time } from '../assets/images/svg/time.svg'


interface ListProps {
  list: Array<{
    time: string,
    content: Array<any> 
  }>
}

const NotesList = (props: ListProps) => {
  const { list } = props
  return (
    <>
      <div className="notes-content">
        <div className="notes-list">
          {
            list.map((item, index) => (
              <div key={index}>
                <div className="list-year">{item.time}</div>
                <div className="list-box-info">
                  {
                    item.content.map((article, aIndex) => (
                      <div className="list-box" key={`a${aIndex}`}>
                        <div className="list-img" style={{backgroundImage: `url(${article.img})`}} />
                        <div className="list-desc">
                          <div className="desc-title">{article.title}</div>
                          <div className="desc-date">
                            <Time />
                            <span>{article.date}</span>
                          </div>
                          <div className="desc-text">{article.desc}</div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <div className="pager-content">
          <Pagination total={50} />
        </div>
      </div>
    </>
  )
}

export default NotesList