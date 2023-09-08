/*
 * @Author: caishiyin
 * @Date: 2020-12-09 15:15:06
 * @LastEditTime: 2023-09-09 02:42:03
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/index.tsx
 */
import ReactDOM from 'react-dom/client'
import * as serviceWorker from './serviceWorker'
import { ConfigProvider, Spin } from 'antd'
import { Provider } from 'react-redux'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import zhCN from 'antd/es/locale/zh_CN'
import RouterMap from './router'
import chaiRunning from './assets/images/chai_running.gif'
import 'lib-flexible'
import './styles/index.less'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer as any, applyMiddleware(sagaMiddleware) as any)
const rootElement = document.getElementById('root') as Element
const root = ReactDOM.createRoot(rootElement)
root.render(
    <ConfigProvider
        locale={zhCN}
        theme={{
            token: {
                colorPrimary: '#6dafac', // 全局主色
                colorLink: '#002230', // 链接色
                colorSuccess: '#52c41a', // 成功色
                colorWarning: '#faad14', // 警告色
                colorError: '#f5222d', // 错误色
                fontSize: 14, // 主字号
                colorTextHeading: '#00455a', // 标题色
                colorText: '#000010', // 主文本色
                colorTextSecondary: '#d57228', // 次文本色
                colorTextDisabled: '#002162', // 失效色
                colorBorder: '#bd8e5d', // 边框色
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
                fontFamily: 'CartographMonoCFMedium', // 界面字体
            },
        }}
    >
        <Provider store={store}>
            <RouterMap />
        </Provider>
    </ConfigProvider>
)

Spin.setDefaultIndicator(<img className='spin-img' src={chaiRunning} alt='加载中...' />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
