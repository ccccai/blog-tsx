/*
 * @Author: caishiyin
 * @Date: 2023-06-17 03:40:47
 * @LastEditTime: 2023-06-17 04:59:10
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/MdViewer.tsx
 */
import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/react-editor'

const MdViewer = ({ content = '' }: any) => {
    return  (
        <Viewer
            initialValue={content}
        />
    )
}

export default MdViewer
