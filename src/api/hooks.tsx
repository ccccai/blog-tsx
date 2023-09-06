

import { IRequestOptions, IResponseData } from '../types/index' // 这里是我项目使用到的js-cookie库，主要是为了拿到token，你们这里改成你们获取token的方式即可
import { useState, useEffect, useRef } from 'react'
import fetchHandler from './services'

interface IFetchResData extends IResponseData {
    loading: boolean
}
function useFetchData<T = any>(url: string, options?: IRequestOptions): IFetchResData {
    // 如果是一个通用的 fetchData，那么使用any是没办法的，如果只是针对list，any可以替换为对应的数据范型
    const [data, setData] = useState<T>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)
    const [code, setCode] = useState<any>(null)

    // 超时或者页面销毁/路由跳转，取消请求
    const abortControllerRef = useRef<AbortController>()

    function destory() {
        setData(undefined)
        setLoading(false)
        setError(null)
        setCode(0)
        abortControllerRef.current && abortControllerRef.current.abort()
    }

    useEffect(() => {
        setLoading(true)

        abortControllerRef.current = new AbortController()
        fetchHandler(url, options || {}, abortControllerRef.current)
            .then(res => {
                const { resultCode, resultMessage, data } = res as IResponseData
                if (resultCode !== 0) {
                    console.log('Error Msg: ', resultMessage)
                    throw new Error(resultMessage)
                }
                setData(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setCode(1)
            })
            .finally(() => {
                setLoading(false)
            })
        return () => destory()
    }, [url, options])
    return { loading, data, resultMessage: error, resultCode: code }
}
export default useFetchData