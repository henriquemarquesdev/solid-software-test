import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import "react-native-reanimated";

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  const [isLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!isLoaded) return null;

  SplashScreen.hideAsync();

  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
