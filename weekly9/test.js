// let arr = ["사과", "앵두", "자두", "딸기"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // ! 객체 리터럴 방식으로 객체 생성하기

// let fruit = {
//   name: "바나나",
//   price: 1200,
//   product: "필리핀",

//   print: function () {
//     console.log(
//       `품명은 ${this.name}, 가격은 ${this.price}, 생산지는 ${this.product}`
//     );
//   },
// };

// fruit.print();

// // ! 생성자 함수로 객체 생성하기

// class Product {
//   constructor(pum, price, qty) {
//     this.pum = pum;
//     this.price = price;
//     this.qty = qty;
//   }
//   print() {
//     console.log(`품명은 ${this.pum}, 가격은 ${this.price}, 수량은 ${this.qty}`);
//   }
// }

// let aa = new Product("초코파이", 1200, 10);
// let salePrice = aa.price * aa.qty;

// console.log(`상품명: ${aa.pum}, 판매가: ${salePrice}`);

// class Product {
//   //! 생성자 함수
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   //! 메소드 함수
//   print() {
//     console.log(`상품명: ${this.name}, 가격: ${this.price}`);
//   }
// }
// let product = [
//   new Product("바나나", 1200),
//   new Product("사과", 2000),
//   new Product("배", 3000),
// ];

// for (let i = 0; i < product.length; i++) {
//   product[i].print();
// }

// for (let i of product) {
//   i.print();
// }
// const fruit = { name: "두리안", 수량: 3, 가격: 5000, 생산국: "필리핀" };

// for (let key in fruit) {
//   console.log(`${key}: ${fruit[key]}`);
// }
