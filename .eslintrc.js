module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: ["eslint:recommended"],
  plugins: ["my-lint"],
  rules: {
    "my-lint/custom-hooks":[2, {}]
    // We can include or exclude prefix
    // You can add more option here like message, ignore case etc.
  },
};