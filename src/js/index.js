let productsRender = 10;
let $products = document.getElementById("products");
/* let $priceSubTotal = document.getElementById("price-subTotal");
let $priceTotal = document.getElementById("price-total"); */
const productsList = Array(productsRender).fill({
  productAmount: 0,
  productDescrip: "",
  productVrUnit: 0.0,
  productVrTotal: 0.0
});

const $$productsListHtml = productsList.map((item, index) => {
  const {
    productAmount,
    productDescrip,
    productVrUnit,
    productVrTotal
  } = item;
  const productId = `product-${index + 1}`;
  const newProduct = document.createElement("article");

  newProduct.setAttribute("id", productId);
  newProduct.classList.add("product");
  newProduct.innerHTML = Product(
    productAmount,
    productDescrip,
    productVrUnit,
    productVrTotal
  );
  /* newProduct.addEventListener("click", () => deleteArticle(productId)); */

  return newProduct;
});

$$productsListHtml.forEach(item => $products.appendChild(item));

/* document.addEventListener("onclick"); */
/* function deleteArticle(itemID) {
  console.info(itemID);
  $products.removeChild(document.getElementById(itemID));
} */

/* const subTotal = Math.round(
  productsList
    .map(item => item.productVrTotal)
    .reduce((amount, value) => amount + value)
); */
/* $priceSubTotal.append(`${subTotal}.0`);
$priceTotal.append(`${subTotal}.0`); */
