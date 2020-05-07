import React from "react";
import Svg, { Path } from "react-native-svg";

const RATIO = 53 / 90;

interface DigitProps {
  height: number;
  style?: any;
}

const Digit1 = (props: DigitProps) => {
  const height = props.height;
  const width = height * RATIO;
  const fill = props.style?.backgroundColor || "none";
  const color = props.style?.color || "#000";

  return (
    <Svg width={width} height={height} viewBox="0 0 53 90">
      <Path
        fill={fill}
        stroke={color}
        d="M0 32h12v36H0v22h53V68H43V0c-4.14 0-20.18-.43-23 .6-3.07 1.11-9.26 6.91-12 9.27C2.6 14.53.14 15.5 0 23v9zM40 3v68h10v16H3V71c3.01 0 9.23.58 11.4-1.6 1.92-1.92 1.59-5.86 1.6-8.4V30c-2.27 0-8.94.26-10.69-.6-2.55-1.25-2.45-4.95-2.25-7.4.11-1.45.26-2.6.96-3.91C5.34 15.64 16.37 6.18 19 4.58 23.17 2.05 34.76 3 40 3zM7 27h13v47H7v10h39V74H36V6c-3.05 0-10.46-.29-13 .58-3.6 1.24-14.05 9.96-15.4 13.46-.72 1.86-.59 4.93-.6 6.96z"
      />
    </Svg>
  );
};

export default Digit1;
