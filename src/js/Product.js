const Product = (
  prodID,
  productAmount,
  productDescrip,
  productVrUnit,
  productVrTotal
) => `
<div class="products-attributes-noDisplay noPrint">
  <h5>CANTIDAD</h5>
  <h5>DESCRIPCIÓN</h5>
  <h5>VR. UNIT.</h5>
  <h5>VR. TOTAL</h5>
  <h5>Eliminar</h5>
</div>

<input
  type="number"
  value="${productAmount ? productAmount : ""}"
  min="1"
  class="product-attribute product-amount"
/>

<textarea
  placeholder="Description of product"
  class="product-attribute product-descrip"
  wrap="hard"
  cols="52"
  rows="1"
  spellcheck="true"
>${productDescrip ? productDescrip : ""}</textarea>

<div class="product-attribute product-vr-unit">
  <span class="currency-symbol">$</span>
  <input
    type="currency"
    value="${productVrUnit ? productVrUnit : ""}"
    min=0.0
    step="1.0"
    class="product-value"
  >.0</input>
</div>

<div class="product-attribute product-vr-total">
  <span>$</span>
  <input
    type="currency"
    value="${productVrTotal ? productVrTotal : ""}"
    min=0.0
    step="1.0"
    class="product-value"
    >.0</input>
</div>

<button
  id="delete-${prodID}"
  class="product-attribute noPrint delete-product"
>
  del
</button>
`;
