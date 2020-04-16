import React from "react";
import { View } from "react-native";
import styles from "./Levels.styles";

import * as Sudokus from "../../assets/Sudokus.json";
import { FlatList } from "react-native-gesture-handler";
import LevelItem from "./LevelItem";
import { GameData } from "../Game/Game.interfaces";

interface LevelsProps {
  navigation: any;
  route: any;
  style?: any;
}

const Levels = (props: LevelsProps) => {
  const { navigation, route, style } = props;
  const { difficulty } = route.params;

  const games = getGamesForDifficulty(difficulty);

  function openGame(data: GameData) {
    navigation.navigate("Game", data);
  }

  return (
    <View style={{ ...styles.Levels, ...style }}>
      <FlatList
        data={games}
        renderItem={(item) => (
          <LevelItem
            {...item}
            difficulty={difficulty}
            onPress={(data) => openGame(data)}
          ></LevelItem>
        )}
        keyExtractor={(elem) => elem}
      ></FlatList>
    </View>
  );
};

function getGamesForDifficulty(difficulty: string) {
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
