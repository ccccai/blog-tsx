/*
 * @Author: caishiyin
 * @Date: 2023-06-17 03:40:47
 * @LastEditTime: 2023-09-10 22:40:49
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/MdViewer.tsx
 */
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import 'prismjs/themes/prism.css'
import Prism from 'prismjs'
import { ViewerProps, Viewer } from '@toast-ui/react-editor'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'

const MdViewer = ({
    initialValue = '',
    usageStatistics = false,
    plugins= [[codeSyntaxHighlight, { highlighter: Prism }]]
}: ViewerProps) => {
    return  (
        <Viewer
            initialValue={initialValue}
            plugins={plugins}
            usageStatistics={usageStatistics}
        />
    )
}

export default MdViewer
