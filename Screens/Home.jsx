import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"; //add
import { Feather } from "@expo/vector-icons"; //user
import { Ionicons } from "@expo/vector-icons"; //grid
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { HeaderTitle } from "@react-navigation/stack"; // Добавлено
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
import PostScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import CommentsScreen from "./CommentsScreen";
import ProfileScreen from "./ProfileScreen";
import MapScreen from "./MapScreen";

const CustomHeader = ({ title }) => {
  return (
    <View
      style={{
        width: "100%",
        marginTop: 30,
        paddingRight: 10,
        height: 44,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgraundColor: "#FFFFFF",
      }}
    >
      <Text style={{ fontFamily: "Roboto-Medium", fontSize: 17 }}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          console.log(title);
        }}
        style={{ width: 26, height: 26, position: "absolute", right: 10 }}
      >
        <Feather name="log-out" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const Tabs = createBottomTabNavigator();

const Home = () => {
  const [pageTitle, setPageTitle] = useState("Публікації");

  return (
    <>
      <CustomHeader title={pageTitle} />
      <Tabs.Navigator
        initialRouteName="PostScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "CreatePostsScreen") {
              iconName = focused ? "add" : "add";
              return (
                <MaterialIcons
                  name={iconName}
                  size={size}
                  color={color}
                  onPress={() => {
                    setPageTitle("Створити публікацію");
                  }}
                  tabBarAccessibilityLabel="Create Posts"
                />
              );
            } else if (route.name === "PostScreen") {
              iconName = focused ? "grid-outline" : "grid-outline";
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  onPress={() => {
                    setPageTitle("Публікації");
                  }}
                />
              );
            } else if (route.name === "ProfileScreen") {
              iconName = focused ? "user" : "user";
              return (
                <Feather
                  name={iconName}
                  size={size}
                  color={color}
                  onPress={() => {
                    setPageTitle("Usesssr");
                  }}
                />
              );
            }
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "#212121",
          tabBarStyle: {
            display: "flex",
          },
        })}
      >
        <Tabs.Screen name="PostScreen" component={PostScreen} />
        <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
        <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tabs.Navigator>
    </>
  );
};

export default Home;
