import React, { ComponentType } from "react";
import { Text, View, Button } from "react-native";
import styles from "./MainMenu.styles";

interface MainMenuScreenProps {
  navigation: any;
  route: any;
  style?: any;
}

const MainMenuScreen = (props: MainMenuScreenProps) => {
  const { navigation, route } = props;
  return (
    <View>
      <Text>Main Menu Screen</Text>
      <Button
        title="New Game"
        onPress={() => navigation.navigate("Loading", { nextScreen: "Game" })}
      />
    </View>
  );
};

export default MainMenuScreen;
