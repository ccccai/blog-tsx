import 'whatwg-fetch'
import ReactDOM from 'react-dom/client';
import { getRequestBody } from './common'
import { IFetchParams, IRequestOptions, IResponseData, EHttpMethods } from '../types/index' // 这里是我项目使用到的js-cookie库，主要是为了拿到token，你们这里改成你们获取token的方式即可
// import Cookies from 'js-cookie'
// 捕获异常内部处理的一个提示，和你项目用的 ui 库一致就可以
import { message } from 'antd'
import Loading from '../components/Loading'

export const requestPath = 'http://127.0.0.1:3232'
const CAN_SEND_METHOD = ['POST', 'PUT', 'PATCH', 'DELETE']// 當前正在請求的數量
let requestCount = 0

/**
 * Http request
 * @param url request URL
 * @param options request options
 */
interface IHttpInterface {
    fetchHandler<T = IResponseData>(url: string, options?: IRequestOptions): Promise<T>
}

type ICustomRequestError = {
    status: number
    statusText: string
    url: string
}

// 顯示loading
function showLoading () {
    if (requestCount === 0) {
        const dom = document.createElement('div')
        dom.setAttribute('id', 'loading')
        document.body.appendChild(dom)
        ReactDOM.createRoot(dom).render(<Loading />)
    }
    requestCount++
}

// 隱藏loading
function hideLoading () {
    requestCount--
    if (requestCount === 0) {
        document.body.removeChild(document.getElementById('loading') as HTMLElement)
    }
}

function filterObject(o: Record<string, string>, filter: Function) {
    const res: Record<string, string> = {}
    Object.keys(o).forEach(k => {
        if (filter(o[k], k)) {
            res[k] = o[k]
        }
    })
    return res
}

function dealErrToast(err: Error & ICustomRequestError, abortController?: AbortController) {
    console.log('err', err)
    switch (err.status) {
        case 408: {
            abortController && abortController.abort()
            typeof window !== 'undefined' && message.error(err.statusText)
            break
        }
        default: {
            console.log(err)
            break
        }
    }
}

class Http implements IHttpInterface {
    public async fetchHandler<T>(url: string, options?: IRequestOptions, abortController?: AbortController): Promise<T> {
        showLoading()
        if (process.env.NODE_ENV === 'development') {
            console.log('请求地址====================》', url)
            console.log('请求参数====================》', options?.params)
        }
        // requestPath是公共的请求地址
        let apiUrl = requestPath + url
        const opts: IRequestOptions = Object.assign(
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json',
                },
                method: 'GET',
                // credentials: 'include',
                timeout: 10000,
                mode: 'cors',
                cache: 'no-cache',

                // IE浏览器第一次发请求没有问题,再发送请求时，当参数一样时，浏览器会直接使用缓存数据. 导致页面 还是原来的页面，所以在请求时加上时间戳
                params: { timeStamp: new Date().getTime() },
            },
            options
        )

        abortController && (opts.signal = abortController.signal)

        const canSend = opts && opts.method && CAN_SEND_METHOD.includes(opts.method)
        if (opts.params && opts.method) {
            if (canSend) {
                opts.body = JSON.stringify(filterObject(opts.params, Boolean))
                opts.headers && Reflect.set(opts.headers, 'Content-Type', 'application/json')
            } else if (opts.method === 'GET') {
                apiUrl = getRequestBody(apiUrl, filterObject(opts.params, Boolean))
            }
        }

        console.log('opts', opts)

        try {
            const res = await Promise.race([
                fetch(apiUrl, opts),
                new Promise<any>((_, reject) => {
                    setTimeout(() => {
                        return reject({ status: 408, statusText: '请求超时，请稍后重试', url })
                    }, opts.timeout)
                }),
            ])
            const result = await res.json()
            if (result?.resultCode !== 0) {
                message.error(result?.resultMessage || '接口请求出错')
            }
            await hideLoading()
            return result
        } catch (e: any) {
            hideLoading()
            dealErrToast(e, abortController)
            return e
        }
    }
}

const { fetchHandler } = new Http()

export { fetchHandler as default }

export const fetchGet = ({ url, param = {}, options = {} }: IFetchParams) => {
    if (param && typeof param === 'object') {
        options.params = param
    }
    options.method = EHttpMethods.GET
    return fetchHandler(url, options)
}

export const fetchPost = ({ url, param = {}, options = {} }: IFetchParams) => {
    if (param && typeof param === 'object') {
        options.params = param
    }
    options.method = EHttpMethods.POST
    return fetchHandler(url, options)
}