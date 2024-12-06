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
// let word = "Привеhь";

// let lastSymbol = word[word.length - 1];

// if (lastSymbol == 'ь') {
//   lastSymbol = word[word.length - 2];
//   console.log(lastSymbol);
// } else {
//   console.log(lastSymbol);
// }







// Уровень 1.2 задачника JavaScript
// 1

// let num = 123;

// let res = +num.toString()[0];
// console.log(res)


// 2
// let num = 1234;

// let res = +num.toString()[num.toString().length - 1];
// console.log(res);


// 3
// let num = 1234;

// let first = +num.toString()[0];
// let last = +num.toString()[num.toString().length - 1];
// let res = first + last;

// console.log(res);


// 4
// let num = 1234;
// let count = 0;

// while (num > 0) {
//   num = Math.floor(num / 10);
//   count++;
// }

// console.log(count);


// 5
// let num1 = 1234;
// let num2 = 1234;

// let fisrt =  +num1.toString()[0];
// let second = +num2.toString()[0];

// if (fisrt === second) {
//   console.log('Совпадает');
// } else {
//   console.log('Не совпадают');
// }


// Уровень 1.3
// 1
// let str = '';

// if (str.length === 0) {
//   console.log('Строка пустая');
// } else if (str.length === 1) {
//   console.log(str);
// } else {
//   console.log(str[str.length - 2]);
// }


// 2
// let num1 = 31;
// let num2 = 10;
// let res = num1 % num2;

// console.log(`Остаток: ${res}`);

// if (res === 0) {
//   console.log('Делится без остатка');
// } 
