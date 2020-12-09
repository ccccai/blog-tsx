import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
import App from '../pages/App'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const RouterList: any[] = [
  {
    component: () => import('../pages/Home'),
    path: '/'
  },
  {
    component: () => import('../pages/Tech'),
    path: '/tech'
  },
  {
    component: () => import('../pages/Life'),
    path: '/life'
  },
  {
    component: () => import('../pages/About'),
    path: '/about'
  }
]

const RouterMap = () => (
  <Router>
    <App>
      <Switch>
        {
          RouterList.map(item => (
            <Route
              key={ item.path }
              exact={ true }
              path={ item.path }
              component={
                  Loadable({
                  loader: item.component,
                  loading: Loading
                })
              }
            />
          ))
        }
      </Switch>
    </App>
  </Router>
)

export default RouterMap