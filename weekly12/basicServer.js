// ! express 모듈의 기본 메소드
// ? express()  서버 애플리케이션 객체 생성
// ? app.use()  요청 처리 메소드 설정
// ? app.listen()  서버 실행

// ! express 모듈을 사용한 서버 생성
// const express = require("express");

// const app = express();

// app.use((req, res) => {
//   res.send("<h1>Hello Expressasd</h1>");
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// ! 페이지 라우팅 - express 모듈의 페이지 라우팅 기능
// * 클라이언트 요청에 적절한 페이지를 제공하는 기술

// get(path, callback)  // * GET 요청이 발생했을 때 이벤트 리스너를 지정
// post(path, callback)  // * POST 요청이 발생했을 때 이벤트 리스너를 지정
// put(path, callback)  // * PUT 요청이 발생했을 때 이벤트 리스너를 지정
// delete(path, callback)  // * DELETE 요청이 발생했을 때 이벤트 리스너를 지정
// all(path, callback)  // * 모든 요청이 발생했을 때 이벤트 리스너를 지정

// * 페이지 라우팅을 할 때 토큰을 활용할 수 있다.
// * `:<토큰 이름>`  // *  토큰을 활용
// * 토큰은 다른 문자열로 변환 입력 가능, req 객체의 params 속성으로 전달

// ! 페이지 라우팅 예제
// const express = require("express");
// const app = express();

// app.get("/page/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(`<h1>${id} Page</h1>`);
//   // * 전달은 항상 문자열로 전달
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// ! 매개변수 값으로 전달된 문자열 출력 예제
// const express = require("express");

// const app = express();

// app.get("/name/:name", (req, res) => {
//   const name = req.params.name;
//   res.send(`<h1>안녕하세요. 제 이름은 ${name} 입니다.</h1>`);
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// ! response 객체
// * send 메소드는 가장 마지막에 실행되어야 하며, 두번 실행할 수 없음.
// const express = require("express");
// const app = express();
// app.get("*", (req, res) => {
// ? status()  // * 상태 코드를 전송
//   res.status(404).send("<h1>404 Page Not Found</h1>");
// ? set() // * 응답 헤더를 설정
//   res.set("methodA", "ABCDE");
//   res.set({
//     methodB1: "12345",
//     methodB2: "67890",
//   });
// ? send()  // * 클라이언트로 응답 데이터를 전송
//   res.send("<h1>Hello Express</h1>");
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// ! content-type 설정
// const express = require("express");
// const fs = require("fs");
// const app = express();

// // ? 이미지 파일 전송
// app.get("/image", (req, res) => {
//   fs.readFile("image.jpg", (error, data) => {
//     res.contentType("image/jpeg");
//     res.send(data);
//   });
// });

// // ? 오디오 파일 전송
// app.get("/audio", (req, res) => {
//   fs.readFile("audio.mp3", (error, data) => {
//     res.contentType("audio/mp3");
//     res.send(data);
//   });
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// ! HTTP 상태 코드
// * 1xx : 처리중
// * 2xx : 성공
// * 3xx : 리다이렉션 완료
// * 4xx : 요청 오류
// * 5xx : 서버 오류

// ? 상태 코드 설정 예제
// const express = require("express");
// const app = express();

// app.get("*", (req, res) => {
//   res.status(404);
//   res.send("<h1>404 Page Not Found</h1>");
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// ? 리다이렉션 설정 예제 - redirect() 메소드 : 특정 URL로 리다이렉션
// const express = require("express");
// const app = express();

// app.get("*", (req, res) => {
//   res.redirect("http://www.naver.com");
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// ! request 객체 : 요청 매개변수
// * 프로토콜
// * 호스트
// * URL
// * 요청 매개변수

// ? 요청 매개변수 추출 예제
// const express = require("express");
// const app = express();
// app.get("*", (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// localhost:3000/?a=10&b=20
// { a: '10', b: '20' }

// ! 미들웨어

// ? 정적 파일 제공 예제
// const express = require("express");
// const app = express();
// * 정적 파일 제공
// app.use(express.static("public"));

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
