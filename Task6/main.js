// Task1
// const a = +prompt("Enter your number");
// if (!isNaN(a)) {
//   for (let i = 1; i <= 1000; i++) {
//     if (i % a == 0) {
//       console.log(i);
//     }
//   }
// } else {
//   console.log("You have to write only number");
// }

// Task2
// const a = +prompt("Enter your number");
// let count = 0;
// if (!isNaN(a)) {
//   for (let i = 1; i < a; i++) {
//     if (i * i < a) {
//       count++;
//     }
//   }
//   console.log(count);
// } else {
//   console.log("You have to write only number");
// }

// Task3
// const a = +prompt("Enter your number");
// if (!isNaN(a)) {
//   for (let i = a - 1; i < a; i--) {
//     if (a % i == 0) {
//       let largestDivisor = i;
//       console.log(largestDivisor);
//       break;
//     }
//   }
// } else {
//   console.log("You have to write only number");
// }

// Task4
// const a = +prompt("Enter your number A");
// const b = +prompt("Enter your number B");
// let sum = 0;
// if (!isNaN(a) && !isNaN(b) && b > a) {
//   for (let i = a; i <= b; i++) {
//     if (i % 7 == 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// } else {
//   console.log("You have to write only number and b cant be less than a");
// }

// Task5
// const num = +prompt("Enter the number: ");
// let n1 = 0;
// let n2 = 1;
// let z;

// if (!isNaN(num) && num >= 0) {
//   if (num === 0) {
//     console.log(n1);
//   } else if (num === 0) {
//     console.log(n2);
//   } else {
//     for (let i = 1; i <= num; i++) {
//       z = n1 + n2;
//       n1 = n2;
//       n2 = z;
//     }
//   }
// }
// console.log(n1);

//Task6
// const num1 = +prompt("Enter the number 1: ");
// const num2 = +prompt("Enter the number 2: ");
// var z;
// if (!isNaN(num1) && !isNaN(num2)) {
//   for (let i = 1; i <= num1 && i <= num2; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       z = i;
//     }
//   }
//   console.log(`Greatest common divisor of ${num1} and ${num2} is ${z}.`);
// }

//Task7
// let a = +prompt("Enter The number");
// let b = 0;
// let sum = 0;
// if (!isNaN(a)) {
//   while (a > 0) {
//     b = a % 10;
//     sum = sum * 10 + b;
//     a = parseInt(a / 10);
//   }
//   console.log(sum);
// }

// Task8
// let num1 = +prompt("Enter The number 1:");
// let num2 = +prompt("Enter The number 2:");
// let z = num2;
// let x = 0;
// let y = 0;

// let count = 0;
// if (!isNaN(num1) && !isNaN(num2)) {
//   for (let i = 0; 0 < num1; i++) {
//     x = num1 % 10;
//     num1 = parseInt(num1 / 10);
//     num2 = z;
//     for (let j = 0; 0 < num2; j++) {
//       y = num2 % 10;
//       num2 = parseInt(num2 / 10);
//       if (x === y) {
//         count++;
//       }
//     }
//   }
//   if (count > 0) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }
