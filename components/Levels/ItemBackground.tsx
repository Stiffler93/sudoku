import React from "react";
import Svg, { Path } from "react-native-svg";

interface ItemBackgroundProps {
  width?: number;
  color?: string;
  fill?: string;
  style?: any;
}

const ItemBackground = (props: ItemBackgroundProps) => {
  const width = props.width || props.style?.width || 50;
  const color = props.color || props.style?.color || "#000";
  const fill = props.fill || props.style?.color || "none";

  return (
    <Svg style={props.style} width={width} height={width} viewBox="0 0 498 498">
      <Path
        fill={fill}
        stroke={color}
        d="M1.6 1.02C-.71 4.24 0 8.13 0 12v477c0 1.99-.23 5.81 1.02 7.4 1.35 1.7 4.03 1.56 5.98 1.6h482c1.99 0 5.81.23 7.4-1.02 1.7-1.35 1.56-4.03 1.6-5.98v-20-87V9c0-1.99.23-5.81-1.02-7.4C495.63-.1 492.95.04 491 0h-20-87-271-78-22C9.16 0 5.16-.49 1.6 1.02zM57 6v51H6V6h51zm55 0v51H58V6h54zm52 0v51h-51V6h51zm57 0v51h-51V6h51zm55 0v51h-54V6h54zm52 0v51h-51V6h51zm57 0v51h-51V6h51zm55 0v51h-54V6h54zm52 0v51h-51V6h51zM57 58v54H6V58h51zm55 0v54H58V58h54zm52 0v54h-51V58h51zm57 0v54h-51V58h51zm55 0v54h-54V58h54zm52 0v54h-51V58h51zm57 0v54h-51V58h51zm55 0v54h-54V58h54zm52 0v54h-51V58h51zM57 113v51H6v-51h51zm55 0v51H58v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51zM57 170v51H6v-51h51zm55 0v51H58v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51zM57 222v54H6v-54h51zm55 0v54H58v-54h54zm52 0v54h-51v-54h51zm57 0v54h-51v-54h51zm55 0v54h-54v-54h54zm52 0v54h-51v-54h51zm57 0v54h-51v-54h51zm55 0v54h-54v-54h54zm52 0v54h-51v-54h51zM57 277v51H6v-51h51zm55 0v51H58v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51zM57 334v51H6v-51h51zm55 0v51H58v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51zM57 386v54H6v-54h51zm55 0v54H58v-54h54zm52 0v54h-51v-54h51zm57 0v54h-51v-54h51zm55 0v54h-54v-54h54zm52 0v54h-51v-54h51zm57 0v54h-51v-54h51zm55 0v54h-54v-54h54zm52 0v54h-51v-54h51zM57 441v51H6v-51h51zm55 0v51H58v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51zm57 0v51h-51v-51h51zm55 0v51h-54v-51h54zm52 0v51h-51v-51h51z"
      />
    </Svg>
  );
};

export default ItemBackground;
