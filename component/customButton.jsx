import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

const CustomButton = ({
  text,
  onPress,
  marginBottom = 16,
  buttonColor = "#FF6C00",
  textColor = "#FFFFFF",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        marginBottom,
        backgroundColor: buttonColor,
        color: textColor,
      }}
    >
      <Text style={{ ...styles.text, color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
