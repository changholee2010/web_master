// arrayExe3.js
/*
  여러줄 주석처리.
  empAry => 사원중에서 성별:여자, 급여: 5000 이상.
  => femaleAry 저장.
*/
// if (emp.gender == 'Female' && emp.salary >= 5000) {
//   return true;
// }
// return false;
let femaleAry = //
  empAry.filter(emp => emp.gender == 'Female' && emp.salary >= 5000);

console.log(femaleAry);

/*
let friendAry = [
  {name:"홍길동", age: 20, weight: 56.7},
  {name:"김민기", age: 21, weight: 93.7},
  {name:"박철순", age: 22, weight: 79.7},
  {name:"이만수", age: 23, weight: 88.7}
]

let temp = friendAry.filter((friend) => {
  if(friend.weight > 60) {
    console.log(friend);
    return true;
  }
  return false;
});
console.log(temp)
*/