"use strict"
class Hamburger {
    constructor(size) {    
      this.price = size.price;
      this.callories = size.callories;
    }
  
    addTopping(topping){
      this.price += topping.price;
      this.callories += topping.callories;
    }
  
    getPrice(){
       console.log(this.price + "  тугриков");
    }
    getCallories(){
      console.log(this.callories + "  каллорий");
    }
    
}
  
  const SIZE_SMALL = {
      price: 100,
      callories: 500
  }
  const SIZE_BIG = {
      price: 150,
      callories: 1000
  } 
  const TOPPING_MAYO = {
      price: 30,
      callories: 100
  }
  const TOPPING_TOMATOS = {
      price: 30,
      callories: 50
  }
  
  let ham = new Hamburger(SIZE_SMALL);
  ham.addTopping(TOPPING_MAYO);
  ham.addTopping(TOPPING_MAYO);
  ham.addTopping(TOPPING_TOMATOS);
  ham.getPrice();
  ham.getCallories();