/*
 * @Author: caishiyin
 * @Date: 2023-06-17 03:40:47
 * @LastEditTime: 2023-06-17 04:23:51
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/MdViewer.tsx
 */
import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/react-editor'

const MdViewer = () => {
    return  (
        <Viewer
            initialValue='### hello react editor world!'
        />
    )
}

export default MdViewer
