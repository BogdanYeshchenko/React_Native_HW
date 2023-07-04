import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import CustomHeader from "../component/customHeader";
import CustomBottomBar from "../component/customBottomBar";
import { useSelector } from "react-redux";
import { db } from "../firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const PostScreen = () => {
  const [posts, setPosts] = useState(null);
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth);

  const getPosts = async () => {
    const q = query(collection(db, "Posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(posts);
    });
  };

  useEffect(() => {
    getPosts();
  }, [getPosts]);

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
          <FlatList
            data={posts}
            keyExtractor={(post) => post.id.toString()}
            renderItem={(post) => (
              <>
                <View style={styles.postPhotoBox}>
                  <Image
                    style={styles.postPhoto}
                    source={{ uri: post.item.photoUrl }}
                  />
                </View>
                <View style={{ marginBottom: 8 }}>
                  <Text style={styles.postName}>{post.item.title}</Text>
                </View>
                <View style={styles.postDescriptionBox}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log(post.item);
                      navigation.navigate("CommentsScreen", {
                        post: post.item,
                      });
                    }}
                    style={styles.commentBox}
                  >
                    <Feather name="message-circle" size={24} color="#BDBDBD" />
                    <Text style={styles.commentsCounter}>
                      {post.item.comments.length || "0"}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      console.log("Map");
                      navigation.navigate("MapScreen", { post: post.item });
                    }}
                    style={styles.commentBox}
                  >
                    <Feather name="map-pin" size={22} color="#BDBDBD" />
                    <Text style={styles.locationText}>
                      {post.item.locationName}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          />
        </View>
      </View>

      <CustomBottomBar />
    </>
  );
};

// {
//   photoUrl,
//   title: name,
//   locationName: locality,
//   photoLocation: location,
//   ownerId: userId,
//   comments: [],
//   dateCreate: formattedDate,
//   likes: [],
// }

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
    flex: 1,
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
    marginBottom: 32,
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
