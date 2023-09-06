/*
 * @Author: caishiyin
 * @Date: 2023-09-06 13:01:20
 * @LastEditTime: 2023-09-06 22:00:21
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/api/index.tsx
 */

import {fetchGet, fetchPost} from './services'
import { IPayload } from '../types'

// export const fetchHomeData = useFetchData('/blog/home')
export const fetchHomeData1 = fetchGet({
    url: '/blog/home'
})

export const fetchArticleList = (param: IPayload) => fetchPost({
    url: '/blog/home',
    param,
})
