const { ImageBackground } = require("react-native");

const AuthBG = ({ children }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../src/assets/img/PhotoBG.jpg")}
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      {children}
    </ImageBackground>
  );
};

export default AuthBG;
