module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'google',
    'plugin:vue/vue3-essential',
  ],
  overrides: [
    {
      files: [
        '.eslintrc.js',
      ],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021, // Cambié 'latest' a '2021'
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'max-len': 'off',
  },
};
