// arrayExe2.js
let dupAry = ['홍길동', '김민혁', '장동숙', '홍길동', '홍길도', '김민']

let newAry = [];
// let tempAry = [];
newAry = dupAry.filter(function (elem, idx, ary) {
  // 찾을 배열과 값.
  if (ary.indexOf(elem) == idx) {
    // tempAry.push(elem);
    return true;
  }
  return false;
})

console.log(newAry); // ['홍길동', '김민혁', '장동숙', '홍길도', '김민']