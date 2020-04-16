import React from "react";
import { View } from "react-native";
import styles from "./Board.styles";
import Field from "./Field";
import { useGameContextProvider } from "../Game.context";

interface BoardProps {
  style?: any;
}

const Board = (props: BoardProps) => {
  const gameContext = useGameContextProvider();

  return (
    <View style={{ ...styles.Board, ...props.style }}>
      {gameContext.fields &&
        gameContext.fields.map((field, index) => (
          <Field
            key={`${index}`}
            style={{ ...styles.Field, ...getFieldStyle(index) }}
            value={field}
            active={index === gameContext.active}
            preset={gameContext.presetValues.includes(index)}
            onPress={gameContext.setActive.bind(undefined, index)}
          />
        ))}
    </View>
  );
};

function getFieldStyle(index: number) {
  let style = {};
  const remainder = index % 9;
  const row = Math.floor(index / 9);
  if ([2, 5].includes(remainder)) {
    style = { ...style, ...styles.BorderRight };
  }
  if ([3, 6].includes(remainder)) {
    style = { ...style, ...styles.BorderLeft };
  }
  if ([2, 5].includes(row)) {
    style = { ...style, ...styles.BorderBottom };
  }
  if ([3, 6].includes(row)) {
    style = { ...style, ...styles.BorderTop };
  }
  return style;
}

export default Board;
