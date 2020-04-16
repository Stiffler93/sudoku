import React, { useContext } from "react";

export interface GameContext {
  setActive: (num: number) => void;
  active: number;
  setFields: (fields: number[][]) => void;
  fields: number[][];
  presetValues: number[];
}

const context = React.createContext({
  setActive: (num: number) => {},
  active: -1,
  setFields: (nums: number[][]) => {},
  fields: [],
  presetValues: [],
} as GameContext);

export default context;
export const useGameContextProvider = () => useContext(context);
