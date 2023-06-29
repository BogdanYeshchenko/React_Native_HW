import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ title, logout = false, back = false }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainBox}>
      {back && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PostScreen");
          }}
          style={styles.back}
        >
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>

      {logout && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.logout}
        >
          <Feather name="log-out" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  mainBox: {
    width: "100%",
    marginTop: 30,
    paddingRight: 10,
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgraundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  back: {
    width: 26,
    height: 26,
    position: "absolute",
    left: 10,
    borderBottomColor: "#000000",
  },
  title: { fontFamily: "Roboto-Medium", fontSize: 17 },
  logout: { width: 26, height: 26, position: "absolute", right: 10 },
});
