// ! 배열 내장함수
// const arr = ["k", "o", "r", "e", "a"];

//? push(값): 배열의 맨 뒤에 값을 추가
// arr.push("a");
// console.log(arr); // [ 'k', 'o', 'r', 'e', 'a', 'a' ]

//? pop(): 배열의 맨 뒤 값을 제거
// arr.pop();
// console.log(arr); // [ 'k', 'o', 'r', 'e' ]

//? unshift(값): 배열의 맨 앞에 값을 추가
// arr.unshift("k");
// console.log(arr); // [ 'k', 'k', 'o', 'r', 'e' ]

//? shift(): 배열의 맨 앞 값을 제거
// arr.shift();
// console.log(arr); // [ 'o', 'r', 'e', 'a' ]

//? splice(인덱스, 개수): 인덱스부터 개수만큼 제거
// const arr1 = ["a", "b", "c", "d", "e"];
// arr1.splice(1, 1);
// console.log(arr1); // [ 'a', 'c', 'd', 'e' ]
//? slice(시작, 끝): 시작부터 끝까지 잘라서 새로운 배열로 반환
// const arr2 = ["a", "b", "c", "d", "e"];
// arr.slice(1, 3);
// console.log(arr2); // [ 'b', 'c' ]

// ! array 객체
// 배열과 array객체는 여러 데이터를 저장하는 저장소 역할을 하는 공통성이 있다.
// 하지만 아래와같은 특징적 차이가 있다.

// 배열 : [] 대괄호 이를 사용며 저장된 순서에 따라 0으로 인덱스를 지정
// 객체 : {} 중괄호를 이용하고 key:value로 구성되어 있으며,
//        배열에서 자동으로 인덱스를 사용하는 것과는 다르게 key에따라 value값을 다르게 지정할 수 있다.

// ! array 객체
// const person1 = {};
// person1["name"] = "홍길동";
// person1["grade"] = 90;
// console.log(person1.name + person1.grade); // 홍길동90

// const person2 = {
//   name: "강동원",
//   grade: 100,
// };
// console.log(person2["name"] + person2["grade"]); // 강동원100

// ! array 객체 - 객체의 key들만 반환 , value들만 반환
// const fruit = [
//   {
//     fruit1: "apple",
//     fruit2: "banana",
//     fruit3: "kiwi",
//     fruit4: "grape",
//   },
// ];

// for (let i in Object.keys(fruit)) {
//   console.log(fruit[i]); // { fruit1: 'apple', fruit2: 'banana', fruit3: 'kiwi', fruit4: 'grape' }
// }

// for (let i in Object.values(fruit)) {
//   console.log(fruit[i]); // { fruit1: 'apple', fruit2: 'banana', fruit3: 'kiwi', fruit4: 'grape' }
// }

// for (let i in Object.entries(fruit)) {
//   console.log(fruit[i]); // { fruit1: 'apple', fruit2: 'banana', fruit3: 'kiwi', fruit4: 'grape' }
// }

// ! array 객체 접근
// let array = [
//   {
//     name: "고구마",
//     price: 1000,
//   },
//   {
//     name: "감자",
//     price: 500,
//   },
//   {
//     name: "바나나",
//     price: 1500,
//   },
// ];

// for (let i in array) {
//   console.log(i, array[i]);
// 0 {name: '고구마', price: 1000}
// 1 {name: '감자', price: 500}
// 2 {name: '바나나', price: 1500}
// }

// ! array 객체 기본 메소드
//? concat() : 매개변수로 입력한 배열을 기존 배열에 추가하여 새로운 배열을 반환
// let num = [10, 20, 30, 40, 50];
// let num2 = [60, 70, 80, 90, 100];
// let result = num.concat(num2);
// console.log(result); // [10,20,30,40,50,60,70,80,90,100]

//? join() : 배열의 요소를 문자열로 변환하여 반환
// let alpha = ["a", "b", "c", "d", "e"];
// alpha.join(",");
// console.log(alpha); // a,b,c,d,e

// let arrayA = ["고구마", "감자", "바나나", "사과"];

//? reverse() : 배열의 순서를 뒤집어 반환
// arrayA.reverse();
// console.log("문자열로 역순 정렬");
// console.log(arrayA); // [ '사과', '바나나', '고구마', '감자' ]

//? sort() : 배열의 요소를 정렬하여 반환
// arrayA.sort();
// console.log("문자열로 정렬");
// console.log(arrayA); // [ '감자', '고구마', '바나나', '사과' ]

// ! ** sort 실습 **
// let gradeArr = [
//   { name: "은지원", score: 100 },
//   { name: "강호동", score: 90 },
//   { name: "유재석", score: 80 },
//   { name: "김동현", score: 95 },
//   { name: "송지효", score: 70 },
// ];

// let scoreArr = gradeArr.sort((itemA, itemB) => {
//   return itemB.score - itemA.score;
// });
// console.log(scoreArr);
// for (let i in scoreArr) {
//   console.log(scoreArr[i]);
// }

// ! 객체의 메소드
// ? forEach() : 배열의 요소를 하나씩 꺼내서 반복문을 실행
// let array = [52, 273, 32, 64, 72];
// array.forEach((item, index) => {
//   console.log(`${index}번째 요소는 ${item}입니다.`);
// });

// ? map() : 배열의 요소를 하나씩 꺼내서 새로운 배열을 만들어 반환
// let array = [52, 273, 32, 64, 72];
// let outputA = array.map((item, index) => {
//   return item * item;
// });
// console.log(outputA); // [ 2704, 74929, 1024, 4096, 5184 ]

// ? filter() : 배열의 요소를 하나씩 꺼내서 조건에 맞는 요소만 반환
// let array = [52, 273, 32, 64, 72];
// let outputB = array.filter((item, index) => {
//   return item % 2 === 0;
// });
// console.log(outputB); // [ 52, 32, 64, 72 ]

//! ** 실습 **
// const num = [1, 2, 4, 8, 16];
// const output = num.map((e, id) => {
//   return e * 2;
// });
// console.log(output);
// 실행결과 : [2,4,8,16,32]

//! ** 실습2 **
// const array = ["seoul", "korea", "good", "hankook", "university"];
// const output = array.filter((e, id) => {
//   return e.length == 5;
// });
// console.log(output);
// 실행결과: ["seoul", "korea"];
