import { StyleSheet } from "react-native";
import { WIDTH, MARGIN_LARGE, MARGIN_HUGE } from "../../Dimensions";

export default StyleSheet.create({
  MainMenu: {
    alignItems: "center",
  },
  SudokuBackground: {
    position: "absolute",
    top: MARGIN_HUGE,
    width: Math.floor(WIDTH * 1.2),
    color: "rgba(56, 56, 56, 0.5)",
  },
  Title: {
    marginTop: MARGIN_HUGE * 2,
    marginBottom: MARGIN_HUGE,
  },
  NewGame: {
    width: Math.floor(WIDTH * 0.9),
  },
});
