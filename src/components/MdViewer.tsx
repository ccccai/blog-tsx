/*
 * @Author: caishiyin
 * @Date: 2023-06-17 03:40:47
 * @LastEditTime: 2023-06-17 21:29:38
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/MdViewer.tsx
 */
import React from 'react'
import { MdProps } from './MdEditor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import 'prismjs/themes/prism.css'
import Prism from 'prismjs'
import { Viewer } from '@toast-ui/react-editor'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'

interface MdViewProps extends MdProps {}

const MdViewer = ({
    initialValue = '',
    usageStatistics = false,
    plugins= [[codeSyntaxHighlight, { highlighter: Prism }]]
}: MdViewProps) => {
    return  (
        <Viewer
            initialValue={initialValue}
            plugins={plugins}
            usageStatistics={usageStatistics}
        />
    )
}

export default MdViewer
