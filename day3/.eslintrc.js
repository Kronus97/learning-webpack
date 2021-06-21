module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
    },
}
