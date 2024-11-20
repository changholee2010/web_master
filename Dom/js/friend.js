// friend.js
// this => 함수: window 객체, 이벤트핸들러: 이벤트대상, object: 객체자신.

function makeRow(friendInfo = {
  name,
  phone,
  birth,
  bloodType
}) {
  // 이름, 연락처, 생일. => tr 생성한 후 tr반환.
  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) { // this
    // e.stopPropagation();
    document.querySelector('input[name="friendName"]').value //
    = this.children[1].innerHTML;
    document.querySelector('input[name="friendPhone"]').value //
    = this.children[2].innerHTML;
    document.querySelector('input[name="friendBirth"]').value //
    = this.children[3].innerHTML;
    document.querySelector('select[name="friendBloodType"]').value //
    = this.children[4].innerHTML;
  });
  // <td><input type="checkbox"></td>
  let td = document.createElement('td');
  let btn = document.createElement('input');
  btn.setAttribute('type', 'checkbox');
  btn.addEventListener('click', (e) => e.stopPropagation());
  btn.addEventListener('change', (e) => {
    // head 체크박스의 값 => false;
    // body 체크박스의 값중에 하나 false => 변경.
    // 체크박스의 갯수와 체크된 체크박스의 갯수 => true / false.
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    let chkeds = document.querySelectorAll('tbody input[type="checkbox"]:checked');
    // console.log(chks.length, chkeds.length);
    document.querySelector('thead input[type="checkbox"]')
      .checked = chks.length == chkeds.length;
    // if (chks.length == chkeds.length) {
    //   document.querySelector('thead input[type="checkbox"]').checked = true;
    // } else {
    //   document.querySelector('thead input[type="checkbox"]').checked = false;
    // }
  })
  td.appendChild(btn);
  tr.appendChild(td);

  for (let prop in friendInfo) {
    let td = document.createElement('td');
    let fname = friendInfo[prop];
    td.innerHTML = fname; // <td>홍길동</td>
    tr.appendChild(td);
  }
  // <td><button>삭제</button></td>
  td = document.createElement('td');
  btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.setAttribute('class', 'btn btn-danger'); // 태그에 attribute를 추가.
  btn.addEventListener('click', (e) => { // 삭제버튼에 클릭이벤트 등록.
    // 상위요소로의 이벤트전파 차단.
    e.stopPropagation();
    e.target.parentElement.parentElement.remove();
  }, false) // 3번째 매개값의 의미: bubbling, capturing 선택.
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
} // end of makeRow().


// data.js 
// 배열을 활용해서 친구목록 출력.
friendList.forEach((friend) =>
  document.querySelector('#list').appendChild(makeRow(friend)));


// 추가 버튼에 이벤트.
document.querySelector('button.btn.btn-primary') //
  .addEventListener('click', (e) => {

    let name = document.querySelector('input[name="friendName"]').value;
    let phone = document.querySelector('input[name="friendPhone"]').value;
    let birth = document.querySelector('input[name="friendBirth"]').value;
    let bloodType = document.querySelector('select[name="friendBloodType"]').value;
    if (!name || !phone || !birth || !bloodType) {
      alert('필수값을 입력하세요.');
      return;
    }
    let param = {
      name,
      phone,
      birth,
      bloodType
    }
    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    // 입력값 초기화.
    document.querySelector('input[name="friendName"]').value = '';
    document.querySelector('input[name="friendPhone"]').value = '';
    document.querySelector('input[name="friendBirth"]').value = '';
    document.querySelector('select[name="friendBloodType"]').value = 'A';
    // <tr><td>홍길동</td><td>010-1111-1111</td><td>2000-01-01</td></tr>
  });


// 수정버튼에 이벤트.
document.querySelector('button:nth-of-type(2)') //
  .addEventListener('click', (e) => {
    console.log('수정버튼.');
    let listTr = document.querySelectorAll('#list tr')
    let name = document.querySelector('input[name="friendName"]').value;
    let phone = document.querySelector('input[name="friendPhone"]').value;
    let birth = document.querySelector('input[name="friendBirth"]').value;
    let btype = document.querySelector('select[name="friendBloodType"]').value;
    for (let i = 0; i < listTr.length; i++) {
      // 수정할대상 찾기.
      if (listTr[i].children[1].innerHTML == name) {
        // 연락처, 생일, 혈액형.
        listTr[i].children[2].innerHTML = phone;
        listTr[i].children[3].innerHTML = birth;
        listTr[i].children[4].innerHTML = btype;
      }
    }
  }) // end of 수정 이벤트.


// 선택삭제 이벤트.
document.querySelector('button.btn.btn-danger') //
  .addEventListener('click', (e) => {
    // #list input[type="checkbox"]
    document.querySelectorAll('#list tr') //
      .forEach((item) => item.children[0].children[0].checked && item.remove());
    // <tr><td><input></td><td /><td /></tr>
  }); // end of 선택삭제.


// 전체선택 하는 이벤트 추가. change 이벤트.
document.querySelector('thead input[type="checkbox"]') //
  .addEventListener('change', (e) => {
    // console.log(e.target.checked) // input:checkbox => checked 속성.
    // 대상변경: tbody input[type="checkbox"]
    document.querySelectorAll('tbody input[type="checkbox"]') //
      .forEach((item) => item.checked = e.target.checked);
  });


// 정보저장버튼 클릭하면 친구의 정보를 localStorage에 저장.
document.querySelector('button.btn-info').addEventListener('click', e => {
  let ary = [];
  document.querySelectorAll('#list tr').forEach(item => {
    console.log(item);
    let name = item.children[1].innerHTML; // 이름.
    let phone = item.children[2].innerHTML; // 연락처.
    let birth = item.children[3].innerHTML; // 생일.
    let btype = item.children[4].innerHTML; // 생일.
    let obj = {name, phone, birth, btype}
    console.log(obj);
    ary.push(obj);
  });
  console.log(ary);
  let json = JSON.stringify(ary);
  localStorage.setItem('friendList', json);
})
// 