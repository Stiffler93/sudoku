import { Dimensions } from "react-native";

const window = Dimensions.get("window");

export const WIDTH = window.width;
export const HEIGHT = window.height;

export const WIDTH_HALF = Math.floor(WIDTH / 2);
export const HEIGHT_HALF = Math.floor(HEIGHT / 2);

export const WIDTH_THIRD = Math.floor(WIDTH / 3);
export const HEIGHT_THIRD = Math.floor(HEIGHT / 3);

export const MARGIN_SMALL = 6;
export const MARGIN_MEDIUM = 12;
export const MARGIN_LARGE = 18;
export const MARGIN_HUGE = 36;
