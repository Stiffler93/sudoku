import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import styles from "./Board.styles";
import Field from "./Field";
import { useGameContextProvider } from "./Game.context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface BoardProps {
  fields: number[][];
  style?: any;
}

const Board = (props: BoardProps) => {
  const { fields } = props;
  const gameContext = useGameContextProvider();

  return (
    <View style={{ ...styles.Board, ...props.style }}>
      {fields &&
        fields.map((field, index) => (
          <Field
            key={`${index}`}
            style={{ ...styles.Field, ...getFieldStyle(index) }}
            value={field}
            active={index === gameContext.active}
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
