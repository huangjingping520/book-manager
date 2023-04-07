/* eslint-env node */
module.exports = {
  extends: '@antfu',
  rules: {
    'comma-dangle': [
      'warn',
      'never'
    ],
    '@typescript-eslint/comma-dangle': 'off'
  }
}
