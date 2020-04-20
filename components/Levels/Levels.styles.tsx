import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");
const width = window.width;
const margin = 5;
const spacing = 5;
const itemsPerRow = 3;
const widthPerItem = Math.floor(
  (width - 2 * margin - (itemsPerRow - 1) * spacing) / itemsPerRow
);

const LevelItem = {
  height: widthPerItem,
  width: widthPerItem,
  flexBasis: "30%",
  marginTop: spacing,
  marginBottom: spacing,
};

export default StyleSheet.create({
  Levels: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: spacing,
  },
  LevelItem,
  LastLevelItem: {
    ...LevelItem,
    marginRight: "auto",
    marginLeft: 2 * spacing,
  },
});
