module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/__tests__/*.spec.+(ts|js)"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(lit" +
      "|@lit" +
      "|lit-html" +
      "|lit-element" +
      "|@open-wc" +
      "|@esm-bundle" +
      "|@web" +
      "|chai-a11y-axe" +
      ")/)",
  ],
  setupFiles: ["<rootDir>/setup-tests"],
};
