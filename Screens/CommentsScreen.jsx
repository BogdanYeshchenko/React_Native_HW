import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../component/customHeader";
import { nanoid } from "nanoid";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const CommentsScreen = ({ route }) => {
  const [commentText, setCommentText] = useState(null);
  const [viewHeight, setViewHeight] = useState(0);
  const userId = useSelector((state) => state.auth.userId);
  const ownerLogin = useSelector((state) => state.auth.login);
  const ownerPhoto = useSelector((state) => state.auth.photoURL);

  const { post } = route.params;
  const postId = post.id;
  const comments = post.comments;

  const currentDate = new Date();
  const milliseconds = currentDate.getTime();
  const formattedDate = format(currentDate, "dd MMMM, yyyy | HH:mm");

  const handleContentSizeChange = (event) => {
    setViewHeight(event.nativeEvent.contentSize.height);
  };

  const sendComment = async () => {
    console.log(11111);
    const commentData = {
      owner: userId,
      ownerLogin,
      ownerPhoto,
      dateCreate: formattedDate,
      commentId: milliseconds,
      commentText,
    };

    console.log(2222222);

    const updatedComments = [...comments, commentData];
    console.log(333333);

    const washingtonRef = doc(db, "Posts", postId);

    console.log(4444444);

    try {
      await updateDoc(washingtonRef, {
        comments: updatedComments,
      });

      console.log(55555);

      setCommentText(null);

      console.log(666666);
    } catch (error) {
      console.log(777777);
      console.log("error:", error);
    }
    console.log(88888);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader title="Коментарі" back={true} style={{}} />

      <View style={{ flex: 1, paddingLeft: 16, paddingRight: 16 }}>
        <View style={styles.postPhotoBox}>
          <Image style={styles.postPhoto} source={{ uri: post.photoUrl }} />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={post.comments}
            keyExtractor={(post) => post.commentId.toString()}
            renderItem={({ item, index }) => {
              const flexDirection = index % 2 === 0 ? "row" : "row-reverse";

              return (
                <View
                  style={{
                    flexDirection,
                    marginBottom: 24,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      width: "85%",
                      height: "auto",
                      backgroundColor: "rgba(0, 0, 0, 0.03)",
                      borderRadius: 6,
                      padding: 16,
                    }}
                  >
                    <Text
                      style={{
                        color: "#212121",
                        fontFamily: "Roboto-Regular",
                        fontSize: 13,
                      }}
                    >
                      {item.commentText}
                    </Text>
                    <Text
                      style={{
                        color: "#BDBDBD",
                        fontFamily: "Roboto-Regular",
                        fontSize: 10,
                      }}
                    >
                      {item.dateCreate}
                    </Text>
                  </View>
                  <View>
                    <Text>{item.ownerLogin}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{ ...styles.addCommentBox, height: viewHeight + 30 }}>
          <TextInput
            style={styles.commentText}
            onChangeText={setCommentText}
            value={commentText}
            onContentSizeChange={handleContentSizeChange}
            multiline={true}
            placeholder="Коментувати..."
            keyboardType="default"
          />
          <TouchableOpacity
            style={styles.addComentButtun}
            onPress={sendComment}
          >
            <AntDesign name="arrowup" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  postPhotoBox: {
    width: "100%",
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 32,
    marginTop: 32,
    //   aspectRatio: 16/9, // Устанавливаем соотношение сторон 16:9
  },
  postPhoto: { width: "100%", height: "100%", resizeMode: "cover" },
  addCommentBox: {
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 50,
    width: "100%",
    height: "auto",
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",

    paddingLeft: 16,
    paddingRight: 8,
  },
  commentText: {
    flex: 1,
    height: "auto",
    textAlignVertical: "top",
    alignItems: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  addComentButtun: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: 34,
    height: 34,
  },
});
