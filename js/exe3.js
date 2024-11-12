// exe3.js
// 1. 태어난 년도 입력 -> 나이계산.
// 2. 직사각형 너비 계산 -> 가로길이, 세로길이 입력.
// 3. 최고값, 최소값 -> 입력숫자는 3개.

let question = 3;
let result;

if (question == 1) {
  // 1번 코드.
  const thisYear = 2024;
  let inputYear = prompt('태어난 년도를 입력하세요!');
  result = thisYear - inputYear;
  console.log('나이는 ' + result + '살 입니다.')

} else if (question == 2) {
  // 2번 코드.
  let lenghtX = prompt('가로길이를 입력하세요!');
  let lenghtY = prompt('세로길이를 입력하세요!');
  result = lenghtX * lenghtY;
  console.log('넓이는 ' + result + ' 입니다.')

} else {
  // 3번 코드.
  let num1 = prompt('임의의값을 입력하세요!');
  let num2 = prompt('임의의값을 입력하세요!');
  let num3 = prompt('임의의값을 입력하세요!');

  let max, min = 0;
  if (num1 > num2) {
    // 

  } else { // num2 > num1

  }

}