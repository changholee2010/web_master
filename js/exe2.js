// exe2.js
// if ... else ... 문제 풀기.

let number1 = 30;

// 사용자 값을 입력하도록 "숫자를 입력하세요(0~100) "
// 변수선언 후 저장.
let inputValue = prompt("숫자를 입력하세요(0~100) ");

if (inputValue > 100 || inputValue < 0) { // 100보다 큰 경우.
  alert("0 ~ 100 사이의 값을 입력하세요.");
} else if (inputValue > number1) { // 입력값이 비교값보다 큰경우.
  alert(inputValue + "는 " + number1 + "보다 큽니다.");
} else if (inputValue == number1) { // 입력값과 비교값이 같은 경우.
  alert(inputValue + "는 " + number1 + "은 같습니다.");
} else { // 입력값이 비교값보다 작은 경우.
  alert(inputValue + "는 " + number1 + "보다 작습니다.");
}
// 35는 30보다 큽니다.
// 25는 30보다 작습니다.
// 0 ~ 100 사이의 값을 입력하세요.