/*fetch("products")
  .then(function (products) {
    fetch("categories")
      .then(function (categories) {
        fetch("filters")
          .then(function (filters) {
            fetch("results")
              .then(function (results) {
                renderResults(results);
              })
              .catch(function (err) {
                console.log(err);
              });
          })
          .catch(function (err) {
            console.log(err);
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  })
  .catch(function (err) {
    console.log(err);
  });*/

async function renderData() {
  try {
    var products = await fetch("https://fakestoreapi.com/products");
    var categories = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    var users = await fetch("https://fakestoreapi.com/users");
    console.log(products, categories, users);
  } catch (err) {
    console.log(err);
  }
}

console.log("calling render data");
renderData();
console.log("called render data");
