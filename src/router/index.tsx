import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
import App from '../containers/App'
import ScrollToTop from '../components/ScrollToTop'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const RouterList: any[] = [
    {
        component: () => import('../pages/Home'),
        path: '/',
    },
    {
        component: () => import('../pages/Tech'),
        path: '/tech',
    },
    {
        component: () => import('../pages/Life'),
        path: '/life',
    },
    {
        component: () => import('../pages/About'),
        path: '/about',
    },
    {
        component: () => import('../pages/Article'),
        path: '/article',
    },
]

const RouterMap = () => (
    <Router>
        <ScrollToTop>
            <App>
                <Switch>
                    {RouterList.map(item => (
                        <Route
                            key={item.path}
                            exact={true}
                            path={item.path}
                            component={Loadable({
                                loader: item.component,
                                loading: Loading,
                            })}
                        />
                    ))}
                </Switch>
            </App>
        </ScrollToTop>
    </Router>
)

export default RouterMap
