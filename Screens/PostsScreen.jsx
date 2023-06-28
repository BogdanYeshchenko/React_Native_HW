import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from "../component/customHeader";
import CustomBottomBar from "../component/customBottomBar";
import { useRoute } from "@react-navigation/native";

const PostScreen = () => {
  const route = useRoute();
  const currentPageName = route.name;
  return (
    <>
      <CustomHeader title="Публікації" logout={true} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>PostScreen!</Text>
      </View>

      <CustomBottomBar />
    </>
  );
};

export default PostScreen;
