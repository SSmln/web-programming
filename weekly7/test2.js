// function webProg(callback) {
//   for (let i = 0; i < 10; i++) {
//     callback(); // 콜백 함수 호출
//   }
// }

// webProg(function () {
//   console.log("web programming");
// });

let hap = function (n1, n2, callback) {
  let sum = 0;
  sum = n1 + n2;

  callback(sum);
};

let num1 = 10;
let num2 = 20;

hap(num1, num2, function (res) {
  console.log(`${num1}+ ${num2} = ${res}`);
});
