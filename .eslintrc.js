/*
 * @Author: caishiyin
 * @Date: 2023-08-29 20:30:36
 * @LastEditTime: 2023-08-29 20:38:29
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/.eslintrc.js
 */
// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],

    rules: {
        'no-new': 'off',
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    },
}
