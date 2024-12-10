// ! 객체 기본 - 배열
// let arr = ["사과", "앵두", "자두", "딸기"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// ! 객체 기본 - 접근
// let product = {
//   제품명: "망고",
//   유형: "건조",
//   성분: "망고, 설탕, 메타중아황산나트륨, 구연산",
//   원산지: "필리핀",
// };
// console.log(product); // 결과 :{제품명: '망고', 유형: '건조', 성분: '망고, 설탕, 메타중아황산나트륨, 구연산', 원산지: '필리핀'}
// console.log(product["제품명"]); // 결과 :망고

// ! 객체와 반목문
// let product = {
//   name: "바나나",
//   price: 1200,
// };

// for (let key in product) {
//   console.log(`${key}: ${product[key]}`); // 결과 :name: 바나나, price: 1200
// }

// ! 클래스
// let products = [
//   { name: "사과", price: 1200 },
//   { name: "배", price: 1500 },
//   { name: "딸기", price: 2000 },
//   { name: "바나나", price: 1000 },
//   { name: "망고", price: 3000 },
// ];

// function printProduct(product) {
//   console.log(`상품명: ${product.name}, 가격: ${product.price}`);
// }

// for (let product of products) {
//   printProduct(product);

//결과
// 상품명: 사과, 가격: 1200
// 상품명: 배, 가격: 1500
// 상품명: 딸기, 가격: 2000
// 상품명: 바나나, 가격: 1000
// 상품명: 망고, 가격: 3000
// }

// ! 생성자
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// let product = new Product("바나나", 1200);
// console.log(product); // 결과 :Product { name: '바나나', price: 1200 }
// console.log(product.name, product.price); // 결과 :바나나 1200

// ! 메소드
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   print() {
//     console.log(`상품명: ${this.name}, 가격: ${this.price}`);
//   }
// }

// let products = [
//   new Product("사과", 1200),
//   new Product("배", 1500),
//   new Product("딸기", 2000),
//   new Product("바나나", 1000),
//   new Product("망고", 3000),
//   new Product("수박", 5000),
// ];

// for (let product of products) {
//   product.print();
// 결과:
// 상품명: 사과, 가격: 1200
// 상품명: 배, 가격: 1500
// 상품명: 딸기, 가격: 2000
// 상품명: 바나나, 가격: 1000
// 상품명: 망고, 가격: 3000
// 상품명: 수박, 가격: 5000
// }

//! 기본 자료형과 객체 자료형의 차이
// - 통합 개발 환경에서 자동완성 기능 사용 가능

//? 기본 자료형
// let num = 10;
// let string ="안녕";
// let boolean = true;
//
// console.log(typeof num); // 결과 :number
// console.log(typeof string); // 결과 :string
// console.log(typeof boolean); // 결과 :boolean

//? 객체 자료형
// let number = new Number(10);
// let string = new String("안녕");
// let boolean = new Boolean(true);
// console.log(typeof number); // 결과 :object
// console.log(typeof string); // 결과 :object
// console.log(typeof boolean); // 결과 :object

//! number 객체
// let numberFromLiteral = 10;
// let numberFromConstructor = new Number(10);

//  toExponential()
// -> 숫자를 지수 표기법으로 변환
//  toFixed()
// -> 어디까지 표현할 것인지 정하는 메소드

// let number = 273.12345;
// console.log(number.toExponential()); // 결과 :2.7312345e+2
// console.log(number.toFixed(1)); // 결과 :273.1
// console.log(number.toFixed(3)); // 결과 :273.123

// ! string 객체
// let stringFromLiteral = "abvedf";
// let stringFromConstructor = new String("안녕하세요");
// console.log(stringFromConstructor.length);

//? indexOf()
//  -> 문자열에서 특정 문자열의 위치를 찾는 메소드
// console.log(stringFromLiteral.indexOf("e")); // 결과 :4

//? concat()
//  -> 문자열을 연결하는 메소드
// console.log(stringFromLiteral.concat("gh")); // 결과 :abvedfgh

//? replace(regExp, replaceString)
//  -> 문자열에서 특정 문자열을 찾아 다른 문자열로 바꾸는 메소드
// console.log(stringFromLiteral.replace("ab", "cd")); // 결과 :cdvedf

//? toUpperCase()
//  -> 문자열을 대문자로 변환하는 메소드
// console.log(stringFromLiteral.toUpperCase()); // 결과 :ABVEDF

//? indexOf()
//  -> 문자열에서 특정 문자열의 위치를 찾는 메소드
// console.log(stringFromLiteral.indexOf("e")); // 결과 :4

//? split()
//  -> 문자열을 특정 기준에 따라 배열로 나누는 메소드
// console.log(stringFromLiteral.split("e")); // 결과 :[ 'abv', 'df' ]
