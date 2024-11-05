const arr = ["k", "o", "r", "e", "a"];

//! 배열에 맨 뒤 값 추출하기
arr.pop();
// console.log(arr);

//! 배열에 맨 앞 왼쪽 값 추출하기
arr.shift();
// console.log(arr);

// [ 'o', 'r', 'e' ,'a']
//! 배열에 맨 뒤 값 추가하기
arr.push("a");

//! 배열에 맨 앞 왼쪽 값 추가하기
arr.unshift("k");

//! 배열에 중간값 삭제하기
arr.splice(1, 1);

//! 배열에 필요한 데이터 자르기
const arr1 = ["a", "b", "c", "d", "e"];
arr1.slice(1, 3); // [ 'b', 'c' ]
arr1.slice(1, 4); // [ 'b', 'c', 'd' ]

let strArr = ["서울", "코리아", " 필승 코리아"];

strArr.unshift("대한민국 수도는");
// console.log(strArr);

//! 배열에 필요한 데이터 자르기
// const num = [15, 20, 40, 23, 11];
// console.log(num.slice(4)); // [ 20, 40 ]

let alpha = ["e"];
alpha.unshift("s");
alpha.push("i");

// console.log(alpha); // [ 's', 'e', 'i' ]

alpha.splice(2, 0, "o", "u");

console.log(alpha); // [ 's', 'e', 'o', 'u', 'i' ]

// ! 배열 접근
// let num = [10, 15, 20, 25, 30];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
//   sum += num[i];
// }
// console.log(`합계:${sum}`);

// ! 객체 접근
// const person1 = {};
// person1["name"] = "홍길동";
// person1["grade"] = 90;
// console.log(person1.name + person1.grade);
// const person2 = {
//   name: "강동원",
//   grade: 100,
// };
// console.log(person2["name"] + person2["grade"]);

//! 객체 접근
// const fruit = [
//   {
//     fruit1: "apple",
//     fruit2: "banana",
//     fruit3: "kiwi",
//     fruit4: "grape",
//   },
// ];
// for (let i in Object.keys(fruit)) {
//   console.log(fruit[i]);
//   for (let i in Object.values(fruit)) {
//     console.log(fruit[i]);
//   }
// }
// for (let i in Object.entries(fruit)) {
//   console.log(fruit[i]);
// }
// ==> 결과
// { fruit1: 'apple', fruit2: 'banana', fruit3: 'kiwi', fruit4: 'grape' }
// { fruit1: 'apple', fruit2: 'banana', fruit3: 'kiwi', fruit4: 'grape' }
// { fruit1: 'apple', fruit2: 'banana', fruit3: 'kiwi', fruit4: 'grape' }

//! 객체 접근
// let array = [
//   {
//     name: "고구마",
//     price: 1000,
//   },
//   { name: "감자", price: 500 },
//   { name: "바나나", price: 1500 },
// ];

// [
//   { name: "고구마", price: 1000 },
//   { name: "감자", price: 500 },
//   { name: "바나나", price: 1500 },
// ];
// for (let i in array) {
//   console.log(i, array[i]);
// }

// => 결과
// 0 { name: '고구마', price: 1000 }
// 1 { name: '감자', price: 500 }
// 2 { name: '바나나', price: 1500 }

// ! sort 실습
// let gradeArr = [
//   { name: "은지원", score: 100 },
//   { name: "강호동", score: 90 },
//   { name: "유재석", score: 80 },
//   { name: "김동현", score: 95 },
//   { name: "송지효", score: 70 },
// ];
// // 점수 순으로 정렬
// gradeArr.sort((a, b) => b.score - a.score);

// // key, value 값을 동시에 출력
// for (let i in gradeArr) {
//   console.log(gradeArr[i]);
// }

// ==> 결과
// [
// { name: '은지원', score: 100 },
// { name: '김동현', score: 95 },
// { name: '강호동', score: 90 },
// { name: '유재석', score: 80 },
// { name: '송지효', score: 70 }
// ]

//! array forEach
let array = [52, 273, 32, 64, 72];

// console.log("-- forEach( ) 메소드--");
// array.forEach((item, index) => {
//   console.log(`${index}번째 요소는 ${item}입니다.`);
// });

// let num = [10, 20, 30, 40, 50];
// num.forEach((item, index) => {
//   console.log(`   ${index} ----> ${item}`);
// });

//! map
// console.log("-- map( ) 메소드--");
// let output = array.map((item, index) => {
//   return item + item;
// });
// console.log(output);

//! filter
// console.log("-- filter( ) 메소드--");
// let output = array.filter((item, index) => {
//   return item % 2 === 0;
// });
// console.log(output);

//! 실습
// const num = [1, 2, 4, 8, 16];

// const result = num.map((item, index) => {
//   return item * 2;
// });
// console.log(result);
// => 실행겨로가
// [2,4,          8,16,32]

//! 실습2
const array1 = ["seoul", "korea", "good", "hankook", "university"];

const result = array1.filter((item, index) => {
  return item.length == 5;
});
console.log(result);
