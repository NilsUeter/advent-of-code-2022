import { testInput, realInput } from "./input.js";

let input = realInput.split("\n");

const part1 = () => {
  const fileSystem = { "/": {} };
  let i = 0;
  const sizesAboveLimit = [];
  const buildFileSystem = (dir, input) => {
    let size = 0;
    for (i; i < input.length; i++) {
      let line = input[i];
      if (line.startsWith("$")) {
        if (line.startsWith("$ cd ..")) {
          return size;
        }
        if (line.startsWith("$ cd")) {
          i++;
          const sizeOfDir = buildFileSystem(dir[line.split("$ cd ")[1]], input);
          if (sizeOfDir < 100000) {
            sizesAboveLimit.push(sizeOfDir);
          }
          size += sizeOfDir;
        }
      } else {
        const [left, right] = line.split(" ");
        if (left === "dir") {
          dir[right] = {};
        } else {
          dir[right] = parseInt(left, 10);
          size += parseInt(left, 10);
        }
      }
    }
    return size;
  };

  buildFileSystem(fileSystem, input);
  return sizesAboveLimit.reduce((a, b) => a + b, 0);
};
console.log("Part 1: " + part1());

const part2 = () => {
  const fileSystem = { "/": {} };
  let i = 0;
  const sizes = [];
  const buildFileSystem = (dir, input) => {
    let size = 0;
    for (i; i < input.length; i++) {
      let line = input[i];
      if (line.startsWith("$")) {
        if (line.startsWith("$ cd ..")) {
          return size;
        }
        if (line.startsWith("$ cd")) {
          i++;
          const sizeOfDir = buildFileSystem(dir[line.split("$ cd ")[1]], input);
          sizes.push(sizeOfDir);
          size += sizeOfDir;
        }
      } else {
        const [left, right] = line.split(" ");
        if (left === "dir") {
          dir[right] = {};
        } else {
          dir[right] = parseInt(left, 10);
          size += parseInt(left, 10);
        }
      }
    }
    return size;
  };

  buildFileSystem(fileSystem, input);
  const sorted = sizes.sort((a, b) => a - b);
  const remaining = 70000000 - sorted[sorted.length - 1];
  return sorted.find((e) => e + remaining >= 30000000);
};
console.log("Part 2: " + part2());
