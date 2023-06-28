import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AuthBG from "../component/authBG";
import CustomButton from "../component/customButton";
import AuthMainBox from "../component/authMainBox";
import AuthTitle from "../component/authTitle";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const navigation = useNavigation();

  const body = { login, mail, password };

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
            <View
              style={{
                width: 120,
                height: 120,
                backgroundColor: "#F6F6F6",
                position: "absolute",
                top: -60,
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <Image
                  style={{ flex: 1 }}
                  source={require("../src/assets/img/avatar.jpg")}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  console.log("addFoto");
                }}
                style={styles.addFoto}
              >
                {/* <AntDesign name="pluscircleo" size={26} color="#FF6C00" /> */}
                <AntDesign
                  name="closecircleo"
                  size={24}
                  style={{
                    backgroundColor: "#FFFFFF", // Заливка третьим цвето
                    color: "#BDBDBD",
                    borderRadius: 12, // Радиус скругления
                  }}
                />
              </TouchableOpacity>
            </View>

            <AuthTitle text="Реєстрація" marginTop={92} />

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                onChangeText={setLogin}
                value={login}
                placeholder="Логін"
                keyboardType="default"
              />
            </View>

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
                text="Зареєстуватися"
                onPress={() => {
                  console.log(body);
                  navigation.navigate("PostScreen");
                }}
              />
            )}
            {!isKeyboardOpen && (
              <Text
                onPress={() => {
                  navigation.navigate("Login");
                }}
                style={{
                  color: "#1B4371",
                  fontFamily: "Roboto-Regular",
                  fontSize: 16,
                  marginBottom: 45,
                }}
              >
                Вже є акаунт? Увійти
              </Text>
            )}
          </AuthMainBox>
        </AuthBG>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

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
  addFoto: {
    position: "absolute",
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    right: -13,
    bottom: 14,
  },
});
