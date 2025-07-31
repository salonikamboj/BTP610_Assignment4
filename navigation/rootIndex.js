import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventsStack from "./EventsStack";
import FavoritesStack from "./FavoritesStack";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const RootNavigation = ({ currentRoute }) => {
  let hideTabBar = false;
  if (currentRoute === "EventDetail") {
    hideTabBar = true;
  }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Events"
        component={EventsStack}
        options={{
          tabBarStyle: hideTabBar ? { display: "none" } : {},
          tabBarIcon: ({ color, size }) => (
            <Icon name="event" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarStyle: hideTabBar ? { display: "none" } : {},
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorite" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
