function showLoader() {
  var loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.remove("hide");
  }
}

function hideLoader() {
  var loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.add("hide");
  }
}

function onResponse(response) {
  return response.json();
}

function onError(err) {
  console.error("Error while fetching products...", err);
}

function fetchProducts() {
  showLoader();
  fetch("https://fakestoreapi.com/products")
    .then(onResponse)
    .then(renderProducts)
    .catch(onError)
    .finally(hideLoader);
}

async function fetchProductsAsync() {
  showLoader();
  try {
    var response = await fetch("https://fakestoreapi.com/products");
    var data = await response.json();
    renderProducts(data);
    hideLoader();
  } catch (err) {
    onError(err);
    hideLoader();
  }
}

function fetchProductsWithXHR() {
  showLoader();
  // Create a new XHR object
  var request = new XMLHttpRequest();
  // Open a new request
  request.open("GET", "https://fakestoreapi.com/products");
  // Handle the ready state change event
  request.addEventListener("readystatechange", function (__) {
    // When the request is complete and status is OK
    if (request.readyState == 4 && request.status == 200) {
      // Get the response text
      var responseText = request.responseText;
      // Convert the response to JSON
      var data = JSON.parse(responseText);
      // render the products
      renderProducts(data);
    }
  });
  // Handle the progress event
  request.addEventListener("loadend", function (__) {
    hideLoader();
  });
  // Send the request
  request.send();
}

function renderProducts(products) {
  if (products && products.length) {
    var productsWrapper = document.querySelector(".products-wrapper");
    for (var product of products) {
      // Create the image element
      var image = document.createElement("img");
      image.src = product.image;
      image.alt = product.title;

      // Create the title element
      var title = document.createElement("span");
      title.innerText = product.title;

      // Create the price element
      var price = document.createElement("span");
      price.innerText = "£" + product.price;

      // Create the product wrapper element
      var productWrapper = document.createElement("div");
      productWrapper.classList.add("product-wrapper");

      // Append the image, title and price to the product-wrapper
      productWrapper.appendChild(image);
      productWrapper.appendChild(title);
      productWrapper.appendChild(price);

      // Append the product-wrapper to the products container
      productsWrapper.appendChild(productWrapper);
    }
  }
}

//fetchProductsAsync();
fetchProductsWithXHR();
