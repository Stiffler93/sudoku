import React from "react";
import { Image, View } from "react-native";
import styles from "./Number.styles";
import { getImage } from "../Assets";

interface NumberProps {
  num: number;
  style?: any;
}
const Number = (props: NumberProps) => {
  // const source = Image.resolveAssetSource(number0);
  // console.log(source);

  const numbers = [];
  let num = props.num;

  do {
    numbers.push(num % 10);
    num = Math.floor(num / 10);
  } while (num >= 1);

  numbers.reverse();

  const images = numbers.map((n) => getImage(`${n}.png`));

  return (
    <View style={{ ...styles.Number, ...props.style }}>
      {images.map((image, index) => (
        <Image
          style={{
            ...styles.Image,
            ...{
              width: image.width * 0.5,
              height: image.height * 0.5,
            },
          }}
          key={Math.random()}
          source={image.image}
        ></Image>
      ))}
    </View>
  );
};

function getImageForNumber(n: number) {
  switch (n) {
    case 0:
      return number0;
    case 1:
      return number1;
    case 2:
      return number2;
    case 3:
      return number3;
    case 4:
      return number4;
    case 5:
      return number5;
    case 6:
      return number6;
    case 7:
      return number7;
    case 8:
      return number8;
    case 9:
      return number9;
  }
}

export default Number;
