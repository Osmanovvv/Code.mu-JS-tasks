// Уровень 1.1

// 1
// let num = 10;

// if (num < 0) {
//   console.log("Число отрицательное");
// } else if (num === 0) {
//   console.log("Число равно 0");
// } else {
//   console.log("Число положительное");
// }


// 2
// let str = 'Привет';
// let res = str.length;
// console.log(res);


// 3
// let str = 'Привет';
// let res = str[str.length - 1];
// console.log(res);


// 4
// let num = 10;

// if (num % 2 == 0) {
//   console.log('Число четное');
// } else {
//   console.log('Число нечетное');
// }


// 5
// let word1 = 'Server';
// let word2 = 'Osmanov';

// let symbol1 = word1[0].toLowerCase();
// let symbol2 = word2[0].toLowerCase();

// if (symbol1 == symbol2) {
//   console.log('Совпадают');
// } else {
//   console.log('не совпадают');
// }


// 6
let word = "Привеhь";

let lastSymbol = word[word.length - 1];

if (lastSymbol == 'ь') {
  lastSymbol = word[word.length - 2];
  console.log(lastSymbol);
} else {
  console.log(lastSymbol);
}