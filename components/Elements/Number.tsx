import React, { ReactNode } from 'react';
import { Image, View } from 'react-native';
import styles from './Number.styles';
import { getImage } from '../../Assets';
import Digit0 from './digits/0';
import Digit1 from './digits/1';
import Digit2 from './digits/2';
import Digit3 from './digits/3';
import Digit4 from './digits/4';
import Digit5 from './digits/5';
import Digit6 from './digits/6';
import Digit7 from './digits/7';
import Digit8 from './digits/8';
import Digit9 from './digits/9';

interface NumberProps {
  num: number;
  height?: number;
  style?: any;
}

const Number = (props: NumberProps) => {
  const height = props.height || props.style?.height || 90;
  const numbers = [];
  let num = props.num;

  do {
    numbers.push(num % 10);
    num = Math.floor(num / 10);
  } while (num >= 1);

  numbers.reverse();

  const digits = numbers.map((digit, index) => getDigit(digit, index, height));

  return <View style={{ ...styles.Number, ...props.style }}>{digits}</View>;
};

function getDigit(digit: number, index: number, height: number): ReactNode {
  switch (digit) {
    case 0:
      return (
        <Digit0
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit0>
      );
    case 1:
      return (
        <Digit1
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit1>
      );
    case 2:
      return (
        <Digit2
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit2>
      );
    case 3:
      return (
        <Digit3
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit3>
      );
    case 4:
      return (
        <Digit4
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit4>
      );
    case 5:
      return (
        <Digit5
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit5>
      );
    case 6:
      return (
        <Digit6
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit6>
      );
    case 7:
      return (
        <Digit7
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit7>
      );
    case 8:
      return (
        <Digit8
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit8>
      );
    case 9:
      return (
        <Digit9
          key={`${index}${digit}`}
          style={styles.Digit}
          height={height}
        ></Digit9>
      );
  }
}

export default Number;
