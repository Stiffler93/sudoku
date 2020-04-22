import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

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
    <View style={{ width, height }}>
      <Text style={styles.Title}>{props.title}</Text>
      <Svg width={width} height={height} viewBox="0 0 1424 684">
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
  Title: {
    position: "absolute",
    top: 0,
    fontWeight: "bold",
    fontSize: 24,
    width: "100%",
    textAlign: "center",
    transform: [{ translateY: -16 }],
  },
});

export default MenuGroup;
