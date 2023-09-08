/*
 * @Author: caishiyin
 * @Date: 2020-12-09 15:15:06
 * @LastEditTime: 2023-09-09 02:59:50
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/Loading.tsx
 */
import { Spin } from 'antd'
import '../styles/loading.less'

const Loading = () => (
    <div className='spin-box' onTouchMove={(e:any) => e.preventDefault()}>
        <Spin size='large' />
    </div>
)

export default Loading
