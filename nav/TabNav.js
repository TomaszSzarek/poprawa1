import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Widok0 from "../view/Widok0.js";
import Widok1 from "../view/Widok1.js";

const optionScreen = {
  headerShown: false,
  tabBarShowLabel: false,
  unmountOnBlur: true
};

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Widok0"
        component={Widok0}
        options={optionScreen}
      />
      <Tab.Screen
        name="Widok1"
        component={Widok1}
        options={optionScreen}
      />
    </Tab.Navigator>
  );
}
