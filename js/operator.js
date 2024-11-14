// operator.js
let addFnc = (e) => { // 화살표함수.
  console.log(e.target.innerHTML);
  let v1 = document.getElementById('num1').value;
  let v2 = document.querySelector('#num2').value;
  if (!v1 || !v2) {
    alert('값을 입력하세요');
    return;
  }
  let result; // 변수선언.
  if (e.target.innerHTML == '더하기') {
    result = parseInt(v1) + parseInt(v2); //parseInt()기능: '12' => 12
  } else if (e.target.innerHTML == '빼기') {
    result = parseInt(v1) - parseInt(v2);
  }
  document.querySelector('#result').value = result;
}

document.querySelector('#add').addEventListener('click', addFnc); // 이벤트핸들러.
document.querySelector('#sub').addEventListener('click', addFnc); // 이벤트핸들러.
document.querySelector('#multy').addEventListener('click', addFnc); // 이벤트핸들러.
document.querySelector('#divid').addEventListener('click', addFnc); // 이벤트핸들러.

























let days = ['Sun', 'Mon', "Tue", 'Wed', "Thr", 'Fri', 'Sat']
let str = '';
for (let day of days) {
  str += ' ' + day + ' ';
}
str += '\n';
for (let i = 1; i <= 31; i++) {
  str += ' ' + i + ' ';
  if (i % 7 == 0) {
    str += '\n';
  }
}

console.log(str);