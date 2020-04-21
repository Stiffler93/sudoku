import React from "react";
import { Image, View } from "react-native";
import styles from "./Number.styles";
import { getImage } from "../../Assets";

interface NumberProps {
  num: number;
  style?: any;
}
const Number = (props: NumberProps) => {
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

export default Number;
