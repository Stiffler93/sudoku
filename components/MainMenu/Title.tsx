import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

const RATIO = 121.405 / 339.983;

interface TitleProps {
  width?: number;
  style?: any;
}

const Title = (props: TitleProps) => {
  const width = props.width || props.style?.width || 400;
  const height = width * RATIO;

  return (
    <Svg
      style={props.style}
      width={width}
      height={height}
      viewBox="80.009 14.297 339.983 121.405"
      preserveAspectRatio="xMidYMid"
    >
      <Defs></Defs>
      <G transform="translate(-9 -9)">
        <Path
          d="M159.535 69.11h0q.96-1.92.96-3.71h0q0-1.79-.19-2.78h0q-.2-1-.64-1.76h0q-.96-1.67-2.88-1.67h0q-2.37 0-4.29 1.73h0q-2.05 1.79-2.05 4.61h0q0 1.79 1.25 3.17h0q1.25 1.37 3.17 2.65h0q1.92 1.28 4.09 2.56h0q2.18 1.28 4.1 2.82h0q4.41 3.52 4.41 8.25h0q0 3.2-1.69 5.92h0q-1.7 2.72-4.51 4.71h0q-6.15 4.35-14.28 4.35h0q-6.59 0-9.98-2.14h0q-3.39-2.15-3.39-5.41h0q0-5.83 4.54-7.3h0q1.28-.45 3.23-.45h0q1.96 0 4.2.84h0q-1.03 2.62-1.03 4.99h0q0 5.12 3.65 5.12h0q2.37 0 4.32-1.73h0q1.95-1.73 1.95-3.68h0q0-1.95-1.25-3.36h0q-1.24-1.41-3.1-2.53h0q-1.86-1.12-4-2.21h0q-2.14-1.08-4-2.62h0q-4.35-3.52-4.35-9.15h0q0-3.65 1.79-6.5h0q1.79-2.85 4.67-4.77h0q5.76-3.9 12.83-3.9h0q7.08 0 10.5 2.11h0q3.42 2.11 3.42 5.7h0q0 3.13-2.43 5.12h0q-2.11 1.66-4.67 1.66h0q-2.56 0-4.35-.64zm33.34 26.88h0q-3.07 3.97-10.69 3.97h0q-3.96 0-6.84-2.4h0q-2.88-2.4-2.88-5.86h0q0-1.92.19-2.88h0l4.29-22.78 12.99-1.28-4.67 24.7h0q-.26 1.41-.26 2.24h0q0 3.72 2.24 3.72h0q2.5 0 4.29-3.4h0q.57-1.08.83-2.49h0l4.54-23.49 12.61-1.28-4.73 24.96h0q-.2.96-.2 1.98h0q0 1.03.58 2.15h0q.58 1.12 2.43 1.37h0q-.38 1.54-1.73 2.56h0q-2.81 2.18-5.85 2.18h0q-3.04 0-4.83-1.09h0q-1.8-1.09-2.31-2.88zm40-31.23h0q2.31 0 4.1.51h0q.06-.25.19-.96h0l.32-1.98h0q.26-1.28.64-3.39h0l1.02-5.06 12.74-1.28-7.1 37.12h0q-.07.38-.07 1.02h0v1.03h0q0 1.41.71 2.46h0q.7 1.06 1.85 1.06h0q-1.28 3.01-5.18 4.29h0q-1.35.38-3.23.38h0q-1.89 0-3.62-.99h0q-1.73-.99-2.24-2.66h0q-1.02 1.67-3.07 2.66h0q-2.05.99-5.03.99h0q-2.97 0-5.44-.77h0q-2.46-.77-4-2.43h0q-2.81-3.26-2.81-10.69h0q0-9.6 5.63-15.42h0q5.63-5.89 14.59-5.89zm-.45 3.84h0q-2.36 0-3.64 2.56h0q-1.28 2.56-2.6 8.9h0q-1.31 6.33-1.31 12.03h0q0 3.9 2.31 3.9h0q2.04 0 3.48-2.05h0q1.44-2.04 2.02-5.44h0l3.46-18.75h0q-1.35-1.15-3.72-1.15zm34.24 31.36h0q-14.08 0-14.08-13.25h0q0-9.41 5.19-15.49h0q5.5-6.46 15.04-6.46h0q6.91 0 10.43 3.2h0q3.52 3.2 3.52 9.92h0q0 10.24-5.5 16.19h0q-5.38 5.89-14.6 5.89zm1.67-27.84h0q-.77 1.73-1.38 4.32h0q-.61 2.59-1.37 6.69h0q-.77 4.09-.77 9.15h0q0 1.66.54 2.75h0q.55 1.09 2.02 1.09h0q1.47 0 2.4-.7h0q.93-.71 1.63-2.37h0q1.28-2.95 2.3-8.42h0q1.03-5.47 1.12-7.84h0q.1-2.37.1-4.13h0q0-1.76-.51-2.91h0q-.51-1.15-1.95-1.15h0q-1.44 0-2.4.9h0q-.96.89-1.73 2.62zm38.72-3.78h0q3.45-3.58 10.75-3.58h0q4.03 0 6.24 2.14h0q2.21 2.15 2.21 6.08h0q0 3.94-2.21 6.72h0q-2.21 2.79-6.3 3.94h0q.32 1.28.76 2.62h0l.9 2.56h0q1.22 3.27 2.18 4.42h0q.96 1.15 2.24 1.54h0q-.71 2.62-3.27 4.03h0q-2.05 1.15-4.86 1.15h0q-8.26 0-9.35-12.74h0q-.19-1.79-.19-3.58h0q3.2-.9 5.44-3.9h0q2.24-3.01 2.24-6.53h0q0-3.52-2.49-3.52h0q-1.8 0-3.2 1.98h0q-1.41 1.99-2.05 5.38h0l-4.23 21.63-12.92 1.28 8.96-46.08 12.86-1.28-1.47 7.62h0q-.96 5.37-2.24 8.12zm42.69 27.65h0q-3.08 3.97-10.69 3.97h0q-3.97 0-6.85-2.4h0q-2.88-2.4-2.88-5.86h0q0-1.92.19-2.88h0l4.29-22.78 12.99-1.28-4.67 24.7h0q-.26 1.41-.26 2.24h0q0 3.72 2.24 3.72h0q2.5 0 4.29-3.4h0q.58-1.08.83-2.49h0l4.55-23.49 12.61-1.28-4.74 24.96h0q-.19.96-.19 1.98h0q0 1.03.57 2.15h0q.58 1.12 2.44 1.37h0q-.39 1.54-1.73 2.56h0q-2.82 2.18-5.86 2.18h0q-3.04 0-4.83-1.09h0q-1.79-1.09-2.3-2.88z"
          fill="red"
          stroke="#0f0"
          strokeWidth={1.8}
        />
      </G>
      <Path
        d="M150.535 60.11h0q.96-1.92.96-3.71h0q0-1.79-.19-2.78h0q-.2-1-.64-1.76h0q-.96-1.67-2.88-1.67h0q-2.37 0-4.29 1.73h0q-2.05 1.79-2.05 4.61h0q0 1.79 1.25 3.17h0q1.25 1.37 3.17 2.65h0q1.92 1.28 4.09 2.56h0q2.18 1.28 4.1 2.82h0q4.41 3.52 4.41 8.25h0q0 3.2-1.69 5.92h0q-1.7 2.72-4.51 4.71h0q-6.15 4.35-14.28 4.35h0q-6.59 0-9.98-2.14h0q-3.39-2.15-3.39-5.41h0q0-5.83 4.54-7.3h0q1.28-.45 3.23-.45h0q1.96 0 4.2.84h0q-1.03 2.62-1.03 4.99h0q0 5.12 3.65 5.12h0q2.37 0 4.32-1.73h0q1.95-1.73 1.95-3.68h0q0-1.95-1.25-3.36h0q-1.24-1.41-3.1-2.53h0q-1.86-1.12-4-2.21h0q-2.14-1.08-4-2.62h0q-4.35-3.52-4.35-9.15h0q0-3.65 1.79-6.5h0q1.79-2.85 4.67-4.77h0q5.76-3.9 12.83-3.9h0q7.08 0 10.5 2.11h0q3.42 2.11 3.42 5.7h0q0 3.13-2.43 5.12h0q-2.11 1.66-4.67 1.66h0q-2.56 0-4.35-.64zm33.34 26.88h0q-3.07 3.97-10.69 3.97h0q-3.96 0-6.84-2.4h0q-2.88-2.4-2.88-5.86h0q0-1.92.19-2.88h0l4.29-22.78 12.99-1.28-4.67 24.7h0q-.26 1.41-.26 2.24h0q0 3.72 2.24 3.72h0q2.5 0 4.29-3.4h0q.57-1.08.83-2.49h0l4.54-23.49 12.61-1.28-4.73 24.96h0q-.2.96-.2 1.98h0q0 1.03.58 2.15h0q.58 1.12 2.43 1.37h0q-.38 1.54-1.73 2.56h0q-2.81 2.18-5.85 2.18h0q-3.04 0-4.83-1.09h0q-1.8-1.09-2.31-2.88zm40-31.23h0q2.31 0 4.1.51h0q.06-.25.19-.96h0l.32-1.98h0q.26-1.28.64-3.39h0l1.02-5.06 12.74-1.28-7.1 37.12h0q-.07.38-.07 1.02h0v1.03h0q0 1.41.71 2.46h0q.7 1.06 1.85 1.06h0q-1.28 3.01-5.18 4.29h0q-1.35.38-3.23.38h0q-1.89 0-3.62-.99h0q-1.73-.99-2.24-2.66h0q-1.02 1.67-3.07 2.66h0q-2.05.99-5.03.99h0q-2.97 0-5.44-.77h0q-2.46-.77-4-2.43h0q-2.81-3.26-2.81-10.69h0q0-9.6 5.63-15.42h0q5.63-5.89 14.59-5.89zm-.45 3.84h0q-2.36 0-3.64 2.56h0q-1.28 2.56-2.6 8.9h0q-1.31 6.33-1.31 12.03h0q0 3.9 2.31 3.9h0q2.04 0 3.48-2.05h0q1.44-2.04 2.02-5.44h0l3.46-18.75h0q-1.35-1.15-3.72-1.15zm34.24 31.36h0q-14.08 0-14.08-13.25h0q0-9.41 5.19-15.49h0q5.5-6.46 15.04-6.46h0q6.91 0 10.43 3.2h0q3.52 3.2 3.52 9.92h0q0 10.24-5.5 16.19h0q-5.38 5.89-14.6 5.89zm1.67-27.84h0q-.77 1.73-1.38 4.32h0q-.61 2.59-1.37 6.69h0q-.77 4.09-.77 9.15h0q0 1.66.54 2.75h0q.55 1.09 2.02 1.09h0q1.47 0 2.4-.7h0q.93-.71 1.63-2.37h0q1.28-2.95 2.3-8.42h0q1.03-5.47 1.12-7.84h0q.1-2.37.1-4.13h0q0-1.76-.51-2.91h0q-.51-1.15-1.95-1.15h0q-1.44 0-2.4.9h0q-.96.89-1.73 2.62zm38.72-3.78h0q3.45-3.58 10.75-3.58h0q4.03 0 6.24 2.14h0q2.21 2.15 2.21 6.08h0q0 3.94-2.21 6.72h0q-2.21 2.79-6.3 3.94h0q.32 1.28.76 2.62h0l.9 2.56h0q1.22 3.27 2.18 4.42h0q.96 1.15 2.24 1.54h0q-.71 2.62-3.27 4.03h0q-2.05 1.15-4.86 1.15h0q-8.26 0-9.35-12.74h0q-.19-1.79-.19-3.58h0q3.2-.9 5.44-3.9h0q2.24-3.01 2.24-6.53h0q0-3.52-2.49-3.52h0q-1.8 0-3.2 1.98h0q-1.41 1.99-2.05 5.38h0l-4.23 21.63-12.92 1.28 8.96-46.08 12.86-1.28-1.47 7.62h0q-.96 5.37-2.24 8.12zm42.69 27.65h0q-3.08 3.97-10.69 3.97h0q-3.97 0-6.85-2.4h0q-2.88-2.4-2.88-5.86h0q0-1.92.19-2.88h0l4.29-22.78 12.99-1.28-4.67 24.7h0q-.26 1.41-.26 2.24h0q0 3.72 2.24 3.72h0q2.5 0 4.29-3.4h0q.58-1.08.83-2.49h0l4.55-23.49 12.61-1.28-4.74 24.96h0q-.19.96-.19 1.98h0q0 1.03.57 2.15h0q.58 1.12 2.44 1.37h0q-.39 1.54-1.73 2.56h0q-2.82 2.18-5.86 2.18h0q-3.04 0-4.83-1.09h0q-1.79-1.09-2.3-2.88z"
        fill="none"
        stroke="#fff"
        strokeWidth={2.1}
      />
    </Svg>
  );
};

export default Title;
