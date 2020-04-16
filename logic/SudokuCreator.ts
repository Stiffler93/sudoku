const COLS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SQUARE_SIZE = 3;
const SIZE = 9;
const GRID_SIZE = SIZE * SIZE;
const ROW_CACHE: number[][] = [];
const COL_CACHE: number[][] = [];
const SQUARE_CACHE: number[][] = [];

function col(n: number): number[] {
  console.log("get col: " + n);
  if (COL_CACHE[n]) return COL_CACHE[n];

  const indices = [];
  for (let index = n; index < GRID_SIZE; index += SIZE) {
    indices.push(index);
  }

  COL_CACHE[n] = indices;
  return indices;
}

function row(n: number): number[] {
  console.log("get row: " + n);
  if (ROW_CACHE[n]) return ROW_CACHE[n];

  const indices = [];
  const start = n * SIZE;
  for (let index = start; index < start + SIZE; index++) {
    indices.push(index);
  }

  ROW_CACHE[n] = indices;
  return indices;
}

function square(n: number): number[] {
  console.log("get square: " + n);
  if (SQUARE_CACHE[n]) return SQUARE_CACHE[n];

  const horizThird = n % SQUARE_SIZE;
  const vertThird = Math.floor(n / SQUARE_SIZE);

  const start = vertThird * (SQUARE_SIZE * SIZE) + horizThird * SQUARE_SIZE;

  const indices = [];
  for (let i = 0; i < SQUARE_SIZE; i++) {
    for (let j = 0; j < SQUARE_SIZE; j++) {
      const index = start + j + i * SIZE;
      indices.push(index);
    }
  }

  SQUARE_CACHE[n] = indices;
  return indices;
}

function indexToRow(index: number) {
  return Math.floor(index / SIZE);
}

function indexToCol(index: number) {
  return index % SIZE;
}

function indexToSquare(index: number) {
  const horizThird = Math.floor((index % 9) / 3);
  const vertThird = Math.floor(Math.floor(index / 9) / 3);
  return horizThird + 3 * vertThird;
}

function shuffle(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}

function available(checkIndices: number[], grid: number[], mask: number[]) {
  return checkIndices.filter((index) => grid[index] + mask[index] === 0);
}

function rand(indices: number[]) {
  const i = Math.floor(Math.random() * indices.length);
  return indices[i];
}

function markMask(index: number, mask: number[]) {
  console.log("Mark Mask for index: " + index);
  const indicesToMark = [
    ...col(indexToCol(index)),
    ...row(indexToRow(index)),
    // ...square(indexToSquare(index)),
  ];

  //   console.log({ "Mark indices": indicesToMark });

  for (const i of indicesToMark) {
    mask[i] = 1;
  }
}

export default function create() {
  const grid = new Array(81).fill(0);
  const numbers = shuffle(NUMBERS);

  console.log({ numbers });

  let counter = 0;
  for (const num of numbers) {
    counter++;
    console.log("handle number: " + num);
    const mask = new Array(81).fill(0);

    for (const column of COLS) {
      console.log("Check column: " + column);
      const availableIndices = available(col(column), grid, mask);
      console.log({ "Available Indices": availableIndices });

      if (availableIndices.length === 0) {
        console.error("no indices avaialble = Deadlock");
        counter = 9;
        break;
      }

      const randIndex = rand(availableIndices);
      console.log("Rand index: " + randIndex);

      grid[randIndex] = num;
      markMask(randIndex, mask);
    }

    if (counter >= 5) break;
  }

  for (let i = 0; i < SIZE; i++) {
    let str = "";
    for (let j = 0; j < SIZE; j++) {
      const index = i * SIZE + j;
      str = str + grid[index];
    }
    console.log(str);
  }
}
