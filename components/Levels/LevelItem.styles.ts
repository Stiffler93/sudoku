import { StyleSheet } from "react-native";
import { WIDTH } from "../../Dimensions";

export default StyleSheet.create({
  ItemBackground: {
    position: "absolute",
    width: Math.floor(WIDTH / 3),
    color: "rgba(0, 0, 0, 0.4)",
  },
  Text: {
    fontFamily: "Courier",
  },
  LevelItem: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  View: {
    height: "100%",
  },
  Number: {
    height: 45,
  },
  Done: {
    alignSelf: "flex-end",
  },
  Beginner: {
    backgroundColor: "rgba(88, 234, 20, 0.3)",
  },
  Advanced: {
    backgroundColor: "rgba(233, 230, 62, 0.3)",
  },
  Professional: {
    backgroundColor: "rgba(250, 162, 30, 0.3)",
  },
  Maniac: {
    backgroundColor: "rgba(233, 66, 5, 0.3)",
  },
});
