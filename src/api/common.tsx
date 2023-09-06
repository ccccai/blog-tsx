/*
 * @Author: caishiyin
 * @Date: 2023-09-06 07:02:38
 * @LastEditTime: 2023-09-06 17:21:15
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/api/common.tsx
 */

/**
 * get 请求的情况下
 * 将 json 请求参数 添加到 url 上
 * @param url
 * @param ob
 * @returns {*}
 */
export const getRequestBody = (url: string = '', params: any = null) => {
    let param = ''
    if (params) {
        for (let key in params) {
            param += `${param ? '&' : '?'}${key}=${params[key]}`
        }
    }
    return `${url}${param}`
}

/**
 * post请求时
 * 将 json 请求参数 转化为 formData body
 * @param ob
 * @returns {*}
 */
export const postRequestBody = (params: any = null) => {
    let form = null
    if (params) {
        form = new FormData()

        for (let key in params) {
            form.append(key, params[key])
        }
    }

    return form
}

/**
 * 接口数据  状态验证
 * @param data
 * @returns {*}
 */

export const checkServerDataStatus = (data: any) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('请求返回数据====================》', data)
    }

    // 成功返回
    if (data && (data.status === 200 || data.resultCode === 0)) {
        return data.data
    }

    // 错误对象
    const error = new Error()

    // 错误信息
    let errorInfo = {
        type: 'unknown',
        msg: '未知的异常',
    }

    if (data && data.resultMessage) {
        errorInfo.msg = data.resultMessage
    }

    // 错误处理
    const errorInfoMap: any = {
        99999: {
            type: 'dataException',
            msg: '数据异常',
        },
        100000: {
            type: 'unknown',
            msg: '未知的异常',
        },
        500: {
            type: 'exception',
            msg: '接口异常',
        },
        501: {
            type: 'exception',
            msg: '接口异常',
        },
        502: {
            type: 'exception',
            msg: '接口异常',
        },
        503: {
            type: 'exception',
            msg: '接口异常',
        },
        401: {
            type: 'noPrmission',
            msg: '没有访问权限',
        },
        403: {
            type: 'refuse',
            msg: '接口拒绝访问',
        },
        404: {
            type: 'notFound',
            msg: '接口链接不存在',
        },
        405: {
            type: 'Method Not Allowed',
            msg: 'server: 方法不允许',
        },
    }

    // 数据格式异常
    if (!data || !data.status || data.resultMessage) {
        Object.assign(error, errorInfo, errorInfoMap[99999])
        throw error
    }

    // 根据code捕获的错误
    let extraErrorInfo = errorInfoMap[data.status]
    if (extraErrorInfo) {
        Object.assign(error, errorInfo, extraErrorInfo)
        throw error
    }

    // 未知错误
    throw error
}

/**
 * 服务器请求 状态验证
 * @param data
 * @returns {*}
 */
export const checkServerStatus = (response: any) => {
    console.log('response', response)
    // 请求接受成功
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        // 错误处理
        const errorInfoMap: any = {
            0: {
                type: 'serverUnknown',
                msg: 'server: 未知的异常',
            },
            100000: {
                type: 'serverUnknown',
                msg: 'server: 未知的异常',
            },
            502: {
                type: 'serverMaintainace',
                msg: 'server: 服务器正在维护',
            },
            404: {
                type: 'serverException',
                msg: 'server: 访问地址不存在',
            },
            405: {
                type: 'Method Not Allowed',
                msg: 'server: 方法不允许',
            },
        }

        // 错误信息
        let errorInfo = {
            type: 'serverUnknown',
            msg: 'server: 未知的异常',
        }

        // 错误对象
        const error = new Error()

        // 根据code捕获的错误
        let extraErrorInfo = errorInfoMap[response.status]
        console.log('extraErrorInfo', extraErrorInfo)
        if (extraErrorInfo) {
            Object.assign(error, errorInfo, extraErrorInfo)
            throw error
        }

        // 未知错误
        throw error
    }
}

export const fetchJsonBody = (data: any) => {
    return typeof data === 'object' ? JSON.stringify(data) : data
}

// json  转换
export const parseJSON = (response: any) => {
    //response.text()获得文本类型的
    //response.json()会帮助你运行一次JSON.parse(response.text())
    return response.json()
}
