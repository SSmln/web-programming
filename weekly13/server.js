// const express = require("express");

// let mysql = require("mysql");
// let connection = mysql.createConnection({
//   host: "localhost",
//   user: "ssmln",
//   password: "ssmln",
//   database: "scott",
// });
// const app = express();

// console.log("Database password:", connection.config.password);

// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

// app.get("/", (req, res) => {
//   connection.query("select * from sangsing", function (error, results, fields) {
//     if (!error) {
//       res.send(results);
//       console.log(`sing: ${results}`);
//     } else {
//       console.log(`query error: ${error}`);
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

//! 테이블 구조 확인
// ? describe <테이블 이름>

//! 테이블 기본키 수정
// ? 1. alter table <테이블 이름> add primary key(컬럼 이름);
// * -> 기본키 추가

// ? 2. alter table <테이블 이름> drop primary key;
// * -> 기본키 삭제

// ! 테이블 데이터 삽입
// ? insert into <테이블 이름> values(값1, 값2, 값3, ...);
// ? insert into <테이블 이름> (컬럼1, 컬럼2, ...) values(값1, 값2, ...);

// ! 테이블 데이터 삽입 예제
const express = require("express");
let mysql = require("mysql");

const { clearCookie } = require("express/lib/response");

let connection = mysql.createConnection({
  host: "localhost",
  user: "ssmln",
  password: "ssmln",
  database: "scott",
});

let app = express();

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// ? insert Data
// const data = {
//   id: 222,
//   pw: "222",
//   name: "크크크",
//   age: 22,
// };

// let sql = `insert into sangsing(id,pw,name,age) values(?,?,?,?)`;
// let params = [data["id"], data["pw"], data["name"], data["age"]];

// connection.query(sql, params, function (error, results, fields) {
//   if (!error) {
//     console.log("데이터가" + results.affectedRows + "개 추가되었습니다.");
//   } else {
//     console.log("Error while performing Query.");
//   }
// });

// connection.end();

// ! 테이블 데이터 삭제
// let sql = `delete from sangsing where id = ?`;
// const data = 222;
// connection.query(sql, data, function (error, results, fields) {
//   if (!error) {
//     console.log(fields);
//     console.log("데이터가" + results.affectedRows + "개 삭제되었습니다.");
//   } else {
//     console.log("Error while performing Query.");
//   }
// });

// connection.end();

// ! 테이블 데이터 입력 후 삭제 예제
// const insertSql = `insert into sangsing (id, pw, name, age)  values(?,?,?,?)`;
// const insertParams = [
//   { id: 1111, pw: 1111, name: "아이유", age: 28 },
//   { id: 2222, pw: 2222, name: "아이키", age: 35 },
//   { id: 3333, pw: 3333, name: "아이쮸", age: 40 },
// ];
// const deleteSql = `delete from sangsing where age > ?`;
// const deleteParams = [30];

// insertParams.forEach((param) => {
//   connection.query(
//     insertSql,
//     [param.id, param.pw, param.name, param.age],
//     function (error, results, fields) {
//       if (!error) {
//         console.log(results.affectedRows + "개 추가되었습니다.");
//       } else {
//         console.log("Error while performing Query.");
//       }
//     }
//   );
// });

// const selectSql = `select * from sangsing`;

// connection.query(selectSql, function (error, results, fields) {
//   if (!error) {
//     console.log(results);
//   } else {
//     console.log("Error while performing Query.");
//   }
// });

// connection.query(deleteSql, deleteParams, function (error, results, fields) {
//   if (!error) {
//     console.log(results.affectedRows + "개 삭제되었습니다.");
//   } else {
//     console.log("Error while performing Query.");
//   }
// });

// connection.query(selectSql, function (error, results, fields) {
//   if (!error) {
//     console.log(results);
//   } else {
//     console.log("Error while performing Query.");
//   }
// });

// connection.end();

//! 테이블 데이터 수정

let sql = `update sangsing set pw = ? where id = ?`;
let params = ["1004", 20221156];

connection.query(sql, params, function (error, results, fields) {
  if (!error) {
    console.log("데이터가" + results.affectedRows + "개 수정되었습니다.");
  } else {
    console.log("Error while performing Query.");
  }
});
connection.end();
