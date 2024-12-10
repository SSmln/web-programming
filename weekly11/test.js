// ! JSON 사용 - 값이나 객체를 문자열로 변환

// let json = { name: "홍길동", age: 16, address: "서울시 강남구" };
// let me = JSON.stringify(json);
// console.log(me); // {"name":"홍길동","age":16,"address":"서울시 강남구"}

// ! JSON.parse() - 문자열을 객체로 변환

// let str = '{"name":"홍길동","age":16,"address":"서울시 강남구"}';
// let me = JSON.parse(str);
// console.log(me); // { name: '홍길동', age: 16, address: '서울시 강남구' }

// ! ** 실습 **
// const user = [
//   {
//     name: "홍길동",
//     age: 16,
//   },
//   {
//     name: "홍길순",
//     age: 18,
//   },
//   {
//     name: "홍길자",
//     age: 20,
//   },
// ];

// let jsonUser = JSON.stringify(user);
// console.log(jsonUser);

// let parseUser = `{"name":"강호동", "title": "방송인", "age":51}`;
// console.log(JSON.parse(parseUser));

// ! ** 예제 **
// let json = { id: 1, title: "제목", content: "내용" };
// for (let i in json) {
//   console.log(i + " : " + json[i]);
// }

// Object.keys(json).forEach((index) => {
//   console.log(`키:${index} 값:${json[index]}`);
// });

//! file System 모듈

// ? fs.readFileSync() - 동기식 파일 읽기
// const fs = require("fs");

// const file = fs.readFileSync("text.txt");
// console.log(file); // <Buffer ec a0 80 eb a1 9c
// console.log(file.toString());

// ? fs.readFile() - 비동기식 파일 읽기
// const fs = require("fs");

// fs.readFile("text.txt", (error, file) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(file);
//   console.log(file.toString());
// });

// * 비동기 처리의 장점
// 비동기시 대기시간을 줄이고 idle time을 제거하므로 속도가 빠르다.
// C++, 자바보다 느림.

// ! json 파일 읽기
// let json = require("./test.json");
// console.log(json.age); // 16

// ! file system - 파일 쓰기
// ? fs.writeFileSync() - 동기식 파일 쓰기
// const fs = require("fs");
// fs.writeFileSync("output.txt", "안녕하세요");
// console.log("동기식 파일이 생성되었습니다.");

// ? fs.writeFile() - 비동기식 파일 쓰기
// const fs = require("fs");
// fs.writeFile("output1.txt", "Hello World!", (error) => {
//   console.log("비동기식 파일 쓰기 완료");
// });

// ! file system - 예외 처리
// ? 동기 코드 예외 처리
// const fs = require("fs");
// try {
//   const file = fs.readFileSync("none.txt");
//   console.log(file.toString());
// } catch (error) {
//   console.log("파일이 존재하지 않습니다.");
//   //   console.log(error);
// }

// ? 비동기 코드 예외 처리
