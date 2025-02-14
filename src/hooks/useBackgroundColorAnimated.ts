import { useCallback } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { RANDOM_HEXADECIMAL } from "@/src/utils";

const useBackgroundColorAnimated = (defaultBackgroundColor: string) => {
  const backgroundColor = useSharedValue(defaultBackgroundColor);
  const animatedBackgroundColorStyle = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const handleRandomizedBackgroundColor = useCallback(() => {
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
      randomColor += RANDOM_HEXADECIMAL[Math.floor(Math.random() * 16)];
    }

    backgroundColor.value = withTiming(randomColor, { duration: 500 });
  }, [defaultBackgroundColor]);

  return { handleRandomizedBackgroundColor, animatedBackgroundColorStyle };
};

export { useBackgroundColorAnimated };
