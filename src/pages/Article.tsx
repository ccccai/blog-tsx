/*
 * @Author: caishiyin
 * @Date: 2023-06-15 16:35:54
 * @LastEditTime: 2023-06-18 02:37:00
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/pages/Article.tsx
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import MdViewer from '../components/MdViewer'
import '../styles/article.less'

const Empty = ({ tips = '' }: any) => (
    <div className='empty-content'>
        <span className='empty-tips'>{tips || '啊哦。找不到内容~'}</span>
    </div>
)

const content = [
    '![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)',
    '',
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
    content: string
    location: ILocation
}

export default class Article extends Component<IProps> {
    public state = {
        article: '',
    }

    public componentDidMount(): void {
        const { content, location } = this.props
        const query = new URLSearchParams(location.search)
        const param = query.get('id') || ''

        this.setState({
            article: content || getArticle(param),
        })
    }
    public render() {
        return !this.state.article ? (
            <Empty tips='' />
        ) : (
            <Row justify='center' className='article-content'>
                <Col xs={24} sm={22} xl={20} xxl={18}>
                    <MdViewer initialValue={this.state.article} />
                </Col>
            </Row>
        )
    }
}
