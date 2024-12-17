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



// уровень 1.4
// 1
// Выведите в консоль все целые числа от 1 до 100.

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }


// 2
// Выведите в консоль все целые числа от -100 до 0.
// let num = -100;

// while(num <= 0){
//   console.log(num);
//   num++;
// }

// 3
// Выведите в консоль все целые числа от 100 до 1.
// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// 4
// Выведите в консоль все четные числа из промежутка от 1 до 100.

// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }


// 5
// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
// for (let i = 3; i <= 100; i += 3) {
//   console.log(i);
// }





// Уровень 1.5
// 1
// Найдите сумму всех целых чисел от 1 до 100.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);


// 2
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100
// let sum = 0;

// for (let i = 2; i <= 100; i += 2) {
//   sum += i;
// }
// console.log(sum);

// 4
// Даны два целых числа. Найдите остаток от деления первого числа на второе.

// let num1 = 32;
// let num2 = 10;

// let res  = num1 % num2;
// console.log(`Остаток: ${res}`);


// 5
// let str = 'Селям';

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }



// Уровень 1.6
// 1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i] ** 2;
// }
// console.log(sum);


// №3 Дан массив с числами. Найдите сумму положительных элементов этого массива.
// let nums = [-1, 2, -3, 4, -5, 6, -7, 8, 9];
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > 0) {
//     sum += nums[i]
//   }
// }
// console.log(sum);

// №4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

// let nums = [-1, 2, -3, 4, -5, 6, -7, 8, 91];
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > 0 && nums[i] < 10) {
//     sum += nums[i]
//   }
// }
// console.log(sum);


// Уровень 1.7
// 1
// let str = 'abcde';
// let res = str.split("");
// console.log(res);

// 2
// let num = 12345;
// let res = String(num).split("").map(Number);
// console.log(res);

// 3
// let num = 12345;
// let res = Number(String(num).split("").reverse().join(""));
// console.log(res);

// 4
// let num = 12345;
// let res = String(num).split("").reduce((sum, digit) => sum + Number(digit), 0);
// console.log(res);



// Уровень 1.8
// 1 Заполните массив целыми числами от 1 до 10.
// let arr = [];

// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);


// 2 Заполните массив четными числами из промежутка от 1 до 100.
// let arr = [];

// for (let i = 2; i <= 100; i += 2) {
//   arr.push(i);
// }

// console.log(arr);


// 3 Округлите эти дроби до одного знака в дробной части.
let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr.push(Number(arr[i].toFixed(1)));
}
console.log(newArr);