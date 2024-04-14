module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parseOptions: { ecmaVersion: "latest" },
  rules: {
    "linebreak-style": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-unused-expressions": "off",
    "no-return-assign": "off",
  },
};
