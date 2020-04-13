import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    borderColor: "black",
    borderWidth: 2,
  },
  Field: {
    flexBasis: "11.11%",
    height: "11.11%",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: 1,
  },
  BorderRight: { borderRightColor: "black" },
  BorderLeft: { borderLeftColor: "black" },
  BorderTop: { borderTopColor: "black" },
  BorderBottom: { borderBottomColor: "black" },
});
