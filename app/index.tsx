import React from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { useBackgroundColorAnimated } from "@/src/hooks";

import { homeScreen } from "@/src/helper/tests";

import { fonts } from "@/src/themes";
import { DEFAULT_BACKGROUND_COLOR } from "@/src/utils";

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export default function HomeScreen() {
  const { handleRandomizedBackgroundColor, animatedBackgroundColorStyle } =
    useBackgroundColorAnimated(DEFAULT_BACKGROUND_COLOR);

  return (
    <AnimatedSafeAreaView
      style={[styles.container, animatedBackgroundColorStyle]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        testID={homeScreen.testId.button}
        style={styles.container}
        onPress={handleRandomizedBackgroundColor}
      >
        <Text testID={homeScreen.testId.text} style={styles.text}>
          Hello there
        </Text>
      </TouchableOpacity>
    </AnimatedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 20,
  },
});
