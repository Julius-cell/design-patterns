

// Create class Product with id, name and cost and methods for getName, getCost and getId
class Product {
  constructor(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;

    return {
      id: this.id,
      name: this.name,
      cost: this.cost,
    }
  }

  getName() {
    return this.name;
  }

  getCost() {
    return this.cost;
  }

  getId() {
    return this.id;
  }
}

class ShoppingCart {
  static _instance = undefined;
  _products = [];

  constructor(userId) {
    this._userId = userId;
  }

  static getInstance(userId) {
    if (!ShoppingCart._instance) {
      ShoppingCart._instance = new ShoppingCart(userId);
    }

    return ShoppingCart._instance;
  }

  get userId() {
    return this._userId;
  }

  addProduct(product) {
    this._products.push(product);
  }

  deleteProductById(id) {
    this._products = this._products.filter((product) => product.id!== id);
  }

}

function appShoppingCart() {
  // Create a new shopping cart with two products
  // const shoppingCartUser1 = ShoppingCart.getInstance('userId-1');
  // const product1 = new Product('BK001', 'Design Patterns: Elements of Reusable Object-Oriented Software', 750);
  // const product2 = new Product('BK002', 'Introduction to Algorithms', 1000);
  // shoppingCartUser1.addProduct(product1);
  // shoppingCartUser1.addProduct(product2);

  // console.log(shoppingCartUser1.userId);
  // console.log(shoppingCartUser1._products);
  // shoppingCartUser1.deleteProductById('BK001');
  // console.log(shoppingCartUser1._products);

  const shoppingCart = ShoppingCart.getInstance('userId-1');
  const shoppingCart2 = new ShoppingCart('userId-2');
  console.log(shoppingCart.userId);
  console.log(shoppingCart2.userId);
}

appShoppingCart();