module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["@vue/airbnb", "@vue/typescript/recommended", "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-plusplus": 0,
    "linebreak-style": 0,
    "prettier/prettier": 0,
    "no-unused-expressions": 0,
    eqeqeq: 0,
    radix: 0
  },
  globals: {
    window: true
  }
};
