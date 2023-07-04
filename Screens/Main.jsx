import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import PostScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { authSlice, getCurrentUser } from "../redux/auth/authReducer";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

const Main = () => {
  const isAuth = useSelector((store) => store.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const userInfo = {
          userId: user.uid,
          login: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        };

        dispatch(getCurrentUser(userInfo));
        console.log(1111111, user.uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={isAuth ? "PostScreen" : "Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="PostScreen" component={PostScreen} />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        />
        <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <MainStack.Screen name="CommentsScreen" component={CommentsScreen} />
        <MainStack.Screen name="MapScreen" component={MapScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default Main;
