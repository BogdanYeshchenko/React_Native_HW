import { View } from "react-native";

const AuthMainBox = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        alignItems: "center",

        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      {children}
    </View>
  );
};

export default AuthMainBox;
