
import { ISetActiveNavAction } from '../actions'
import { SET_ACTIVENAV } from '../constants'

// 处理并返回 state 
const activeNav = (
  state: number = 0,
  action: ISetActiveNavAction = {
    activeNav: 0,
    type: SET_ACTIVENAV
  }
): number => {
  console.log(555, action)
  console.log(666, state)
  switch (action.type) {
    case SET_ACTIVENAV:
      return action.activeNav
    default:
      return state
  }
}
export default activeNav