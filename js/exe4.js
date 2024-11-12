// exe4.js
// 2024년 11월 12일 숙제.
// 우리반에는 5명의 친구. 성적을 입력.
// 합산 => 평균, 최고점수, 최저점수 구해서
// 배열, 반복문, 조건문 활용.
// 우리반 평균은 ??이고, 최고점은 ??이고, 최저점은 ??이다.

let scoreAry = [];
for (let i = 1; i <= 5; i++) {
  scoreAry.push(prompt('점수를 입력'));
}

let sum = 0;
let max = 0,
  min = scoreAry[0];
let average = 0;
// 정렬.
let temp = 0;
for (let i = 0; i < scoreAry.length - 1; i++) {
  for (let j = 0; j < scoreAry.length - 1; j++) {
    if (scoreAry[i] > scoreAry[i + 1]) { // 정렬.
      temp = scoreAry[i];
      scoreAry[i] = scoreAry[i + 1];
    }
  }
}

sum = scoreAry.reduce((accm, item) => {
  return accm + item;
}, 0);
average = sum / scoreAry.length;
max = scoreAry[4];
min = scoreAry[0];
console.log(`우리반 평균은 ${average}이고, 최고점은 ${max}이고, 최저점은 ${min}이다.`);