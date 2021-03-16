/*
 * @Author: caishiyin
 * @Date: 2020-12-10 15:01:01
 * @LastEditTime: 2020-12-10 22:59:59
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: /blog-tsx/src/store/action.ts
 */
import {
  REQUSET_APP,
  REQUSET_APP_TYPE,
  RECEIVE_APP,
  RECEIVE_APP_TYPE
} from './constant'

export interface IRequestApp {
  type: REQUSET_APP_TYPE
}

export interface IReceiveApp {
  type: RECEIVE_APP_TYPE
}

// 定义modifyAction类型，包含 IRequestApp 和 IReceiveApp 接口类型
export type AppAction = IRequestApp | IReceiveApp

export const requestApp = (): IRequestApp => ({
  type: REQUSET_APP
})

export const receiveApp = (): IReceiveApp => ({
  type: RECEIVE_APP
})
