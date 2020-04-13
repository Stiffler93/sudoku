import React, { ComponentType } from "react";
import { StyleSheet, Text, View } from "react-native";

interface LoadingScreenProps {
  navigation: any;
  route: any;
}

const LoadingScreen = (props: LoadingScreenProps) => {
  const { route } = props;
  const { nextScreen } = route?.params;

  function start() {
    console.log("Start loading Screen");
    setTimeout(() => {
      console.log("Navigate to: " + nextScreen);
      props.navigation.navigate(nextScreen);
    }, 2000);
  }

  return (
    <View>
      <Text>Loading Screen</Text>
      {start()}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoadingScreen;
