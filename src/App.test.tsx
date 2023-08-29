/*
 * @Author: caishiyin
 * @Date: 2020-12-10 16:06:43
 * @LastEditTime: 2023-08-29 20:15:12
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: /blog-tsx/src/App.test.tsx
 */
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
