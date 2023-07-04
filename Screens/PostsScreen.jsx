import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import CustomHeader from "../component/customHeader";
import CustomBottomBar from "../component/customBottomBar";
import { useSelector } from "react-redux";

const PostScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth);
  return (
    <>
      <CustomHeader title="Публікації" logout={true} />
      <View style={styles.mainBox}>
        <View style={styles.userBox}>
          <View style={styles.photoBox}>
            <Image
              style={{ flex: 1, resizeMode: "contain" }}
              source={require("../src/assets/img/avatar.jpg")}
            />
          </View>
          <View>
            <Text style={styles.userName}>{user.login}</Text>
            <Text>{user.login}</Text>
          </View>
        </View>

        <View style={styles.postBox}>
          <View style={styles.postPhotoBox}>
            <Image
              style={styles.postPhoto}
              source={require("../src/assets/img/forest.jpg")}
            />
          </View>
          <View style={{ marginBottom: 8 }}>
            <Text style={styles.postName}>Ліс</Text>
          </View>
          <View style={styles.postDescriptionBox}>
            <TouchableOpacity
              onPress={() => {
                console.log(user);
                // navigation.navigate("CommentsScreen");
              }}
              style={styles.commentBox}
            >
              <Feather name="message-circle" size={24} color="#BDBDBD" />
              <Text style={styles.commentsCounter}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log("Map");
                navigation.navigate("MapScreen");
              }}
              style={styles.commentBox}
            >
              <Feather name="map-pin" size={22} color="#BDBDBD" />
              <Text style={styles.locationText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <CustomBottomBar />
    </>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 32,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  photoBox: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#FF6C00",
    overflow: "hidden",
  },
  userBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userName: { fontFamily: "Roboto-Medium", fontSize: 13, fontWeight: 700 },
  userMail: { fontFamily: "Roboto-Medium", fontSize: 11, fontWeight: 400 },
  postBox: {
    width: "100%",
    height: 299,
  },
  postPhotoBox: {
    width: "100%",
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 8,
    //   aspectRatio: 16/9, // Устанавливаем соотношение сторон 16:9
  },
  postPhoto: { width: "100%", height: "100%", resizeMode: "cover" },
  postName: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    fontWeight: 500,
  },
  postDescriptionBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  commentsCounter: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  commentBox: { flexDirection: "row", gap: 4 },
  locationText: {
    textDecorationLine: "underline",
    fontFamily: "Roboto-Regular",
    flexWrap: "wrap",
    fontSize: 16,
    color: "#212121",
  },
});
