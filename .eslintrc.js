// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 允许在文件的最后export
    // 'eol-last': ['error', 'always'],
    'eol-last': 0,
    // 缩进
    // 'indent': ['error', 'tab'],
    'indent': 0,
    // 括号内的空格
    // "space-in-parens": ['error', 'always'],
    "space-in-parens": 0,
    // no-tals
    "no-tabs": 0,
    // 字符串 单引号 双引号
    // 'quotes': ['error', 'double'],
    'quotes': 0,
    // 跟随的空格
    // 'no-trailing-spaces': ['error',{ "skipBlankLines": true, 'ignoreComments': true } ]
    "no-trailing-spaces": 0,
    // 关键字后的空格
    // "keyword-spacing": [ 'error' ]
    "keyword-spacing": 0,
    //
    "key-spacing": 0,
    // 逗号后的空格
    'comma-spacing': 0,
  }
}
