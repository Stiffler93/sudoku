import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { MARGIN_SMALL } from "../../Dimensions";

const RATIO = 684 / 1424;

interface MenuGroupProps {
  title: string;
  children?: ReactNode;
  fill?: string;
  color?: string;
  width?: number;
  style?: any;
}

const MenuGroup = (props: MenuGroupProps) => {
  const width = props.width || props.style?.width || 200;
  const height = width * RATIO;
  const fill = props.fill || props.style?.color || "none";
  const color = props.color || props.style?.color || "#000";

  return (
    <View style={{ ...styles.Container, ...props.style, ...{ width, height } }}>
      <Text style={styles.Title}>{props.title}</Text>
      <View style={styles.Content}>{props.children}</View>
      <Svg
        style={styles.Svg}
        width={width}
        height={height}
        viewBox="0 0 1424 684"
      >
        <Path
          fill={fill}
          stroke={color}
          d="M0 0v684h1424V0h-250v7h243v670H7V7h243V0H0z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    position: "absolute",
    top: 0,
    fontWeight: "bold",
    fontSize: 24,
    width: "100%",
    textAlign: "center",
    transform: [{ translateY: -16 }],
    textShadowColor: "red",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  Svg: {
    position: "absolute",
  },
  Content: {
    margin: MARGIN_SMALL,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

export default MenuGroup;
