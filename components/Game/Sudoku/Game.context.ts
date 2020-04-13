import React, { useContext } from "react";

export interface GameContext {
  setActive: (num: number) => void;
  active: number;
}

const context = React.createContext({
  setActive: (num: number) => {},
  active: -1,
});

export default context;
export const useGameContextProvider = () => useContext(context);
