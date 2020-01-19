let $products = document.getElementById('products');

let newProduct = document.createElement('article');
newProduct.setAttribute('id', 'product-0');
newProduct.classList.add('product');
newProduct.innerHTML = `
    <p class="product__amount">100</p>
    <p class="product__descrip">El producto 1 con no se que cositas</p>
    <p class="product__vr-unit"><span>$</span>15200</p>
    <p class="product__vr-total"><span>$</span>1520000</p>
    <p class="noPrint">S</p>
  `;
$products.appendChild(newProduct);

newProduct = document.createElement('article');
newProduct.setAttribute('id', 'product-1');
newProduct.classList.add('product');
newProduct.innerHTML = `
    <p class="product__amount">8</p>
    <p class="product__descrip">El producto 2 con no se que cositas xder</p>
    <p class="product__vr-unit"><span>$</span>5000</p>
    <p class="product__vr-total"><span>$</span>40000</p>
    <p class="noPrint">N</p>
  `;
$products.appendChild(newProduct);
