// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*js', '!src/**/*.style.js', '!src/index.js'],
  setupFilesAfterEnv: ['./setupTests.js'],
}
