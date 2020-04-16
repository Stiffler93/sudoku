import React from "react";
import { View, Text } from "react-native";
import styles from "./LevelItem.styles";
import { TouchableHighlight } from "react-native-gesture-handler";
import { GameData } from "../Game/Game.interfaces";

interface LevelItemProps {
  index: number;
  item: string;
  difficulty: string;
  onPress?: (item: GameData) => void;
}

const LevelItem = (props: LevelItemProps) => {
  const levelNum = props.index + 1;

  return (
    <TouchableHighlight
      onPress={() => {
        if (props.onPress)
          props.onPress({
            level: levelNum,
            difficulty: props.difficulty,
            data: props.item,
          });
      }}
    >
      <View style={styles.LevelItem}>
        <Text>{props.item}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default LevelItem;
