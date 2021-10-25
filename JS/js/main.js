
let mainApp = null;

class main {

  constructor() {
  }

  shoppingCart = new ShoppingCart();
  recommendedProducts = new RecommendedProducts(".newproductslist");
  searchProducts = new SearchProducts(".listproducts");

  init() {
    let db = new DataBase();
    db.getRecentProducts().then((recentProducts) => {
      this.recommendedProducts.addProducts(recentProducts);
    }).catch((reason) => {
    })

    db.getAllProducts().then((recentProducts) => {
      this.searchProducts.addProducts(recentProducts);
    }).catch((reason) => {
    })

    $(".searchButton").on('click', () => {
      let searchTerm = $(".searchInput").val();

      this.performSearch(searchTerm);
    })

    $(".cart .Action").on('click', () => {
      $(".customercart").empty();
      this.shoppingCart.updateCheckoutPrice();
    });
  }

  performSearch(searchTerm) {
    let db = new DataBase();
    db.searchProducts(searchTerm).then((searchedProducts) => {
      this.searchProducts.addProducts(searchedProducts);
    }).catch((reason) => {

    })
  }

  get cart() {
    return this.shoppingCart;
  }

}


$(function () {
  mainApp = new main();
  mainApp.init();
});
