/*
 * @Author: caishiyin
 * @Date: 2023-09-06 13:01:20
 * @LastEditTime: 2023-09-11 00:07:58
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

export const fetchTagList = async () =>
    await fetchGet({
        url: '/blog/tagList',
    })

export const fetchCategoryList = async () =>
    await fetchGet({
        url: '/blog/categoryList',
    })

export const fetchArticleList = async (param: IPayload) =>
    await fetchPost({
        url: '/blog/articleList',
        param,
    })

export const fetchArticle = async (id: any) =>
    await fetchGet({
        url: '/blog/article',
        param: {id},
    })

export const createArticle = async (param: any) =>
    await fetchPost({
        url: '/admin/createArticle',
        param,
    })

export const updateArticle = async (param: any) =>
    await fetchPost({
        url: '/admin/updateArticle',
        param,
    })
