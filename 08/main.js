import { testInput, realInput } from "./input.js";

let input = realInput.split("\n").map((e) => e.split("").map(Number));

const getVertical = (x, startY, endY) => {
  const arr = [];
  for (let i = startY; i < endY; i++) {
    arr.push(input[i][x]);
  }
  return arr;
};

const isVisible = (x, y) => {
  if (
    x === 0 ||
    x === input[0].length - 1 ||
    y === 0 ||
    y === input.length - 1
  ) {
    return true;
  }
  const height = input[y][x];
  const left = input[y].slice(0, x).every((tree) => tree < height);
  const right = input[y].slice(x + 1).every((tree) => tree < height);
  const top = getVertical(x, 0, y).every((tree) => tree < height);
  const bottom = getVertical(x, y + 1, input.length).every(
    (tree) => tree < height
  );
  return left || right || top || bottom;
};

const part1 = () => {
  let visible = 0;
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[0].length; x++) {
      if (isVisible(x, y)) {
        visible++;
      }
    }
  }
  return visible;
};
console.log("Part 1: " + part1());

const getScenicScore = (height, trees) => {
  for (let i = 0; i < trees.length; i++) {
    if (height <= trees[i]) {
      return i + 1;
    }
  }
  return trees.length;
};

const calculateScore = (x, y) => {
  if (
    x === 0 ||
    x === input[0].length - 1 ||
    y === 0 ||
    y === input.length - 1
  ) {
    return 0;
  }
  const height = input[y][x];
  const left = getScenicScore(height, input[y].slice(0, x).reverse());
  const right = getScenicScore(height, input[y].slice(x + 1));
  const top = getScenicScore(height, getVertical(x, 0, y).reverse());
  const bottom = getScenicScore(height, getVertical(x, y + 1, input.length));
  return left * right * top * bottom;
};

const part2 = () => {
  let scores = [];
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[0].length; x++) {
      scores.push(calculateScore(x, y));
    }
  }
  return scores.sort((a, b) => b - a)[0];
};
console.log("Part 2: " + part2());
