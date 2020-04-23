import React from "react";
import Svg, { Path } from "react-native-svg";

const RATIO = 63 / 90;

interface DigitProps {
  height: number;
}

const Digit9 = (props: DigitProps) => {
  const height = props.height;
  const width = height * RATIO;

  return (
    <Svg width={width} height={height} viewBox="0 0 63 90">
      <Path
        fill="none"
        stroke="#000"
        d="M39 55c0 3.01.58 9.23-1.6 11.4-2.41 2.41-10.4 2.26-12.38-.71-1.08-1.63-.95-3.83-1.02-5.69H0v10c.12 6.52 1.57 7.39 5.99 12 2.06 2.15 5.47 6.36 8.1 7.4 2.72 1.08 23.43.61 27.91.6 2.09 0 5.06.12 7-.6 4.13-1.52 11.97-10.21 13.42-14.4.69-2.03.58-4.84.58-7V23c0-2.45.13-5.72-.74-8-1.22-3.2-9.42-12.13-12.54-13.43C48.14.92 45.71 1.01 44 1H21c-2.08 0-5.07-.11-7 .6C10.43 2.92 1.9 12.45.6 16c-.58 1.58-.57 3.35-.6 5v14c.11 5.87 1.02 6.73 5 11 1.84 1.96 6.01 6.86 8.09 7.98C16.39 55.75 34.15 55 39 55zM2 63h20c.17 2.1.14 3.95 1.6 5.69 2.9 3.44 13.01 3.07 16.09 0 2.52-2.53 2.43-6.37 2.29-9.69-.08-1.9-.14-3.96-1.58-5.4-2.67-2.67-16.22-1.53-20.4-1.6-2.14-.04-4.02-.02-6-1.02C10.92 49.42 3.77 41.24 2.6 38c-.58-1.59-.56-3.33-.6-5-.05-3.08-.23-12.53.51-15 .95-3.17 3.3-5.66 5.53-8C9.83 8.13 12.72 5.16 15 4.02 18.59 2.23 36.88 2.97 42 3c1.86.01 4.25-.05 6 .6C51.41 4.87 59.16 13.61 60.4 17c.72 1.95.6 4.9.6 7v43c0 2.09.12 5.06-.6 7-1.3 3.52-9.75 12.52-13.44 13.66H22c-1.88.33-4.23.39-6 0C11.87 85.88 4.03 77.19 2.58 73 1.78 70.65 2 65.65 2 63zm17 3H5c.03 1.97-.08 4.11.59 6C6.84 75.5 12.5 82.1 16 83.4c2.8 1.04 19.81.61 24 .6 12.17-.02 17.98-7.24 18-19V24c-.01-1.88.05-4.23-.6-6-1.19-3.25-7.18-9.47-10.4-10.79-1.89-.62-7.62-.21-10 0H17C10.32 8.99 5.12 17.47 5.16 24v12c1.02 3.47 7.6 11.09 10.93 12.4 1.66.66 4.12.59 5.91.6 3.89.03 18.11-.69 20.69 1.02 1.48.99 1.92 2.31 2.15 4 .57 4.22-.78 14.82-3.99 17.67-3.39 3.01-14.06 3.32-17.74.71-2.49-1.76-3.18-3.69-4.11-6.4zm6-48.98c3.76-.27 13.82-.68 16.66 1.58 5.05 4.01 4.51 15.19-.72 18.8-2.96 2.05-7.45 1.62-10.94 1.6-3.2-.02-6.22.15-8.69-2.31-3.1-3.1-3.18-13.14-.71-16.62 1.5-2.11 2.24-2.15 4.4-3.05zm-.56 4c-2.99 3.07-3.81 11.23 0 13.97 2.32 1.55 12.07 1.37 14.37 0 4.19-2.6 4.38-11.41 0-13.97-3.04-1.82-11.24-1.24-14.37 0zm2.71 1.58c2.66-.61 7.96-1.25 10.28.57 1.31 1.04 4.6 9.44-4.43 9.81-1.91.08-5.88.2-7.4-1-3.22-2.55-1.25-7.43 1.55-9.38z"
      />
    </Svg>
  );
};

export default Digit9;
