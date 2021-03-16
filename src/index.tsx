import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import zhCN from 'antd/es/locale/zh_CN';
import RouterMap from './router';
import 'lib-flexible'
import './styles/index.less'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <RouterMap />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
