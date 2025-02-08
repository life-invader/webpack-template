import img from "#images/image.png";
import dataJSON from "#public/data.json";
import { printMe } from "./scripts/print.js";
import "./style/index.css";

const sdb = 0;
console.log(123);

[(1, 2, 3)].filter((item) => {
  item > 1;
});

[1, 2, 3].forEach((item) => {
  return item > 1;
});

if (true) {
  console.log(true);
}

printMe();

console.log(img);
console.log(dataJSON);
