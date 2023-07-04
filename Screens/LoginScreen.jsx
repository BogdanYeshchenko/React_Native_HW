import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AuthBG from "../component/authBG";
import CustomButton from "../component/customButton";
import AuthMainBox from "../component/authMainBox";
import AuthTitle from "../component/authTitle";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { logInThunk } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const body = { email, password };

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <AuthBG>
          <AuthMainBox>
            <AuthTitle text="Увійти" marginTop={32} />

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
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
                  dispatch(logInThunk(body));

                  console.log(999999);

                  navigation.navigate("PostScreen");
                }}
              />
            )}
            {!isKeyboardOpen && (
              <Text
                onPress={() => navigation.navigate("Registration")}
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
      </View>
    </TouchableWithoutFeedback>
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
