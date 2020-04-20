import { Image, ImageSourcePropType } from "react-native";

import number1 from "../assets/1.png";
import number2 from "../assets/2.png";
import number3 from "../assets/3.png";
import number4 from "../assets/4.png";
import number5 from "../assets/5.png";
import number6 from "../assets/6.png";
import number7 from "../assets/7.png";
import number8 from "../assets/8.png";
import number9 from "../assets/9.png";
import number0 from "../assets/0.png";

import done from "../assets/done.png";

interface ImageMetadata {
  image: ImageSourcePropType;
  width: number;
  height: number;
}

type ImageCache = {
  [value: string]: ImageMetadata;
};

const IMAGES: ImageCache = {};

function getImageByName(image: string): ImageSourcePropType {
  switch (image) {
    case "1.png":
      return number1;
    case "2.png":
      return number2;
    case "3.png":
      return number3;
    case "4.png":
      return number4;
    case "5.png":
      return number5;
    case "6.png":
      return number6;
    case "7.png":
      return number7;
    case "8.png":
      return number8;
    case "9.png":
      return number9;
    case "0.png":
      return number0;
    case "done.png":
      return done;
  }

  return {};
}

export function getImage(image: string) {
  if (IMAGES[image]) return IMAGES[image];

  const imageData = getImageByName(image);
  const metadata = Image.resolveAssetSource(imageData);

  IMAGES[image] = {
    image: imageData,
    width: metadata.width,
    height: metadata.height,
  };

  return IMAGES[image];
}
