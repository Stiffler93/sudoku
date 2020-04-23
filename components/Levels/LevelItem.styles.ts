import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Text: {
    fontFamily: "Courier",
  },
  LevelItem: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
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
