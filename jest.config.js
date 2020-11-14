module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/components$1",
    "^configs(.*)$": "<rootDir>/configs$1",
    "^contexts(.*)$": "<rootDir>/contexts$1"
  }
}