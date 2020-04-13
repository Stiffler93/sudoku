import React from "react";
import { Text, View, Button } from "react-native";
import styles from "./Field.styles";
import { useGameContextProvider } from "./Game.context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface FieldProps {
  value: number[] | number;
  active?: boolean;
  preset?: boolean;
  onPress?: () => void;
  style?: any;
}

const Field = (props: FieldProps) => {
  const { value, preset, active, onPress } = props;
  const values = Array.isArray(value) ? value : [value];
  const numElems = values.length;
  const fontSize = getFontStyle(numElems, preset);
  const activeStyle = active ? styles.Active : {};

  return (
    <View style={{ ...styles.Field, ...activeStyle, ...props.style }}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("onPress");
        }}
        style={styles.FieldTouchable}
      >
        {numElems === 1 && <Text style={fontSize}>{value}</Text>}
        {numElems === 2 && (
          <View style={{ ...styles.TwoValues, ...styles.Flex }}>
            <Text style={fontSize}>{values[0]}</Text>
            <Text style={fontSize}>{values[1]}</Text>
          </View>
        )}
        {numElems > 2 && (
          <View style={{ ...styles.FourValues, ...styles.Flex }}>
            <View style={styles.TwoValues}>
              <Text style={fontSize}>{values[0]}</Text>
              <Text style={fontSize}>{values[1]}</Text>
            </View>
            <View style={styles.TwoValues}>
              <Text style={fontSize}>{values[2]}</Text>
              <Text style={fontSize}>{values[3] || " "}</Text>
            </View>
          </View>
        )}
      </TouchableWithoutFeedback>
    </View>
  );
};

function getFontStyle(numElems: number, preset: boolean | undefined) {
  const style = preset ? styles.ValuePreset : {};
  if (numElems === 1) {
    return { ...style, ...styles.BigFont };
  } else if (numElems === 2) {
    return { ...style, ...styles.MediumFont };
  }

  return { ...style, ...styles.SmallFont };
}

export default Field;
