import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import CustomHeader from "../component/customHeader";
import CameraPhoto from "../component/cameraPhoto";
import CustomButton from "../component/customButton";
import { useNavigation, useRoute } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [location, setLocation] = useState(null);

  const navigation = useNavigation();

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

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const isInputsTrue = name.length > 0 && locality.length > 0;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <CustomHeader title="Створити публікацію" back={true} style={{}} />
        <View style={styles.mainBox}>
          <View style={styles.cameraBox}>
            <CameraPhoto />
          </View>

          <View
            style={{
              width: "100%",

              alignItems: "flex-start",
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("updateFoto");
              }}
              style={{}}
            >
              <Text style={{ color: "#BDBDBD" }}>Завантажте фото</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              onChangeText={setName}
              value={name}
              placeholder="Назва..."
              keyboardType="default"
            />
          </View>
          <View
            style={{
              ...styles.inputBox,
              flexDirection: "row",
              marginBottom: 32,
            }}
          >
            <Feather name="map-pin" size={18} color="#BDBDBD" />
            <TextInput
              style={styles.inputText}
              onChangeText={setLocality}
              value={locality}
              placeholder="Місцевість..."
              keyboardType="default"
            />
          </View>

          {!isKeyboardOpen && (
            <CustomButton
              text="Опубліковати"
              buttonColor={isInputsTrue ? "#FF6C00" : "#dadada"}
              textColor={isInputsTrue ? "#FFFFFF" : "#BDBDBD"}
              onPress={() => {
                console.log(location);
                isInputsTrue && console.log(isInputsTrue);
                isInputsTrue && navigation.navigate("PostScreen");
              }}
            />
          )}
        </View>

        {!isKeyboardOpen && (
          <View style={styles.footerBox}>
            <TouchableOpacity
              onPress={() => {
                console.log("delete");
              }}
              style={styles.footerButton}
            >
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  cameraBox: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  inputBox: {
    height: 50,
    width: "100%",
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 15,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputText: { fontFamily: "Roboto-Regular", fontSize: 16, marginLeft: 4 },
  footerBox: {
    width: "100%",
    paddingTop: 9,
    height: 74,
    alignItems: "center",
    justifyContent: "center",
    gap: 31,
  },
  footerButton: {
    width: 70,
    height: 40,
    backgroundColor: "#dadada",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
