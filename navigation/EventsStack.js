import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventsList from "../screens/EventList";
import EventDetail from "../screens/EventDetail";

const Stack = createNativeStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="EventsList"
        component={EventsList}
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

export default EventsStack;
