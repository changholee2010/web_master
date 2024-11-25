    // id, pw, name
    const memberData = [{
      id: 'user01',
      pw: '1111',
      name: '사용자1',
      responsibility: 'User'
    }, {
      id: 'user02',
      pw: '2222',
      name: '사용자2',
      responsibility: 'User'
    }, {
      id: 'user03',
      pw: '3333',
      name: '사용자3',
      responsibility: 'Admin'
    }]

    // pcode, pname, price
    const productData = [{
      pcode: 'P001',
      pname: '사과',
      price: 2000,
      rating: 5,
      image: 'apple.jpg'
    }, {
      pcode: 'P002',
      pname: '참외',
      price: 1500,
      rating: 4.5,
      image: 'koreamelon.jpg'
    }, {
      pcode: 'P003',
      pname: '복숭아',
      price: 2500,
      rating: 3,
      image: 'peach.jpg'
    }, {
      pcode: 'P004',
      pname: '수박',
      price: 5000,
      rating: 3,
      image: 'watermelon.jpg'
    }, {
      pcode: 'P005',
      pname: '바나나',
      price: 1500,
      rating: 2.5,
      image: 'banana.jpg'
    }, {
      pcode: 'P006',
      pname: '포도',
      price: 2500,
      rating: 3.5,
      image: 'grape.jpg'
    }, {
      pcode: 'P007',
      pname: '망고',
      price: 3500,
      rating: 4.5,
      image: 'mango.jpg'
    }]

    // id, pcode, qty
    const cartData = [{
      id: 'user01',
      pcode: 'P001',
      qty: 2
    }, {
      id: 'user01',
      pcode: 'P003',
      qty: 5
    }, {
      id: 'user01',
      pcode: 'P002',
      qty: 3
    }, {
      id: 'user02',
      pcode: 'P001',
      qty: 3
    }, {
      id: 'user02',
      pcode: 'P004',
      qty: 2
    }]

    Number.prototype.format = function () {
      // 9123456789 => 9,123,456,789
      // replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      let ok = true;
      if (!ok) {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      let strAry = ('' + this).split('');
      let cnt = strAry.length % 3 - 1; // "," 찍을 위치.
      numStr = strAry.reduce((acc, word, idx) => {
        idx % 3 == cnt ? acc.push(word + ',') : acc.push(word);
        return acc;
      }, []).join('');
      return numStr.length <= 3 ? numStr : numStr.substring(0, numStr.length - 1); // 마지막 문자(,) 제거하기.
    }
    // 12,345,567
    let testNumber = 1234567890;
    console.log(testNumber.format());

    let qtyAry = [1, 2, 3, 4, 5];
    let qty = 3;
    let result = `<begin>${qtyAry.reduce((accm, quantity) => quantity <= qty ? accm + '<svg></svg>' : accm + '', '')}</begin>`;
    console.log(result);