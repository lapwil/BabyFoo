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
        'no-underscore-dangle': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'no-param-reassign': 0,
        'max-len': ['error', 120],
        'no-bitwise': 0,
        'import/no-extraneous-dependencies': [2, {"peerDependencies": true}],
        'no-restricted-syntax': 0

    },
    globals: {
        document: true,
        window: true
    }
};
