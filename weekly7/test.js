// //! 일반함수 - 선언적함수
// function test() {
//   console.log("test1");
//   console.log("test2");
// }

// console.log(test());

// let functiontest0 = function () {
//   console.log("함수의 첫줄");
//   console.log("함수의 두줄");
// };

// console.log(functiontest0());

// let functiontest1 = function () {
//   console.log("함수1의 첫줄");
//   console.log("함수1의 두줄");
// };
// console.log(functiontest1());

// //! 화살표 함수 - 익명함수
// let functiontest2 = () => {
//   console.log("함수2의 첫줄");
//   console.log("함수2의 두줄");
// };
// console.log(functiontest2());

// //! callback 함수 -예제
// function callTenTimes(callaback) {
//   for (let i = 0; i < 10; i++) {
//     callaback();
//   }
// }

// callTenTimes(function () {
//   console.log("함수 호출");
// });

// //! callback 함수 -예제
// let add = function (a, b, callback) {
//   let result = a + b;
//   callback(result);
// };

// add(10, 20, function (res) {
//   console.log("합계:" + res);
// });

//! callback - 팩토리얼 값 구하기
let fact = function (x, callback) {
  let result = 1;
  for (let i = x; i >= 1; i--) {
    result *= i; // result =result*i
  }
  callback(result);
};

fact(5, function (res) {
  console.log("5! = " + res);
});

//! 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setTimeout(function () {
//   console.log("1초가 지났스빈다.");
// }, 1000);

// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// setInterval(function () {
//   console.log("1초마다 실행합니다.");
// }, 1000);

// clearInterval()

// let id = setInterval(function () {
//   console.log("1초마다 실행합니다.");
// }, 1000);

// setTimeout(function () {
//   clearInterval(id);
// }, 3000);

//! 시험문제 나옴
// let num =15;
// 	num = 20; // 가능
// let num=35 // 불가능

// 하지만 var은 모두 가능
// var num = 15;
// num = 20;
// var num = 35;

// const num = 25;
// num= 30; // 불가능
