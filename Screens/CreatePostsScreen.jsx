import { View, Text } from "react-native";
import CustomHeader from "../component/customHeader";
import CustomBottomBar from "../component/customBottomBar";

const CreatePostsScreen = () => {
  return (
    <>
      <CustomHeader title="Створити публікацію" back={true} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>PostScreen!</Text>
      </View>
      <CustomBottomBar />
    </>
  );
};

export default CreatePostsScreen;
