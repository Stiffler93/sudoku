import React from "react";
import Svg, { Path } from "react-native-svg";

const RATIO = 64 / 90;

interface DigitProps {
  height: number;
}

const Digit7 = (props: DigitProps) => {
  const height = props.height;
  const width = height * RATIO;

  return (
    <Svg width={width} height={height} viewBox="0 0 64 90">
      <Path
        fill="none"
        stroke="#000"
        d="M1 0v27l18.4-1.02L21 21l16 1-22 68h25l17.33-52c3.17-9.5 6.65-15.89 6.67-26V0H1zm60 3v10c-.09 7.42-3.01 14.04-5.33 21L44.31 67c-1.2 3.36-5.64 17.45-7.82 18.98C34.71 87.23 31.14 87 29 87H19l22-68H18v5c-2.77 0-11.48.5-13.4-1.02C2.05 20.96 3 6.68 3 3h58zM6 6v15h9v-5h30L30 60l-7 24h5c9.71-.07 7.84-1.57 13.69-18l11.64-34c2.4-7.18 5.57-14.34 5.67-22V6H6z"
      />
    </Svg>
  );
};

export default Digit7;
