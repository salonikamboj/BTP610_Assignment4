import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FavoritesContextProvider } from "./screens/FavoritesContext";
import RootNavigation from "./navigation/rootIndex";
import { useState } from "react";

const navigationRef = createNavigationContainerRef(); // refrenced from stack overflow: https://stackoverflow.com/questions/71607226/possible-to-hide-tab-navigator-from-screen-in-stack-nested-in-tab

export default function App() {
  const [routeName, setRouteName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <FavoritesContextProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            setRouteName(navigationRef.getCurrentRoute().name);
          }}
          onStateChange={() => {
            const current = navigationRef.getCurrentRoute();
            if (current) {
              setRouteName(current.name);
            }
          }}
        >
          <RootNavigation currentRoute={routeName} />
        </NavigationContainer>
      </FavoritesContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424644ff",
  },
});
