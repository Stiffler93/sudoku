import "react-native-gesture-handler";
import React, { ComponentType, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import LoadingScreen from "./components/LoadingScreen";
import MainMenuScreen from "./components/MainMenu/MainMenu";
import GameScreen from "./components/Game/Game";

import Levels from "./components/Levels/Levels";
import { WIDTH } from "./Dimensions";

const Stack = createStackNavigator();

const App = () => {
  const width = WIDTH;

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Main Menu"
          component={MainMenuScreen as ComponentType}
        />
        <Stack.Screen
          name="Loading"
          initialParams={{ nextScreen: "Main Menu" }}
          component={LoadingScreen as ComponentType}
        />
        <Stack.Screen name="Levels" component={Levels} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
