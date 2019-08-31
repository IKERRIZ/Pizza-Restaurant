var totalCosts = [];

function order(size, crust, meatyTopping, veggyTopping ){
    this.size = size;
    this.crust = crust;
    this.meatyTopping = meatyTopping;
    this.veggyTopping = veggyTopping;
    this.price = 0;

}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaMeatyTopping = ["Peperonni", "Sausage", "Chicken",];
var pizzaveggyTopping = ["Onion", "Pineapple", "Spinach",];

order.prototype.cost = function(){
    if (this.size === pizzaSize[0]){
        this.price += 300;
    }
    else if (this.size === pizzaSize[1]){
        this.price += 500;
    }
    else if (this.size === pizzaSize[2]){
        this.price += 600;
    }

    if (this.crust === pizzaCrust[0]){
        this.price += 100;
    }
    else if (this.crust === pizzaCrust[1]){
        this.price += 130;
    }
    else if (this.crust === pizzaCrust[2]){
        this.price += 150;
    }

    if (this.meatyTopping === pizzaMeatyTopping[0]){
        this.price += 100;
    }
    else if (this.meatyTopping === pizzaMeatyTopping[1]){
        this.price += 100;
    }
    else if (this.meatyTopping === pizzaMeatyTopping[2]){
        this.price += 100;
    }


    if (this.veggyTopping === pizzaveggyTopping[0]){
        this.price += 100;
    }
    else if (this.veggyTopping === pizzaveggyTopping[1]){
        this.price += 100;
    }
    else if (this.veggyTopping === pizzaveggyTopping[2]){
        this.price += 100;
    }

    return this.price;

}
