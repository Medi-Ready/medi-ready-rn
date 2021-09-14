import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/loadingAnimation.json")}
        style={styles.animationContainer}
        autoPlay
        loop={true}
        speed={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006FF3",
  },
  animationContainer: {
    width: 400,
    height: 300,
    backgroundColor: "#006FF3",
  },
});

export default LoadingScreen;
