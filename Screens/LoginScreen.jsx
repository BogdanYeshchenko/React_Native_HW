import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import AuthBG from "../component/authBG";
import CustomButton from "../component/customButton";
import AuthMainBox from "../component/authMainBox";
import AuthTitle from "../component/authTitle";
import { useState, useEffect } from "react";

const LoginScreen = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthBG>
      <AuthMainBox>
        <AuthTitle text="Увійти" marginTop={32} />

        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            onChangeText={setMail}
            value={mail}
            patt
            placeholder="Адреса електронної пошти"
            keyboardType="email-address"
          />
        </View>

        <View
          style={{
            ...styles.inputBox,
            marginBottom: !isKeyboardOpen ? 43 : 32,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            secureTextEntry={showPassword}
            value={password}
            placeholder="Пароль"
            keyboardType="default"
          />
          <TouchableOpacity
            style={{
              alignItems: "center",
            }}
            onPress={toggleShowPassword}
          >
            <Text
              style={{
                color: "#1B4371",
                fontFamily: "Roboto-Regular",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {showPassword ? "Показати" : "Сховати"}
            </Text>
          </TouchableOpacity>
        </View>
        {!isKeyboardOpen && (
          <CustomButton
            text="Увійти"
            onPress={() => {
              console.log(1);
            }}
          />
        )}
        {!isKeyboardOpen && (
          <Text
            style={{
              color: "#1B4371",
              fontFamily: "Roboto-Regular",
              fontSize: 16,
              marginBottom: 45,
            }}
          >
            Немає акаунту? Зареєструватися
          </Text>
        )}
      </AuthMainBox>
    </AuthBG>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  inputBox: {
    height: 50,
    width: "100%",
    borderRadius: 8,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
});
