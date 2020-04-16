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
    setTimeout(() => {
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
