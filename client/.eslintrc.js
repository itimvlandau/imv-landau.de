module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      requireConfigFile: false,
      babelOptions: {
        presets: ["@vue/babel-preset-app"]
      },
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    extends: [
      // add more generic rulesets here, such as:
      'eslint:recommended',
      'plugin:vue/base',
      'plugin:vue/essential',
      'plugin:vue/strongly-recommended',
      'plugin:vue/recommended'
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    }
  }