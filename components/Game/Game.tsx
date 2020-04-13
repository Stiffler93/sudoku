import React, { useState, useContext } from "react";
import { View, Button } from "react-native";
import styles from "./Game.styles";
import Board from "./Sudoku/Board";
import FieldSelection from "./Sudoku/FieldSelection";
import GameContext from "./Sudoku/Game.context";

interface GameScreenProps {
  navigation: any;
  route: any;
  style?: any;
}

const GameScreen = (props: GameScreenProps) => {
  const { navigation, route } = props;
  const [fields, setFields] = useState(new Array(81).fill([1]));
  const [active, setActive] = useState(-1);

  return (
    <View style={{ ...styles.Game, ...props.style }}>
      <GameContext.Provider
        value={{
          setActive: (num: number) => {
            console.log("SetActive: " + num);
            setActive(num);
          },
          active,
        }}
      >
        <>
          <Board style={styles.Board} fields={fields}></Board>
          <View style={styles.GameControl}>
            <FieldSelection style={styles.FieldSelection}></FieldSelection>
            <View style={styles.GameButtons}>
              <Button
                title="Validate"
                onPress={() => {
                  console.log("Validate");
                }}
              />
              <Button
                title="Hint"
                onPress={() => {
                  console.log("Hint");
                }}
              />
              <Button
                title="Reset"
                onPress={() => {
                  console.log("Reset");
                }}
              />
            </View>
          </View>
        </>
      </GameContext.Provider>
    </View>
  );
};

export default GameScreen;
