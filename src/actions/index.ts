/*
 * @Author: caishiyin
 * @Date: 2020-12-10 23:45:31
 * @LastEditTime: 2020-12-11 01:17:54
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: /blog-tsx/src/actions/index.ts
 */
import { SET_ACTIVENAV, SET_ACTIVENAV_TYPE } from '../constants'

export interface ISetActiveNavAction {
  activeNav: number,
  type: SET_ACTIVENAV_TYPE
}

export const setActiveNav = (activeNav: number) : ISetActiveNavAction => ({
  activeNav,
  type: SET_ACTIVENAV
})