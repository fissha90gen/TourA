import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Attractions from "./screens/Attractions";
import AddAttraction from "./screens/AddAttraction";
import AddActivity from "./screens/AddActivity";
import AttractionDetail from "./screens/AttractionDetail";
import Map from "./screens/Map";
import Tips from "./screens/Tips";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AttractionStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Attractions Screen"
      component={Attractions}
      options={{ title: "Attractions", headerTitleAlign: "center" }}
    />
    <Stack.Screen
      name="AttractionDetail Screen"
      component={AttractionDetail}
      options={{ title: "Attraction Detail", headerTitleAlign: "center" }}
    />
  </Stack.Navigator>
);

const AddAttractionStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AddAttraction Screen"
      component={AddAttraction}
      options={{ title: "Add Attraction", headerTitleAlign: "center" }}
    />
    <Stack.Screen
      name="Map Screen"
      component={Map}
      options={{ title: "Map", headerTitleAlign: "center" }}
    />
  </Stack.Navigator>
);

const AddActivityStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Add Activity Screen"
      component={AddActivity}
      options={{ title: "Add Activity", headerTitleAlign: "center" }}
    />
  </Stack.Navigator>
);

const TipsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tips Screen "
      component={Tips}
      options={{ title: "Tips", headerTitleAlign: "center" }}
    />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          elevation: 5,
          height: 60,
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Attractions"
        component={AttractionStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo
                name="home"
                size={24}
                color={focused ? "#0fb170" : "#222"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Add Attraction"
        component={AddAttractionStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons
                name="add-circle"
                size={26}
                color={focused ? "#0fb170" : "#222"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add Activity"
        component={AddActivityStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons
                name="add-circle"
                size={24}
                color={focused ? "#0fb170" : "#222"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={TipsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons
                name="event-note"
                size={24}
                color={focused ? "#0fb170" : "#222"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
