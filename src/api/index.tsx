/*
 * @Author: caishiyin
 * @Date: 2023-09-06 13:01:20
 * @LastEditTime: 2023-09-08 23:35:58
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/api/index.tsx
 */

import { fetchGet, fetchPost } from './services'
import { IPayload } from '../types'

export const fetchSidebarData = async () =>
    await fetchGet({
        url: '/blog/sidebar',
    })

export const fetchArticleList = async (param: IPayload) =>
    await fetchPost({
        url: '/blog/articleList',
        param,
    })
