/**
 * Create class Product with id, 
 * name and cost and methods for getName, getCost and getId
 */

class Product {
  id: number;
  name: string;
  cost: number;

  constructor(id: number, name: string, cost: number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  getName(): string {
    return this.name;
  }

  getCost(): number {
    return this.cost;
  }

  getId(): number {
    return this.id;
  }
}

class ShoppingCart {
  private static _instance: ShoppingCart;
  private _products: Array<Product> = [];
  private _userId: string = '';

  private constructor(userId: string) {
    this._userId = userId;
  }

  static getInstance(userId: string): ShoppingCart {
    if (!ShoppingCart._instance) {
      ShoppingCart._instance = new ShoppingCart(userId);
    }

    return ShoppingCart._instance;
  }

  get userId(): string {
    return this._userId;
  }

  get products(): Array<Product> {
    return this._products;
  }

  addProduct(product: Product) {
    this._products.push(product);
  }

  removeProduct(product: Product) {
    this._products = this._products.filter((p) => p.id!== product.id);
  }
}

function appShoppingCart() {
  console.log('--- [TS] Calling appShoppingCart ---\n');
  const shoppingCart = ShoppingCart.getInstance('user-1');
  // const shoppingCart2 = ShoppingCart.getInstance('user-1');
  const product1 = new Product(1, 'Product 1', 100);
  const product2 = new Product(2, 'Product 2', 200);
  shoppingCart.addProduct(product1);
  shoppingCart.addProduct(product2);
  console.log(shoppingCart.products);
  // console.log(shoppingCart._userId);
  // console.log(shoppingCart2._userId);
  shoppingCart.products.pop();
  console.log(shoppingCart.products);
  
}

appShoppingCart();