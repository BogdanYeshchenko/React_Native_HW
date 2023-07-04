import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const MapScreen = ({ route }) => {
  const { post } = route.params;

  const mapRef = React.useRef(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: post.photoLocation.latitude,
          longitude: post.photoLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        <Marker
          title="I am here"
          coordinate={{
            latitude: post.photoLocation.latitude,
            longitude: post.photoLocation.longitude,
          }}
          description="Hello"
        />
      </MapView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PostScreen");
        }}
        style={styles.goBack}
      >
        <Feather name="arrow-left" size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  goBack: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 100,
  },
});
