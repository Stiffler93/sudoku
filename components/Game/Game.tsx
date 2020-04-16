import React, { useState, useContext } from "react";
import { View, Button, Alert } from "react-native";
import styles from "./Game.styles";
import Board from "./Sudoku/Board";
import FieldSelection from "./Sudoku/FieldSelection";
import GameContext from "./Game.context";
import { GameData } from "./Game.interfaces";
import validate from "../../logic/SudokuValidator";
import create from "../../logic/SudokuCreator";

interface GameScreenProps {
  navigation: any;
  route: any;
  style?: any;
}

const GameScreen = (props: GameScreenProps) => {
  const { navigation, route } = props;
  const game = props.route.params as GameData;

  const [template, solution] = game.data.split("/");
  const gridNums = template.split("").map((num) => parseInt(num, 10));
  const grid = gridNums.map((num) => (num === 0 ? [] : [num]));
  const presetValues = gridNums
    .map((num, index) => (num !== 0 ? index : -1))
    .filter((num) => num !== -1);

  const [fields, setFields] = useState(grid);
  const [active, setActive] = useState(-1);

  return (
    <View style={{ ...styles.Game, ...props.style }}>
      <GameContext.Provider
        value={{
          active,
          setActive,
          fields,
          setFields,
          presetValues,
        }}
      >
        <>
          <Board style={styles.Board}></Board>
          <View style={styles.GameControl}>
            <FieldSelection style={styles.FieldSelection}></FieldSelection>
            <View style={styles.GameButtons}>
              <Button
                title="Validate"
                onPress={() => {
                  check(fields, solution);
                }}
              />
              <Button
                title="Hint"
                onPress={() => {
                  create();
                }}
              />
              <Button
                title="Reset"
                onPress={() => {
                  Alert.alert(
                    "Reset Game?",
                    "All filled in numbers will be cleared.",
                    [
                      {
                        text: "Reset",
                        onPress: () => {
                          setFields(grid);
                        },
                        style: "cancel",
                      },
                      {
                        text: "Cancel",
                      },
                    ]
                  );
                }}
              />
            </View>
          </View>
        </>
      </GameContext.Provider>
    </View>
  );
};

function check(fields: number[][], solution: string) {
  const submitted = fields
    .map((arr) => (arr.length === 0 ? 0 : arr[0]))
    .join("");

  // const isValid = validate(
  //   "132479685598162734764538219871345926349726851256891473427913568915687342683254197"
  // );

  // console.log("isValid: " + isValid);

  // if (submitted.includes("0")) {
  //   Alert.alert("Not finished yet.", "", [
  //     {
  //       text: "OK",
  //     },
  //   ]);
  //   return;
  // }

  // if (submitted === solution) {
  //   Alert.alert("Congratulations.", "", [
  //     {
  //       text: "OK",
  //     },
  //   ]);
  // } else {
  //   Alert.alert("Computer says no.", "", [
  //     {
  //       text: "OK",
  //     },
  //   ]);
  // }
}

export default GameScreen;
