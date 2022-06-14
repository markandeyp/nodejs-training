function myPromise() {
  return new Promise(function (resolve, reject) {
    for (i = 1; i <= 1000; i++) {
      //doing something long running
    }
    if (i == 1001) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

function toJson(response) {
  return response.json();
}

function success(value) {
  var productDiv = document.getElementById("products");
  for (prod of value) {
    var title = document.createElement("h5");
    title.innerText = prod.title;
    productDiv.appendChild(title);
    var img = document.createElement("img");
    img.src = prod.image;
    img.style.height = "100px";
    img.style.width = "100px";
    productDiv.appendChild(img);
  }
}

function failure(err) {
  console.log("failure err:", err);
}

fetch("https://fakestoreapi.com/products")
  .then(toJson)
  .then(success)
  .catch(failure);
