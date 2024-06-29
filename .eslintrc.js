module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: { ecmaVersion: "latest" },
  rules: {
    "max-len": ["error", { code: 90 }],
    "linebreak-style": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-unused-expressions": "off",
    "no-return-assign": "off",
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "prettier/prettier": "error",
  },
};
