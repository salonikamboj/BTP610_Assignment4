import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";
import EventDetail from "../screens/EventDetail";

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FavoritesList"
        component={Favorites}
        options={{ tabBarStyle: { display: "flex" } }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{ tabBarStyle: { display: "none" } }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
