"use strict";

const num = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);

console.log(process.argv);
