import React, { ComponentType } from "react";
import { Text, View, Button } from "react-native";
import styles from "./MainMenu.styles";
import SudokuBackground from "./SudokuBackground";

interface MainMenuScreenProps {
  navigation: any;
  style?: any;
}

const MainMenuScreen = (props: MainMenuScreenProps) => {
  const { navigation } = props;
  console.log(navigation);

  return (
    <View>
      <SudokuBackground></SudokuBackground>
      <Button
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
      />
    </View>
  );
};

export default MainMenuScreen;
