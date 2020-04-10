// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*js', '!src/**/*.style.js', '!src/index.js'],
  setupFilesAfterEnv: ['./setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js', '\\.(svg)$': '<rootDir>/__mocks__/svgrMock.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/__mocks__/',
  ],
}
