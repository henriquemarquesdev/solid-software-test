import { jest } from "@jest/globals";

require("react-native-reanimated").setUpTests();

jest.mock("@/src/hooks/useBackgroundColorAnimated", () => ({
  useBackgroundColorAnimated: jest.fn(() => ({
    handleRandomizedBackgroundColor: jest.fn(),
    animatedBackgroundColorStyle: {
      backgroundColor: "#ffffff",
    },
  })),
}));
