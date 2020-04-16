import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const size = Math.round((window.width / 100) * 95);
const gameMargin = 10;
const space = 20;
const menuBarBuffer = 100;
const selectionSize = Math.round(
  window.height - menuBarBuffer - size - 2 * gameMargin - space
);

export default StyleSheet.create({
  Game: {
    alignItems: "center",
    margin: gameMargin,
  },
  Board: {
    width: size,
    height: size,
  },
  GameControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "yellow",
    width: "100%",
    marginTop: space,
  },
  GameButtons: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  FieldSelection: {
    width: selectionSize,
    height: selectionSize,
  },
});
