//console.log("halo");


// ====core module ====
// const fs = require("fs");

// const  readingFile = fs.readFileSync("./README.txt", "utf-8");

// console.log(readingFile);


//====local modul===
// const  cals = require("./utils/calc");

// const tambahkan = cals.addition (2, 3);
// const kurang = cals.substract (5, 2);
// const kali = cals.multiply (3, 3);

// console.log(`2 + 3 = ${tambahkan}`);
// console.log(`5 - 2 = ${kurang}`);
// console.log(`5 x 2 = ${kali}`);

//third-party

// const hitung = ('mathjs');

// const tambah = hitung (2*5);

// console.log(tambah);

const math = require('mathjs');

const hitung = math.add(2, 3);

console.log(hitung);
