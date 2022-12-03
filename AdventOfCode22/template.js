import { readFile, readFileSync } from "fs";

const lines = readFileSync("day?.txt", {encoding: "utf-8"})
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline
  .map(Number) //Parse Each line into a number


  function part1(){
    //code
  }


  function part2(){
    //code
  }


  part1()
  part2()