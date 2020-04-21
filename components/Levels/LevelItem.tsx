import React from "react";
import { View, Image } from "react-native";
import styles from "./LevelItem.styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Level } from "./Levels.interfaces";
import Number from "../Elements/Number";
import { getImage } from "../../Assets";

interface LevelItemProps {
  level: Level;
  index: number;
  onPress?: (level: Level) => void;
  style?: any;
}

const LevelItem = (props: LevelItemProps) => {
  const levelNum = props.index + 1;
  const { id, sudoku, solution, hints, difficulty } = props.level;
  const difficultyStyle = getStyleForDifficulty(difficulty);
  const doneImage = getImage("done.png");

  return (
    <View style={{ ...styles.LevelItem, ...difficultyStyle, ...props.style }}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (props.onPress) props.onPress(props.level);
        }}
      >
        <View style={styles.View}>
          <Number style={styles.Number} num={levelNum}></Number>
          {/* <Text style={styles.Text}>{sudoku}</Text> */}
        </View>
      </TouchableWithoutFeedback>
      <Image
        style={{
          ...styles.Done,
          ...{ transform: [{ translateY: -doneImage.height }] },
        }}
        source={doneImage.image}
      ></Image>
    </View>
  );
};

function getStyleForDifficulty(difficulty: string | undefined) {
  switch (difficulty) {
    case "Advanced":
      return styles.Advanced;
    case "Professional":
      return styles.Professional;
    case "Maniac":
      return styles.Maniac;
  }
  return styles.Beginner;
}

export default LevelItem;
