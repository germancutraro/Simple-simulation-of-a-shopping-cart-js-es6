class Cart {
  constructor (article) {
    this.article = article;
    this.items = {};
  }
  addItem (article, count) {
    this.items[article] = count;
  }
  removeItem (article) {
    delete this.items[article];
  }
  seeItems () {
    for(let k in this.items) {
      console.log(`${k} | ${this.items[k]}`);
    }
  }
}

const books = new Cart('Philosophy Books');
console.log(`Items of ${books.article}`);
books.addItem('Metaphysics of Aristotle', 1);
books.addItem('Plato', 2);
books.addItem('Socrates', 1);
books.addItem('Edison', 1);
books.removeItem('Edison');
books.seeItems();
