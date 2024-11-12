// forExe3.js
// 점수를 입력 * 5번.
// 점수의 합(sum), 평균(average) 저장.
// 큰값(max), 최소값(min) 저장.
// prompt('점수를 입력');
let sum = 0;
let average = 0;
let max = 100;
let min = 0;
for (let i = 1; i <= 5; i++) {
  // 블럭안에 있는 코드가 5번 반복실행.
  let inputValue = prompt('점수를 입력');
  sum = sum + parseInt(inputValue); // 누적.
  // 조건문: max < inputValue  50, 70, 80, 60, 90
  if (max < inputValue) {
    max = inputValue;
  }
  if (min > inputValue) {
    min = inputValue;
  }
}
average = sum / 5;
console.log(`합계는 ${sum} 이고, 평균은 ${average} 이고, 최고점수는 ${max}, 최저점수는 ${min} 입니다.`);

// 합계는 ?? 이고, 평균은 ?? 이고, 최고점수는 ??, 최저점수는 ?? 입니다.