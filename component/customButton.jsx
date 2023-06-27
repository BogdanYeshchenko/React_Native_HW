import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ text, onPress, marginBottom = 16 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, marginBottom: marginBottom }}
    >
      <Text style={styles.text}>{text}</Text>
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
    color: "#FFFFFF",
  },
});
