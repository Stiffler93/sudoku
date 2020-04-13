import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import styles from "./FieldSelection.styles";
import Field from "./Field";

interface FieldSelectionProps {
  style?: any;
}

const FieldSelection = (props: FieldSelectionProps) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <View style={{ ...styles.FieldSelection, ...props.style }}>
      {numbers.map((num, index) => (
        <Field style={styles.Field} key={index} value={num}></Field>
      ))}
    </View>
  );
};

export default FieldSelection;
