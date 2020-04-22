import React, { ComponentType } from "react";
import { Text, View, Button } from "react-native";
import styles from "./MainMenu.styles";
import SudokuBackground from "./SudokuBackground";
import MenuGroup from "./MenuGroup";
import Title from "./Title";

interface MainMenuScreenProps {
  navigation: any;
  style?: any;
}

const MainMenuScreen = (props: MainMenuScreenProps) => {
  const { navigation } = props;

  return (
    <View style={styles.MainMenu}>
      <SudokuBackground style={styles.SudokuBackground}></SudokuBackground>
      <Title style={styles.Title}></Title>
      <MenuGroup
        title="New Game"
        style={styles.NewGame}
        fill="#ff0000"
      ></MenuGroup>
      {/* <Button
        title="Beginner"
        onPress={() =>
          navigation.navigate("Levels", {
            difficulty: "Beginner",
          })
        }
      />
      <Button
        title="Advanced"
        onPress={() =>
          navigation.navigate("Levels", {
            difficulty: "Advanced",
          })
        }
      />
      <Button
        title="Professional"
        onPress={() =>
          navigation.navigate("Levels", {
            difficulty: "Professional",
          })
        }
      />
      <Button
        title="Maniac"
        onPress={() =>
          navigation.navigate("Levels", {
            difficulty: "Maniac",
          })
        }
      /> */}
    </View>
  );
};

export default MainMenuScreen;
