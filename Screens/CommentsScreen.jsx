import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../component/customHeader";

const CommentsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <CustomHeader title="Коментарі" back={true} style={{}} />
    </View>
  );
};

export default CommentsScreen;
