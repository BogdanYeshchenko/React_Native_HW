import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import AuthBG from "../component/authBG";
import AuthMainBox from "../component/authMainBox";
import CustomBottomBar from "../component/customBottomBar";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <AuthBG>
      <AuthMainBox>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{
            width: 26,
            height: 26,
            position: "absolute",
            right: 16,
            top: 22,
          }}
        >
          <Feather name="log-out" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ width: "100%", height: 200, marginTop: 100 }}></View>
        <CustomBottomBar />
      </AuthMainBox>
    </AuthBG>
  );
};

export default ProfileScreen;
