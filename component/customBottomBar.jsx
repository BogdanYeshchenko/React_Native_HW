import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const CustomBottomBar = ({ page }) => {
  const route = useRoute();
  const currentPageName = route.name;

  switch (currentPageName) {
    case "PostScreen":
      return (
        <View style={styles.mainBox}>
          <UserButton page={currentPageName} />
          <PostButton page={currentPageName} />
          <AddButton page={currentPageName} />
        </View>
      );

      break;
    case "ProfileScreen":
      return (
        <View style={styles.mainBox}>
          <PostButton page={currentPageName} />
          <UserButton page={currentPageName} />
          <AddButton page={currentPageName} />
        </View>
      );

      break;
    case "CreatePostsScreen":
      return (
        <View style={styles.mainBox}>
          <UserButton page={currentPageName} />
          <AddButton page={currentPageName} />
          <PostButton page={currentPageName} />
        </View>
      );

      break;

    default:
      return (
        <View style={styles.mainBox}>
          <UserButton />
          <PostButton />
          <AddButton />
        </View>
      );
      break;
  }
};

export default CustomBottomBar;

function AddButton({ page }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CreatePostsScreen");
      }}
      style={
        page === "CreatePostsScreen" ? styles.mainButtonBox : styles.buttonBox
      }
    >
      <Ionicons
        name="add"
        size={24}
        color={page === "CreatePostsScreen" ? "#FFFFFF" : "black"}
      />
    </TouchableOpacity>
  );
}

function UserButton({ page }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProfileScreen");
      }}
      style={page === "ProfileScreen" ? styles.mainButtonBox : styles.buttonBox}
    >
      <Feather
        name="user"
        size={24}
        color={page === "ProfileScreen" ? "#FFFFFF" : "black"}
      />
    </TouchableOpacity>
  );
}

function PostButton({ page }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PostScreen");
      }}
      style={page === "PostScreen" ? styles.mainButtonBox : styles.buttonBox}
    >
      <Ionicons
        name="grid-outline"
        size={24}
        color={page === "PostScreen" ? "#FFFFFF" : "black"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    width: "100%",
    paddingTop: 9,
    height: 74,
    flexDirection: "row",
    justifyContent: "center",
    gap: 31,
    backgraundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#000000",
  },
  buttonBox: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  mainButtonBox: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
});
