import { testInput, realInput } from "./input.js";

let input = realInput.split("\n").map((e) => {
  const [command, number] = e.split(" ");
  return [command, parseInt(number, 10)];
});

const part1 = () => {
  let signalStrengths = [];
  let cycle = 0;
  let x = 1;
  let importantCycles = new Set([20, 60, 100, 140, 180, 220]);
  const doCycle = () => {
    cycle++;
    if (importantCycles.has(cycle)) {
      signalStrengths.push(cycle * x);
    }
  };

  for (const [command, number] of input) {
    doCycle();
    switch (command) {
      case "noop":
        break;
      case "addx":
        doCycle();
        x += number;
        break;
    }
  }
  return signalStrengths.reduce((a, b) => a + b, 0);
};
console.log("Part 1: " + part1());

const part2 = () => {
  let cycle = 0;
  let x = 2;
  let line = "";
  const draw = () => {
    const overlaps = Math.abs((cycle % 40) - x) <= 1;
    line += overlaps ? "#" : ".";
  };

  const doCycle = () => {
    cycle++;
    draw();
    if (cycle % 40 === 0) {
      console.log(line);
      line = "";
    }
  };

  for (const [command, number] of input) {
    doCycle();
    switch (command) {
      case "noop":
        break;
      case "addx":
        doCycle();
        x += number;
        break;
    }
  }
};
console.log("Part 2: " + part2());
