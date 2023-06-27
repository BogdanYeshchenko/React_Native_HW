import { Text } from "react-native";

const AuthTitle = ({ text, marginTop }) => {
  return (
    <Text
      style={{
        fontFamily: "Roboto-Medium",
        fontSize: 30,
        marginTop: marginTop,
        marginBottom: 33,
      }}
    >
      {text}
    </Text>
  );
};

export default AuthTitle;
