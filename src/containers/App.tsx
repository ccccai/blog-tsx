import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from '../pages/App'
import { IStoreState } from '../types'
// import { Dispatch } from 'redux';
// import { setActiveNav } from '../actions'


const mapStateToProps = ( state: IStoreState ): { activeNav: number } => ({
  ...state
})

// 将 reducer 中的状态插入到组件的 props 中
// const mapDispatchToProps = (dispatch: Dispatch): { setActiveNav: (activeNav: number) => void } => ({
//   setActiveNav: (activeNav: number) => dispatch(setActiveNav(activeNav))
// })

const AppMap: any = connect(
  mapStateToProps,
  // mapDispatchToProps
)(App)
export default withRouter(AppMap)