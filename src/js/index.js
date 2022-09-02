let productsRender = 11;
let $products = document.getElementById("products");
/* let $priceSubTotal = document.getElementById("price-subTotal");
let $priceTotal = document.getElementById("price-total"); */
const productsList = Array(productsRender).fill({
  productAmount: 0,
  productDescription: "",
  productVrUnit: 0.0,
  productVrTotal: 0.0
});

const $$productsListHtml = productsList.map((item, index) => {
  const {
    productAmount,
    productDescription,
    productVrUnit,
    productVrTotal
  } = item;
  const productId = `product-${index + 1}`;
  const newProduct = document.createElement("article");

  newProduct.setAttribute("id", productId);
  newProduct.classList.add("product");
  newProduct.innerHTML = Product(
    productId,
    productAmount,
    productDescription,
    productVrUnit,
    productVrTotal,
  );

  return newProduct;
});

$$productsListHtml.forEach(item => $products.appendChild(item));

const $deleteButtons = Array.from(document.getElementsByClassName("delete-product"));

$deleteButtons.forEach(article => {
  const prodId = article.getAttribute("id").replace("delete-", "");
  article.addEventListener("click", () => deleteArticle(prodId));
})

function deleteArticle(itemID) {
  $products.removeChild(document.getElementById(itemID));
}

/* const subTotal = Math.round(
  productsList
    .map(item => item.productVrTotal)
    .reduce((amount, value) => amount + value)
); */
/* $priceSubTotal.append(`${subTotal}.0`);
$priceTotal.append(`${subTotal}.0`); */
