module.exports = {
  "plugins": [
    "react",
    "react-hooks"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "sourceType": "module",
    parser: "babel-eslint",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}
