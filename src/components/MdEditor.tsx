/*
 * @Author: caishiyin
 * @Date: 2023-06-17 03:40:47
 * @LastEditTime: 2023-08-29 20:16:29
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: /blog-tsx/src/components/MdEditor.tsx
 */
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import 'prismjs/themes/prism.css'
import Prism from 'prismjs'
import { Editor } from '@toast-ui/react-editor'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'

type PreviewStyle = 'tab' | 'vertical'
type EditorType = 'markdown' | 'wysiwyg'
export interface MdProps {
    initialValue?: string;
    plugins?: Array<any>;
    height?: string;
    minHeight?: string;
    previewStyle?: PreviewStyle;
    useCommandShortcut?: boolean;
    usageStatistics?: boolean;
    hideModeSwitch?: boolean;
    language?: string;
    placeholder?: string;
    initialEditType?: EditorType;
    theme?: string;
    toolbarItems?: string;
}

const MdEditor = ({
    initialValue = '',
    plugins = [[codeSyntaxHighlight, { highlighter: Prism }]],
    previewStyle = 'vertical',
    height = '600px',
    language = 'zh_CN',
    placeholder = '本编辑器支持Markdown编辑，左边编辑，右边预览。',
    useCommandShortcut = false,
    usageStatistics = false,
    hideModeSwitch = true,
    // toolbarItems = [
    //     'heading',
    //     'bold',
    //     'italic',
    //     'strike',
    //     'divider',
    //     'hr',
    //     'quote',
    //     'divider',
    //     'ul',
    //     'ol',
    //     'task',
    //     'indent',
    //     'outdent',
    //     'divider',
    //     'table',
    //     'link',
    //     'divider',
    //     'code',
    //     'codeblock'
    // ]
}: MdProps) => {
    return  (
        <Editor
            initialValue={initialValue}
            plugins={plugins}
            height={height}
            useCommandShortcut={useCommandShortcut}
            language={language}
            previewStyle={previewStyle}
            placeholder={placeholder}
            usageStatistics={usageStatistics}
            hideModeSwitch={hideModeSwitch}
            // toolbarItems={toolbarItems}
        />
    )
}

export default MdEditor
