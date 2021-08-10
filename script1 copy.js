function Burger (info){
    
  this.price = info.price;
  this.calories = info.calories;

  this.getPrice = function (){
      return this.price;
  }
  this.getCalories = function() {
      return this.calories;
  }

  this.addPotato = function() {
      this.price += potato.price;
      this.calories += potato.calories;
  }

  this.addSalad = function() {
      this.price += salad.price;
      this.calories += salad.calories;
  }
  this.addCheese = function() {
    this.price += cheese.price;
    this.calories += cheese.calories;
}
  this.addMayonnaise = function() {
    this.price += mayonnaise.price;
    this.calories += mayonnaise.calories;
  }
  this.addSpice = function() {
    this.price += spice.price;
    this.calories += spice.calories;
  }
}

const potato = {
  type: 'potato',
  price: 15,
  calories: 10
}
const salad = {
  type: 'salad',
  price: 20,
  calories: 5
}
const cheese= {
  type: 'cheese',
  price: 10,
  calories: 20
}
const mayonnaise = {
  type: 'mayonnaise',
  price: 20,
  calories: 5
}
const spice = {
  type: 'spice',
  price: 15,
  calories: 0
}
const sizeSmall = {
  type: 'small',
  price: 50,
  calories: 20
}

const sizeMedium = {
  type: 'medium',
  price: 75,
  calories: 30
}
const sizeLarge = {
  type: 'large',
  price: 100,
  calories: 40
}

let burgerSmall = new Burger(sizeSmall);
console.log("Price small burger" + burgerSmall.getPrice())
console.log("Calories small burger" + burgerSmall.getCalories())

let burgerMedium = new Burger(sizeMedium)
console.log("Price medium burger" + burgerMedium.getPrice())
console.log("Calories medium burger" + burgerMedium.getCalories())

let burgerLarge = new Burger(sizeLarge)
console.log("Price large burger" + burgerLarge.getPrice())
console.log("Calories large burger" + burgerLarge.getCalories())

burgerMedium.addSalad();
burgerMedium.addCheese();
burgerMedium.addCheese();
burgerMedium.addSpice();

console.log("Price medium burger with salad, spise and double cheese" + burgerMedium.getPrice())
console.log("Calories medium burger with salad, spise and double cheese" + burgerMedium.getCalories())