/** @type {import('jest').Config} */
module.exports = {
testEnvironment: 'jsdom',
transform: {
'^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
setupFilesAfterEnv: ['@testing-library/jest-dom'],

};