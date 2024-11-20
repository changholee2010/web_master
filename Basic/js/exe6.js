// exe6.js (넷째날)

function randomNumber() {
  // 임의의 숫자 6개 생성: 1 ~ 45 범위.
  let numAry = [];
  for (let i = 0; i < 6;) {
    let temp = parseInt(Math.random() * 45) + 1;
    numAry.push(temp);
    i++;
  }
  return numAry;
}

// 이벤트 등록.
document.querySelector('#btn').addEventListener('click', (e) => {
  let ary = randomNumber();
  let str = '';
  for (let i = 0; i < ary.length; i++) {
    str += '<span>' + ary[i] + '</span>';
  }
  document.querySelector('#lotto').innerHTML = str;
})
