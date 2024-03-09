// Food.js
export class Food {
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  // Method to update the quantity
  updateQuantity(newQuantity) {
    this.quantity = newQuantity
  }

  // Optional: A method to display food information
  displayInfo() {
    console.log(
      `${this.name}: Price - $${this.price}, Quantity - ${this.quantity}`
    )
  }
}
