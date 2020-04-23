import React from "react";
import Svg, { Path } from "react-native-svg";

const RATIO = 67 / 90;

interface DigitProps {
  height: number;
}

const Digit4 = (props: DigitProps) => {
  const height = props.height;
  const width = height * RATIO;

  return (
    <Svg width={width} height={height} viewBox="0 0 67 90">
      <Path
        fill="none"
        stroke="#000"
        d="M1 63h31v5h-5l1.02 20.4L35 90h27V68h-5v-5h9V41h-9V0H40c-8.96.17-11.62 5.87-17.17 12-4.92 5.44-19.21 18.08-21.25 24C.89 38.03 1 40.84 1 43v20zM54 2v42h9v16h-9v11h5v15.14H39c-2.4.42-6.2 1.49-7.98-.74C29.46 83.44 30 73.88 30 71h5V60H4V42c.07-9.8 5.36-12.33 12-19L29 9c4.76-4.78 6.08-6.87 13-7h12zM6 57h32c0 3.55.8 12.94-1.6 15.41-1.12 1.15-2.04 1.15-3.4 1.59v10h15l7.98-1.6L57 74h-5V57h8V47h-8V5c-3.1 0-11.52-.32-14 .6-4.18 1.54-8.03 7.12-11.09 10.4-4.78 5.13-18.34 17.22-20.33 23-.63 1.85-.57 4.06-.58 6v12zm32-32v22H20c.16-1.94.11-3.17 1.02-5C23.12 37.8 33.7 27.04 38 25zm-4 7L23 44h12l-1-12z"
      />
    </Svg>
  );
};

export default Digit4;
