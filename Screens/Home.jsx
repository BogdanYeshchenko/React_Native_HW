import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"; //add
import { Feather } from "@expo/vector-icons"; //user
import { Ionicons } from "@expo/vector-icons"; //grid
import { NavigationContainer } from "@react-navigation/native";
import { HeaderTitle } from "@react-navigation/stack"; // Добавлено
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
import PostScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import CommentsScreen from "./CommentsScreen";
import ProfileScreen from "./ProfileScreen";
import MapScreen from "./MapScreen";

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let component;

          if (route.name === "CreatePostsScreen") {
            iconName = focused ? "add" : "add";
            component = "Ionicons";
          } else if (route.name === "Settings") {
            iconName = focused ? "grid-outline" : "grid-outline";
            component = "Ionicons";
          } else if (route.name === "PostScreen") {
            iconName = focused ? "user" : "user";
            component = "Feather";
          }
          return component === "Ionicons" ? (
            <Ionicons name={iconName} size={size} color={color} />
          ) : (
            <Feather name={iconName} size={size} color={color} />
          );
        },
        tabBarShowLabel: false,
      })}
      tabBarOptions={{
        activeTintColor: "#FF6C00",
        inactiveTintColor: "#212121",
      }}
    >
      <Tabs.Screen name="Settings" component={Settings} />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="PostScreen" component={PostScreen} />
    </Tabs.Navigator>
  );
};

export default Home;
