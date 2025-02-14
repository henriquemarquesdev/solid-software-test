module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  collectCoverage: true,
  collectCoverageFrom: ["app/**/*.tsx", "!src/**/*.test.tsx"],
  coverageReporters: ["lcov"],
};
