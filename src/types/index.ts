/*
 * @Author: caishiyin
 * @Date: 2020-12-10 14:53:10
 * @LastEditTime: 2023-09-09 04:46:38
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/types/index.ts
 */
export interface IStoreState {
    activeNav: number
}

/**
 * @description: 声明请求头header的类型
 */
interface IHeaderConfig {
    Accept?: string
    'Content-Type': string
    [propName: string]: any
}

export enum EHttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

interface IAnyMap {
    [propName: string]: any
}

export interface IRequestOptions {
    headers?: IHeaderConfig
    signal?: AbortSignal
    method?: EHttpMethods
    params?: IAnyMap
    body?: any
    timeout?: number
    credentials?: 'include' | 'same-origin'
    mode?: 'cors' | 'same-origin'
    cache?: 'no-cache' | 'default' | 'force-cache'
}

export interface IFetchParams {
    url: string
    method?: 'get' | 'post' | 'GET' | 'POST'
    param?: any
    options?: IRequestOptions
}

export interface IPayload {
    pageNo?: number
    pageSize?: number
}

export interface IResponseData {
    resultCode: number
    data: any | undefined
    resultMessage: string
}
