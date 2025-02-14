import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { homeScreen } from "@/src/helper/tests";

import { DEFAULT_BACKGROUND_COLOR } from "@/src/utils";

describe("HomeScreen", () => {
  it("handles background color change correctly", () => {
    const HomeScreen = homeScreen.component;

    const mockHandleRandomizedBackgroundColor = jest.fn();
    const mockAnimatedBackgroundColorStyle = {
      backgroundColor: DEFAULT_BACKGROUND_COLOR,
    };

    require("@/src/hooks").useBackgroundColorAnimated.mockReturnValue({
      handleRandomizedBackgroundColor: mockHandleRandomizedBackgroundColor,
      animatedBackgroundColorStyle: mockAnimatedBackgroundColorStyle,
    });

    const { getByTestId } = render(<HomeScreen />);

    const textElement = getByTestId(homeScreen.testId.text);
    const buttonElement = getByTestId(homeScreen.testId.button);
    expect(textElement).toBeTruthy();

    fireEvent.press(buttonElement);

    expect(mockHandleRandomizedBackgroundColor).toHaveBeenCalled();
  });
});
