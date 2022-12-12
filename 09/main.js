import { testInput, realInput } from "./input.js";

let input = realInput.split("\n").map((e) => {
  const [command, distance] = e.split(" ");
  return [command, parseInt(distance, 10)];
});

const difference = (a, b) => {
  return Math.abs(a - b);
};

const part1 = () => {
  const head = { x: 0, y: 0 };
  const tail = { x: 0, y: 0 };
  const visitedPositions = new Set();
  const moveHead = (command) => {
    switch (command) {
      case "U":
        head.y++;
        break;
      case "D":
        head.y--;
        break;
      case "R":
        head.x++;
        break;
      case "L":
        head.x--;
        break;
    }
  };
  const moveTail = () => {
    const diagonal =
      (difference(head.y, tail.y) > 1 || difference(head.x, tail.x) > 1) &&
      head.y !== tail.y &&
      head.x !== tail.x;
    if (diagonal || difference(head.y, tail.y) > 1) {
      tail.y += head.y > tail.y ? 1 : -1;
    }
    if (diagonal || difference(head.x, tail.x) > 1) {
      tail.x += head.x > tail.x ? 1 : -1;
    }
  };

  for (const [command, distance] of input) {
    for (let i = 0; i < distance; i++) {
      moveHead(command);
      moveTail();
      visitedPositions.add(tail.x + ":" + tail.y);
    }
  }
  return visitedPositions.size;
};
console.log("Part 1: " + part1());

const part2 = () => {
  const knots = [];
  for (let i = 0; i < 10; i++) {
    knots.push({ x: 0, y: 0 });
  }
  const visitedPositions = new Set();
  const moveHead = (knot, command) => {
    switch (command) {
      case "U":
        knot.y++;
        break;
      case "D":
        knot.y--;
        break;
      case "R":
        knot.x++;
        break;
      case "L":
        knot.x--;
        break;
    }
  };
  const moveTail = (head, tail) => {
    const diagonal =
      (difference(head.y, tail.y) > 1 || difference(head.x, tail.x) > 1) &&
      head.y !== tail.y &&
      head.x !== tail.x;
    if (diagonal || difference(head.y, tail.y) > 1) {
      tail.y += head.y > tail.y ? 1 : -1;
    }
    if (diagonal || difference(head.x, tail.x) > 1) {
      tail.x += head.x > tail.x ? 1 : -1;
    }
  };

  for (const [command, distance] of input) {
    for (let i = 0; i < distance; i++) {
      moveHead(knots[0], command);
      for (let knotI = 1; knotI < knots.length; knotI++) {
        moveTail(knots[knotI - 1], knots[knotI], command);
      }
      visitedPositions.add(knots[9].x + ":" + knots[9].y);
    }
  }
  return visitedPositions.size;
};
console.log("Part 2: " + part2());
