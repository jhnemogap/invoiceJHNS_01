let $products = document.getElementById('products');
let $priceSubTotal = document.getElementById('price-subTotal');
let $priceTotal = document.getElementById('price-total');
const templateProduct = () => `
<div class="products-attributes-noDisplay noPrint">
  <h5>CANTIDAD</h5>
  <h5>DESCRIPCIÓN</h5>
  <h5>VR. UNIT.</h5>
  <h5>VR. TOTAL</h5>
  <h5>Eliminar</h5>
</div>

<input
  type="number"
  value="0"
  min="1"
  class="product-attribute product-amount"
/>

<textarea
  placeholder="X"
  class="product-attribute product-descript"
  wrap="hard"
  cols="52"
  rows="1"
  spellcheck="true"
></textarea>

<div class="product-attribute product-vr-unit">
  <span class="currency-symbol">$</span>
  <input
    type="number"
    value="0"
    min="1"
    class="product-value"
  />
</div>

<div class="product-attribute product-vr-total">
  <span>$</span>
  <input
    type="number"
    value="0"
    min="1"
    disabled
    class="product-value"
  />
</div>

<button class="product-attribute noPrint">del</button>
`;

let newProduct = document.createElement('article');
newProduct.setAttribute('id', 'product-0');
newProduct.classList.add('product');
newProduct.innerHTML = templateProduct();
$products.appendChild(newProduct);

newProduct = document.createElement('article');
newProduct.setAttribute('id', 'product-1');
newProduct.classList.add('product');
newProduct.innerHTML = templateProduct();
$products.appendChild(newProduct);

$priceSubTotal.append(`1560000`);
$priceTotal.append(`1560000`);
