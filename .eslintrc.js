const eslintrc = {
  extends: [
    'airbnb'
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    es6: true,
  },
  settings: {
  },
  parser: '@typescript-eslint/parser',
  // 这里使用全局变量对小程序的 API 进行设定
  globals: {
    App: "readonly",
    Component: "readonly",
    Page: "readonly",
    wx: "readonly",
    Behavior: "readonly",
  },
  rules: {
    // 2 空格，error 处理
    indent: ["error", 2],
    // 不要求文件末必须有一行空行
    'eol-last': 0,
    // 不要求字符串单引号
    quotes: ["error", "single"],
    // 不禁止如 isNaN 的使用
    'no-restricted-globals': 0,
    // 允许 对 param props 的赋值
    "no-param-reassign": [2, { props: false }],
    // 不使用封号
    semi: ["error", "never"],
    // 不要求箭头函数参数的括号
    'arrow-parens': ["error","always"],
    // 不要求块内换行
    'padded-blocks': 0,
    'max-len': ["error", { code: 300 }],
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'array-callback-return': 0,
    // 允许文件后缀为js
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    "import/extensions": [
      "error",
      {
        "js": "never",
        "ts": "never",
      }
   ]
  },
};

module.exports = eslintrc