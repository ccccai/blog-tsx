/*
 * @Author: caishiyin
 * @Date: 2023-06-15 16:35:54
 * @LastEditTime: 2023-08-30 18:19:53
 * @LastEditors: caishiyin
 * @Description: 文章查看
 * @FilePath: /blog-tsx/src/pages/Article.tsx
 */
import { useEffect, useState } from 'react'
import { Row, Col, Button, FloatButton } from 'antd'
import MdViewer from '../components/MdViewer'
import MdEditor from '../components/MdEditor'
import '../styles/article.less'

const Empty = ({ tips = '' }: any) => (
    <div className='empty-content'>
        <span className='empty-tips'>{tips || '啊哦。找不到内容~'}</span>
    </div>
)

const content = [
    '# Awesome Editor!',
    '',
    'It has been _released as opensource in 2018_ and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.',
    '',
    '## Create Instance',
    '',
    'You can create an instance with the following code and use `getHtml()` and `getMarkdown()` of the [Editor](https://github.com/nhn/tui.editor).',
    '',
    '```js',
    'const editor = new Editor(options);',
    '```',
    '',
    '> See the table below for default options',
    '> > More API information can be found in the document',
    '',
    '| name | type | description |',
    '| --- | --- | --- |',
    '| el | `HTMLElement` | container element |',
    '',
    '## Features',
    '',
    '* CommonMark + GFM Specifications',
    '   * Live Preview',
    '   * Scroll Sync',
    '   * Auto Indent',
    '   * Syntax Highlight',
    '        1. Markdown',
    '        2. Preview',
    '',
    '## Support Wrappers',
    '* CommonMark + GFM Specifications',
    '   * Live Preview',
    '   * Scroll Sync',
    '   * Auto Indent',
    '   * Syntax Highlight',
    '        1. Markdown',
    '        2. Preview',
    '',
    '## Support Wrappers',
    '* CommonMark + GFM Specifications',
    '   * Live Preview',
    '   * Scroll Sync',
    '   * Auto Indent',
    '   * Syntax Highlight',
    '        1. Markdown',
    '        2. Preview',
    '',
    '## Support Wrappers',
    '* CommonMark + GFM Specifications',
    '   * Live Preview',
    '   * Scroll Sync',
    '   * Auto Indent',
    '   * Syntax Highlight',
    '        1. Markdown',
    '        2. Preview',
    '',
    '## Support Wrappers',
    '* CommonMark + GFM Specifications',
    '   * Live Preview',
    '   * Scroll Sync',
    '   * Auto Indent',
    '   * Syntax Highlight',
    '        1. Markdown',
    '        2. Preview',
    '',
    '## Support Wrappers',
    '* CommonMark + GFM Specifications',
    '   * Live Preview',
    '   * Scroll Sync',
    '   * Auto Indent',
    '   * Syntax Highlight',
    '        1. Markdown',
    '        2. Preview',
    '',
    '## Support Wrappers',
    '* CommonMark + GFM Specifications',
    '   * Live Preview',
    '   * Scroll Sync',
    '   * Auto Indent',
    '   * Syntax Highlight',
    '        1. Markdown',
    '        2. Preview',
    '',
    '## Support Wrappers',
    '',
    '> * Wrappers',
    '>    1. [x] React',
    '>    2. [x] Vue',
    '>    3. [ ] Ember',
].join('\n')

const getArticle = (id: string) => {
    console.log('zhe ge ye mian de id shi: ' + id)
    return content
}

interface ILocation {
    search: string
}

interface IProps {
    location: ILocation
}

const Article: React.FC<IProps> = ({ location }) => {
    const [article, setArticle] = useState('')
    const [pageHeight, setPageHeight] = useState(0)
    const [contentHeight, setContentHeight] = useState(0)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        const query = new URLSearchParams(location.search),
            articleId = query.get('id') || '',
            editArticleId = query.get('editid') || ''

        const innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            height = innerHeight - 80 - 20

        setArticle(content || getArticle(articleId || editArticleId))
        setPageHeight(innerHeight)
        setContentHeight(height)
        setIsEdit(Boolean(!Number(articleId) && Number(editArticleId)))
    }, [location])

    return !article ? (
        <Empty tips='' />
    ) : (
        <div className='article-content'>
            <Row justify='center'>
                {isEdit ? (
                    <Col xs={24} sm={22} xxl={20}>
                        <div className='md-editor-content'>
                            <MdEditor initialValue={article} height={`${contentHeight}px` || '510px'} />
                        </div>

                        <div className='md-editor-btn'>
                            <Button className='submit-btn' type='primary' size='large'>
                                提交
                            </Button>
                            <Button className='cancel-btn' size='large'>
                                取消
                            </Button>
                        </div>
                    </Col>
                ) : (
                    <Col xs={24} sm={22} xxl={20} className='md-viewer-content'>
                        <MdViewer initialValue={article} />
                    </Col>
                )}
            </Row>

            <FloatButton.BackTop visibilityHeight={pageHeight / 2} />
        </div>
    )
}

export default Article
