var shopper = {
    name: "Alexander",
    age: 19,
    itemsInCart: 5,
    finishedShopping: true,
    groceryCart: ["Milk", "Eggs", "Bread", "Sugar", "Tea"],
    listCartItems: function () {
        return this.name + " is age " + this.age + " with " + this.itemsInCart + " items in his cart which are: " + this.groceryCart + ".";
    }
};

console.log(shopper.listCartItems());