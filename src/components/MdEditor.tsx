/*
 * @Author: caishiyin
 * @Date: 2023-06-17 03:40:47
 * @LastEditTime: 2023-09-11 01:11:12
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/MdEditor.tsx
 */
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import 'prismjs/themes/prism.css'
import Prism from 'prismjs'
import { EditorProps, Editor } from '@toast-ui/react-editor'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
// import { useImperativeHandle } from 'react'

interface MdEditorProps extends EditorProps {
    onRef: any
    onChange: any
}
const MdEditor = (
    {
        initialValue = '',
        plugins = [[codeSyntaxHighlight, { highlighter: Prism }]],
        previewStyle = 'vertical',
        height = '600px',
        language = 'zh_CN',
        placeholder = '本编辑器支持Markdown编辑，左边编辑，右边预览。',
        useCommandShortcut = false,
        usageStatistics = false,
        hideModeSwitch = true,
        onChange,
        onRef
    }: MdEditorProps
) => {
    return (
        <Editor
            ref={onRef}
            initialValue={initialValue}
            plugins={plugins}
            height={height}
            useCommandShortcut={useCommandShortcut}
            language={language}
            previewStyle={previewStyle}
            placeholder={placeholder}
            usageStatistics={usageStatistics}
            hideModeSwitch={hideModeSwitch}
            onChange={() => onChange(onRef.current.getInstance().mdEditor.el.innerText)}
        />
    )
}

export default MdEditor
