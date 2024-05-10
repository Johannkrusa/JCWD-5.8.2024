// ======= exercise ======

// query 1 

function calculateAge(birthDate){
    return Math.floor((new Date() - birthDate) / (365 * 24 * 60 * 60 * 1000)); 
}

function calculateDataStudent(arrStudent){

    let result = {
        score:{
            highest:arrStudent[0].score,
            lowest:arrStudent[0].score,
            avg:0
        },
        age:{
            highest:calculateAge(arrStudent[0].birthdate), 
            lowest:calculateAge(arrStudent[0].birthdate), 
            avg:0
         }
    }

    for(var i = 0; i <= arrStudent.length-1; i++){ 
        if(arrStudent[i].score > result.score.highest){
            result.score.highest = arrStudent[i].score;
        }
        if(arrStudent[i].score < result.score.lowest){
            result.score.lowest = arrStudent[i].score;
        }   
        result.score.avg += arrStudent[i].score;

        let age = calculateAge(arrStudent[i].birthdate); 
        if(age > result.age.highest ){
            result.age.highest = age; 
        }
        if(age < result.age.lowest){
            result.age.lowest = age;
        }   
        result.age.avg += age;
    }
    result.score.avg /= arrStudent.length; 
    result.age.avg  /= arrStudent.length;

    return result;
}

console.log(calculateDataStudent([
    {
        name:"Jasmine",
        email:"Jasminetumaru@gmail.com",
        birthdate: new Date("1995-10-30"),
        score: 100
    },
    {
        name:"Josephine",
        email:"josephinealice@gmail.com",
        birthdate: new Date("1989-11-12"),
        score: 56
    },
    {
        name:"Geraldine",
        email:"geraldinesmith@gmail.com",
        birthdate: new Date("1986-05-10"),
        score: 90
    },
    {
        name:"Murphy",
        email:"hellomurphy@gmail.com",
        birthdate: new Date("1999-03-15"),
        score: 94
    },
    {
        name:"Emily",
        email:"Emilyruthhs@gmail.com",
        birthdate: new Date("1999-05-23"),
        score: 70
    },
]));


// query 2

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    constructor() {
        this.total = 0;
        this.products = [];
        this.qty = {};
    }

    addToCart(product, quantity = 1) {
        if (!(product instanceof Product)) {
            console.log("Invalid product");
            return;
        }
        if (this.qty[product.name]) {
            this.qty[product.name] += quantity;
        } else {
            this.qty[product.name] = quantity;
            this.products.push(product);
        }
        this.total += product.price * quantity;
    }

    showTotal() {
        console.log("Current Transaction Total: $" + this.total.toFixed(2));
    }

    checkout() {
        console.log("Transaction finalized.");
        console.log("Total: $" + this.total.toFixed(2));
        console.log("Products:");
        for (let i = 0; i < this.products.length; i++) {
            console.log(this.qty[this.products[i].name] + "x " + this.products[i].name + " - $" + (this.products[i].price * this.qty[this.products[i].name]).toFixed(2));
        }
        return {
            total: this.total,
            products: this.products,
            qty: this.qty
        };
    }
}

// Example usage:

// Create some products
let product1 = new Product("Laptop", 1200);
let product2 = new Product("Mouse", 30);
let product3 = new Product("Keyboard", 50);

// Create a transaction
var transaction = new Transaction();

// Add products to the transaction
transaction.addToCart(product1, 2);
transaction.addToCart(product2);
transaction.addToCart(product3, 3);

// Show current total
transaction.showTotal(); // Output: Current Transaction Total: $2430.00

// Checkout
let transactionData = transaction.checkout();


class Product2 { 
    #name = '';
    #price = 0;

    set setName(name){
        if(!name){
            return "Name is invalid";
        }
        else if (name.length <= 3) {
            return "Name is too short, must be more than 3 characters";
        }
        else {
            this.#name = name;
        }
    }

    get getName() {
        return this.#name;
    }

    set setPrice(price) {
        if(typeof(price) != "number"){
            return "price  is invalid";
        }
        else{
            this.#price = price;
        }
    }

    get getPrice() {
        return this.#price;
    }

    static warehouse = [];
}

class Transaction2 {
    #total = 0;
    cart = [];

    addToCart(product, qty = 1) {
        this.cart.push({ product: product.getName, quantity : qty , total: (product.getPrice*qty)});
        this.#total += product.getPrice * qty;
    }

    showTotal() {
        return this.#total;
    }

    checkout() {
        const transactionData = {
            total: this.#total,
            cart: this.cart
        };
        return transactionData;
    }
}

let rtx_3060 = new Product2();
rtx_3060.setName = "rtx 3060 12gb msi";
rtx_3060.setPrice = 6000000;
Product2.warehouse.push(rtx_3060);

let rtx_3070 = new Product2();
rtx_3070.setName = "rtx 3070 12gb galax";
rtx_3070.setPrice = 8000000;
Product2.warehouse.push(rtx_3070);

let rtx_3090 = new Product2();
rtx_3090.setName = "rtx 3090 16gb colorful";
rtx_3090.setPrice = 12000000;
Product2.warehouse.push(rtx_3090);

console.log(Product2.warehouse);

let transaction2 = new Transaction2();
transaction2.addToCart(rtx_3060, 2);
transaction2.addToCart(rtx_3070);
console.log("Total: ", transaction2.showTotal());
console.log("Checkout: ", transaction2.checkout());

