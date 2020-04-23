import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface MenuButtonProps {
  title: string;
  onPress?: () => void;
  color?: string;
  style?: any;
}

const MenuButton = (props: MenuButtonProps) => {
  const color = props.color || props.style?.color || "grey";

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (props.onPress) props.onPress();
      }}
      style={{ ...styles.Container, ...props.style, ...{ borderColor: color } }}
    >
      <View>
        <Text style={styles.Text}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "white",
  },
  Text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MenuButton;
