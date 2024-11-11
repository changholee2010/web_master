// basic.js : 주석문(프로그램의 실행 상관없이 개발자의 노트.)
// 변수. 메모리 주소(23dfa3423432)
let name = "홍길동"; // string 타입.
console.log(typeof name);

var age = 20;
console.log(age);
console.log(name);

var age = 30;
console.log(age);
// let name = "친구"; // 개발자: 에러날 수 있는 코드 확인.

// 변수: 값을 담을 수 있는 유형. 데이터타입.
let num = 10; // number타입.
console.log(typeof num);
let isOk = true; // boolean 타입.
console.log(typeof isOk);

// 원시데이터타입 vs. 복합데이터타입.
let obj = { name: "홍길동", age: 20, height: 170 } // object 타입.
console.log("이름은: " + obj.name); // 이름은: 홍길동
console.log('나이는: ' + obj["age"] + ' 살'); // 나이는: 20 살

num = 20;
isOk = false;
name = "김친구";
obj = { name: "활길동", age: 22 }

num = true;
console.log(typeof num);
isOk = 30;
name = 50;

const num1 = 10;
// num1 = 20;

const pi = 3.14; // 변하지 않는 고정값.
console.log(2 * 4 * pi);

// pi = 4;
console.log(2 * 4 * pi);

let countPerStudent = 5;
let average_per_student = 4;

// 변수: 연산가능.
let number1 = 100;
let result = 10;
let message = "Welcome ";

result = message + (number1 + 20); // concatenate 두변수 연결.
//       Welcome 10020 / Welcome 120
result = message - number1; // NaN
console.log(typeof result);

let inputValue = prompt('인덱스를 입력하세요');
// document.write('<h1>' + message + inputValue + '</h1>');
let num2 = 0, friendName = "", over30 = false;
let friends = null; // 아무값도 없는 상태.
friends = ['김길동', '이길동', '최길동']; // {name: '홍길동', age: 20}
console.log(inputValue + '번째 인덱스의 이름은 ' + friends[inputValue]); // 배열의 순번(인덱스) 0부터 시작.
