module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        'no-shadow': 0,
        'import/no-unresolved': 0,
        'no-param-reassign': 0,
        'max-len': ['error', 120],
        'no-bitwise': 0,
        'import/no-extraneous-dependencies': [2, {"peerDependencies": true}]
    },
    globals: {
        document: true,
        window: true
    }
};
