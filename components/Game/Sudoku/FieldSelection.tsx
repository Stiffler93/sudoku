import React from "react";
import { View } from "react-native";
import styles from "./FieldSelection.styles";
import Field from "./Field";
import { useGameContextProvider } from "../Game.context";

interface FieldSelectionProps {
  style?: any;
}

const FieldSelection = (props: FieldSelectionProps) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const gameContext = useGameContextProvider();

  function modifyActiveSelection(selection: number) {
    const active = gameContext.active;
    if (active === -1) return;

    const activeFields = gameContext.fields[active];
    const fields = Array.from(gameContext.fields);

    if (activeFields.includes(selection)) {
      fields[active] = activeFields.filter((sel) => sel !== selection);
    } else {
      if (activeFields.length === 4) return;
      fields[active] = [...activeFields, selection];
    }

    gameContext.setFields(fields);
  }

  return (
    <View style={{ ...styles.FieldSelection, ...props.style }}>
      {numbers.map((num, index) => (
        <Field
          style={styles.Field}
          key={index}
          value={num}
          active={gameContext.fields[gameContext.active]?.includes(num)}
          onPress={modifyActiveSelection.bind(undefined, num)}
        ></Field>
      ))}
    </View>
  );
};

export default FieldSelection;
