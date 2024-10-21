//! 1. Print a triangle of stars
// *
// **
// ***
// ****

// let output = "";

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     output += "*";
//   }
//   output += "\n";
// }

// console.log(output);

//! 2
// 1
// 22
// 333
// 4444
// 55555

// let output = "";

// for (let i = 1; i < 6; i++) {
//   for (let j = 1; j <= i; j++) {
//     output += i;
//   }
//   output += "\n";
// }

// console.log(output);

//! 3
// 12345
// 1234
// 123
// 12
// 1

// let output = "";

// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     output += j;
//   }
//   output += "\n";
// }
// console.log(output);

//! 4
// 54321;
// 4321;
// 321;
// 21;
// 1;

// let output = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 6 - i; j >= 1; j--) {
//     output += j;
//   }
//   output += "\n";
// }

// console.log(output);

//! 5
//     *
//    **
//   ***
//  ****
// *****

// let output = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5 - i; j++) {
//     output += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     output += "*";
//   }
//   output += "\n";
// }
// console.log(output);

//! while-break

// let i = 0;
// let array = [1, 31, 273, 57, 8, 11, 32];
// let output;

// while (true) {
//   if (array[i] > 80) {
//     output = array[i];
//     break;
//   }
//   // if (array[i] % 2 === 0) {
//   //   output = array[i];
//   //   break;
//   // }
//   i = i + 1;
//   console.log(i);
// }

// console.log(output); // 8

//! while-break-2
// let i = 0;
// let array = ["Korea", "Japan", "China", "USA", "Russia"];
// let output;

// while (true) {
//   console.log(array[i] + array[i].length);
//   if (array[i].length === 3) {
//     output = array[i];
//     break;
//   }
//   i = i + 1;
// }

//! while-contiue
// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue; // 짝수일때만 출력하지 않고 넘어간다.
//   }
//   console.log(i);
// }

//! 중첩 반목분을 이용한 예제 1
//     1
//    12
//   123
//  1234
// 12345

let output = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    output += " ";
  }
  for (let k = 1; k <= i; k++) {
    output += k;
  }
  output += "\n";
}

console.log(output);
