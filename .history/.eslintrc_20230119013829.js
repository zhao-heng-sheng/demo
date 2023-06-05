module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 0,
        'semi': 0, // 必须以分号结束
        'comma-dangle': [2, 'only-multiline'], // 多行模式的对象和数组必须以逗号结束
        'indent': ['error', 4], // 忽略缩进规则
        'spaced-comment': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
