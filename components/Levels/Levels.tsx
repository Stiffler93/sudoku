import React from "react";
import { View } from "react-native";
import styles from "./Levels.styles";

import * as Sudokus from "../../assets/Sudokus.json";
import LevelItem from "./LevelItem";
import { Level } from "./Levels.interfaces";
import { ScrollView } from "react-native-gesture-handler";

interface LevelsProps {
  navigation: any;
  route: any;
  style?: any;
}

const Levels = (props: LevelsProps) => {
  const { navigation, route, style } = props;
  const { difficulty } = route.params;

  const levels = getLevelsForDifficulty(difficulty).map((level) => {
    return { ...level, difficulty };
  });

  function openLevel(level: Level) {
    navigation.navigate("Game", level);
  }

  const NUM_LEVELS = levels.length;
  const levelsInLastRow = NUM_LEVELS % 3;
  const firstIndexInLastRow = NUM_LEVELS - levelsInLastRow;

  return (
    <ScrollView style={{ ...style }}>
      <View style={styles.Levels}>
        {levels.map((level, index) => (
          <LevelItem
            style={
              index >= firstIndexInLastRow
                ? styles.LastLevelItem
                : styles.LevelItem
            }
            key={`Level${index}`}
            level={level}
            index={index}
            onPress={(l: Level) => openLevel(l)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

function getLevelsForDifficulty(difficulty: string) {
  switch (difficulty) {
    case "Advanced":
      return Sudokus.Games.Advanced;
    case "Professional":
      return Sudokus.Games.Professional;
    case "Maniac":
      return Sudokus.Games.Maniac;
  }
  return Sudokus.Games.Beginner;
}

export default Levels;
