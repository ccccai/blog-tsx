/*
 * @Author: caishiyin
 * @Date: 2023-06-18 01:35:51
 * @LastEditTime: 2023-06-18 02:02:36
 * @LastEditors: caishiyin
 * @Description: 翻页自动滚到顶部
 * @FilePath: /blog-tsx/src/components/ScrollToTop.tsx
 */
import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface ILocation {
    pathname: string
}

interface IProps {
    children: React.ReactNode
    location: ILocation
}
class ScrollToTop extends React.Component<IProps & RouteComponentProps> {
    public componentDidUpdate(prevProps: any): void {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
            if (currentScroll > 0) {
                window.scrollTo(0, 0)
            }
        }
    }

    public render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop)
