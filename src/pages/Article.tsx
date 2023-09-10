/*
 * @Author: caishiyin
 * @Date: 2023-06-15 16:35:54
 * @LastEditTime: 2023-09-11 02:00:45
 * @LastEditors: caishiyin
 * @Description: 文章查看
 * @FilePath: /blog-tsx/src/pages/Article.tsx
 */
import { useEffect, useState, useRef, createRef } from 'react'
import { Row, Col, SelectProps, FloatButton, Input, message } from 'antd'
import MdViewer from '../components/MdViewer'
import MdEditor from '../components/MdEditor'
import PopForm from '../components/PopForm'
import { ReactComponent as Time } from '../assets/images/svg/time.svg'
import '../styles/article.less'
import {
    fetchArticle,
    fetchTagList,
    fetchCategoryList,
    updateArticle,
    // createArticle
} from '../api'

interface ILocation {
    search: string
}

interface IProps {
    location: ILocation
}

const Empty = ({ tips = '' }: any) => (
    <div className='empty-content'>
        <span className='empty-tips'>{tips || '啊哦。找不到内容~'}</span>
    </div>
)

const Article: React.FC<IProps> = ({ location }) => {
    // 超时或者页面销毁/路由跳转，取消请求
    const abortControllerRef = useRef<AbortController>()
    const editorRef = createRef<HTMLDivElement>()

    const [data, setData] = useState<any>({})
    const [title, setTitle] = useState<string>('')
    const [subTitle, setSubTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [pageHeight, setPageHeight] = useState<number>(0)
    const [contentHeight, setContentHeight] = useState<number>(0)
    const [editArticleId, setEditArticleId] = useState<number>(0)
    const [tagList, setTagList] = useState<SelectProps['options']>([])
    const [categoryList, setCategoryList] = useState<SelectProps['options']>([])
    const [openPopcon, setOpenPopcon] = useState<boolean>(false)

    function destory() {
        setData({})
        setPageHeight(0)
        setContentHeight(0)
        setEditArticleId(0)
        setOpenPopcon(false)
        setTagList([])
        setCategoryList([])
        abortControllerRef.current && abortControllerRef.current.abort()
    }

    const handleOpenPopcon = (isOpen: boolean) => {
        setOpenPopcon(isOpen)
    }

    const handleEditSubmit = (data: any) => {
        const params = {
            ...data,
        }
        params.title = title
        params.subTitle = subTitle
        params.description = desc
        params.content = content
        console.log('gengx ', params)

        if (editArticleId) {
            params.id = editArticleId
        } else {
            params.id = ''
        }
        updateArticle(params).then((res: any) => {
            if (Number(res.resultCode) === 0 && res?.data) {
                message.success('成功~~~')
                handleOpenPopcon(false)
            }
        })
    }

    useEffect(() => {
        const query = new URLSearchParams(location.search),
            articleId = query.get('id') || '',
            editArticleId = query.get('editid') || ''

        const innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            height = innerHeight - 80 - 20
        setPageHeight(innerHeight)
        setContentHeight(height)
        setEditArticleId(Number(editArticleId))

        fetchArticle(articleId || editArticleId).then((res: any) => {
            if (Number(res.resultCode) === 0 && res?.data) {
                setData(res.data)
                setTitle(res.data?.title)
                setSubTitle(res.data?.subTitle)
                setDesc(res.data?.description)
                setContent(res.data?.content)
            }
        })

        fetchTagList().then((res: any) => {
            if (Number(res.resultCode) === 0 && res?.data) {
                setTagList(
                    res.data.map((item: any) => ({
                        label: item.name,
                        value: item.id,
                    }))
                )
            }
        })

        fetchCategoryList().then((res: any) => {
            if (Number(res.resultCode) === 0 && res?.data) {
                setCategoryList(
                    res.data.map((item: any) => ({
                        label: item.name,
                        value: item.id,
                    }))
                )
            }
        })

        return () => destory()
    }, [location])

    return !data?.id ? (
        <Empty tips='' />
    ) : (
        <div className='article-content'>
            <Row justify='center'>
                {editArticleId > 0 ? (
                    <Col xs={24} sm={22} xxl={20}>
                        <div className='md-editor-btn'>
                            <PopForm data={data} openPopcon={openPopcon} tagList={tagList} categoryList={categoryList} onConfirm={handleEditSubmit} handleOpen={handleOpenPopcon} />
                        </div>
                        <Input className='title-input-content' size='large' placeholder='请输入标题' showCount maxLength={20} value={title} onChange={e => setTitle(e.target.value)} />
                        <Input className='title-input-content' size='large' placeholder='请输入副标题' showCount maxLength={50} value={subTitle} onChange={e => setSubTitle(e.target.value)} />
                        <Input.TextArea
                            className='description-input-content'
                            size='large'
                            placeholder='请输入简介'
                            autoSize={{ minRows: 3, maxRows: 5 }}
                            showCount
                            maxLength={250}
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                        />
                        <div className='md-editor-content'>
                            <MdEditor onRef={editorRef} initialValue={content} height={`${contentHeight}px` || '510px'} onChange={(val: string) => setContent(val)} />
                        </div>
                    </Col>
                ) : (
                    <>
                        <Col xs={24} sm={20} xxl={16}>
                            <div className='article-box'>
                                <div className='article-desc'>
                                    <div className='desc-title'>{data.title}</div>
                                    <div className='desc-subtitle'>{data.subTitle}</div>
                                    <div className='desc-date'>
                                        <Time />
                                        <span>{data.createDate}</span>
                                    </div>
                                </div>
                                <div className='article-img' style={{ backgroundImage: `url(${data.cover})` }} />
                                <div className='desc-text'>{data.description}</div>
                            </div>
                        </Col>
                        <Col xs={24} sm={20} xxl={16} className='md-viewer-content'>
                            <MdViewer initialValue={data.content} />
                        </Col>
                    </>
                )}
            </Row>

            <FloatButton.BackTop visibilityHeight={pageHeight / 2} />
        </div>
    )
}

export default Article
