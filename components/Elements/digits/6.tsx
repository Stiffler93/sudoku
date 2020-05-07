import React from "react";
import Svg, { Path } from "react-native-svg";

const RATIO = 68 / 90;

interface DigitProps {
  height: number;
  style?: any;
}

const Digit6 = (props: DigitProps) => {
  const height = props.height;
  const width = height * RATIO;
  const fill = props.style?.backgroundColor || "none";
  const color = props.style?.color || "#000";

  return (
    <Svg width={width} height={height} viewBox="0 0 68 90">
      <Path
        fill={fill}
        stroke={color}
        d="M26 35v-4c.03-5.1-.09-8.45 6-8.94 1.99-.16 5.12-.06 6.85.96 3.39 2 2.65 5.35 4.74 6.96 1.53 1.17 4.55 1.01 6.41 1.02h17V20c-.12-6.41-1.57-7.49-6-12-2.36-2.39-5.88-6.25-9-7.4-2.24-.83-7.42-.6-10-.6H22c-2.09 0-5.06-.12-7 .6C10.77 2.15 2.06 11.69.58 16-.11 18.03 0 20.84 0 23v45c0 2.09-.12 5.06.6 7C1.94 78.65 11.35 88.06 15 89.4c1.77.65 4.12.59 6 .6h24c2.09 0 5.06.12 7-.6 3.44-1.27 12.33-10.11 13.98-13.4 1-2 .98-3.83 1.02-6V56c-.01-1.88.05-4.23-.6-6-1.27-3.44-10.11-12.33-13.4-13.98-2-1-3.83-.98-6-1.02H26zm39-7H52c-1.91-.01-4.84.15-6.42-1.02-2.01-1.49-1.9-4.92-5.64-6.96-1.57-.86-3.2-.93-4.94-1C20.49 18.43 23 27.1 23 38h21c2.09 0 5.06-.12 7 .6 3.61 1.33 12.07 9.79 13.4 13.4.91 2.47.61 10.91.6 14 0 2.09.12 5.06-.6 7-1 2.71-9.02 11.57-11.57 12.98-1.85 1.02-3.79.98-5.83.91H33 17C12.86 85.65 5.06 77.97 3.6 74c-.72-1.94-.6-4.91-.6-7V23c0-2.09-.12-5.06.6-7 .99-2.68 3.41-5 5.4-7 2-1.99 4.32-4.41 7-5.4 2.57-.95 12.66-.6 16-.6 3.69 0 16.31-.39 19 .6 2.73 1 4.97 3.4 7 5.4 8.1 8.01 7 8.33 7 19zM20 41V30c.01-3.21-.26-6.16 1.6-8.98 1.27-1.93 3.22-3.61 5.4-4.21 2.78-1.24 12.35-1.17 14.96 0C48.23 20.36 44.35 24.82 54 25h8c-.01-2.1.12-5.05-.6-7-.87-2.38-2.68-4.22-4.42-6-1.94-1.98-4.34-4.43-6.98-5.4-2.88-1.06-21.57-.61-26-.6-2.05 0-5.1-.11-6.99.6C13.73 7.84 7.78 14.73 6.6 18c-.72 1.96-.6 4.89-.6 7v42c.01 1.88-.05 4.23.6 6C8 76.81 14.02 82.69 18 83.79h31C53.07 82.67 59.97 75.9 61.66 72c.46-1.94.34-4.91 0-7 .35-2.59.51-8.79 0-11-2-6.98-9.62-12.87-16.66-13H20zm6 10.6c4.59-.98 14.19-1.54 17.85 1.71 4.22 3.74 4.7 15.58 0 19.09-2.5 1.87-5.89 1.59-8.85 1.6-4.06.01-8.58.59-11.85-2.31-3.81-3.38-4.42-12.49-1.55-16.63 1.44-2.09 2.35-2.35 4.4-3.46zm.23 3.42c-3.46 3.18-5.03 10.92-.92 14.38 2.55 2.14 12.73 2.24 15.54.58 4.05-2.4 4.34-11.43.84-14.38-3.03-2.55-11.95-1.86-15.46-.58zm2.9 2.41c3.07-.49 8.86-1.06 11.27 1.31 2.07 2.03 3.35 8.88-5.4 9.24-1.91.08-5.88.2-7.4-1-2.25-1.78-2.72-7.34 1.53-9.55z"
      />
    </Svg>
  );
};

export default Digit6;
