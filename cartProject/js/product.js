// product.js
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

let productData = JSON.parse(localStorage.getItem('productData'));

productData.forEach(prod => {
  let qty = prod.rating;
  let qtyAry = [1, 2, 3, 4, 5];
  let rating = `style="width: ${(prod.rating/5)*100}%;"`;
  let template = `<div class="col" data-pcode="${prod.pcode}">
                  <div class="product-item">
                    <a href="#" class="btn-wishlist"><svg width="24" height="24">
                        <use xlink:href="#heart"></use>
                      </svg></a>
                    <figure>
                      <a href="index.html" title="Product Title">
                        <img src="images/${prod.image}" class="tab-image">
                      </a>
                    </figure>
                    <h3>${prod.pname}</h3>
                    <span class="qty">1 Unit</span>
                    <span class="rating">
                      <div class="star-ratings">
                        <div class="star-ratings-fill space-x-2 text-lg" ${rating}>
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <div class="star-ratings-base space-x-2 text-lg">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                      </div>
                    </span>
                    <span class="price">${prod.price.format()} 원</span>
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="input-group product-qty">
                        <span class="input-group-btn">
                          <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                            <svg width="16" height="16">
                              <use xlink:href="#minus"></use>
                            </svg>
                          </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1">
                        <span class="input-group-btn">
                          <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                            <svg width="16" height="16">
                              <use xlink:href="#plus"></use>
                            </svg>
                          </button>
                        </span>
                      </div>
                      <a href="#" class="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>`;

  document.querySelector('#nav-tabContent div.product-grid').insertAdjacentHTML('beforeend', template);
})

// cart 링크.
document.querySelectorAll('div.col a.nav-link').forEach(item => {
  // addEvent.
  item.addEventListener('click', e => {
    // cart에 담을 수량 확인.
    let qty = e.target.closest('div.d-flex').children[0].children[1].value;
    console.log(qty);
  })
})