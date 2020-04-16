import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Field: {},
  FieldTouchable: {
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  TwoValues: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  FourValues: {
    justifyContent: "center",
  },
  Flex: {
    flex: 1,
  },
  Active: {
    backgroundColor: "rgba(0, 0, 255, 0.2)",
  },
  ValuePreset: {
    fontWeight: "bold",
  },
  BigFont: {
    fontSize: 24,
  },
  MediumFont: {
    fontSize: 14,
  },
  SmallFont: {
    fontSize: 12,
  },
});
