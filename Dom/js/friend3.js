//추가 버튼에 이벤트.

function makeRow(friendInfo = {
  name,
  phone,
  birth
}) {
  let tr = document.createElement('tr');
  for (let prop in friendInfo) {
    let td = document.createElement('td');
    let fname = friendInfo[prop];
    td.innerHTML = fname; //<td> 홍길동 </td>
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}

document.querySelector('button.btn.btn-primary')
  .addEventListener('click', (e) => {

    let fname = document.querySelector('input[name="friendName"]').value;
    let ftel = document.querySelector('input[name="friendPhone"]').value;
    let fbirth = document.querySelector('input[name="friendBirth"]').value;
    
    // console.log(querySelector);

    if (!fname || !ftel || !fbirth) {
      alert('필수값을 입력하세요');
      return;
    }
    let param = {
      name: fname,
      phone: ftel,
      birth: fbirth
    }

    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    document.querySelector('input[name="friendName"]').value = '';
  });



// let tr = document.createElement('tr');

// //이름.
// let td = document.createElement('td');
// td.innerHTML = fname; //<td> 홍길동 </td>
// tr.appendChild(td);


// //연락처.
// td = document.createElement('td');
// let ftel = document.querySelector('input[name="friendPhone"]').value;
// td.innerHTML = ftel; //<td> 홍길동 </td>
// tr.appendChild(td);

// //생일.
// td = document.createElement('td');
// let fbirth = document.querySelector('input[name="friendBirth"]').value;
// td.innerHTML = fbirth; //<td> 홍길동 </td>
// tr.appendChild(td);


// <tr></tr>