import React from "react";
import { View } from "react-native";
import styles from "./MainMenu.styles";
import SudokuBackground from "./SudokuBackground";
import MenuGroup from "./MenuGroup";
import Title from "./Title";
import MenuButton from "./MenuButton";

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
      <MenuGroup title="Game Mode" style={styles.NewGame} fill="#ff0000">
        <MenuButton
          title="Beginner"
          style={styles.NewGameButton}
          onPress={() =>
            navigation.navigate("Levels", {
              difficulty: "Beginner",
            })
          }
        />
        <MenuButton
          title="Advanced"
          style={styles.NewGameButton}
          onPress={() =>
            navigation.navigate("Levels", {
              difficulty: "Advanced",
            })
          }
        />
        <MenuButton
          title="Professional"
          style={styles.NewGameButton}
          onPress={() =>
            navigation.navigate("Levels", {
              difficulty: "Professional",
            })
          }
        />
        <MenuButton
          title="Maniac"
          style={styles.NewGameButton}
          onPress={() =>
            navigation.navigate("Levels", {
              difficulty: "Maniac",
            })
          }
        />
      </MenuGroup>
    </View>
  );
};

export default MainMenuScreen;
