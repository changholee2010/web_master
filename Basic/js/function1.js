// function1.js

let numAry1 = [50, 60, 40, 70, 20]
let numAry2 = [55, 63, 42, 79, 27]

// console.log(`sumAry(numAry1)의 합계 => ${sumAry(numAry1)}`);
// console.log(`sumAry(numAry2)의 합계 => ${sumAry(numAry2)}`);
// console.log(sum(sumAry([10, 20, 30]), sumAry([10, 20])));

// 매개값을 배열로 받아서 배열요소의 합.
function sumAry(param1 = []) {
  let sum = 0;
  for (let i = 0; i < param1.length; i++) {
    sum += param1[i];
  }
  return sum;
}

// 두수의 합을 계산하는 함수.
function sum(param1, param2) {
  let result = param1 + param2;
  return result;
}

// 배열을 매개값으로 받아서 요소중에서 제일큰값을 구하는 함수.
// getMaxValue(배열)
function getMaxValue() {}
console.log(getMaxValue(numAry1));

// Math.random() 활용해서 11 ~ 20 사이의 임의 수 생성.
// 배열크기가 5개인 배열에 저장.
function makeNumberFnc() {
  // 1. Math.random() => 5번.
  let randomAry = []; // 임의의 값을 저장할 배열변수 선언.
  for (let i = 0; i < 5; i++) {
    let temp = parseInt(Math.random() * 10) + 11; // 생성범위: 11 <= ? < 21
    //randomAry.push(temp);
    randomAry[i] = temp;
  }
  console.log(randomAry);
  // 결과값 반환.
  return sumAry(randomAry);
} // end of makeNumberFnc();
let result = makeNumberFnc();
console.log(`임의의 배열의 합은 ${result} 입니다.`);
// 결과: 임의의 배열의 합은 ?? 입니다.