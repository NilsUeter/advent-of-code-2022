import { testInput, realInput } from "./input.js";

const input = realInput.split("\n").map((e) => {
  return e.split(" ");
});
console.log(input);

const shapes = { X: 1, Y: 2, Z: 3 };

const part1 = () => {
  let score = 0;
  for (const [opponent, me] of input) {
    switch (opponent + me) {
      // LOSE
      case "AZ":
      case "BX":
      case "CY":
        score += 0 + shapes[me];
        break;
      // TIE
      case "AX":
      case "BY":
      case "CZ":
        score += 3 + shapes[me];
        break;
      // WIN
      case "CX":
      case "AY":
      case "BZ":
        score += 6 + shapes[me];
        break;
    }
  }
  return score;
};
console.log("Part 1: " + part1());

const results = { X: 0, Y: 3, Z: 6 };

const part2 = () => {
  let score = 0;
  for (const [opponent, me] of input) {
    switch (opponent + me) {
      // ROCK
      case "AY":
      case "BX":
      case "CZ":
        score += 1 + results[me];
        break;
      // PAPER
      case "AZ":
      case "BY":
      case "CX":
        score += 2 + results[me];
        break;
      // SCISSORS
      case "AX":
      case "BZ":
      case "CY":
        score += 3 + results[me];
        break;
    }
  }
  return score;
};
console.log("Part 2: " + part2());
