module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  env: {
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  plugins: ['jest', 'import', 'react'],
}
