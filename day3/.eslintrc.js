module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    rules: {
        indent: ['error', 4],
        'no-console': ['error', { allow: ['warn', 'error'] }],
    },
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        node: true,
    },
}
