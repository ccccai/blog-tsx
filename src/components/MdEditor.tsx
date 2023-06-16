/*
 * @Author: caishiyin
 * @Date: 2023-06-17 03:40:47
 * @LastEditTime: 2023-06-17 04:21:55
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/MdEditor.tsx
 */
import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'

const MdEditor = () => {
    return  (
        <Editor
            initialValue='hello react editor world!'
            previewStyle='vertical'
            height='800px'
            initialEditType='markdown'
            useCommandShortcut={true}
        />
    )
}

export default MdEditor
